import React from 'react'
import colors from '../../../assets/colors'

import { ActionButtonBet, ActionButtonLabel, IconContainer } from './styles'

interface ButtonOutlineProps {
	title: string
	onPress: () => void
	withBackground?: boolean
	icon?: JSX.Element
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({
	title,
	onPress,
	withBackground,
	icon,
}) => (
	<ActionButtonBet onPress={onPress} background={withBackground}>
		{icon && <IconContainer>{icon}</IconContainer>}
		<ActionButtonLabel color={withBackground ? 'white' : colors.TGL_GREEN}>
			{title}
		</ActionButtonLabel>
	</ActionButtonBet>
)

export default ButtonOutline
