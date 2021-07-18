import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getApiResource } from 'utils/network'
import { getPeopleImage } from 'utils/getUrlId'
import { SINGLE_PEOPLE } from 'constants/api'
import { withErrorApi } from 'hoc/withErrorApi'
import { SinglePeopleImage } from 'components/SinglePeople/SinglePeopleImage'
import { SinglePeopleInfo } from 'components/SinglePeople/SinglePeopleInfo'
import { GoBackButton } from 'components/SinglePeople/GoBackButton'
import { useSelector } from 'react-redux'
import SinglePeopleMovies from 'components/SinglePeople/SinglePeopleMovies'
import './style.css'

interface SinglePeoplePageProps {
    setErrorApi: (bool: boolean) => void
}

const SinglePeoplePage = (props: SinglePeoplePageProps) => {
    const storeData = useSelector((state: any) => state.favoriteReducer)

    const [singlePeopleId, setSinglePeopleId] = useState((null))
    const [favorite, setFavorite] = useState(false)
    const [singlePeopleInfo, setSinglePeopleInfo] = useState<Array<{}> | null>(null)
    const [singlePeopleName, setSinglePeopleName] = useState('')
    const [singlePeopleImage, setSinglePeopleImage] = useState<string | undefined>()
    const [singlePeopleMovies, setSinglePeopleMovies] = useState(null)

    const { id }: any = useParams()

    const getSinglePeople = async (url: string) => {
        const res = await getApiResource(url)
        storeData.favorite[id] ? setFavorite(true) : setFavorite(false)

        if (res) {
            setSinglePeopleInfo([
                { title: 'Height', data: res.height },
                { title: 'Mass', data: res.mass },
                { title: 'Hair Color', data: res.hair_color },
                { title: 'Scin Color', data: res.scin_color },
                { title: 'Eye Color', data: res.eye_color },
                { title: 'Birth Year', data: res.birth_year },
                { title: 'Gender', data: res.gender },
            ])
            setSinglePeopleName(res.name)
            setSinglePeopleImage(getPeopleImage(id))
            res.films && setSinglePeopleMovies(res.films)
        } else {
            props.setErrorApi(true)
        }
    }

    useEffect(() => {
        // let unmounted = false
        // if (!unmounted) {
        getSinglePeople(`${SINGLE_PEOPLE}/${id}/`)
        setSinglePeopleId(id)
        // }

        // return () => { unmounted = true }
    }, [])

    return (
        <Fragment>
            <GoBackButton />

            <div className="singlePeople__wrapper">
                <span className="singlePeople__name">{singlePeopleName}</span>

                <div className="singlePeople__container">
                    <SinglePeopleImage
                        singlePeopleImage={singlePeopleImage}
                        singlePeopleId={singlePeopleId}
                        singlePeopleName={singlePeopleName}
                        setFavorite={setFavorite}
                        favorite={favorite}
                    />

                    {singlePeopleInfo && (
                        <ul className="singlePeople__info">
                            {singlePeopleInfo.map((items: any) => {
                                return <SinglePeopleInfo key={items.title} items={items} />
                            })}
                        </ul>
                    )}

                    {singlePeopleMovies && (
                        <SinglePeopleMovies singlePeopleMovies={singlePeopleMovies} />
                    )}
                </div>
            </div>
        </Fragment>
    )
}

export default withErrorApi(SinglePeoplePage)