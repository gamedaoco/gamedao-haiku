import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Stepper(theme: Theme) {
	return {
		MuiStepLabel: {
			styleOverrides: {
				root: {
					'&$active': {
						fill: 'black',
						'& $text': {
							fill: 'black',
						},
					},
				},
				text: {
					fill: theme.palette.primary,
				},
			},
		},
		MuiStepConnector: {
			styleOverrides: {
				line: {
					borderColor: theme.palette.divider,
				},
			},
		},
	}
}
