// standard components to create forms

import { Box, Paper, Stack, Typography } from '@mui/material'

export const ContentPanel = ({ children }) => (
	<Stack component={Paper} p={{ xs: 2, sm: 4 }} spacing={{ xs: 2, sm: 4 }} width="100%" height="100%" variant="glass">
		{children}
	</Stack>
)
export const ContentTitle = ({ children }) => (
	<Typography variant="h3" sx={{ m: 0, p: 0, pb: 2 }}>
		{children}
	</Typography>
)

export const Section = (props) => (
	<Box>
		{props.title && <SectionTitle>{props.title}</SectionTitle>}
		{props.description && <SectionDescription>{props.description}</SectionDescription>}
		<Stack spacing={{ xs: 1, sm: 2 }} direction={props.direction || undefined}>
			{props.children}
		</Stack>
	</Box>
)

export const SectionTitle = ({ children }) => (
	<Typography variant="h4" sx={{ m: 0, p: 0, pb: 2 }}>
		{children}
	</Typography>
)

export const SectionDescription = ({ children }) => (
	<Typography variant="body2" sx={{ m: 0, p: 0, pb: 4 }}>
		{children}
	</Typography>
)
