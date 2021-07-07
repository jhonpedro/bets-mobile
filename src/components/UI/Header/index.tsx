import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import colors from '../../../assets/colors'
import useAppDispatch from '../../../hooks/useAppDispatch'

import { HeaderContainer, BrandContainer, TGL, Line } from './styles'
import { actionLogOut } from '../../../store/reducers/auth/actions'

const Header = () => {
	const dispatch = useAppDispatch()

	const handleLogout = () => dispatch(actionLogOut())

	return (
		<HeaderContainer>
			<BrandContainer>
				<TGL>TGL</TGL>
				<Line />
			</BrandContainer>
			<TouchableOpacity onPress={handleLogout}>
				<Feather name="log-out" size={30} color={colors.ICONS_DARK_LIGHT} />
			</TouchableOpacity>
		</HeaderContainer>
	)
}

export default Header
