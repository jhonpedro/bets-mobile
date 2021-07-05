import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

import LoginAnimation from '../../components/LoginAnimation'
import AuthScreens from '../../components/AuthScreens'
import InputsBox from '../../components/AuthScreens/InputsBox'
import InputAuthScreens from '../../components/AuthScreens/Inputs/styles'
import TextWithSVG from '../../components/TextWithSVG'
import getDimensions from '../../utils/getDimensions'
import colors from '../../assets/colors'
import UpperText from '../../components/AuthScreens/Labels/UpperText'

import {
	LoginContainer,
	FooterContentContainer,
	ForgotPasswordText,
} from './styles'

const Login: React.FC = () => {
	const [hideCopyright, setHideCopyright] = useState(false)

	const handleTouch = () => {
		setHideCopyright((prevState) => !prevState)
	}

	return (
		<LoginContainer>
			<LoginAnimation />
			<AuthScreens showCopyright={!hideCopyright}>
				<UpperText>Authentication</UpperText>
				<InputsBox>
					<InputAuthScreens
						placeholder="Email"
						onTouchStart={handleTouch}
						onTouchEnd={handleTouch}
					/>
					<InputAuthScreens
						placeholder="Password"
						secureTextEntry
						onTouchStart={handleTouch}
						onTouchEnd={handleTouch}
					/>
					<FooterContentContainer>
						<ForgotPasswordText>I forget my password</ForgotPasswordText>
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
					</FooterContentContainer>
				</InputsBox>
				<TextWithSVG
					text="Sing up"
					textColor={colors.FONT_DARK}
					fontSize={getDimensions(1.8).rem}
					svg={
						<AntDesign name="arrowright" size={24} color={colors.FONT_DARK} />
					}
				/>
			</AuthScreens>
		</LoginContainer>
	)
}

export default Login
