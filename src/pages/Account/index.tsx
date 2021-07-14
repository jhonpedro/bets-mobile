import React, { useState, useEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons'

import { User } from '../../@types'
import {
	Container as AccountContainer,
	SubTitle,
	Title,
} from '../../components/UI/Common/styles'
import Header from '../../components/UI/Header'
import adonis from '../../services/adonis'
import {
	AccountInfoContainer,
	AccountScrollViewWrapper,
	AccountUpdateContainer,
	ButtonsContainer,
	InputAccount,
	InputLabel,
	SectionTitle,
} from './styles'
import getDimensions from '../../utils/getDimensions'
import colors from '../../assets/colors'
import useAppDispatch from '../../hooks/useAppDispatch'
import { actionShowModal } from '../../store/reducers/modal/actions'
import useTextInput from '../../hooks/useTextInput'
import ButtonOutline from '../../components/Bet/ButtonOutline'

const Account = () => {
	const [
		nameInput,
		setNameInput,
		isNameInputValid,
		showNameError,
		nameInputOnBlur,
	] = useTextInput((toValidate) => toValidate.length >= 3)
	const [passwordInput, setPasswordInput, isPasswordInputValid] = useTextInput(
		(toValidate) => toValidate.length >= 6
	)

	const [user, setUser] = useState({} as User)
	const dispatch = useAppDispatch()

	useEffect(() => {
		getUser()
	}, [])

	const getUser = async () => {
		try {
			const response = await adonis.get<User>('/users')

			setUser(response.data)
			setNameInput(response.data.name)
		} catch (error) {
			dispatch(
				actionShowModal({
					title: 'Oops!',
					message: 'An error occurred try to logout and login again.',
				})
			)
		}
	}

	const handleUpdateData = async () => {
		try {
			if (
				!isNameInputValid ||
				(!isPasswordInputValid && passwordInput !== '')
			) {
				dispatch(
					actionShowModal({
						title: 'Oops!',
						message:
							'Your name or new password do not follow our rules, try another ones',
					})
				)

				return
			}

			const reqBody =
				nameInput && passwordInput
					? { name: nameInput, password: passwordInput }
					: { name: nameInput }

			await adonis.put('/users', reqBody)
			getUser()
			dispatch(
				actionShowModal({
					title: 'Success!',
					message: 'Your data has been updated.',
				})
			)
		} catch {
			dispatch(
				actionShowModal({
					title: 'Oops!',
					message: 'Are you sure that you have typed everything Ok?',
				})
			)
		}
	}

	return (
		<>
			<Header />
			<AccountScrollViewWrapper
				contentContainerStyle={{
					justifyContent: 'space-evenly',
					alignItems: 'center',
				}}
			>
				<AccountContainer>
					<AccountInfoContainer>
						<SectionTitle>Your account</SectionTitle>
						<FontAwesome
							name="user-circle"
							size={getDimensions(20).height}
							color={colors.TGL_GREEN}
						/>
						<Title>{user.name}</Title>
						<SubTitle>{user.email}</SubTitle>
					</AccountInfoContainer>
					<AccountUpdateContainer>
						<SectionTitle>Update data</SectionTitle>
						<InputLabel turnRed={showNameError}>
							{showNameError
								? 'Names should have at least 3 characters'
								: 'You can define your new name in the input below'}
						</InputLabel>
						<InputAccount
							placeholder="New name"
							value={nameInput}
							onChangeText={setNameInput}
							onBlur={nameInputOnBlur}
						/>
						<InputLabel>
							You can (but not required) define a new password for your account
						</InputLabel>
						<InputAccount
							placeholder="New password"
							value={passwordInput}
							onChangeText={setPasswordInput}
							secureTextEntry
						/>
						<ButtonsContainer>
							<ButtonOutline
								title="Update"
								onPress={handleUpdateData}
								titleSize={getDimensions(1).rem}
								withBackground
							/>
						</ButtonsContainer>
					</AccountUpdateContainer>
				</AccountContainer>
			</AccountScrollViewWrapper>
		</>
	)
}

export default Account
