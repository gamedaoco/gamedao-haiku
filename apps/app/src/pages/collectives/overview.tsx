import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { Layout } from 'src/layouts/v2'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'

import { Overview } from 'dapps/collective/views/Overview'

export function Page() {
	const { t } = useTranslation()
	const { push } = useRouter()

	const address = useCurrentAccountAddress()

	const handleCreate = (e) => {
		if (!address) return
		push('/collectives/create')
	}

	return (
		<Layout showHeader showFooter>
			<Box sx={{ mb: 2 }}>
				<Grid container alignItems="center" justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">Collectives</Typography>
					</Grid>
					<Grid item>
						{address && (
							<Button startIcon={<Add fontSize="small" />} variant="outlined" onClick={handleCreate}>
								{t('button:ui:create')}
							</Button>
						)}
					</Grid>
				</Grid>

				<Grid item>
					<Typography variant="body1" sx={{ maxWidth: { sx: '100%', md: '75%', lg: '50%' } }} pb={[2, 4]}>
						Create, manage, and interact with collectives: Join to take part in their governance. Create a collective and operate it any way you
						want — as an individual or group, with your company, team or community.
					</Typography>
				</Grid>

				<Grid item>
					<Overview />
				</Grid>
			</Box>
		</Layout>
	)
}

export default Page
