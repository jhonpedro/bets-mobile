import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { AuthStackList } from '../@types'
import colors from '../assets/colors'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import SingUp from '../pages/SingUp'

const AuthStack = createStackNavigator<AuthStackList>()

const AuthRoutes = () => (
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
)

export default AuthRoutes
