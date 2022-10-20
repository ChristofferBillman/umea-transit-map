import './styles/App.css'
import './styles/Type.css'

import Menu from './components/Menu'
import Map from './components/Map'
import RightMenu from './components/RightMenu'

import { useState } from 'react'

export default function App(): JSX.Element {

	const [displayColored, setDisplayColored] = useState<boolean>(false)
	return (
		<div className="App">
			<Menu/>
			<Map displayColored={displayColored}/>
			<RightMenu displayColored={displayColored} setDisplayColored={setDisplayColored}/>
		</div>
	)
}
