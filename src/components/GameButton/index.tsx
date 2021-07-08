import React from 'react'
import { TouchableOpacity } from 'react-native'

import GameButtonStyle from './styles'

interface GameButtonProps {
	type: string
	color: string
	active: boolean
	// eslint-disable-next-line no-unused-vars
	onPress: (type: string) => void
}

const GameButton: React.FC<GameButtonProps> = ({
	type,
	color,
	active,
	onPress,
}) => {
	const handlePress = () => {
		onPress(type)
	}

	return (
		<TouchableOpacity onPress={handlePress}>
			<GameButtonStyle color={color} active={active}>
				{type}
			</GameButtonStyle>
		</TouchableOpacity>
	)
}

export default GameButton
