import React, { SyntheticEvent, useCallback, useEffect, useMemo, useState } from 'react'

import { useRouter } from 'next/router'

import { ArrowBack } from '@mui/icons-material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Button, Paper, Tab, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useSystemProperties } from 'hooks/useSystemProperties'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'src/components'
import { Layout } from 'src/components/Layouts/default/layout'
import { useCampaignByIdSubscription } from 'src/queries'
import { parseIpfsHash } from 'src/utils/ipfs'

import { CampaignDetailsContent } from 'components/CampaignsSection/campaignDetailsContent'

export function CampaignById() {
	const { t } = useTranslation()
	const theme = useTheme()
	const systemProperties = useSystemProperties()
	const config = useConfig()
	const { query } = useRouter()
	const { back } = useRouter()
	const [value, setValue] = useState<string>('overview')
	const [campaignId, setCampaignId] = useState<string>(null)
	const { data } = useCampaignByIdSubscription({
		variables: { campaignId: campaignId },
	})
	const address = useCurrentAccountAddress()
	const currencyId = useMemo(
		() => systemProperties?.tokenSymbol?.indexOf(data?.campaign?.[0]?.token_symbol) ?? 0,
		[systemProperties, data?.campaign?.[0]?.token_symbol],
	)

	const handleChange = useCallback(
		(event: SyntheticEvent, newValue: string) => {
			setValue(newValue)
		},
		[value],
	)

	const handleClick = useCallback(() => {
		back()
	}, [back])

	useEffect(() => {
		const id = query?.id?.toString()
		if (id) {
			setCampaignId(id)
		}
	}, [query])

	return (
		<Layout showHeader showFooter showSidebar title="Campaigns">
			<NavLink href="/campaigns">
				<Button variant="secondary" sx={{ mt: '5rem', ml: '1rem' }} onClick={handleClick}>
					<ArrowBack sx={{ mr: '1rem' }} />
					{t('button:ui:back_to_all_campaigns')}
				</Button>
			</NavLink>
			<Box sx={{ p: '2rem' }}>
				<CampaignDetailsContent
					title={data?.campaign?.[0]?.campaign_metadata?.name}
					header={parseIpfsHash(data?.campaign[0]?.campaign_metadata?.header, config.IPFS_GATEWAY)}
					description={data?.campaign?.[0]?.campaign_metadata?.description}
					backers={data?.campaign?.[0]?.campaign_contributors_aggregate?.aggregate?.count ?? 0}
					target={data?.campaign?.[0]?.target}
					contributed={
						data?.campaign?.[0]?.campaign_contributors_aggregate?.aggregate?.sum?.contributed ?? '0'
					}
					currencyId={currencyId}
					expiry={data?.campaign?.[0]?.expiry}
					protocol={data?.campaign?.[0]?.protocol}
					isAdmin={address === data?.campaign?.[0]?.organization?.controller}
				/>
			</Box>
			<Box sx={{ px: '2rem', pb: '4rem', pt: 0 }}>
				<Paper sx={{ pt: 0, height: '100%' }}>
					<TabContext value={value}>
						<Paper
							variant="secondary"
							sx={{
								width: '100%',
							}}
						>
							<TabList
								onChange={handleChange}
								aria-label="lab API tabs example"
								sx={{ px: '1rem', borderBottomRightRadius: 0 }}
							>
								<Tab label="Overview" value="overview" />
							</TabList>
						</Paper>
						<TabPanel value="overview">
							<Box p="1rem" pb="2rem">
								<Typography variant="overline" color={theme.palette.common.white}>
									{t('campaign_details:overview')}
								</Typography>
								<Typography variant="body1" mt="1rem">
									{data?.campaign?.[0]?.campaign_metadata?.markdown}
								</Typography>
							</Box>
						</TabPanel>
					</TabContext>
				</Paper>
			</Box>
		</Layout>
	)
}

export default CampaignById
