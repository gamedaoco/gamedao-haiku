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

interface ComponentProps {
	anchorEl: Element
	open: boolean
	handleClose: () => void
}

const Flyout = ({ anchorEl, open, handleClose }: ComponentProps) => {
	return (
		<Menu
			anchorEl={anchorEl}
			id="feedback-menu"
			open={open}
			onClose={handleClose}
			onClick={handleClose}
			PaperProps={{
				elevation: 0,
				sx: {
					minWidth: 480,
					minHeight: 240,
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
			<Card p={[2, 4]}>
				<Stack>Hello</Stack>
			</Card>
		</Menu>
	)
}

export const FeedbackButton = () => {
	const [messageEnabled, setMessageEnabled] = useState(true)
	const [showFlyout, setFlyout] = useState(false)
	const [sending, setSending] = useState(false)

	const anchorRef = useRef(null)
	const toggleFlyout = () => setFlyout(!showFlyout)

	return (
		<>
			<Box sx={{ py: 1, mx: 2 }} ref={anchorRef}>
				<Button onClick={toggleFlyout} disabled={messageEnabled ? null : true}>
					<Message />
				</Button>
			</Box>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={showFlyout}
				onClick={toggleFlyout}
			>
				{sending && <CircularProgress color="inherit" />}
			</Backdrop>
			<Flyout anchorEl={anchorRef?.current} handleClose={toggleFlyout} open={showFlyout} />
		</>
	)
}

export default FeedbackButton
