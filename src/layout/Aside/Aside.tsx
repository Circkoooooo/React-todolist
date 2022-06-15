import React from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group',
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem
}
const items: MenuProps['items'] = [
	getItem('代办', 'todo', <></>, [
		getItem('Today', 'todo-today', null, [], 'group')
	])
]
const Aside = () => {
	return (
		<div className='aside'>
			<Menu
				// style={{ width: '100%' }}
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode="inline"
				items={items}></Menu>
		</div>
	)
}

export default Aside