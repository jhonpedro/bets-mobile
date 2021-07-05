import React from 'react'

import { ErrorMessage as ErrorMessageText } from './styles'

interface ErrorMessageProps {
	text: string
	show: boolean
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ text, show }) =>
	show ? <ErrorMessageText>{text}</ErrorMessageText> : null

export default ErrorMessage
