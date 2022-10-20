import '../styles/Menu.css'

import { useState } from 'react'
import IconButton from './IconButton'
import StopIcon from '../img/bus-stop-icon.svg'
import UnidirectStopIcon from '../img/bus-stop-unidirectional-icon.svg'
import PrimaryLineIcon from '../img/primary-line-icon.svg'
import SecondaryLineIcon from '../img/secondary-line-icon.svg'
import TrainIcon from '../img/train-icon.svg'
import HambugerIcon from '../img/hamburger.svg'

export default function Menu(): JSX.Element {

	const [open, setOpen] = useState<boolean>(true)

	return (
		<>
			<IconButton
				className='hamburger'
				icon={HambugerIcon}
				onClick={() => {
					console.log('hej!')
					setOpen(!open)}}
			/>

			<div className={`menu-container ${open ? 'open' : 'closed'}`}>
				<div style={{padding: '20px'}}/>
				<div className='menu-content-container'>
					<div>
						<h1>Umeå Lokaltrafik</h1>

						<h2>Teckenförklaring</h2>

						<div className='legend-item'>
							<img src={PrimaryLineIcon}/>
							<h4>Stomlinje</h4>
						</div>

						<div className='legend-item'>
							<img src={SecondaryLineIcon}/>
							<h4>Sekundär linje</h4>
						</div>

						<div className='legend-item'>
							<img src={StopIcon}/>
							<h4>Hållplats</h4>
						</div>

						<div className='legend-item'>
							<img src={UnidirectStopIcon}/>
							<div>
								<h4>Hållplats</h4>
								<p className='muted-text'>(Trafikeras endast i en riktning)</p>
							</div>
						</div>

						<div className='legend-item'>
							<img src={TrainIcon}/>
							<h4>Tågststation</h4>
						</div>

						<div className='legend-item'>
							<div style={{width: '124px'}}/>
							<div>
								<h4>Nygatan**</h4>
								<p className='muted-text'>I riktning mot Umeå centrum, trafikeras ej 12 - 19 alla dagar</p>
							</div>
						</div>
					</div>

					<div>
						<p className='muted-text'>
						Umeås Lokaltrafik (Ultra) är ett samarbete mellan Länstrafiken i Västerbotten, Transdev och Umeå kommun.<br/><br/> Jag är inte anknuten, associerad, stödd eller på något sätt officiellt ansluten till Länstrafiken i Västerbotten, Transdev eller Umeå Kommun. För uppdaterade tidtabeller, trafikinformation och övrig information gällande resande i Umeås lokaltrafik, se tabussen.se.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}