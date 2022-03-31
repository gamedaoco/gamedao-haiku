import React, { useState, useEffect } from 'react'
import { BodyData } from 'src/@types/bodydata'

import { fetchIpfsJson } from 'src/utils/ipfs'

import { TileCard } from './modules/tileCard'

interface IpfsMetadata {
	description: string
	email: string
	logo: string
	name: string
	repo: string
	website: string
}

interface ComponentProps {
	item: BodyData
}

export function Item({ item }: ComponentProps) {
	const [metadata, setMetadata] = useState<IpfsMetadata>(null)

	useEffect(() => {
		const fetch = async () => {
			let result = await fetchIpfsJson(item?.cid)
			setMetadata(result)
		}
		fetch()
	}, [item])

	return <TileCard metadata={metadata} item={item}></TileCard>
}
