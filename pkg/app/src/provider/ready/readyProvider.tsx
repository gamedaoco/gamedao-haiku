import { useAppContext } from 'provider/app/modules/context'
import { CircularProgress, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface ComponentProps {
	children: ReactNode
}

export function ReadyProvider({ children }: ComponentProps) {
	const appContext = useAppContext()

	if (!appContext.ready) {
		return (
			<Stack width="100vw" height="100vh" justifyContent="center" alignItems="center" spacing={6}>
				<Typography variant={'h5'}>The app is prepared for you</Typography>
				<CircularProgress />
			</Stack>
		)
	}

	return <>{children}</>
}
