import { BaseForm } from 'components/Forms/baseForm'
import { RadioItem } from 'components/Forms/modules/radioItem'
import { Person } from '@mui/icons-material'
import { useProposalFeatures } from 'hooks/featureToggle/useProposalFeatures'

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
				title={'General Proposal  ( Deposit 1 GAME )'}
				description={'Select for all types of proposals except withdrawal'}
				value={0}
				selectedValue={selected}
				onChange={setSelected}
				disabled={!enabledFeature.CREATE_GENERAL_PROPOSAL}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={'Withdrawal Proposal  ( Deposit 5 GAME )'}
				description={'Select to withdrawal from a campaign'}
				value={1}
				selectedValue={selected}
				onChange={setSelected}
				disabled={!enabledFeature.CREATE_WITHDRAW_PROPOSAL}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px ' }} />}
				title={'Spending Proposal  ( Deposit 10 GAME )'}
				description={'Select for all types of proposals except withdrawal'}
				value={2}
				selectedValue={selected}
				onChange={setSelected}
				disabled={!enabledFeature.CREATE_SPENDING_PROPOSAL}
			/>
		</BaseForm>
	)
}
