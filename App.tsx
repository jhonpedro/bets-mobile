import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'

import Routes from './src/routes'
import { LoadingProvider } from './src/hooks/useLoading'
import Loading from './src/components/UI/Loading'
import store from './src/store'

export default function App() {
	return (
		<Provider store={store}>
			<LoadingProvider>
				<Routes />
				<Loading />
				<StatusBar style="auto" />
			</LoadingProvider>
		</Provider>
	)
}
