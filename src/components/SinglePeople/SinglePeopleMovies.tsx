import React, { useEffect, useState } from 'react'
import { makeConcurrentRequest, changeHttp } from 'utils/network'
import { UiLoader } from 'UI/UiLoader/UiLoader'
import { ISinglePeopleMovies } from 'types/type'
import './style.css'

interface SinglePeopleMoviesProps {
    singlePeopleMovies: Array<string>
}

const SinglePeopleMovies = ({ singlePeopleMovies }: SinglePeopleMoviesProps) => {
    const [movies, setMovies] = useState<Array<ISinglePeopleMovies>>([])

    useEffect(() => {
        (async () => {
            const filmsHttps = singlePeopleMovies.map(url => changeHttp(url))
            const films = await makeConcurrentRequest(filmsHttps)
            setMovies(films)
        })()
    }, [])

    return (
        <div className="singleMovies__wrapper">
            {!movies.length && <UiLoader />}
            <ul>
                {movies.sort((a, b) => a.episode_id > b.episode_id ? 1 : -1)
                    .map(item =>
                        <li className="singleMovies__list-item" key={item.episode_id}>
                            <span className="singleMovies__episode">Episode {item.episode_id}</span>
                            <span>{item.title}</span>
                        </li>
                    )}
            </ul>
        </div>
    )
}

export default SinglePeopleMovies