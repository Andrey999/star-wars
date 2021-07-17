import PeoplePage from '../containers/PeoplePage/PeoplePage'
import { HomePage } from '../containers/HomePage/HomePage'
import { NotFoundPage } from '../containers/NotFoundPage/NotFoundPage'
import SinglePeoplePage from '../containers/SinglePeoplePage/SinglePeoplePage'
import { FavoritePage } from 'containers/FavoritePage/FavoritePage'
import SearchPage from 'containers/SearchPage/SearchPage'
import {ErrorMessage} from 'components/ErrorMessage/ErrorMessage'

export const routes = [
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