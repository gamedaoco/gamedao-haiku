import { CircularProgress, Typography, Stack } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'

type Props = {
	text?: string
}
export const Loader = ({ text }: Props) => {
	return (
		<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
			<Stack spacing={2} justifyContent="center" alignItems="center">
				<CircularProgress color="inherit" />
				{text && <Typography variant="h5">{text}</Typography>}
			</Stack>
		</Backdrop>
	)
}

export default Loader
