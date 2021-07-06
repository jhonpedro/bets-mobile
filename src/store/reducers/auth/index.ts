/* eslint-disable no-param-reassign */
/* eslint-disable indent */
import produce from 'immer'
import adonis from '../../../services/adonis'
import { PossibleActions } from './actions'
import { LOG_IN, LOG_OUT } from './actionTypes'

const initialValue = {
	isLoggedIn: false,
	token: '',
}

const authReducer = (state = initialValue, action: PossibleActions) =>
	produce(state, (draft) => {
		switch (action.type) {
			case LOG_IN: {
				draft.isLoggedIn = true
				draft.token = action.payload.token
				adonis.defaults.headers['Authorization'] = action.payload.token
				break
			}
			case LOG_OUT: {
				draft.isLoggedIn = false
				draft.token = ''
				break
			}
			default: {
				break
			}
		}
	})

export default authReducer
