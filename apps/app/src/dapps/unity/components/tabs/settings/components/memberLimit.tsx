import { useCallback, useEffect, useState } from 'react'

import { Button, Stack, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

const validationMemberLimitSchema = Yup.number().max(1000000, 'notification:warning:max_1m_memberLimit').required()

interface ComponentProps {
	memberLimit: number
}

export function MemberLimit({ memberLimit }: ComponentProps) {
	const [memberLimitValue, setMemberLimitValue] = useState<number>(memberLimit)
	const { t } = useTranslation()

	const [memberLimitError, setMemberLimitError] = useState(null)
	const handleMemberLimitChange = useCallback(
		(event) => {
			const value = event.target.value
			try {
				if (setMemberLimitValue) setMemberLimitValue(value < 0 ? 0 : value)
				if (!value) return setMemberLimitError(t('label:required'))
				validationMemberLimitSchema?.validateSync(value)
				if (memberLimit !== 0 && value > memberLimit) {
					setMemberLimitError(t('notification:warning:higher_current_memberLimit'))
				}
				setMemberLimitError(null)
			} catch (e) {
				setMemberLimitError(t(e.message))
			}
		},
		[setMemberLimitValue, validationMemberLimitSchema, t],
	)

	useEffect(() => {
		if (memberLimit !== undefined) {
			setMemberLimitValue(memberLimit)
		}
	}, [memberLimit])

	return (
		<>
			<Stack>
				<Typography variant="h5">{t('page:organizations:settings:memberLimit:title')}</Typography>
				<Typography variant="h5" mt={3}>
					{t('page:organizations:settings:memberLimit:sub_title')}
				</Typography>
				<Typography variant="body2" fontStyle="italic">
					{t('page:organizations:settings:memberLimit:description')}
				</Typography>
			</Stack>

			<TextField
				fullWidth
				type="number"
				onChange={handleMemberLimitChange}
				InputLabelProps={{ shrink: Number.isInteger(+memberLimitValue) }}
				value={memberLimitValue}
				label={t('page:organizations:settings:memberLimit:title')}
				variant="outlined"
				error={!!memberLimitError}
				helperText={memberLimitError}
			/>
			<Stack spacing={2} sx={{ justifyContent: { xs: 'space-between', sm: 'flex-end' } }} direction="row">
				<Button
					size="large"
					variant="outlined"
					color="primary"
					sx={{ display: 'block', flexGrow: { xs: 1, sm: 0 } }}
					disabled
				>
					{t('page:organizations:settings:memberLimit:cta_button')}
				</Button>
			</Stack>
		</>
	)
}
