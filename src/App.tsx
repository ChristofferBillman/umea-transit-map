import './styles/App.css'

import Menu from './components/Menu'
import Map from './components/Map'

export default function App(): JSX.Element {

	return (
		<div className="App">
			<Menu/>
			<Map/>
		</div>
	)
}
