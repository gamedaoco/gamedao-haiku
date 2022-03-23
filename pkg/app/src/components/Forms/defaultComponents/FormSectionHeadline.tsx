import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export default styled(Typography)(({ theme }) => ({
	paddingTop: theme.spacing(3),
	paddingBottom: theme.spacing(2),
	fontWeight: 500,
}))
