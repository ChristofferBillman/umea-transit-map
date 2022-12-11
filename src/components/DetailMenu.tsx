import '../styles/Menu.css'

import {useEffect, useState} from 'react'
import IconButton from './IconButton'
import CrossIcon from '../img/cross-icon.svg'
import BusStop from '../types/BusStop'
import LineList from './LineList'

interface IDetailMenuProps {
	open: boolean,
	setOpen: React.Dispatch<React.SetStateAction<boolean>>,
	busStop: BusStop
}

export default function DetailMenu({open, setOpen, busStop}: IDetailMenuProps): JSX.Element {

	const [firstRender, setFirstRender] = useState(true)

	useEffect(() => {
		setFirstRender(false)
	},[])

	useEffect(()=> {
		if(firstRender) return

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
					<LineList busStop={busStop}/>
				</div>
			</div>
		</div>
	)
}