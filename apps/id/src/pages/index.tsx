import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AccountTabs } from 'src/constants/account'

export function Page() {
	const { push } = useRouter()

	useEffect(() => {
		push(`/account/${AccountTabs.OVERVIEW}`)
	}, [push])
}

export default Page
