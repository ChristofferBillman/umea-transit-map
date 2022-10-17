import '../styles/Menu.css'

import { useState } from 'react'
import IconButton from './IconButton'

export default function Menu(): JSX.Element {

	const [open, setOpen] = useState<boolean>(false)

	return (
		<>
			<IconButton
				className='hamburger'
				onClick={() => {
					console.log('hej!')
					setOpen(!open)}}
			/>

			<div className={`menu-container ${open ? 'open' : 'closed'}`}>
				<p>Hej</p>
			</div>
		</>
	)
}