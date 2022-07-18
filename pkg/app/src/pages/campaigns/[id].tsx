import React, { SyntheticEvent, useCallback, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { ArrowBack } from '@mui/icons-material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Divider,
	LinearProgress,
	Paper,
	Stack,
	Tab,
	Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { NavLink } from 'src/components'
import { Layout } from 'src/components/Layouts/default/layout'
import { useCampaignByIdSubscription } from 'src/queries'

import { CampaignDetailsOverview } from 'components/TabPanels/CampaignDetails/overview'

export function CampaignById() {
	const theme = useTheme()
	const { query } = useRouter()
	const [value, setValue] = useState<string>('overview')
	const [campaignId, setCampaignId] = useState<string>(null)
	const { data, loading } = useCampaignByIdSubscription(campaignId)

	const handleChange = useCallback(
		(event: SyntheticEvent, newValue: string) => {
			setValue(newValue)
		},
		[value],
	)

	useEffect(() => {
		const id = query?.id
		if (id) {
			// @ts-ignore
			setCampaignId(id)
		}
	})

	return (
		<Layout showHeader showFooter showSidebar title="Campaigns">
			<NavLink href="/campaigns">
				<Button variant="secondary" sx={{ mt: '5rem', ml: '1rem' }}>
					<ArrowBack sx={{ mr: '1rem' }} />
					Back to all Campaigns
				</Button>
			</NavLink>
			<Box sx={{ p: '2rem', minHeight: '45vh' }}>
				<Card sx={{ p: { sm: '1rem' }, height: '100%' }}>
					<Stack direction={{ xs: 'column', sm: 'row' }} height="100%" alignItems="stretch">
						<Box height="30vh" sx={{ width: { xs: '100%', sm: '50%' }, height: '100%' }}>
							<CardMedia
								component="img"
								src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
								alt="logo"
							/>
						</Box>
						<CardContent sx={{ pt: '0.5rem', width: { xs: '100%', sm: '50%' } }}>
							<Typography variant="h4">Campaign title Campaign title Campaign</Typography>
							<Typography pt="2rem" variant="body2" color={theme.palette.common.white}>
								Describe in a few words what your campaign is about. This will be shown as a preview on
								the campaign page.Describe in a few words what your campaign is about. This will be
								shown as a preview on the campaign page.
							</Typography>
							<Stack
								direction="row"
								divider={<Divider orientation="vertical" flexItem />}
								pt="2rem"
								justifyContent="space-between"
							>
								<Stack direction="column" justifyContent="center" alignItems="center">
									<Typography variant="overline">TIME LEFT</Typography>
									<Typography variant="body1">25</Typography>
								</Stack>
								<Stack direction="column" justifyContent="center" alignItems="center">
									<Typography variant="overline">BACKERS</Typography>
									<Typography variant="body1">1354</Typography>
								</Stack>
								<Stack direction="column" justifyContent="center" alignItems="center">
									<Typography variant="overline">PROTOCOL</Typography>
									<Typography variant="body1">Grant</Typography>
								</Stack>
								<Stack direction="column" justifyContent="center" alignItems="center">
									<Typography variant="overline">CATEGORY</Typography>
									<Typography variant="body1">Gaming</Typography>
								</Stack>
							</Stack>

							<Stack direction="row" justifyContent="space-between" pt="2rem">
								<Stack direction="column">
									<Typography variant="overline">Raised</Typography>
									<Box>
										<Typography display="inline-block" variant="body1">
											347{' '}
										</Typography>
										<Typography display="inline-block" variant="body1">
											aUSD
										</Typography>
									</Box>
								</Stack>
								<Stack direction="column" justifyContent="flex-end">
									<Typography variant="body2">18%</Typography>
								</Stack>
								<Stack direction="column" alignItems="flex-end">
									<Typography variant="overline">Target</Typography>
									<Typography variant="body1">3000 aUSD</Typography>
								</Stack>
							</Stack>
							<LinearProgress variant="determinate" color="inherit" value={50} />
							<Stack direction="column" mt="2rem">
								<Button variant="contained" sx={{ width: { xs: '100%', sm: '50%' } }}>
									Contribute now
								</Button>
							</Stack>
						</CardContent>
					</Stack>
				</Card>
			</Box>
			<Box sx={{ px: '2rem', pb: '4rem', minHeight: '70rem' }}>
				<Paper sx={{ p: '1rem', pt: 0, height: '100%' }}>
					<TabContext value={value}>
						<Stack width="100%">
							<TabList onChange={handleChange} aria-label="lab API tabs example">
								<Tab label="Overview" value="overview" />
							</TabList>
						</Stack>
						<TabPanel value="overview">
							<CampaignDetailsOverview />
						</TabPanel>
					</TabContext>
				</Paper>
			</Box>
		</Layout>
	)
}

export default CampaignById
