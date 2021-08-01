import React from 'react'
import { useTheme, THEME_NEITRAL, THEME_DARK, THEME_LIGHT } from 'context/ThemeProvider'
import './style.css'

export const HomeTheme = () => {
    const isTheme: any = useTheme()

    return (
        <div className="homeTheme__wrapper">
            <div className="homeTheme__container">
                <span className="homeTheme__text">Light Side</span>
                <img
                    className="homeTheme__img"
                    src={(require('../../static/light-side.jpg').default)}
                    alt="Light Side"
                    onClick={() => isTheme.changeTheme(THEME_LIGHT)}
                />
            </div>

            <div className="homeTheme__container">
                <span className="homeTheme__text">Dark Side</span>
                <img
                    className="homeTheme__img"
                    src={(require('../../static/falcon.jpg').default)}
                    alt="Dark Side"
                    onClick={() => isTheme.changeTheme(THEME_NEITRAL)}
                />
            </div>

            <div className="homeTheme__container">
                <span className="homeTheme__text">I'm Han Solo</span>
                <img
                    className="homeTheme__img"
                    src={(require('../../static/dark-side.jpg').default)}
                    alt="I'm Han Solo" 
                    onClick={() => isTheme.changeTheme(THEME_DARK)}
                />
            </div>
        </div>
    )
}