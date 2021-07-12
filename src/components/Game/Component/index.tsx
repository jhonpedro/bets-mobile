import React from 'react'
import { TouchableOpacity } from 'react-native'
import { BetI } from '../../../@types'
import formatToReal from '../../../utils/formatToReal'

import {
	GameContainer,
	NumbersContainer,
	DateAndPrice,
	GameType,
	DateAndPriceContainer,
	RemovableContainer,
} from './styles'

interface GameProps extends BetI {
	removable?: {
		icon: JSX.Element
		index: number
		onPress: (gameIndex: number) => void
	}
}

const Game: React.FC<GameProps> = ({
	type,
	color,
	numbers,
	created_at,
	price,
	removable,
}) => {
	const baseDate = new Date(created_at)
	const dateFormatted = `${baseDate.getDate()}/${baseDate.getMonth()}/${baseDate.getFullYear()}`

	return (
		<GameContainer borderColor={color}>
			<NumbersContainer>{numbers.join(', ')}</NumbersContainer>
			<DateAndPriceContainer>
				<DateAndPrice>
					{`${dateFormatted} - (R$ ${formatToReal(price)}) `}
				</DateAndPrice>
				{removable && (
					<RemovableContainer>
						<TouchableOpacity
							onPress={() => removable.onPress(removable.index)}
						>
							{removable.icon}
						</TouchableOpacity>
					</RemovableContainer>
				)}
			</DateAndPriceContainer>
			<GameType color={color}>{type}</GameType>
		</GameContainer>
	)
}

export default Game
