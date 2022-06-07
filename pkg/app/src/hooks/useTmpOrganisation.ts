import { useEffect, useState } from 'react'

import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useLocalStorage } from 'hooks/useLocalStorage'
import type { TMPOrganisation } from 'src/@types/organisation'
import { defaultValuesTmpOrganisation as defaultValues } from 'src/constants'

export function useTmpOrganisation(): TMPOrganisation {
	const address = useCurrentAccountAddress()
	const [selectedType] = useLocalStorage<number>(`TmpOrg-${address}-selectedType`, defaultValues.type)
	const [nameState] = useLocalStorage<string>(`TmpOrg-${address}-nameState`, defaultValues.name)
	const [selectedMode] = useLocalStorage<number>(`TmpOrg-${address}-selectedMode`, defaultValues.mode)
	const [selectedFee] = useLocalStorage<number>(`TmpOrg-${address}-selectedFee`, defaultValues.feeMode)
	const [memberLimit] = useLocalStorage<number>(`TmpOrg-${address}-memberLimit`, defaultValues.memberLimit)
	const [feeAmount] = useLocalStorage<number>(`TmpOrg-${address}-feeAmount`, defaultValues.feeAmount)
	const [hasWhitelist] = useLocalStorage<boolean>(`TmpOrg-${address}-hasWhitelist`, defaultValues.hasWhitelist)
	const [hasApplication] = useLocalStorage<boolean>(`TmpOrg-${address}-hasApplication`, defaultValues.hasApplication)
	const [headerCID] = useLocalStorage<string>(`TmpOrg-${address}-headerCID`, defaultValues.headerCID)
	const [logoCID] = useLocalStorage<string>(`TmpOrg-${address}-logoCID`, defaultValues.logoCID)
	const [description] = useLocalStorage<string>(`TmpOrg-${address}-description`, defaultValues.description)
	const [metaDataCID] = useLocalStorage<string>(`TmpOrg-${address}-metaDataCID`, defaultValues.metaDataCID)
	const [deposit] = useLocalStorage<number>(`TmpOrg-${address}-deposit`, defaultValues.deposit)

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
		deposit: deposit,
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
			deposit: deposit,
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
		deposit,
	])

	return state
}
