import React, { useState, useEffect } from 'react'
import { NavLink } from 'src/components/NavLink/navLink'
import { useTheme } from '@mui/material/styles'
import { Typography, styled, Card, Box, Stack, CardHeader, CardContent, Avatar } from '@mui/material'
import { Person, Key } from '@mui/icons-material'

const gateway = 'https://ipfs.gamedao.co/gateway/'
const toLink = '/app/organisations/'

export const TileCard = (props) => {
	const theme = useTheme()
	const bgPlain = { backgroundColor: theme.palette.grey[500_16] }
	const title = props.data.name.length > 17 ? `${props.data.name.slice(0, 17)} ...` : props.data.name
	const description =
		props.metadata?.description.length > 70
			? `${props.metadata?.description.slice(0, 70)} ...`
			: props.metadata?.description.slice(0, 70)
	const SubHeader = () => {
		return (
			<Box sx={{ display: 'flex', gap: '5px', alignItems: 'stretch' }}>
				<Person />
				<span>{`${props.data.members.length} Member `}</span>
				<span>
					<Key />
				</span>
				<span>{'Public'}</span>
			</Box>
		)
	}

	return (
		<NavLink href={`${toLink}${props.data.id}`}>
			<Card
				sx={{
					width: '344px',
					height: '172px',
					borderRadius: '16px',
					background: '#212B36',
					'&:hover': { borderColor: 'primary.main' },
					...bgPlain,
				}}
			>
				<CardHeader
					avatar={<Avatar src={`${gateway}${props.metadata?.logo}`} sx={{ width: 64, height: 64 }}></Avatar>}
					title={title}
					subheader={<SubHeader />}
				/>
				<CardContent>
					<Typography>{description}</Typography>
				</CardContent>
			</Card>
		</NavLink>
	)
}
