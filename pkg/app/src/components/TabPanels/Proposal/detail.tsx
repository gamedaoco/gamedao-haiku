import React, { useCallback, useEffect, useState } from 'react'

import { Organization } from '@gamedao-haiku/graphql/dist'
import { Add as AddIcon, ArrowBack, HowToVote, Launch, LinkOff, Twitter } from '@mui/icons-material'
import {
	Badge,
	Box,
	Button,
	Chip,
	FormControl,
	FormControlLabel,
	Grid,
	IconButton,
	LinearProgress,
	Paper,
	Radio,
	RadioGroup,
	Stack,
	Typography,
} from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import { ProposalStatusChip } from 'components/ProposalStatusChip/ProposalStatusChip'

interface ComponentProps {
	organization: Organization
	proposalId: string
	goBack: () => void
}

const proposalData = {
	id: '0xabc',
	creator: '0xabcdefghijklmnopqrstuvwxyz',

	status: 1,
	type: 1,
	votingType: 1,

	block: 700000,
	expiryBlock: 999999,
	metadata: {
		name: 'Test Proposal',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque enim turpis potenti quis. Nec vitae odio leo enim eget volutpat in ullamcorper. Viverra sit vitae egestas duis lorem morbi habitasse nisi, sodales. Vel arcu erat integer convallis ut. Etiam vitae consectetur ac euismod sit iaculis lectus. Amet ipsum justo pharetra tempus vitae risus. Lectus posuere senectus id ut nisl in nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque enim turpis potenti quis. Nec vitae odio leo enim eget volutpat in ullamcorper. Viverra sit vitae egestas duis lorem morbi habitasse nisi, sodales. Vel arcu erat integer convallis ut. Etiam vitae consectetur ac euismod sit iaculis lectus. Amet ipsum justo pharetra tempus vitae risus. Lectus posuere senectus id ut nisl in nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque enim turpis potenti quis. Nec vitae odio leo enim eget volutpat in ullamcorper. Viverra sit vitae egestas duis lorem morbi habitasse nisi, sodales. Vel arcu erat integer convallis ut. Etiam vitae consectetur ac euismod sit iaculis lectus. Amet ipsum justo pharetra tempus vitae risus. Lectus posuere senectus id ut nisl in nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque enim turpis potenti quis. Nec vitae odio leo enim eget volutpat in ullamcorper. Viverra sit vitae egestas duis lorem morbi habitasse nisi, sodales. Vel arcu erat integer convallis ut. Etiam vitae consectetur ac euismod sit iaculis lectus. Amet ipsum justo pharetra tempus vitae risus. Lectus posuere senectus id ut nisl in nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque enim turpis potenti quis. Nec vitae odio leo enim eget volutpat in ullamcorper. Viverra sit vitae egestas duis lorem morbi habitasse nisi, sodales. Vel arcu erat integer convallis ut. Etiam vitae consectetur ac euismod sit iaculis lectus.',
	},
	voters: [
		{
			address: '0xmy_address',
			vote: 0,
		},
		{
			address: '0xmy_other_address',
			vote: 0,
		},
		{
			address: '0xrandom_address',
			vote: 1,
		},
		{
			address: '0xno_address',
			vote: 0,
		},
		{
			address: '0xyes_address',
			vote: 1,
		},
	],
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
		field: 'member',
		headerName: 'Member',
		flex: 1,
		renderCell: (params) => {
			return (
				<Box display="flex" justifyContent="center" alignItems="center" gap={1}>
					<HowToVote fontSize="large" />
					<Typography variant="subtitle2">{` ${params.row.member.substring(
						0,
						20,
					)}...${params.row.member.substring(params.row.member.length - 3)}`}</Typography>
				</Box>
			)
		},
	},
	{
		...defaultGridColDef,
		field: 'vote',
		headerName: 'Vote',
	},
]

const pageSizeOptions = [5, 10, 20, 30]
const rowHeight = 80

function getProposalTypeName(type: number) {
	switch (type) {
		case 0:
			return 'General Proposal'
		case 1:
			return 'Multiple Proposal'
		case 2:
			return 'Member Proposal'
		case 3:
			return 'Withdrawal Proposal'
		case 4:
			return 'Spending Proposal'
	}

	return 'Unknown type'
}

function getProposalVotingTypeName(type: number) {
	switch (type) {
		case 0:
			return 'Simple Majority'
		case 1:
			return 'Token Voting'
		case 2:
			return 'Absolute Majority'
		case 3:
			return 'Quadratic Voting'
		case 4:
			return 'Ranked Voting'
		case 5:
			return 'Convictional Voting'
	}

	return 'Unknown type'
}

export function ProposalDetail({ proposalId, goBack }: ComponentProps) {
	const [proposal, setProposal] = useState(proposalData)
	const [proposalTypeName, setProposalTypeName] = useState(null)
	const [proposalVotingTypeName, setProposalVotingTypeName] = useState(null)

	const [yesPercentage, setYesPercentage] = useState(0)
	const [noPercentage, setNoPercentage] = useState(0)

	const [pageSize, setPageSize] = useState<number>(10)
	const [voterRows, setVoterRows] = useState([])

	useEffect(() => {
		if (!proposal) return

		setProposalTypeName(getProposalTypeName(proposal?.type ?? -1))
		setProposalVotingTypeName(getProposalVotingTypeName(proposal?.votingType ?? -1))

		const yesVotes = proposal.voters.filter((voter) => voter.vote === 1).length
		const noVotes = proposal.voters.filter((voter) => voter.vote === 0).length

		setYesPercentage((yesVotes / proposal.voters.length) * 100)
		setNoPercentage((noVotes / proposal.voters.length) * 100)

		setVoterRows(
			proposal.voters.map((voter) => ({
				id: voter.address,
				member: voter.address,
				vote: voter.vote ? 'Yes' : 'No',
			})),
		)
	}, [proposal])

	return (
		proposal && (
			<Stack direction="row" spacing={3}>
				<Stack gap={3}>
					<Stack component={Paper} padding={4} spacing={2}>
						<Stack direction="row" spacing={1} alignItems="center">
							<IconButton onClick={goBack}>
								<ArrowBack />
							</IconButton>
							<Typography variant="h6">Proposal {proposalId}</Typography>
						</Stack>
						<Stack paddingTop={2} paddingLeft={4} paddingRight={4} spacing={2} gap={2}>
							<Stack direction="row" justifyContent="space-between">
								<Stack direction="row" spacing={3}>
									<ProposalStatusChip status={proposal.status} />
									<Stack direction="row" alignItems="center" spacing={1}>
										<HowToVote fontSize="large" />
										<Typography variant="body1">
											by
											{` ${proposal.creator.substring(0, 20)}...${proposal.creator.substring(
												proposal.creator.length - 3,
											)}`}
										</Typography>
									</Stack>
								</Stack>

								<Chip color="secondary" label={getProposalTypeName(proposal.type)} variant="outlined" />
							</Stack>
							<Typography variant="body1">{proposal.metadata.description}</Typography>
							<Button sx={{ alignSelf: 'center' }} size="large" variant="outlined">
								Show more
							</Button>
						</Stack>
					</Stack>
					<Stack component={Paper} padding={4} spacing={2} gap={2}>
						<Stack direction="row" justifyContent="space-between">
							<Typography variant="h6">Cast your vote</Typography>
						</Stack>
						<Stack paddingLeft={4} paddingRight={4}>
							<form>
								<FormControl fullWidth={true} variant="standard">
									<Stack gap={2}>
										<RadioGroup aria-labelledby="demo-error-radios" name="quiz">
											<FormControlLabel value="best" control={<Radio />} label="Yes" />
											<FormControlLabel value="worst" control={<Radio />} label="No" />
										</RadioGroup>
										<Button fullWidth={true} variant="contained">
											Vote
										</Button>
									</Stack>
								</FormControl>
							</form>
						</Stack>
					</Stack>
					<Stack component={Paper} padding={4} spacing={2} gap={2}>
						<Stack direction="row" spacing={1}>
							<Typography variant="h6">Votes</Typography>
							<Chip size="small" variant="proposalVotes" label={proposal.voters.length} />
						</Stack>
						<Stack paddingLeft={4} paddingRight={4}>
							<Box sx={{ height: 550 }}>
								<DataGrid
									rows={voterRows}
									columns={columns}
									pageSize={pageSize}
									rowsPerPageOptions={pageSizeOptions}
									isCellEditable={() => false}
									hideFooterSelectedRowCount={true}
									disableSelectionOnClick={true}
									getRowHeight={() => {
										return rowHeight
									}}
									onPageSizeChange={(pageSize) => {
										setPageSize(pageSize)
									}}
								/>
							</Box>
						</Stack>
					</Stack>
				</Stack>
				<Stack spacing={2} minWidth={300}>
					<Stack component={Paper} padding={4} spacing={3}>
						<Typography variant="h6">Information</Typography>

						<Box
							sx={{
								display: 'grid',
								gap: 1,
								gridTemplateColumns: 'repeat(2, 1fr)',
							}}
						>
							<Box>
								<Typography variant="body2">Creator</Typography>
							</Box>
							<Box>
								<Typography variant="body2">
									{`${proposal.creator.substring(0, 6)}...${proposal.creator.substring(
										proposal.creator.length - 5,
									)}`}
								</Typography>
							</Box>

							<Box>
								<Typography variant="body2">Start date</Typography>
							</Box>
							<Box>
								<Typography variant="body2">22/02/2022</Typography>
							</Box>

							<Box>
								<Typography variant="body2">End date</Typography>
							</Box>
							<Box>
								<Typography variant="body2">22/02/2022</Typography>
							</Box>

							<Box>
								<Typography variant="body2">Proposal Type</Typography>
							</Box>
							<Box>
								<Typography variant="body2">{proposalTypeName}</Typography>
							</Box>

							<Box>
								<Typography variant="body2">Voting Type</Typography>
							</Box>
							<Box>
								<Typography variant="body2">{proposalVotingTypeName}</Typography>
							</Box>

							<Box>
								<Typography variant="body2">Block number</Typography>
							</Box>
							<Stack direction="row" spacing={1}>
								<Typography variant="body2">{proposal.block.toLocaleString()}</Typography>
								<Launch fontSize="small" />
							</Stack>
						</Box>
					</Stack>
					<Stack component={Paper} padding={4} spacing={3}>
						<Typography variant="h6">Current results</Typography>
						<Stack spacing={1}>
							<Stack direction="row" justifyContent="space-between">
								<Typography variant="body2">Yes</Typography>
								<Typography variant="body2">{yesPercentage}%</Typography>
							</Stack>
							<LinearProgress variant="determinate" value={yesPercentage} />
						</Stack>
						<Stack spacing={1}>
							<Stack direction="row" justifyContent="space-between">
								<Typography variant="body2">No</Typography>
								<Typography variant="body2">{noPercentage}%</Typography>
							</Stack>
							<LinearProgress variant="determinate" value={noPercentage} />
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		)
	)
}
