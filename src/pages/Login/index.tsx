import React from 'react'
import { TouchableOpacity, Keyboard } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack'

import LoginAnimation from '../../components/LoginAnimation'
import AuthScreens from '../../components/AuthScreens'
import InputsBox from '../../components/AuthScreens/InputsBox'
import InputAuthScreens from '../../components/AuthScreens/Inputs/styles'
import TextWithSVG from '../../components/TextWithSVG'
import getDimensions from '../../utils/getDimensions'
import colors from '../../assets/colors'
import UpperText from '../../components/AuthScreens/Labels/UpperText'
import LowerTextContainer from '../../components/AuthScreens/Labels/LowerTextContainer'
import { AuthStackList } from '../../@types'
import useTextInput from '../../hooks/useTextInput'
import ErrorMessage from '../../components/AuthScreens/Inputs/ErrorMessage'
import { actionLoginRequest } from '../../store/reducers/auth/actions'
import emailValidator from '../../utils/emailValidator'
import useLoading from '../../hooks/useLoading'
import useAppDispatch from '../../hooks/useAppDispatch'

import {
	LoginContainer,
	FooterContentContainer,
	ForgotPasswordText,
} from './styles'
import { actionShowModal } from '../../store/reducers/modal/actions'

interface LoginProps {
	navigation: StackNavigationProp<AuthStackList>
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
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

	const handleLogIn = () => {
		emailInputOnBlur()
		passwordInputOnBlur()
		if (!isEmailInputValid || !isPasswordInputValid) {
			return
		}

		Keyboard.dismiss()
		handleShow()

		const action = actionLoginRequest({
			email: emailInput,
			password: passwordInput,
			callbackFinally: handleShow,
			callbackError: (error) => {
				dispatch(
					actionShowModal({
						title: 'Oops!',
						message: error.response.data[0]
							? error.response.data[0].message
							: 'Our machines stopped, sorry, we are putting them on again. Try again later!',
					})
				)
			},
		})

		dispatch(action)
	}

	return (
		<LoginContainer>
			<LoginAnimation />
			<AuthScreens>
				<UpperText>Authentication</UpperText>
				<InputsBox>
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
						<ForgotPasswordText
							onPress={() => navigation.push('ForgotPassword')}
						>
							I forget my password
						</ForgotPasswordText>
						<TouchableOpacity onPress={handleLogIn}>
							<TextWithSVG
								text="Log In"
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
				<LowerTextContainer onPress={() => navigation.push('SingUp')}>
					<TextWithSVG
						text="Sing up"
						textColor={colors.FONT_DARK}
						fontSize={getDimensions(1.8).rem}
						svg={
							<AntDesign name="arrowright" size={24} color={colors.FONT_DARK} />
						}
					/>
				</LowerTextContainer>
			</AuthScreens>
		</LoginContainer>
	)
}

export default Login
