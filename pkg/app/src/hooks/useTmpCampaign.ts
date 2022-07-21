import { useCallback, useEffect, useState } from 'react'

import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { TMPCampaign, TMPCampaignState } from 'src/@types/campaign'
import { defaultValuesTmpCampaign as defaultValues } from 'src/constants'

// TODO: Replace store logic with db for cross device storage
export function useTmpCampaign(): TMPCampaign {
	const address = useCurrentAccountAddress()
	const [orgId] = useLocalStorage<string>(`TmpCam${address}-org-id`, defaultValues.orgId)
	const [nameState] = useLocalStorage<string>(`TmpCam${address}-nameState`, defaultValues.name)
	const [description] = useLocalStorage<string>(`TmpCam${address}-description`, defaultValues.description)
	const [bannerCid] = useLocalStorage<string>(`TmpCam${address}-banner-cid`, defaultValues.bannerCid)
	const [content] = useLocalStorage<string>(`TmpCam${address}-content`, defaultValues.content)
	const [deposit] = useLocalStorage<number>(`TmpCam${address}-deposit`, defaultValues.deposit)
	const [target] = useLocalStorage<number>(`TmpCam${address}-target`, defaultValues.target)
	const [protocol] = useLocalStorage<number>(`TmpCam${address}-protocol`, defaultValues.protocol)
	const [usageOfFunds] = useLocalStorage<string>(`TmpCam${address}-usage-of-funds`, defaultValues.usageOfFunds)
	const [currencyId] = useLocalStorage<number>(`TmpCam${address}-currency-id`, defaultValues.currencyId)
	const [endDate] = useLocalStorage<Date>(`TmpCam${address}-end-date`, defaultValues.endDate)
	const [expiryBlock] = useLocalStorage<number>(`TmpCam${address}-expiry-block`, defaultValues.expiryBlock)
	const [governance] = useLocalStorage<number>(`TmpCam${address}-governance`, defaultValues.governance)
	const [metadataCid] = useLocalStorage<string>(`TmpCam${address}-metadata-cid`, defaultValues.metadataCid)

	const [state, setState] = useState<TMPCampaign>({
		orgId: orgId,
		name: nameState,
		description: description,
		bannerCid: bannerCid,
		content: content,
		deposit: deposit,
		target: target,
		protocol: protocol,
		usageOfFunds: usageOfFunds,
		currencyId: currencyId,
		endDate: endDate,
		expiryBlock: expiryBlock,
		governance: governance,
		metadataCid: metadataCid,
	})

	useEffect(() => {
		setState({
			orgId: orgId,
			name: nameState,
			description: description,
			bannerCid: bannerCid,
			content: content,
			deposit: deposit,
			target: target,
			protocol: protocol,
			usageOfFunds: usageOfFunds,
			currencyId: currencyId,
			endDate: endDate,
			expiryBlock: expiryBlock,
			governance: governance,
			metadataCid: metadataCid,
		})
	}, [
		orgId,
		nameState,
		description,
		bannerCid,
		content,
		deposit,
		target,
		protocol,
		usageOfFunds,
		currencyId,
		endDate,
		expiryBlock,
		governance,
		metadataCid,
	])

	return state
}
