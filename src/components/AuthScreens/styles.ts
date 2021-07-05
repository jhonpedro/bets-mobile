import styled from 'styled-components/native'
import colors from '../../assets/colors'
import Text from '../../assets/styles/Text'
import getDimensions from '../../utils/getDimensions'

export const AuthBoxContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

export const AuthBoxTextContainer = styled.View`
	height: 60px;
`

export const AuthBoxTextTGL = styled(Text)`
	font-size: ${getDimensions(2.8).rem};
	margin-bottom: ${getDimensions(3).rem};
	font-weight: bold;
	position: relative;

	display: flex;
	flex-direction: column;
`

export const AuthBoxLineBelowText = styled.Text`
	position: absolute;
	height: 7px;
	width: 25%;
	left: -2.5%;
	bottom: 0;
	background-color: ${colors.TGL_GREEN};
	border-radius: ${getDimensions(0.5).rem};
`

export const AuthBoxContent = styled.View`
	margin-top: 10%;
`

export const Copyright = styled.Text`
	position: absolute;
	font-size: ${getDimensions(0.85).rem};
	font-weight: 100;
	bottom: ${`${getDimensions(5).height}px`};
`
