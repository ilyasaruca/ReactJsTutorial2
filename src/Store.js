import { createStore, combineReducers } from 'redux'
import {productReducer} from './reducers/ProductReducer'

const rootReducer = combineReducers({
    productReducer:productReducer
})

const Store =  createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default Store
