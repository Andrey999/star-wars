import React from 'react'
import { Link } from 'react-router-dom'
import { UiButton } from 'UI/UiButton/UiButton'
import './style.css'

interface PeoplePaginationProps {
    nextPage: string | null
    prevPage: string | null
    countPage: number | null
}

export const PeoplePagination = (props: PeoplePaginationProps) => {
    return (
        <div className="pagination__container"> 
            <Link to={`/people/?page=${props.countPage - 1}`}>
                <UiButton
                    countPage={props.countPage}
                    text='Previous'
                    disabled={props.countPage === 1 ? true : false}
                    theme='dark'
                />
            </Link>

            <Link to={`/people/?page=${props.countPage + 1}`}>
                <UiButton
                    countPage={props.countPage}
                    text='Next'
                    disabled={props.countPage === 9 ? true : false}
                    theme='dark'
                />
            </Link>
        </div>
    )
}