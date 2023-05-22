import React from 'react'
import './Header.sass'
const Header: React.FC = () => {
	return (
		<div className='container'>
			<header className='Header'>
				<nav className='Header-nav'>
					<a className='Header-brand' href='#'>
						<img
							className='Header-logo'
							src='/public/Header/header-logo.png'
							alt='Logo'
						/>
					</a>
					<ul className='Header-menu'>
						<li className='Header-menuItem'>
							<a href='#'>home</a>
						</li>
						<li className='Header-menuItem'>
							<a href='#'>services</a>
						</li>
						<li className='Header-menuItem'>
							<a href='#'>contact us</a>
						</li>
						<li className='Header-menuItem'>
							<a href='#'>help</a>
						</li>
						<li className='Header-menuItem'>
							<a href='#'>blogs</a>
						</li>
					</ul>
					<ul className='Header-auth'>
						<li>
							<a href='#' className='Header-button Header-button-sign'>
								sign up
							</a>
						</li>
						<li>
							<a href='#' className='Header-button Header-button-login'>
								Log in
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	)
}

export default Header
