import { AxiosResponse } from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

import adonis from '../../../services/adonis'
import { ActionLoginRequest } from '../@types/auth'
import { actionLogIn } from './actions'
import { LOG_IN_REQUEST } from './actionTypes'

interface SessionResponse {
	token: string
}

function* requestSession(action: ActionLoginRequest) {
	try {
		const response: AxiosResponse<SessionResponse> = yield call(
			adonis.post,
			'/session',
			{ email: action.payload.email, password: action.payload.password }
		)

		yield put(actionLogIn({ token: response.data.token }))

		if (action.payload.callbackSuccess) action.payload.callbackSuccess()
	} catch (error) {
		if (action.payload.callbackError) action.payload.callbackError(error)
	} finally {
		if (action.payload.callbackFinally) action.payload.callbackFinally()
	}
}

export default function* watchRequestLogin() {
	yield takeLatest(LOG_IN_REQUEST, requestSession)
}
