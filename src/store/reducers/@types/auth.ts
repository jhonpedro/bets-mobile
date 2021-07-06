import { LOG_IN, LOG_IN_REQUEST, LOG_OUT } from '../auth/actionTypes'
import { CallbackBasedSagaAction } from './sagas'

export interface ActionLoginRequestPayload extends CallbackBasedSagaAction {
	email: string
	password: string
}

export interface ActionLoginRequest {
	type: typeof LOG_IN_REQUEST
	payload: ActionLoginRequestPayload
}

export interface ActionLogin {
	type: typeof LOG_IN
	payload: ActionLoginPayload
}

export interface ActionLoginPayload {
	token: string
}

export interface ActionLogout {
	type: typeof LOG_OUT
}
