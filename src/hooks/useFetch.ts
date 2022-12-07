import { useState, useEffect } from 'react'

export interface IFetchRequest<T>{
	data: T | undefined,
	loading: boolean,
	error: Error | undefined
}

/**
 * 
 * @param url - the url to fetch data from
 * @returns 
 * - data - the data returned from the fetch. already parsed to JSON.
 * - loading - boolean indicating if the fetch is in progress
 * - error - the error returned from the fetch
 */
export default function useFetch<T>(url: string): IFetchRequest<T> {
	const [data, setData] = useState<T>()
	const [error, setError] = useState<Error | undefined>(undefined)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		setLoading(true)
		fetch(url)
			.then(res => res.text())
			.then(text => JSON.parse(text))
			.then(data => setData(data))
			.catch(err => setError(err))
	}, [url])

	useEffect(() => {
		if (error || data)
			setLoading(false)
	}, [data, error])

	return {data, loading, error}
}