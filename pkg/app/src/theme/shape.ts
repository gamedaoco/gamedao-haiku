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
	borderRadiusSm: '1px',
	borderRadiusMd: '1px',
	borderRadiusLg: '1px',
	borderRadiusXl: '1rem',
}

export default shape
