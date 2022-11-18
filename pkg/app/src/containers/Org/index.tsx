import React, { useCallback, useEffect, useState } from 'react'
import { OrganizationTabs } from 'src/@types/organisation'

import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useAddMemberTransaction } from 'hooks/tx/useAddMemberTransaction'
import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTmpOrganisationState } from 'hooks/useTmpOrganisationState'

import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notificationUtils'

import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'

import { TabContext, TabPanel } from '@mui/lab'
import { Container, Box, Button, CircularProgress, Grid, Paper, Stack, useMediaQuery } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

import { Organization, useOrganizationByIdSubscription } from 'src/queries'

import { Layout } from 'layouts/default'
import { Image } from 'components/Image/image'

interface Props {
	param: OrganizationTabs
}

export const Org = ({ param }: Props) => {
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

	// if (error) console.log('==== Error ====>\n', error)
	// return (!loading && data) || !organizationIdState ? (

	return (
		<Stack spacing={4}>
			<Paper
				variant={'glass'}
				sx={{
					position: 'relative',
					background: '#000000ee',
					backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), #000000aa)`,
				}}
			>
				<Header />
				<Navigation param={param} />
			</Paper>
			<Content param={param} />
		</Stack>
	)
	/*	 : (
		<CircularProgress
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		/>
	)
*/
}

export default Org
