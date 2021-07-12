import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ButtonOutline from '../ButtonOutline'
import { ActionButtonsContainer } from './styles'

interface ActionButtonsProps {
	onComplete: () => void
	onClear: () => void
	onAddToCart: () => void
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
	onComplete,
	onClear,
	onAddToCart,
}) => (
	<ActionButtonsContainer>
		<ButtonOutline title="Complete game" onPress={onComplete} />
		<ButtonOutline title="Clear game" onPress={onClear} />
		<ButtonOutline
			title="Add to cart"
			icon={<MaterialCommunityIcons name="cart-minus" size={20} color="#FFF" />}
			onPress={onAddToCart}
			withBackground
		/>
	</ActionButtonsContainer>
)

export default ActionButtons
