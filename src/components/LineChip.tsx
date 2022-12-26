import { useThemeContextState } from '../contexts/ThemeContext'
import '../styles/linelist.css'

interface ILineChipProps {
	lineNumber: number
}

export default function LineChip({lineNumber}: ILineChipProps) {

	const ThemeContext = useThemeContextState()

	return <div className='chip-container' style={{backgroundColor: ThemeContext.colors[lineNumber]}}>
		<p className='chip-text'>{lineNumber}</p>
	</div>
}