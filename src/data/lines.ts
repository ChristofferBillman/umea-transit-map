import Line from '../types/Line'

export const lines: Line[] = [
	{
		linenumber: 1,
		primary: '1 mot Umedalen',
		reverse: '1 mot Ö Ersboda',
		// Ids of stops, from primary to reverse.
		stops: []
	},
	{
		linenumber: 2 ,
		primary: '2 mot Ersboda handelsområde',
		reverse: ' 2 mot Söderslätts handelsområde',
		stops: []
	},
	{
		linenumber: 3,
		primary:  '3 mot Regementet',
		reverse: '3 mot Vasaplan',
		stops: [0,1,2,3]
	},
	{
		linenumber: 5,
		primary:  '5 mot Ersmark',
		reverse: '5 mot Strömpilen',
		stops: []
	},
	{
		linenumber: 7,
		primary:  '7 mot Rödäng',
		reverse: '7 mot Mariehem',
		stops: []
	},
	{
		linenumber: 8,
		primary:  '8 mot Tomtebo',
		reverse: '8 mot Ö Ersboda',
		stops: []
	},
	{
		linenumber: 9,
		primary:  '9 mot Röbäck',
		reverse: '9 mot Carlshöjd',
		stops: []
	}
]