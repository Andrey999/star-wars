import React, { useState, useEffect, useCallback, ChangeEvent } from 'react'
import { getApiResource } from 'utils/network'
import { SEARCH_PEOPLE } from 'constants/api'
import { withErrorApi } from '../../hoc/withErrorApi'
import { getPeopleId, getPeopleImage } from 'utils/getUrlId'
import { UiInput } from 'UI/UiInput/UiInput'
import { PeopleList } from 'components/People/PeopleList'
import { IPeopleList } from 'types/type'
import { debounce } from 'lodash'
import './style.css'

interface SearchPageProps {
    setErrorApi: (bool: boolean) => void
}

const SearchPage = ({ setErrorApi }: SearchPageProps) => {
    const [value, setValue] = useState('')
    const [people, setPeople] = useState<Array<IPeopleList>>([])
    const [count, setCount] = useState(1)

    const getResponse = async (value: string) => {
        const res = await getApiResource(SEARCH_PEOPLE + value)
        if (!res) setErrorApi(true)
        setCount(res.count)

        const peopleList = res.results.map((item: IPeopleList) => {
            const id = getPeopleId(item.url || '')
            const img = getPeopleImage(id || '')

            return { id, name: item.name, image: img }
        })
        setPeople(peopleList)
    }

    useEffect(() => {
        getResponse('')  // для отображения первых 10 персонажей, чтобы страница не была пустой
    }, [])

    const debounceGetResponse = useCallback(debounce(value => getResponse(value), 300), [])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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
                {count == 0 ?
                    <p className="noData__text">Ничего не найдено</p>
                    : people.map(item => <PeopleList key={item.id} item={item} />)
                }
            </ul>
        </div>
    )
}

export default withErrorApi(SearchPage)