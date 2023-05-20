// nextjs image caching for image backdrops

import NextImage from 'next/image'
import Box from '@mui/material/Box'

export const Backdrop = ({ src, title = null, ...other }) => {
	return src ? (
		<Box
			sx={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				// borderRadius: theme.shape.borderRadiusLg,
			}}
			{...other}
		>
			<NextImage fill src={src ?? null} alt={title ?? 'image'} style={{ objectFit: 'cover' }} />
		</Box>
	) : null
}
