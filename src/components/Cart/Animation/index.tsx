import React, { useRef, useEffect } from 'react'
import { Animated } from 'react-native'

import cartSelector from '../../../store/selectors/cartSelector'
import getDimensions from '../../../utils/getDimensions'

const CartAnimation: React.FC = ({ children }) => {
	const { show } = cartSelector()
	const fadeIn = useRef(new Animated.Value(0)).current
	const moveFromRight = useRef(
		new Animated.Value(getDimensions().width * 2)
	).current

	useEffect(() => {
		if (show) {
			Animated.parallel([
				Animated.timing(fadeIn, {
					toValue: 1,
					duration: 300,
					useNativeDriver: true,
				}),
				Animated.timing(moveFromRight, {
					toValue: 1,
					duration: 600,
					useNativeDriver: true,
				}),
			]).start()
		} else {
			Animated.parallel([
				Animated.timing(fadeIn, {
					toValue: 0,
					duration: 100,
					useNativeDriver: true,
				}),
				Animated.timing(moveFromRight, {
					toValue: getDimensions().width * 2,
					duration: 800,
					useNativeDriver: true,
				}),
			]).start()
		}
	}, [fadeIn, moveFromRight, show])

	return (
		<Animated.View
			style={{
				position: 'absolute',
				height: getDimensions().height,
				width: getDimensions().width,
				zIndex: 2,
				alignSelf: 'stretch',
				transform: [{ translateX: moveFromRight }],
				opacity: fadeIn,
				backgroundColor: 'rgba(255,255,255,0.5)',
			}}
		>
			{children}
		</Animated.View>
	)
}

export default CartAnimation
