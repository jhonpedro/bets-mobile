import React, { useRef, useEffect } from 'react'
import { Animated } from 'react-native'
import colors from '../../assets/colors'

import getDimensions from '../../utils/getDimensions'
import {
	LoginAnimationBox,
	LoginAnimationText,
	LoginAnimationTextSmallGreen,
} from './styles'

const LoginAnimation = () => {
	const goUp = useRef(new Animated.Value(getDimensions().height * 1.5)).current
	const backdrop = useRef(new Animated.Value(0)).current
	const hideBackdrop = useRef(new Animated.Value(0)).current

	useEffect(() => {
		Animated.parallel([
			Animated.timing(goUp, {
				toValue: getDimensions(1).height,
				duration: 1000,
				useNativeDriver: true,
			}),
			Animated.timing(backdrop, {
				toValue: 1,
				duration: 400,
				useNativeDriver: true,
			}),
		]).start(() => {
			setTimeout(() => {
				Animated.timing(goUp, {
					toValue: getDimensions().height * -1.5,
					duration: 1500,
					useNativeDriver: true,
				}).start(() => {
					Animated.timing(backdrop, {
						toValue: 0,
						duration: 1000,
						useNativeDriver: true,
					}).start(() => {
						Animated.timing(hideBackdrop, {
							toValue: getDimensions().width * -1.5,
							duration: 1,
							useNativeDriver: true,
						}).start()
					})
				})
			}, 2000)
		})
	}, [goUp, backdrop])

	return (
		<Animated.View
			style={{
				flex: 1,
				top: 0,
				left: 0,
				position: 'absolute',
				height: getDimensions(110).height,
				width: getDimensions(100).width,
				backgroundColor: 'rgba(255,255,255,0.5)',
				opacity: backdrop,
				transform: [
					{
						translateY: hideBackdrop,
					},
				],
				alignItems: 'center',
				justifyContent: 'center',
				zIndex: 2,
			}}
		>
			<Animated.View
				style={{
					width: getDimensions(95).width,
					height: getDimensions(95).width,
					borderColor: colors.TGL_GREEN,
					borderWidth: 2,
					borderRadius: 400,
					overflow: 'hidden',
					transform: [{ translateY: goUp }],
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
		</Animated.View>
	)
}

export default LoginAnimation
