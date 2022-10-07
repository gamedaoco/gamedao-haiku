import { Person } from '@mui/icons-material'
import { useProposalFeatures } from 'hooks/featureToggle/useProposalFeatures'
import { PROPOSAL_CREATE_DEPOSIT, PROPOSAL_KEYS } from 'src/constants/proposal'

import { BaseForm } from 'components/Forms/baseForm'
import { RadioItem } from 'components/Forms/modules/radioItem'

interface ComponentProps {
	selected: number
	setSelected: (number) => void
}

export function Type({ selected, setSelected }: ComponentProps) {
	const enabledFeature = useProposalFeatures()

	return (
		<BaseForm title={'What type of proposal do you need?'}>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={`General Proposal  ( Deposit ${PROPOSAL_CREATE_DEPOSIT[PROPOSAL_KEYS.General]} GAME )`}
				description={'Select for all types of proposals except withdrawal'}
				value={0}
				selectedValue={selected}
				onChange={setSelected}
				disabled={!enabledFeature.CREATE_GENERAL_PROPOSAL}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={`Withdrawal Proposal  ( Deposit ${PROPOSAL_CREATE_DEPOSIT[PROPOSAL_KEYS.Withdrawal]} GAME )`}
				description={'Select to withdrawal from a campaign'}
				value={1}
				selectedValue={selected}
				onChange={setSelected}
				disabled={!enabledFeature.CREATE_WITHDRAW_PROPOSAL}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px ' }} />}
				title={`Spending Proposal  ( Deposit ${PROPOSAL_CREATE_DEPOSIT[PROPOSAL_KEYS.Spending]} GAME )`}
				description={'Select for all types of proposals except withdrawal'}
				value={2}
				selectedValue={selected}
				onChange={setSelected}
				disabled={false && !enabledFeature.CREATE_SPENDING_PROPOSAL}
			/>
		</BaseForm>
	)
}
