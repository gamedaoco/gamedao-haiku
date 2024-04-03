import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useGetOrganizationByIdQuery } from 'src/queries'

import { Loader } from 'components/atoms/Loader'

export function Page() {
	const { query, push } = useRouter()
	const id = query?.id as string

	const { loading, data, error } = useGetOrganizationByIdQuery({ variables: { id: id } })

	console.log(loading, query)
	console.log(data)

	useEffect(() => {
		if (loading || !data) return
		if (data?.organization?.length === 0) push('/unity/overview') // 404
		push(`/unity/${id}/dashboard`)
	}, [loading, data?.organization, push])

	return loading ? <Loader /> : null
}

export default Page
