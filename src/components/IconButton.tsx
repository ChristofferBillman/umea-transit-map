import '../styles/IconButton.css'

import HambugerIcon from '../img/hamburger.svg'

interface IIconButtonProps {
	onClick?: () => void,
	className?: string,
	icon?: string
}

export default function IconButton({onClick, className, icon}: IIconButtonProps) {
	return (
		<img
			src={icon === undefined ? HambugerIcon : icon}
			className={'icon-button ' + className}
			onClick={onClick}
		/>
	)
}