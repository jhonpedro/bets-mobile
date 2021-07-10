import React from 'react'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'

import { TabBarItemContainer, TabBarText } from './styles'
import { PossibleIconsName } from '../../../@types'
import colors from '../../../assets/colors'

interface TabBarItemProps {
	name: string
	icon: PossibleIconsName
	focused: boolean
}

const TabBarItem: React.FC<TabBarItemProps> = ({ name, icon, focused }) => (
	<TabBarItemContainer>
		{/**
		 * I think this is not the best way to handle the icon possibilities
		 * Imagine if we have 4 different icons here, it would be
		 * a mess! But for now, it works.
		 */}
		{icon === 'ios-home-outline' && (
			<Ionicons
				name="ios-home-outline"
				size={24}
				color={focused ? colors.TGL_GREEN : colors.ICONS_DARK_LIGHT}
			/>
		)}
		{icon === 'user' && (
			<SimpleLineIcons
				name="user"
				size={24}
				color={focused ? colors.TGL_GREEN : colors.ICONS_DARK_LIGHT}
			/>
		)}
		<TabBarText focused={focused}>{name}</TabBarText>
	</TabBarItemContainer>
)

export default TabBarItem
