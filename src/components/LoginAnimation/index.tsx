import React, { useRef, useEffect } from 'react'
import { Animated } from 'react-native'

import getDimensions from '../../utils/getDimensions'
import {
	LoginAnimationBox,
	LoginAnimationText,
	LoginAnimationTextSmallGreen,
} from './styles'

const LoginAnimation = () => {
	const goUp = useRef(new Animated.Value(getDimensions().height * 1.5)).current

	useEffect(() => {
		Animated.timing(goUp, {
			toValue: getDimensions(1).height,
			duration: 1000,
			useNativeDriver: true,
		}).start(() => {
			setTimeout(() => {
				Animated.timing(goUp, {
					toValue: getDimensions().height * -1.5,
					duration: 1500,
					useNativeDriver: true,
				}).start()
			}, 2000)
		})
	}, [goUp])

	return (
		<Animated.View
			style={{
				flex: 1,
				position: 'absolute',
				width: getDimensions().width,
				transform: [{ translateY: goUp }],
				zIndex: 2,
			}}
		>
			<LoginAnimationBox>
				<LoginAnimationText>The</LoginAnimationText>
				<LoginAnimationText>Greatest</LoginAnimationText>
				<LoginAnimationText>App</LoginAnimationText>
				<LoginAnimationTextSmallGreen>for</LoginAnimationTextSmallGreen>
				<LoginAnimationText size={3.5}>LOTTERY</LoginAnimationText>
			</LoginAnimationBox>
		</Animated.View>
	)
}

export default LoginAnimation
