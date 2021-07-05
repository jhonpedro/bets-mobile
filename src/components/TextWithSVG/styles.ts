import styled from 'styled-components/native'
import colors from '../../assets/colors'
import getDimensions from '../../utils/getDimensions'

interface TextWithSVGContainerProps {
	SVGOrientation?: string
}

interface TextProps {
	color?: string
	size: string
}

export const TextWithSVGContainer = styled.View<TextWithSVGContainerProps>`
	flex-direction: ${(props) =>
		props.SVGOrientation === 'left' ? 'row-reverse' : 'row'};
	justify-content: center;
	align-items: center;
`

export const Text = styled.Text<TextProps>`
	justify-content: center;
	align-items: center;
	font-size: ${(props) => props.size};
	font-weight: bold;
	font-style: italic;
	color: ${(props) => (!props.color ? colors.FONT_DARK : props.color)};
	margin-right: ${getDimensions(0.1).rem};
`

export const SVGWrapper = styled.View`
	flex-direction: column;
	padding: ${getDimensions(0.6).rem};
`
