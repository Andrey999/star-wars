import React, { useEffect, useState } from 'react'
import { makeConcurrentRequest, changeHttp } from 'utils/network'
import './style.css'

interface SinglePeopleMoviesProps {
    singlePeopleMovies: any
}

const SinglePeopleMovies = ({ singlePeopleMovies }: SinglePeopleMoviesProps) => {
    const [movies, setMovies] = useState<Array<any>>([])

    useEffect(() => {
        (async () => {
            const filmsHttps = singlePeopleMovies.map((url: any) => changeHttp(url))
            const films = await makeConcurrentRequest(filmsHttps)
            setMovies(films)
        })()
        return () => setMovies([])
    }, [])

    return (
        <div className="singleMovies__wrapper">
            <ul>
                {movies.sort((a, b) => a.episode_id > b.episode_id ? 1 : -1).map((item: any) => {
                    return <li className="singleMovies__list-item" key={item.episode_id}>
                        <span className="singleMovies__episode">Episode {item.episode_id}</span>
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default SinglePeopleMovies