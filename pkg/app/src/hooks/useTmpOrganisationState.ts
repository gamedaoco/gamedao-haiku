import { useLocalStorage } from 'hooks/useLocalStorage'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { TMPOrganisationState } from 'src/@types/organisation'

export function UseTmpOrganisationState(): TMPOrganisationState {
	const address = useCurrentAccountAddress()
	const [selectedType, setSelectedType] = useLocalStorage<number>(`TmpOrg-${address}-selectedType`, 0)
	const [nameState, setNameState] = useLocalStorage<string>(`TmpOrg-${address}-nameState`, '')
	const [selectedMode, setSelectedMode] = useLocalStorage<number>(`TmpOrg-${address}-selectedMode`, 0)
	const [selectedFee, setSelectedFee] = useLocalStorage<number>(`TmpOrg-${address}-selectedFee`, 0)
	const [memberLimit, setMemberLimit] = useLocalStorage<number>(`TmpOrg-${address}-memberLimit`, 0)
	const [feeAmount, setFeeAmount] = useLocalStorage<number>(`TmpOrg-${address}-feeAmount`, 0)
	const [hasWhitelist, setHasWhitelist] = useLocalStorage<boolean>(`TmpOrg-${address}-hasWhitelist`, true)
	const [hasApplication, setHasApplication] = useLocalStorage<boolean>(`TmpOrg-${address}-hasApplication`, false)

	return {
		type: selectedType,
		name: nameState,
		mode: selectedMode,
		feeMode: selectedFee,
		memberLimit: memberLimit,
		feeAmount: feeAmount,
		hasWhitelist: hasWhitelist,
		hasApplication: hasApplication,
		setType: setSelectedType,
		setName: setNameState,
		setMode: setSelectedMode,
		setFeeMode: setSelectedFee,
		setMemberLimit: setMemberLimit,
		setFeeAmount: setFeeAmount,
		setHasWhitelist: setHasWhitelist,
		setHasApplication: setHasApplication,
	}
}
