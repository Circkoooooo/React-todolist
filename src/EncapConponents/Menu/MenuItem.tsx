import React from 'react'
import classnamespace from '../classnamespace'

export interface MenuItemProps {
	classPrefix?: string,
	label: string,
	key?: React.Key,
	retraction?: number,//缩进的像素大小
	isSubMenu?: boolean
}

const InternalMenuItem: React.ForwardRefRenderFunction<unknown, MenuItemProps> = (props, ref) => {
	const { classPrefix, label, isSubMenu, retraction } = props

	return (
		!isSubMenu ?
			<div className={`${classPrefix}-item`} style={{ paddingLeft: retraction ?? retraction + 'px' }}> {label}</div >
			:
			<div className={`${classPrefix}-submenu-title`} style={{ paddingLeft: retraction ?? retraction + 'px' }}>
				{label}
			</div>
	)
}

const MenuItem = React.forwardRef<unknown, MenuItemProps>(InternalMenuItem)
MenuItem.defaultProps = {
	classPrefix: classnamespace.menu,
	isSubMenu: false,
	retraction: 100
}
export default MenuItem