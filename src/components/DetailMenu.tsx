import '../styles/Menu.css'

import {useEffect} from 'react'
import IconButton from './IconButton'
import CrossIcon from '../img/cross-icon.svg'

interface IDetailMenuProps {
	open: boolean,
	setOpen: React.Dispatch<React.SetStateAction<boolean>>,
	busStop: BusStopData
}

export interface BusStopData {
	name: string
}
export default function DetailMenu({open, setOpen, busStop}: IDetailMenuProps): JSX.Element {

	useEffect(()=> {
		setOpen(true)
	}, [busStop])
	return (
		<div className={`menu-container ${open ? 'open' : 'closed'}`} style={{zIndex: 3}}>
			<div style={{padding: '20px'}}/>
			<div className='menu-content-container'>
				<div>
					<IconButton
						icon={CrossIcon}
						onClick={() => setOpen(false)}
					/>
					<h1 style={{wordBreak: 'break-all'}}>{busStop.name}</h1>
				</div>
			</div>
		</div>
	)
}