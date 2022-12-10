import { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ContentTabs } from 'constants/dapps'

import { useTheme } from '@mui/material/styles'
import { Box, Grid, Typography } from '@mui/material'

import { ProposalDetail } from 'components/TabPanels/Proposal/detail'
import { ProposalOverview } from 'components/TabPanels/Proposal/overview'

type TProps = {
	id?: string
	pid?: string
	org?: string
}

type TArgs = {
	args?: TProps
}

export function Governance({ args }: TArgs) {
	const { id, pid, org } = args

	const [selectedProposal, selectProposal] = useState(null)

	const theme = useTheme()
	const { t } = useTranslation()

	// if (!organisation) return <Loader/>
	if (selectedProposal) return

	return (
		<Fragment>
			<ProposalDetail
				organization={org}
				proposalId={pid}
				isMember={true}
				// goBack={() => handleTabSelect('proposals')}
			/>
			{/*<ProposalOverview organizationId={organizationIdState} isMember={isMemberState} />*/}
		</Fragment>
	)
}

export default Governance
