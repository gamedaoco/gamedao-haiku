import React, { useCallback, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { Add as AddIcon, HowToVote } from '@mui/icons-material'
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useProposalFeatures } from 'hooks/featureToggle/useProposalFeatures'
import { useBlockNumber } from 'hooks/useBlockNumber'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { Proposal, useProposalsByOrganizationIdSubscription } from 'src/queries'

import { ProposalStatusChip } from 'components/ProposalStatusChip/ProposalStatusChip'
import { CreateProposal } from 'components/TabPanels/Organization/createProposal'
import { blockTime } from 'src/constants'

interface ComponentProps {
	organizationId: string
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
		field: 'timeLeft',
		headerName: 'Time left',
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

export function ProposalOverview({ organizationId }: ComponentProps) {
	const { push } = useRouter()

	const [showFormState, setShowFormState] = useState<boolean>(false)
	const [pageSize, setPageSize] = useState<number>(10)
	const [rows, setRows] = useState<any[]>([])
	const blockNumber = useBlockNumber()
	const [proposals, setProposals] = useState<Proposal[]>([])
	const { loading, data } = useProposalsByOrganizationIdSubscription({
		variables: { orgId: organizationId },
	})
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
				const expiryBlock = proposal.created_at_block + proposal.expiry_block
				const isExpired = blockNumber && blockNumber > expiryBlock
				let timeLeft = ''

				if (!isExpired) {
					const expiryBlockSeconds = (expiryBlock - blockNumber) * blockTime
					const minutes = Math.trunc((expiryBlockSeconds % 3600) / 60)
					const hours = Math.trunc((expiryBlockSeconds % (3600 * 24)) / 3600)
					const days = Math.trunc(expiryBlockSeconds / (3600 * 24))

					if (days > 0) {
						timeLeft = days + 'd '
					}

					if (days > 0 || hours > 0) {
						timeLeft += hours + 'h '
					}

					if (days > 0 || hours > 0 || minutes > 0) {
						timeLeft += minutes + 'm '
					}

					if (timeLeft === '') {
						timeLeft = '1m'
					}
				} else {
					timeLeft = 'Expired'
				}

				return {
					id: proposal.id,
					name: proposal.proposal_metadata?.name ?? '',
					description: proposal.proposal_metadata?.description ?? '',
					status: proposal.state,
					timeLeft,
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
				{address && enabledFeatures.CREATE_PROPOSAL && (
					<Button variant="outlined" onClick={handleCreateButtonClick}>
						<AddIcon /> Create Proposal
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
