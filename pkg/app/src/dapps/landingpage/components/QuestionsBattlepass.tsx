import React, { useCallback } from 'react'

import { Box, Typography } from '@mui/material'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { content } from '../content_faq'

export const QuestionsBattlepass = () => {
	return (
		<Box>
			<Typography variant={'h3'} px={'2rem'} pb={'2rem'}>
				Frequently Asked Questions
			</Typography>
			{content.map((item, index) => (
				<Accordion key={index} sx={{ background: 'transparent', px: '1rem', boxShadow: 0 }}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={'panel' + index + '-content'}
						id={'panel' + index + '-header'}
					>
						<Typography>{item[0]}</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ boxShadow: 0 }}>
						<Typography>{item[1]}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</Box>
	)
}
