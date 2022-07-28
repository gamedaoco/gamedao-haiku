import React, { useCallback, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { Add as AddIcon, HowToVote } from '@mui/icons-material'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useProposalFeatures } from 'hooks/featureToggle/useProposalFeatures'
import { useBlockNumber } from 'hooks/useBlockNumber'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTranslation } from 'react-i18next'
import { Proposal, useProposalsByOrganizationIdSubscription } from 'src/queries'
import { getTimeFromBlock } from 'src/utils/campaignUtils'

import { ProposalStatusChip } from 'components/ProposalStatusChip/ProposalStatusChip'
import { CreateProposal } from 'components/TabPanels/Organization/createProposal'

interface ComponentProps {
	organizationId: string
	isMember: boolean
}

const defaultGridColDef = {
	minWidth: 140,
	editable: false,
	sortable: true,
	filterable: false,
	disableColumnMenu: true,
}

const columns: GridColDef[] = [
	{
		...defaultGridColDef,
		field: 'name',
		headerName: 'Name',
		flex: 1,
		renderCell: (params) => {
			return (
				<Box display="flex" justifyContent="center" alignItems="center" gap={1}>
					<HowToVote fontSize="large" />
					<Stack>
						<Typography variant="subtitle2">{params.row.name}</Typography>
						<Typography variant="body2">{params.row.description}</Typography>
					</Stack>
				</Box>
			)
		},
	},
	{
		...defaultGridColDef,
		minWidth: defaultGridColDef.minWidth + 30,
		field: 'timeLeft',
		headerName: 'Time left',
		renderCell: (params) => {
			return (
				<Typography variant="body2">
					{!params.row.hasStarted ? 'Starts in ' : ''} {params.row.timeLeft}
				</Typography>
			)
		},
	},
	{
		...defaultGridColDef,
		field: 'status',
		headerName: 'Status',
		renderCell: (params) => {
			return <ProposalStatusChip status={params.row.status} />
		},
	},
]

const pageSizeOptions = [5, 10, 20, 30]
const rowHeight = 80

export function ProposalOverview({ organizationId, isMember }: ComponentProps) {
	const { push } = useRouter()

	const [showFormState, setShowFormState] = useState<boolean>(false)
	const [pageSize, setPageSize] = useState<number>(10)
	const [rows, setRows] = useState<any[]>([])
	const blockNumber = useBlockNumber()
	const [proposals, setProposals] = useState<Proposal[]>([])
	const { loading, data } = useProposalsByOrganizationIdSubscription({
		variables: { orgId: organizationId },
	})
	const { t } = useTranslation()
	const enabledFeatures = useProposalFeatures()
	const address = useCurrentAccountAddress()

	useEffect(() => {
		if (!loading && data) {
			setProposals(data.proposal as Proposal[])
		} else {
			setProposals([])
		}
	}, [organizationId, loading, data])

	useEffect(() => {
		if (!blockNumber) return

		setRows(
			proposals.map((proposal) => {
				const expiryBlock = proposal.expiry_block
				const startBlock = proposal.start_block
				const hasStarted = blockNumber && blockNumber > startBlock
				const hasExpired = blockNumber && blockNumber > expiryBlock
				let timeLeft = ''

				if (!hasStarted) {
					timeLeft = getTimeFromBlock(blockNumber, startBlock)
				} else if (!hasExpired) {
					timeLeft = getTimeFromBlock(blockNumber, expiryBlock)
				} else {
					timeLeft = 'Expired'
				}

				return {
					id: proposal.id,
					name: proposal.proposal_metadata?.name ?? '',
					description: proposal.proposal_metadata?.description ?? '',
					status: proposal.state,
					timeLeft,
					hasStarted,
				}
			}),
		)
	}, [proposals, blockNumber])

	const handleCreateButtonClick = useCallback(() => {
		setShowFormState(true)
	}, [setShowFormState])

	const handleCloseForm = useCallback(() => {
		setShowFormState(false)
	}, [setShowFormState])

	if (showFormState) {
		return <CreateProposal organizationId={organizationId} handleCloseForm={handleCloseForm} />
	}

	return (
		<Stack component={Paper} padding={4} spacing={2}>
			<Stack direction="row" spacing={1} justifyContent="space-between">
				<Typography variant="h6">Proposals</Typography>
				{address && enabledFeatures.CREATE_PROPOSAL && isMember && (
					<Button variant="outlined" onClick={handleCreateButtonClick}>
						<AddIcon /> {t('button:ui:create_proposal')}
					</Button>
				)}
			</Stack>
			<Box sx={{ height: 550 }}>
				<DataGrid
					loading={loading || !data}
					rows={rows}
					columns={columns}
					pageSize={pageSize}
					rowsPerPageOptions={pageSizeOptions}
					isCellEditable={() => false}
					hideFooterSelectedRowCount={true}
					getRowHeight={() => {
						return rowHeight
					}}
					onPageSizeChange={(pageSize) => {
						setPageSize(pageSize)
					}}
					onRowClick={({ row: { id } }) => {
						push(`/organisations/${organizationId}/proposals/${id}`)
					}}
				/>
			</Box>
		</Stack>
	)
}
