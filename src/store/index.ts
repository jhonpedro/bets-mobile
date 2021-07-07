import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer'
import rootSaga from './reducers/rootSaga'

const persistedReducer = persistReducer(
	{ key: 'tgl', storage: AsyncStorage },
	rootReducer
)
const sagaMiddleware = createSagaMiddleware()

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { persistor }

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
