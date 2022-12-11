import { useEffect, useState } from 'react'
import useFetch, { IFetchRequest } from '../hooks/useFetch'
import '../styles/linelist.css'

import { ITrip } from '../types/Trip'
import LineChip from './LineChip'

interface ITripListComponentProps {
    from: string
	to: string | undefined
}


const BASE_URL = 'http://localhost'

export default function TripListComponent({from,to}: ITripListComponentProps) {

	if(to == undefined) return null
	// TODO: Handle case when next trip shows up on next day etc. In scraper then!
	const time: Date = new Date()
	//const dateString: string = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate()
	//const timeString: string = time.getHours() + ':' + time.getMinutes()

	const dateString = '2022-12-12'
	const timeString = '00:23'

	console.log(BASE_URL + `/api?from=${from}&to=${to}&time=${timeString}&date=${dateString}`)
	const {data, loading, error}: IFetchRequest<ITrip[]> = useFetch<ITrip[]>(BASE_URL + `/api?from=${from}&to=${to}&time=${timeString}&date=${dateString}`)

	return (
		<>
			{loading ?
				<p style={{width: '100%'}}>Laddar...</p>
				:
				error ?
					<>
						<h2 style={{marginTop: '64px'}}>Något gick fel.</h2>
					</>
					:
					<>
						{data?.map((trip: ITrip) =>
							<>
								<div className='trip-container'>
									<LineChip lineNumber={trip.line}/>
									<p>{trip.departure}</p>
								</div>
							</>
						)}
					</>
			}
		</>
	)
}