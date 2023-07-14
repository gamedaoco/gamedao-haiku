import { PRIMARY_COLOR } from '../palette'
import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Container(theme: Theme) {
	return {
		MuiContainer: {
			styleOverrides: {
				root: {
					borderRadius: theme.shape.borderRadiusLg,
				},
			},
		},
	}
}
