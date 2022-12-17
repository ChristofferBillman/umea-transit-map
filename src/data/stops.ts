import BusStop from '../types/BusStop'

export const stops: BusStop[] = [
	{
		id: 0,
		name: 'Vasaplan',
		lineIds: [1,2,3,5,7,8,9]
	},
	{
		id: 1,
		name: 'Renmarkstorget',
		lineIds: [1,3,5,7,8]
	},
	{
		id: 2,
		name: 'Nygatan',
		lineIds: [3,5,8]
	},
	{
		id: 3,
		name: 'Midgårdsskolan',
		lineIds: [3]
	},
]