import React from 'react'

import { GamesI } from '../../../@types'
import GameButton from '../Button'

import { GameButtonListContainer } from './styles'

interface GameButtonListProps {
	games: GamesI
	activeGames: string[]
	onButtonPress: (type: string) => void
	onButtonPressWhileActive?: (type: string) => void
}

const GameButtonList: React.FC<GameButtonListProps> = ({
	games,
	activeGames,
	onButtonPress,
	onButtonPressWhileActive,
}) => {
	const handleOnGamePress = (type: string) => {
		if (onButtonPressWhileActive && activeGames.includes(type)) {
			onButtonPressWhileActive(type)
			return
		}

		onButtonPress(type)
	}

	return (
		<GameButtonListContainer horizontal>
			{games.map((game) => (
				<GameButton
					key={game.id}
					type={game.type}
					color={game.color}
					active={activeGames.includes(game.type)}
					onPress={handleOnGamePress}
				/>
			))}
		</GameButtonListContainer>
	)
}

export default GameButtonList
