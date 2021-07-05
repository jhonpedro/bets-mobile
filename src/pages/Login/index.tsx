import React from 'react'
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

import {
	LoginContainer,
	FooterContentContainer,
	ForgotPasswordText,
} from './styles'

interface LoginProps {
	navigation: StackNavigationProp<AuthStackList>
}

const Login: React.FC<LoginProps> = ({ navigation }) => (
	<LoginContainer>
		<LoginAnimation />
		<AuthScreens>
			<UpperText>Authentication</UpperText>
			<InputsBox>
				<InputAuthScreens placeholder="Email" />
				<InputAuthScreens placeholder="Password" secureTextEntry />
				<FooterContentContainer>
					<ForgotPasswordText onPress={() => navigation.push('ForgotPassword')}>
						I forget my password
					</ForgotPasswordText>
					<TextWithSVG
						text="Log In"
						textColor={colors.TGL_GREEN}
						fontSize={getDimensions(1.8).rem}
						svg={
							<AntDesign name="arrowright" size={24} color={colors.TGL_GREEN} />
						}
					/>
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

export default Login
