import React from 'react'
import {
	BottomTabBarOptions,
	BottomTabBarProps,
} from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'

import {
	BetIcon,
	BetIconContainer,
	TabBarContainer,
	TabBarWrapper,
	TabItemsWrapper,
} from './styles'
import { PossibleIcons as PossibleIconsType } from '../../@types'
import TabBarItem from './Item'
import addBetIcon from '../../assets/images/add-bet.png'

const PossibleIcons = {
	Home: 'ios-home-outline',
	Account: 'user',
} as PossibleIconsType

const style = StyleSheet.create({
	boxShadow: {
		shadowColor: '#000',
		shadowOpacity: 0.8,
		shadowOffset: { width: 0, height: 10 },
		shadowRadius: 2,
		elevation: 20,
	},
})

const TabBar = ({
	state,
	navigation,
}: BottomTabBarProps<BottomTabBarOptions>): JSX.Element => (
	<TabBarWrapper>
		<TabBarContainer style={style.boxShadow}>
			{state.routes.map((route, index) => {
				const isFocused = state.index === index
				const icon = PossibleIcons[route.name]

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					})

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name)
					}
				}

				return (
					<TabItemsWrapper key={route.name} onPress={onPress}>
						{route.name === 'Bet' ? (
							<BetIconContainer style={style.boxShadow}>
								<BetIcon source={addBetIcon} />
							</BetIconContainer>
						) : (
							<TabBarItem name={route.name} icon={icon} focused={isFocused} />
						)}
					</TabItemsWrapper>
				)
			})}
		</TabBarContainer>
	</TabBarWrapper>
)

export default TabBar
