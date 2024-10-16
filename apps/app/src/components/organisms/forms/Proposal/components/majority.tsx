import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { Person } from '@mui/icons-material'
import { InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { useProposalFeatures } from 'src/hooks/featureToggle/useProposalFeatures'
import { PROPOSAL_CREATE_DEPOSIT } from 'src/constants/proposal'

import { BaseForm } from 'components/organisms/forms/baseForm'
import { RadioItem } from 'components/organisms/forms/components/radioItem'

interface ComponentProps {
	selected: number
	setSelected: (number) => void
	deposit: number
	setDeposit: (number) => void
	type: number
}

export function Majority({ selected, setSelected, deposit, setDeposit, type }: ComponentProps) {
	const enabledFeature = useProposalFeatures()
	const { t } = useTranslation()

	const handleDepositChange = useCallback(
		(event) => {
			const value = event.target.value
			setDeposit(value < 1 ? 1 : value)
		},
		[setDeposit],
	)

	return (
		<BaseForm title={t('page:proposals:settings:voting_type')}>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:proposals:settings:simple_majority:title')}
				description={t('page:proposals:settings:simple_majority:description')}
				value={0}
				selectedValue={selected}
				onChange={setSelected}
				disabled={!enabledFeature.CREATE_PROPOSAL_SIMPLE_MAJORITY}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:proposals:settings:relative_majority:title')}
				description={t('page:proposals:settings:relative_majority:description')}
				value={1}
				selectedValue={selected}
				onChange={setSelected}
				disabled={!enabledFeature.CREATE_PROPOSAL_RELATIVE_MAJORITY}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:proposals:settings:absolute_majority:title')}
				description={t('page:proposals:settings:absolute_majority:description')}
				value={2}
				selectedValue={selected}
				onChange={setSelected}
				disabled={!(enabledFeature as any).CREATE_PROPOSAL_ABSOLUTE_MAJORITY}
			/>
			<Stack alignItems="center" justifyContent="space-between" spacing={1} direction="row" width="100%">
				<Typography>
					{t('page:proposals:settings:min_deposit', {
						quantity: PROPOSAL_CREATE_DEPOSIT[type],
						coin: 'GAME',
					})}
					.
				</Typography>
				<TextField
					variant="outlined"
					label="Deposit"
					type="number"
					InputProps={{
						endAdornment: <InputAdornment position="start">GAME</InputAdornment>,
					}}
					value={deposit}
					onChange={handleDepositChange}
				/>
			</Stack>
		</BaseForm>
	)
}
