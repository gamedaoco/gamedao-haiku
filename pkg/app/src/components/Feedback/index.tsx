// Feedback Component
// Button opening a Flyout
// featuring a multiline text input
// on send, the discord webhook sends a message
import { useState, useRef } from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'
import Card from '@mui/material/Stack'
import Stack from '@mui/material/Stack'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Message from '@mui/icons-material/ChatBubbleOutline'
import Tooltip from '@mui/material/Tooltip'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Typography from '@mui/material/Typography'
import { Loader } from 'components/Loader'

// interface FlyoutProps {
// 	anchorEl: Element
// 	open: boolean
// 	handleClose: () => void
// 	handleSend: () => void
// }

const Flyout = ({ anchorEl, handleClose, handleSend }) => {
	return (
		<Menu
			anchorEl={anchorEl}
			id="feedback-menu"
			open={true}
			onClose={handleClose}
			PaperProps={{
				elevation: 0,
				sx: {
					width: 'auto',
					height: 'auto',
					// overflow: 'hidden',
					filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
					borderRadius: '1rem',
					'&:before': {
						content: '""',
						display: 'block',
						position: 'absolute',
						top: 0,
						right: 60,
						width: 10,
						height: 10,
						bgcolor: 'background.paper',
						transform: 'translateY(-50%) rotate(45deg)',
						zIndex: 0,
					},
				},
			}}
			transformOrigin={{ horizontal: 'center', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
		>
			<Card p={[2]}>
				<Stack spacing={2}>
					{/* <Typography></Typography> */}
					<TextareaAutosize
						minRows={8}
						maxRows={8}
						aria-label="maximum height"
						placeholder="Maximum 4 rows"
						defaultValue=""
						style={{ width: '100%' }}
					/>
					<Button onClick={handleSend()} disabled={false}>
						Send
					</Button>
				</Stack>
			</Card>
		</Menu>
	)
}

// interface FeedbackProps {
// 	anchorRef: Element
// 	close: () => void
// }

export const FeedbackButton = ({ handleClose, anchorRef }) => {
	const [messageEnabled, setMessageEnabled] = useState(true)
	const [sending, setSending] = useState(false)
	const handleSend = () => {
		setSending(true)
		handleClose()
	}

	return sending ? (
		<Loader />
	) : (
		// <Flyout anchorEl={anchorRef} handleClose={handleClose} handleSend={handleSend} />
		<Card p={[2]}>
			<Stack spacing={2}>
				{/* <Typography></Typography> */}
				<TextareaAutosize
					minRows={8}
					maxRows={8}
					aria-label="maximum height"
					placeholder="Maximum 4 rows"
					defaultValue=""
					style={{ width: '100%' }}
				/>
				<Button onClick={() => handleSend()} disabled={false}>
					Send
				</Button>
			</Stack>
		</Card>
	)
}

export default FeedbackButton
