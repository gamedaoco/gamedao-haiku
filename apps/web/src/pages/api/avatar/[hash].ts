// export const config = { runtime: 'edge', }

import type { NextApiRequest, NextApiResponse } from 'next'
import { createAvatar } from '@dicebear/core'
import { bigSmile } from '@dicebear/collection'

import { Logger } from 'src/lib/logger'
const log = Logger('avatar')

const Avatar = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req.body
	const { hash } = req.query

	if (hash !== null) {
		const avatar = createAvatar(bigSmile, { seed: hash as string })
		const svg = avatar.toString()
		res.writeHead(200, {
			'Content-Type': `image/svg+xml`,
			'Cache-Control': `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`,
		})
		res.end(svg)
	} else {
		res.status(400).send('Missing hash')
	}
}

export default Avatar
