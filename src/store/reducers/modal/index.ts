/* eslint-disable no-param-reassign */
/* eslint-disable indent */
import produce from 'immer'
import { PossibleActions } from './actions'
import { SHOW_MODAL, WITHDRAW_MODAL } from './actionTypes'

const initialValue = {
	showing: false,
	title: '',
	message: '',
}

const modalReducer = (state = initialValue, action: PossibleActions) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SHOW_MODAL: {
				draft.showing = true
				draft.title = action.payload.title
				draft.message = action.payload.message
				break
			}
			case WITHDRAW_MODAL: {
				draft.showing = false
				break
			}
			default: {
				break
			}
		}
	})

export default modalReducer
