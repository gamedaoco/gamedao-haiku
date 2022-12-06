import React, { useCallback, useEffect, useState } from 'react'
import { ContentTabs } from 'constants/dapps'

import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useAddMemberTransaction } from 'hooks/tx/useAddMemberTransaction'
import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTmpOrganisationState } from 'hooks/useTmpOrganisationState'
import { Organization, useOrganizationByIdSubscription } from 'src/queries'
import { createWarningNotification } from 'src/utils/notificationUtils'
import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'

import { useTheme } from '@mui/material/styles'
import { TabContext, TabPanel } from '@mui/lab'
import {
	Container,
	Avatar,
	Box,
	Button,
	CircularProgress,
	Grid,
	Paper,
	Stack,
	Tab,
	Tabs,
	useMediaQuery,
} from '@mui/material'
import Typography from '@mui/material/Typography'

import { Overview as OverviewPanel } from 'components/TabPanels/Organization/overview'

type Props = {
	id: string
}

export const Overview = ({ id }: Props) => {
	return <OverviewPanel id={id} />
}

export default Overview
