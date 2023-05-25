import './Team_card.sass'
interface Card_type {
	photo: string
	name: string
	profession: string
	about: string
	key: number
}

const Team_card = ({ name, photo, profession, key, about }: Card_type) => {
	return (
		<div key={key} className='Team_card'>
			<img src={photo} alt='' className='Team__card-img' />
			<h2 className='Team_card-name'>{name}</h2>
			<h3 className='Team_card-profession'>{profession}</h3>
			<h5 className='Team_card-about'>{about}</h5>
			<ul className='Team_card-social'>
				<li className='Socail-item'>
					<a href='#' className='Social-facebook'>
						<img src='./public/Team_card/Facebook.svg' alt='' />
					</a>
				</li>
				<li className='Socail-item'>
					<a href='#' className='Social-twiter'>
						<img src='./public/Team_card/Twitter.svg' alt='' />
					</a>
				</li>
				<li className='Socail-item'>
					<a href='#' className='Social-instagram'>
						<img src='./public/Team_card/Instagram.svg' alt='' />
					</a>
				</li>
				<li className='Socail-item'>
					<a href='#' className='Social-LinkedIn'>
						<img src='./public/Team_card/LinkedIn.svg' alt='' />
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Team_card
