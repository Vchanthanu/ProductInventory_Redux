import { combineReducers } from 'redux'
import allProductsReducer from '../reducer/allProductsReducer'
import userReducer from './userReducer'
const allReducer = combineReducers({
    allProducts: allProductsReducer,
    userName: userReducer
})
export default allReducer