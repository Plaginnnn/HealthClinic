import { useEffect, useState } from 'react'
import Service from '../Service/Service'
import './Services.sass'
const Services = () => {
	interface ServiceType {
		img: string
		name: string
		about: string
		key: number
	}
	interface ObjectTypes extends ServiceType {}

	const [collections, setCollections] = useState<ServiceType[]>([])
	useEffect(() => {
		fetch('https://646941c3183682d6143d06da.mockapi.io/Healt')
			.then(res => res.json())
			.then(json => {
				setCollections(json)
			})
			.catch(err => {
				console.error(err)
				alert('Ошибка при получении данных')
			})
	}, [])

	return (
		<div className='container'>
			<div className='Services'>
				<div className='Services__title'>Services we provide </div>
				<div className='Service__about'>
					Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
					elementum tempus hac tellus libero accumsan.
				</div>

				<div className='Service__items'>
					{collections.map((obj: ObjectTypes, index: number) => (
						<Service
							name={obj.name}
							img={obj.img}
							about={obj.about}
							key={obj.index}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Services
