import { useCallback } from 'react'

import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import type { TMPProposalState } from 'src/@types/proposal'
import { defaultValuesTMPProposal as defaultValues } from 'src/constants'

// TODO: Replace store logic with db for cross device storage

export function useTMPProposalState(): TMPProposalState {
	const address = useCurrentAccountAddress()
	const [selectedType, setSelectedType] = useLocalStorage<number>(
		`TmpProposal-${address}-selectedType`,
		defaultValues.type,
	)
	const [nameState, setNameState] = useLocalStorage<string>(`TmpProposal-${address}-nameState`, defaultValues.name)
	const [description, setDescription] = useLocalStorage<string>(
		`TmpProposal-${address}-description`,
		defaultValues.description,
	)
	const [startDate, setStartDate] = useLocalStorage<Date>(`TmpProposal-${address}-startDate`, defaultValues.startDate)
	const [endDate, setEndDate] = useLocalStorage<Date>(`TmpProposal-${address}-endDate`, defaultValues.endDate)
	const [majority, setMajority] = useLocalStorage<number>(`TmpProposal-${address}-majority`, defaultValues.majority)
	const [deposit, setDeposit] = useLocalStorage<number>(`TmpProposal-${address}-deposit`, defaultValues.deposit)
	const [campaignId, setCampaignId] = useLocalStorage<string>(
		`TmpProposal-${address}-campaignId`,
		defaultValues.campaignId,
	)
	const [amount, setAmount] = useLocalStorage<number>(`TmpProposal-${address}-amount`, defaultValues.amount)
	const [metaDataCID, setMetaDataCID] = useLocalStorage<string>(
		`TmpProposal-${address}-metaDataCID`,
		defaultValues.metaDataCID,
	)
	const [currencyId, setCurrencyId] = useLocalStorage<number>(
		`TmpProposal-${address}-currencyId`,
		defaultValues.currencyId,
	)
	const [beneficiaryAddress, setBeneficiaryAddress] = useLocalStorage<string>(
		`TmpProposal-${address}-beneficiaryAddress`,
		defaultValues.beneficiaryAddress,
	)

	// Clear state after re
	const clearAll = useCallback(() => {
		setSelectedType(defaultValues.type)
		setNameState(defaultValues.name)
		setDescription(defaultValues.description)
		setStartDate(defaultValues.startDate)
		setEndDate(defaultValues.endDate)
		setMajority(defaultValues.majority)
		setDeposit(defaultValues.deposit)
		setCampaignId(defaultValues.campaignId)
		setAmount(defaultValues.amount)
		setMetaDataCID(defaultValues.metaDataCID)
		setCurrencyId(defaultValues.currencyId)
		setBeneficiaryAddress(defaultValues.beneficiaryAddress)
	}, [
		setSelectedType,
		setNameState,
		setDescription,
		setStartDate,
		setEndDate,
		setMajority,
		setDeposit,
		setCampaignId,
		setAmount,
		setMetaDataCID,
		setCurrencyId,
		setBeneficiaryAddress,
	])

	return {
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
		setType: setSelectedType,
		setName: setNameState,
		setDescription: setDescription,
		setStartDate: setStartDate,
		setEndDate: setEndDate,
		setMajority: setMajority,
		setDeposit: setDeposit,
		setCampaignId: setCampaignId,
		setAmount: setAmount,
		setMetaDataCID: setMetaDataCID,
		setCurrencyId: setCurrencyId,
		setBeneficiaryAddress: setBeneficiaryAddress,
		clearAll: clearAll,
	}
}
