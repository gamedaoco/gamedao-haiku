import { Person } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { BaseForm } from 'src/components/Forms/baseForm'
import { RadioItem } from 'src/components/Forms/modules/radioItem'
import { PROPOSAL_CREATE_DEPOSIT, PROPOSAL_KEYS } from 'src/constants/proposal'
import { useProposalFeatures } from 'src/hooks/featureToggle/useProposalFeatures'

interface ComponentProps {
	selected: number
	setSelected: (number) => void
}

export function Type({ selected, setSelected }: ComponentProps) {
	const enabledFeature = useProposalFeatures()
	const { t } = useTranslation()

	return (
		<BaseForm title={t('page:proposals:settings:proposal_type')}>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:proposals:settings:create_general_proposal.title', {
					quantity: PROPOSAL_CREATE_DEPOSIT[PROPOSAL_KEYS.General],
					coin: 'GAME',
				})}
				description={
					'General topics to decide with all organization members.' ||
					t('page:proposals:settings:create_general_proposal.description')
				}
				value={0}
				selectedValue={selected}
				onChange={setSelected}
				disabled={!enabledFeature.CREATE_GENERAL_PROPOSAL}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:proposals:settings:create_withdraw_proposal.title', {
					quantity: PROPOSAL_CREATE_DEPOSIT[PROPOSAL_KEYS.Withdrawal],
					coin: 'GAME',
				})}
				description={
					'Request to unlock funds from a campaign treasury, decided by campaign contributors.' ||
					t('page:proposals:settings:create_withdraw_proposal.description')
				}
				value={1}
				selectedValue={selected}
				onChange={setSelected}
				disabled={!enabledFeature.CREATE_WITHDRAW_PROPOSAL}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px ' }} />}
				title={t('page:proposals:settings:create_spending_proposal.title', {
					quantity: PROPOSAL_CREATE_DEPOSIT[PROPOSAL_KEYS.Spending],
					coin: 'GAME',
				})}
				description={
					'Request to spend funds out of your organization treasury, decided by organization members.' ||
					t('page:proposals:settings:create_spending_proposal.description')
				}
				value={2}
				selectedValue={selected}
				onChange={setSelected}
				disabled={false && !enabledFeature.CREATE_SPENDING_PROPOSAL}
			/>
		</BaseForm>
	)
}
