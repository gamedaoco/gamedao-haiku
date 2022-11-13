import { useCallback, useEffect, useState } from 'react'

import { Button, Stack, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

import { createWarningNotification } from 'src/utils/notificationUtils'

const validationMemberLimitSchema = Yup.number().max(1000000, 'notification:warning:max_1m_member_limit')

interface ComponentProps {
	memberLimit: number
}

export function MemberLimit({ memberLimit }: ComponentProps) {
	const [memberLimitValue, setMemberLimitValue] = useState<number>(memberLimit)
	const { t } = useTranslation()

	const handleMemberLimitChange = useCallback(
		(event) => {
			const value = event.target.value
			if (!value) {
				return
			}
			try {
				validationMemberLimitSchema?.validateSync(value)
				if (setMemberLimitValue) {
					setMemberLimitValue(value < 0 ? 0 : value)
				}
				if (memberLimit !== 0 && value > memberLimit) {
					throw { message: 'notification:warning:higher_current_member_limit' }
				}
			} catch (e) {
				createWarningNotification(t(e.message))
			}
		},
		[setMemberLimitValue, t, memberLimit],
	)

	useEffect(() => {
		if (memberLimit !== undefined) {
			setMemberLimitValue(memberLimit)
		}
	}, [memberLimit])

	return (
		<>
			<Stack>
				<Typography variant="h5">{t('page:organisations:settings:member_limit:title')}</Typography>
				<Typography variant="h5" mt={3}>
					{t('page:organisations:settings:member_limit:sub_title')}
				</Typography>
				<Typography variant="body2" fontStyle="italic">
					{t('page:organisations:settings:member_limit:description')}
				</Typography>
			</Stack>

			<TextField
				fullWidth
				type="number"
				onChange={handleMemberLimitChange}
				InputLabelProps={{ shrink: Number.isInteger(+memberLimitValue) }}
				value={memberLimitValue}
				label={t('page:organisations:settings:member_limit:title')}
				variant="outlined"
			/>
			<Stack spacing={2} sx={{ justifyContent: { xs: 'space-between', sm: 'flex-end' } }} direction="row">
				<Button
					size="large"
					variant="outlined"
					color="primary"
					sx={{ display: 'block', flexGrow: { xs: 1, sm: 0 } }}
					disabled
				>
					{t('page:organisations:settings:member_limit:cta_button')}
				</Button>
			</Stack>
		</>
	)
}
