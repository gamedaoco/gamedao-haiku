import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AccountTabs } from 'constants/account'

export function Page() {
	const { push } = useRouter()

	useEffect(() => {
		push(`/account/${AccountTabs.OVERVIEW}`)
	}, [push])
}

export default Page
