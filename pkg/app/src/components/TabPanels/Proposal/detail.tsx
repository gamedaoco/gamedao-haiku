import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { useRouter } from 'next/router'

import { ArrowBack, HowToVote, Launch } from '@mui/icons-material'
import {
	Box,
	Button,
	Chip,
	CircularProgress,
	IconButton,
	LinearProgress,
	Paper,
	Stack,
	Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useVoteTransaction } from 'hooks/tx/useVoteTransaction'
import { useBlockNumber } from 'hooks/useBlockNumber'
import { useDisplayValues } from 'hooks/useDisplayValues'
import { useSystemProperties } from 'hooks/useSystemProperties'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'src/components'
import { Organization, useProposalByIdSubscription } from 'src/queries'
import { formatAddressShort } from 'src/utils/address'
import { isProposalActive } from 'src/utils/proposalUtils'

import { RadioItem } from 'components/Forms/modules/radioItem'
import { ProposalStatusChip } from 'components/ProposalStatusChip/ProposalStatusChip'
import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

interface ComponentProps {
	organization: Organization
	proposalId: string
	isMember: boolean
	goBack: () => void
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
			const name = params.row.member ?? formatAddressShort(params.row.id)

			return (
				<Box display="flex" justifyContent="center" alignItems="center" gap={1}>
					<HowToVote fontSize="large" />
					<Typography variant="subtitle2">{name}</Typography>
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

export function ProposalDetail({ proposalId, isMember, goBack }: ComponentProps) {
	const displayValues = useDisplayValues()
	const { t } = useTranslation()
	const systemProperties = useSystemProperties()
	const [proposal, setProposal] = useState(null)
	const [proposalTypeName, setProposalTypeName] = useState(null)
	const [proposalVotingTypeName, setProposalVotingTypeName] = useState(null)
	const { push } = useRouter()

	const [yesPercentage, setYesPercentage] = useState(0)
	const [noPercentage, setNoPercentage] = useState(0)

	const [pageSize, setPageSize] = useState<number>(10)
	const [voterRows, setVoterRows] = useState([])

	const [selectedVote, setSelectedVote] = useState<number>(null)
	const [openTxModal, setOpenTxModal] = useState<boolean>(false)
	const [startDate, setStartDate] = useState<string>('')
	const [endDate, setEndDate] = useState<string>('')
	const [showMore, setShowMore] = useState<boolean>(false)
	const [showButton, setShowButton] = useState<boolean>(false)
	const simpleVoteTx = useVoteTransaction(proposalId, selectedVote)
	const blockNumber = useBlockNumber()
	const isActive = useMemo(
		() => isProposalActive(blockNumber, proposal?.start, proposal?.expiry),
		[blockNumber, proposal?.start, proposal?.expiry],
	)

	const { loading, data } = useProposalByIdSubscription({
		variables: { proposalId },
	})

	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('lg'))

	const handleOpenTxModal = useCallback(() => {
		setOpenTxModal(true)
	}, [setOpenTxModal])
	const handleCloseTxModal = useCallback(() => {
		setOpenTxModal(false)
	}, [setOpenTxModal])
	const handleShowMore = useCallback(() => {
		setShowMore((prev) => !prev)
	}, [setShowMore])

	const buttonContent = useMemo(
		() =>
			showMore
				? proposal?.proposal_metadata?.description ?? ''
				: `${proposal?.proposal_metadata?.description?.slice(0, 700)}` ?? '',
		[proposal?.proposal_metadata?.description, showMore],
	)

	useEffect(() => {
		if (loading) return

		if (!data?.proposal?.[0]) {
			push('/')
		}

		setProposal(data?.proposal?.[0] ?? null)
	}, [loading, data])

	useEffect(() => {
		if (!proposal) return

		const yesVotes = proposal.voting.proposal_voters.filter((voter) => voter.voted === 1).length
		const noVotes = proposal.voting.proposal_voters.filter((voter) => voter.voted === 0).length

		const voteYes = +((yesVotes / Math.max(1, proposal.voting.proposal_voters.length)) * 100).toPrecision(2)
		const voteNo = +((noVotes / Math.max(1, proposal.voting.proposal_voters.length)) * 100).toPrecision(2)

		setYesPercentage(voteYes)
		setNoPercentage(voteNo)

		setVoterRows(
			proposal.voting.proposal_voters.map((voter) => ({
				id: voter.identity.id,
				member: voter.identity.display_name,
				vote: voter.voted ? 'Yes' : 'No',
			})),
		)

		const startDiff = (proposal.start - blockNumber) * (systemProperties?.blockTargetTime ?? 3)
		const endDiff = (proposal.expiry - blockNumber) * (systemProperties?.blockTargetTime ?? 3)

		setStartDate(moment().add(startDiff, 'seconds').format('DD/MM/YYYY hh:mm'))
		setEndDate(moment().add(endDiff, 'seconds').format('DD/MM/YYYY hh:mm'))
	}, [proposal])

	useEffect(() => {
		if (!proposal) return

		const typeName = displayValues?.proposalTypes.find((pt) => pt.value === proposal!.type)?.text
		if (typeName) {
			setProposalTypeName(`${typeName} Proposal`)
		}

		const votingTypeName = displayValues?.votingTypes.find((pt) => pt.value === proposal!.type)?.text ?? ''
		if (votingTypeName) {
			setProposalVotingTypeName(votingTypeName)
		}
	}, [displayValues, proposal])

	useEffect(() => {
		if (proposal?.proposal_metadata?.description?.length > 350) {
			setShowButton(true)
		}
	}, [proposal?.proposal_metadata?.description?.length])

	return !loading && proposal ? (
		<Stack direction="row" flexWrap="wrap" gap={3}>
			{/* Metadata */}
			<Stack component={Paper} flexBasis={{ xs: '100%', lg: '70%' }} padding={4} spacing={2}>
				<Stack direction="row" spacing={1} alignItems="center">
					<IconButton onClick={goBack}>
						<ArrowBack />
					</IconButton>
					<Typography variant="h6">Proposal {proposal.proposal_metadata?.name ?? proposalId}</Typography>
				</Stack>

				<Stack paddingTop={2} paddingLeft={4} paddingRight={4} spacing={2} gap={2}>
					<Stack direction="row" justifyContent="space-between">
						<Stack direction="row" flexWrap="wrap" spacing={{ xs: 0, lg: 3 }} gap={2}>
							<ProposalStatusChip status={proposal.state} />
							<Stack direction="row" alignItems="center" spacing={1}>
								<HowToVote fontSize="large" />
								<Typography sx={{ wordBreak: 'break-all' }} variant="body1">
									{t('label:proposal_by', {
										creator:
											proposal.identity.display_name ?? formatAddressShort(proposal.identity.id),
									})}
								</Typography>
							</Stack>
						</Stack>

						{matches && <Chip color="secondary" label={proposalTypeName} variant="outlined" />}
					</Stack>
					<Typography variant="body1">{buttonContent}</Typography>
					{showButton && (
						<Button sx={{ alignSelf: 'center' }} size="large" variant="outlined" onClick={handleShowMore}>
							{showMore ? `${t('button:ui:show_less')}` : `${t('button:ui:show_more')}`}
						</Button>
					)}
				</Stack>
			</Stack>

			{/* Metadata right side */}
			<Stack spacing={2} flex={1}>
				<Stack component={Paper} padding={4} spacing={3}>
					<Typography variant="h6">{t('label:information')}</Typography>

					<Box
						sx={{
							display: 'grid',
							gap: 1,
							gridTemplateColumns: 'repeat(2, 1fr)',
						}}
					>
						<Box>
							<Typography variant="body2">{t('label:creator')}</Typography>
						</Box>
						<Box>
							<Typography variant="body2">
								{proposal.identity.display_name ?? formatAddressShort(proposal.identity.id, 6)}
							</Typography>
						</Box>

						<Box>
							<Typography variant="body2">{t('label:start_date')}</Typography>
						</Box>
						<Box>
							<Typography variant="body2">{startDate}</Typography>
						</Box>

						<Box>
							<Typography variant="body2">{t('label:end_date')}</Typography>
						</Box>
						<Box>
							<Typography variant="body2">{endDate}</Typography>
						</Box>

						<Box>
							<Typography variant="body2">{t('label:proposal_type')}</Typography>
						</Box>
						<Box>
							<Typography variant="body2">{proposalTypeName}</Typography>
						</Box>

						<Box>
							<Typography variant="body2">{t('label:type')}</Typography>
						</Box>
						<Box>
							<Typography variant="body2">{proposalVotingTypeName}</Typography>
						</Box>

						<Box>
							<Typography variant="body2">{t('label:block_number')}</Typography>
						</Box>
						<NavLink
							href={`https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fbeeblebrox.zero.io%2Fnode#/explorer/query/${proposal.created_at_block}`}
						>
							<Stack direction="row" spacing={1}>
								<Typography variant="body2">{proposal.created_at_block.toLocaleString()}</Typography>
								<Launch fontSize="small" />
							</Stack>
						</NavLink>
					</Box>
				</Stack>
				<Stack component={Paper} padding={4} spacing={3}>
					<Typography variant="h6">{t('label:current_results')}</Typography>
					<Stack spacing={1}>
						<Stack direction="row" justifyContent="space-between">
							<Typography variant="body2">{t('label:yes')}</Typography>
							<Typography variant="body2">{yesPercentage}%</Typography>
						</Stack>
						<LinearProgress variant="determinate" value={yesPercentage} />
					</Stack>
					<Stack spacing={1}>
						<Stack direction="row" justifyContent="space-between">
							<Typography variant="body2">{t('label:no')}</Typography>
							<Typography variant="body2">{noPercentage}%</Typography>
						</Stack>
						<LinearProgress variant="determinate" value={noPercentage} />
					</Stack>
				</Stack>
			</Stack>

			{/* Cast vote */}
			{isActive && isMember && (
				<Stack component={Paper} flexBasis={{ xs: '100%', lg: '70%' }} padding={4} spacing={2}>
					<Stack direction="row" justifyContent="space-between">
						<Typography variant="h6">{t('label:cast_your_vote')}</Typography>
					</Stack>
					<Stack paddingLeft={4} paddingRight={4} spacing={4}>
						<RadioItem
							title={t('label:yes')}
							value={1}
							selectedValue={selectedVote}
							onChange={setSelectedVote}
						/>
						<RadioItem
							title={t('label:no')}
							value={0}
							selectedValue={selectedVote}
							onChange={setSelectedVote}
						/>
						<Button
							fullWidth={true}
							variant="contained"
							disabled={!simpleVoteTx}
							onClick={handleOpenTxModal}
						>
							{t('button:ui:vote')}
						</Button>
					</Stack>
				</Stack>
			)}

			{/* Voter list */}
			<Stack component={Paper} flexBasis={{ xs: '100%', lg: '70%' }} padding={4} spacing={2} gap={2}>
				<Stack direction="row" spacing={1}>
					<Typography variant="h6">{t('label:votes')}</Typography>
					<Chip size="small" variant="proposalVotes" label={proposal.voting.proposal_voters.length} />
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
				txData={simpleVoteTx}
				txCallback={handleCloseTxModal}
			/>
		</Stack>
	) : (
		<CircularProgress
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		/>
	)
}
