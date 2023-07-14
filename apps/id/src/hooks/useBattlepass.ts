import { useEffect, useState } from 'react'
import { useLogger } from 'src/hooks/useLogger'

// import { useBattlepassSubscription } from 'src/queries'

export type TProps = {
	id?: string
}

type TBattlepass = {
	id: string
	name: string
	description: string
	slug: string
	iconImageCid: string
	bannerImageCid: string
	type: string
	price: number
	rating: number
}

type TBattlepasses = {
	battlepass: TBattlepass[]
}

export const useBattlepass = (id): TProps => {
	const logger = useLogger('Battlepass')

	const [battlepass, setBattlepass] = useState({})
	// const { loading, data, error } = // useBattlepassSubscription({ variables: { id } })
	let loading, data, error

	useEffect(() => {
		if (loading || !data) return
		setBattlepass({
			...battlepass,
			data,
		})
	}, [loading, data])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return battlepass
}
