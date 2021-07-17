import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.css'

export const Favorite = () => {
    const storeData = useSelector((state: any) => state.favoriteReducer)
    
    return (
        <div className="bookmark__container">
            <Link to="/favorite">
                <span className="bookmark__counter">{Object.keys(storeData.favorite).length}</span>
                <img className="bookmark__image" src={require('../../static/bookmark.svg').default} alt="Favorite" />
            </Link>
        </div>
    )
}