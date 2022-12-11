import BusStop from './types/BusStop'

export const stops: BusStop[] = [
	{
		name:  'Vasaplan',
		info: 'Centrala busshubben för kollektivtrafiken i Umeå',
		lines: [
			{
				name: '1',
				nextStop: 'Forsamlingsgarden',
				prevStop: 'Renmarkstorget'
			},
			{
				name: '2',
				nextStop: 'Forsamlingsgarden',
				prevStop: 'Varvsgatan'
			},
			{
				name: '3',
				prevStop: 'Renmarkstorget'
			},
			{
				name: '5',
				nextStop: 'Forsamlingsgarden',
				prevStop: 'Renmarkstorget'
			},
			{
				name: '7',
				nextStop: 'Tuvgränd',
				prevStop: 'Renmarkstorget'
			},
			{
				name: '8',
				nextStop: 'Forsamlingsgarden',
				prevStop:'Renmarkstorget'
			},
			{
				name: '9',
				nextStop: 'Forsamlingsgarden',
				prevStop: 'Varvsgatan'
			}
		]
	},
	{
		name: 'Universum',
		info: 'Hållplats vid Universitetet.',
		lines: [
			{
				name: '2',
				nextStop: 'Växthuset',
				prevStop: 'Skidspåret'
			},
			{
				name: '5',
				nextStop: 'Växthuset',
				prevStop: 'Universitetssjukhuset'
			},
			{
				name: '8',
				nextStop: 'Växthuset',
				prevStop:'Universitetssjukhuset'
			},
			{
				name: '9',
				nextStop: 'Klintvägen',
				prevStop: 'Universitetssjukhuset'
			}
		]
	},
	{
		name: 'Angesvagen',
		info: 'Hållplats vid Universitetet.',
		lines: [
			{
				name: '1',
				nextStop: 'Dragonskolan',
				prevStop: 'Stadsgransvagen'
			},
		]
	}
]