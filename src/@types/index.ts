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

export interface BetI {
	id: number
	type: string
	color: string
	price: number
	created_at: Date
	numbers: number[]
}

export type BetsI = Array<BetI>

export type PossibleIconsName = 'ios-home-outline' | 'user'

export type PossibleIcons = {
	[keys: string]: PossibleIconsName
}

export interface User {
	name: string
	email: string
}
