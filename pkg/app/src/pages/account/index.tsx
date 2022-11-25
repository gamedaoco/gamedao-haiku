import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AccountTabs } from 'src/@types/account'

export function AccountPage() {
	const { push } = useRouter()

	useEffect(() => {
		push(`/account/${AccountTabs.OVERVIEW}`)
	}, [push])
}

export default AccountPage
