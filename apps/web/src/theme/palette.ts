import { alpha } from '@mui/material/styles'

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
	return `linear-gradient(to bottom, ${color1}, ${color2})`
}

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'

interface GradientsPaletteOptions {
	primary: string
	info: string
	success: string
	warning: string
	error: string
}

interface ChartPaletteOptions {
	violet: string[]
	blue: string[]
	green: string[]
	yellow: string[]
	red: string[]
}

declare module '@mui/material/styles/createPalette' {
	interface TypeBackground {
		neutral: string
	}

	interface SimplePaletteColorOptions {
		lighter: string
		darker: string
	}

	interface PaletteColor {
		lighter: string
		darker: string
	}

	interface Palette {
		gradients: GradientsPaletteOptions
		chart: ChartPaletteOptions
	}

	interface PaletteOptions {
		gradients: GradientsPaletteOptions
		chart: ChartPaletteOptions
	}
}

declare module '@mui/material' {
	interface Color {
		0: string
		500_8: string
		500_12: string
		500_16: string
		500_24: string
		500_32: string
		500_48: string
		500_56: string
		500_80: string
	}
}

// SETUP COLORS
const PRIMARY = {
	lighter: '#62F6E9',
	light: '#3BEDED',
	main: '#00D0E2',
	dark: '#00A2C2',
	darker: '#007BA2',
}
const SECONDARY = {
	lighter: '#EBEBEB',
	light: '#C1C1C1',
	main: '#999999',
	dark: '#686868',
	darker: '#424242',
}
const INFO = {
	lighter: '#D6E4FF',
	light: '#84A9FF',
	main: '#3366FF',
	dark: '#1939B7',
	darker: '#091A7A',
}
const SUCCESS = {
	lighter: '#D7F366',
	light: '#C2E740',
	main: '#A4D808',
	dark: '#88B905',
	darker: '#6D9B04',
}
const WARNING = {
	lighter: '#FECD65',
	light: '#FDB83F',
	main: '#FC9700',
	dark: '#D87900',
	darker: '#B55D00',
}
const ERROR = {
	lighter: '#FE8685',
	light: '#FD6774',
	main: '#FC3559',
	dark: '#D82657',
	darker: '#B51A53',
}

const GREY = {
	0: '#FCFCFC',
	100: '#F2F0EF',
	200: '#C2C0BF',
	300: '#B2B0AF',
	400: '#A2A09F',
	500: '#82807F',
	600: '#62605F',
	700: '#42403F',
	800: '#22201F',
	900: '#12100F',
	500_8: alpha('#82807F', 0.08),
	500_12: alpha('#82807F', 0.12),
	500_16: alpha('#82807F', 0.16),
	500_24: alpha('#82807F', 0.24),
	500_32: alpha('#82807F', 0.32),
	500_48: alpha('#82807F', 0.48),
	500_56: alpha('#82807F', 0.56),
	500_80: alpha('#82807F', 0.8),
}

const GRADIENTS = {
	primary: createGradient(PRIMARY.light, PRIMARY.main),
	info: createGradient(INFO.light, INFO.main),
	success: createGradient(SUCCESS.light, SUCCESS.main),
	warning: createGradient(WARNING.light, WARNING.main),
	error: createGradient(ERROR.light, ERROR.main),
}

const CHART_COLORS = {
	violet: ['#F7D2FF', '#D0AEFF', '#9E86FF', '#826AF9'],
	blue: ['#CCFAFF', '#A5F3FF', '#83CFFF', '#2D99FF'],
	green: ['#C0F2DC', '#A4F7CC', '#60F1C8', '#2CD9C5'],
	yellow: ['#FFF3D6', '#FFF7AE', '#FFEF5A', '#FFE700'],
	red: ['#FFF2D4', '#FFBD98', '#FF8F6D', '#FF6C40'],
}

const COMMON = {
	common: { black: '#000', white: '#fff' },
	primary: { ...PRIMARY, contrastText: '#fff' },
	secondary: { ...SECONDARY, contrastText: '#fff' },
	info: { ...INFO, contrastText: '#fff' },
	success: { ...SUCCESS, contrastText: GREY[800] },
	warning: { ...WARNING, contrastText: GREY[800] },
	error: { ...ERROR, contrastText: '#fff' },
	grey: GREY,
	gradients: GRADIENTS,
	chart: CHART_COLORS,
	divider: GREY[500_24],
	action: {
		hover: GREY[500_8],
		selected: GREY[500_16],
		disabled: GREY[500_80],
		disabledBackground: GREY[500_24],
		focus: GREY[500_24],
		hoverOpacity: 0.08,
		disabledOpacity: 0.48,
	},
}

const palette = {
	light: {
		...COMMON,
		mode: 'light',
		text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
		background: { paper: '#fff', default: '#fff', neutral: GREY[100] },
		action: { active: GREY[600], ...COMMON.action },
	},
	dark: {
		...COMMON,
		mode: 'dark',
		text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
		background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_12] },
		action: { active: GREY[500], ...COMMON.action },
	},
} as const

// TODO: 2075 merge PRIMARY_COLOR with this file
export const PRIMARY_COLOR = [
	// DEFAULT
	{
		name: 'default',
		...palette.light.primary,
	},
	// PURPLE
	{
		name: 'purple',
		lighter: '#EBD6FD',
		light: '#B985F4',
		main: '#7635dc',
		dark: '#431A9E',
		darker: '#200A69',
		contrastText: '#fff',
	},
	// CYAN
	{
		name: 'cyan',
		lighter: '#D1FFFC',
		light: '#76F2FF',
		main: '#1CCAFF',
		dark: '#0E77B7',
		darker: '#053D7A',
		contrastText: palette.light.grey[800],
	},
	// BLUE
	{
		name: 'blue',
		lighter: '#CCDFFF',
		light: '#6697FF',
		main: '#0045FF',
		dark: '#0027B7',
		darker: '#00137A',
		background: '#212B36',
		text: '#919EAB',
		contrastText: '#fff',
	},
	// ORANGE
	{
		name: 'orange',
		lighter: '#FEF4D4',
		light: '#FED680',
		main: '#fda92d',
		dark: '#B66816',
		darker: '#793908',
		contrastText: palette.light.grey[800],
	},
	// RED
	{
		name: 'red',
		lighter: '#FFE3D5',
		light: '#FFC1AC',
		main: '#FF3030',
		dark: '#B71833',
		darker: '#7A0930',
		contrastText: '#fff',
	},
]

export default palette
