import { useEffect, useState } from 'react'

import { useCurrentAccountAddress } from './useCurrentAccountAddress'
import { useLocalStorage } from './useLocalStorage'
import { DraftProposal } from '../@types/proposal'
import { defaultValuesDraftProposal as defaultValues } from '../constants/index'

export function useDraftProposal(): DraftProposal {
	const address = useCurrentAccountAddress()
	const [selectedType] = useLocalStorage<number>(`DraftProposal-${address}-selectedType`, defaultValues.type)
	const [nameState] = useLocalStorage<string>(`DraftProposal-${address}-nameState`, defaultValues.name)
	const [description] = useLocalStorage<string>(`DraftProposal-${address}-description`, defaultValues.description)
	const [startDate] = useLocalStorage<Date>(`DraftProposal-${address}-startDate`, defaultValues.startDate)
	const [endDate] = useLocalStorage<Date>(`DraftProposal-${address}-endDate`, defaultValues.endDate)
	const [majority] = useLocalStorage<number>(`DraftProposal-${address}-majority`, defaultValues.majority)
	const [deposit] = useLocalStorage<number>(`DraftProposal-${address}-deposit`, defaultValues.deposit)
	const [metaDataCID] = useLocalStorage<string>(`DraftProposal-${address}-metaDataCID`, defaultValues.metaDataCID)
	const [campaignId] = useLocalStorage<string>(`DraftProposal-${address}-campaignId`, defaultValues.campaignId)
	const [amount] = useLocalStorage<number>(`DraftProposal-${address}-amount`, defaultValues.amount)
	const [currencyId] = useLocalStorage<number>(`DraftProposal-${address}-currencyId`, defaultValues.currencyId)
	const [beneficiaryAddress] = useLocalStorage<string>(
		`DraftProposal-${address}-beneficiaryAddress`,
		defaultValues.beneficiaryAddress,
	)
	const [state, setState] = useState<DraftProposal>({
		type: selectedType,
		name: nameState,
		description: description,
		startDate: startDate,
		endDate: endDate,
		majority: majority,
		deposit: deposit,
		campaignId: campaignId,
		amount: amount,
		metaDataCID: metaDataCID,
		currencyId: currencyId,
		beneficiaryAddress: beneficiaryAddress,
	})

	useEffect(() => {
		setState({
			type: selectedType,
			name: nameState,
			description: description,
			startDate: startDate,
			endDate: endDate,
			majority: majority,
			deposit: deposit,
			campaignId: campaignId,
			amount: amount,
			metaDataCID: metaDataCID,
			currencyId: currencyId,
			beneficiaryAddress: beneficiaryAddress,
		})
	}, [
		selectedType,
		nameState,
		description,
		startDate,
		endDate,
		majority,
		deposit,
		campaignId,
		amount,
		metaDataCID,
		currencyId,
		beneficiaryAddress,
	])

	return state
}
