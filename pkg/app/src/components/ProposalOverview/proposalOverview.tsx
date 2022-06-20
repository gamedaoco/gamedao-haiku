import React, { useCallback, useState } from 'react'

import { Add as AddIcon, HowToVote } from '@mui/icons-material'
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useProposalFeatures } from 'hooks/featureToggle/useProposalFeatures'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import { CreateProposal } from 'components/TabPanels/Organization/createProposal'

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
			switch (params.row.status) {
				case 0:
					return <Chip color="secondary" label="Init" variant="outlined" />
				case 1:
					return <Chip color="secondary" label="Active" />
				case 2:
					return <Chip color="success" label="Accepted" variant="outlined" />
				case 3:
					return <Chip color="error" label="Rejected" variant="outlined" />
				case 4:
					return <Chip label="Expired" variant="outlined" />
				case 5:
					return <Chip color="warning" label="Aborted" variant="outlined" />
				case 6:
					return <Chip label="Finalized" />
			}

			return <Chip color="error" label="Unknown status" />
		},
	},
]

const rows = [
	{
		id: '0xabc',
		name: 'Make pancakes great again',
		description: 'Pancakes loses their quality! We need to improve it again.',
		timeLeft: 'Waiting',
		status: 0,
	},
	{
		id: '0xbcd',
		name: 'GameDAO for president',
		description: 'GameDAO should be the president of the world...?',
		timeLeft: '2:35 h',
		status: 1,
	},
	{
		id: '0xcde',
		name: 'Speed up IPFS',
		description: 'The IPFS file-server is slow. Can we speed it up?',
		timeLeft: 'Expired',
		status: 2,
	},
	{
		id: '0xdef',
		name: 'Add more validators',
		description: 'We need more validators for the ZERO-Network.',
		timeLeft: 'Expired',
		status: 3,
	},
	{
		id: '0xefg',
		name: 'GameDAO Goodies',
		description: 'We need some cool goodies like T-Shirts, caps, ...',
		timeLeft: 'Expired',
		status: 4,
	},
	{
		id: '0xfgh',
		name: 'Self-Hosted Block Explorer',
		description: 'The ZERO-Network should have an self-hosted Block Explorer.',
		timeLeft: 'Expired',
		status: 5,
	},
	{
		id: '0xghi',
		name: 'Hire more developers',
		description: 'The development is too slow. We need more developers.',
		timeLeft: 'Expired',
		status: 6,
	},
	{
		id: '0xhij',
		name: 'More transparency around development',
		description: "The planning is not transparent enough for the community. Let's work on that!",
		timeLeft: '???',
		status: 7,
	},
	{
		id: '0xijk',
		name: 'More public nodes',
		description: "Currently we have X nodes, let's encourage people to start nodes.",
		timeLeft: '9:11 h',
		status: 1,
	},
	{
		id: '0xjkl',
		name: 'Something is wrong',
		description: "Oups... Something went wrong :). That's what they say at least.",
		timeLeft: 'Expired',
		status: 2,
	},
	{
		id: '0xklm',
		name: 'IRL meetup',
		description: "Let's organize an IRL meetup with the team and community!",
		timeLeft: '0:35 min',
		status: 1,
	},
]

const pageSizeOptions = [5, 10, 20, 30]
const rowHeight = 80

export function ProposalOverview({ organizationId }: ComponentProps) {
	const [showFormState, setShowFormState] = useState<boolean>(false)
	const [pageSize, setPageSize] = useState<number>(10)
	const enabledFeatures = useProposalFeatures()
	const address = useCurrentAccountAddress()

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
					onRowClick={(data) => {
						console.log(data.row)
					}}
				/>
			</Box>
		</Stack>
	)
}
