import React from 'react'
import { Layout } from 'layouts/v3'
import { Landingpage } from 'src/dapps/landingpage'

export function Page() {
	return (
		<Layout showHeader showFooter noContainer hideDApps>
			<Landingpage />
		</Layout>
	)
}

export default Page
