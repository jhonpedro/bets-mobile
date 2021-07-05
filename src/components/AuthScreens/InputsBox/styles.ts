import styled from 'styled-components/native'
import colors from '../../../assets/colors'
import getDimensions from '../../../utils/getDimensions'

export const InputsBoxContainer = styled.View`
	background-color: #fff;
	border-width: 1px;
	border-color: ${colors.BORDER};
	border-radius: ${getDimensions(0.625).rem};
	width: ${`${getDimensions(65).width}px`};
	margin-bottom: ${getDimensions(1.5).rem};
`
