// where we connect all our reducres

import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productDetailsReducer, productListReducer} from './reducers/productReducers.js'
import {cartReducer} from './reducers/cartReducers'
// empty inside brackets because we dont have reducres yet
const reducer= combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
})

const cartItemsFromStorage=localStorage.getItem('cartItems')?JSON.parse
(localStorage.getItem('cartItems')):[]

// we can put it in here if we want to load something when store runs
const initialState={
    cart:{cartItems:cartItemsFromStorage}
}
const middleware =[thunk]
 
const store =createStore(reducer,initialState,composeWithDevTools
    (applyMiddleware(...middleware))
    )
export default store