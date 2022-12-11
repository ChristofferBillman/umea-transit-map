import Line from './Line'

export default interface BusStop {
	name: string
	info: string
	lines: Line[]
}