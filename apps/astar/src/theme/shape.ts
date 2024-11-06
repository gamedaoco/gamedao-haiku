// ----------------------------------------------------------------------

declare module '@mui/system' {
	interface Shape {
		borderRadiusSm: number | string
		borderRadiusMd: number | string
		borderRadiusLg: number | string
		borderRadiusXl: number | string
	}
}

const shape = {
	borderRadius: 0,
	borderRadiusSm: '2px',
	borderRadiusMd: '2px',
	borderRadiusLg: '2px',
	borderRadiusXl: '1rem',
}

export default shape
