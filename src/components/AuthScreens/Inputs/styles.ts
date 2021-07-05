import styled from 'styled-components/native'
import colors from '../../../assets/colors'
import getDimensions from '../../../utils/getDimensions'

interface InputAuthScreensProps {
	borderBottomColorError: boolean
}

const InputAuthScreens = styled.TextInput<InputAuthScreensProps>`
	font-size: ${getDimensions(1).rem};
	color: ${colors.FONT_DARK_LIGHT};
	padding-left: ${getDimensions(2).rem};
	padding-right: ${getDimensions(2).rem};
	padding-top: ${getDimensions(0.5).rem};
	padding-bottom: ${getDimensions(0.8).rem};

	border-bottom-width: 2px;
	border-bottom-color: ${(props) =>
		props.borderBottomColorError ? colors.RED : colors.BORDER_INPUTS};

	font-weight: bold;
	font-style: italic;
`

export const ErrorMessage = styled.Text`
	text-align: center;
	font-size: ${getDimensions(0.8).rem};
	font-weight: bold;
	color: ${colors.RED};
	margin-top: ${getDimensions(0.1).rem};
`

export default InputAuthScreens
