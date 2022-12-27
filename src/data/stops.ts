import BusStop from '../types/BusStop'
import {stops} from './StopData'
export default class Stops {
	public static getStopById(stopId: number): BusStop|undefined {
		return stops.find(allStop => allStop.id == stopId)
	}
}