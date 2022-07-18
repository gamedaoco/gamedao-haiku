import { useCallback, useMemo } from 'react'

import { useRouter } from 'next/router'

import { Card } from '@mui/material'
import { useConfig } from 'hooks/useConfig'
import { useSystemProperties } from 'hooks/useSystemProperties'
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
		push(`/campaigns/${campaign?.id}`)
	}, [push, campaign?.id])

	if (!campaign) {
		return null
	}
	return (
		<Card onClick={handleClick} sx={{ cursor: 'pointer' }}>
			<Header
				organizationImage={parseIpfsHash(
					campaign?.organization?.organization_metadata?.logo,
					config.IPFS_GATEWAY,
				)}
				headerImage={parseIpfsHash(campaign?.campaign_metadata?.header, config.IPFS_GATEWAY)}
				status={campaign?.state}
			/>

			<Content
				title={campaign.campaign_metadata?.name}
				organisationName={campaign.organization?.organization_metadata?.name}
				backers={campaign?.campaign_contributors_aggregate?.aggregate?.count ?? 0}
				contributed={campaign?.campaign_contributors_aggregate?.aggregate?.sum?.contributed ?? '0'}
				target={campaign?.target ?? '0'}
				currencyId={currencyId < 0 ? 0 : currencyId}
				expiry={campaign?.expiry ?? 0}
			/>
		</Card>
	)
}