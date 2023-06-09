import Card from './components/Card/Card'
import Find from './components/Find/Find'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Results from './components/Results/Results'
import Services from './components/Services/Services'
import Team from './components/Team/Team'
import './styles/reset.sass'
function App() {
	return (
		<>
			<Header />
			<Card />
			<Find />
			<Results />
			<Services />
			<Team />
			<Footer />
		</>
	)
}

export default App
