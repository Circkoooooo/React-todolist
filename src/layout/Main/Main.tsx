import React from 'react'
import MainTitle from '../../components/MainTitle/MainTitle'
import MainTodo from '../../components/MainTodo/MainTodo'
import type { Todo } from '../../types/Todo'


interface IProps {
	title: string,
	todos: Todo[],
}

const Main = (props: IProps) => {
	const todoList = props.todos.map((item, index) => {
		return (
			<MainTodo key={index} TodoItem={item} ></MainTodo>
		)
	})

	return (
		<div className='main'>
			<div className='todo'>
				<MainTitle title={props.title}></MainTitle>
				{todoList}
			</div>
		</div>
	)
}
export default Main