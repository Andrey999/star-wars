import React, { useContext, useState, useEffect } from 'react'
import { setThemeCssVariable } from 'utils/setThemeCssVariables'
import { setLocalStorage, getLocalStorage } from 'utils/localStorage'

interface ThemeContextInterface {
    theme: string | {}
    changeTheme: (themeName: string) => void
}

export const ThemeContext = React.createContext<ThemeContextInterface | null>(null)

export const THEME_NEITRAL = 'neitral'
export const THEME_DARK = 'dark'
export const THEME_LIGHT = 'light'

export const ThemeProvider: React.FC = ({ children, ...props }) => {
    const [theme, setTheme] = useState<string | {}>({})

    useEffect(() => {
        const getThemeKey = getLocalStorage('theme')
        setTheme(getThemeKey)
        setThemeCssVariable(getThemeKey)
    }, [])

    const changeTheme = (themeName: string) => {
        setLocalStorage('theme', themeName)
        setTheme(themeName)
        setThemeCssVariable(themeName)
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)