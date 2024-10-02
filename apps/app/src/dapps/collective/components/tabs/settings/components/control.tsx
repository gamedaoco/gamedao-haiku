import { useState } from 'react'

import { Person } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { RadioItem } from 'components/organisms/forms/components/radioItem'

interface ComponentProps {
	organizationType: string
}

const organizationTypes = {
	Individual: '0',
	Dao: '2',
}

export function Control({ organizationType }: ComponentProps) {
	const [selectedOrganizationType, setSelectedOrganizationType] = useState<string>()
	const { t } = useTranslation()

	return (
		<>
			<Typography variant="h5">{t('page:organizations:settings:control:title')}</Typography>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organizations:settings:control:radio_button_entity:title')}
				description={t('page:organizations:settings:control:radio_button_entity:description')}
				value={'0'}
				selectedValue={selectedOrganizationType || organizationTypes[organizationType]}
				onChange={setSelectedOrganizationType}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organizations:settings:control:radio_button_community:title')}
				description={t('page:organizations:settings:control:radio_button_community:description')}
				value={'2'}
				selectedValue={selectedOrganizationType || organizationTypes[organizationType]}
				onChange={setSelectedOrganizationType}
			/>
			<Stack spacing={2} sx={{ justifyContent: { xs: 'space-between', sm: 'flex-end' } }} direction="row">
				<Button
					size="large"
					variant="outlined"
					color="primary"
					sx={{ display: 'block', flexGrow: { xs: 1, sm: 0 } }}
					disabled
				>
					{t('page:organizations:settings:control:cta_button')}
				</Button>
			</Stack>
		</>
	)
}
