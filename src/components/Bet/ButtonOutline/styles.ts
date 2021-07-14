import styled from 'styled-components/native'
import colors from '../../../assets/colors'

interface ActionButtonBetProps {
	background?: boolean
}

interface ActionButtonLabelProps {
	color: string
	size: string
}

export const ActionButtonBet = styled.TouchableOpacity<ActionButtonBetProps>`
	border-width: 2px;
	border-color: ${colors.TGL_GREEN};
	border-radius: 4px;
	align-items: center;
	justify-content: center;

	flex-direction: row;

	margin-left: 5px;
	margin-right: 5px;

	padding: 5px;
	background-color: ${(props) =>
		props.background ? colors.TGL_GREEN : 'transparent'};
`

export const ActionButtonLabel = styled.Text<ActionButtonLabelProps>`
	color: ${(props) => props.color};
	font-weight: bold;
	font-size: ${(props) => props.size};
`

export const IconContainer = styled.View`
	margin-right: 5px;
`
