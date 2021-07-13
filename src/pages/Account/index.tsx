import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'

import { User } from '../../@types'
import { Container, SubTitle, Title } from '../../components/UI/Common/styles'
import Header from '../../components/UI/Header'
import adonis from '../../services/adonis'

const Account = () => {
	const [user, setUser] = useState({} as User)

	useEffect(() => {
		adonis
			.get<User>('/users')
			.then((response) => {
				setUser(response.data)
			})
			.catch(() => {
				Alert.alert('Error', 'It will be necessary to login again')
			})
	}, [])

	return (
		<>
			<Header />
			<Container>
				<Title>Name: {user.name}</Title>
				<SubTitle>Email: {user.email}</SubTitle>
			</Container>
		</>
	)
}

export default Account
