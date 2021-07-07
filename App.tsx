import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from './src/routes'
import { LoadingProvider } from './src/hooks/useLoading'
import Loading from './src/components/UI/Loading'
import store, { persistor } from './src/store'

export default function App() {
	return (
		<NavigationContainer>
			<LoadingProvider>
				<Provider store={store}>
					<PersistGate loading={<Loading instantShow />} persistor={persistor}>
						<Routes />
						<Loading />
						<StatusBar style="auto" />
					</PersistGate>
				</Provider>
			</LoadingProvider>
		</NavigationContainer>
	)
}
