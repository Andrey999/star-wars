import React, { Fragment } from 'react'
import { HomeTheme } from 'components/Home/HomeTheme'
import './style.css'

export const HomePage = () => {
    return (
        <Fragment>
            <h1 className="header__text" >Home Page</h1>
            <HomeTheme />
        </Fragment>
    )
}