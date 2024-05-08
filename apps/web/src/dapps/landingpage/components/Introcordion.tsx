import React, { useCallback } from 'react'
import { GRADIENT } from '../styles'
import { intro } from '../content'
import { Container, Grid, Paper, Typography } from '@mui/material'
import { Hero, Team, Partners, Supporters } from '.'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export const Introcordion = () => (
	<Container maxWidth="lg" sx={{ my: '2rem', backgroundColor: '#transparent', height: '100%' }}>
		{/* <Paper sx={{ mx: '2rem', backgroundColor: '#111', height: '100%' }} elevation={0}> */}
		<Grid container spacing={[0, 2, 4]} pt={[0, 2]}>
			<Typography variant={'h3'} sx={{ p: [0, 2] }}>
				Revolutionizing Game Publishing with Community Power
			</Typography>
			<Typography variant={'body1'} sx={{ p: [0, 2], my: [2, 0] }}>
				GameDAO is transforming the game publishing landscape by empowering creators and players to co-own and co-create in the world of indie games,
				arts, music, and entertainment. With over 2.7 billion gamers worldwide, GameDAO leverages this vast community to set new standards in game
				development and ownership, facilitating collaboration from concept to market in a secure, transparent environment.
			</Typography>
			{/* <Grid container item xs={12} md={6} direction="column"> */}
			{intro.map((item, i) => {
				return (
					<Accordion key={i}>
						<AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="intro-content" id="intro-header">
							<Typography>{item.header}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>{item.text}</Typography>
						</AccordionDetails>
					</Accordion>
				)
			})}
			{/* </Grid> */}
			{/* <Grid container item xs={12} md={6} direction="column"> */}
			<Typography variant={'body1'} sx={{ p: [0, 2], mt: 2 }}>
				This enhanced focus positions GameDAO as a pioneering, community-driven publisher dedicated to advancing the frontier of game creation and
				distribution. By reinforcing the foundation of GameDAO with these principles, we establish ourselves as a pioneering, community-driven publisher
				for new and experienced content creators in the gaming industry.
			</Typography>
			<Typography variant={'h3'} sx={{ p: [0, 2], mt: [2, 0] }}>
				GameDAO Marketplace: A Hub for Games, Assets, and Collaboration
			</Typography>
			<Typography variant={'body1'} sx={{ p: [0, 2], mt: [2, 0] }}>
				GameDAO introduces a comprehensive marketplace that serves as a central hub for trading games, game assets, creative content, and workforce
				services. This platform is designed to facilitate active participation across the gaming and creative industries, enabling users to buy, sell,
				and trade assets that are crucial for game development and artistic endeavors.
			</Typography>
			<Accordion>
				<AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="intro-content" id="intro-header">
					<Typography>Ecosystem Growth</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						In the GameDAO marketplace, gamers and content creators not only transact but also contribute directly to the ecosystem. Gamers can
						acquire unique in-game items and assets, enhancing their gaming experience and supporting independent creators. Content creators, on the
						other hand, find a vibrant marketplace for their artworks, music, designs, and more, gaining exposure and monetization opportunities
						previously limited in traditional settings.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="intro-content" id="intro-header">
					<Typography>Connecting Workforce</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Furthermore, the marketplace extends to include services from skilled professionals such as graphic designers, programmers, and
						marketers, making it easier for projects within the GameDAO collective to find and engage the necessary talents for successful project
						execution. This integration of resources supports the full lifecycle of game creation from initial concept through to final product
						launch, ensuring a steady flow of tools and talents.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="intro-content" id="intro-header">
					<Typography>Sustainability</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						By providing a structured yet flexible platform for transactions and collaborations, GameDAO\`s marketplace enhances the sustainability
						and growth of its collective, embodying a truly community-driven approach to game publishing and content creation. This system not only
						streamlines project development but also fosters a thriving economy where every participant has the opportunity to contribute to and
						benefit from the collective success.
					</Typography>
				</AccordionDetails>
			</Accordion>
			{/* </Grid> */}
		</Grid>
		{/* </Paper> */}
	</Container>
)
