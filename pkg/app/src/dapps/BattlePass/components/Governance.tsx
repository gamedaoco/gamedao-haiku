import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { OrganizationTabs } from 'constants/organization'

import { useTheme } from '@mui/material/styles'
import { Box, Grid, Typography } from '@mui/material'

import { ProposalDetail } from 'components/TabPanels/Proposal/detail'
import { ProposalOverview } from 'components/TabPanels/Proposal/overview'

type TProps = {
	id?: string
	pid?: string
}

type TArgs = {
	args?: TProps
}

export function Governance({ args }: TArgs) {
	const { id, pid } = args

	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<Fragment>
			{/*			{proposalIdState && organizationState ? (
				<ProposalDetail
					organization={org}
					proposalId={pid}
					isMember={isMember}
					// goBack={() => handleTabSelect('proposals')}
				/>
			) : (
				<ProposalOverview organizationId={organizationIdState} isMember={isMemberState} />
			)}*/}
		</Fragment>
	)
}

export default Governance
