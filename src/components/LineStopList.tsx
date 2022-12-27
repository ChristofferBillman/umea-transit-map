
import { useThemeContextState } from '../contexts/ThemeContext'
import Lines from '../data/Lines'
import Stops from '../data/Stops'
import '../styles/LineStopList.css'

interface ILineStopListProps {
    lineId: number
}
export default function LineStopList({lineId}: ILineStopListProps): JSX.Element {

	const currentLine = Lines.getLineById(lineId)

	const themeContext = useThemeContextState()

	return <div>
		{currentLine?.stops.map((stopId: number) =>{
			const currentStop = Stops.getStopById(stopId)
			return <div key={stopId} style={{display: 'flex'}}>
				<div className='line' style={{backgroundColor: themeContext.colors.get(currentLine.linenumber)}}>
					<div className='stop'/>
				</div>
				<h3>{currentStop?.name}</h3>
			</div>
		})}
	</div>
}