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
	const click = (event: React.MouseEvent) => {
		todo.addTodo(newTodo())
		console.log(event)
	}
	return (
		<div className='main_title' >
			{props.title}
			< div className='title_menu' >
				<Button content='点击增加' onClick={(event) => click(event)}></Button>
			</div >
		</div >
	)

}

export default MainTitle