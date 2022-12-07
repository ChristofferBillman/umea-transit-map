import { MapState } from '../components/Map'

export enum EMapStateKind {
	TOGGLE_WATER,
	TOGGLE_LABELS,
	TOGGLE_STOPS,
	TOGGLE_LINELABELS,
	TOGGLE_LINECOLORS
}

export interface IMapStateAction {
	type: EMapStateKind,
	payload?: void
}

export default function MapStateReducer(state: MapState, action: IMapStateAction) {
	switch(action.type) {
	case EMapStateKind.TOGGLE_WATER:
		return {
			...state,
			water: !state.water,
		}
	case EMapStateKind.TOGGLE_LABELS:
		return {
			...state,
			labels: !state.labels,
		}
	case EMapStateKind.TOGGLE_STOPS:
		return {
			...state,
			stops: !state.stops,
		}
	case EMapStateKind.TOGGLE_LINELABELS:
		return {
			...state,
			lineLabels: !state.lineLabels,
		}
	case EMapStateKind.TOGGLE_LINECOLORS:
		return {
			...state,
			lineColor: !state.lineColor,
		}
	}
}