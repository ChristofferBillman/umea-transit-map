import { useThemeContext } from '../contexts/ThemeContext'

interface ILineChipProps {
	lineNumber: number
}

export default function LineChip({lineNumber}: ILineChipProps) {

	const themeContext = useThemeContext()

	return <div className='chip-container' style={{backgroundColor: themeContext.lineColors[lineNumber]}}>
		<p className='chip-text'>{lineNumber}</p>
	</div>
}