import '../styles/RightMenu.css'

import { useState } from 'react'
import IconButton from './IconButton'
import Toggle from './Toggle'

import DisplayOptionsIcon from '../img/display-options.svg'


interface IRightMenuProps {
	displayColored: boolean,
	setDisplayColored: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RightMenu({displayColored, setDisplayColored}: IRightMenuProps): JSX.Element {

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
							enabled={displayColored}
							setEnabled={setDisplayColored}
							label='Visa alla linjer i färg'
						/>

						
					</div>
				</div>
			</div>
		</>
	)
}