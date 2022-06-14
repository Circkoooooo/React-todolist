import classNames from 'classnames'
import * as React from 'react'
import classnamespace from '../classnamespace'
import './Menu.less'
interface ChildProps {
	label: string,
	key: string
}
interface MenuProps {
	items: {
		lable: string,
		key: string,
		children?: ChildProps[]
	}[]
}
const InternalMenu: React.ForwardRefRenderFunction<unknown, MenuProps> = (props, ref) => {
	const componentClass = classnamespace.menu
	const [hidden, setHidden] = React.useState(false)
	
	const menuClass = classNames(
		componentClass
	)
	const childClassStr = classNames(
		`${componentClass}-item`,
		hidden ? `${componentClass}-hidden` : ''
	)

	const { items } = props

	const renderChild = (children: ChildProps[]) => {
		return children.map(item => {
			return (
				<ul key={item.key} className={childClassStr}>
					<li >{item.label}</li>
				</ul>
			)
		})
	}

	const changeHidden = () => {
		setHidden(!hidden)
	}
	const renderItems = items.map(item => {
		return (
			<li key={item.key} >
				<div className={`${componentClass}-submenu-title`} onClick={changeHidden}>
					{item.lable}
				</div>
				{item.children ? renderChild(item.children) : null}
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