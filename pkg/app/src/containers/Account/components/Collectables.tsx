import React, { useEffect } from 'react'
import Script from 'next/script'

import { useTranslation } from 'react-i18next'
import { useCollectablesForUserLazyQuery as useCollectables } from 'src/queries'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { getKusamaAddressFromAccountState as getKusamaAddress } from 'src/utils/accountUtils'

import { Box, Card, Typography } from '@mui/material'

// import CollectablesGrid from './Collectables/'

export function Collectables() {
	const { t } = useTranslation()
	const [loadCollectables, { loading, data }] = useCollectables()

	const account = useCurrentAccountState()

	useEffect(() => {
		if (account) {
			loadCollectables({ variables: { owner: getKusamaAddress(account) } })
		}
	}, [account, loadCollectables])

	return <Box></Box>
}

export default Collectables
