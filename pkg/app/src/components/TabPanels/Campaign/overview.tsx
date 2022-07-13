import { useCallback, useMemo, useState } from 'react'

import { Campaign, useCampaignByOrganizationIdSubscription } from 'src/queries'

import { CampaignsList } from 'components/CampaignsSection/CampaignsList/campaignsList'
import CreateCampaignPage from 'components/TabPanels/Campaign/create'

interface ComponentProps {
	organizationId: string
	isAdmin: boolean
}

export function CampaignOverview({ organizationId, isAdmin }: ComponentProps) {
	const { data, loading } = useCampaignByOrganizationIdSubscription({
		variables: { orgId: organizationId },
	})
	const paginatedData = useMemo<Campaign[]>(() => data?.campaign?.slice() as Campaign[], [data])
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
			<CampaignsList
				data={paginatedData}
				loading={loading}
				title={false}
				isAdmin={isAdmin}
				onCreateCampaignClicked={onCreateCampaignClicked}
			/>
		</>
	)
}
