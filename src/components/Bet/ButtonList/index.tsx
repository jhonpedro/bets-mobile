import React from 'react'

import BetButton from '../Button'
import { BetButtonListContainer } from './styles'

interface BetButtonListProps {
	range: number
	color: string
	activeNumbers: number[]
	onNumberPress: (number: number) => void
}

const BetButtonList: React.FC<BetButtonListProps> = ({
	range,
	color,
	activeNumbers,
	onNumberPress,
}) => (
	<BetButtonListContainer
		contentContainerStyle={{
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-evenly',
		}}
	>
		{/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
		{new Array(range).fill(null).map((_, index) => {
			const number = index + 1
			const isActive = activeNumbers.includes(number)

			return (
				<BetButton
					key={number}
					color={color}
					active={isActive}
					number={number}
					onPress={onNumberPress}
				/>
			)
		})}
	</BetButtonListContainer>
)

export default BetButtonList
