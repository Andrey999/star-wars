import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PeopleList } from 'components/People/PeopleList'
import { IPeopleList } from 'types/type'
import './style.css'

// type TypeName = ({ name: string; img: string } | string)[]

export const FavoritePage = () => {
    const state = useSelector((state: any) => state.favoriteReducer)
    const [people, setPeople] = useState<IPeopleList[]>([])

    useEffect(() => {
        const arrPeople = Object.entries(state.favorite)

        if (arrPeople.length) {
            const favoritePeople = arrPeople.map((item: any) => {
                return {
                    id: item[0],
                    // ...item[1]
                    name: item[1].name,
                    image: item[1].img
                }
            })
            setPeople(favoritePeople)
        }
    }, [])

    return (
        <ul className="favorite__container">
            {people.length
                ? people.map(item => <PeopleList key={item.id} item={item} />)
                : <h1 className="favoritePage__noData">Здесь будут любимые персонажи</h1>
            }
        </ul>
    )
}

