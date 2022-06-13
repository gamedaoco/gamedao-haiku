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
				body1: {
					color: theme.palette.primary.contrastText,
				},
				body2: {
					color: theme.palette.grey[500],
				},
				caption: {
					color: theme.palette.grey[500],
				},
			},
		},
	}
}
