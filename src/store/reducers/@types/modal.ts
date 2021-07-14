import { SHOW_MODAL, WITHDRAW_MODAL } from '../modal/actionTypes'

export interface ActionShowModalPayload {
	title: string
	message: string
}

export interface ActionShowModal {
	type: typeof SHOW_MODAL
	payload: ActionShowModalPayload
}

export interface ActionWithdrawModal {
	type: typeof WITHDRAW_MODAL
}
