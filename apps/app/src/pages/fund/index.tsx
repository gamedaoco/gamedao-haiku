import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Layout } from 'src/layouts/v2'
import { Add } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'
import { CampaignDApp } from 'src/dapps/campaign'

export function Page() {
	const { t } = useTranslation()

	// TODO: is viewer a prime of an organization?
	// then show and handle a create button!
	const [isCreator, setIsCreator] = useState(true)
	const handleCreate = () => {}

	return <Layout showHeader showFooter showSidebar title={t('labels:campaigns')}></Layout>
}

export default Page
