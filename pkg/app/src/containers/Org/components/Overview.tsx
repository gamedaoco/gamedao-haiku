import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useAddMemberTransaction } from 'hooks/tx/useAddMemberTransaction'
import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTmpOrganisationState } from 'hooks/useTmpOrganisationState'

import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notificationUtils'

import { TabContext, TabPanel } from '@mui/lab'
import {
	Container,
	Avatar,
	Box,
	Button,
	CircularProgress,
	Grid,
	Paper,
	Stack,
	Tab,
	Tabs,
	useMediaQuery,
} from '@mui/material'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

import { Organization, useOrganizationByIdSubscription } from 'src/queries'

import { Layout } from 'layouts/default'
import { Image } from 'components/Image/image'
import { CampaignOverview } from 'components/TabPanels/Campaign/overview'
import { TreasuryOverview } from 'components/TabPanels/Treasury/overview'
import { OrganizationMembersTable } from 'components/TabPanels/Organization/organizationMembers'
import { Overview } from 'components/TabPanels/Organization/overview'
import { TmpOverview } from 'components/TabPanels/Organization/tmpOverview'
import { ProposalDetail } from 'components/TabPanels/Proposal/detail'
import { ProposalOverview } from 'components/TabPanels/Proposal/overview'
import { SettingsOverview } from 'components/TabPanels/Settings/overview'

export const Component = () => {
	const { query, push } = useRouter()
	const config = useConfig()
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const { t } = useTranslation()

	const orgId = query.id

	// const [orgId, setOrgId] = useState<string>(null)
	const [org, setOrg] = useState<Organization>()
	const [isMember, setIsMember] = useState<boolean>(false)
	const [addMemberTx, setAddMemberTx] = useState(null)
	const { loading, data, error } = useOrganizationByIdSubscription({
		variables: { orgId: orgId },
	})

	// useEffect(() => {
	// 	setOrgId( query.id )
	// }, [])

	useEffect(() => {
		if (data) {
			!data.organization?.[0] ? push('/org') : setOrg(data.organization?.[0] as Organization)
		}
	}, [data, push])

	// header
	// const addMemberTx = useAddMemberTransaction(orgId)

	const address = useCurrentAccountAddress()
	const cache = useTmpOrganisationState()

	const [showTxModalType, setShowTxModalType] = useState<boolean>(false)

	const handleOpenTxModal = useCallback(() => {
		setShowTxModalType(true)
	}, [setShowTxModalType])

	const handleCloseTxModal = useCallback(() => {
		setShowTxModalType(false)
	}, [setShowTxModalType])

	// header
	// const handleUploadImage = useCallback(async (event, setter) => {
	// 	const files = event.target.files
	// 	if (!files || files.length === 0) {
	// 		return createWarningNotification('No file selected')
	// 	}

	// 	const cid = await uploadFileToIpfs(files[0])
	// 	setter(cid.toString())
	// }, [])

	// useEffect(() => {
	// 	if (cache.name && cache.description && cache.logoCID && cache.headerCID) {
	// 		const metaData = {
	// 			name: cache.name,
	// 			description: cache.description,
	// 			logo: cache.logoCID,
	// 			header: cache.headerCID,
	// 		}
	// 		;(async (): Promise<string> => {
	// 			const file = new File([JSON.stringify(metaData)], `${cache.name}-metadata.json`, {
	// 				type: 'text/plain',
	// 			})

	// 			const cid = await uploadFileToIpfs(file)
	// 			return cid.toString()
	// 		})().then((cid) => cache.setMetaDataCID(cid))
	// 	}
	// }, [cache, cache.name, cache.description, cache.logoCID, cache.headerCID])

	// useEffect(() => {
	// 	if (address && org) {
	// 		setIsMember(org.organization_members.some((member) => member.address === address))
	// 	}
	// }, [org, address])

	// console.log('orgId', orgId)
	// console.log('org', org)
	// console.log('data', data)

	return (
		<TabPanel value={'overview'}>
			{orgId ? (
				<Overview
					organization={org}
					organizationId={orgId}
					isMember={isMember}
					isAdmin={address === org?.creator}
					handleCloseTxModal={handleCloseTxModal}
					handleOpenTxModal={handleOpenTxModal}
					showTxModalType={showTxModalType}
					addMemberTx={addMemberTx}
				/>
			) : (
				<TmpOverview />
			)}
		</TabPanel>
	)
}

export default Component
