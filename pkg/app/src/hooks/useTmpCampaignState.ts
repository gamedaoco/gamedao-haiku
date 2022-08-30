import { useCallback } from 'react'

import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { TMPCampaignState } from 'src/@types/campaign'
import { defaultValuesTmpCampaign as defaultValues } from 'src/constants'

// TODO: Replace store logic with db for cross device storage
export function useTmpCampaignState(): TMPCampaignState {
	const address = useCurrentAccountAddress()
	const [orgId, setOrgId] = useLocalStorage<string>(`TmpCam${address}-org-id`, defaultValues.orgId)
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
	const [currencyId, setCurrencyId] = useLocalStorage<number>(
		`TmpCam${address}-currency-id`,
		defaultValues.currencyId,
	)
	const [startDate, setStartDate] = useLocalStorage<Date>(`TmpCam${address}-start-date`, defaultValues.startDate)
	const [endDate, setEndDate] = useLocalStorage<Date>(`TmpCam${address}-end-date`, defaultValues.endDate)
	const [governance, setGovernance] = useLocalStorage<number>(`TmpCam${address}-governance`, defaultValues.governance)
	const [metadataCid, setMetadataCid] = useLocalStorage<string>(
		`TmpCam${address}-metadata-cid`,
		defaultValues.metadataCid,
	)

	// Clear state
	const clearAll = useCallback(() => {
		setOrgId(defaultValues.orgId)
		setNameState(defaultValues.name)
		setDescription(defaultValues.description)
		setBannerCid(defaultValues.bannerCid)
		setContent(defaultValues.content)
		setDeposit(defaultValues.deposit)
		setTarget(defaultValues.target)
		setProtocol(defaultValues.protocol)
		setUsageOfFunds(defaultValues.usageOfFunds)
		setCurrencyId(defaultValues.currencyId)
		setStartDate(defaultValues.startDate)
		setEndDate(defaultValues.endDate)
		setGovernance(defaultValues.governance)
		setMetadataCid(defaultValues.metadataCid)
	}, [
		setOrgId,
		setNameState,
		setDescription,
		setBannerCid,
		setContent,
		setDeposit,
		setTarget,
		setProtocol,
		setUsageOfFunds,
		setCurrencyId,
		setStartDate,
		setEndDate,
		setGovernance,
		setMetadataCid,
	])

	const restoreDraft = useCallback(
		(draft: TMPCampaignState) => {
			setOrgId(draft.orgId)
			setNameState(draft.name)
			setDescription(draft.description)
			setBannerCid(draft.bannerCid)
			setContent(draft.content)
			setDeposit(draft.deposit)
			setTarget(draft.target)
			setProtocol(draft.protocol)
			setUsageOfFunds(draft.usageOfFunds)
			setCurrencyId(draft.currencyId)
			setStartDate(draft.startDate)
			setEndDate(draft.endDate)
			setGovernance(draft.governance)
			setMetadataCid(draft.metadataCid)
		},
		[
			setOrgId,
			setNameState,
			setDescription,
			setBannerCid,
			setContent,
			setDeposit,
			setTarget,
			setProtocol,
			setUsageOfFunds,
			setCurrencyId,
			setStartDate,
			setEndDate,
			setGovernance,
			setMetadataCid,
		],
	)

	return {
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
		setOrgId: setOrgId,
		setName: setNameState,
		setDescription: setDescription,
		setBannerCid: setBannerCid,
		setContent: setContent,
		setDeposit: setDeposit,
		setTarget: setTarget,
		setProtocol: setProtocol,
		setUsageOfFunds: setUsageOfFunds,
		setCurrencyId: setCurrencyId,
		setStartDate: setStartDate,
		setEndDate: setEndDate,
		setGovernance: setGovernance,
		setMetadataCid: setMetadataCid,
		clearAll: clearAll,
		restoreDraft: restoreDraft,
	}
}
