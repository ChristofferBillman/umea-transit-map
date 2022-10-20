import { BusStopData } from '../components/DetailMenu'

export enum EStopStateKind {
	SET_STOP
}

export interface IStopStateAction {
	type: EStopStateKind,
	payload: string
}

export default function StopStateReducer(state: BusStopData, action: IStopStateAction) {
	switch(action.type) {
	case EStopStateKind.SET_STOP:
		return {
			name: action.payload,
		}
	}
}