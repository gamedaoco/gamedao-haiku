import { Box, styled } from '@mui/material'

const PaddedBox = styled(Box)(({ theme }) => ({
	width: '100%',
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	['&::after']: {
		content: '""',
		display: 'block',
		paddingBottom: '56.25%',
	},
}))

export function Image16to9({ src, sx }) {
	return (
		<PaddedBox
			sx={{ ...sx }}
			style={{ backgroundImage: `url(${src || 'https://picsum.photos/1240'})` }}
		/>
	)
}

export function Box16to9({ children, sx }) {
	return (
		<Box
			sx={{
				position: 'relative',
				/* 16:9 aspect ratio */
				paddingBottom: '56.25%',
				...sx,
			}}
		>
			{children}
		</Box>
	)
}
