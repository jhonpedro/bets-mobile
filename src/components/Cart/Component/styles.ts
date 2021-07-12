import styled from 'styled-components/native'
import colors from '../../../assets/colors'
import Text from '../../../assets/styles/Text'
import getDimensions from '../../../utils/getDimensions'

export const CartContainer = styled.View`
	width: ${`${getDimensions(75).width}px`};
	height: ${`${getDimensions().height}px`};
	padding-top: ${`${getDimensions(8).height}px`};
	margin-left: auto;
	background-color: white;
	padding-right: ${`${getDimensions(5).width}px`};

	justify-content: space-between;
`

export const CloseCartIconContainer = styled.View`
	justify-content: flex-end;
	flex-direction: row;
`

export const CloseCartTouchableOpacity = styled.TouchableOpacity``

export const CartContent = styled.View`
	justify-content: flex-start;
	padding-left: ${`${getDimensions(5).width}px`};
`

export const CartTitle = styled(Text)`
	font-size: ${getDimensions(2).rem};
	align-items: flex-start;
	font-weight: bold;
`

export const GamesScrollView = styled.ScrollView`
	height: ${`${getDimensions(50).height}px`};
	padding-top: 20px;
`

export const GameCartContainer = styled.View`
	margin-top: ${`${getDimensions(2).height}px`};
	margin-bottom: ${`${getDimensions(2).height}px`};
`

export const CartFooter = styled.View``

export const TextStrong = styled(Text)`
	font-weight: bold;
	font-size: ${getDimensions(1.1).rem};
	text-transform: uppercase;
`

export const CartTotalContainer = styled.View`
	flex-direction: row;
	justify-content: space-evenly;
	margin-bottom: ${`${getDimensions(5).height}px`};
`

export const CartTotal = styled(TextStrong)`
	font-weight: normal;
`

export const SaveButtonContainer = styled.TouchableOpacity`
	background-color: ${colors.BORDER_INPUTS};
	justify-content: center;
	align-items: center;
	padding-top: 20px;
	padding-bottom: 40px;

	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
`
