import React, { ChangeEvent } from 'react'
import './style.css'

interface UiInputProps {
    value: string
    handleInputChange: (value: ChangeEvent<HTMLInputElement>) => void
    placeholder: string
}

export const UiInput = (props: UiInputProps) => {
    return (
        <div className="input__wrapper">
            <input
                className="input"
                type="text"
                value={props.value}
                onChange={props.handleInputChange}
                placeholder={props.placeholder}
            />
        </div>
    )
}