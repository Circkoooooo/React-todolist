import React from 'react'
import './MainTodo.css'
import type { Todo } from '../../types/Todo'
interface IProps {
	TodoItem: Todo,
	setDoneStatus: (id: number) => void
}
const MainTodo = (props: IProps) => {
	const renderDone = props.TodoItem.isDone ? (<img src='../../../icon/check.svg'></img>) : (<></>)

	const setDone = () => {
		props.setDoneStatus(props.TodoItem.id)
	}
	return (
		<div className='main_todo'>
			<div className='todo_menu'>
				<div className='todo_button' onClick={setDone}>{renderDone}</div>
			</div>
			<div className='todo_text'>
				<div className='todo_title'>{props.TodoItem.title}</div>
				<div className='todo_content'>{props.TodoItem.content}</div>
			</div>
		</div >
	)
}
export default MainTodo