import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { setPersonToFavorite, removePersonFromFavorite } from 'store/actions/favoriteAction'
import './style.css'

interface SinglePeopleImageProps {
    singlePeopleImage: string | undefined
    singlePeopleName: string
    singlePeopleId: string
    favorite: boolean
    setFavorite: (item: boolean) => void
}

export const SinglePeopleImage = ({ singlePeopleImage, singlePeopleName, singlePeopleId, favorite, setFavorite }: SinglePeopleImageProps) => {
    const dispatch = useDispatch()
    
    const setToFavorite = () => {
        if (favorite) {
            dispatch(removePersonFromFavorite(singlePeopleId))
            setFavorite(false)
        } else {
            dispatch(setPersonToFavorite({
                [singlePeopleId]: {
                    name: singlePeopleName,
                    img: singlePeopleImage
                }
            }))
            setFavorite(true)
        }
    }

    return (
        <Fragment>
            <div className="singlePeople__image-container">
                <img className="singlePeople__image" src={singlePeopleImage} alt="" />

                <img className="favorite" onClick={setToFavorite} src={
                    favorite ?
                        require('../../static/favorite-filled.svg').default
                        :
                        require('../../static/favorite-default.svg').default
                }
                />
            </div>
        </Fragment>
    )
}