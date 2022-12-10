import React, { useCallback, useEffect, useState } from 'react'
import { ContentTabs } from 'constants/battlepass'

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

import { Header } from './Header'
import { Navigation } from './Navigation'
import { Overview } from './components/Overview'
import { BattlePass } from './components/BattlePass/'
import { Governance } from './components/Governance'
import { Members } from './components/Members'
import { Settings } from './components/Settings'

interface Props {
	id: string | string[]
	path: ContentTabs
	name?: string
}

export const Org = ({ id, name, path }: Props) => {
	const { query, push } = useRouter()
	const config = useConfig()
	const theme = useTheme()
	const { t } = useTranslation()

	const [org, setOrg] = useState<Organization>(null)
	const { loading, data, error } = useOrganizationByIdSubscription({
		variables: { orgId: id as string },
	})
	useEffect(() => {
		if (!data?.organization) return
		setOrg(data.organization?.[0] as Organization)
	}, [data])

	return (
		<Stack spacing={4}>
			<Paper
				variant={'glass'}
				sx={{
					background: '#111111ee',
					backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), #000000aa)`,
				}}
			>
				<Header id={id} />
				<Navigation id={id} path={path} org={org} />
			</Paper>
			<TabContext value={path}>
				<TabPanel value="overview">
					<Overview id={id} />
				</TabPanel>
				<TabPanel value="battlepass">
					<BattlePass id={id} />
				</TabPanel>
				<TabPanel value="governance">
					<Governance args={{ id: id, pid: null, organization: org }} />
				</TabPanel>
				<TabPanel value="members">
					<Members args={{ organization: org }} />
				</TabPanel>
				<TabPanel value="settings">
					<Settings />
				</TabPanel>
			</TabContext>
		</Stack>
	)
}

export default Org
