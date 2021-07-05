import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import SingUp from '../pages/SingUp'
import colors from '../assets/colors'
import { AuthStackList } from '../@types'

const AuthStack = createStackNavigator<AuthStackList>()

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
			<AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
			<AuthStack.Screen name="SingUp" component={SingUp} />
		</AuthStack.Navigator>
	</NavigationContainer>
)

export default Routes
