import React from 'react'
import Link from 'components/Link'
import { useEffect } from 'react'
// import { useVanityList } from 'hooks/useOrganization'

import { Typography } from '@mui/material'
import { Layout } from 'layouts/default/layout'

export const Page = () => {
	const list = [] //useVanityList()

	return (
		<Layout showHeader showFooter showSidebar>
			<Typography variant={'h3'}>Directory</Typography>
			{list &&
				list.map((item, i) => {
					return (
						<Link key={i} href={`/organisations/${item.id}`}>
							<Typography variant={'caption'} key={i}>
								{item.name} — {item.id}
								<br />
							</Typography>
						</Link>
					)
				})}
		</Layout>
	)
}

export default Page
