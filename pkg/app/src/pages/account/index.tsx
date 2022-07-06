import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const AccountPage = () => {
	const { push } = useRouter()

	useEffect(() => {
		push('/account/overview')
	}, [])
}

export default AccountPage
