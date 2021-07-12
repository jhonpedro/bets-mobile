import styled from 'styled-components/native'
import colors from '../../assets/colors'
import Text from '../../assets/styles/Text'
import getDimensions from '../../utils/getDimensions'

export const LoginAnimationBox = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	height: ${`${getDimensions(40).height}px`};
	background-color: ${colors.BG_LIGHT};
	border-radius: ${getDimensions(2).rem};
`

interface LoginAnimationTextProps {
	size?: number
}

export const LoginAnimationText = styled(Text)<LoginAnimationTextProps>`
	font-size: ${(props) => getDimensions(props.size ?? 2.5).rem};
	font-weight: bold;
`

export const LoginAnimationTextSmallGreen = styled(Text)`
	background-color: ${colors.TGL_GREEN};
	color: #fff;
	font-size: ${getDimensions(1).rem};
	margin: ${getDimensions(1.3).rem} 0 0;
	padding: ${getDimensions(0.1).rem} ${getDimensions(1).rem};
	border-radius: ${getDimensions(1).rem};
`
