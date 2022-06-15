export type Todo = {
	id: number
	title?: string
	content?: string
	isDone: boolean
}
export type TodoAddition = Array<{
	name?: string
	icon?: string
	value?: string
}>
