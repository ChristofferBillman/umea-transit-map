import BusStop from '../types/BusStop'

export const stops: BusStop[] = [
	// Line 3
	{
		id: 3,
		name: 'Midgårdsskolan',
		lineIds: [3]
	},
	// Line 1 - unique
	{
		id: 4 ,
		name: 'Ängesvägen',
		lineIds: [1]
	},
	{
		id: 5,
		name: 'Stadsgränsvägen',
		lineIds: [1]
	},
	{
		id: 6,
		name: 'Hartvigsgatan',
		lineIds: [1]
	},
	{
		id: 7,
		name: 'Gabrieljansvägen',
		lineIds: [1]
	},
	{
		id: 8,
		name: 'Kronoparksvägen',
		lineIds: [1]
	},
	{
		id:9,
		name: 'Kungsänget',
		lineIds: [1]
	},
	{
		id: 10,
		name: 'Hedvägen',
		lineIds: [1]
	},
	{
		id: 11,
		name: 'Klockarvägen',
		lineIds: [1]
	},
	{
		id: 12,
		name: 'Kyrkvägen',
		lineIds: [1]
	},
	{
		id: 13,
		name: 'Löftets gränd',
		lineIds: [1]
	},
	{
		id: 14,
		name: 'Glädjens gränd',
		lineIds: [1]
	},
	{
		id: 15,
		name: 'Paradisgränd',
		lineIds: [1]
	},
	{
		id: 16,
		name: 'Samhällsvetarhuset',
		lineIds: [1]
	},
	{
		id: 17,
		name: 'Liljansberget',
		lineIds: [1]
	},
	{
		id: 18,
		name: 'Bruksvägen',
		lineIds: [1]
	},
	{
		id: 19,
		name: 'Södra slevgränd',
		lineIds: [1]
	},
	// Line 5 unique
	{
		id: 20,
		name: 'Ersmark',
		lineIds: [5]
	},
	{
		id: 21,
		name: 'Aftonvägen',
		lineIds: [5]
	},
	{
		id: 22,
		name: 'Onsdagsvägen',
		lineIds: [5]
	},
	{
		id: 23,
		name: 'Skymningsvägen',
		lineIds: [5]
	},
	{
		id: 24,
		name: 'Gärsjöbäcksvägen',
		lineIds: [5]
	},
	{
		id: 25,
		name: 'Bron',
		lineIds: [5]
	},
	{
		id: 26,
		name: 'Ersforsen N',
		lineIds: [5]
	},
	{
		id: 27,
		name: 'Ersforsen S',
		lineIds: [5]
	},
	{
		id: 28,
		name: 'Måttgränd',
		lineIds: [5]
	},
	{
		id: 29,
		name: 'Mårdvägen',
		lineIds: [5]
	},
	{
		id:30 ,
		name: 'Vargvägen',
		lineIds: [5]
	},
	{
		id:32 ,
		name: 'Kapellvägen',
		lineIds: [5]
	},
	{
		id: 33,
		name: '',
		lineIds: [5]
	},
	{
		id: 34,
		name: 'Vallarestigen',
		lineIds: [5]
	},
	{
		id: 35,
		name: 'Dalstigen',
		lineIds: [5]
	},
	{
		id: 36,
		name: 'Solvändan',
		lineIds: [5]
	},
	{
		id: 37,
		name: 'Parkvägen',
		lineIds: [5]
	},
	{
		id: 38,
		name: 'Löjtnantsgatan',
		lineIds: [5]
	},
	{
		id: 39,
		name: 'Carlslid',
		lineIds: [5]
	},{
		id: 40,
		name: 'Flintvägen',
		lineIds: [5]
	},
	{
		id: 41,
		name: 'Gnejsvägen',
		lineIds: [5]
	},
	{
		id: 42,
		name: 'Kolbäcksvägen',
		lineIds: [5,9]
	},
	{
		id: 43,
		name: 'Dammen',
		lineIds: [5]
	},
	{
		id: 44,
		name: 'Strömpilen',
		lineIds: [5]
	},
	{
		id: 45,
		name: 'Tegelbruksvägen',
		lineIds: [5]
	},
	// Line 7 unique
	{
		id: 46,
		name: 'Rödberget',
		lineIds: [7]
	},
	{
		id: 47,
		name: 'Kornettstråket',
		lineIds: [7]
	},
	{
		id: 48,
		name: 'Västerslätt C',
		lineIds: [7]
	},
	{
		id: 49,
		name: 'Tuvgränd',
		lineIds: [7]
	},
	{
		id: 50,
		name: 'Sporthallen',
		lineIds: [7]
	},
	{
		id: 51,
		name: 'Gammlia',
		lineIds: [7]
	},
	{
		id: 52,
		name: 'Terrängvägen',
		lineIds: [7]
	},
	{
		id: 53,
		name: 'Magnusdalsvägen',
		lineIds: [7]
	},
	{
		id: 54,
		name: 'Blåbärsvägen',
		lineIds: [7]
	},
	{
		id: 55,
		name: 'Morkullevägen',
		lineIds: [7]
	},
	{
		id: 56,
		name: 'Bräntbergsskolan',
		lineIds: [7]
	},
	{
		id: 57,
		name: 'Trastvägen',
		lineIds: [7]
	},
	// Line 8 unique
	{
		id: 58,
		name: 'Ostkroken',
		lineIds: [8]
	},
	{
		id: 59,
		name: 'Kylgränd',
		lineIds: [8]
	},
	{
		id: 60,
		name: 'Regementet',
		lineIds: [8]
	},
	{
		id: 61,
		name: 'Mineralvägen',
		lineIds: [8]
	},
	{
		id: 62,
		name: 'Älvans väg',
		lineIds: [8]
	},
	{
		id: 63,
		name: 'Nornaplatsen',
		lineIds: [8]
	},

	{
		id: 64,
		name: 'Tomteboplatsen',
		lineIds: [8]
	},
	{
		id: 65,
		name: 'Källplatsen',
		lineIds: [8]
	},
	{
		id: 66,
		name: 'Lyktvägen',
		lineIds: [8]
	},
	// Line 9
	{
		id: 67,
		name: 'Mantelvägen',
		lineIds: [9]
	},
	{
		id: 68,
		name: 'Rosettvägen',
		lineIds: [9]
	},
	{
		id: 69,
		name: 'Röbäcks C',
		lineIds: [9]
	},
	{
		id: 70,
		name: 'Grusåsvägen',
		lineIds: [9]
	},
	{
		id: 71,
		name: 'Travbanevägen',
		lineIds: [9]
	},
	{
		id: 72,
		name: 'Klarbärsvägen',
		lineIds: [9]
	},
	{
		id: 73,
		name: 'Päronvägen',
		lineIds: [9]
	},
	{
		id: 74,
		name: 'Tranbärsvägen',
		lineIds: [9]
	},
	{
		id: 75,
		name: 'Volvo',
		lineIds: [9]
	},
	{
		id: 76,
		name: 'Umeliivägen',
		lineIds: [9]
	},
	{
		id: 77,
		name: 'Laxgränd',
		lineIds: [9]
	},{
		id: 78,
		name: 'Svedjebacken',
		lineIds: [9]
	},
	{
		id: 79,
		name: 'Bryggargatan',
		lineIds: [9]
	},
	{
		id: 80,
		name: 'Klintvägen',
		lineIds: [9]
	},
	{
		id: 81,
		name: 'Laboratorvägen',
		lineIds: [9]
	},
	{
		id: 82,
		name: 'Assistentvägen',
		lineIds: [9]
	},
	{
		id: 83,
		name: 'Elevstråket',
		lineIds: [9]
	},
	{
		id: 84,
		name: 'Porfyrvägen',
		lineIds: [9]
	},
	{
		id: 85,
		name: 'Kvartsvägen',
		lineIds: [9]
	},
	{
		id: 86,
		name: 'Carlshöjd',
		lineIds: [9]
	},
	// Line 2
	{
		id: 87,
		name: 'Söderslätts handelsområde',
		lineIds: [2]
	},
	{
		id: 88,
		name: 'Marknadsgatan',
		lineIds: [2]
	},
	{
		id: 89,
		name: 'Ishallen',
		lineIds: [2]
	},
	{
		id: 90,
		name: 'Tegs centralskola',
		lineIds: [2]
	},
	{
		id: 91,
		name: 'Ö Norrlandsgatan',
		lineIds: [2]
	},
	{
		id: 92,
		name: 'Fridhemsvägen',
		lineIds: [2]
	},
	{
		id: 93,
		name: 'Skidspåret',
		lineIds: [2]
	},
	{
		id: 94,
		name: 'IKSU-hallen',
		lineIds: [2]
	},
	{
		id: 95,
		name: 'Glaciärgatan',
		lineIds: [2]
	},
	{
		id: 96,
		name: 'Rullstensgatan',
		lineIds: [2]
	},
	{
		id: 97,
		name: 'Istidsgatan',
		lineIds: [2]
	},
	{
		id:98,
		name: 'Formvägen',
		lineIds: [2]
	},
	{
		id: 99,
		name: 'Ersboda handelsområde',
		lineIds: [2]
	},
	// Non-unique stops
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
		id: 100,
		name: 'Stadshuset',
		lineIds: [1,7]
	},{
		id: 101,
		name: 'Smedsgatan',
		lineIds: [1,7]
	},
	{
		id: 102,
		name: 'Dragonskolan',
		lineIds: [1,7]
	},
	{
		id: 103,
		name: 'Varvsgatan',
		lineIds: [2,9]
	},
	{
		id: 104,
		name: 'Obbolavägen',
		lineIds: [2,9]
	},
	{
		id: 105,
		name: 'Tegs C',
		lineIds: [2,9]
	},
	{
		id: 106,
		name: 'Församlingsgården',
		lineIds: [1,2,9,8,5]
	},
	{
		id: 107,
		name: 'Fabriksgatan',
		lineIds: [9,1,8,5]
	},
	{
		id: 108,
		name: 'Östra strandgatan',
		lineIds: [9,1,8,5]
	},
	{
		id: 109,
		name: 'Östermalmsgatan',
		lineIds: [9,1,8,5]
	},
	{
		id: 110,
		name: 'Universitetssjukhuset',
		lineIds: [9,1,8,5]
	},
	{
		id: 111,
		name: 'Universum',
		lineIds: [2,5,8]
	},
	{
		id: 112,
		name: 'Växthuset',
		lineIds: [2,5,8]
	},
	{
		id: 113,
		name: 'Ålidhöjd',
		lineIds: [5,8]
	},
	{
		id: 114,
		name: 'Ålidhems C',
		lineIds: [5,8]
	},
	{
		id: 115,
		name: 'Mariehems C',
		lineIds: [1,2,7]
	},
	{
		id: 116,
		name: 'Nydala',
		lineIds: [1,2,7]
	},
	{
		id: 117,
		name: 'Mariehemshöjd',
		lineIds: [1,2]
	},
	{
		id: 118,
		name: 'Marieberg',
		lineIds: [1,2]
	},
	{
		id: 119,
		name: 'Mariebergsskolan',
		lineIds: [1,2]
	},
	{
		id: 120,
		name: 'Hermelinvägen',
		lineIds: [1,2]
	},
	{
		id: 121,
		name: 'Fogvägen',
		lineIds: [1,2,5]
	},
	{
		id: 122,
		name: 'Byttgränd',
		lineIds: [1,8]
	},
	{
		id: 123,
		name: 'Kärnvägen',
		lineIds: [1,8]
	},
	{
		id: 124,
		name: 'Ö Ersboda',
		lineIds: [1,8]
	},
	{
		id: 125,
		name: 'V Ersboda C',
		lineIds: [5,8]
	},
	{
		id: 126,
		name: 'Snipgränd',
		lineIds: [5,8]
	},
]