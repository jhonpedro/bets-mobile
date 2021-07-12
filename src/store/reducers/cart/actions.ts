import { RehydrateAction } from '../@types'
import { ActionAddToCart, ActionRemoveFromCart, CartItem } from '../@types/cart'
import {
	ADD_TO_CART,
	HIDE_CART,
	REMOVE_FROM_CART,
	SHOW_CART,
} from './actionTypes'

interface ActionShowCart {
	type: typeof SHOW_CART
}

export const actionShowCart = (): ActionShowCart => ({ type: SHOW_CART })

interface ActionHideCart {
	type: typeof HIDE_CART
}

export const actionHideCart = (): ActionHideCart => ({ type: HIDE_CART })

export const actionAddToCart = (cartItem: CartItem): ActionAddToCart => ({
	type: ADD_TO_CART,
	payload: {
		newItem: cartItem,
	},
})

export const actionRemoveFromCart = (
	cartItemIndex: number
): ActionRemoveFromCart => ({
	type: REMOVE_FROM_CART,
	payload: {
		cartItemIndex,
	},
})

export type PossibleActions =
	| ActionShowCart
	| ActionHideCart
	| ActionAddToCart
	| ActionRemoveFromCart
	| RehydrateAction
	| { type: undefined }
