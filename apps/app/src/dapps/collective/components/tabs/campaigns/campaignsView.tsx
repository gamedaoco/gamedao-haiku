import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { useRouter } from 'next/router'

import { useBlockNumber } from 'src/hooks/useBlockNumber'
import { useSaveCampaignDraft } from 'src/hooks/useSaveCampaignDraft'
import { Campaign, useCampaignByOrganizationIdSubscription } from 'src/queries'

import { CampaignsList } from 'dapps/campaign/components/CampaignsList'
import { CampaignEmptyState } from 'dapps/campaign/components/CampaignsSection/campaignEmptyState'
import { CreateCampaignPage } from 'dapps/collective/components/tabs/campaigns/create'

interface ComponentProps {
	organizationId: string
	isAdmin: boolean
}

export function CampaignsView({ organizationId, isAdmin }: ComponentProps) {
	const { data, loading } = useCampaignByOrganizationIdSubscription({
		variables: { orgId: organizationId },
	})
	const [draftsState, setDraftsState] = useState<Campaign[]>([])
	const blockNumber = useBlockNumber()
	const saveDraft = useSaveCampaignDraft(organizationId)
	const { push, query } = useRouter()

	const paginatedData = useMemo<Campaign[]>(() => data?.campaign?.slice() as Campaign[], [data])
	const [showCreatePage, setShowCreatePage] = useState<boolean>(false)

	const onCreateCallback = useCallback(() => {
		setShowCreatePage(true)
	}, [setShowCreatePage])

	const onHandleCancelClicked = useCallback(() => {
		if (query?.draft) {
			push(`/organizations/${organizationId}/campaigns`)
		}
		setShowCreatePage(false)
	}, [setShowCreatePage, query?.draft, organizationId])

	useEffect(() => {
		if (saveDraft?.drafts && !saveDraft?.loading) {
			setDraftsState(
				Object.keys(saveDraft?.drafts)
					.map((draftId) => saveDraft?.getCampaign(draftId, blockNumber))
					.filter((campaign) => !!campaign),
			)
		} else {
			setDraftsState([])
		}
	}, [saveDraft?.drafts, saveDraft?.loading])

	useEffect(() => {
		if (query?.draft) {
			onCreateCallback()
		}
	}, [query?.draft])

	if (showCreatePage) {
		return <CreateCampaignPage organizationId={organizationId} cancel={onHandleCancelClicked} draftId={query?.draft as any} />
	}

	return !loading && (paginatedData?.length || draftsState.length) ? (
		<CampaignsList campaigns={paginatedData} draftCampaigns={draftsState} loading={loading} showCreate={isAdmin} createCallback={onCreateCallback} />
	) : (
		<CampaignEmptyState isAdmin={isAdmin} setShowCreatePage={setShowCreatePage} />
	)
}
