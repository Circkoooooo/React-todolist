import classNames from 'classnames'
import * as React from 'react'
import classnamespace from '../classnamespace'
import './Menu.less'
import MenuItem, { MenuItemProps } from './MenuItem'

interface MenuProps {
	items: {
		lable: string,
		key?: React.Key,
		children?: MenuItemProps[]
	}[]
}
const InternalMenu: React.ForwardRefRenderFunction<unknown, MenuProps> = (props, ref) => {
	const componentClass = classnamespace.menu
	const { items } = props
	const menuClass = classNames(
		componentClass
	)

	const childClassStr = classNames(
		`${componentClass}-child`,
	)

	const renderChild = (children: MenuItemProps[]) => {
		return children.map((item, index) => {
			return (
				<MenuItem label={item.label} key={index} isSubMenu={false} ></MenuItem>
			)
		})
	}

	const renderItems = items.map((item, index) => {
		return (
			<li key={index} >
				<MenuItem label={item.lable} isSubMenu={true}></MenuItem>
				{
					item.children && item.children.length !== 0 ?
						<ul className={childClassStr} >
							{renderChild(item.children)}
						</ul> : <></>
				}
			</li >
		)
	})
	return (
		<ul className={menuClass}>
			{renderItems}
		</ul>
	)
}
const Menu = React.forwardRef<unknown, MenuProps>(InternalMenu)

export default Menu