import { ReactNode } from 'react'
import { Button } from '@mui/material'

interface Props {
	sx?: any
	children: ReactNode
	onClick?: any
	variant?: 'primary' | 'secondary' | 'nav' | 'error'
}

const CustomButton = ({ children, variant, sx, onClick }: Props) => {
	const customSx = sx || {}

	switch (variant) {
		case 'secondary':
			return (
				<Button onClick={onClick} type="button" sx={customSx} variant="outlined">
					{children}
				</Button>
			)
		case 'nav':
			return (
				<Button onClick={onClick} type="button" sx={customSx} variant="secondary" color="secondary">
					{children}
				</Button>
			)
		case 'error':
			return (
				<Button onClick={onClick} type="button" sx={customSx} variant="contained" color="error">
					{children}
				</Button>
			)
		case 'primary':
		default:
			return (
				<Button onClick={onClick} type="button" sx={customSx} variant="contained">
					{children}
				</Button>
			)
	}
}

export default CustomButton
