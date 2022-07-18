import { useCallback } from 'react'

import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { TMPCampaignState } from 'src/@types/campaign'
import { defaultValuesTmpCampaign as defaultValues } from 'src/constants'

// TODO: Replace store logic with db for cross device storage
export function useTmpCampaignState(): TMPCampaignState {
	const address = useCurrentAccountAddress()
	const [nameState, setNameState] = useLocalStorage<string>(`TmpCam${address}-nameState`, defaultValues.name)
	const [description, setDescription] = useLocalStorage<string>(
		`TmpCam${address}-description`,
		defaultValues.description,
	)
	const [bannerCid, setBannerCid] = useLocalStorage<string>(`TmpCam${address}-banner-cid`, defaultValues.bannerCid)
	const [content, setContent] = useLocalStorage<string>(`TmpCam${address}-content`, defaultValues.content)
	const [deposit, setDeposit] = useLocalStorage<number>(`TmpCam${address}-deposit`, defaultValues.deposit)
	const [target, setTarget] = useLocalStorage<number>(`TmpCam${address}-target`, defaultValues.target)
	const [email, setEmail] = useLocalStorage<string>(`TmpCam${address}-email`, defaultValues.email)
	const [protocol, setProtocol] = useLocalStorage<number>(`TmpCam${address}-protocol`, defaultValues.protocol)

	// Clear state
	const clearAll = useCallback(() => {
		setNameState(defaultValues.name)
		setDescription(defaultValues.description)
		setBannerCid(defaultValues.bannerCid)
		setContent(defaultValues.content)
	}, [setNameState, setDescription, setBannerCid, setContent])

	return {
		name: nameState,
		description: description,
		bannerCid: bannerCid,
		content: content,
		deposit: deposit,
		target: target,
		email: email,
		protocol: protocol,
		setName: setNameState,
		setDescription: setDescription,
		setBannerCid: setBannerCid,
		setContent: setContent,
		setDeposit: setDeposit,
		setTarget: setTarget,
		setEmail: setEmail,
		setProtocol: setProtocol,
		clearAll: clearAll,
	}
}
