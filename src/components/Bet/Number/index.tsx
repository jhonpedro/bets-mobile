import React from 'react'
import { BetButtonTouchableOpacity, BetNumberText } from './styles'

interface BetButtonProps {
	number: number
	active: boolean
	color: string
	onPress: (number: number) => void
}

const BetButton: React.FC<BetButtonProps> = ({
	number,
	color,
	active,
	onPress,
}) => {
	const handlePress = () => {
		onPress(number)
	}

	return (
		<BetButtonTouchableOpacity
			onPress={handlePress}
			color={color}
			active={active}
		>
			<BetNumberText>{number}</BetNumberText>
		</BetButtonTouchableOpacity>
	)
}

export default BetButton
