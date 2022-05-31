import { BaseForm } from 'components/Forms/baseForm'
import { RadioItem } from 'components/Forms/modules/radioItem'
import { Person } from '@mui/icons-material'
import { Box, Checkbox, Divider, FormControlLabel, Stack, TextField, Typography } from '@mui/material'
import { useCallback } from 'react'
import * as Yup from 'yup'
import { createWarningNotification } from 'src/utils/notificationUtils'
import { useTranslation } from 'react-i18next'

const validationFeeSchema = Yup.number()
	.min(1, 'notification:warning:min_1_game_fee')
	.max(1000000, 'notification:warning:max_1m_game_fee')

const validationMemberLimitSchema = Yup.number().max(1000000, 'notification:warning:max_1m_member_limit')

interface ComponentProps {
	selectedMode: number
	setSelectedMode: (number) => void
	selectedFee: number
	setSelectedFee: (number) => void
	memberLimit: number
	setMemberLimit: (number) => void
	hasWhitelist: boolean
	setHasWhitelist: (boolean) => void
	hasApplication: boolean
	setHasApplication: (boolean) => void
	feeAmount: number
	setFeeAmount: (number) => void
}

export function Settings({
	selectedMode,
	setSelectedMode,
	selectedFee,
	setSelectedFee,
	memberLimit,
	setMemberLimit,
	hasWhitelist,
	setHasWhitelist,
	hasApplication,
	setHasApplication,
	feeAmount,
	setFeeAmount,
}: ComponentProps) {
	const { t } = useTranslation()
	const handleMemberLimitChange = useCallback(
		(event) => {
			const value = event.target.value
			if (!value) {
				return
			}
			try {
				validationMemberLimitSchema?.validateSync(value)
				if (setMemberLimit) {
					setMemberLimit(value < 0 ? 0 : value)
				}
			} catch (e) {
				createWarningNotification(t(e.message))
			}
		},
		[setMemberLimit, validationMemberLimitSchema, t],
	)

	const handleFeeAmountChange = useCallback(
		(event) => {
			const value = event.target.value
			if (!value) {
				return
			}
			try {
				validationFeeSchema?.validateSync(value)
				if (setFeeAmount) {
					setFeeAmount(value < 0 ? 0 : value)
				}
			} catch (e) {
				createWarningNotification(t(e.message))
			}
		},
		[setFeeAmount, validationFeeSchema, t],
	)

	const handleWhitelistChange = useCallback(
		(event) => {
			if (setHasWhitelist) {
				setHasWhitelist(event.target.checked)
			}
		},
		[setHasWhitelist],
	)

	const handleApplicationChange = useCallback(
		(event) => {
			if (setHasApplication) {
				setHasApplication(event.target.checked)
			}
		},
		[setHasApplication],
	)

	return (
		<BaseForm title={'Is your organization open for all or closed?'}>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={'Open'}
				description={'Anyone can join the organization.'}
				value={0}
				selectedValue={selectedMode}
				onChange={setSelectedMode}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={'Private'}
				description={'Whitelisted and/or applicants can join the organization.'}
				value={1}
				selectedValue={selectedMode}
				onChange={setSelectedMode}
			/>

			{selectedMode === 1 && (
				<Box sx={{ width: '100%' }}>
					<FormControlLabel
						sx={{ display: 'block' }}
						control={<Checkbox checked={hasWhitelist} onChange={handleWhitelistChange} />}
						label="Whitelist (Members can be added later)"
					/>
					<FormControlLabel
						sx={{ display: 'block' }}
						control={<Checkbox checked={hasApplication} onChange={handleApplicationChange} />}
						label="Application"
					/>
				</Box>
			)}

			<Divider variant="fullWidth" sx={{ display: 'block', width: '100%', borderStyle: 'dashed' }} />
			<Typography variant="h5" textAlign="center">
				{'Will your organization collect a fee for members to join?'}
			</Typography>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={'No Fee'}
				description={'Members can join the organization without a fee'}
				value={0}
				selectedValue={selectedFee}
				onChange={setSelectedFee}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={'Fee'}
				description={'When members join the organization they pay a fee'}
				value={1}
				selectedValue={selectedFee}
				onChange={setSelectedFee}
			/>

			{selectedFee === 1 && (
				<TextField
					fullWidth
					type="number"
					onChange={handleFeeAmountChange}
					value={feeAmount}
					label="Fee amount"
					variant="outlined"
				/>
			)}

			<Divider variant="fullWidth" sx={{ display: 'block', width: '100%', borderStyle: 'dashed' }} />

			<Stack>
				<Typography variant="h5" textAlign="center">
					{'How many members can join the organization?'}
				</Typography>
				<Typography variant="body2" fontStyle="italic" textAlign="center">
					{'Leave 0 if the limit is unlimited'}
				</Typography>
			</Stack>

			<TextField
				fullWidth
				type="number"
				onChange={handleMemberLimitChange}
				value={memberLimit}
				label="Member limit"
				variant="outlined"
			/>
		</BaseForm>
	)
}
