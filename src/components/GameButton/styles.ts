import styled, { css } from 'styled-components/native'
import getDimensions from '../../utils/getDimensions'

interface GameButtonProps {
	active: boolean
	color: string
}

const GameButtonStyle = styled.Text<GameButtonProps>`
	padding-left: ${getDimensions(1.5).rem};
	padding-right: ${getDimensions(1.5).rem};
	padding-top: ${getDimensions(0.2).rem};
	padding-bottom: ${getDimensions(0.2).rem};

	align-self: flex-start;

	border-radius: ${getDimensions(1).rem};
	border-width: 2px;
	border-color: ${(props) => props.color};
	${(props) => {
		if (props.active) {
			return css`
				background-color: ${props.color};
				color: white;
			`
		}
		return css`
			background-color: white;
			color: ${props.color};
		`
	}};
`

export default GameButtonStyle
