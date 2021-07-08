import React from 'react'

import { GamesI } from '../../@types'
import GameButton from '../GameButton'

interface GameButtonListProps {
	games: GamesI
	activeGameType: string
	// eslint-disable-next-line no-unused-vars
	onGamePress: (type: string) => void
}

const GameButtonList: React.FC<GameButtonListProps> = ({
	games,
	activeGameType,
	onGamePress,
}) => (
	<>
		{games.map((game) => (
			<GameButton
				key={game.id}
				type={game.type}
				color={game.color}
				active={activeGameType === game.type}
				onPress={onGamePress}
			/>
		))}
	</>
)

export default GameButtonList
