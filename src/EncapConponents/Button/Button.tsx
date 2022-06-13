import React from 'react'
import './Button.less'
type Button = {
	content?: string
	onClick: (event?: MouseEvent) => void
}
const Button = (props: Button) => {
	return (
		<button className='yq-button' onClick={() => props.onClick()}>
			{props.content}
		</button>
	)
}
export default Button
