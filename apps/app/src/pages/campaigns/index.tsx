import { useRouter } from 'next/router'
import { Layout } from 'layouts/v2'

export function Page() {
	const { push } = useRouter()
	push('/campaigns/overview')
}

export default Page
