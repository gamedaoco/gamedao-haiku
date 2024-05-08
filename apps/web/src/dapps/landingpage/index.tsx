import React, { useCallback, Fragment } from 'react'

import { styled } from '@mui/system'
import { GRADIENT } from './styles'
import { features } from './features'
import { Newsletter } from './components/Newsletter'

import { Box, Container } from '@mui/material'
import {
	Hero,
	Intro,
	Introcordion,
	Transform,
	Teaser,
	Wallet,
	Team,
	Partners,
	Supporters,
	Roadmap,
	Disclaimer,
	// QuestionsGameDAO,
	// QuestionsBattlepass,
} from './components'

import { hero as heroContent, coming_soon } from './content'

const Wrapper = styled(Box)(({ theme }) => ({
	// '& *': {
	// 	opacity: .9,
	// 	':hover': {
	// 		opacity: 1,
	// 	}
	// }
}))

export function Landingpage() {
	const { hero, intro, transform, teaser1, roadmap, team, partners, supporters, wallet, disclaimer, questions } = features

	return (
		<Fragment>
			<Box>
				{hero && <Hero size="3/4" content={heroContent} />}
				{/* {hero && <Hero size="1/4" content={hero2Content} slide />} */}
				{/* {hero && <Hero size="1/4" content={heroContent} />} */}
				<Newsletter />
				{/* <Hero size="1/5" content={coming_soon} slide /> */}
			</Box>
			<Box>
				<Container maxWidth="xl" disableGutters>
					<Teaser variant="h2" fontSize={['2rem', '4rem']} padding={[4, 6]} sx={{ backgroundColor: '#ee4693', color: '#f3cb14' }}>
						Unleash Creativity
						<br />
						Through Community.
					</Teaser>

					{intro && <Introcordion />}
					{teaser1 && (
						<Teaser variant="h2" fontSize={['2rem', '4rem']} padding={[4, 6]} sx={{ backgroundColor: '#ee4693', color: '#f3cb14' }}>
							Build Better
							<br />
							Games Together.
						</Teaser>
					)}
					{/* {transform && <Transform />} */}

					{/* {team && <Team />} */}
					{/* {partners && <Partners />} */}

					{/* {wallet && <Wallet />} */}

					{/* {questions && <QuestionsBattlepass />} */}

					{/* {roadmap && <Roadmap />} */}
					{/* {supporters && <Supporters />} */}
					{/* {disclaimer && <Disclaimer />} */}
				</Container>
			</Box>
		</Fragment>
	)
}

export default Landingpage
