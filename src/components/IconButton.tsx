import '../styles/IconButton.css'

import HambugerIcon from '../img/hamburger.svg'
import { useThemeContextState } from '../contexts/ThemeContext'

interface IIconButtonProps {
	onClick?: () => void,
	className?: string,
	icon?: string
}

export default function IconButton({onClick, className, icon}: IIconButtonProps) {

	const ThemeContext = useThemeContextState()

	return (
		<div onClick={onClick}>
			<img
				src={icon === undefined ? HambugerIcon : icon}
				className={'icon-button ' + className}
				style={ThemeContext.isDark ? {filter: 'brightness(600%)'} : {filter: 'none'}}
			/>
		</div>
	)
}