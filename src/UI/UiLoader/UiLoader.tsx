import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import './UiLoader.css'

interface UiLoaderProps {
    theme?: string | null
}

export const UiLoader = ({ theme }: UiLoaderProps) => {
    const [loaderColor, setLoaderColor] = useState(theme)

    useEffect(() => {
        switch (theme) {
            case 'black': setLoaderColor('black')
            case 'blue': setLoaderColor('blue')
            default: theme
        }
    }, [])

    return (
        <div className={cn('loader', loaderColor)}></div>
    )
}