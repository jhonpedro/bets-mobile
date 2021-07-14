import { combineReducers } from 'redux'
import authReducer from './auth'
import cartReducer from './cart'
import modalReducer from './modal'

const rootReducer = combineReducers({
	auth: authReducer,
	cart: cartReducer,
	modal: modalReducer,
})

export default rootReducer
