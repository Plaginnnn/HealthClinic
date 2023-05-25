import { useEffect, useState } from 'react'
import Team_card from '../Team_card/Team_card'
import './Team.sass'

const Team = () => {
	interface CardType {
		photo: string
		name: string
		profession: string
		about: string
		key: number
	}

	const [Card, SetCard] = useState<CardType[]>([])
	useEffect(() => {
		fetch('https://646941c3183682d6143d06da.mockapi.io/Team_card')
			.then(res => res.json())
			.then(json => {
				SetCard(json)
			})
			.catch(err => {
				console.error(err)
				alert('Ошибка при получении данных Team_card')
			})
	}, [])
	return (
		<div className='container'>
			<div className='Team'>
				<div className='Team__title'>Meet our team members</div>
				<div className='Team__about'>
					Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat
					gravida malesuada quam commodo id integer nam.
				</div>
				<div className='Team__items'>
					{Card.map((Card: CardType, index: number) => (
						<Team_card
							name={Card.name}
							photo={Card.photo}
							about={Card.about}
							key={index}
							profession={Card.profession}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Team
