import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import TabBar from '../components/TabBar'
import NewPurchase from '../pages/NewPurchase'
import Account from '../pages/Account'

const AppTab = createBottomTabNavigator()

const AppRoutes = () => (
	<AppTab.Navigator tabBar={(props) => <TabBar {...props} />}>
		<AppTab.Screen name="Home" component={Home} />
		<AppTab.Screen name="Bet" component={NewPurchase} />
		<AppTab.Screen name="Account" component={Account} />
	</AppTab.Navigator>
)

export default AppRoutes
