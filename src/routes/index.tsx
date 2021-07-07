import React from 'react'
import AuthRoutes from './AuthRoutes'
import AppRoutes from './AppRoutes'
import authSelector from '../store/selectors/authSelector'

const Routes: React.FC = () => {
	const { isLoggedIn } = authSelector()

	return isLoggedIn ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
