// ----------------------------------------------------------------------

declare module '@mui/system' {
	interface Shape {
		borderRadiusSm: number | string
		borderRadiusMd: number | string
		borderRadiusLg: number | string
	}
}

const shape = {
	borderRadius: 0,
	borderRadiusSm: '0.5rem',
	borderRadiusMd: '1rem',
	borderRadiusLg: '2rem',
}

export default shape
