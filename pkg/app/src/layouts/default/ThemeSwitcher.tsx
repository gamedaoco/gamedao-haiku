import React from 'react'
import useSettings from 'src/hooks/useSettings'

import { useTheme, styled } from '@mui/material/styles'
import { Divider, Paper } from '@mui/material'
import { Icons, ICON_MAPPING } from 'src/components/Icons'

const ThemeSwitcher = () => {
	const theme = useTheme()
	const { themeMode, onChangeMode } = useSettings()

	return (
		<Paper
			sx={{
				display: 'flex',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				borderRadius: '1rem',
				border: '1px solid ' + theme.palette.grey[500_32],
				backgroundColor: 'transparent',
				margin: 'auto',
				height: '100%',
				p: '1rem',
				'*': { transitionTimingFunction: 'ease-in-out;', transitionDuration: '150ms' },
			}}
		>
			<Icons
				src={ICON_MAPPING.moon}
				alt="moon"
				sx={{
					cursor: 'pointer',
					filter: themeMode === 'light' ? 'invert(0)' : 'invert(0.5)',
				}}
				onClick={(e) => onChangeMode(e)}
			/>
			<Divider orientation="vertical" variant="middle" flexItem />
			<Icons
				src={ICON_MAPPING.sun}
				alt="sun"
				sx={{
					cursor: 'pointer',
					filter: themeMode === 'light' ? 'invert(0.5)' : 'invert(1)',
				}}
				onClick={(e) => onChangeMode(e)}
			/>
		</Paper>
	)
}

export default ThemeSwitcher
