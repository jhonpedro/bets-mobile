import React, { useState, useCallback } from 'react'
import { Alert } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import Header from '../../components/UI/Header'
import useGetGames from '../../hooks/useGetGames'
import GameButtonList from '../../components/Game/ButtonList'
import { BetsI } from '../../@types'
import adonis from '../../services/adonis'
import Game from '../../components/Game/Component'
import {
	Container as HomeContainer,
	SubTitle,
	Title,
	ContainerScrollView as BetsContainer,
	TextWarning as NoBets,
} from '../../components/UI/Common/styles'

import useLoading from '../../hooks/useLoading'
import useAppDispatch from '../../hooks/useAppDispatch'
import { actionLogOut } from '../../store/reducers/auth/actions'

const Home = () => {
	const dispatch = useAppDispatch()
	const { show } = useLoading()
	const games = useGetGames()
	const [currentFilter, setCurrentFilter] = useState<Array<string>>([])
	const [bets, setBets] = useState<BetsI>([])

	useFocusEffect(
		useCallback(() => {
			getBets()
		}, [])
	)

	const getBets = async () => {
		try {
			const response = await adonis.get<BetsI>('/bets')

			setBets(response.data)
		} catch (error) {
			Alert.alert('An error occurred, try to login again!')

			dispatch(actionLogOut())
		}
	}

	const addToCurrentFilter = (toAdd: string) => {
		setCurrentFilter((prevState) => [toAdd, ...prevState])
	}

	const removeFromCurrentFilter = (toRemove: string) => {
		setCurrentFilter((prevState) =>
			prevState.filter((currentFilterItem) => currentFilterItem !== toRemove)
		)
	}

	return (
		<>
			<Header />
			<HomeContainer>
				<Title>Recent Games</Title>
				<>
					{bets.length === 0 && !show ? (
						<NoBets>We did not found any bets.</NoBets>
					) : (
						<>
							<SubTitle>Filters</SubTitle>
							<GameButtonList
								games={games}
								activeGames={currentFilter}
								onButtonPress={addToCurrentFilter}
								onButtonPressWhileActive={removeFromCurrentFilter}
							/>
							<BetsContainer onScrollToTop={() => console.log('reload')}>
								{bets
									.filter((bet) => {
										if (currentFilter.length === 0) {
											return true
										}
										return currentFilter.includes(bet.type)
									})
									.map((bet) => (
										<Game
											key={bet.id}
											id={bet.id}
											color={bet.color}
											price={bet.price}
											created_at={bet.created_at}
											type={bet.type}
											numbers={bet.numbers}
										/>
									))}
							</BetsContainer>
						</>
					)}
				</>
			</HomeContainer>
		</>
	)
}

export default Home
