import { Box, BoxProps } from '@mui/material'

interface ComponentProps extends BoxProps {
	src: string
}

export function SvgIconStyle({ src, sx }: ComponentProps) {
	return (
		<Box
			component="span"
			sx={{
				width: 24,
				height: 24,
				display: 'inline-block',
				bgcolor: 'currentColor',
				mask: `url(${src}) no-repeat center / contain`,
				WebkitMask: `url(${src}) no-repeat center / contain`,
				...sx,
			}}
		/>
	)
}
