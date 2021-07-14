import React from 'react'
import colors from '../../../assets/colors'
import getDimensions from '../../../utils/getDimensions'

import { ActionButtonBet, ActionButtonLabel, IconContainer } from './styles'

interface ButtonOutlineProps {
	title: string
	onPress: () => void
	titleSize?: string
	withBackground?: boolean
	icon?: JSX.Element
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({
	title,
	onPress,
	withBackground,
	icon,
	titleSize,
}) => (
	<ActionButtonBet onPress={onPress} background={withBackground}>
		{icon && <IconContainer>{icon}</IconContainer>}
		<ActionButtonLabel
			color={withBackground ? 'white' : colors.TGL_GREEN}
			size={!titleSize ? getDimensions(1).rem : titleSize}
		>
			{title}
		</ActionButtonLabel>
	</ActionButtonBet>
)

export default ButtonOutline
