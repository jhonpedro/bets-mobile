import React from 'react'
import { Text } from 'react-native'

import LoginAnimation from '../../components/LoginAnimation'
import AuthBox from '../../components/AuthBox'

import { LoginContainer } from './styles'

const Login: React.FC = () => (
	<LoginContainer>
		<LoginAnimation />
		<AuthBox>
			<Text>Hello</Text>
		</AuthBox>
	</LoginContainer>
)

export default Login
