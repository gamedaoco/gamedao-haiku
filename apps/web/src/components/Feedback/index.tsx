import { useState, useEffect } from 'react'
import { Card, Stack, Menu, Button, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Loader } from 'src/components/Loader'
import { useAppContext } from 'src/providers/app/modules/context'

import { Logger } from 'src/lib/logger'
const log = Logger('feedback')

// const Flyout = ({ anchorEl, handleClose, handleSend }) => {
// 	return (
// 		<Menu
// 			anchorEl={anchorEl}
// 			id="feedback-menu"
// 			open={true}
// 			onClose={handleClose}
// 			PaperProps={{
// 				elevation: 0,
// 				sx: {
// 					width: 'auto',
// 					height: 'auto',
// 					// overflow: 'hidden',
// 					filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
// 					borderRadius: '1rem',
// 					'&:before': {
// 						content: '""',
// 						display: 'block',
// 						position: 'absolute',
// 						top: 0,
// 						right: 60,
// 						width: 10,
// 						height: 10,
// 						bgcolor: 'background.paper',
// 						transform: 'translateY(-50%) rotate(45deg)',
// 						zIndex: 0,
// 					},
// 				},
// 			}}
// 			transformOrigin={{ horizontal: 'center', vertical: 'top' }}
// 			anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
// 		>
// 			<Card p={[2]}>
// 				<Stack spacing={2}>
// 					{/* <Typography></Typography> */}
// 					<TextareaAutosize
// 						minRows={8}
// 						maxRows={8}
// 						aria-label="maximum height"
// 						placeholder="Maximum 4 rows"
// 						defaultValue=""
// 						style={{ width: '100%' }}
// 					/>
// 					<Button onClick={handleSend()} disabled={false}>
// 						Send
// 					</Button>
// 				</Stack>
// 			</Card>
// 		</Menu>
// 	)
// }

// interface FeedbackProps {
// 	anchorRef: Element
// 	close: () => void
// }

async function sendMessage(u = '', b = '', m = '', cb = () => {}) {
	try {
		const res = await fetch('/api/bot/feedback', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				uuid: u,
				bpid: b,
				msg: m,
			}),
		}).then((res) => {
			// log.info('RES', res)
			cb()
		})
	} catch (err) {
		log.error(err)
	}
}

export const FeedbackButton = ({ handleClose, anchorRef }) => {
	const { uuid, bpid } = useAppContext()

	const [sending, setSending] = useState(false)
	const handleSend = () => {
		setSending(true)
		const send = async () => {
			await sendMessage(uuid, bpid, message, handleClose)
			setMessage('')
		}
		send()
	}

	const [message, setMessage] = useState('')
	const handleChange = (event) => {
		setMessage(event.target.value)
	}

	const [sendEnabled, setSendEnabled] = useState(false)
	useEffect(() => {
		if (message.length > 100 && sendEnabled === false) setSendEnabled(true)
		if (message.length < 100 && sendEnabled === true) setSendEnabled(true)
	}, [message])

	return sending ? (
		<Loader />
	) : (
		// <Flyout anchorEl={anchorRef} handleClose={handleClose} handleSend={handleSend} />
		// <Card p={[2]}>
		<Stack spacing={2}>
			<Typography>Thank you for taking the time. Send us your feedback, min 100 chars.</Typography>
			<TextField
				name={'feedback'}
				onChange={handleChange}
				value={message}
				label="Feedback"
				variant="outlined"
				fullWidth
				multiline
				rows={4}
			/>
			<Button onClick={() => handleSend()} variant={sendEnabled ? `lemon` : `glass`} disabled={!sendEnabled}>
				{sendEnabled ? `Send` : `Please give your feedback`}
			</Button>
		</Stack>
		// </Card>
	)
}

export default FeedbackButton
