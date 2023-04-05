import { Typography } from '@mui/material'

export const Title = ({ children }) => (
	<Typography variant={'h1'} pt={2} sx={{ lineHeight: '85%' }}>
		{children}
	</Typography>
)
