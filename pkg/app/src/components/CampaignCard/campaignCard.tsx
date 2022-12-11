import { useCallback, useMemo } from 'react'

import { useRouter } from 'next/router'

import { Card } from '@mui/material'
import { useConfig } from 'hooks/useConfig'
import { useSystemProperties } from 'hooks/useSystemProperties'
import { CampaignState } from 'src/constants/campaign'
import type { Campaign } from 'src/queries'
import { parseIpfsHash } from 'src/utils/ipfs'

import { Content } from './modules/content'
import { Header } from './modules/header'

interface ComponentProps {
	campaign: Campaign
}

export function CampaignCard({ campaign }: ComponentProps) {
	const systemProperties = useSystemProperties()
	const { push } = useRouter()
	const config = useConfig()
	const currencyId = useMemo(
		() => systemProperties?.tokenSymbol?.indexOf(campaign?.token_symbol) ?? 0,
		[systemProperties, campaign?.token_symbol],
	)

	const handleClick = useCallback(() => {
		if (campaign?.state === CampaignState.Draft) {
			return push(`/org/${campaign?.organization?.id}/campaigns?draft=${campaign?.id}`)
		}
		return push(`/campaigns/${campaign?.id}`)
	}, [push, campaign])

	if (!campaign) {
		return null
	}
	return (
		<Card onClick={handleClick} sx={{ cursor: 'pointer' }}>
			<Header
				organizationImage={parseIpfsHash(campaign?.organization?.logo, config.IPFS_GATEWAY)}
				headerImage={parseIpfsHash(campaign?.header, config.IPFS_GATEWAY)}
				status={campaign?.state}
				id={campaign?.id}
				orgId={campaign?.organization?.id}
			/>

			<Content
				title={campaign?.name}
				organisationName={campaign.organization?.name}
				backers={campaign?.campaign_contributors_aggregate?.aggregate?.count ?? 0}
				contributed={campaign?.campaign_contributors_aggregate?.aggregate?.sum?.contributed ?? '0'}
				target={campaign?.target ?? '0'}
				currencyId={currencyId < 0 ? 0 : currencyId}
				expiry={campaign?.expiry ?? 0}
			/>
		</Card>
	)
}
