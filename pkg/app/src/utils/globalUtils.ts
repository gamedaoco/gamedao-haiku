type reformatNumberFuncType = (n: number, d?: number) => string | number
export const reformatNumber: reformatNumberFuncType = (n, d = 1) => {
	let x = ('' + n).length
	let p = Math.pow
	d = p(10, d)
	x -= x % 3
	return n >= 1000 ? Math.round((n * d) / p(10, x)) / d + ' kMGTPE'[x / 3] : n
}
