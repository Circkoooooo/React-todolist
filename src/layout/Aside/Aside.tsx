import React from 'react'

interface AsideProps {
	children?: React.ReactNode
}
const Aside = (props: AsideProps) => {
	return (
		<div className='aside'>
			{props.children}
		</div>
	)
}

export default Aside