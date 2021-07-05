import styled from 'styled-components/native'
import colors from '../../assets/colors'
import getDimensions from '../../utils/getDimensions'

export const SingUpContainer = styled.View`
	flex: 1;
	align-self: stretch;
	align-items: center;
	justify-content: center;
	background-color: ${colors.BG_LIGHT};
	position: relative;
`

export const FooterContentContainer = styled.View`
	padding: ${getDimensions(1).rem};
`
