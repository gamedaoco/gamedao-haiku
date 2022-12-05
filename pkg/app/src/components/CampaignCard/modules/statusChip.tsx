import { useMemo } from 'react'

import { Chip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { CampaignState } from 'src/constants/campaign'

interface Data {
	text: string
	color: 'primary' | 'secondary' | 'info'
}

interface ComponentProps {
	status: string
	variant: 'CampaignState' | 'campaignState'
}

export function StatusChip({ status, variant }: ComponentProps) {
	const { t } = useTranslation()

	const data: Data | null = useMemo(() => {
		let text = t(`label:campaign_status:${status?.toLowerCase()}`)
		let color = 'primary'

		switch (status) {
			case CampaignState.CREATED:
				color = 'info'
				break
			case CampaignState.ACTIVE:
				if (variant === 'campaignState') {
					color = 'info'
					break
				} else {
					return null
				}
			case CampaignState.FINALIZING:
				color = 'primary'
				break
			case CampaignState.SUCCESS:
				color = 'primary'
				break
			case CampaignState.REVERTING:
				color = 'secondary'
				break
			case CampaignState.FAILED:
				color = 'secondary'
				break
			case CampaignState.Draft:
				color = 'info'
				break
			default:
				return null
		}

		return { text, color } as Data
	}, [status, t, variant])

	if (!data) {
		return null
	}

	return <Chip variant={variant} label={data.text} color={data.color} />
}
