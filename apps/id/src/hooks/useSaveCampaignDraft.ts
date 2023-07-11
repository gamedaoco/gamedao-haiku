import moment from 'moment/moment'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { TMPCampaign } from 'src/@types/campaign'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import { useSystemProperties } from 'src/hooks/useSystemProperties'
import { Campaign, useOrganizationByIdSubscription } from 'src/queries'
import { createInfoNotification } from 'src/utils/notificationUtils'
import { fromUnit } from 'src/utils/token'
import { v4 as uuidv4 } from 'uuid'

export interface CampaignDraft {
	drafts: any
	addDraft: (draft: TMPCampaign) => void
	deleteDraft: (draftId: string) => void
	getCampaign: (draftId: string, currentBlockNumber: number) => Campaign
	loading: boolean
}

export function useSaveCampaignDraft(orgId: string): CampaignDraft {
	const [draftState, setDraftState] = useLocalStorage<any>(`campaign-draft-state-${orgId}`, {})
	const { t } = useTranslation()
	const systemProperties = useSystemProperties()
	const { data, loading } = useOrganizationByIdSubscription({ variables: { orgId } })

	const handleSave = useCallback(
		(data: TMPCampaign) => {
			const id = uuidv4()
			const newDraftState = { ...draftState, [id]: data }
			setDraftState(newDraftState)
			createInfoNotification(t('notification:info:draft_saved'))
		},
		[draftState, setDraftState, t],
	)

	const handleDelete = useCallback(
		(draftId: string) => {
			const newDraftState = { ...draftState }
			delete newDraftState[draftId]
			setDraftState(newDraftState)
			createInfoNotification(t('notification:info:draft_deleted'))
		},
		[draftState, setDraftState],
	)

	const handleGetCampaign = useCallback(
		(draftId: string, currentBlockNumber: number): Campaign => {
			const tmpData = draftState[draftId]

			if (!data) {
				return null
			}

			const currencySymbol = systemProperties?.tokenSymbol?.[tmpData.currencyId] ?? ''
			const endSecondsDiff = moment(tmpData.endDate).diff(moment(), 'seconds')
			const endBlock = currentBlockNumber + Math.ceil(endSecondsDiff / systemProperties?.blockTargetTime)
			return {
				id: draftId,
				token_symbol: currencySymbol,
				organization: data?.organization?.[0] ?? {},
				state: 'Draft',
				// TODO: metadata has moved?
				// campaign_metadata: {
				// 	name: tmpData?.name,
				// 	header: tmpData?.bannerCid,
				// },
				target: fromUnit(tmpData.target, systemProperties?.tokenDecimals?.[tmpData.currencyId] ?? 18),
				expiry: endBlock,
			} as Campaign
		},
		[draftState, systemProperties, data],
	)

	return {
		drafts: draftState,
		addDraft: handleSave,
		deleteDraft: handleDelete,
		getCampaign: handleGetCampaign,
		loading,
	}
}
