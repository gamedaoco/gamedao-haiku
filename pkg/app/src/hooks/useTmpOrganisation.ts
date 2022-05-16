import { TMPOrganisation } from 'src/@types/organisation'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { useEffect, useState } from 'react'

export function UseTmpOrganisation(): TMPOrganisation {
	const address = useCurrentAccountAddress()
	const [selectedType] = useLocalStorage<number>(`TmpOrg-${address}-selectedType`, 0)
	const [nameState] = useLocalStorage<string>(`TmpOrg-${address}-nameState`, '')
	const [selectedMode] = useLocalStorage<number>(`TmpOrg-${address}-selectedMode`, 0)
	const [selectedFee] = useLocalStorage<number>(`TmpOrg-${address}-selectedFee`, 0)
	const [memberLimit] = useLocalStorage<number>(`TmpOrg-${address}-memberLimit`, 0)
	const [feeAmount] = useLocalStorage<number>(`TmpOrg-${address}-feeAmount`, 0)
	const [hasWhitelist] = useLocalStorage<boolean>(`TmpOrg-${address}-hasWhitelist`, true)
	const [hasApplication] = useLocalStorage<boolean>(`TmpOrg-${address}-hasApplication`, false)
	const [headerCID] = useLocalStorage<string>(`TmpOrg-${address}-headerCID`, '')
	const [logoCID] = useLocalStorage<string>(`TmpOrg-${address}-logoCID`, '')
	const [description] = useLocalStorage<string>(`TmpOrg-${address}-description`, '')
	const [metaDataCID] = useLocalStorage<string>(`TmpOrg-${address}-metaDataCID`, '')

	const [state, setState] = useState<TMPOrganisation>({
		type: selectedType,
		name: nameState,
		mode: selectedMode,
		feeMode: selectedFee,
		memberLimit: memberLimit,
		feeAmount: feeAmount,
		hasWhitelist: hasWhitelist,
		hasApplication: hasApplication,
		headerCID: headerCID,
		logoCID: logoCID,
		description: description,
		metaDataCID: metaDataCID,
	})

	useEffect(() => {
		setState({
			type: selectedType,
			name: nameState,
			mode: selectedMode,
			feeMode: selectedFee,
			memberLimit: memberLimit,
			feeAmount: feeAmount,
			hasWhitelist: hasWhitelist,
			hasApplication: hasApplication,
			headerCID: headerCID,
			logoCID: logoCID,
			description: description,
			metaDataCID: metaDataCID,
		})
	}, [
		selectedType,
		nameState,
		selectedMode,
		selectedFee,
		memberLimit,
		feeAmount,
		hasWhitelist,
		hasApplication,
		headerCID,
		logoCID,
		description,
		metaDataCID,
	])

	return state
}
