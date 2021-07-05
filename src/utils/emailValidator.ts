function emailValidator(email: string): boolean {
	const emailLowerCase = email.toLowerCase()

	const matchArr = emailLowerCase.match(
		/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/
	)

	if (!matchArr) {
		return false
	}

	if (matchArr[0].length === email.length) {
		return true
	}

	return false
}

export default emailValidator
