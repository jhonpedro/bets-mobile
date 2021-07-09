import { REHYDRATE } from 'redux-persist/es/constants'
import { RootState } from '../..'
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

type RehydrateAction = {
	type: typeof REHYDRATE
	payload: RootState | undefined
}

export type PossibleActions =
	| ActionLogin
	| ActionLogout
	| ActionLoginRequest
	| RehydrateAction
	| { type: undefined }
