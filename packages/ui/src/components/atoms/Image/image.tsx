import NextImage from 'next/image'

import { Theme } from '@mui/material/styles'
import { Box, BoxProps, SxProps } from '@mui/material'
import placeHolder from './res/img_placeholder.svg'

type IProps = BoxProps

export type ImageRatio = '4/3' | '3/4' | '6/4' | '4/6' | '16/9' | '9/16' | '21/9' | '9/21' | '1/1'
export type ImageEffect = 'blur'

interface ComponentProps extends IProps {
	sx?: SxProps<Theme>
	ratio?: ImageRatio
	effect?: ImageEffect
	disabledEffect?: boolean
	src?: string
	alt?: string
	layout?: string
	cover?: boolean
}

function getRatio(ratio = '1/1') {
	return {
		'4/3': 'calc(100% / 4 * 3)',
		'3/4': 'calc(100% / 3 * 4)',
		'6/4': 'calc(100% / 6 * 4)',
		'4/6': 'calc(100% / 4 * 6)',
		'16/9': 'calc(100% / 16 * 9)',
		'9/16': 'calc(100% / 9 * 16)',
		'21/9': 'calc(100% / 21 * 9)',
		'9/21': 'calc(100% / 9 * 21)',
		'1/1': '100%',
	}[ratio]
}

export function Image({
	src,
	alt,
	ratio,
	disabledEffect = false,
	effect = 'blur',
	sx,
	cover = true,
	...other
}: ComponentProps) {
	// if (ratio) {
	// 	return (
	// 		<Box
	// 			component="span"
	// 			sx={{
	// 				width: 1,
	// 				lineHeight: 0,
	// 				display: 'block',
	// 				overflow: 'hidden',
	// 				position: 'relative',
	// 				pt: getRatio(ratio),
	// 				'& .wrapper': {
	// 					top: 0,
	// 					left: 0,
	// 					right: 0,
	// 					bottom: 0,
	// 					lineHeight: 0,
	// 					position: 'absolute',
	// 					backgroundSize: 'cover !important',
	// 				},
	// 				...sx,
	// 			}}
	// 		>
	// 			<Box
	// 				component={NextImage}
	// 				wrapperClassName="wrapper"
	// 				effect={disabledEffect ? undefined : effect}
	// 				placeholderSrc={placeHolder.src}
	// 				sx={{ width: 1, height: 1, objectFit: 'cover' }}
	// 				{...other}
	// 			/>
	// 		</Box>
	// 	)
	// }

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
			{!src ? null : (
				<NextImage
					// component={NextImage}
					src={src}
					fill
					alt={alt ?? 'image'}
					style={{ objectFit: cover ? 'cover' : 'fill' }}
					wrapperClassName="wrapper"
					effect={disabledEffect ? undefined : effect}
					placeholderSrc={placeHolder.src}
					// sx={{ width: 1, height: 1, objectFit: cover ? 'cover' : 'fill' }}
					{...other}
				/>
			)}
		</Box>
	)
}
