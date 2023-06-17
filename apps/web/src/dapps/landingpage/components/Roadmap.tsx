import * as React from 'react'
import { Grid, Paper, Typography, Box } from '@mui/material'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import { GRADIENT } from '../styles'

interface RoadmapItemTypes {
	title: string
	children: React.ReactNode
	last?: boolean
}

const RoadmapItem = ({ title, children, last }: RoadmapItemTypes) => {
	return (
		<TimelineItem>
			<TimelineOppositeContent color="#ffffff">{title}</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot
					sx={{
						bgcolor: 'rgba(255,255,255,1)',
					}}
				/>
				{!last && (
					<TimelineConnector
						sx={{
							bgcolor: 'rgba(255,255,255,1)',
						}}
					/>
				)}
			</TimelineSeparator>
			<TimelineContent color="#00ff00">{children}</TimelineContent>
		</TimelineItem>
	)
}

export function Roadmap() {
	return (
		<Box py={[2, 4]}>
			<Typography variant={'h3'} px={'2rem'} pb={'2rem'}>
				Roadmap + Key Milestones
			</Typography>

			{/*
		<Paper sx={{ mx: '2rem', backgroundColor: 'transparent', height: '100%' }} elevation={0}>
			<Grid container spacing={[0,2,4]} pt={[0,2]}>
				<Grid container item xs={12} md={6} direction="column" >
					<Typography
						variant="h3"
						pt={[2]}
						sx={{
							// background: GRADIENT.orange,
							// WebkitBackgroundClip: 'text',
							// WebkitTextFillColor: 'transparent',
							fontWeight: 400,
							lineHeight: '100%',
						}}
					>
						Community discovery, curation, coordination and ownership protocols.
						Fully integrated with identity, fundraising and rewards:
						Setup, build and run next generation video games.
						<br/><br/>
					</Typography>
				</Grid>
				<Grid container item xs={12} md={6} direction="column">
			*/}

			<Timeline
				position="alternate"
				sx={{
					background: GRADIENT.rainbow,
					BackgroundClip: 'text',
					WebkitBackgroundClip: 'text',
					color: 'rgba(255,255,255,1)',
					WebkitTextFillColor: 'rgba(255,255,255,1)',
					fontWeight: 600,
					lineHeight: '100%',
				}}
			>
				<RoadmapItem title="2019">
					Research for legal DAOs in Europe
					<br />
					Protocol core development starts
				</RoadmapItem>
				<RoadmapItem title="2020">Alphaville Testnet Live</RoadmapItem>
				<RoadmapItem title="2021">
					Pinky Paper
					<br />
					Winner of Top Blockchain Hackathon
					<br />
					Outlier Ventures Polkadot Basecamp 1
				</RoadmapItem>
				<RoadmapItem title="Q1 22">
					Company Setup
					<br />
					Seed Round
					<br />
					Acala and Kilt Partnership
				</RoadmapItem>
				<RoadmapItem title="Q2 22">
					{/* Scytale Digital joins the community
					<br /> */}
					Substrate Builders Program
					<br />
					Beta One with 200 OG Keys
					<br />
				</RoadmapItem>
				<RoadmapItem title="Q3 22">
					{/* Outlier Ventures Ascent Program
					<br /> */}
					Rococo Slot Acquired for ZERO
					{/* <br />
					Talisman Wallet +<br />
				PolkaWallet Integration */}
					<br />
					WAVE Esports + SPARXX Partnership
				</RoadmapItem>
				<RoadmapItem title="Q4 22">
					Guild Beta with WAVE Esports + AEX-1
					<br />
					{/* Private Sale
					<br /> */}
					ZERO Parachain
				</RoadmapItem>
				<RoadmapItem title="Q2 23">
					{/* $GAME TGE
					<br /> */}
					Protocol Launch
					<br />
					Scale Up Guild Case
				</RoadmapItem>
				<RoadmapItem title="Q3 23" last>
					Seed Fund Creator Teams
					<br />
					Investor Syndicates
					<br />
					Mobile
				</RoadmapItem>
			</Timeline>

			{/*
				</Grid>
			</Grid>
		</Paper>
		*/}
		</Box>
	)
}
