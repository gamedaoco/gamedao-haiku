import { useEffect, useState } from 'react'

import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import { TMPProposal } from 'src/@types/proposal'
import { defaultValuesTMPProposal as defaultValues } from 'src/constants'

export function useTMPProposal(): TMPProposal {
	const address = useCurrentAccountAddress()
	const [selectedType] = useLocalStorage<number>(`TmpProposal-${address}-selectedType`, defaultValues.type)
	const [nameState] = useLocalStorage<string>(`TmpProposal-${address}-nameState`, defaultValues.name)
	const [description] = useLocalStorage<string>(`TmpProposal-${address}-description`, defaultValues.description)
	const [startDate] = useLocalStorage<Date>(`TmpProposal-${address}-startDate`, defaultValues.startDate)
	const [endDate] = useLocalStorage<Date>(`TmpProposal-${address}-endDate`, defaultValues.endDate)
	const [majority] = useLocalStorage<number>(`TmpProposal-${address}-majority`, defaultValues.majority)
	const [deposit] = useLocalStorage<number>(`TmpProposal-${address}-deposit`, defaultValues.deposit)
	const [metaDataCID] = useLocalStorage<string>(`TmpProposal-${address}-metaDataCID`, defaultValues.metaDataCID)
	const [campaignId] = useLocalStorage<string>(`TmpProposal-${address}-campaignId`, defaultValues.campaignId)
	const [amount] = useLocalStorage<number>(`TmpProposal-${address}-amount`, defaultValues.amount)
	const [currencyId] = useLocalStorage<number>(`TmpProposal-${address}-currencyId`, defaultValues.currencyId)
	const [beneficiaryAddress] = useLocalStorage<string>(
		`TmpProposal-${address}-beneficiaryAddress`,
		defaultValues.beneficiaryAddress,
	)
	const [state, setState] = useState<TMPProposal>({
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
