import React from 'react'
import { Alert, TouchableOpacity } from 'react-native'
import {
	Ionicons,
	MaterialCommunityIcons,
	Feather,
	AntDesign,
} from '@expo/vector-icons'

import {
	actionClearCart,
	actionHideCart,
	actionRemoveFromCart,
} from '../../../store/reducers/cart/actions'
import useAppDispatch from '../../../hooks/useAppDispatch'
import CartAnimation from '../Animation'
import {
	CartContainer,
	CartContent,
	CartFooter,
	CartTitle,
	CartTotal,
	CartTotalContainer,
	CloseCartIconContainer,
	GameCartContainer,
	GamesScrollView,
	SaveButtonContainer,
	TextStrong,
} from './styles'
import colors from '../../../assets/colors'
import cartSelector from '../../../store/selectors/cartSelector'
import Game from '../../Game/Component'
import TextWithSVG from '../../TextWithSVG'
import getDimensions from '../../../utils/getDimensions'
import adonis from '../../../services/adonis'

const Cart = () => {
	const dispatch = useAppDispatch()
	const { items } = cartSelector()

	const handleHideCart = () => dispatch(actionHideCart())

	const handleRemoveFromCart = (cartItemIndex: number) => {
		dispatch(actionRemoveFromCart(cartItemIndex))
	}

	const handleSubmitNewPurchase = () => {
		if (items.length === 0) {
			return
		}
		try {
			adonis.post('/purchases', {
				bets: items.map((item) => ({
					type: item.type,
					game_id: item.game_id,
					numbers: item.numbers,
				})),
			})

			dispatch(actionClearCart())

			Alert.alert(
				'Success',
				'Your bets were registered, you can see them in the home page now!'
			)
		} catch {
			Alert.alert('Error', 'There were an error in your bets, try again later!')
		}
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
					<GamesScrollView>
						{items.length === 0 && <TextStrong>Cart is empty!</TextStrong>}
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
					</GamesScrollView>
				</CartContent>
				<CartFooter>
					<CartTotalContainer>
						<CartTotal>
							<TextStrong>Cart </TextStrong>
							Total:
						</CartTotal>
						<TextStrong>00.00</TextStrong>
					</CartTotalContainer>
					<SaveButtonContainer onPress={handleSubmitNewPurchase}>
						<TextWithSVG
							text="Save"
							fontSize={getDimensions(2).rem}
							textColor={colors.TGL_GREEN}
							svg={
								<AntDesign
									name="arrowright"
									size={24}
									color={colors.TGL_GREEN}
								/>
							}
						/>
					</SaveButtonContainer>
				</CartFooter>
			</CartContainer>
		</CartAnimation>
	)
}

export default Cart
