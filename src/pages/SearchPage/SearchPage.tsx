import React, { useState, useEffect, useCallback } from 'react'
import { getApiResource } from 'utils/network'
import { SEARCH_PEOPLE } from 'constants/api'
import { withErrorApi } from '../../hoc/withErrorApi'
import { getPeopleId, getPeopleImage } from 'utils/getUrlId'
import { UiInput } from 'UI/UiInput/UiInput'
import { UiLoader } from 'UI/UiLoader/UiLoader'
import { PeopleList } from 'components/People/PeopleList'
import { debounce } from 'lodash'
import './style.css'

interface SearchPageProps {
    setErrorApi: (bool: boolean) => void
}

const SearchPage = ({ setErrorApi }: SearchPageProps) => {
    const [value, setValue] = useState('')
    const [people, setPeople] = useState([])

    const getResponse = async (value: string) => {
        const res = await getApiResource(SEARCH_PEOPLE + value)
        if (!res) setErrorApi(true)
        else if(res.count == 0) return <p>No data</p> 

        const peopleList = res.results.map((item: any) => {
            const id = getPeopleId(item.url)
            const img = getPeopleImage(id)

            return { id, name: item.name, image: img }
        })
        setPeople(peopleList)
    }

    useEffect(() => {
        getResponse('') // для отображения первых 10 персонажей, чтобы страница не была пустой
    }, [])

    const debounceGetResponse = useCallback(debounce(value => getResponse(value), 300), [])

    const handleInputChange = (event: any) => {
        setValue(event.target.value)
        debounceGetResponse(event.target.value)
    }

    return (
        <div>
            <h1 className="header__text">Search</h1>

            <UiInput
                value={value}
                handleInputChange={handleInputChange}
                placeholder="Search name"
            />

            <ul className="favorite__container">
                {people.length
                    ? people.map((item: any) => <PeopleList key={item.id} item={item} />)
                    : <UiLoader />
                }
            </ul>
        </div>
    )
}

export default withErrorApi(SearchPage)