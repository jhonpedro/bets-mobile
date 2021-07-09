import styled from 'styled-components/native'
import Text from '../../assets/styles/Text'
import getDimensions from '../../utils/getDimensions'

export const HomeContainer = styled.View`
	padding-top: ${`${getDimensions(2).height}px`};
	padding-left: ${`${getDimensions(5).width}px`};
	padding-right: ${`${getDimensions(5).width}px`};
`

export const Title = styled(Text)`
	font-size: ${getDimensions(2).rem};
	margin-bottom: ${`${getDimensions(2).height}px`};
	font-weight: bold;
	font-style: normal;
`

export const SubTitle = styled(Text)`
	font-size: ${getDimensions(1.2).rem};
`

export const ContentContainer = styled.View``

export const BetsContainer = styled.ScrollView`
	align-self: stretch;
	height: ${`${getDimensions(60).height}px`};
`
