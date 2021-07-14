import styled from 'styled-components/native'

import colors from '../../../assets/colors'
import Text from '../../../assets/styles/Text'
import getDimensions from '../../../utils/getDimensions'

export const ModalContainer = styled.View`
	flex: 1;
	justify-content: space-between;
`

export const ModalTitle = styled.Text`
	color: ${colors.TGL_GREEN};
	font-size: ${getDimensions(1.5).rem};
	font-weight: bold;
	font-style: italic;
`

export const ModalMessage = styled(Text)`
	margin-top: auto;
	font-size: ${getDimensions(1).rem};
`

export const ButtonsContainer = styled.View`
	margin-top: 20px;
	flex-direction: row;
	justify-content: flex-end;
`
