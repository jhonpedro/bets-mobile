import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../../assets/colors'
import useAppDispatch from '../../../hooks/useAppDispatch'

import {
	HeaderContainer,
	BrandContainer,
	TGL,
	Line,
	ActionsContainer,
	CartTouchableOpacity,
} from './styles'
import { actionLogOut } from '../../../store/reducers/auth/actions'
import { actionShowCart } from '../../../store/reducers/cart/actions'

interface HeaderProps {
	showCart?: boolean
}

const Header: React.FC<HeaderProps> = ({ showCart }) => {
	const dispatch = useAppDispatch()

	const handleLogout = () => dispatch(actionLogOut())

	const handleShowCart = () => dispatch(actionShowCart())

	return (
		<HeaderContainer>
			<BrandContainer>
				<TGL>TGL</TGL>
				<Line />
			</BrandContainer>
			<ActionsContainer>
				{showCart && (
					<CartTouchableOpacity onPress={handleShowCart}>
						<MaterialCommunityIcons
							name="cart-minus"
							size={30}
							color={colors.ICONS_DARK_LIGHT}
						/>
					</CartTouchableOpacity>
				)}
				<TouchableOpacity onPress={handleLogout}>
					<Feather name="log-out" size={30} color={colors.ICONS_DARK_LIGHT} />
				</TouchableOpacity>
			</ActionsContainer>
		</HeaderContainer>
	)
}

export default Header
