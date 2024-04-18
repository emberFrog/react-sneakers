import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
	return (
		<main className='wrapper'>
			<Drawer />
			<Header />
			<section className='content'>
				<div>
					<h1>Все кроссовки</h1>
					<div className='searchBlock'>
						<img src='/img/search.svg' alt='Search' />
						<input placeholder='Поиск ...' />
					</div>
				</div>

				<section className='showcase'>
					<Card />
					<Card />
					<Card />
					<Card />
				</section>
			</section>
		</main>
	)
}

export default App
