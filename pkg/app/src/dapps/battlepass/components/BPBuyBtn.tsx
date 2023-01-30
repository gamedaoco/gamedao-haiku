import { Fragment, useCallback, useEffect, useState } from 'react'
import { useAppContext } from 'providers/app/modules/context'
import { useJoinBattlepassMutation } from 'src/queries'
import { useGetBattlepassForUserQuery } from 'src/queries'
import { Button } from '@mui/material'

type TArgs = { id: string }
type TProps = { args: TArgs }

export const BPBuyBtn = ({ args }: TProps) => {
	const { id } = args
	const { uuid } = useAppContext()
	const { data } = useGetBattlepassForUserQuery({ variables: { uuid: uuid } })

	const [enableBuy, setEnable] = useState(false)

	useEffect(() => {
		if (!data) return
		// console.log('buy',data.BattlepassBot.BattlepassIdentities)
		const pass = data.BattlepassBot.BattlepassIdentities[0].members
			.map((i) => i.battlepass.chainId)
			.filter((e) => e === id)[0]
		setEnable(!(pass === id))
	}, [data?.BattlepassBot?.BattlepassIdentities])

	const [joinBattlepassMutation] = useJoinBattlepassMutation({
		variables: { battlepass: id, uuid: uuid },
	})

	const handleJoin = () => {
		// console.log('buy battlepass:', id, uuid)
		const res = joinBattlepassMutation()
	}

	if (!enableBuy) return null

	return (
		<Fragment>
			<Button
				onClick={() => handleJoin()}
				variant="lemon"
				// fullWidth
			>
				Join Battlepass
			</Button>
		</Fragment>
	)
}
