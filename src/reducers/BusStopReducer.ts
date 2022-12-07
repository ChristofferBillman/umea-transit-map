import { BusStopData } from '../components/DetailMenu'

export enum EStopStateKind {
	SET_STOP,
}

export interface IStopStateAction {
	type: EStopStateKind,
	payload: string
}

export default function StopStateReducer(state: BusStopData, action: IStopStateAction): BusStopData {
	switch(action.type) {
	case EStopStateKind.SET_STOP:
		return {
			id: action.payload,
			name: action.payload,
			info: 'empty',
			linespassing: [1]
		}
	}
}