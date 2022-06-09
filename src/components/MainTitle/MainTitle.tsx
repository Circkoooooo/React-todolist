import React from 'react'
import './MainTitle.css'
interface IProps {
	title: string
}
const MainTitle = (props: IProps) => {
	return (
		<div className='main_title'>
			{props.title}
		</div>
	)

}

export default MainTitle