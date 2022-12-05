import { Fragment } from 'react'
import { Box, Card, Button, Typography, Grid, Stack } from '@mui/material'
import { Avatar, AvatarGroup } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { CardContent, CardActions } from '@mui/material'

const IconGroup = () => {
	return (
		<AvatarGroup max={3} total={24} spacing="small">
			<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
			<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
			<Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
			<Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
		</AvatarGroup>
	)
}

type TGridItemProps = {
	index?: number
}

export const BPGridItem = ({ index }: TGridItemProps) => {
	return (
		<Fragment>
			<Box sx={{ position: 'absolute', bottom: 0, left: 0, zIndex: 1000 }}>
				{index && (
					<Typography variant="poster" sx={{ opacity: 0.1 }}>
						{index}
					</Typography>
				)}
			</Box>
			<Box sx={{ position: 'absolute', top: 0, left: 0, zIndex: 1010 }}>
				<CardContent>
					<Box sx={{ border: '0px solid red' }}>
						<Box
							p={'24px'}
							sx={{
								borderRadius: '2px',
								background: `linear-gradient(
							to top,
							#ee4693ff,
							#ee469300 75%
						)`,
							}}
						>
							<Box
								sx={{
									width: 250,
									height: 250,
									borderRadius: '2px',
									background: 'url(https://pbs.twimg.com/media/EcBPYBRWsAAH6v8.jpg:large)',
									backgroundSize: 'cover',
									backgroundPosition: 'center center',
								}}
							></Box>
						</Box>
					</Box>
					<Typography pt={2} m={0} variant="h5">
						WAVE OG Banner
					</Typography>
					<Typography variant="body1" sx={{ opacity: 0.5 }}>
						Get a limited edition WAVE banner for your socials
					</Typography>
					<Box py={1} sx={{ opacity: 0.2 }}>
						<hr />
					</Box>
					<IconGroup />
				</CardContent>
				<Button fullWidth variant="pink">
					Claim
				</Button>
			</Box>
		</Fragment>
	)
}

type TGridProps = {
	id?: string
}
type TArgs = {
	args?: TGridProps
}

export const BPGrid = ({ args }: TArgs) => {
	const theme = useTheme()
	const items = 100
	const arr1: number[] = new Array(16).fill(0)

	return (
		<Grid
			container
			// columns={{ xs: 1, md: 2 }}
			spacing={{ xs: 2, md: 4, lg: 6 }}
			justifyContent={{ xs: 'center', md: 'left' }}
			pt={4}
		>
			{arr1.map((item, index) => {
				return (
					<Grid item key={index}>
						<Card sx={{ width: '348px', height: '560px', border: 0, backgroundColor: '#11111122' }}>
							<BPGridItem index={index + 1} />
						</Card>
					</Grid>
				)
			})}
		</Grid>
	)
}

export default BPGrid
