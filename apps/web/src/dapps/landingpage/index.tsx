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
	Disclaimer, // QuestionsGameDAO,
	// QuestionsBattlepass,
} from './components'
import { Newsletter } from './components/Newsletter'
import { hero as heroContent, hero2 as hero2Content } from './content'
import { features } from './features'
import { GRADIENT } from './styles'
import { Box, Container } from '@mui/material'
import { styled } from '@mui/system'
import React, { useCallback, Fragment } from 'react'

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
		<Fragment>
			<Box>
				{hero && <Hero size="3/4" content={heroContent} />}
				{/* {hero && <Hero size="1/4" content={hero2Content} slide />} */}
				{/* {hero && <Hero size="1/4" content={heroContent} />} */}
				<Newsletter />
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
