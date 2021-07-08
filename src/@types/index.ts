export type AuthStackList = {
	Login: undefined
	ForgotPassword: undefined
	SingUp: undefined
}

export type AppTabList = {
	Home: undefined
}

export type GameI = {
	id: number
	type: string
	description: string
	range: number
	price: number
	max_number: number
	color: string
	min_cart_value: number
}

export type GamesI = Array<GameI>
