import React from 'react'
import './Aside.less'

type AsideItemType = 'default'
interface AsideItem {
	name: string,
	number: number,
	type: AsideItemType
}

const Aside = () => {
	const AsideConfig: AsideItem[] = [
		{
			name: '未完成',
			number: 0,
			type: 'default'
		},
		{
			name: '已完成',
			number: 0,
			type: 'default'
		}
	]
	/**
	 * 渲染Aside容器中的所有子组件
	 * @param asideItem 
	 * @returns 
	 */
	const renderAsideItemTypes = (asideItem: AsideItem) => {
		switch (asideItem.type) {
			case 'default':
				return (
					<div className='aside_default'>
						<span className='name'>
							{asideItem.name}
						</span>
						<span className='number'>
							{asideItem.number}
						</span>
					</div>
				)
		}
	}
	const items = AsideConfig.map((item, index) => {
		return <div key={index} className='aside_container'>
			{renderAsideItemTypes(item)}
		</div>
	})

	return (
		<div className='aside'>
			{items}
		</div>
	)
}

export default Aside