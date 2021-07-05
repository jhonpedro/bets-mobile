import styled from 'styled-components/native'
import Text from '../../../assets/styles/Text'
import getDimensions from '../../../utils/getDimensions'

const UpperText = styled(Text)`
	font-size: ${getDimensions(2).rem};
	font-weight: bold;
	align-self: center;
	margin-bottom: ${getDimensions(1).rem};
`

export default UpperText
