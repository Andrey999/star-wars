import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Favorite } from '../Favorite/Favorite'
import { useTheme, THEME_NEITRAL, THEME_DARK, THEME_LIGHT } from 'context/ThemeProvider'
import './style.css'

export const Header = () => {
    const isTheme = useTheme()
    const [icon, setIcon] = useState(require('../../static/droid.svg').default)

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT:
                return setIcon(require('../../static/lightsaber.svg').default)
            case THEME_DARK:
                return setIcon(require('../../static/space-station.svg').default)
            case THEME_NEITRAL:
                return setIcon(require('../../static/droid.svg').default)
        }
    }, [isTheme])

    return (
        <div className="header">
            <img className="header__logo" src={icon} alt="star wars icon" />
            <ul className="header__list-container">
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink to="/search" exact>Search</NavLink></li>
                <li><NavLink to="/not-found" exact>NotFound</NavLink></li>
                <li><NavLink to="/fail" exact>Fail</NavLink></li>
            </ul>
            <Favorite />
        </div>
    )
}

