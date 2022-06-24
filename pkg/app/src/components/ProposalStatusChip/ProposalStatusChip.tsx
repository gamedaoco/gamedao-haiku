import React from 'react'

import { Chip } from '@mui/material'

interface ComponentProps {
	status: number
}

export function ProposalStatusChip({ status }: ComponentProps) {
	switch (status) {
		case 0:
			return <Chip color="secondary" label="Init" variant="outlined" />
		case 1:
			return <Chip color="secondary" label="Active" />
		case 2:
			return <Chip color="success" label="Accepted" variant="outlined" />
		case 3:
			return <Chip color="error" label="Rejected" variant="outlined" />
		case 4:
			return <Chip label="Expired" variant="outlined" />
		case 5:
			return <Chip color="warning" label="Aborted" variant="outlined" />
		case 6:
			return <Chip label="Finalized" />
	}

	return <Chip color="error" label="Unknown status" />
}
