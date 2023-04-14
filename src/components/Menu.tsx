import '../styles/Menu.css'

import { useState } from 'react'
import IconButton from './IconButton'
import StopIcon from '../img/bus-stop-icon.svg'
import UnidirectStopIcon from '../img/bus-stop-unidirectional-icon.svg'
import PrimaryLineIcon from '../img/primary-line-icon.svg'
import TrainIcon from '../img/train-icon.svg'
import HambugerIcon from '../img/hamburger.svg'
import CrossIcon from '../img/cross-icon.svg'

export default function Menu(): JSX.Element {

	const [open, setOpen] = useState<boolean>(true)

	return (
		<>
			<IconButton
				className='hamburger'
				icon={open ? CrossIcon : HambugerIcon}
				onClick={() => {
					console.log('hej!')
					setOpen(!open)}}
			/>

			<div
				className={`menu-container ${open ? 'open' : 'closed'}`}
			>
				<div className='menu-content-container'>
					<div style={{padding: '20px'}}/>
					<div>
						<h1>Umeå Lokaltrafik</h1>
						<h2 className='beta-text'>Beta</h2>

						<h2>Teckenförklaring</h2>

						<div className='legend-item'>
							<img src={PrimaryLineIcon}/>
							<h4>Busslinje</h4>
						</div>
						{/*<p className='muted-text'>
								En stomlinje är en linje som i regel går med högre frekvens än andra linjer.
								Typiskt för dessa linjer är &gt; 6 avgångar i timmen vid rusningstrafik.
						</p>*/}

						{/*<div className='legend-item'>
							<img src={SecondaryLineIcon}/>
							<h4>Sekundär linje</h4>
						</div>*/}

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
							<div>
								<h4>Nygatan**</h4>
								<p className='muted-text'>I riktning mot Umeå centrum, trafikeras ej 12 - 19 alla dagar</p>
							</div>
						</div>
						<div className='vspace-4'/>
					</div>

					<div>
						<p className='muted-text'>
						Umeås Lokaltrafik (Ultra) är ett samarbete mellan Länstrafiken i Västerbotten, Transdev och Umeå kommun.<br/><br/> Jag är inte anknuten, associerad, stödd eller på något sätt officiellt ansluten till Länstrafiken i Västerbotten, Transdev eller Umeå Kommun. För uppdaterade tidtabeller, trafikinformation och övrig information gällande resande i Umeås lokaltrafik, se <a href="https://www.tabussen.nu/">tabussen.nu</a>.
						</p>

						<a
							href="https://christofferbillman.se"
							id="christofferbillman"
						>
							christoferbillman.se
						</a>

						<div className='vspace'/>
						<div className='vspace'/>
					</div>
				</div>
			</div>
		</>
	)
}