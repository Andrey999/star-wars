import React from 'react'
import { useLocation } from 'react-router'
import './style.css'

export const NotFoundPage = () => {
    const location = useLocation()

    return (
        <div>
            <img className="notFound__img" src={require('../../static/notFound.png').default} alt="" />
            <p className="notFound__text">no match for {location.pathname}</p>
        </div>
    )
}