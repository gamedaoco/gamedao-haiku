type reformatNumberFuncType = (n: number, d?: number) => string | number
export const reformatNumber: reformatNumberFuncType = (n, d = 1) => {
	let x = ('' + n).length
	let p = Math.pow
	d = p(10, d)
	x -= x % 3
	return n >= 1000 ? Math.round((n * d) / p(10, x)) / d + ' kMBtqQ'[x / 3] : n
}

const SI_PREFIXES = [
	{ value: 1, symbol: '' },
	{ value: 1e3, symbol: 'k' },
	{ value: 1e6, symbol: 'm' },
	{ value: 1e9, symbol: 'b' },
	{ value: 1e12, symbol: 't' },
	{ value: 1e15, symbol: 'q' },
	{ value: 1e18, symbol: 'Q' },
]

type abbreviateNumberType = (n: number) => string | number

export const abbreviateNumber: abbreviateNumberType = (number) => {
	if (number <= 999) return number

	const tier = SI_PREFIXES.filter((n) => number >= n.value).pop()

	const numberFixed = parseFloat((number / tier?.value).toFixed(1).toString())
	const final = numberFixed.toString().replace('.', ',')

	return `${final}${tier?.symbol}`
}
