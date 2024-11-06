import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------
declare module '@mui/material/Divider' {
	interface DividerPropsVariantOverrides {
		dashed: true
	}
}

export default function Divider(theme: Theme) {
	return {
		MuiDivider: {
			variants: [
				{
					props: { variant: 'dashed' },
					style: { borderStyle: 'dashed', borderColor: theme.palette.grey[500] },
				},
			],
		},
	}
}
