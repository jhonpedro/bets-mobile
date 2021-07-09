import React, { useState, useEffect } from 'react'

import Header from '../../components/UI/Header'
import useGetGames from '../../hooks/useGetGames'
import GameButtonList from '../../components/GameButtonList'
import { BetsI } from '../../@types'
import adonis from '../../services/adonis'
import RecentGame from '../../components/RecentGame'

import {
	HomeContainer,
	SubTitle,
	Title,
	BetsContainer,
	ContentContainer,
} from './styles'

const Home = () => {
	const games = useGetGames()
	const [currentFilter, setCurrentFilter] = useState<Array<string>>([])
	const [bets, setBets] = useState<BetsI>([])

	useEffect(() => {
		adonis.get<BetsI>('/bets').then((response) => {
			console.log(response.data.forEach((bet) => console.log(bet.type)))
			setBets(response.data)
		})
	}, [])

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
				<SubTitle>Filters</SubTitle>
				<GameButtonList
					games={games}
					activeGames={currentFilter}
					onAddToCurrentFilter={addToCurrentFilter}
					onRemoveFromCurrentFilter={removeFromCurrentFilter}
				/>
				<ContentContainer>
					<BetsContainer>
						{bets
							.filter((bet) => {
								if (currentFilter.length === 0) {
									return true
								}
								return currentFilter.includes(bet.type)
							})
							.map((bet) => (
								<RecentGame
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
				</ContentContainer>
			</HomeContainer>
		</>
	)
}

export default Home
