import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { Layout } from 'src/layouts/v2'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'

import { Overview } from 'dapps/unity/views/Overview'

export function Page() {
	const { t } = useTranslation()
	const { push } = useRouter()

	const address = useCurrentAccountAddress()

	const handleCreate = (e) => {
		if (!address) return
		push('/unity/create')
	}

	return (
		<Layout showHeader showFooter>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">Unity</Typography>
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
						Unity is a framework that allows you to create, manage, and interact with organizations: Join
						existing organizations to take part in their governance. Create an organization and operate it
						any way you want — as an individual or collective, with your company, team or community.
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
