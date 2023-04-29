import { useEffect, useState } from 'react'
import { useLogger } from 'src/hooks/useLogger'
import { useBattlepassByIdQuery } from 'src/queries'

export type TBattlepass = {
	id: string
	org: string
	name: string
	description: string
	slug: string
}

export const useBattlepass = (id = null): TBattlepass => {
	const logger = useLogger('Battlepass')
	const [battlepass, setBattlepass] = useState<TBattlepass | null>(null)
	// const { loading, data, error } = useBattlepassByIdQuery({ query: { id } })

	// useEffect(() => {
	// 	if (loading) return
	// 	setBattlepass(null)
	// }, [loading, data])

	return battlepass
}
