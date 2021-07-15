import React from 'react'
import cn from 'classnames'
import './UiButton.css'

interface UiButtonProps {
    text: string
    disabled: boolean
    theme: string
}

export const UiButton = ({ theme='dark', text, disabled }: UiButtonProps) => {
    return (
        <button
            className={cn('pagination__button', theme)}
            disabled={disabled}
        >
            {text}
        </button>
    )
}