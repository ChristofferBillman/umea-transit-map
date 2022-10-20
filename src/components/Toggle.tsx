import { Dispatch, SetStateAction } from 'react'
import '../styles/Toggle.css'

interface IToggleProps {
	color?: string,
	enabled: boolean,
	setEnabled: Dispatch<SetStateAction<boolean>>,
	label?: string
}

export default function Toggle({color, enabled, setEnabled, label}: IToggleProps) {

	return (
		<div className='switch-container'>
			<p>{label}</p>
			<label className="switch">
				<input
					type="checkbox"
					value={String(enabled)}
					onChange={() => setEnabled(!enabled)}
				/>
				<span className="slider round"/>
			</label>
		</div>
	)

}