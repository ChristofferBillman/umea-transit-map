import Line from '../types/Line'
import {lines} from './LineData'
export default class Lines {
	public static getLineById(lineNumber: number): Line|undefined {
		return lines.find(lineObj => lineObj.linenumber == lineNumber)
	}
}