import Backdrop from '@mui/material/Backdrop'
import { CircularProgress, Typography, Stack } from '@mui/material'

type Props = {
	text?: string
}

export const Spinner = ({ text }: Props) => {
	return (
		<Stack spacing={2} width={'100%'} height={'100%'} justifyContent="center" alignItems="center">
			<CircularProgress color="inherit" />
			{text && <Typography variant="body2">{text}</Typography>}
		</Stack>
	)
}

export const Loader = ({ text }: Props) => {
	return (
		<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
			<Spinner text={text} />
		</Backdrop>
	)
}

export default Loader
