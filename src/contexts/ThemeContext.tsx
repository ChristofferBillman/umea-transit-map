import React, { createContext, useContext, useEffect, useState } from 'react'
interface Theme {
	isDark: boolean
	isColor: boolean
	bg: string
	text: string
	slidercolor: string
	water: string
	lightbg: string
	colors: Map<number,string>
}

type SetterOptions = 'dark' | 'light' | 'toggleLineColors'

const lineColors: Map<number, string> = new Map([
	[1,'#E52F2F'],
	[2,'#2F78E5'],
	[3,'#85DEDE'],
	[5,'#E5862F'],
	[7,'#37922F'],
	[8,'#7FE52F'],
	[9,'#E9C400'],
	[72,'#41719e'],
	[75,'#548e96']])

const lineNoColors: Map<number, string> = new Map([
	[1,'#E52F2F'],
	[2,'#C5C5C5'],
	[3,'#C5C5C5'],
	[5,'#C5C5C5'],
	[7,'#C5C5C5'],
	[8,'#7FE52F'],
	[9,'#E9C400'],
	[72,'#C5C5C5'],
	[75,'#C5C5C5']])

const lineNoColorsDark: Map<number, string> = new Map([
	[1,'#E52F2F'],
	[2,'#5E5E5E'],
	[3,'#5E5E5E'],
	[5,'#5E5E5E'],
	[7,'#5E5E5E'],
	[8,'#7FE52F'],
	[9,'#E9C400'],
	[72,'#5E5E5E'],
	[75,'#5E5E5E']])

const darkTheme = {
	isDark: true,
	isColor: true,
	bg: '#282828',
	lightbg: '#202020',
	slidercolor: '#111',
	water: '#323738',
	text: '#EEE',
	colors: lineColors
}
const lightTheme = {
	isDark: false,
	isColor: true,
	bg: '#EEE',
	text: '#282828',
	slidercolor: '#DDD',
	water: '#EAF6F7',
	lightbg: '#FFF',
	colors: lineColors
}

const ThemeContextState = createContext(lightTheme)
const ThemeContextSetter = createContext<(options: SetterOptions) => void>(() => {/* eslint-moment */})

export const useThemeContextState = () => {
	return useContext(ThemeContextState)
}

export const useThemeContextSetter = () => {
	return useContext(ThemeContextSetter)
}

export const ThemeContextProvider = ({children}: React.PropsWithChildren) => {
	const [theme, setThemeInternal] = useState<Theme>(lightTheme)

	/*const setDarkTheme = (dark: boolean): void => {
		dark ? setTheme(darkTheme) : setTheme(lightTheme)
	}*/

	// This logic is not completed. Not working.
	const setTheme = (option: SetterOptions)  => {
		switch(option) {
		case 'dark': setThemeInternal({...darkTheme, colors: theme.isColor ? lineColors : lineNoColorsDark, isColor: theme.isColor})
			break
		case 'light': setThemeInternal({...lightTheme, colors: theme.isColor ? lineColors : lineNoColors, isColor: theme.isColor})
			break
		case 'toggleLineColors': 
			if(theme.isColor) {
				// Set no color
				setThemeInternal({...theme, colors: theme.isDark ? lineNoColorsDark : lineNoColors, isColor: false})
			}
			else {
				// Set color
				setThemeInternal({...theme, colors: lineColors, isColor: true})
			}
			break
		}
		console.log(theme)
	}

	useEffect(() => {
		for(const [key,value] of Object.entries(theme)) {
			document.documentElement.style.setProperty('--' + key, value)
		}
	},[theme])

	return <ThemeContextState.Provider value={theme}>
		<ThemeContextSetter.Provider value={setTheme}>
			{children}
		</ThemeContextSetter.Provider>
	</ThemeContextState.Provider>
}

