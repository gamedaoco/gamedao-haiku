import { bigSmile } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Logger } from 'src/utils/logger'

const log = Logger('avatar')

const AvatarIndex = async (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).end()
}

export default AvatarIndex
