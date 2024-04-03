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
import Link from 'components/atoms/Link'

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

const Backdrop = ({ src, title, bg, lg, img, ...other }) => {
	return src ? (
		<Box
			sx={{
				position: 'relative',
				zIndex: 10,
				width: '100%',
				minHeight: lg ? { xs: '100vh', md: '400px' } : '240px',
				height: lg ? { xs: '100vh', md: '75vh' } : { xs: '50vh', md: '25vh' },
				backgroundColor: bg ?? null,
				borderTop: !lg && img !== '' ? '1px solid #000000' : 'none',
			}}
		>
			<NextImage fill src={src ?? null} alt={title ?? 'image'} style={{ objectFit: 'cover' }} />
		</Box>
	) : null
}

const Item = (props) => {
	const theme = useTheme()
	const isSm = useMediaQuery(theme.breakpoints.up('md'), { defaultMatches: true })
	const isXs = useMediaQuery(theme.breakpoints.up('xs'), { defaultMatches: true })
	const imageHeight = isSm ? props.item.img_height : props.item.img_height / 2
	const shadowStyle = 'drop-shadow( 0 15px 20px rgba(0,0,0,1) )'
	const lg = props?.size === 'lg'

	return (
		<Fragment>
			<Backdrop
				img={props?.img}
				bg={props.item.bg}
				lg={lg}
				src={props.item.image}
				title={props.item.title}
				priority={props?.index === 0}
			/>
			<Box
				px={[2, 4, 6]}
				py={[2, 4]}
				sx={{
					zIndex: 20,
					width: '100%',
					minHeight: props?.size === 'lg' ? { xs: '100vh', md: '400px' } : '240px',
					height: props?.size === 'lg' ? { xs: '100vh', md: '75vh' } : { xs: '50vh', md: '25vh' },
					position: 'absolute',
					top: 0,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-end',
					// padding: [1, 2, 4, '5rem'],
				}}
			>
				<Stack
					direction={lg ? 'column' : !isSm ? 'column' : 'row'}
					justifyContent="space-between"
					alignItems={lg ? 'flex-start' : isSm ? 'flex-end' : 'flex-start'}
				>
					<Stack
						direction="column"
						// justifyContent={( lg ? "flex-end" : ( isXs ? "flex-start" : "flex-end" ) )}
						alignItems="flex-start"
						spacing={[1, 1, 2]}
						sx={{
							// backgroundColor: '#11111166',
							// borderRadius: theme.shape.borderRadiusLg,
							py: lg ? 4 : 2,
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
							<Teaser variant={lg ? 'h1' : 'h2'} sx={{ color: props.item.txt ? props.item.txt : null }}>
								{props.item.title}
							</Teaser>
						)}
						{props.item.sub && (
							<Typography
								variant={props?.size === 'lg' ? 'hero1' : 'body1'}
								pt={lg ? 4 : 0}
								sx={{ lineHeight: '95%', color: props.item.txt ? props.item.txt : null }}
							>
								{props.item.sub}
							</Typography>
						)}
						<Typography
							// variant={'hero2'}
							variant={lg ? 'hero2' : 'body2'}
							pt={lg ? 2 : 0}
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
									<Button variant={lg ? 'lemon' : 'md'} color="lemon" sx={{ mr: 2, mb: 2 }}>
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

type Size = 'lg' | 'sm'

interface HeroProps {
	content?: Array<any>
	size?: Size
}

export const Hero = ({ content, size = 'lg' }: HeroProps) => {
	const theme = useTheme()
	const isSm = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const h = !isSm ? `calc( 100vh - 80px )` : `100vh`

	return (
		<Box
			sx={{
				minHeight: size === 'lg' ? { xs: '100vh', md: '400px' } : '240px',
				height: size === 'lg' ? { xs: '100vh', md: '75vh' } : { xs: '50vh', md: '25vh' },
				m: 0,
				p: 0,
			}}
		>
			{content ? (
				<Carousel
					sx={{ borderRadius: 0, height: '100%' }}
					duration={size === 'lg' ? 250 : 150}
					interval={size === 'lg' ? 5000 : 2500}
					NextIcon={<Next />}
					PrevIcon={<Prev />}
				>
					{content.map((item, i) => (
						<Item key={i} index={i} item={item} size={size} />
					))}
				</Carousel>
			) : null}
		</Box>
	)
}
