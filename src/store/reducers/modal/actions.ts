import {
	ActionShowModal,
	ActionShowModalPayload,
	ActionWithdrawModal,
} from '../@types/modal'
import { SHOW_MODAL, WITHDRAW_MODAL } from './actionTypes'

export const actionShowModal = ({
	title,
	message,
}: ActionShowModalPayload): ActionShowModal => ({
	type: SHOW_MODAL,
	payload: {
		title,
		message,
	},
})

export const actionWithdrawModal = (): ActionWithdrawModal => ({
	type: WITHDRAW_MODAL,
})

export type PossibleActions = ActionShowModal | ActionWithdrawModal
