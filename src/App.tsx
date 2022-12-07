import './styles/App.css'
import './styles/Type.css'

import Menu from './components/Menu'
import Map from './components/Map'
import MapOptionsMenu from './components/MapOptionsMenu'

import { useReducer, useState } from 'react'
import { default as mapReducer } from './reducers/MapStateReducer'
import { default as stopReducer} from './reducers/BusStopReducer'
import { BusStopData } from './components/DetailMenu'
import DetailMenu from './components/DetailMenu'

const intialMapState = {
	lineColor: true,
	water: true,
	labels: false,
	stops: true,
	lineLabels: true,
}
const initalStopState: BusStopData = {
	id: 'unknown',
	name: 'unknown',
	info: 'unknown',
	linespassing: [1]
}

export default function App(): JSX.Element {

	const [mapState, mapStateDispatch] = useReducer(mapReducer, intialMapState)

	const [detailOpen, setDetailOpen] = useState(false)
	const [currentStop, currentStopDispatch] = useReducer(stopReducer, initalStopState)

	return (
		<div className="App">
			<Menu/>
			<DetailMenu
				open={detailOpen}
				setOpen={setDetailOpen}
				busStop={currentStop}
			/>

			<Map
				mapState={mapState}
				setStop={currentStopDispatch}
			/>

			<MapOptionsMenu
				mapState={mapState}
				dispatch={mapStateDispatch}
			/>
		</div>
	)
}
