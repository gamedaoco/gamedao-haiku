import React, { useState, useEffect } from 'react'
import { NavLink } from 'src/components/NavLink/navLink'
import { alpha, useTheme } from '@mui/material/styles'
import { Typography, styled, Card, Box, Stack, CardHeader, CardContent, Avatar } from '@mui/material'
import { Person, Key } from '@mui/icons-material'

// const Image = styled(Box)(({ theme }) => ({
// 	width: '100%',
// 	backgroundSize: 'contain',
// 	backgroundRepeat: 'no-repeat',
// 	backgroundPosition: 'center center',
// 	['&:after']: {
// 		display: 'block',
// 		content: '" "',
// 		paddingTop: '100%',
// 	},
// }))

export const TileCard =
	// : React.FC<
	// 	React.PropsWithChildren<{
	// 		feature?: boolean
	// 		imageURL: string
	// 		metaHeadline: string
	// 		headline: string
	// 		progressValue?: number
	// 		metaContent?: React.ReactNode
	// 		linkTo?: string
	// 	}>
	// >
	(props) => {
		console.log('props in item', props)
		const theme = useTheme()
		const bgPlain = { backgroundColor: theme.palette.grey[500_16] }
		const SubHeader = () => {
			return (
				<Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
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
			<NavLink href={`/app/organisations/${props.data.id}`}>
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
					<CardHeader avatar={<Avatar>N</Avatar>} title={props.data.name} subheader={<SubHeader />} />
					<CardContent>
						<Typography>{props.children.props.children}</Typography>
					</CardContent>
				</Card>
			</NavLink>
		)
	}
