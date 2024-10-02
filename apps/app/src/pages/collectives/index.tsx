// landingpage for unity to promote existing organizations
import { useRouter } from 'next/router'
import { Layout } from 'layouts/v2'
// import { Landingpage } from 'src/dapps/unity/views/landingpage'

export function Page() {
	const { push } = useRouter()
	push('/collectives/overview')
	// return <Layout showHeader showFooter noContainer></Layout>
}

export default Page
