import React from 'react'
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

import { ForgotPasswordContainer, FooterContentContainer } from './styles'

interface ForgotPasswordProps {
	navigation: StackNavigationProp<AuthStackList>
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ navigation }) => (
	<ForgotPasswordContainer>
		<AuthScreens>
			<UpperText>Reset password</UpperText>
			<InputsBox>
				<InputAuthScreens placeholder="Email" />
				<FooterContentContainer>
					<TextWithSVG
						text="Send"
						textColor={colors.TGL_GREEN}
						fontSize={getDimensions(1.8).rem}
						svg={
							<AntDesign name="arrowright" size={24} color={colors.TGL_GREEN} />
						}
					/>
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

export default ForgotPassword
