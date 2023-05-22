import Card from './components/Card/Card'
import Find from './components/Find/Find'
import Header from './components/Header/Header'
import Results from './components/Results/Results'
import Services from './components/Services/Services'
import './styles/reset.sass'
function App() {
	return (
		<>
			<Header />
			<Card />
			<Find />
			<Results />
			<Services />
		</>
	)
}

export default App