import { BattlepassViews } from 'src/constants/battlepass'
import { TabContext, TabPanel } from '@mui/lab'
import { Container, Paper, Stack, Box } from '@mui/material'
import { Header } from '../components/Header'
import { DashboardView } from './Dashboard'
import { LeaderboardView } from './Leaderboard'
import { AdminView } from './Admin'

type TArgs = {
	id: string
	orgId?: string
	view?: BattlepassViews
}
type TProps = {
	args: TArgs
}

export const Battlepass = ({ args }: TProps) => {
	const { id, orgId, view } = args

	return (
		<Stack spacing={4}>
			<Paper
				variant={'glass'}
				sx={{
					background: '#111111ee',
					backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), #000000aa)`,
				}}
			>
				<Header id={id} orgId={orgId} view={view} />
			</Paper>
			<Box p={[2, 4]} style={{ width: '100%', minHeight: '100vh' }}>
				<Box component="main" sx={{ flexGrow: 1 }}>
					<Container disableGutters maxWidth="xl" sx={{ border: 0 }}>
						<TabContext value={view}>
							<TabPanel value="dashboard">
								<DashboardView id={id} />
							</TabPanel>
							<TabPanel value="leaderboard">
								<LeaderboardView id={id} />
							</TabPanel>
							<TabPanel value="admin">
								<AdminView id={id} />
							</TabPanel>
						</TabContext>
					</Container>
				</Box>
			</Box>
		</Stack>
	)
}
