import React from 'react'
import './Button.less'
type Button = {
	content?: string
	onClick: (event: React.MouseEvent) => void
}
const Button = (props: Button) => {
	return (
		<button className='yq-button' onClick={(event) => props.onClick(event)}>
			{props.content}
		</button>
	)
}
export default Button
