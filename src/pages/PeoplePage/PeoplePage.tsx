import React, { useState, useEffect, Fragment } from 'react'
import { getApiResource, changeHttp } from 'utils/network'
import { API_PEOPLE } from 'constants/api'
import { getPeopleId, getPeopleImage, getPeoplePageId } from 'utils/getUrlId'
import { PeopleList } from 'components/People/PeopleList'
import { withErrorApi } from 'hoc/withErrorApi'
import { useQueryParams } from 'hooks/useQueryParams'
import { PeoplePagination } from 'components/People/PeoplePagination'
import { UiLoader } from 'UI/UiLoader/UiLoader'
import { IPeople, IPeopleList } from 'types/type'
import './style.css'

interface PeoplePageProps {
    setErrorApi: (bool: boolean) => void
}

const PeoplePage = (props: PeoplePageProps) => {
    const [people, setPeople] = useState<Array<IPeopleList>>([])
    const [nextPage, setNextPage] = useState<string | null>(null)
    const [prevPage, setPrevPage] = useState<string | null>(null)
    const [countPage, setCountPage] = useState<number | null>(1)
    
    const query = useQueryParams()
    const queryPage = query.get('page')

    const getPeople = async (url: string) => {
        const res: IPeople = await getApiResource(url)

        if (res) {
            const data = res.results.map(elements => {
                const id = getPeopleId(elements.url)
                const image = getPeopleImage(id || '')

                return { id, name: elements.name, image }
            })
            setPeople(data)
            setNextPage(changeHttp(res.next))
            setPrevPage(changeHttp(res.previous))
            setCountPage(getPeoplePageId(url))
        } else {
            props.setErrorApi(true)
        }
    }

    useEffect(() => {
        getPeople(API_PEOPLE + queryPage)
    }, [queryPage])

    return (
        <Fragment>
            <PeoplePagination
                nextPage={nextPage}
                prevPage={prevPage}
                countPage={countPage}
            />

            <ul className="list__container">
                {!people.length && <UiLoader />}
                {people.map(item => <PeopleList key={item.id} item={item} />)}
            </ul>
        </Fragment>
    )
}
export default withErrorApi(PeoplePage)