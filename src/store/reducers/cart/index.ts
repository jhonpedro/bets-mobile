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
	total: 0,
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
				draft.total += action.payload.newItem.price
				break
			}
			case REMOVE_FROM_CART: {
				draft.total -= draft.items[action.payload.cartItemIndex].price
				draft.items.splice(action.payload.cartItemIndex, 1)
				break
			}
			case CLEAR_CART: {
				draft.items = []
				draft.total = 0
				draft.show = false
				break
			}
			default: {
				break
			}
		}
	})

export default cartReducer
