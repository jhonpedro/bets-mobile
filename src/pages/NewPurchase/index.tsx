import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'

import {
	Container as NewPurchaseContainer,
	SubTitle,
	Title,
	TextWarning as NoGames,
} from '../../components/UI/Common/styles'
import Header from '../../components/UI/Header'
import useGetGames from '../../hooks/useGetGames'
import GameButtonList from '../../components/Game/ButtonList'
import { GameI } from '../../@types'
import BetButtonList from '../../components/Bet/ButtonList'
import Cart from '../../components/Cart/Component'
import { GameDescription } from './styles'
import ActionButtons from '../../components/Bet/ActionButtons'
import fulfillArrayRandomNumbers from '../../utils/fulfillArrayRandomNumbers'
import useAppDispatch from '../../hooks/useAppDispatch'
import { actionAddToCart } from '../../store/reducers/cart/actions'

interface CurrentGameI {
	gameInfo: GameI
	numbers: number[]
}

const NewPurchase = () => {
	const dispatch = useAppDispatch()
	const games = useGetGames()
	const [currentGame, setCurrentGame] = useState<CurrentGameI>({
		gameInfo: {} as GameI,
		numbers: [],
	})

	useEffect(() => {
		if (games.length > 0) {
			setCurrentGame((prevState) => ({ ...prevState, gameInfo: games[0] }))
		}
	}, [games])

	const handleChangeCurrentGame = (newGameType: string) => {
		const newCurrentGame = games.find((game) => game.type === newGameType)

		if (newCurrentGame) {
			setCurrentGame((prevState) => ({
				...prevState,
				gameInfo: newCurrentGame,
				numbers: prevState.numbers.filter(
					(number, _, newArr) =>
						number <= newCurrentGame.range &&
						newArr.length <= newCurrentGame.max_number
				),
			}))
		}
	}

	const handleChangeCurrentBet = (numberToAdd: number) => {
		if (currentGame.numbers.length === currentGame.gameInfo.max_number) {
			Alert.alert(
				'Max numbers per this bet achieved',
				'Try add this to cart and create another bet!'
			)
			return
		}

		if (!currentGame.numbers.includes(numberToAdd)) {
			setCurrentGame((prevState) => ({
				...prevState,
				numbers: [numberToAdd, ...prevState.numbers],
			}))
			return
		}

		setCurrentGame((prevState) => ({
			...prevState,
			numbers: prevState.numbers.filter((number) => number !== numberToAdd),
		}))
	}

	const handleCompleteGame = () => {
		setCurrentGame((prevState) => ({
			...prevState,
			numbers: fulfillArrayRandomNumbers(
				prevState.numbers,
				prevState.gameInfo.max_number,
				0,
				prevState.gameInfo.range
			),
		}))
	}

	const handleClearGame = () => {
		setCurrentGame((prevState) => ({ ...prevState, numbers: [] }))
	}

	const handleAddToCart = () => {
		if (currentGame.numbers.length !== currentGame.gameInfo.max_number) {
			const diff = currentGame.gameInfo.max_number - currentGame.numbers.length
			const textNumber = diff > 1 ? 'numbers' : 'number'
			Alert.alert(
				'More numbers!',
				`You need to add ${diff} more ${textNumber} `
			)
			return
		}

		dispatch(
			actionAddToCart({
				id: Date.now(),
				type: currentGame.gameInfo.type,
				game_id: currentGame.gameInfo.id,
				numbers: currentGame.numbers,
				color: currentGame.gameInfo.color,
				created_at: new Date(),
				price: currentGame.gameInfo.price,
			})
		)

		handleClearGame()

		Alert.alert(
			'Added to cart!',
			'Your bet was added to the cart, you can check it now!'
		)
	}

	return (
		<>
			<Header showCart />
			<Cart />
			<NewPurchaseContainer>
				{currentGame.gameInfo.type ? (
					<>
						<Title>New bet for {currentGame.gameInfo.type}</Title>
						<SubTitle>Choose a game</SubTitle>
						<GameButtonList
							games={games}
							activeGames={[currentGame.gameInfo.type]}
							onButtonPress={handleChangeCurrentGame}
						/>
						{currentGame.numbers.length === 0 ? (
							<GameDescription>
								{currentGame.gameInfo.description}
							</GameDescription>
						) : (
							<ActionButtons
								onComplete={handleCompleteGame}
								onClear={handleClearGame}
								onAddToCart={handleAddToCart}
							/>
						)}
						<BetButtonList
							color={currentGame.gameInfo.color}
							activeNumbers={currentGame.numbers}
							onNumberPress={handleChangeCurrentBet}
							range={currentGame.gameInfo.range}
						/>
					</>
				) : (
					<NoGames>No games to bet found</NoGames>
				)}
			</NewPurchaseContainer>
		</>
	)
}

export default NewPurchase
