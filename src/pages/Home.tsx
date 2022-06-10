import React, { useState } from 'react'
import Header from '../layout/Header/Header'
import Content from '../layout/Content/Content'
import { Todo } from '../types/Todo'
interface TodoContext {
	addTodo: (todo: Todo) => void
	setDoneStatus: (id: number) => void
}
export const TodoContext = React.createContext({} as TodoContext)
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
		setTodos(
			todos.map((item) => {
				if (item.id === id) {
					item.isDone === false ? item.isDone = true : item.isDone = false
				}
				return item
			})
		)
	}
	// 增加代办事项
	const addTodo = (todo: Todo): void => {
		// 查看是否id冲突
		if (todos.find((item) => item.id === todo.id)) {
			return
		}
		//判断是否没有指定id
		if (todo.id === undefined || todo.id === null) {
			//简单用数组长度作为id
			todo.id = todos.length + 1
		}
		setTodos([...todos, todo])

	}
	return (
		<div className='container'>
			<Header></Header>
			<TodoContext.Provider value={{ addTodo: addTodo, setDoneStatus: setDoneStatus }}>
				<Content todos={todos}></Content>
			</TodoContext.Provider>
		</div >
	)
}
export default Home