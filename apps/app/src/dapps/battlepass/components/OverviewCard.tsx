import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import NextImage from 'next/image'

import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { useConfig } from 'src/hooks/useConfig'

import { useActiveBattlepassSubscription } from 'src/queries'
// import { useJoinBattlePassTX } from 'hooks/tx/useJoinBattlePassTX'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'

import { useTheme } from '@mui/material/styles'
import { Box, Card, Button, Typography, Grid, Stack, Paper } from '@mui/material'
import { CardContent, CardActions } from '@mui/material'
import { Image } from 'components/Image/image'
import { Invitational } from './Invitational'
import { BPCard } from './Card'
// import { Backdrop } from 'components/Backdrop'

type TOverviewCardProps = {
	index?: number
	content?: any // TODO: type content
	handler?: Function
	buy?: Function
	join?: Function
}
type TArgs = {
	args: TOverviewCardProps
}

export const OverviewCard = ({ args }: TArgs) => {
	const config = useConfig()
	const theme = useTheme()

	const { content, join, buy } = args

	const getImageURL = (cid) => (cid ? parseIpfsHash(cid, config.IPFS_GATEWAY) : null)

	const [metadata, setMetadata] = useState(null)
	const [cardImage, setCardImage] = useState(null)

	useEffect(() => {
		if (!content) return
		if (content?.cid.length < 16) {
			setCardImage(getImageURL(content?.organization.header))
		} else {
			const cid = content?.cid.toString()
			const url = parseIpfsHash(cid, config.IPFS_GATEWAY)
			const getContent = async () => {
				const metadata = await fetch(url)
					.then((res) => res.json())
					.then((res) => {
						console.log('metadata', res)
						setMetadata(res)
						const url = getImageURL(res.coverImageCid ?? null)
						setCardImage(url)
					})
			}
			getContent()
		}
	}, [content, setCardImage, setMetadata])

	// console.log('cardImage', cardImage)

	const Backdrop = ({ src, title = null, ...other }) => {
		return src ? (
			<Box
				sx={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					borderRadius: theme.shape.borderRadiusLg,
				}}
				{...other}
			>
				<NextImage fill src={src ?? null} alt={title ?? 'image'} style={{ objectFit: 'cover' }} />
			</Box>
		) : null
	}

	return (
		<Link href={`/battlepass/${content.id}`}>
			{!cardImage && (
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						borderRadius: '2px',
						boxShadow: `0px 20px 30px #00000033`,
						transitionDuration: '0.5s',
						backgroundImage: `url(/svg/empty-line.svg)`,
						backgroundSize: '100% 100%',
						backgroundBlendMode: 'overlay',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						opacity: '25%',
					}}
				/>
			)}

			{cardImage && <Backdrop src={cardImage} />}

			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					transitionDuration: '0.5s',
					opacity: 0.5,
					'&:hover': { opacity: 1 },
				}}
			>
				<Stack
					p={'24px'}
					direction={'column'}
					alignItems={'center'}
					justifyContent={'space-between'}
					spacing={2}
					sx={{ height: '100%', width: '100%' }}
				>
					<Typography variant="h6">{content.organization.name}</Typography>

					<Stack direction="column" alignItems="center" justifyContent="end" sx={{ height: '100%' }}>
						<Typography align="center" variant="pass1">
							{content.name}
						</Typography>
						<Typography variant="caption">Season {content.season}</Typography>

						{/* <Typography variant="body1" sx={{ opacity: 0.5 }}>{content.description}</Typography> */}

						{content.state === 'ACTIVE' && (
							<Typography variant="caption">
								{content.price === 0 ? `free` : `EUR ${content.price / 100} / SEASON`}
							</Typography>
						)}
					</Stack>

					{content.state === 'ACTIVE' && (
						<Stack p={1} direction="row" alignContent="center" justifyContent="center" spacing={1}>
							{join && (
								<Button variant="xs" color="lemon" onClick={() => join()}>
									Join
								</Button>
							)}
							{buy && (
								<Button variant="xs" color="pink" onClick={() => buy()}>
									Buy
								</Button>
							)}
						</Stack>
					)}
				</Stack>
			</Box>
		</Link>
	)
}
