import React from 'react'
import type { Body } from '@gamedao-haiku/graphql/dist'

import { TileCard } from './modules/tileCard'

interface ComponentProps {
	item: Body
}

export function Item({ item }: ComponentProps) {
	return <TileCard item={item}></TileCard>
}
