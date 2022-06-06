type reformatNumberFuncType = (n: number, d?: number) => string
export const reformatNumber: reformatNumberFuncType = (n, d = 1) => {
	let x = ('' + n).length
	let p = Math.pow
	d = p(10, d)
	x -= x % 3
	return Math.round((n * d) / p(10, x)) / d + ' kMGTPE'[x / 3]
}
