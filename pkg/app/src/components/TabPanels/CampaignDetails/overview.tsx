import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'

interface ComponentProps {
	markdown: string
}

export function CampaignDetailsOverview({ markdown }: ComponentProps) {
	const theme = useTheme()
	const { t } = useTranslation()
	return (
		<Box mt="1rem">
			<Typography variant="overline" color={theme.palette.common.white}>
				{t('campaign_details:overview')}
			</Typography>
			<Typography variant="body1" mt="1rem">
				{markdown}
			</Typography>
		</Box>
	)
}
