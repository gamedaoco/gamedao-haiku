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
	const { t } = useTranslation()

	const [routeState, setRouteState] = useState<string>(null)
	const [activeStep, setActiveStep] = useState<string>('dashboard')

	const [organizationIdState, setOrganizationIdState] = useState<string>(null)
	const [proposalIdState, setProposalIdState] = useState<string>(null)
	const [organizationState, setOrganizationState] = useState<Organization>()
	const [isMemberState, setIsMemberState] = useState<boolean>(false)

	const { loading, data, error } = useOrganizationByIdSubscription({
		variables: { orgId: organizationIdState },
	})

	const [showTxModalType, setShowTxModalType] = useState<boolean>(false)

	const addMemberTx = useAddMemberTransaction(organizationIdState)
	const address = useCurrentAccountAddress()
	const cache = useTmpOrganisationState()

	const handleOpenTxModal = useCallback(() => {
		setShowTxModalType(true)
	}, [setShowTxModalType])
	const handleCloseTxModal = useCallback(() => {
		setShowTxModalType(false)
	}, [setShowTxModalType])

	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	const handleInvalidUrl = useCallback(() => {
		push('/')
	}, [push])

	const handleTabSelect = useCallback(
		(newPath) => {
			if (organizationIdState) {
				push(`${organizationIdState}/${newPath}`)
			} else {
				push(newPath)
			}

			// Reset proposal id when click on tab
			setProposalIdState(null)
		},
		[organizationIdState, push],
	)
	const handleUploadImage = useCallback(async (event, setter) => {
		const files = event.target.files
		if (!files || files.length === 0) {
			return createWarningNotification('No file selected')
		}

		const cid = await uploadFileToIpfs(files[0])
		setter(cid.toString())
	}, [])

	// Query and route mapping
	useEffect(() => {
		const param = query?.param
		if (param && Array.isArray(param)) {
			if (param.length == 1) {
				setRouteState(param[0])
			} else if (param.length >= 2) {
				if (!param[0].startsWith('0x')) {
					handleInvalidUrl()
				}
				setOrganizationIdState(param[0])
				setRouteState(param[1])

				if (param.length >= 3) {
					if (!param[2].startsWith('0x')) {
						handleInvalidUrl()
					}
					setProposalIdState(param[2])
				}
			}
		}
	}, [query, handleInvalidUrl])

	useEffect(() => {
		if (routeState) {
			setActiveStep(routeState)
		}
	}, [routeState])

	// Update and upload metadata
	useEffect(() => {
		if (cache.name && cache.description && cache.logoCID && cache.headerCID) {
			const metaData = {
				name: cache.name,
				description: cache.description,
				logo: cache.logoCID,
				header: cache.headerCID,
			}
			;(async (): Promise<string> => {
				const file = new File([JSON.stringify(metaData)], `${cache.name}-metadata.json`, {
					type: 'text/plain',
				})

				const cid = await uploadFileToIpfs(file)
				return cid.toString()
			})().then((cid) => cache.setMetaDataCID(cid))
		}
	}, [cache, cache.name, cache.description, cache.logoCID, cache.headerCID])

	useEffect(() => {
		if (data) {
			!data.organization?.[0] ? handleInvalidUrl() : setOrganizationState(data.organization?.[0] as Organization)
		}
	}, [data, handleInvalidUrl])

	useEffect(() => {
		if (address && organizationState) {
			setIsMemberState(organizationState.organization_members.some((member) => member.address === address))
		}
	}, [organizationState, address])

	if (error) console.log('==== Error ====>\n', error)

	return (
		<TabPanel value={'dashboard'}>
			{organizationIdState ? (
				<Overview
					organization={organizationState}
					organizationId={organizationIdState}
					isMember={isMemberState}
					isAdmin={address === organizationState?.creator}
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
