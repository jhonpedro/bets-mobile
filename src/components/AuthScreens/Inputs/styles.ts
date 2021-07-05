import styled from 'styled-components/native'
import colors from '../../../assets/colors'
import getDimensions from '../../../utils/getDimensions'

const InputAuthScreens = styled.TextInput`
	font-size: ${getDimensions(1).rem};
	color: ${colors.FONT_DARK_LIGHT};
	padding-left: ${getDimensions(2).rem};
	padding-right: ${getDimensions(2).rem};
	padding-top: ${getDimensions(1).rem};
	padding-bottom: ${getDimensions(0.8).rem};

	border-bottom-width: 2px;
	border-bottom-color: ${colors.BORDER_INPUTS};

	font-weight: bold;
	font-style: italic;
`

export default InputAuthScreens
