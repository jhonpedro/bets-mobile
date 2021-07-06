import { all } from 'redux-saga/effects'
import watchRequestLogin from './auth/sagas'

function* rootSaga() {
	yield all([watchRequestLogin()])
}

export default rootSaga
