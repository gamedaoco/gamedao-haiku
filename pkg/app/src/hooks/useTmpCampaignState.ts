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
	const [protocol, setProtocol] = useLocalStorage<number>(`TmpCam${address}-protocol`, defaultValues.protocol)
	const [usageOfFunds, setUsageOfFunds] = useLocalStorage<string>(
		`TmpCam${address}-usage-of-funds`,
		defaultValues.usageOfFunds,
	)
	const [currency, setCurrency] = useLocalStorage<string>(`TmpCam${address}-currency`, defaultValues.currency)
	const [endDate, setEndDate] = useLocalStorage<Date>(`TmpCam${address}-end-date`, defaultValues.endDate)
	const [governance, setGovernance] = useLocalStorage<number>(`TmpCam${address}-governance`, defaultValues.governance)

	// Clear state
	const clearAll = useCallback(() => {
		setNameState(defaultValues.name)
		setDescription(defaultValues.description)
		setBannerCid(defaultValues.bannerCid)
		setContent(defaultValues.content)
		setDeposit(defaultValues.deposit)
		setTarget(defaultValues.target)
		setProtocol(defaultValues.protocol)
		setUsageOfFunds(defaultValues.usageOfFunds)
		setCurrency(defaultValues.currency)
		setEndDate(defaultValues.endDate)
		setGovernance(defaultValues.governance)
	}, [
		setNameState,
		setDescription,
		setBannerCid,
		setContent,
		setDeposit,
		setTarget,
		setProtocol,
		setUsageOfFunds,
		setCurrency,
		setEndDate,
		setGovernance,
	])

	return {
		name: nameState,
		description: description,
		bannerCid: bannerCid,
		content: content,
		deposit: deposit,
		target: target,
		protocol: protocol,
		usageOfFunds: usageOfFunds,
		currency: currency,
		endDate: endDate,
		governance: governance,
		setName: setNameState,
		setDescription: setDescription,
		setBannerCid: setBannerCid,
		setContent: setContent,
		setDeposit: setDeposit,
		setTarget: setTarget,
		setProtocol: setProtocol,
		setUsageOfFunds: setUsageOfFunds,
		setCurrency: setCurrency,
		setEndDate: setEndDate,
		setGovernance: setGovernance,
		clearAll: clearAll,
	}
}
