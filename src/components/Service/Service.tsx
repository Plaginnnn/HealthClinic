import './Service.sass'
interface ServiceType {
	img: string
	name: string
	about: string
	key: number
}

const Service = ({ img, name, about, key }: ServiceType) => {
	return (
		<div className='Service'>
			<img src={img} className='Service__img' alt='' />
			<p className='Services__title'>{name}</p>
			<p className='Services__about'>{about}</p>
		</div>
	)
}

export default Service
