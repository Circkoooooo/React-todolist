import React, { useState } from 'react'
import './MainTodo.less'
import type { Todo, TodoAddition } from '../../types/Todo'
import { TodoContext } from '../../pages/Home'
interface IProps {
	TodoItem: Todo,
}

const MainTodo = (props: IProps) => {
	const renderDone = props.TodoItem.isDone ? (<img src='../../../icon/check.svg'></img>) : (<></>)
	const { setDoneStatus } = React.useContext(TodoContext)
	const [todo, setTodo] = useState(props.TodoItem)
	/**
	 * 附加内容参数的配置。
	 * content:主要内容
	 */
	const [contentConfig, setContentConfig] = useState<TodoAddition>([
		{
			name: 'content',
			value: todo.content as string,
		}
	])
	const [enter, setEnter] = useState(false)
	/**
	 * 标题组件
	 * @returns 
	 */
	const TitleContent = () => {
		return (
			<div className='todo_title'>{todo.title}</div>
		)
	}

	/**
	 * 附加内容组件
	 * @returns 
	 */
	const AdditionalContent = (props: { isEnter: boolean }) => {
		const list = contentConfig.map((item, index) => {
			return (<div key={index} className={'addition' + ' ' + 'addition_' + item.name}>{item.value}</div>)
		})
		return (
			<div className='todo_addition'>
				{list}
				{props.isEnter ? <img className='addition addition_add' src="/icon/addto.png" /> : <></>}
			</div>
		)
	}
	/**
	 * 判断鼠标是否移动进入content中，更新一次页面
	 * @param status 
	 * @returns 
	 */
	const mouseStatus = (status: 'enter' | 'leave') => {
		return () => {
			if (status === 'enter') {
				setEnter(true)
			} else {
				setEnter(false)
			}
		}
	}
	return (
		<div className='main_todo' onMouseEnter={mouseStatus('enter')} onMouseLeave={mouseStatus('leave')}>
			<div className='todo_text'>
				<div className='todo_menu'>
					<div className='todo_button' onClick={() => setDoneStatus(todo.id)}>{renderDone}</div>
				</div>
				<div className='text_info'>
					<div className='todo_id'>{todo.id}</div>
				</div>
				<div className='text_content'>
					<TitleContent></TitleContent>
					<AdditionalContent isEnter={enter}></AdditionalContent>
				</div>
			</div>
		</div >
	)
}
export default MainTodo