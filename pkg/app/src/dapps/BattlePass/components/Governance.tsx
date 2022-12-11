import { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ContentTabs } from 'constants/dapps'

import { useTheme } from '@mui/material/styles'
import { Box, Grid, Typography } from '@mui/material'

import { ProposalDetail } from 'components/TabPanels/Proposal/detail'
import { ProposalOverview } from 'components/TabPanels/Proposal/overview'
import { Organization } from 'src/queries'

type TProps = {
	id?: string
	pid?: string
	organization?: Organization
}

type TArgs = {
	args?: TProps
}

export function Governance({ args }: TArgs) {
	const { id, pid, organization } = args

	const [selectedProposal, selectProposal] = useState(null)

	const theme = useTheme()
	const { t } = useTranslation()

	// if (!organisation) return <Loader/>
	if (selectedProposal) return

	return (
		<Fragment>
			<ProposalDetail
				organization={organization}
				proposalId={pid}
				isMember={true}
				// goBack={() => handleTabSelect('proposals')}
			/>
			{/*<ProposalOverview organizationId={organizationIdState} isMember={isMemberState} />*/}
		</Fragment>
	)
}

export default Governance
