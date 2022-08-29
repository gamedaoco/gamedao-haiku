import { useCallback } from 'react'

import { useSaveCampaignDraft } from 'hooks/useSaveCampaignDraft'
import { useTranslation } from 'react-i18next'

import { ConfirmationModal } from 'components/Modals/ConfirmationModal'

interface ComponentProps {
	open: boolean
	id: string
	orgId: string
	onClose: (result: boolean) => void
}

export function ConfirmDeleteCampaignDraft({ id, orgId, open, onClose }: ComponentProps) {
	const { deleteDraft } = useSaveCampaignDraft(orgId)
	const { t } = useTranslation()

	const handleDelete = useCallback(
		(event) => {
			event.stopPropagation()
			deleteDraft(id)
			onClose(true)
		},
		[id, deleteDraft],
	)

	return (
		<ConfirmationModal
			title={t('label:are_you_sure')}
			description={t('label:campaign_draft_will_be_deleted')}
			confirmButtonText={t('button:ui:yes_delete_now')}
			cancelButtonText={t('button:ui:no_continue')}
			confirmButtonCallback={handleDelete as any}
			cancelButtonCallback={() => onClose(false)}
			open={open}
		/>
	)
}
