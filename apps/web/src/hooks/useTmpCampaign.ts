import { useEffect, useState } from 'react'

import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import { TMPCampaign } from 'src/@types/campaign'
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
	const [startDate] = useLocalStorage<Date>(`TmpCam${address}-start-date`, defaultValues.startDate)
	const [endDate] = useLocalStorage<Date>(`TmpCam${address}-end-date`, defaultValues.endDate)
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
		startDate: startDate,
		endDate: endDate,
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
			startDate: startDate,
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
		startDate,
		endDate,
		governance,
		metadataCid,
	])

	return state
}
