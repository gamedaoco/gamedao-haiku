// ----------------------------------------------------------------------

declare module '@mui/material/styles' {
	interface TypographyVariants {
		small: React.CSSProperties
		btn: React.CSSProperties
		shield: React.CSSProperties
		poster: React.CSSProperties
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		small?: React.CSSProperties
		btn?: React.CSSProperties
		shield?: React.CSSProperties
		poster?: React.CSSProperties
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		small: true
		btn: true
		shield: true
		poster: true
	}
}

// ----------------------------------------------------------------------

function pxToRem(value: number) {
	return `${value / 16}rem`
}

function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
	return {
		'@media (min-width:600px)': {
			fontSize: pxToRem(sm),
		},
		'@media (min-width:900px)': {
			fontSize: pxToRem(md),
		},
		'@media (min-width:1200px)': {
			fontSize: pxToRem(lg),
		},
	}
}

const FONT_HEADER = 'fatfrank, Helvetica Neue, Helvetica, sans-serif'
const FONT_PRIMARY = 'Inter, Helvetica Neue, Helvetica, sans-serif'
const FONT_UI = 'Inter, sans-serif'
const FONT_SECONDARY = 'Times New Roman, serif'
// const FONT_SECONDARY = 'Times New Roman, serif'; // Local Font

const FONT_LIGHT = 200
const FONT_REGULAR = 400
const FONT_MEDIUM = 600
const FONT_BOLD = 800

const typography = {
	fontFamily: FONT_PRIMARY,
	fontWeightRegular: FONT_REGULAR,
	fontWeightMedium: FONT_MEDIUM,
	fontWeightBold: FONT_BOLD,
	h1: {
		fontFamily: FONT_HEADER,
		fontWeight: FONT_BOLD,
		lineHeight: 80 / 64,
		fontSize: pxToRem(40),
		letterSpacing: 2,
		...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
	},
	h2: {
		fontFamily: FONT_HEADER,
		fontWeight: FONT_BOLD,
		lineHeight: 64 / 48,
		fontSize: pxToRem(32),
		...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
	},
	h3: {
		fontFamily: FONT_HEADER,
		fontWeight: FONT_BOLD,
		lineHeight: 1.5,
		fontSize: pxToRem(24),
		...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
	},
	h4: {
		fontFamily: FONT_HEADER,
		fontWeight: FONT_BOLD,
		lineHeight: 1.5,
		fontSize: pxToRem(20),
		...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
	},
	h5: {
		fontFamily: FONT_PRIMARY,
		fontWeight: FONT_BOLD,
		lineHeight: 1.5,
		fontSize: pxToRem(18),
		...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
		marginBottom: '1rem',
	},
	h6: {
		fontFamily: FONT_PRIMARY,
		fontWeight: FONT_BOLD,
		lineHeight: 28 / 18,
		fontSize: pxToRem(17),
		...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
	},
	subtitle1: {
		fontWeight: FONT_REGULAR,
		lineHeight: 1.5,
		fontSize: pxToRem(16),
	},
	subtitle2: {
		fontWeight: FONT_REGULAR,
		lineHeight: 22 / 14,
		fontSize: pxToRem(14),
	},
	body1: {
		lineHeight: 1.5,
		fontSize: pxToRem(16),
	},
	body2: {
		lineHeight: 22 / 14,
		fontSize: pxToRem(14),
	},
	small: {
		lineHeight: 22 / 14,
		fontSize: pxToRem(8),
	},
	caption: {
		lineHeight: 1.5,
		fontSize: pxToRem(12),
		marginBottom: '1rem',
	},
	overline: {
		fontWeight: FONT_BOLD,
		lineHeight: 1.5,
		fontSize: pxToRem(12),
		textTransform: 'uppercase',
	},
	btn: {
		fontFamily: FONT_UI,
		fontWeight: FONT_REGULAR,
		lineHeight: 24 / 14,
		fontSize: pxToRem(14),
		textTransform: 'capitalize',
	},
	micro: {
		fontFamily: FONT_UI,
		fontWeight: FONT_REGULAR,
		lineHeight: 24 / 14,
		fontSize: pxToRem(10),
		textTransform: 'capitalize',
	},
	shield: {
		fontFamily: FONT_HEADER,
		fontWeight: FONT_BOLD,
		lineHeight: 1.5,
		fontSize: pxToRem(20),
		...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
	},
	poster: {
		fontFamily: FONT_UI,
		fontWeight: FONT_BOLD,
		lineHeight: 1.1,
		fontSize: 250,
		letterSpacing: -2,
		// ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
	},
} as const

export default typography
