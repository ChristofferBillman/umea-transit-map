import { useEffect, useState } from 'react'

import '../styles/linelist.css'

import BusStop from '../types/BusStop'
import LineChip from './LineChip'
import Spinner from './Spinner'

import { ITrip } from '../types/Trip'

import { lines } from '../data/LineData'
import { stops } from '../data/StopData'

interface ILineListProps {
    busStop: BusStop
}

const BASE_URL = 'http://localhost'

export default function LineList({busStop}: ILineListProps) {

	const time: Date = new Date()
	const minutes = time.getMinutes()
	const hours = time.getHours()

	const timeString: string = + (hours < 10 ? hours + '0' : hours) + ':' + (minutes < 10 ? minutes + '0' : minutes) 

	const dateString: string = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()

	const [departures, setDepartures] = useState<ITrip[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<boolean>(false)

	// This is a damn mess...
	// Nothing wrong with the logic. What's wrong is it searches a journey from previous stop to next.
	// This causes problems when lines are parallell to each other as two different fetches can return
	// the same trips. Instead of searching journey from next stop and previous,
	// search journey from current stop, to the next/prev unique stop on the line.
	const fetchAllDepartures = () => {
		console.log('fetching departures...')
		setLoading(true)
		setDepartures([])
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
			.then(async responses => {
				const orderedTrips: ITrip[][] = []
				for(const response of responses) {
					const test = await response.json()

					orderedTrips.push(test)
				}

				// Every other array is in the opposite direction.
				for(let i = 0; i < orderedTrips.length; i++) {
					orderedTrips[i].forEach(trip => trip.primary = i%2 == 0)
				}

				const allTrips = orderedTrips.flat()
				allTrips.sort((a,b) => a.departure.localeCompare(b.departure))

				setError(false)
				setLoading(false)
				setDepartures(allTrips)
			})
			.catch(err => {
				console.error(err)
				setError(true)
				setLoading(false)
			})
	}

	const fetchTrip = async (from: BusStop, to: BusStop) => {
		const fromQuery = from.name.replace(' ','+')
		const toQuery = to.name.replace(' ','+')
		return fetch(BASE_URL + `/api?
			from=${fromQuery}&
			to=${toQuery}&
			time=${timeString}&
			date=${dateString}`,{mode: 'cors'})
	}

	useEffect(() => fetchAllDepartures(), [busStop])

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
		<h2>Kunde inte hämta avgångar.</h2>
	</div>

	let index = 0
	// Information about a trip's direction is not avaliable here. Needs to be.
	return <div className='trips-container'>
		{departures.map(departure => {
			index++
			const currentLine = lines.find(line => departure.line == line.linenumber)
			return <div key={index} className='trip-container'>
				<div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
					<LineChip lineNumber={departure.line}/>
					<p>{departure.primary ? currentLine?.primary : currentLine?.reverse}</p>
				</div>
				<h2>{departure.departure}</h2>
			</div>
		})}
	</div>
}