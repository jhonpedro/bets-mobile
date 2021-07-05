import React from 'react'

import { Text, TextWithSVGContainer, SVGWrapper } from './styles'

interface TextWithSVGProps {
	text: string
	svg: React.ReactNode
	svgOrientation?: 'left' | 'right'
	textColor: string
	fontSize: string
}

const TextWithSVG: React.FC<TextWithSVGProps> = ({
	text,
	svg,
	textColor,
	fontSize,
	svgOrientation,
}) => (
	<TextWithSVGContainer SVGOrientation={svgOrientation}>
		<Text color={textColor} size={fontSize}>
			{text}
		</Text>
		<SVGWrapper>{svg}</SVGWrapper>
	</TextWithSVGContainer>
)

export default TextWithSVG
