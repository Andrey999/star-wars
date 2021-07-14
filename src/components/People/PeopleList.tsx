import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

interface PeopleListProps {
    item: any
}

export const PeopleList = ({ item }: PeopleListProps) => {
    return (
        <li className="list__item">
            <Link to={`/people/${item.id}`}>
                <img src={item.image} className="list__image" alt="people" />
                <p>{item.name}</p>
            </Link>
        </li>
    )
}