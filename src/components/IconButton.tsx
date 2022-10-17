import '../styles/IconButton.css'

import HambugerIcon from '../img/hamburger.svg'

interface IIconButtonProps {
	onClick?: () => void,
	className?: string
}

export default function IconButton({onClick, className}: IIconButtonProps) {
	return (
		<img
			src={HambugerIcon}
			className={'icon-button ' + className}
			onClick={onClick}
		/>
	)
}