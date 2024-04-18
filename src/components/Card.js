function Card() {
	return (
		<article className='card'>
			<div className='favorite'>
				<img src='/img/toFav1.svg' alt='Not favorite' />
			</div>

			<img width={133} height={112} src='/img/sneakers/1.jpg' alt='Sneakers' />
			<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
			<div className='info'>
				<div className='price'>
					<span>Цена:</span>
					<b>12 999 руб.</b>
				</div>
				<button className='button'>
					<img width={11} height={11} src='/img/add.svg' alt='Add-to-cart' />
				</button>
			</div>
		</article>
	)
}

export default Card
