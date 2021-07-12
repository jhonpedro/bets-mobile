import { BetI } from '../../../@types'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../cart/actionTypes'
import { CallbackBasedSagaAction } from './sagas'

export interface CartItem extends BetI {
	game_id: number
}

export interface ActionAddToCart {
	type: typeof ADD_TO_CART
	payload: {
		newItem: CartItem
	}
}

export interface ActionRemoveFromCart {
	type: typeof REMOVE_FROM_CART
	payload: {
		cartItemIndex: number
	}
}

export interface ActionNewPurchasePayload extends CallbackBasedSagaAction {
	items: CartItem[]
}
