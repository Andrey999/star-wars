import { SET_FAVORITE_PERSON, REMOVE_FAVORITE_PERSON } from '../constants'
import { IPeopleList } from 'types/type'

interface IFavoritePerson {
    type: typeof SET_FAVORITE_PERSON
    payload: IPeopleList
}

interface IRemovePerson {
    type: typeof REMOVE_FAVORITE_PERSON
    payload: string
}

export const setPersonToFavorite = (people: IPeopleList): IFavoritePerson => ({
    type: SET_FAVORITE_PERSON,
    payload: people
})

export const removePersonFromFavorite = (id: string): IRemovePerson => ({
    type: REMOVE_FAVORITE_PERSON,
    payload: id
})


export type FavoriteActionType = IFavoritePerson | IRemovePerson