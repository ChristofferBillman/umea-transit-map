import '../styles/RightMenu.css'

import { useState } from 'react'
import IconButton from './IconButton'
import Toggle from './Toggle'

import { MapState } from './Map'
import { IMapStateAction, EMapStateKind } from '../reducers/MapStateReducer'

import DisplayOptionsIcon from '../img/display-options.svg'


interface IRightMenuProps {
	mapState: MapState,
	dispatch: React.Dispatch<IMapStateAction>
}

export default function MapOptionsMenu({mapState, dispatch}: IRightMenuProps): JSX.Element {

	const [open, setOpen] = useState<boolean>(false)

	return (
		<>
			<IconButton
				className='icon'
				icon={DisplayOptionsIcon}
				onClick={() => {
					setOpen(!open)}}
			/>

			<div className={`right-menu-container ${open ? 'right-open' : 'right-closed'}`}>
				<div style={{padding: '20px'}}/>
				<div className='right-menu-content-container'>
					<div>
						<h1>Visningsalternativ</h1>

						<Toggle
							enabled={mapState.water}
							setEnabled={() => dispatch({type: EMapStateKind.TOGGLE_WATER})}
							label='Visa vatten'
						/>
						<Toggle
							enabled={mapState.labels}
							setEnabled={() => dispatch({type: EMapStateKind.TOGGLE_LABELS})}
							label='Visa platsetiketter'
						/>
						<Toggle
							enabled={mapState.stops}
							setEnabled={() => dispatch({type: EMapStateKind.TOGGLE_STOPS})}
							label='Visa hållplatser och hållplatsnamn'
						/>
						<Toggle
							enabled={mapState.lineLabels}
							setEnabled={() => dispatch({type: EMapStateKind.TOGGLE_LINELABELS})}
							label='Visa linjenamn och linjenummer'
						/>
					</div>
				</div>
			</div>
		</>
	)
}