// ----------------------------------------------------------------------

declare module '@mui/system' {
	interface Shape {
		borderRadiusSm: number | string
		borderRadiusMd: number | string
		borderRadiusLg: number | string
	}
}

const shape = {
	borderRadius: 1,
	borderRadiusSm: '1px',
	borderRadiusMd: '2px',
	borderRadiusLg: '3px',
}

export default shape
