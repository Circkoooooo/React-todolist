import React from 'react'
import { Todo } from '../../types/Todo'
import Aside from '../Aside/Aside'
import Main from '../Main/Main'
interface IProps {
	todos: Todo[],
}
const Content = (props: IProps) => {
	const todoTitle = 'Today'

	return (
		<div className='content'>
			<Aside></Aside>
			<Main title={todoTitle} todos={props.todos}></Main>
		</div >
	)
}

export default Content