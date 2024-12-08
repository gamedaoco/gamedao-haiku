import { formatNumber } from '@gamedao/utils'
import { Stack, Typography, Box } from '@mui/material'

export const DappInfo = ({ dapp }) => {
	return (
		<Stack direction="column" spacing={2} sx={{ padding: 2, border: 1, borderColor: '#ffffff33' }}>
			<Stack direction="row" spacing={2} alignContent="center">
				<img src={dapp.iconUrl} width={64} height={64} />
				<Box>
					<Typography variant={'h4'}>{dapp.name}</Typography>
					<Typography variant={'body1'}>{dapp.shortDescription}</Typography>
				</Box>
			</Stack>
			<Box>
				<Typography variant={'body1'}>Total Value Locked (TVL)</Typography>
				<Stack direction="row" spacing={2} justifyContent="space-between">
					<Stack direction="column">
						<Typography variant={'micro'} color={'white'}>
							$ASTR
						</Typography>
						<Typography variant={'hero2'} color={'white'}>
							{formatNumber(dapp.astr) || '...'}
						</Typography>
					</Stack>
					<Stack direction="column">
						<Typography variant={'micro'} color={'white'}>
							USD
						</Typography>
						<Typography variant={'hero2'} color={'white'}>
							${formatNumber(dapp.usd) || '...'}
						</Typography>
					</Stack>
					<Stack direction="column">
						<Typography variant={'micro'} color={'white'}>
							Stakers
						</Typography>
						<Typography variant={'hero2'} color={'white'}>
							{dapp.stakers || '...'}
						</Typography>
					</Stack>
				</Stack>
			</Box>
		</Stack>
	)
}
