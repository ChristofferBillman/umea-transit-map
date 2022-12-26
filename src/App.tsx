import './styles/App.css'
import './styles/Type.css'

import Menu from './components/Menu'
import Map from './components/Map'
import MapOptionsMenu from './components/MapOptionsMenu'

import { useReducer, useState } from 'react'
import { default as mapReducer } from './reducers/MapStateReducer'
import { default as stopReducer} from './reducers/BusStopReducer'
import BusStop from './types/BusStop'
import DetailMenu from './components/DetailMenu'

import { ThemeContextProvider } from './contexts/ThemeContext'

const intialMapState = {
	lineColor: true,
	water: true,
	labels: false,
	stops: true,
	lineLabels: true,
}
const initalStopState: BusStop = {
	id: 3,
	name: 'unknown',
	info: 'unknown',
	lineIds: []
}

export default function App(): JSX.Element {

	const [mapState, mapStateDispatch] = useReducer(mapReducer, intialMapState)

	const [detailOpen, setDetailOpen] = useState(false)
	const [currentStop, currentStopDispatch] = useReducer(stopReducer, initalStopState)

	return (
		<div className="App">
			<ThemeContextProvider>
				<Menu/>
				<DetailMenu
					open={detailOpen}
					setOpen={setDetailOpen}
					busStop={currentStop}
				/>

				<Map
					mapState={mapState}
					setStop={currentStopDispatch}
					setDetailOpen={setDetailOpen}
				/>

				<MapOptionsMenu
					mapState={mapState}
					dispatch={mapStateDispatch}
				/>
			</ThemeContextProvider>
		</div>
	)
}
