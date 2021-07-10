import React from 'react'
import { BetI } from '../../../@types'

import {
	RecentGameContainer,
	NumbersContainer,
	DateAndPrice,
	GameType,
} from './styles'

interface RecentGameProps extends BetI {}

const RecentGame: React.FC<RecentGameProps> = ({
	type,
	color,
	numbers,
	created_at,
	price,
}) => {
	const baseDate = new Date(created_at)
	const dateFormatted = `${baseDate.getDay()}/${baseDate.getMonth()}/${baseDate.getFullYear()}`

	return (
		<RecentGameContainer borderColor={color}>
			<NumbersContainer>{numbers.join(', ')}</NumbersContainer>
			<DateAndPrice>
				{`${dateFormatted} - (R$ ${price.toLocaleString('pt-br', {
					style: 'currency',
					currency: 'BRL',
				})})`}
			</DateAndPrice>
			<GameType color={color}>{type}</GameType>
		</RecentGameContainer>
	)
}

export default RecentGame
