import styled from 'styled-components/native'

import colors from '../../../assets/colors'
import Text from '../../../assets/styles/Text'
import getDimensions from '../../../utils/getDimensions'

export const Container = styled.View`
	padding-top: ${`${getDimensions(2).height}px`};
	padding-left: ${`${getDimensions(5).width}px`};
	padding-right: ${`${getDimensions(5).width}px`};

	background-color: ${colors.BG_LIGHT};
`

export const Title = styled(Text)`
	font-size: ${getDimensions(1.5).rem};
	margin-bottom: ${`${getDimensions(2).height}px`};
	font-weight: bold;
	font-style: normal;
	text-transform: uppercase;
`

export const SubTitle = styled(Text)`
	font-size: ${getDimensions(1.2).rem};
`

export const ContainerScrollView = styled.ScrollView`
	align-self: stretch;
	height: ${`${getDimensions(55).height}px`};
`

export const TextWarning = styled(Text)`
	font-size: ${getDimensions(1).rem};
	text-align: center;
`
