import React, { useCallback, useEffect, useState } from 'react'
import { BattlepassViews } from 'src/constants/battlepass'

import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { useConfig } from 'src/hooks/useConfig'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useAddMemberTransaction } from 'src/hooks/tx/useAddMemberTransaction'

import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notificationUtils'

import { Organization, useOrganizationByIdSubscription } from '@gamedao/graph'

import { useTheme } from '@mui/material/styles'
import { TabContext, TabPanel } from '@mui/lab'
import { Container, Paper, Stack, Box } from '@mui/material'

// TODO: move component level up
import { Header } from './components/Header'

import { DashboardView } from './components/DashboardView'
import { LeaderboardView } from './components/LeaderboardView'
import { AdminView } from './components/AdminView'

type TArgs = {
	id: string
	orgId?: string
	view?: BattlepassViews
}
type TProps = {
	args: TArgs
}

export const Battlepass = ({ args }: TProps) => {
	const { id, orgId, view } = args

	return (
		<Stack spacing={4}>
			<Paper
				variant={'glass'}
				sx={{
					background: '#111111ee',
					backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), #000000aa)`,
				}}
			>
				<Header id={id} orgId={orgId} view={view} />
			</Paper>
			<Box p={[2, 4]} style={{ width: '100%', minHeight: '100vh' }}>
				<Box component="main" sx={{ flexGrow: 1 }}>
					<Container disableGutters maxWidth="xl" sx={{ border: 0 }}>
						<TabContext value={view}>
							<TabPanel value="dashboard">
								<DashboardView id={id} />
							</TabPanel>
							<TabPanel value="leaderboard">
								<LeaderboardView id={id} />
							</TabPanel>
							<TabPanel value="admin">
								<AdminView id={id} />
							</TabPanel>
						</TabContext>
					</Container>
				</Box>
			</Box>
		</Stack>
	)
}
