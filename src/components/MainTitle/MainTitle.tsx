import React from 'react'
import { Todo } from '../../types/Todo'
import './MainTitle.css'
import { TodoContext } from '../../pages/Home'

interface IProps {
	title: string,
}
const MainTitle = (props: IProps) => {
	const todo = React.useContext(TodoContext)

	const newTodo = (): Todo => {
		return {
			title: '测试添加',
			content: '添加',
			isDone: false
		} as Todo
	}
	return (
		<div className='main_title' >
			{props.title}
			< div className='title_menu' >
				<button onClick={() => todo.addTodo(newTodo())} > 点击增加</button>
			</div >
		</div >
	)

}

export default MainTitle