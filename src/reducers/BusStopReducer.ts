import BusStop from '../types/BusStop'

import { stops } from '../data/StopData'

export enum EStopStateKind {
	SET_STOP,
}

export interface IStopStateAction {
	type: EStopStateKind,
	payload: string
}

export default function StopStateReducer(state: BusStop, action: IStopStateAction): BusStop {
	switch(action.type) {
	case EStopStateKind.SET_STOP:
		for(const stop of stops) {
			if(stop.name == action.payload) {
				return stop
			}
		}
		console.error('Error in BuStopReducer: Bus stop ' + action.payload + ' was not found.' )
		return {
			...state,
			name: 'Något gick fel'
		}
	}
}