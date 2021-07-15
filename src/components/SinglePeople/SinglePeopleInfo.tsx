import React from 'react'
import './style.css'

interface SinglePeopleInfoProps {
    items: { title: string, data: string }
}

export const SinglePeopleInfo = ({ items }: SinglePeopleInfoProps) => {
    return (
        <li className="singlePeople__list">
            <span className="singlePeople__title">{items.title}: {items.data}</span>
        </li>
    )
}