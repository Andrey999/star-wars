import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { setLocalStorage } from 'utils/localStorage'

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

store.subscribe(() => {
    setLocalStorage('favorite', store.getState().favoriteReducer.favorite)
})