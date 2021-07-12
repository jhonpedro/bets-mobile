import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons'

import {
	actionHideCart,
	actionRemoveFromCart,
} from '../../../store/reducers/cart/actions'
import useAppDispatch from '../../../hooks/useAppDispatch'
import CartAnimation from '../Animation'
import {
	CartContainer,
	CartContent,
	CartTitle,
	CloseCartIconContainer,
	GameCartContainer,
} from './styles'
import colors from '../../../assets/colors'
import cartSelector from '../../../store/selectors/cartSelector'
import Game from '../../Game/Component'

const Cart = () => {
	const dispatch = useAppDispatch()
	const { items } = cartSelector()

	const handleHideCart = () => dispatch(actionHideCart())

	const handleRemoveFromCart = (cartItemIndex: number) => {
		dispatch(actionRemoveFromCart(cartItemIndex))
	}

	return (
		<CartAnimation>
			<CartContainer>
				<CloseCartIconContainer>
					<TouchableOpacity onPress={handleHideCart}>
						<Ionicons name="close-sharp" size={30} color={colors.TGL_GREEN} />
					</TouchableOpacity>
				</CloseCartIconContainer>
				<CartContent>
					<CartTitle>
						<MaterialCommunityIcons
							name="cart-minus"
							size={35}
							color={colors.TGL_GREEN}
						/>
						Cart
					</CartTitle>
					{items.map((item, index) => (
						<GameCartContainer key={item.id}>
							<Game
								id={item.id}
								color={item.color}
								price={item.price}
								created_at={item.created_at}
								type={item.type}
								numbers={item.numbers}
								removable={{
									index,
									icon: (
										<Feather
											name="trash-2"
											size={14}
											color={colors.FONT_DARK}
										/>
									),
									onPress: handleRemoveFromCart,
								}}
							/>
						</GameCartContainer>
					))}
				</CartContent>
			</CartContainer>
		</CartAnimation>
	)
}

export default Cart
