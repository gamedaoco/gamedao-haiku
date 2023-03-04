// whoever came up with this implementation idea shall...

import { useCallback } from 'react'

import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useLocalStorage } from 'hooks/useLocalStorage'
import type { TMPOrganisationState } from 'src/@types/organisation'
import { defaultValuesTmpOrganisation as defaultValues } from 'src/constants'

// TODO: Replace store logic with db for cross device storage

export function useTmpOrganisationState(): TMPOrganisationState {
	const address = useCurrentAccountAddress()
	const [selectedType, setSelectedType] = useLocalStorage<number>(
		`TmpOrg-${address}-selectedType`,
		defaultValues.type,
	)
	const [nameState, setNameState] = useLocalStorage<string>(`TmpOrg-${address}-nameState`, defaultValues.name)
	const [selectedMode, setSelectedMode] = useLocalStorage<number>(
		`TmpOrg-${address}-selectedMode`,
		defaultValues.mode,
	)
	const [selectedFee, setSelectedFee] = useLocalStorage<number>(
		`TmpOrg-${address}-selectedFee`,
		defaultValues.feeMode,
	)
	const [memberLimit, setMemberLimit] = useLocalStorage<number>(
		`TmpOrg-${address}-memberLimit`,
		defaultValues.memberLimit,
	)
	const [feeAmount, setFeeAmount] = useLocalStorage<number>(`TmpOrg-${address}-feeAmount`, defaultValues.feeAmount)
	const [hasWhitelist, setHasWhitelist] = useLocalStorage<boolean>(
		`TmpOrg-${address}-hasWhitelist`,
		defaultValues.hasWhitelist,
	)
	const [hasApplication, setHasApplication] = useLocalStorage<boolean>(
		`TmpOrg-${address}-hasApplication`,
		defaultValues.hasApplication,
	)
	const [headerCID, setHeaderCID] = useLocalStorage<string>(`TmpOrg-${address}-headerCID`, defaultValues.headerCID)
	const [logoCID, setLogoCID] = useLocalStorage<string>(`TmpOrg-${address}-logoCID`, defaultValues.logoCID)
	const [description, setDescription] = useLocalStorage<string>(
		`TmpOrg-${address}-description`,
		defaultValues.description,
	)

	// adding this temporarily, this whole storage and caching needs a refactor...

	const [url, setUrl] = useLocalStorage<string>(
		`TmpOrg-${address}-url`,
		defaultValues.url,
	)
	const [location, setLocation] = useLocalStorage<string>(
		`TmpOrg-${address}-location`,
		defaultValues.location,
	)
	// TODO: type array
	const [tags, setTags] = useLocalStorage<any>(
		`TmpOrg-${address}-tags`,
		defaultValues.tags,
	)

	//

	const [metaDataCID, setMetaDataCID] = useLocalStorage<string>(
		`TmpOrg-${address}-metaDataCID`,
		defaultValues.metaDataCID,
	)
	const [deposit, setDeposit] = useLocalStorage<number>(`TmpOrg-${address}-deposit`, defaultValues.deposit)

	// Clear state after re
	const clearAll = useCallback(() => {
		setSelectedType(defaultValues.type)
		setNameState(defaultValues.name)
		setSelectedMode(defaultValues.mode)
		setSelectedFee(defaultValues.feeMode)
		setMemberLimit(defaultValues.memberLimit)
		setFeeAmount(defaultValues.feeAmount)
		setHasWhitelist(defaultValues.hasWhitelist)
		setHasApplication(defaultValues.hasApplication)
		setHeaderCID(defaultValues.headerCID)
		setLogoCID(defaultValues.logoCID)
		setDescription(defaultValues.description)
		setMetaDataCID(defaultValues.metaDataCID)
		setDeposit(defaultValues.deposit)
		setUrl(defaultValues.url)
		setLocation(defaultValues.location)
		setTags(defaultValues.tags)
	}, [
		setSelectedType,
		setNameState,
		setSelectedMode,
		setSelectedFee,
		setMemberLimit,
		setFeeAmount,
		setHasWhitelist,
		setHasApplication,
		setHeaderCID,
		setLogoCID,
		setDescription,
		setMetaDataCID,
		setDeposit,
		setUrl,
		setLocation,
		setTags,
	])

	return {
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
		setType: setSelectedType,
		setName: setNameState,
		setMode: setSelectedMode,
		setFeeMode: setSelectedFee,
		setMemberLimit: setMemberLimit,
		setFeeAmount: setFeeAmount,
		setHasWhitelist: setHasWhitelist,
		setHasApplication: setHasApplication,
		setHeaderCID: setHeaderCID,
		setLogoCID: setLogoCID,
		setDescription: setDescription,
		setMetaDataCID: setMetaDataCID,
		setDeposit: setDeposit,
		clearAll: clearAll,
		url: url,
		setUrl: setUrl,
		location: location,
		setLocation: setLocation,
		tags: tags,
		setTags: setTags,
	}
}
