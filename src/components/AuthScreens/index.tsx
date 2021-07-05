import React from 'react'

import {
	AuthBoxContainer,
	AuthBoxTextTGL,
	AuthBoxLineBelowText,
	AuthBoxTextContainer,
	AuthBoxContent,
	Copyright,
} from './styles'

interface AuthScreensProps {
	showCopyright: boolean
}

const AuthScreens: React.FC<AuthScreensProps> = ({
	children,
	showCopyright,
}) => (
	<AuthBoxContainer>
		<AuthBoxTextContainer>
			<AuthBoxTextTGL>TGL</AuthBoxTextTGL>
			<AuthBoxLineBelowText> </AuthBoxLineBelowText>
		</AuthBoxTextContainer>
		<AuthBoxContent>{children}</AuthBoxContent>
		{showCopyright && <Copyright>Copyright 2020 Luby Software</Copyright>}
	</AuthBoxContainer>
)

export default AuthScreens
