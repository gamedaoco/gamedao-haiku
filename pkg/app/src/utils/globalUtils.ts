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
	{ value: 1e6, symbol: 'M' },
	{ value: 1e9, symbol: 'G' },
	{ value: 1e12, symbol: 'T' },
	{ value: 1e15, symbol: 'P' },
	{ value: 1e18, symbol: 'E' },
]

type abbreviateNumberType = (n: number) => string | number

export const abbreviateNumber: abbreviateNumberType = (number) => {
	if (number === 0) return number

	const tier = SI_PREFIXES.filter((n) => number >= n.value).pop()
	const numberFixed = (number / tier?.value).toFixed(1)

	return `${parseInt(numberFixed)}${tier?.symbol}`
}
