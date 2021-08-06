import React, { ChangeEvent } from 'react'
import { useHistory } from 'react-router'
import './style.css'

export const GoBackButton = () => {
    const history = useHistory()

    const handleGoBack = (e: ChangeEvent<unknown>) => {
        e.preventDefault()
        history.goBack()
    }

    return (
        <a href="#" className="btn__back" onClick={handleGoBack}>
            <img className="btn__back-icon" src={require('../../static/btn.svg').default} alt="Go Back" />
            <span className="btn__back-text">Go back</span>
        </a>
    )
}