import React from 'react'

import {
	AuthBoxContainer,
	AuthBoxTextTGL,
	AuthBoxLineBelowText,
	AuthBoxTextContainer,
	AuthBoxContent,
	Copyright,
} from './styles'

const AuthScreens: React.FC = ({ children }) => (
	<AuthBoxContainer>
		<AuthBoxTextContainer>
			<AuthBoxTextTGL>TGL</AuthBoxTextTGL>
			<AuthBoxLineBelowText> </AuthBoxLineBelowText>
		</AuthBoxTextContainer>
		<AuthBoxContent>{children}</AuthBoxContent>
		<Copyright>Copyright 2020 Luby Software</Copyright>
	</AuthBoxContainer>
)

export default AuthScreens
