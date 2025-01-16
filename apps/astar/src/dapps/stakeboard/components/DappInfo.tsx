import { formatNumber } from '@gamedao/utils'
import { Grid, Stack, Typography, Box } from '@mui/material'

export const DappInfo = ({ dapp }) => {
	{
		/* <Stack direction="column" spacing={2} sx={{ padding: 2, border: 1, borderColor: '#ffffff33' }}> */
	}
	return (
		<Grid container sx={{ padding: 4, border: '1px solid #ffffff33' }}>
			<Grid item xs={12} sx={{ borderBottom: '1px dotted #ffffff33' }} pb={2} mb={2}>
				<Stack direction="row" spacing={4} alignContent="center">
					<img src={dapp.iconUrl} width={64} height={64} />
					<Box>
						<Typography variant={'h4'}>{dapp.name}</Typography>
						<Typography variant={'body1'}>{dapp.shortDescription}</Typography>
					</Box>
				</Stack>
			</Grid>
			<Grid item xs={12} pb={2}>
				<Typography variant={'body1'}>Total Value Locked (TVL)</Typography>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Stack direction="column">
					<Typography variant={'micro'} color={'white'}>
						$ASTR
					</Typography>
					<Typography variant={'hero2'} color={'white'}>
						{formatNumber(dapp.astr) || '...'}
					</Typography>
				</Stack>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Stack direction="column">
					<Typography variant={'micro'} color={'white'}>
						USD
					</Typography>
					<Typography variant={'hero2'} color={'white'}>
						${formatNumber(dapp.usd) || '...'}
					</Typography>
				</Stack>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Stack direction="column">
					<Typography variant={'micro'} color={'white'}>
						Stakers
					</Typography>
					<Typography variant={'hero2'} color={'white'}>
						{dapp.stakers || '...'}
					</Typography>
				</Stack>
			</Grid>
		</Grid>
	)
	{
		/* </Stack> */
	}
}
