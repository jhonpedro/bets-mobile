import styled, { css } from 'styled-components/native'

import colors from '../../assets/colors'
import Text from '../../assets/styles/Text'
import { Title } from '../../components/UI/Common/styles'
import getDimensions from '../../utils/getDimensions'

interface InputLabelProps {
	turnRed?: boolean
}

export const AccountScrollViewWrapper = styled.ScrollView``

export const AccountInfoContainer = styled.View`
	justify-content: space-evenly;
	align-items: center;
`

export const AccountUpdateContainer = styled.View`
	align-self: stretch;
	margin-top: 30px;
`

export const SectionTitle = styled(Title)`
	text-align: center;
	color: ${colors.TGL_GREEN};
`

export const InputLabel = styled(Text)<InputLabelProps>`
	font-size: ${getDimensions(1).rem};
	${(props) => {
		if (props.turnRed) {
			return css`
				color: #f00;
			`
		}
		return css`
			color: ${colors.FONT_DARK};
		`
	}}
`

export const InputAccount = styled.TextInput`
	padding-left: 15px;
	padding-right: 15px;
	padding-top: 5px;
	padding-bottom: 5px;

	border-width: 2px;
	border-color: ${colors.BORDER_INPUTS};
	border-radius: 10px;
	background-color: white;
	color: ${colors.FONT_DARK};
`

export const ButtonsContainer = styled.View`
	margin-top: 10px;
	margin-bottom: 20px;
`
