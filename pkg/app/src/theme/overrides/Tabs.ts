import { Theme } from '@mui/material/styles'

export default function Tabs(theme: Theme) {
	return {
		MuiTab: {
			styleOverrides: {
				root: {
					padding: 0,
					fontWeight: theme.typography.fontWeightMedium,
					borderTopLeftRadius: 0,
					borderTopRightRadius: 0,
					height: '90px',
					// borderRadius: 0, //theme.shape.borderRadiusLg,

					// boxShadow: '0px 15px 30px #0ff',
					// width: '90px',
					// position: 'relative',
					// '&::after': {
					// 	content: '""',
					// 	position: 'absolute',
					// 	width: '1px',
					// 	// backgroundColor: active ? '#00ffcc55' : 'transparent',
					// 	borderColor: '#ff00ff',
					// 	borderRadius: '2px 0px 0px 2px',
					// 	// boxShadow: active ? '-5px 0px 10px 3px #00ffcc' : 'none',
					// 	top: '25%',
					// 	bottom: '25%',
					// 	right: '0',
					// },
					// '&': {
					// 	'&::before': {
					// 		// backgroundColor: notification ? main : 'transparent',
					// 		position: 'absolute',
					// 		width: '13px',
					// 		height: '13px',
					// 		borderRadius: '50%',
					// 		bottom: '0px',
					// 		right: '22px',
					// 		zIndex: '5',
					// 		content: '""',
					// 	},
					// },

					'&.MuiTabs-indicator': {
						// display: "none",
						// backgroundColor: "orange"
					},

					'&.Mui-selected': {
						// color: 'green' //theme.palette.secondary.main,
					},
					'&:not(:last-of-type)': {
						marginRight: theme.spacing(5),
					},
					'@media (min-width: 600px)': {
						minWidth: 48,
					},
				},
				labelIcon: {
					minHeight: 48,
					flexDirection: 'row',
					'& > *:first-of-type': {
						marginBottom: 0,
						marginRight: theme.spacing(1),
					},
				},
				wrapper: {
					flexDirection: 'row',
					whiteSpace: 'nowrap',
				},
				textColorInherit: {
					opacity: 1,
					// color: theme.palette.text.secondary,
					color: theme.palette.text.primary,
				},
			},
		},
		MuiTabPanel: {
			styleOverrides: {
				root: {
					padding: 0,
					borderRadius: 0,
				},
			},
			// variants: [
			// 	{
			// 		props: { variant: 'glass' },
			// 		style: {
			// 			backgroundColor: `#00000011`, //theme.palette.background.neutral,
			// 			backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,.3))`,
			// 			backdropFilter: `blur(10px)`,
			// 		},
			// 	},
			// ],
		},
		MuiTabScrollButton: {
			styleOverrides: {
				root: {
					width: 48,
					// borderRadius: '50%',
				},
			},
		},
		MuiTabIndicator: {
			styleOverrides: {
				root: {
					color: theme.palette.text.primary,
					// borderWidth: '10px',
				},
			},
		},
	}
}
