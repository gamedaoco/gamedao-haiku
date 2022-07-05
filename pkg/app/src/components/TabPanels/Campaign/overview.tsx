import { useCallback, useState } from 'react'

import { Button, Typography } from '@mui/material'
import CreateCampaignPage from 'components/TabPanels/Campaign/create'

interface ComponentProps {
	organizationId: string
	isMember: boolean
	isAdmin: boolean
}

export function CampaignOverview({ organizationId, isMember, isAdmin }: ComponentProps) {
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

	return (
		<>
			{isAdmin && (
				<Button variant="contained" onClick={onCreateCampaignClicked}>
					Create Campaign
				</Button>
			)}
		</>
	)
}
