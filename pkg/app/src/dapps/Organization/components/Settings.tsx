import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material/styles'
import { Box, Grid, Typography } from '@mui/material'

export function Settings() {
	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<Box>
			<Grid container spacing={theme.spacing(2)} sx={{ flexDirection: 'row', flexGrow: 1 }}>
				<Grid item xs={12} md={6}>
					Hello.
				</Grid>
			</Grid>
		</Box>
	)
}

export default Settings
