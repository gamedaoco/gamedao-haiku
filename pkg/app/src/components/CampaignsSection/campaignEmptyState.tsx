import React, { useCallback } from 'react'

import { useRouter } from 'next/router'

import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

interface ComponentProps {
	isAdmin?: boolean
	setShowCreatePage?: (x: boolean) => void
}

export function CampaignEmptyState({ isAdmin, setShowCreatePage }: ComponentProps) {
	const { t } = useTranslation()
	const { push } = useRouter()
	const rerouteToCampaigns = useCallback(() => {
		push('/campaigns')
	}, [push])
	const onCreateCallback = useCallback(() => {
		setShowCreatePage(true)
	}, [setShowCreatePage])
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignContent: 'space-evenly',
					alignItems: 'center',
				}}
			>
				<Typography variant="subtitle1">{t('page:organisations:no_campaigns')}</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'space-evenly', mt: 2 }}>
					{isAdmin && (
						<Button variant="contained" onClick={onCreateCallback}>
							{t('button:ui:create_campaign')}
						</Button>
					)}
					<Button onClick={rerouteToCampaigns}>{t('button:ui:explore_campaigns')}</Button>
				</Box>
			</Box>
		</Box>
	)
}
