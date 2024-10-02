import React, { useCallback, Fragment, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

import { parseIpfsHash } from 'src/utils/ipfs'
import { useConfig } from 'src/hooks/useConfig'

import {
	Organization,
	Organization_Order_By,
	useDisplayValuesQuery,
	useOrganizationsPaginationCountSubscription,
	useOrganizationsPaginationSubscription,
	useTotalOrganizationsQuery,
	useTotalSubscription,
	useTotalActiveSubscription,
} from 'src/queries'

import { styled } from '@mui/system'
import { GRADIENT } from './styles'
import { features } from './features'
import { Newsletter } from './components/Newsletter'
import { Spinner } from 'components/atoms/Loader'

import { Box, Container, Typography, Grid, Paper, Stack, Button } from '@mui/material'
import {
	Hero,
	Intro,
	Transform,
	Teaser,
	Wallet,
	Team,
	Partners,
	Supporters,
	Roadmap,
	Disclaimer,
	// QuestionsGameDAO,
	QuestionsBattlepass,
} from './components'

import { hero as heroContent, hero2 as hero2Content } from './content'

const Wrapper = styled(Box)(({ theme }) => ({
	// '& *': {
	// 	opacity: .9,
	// 	':hover': {
	// 		opacity: 1,
	// 	}
	// }
}))

const top_collective = [
	{
		name: 'GAMEDAO',
		description: '',
		id: '0x2762ebd15585462cb6ddd1ee88d717c5d39e47a0650b988be866754c6e41b7ee',
		image: 'QmYFBa6TcCoQsKWUoA33ceGuxWkHMaoWhP3BNordV76MCs',
	},
	{
		name: 'GAME3',
		description: '',
		id: '0x2762ebd15585462cb6ddd1ee88d717c5d39e47a0650b988be866754c6e41b7ee',
		image: 'QmYFBa6TcCoQsKWUoA33ceGuxWkHMaoWhP3BNordV76MCs',
	},
	{
		name: 'ZERO',
		description: 'the network for videogames',
		id: '0x2762ebd15585462cb6ddd1ee88d717c5d39e47a0650b988be866754c6e41b7ee',
		image: 'QmYFBa6TcCoQsKWUoA33ceGuxWkHMaoWhP3BNordV76MCs',
	},
]

const top_campaign = [
	{
		name: 'Bomb The World 3',
		description: 'The legend returns. Klar Kent is building BTW3. Support now!',
		href: '',
		image: 'QmYFBa6TcCoQsKWUoA33ceGuxWkHMaoWhP3BNordV76MCs',
	},
	{ name: 'GAMEDAO', description: '', id: '', image: 'QmYFBa6TcCoQsKWUoA33ceGuxWkHMaoWhP3BNordV76MCs' },
	{ name: 'GAMEDAO', description: '', id: '', image: 'QmYFBa6TcCoQsKWUoA33ceGuxWkHMaoWhP3BNordV76MCs' },
	{
		name: 'Bomb The World 3',
		description: 'The legend returns. Klar Kent is building BTW3. Support now!',
		href: '',
		image: 'QmYFBa6TcCoQsKWUoA33ceGuxWkHMaoWhP3BNordV76MCs',
	},
	{ name: 'GAMEDAO', description: '', id: '', image: 'QmYFBa6TcCoQsKWUoA33ceGuxWkHMaoWhP3BNordV76MCs' },
	{ name: 'GAMEDAO', description: '', id: '', image: 'QmYFBa6TcCoQsKWUoA33ceGuxWkHMaoWhP3BNordV76MCs' },
]

const top_battlepass = [
	{ name: 'AEX-1.IO', description: '', id: '', image: 'QmYFBa6TcCoQsKWUoA33ceGuxWkHMaoWhP3BNordV76MCs' },
	{
		name: 'Netrunner',
		description:
			'The ultimate ambassador program for game enthusiasts: Get cash and token rewards for giving GAMEDAO a hand with testing, posting, story telling and more!',
		href: '',
		image: 'QmYFBa6TcCoQsKWUoA33ceGuxWkHMaoWhP3BNordV76MCs',
	},
	{ name: 'B0R3DN1GH7', description: '', id: '', image: 'QmYFBa6TcCoQsKWUoA33ceGuxWkHMaoWhP3BNordV76MCs' },
]

const GridItem = (props) => {
	const config = useConfig()
	const imageUrl = parseIpfsHash(props.item.header, config.IPFS_GATEWAY)

	return (
		<Grid item xs={1} height={'300px'}>
			<Paper sx={{ p: 2, height: '100%', background: `url(${imageUrl}) no-repeat center`, backgroundSize: 'cover' }} variant="glass">
				<Stack height={'100%'} direction="column" justifyContent="end">
					<Typography variant="teaserTitle" pb={1}>
						{props.item.name}
					</Typography>
					{/* <Typography variant="teaserText" pb={1}>
						{props.item.description}
					</Typography> */}
					<Stack direction="row" justifyContent="space-between">
						<Link href={`/${props.category}/${props.item.id}`}>
							<Button size="small" color="secondary">
								Learn More
							</Button>
						</Link>
					</Stack>
				</Stack>
			</Paper>
		</Grid>
	)
}
const ItemGrid = (props) => {
	return (
		<Box pb={2}>
			<Typography variant="h6" pl={1} pb={2}>
				{props.title}
			</Typography>
			<Grid
				pb={2}
				container
				columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}
				spacing={{ xs: 1, md: 1 }}
				justifyContent={{ xs: 'center', sm: 'left', lg: 'center' }}
			>
				{props.items && props.items.length > 0 ? (
					props.items.map((item, index) => {
						return <GridItem category={props.title.toLowerCase()} item={item} key={index} />
					})
				) : (
					<Grid height={'300px'} width={'100%'} sx={{ opacity: 0.5 }} justifyContent="center" alignItems="center">
						<Spinner text={`Fetching Top ${props.title}`} />
					</Grid>
				)}
			</Grid>
			<Stack direction="row" justifyContent="end">
				<Link href={props.link}>
					<Button>discover more {props.title}</Button>
				</Link>
			</Stack>
		</Box>
	)
}
export function Landingpage() {
	const maxCollectives = 6
	const maxCampaigns = 6
	const maxPasses = 3

	const [topCollectives, setTopCollectives] = useState({})
	const getCollectives = useOrganizationsPaginationSubscription()
	// 	{
	// 	variables: {
	// 		searchQuery: `''`,
	// 	},
	// }
	useEffect(() => {
		console.log('collectives', getCollectives?.data?.organization)
		const content = getCollectives?.data?.organization.slice(0, 3)
		setTopCollectives(content)
	}, [getCollectives])

	return (
		<Fragment>
			{/* <Box> */}
			{/* top collectives */}
			{/* top campaigns */}
			{/* top battlepasses */}

			{/* {hero && <Hero size="sm" content={heroContent} />} */}
			{/* {hero && <Hero size="sm" content={hero2Content} />} */}
			{/* <Newsletter /> */}
			{/* </Box> */}

			<Container maxWidth="xl" sx={{ mt: '100px' }}>
				<ItemGrid items={topCollectives} title="Collectives" link="collectives" />
				<ItemGrid items={top_campaign} title="Campaigns" link="campaigns" />
				<ItemGrid items={top_battlepass} title="Battlepass" link="battlepass" />

				{/* {intro && <Intro />} */}
				{/* {teaser1 && (
						<Teaser
							variant="h2"
							fontSize={['2rem', '4rem']}
							padding={[4, 6]}
							sx={{ backgroundColor: '#ee4693', color: '#f3cb14' }}
						>
							Building
							<br />
							better games
							<br />
							together.
						</Teaser>
					)} */}
				{/* {transform && <Transform />} */}
				{/* {team && <Team />} */}
				{/* {partners && <Partners />} */}
				{/* {wallet && <Wallet />} */}
				{/* {questions && <QuestionsBattlepass />} */}
				{/* {roadmap && <Roadmap />} */}
				{/* {supporters && <Supporters />} */}
				{/* {disclaimer && <Disclaimer />} */}
			</Container>
		</Fragment>
	)
}

export default Landingpage
