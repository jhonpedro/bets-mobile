import styled from 'styled-components/native'
import colors from '../../../assets/colors'

import Text from '../../../assets/styles/Text'
import getDimensions from '../../../utils/getDimensions'

interface TabBarTextProps {
	focused: boolean
}

export const TabBarItemContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

export const TabBarText = styled(Text)<TabBarTextProps>`
	color: ${(props) =>
		props.focused ? colors.FONT_DARK : colors.ICONS_DARK_LIGHT};
	font-size: ${getDimensions(1).rem};
	font-weight: ${(props) => (props.focused ? 'bold' : 'normal')};
`
