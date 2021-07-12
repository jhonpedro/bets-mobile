import styled from 'styled-components/native'
import Text from '../../../assets/styles/Text'
import getDimensions from '../../../utils/getDimensions'

export const CartContainer = styled.View`
	width: ${`${getDimensions(75).width}px`};
	height: ${`${getDimensions().height}px`};
	padding-top: ${`${getDimensions(6).height}px`};
	margin-left: auto;
	background-color: white;
	padding-right: ${`${getDimensions(5).width}px`};
	padding-left: ${`${getDimensions(5).width}px`};
`

export const CloseCartIconContainer = styled.View`
	justify-content: flex-end;
	flex-direction: row;
`

export const CartContent = styled.View`
	justify-content: flex-start;
`

export const CartTitle = styled(Text)`
	font-size: ${getDimensions(2).rem};
	align-items: flex-start;
	font-weight: bold;
`

export const GameCartContainer = styled.View`
	margin-top: ${`${getDimensions(2).height}px`};
	margin-bottom: ${`${getDimensions(2).height}px`};
`
