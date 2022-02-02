import { alpha } from '@mui/material/styles'

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
	return `linear-gradient(to bottom, ${color1}, ${color2})`
}

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
	lighter: '#C8FACD',
	light: '#5BE584',
	main: '#00AB55',
	dark: '#007B55',
	darker: '#005249',
}
const SECONDARY = {
	lighter: '#D6E4FF',
	light: '#84A9FF',
	main: '#3366FF',
	dark: '#1939B7',
	darker: '#091A7A',
}
const INFO = {
	lighter: '#D0F2FF',
	light: '#74CAFF',
	main: '#1890FF',
	dark: '#0C53B7',
	darker: '#04297A',
}
const SUCCESS = {
	lighter: '#E9FCD4',
	light: '#AAF27F',
	main: '#54D62C',
	dark: '#229A16',
	darker: '#08660D',
}
const WARNING = {
	lighter: '#FFF7CD',
	light: '#FFE16A',
	main: '#FFC107',
	dark: '#B78103',
	darker: '#7A4F01',
}
const ERROR = {
	lighter: '#FFE7D9',
	light: '#FFA48D',
	main: '#FF4842',
	dark: '#B72136',
	darker: '#7A0C2E',
}

const GREY = {
	0: '#fcfcfc',
	100: '#f2f0ef',
	200: '#c2c0bf',
	300: '#b2b0af',
	400: '#a2a09f',
	500: '#82807f',
	600: '#62605f',
	700: '#42403f',
	800: '#22201f',
	900: '#12100f',

	500_8: alpha('#82807f', 0.08),
	500_12: alpha('#82807f', 0.12),
	500_16: alpha('#82807f', 0.16),
	500_24: alpha('#82807f', 0.24),
	500_32: alpha('#82807f', 0.32),
	500_48: alpha('#82807f', 0.48),
	500_56: alpha('#82807f', 0.56),
	500_80: alpha('#82807f', 0.8),
}

const GRADIENTS = {
	primary: createGradient(PRIMARY.light, PRIMARY.main),
	info: createGradient(INFO.light, INFO.main),
	success: createGradient(SUCCESS.light, SUCCESS.main),
	warning: createGradient(WARNING.light, WARNING.main),
	error: createGradient(ERROR.light, ERROR.main),
}

const CHART_COLORS = {
	violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
	blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
	green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
	yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
	red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
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
		text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
		background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
		action: { active: GREY[600], ...COMMON.action },
	},
	dark: {
		...COMMON,
		text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
		background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
		action: { active: GREY[500], ...COMMON.action },
	},
}

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
