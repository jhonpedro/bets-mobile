const formatToReal = (numberToFormat: number): string => {
	const numberToFormatString = numberToFormat.toString()

	return numberToFormatString.replace(
		/(\d+)(?:.(\d{1,2}))?/,
		(_, n1: string, n2: string) =>
			`${n1}${
				!n2
					? ',00'
					: `,${n2.length === 1 ? `${n2}0` : `${n2.toString().slice(0, 1)}`}`
			}`
	)
}

export default formatToReal
