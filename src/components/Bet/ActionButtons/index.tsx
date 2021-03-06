import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ButtonOutline from '../ButtonOutline'
import { ActionButtonsContainer } from './styles'
import getDimensions from '../../../utils/getDimensions'

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
		<ButtonOutline
			title="Complete game"
			onPress={onComplete}
			titleSize={getDimensions(0.9).rem}
		/>
		<ButtonOutline
			title="Clear game"
			onPress={onClear}
			titleSize={getDimensions(0.9).rem}
		/>
		<ButtonOutline
			title="Add to cart"
			icon={
				<MaterialCommunityIcons
					name="cart-minus"
					size={20}
					color="#FFF"
					titleSize={getDimensions(0.9).rem}
				/>
			}
			onPress={onAddToCart}
			withBackground
		/>
	</ActionButtonsContainer>
)

export default ActionButtons
