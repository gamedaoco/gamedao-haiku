import { Theme } from '@mui/material/styles'

declare module '@mui/material/Dialog' {
	interface DialogPropsVariantOverrides {
		glass: true
	}
}

export default function Dialog(theme: Theme) {
	return {
		MuiDialog: {
			styleOverrides: {
				paper: {
					boxShadow: theme.customShadows.dialog,
					'&.MuiPaper-rounded': {
						borderRadius: Number(theme.shape.borderRadius) * 20,
					},
					'&.MuiDialog-paperFullScreen': {
						borderRadius: 0,
					},
					'&.MuiDialog-paper .MuiDialogActions-root': {
						padding: theme.spacing(3),
					},
					'@media (max-width: 600px)': {
						margin: theme.spacing(2),
					},
					'@media (max-width: 663.95px)': {
						'&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody': {
							maxWidth: '100%',
						},
					},
				},
				paperFullWidth: {
					width: '100%',
				},
			},
			variants: [
				{
					props: { variant: 'glass' },
					style: {
						backgroundColor: `#00000011`,
						backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,.3))`,
						backdropFilter: `blur(10px)`,
						border: `1px solid #ffffff11`,
					},
				},
			],
		},
		MuiDialogTitle: {
			styleOverrides: {
				root: {
					padding: theme.spacing(3, 3, 0),
				},
			},
		},
		MuiDialogContent: {
			styleOverrides: {
				root: {
					borderTop: 0,
					borderBottom: 0,
					padding: theme.spacing(3),
				},
			},
		},
		MuiDialogActions: {
			styleOverrides: {
				root: {
					'& > :not(:first-of-type)': {
						marginLeft: theme.spacing(1.5),
					},
				},
			},
		},
	}
}
