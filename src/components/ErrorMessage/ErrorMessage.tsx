import React, { Fragment } from 'react'
import { UiVideo } from 'UI/UiVideo/UiVideo'
import './style.css'

export const ErrorMessage = () => {
    return (
        <Fragment>
            <p className="error__text">The dark side of the force has won. <br />
                We cannot display data. <br />
                Come back when we fix everything
            </p>

            <UiVideo
                src={require('../../static/video/han-solo.mp4').default}
            />
        </Fragment>
    )
}