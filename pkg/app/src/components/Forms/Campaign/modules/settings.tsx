import React, { useCallback } from 'react'

import { InfoRounded, Person } from '@mui/icons-material'
import {
	Box,
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
	TextField,
	Typography,
} from '@mui/material'
import { useSystemProperties } from 'hooks/useSystemProperties'
import { useTranslation } from 'react-i18next'
import { createWarningNotification } from 'src/utils/notificationUtils'
import * as Yup from 'yup'

import { RadioItem } from 'components/Forms/modules/radioItem'

const validationTargetSchema = Yup.number()
	.required()
	.min(1, 'notification:warning:min_1_game_fee')
	.max(1000000, 'notification:warning:max_1m_game_fee')

const validationDepositSchema = Yup.number()
	.required()
	.min(1, 'notification:warning:min_1_game_fee')
	.max(1000000, 'notification:warning:max_1m_game_fee')

const validationEmailSchema = Yup.string().email().required()

export const validationSchema = Yup.object().shape({
	target: validationTargetSchema,
	deposit: validationDepositSchema,
	email: validationEmailSchema,
})

interface ComponentProps {
	flowProtocol: number
	setFlowProtocol: (number) => void
	targetAmount: number
	setTargetAmount: (number) => void
	depositAmount: number
	setDepositAmount: (number) => void
	email: string
	setEmail: (email) => void
}

const currencies = [
	{
		key: 'GAME',
		text: 'GAME',
	},
]

const usageOfFunds = [
	{
		key: '0',
		text: 'Video Game',
	},
	{
		key: '1',
		text: 'Mobile Game',
	},
	{
		key: '2',
		text: 'Soundtrack',
	},
	{
		key: '3',
		text: '3D',
	},
	{
		key: '4',
		text: 'Artworks',
	},
	{
		key: '5',
		text: 'DLC',
	},
]

export function Settings({
	flowProtocol,
	setFlowProtocol,
	targetAmount,
	setTargetAmount,
	depositAmount,
	setDepositAmount,
	email,
	setEmail,
}: ComponentProps) {
	const systemProperties = useSystemProperties()
	const { t } = useTranslation()

	const handleTargetAmountChange = useCallback(
		(event) => {
			const value = event.target.value
			if (!value) {
				return
			}
			try {
				validationTargetSchema?.validateSync(value)
				if (setTargetAmount) {
					setTargetAmount(value < 0 ? 0 : value)
				}
			} catch (e) {
				createWarningNotification(t(e.message))
			}
		},
		[setTargetAmount, validationTargetSchema, t],
	)

	const handleDepositAmountChange = useCallback(
		(event) => {
			const value = event.target.value
			if (!value) {
				return
			}
			try {
				validationDepositSchema?.validateSync(value)
				if (setDepositAmount) {
					setDepositAmount(value < 0 ? 0 : value)
				}
			} catch (e) {
				createWarningNotification(t(e.message))
			}
		},
		[setDepositAmount, validationDepositSchema, t],
	)

	const handleEmailChanged = useCallback(
		(event) => {
			const value = event.target.value
			try {
				if (setEmail) {
					setEmail(value)
				}
			} catch (e) {}
		},
		[setEmail, t],
	)

	const handleCurrencyChanged = useCallback((event) => {
		console.log(event)
	}, [])
	const handleUsageOfFundsChanged = useCallback((event) => {
		console.log(event)
	}, [])

	return (
		<Stack component={Paper} p={{ xs: 3, sm: 6 }} spacing={{ xs: 2, sm: 4 }} gap={2} width="100%" height="100%">
			<Typography variant={'h6'}>Additional Information</Typography>

			<Stack gap={4}>
				<Typography variant={'subtitle2'}>Protocol</Typography>
				<RadioItem
					title={'Grant'}
					description={'Choose when contributors donate only without being rewarded'}
					value={0}
					selectedValue={flowProtocol}
					onChange={setFlowProtocol}
				/>
				<RadioItem
					title={'Prepaid'}
					description={'Choose when contributors can select from rewards options'}
					value={1}
					selectedValue={flowProtocol}
					onChange={setFlowProtocol}
				/>
			</Stack>

			<Stack gap={4}>
				<Typography variant={'subtitle2'}>Funds & Deposit</Typography>
				<Stack display={'flex'} direction={'row'} gap={2}>
					<TextField
						fullWidth
						type="number"
						onChange={handleTargetAmountChange}
						value={targetAmount}
						label="Funding target*"
						InputProps={{
							endAdornment: <Typography variant="body2">GAME</Typography>,
						}}
						variant="outlined"
						sx={{ flex: 1 }}
					/>
					<FormControl sx={{ flex: 1 }}>
						<InputLabel id="currency">Currency*</InputLabel>
						<Select
							value={currencies[0].key}
							onChange={handleCurrencyChanged}
							labelId="currency"
							label="Currency*"
						>
							{currencies.map((x) => (
								<MenuItem value={x.key} key={x.key}>
									{t(x.text)}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Stack>
				<Stack display={'flex'} direction={'row'} gap={2}>
					<FormControl sx={{ flex: 1 }}>
						<InputLabel id="usage-of-funds">Usage of funds*</InputLabel>
						<Select
							value={usageOfFunds[0].key}
							onChange={handleUsageOfFundsChanged}
							labelId="usage-of-funds"
							label="Usage of funds*"
						>
							{usageOfFunds.map((x) => (
								<MenuItem value={x.key} key={x.key}>
									{t(x.text)}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Stack>
				<TextField
					fullWidth
					type="number"
					onChange={handleDepositAmountChange}
					value={depositAmount}
					label="Deposit*"
					InputProps={{
						endAdornment: <Typography variant="body2">GAME</Typography>,
					}}
					variant="outlined"
					sx={{ flex: 1 }}
				/>
				<Stack display={'flex'} direction={'row'} alignItems={'center'} gap={1}>
					<InfoRounded />
					<Typography variant={'caption'}>
						We return the deposit to the treasury in case the campaign is not successful
					</Typography>
				</Stack>
			</Stack>

			<Stack gap={4}>
				<Typography variant={'subtitle2'}>Date & Contact</Typography>
				<TextField
					fullWidth
					onChange={handleEmailChanged}
					value={email}
					label="Contact email*"
					variant="outlined"
					sx={{ flex: 1 }}
				/>
			</Stack>
		</Stack>
	)
}
