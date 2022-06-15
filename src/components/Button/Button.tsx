import * as React from 'react'
import './Button.less'
import classnames from 'classnames'
export interface ButtonProps {
	value?: string
	type?: 'default' | 'primary'
	onClick?: (event?: React.MouseEvent) => void
}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
	const { type, value, onClick } = props

	const componentClass = 'yq-button'

	const typeClass = {
		[`${componentClass}-${type}`]: type !== undefined
	}

	const PrefixClass = classnames(
		componentClass,
		typeClass,
	)

	const bindClick = (event: React.MouseEvent) => {
		if (onClick !== undefined && onClick !== null) {
			onClick(event)
		}
	}

	return (
		<button className={PrefixClass} onClick={bindClick}>
			{value}
		</button>
	)
}

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton)
Button.defaultProps = {
	type: 'default' as ButtonProps['type'],
	value: '按钮' as ButtonProps['value'],
}
export default Button