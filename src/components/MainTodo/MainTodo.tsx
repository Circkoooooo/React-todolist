import React from 'react'
import './MainTodo.css'
import type { Todo, TodoAddition } from '../../types/Todo'
import { TodoContext } from '../../pages/Home'
interface IProps {
	TodoItem: Todo,
}


const MainTodo = (props: IProps) => {
	const renderDone = props.TodoItem.isDone ? (<img src='../../../icon/check.svg'></img>) : (<></>)
	const { setDoneStatus } = React.useContext(TodoContext)
	/**
	 * 附加内容参数的配置。
	 * content:主要内容
	 */
	const contentConfig: TodoAddition = [{
		name: '主要内容',
		value: props.TodoItem.content as string
	}]

	/**
	 * 标题组件
	 * @returns 
	 */
	const TitleContent = () => {
		return (
			<div className='todo_title'>{props.TodoItem.title}</div>
		)
	}

	/**
	 * 附加内容组件
	 * @returns 
	 */
	const AdditionalContent = () => {
		const list = contentConfig.map((item, index) => {
			return (<div key={index}>{item.value}</div>)
		})
		return (
			<div className='todo_content'>
				{list}
			</div>
		)
	}
	return (
		<div className='main_todo'>
			<div className='todo_menu'>
				<div className='todo_button' onClick={() => setDoneStatus(props.TodoItem.id)}>{renderDone}</div>
			</div>
			<div className='todo_text'>
				<div className='text_info'>
					<div className='todo_id'>{props.TodoItem.id}</div>
				</div>
				<div className='text_content'>
					<TitleContent></TitleContent>
					<AdditionalContent></AdditionalContent>
				</div>
			</div>
		</div >
	)
}
export default MainTodo