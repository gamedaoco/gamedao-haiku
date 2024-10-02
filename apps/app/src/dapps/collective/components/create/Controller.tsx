import { Person } from '@mui/icons-material'
import { Group } from '@mui/icons-material'

import { BaseForm } from 'components/organisms/forms/baseForm'
import { RadioItem } from 'components/organisms/forms/components/radioItem'
import { useTranslation } from 'react-i18next'

interface ComponentProps {
	selected: number
	setSelected: (number) => void
}

/*
	INFO: currently type 1 and 3 are dysfunctional / disabled
	value is not a counter but an int representing an enum
*/

export function Controller({ selected, setSelected }: ComponentProps) {
	const { t } = useTranslation()

	return (
		<BaseForm title={'Who will control the community?'}>
			<RadioItem
				icon={<Group sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organizations:settings:control:radio_button_community:title')}
				description={t('page:organizations:settings:control:radio_button_community:description')}
				value={2}
				selectedValue={selected}
				onChange={setSelected}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organizations:settings:control:radio_button_entity:title')}
				description={t('page:organizations:settings:control:radio_button_entity:description')}
				value={0}
				selectedValue={selected}
				onChange={setSelected}
			/>
		</BaseForm>
	)
}
