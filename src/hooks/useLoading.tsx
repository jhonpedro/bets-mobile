import React, { createContext, useState, useContext } from 'react'

interface LoadingContextI {
	show: boolean
	handleShow: () => void
}

const LoadingContext = createContext({} as LoadingContextI)

const LoadingProvider: React.FC = ({ children }) => {
	const [show, setShow] = useState(false)

	const handleShow = () => {
		setShow((prevState) => !prevState)
	}

	return (
		<LoadingContext.Provider
			value={{
				show,
				handleShow,
			}}
		>
			{children}
		</LoadingContext.Provider>
	)
}

const useLoading = () => {
	const ctx = useContext(LoadingContext)

	return ctx
}

export { LoadingProvider }
export default useLoading
