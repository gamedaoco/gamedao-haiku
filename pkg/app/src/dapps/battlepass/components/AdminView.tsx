import { Fragment, useState, useEffect } from 'react'
import { scoreToLevelMap } from '../content/mock'
import { BattlepassViews } from 'constants/battlepass'

import { Loader } from 'components/Loader'
import Delete from '@mui/icons-material/DeleteForeverOutlined'
import Edit from '@mui/icons-material/EditOutlined'
import Save from '@mui/icons-material/SaveOutlined'
import { useTheme } from '@mui/material/styles'
import { Grid, useMediaQuery } from '@mui/material'
import { TextField, Typography } from '@mui/material'
import { Paper, Stack, Button } from '@mui/material'
import { Add, Pause } from '@mui/icons-material'

const createRow = (points: number, quests: number, name: string, uuid: string) => {
	return { points, quests, name, uuid }
}

const initialRowState = { points: 0, quests: 0, name: '', uuid: '' }

type TProps = {
	id: string
}

export function AdminView({ id }: TProps) {
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const loading = false

	return loading ? (
		<Loader />
	) : (
		<Grid container alignItems="center" justifyContent="space-between" spacing={theme.spacing(2)}>
			<Grid item>
				<Typography variant="hero1">Administration</Typography>
			</Grid>
			<Grid item>
				<Button startIcon={<Pause fontSize="small" />} variant="outlined" onClick={null}>
					Pause Battlepass
				</Button>
			</Grid>

			<Grid item xs={12} pb={[2, 0]}></Grid>
		</Grid>
	)
}
