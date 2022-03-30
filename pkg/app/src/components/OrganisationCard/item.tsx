import React, { useState, useEffect } from 'react'

import { fetchIpfsJson } from 'src/utils/ipfs'

import { TileCard } from './modules/tileCard'

export function Item({ data }) {
	const [metadata, setMetadata] = useState<any>()

	useEffect(() => {
		const fetch = async () => {
			let result = await fetchIpfsJson(data?.cid)
			setMetadata(result)
		}
		fetch()
	}, [data])

	return <TileCard metadata={metadata} data={data}></TileCard>
}
