// ----------------------------------------------------------------------

declare module '@mui/material/styles' {
	interface TypographyVariants {
		small: React.CSSProperties
		btn: React.CSSProperties
		shield: React.CSSProperties
		poster: React.CSSProperties
		cardHeader: React.CSSProperties
		cardBody: React.CSSProperties
		cardMicro: React.CSSProperties
		micro: React.CSSProperties
		header1: React.CSSProperties
		header2: React.CSSProperties
		hero1: React.CSSProperties
		hero2: React.CSSProperties
		time: React.CSSProperties
		button: React.CSSProperties
		pass1: React.CSSProperties
		teaserTitle: React.CSSProperties
		teaserText: React.CSSProperties
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		small?: React.CSSProperties
		btn?: React.CSSProperties
		shield?: React.CSSProperties
		poster?: React.CSSProperties
		cardHeader?: React.CSSProperties
		cardBody?: React.CSSProperties
		cardMicro?: React.CSSProperties
		micro?: React.CSSProperties
		header1?: React.CSSProperties
		header2?: React.CSSProperties
		hero1?: React.CSSProperties
		hero2?: React.CSSProperties
		time: React.CSSProperties
		button: React.CSSProperties
		pass1: React.CSSProperties
		teaserTitle: React.CSSProperties
		teaserText: React.CSSProperties
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		small: true
		btn: true
		shield: true
		poster: true
		cardHeader: true
		cardBody: true
		cardMicro: true
		micro: true
		header1: true
		header2: true
		hero1: true
		hero2: true
		button: true
		pass1: true
		teaserTitle: true
		teaserText: true
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

const FONT_LIGHT = 200
const FONT_REGULAR = 400
const FONT_MEDIUM = 600
const FONT_BOLD = 900

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
		fontFamily: FONT_PRIMARY,
		fontWeight: FONT_MEDIUM,
		lineHeight: 1.5,
		fontSize: pxToRem(24),
		...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
	},
	h4: {
		fontFamily: FONT_PRIMARY,
		fontWeight: FONT_MEDIUM,
		lineHeight: 1.5,
		fontSize: pxToRem(20),
		...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
	},
	h5: {
		fontFamily: FONT_PRIMARY,
		fontWeight: FONT_MEDIUM,
		lineHeight: 1.5,
		fontSize: pxToRem(18),
		...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
		marginBottom: '1rem',
	},
	h6: {
		fontFamily: FONT_PRIMARY,
		fontWeight: FONT_MEDIUM,
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
	cardHeader: {
		fontFamily: FONT_PRIMARY,
		fontWeight: FONT_BOLD,
		fontSize: pxToRem(16),
		lineHeight: 1.5,
		display: 'block',
	},
	cardBody: {
		fontFamily: FONT_PRIMARY,
		fontWeight: FONT_REGULAR,
		lineHeight: 1.8,
		fontSize: pxToRem(12),
	},
	cardMicro: {
		fontFamily: FONT_PRIMARY,
		fontWeight: FONT_REGULAR,
		lineHeight: 1,
		fontSize: pxToRem(12),
		display: 'block',
	},
	header1: {
		fontFamily: FONT_HEADER,
		fontWeight: FONT_BOLD,
		lineHeight: 64 / 48,
		fontSize: pxToRem(20),
		...responsiveFontSizes({ sm: 16, md: 20, lg: 24 }),
	},
	header2: {
		fontFamily: FONT_PRIMARY,
		fontWeight: FONT_MEDIUM,
		lineHeight: 64 / 48,
		fontSize: pxToRem(16),
		...responsiveFontSizes({ sm: 10, md: 14, lg: 18 }),
	},
	button: {
		fontFamily: FONT_UI,
		fontWeight: 400,
		lineHeight: 24 / 14,
		fontSize: pxToRem(14),
		textTransform: 'uppercase',
	},
	time: {
		fontFamily: FONT_HEADER,
	},
	hero1: {
		fontFamily: FONT_HEADER,
		fontWeight: 900,
		lineHeight: 80 / 64,
		fontSize: pxToRem(28),
		...responsiveFontSizes({ sm: 24, md: 28, lg: 32 }),
		float: 'left',
		textShadow: '0 10px 10px rgba(0,0,0,1)',
		// WebkitTextStrokeWidth: '1px',
		// WebkitTextStrokeColor: 'rgba(0,0,0,0.2)',
	},
	hero2: {
		fontFamily: FONT_PRIMARY,
		fontWeight: 400,
		lineHeight: 80 / 64,
		fontSize: pxToRem(16),
		...responsiveFontSizes({ sm: 20, md: 24, lg: 32 }),
		float: 'left',
		textShadow: '0 10px 10px rgba(0,0,0,1)',
		// WebkitTextStrokeWidth: '1px',
		// WebkitTextStrokeColor: 'rgba(0,0,0,0.2)',
	},
	pass1: {
		fontFamily: FONT_HEADER,
		fontWeight: 900,
		lineHeight: 80 / 64,
		fontSize: pxToRem(14),
		...responsiveFontSizes({ sm: 12, md: 14, lg: 16 }),
		float: 'left',
		textShadow: 'rgba(0,0,0,1) 0 5px 20px',
		// WebkitTextStrokeWidth: '1px',
		// WebkitTextStrokeColor: 'rgba(0,0,0,0.2)',
	},
	teaserTitle: {
		fontFamily: FONT_HEADER,
		fontWeight: 900,
		lineHeight: 80 / 64,
		fontSize: pxToRem(18),
		...responsiveFontSizes({ sm: 18, md: 20, lg: 22 }),
		float: 'left',
		// textShadow: 'rgba(0,0,0,1) 0 5px 20px',
	},
	teaserText: {
		fontFamily: FONT_PRIMARY,
		fontWeight: 400,
		lineHeight: 80 / 64,
		fontSize: pxToRem(14),
		...responsiveFontSizes({ sm: 14, md: 16, lg: 18 }),
		float: 'left',
		// textShadow: 'rgba(0,0,0,1) 0 5px 20px',
	},
} as const

export default typography
