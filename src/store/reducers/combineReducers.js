import { combineReducers } from 'redux'
import toggleFavorite from './reducerFavorite'
import profile from './reducerProfile'
import counterCart from './reducerCounterPanier'
import addToCart from './reducerPanier'

export default combineReducers({
    toggleFavorite,
    profile,
    counterCart,
    addToCart
})