import './Results.sass'
const Results: React.FC = () => {
	return (
		<div className='container'>
			<div className='Results'>
				<div className='Results__title'>Our results in numbers</div>
				<ul className='Results__info'>
					<li className='Results__info-item'>
						<p className='perscent'>99%</p>
						<p className='perscent__about'>Customer satisfaction</p>
					</li>
					<li className='Results__info-item'>
						<p className='perscent'>15k</p>
						<p className='perscent__about'>Online Patients</p>
					</li>
					<li className='Results__info-item'>
						<p className='perscent'>12k</p>
						<p className='perscent__about'>Patients Recovered</p>
					</li>
					<li className='Results__info-item'>
						<p className='perscent'>240%</p>
						<p className='perscent__about'>Company growth</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Results
