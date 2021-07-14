import React, { useRef, useEffect } from 'react'
import { Animated } from 'react-native'
import colors from '../../../assets/colors'
import modalSelector from '../../../store/selectors/modalSelector'
import getDimensions from '../../../utils/getDimensions'

const ModalAnimation: React.FC = ({ children }) => {
	const { showing } = modalSelector()
	const fadeIn = useRef(new Animated.Value(0)).current
	const backdropWithdraw = useRef(
		new Animated.Value(getDimensions(150).width * -1)
	).current

	useEffect(() => {
		if (showing) {
			Animated.parallel([
				Animated.timing(fadeIn, {
					toValue: 1,
					duration: 1000,
					useNativeDriver: true,
				}),
				Animated.timing(backdropWithdraw, {
					toValue: 0,
					duration: 500,
					useNativeDriver: true,
				}),
			]).start()
		} else {
			Animated.timing(backdropWithdraw, {
				toValue: getDimensions(150).width * -1,
				duration: 200,
				useNativeDriver: true,
			}).start()
		}
	}, [fadeIn, backdropWithdraw, showing])

	return (
		<Animated.View
			style={{
				position: 'absolute',
				width: getDimensions().width,
				height: getDimensions(110).height,
				top: 0,
				left: 0,
				backgroundColor: 'rgba(255,255,255,0.8)',
				opacity: fadeIn,
				justifyContent: 'center',
				alignItems: 'center',
				transform: [{ translateX: backdropWithdraw }],
				zIndex: 3,
			}}
		>
			<Animated.View
				style={{
					width: getDimensions(80).width,
					height: getDimensions(25).height,
					backgroundColor: colors.BG_LIGHT,
					borderWidth: 2,
					borderColor: colors.TGL_GREEN,
					borderRadius: 20,
					padding: 10,
					zIndex: 4,
				}}
			>
				{children}
			</Animated.View>
		</Animated.View>
	)
}

export default ModalAnimation
