import { ReactNode } from 'react'

import { CircularProgress, Stack, Typography } from '@mui/material'
import { useAppContext } from 'providers/app/modules/context'

interface ComponentProps {
	children: ReactNode
}

export function ReadyProvider({ children }: ComponentProps) {
	const appContext = useAppContext()

	if (!appContext.ready) {
		return (
			<Stack width="100vw" height="100vh" justifyContent="center" alignItems="center" spacing={6}>
				<Typography variant={'h5'}>Loading...</Typography>
				<CircularProgress />
			</Stack>
		)
	}

	return <>{children}</>
}
