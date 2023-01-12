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
import { Battlepass } from './components/battlepass/'

interface Props {
	id: string
	path: ContentTabs
	name?: string
}

export const BattlepassView = ({ id, name, path }: Props) => {
	const { query, push } = useRouter()
	const config = useConfig()
	const theme = useTheme()
	const { t } = useTranslation()

	const [org, setOrg] = useState<Organization>(null)
	const { loading, data, error } = useOrganizationByIdSubscription({
		variables: { orgId: id },
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
				<Navigation id={id} path={path} organization={org} />
			</Paper>
			<TabContext value={path}>
				<TabPanel value="battlepass">
					<Battlepass id={id} />
				</TabPanel>
			</TabContext>
		</Stack>
	)
}

export default BattlepassView
