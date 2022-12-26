import React, { createContext, useContext, useEffect, useState } from 'react'
interface Theme {
	isDark: boolean
	bg: string
	text: string
	slidercolor: string
	water: string
	lightbg: string
	colors: string[]
}
const lineColors = [
	'#C5C5C5',
	'#E52F2F',
	'#2F78E5',
	'#85DEDE',
	'#C5C5C5',
	'#E5862F',
	'#C5C5C5',
	'#37922F',
	'#7FE52F',
	'#E9C400'
]

const darkTheme = {
	isDark: true,
	bg: '#282828',
	lightbg: '#202020',
	slidercolor: '#111',
	water: '#323738',
	text: '#EEE',
	colors: lineColors
}
const lightTheme = {
	isDark: false,
	bg: '#EEE',
	text: '#282828',
	slidercolor: '#DDD',
	water: '#EAF6F7',
	lightbg: '#FFF',
	colors: lineColors
}

const ThemeContextState = createContext(lightTheme)
const ThemeContextSetter = createContext<(dark: boolean) => void>(() => {/* eslint-moment */})

export const useThemeContextState = () => {
	return useContext(ThemeContextState)
}

export const useThemeContextSetter = () => {
	return useContext(ThemeContextSetter)
}

export const ThemeContextProvider = ({children}: React.PropsWithChildren) => {
	const [theme, setTheme] = useState<Theme>(lightTheme)

	const setDarkTheme = (dark: boolean): void => {
		dark ? setTheme(darkTheme) : setTheme(lightTheme)
	}

	useEffect(() => {
		for(const [key,value] of Object.entries(theme)) {
			document.documentElement.style.setProperty('--' + key, value)
		}
	},[theme])

	return <ThemeContextState.Provider value={theme}>
		<ThemeContextSetter.Provider value={setDarkTheme}>
			{children}
		</ThemeContextSetter.Provider>
	</ThemeContextState.Provider>
}

