import { SET_FAVORITE_PERSON, REMOVE_FAVORITE_PERSON } from '../constants'
import { FavoriteActionType } from '../actions/favoriteAction'
import { getLocalStorage } from 'utils/localStorage'
// import { omit } from 'lodash'

interface IFavoriteReducer {
    favorite: { [key: number]: { name: string, img: string } }
    // favorite: Record<number, { name: string, age: number}>
}

const initialState: IFavoriteReducer = {
    favorite: getLocalStorage('favorite')
}

export const favoriteReducer = (state = initialState, action: FavoriteActionType) => {
    switch (action.type) {
        case SET_FAVORITE_PERSON:
            return {
                ...state,
                favorite: { ...state.favorite, ...action.payload }
            }

        case REMOVE_FAVORITE_PERSON:
            const next = { ...state }
            delete next.favorite[Number(action.payload)]
            return next

        //with lodash
        // return {
        //     ...state,
        //     favorite: omit(state.favorite, action.payload)
        // }

        default: return state
    }
}