import { TabPanel } from '@mui/lab'
import { Typography } from '@mui/material'

export const DashboardTab = () => {
	return (
		<TabPanel sx={{ py: 2 }} value="dashboard">
			<Typography>Dashboard</Typography>
		</TabPanel>
	)
}
