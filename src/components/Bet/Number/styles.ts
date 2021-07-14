import styled from 'styled-components/native'

import colors from '../../../assets/colors'
import getDimensions from '../../../utils/getDimensions'

interface BetButtonTouchableOpacityProps {
	color: string
	active: boolean
}

export const BetButtonTouchableOpacity = styled.TouchableOpacity<BetButtonTouchableOpacityProps>`
	justify-content: center;
	align-items: center;

	background-color: ${(props) => (props.active ? props.color : colors.BUTTON)};
	width: ${getDimensions(3.5).rem};
	height: ${getDimensions(3.5).rem};
	border-radius: ${getDimensions(3.5).rem};

	margin-top: 5px;
	margin-right: 5px;
	margin-bottom: 5px;
	margin-left: 5px;
`
export const BetNumberText = styled.Text`
	color: white;
	font-size: ${getDimensions(1).rem};
	font-weight: bold;
`
