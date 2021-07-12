import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from './src/routes'
import { LoadingProvider } from './src/hooks/useLoading'
import Loading from './src/components/UI/Loading'
import store, { persistor } from './src/store'
import colors from './src/assets/colors'

export default function App() {
	return (
		<NavigationContainer
			theme={{
				...DefaultTheme,
				colors: { ...DefaultTheme.colors, background: colors.BG_LIGHT },
			}}
		>
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
