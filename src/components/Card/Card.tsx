import React from 'react'
import './Card.sass'

const Card: React.FC = () => {
	const about: string =
		'At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry'
	return (
		<div className='container'>
			<div className='Card'>
				<div className='Card__info'>
					<div className='Card__info-title'>
						Providing Quality <span className='healthcare'>Healthcare</span> For
						A <span className='brighter'>Brighter </span>And
						<span className='healthy'> Healthy</span> Future
					</div>
					<div className='Card__info-about'>{about}</div>
					<div className='Card__info-buttons'>
						<a href='#' className='appointments'>
							Appointments
						</a>
						<a href='#' className='Video'>
							<img
								src='/public/Card/video-icon.svg'
								alt='video-icon'
								className='video-icon'
							/>
							<p className='text-video'>Watch Video</p>
						</a>
					</div>
				</div>
				<img
					className='doctor-img'
					src='/public/Card/doctor-img.png'
					alt='doctor-img'
				/>
			</div>
		</div>
	)
}

export default Card
