import React from 'react'
import { Link } from 'react-router-dom'
import { IPeopleList } from 'types/type'
import './style.css'

interface PeopleListProps {
    item: IPeopleList
}

export const PeopleList = ({ item }: PeopleListProps) => (
    <li className="list__item">
        <Link to={`/people/${item.id}`}>
            <img src={item.image} className="list__image" alt="people" />
            <p>{item.name}</p>
        </Link>
    </li>
)