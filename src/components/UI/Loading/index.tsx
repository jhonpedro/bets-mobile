import React, { useRef, useEffect } from 'react'
import { Animated, View, Easing } from 'react-native'
import colors from '../../../assets/colors'
import useLoading from '../../../hooks/useLoading'
import getDimensions from '../../../utils/getDimensions'

interface LoadingProps {
	instantShow?: boolean
}

const Loading: React.FC<LoadingProps> = ({ instantShow }) => {
	const { show } = useLoading()
	const fadeIn = useRef(new Animated.Value(0)).current
	const spin = useRef(new Animated.Value(0)).current

	useEffect(() => {
		if (show || instantShow) {
			Animated.parallel([
				Animated.timing(fadeIn, { toValue: 1, useNativeDriver: true }),
				Animated.loop(
					Animated.timing(spin, {
						toValue: 1,
						duration: 700,
						easing: Easing.linear,
						useNativeDriver: true,
					})
				),
			]).start()
		}
	}, [show, fadeIn, spin])

	const spinInterpolated = spin.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	})

	return show || instantShow ? (
		<Animated.View
			style={{
				position: 'absolute',
				height: getDimensions().height,
				width: getDimensions().width,
				backgroundColor: 'rgba(255,255,255,0.4)',
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				opacity: instantShow ? 1 : fadeIn,
			}}
		>
			<View
				style={{
					backgroundColor: colors.BG_LIGHT,
					width: getDimensions(20).width,
					height: getDimensions(20).width,
					borderRadius: 15,
					elevation: 2,
					flexDirection: 'row',
					paddingVertical: getDimensions(4).width,
					justifyContent: 'center',
				}}
			>
				<Animated.View
					style={{
						width: getDimensions(12).width,
						height: getDimensions(12).width,
						borderRadius: getDimensions(12).width,
						borderWidth: 2,
						borderColor: colors.TGL_GREEN,
						borderBottomColor: 'rgba(0,0,0,0.0)',
						transform: [{ rotate: spinInterpolated }],
					}}
				/>
			</View>
		</Animated.View>
	) : null
}

export default Loading
