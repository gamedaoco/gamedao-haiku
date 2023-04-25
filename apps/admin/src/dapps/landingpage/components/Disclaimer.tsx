import * as React from 'react'
import { GRADIENT } from '../styles'
import { Paper, Typography, Box } from '@mui/material'

export const Disclaimer = () => {
	return (
		<Box p={[2, 4]} mb={[2, 4]} mx={'2rem'} sx={{ color: '#fff', border: '1px solid white' }}>
			<Typography variant={'h3'} pb={'1rem'}>
				Disclaimer
			</Typography>
			<Typography variant="caption" pb={'2rem'}>
				The information contained on this page and in the Pinky Paper is not comprehensive and does not claim to
				be complete. There is no assurance as to the accuracy or completeness of such information and no
				representation, warranty or undertaking is or purported to be provided as to the accuracy or
				completeness of such information. The website and Pinky Paper are intended for general informational
				purposes only and do not constitute a prospectus, an offer document, an offer of securities, a
				solicitation for investment, or any offer to sell any product. In particular, this page and the Pinky
				Paper are not an Offer and do not imply a contractual relationship between GameDAO AG and an interested
				party. The information provided on this page and in the Pinky Paper do not constitute financial advice,
				trading advice, investment advice, legal advice, or any sort of advice whatsoever, and you should not
				treat it as such. Further, this website and the Pinky Paper may be amended or replaced from time to
				time. Any liability for the content of the Pinky paper is excluded. This includes both material and
				immaterial damage.
			</Typography>
		</Box>
	)
}
