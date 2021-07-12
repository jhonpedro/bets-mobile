/* eslint-disable no-param-reassign */
/* eslint-disable indent */
import produce from 'immer'
import { CartItem } from '../@types/cart'
import { PossibleActions } from './actions'
import {
	ADD_TO_CART,
	CLEAR_CART,
	HIDE_CART,
	REMOVE_FROM_CART,
	SHOW_CART,
} from './actionTypes'

const initialValue = {
	show: false,
	items: [] as CartItem[],
}

const cartReducer = (state = initialValue, action: PossibleActions) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SHOW_CART: {
				draft.show = true
				break
			}
			case HIDE_CART: {
				draft.show = false
				break
			}
			case ADD_TO_CART: {
				draft.items.push(action.payload.newItem)
				break
			}
			case REMOVE_FROM_CART: {
				draft.items.splice(action.payload.cartItemIndex, 1)
				break
			}
			case CLEAR_CART: {
				draft.items = []
				draft.show = false
				break
			}
			default: {
				break
			}
		}
	})

export default cartReducer
