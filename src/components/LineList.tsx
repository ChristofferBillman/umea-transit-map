import { useEffect, useState } from 'react'
import useFetch, { IFetchRequest } from '../hooks/useFetch'
import '../styles/linelist.css'

import BusStop from '../types/BusStop'
import Line from '../types/Line'
import { ITrip } from '../types/Trip'
import LineChip from './LineChip'
import TripListComponent from './TripListComponent'

interface ILineListProps {
    busStop: BusStop
}

const BASE_URL = 'http://localhost'
export default function LineList({busStop}: ILineListProps) {
	return (
		<>
			<h1>{busStop.name}</h1>
			<div className='linelist-container'>
				{busStop.lines.map((line: Line) => <LineChip key={line.name} lineNumber={line.name}/>)}
			</div>
			<p>{busStop.info}</p>
			<h2>Avgångar</h2>

			<div className='trips-container'>
				{busStop.lines.map((line: Line) =>
					<>
						<TripListComponent from={busStop.name} to={line.prevStop}/>
						<TripListComponent from={busStop.name} to={line.nextStop}/>
					</>
				)}
			</div>
		</>
	)
}