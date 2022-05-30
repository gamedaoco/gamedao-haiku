import type { TMPProposalState } from 'src/@types/proposal'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { defaultValuesTMPProposal as defaultValues } from 'src/constants'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useCallback } from 'react'

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

	// Clear state after re
	const clearAll = useCallback(() => {
		setSelectedType(defaultValues.type)
		setNameState(defaultValues.name)
		setDescription(defaultValues.description)
		setStartDate(defaultValues.startDate)
		setEndDate(defaultValues.endDate)
		setMajority(defaultValues.majority)
		setDeposit(defaultValues.deposit)
	}, [setSelectedType, setNameState, setDescription, setStartDate, setEndDate, setMajority, setDeposit])

	return {
		type: selectedType,
		name: nameState,
		description: description,
		startDate: startDate,
		endDate: endDate,
		majority: majority,
		deposit: deposit,
		setType: setSelectedType,
		setName: setNameState,
		setDescription: setDescription,
		setStartDate: setStartDate,
		setEndDate: setEndDate,
		setMajority: setMajority,
		setDeposit: setDeposit,
		clearAll: clearAll,
	}
}
