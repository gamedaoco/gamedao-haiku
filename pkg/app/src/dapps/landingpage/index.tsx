import React, { useCallback } from 'react'

import { styled } from '@mui/system'
import { GRADIENT } from './styles'
import { features } from './features'
import { Newsletter } from './components/Newsletter'

import { Box, Container } from '@mui/material'
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
	Questions,
} from './components'

const Wrapper = styled(Box)(({ theme }) => ({
	// '& *': {
	// 	opacity: .9,
	// 	':hover': {
	// 		opacity: 1,
	// 	}
	// }
}))

export function Landingpage() {
	const { hero, intro, transform, teaser1, roadmap, team, partners, supporters, wallet, disclaimer, questions } =
		features

	return (
		<Box>
			{hero && <Hero />}

			<Newsletter />

			<Container maxWidth="xl" disableGutters>
				{intro && <Intro />}

				{teaser1 && (
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
				)}

				{/*{ transform && <Transform/> }*/}

				{roadmap && <Roadmap />}

				{team && <Team />}
				{partners && <Partners />}
				{supporters && <Supporters />}

				{wallet && <Wallet />}

				{questions && <Questions />}
				{disclaimer && <Disclaimer />}
			</Container>
		</Box>
	)
}

export default Landingpage
