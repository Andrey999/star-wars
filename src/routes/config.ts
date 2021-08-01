import PeoplePage from 'pages/PeoplePage/PeoplePage'
import { HomePage } from 'pages/HomePage/HomePage'
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage'
import SinglePeoplePage from 'pages/SinglePeoplePage/SinglePeoplePage'
import { FavoritePage } from 'pages/FavoritePage/FavoritePage'
import SearchPage from 'pages/SearchPage/SearchPage'
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage'
import { ReactNode } from 'react'

interface IRoutes {
    path: string
    exact: boolean
    component: ReactNode
}

export const routes: IRoutes[] = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },

    {
        path: '/people',
        exact: true,
        component: PeoplePage
    },

    {
        path: '/people/:id',
        exact: false,
        component: SinglePeoplePage
    },

    {
        path: '/search',
        exact: true,
        component: SearchPage
    },

    {
        path: '/not-found',
        exact: true,
        component: NotFoundPage
    },

    {
        path: '/fail',
        exact: true,
        component: ErrorMessage
    },

    {
        path: '/favorite',
        exact: true,
        component: FavoritePage
    },

    {
        path: '*',
        exact: false,
        component: NotFoundPage
    },

]