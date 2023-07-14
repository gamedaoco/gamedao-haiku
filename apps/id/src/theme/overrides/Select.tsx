//
//
import { InputSelectIcon } from './CustomIcons'
import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Select(theme: Theme) {
	return {
		MuiSelect: {
			defaultProps: {
				IconComponent: InputSelectIcon,
			},
		},
	}
}
