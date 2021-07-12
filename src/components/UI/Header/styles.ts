import styled from 'styled-components/native'
import { StatusBar } from 'react-native'

import Text from '../../../assets/styles/Text'
import getDimensions from '../../../utils/getDimensions'
import colors from '../../../assets/colors'

export const HeaderContainer = styled.View`
	height: ${`${getDimensions(17).height}px`};
	padding-top: ${`${StatusBar.currentHeight}px`};
	padding-right: ${`${getDimensions(5).width}px`};
	padding-left: ${`${getDimensions(5).width}px`};
	background-color: white;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`

export const BrandContainer = styled.View``

export const TGL = styled(Text)`
	font-size: ${getDimensions(2).rem};
	font-weight: bold;
`

export const Line = styled.Text`
	position: absolute;
	width: ${getDimensions(3.5).rem};
	height: 5px;
	bottom: 0;
	border-radius: ${getDimensions(1).rem};
	background-color: ${colors.TGL_GREEN};
`

export const ActionsContainer = styled.View`
	flex-direction: row;
`

export const CartTouchableOpacity = styled.TouchableOpacity`
	margin-right: ${getDimensions(2).rem};
`
