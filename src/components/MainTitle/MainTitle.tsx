import React from 'react'
import { Todo } from '../../types/Todo'
import './MainTitle.less'
import { TodoContext } from '../../pages/Home'
import { Button } from '../../EncapConponents'

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
	const click = () => {
		todo.addTodo(newTodo())

	}
	return (
		<div className='main_title' >
			{props.title}
			< div className='title_menu' >
				<Button content='点击增加' onClick={click}></Button>
				{/* <button onClick={() => todo.addTodo(newTodo())} > 点击增加</button> */}
			</div >
		</div >
	)

}

export default MainTitle