import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login'
import colors from '../assets/colors'

const AuthStack = createStackNavigator()

const Routes: React.FC = () => (
	<NavigationContainer>
		<AuthStack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: colors.BG_LIGHT,
				},
			}}
		>
			<AuthStack.Screen name="Login" component={Login} />
		</AuthStack.Navigator>
	</NavigationContainer>
)

export default Routes
