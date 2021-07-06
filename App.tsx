import React from 'react'
import { StatusBar } from 'expo-status-bar'

import Routes from './src/routes'
import { LoadingProvider } from './src/hooks/useLoading'
import Loading from './src/components/UI/Loading'

export default function App() {
	return (
		<LoadingProvider>
			<Routes />
			<Loading />
			<StatusBar style="auto" />
		</LoadingProvider>
	)
}
