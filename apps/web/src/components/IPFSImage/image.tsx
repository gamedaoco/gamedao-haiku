import NextImage from 'next/image'

import { Theme } from '@mui/material/styles'
import { Box, BoxProps, SxProps } from '@mui/material'

import placeHolder from './modules/img_placeholder.svg'

export type ImageRatio = '4/3' | '3/4' | '6/4' | '4/6' | '16/9' | '9/16' | '21/9' | '9/21' | '1/1'

type IProps = BoxProps

interface ComponentProps extends IProps {
	sx?: SxProps<Theme>
}

export function Image({ sx, ...other }: ComponentProps) {
	return (
		<Box
			component="span"
			sx={{
				lineHeight: 0,
				display: 'block',
				overflow: 'hidden',
				'& .wrapper': { width: 1, height: 1, backgroundSize: 'cover !important' },
				...sx,
			}}
		>
			<Box
				component={NextImage}
				wrapperClassName="wrapper"
				placeholderSrc={placeHolder.src}
				sx={{ width: 1, height: 1, objectFit: 'cover' }}
				{...other}
			/>
		</Box>
	)
}
