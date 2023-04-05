import { Button } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'

type TArgs = { id: string }
type TProps = { args: TArgs }

export const ShareBtn = ({ args }: TProps) => {
	const { id } = args
	const str = encodeURI(
		`⚔️ Join our Battlepass on GameDAO: ${process.env.NEXT_PUBLIC_VERCEL_URL}/battlepass/${id}/dashboard`,
	)

	return (
		<a href={`https://twitter.com/intent/tweet?text=${str}`} target="_blank" rel="noreferrer">
			<Button sx={{ mr: [0, 2] }} variant="text" endIcon={<ShareIcon />}>
				Share with a friend
			</Button>
		</a>
	)
}
