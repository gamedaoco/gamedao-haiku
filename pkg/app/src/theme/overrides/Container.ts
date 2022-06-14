import { Theme } from '@mui/material/styles'

import { PRIMARY_COLOR } from '../palette'

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
