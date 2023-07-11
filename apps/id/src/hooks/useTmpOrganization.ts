import { useEffect, useState } from 'react'
import type { TMPOrganization } from 'src/@types/organization'
import { defaultValuesTmpOrganization as defaultValues } from 'src/constants'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useLocalStorage } from 'src/hooks/useLocalStorage'

export function useTmpOrganization(): TMPOrganization {
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

	const [url] = useLocalStorage<string>(`TmpOrg-${address}-url`, defaultValues.url)
	const [location] = useLocalStorage<string>(`TmpOrg-${address}-location`, defaultValues.location)
	const [tags] = useLocalStorage<string[]>(`TmpOrg-${address}-tags`, defaultValues.tags)

	const [state, setState] = useState<TMPOrganization>({
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
		url: url,
		location: location,
		tags: tags,
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
			url: url,
			location: location,
			tags: tags,
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
		url,
		location,
		tags,
	])

	return state
}
