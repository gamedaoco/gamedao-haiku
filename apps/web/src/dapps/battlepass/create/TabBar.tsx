import { useState, useEffect, useMemo, useCallback, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import { Box, Tab, Tabs, Stack, useMediaQuery } from '@mui/material'

interface ITabs {
	label: string
	view: string
	disabled: boolean
}

export function TabBar() {
	const { query, push } = useRouter()
	const view = query?.view as string

	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	const tabs = useMemo<ITabs[]>(
		() =>
			[
				{ label: 'dashboard', view: 'dashboard', disabled: false },
				{ label: 'general', view: 'general', disabled: false },
				{ label: 'styling', view: 'styling', disabled: false },
				{ label: 'levels', view: 'levels', disabled: false },
				{ label: 'quests', view: 'quests', disabled: false },
				{ label: 'rewards', view: 'rewards', disabled: false },
			].filter((item) => item !== null),
		[],
	)

	const handleTabChange = useCallback(
		(event: ChangeEvent<{}>, view: string): void => {
			push(`/battlepass/create/${view}`)
		},
		[push],
	)

	return (
		<Box>
			<Stack
				direction={isMd ? 'row' : 'column'}
				spacing={2}
				alignItems="center"
				justifyContent={isMd ? 'space-between' : 'center'}
			>
				<Box>
					<Tabs
						textColor="primary"
						indicatorColor="primary"
						sx={{ height: '72px', pt: '12px' }}
						onChange={handleTabChange}
						value={view}
						TabIndicatorProps={{
							sx: {
								height: '0px',
								borderRadius: '1px',
								'&::after': {
									content: '""',
									position: 'absolute',
									width: '80%',
									borderColor: '#ff00ff',
									borderRadius: '2px 0px 0px 2px',
									boxShadow: '0 0px 20px 2px #00ffcc',
									borderTop: '5px solid white',
									left: '10%',
									right: '10%',
									top: '0',
								},
								'&::before': {
									content: '""',
									position: 'absolute',
									bottom: 0,
									left: '10%',
									right: '10%',
									width: '80%',
									borderRadius: '2px',
									borderTop: '2px solid #00ffcc11',
									zIndex: '100',
								},
							},
						}}
					>
						{tabs.map((tab, i) => (
							<Tab sx={{ p: 2 }} key={i} label={tab.label} value={tab.view} disabled={tab.disabled} />
						))}
					</Tabs>
				</Box>
			</Stack>
		</Box>
	)
}

export default TabBar
