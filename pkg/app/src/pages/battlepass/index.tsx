import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import { Layout } from 'layouts/v2'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Overview } from 'dapps/battlepass'
import { Add, ArrowDownward } from '@mui/icons-material'

export function Page() {
	const { t } = useTranslation()
	const { push } = useRouter()
	const address = useCurrentAccountAddress()

	const handleCreate = (e) => {
		if (!address) return
		push('/battlepass/create')
	}

	return (
		<Layout showHeader showFooter>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">Battlepass</Typography>
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
					<Typography pb={4} variant="body1" sx={{ maxWidth: { sx: '100%', md: '75%', lg: '50%' } }}>
						Engage with your favourite games, guilds and creators.
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
