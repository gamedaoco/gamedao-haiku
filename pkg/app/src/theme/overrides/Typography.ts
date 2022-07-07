import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Typography(theme: Theme) {
	return {
		MuiTypography: {
			styleOverrides: {
				paragraph: {
					marginBottom: theme.spacing(2),
				},
				gutterBottom: {
					marginBottom: theme.spacing(1),
				},
				subtitle2: {
					color: theme.palette.text.secondary,
				},
				body1: {
					color: theme.palette.primary.contrastText,
				},
				body2: {
					color: theme.palette.grey[500],
				},
				caption: {
					color: theme.palette.grey[500],
				},
				overline: {
					color: theme.palette.text.disabled,
				},
			},
		},
	}
}
