import styled from 'styled-components/native'
import colors from '../../assets/colors'
import getDimensions from '../../utils/getDimensions'

export const TabBarContainer = styled.View`
	flex-direction: row;
	height: ${`${getDimensions(4).rem}`};
	background-color: white;
	border-top-right-radius: 10px;
`

export const TabItemsWrapper = styled.TouchableOpacity`
	flex: 1;
	align-items: center;
`

export const BetIconContainer = styled.View`
	width: ${getDimensions(6).rem};
	height: ${getDimensions(6).rem};
	border-width: 5px;
	border-color: white;

	background-color: ${colors.TGL_GREEN};
	border-radius: ${`${getDimensions().height}px`};
	justify-content: center;
	align-items: center;
	transform: translateY(-40px);
`

export const BetIcon = styled.Image`
	width: ${getDimensions(3.5).rem};
	height: ${getDimensions(3.5).rem};
`
