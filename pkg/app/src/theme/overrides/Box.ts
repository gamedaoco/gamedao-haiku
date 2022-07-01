import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Box(theme: Theme) {
	return {
		MuiBox: {
			styleOverrides: {
				root: {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				},
			},
		},
	}
}
