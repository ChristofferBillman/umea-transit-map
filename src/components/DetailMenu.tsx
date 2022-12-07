import '../styles/Menu.css'

import {useEffect, useState} from 'react'
import IconButton from './IconButton'
import CrossIcon from '../img/cross-icon.svg'
import useFetch, { IFetchRequest } from '../hooks/useFetch'

interface IDetailMenuProps {
	open: boolean,
	setOpen: React.Dispatch<React.SetStateAction<boolean>>,
	busStop: BusStopData
}

const PLACEHOLDER_TEXT = 'Denna funktion är inte tillgänglig ännu! Men kul att du kikar här ;)'

export interface BusStopData {
	id: string
	name: string
	info: string
	linespassing: number[]
}
export default function DetailMenu({open, setOpen, busStop}: IDetailMenuProps): JSX.Element {

	const [firstRender, setFirstRender] = useState(true)
	const {data, loading, error}: IFetchRequest<any> = useFetch<any>('http://localhost/mockGET')

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
					{loading ?
						<p>Laddar...</p>
						:
						error ?
							<h2 style={{marginTop: '64px'}}>{PLACEHOLDER_TEXT}</h2>
							:
							<>
								<h1 style={{wordBreak: 'break-all'}}>{busStop.id}</h1>
								{data[0].departs.map((departure: string, i: number) => <h2 key={i}>{departure}</h2>)}
							</>
					}
				</div>
			</div>
		</div>
	)
}