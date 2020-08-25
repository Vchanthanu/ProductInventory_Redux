import { combineReducers } from 'redux'
import allProductsReducer from '../reducer/allProductsReducer'
import userReducer from './userReducer'
import allUserReducer from './AllUserReducer'
const allReducer = combineReducers({
    allProducts: allProductsReducer,
    userName: userReducer,
    users:allUserReducer
})
export default allReducer