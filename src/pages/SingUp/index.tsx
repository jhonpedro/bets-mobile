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

import { SingUpContainer, FooterContentContainer } from './styles'

interface LoginProps {
	navigation: StackNavigationProp<AuthStackList>
}

const SingUp: React.FC<LoginProps> = ({ navigation }) => (
	<SingUpContainer>
		<AuthScreens>
			<UpperText>Registration</UpperText>
			<InputsBox>
				<InputAuthScreens placeholder="Name" />
				<InputAuthScreens placeholder="Email" />
				<InputAuthScreens placeholder="Password" secureTextEntry />
				<FooterContentContainer>
					<TextWithSVG
						text="Register"
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

export default SingUp
