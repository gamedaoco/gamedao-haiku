import { useCallback, useState } from 'react'

import { Button, Typography } from '@mui/material'
import CreateCampaignPage from 'components/TabPanels/Campaign/create'
import { CampaignSubscription } from 'src/queries'
import CreatedCampaignSection from 'components/Account/modules/CampaignsSection/CreatedCampaignsSection/createdCampainsSection'

interface ComponentProps {
	organizationId: string
	isMember: boolean
	isAdmin: boolean
	data: CampaignSubscription
	loading: boolean
}

export function CampaignOverview({ organizationId, isMember, isAdmin, data, loading }: ComponentProps) {
	const [showCreatePage, setShowCreatePage] = useState<boolean>(false)

	const onCreateCampaignClicked = useCallback(() => {
		setShowCreatePage(true)
	}, [])

	const onHandleCancelClicked = useCallback(() => {
		setShowCreatePage(false)
	}, [])

	if (showCreatePage) {
		return <CreateCampaignPage organizationId={organizationId} cancel={onHandleCancelClicked} />
	}

	return <>{isAdmin && <CreatedCampaignSection data={data} loading={loading} title={false} />}</>
}
