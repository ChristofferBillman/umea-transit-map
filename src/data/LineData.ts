import Line from '../types/Line'

export const lines: Line[] = [
	{
		linenumber: 1,
		primary: 'mot Umedalen',
		reverse: 'mot Ö Ersboda',
		// Ids of stops, from primary to reverse.
		stops: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 102, 101, 100, 1, 0, 106, 107, 108, 109, 110, 16, 17, 115, 116, 117, 118, 119, 120, 121, 18, 19, 122, 123, 124]
	},
	{
		linenumber: 2 ,
		primary: 'mot Ersboda handelsområde',
		reverse: ' mot Söderslätts handelsområde',
		stops: [99, 98, 121, 120, 119, 118, 117, 116, 115, 97, 96, 95, 94, 112, 111, 93, 92, 91, 106, 0, 103, 104, 105, 89, 88, 87]
	},
	{
		linenumber: 3,
		primary:  'mot Regementet',
		reverse: 'mot Vasaplan',
		stops: [0,1,2,3]
	},
	{
		linenumber: 5,
		primary:  'mot Ersmark',
		reverse: 'mot Strömpilen',
		stops: [45,44,43,42,41,40,39,114,113,112,111,110,109,108,107,106,0,1,2,38,37,36,35,34,32,30,29,121,125,126,28,27,26,25,24,23,22,21,20]
	},
	{
		linenumber: 7,
		primary:  'mot Rödäng',
		reverse: 'mot Mariehem',
		stops: [46, 47, 48, 102, 101, 100, 1, 0, 49, 50, 51, 52, 53, 54, 55, 56, 57, 115, 116]
	},
	{
		linenumber: 8,
		primary:  'mot Tomtebo',
		reverse: 'mot Ö Ersboda',
		stops: [66, 65, 64, 63, 62, 61, 114, 113, 112, 111, 110, 109, 108, 107, 106, 0, 1, 2, 59, 126, 125, 58, 122, 123, 124]
	},
	{
		linenumber: 9,
		primary:  'mot Röbäck',
		reverse: 'mot Carlshöjd',
		stops: [67, 68, 69, 70, 71, 72, 73, 74, 76, 77, 78, 79, 105, 104, 103, 0, 106, 107, 108, 109, 110, 111, 80, 81, 82, 83, 42, 84, 85, 86  ]
	},
	{
		linenumber: 72,
		primary:  'mot Umedalen',
		reverse: 'mot Universitetet',
		stops: []
	},
	{
		linenumber: 75,
		primary:  'mot Innertavle',
		reverse: 'mot Vasaplan',
		stops: []
	}
]