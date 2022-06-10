import React, { useState } from 'react'
import Header from '../layout/Header/Header'
import Content from '../layout/Content/Content'
import { Todo } from '../types/Todo'


const Home = () => {
	const [todos, setTodos] = useState<Todo[]>(
		[
			{
				id: 1,
				title: '代办1',
				content: '代办1内容',
				isDone: false
			},
			{
				id: 2,
				title: '代办2',
				content: '代办2内容',
				isDone: false
			},
			{
				id: 3,
				title: '代办3',
				content: '代办3内容',
				isDone: false
			}
		]
	)
	const setDoneStatus = (id: number): void => {
		const index = todos.findIndex(item => {
			return item.id === id
		})
		setTodos(
			todos.map((item, i) => {
				if (i === index) {
					item.isDone === false ? item.isDone = true : item.isDone = false
				}
				return item
			})
		)
	}
	return (
		<div className='container'>
			<Header></Header>
			<Content setDoneStatus={setDoneStatus} todos={todos}></Content>
		</div>
	)
}
export default Home