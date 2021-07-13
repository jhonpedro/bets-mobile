import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Alert } from 'react-native'

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
import { ReloadButtonContainer } from './styles'
import getDimensions from '../../utils/getDimensions'
import TextWithSVG from '../../components/TextWithSVG'
import colors from '../../assets/colors'

const Home = () => {
	const dispatch = useAppDispatch()
	const [reload, setReload] = useState(0)
	const { show, handleShow } = useLoading()
	const games = useGetGames()
	const [currentFilter, setCurrentFilter] = useState<Array<string>>([])
	const [bets, setBets] = useState<BetsI>([])

	useEffect(() => {
		if (reload > 0) {
			handleShow()
		}
		adonis
			.get<BetsI>('/bets')
			.then((response) => {
				setBets(response.data)
			})
			.catch(() => {
				Alert.alert('An error occurred, try to login again!')
				dispatch(actionLogOut())
			})
			.finally(() => {
				if (reload > 0) {
					handleShow()
				}
			})
	}, [reload])

	const reloadBets = () => {
		setReload((prevState) => prevState + 1)
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
				<ReloadButtonContainer onPress={reloadBets}>
					<TextWithSVG
						text="Reload games"
						textColor={colors.TGL_GREEN}
						fontSize={getDimensions(1).rem}
						svg={
							<Ionicons
								name="reload-circle"
								size={24}
								color={colors.TGL_GREEN}
							/>
						}
					/>
				</ReloadButtonContainer>
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
							<BetsContainer>
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
