import React from 'react'
import { Container, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

interface ComponentProps {
	children?: React.ReactNode
}

export const Content = ({ children }: ComponentProps) => {
	const theme = useTheme()

	return <Box mt={-8}>{children || null}</Box>
}
