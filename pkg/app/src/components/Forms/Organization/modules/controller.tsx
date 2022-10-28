import { Person } from '@mui/icons-material'

import { BaseForm } from 'components/Forms/baseForm'
import { RadioItem } from 'components/Forms/modules/radioItem'
import { useTranslation } from 'react-i18next'

interface ComponentProps {
	selected: number
	setSelected: (number) => void
}

export function Controller({ selected, setSelected }: ComponentProps) {
	const { t } = useTranslation()

	return (
		<BaseForm title={'Who will control the organization?'}>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organisations:settings:control:radio_button_entity:title')}
				description={t('page:organisations:settings:control:radio_button_entity:description')}
				value={0}
				selectedValue={selected}
				onChange={setSelected}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organisations:settings:control:radio_button_community:title')}
				description={t('page:organisations:settings:control:radio_button_community:description')}
				value={2}
				selectedValue={selected}
				onChange={setSelected}
			/>
		</BaseForm>
	)
}
