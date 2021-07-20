import React from 'react'
import './style.css'

interface UiVideoProps {
    // playbackRate: number
    src: any
}

export const UiVideo = (props: UiVideoProps) => {
    return (
        <video className="video__wrapper" loop autoPlay muted>
            <source
                className=""
                src={props.src}
            />
        </video>
    )
}