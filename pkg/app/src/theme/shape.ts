// ----------------------------------------------------------------------

declare module '@mui/system' {
	interface Shape {
		borderRadiusSm: number | string
		borderRadiusMd: number | string
	}
}

const shape = {
	borderRadius: 0,
	borderRadiusSm: 1,
	borderRadiusMd: 2,
}

export default shape
