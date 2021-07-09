import React from 'react'

import { GamesI } from '../../@types'
import GameButton from '../GameButton'

import { GameButtonListContainer } from './styles'

interface GameButtonListProps {
	games: GamesI
	activeGames: string[]
	onAddToCurrentFilter: (type: string) => void
	onRemoveFromCurrentFilter: (type: string) => void
}

const GameButtonList: React.FC<GameButtonListProps> = ({
	games,
	activeGames,
	onAddToCurrentFilter,
	onRemoveFromCurrentFilter,
}) => {
	const handleOnGamePress = (type: string) => {
		if (activeGames.includes(type)) {
			onRemoveFromCurrentFilter(type)
			return
		}

		onAddToCurrentFilter(type)
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
