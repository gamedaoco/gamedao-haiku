import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { Layout } from 'src/layouts/default/layout'
import { useBodiesQuery } from '@gamedao-haiku/graphql/dist'
import { CircularProgress } from '@mui/material'

export function GovernancePage() {
	const { loading, data } = useBodiesQuery()

	return (
		<Layout showHeader showFooter showSidebar title="Governance">
			<Box sx={{ p: '4rem', minHeight: '90vh' }}>
				<Paper sx={{ p: '4rem', height: '100%', borderRadius: '.5rem' }} elevation={10}>
					<Typography sx={{ fontWeight: '800' }} variant={'h2'}>
						Hello. Bodies count: {loading ? <CircularProgress /> : data?.bodies.length}
					</Typography>
					{data && (
						<ul>
							{data.bodies.map((body) => (
								<li key={body.id}>
									<div>Name: {body.name}</div>
									<div>
										Members:
										<ul>
											{body.members.map((member) => (
												<li key={`${body.id}-${member.address}`}>{member.address}</li>
											))}
										</ul>
									</div>
								</li>
							))}
						</ul>
					)}
				</Paper>
			</Box>
		</Layout>
	)
}

export default GovernancePage
