import React, { useCallback, useEffect, useState } from 'react'
import { BattlepassViews } from 'constants/battlepass'

import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useAddMemberTransaction } from 'hooks/tx/useAddMemberTransaction'

import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notificationUtils'

import { Organization, useOrganizationByIdSubscription } from 'src/queries'

import { useTheme } from '@mui/material/styles'
import { TabContext, TabPanel } from '@mui/lab'
import { Paper, Stack } from '@mui/material'

// TODO: move component level up
import { Header } from './components/Header'

import { DashboardView } from './components/DashboardView'
import { LeaderboardView } from './components/LeaderboardView'

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
			<TabContext value={view}>
				<TabPanel value="dashboard">
					<DashboardView id={id} />
				</TabPanel>
				<TabPanel value="leaderboard">
					<LeaderboardView id={id} />
				</TabPanel>
			</TabContext>
		</Stack>
	)
}
