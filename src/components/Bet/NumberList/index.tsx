import React from 'react'

import Number from '../Number'
import { BetNumberListContainer } from './styles'

interface BetButtonListProps {
	range: number
	color: string
	activeNumbers: number[]
	onNumberPress: (number: number) => void
}

const BetNumberList: React.FC<BetButtonListProps> = ({
	range,
	color,
	activeNumbers,
	onNumberPress,
}) => (
	<BetNumberListContainer
		contentContainerStyle={{
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-evenly',
		}}
	>
		{new Array(range).fill(null).map((_, index) => {
			const number = index + 1
			const isActive = activeNumbers.includes(number)

			return (
				<Number
					key={number}
					color={color}
					active={isActive}
					number={number}
					onPress={onNumberPress}
				/>
			)
		})}
	</BetNumberListContainer>
)

export default BetNumberList
