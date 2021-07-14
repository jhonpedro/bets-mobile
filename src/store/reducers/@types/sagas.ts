export interface CallbackBasedSagaAction<T = any> {
	callbackSuccess?: () => void
	callbackError?: (error: T) => void
	callbackFinally?: () => void
}
