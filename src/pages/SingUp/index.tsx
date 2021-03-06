import React from 'react'
import { TouchableOpacity, Keyboard } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack'

import AuthScreens from '../../components/AuthScreens'
import InputsBox from '../../components/AuthScreens/InputsBox'
import InputAuthScreens from '../../components/AuthScreens/Inputs/styles'
import TextWithSVG from '../../components/TextWithSVG'
import getDimensions from '../../utils/getDimensions'
import colors from '../../assets/colors'
import UpperText from '../../components/AuthScreens/Labels/UpperText'
import LowerTextContainer from '../../components/AuthScreens/Labels/LowerTextContainer'
import { AuthStackList } from '../../@types'
import ErrorMessage from '../../components/AuthScreens/Inputs/ErrorMessage'

import { SingUpContainer, FooterContentContainer } from './styles'
import useTextInput from '../../hooks/useTextInput'
import emailValidator from '../../utils/emailValidator'
import adonis from '../../services/adonis'
import useLoading from '../../hooks/useLoading'
import useAppDispatch from '../../hooks/useAppDispatch'
import { actionShowModal } from '../../store/reducers/modal/actions'

interface LoginProps {
	navigation: StackNavigationProp<AuthStackList>
}

const SingUp: React.FC<LoginProps> = ({ navigation }) => {
	const [
		nameInput,
		setNameInput,
		isNameInputValid,
		showNameError,
		nameInputOnBlur,
	] = useTextInput((toValidate) => toValidate.length >= 3)
	const [
		emailInput,
		setEmailInput,
		isEmailInputValid,
		showEmailError,
		emailInputOnBlur,
	] = useTextInput(emailValidator)
	const [
		passwordInput,
		setPasswordInput,
		isPasswordInputValid,
		showPasswordError,
		passwordInputOnBlur,
	] = useTextInput((toValidate) => toValidate.length >= 6)
	const { handleShow } = useLoading()
	const dispatch = useAppDispatch()

	const handleSingIn = async () => {
		if (!isNameInputValid || !isEmailInputValid || !isPasswordInputValid) {
			return
		}
		Keyboard.dismiss()
		handleShow()

		await new Promise((resolve) => {
			setTimeout(resolve, 3000)
		})

		try {
			await adonis.post('/users', {
				name: nameInput,
				email: emailInput,
				password: passwordInput,
				password_confirmation: passwordInput,
			})

			navigation.navigate('Login')
			dispatch(
				actionShowModal({
					title: 'Success',
					message: 'You have created your account!',
				})
			)
		} catch (error) {
			if (error.response) {
				dispatch(
					actionShowModal({
						title: 'Oops!',
						message: error.response.data[0].message,
					})
				)
				return
			}
			dispatch(
				actionShowModal({
					title: 'Oops!',
					message: 'An error occurred, try again later',
				})
			)
		} finally {
			handleShow()
		}
	}

	return (
		<SingUpContainer>
			<AuthScreens>
				<UpperText>Registration</UpperText>
				<InputsBox>
					<ErrorMessage
						text="Name must have at least 3 characters"
						show={showNameError}
					/>
					<InputAuthScreens
						placeholder="Name"
						borderBottomColorError={showNameError}
						value={nameInput}
						onChangeText={setNameInput}
						onBlur={nameInputOnBlur}
					/>
					<ErrorMessage text="Invalid email" show={showEmailError} />
					<InputAuthScreens
						placeholder="Email"
						borderBottomColorError={showEmailError}
						value={emailInput}
						onChangeText={setEmailInput}
						onBlur={emailInputOnBlur}
					/>
					<ErrorMessage
						text="Password should have at least 6 characters"
						show={showPasswordError}
					/>
					<InputAuthScreens
						placeholder="Password"
						borderBottomColorError={showPasswordError}
						secureTextEntry
						value={passwordInput}
						onChangeText={setPasswordInput}
						onBlur={passwordInputOnBlur}
					/>
					<FooterContentContainer>
						<TouchableOpacity onPress={handleSingIn}>
							<TextWithSVG
								text="Register"
								textColor={colors.TGL_GREEN}
								fontSize={getDimensions(1.8).rem}
								svg={
									<AntDesign
										name="arrowright"
										size={24}
										color={colors.TGL_GREEN}
									/>
								}
							/>
						</TouchableOpacity>
					</FooterContentContainer>
				</InputsBox>
				<LowerTextContainer onPress={() => navigation.navigate('Login')}>
					<TextWithSVG
						text="Back"
						svgOrientation="left"
						textColor={colors.FONT_DARK}
						fontSize={getDimensions(1.8).rem}
						svg={
							<AntDesign name="arrowleft" size={24} color={colors.FONT_DARK} />
						}
					/>
				</LowerTextContainer>
			</AuthScreens>
		</SingUpContainer>
	)
}

export default SingUp
