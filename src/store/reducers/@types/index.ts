import { REHYDRATE } from 'redux-persist/es/constants'
import { RootState } from '../..'

export type RehydrateAction = {
	type: typeof REHYDRATE
	payload: RootState | undefined
}
