import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Menu(theme: Theme) {
	return {
		MuiMenuItem: {
			styleOverrides: {
				root: {
					border: 0,
					'&.Mui-selected': {
						background: 'transparent', //theme.palette.action.selected,
						// borderBottom: `2px solid ${theme.palette.primary.main}`,
						'&:hover': {
							// backgroundColor: 'transparent',
							// borderBottom: `2px solid ${theme.palette.primary.darker}`,
						},
					},
				},
			},
		},
	}
}
