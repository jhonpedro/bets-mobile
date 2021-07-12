const fulfillArrayRandomNumbers = (
	arr: number[],
	toLength: number,
	from: number,
	to: number
) => {
	const newArray = [...arr]

	while (newArray.length !== toLength) {
		const randomInt = Math.floor(Math.random() * to + from)

		if (!newArray.includes(randomInt)) {
			newArray.push(randomInt)
		}
	}

	return newArray
}

export default fulfillArrayRandomNumbers
