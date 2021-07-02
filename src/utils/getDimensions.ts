import { Dimensions } from 'react-native'

const dimensions = Dimensions.get('window')

const getDimensions = (em = 100) => ({
	width: Math.floor(dimensions.width * (em / 100)),
	height: Math.floor(dimensions.height * (em / 100)),
	rem: `${Math.floor(16 * em)}px`,
})

export default getDimensions
