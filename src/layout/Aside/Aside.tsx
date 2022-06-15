import React from 'react'
import Menu from '~/EncapConponents/Menu'

const Aside = () => {
	const items = [{
		lable: '待办',
		key: 'menu-today',
		children: [
			{
				label: 'Today',
				key: 'menu-todo',
			},
			{
				label: 'Clock',
				key: 'menu-clock',
			}
		]
	},
	{
		lable: '日程',
		key: 'menu-schedule',
		children: [
			{
				label: 'Todo',
				key: 'schedule-todo',
			}
		]
	}]

	return (
		<div className='aside'>
			< Menu items={items} ></Menu>
		</div>
	)
}

export default Aside