import { useEffect } from 'react'
import { DisplayValues, useDisplayValuesQuery } from '@gamedao-haiku/graphql/dist'

export function useDisplayValues(): DisplayValues {
	const { loading, error, data } = useDisplayValuesQuery()

	useEffect(() => {
		if (error) {
			console.error('There is an error when querying the display values')
		}
	}, [error])

	return loading ? null : data?.displayValues ?? null
}
