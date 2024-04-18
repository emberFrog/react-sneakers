function Header() {
	return (
		<header>
			<div className='headerLeft'>
				<img width={40} height={40} src='/img/sneakers.png' alt='Logo' />
				<div className='headerBrand'>
					<h3>React Sneakers</h3>
					<p>Лучший магазин кроссовок</p>
				</div>
			</div>
			<nav className='headerRight'>
				<ul>
					<li>
						<img width={18} height={18} src='/img/cart.svg' alt='Shop-cart' />
						<span>1205 руб.</span>
					</li>
					<li>
						<img
							width={18}
							height={18}
							src='/img/user.svg'
							alt='user-profile'
						/>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
