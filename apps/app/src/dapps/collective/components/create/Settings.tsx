import { useCallback, useState } from 'react'

import { Person } from '@mui/icons-material'
import { Box, Checkbox, Divider, FormControlLabel, Stack, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { createWarningNotification } from 'src/utils/notification'
import * as Yup from 'yup'

import { BaseForm } from 'components/organisms/forms/baseForm'
import { RadioItem } from 'components/organisms/forms/components/radioItem'

const validationFeeSchema = Yup.number()
	.min(1, 'notification:warning:min_1_game_fee')
	.max(1000000, 'notification:warning:max_1m_game_fee')
	.required()

const validationMemberLimitSchema = Yup.number().max(1000000, 'notification:warning:max_1m_memberLimit').required()

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

	const [memberLimitChangeError, setMemberLimitChangeError] = useState(null)
	const handleMemberLimitChange = useCallback(
		(event) => {
			const value = event.target.value
			try {
				if (setMemberLimit) setMemberLimit(value < 0 ? 0 : value)
				if (!value) return setMemberLimitChangeError(t('label:required'))
				validationMemberLimitSchema?.validateSync(value)
				setMemberLimitChangeError(null)
			} catch (e) {
				setMemberLimitChangeError(t(e.message))
			}
		},
		[setMemberLimit, validationMemberLimitSchema, t],
	)

	const [feeAmountChangeError, setFeeAmountChangeError] = useState(null)
	const handleFeeAmountChange = useCallback(
		(event) => {
			const value = event.target.value
			try {
				if (setFeeAmount) setFeeAmount(value < 0 ? 0 : value)
				if (!value || value < 1) return setFeeAmountChangeError(t('label:required'))
				validationFeeSchema?.validateSync(value)
				setFeeAmountChangeError(null)
			} catch (e) {
				setFeeAmountChangeError(t(e.message))
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
				// disabled
			/>

			{selectedMode === 1 && (
				<Box sx={{ width: '100%' }}>
					<FormControlLabel
						sx={{ display: 'block' }}
						control={<Checkbox checked={hasApplication} onChange={handleApplicationChange} />}
						label="Apply + Approve"
					/>
					<FormControlLabel
						sx={{ display: 'block' }}
						control={<Checkbox checked={hasWhitelist} onChange={handleWhitelistChange} />}
						label="Whitelist (Members can be added later)"
					/>
				</Box>
			)}

			<Divider variant="fullWidth" sx={{ display: 'block', width: '100%', borderStyle: 'dashed' }} />
			<Typography variant="h5" textAlign="center">
				{t('page:organizations:settings:member_type:sub_title')}
			</Typography>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organizations:settings:member_type:radio_button_no_fee:title')}
				description={t('page:organizations:settings:member_type:radio_button_no_fee:description')}
				value={0}
				selectedValue={selectedFee}
				onChange={setSelectedFee}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organizations:settings:member_type:radio_button_reserve_fee:title')}
				description={t('page:organizations:settings:member_type:radio_button_reserve_fee:description')}
				value={1}
				selectedValue={selectedFee}
				onChange={setSelectedFee}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organizations:settings:member_type:radio_button_transfer_fee:title')}
				description={t('page:organizations:settings:member_type:radio_button_transfer_fee:description')}
				value={2}
				selectedValue={selectedFee}
				onChange={setSelectedFee}
			/>

			{selectedFee > 0 && (
				<TextField
					fullWidth
					type="number"
					onChange={handleFeeAmountChange}
					value={feeAmount}
					label="Fee amount"
					InputProps={{
						endAdornment: <Typography variant="body2">GAME</Typography>,
					}}
					variant="outlined"
					error={!!feeAmountChangeError}
					helperText={feeAmountChangeError}
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
				error={!!memberLimitChangeError}
				helperText={memberLimitChangeError}
			/>
		</BaseForm>
	)
}
