import { useEffect, useState } from 'react'
import useFetch, { IFetchRequest } from '../hooks/useFetch'
import '../styles/linelist.css'

import BusStop from '../types/BusStop'
import Line from '../types/Line'
import { ITrip } from '../types/Trip'
import LineChip from './LineChip'

import { lines } from '../data/lines'
import { stops } from '../data/stops'
import Spinner from './Spinner'

interface ILineListProps {
    busStop: BusStop
}

const BASE_URL = 'http://localhost'

export default function LineList({busStop}: ILineListProps) {

	const time: Date = new Date()
	const dateString: string = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate()
	const timeString: string = time.getHours() + ':' + time.getMinutes()

	const [departures, setDepartures] = useState<ITrip[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<boolean>(false)

	// This is a damn mess...
	const fetchAllDepartures = () => {
		setLoading(true)
		const tripRequests: Promise<Response>[] = []

		for(const lineId of busStop.lineIds) {
			const currentLine = lines.find(line => line.linenumber === lineId)

			if(!currentLine) throw new Error('Could not find line with linenumber ' + lineId)

			// -1: not found
			const stopIndex = currentLine.stops.findIndex(stopId => stopId === busStop.id)

			if(stopIndex !== -1){

				const nextStopIndex = stopIndex + 1

				const nextStop = stops.find(stop => stop.id === currentLine.stops[nextStopIndex])

				if(nextStop !== undefined) {
					const direction1 = fetchTrip(busStop,nextStop)
					tripRequests.push(direction1)
				}
			}

			if(stopIndex !== -1) {

				const prevStopIndex = stopIndex - 1

				const prevStop = stops.find(stop => stop.id === currentLine.stops[prevStopIndex])

				if(prevStop !== undefined) {
					const direction2 = fetchTrip(busStop, prevStop)
					tripRequests.push(direction2)
				}
			}
		}

		Promise.all(tripRequests)
			.then(async response => {
				const trips: ITrip[] = JSON.parse(await response[0].text())
				
				trips.sort((a,b) => {
					const [hoursa,minutesa] = a.departure.split(':')
					const [hoursb,minutesb] = b.departure.split(':')

					if(hoursa < hoursb){
						return -1
					}
					else {
						if(minutesa < minutesb){
							return -1
						}
						return 0
					}
				})
				console.log(trips)
				setError(false)
				setLoading(false)
				setDepartures(trips)
			})
			.catch(err => {
				setError(true)
				setLoading(false)
			}) 
	}

	const fetchTrip = async (from: BusStop, to: BusStop) => {
		return fetch(BASE_URL + `/api?
			from=${from.name}&
			to=${to.name}&
			time=${timeString}&
			date=${dateString}`)
	}

	useEffect(() => fetchAllDepartures(), [busStop])

	const getCurrentLines = (): Line[] => {
		return lines.filter(line => busStop.lineIds.includes(line.linenumber))
	}

	if(loading) return <div style={{
		width: '100%',
		height: '50vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}}>
		<Spinner/>
	</div>

	if(error) return <div style={{
		width: '100%',
		height: '50vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}}>
		<h2>Något gick fel. Försök igen.</h2>
	</div>

	// Information about a trip's direction is not avaliable here. Needs to be.
	return <div className='trips-container'>
		{departures.map(departure => {
			return <div key={Date.now()} className='trip-container'>
				<LineChip lineNumber={departure.line}/>
				<h2>{lines.find(line => departure.line == line.linenumber)?.primary}</h2>
				<p>{departure.departure}</p>
			</div>
		})}
	</div>
}