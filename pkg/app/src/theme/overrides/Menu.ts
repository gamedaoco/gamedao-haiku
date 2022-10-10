import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Menu(theme: Theme) {
	return {
		MuiMenuItem: {
			styleOverrides: {
				root: {
					'&.Mui-selected': {
						background: 'transparent', //theme.palette.action.selected,
						borderColor: theme.palette.text.primary,
						borderBottom: '1px dotted',
						'&:hover': {
							backgroundColor: theme.palette.action.hover,
						},
					},
				},
			},
		},
	}
}
