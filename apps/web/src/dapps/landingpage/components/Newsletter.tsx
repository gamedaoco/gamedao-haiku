import React, { useState, FC } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Container, Box, Input, InputAdornment, Typography, Button, Stack } from '@mui/material'
import Email from '@mui/icons-material/EmailOutlined'
import Person from '@mui/icons-material/PersonOutlined'
import { useMediaQuery } from '@mui/material'

import { useTheme } from '@mui/material/styles'

const MAILCHIMP = process.env.MAILCHIMP

type FormProps = {
	status: string | null
	message: string | null
	onValidated: Function
}

const CustomForm: FC<FormProps> = ({ status, message, onValidated }) => {
	const theme = useTheme()
	const isSm = useMediaQuery(theme.breakpoints.up('sm'), { defaultMatches: true })

	const [inputs, setInputState] = useState({ uname: '', email: '' })

	const handleOnChange = (e) => {
		e.persist()
		setInputState((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}))
	}

	const handleOnSubmit = (e) => {
		inputs.email.indexOf('@') > -1 &&
			onValidated({
				EMAIL: inputs.email,
				UNAME: inputs.uname,
			})
	}

	return (
		<Box m={0} p={4} sx={{ backgroundColor: '#000' }}>
			<Container maxWidth="xl" disableGutters>
				<Stack justifyContent="center" alignItems="center">
					<Typography pb={2} variant="h3">
						Know it first and subscribe to our newsletter
					</Typography>

					<Stack
						direction={isSm ? `row` : `column`}
						spacing={2}
						width={`100%`}
						justifyContent="center"
						alignItems="center"
					>
						<Input
							sx={{
								'& input::-webkit-input-placeholder': { color: '#fff' },
								'& input::placeholder': { color: '#fff' },
								'& input::-ms-input-placeholder': { color: '#fff' },
							}}
							id="uname"
							startAdornment={
								<InputAdornment position="start">
									<Person
										sx={{
											color: '#fff',
										}}
									/>
								</InputAdornment>
							}
							type="string"
							placeholder="name"
							onChange={handleOnChange}
							fullWidth
						/>
						<Input
							sx={{
								'& input::-webkit-input-placeholder': { color: '#fff' },
								'& input::placeholder': { color: '#fff' },
								'& input::-ms-input-placeholder': { color: '#fff' },
							}}
							id="email"
							startAdornment={
								<InputAdornment position="start">
									<Email
										sx={{
											color: '#fff',
										}}
									/>
								</InputAdornment>
							}
							type="email"
							placeholder="your email"
							onChange={handleOnChange}
							fullWidth
						/>
						<Button onClick={handleOnSubmit} variant="md" color="white" fullWidth>
							Submit
						</Button>
					</Stack>

					{status === 'sending' && <Typography pt={2}>sending...</Typography>}
					{status === 'error' && <Typography pt={2} dangerouslySetInnerHTML={{ __html: message || '' }} />}
					{status === 'success' && <Typography pt={2} dangerouslySetInnerHTML={{ __html: message || '' }} />}
				</Stack>
			</Container>
		</Box>
	)
}

export const Newsletter: React.FC = () => (
	<MailchimpSubscribe
		url={'https://zero.us5.list-manage.com/subscribe/post?u=9b3f3ef14c871758185754652&amp;id=d09264f8c7'}
		render={({ subscribe, status, message }) => (
			<CustomForm status={status} message={message} onValidated={(formData) => subscribe(formData)} />
		)}
	/>
)

export default Newsletter
