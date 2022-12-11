import { createContext, useContext, useState } from 'react'

interface IThemeContextProviderProps {
		children: JSX.Element[],
}
interface Theme {
	lineColors: any
}

const docstyle = getComputedStyle(document.documentElement)

const ThemeContext = createContext({} as Theme )

export const useThemeContext = () => {

	const context = useContext(ThemeContext)

	if (context === undefined) {
		throw new Error('ThemeContext must be used within a ThemeContextProvider')
	}

	return context
}

export default function ThemeContextProvider({children}: IThemeContextProviderProps): any {
	const [theme, setTheme] = useState({
		lineColors: {
			'1': docstyle.getPropertyValue('--red'),
			'2': docstyle.getPropertyValue('--blue'),
			'3': docstyle.getPropertyValue('--cyan'),
			'5': docstyle.getPropertyValue('--orange'),
			'7': docstyle.getPropertyValue('--green'),
			'8': docstyle.getPropertyValue('--lime'),
			'9': docstyle.getPropertyValue('--yellow')
		}
	})

	return (
		<ThemeContext.Provider value={theme}>
			{children}
		</ThemeContext.Provider>
	)
}