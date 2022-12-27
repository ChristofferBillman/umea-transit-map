import '../styles/RightMenu.css'

import { useState } from 'react'
import IconButton from './IconButton'
import Toggle from './Toggle'

import { MapState } from './Map'
import { IMapStateAction, EMapStateKind } from '../reducers/MapStateReducer'

import DisplayOptionsIcon from '../img/display-options.svg'
import CrossIcon from '../img/cross-icon.svg'
import { useThemeContextSetter, useThemeContextState } from '../contexts/ThemeContext'

interface IRightMenuProps {
	mapState: MapState,
	dispatch: React.Dispatch<IMapStateAction>
}

export default function MapOptionsMenu({mapState, dispatch}: IRightMenuProps): JSX.Element {

	const [open, setOpen] = useState<boolean>(false)

	const themeContext = useThemeContextState()
	const setTheme = useThemeContextSetter()
	
	return (
		<>
			<IconButton
				className='icon'
				icon={open ? CrossIcon : DisplayOptionsIcon}
				onClick={() => {
					setOpen(!open)}}
			/>

			<div className={`right-menu-container ${open ? 'right-open' : 'right-closed'}`}>
				<div style={{padding: '20px'}}/>
				<div className='right-menu-content-container'>
					<div>
						<h1>Visningsalternativ</h1>
						
						<h2>Tema</h2>
						<Toggle
							enabled={themeContext.isDark}
							setEnabled={() => setTheme(!themeContext.isDark ? 'dark' : 'light')}
							label='Mörkt läge'
						/>

						<h2>Linjer</h2>
						<Toggle
							enabled={true}
							setEnabled={() => setTheme('toggleLineColors')}
							label='Visa alla linjer i färg'
						/>
						<Toggle
							enabled={mapState.lineLabels}
							setEnabled={() => dispatch({type: EMapStateKind.TOGGLE_LINELABELS})}
							label='Visa linjenamn och linjenummer'
						/>
						<h2>Övrigt</h2>
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
					</div>
				</div>
			</div>
		</>
	)
}