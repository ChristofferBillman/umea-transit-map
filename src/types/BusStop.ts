export default interface BusStop {
	id: number
	name: string
	info?: string
	lineIds: number[]
}