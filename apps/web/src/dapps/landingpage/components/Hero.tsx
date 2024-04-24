// import { hero as items } from '../content'
import { GRADIENT } from '../styles'
import Prev from '@mui/icons-material/NavigateBefore'
import Next from '@mui/icons-material/NavigateNext'
import { useMediaQuery, Container, Stack, Box, Typography, Button } from '@mui/material'
import Icon from '@mui/material/Icon'
import { alpha } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import { styled } from '@mui/system'
import NextImage from 'next/image'
import { Fragment } from 'react'
import Carousel from 'react-material-ui-carousel'
import Link from 'src/components/Link'

type Size = '1/4' | '2/4' | '3/4' | '4/4'

const dimensions = (size: Size) => {
	switch (size) {
		case '1/4':
			return { minHeight: { xs: '50vh', md: '25vh' }, height: { xs: '50vh', md: '25vh' } }
			break
		case '2/4':
			return { minHeight: { xs: '100vh', md: '50vh' }, height: { xs: '100vh', md: '50vh' } }
			break
		case '3/4':
			return { minHeight: { xs: '100vh', md: '75vh' }, height: { xs: '100vh', md: '75vh' } }
			break
		case '4/4':
			return { minHeight: { xs: '100vh' }, height: { xs: '100vh' } }
			break
		default:
			return { minHeight: { xs: '100vh' }, height: { xs: '100vh' } }
			break
	}
}

const Teaser = styled(Typography)(({ theme }) => ({
	background: GRADIENT.rainbow2,
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	width: '100%',
	color: theme.palette.text.secondary,
	fontWeight: 900,
	lineHeight: '85%',
	textTransform: 'uppercase',
	justifyContent: 'middle',
	verticalAlign: 'center',
	textAlign: 'left',
}))

const Backdrop = ({ src, title, bg, size, img, ...other }) => {
	const computedStyles = dimensions(size)
	console.log('bg', bg, src, title, size)
	return src ? (
		<Box
			sx={{
				...computedStyles,
				position: 'relative',
				zIndex: 10,
				width: '100%',
				backgroundColor: 'white',
				borderTop: size !== '4/4' && img !== '' ? '1px solid #000000' : 'none',
			}}
		>
			{src && <NextImage fill src={src || null} alt={title || 'image'} style={{ objectFit: 'cover', objectPosition: 'bottom' }} />}
		</Box>
	) : null
}

const Item = (props) => {
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('lg'), { defaultMatches: true })
	const isSm = useMediaQuery(theme.breakpoints.up('sm'), { defaultMatches: true })
	const isXs = useMediaQuery(theme.breakpoints.up('xs'), { defaultMatches: true })
	const imageHeight = isSm ? props.item.img_height : props.item.img_height / 2
	const shadowStyle = 'drop-shadow( 0 15px 20px rgba(0,0,0,1) )'

	const computedStyles = dimensions(props?.size || '4/4')
	const full = props?.size === '4/4'

	return (
		<Fragment>
			<Backdrop img={props.img} bg={props.item.bg} size={props.size} src={props.item.image} title={props.item.title} priority={props?.index === 0} />
			<Box
				px={[2, 4, 6]}
				py={[2, 4]}
				sx={{
					zIndex: 20,
					width: '100%',
					...computedStyles,
					// minHeight: full ? { xs: '100vh' } : '240px',
					// height: full ? { xs: '100vh' } : { xs: '50vh', md: '25vh' },
					position: 'absolute',
					top: 0,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-end',
					backgroundColor: 'transparent',
					// padding: [1, 2, 4, '5rem'],
				}}
			>
				<Stack
					direction={full ? 'column' : !isMd ? 'column' : 'row'}
					justifyContent="space-between"
					alignItems={full ? 'flex-start' : isMd ? 'flex-end' : 'flex-start'}
				>
					<Stack
						direction="column"
						// justifyContent={( lg ? "flex-end" : ( isXs ? "flex-start" : "flex-end" ) )}
						alignItems="flex-start"
						spacing={[1, 1, 2]}
						sx={{
							// backgroundColor: '#11111166',
							// borderRadius: theme.shape.borderRadiusLg,
							py: full ? 4 : 2,
						}}
					>
						{props.item.img && (
							<Box
								sx={{
									webkitFilter: shadowStyle,
									filter: shadowStyle,
								}}
							>
								<img src={props.item.img} height={imageHeight} width="auto" />
							</Box>
						)}
						{!props.item.img && (
							<Teaser variant={full ? 'h1' : 'h2'} sx={{ color: props.item.txt ? props.item.txt : null }}>
								{props.item.title}
							</Teaser>
						)}
						{props.item.sub && (
							<Typography
								variant={full ? 'hero1' : 'body1'}
								pt={full ? 4 : 0}
								sx={{ lineHeight: '95%', color: props.item.txt ? props.item.txt : null }}
							>
								{props.item.sub}
							</Typography>
						)}
						<Typography
							// variant={'hero2'}
							variant={full ? 'hero2' : 'body2'}
							pt={full ? 2 : 0}
							sx={{
								maxWidth: { xs: '100%', md: '75%', lg: '50%' },
								color: props.item.txt ? props.item.txt : null,
							}}
						>
							{props.item.description}
						</Typography>
					</Stack>
					{props.item.links && (
						<Typography variant={'hero2'} pt={[2, 4]} sx={{ lineHeight: '95%' }}>
							{props.item.links.map((e, i) => (
								<Link href={e.url} key={i}>
									<Button variant={full ? 'lemon' : 'sm'} color="lemon" sx={{ mr: 2, mb: 2 }}>
										{`${e.text || 'More'}`}
									</Button>
								</Link>
							))}
						</Typography>
					)}
				</Stack>
			</Box>
		</Fragment>
	)
}

interface HeroProps {
	content?: Array<any>
	size?: Size
	slide?: boolean
}

export const Hero = ({ content, size = '4/4', slide = false }: HeroProps) => {
	const theme = useTheme()
	const isSm = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	// const h = isSm ? `100vh` : `calc( 100vh - 80px )`
	const sx = dimensions(size)

	return (
		<Box sx={sx}>
			{content ? (
				<Carousel
					sx={{ borderRadius: 0, height: '100%' }}
					duration={size === '4/4' ? 250 : 150}
					interval={size === '4/4' ? 5000 : 2500}
					NextIcon={<Next />}
					PrevIcon={<Prev />}
					animation={slide ? 'slide' : 'fade'}
				>
					{content.map((item, i) => (
						<Item key={i} index={i} item={item} size={size} />
					))}
				</Carousel>
			) : null}
		</Box>
	)
}
