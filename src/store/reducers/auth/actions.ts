import {
	ActionLogin,
	ActionLoginPayload,
	ActionLoginRequest,
	ActionLoginRequestPayload,
	ActionLogout,
} from '../@types/auth'
import { LOG_IN, LOG_IN_REQUEST, LOG_OUT } from './actionTypes'

export const actionLoginRequest = (
	payload: ActionLoginRequestPayload
): ActionLoginRequest => ({
	type: LOG_IN_REQUEST,
	payload,
})

export const actionLogIn = (payload: ActionLoginPayload): ActionLogin => ({
	type: LOG_IN,
	payload,
})

export const actionLogOut = (): ActionLogout => ({ type: LOG_OUT })

export type PossibleActions = ActionLogin | ActionLogout | { type: undefined }
