import { Switch } from 'antd'
import React from 'react'
import './Find.sass'
const Find: React.FC = () => {
	return (
		<div className='container'>
			<section className='Find'>
				<div className='Find__title'>Find A Doctor</div>
				<div className='Find__interface'>
					<input className='Name-input' type='text' placeholder='Name' />
					<input
						className='Speciality-input'
						type='text'
						placeholder='Speciality'
					/>
					<p className='Available'>Available</p>

					<Switch className='Switch' />
					<button className='Search'>Search</button>
				</div>
			</section>
		</div>
	)
}

export default Find
