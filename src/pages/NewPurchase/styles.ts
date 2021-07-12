import styled from 'styled-components/native'
import Text from '../../assets/styles/Text'
import getDimensions from '../../utils/getDimensions'

export const GameDescription = styled(Text)`
	font-size: ${getDimensions(0.85).rem};
	margin-bottom: ${getDimensions(1).rem};
`

export const ActionButtonsContainer = styled.View`
	flex-direction: row;
`
