import { useCallback, useState } from 'react'

import { People, Person } from '@mui/icons-material'
import { Box, Button, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { RadioItem } from 'components/organisms/forms/components/radioItem'

interface ComponentProps {
	mode: string
}

const accessType = {
	Open: '0',
	Private: '1',
}

export function AccessType({ mode }: ComponentProps) {
	const [selectedMode, setSelectedMode] = useState<string>()
	const [hasWhitelist, setHasWhitelist] = useState(false)
	const [hasApplication, setHasApplication] = useState(false)

	const { t } = useTranslation()

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
		<>
			<Typography variant="h5">{t('page:organizations:settings:access_type:title')}</Typography>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organizations:settings:access_type:radio_button_open.title')}
				description={t('page:organizations:settings:access_type:radio_button_open.description')}
				value={'0'}
				selectedValue={selectedMode || accessType[mode]}
				onChange={setSelectedMode}
			/>
			<RadioItem
				icon={<People sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organizations:settings:access_type:radio_button_private.title')}
				description={t('page:organizations:settings:access_type:radio_button_private.description')}
				value={'1'}
				selectedValue={selectedMode || accessType[mode]}
				onChange={setSelectedMode}
			/>

			{(selectedMode || accessType[mode]) === 1 && (
				<Box sx={{ width: '100%' }}>
					<FormControlLabel
						sx={{ display: 'block' }}
						control={<Checkbox checked={hasWhitelist} onChange={handleWhitelistChange} />}
						label={t('page:organizations:settings:access_type:whitelist')}
					/>
					<FormControlLabel
						sx={{ display: 'block' }}
						control={<Checkbox checked={hasApplication} onChange={handleApplicationChange} />}
						label={t('page:organizations:settings:access_type:application')}
					/>
				</Box>
			)}
			<Stack spacing={2} sx={{ justifyContent: { xs: 'space-between', sm: 'flex-end' } }} direction="row">
				<Button
					size="large"
					variant="outlined"
					color="primary"
					sx={{ display: 'block', flexGrow: { xs: 1, sm: 0 } }}
					disabled
				>
					{t('page:organizations:settings:access_type:cta_button')}
				</Button>
			</Stack>
		</>
	)
}
