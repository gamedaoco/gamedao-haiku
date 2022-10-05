import { useMemo } from 'react'

import { Chip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { CampaignStatus } from 'src/@types/campaignStatus'

interface Data {
	text: string
	color: 'primary' | 'secondary' | 'info'
}

interface ComponentProps {
	status: string
	variant: 'campaignStatus' | 'campaignState'
}

export function StatusChip({ status, variant }: ComponentProps) {
	const { t } = useTranslation()
	const data: Data | null = useMemo(() => {
		let text = t(`label:campaign_status:${status?.toLowerCase()}`)
		let color = 'primary'

		switch (status) {
			case CampaignStatus.Created:
				color = 'error'
				break
			case CampaignStatus.ACTIVE:
				if (variant === 'campaignState') {
					color = 'info'
					break
				} else {
					return null
				}
			case CampaignStatus.FINALIZING:
				color = 'primary'
				break
			case CampaignStatus.SUCCESS:
				color = 'primary'
				break
			case CampaignStatus.REVERTING:
				color = 'secondary'
				break
			case CampaignStatus.FAILED:
				color = 'secondary'
				break
			case CampaignStatus.Draft:
				color = 'info'
				break
			default:
				return null
		}

		return { text, color } as Data
	}, [status, t])

	if (!data) {
		return null
	}

	return <Chip variant={variant} label={data.text} color={data.color} />
}
