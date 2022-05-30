import { TMPProposal } from 'src/@types/proposal'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { defaultValuesTMPProposal as defaultValues } from 'src/constants'
import { useEffect, useState } from 'react'

export function useTMPProposal(): TMPProposal {
	const address = useCurrentAccountAddress()
	const [selectedType] = useLocalStorage<number>(`TmpProposal-${address}-selectedType`, defaultValues.type)
	const [nameState] = useLocalStorage<string>(`TmpProposal-${address}-nameState`, defaultValues.name)
	const [description] = useLocalStorage<string>(`TmpProposal-${address}-description`, defaultValues.description)
	const [startDate] = useLocalStorage<Date>(`TmpProposal-${address}-startDate`, defaultValues.startDate)
	const [endDate] = useLocalStorage<Date>(`TmpProposal-${address}-endDate`, defaultValues.endDate)
	const [majority] = useLocalStorage<number>(`TmpProposal-${address}-majority`, defaultValues.majority)
	const [deposit] = useLocalStorage<number>(`TmpProposal-${address}-deposit`, defaultValues.deposit)
	const [state, setState] = useState<TMPProposal>({
		type: selectedType,
		name: nameState,
		description: description,
		startDate: startDate,
		endDate: endDate,
		majority: majority,
		deposit: deposit,
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
		})
	}, [selectedType, nameState, description, startDate, endDate, majority, deposit])

	return state
}
