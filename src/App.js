function App() {
	return (
		<div className='wrapper'>
			<header>
				<div className='header-left'>
					<img width={40} height={40} src='/img/sneakers.png' alt='Logo' />
					<div className='header-brand'>
						<h3>React Sneakers</h3>
						<p>Лучший магазин кроссовок</p>
					</div>
				</div>
				<ul className='header-right'>
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
			</header>
			<div className='content'>
				<h1>Все кроссовки</h1>

				<div className='showcase'>
					<div className='card'>
						<img
							width={133}
							height={112}
							src='/img/sneakers/1.jpg'
							alt='Sneakers'
						/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='info'>
							<div className='price'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img
									width={11}
									height={11}
									src='/img/add.svg'
									alt='Add-to-cart'
								/>
							</button>
						</div>
					</div>
					<div className='card'>
						<img
							width={133}
							height={112}
							src='/img/sneakers/2.jpg'
							alt='Sneakers'
						/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='info'>
							<div className='price'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img
									width={11}
									height={11}
									src='/img/add.svg'
									alt='Add-to-cart'
								/>
							</button>
						</div>
					</div>
					<div className='card'>
						<img
							width={133}
							height={112}
							src='/img/sneakers/3.jpg'
							alt='Sneakers'
						/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='info'>
							<div className='price'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img
									width={11}
									height={11}
									src='/img/add.svg'
									alt='Add-to-cart'
								/>
							</button>
						</div>
					</div>
					<div className='card'>
						<img
							width={133}
							height={112}
							src='/img/sneakers/4.jpg'
							alt='Sneakers'
						/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='info'>
							<div className='price'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img
									width={11}
									height={11}
									src='/img/add.svg'
									alt='Add-to-cart'
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
