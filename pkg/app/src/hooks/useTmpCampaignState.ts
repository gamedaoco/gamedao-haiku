import { useCallback } from 'react'

import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { defaultValuesTmpOrganisation as defaultValues } from 'src/constants'
import { TmpCampaignState } from 'src/@types/campaign'

// TODO: Replace store logic with db for cross device storage
export function useTmpCampaignState(): TmpCampaignState {
	const address = useCurrentAccountAddress()
	const [nameState, setNameState] = useLocalStorage<string>(`TmpCam${address}-nameState`, defaultValues.name)
	const [description, setDescription] = useLocalStorage<string>(
		`TmpCam${address}-description`,
		defaultValues.description,
	)

	// Clear state
	const clearAll = useCallback(() => {
		setNameState(defaultValues.name)
		setDescription(defaultValues.description)
	}, [setNameState, setDescription])

	return {
		name: nameState,
		description: description,
		setName: setNameState,
		setDescription: setDescription,
		clearAll: clearAll,
	}
}
