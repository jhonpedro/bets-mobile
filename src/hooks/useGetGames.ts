import { useEffect, useState } from 'react'
import { GamesI } from '../@types'
import adonis from '../services/adonis'
import useLoading from './useLoading'

const useGetGames = () => {
	const [games, setGames] = useState<GamesI>([])
	const { handleShow } = useLoading()

	useEffect(() => {
		handleShow()
		adonis
			.get<GamesI>('/games')
			.then((response) => {
				setGames(response.data)
			})
			.finally(() => handleShow())
	}, [])

	return games
}

export default useGetGames
