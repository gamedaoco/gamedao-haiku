import { useTheme } from '@mui/material/styles'
import { Button } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'

type TProps = {}

export function ShareBtn({}: TProps) {
	const theme = useTheme()

	return (
		<a href="https://twitter.com/intent/tweet?text=Hello%20world" target="_blank" rel="noreferrer">
			<Button sx={{ mr: [0, 2] }} variant="text" endIcon={<ShareIcon />}>
				Share with a friend
			</Button>
		</a>
	)
}

export default ShareBtn
