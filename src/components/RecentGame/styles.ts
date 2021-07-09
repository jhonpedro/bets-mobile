import styled from 'styled-components/native'
import colors from '../../assets/colors'
import getDimensions from '../../utils/getDimensions'

interface RecentGameContainerProps {
	borderColor: string
}

interface GameTypeProps {
	color: string
}

export const RecentGameContainer = styled.View<RecentGameContainerProps>`
	border-left-width: 5px;
	border-left-color: ${(props) => props.borderColor};
	border-radius: 4px;

	padding-left: ${`${getDimensions(3).width}px`};

	align-items: flex-start;

	margin-bottom: ${getDimensions(0.5).rem};
`

const baseText = styled.Text`
	color: ${colors.FONT_DARK_NUMBERS_BET};
	font-size: ${getDimensions(0.9).rem};
`

export const NumbersContainer = styled(baseText)`
	font-weight: bold;
`

export const DateAndPrice = styled(baseText)`
	margin-top: 5px;
	margin-bottom: 5px;
`

export const GameType = styled.Text<GameTypeProps>`
	color: ${(props) => props.color};
	font-weight: bold;
	font-size: ${getDimensions(1.1).rem};
`
