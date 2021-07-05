import styled from 'styled-components/native'
import colors from '../../assets/colors'
import Text from '../../assets/styles/Text'
import getDimensions from '../../utils/getDimensions'

export const LoginContainer = styled.View`
	flex: 1;
	align-self: stretch;
	align-items: center;
	justify-content: center;
	background-color: ${colors.BG_LIGHT};
	position: relative;
`

export const ForgotPasswordText = styled(Text)`
	margin-left: auto;
	font-size: ${getDimensions(0.8).rem};
	color: ${colors.FONT_DARK_LIGHT};
	margin-bottom: ${getDimensions(1.2).rem};
`

export const FooterContentContainer = styled.View`
	padding: ${getDimensions(1).rem};
`
