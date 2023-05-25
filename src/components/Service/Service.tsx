import '../Interface/ServiceType'
import './Service.sass'

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
