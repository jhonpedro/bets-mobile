import React from 'react'
import { TouchableOpacity } from 'react-native'
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
import emailValidator from '../../utils/emailValidator'
import useTextInput from '../../hooks/useTextInput'
import ErrorMessage from '../../components/AuthScreens/Inputs/ErrorMessage'

import { ForgotPasswordContainer, FooterContentContainer } from './styles'

interface ForgotPasswordProps {
	navigation: StackNavigationProp<AuthStackList>
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ navigation }) => {
	const [
		emailInput,
		setEmailInput,
		isEmailInputValid,
		showEmailError,
		emailInputOnBlur,
	] = useTextInput(emailValidator)

	const handleSendForgotPassword = () => {
		emailInputOnBlur()
		if (!isEmailInputValid) {
			return
		}
	}

	return (
		<ForgotPasswordContainer>
			<AuthScreens>
				<UpperText>Reset password</UpperText>
				<InputsBox>
					<ErrorMessage text="Invalid email" show={showEmailError} />
					<InputAuthScreens
						placeholder="Email"
						borderBottomColorError={showEmailError}
						value={emailInput}
						onChangeText={setEmailInput}
						onBlur={emailInputOnBlur}
					/>
					<FooterContentContainer>
						<TouchableOpacity onPress={handleSendForgotPassword}>
							<TextWithSVG
								text="Send"
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
						text="Login"
						svgOrientation="left"
						textColor={colors.FONT_DARK}
						fontSize={getDimensions(1.8).rem}
						svg={
							<AntDesign name="arrowleft" size={24} color={colors.FONT_DARK} />
						}
					/>
				</LowerTextContainer>
			</AuthScreens>
		</ForgotPasswordContainer>
	)
}

export default ForgotPassword
