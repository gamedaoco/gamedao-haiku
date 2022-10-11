import React from 'react'

import { Chip } from '@mui/material'

interface ComponentProps {
	status: string
}

export function ProposalStatusChip({ status }: ComponentProps) {
	switch (status) {
		case 'Init':
		case 'Created':
			return <Chip color="secondary" label="Init" variant="outlined" />
		case 'Active':
			return <Chip color="secondary" label="Active" />
		case 'Accepted':
			return <Chip color="success" label="Accepted" variant="outlined" />
		case 'Rejected':
			return <Chip color="error" label="Rejected" variant="outlined" />
		case 'Expired':
			return <Chip label="Expired" variant="outlined" />
		case 'Aborted':
			return <Chip color="warning" label="Aborted" variant="outlined" />
		case 'Finalized':
			return <Chip label="Finalized" />
	}

	return <Chip color="error" label="Unknown status" />
}
