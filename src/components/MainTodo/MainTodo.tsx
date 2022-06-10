import React from 'react'
import './MainTodo.css'
import type { Todo } from '../../types/Todo'
import { TodoContext } from '../../pages/Home'
interface IProps {
	TodoItem: Todo,
}

const MainTodo = (props: IProps) => {
	const renderDone = props.TodoItem.isDone ? (<img src='../../../icon/check.svg'></img>) : (<></>)
	const { setDoneStatus } = React.useContext(TodoContext)

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
					<div className='todo_title'>{props.TodoItem.title}</div>
					<div className='todo_content'>{props.TodoItem.content}</div>
				</div>
			</div>
		</div >
	)
}
export default MainTodo