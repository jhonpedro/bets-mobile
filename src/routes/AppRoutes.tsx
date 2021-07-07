import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home'

const AppTab = createBottomTabNavigator()

const AppRoutes = () => (
	<AppTab.Navigator>
		<AppTab.Screen name="Home" component={Home} />
	</AppTab.Navigator>
)

export default AppRoutes
