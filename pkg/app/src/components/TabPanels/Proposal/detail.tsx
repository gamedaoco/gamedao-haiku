import React, { useCallback, useEffect, useState } from 'react'

import { ArrowBack, HowToVote, Launch } from '@mui/icons-material'
import { Box, Button, Chip, IconButton, LinearProgress, Paper, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useSimpleVoteTransaction } from 'hooks/tx/useSimpleVoteTransaction'
import { useDisplayValues } from 'hooks/useDisplayValues'
import { useTranslation } from 'react-i18next'
import { Organization } from 'src/queries'

import { RadioItem } from 'components/Forms/modules/radioItem'
import { ProposalStatusChip } from 'components/ProposalStatusChip/ProposalStatusChip'
import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

interface ComponentProps {
	organization: Organization
	proposalId: string
	goBack: () => void
}

const proposalData = {
	id: '0xabc',
	creator: '0xabcdefghijklmnopqrstuvwxyz',

	status: 1,
	type: 0,
	votingType: 0,

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

export function ProposalDetail({ proposalId, goBack }: ComponentProps) {
	const displayValues = useDisplayValues()
	const { t } = useTranslation()
	const [proposal, setProposal] = useState(proposalData)
	const [proposalTypeName, setProposalTypeName] = useState(null)
	const [proposalVotingTypeName, setProposalVotingTypeName] = useState(null)

	const [yesPercentage, setYesPercentage] = useState(0)
	const [noPercentage, setNoPercentage] = useState(0)

	const [pageSize, setPageSize] = useState<number>(10)
	const [voterRows, setVoterRows] = useState([])

	const [selectedVote, setSelectedVote] = useState<number>(null)
	const [openTxModal, setOpenTxModal] = useState<boolean>(false)
	const simpleVoteTx = useSimpleVoteTransaction(proposalId, selectedVote)

	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('lg'))

	const handleOpenTxModal = useCallback(() => {
		setOpenTxModal(true)
	}, [setOpenTxModal])
	const handleCloseTxModal = useCallback(() => {
		setOpenTxModal(false)
	}, [setOpenTxModal])

	useEffect(() => {
		if (!proposal) return

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

	useEffect(() => {
		if (!proposal) return

		const typeName = displayValues?.proposalTypes.find((pt) => pt.value === proposal!.type)?.text
		if (typeName) {
			setProposalTypeName(`${typeName} Proposal`)
		}

		const votingTypeName = displayValues?.votingTypes.find((pt) => pt.value === proposal!.votingType)?.text ?? ''
		if (votingTypeName) {
			setProposalVotingTypeName(votingTypeName)
		}
	}, [displayValues, proposal])

	return (
		proposal && (
			<Stack direction="row" flexWrap="wrap" gap={3}>
				{/* Metadata */}
				<Stack component={Paper} flexBasis={{ xs: '100%', lg: '70%' }} padding={4} spacing={2}>
					<Stack direction="row" spacing={1} alignItems="center">
						<IconButton onClick={goBack}>
							<ArrowBack />
						</IconButton>
						<Typography variant="h6">Proposal {proposalId}</Typography>
					</Stack>

					<Stack paddingTop={2} paddingLeft={4} paddingRight={4} spacing={2} gap={2}>
						<Stack direction="row" justifyContent="space-between">
							<Stack direction="row" flexWrap="wrap" spacing={{ xs: 0, lg: 3 }} gap={2}>
								<ProposalStatusChip status={proposal.status} />
								<Stack direction="row" alignItems="center" spacing={1}>
									<HowToVote fontSize="large" />
									<Typography sx={{ wordBreak: 'break-all' }} variant="body1">
										by
										{` ${proposal.creator.substring(0, 20)}...${proposal.creator.substring(
											proposal.creator.length - 3,
										)}`}
									</Typography>
								</Stack>
							</Stack>

							{matches && <Chip color="secondary" label={proposalTypeName} variant="outlined" />}
						</Stack>
						<Typography variant="body1">{proposal.metadata.description}</Typography>
						<Button sx={{ alignSelf: 'center' }} size="large" variant="outlined">
							Show more
						</Button>
					</Stack>
				</Stack>

				{/* Metadata right side */}
				<Stack spacing={2} flex={1}>
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

				{/* Cast vote */}
				<Stack component={Paper} flexBasis={{ xs: '100%', lg: '70%' }} padding={4} spacing={2}>
					<Stack direction="row" justifyContent="space-between">
						<Typography variant="h6">Cast your vote</Typography>
					</Stack>
					<Stack paddingLeft={4} paddingRight={4} spacing={4}>
						<RadioItem title={'Yes'} value={1} selectedValue={selectedVote} onChange={setSelectedVote} />
						<RadioItem title={'No'} value={0} selectedValue={selectedVote} onChange={setSelectedVote} />
						<Button
							fullWidth={true}
							variant="contained"
							disabled={!simpleVoteTx}
							onClick={handleOpenTxModal}
						>
							Vote
						</Button>
					</Stack>
				</Stack>

				{/* Voter list */}
				<Stack component={Paper} flexBasis={{ xs: '100%', lg: '70%' }} padding={4} spacing={2} gap={2}>
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
				<TransactionDialog
					open={openTxModal}
					onClose={handleCloseTxModal}
					tx={simpleVoteTx}
					txMsg={{
						pending: t('notification:transactions:simpleVote:pending'),
						success: t('notification:transactions:simpleVote:success'),
						error: t('notification:transactions:simpleVote:error'),
					}}
					txCallback={handleCloseTxModal}
				/>
			</Stack>
		)
	)
}
