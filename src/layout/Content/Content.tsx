import React from 'react'
import { Todo } from '../../types/Todo'
import Aside from '../Aside/Aside'
import Main from '../Main/Main'
import Menu from '~/EncapConponents/Menu'

interface IProps {
	todos: Todo[],
}
const Content = (props: IProps) => {
	const todoTitle = 'Today'

	const items = [{
		lable: '待办',
		key: 'menu-today',
		children: [
			{
				label: 'Today',
				key: 'menu-today-todo',
			}
		]
	}]
	return (
		<div className='content'>
			<Aside>
				<Menu items={items}></Menu>
			</Aside>
			<Main title={todoTitle} todos={props.todos}></Main>
		</div >
	)
}

export default Content