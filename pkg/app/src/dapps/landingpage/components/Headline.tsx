import { Typography } from '@mui/material'

export const Headline = ({ children }) => (
	<Typography variant={'h2'} pt={2} sx={{ lineHeight: '85%' }}>
		{children}
	</Typography>
)
