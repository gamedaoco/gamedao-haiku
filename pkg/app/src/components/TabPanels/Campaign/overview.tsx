import { useCallback, useState } from 'react'

import { CampaignByOrganizationIdSubscription } from 'src/queries'

import { CreatedCampaignSection } from 'components/Account/modules/CampaignsSection/CreatedCampaignsSection/createdCampainsSection'
import CreateCampaignPage from 'components/TabPanels/Campaign/create'

interface ComponentProps {
	organizationId: string
	isAdmin: boolean
	data: CampaignByOrganizationIdSubscription
	loading: boolean
}

export function CampaignOverview({ organizationId, isAdmin, data, loading }: ComponentProps) {
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
			<CreatedCampaignSection
				data={data}
				loading={loading}
				title={true}
				isAdmin={isAdmin}
				onCreateCampaignClicked={onCreateCampaignClicked}
			/>
		</>
	)
}
