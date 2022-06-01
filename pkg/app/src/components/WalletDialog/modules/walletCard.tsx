import { useCallback } from 'react'

import { Download } from '@mui/icons-material'
import { Avatar, Button, Card, Stack, Typography } from '@mui/material'
import { createWarningNotification } from 'src/utils/notificationUtils'

interface ComponentProps {
	imageSrc: string
	name: string
	url: string
	connectable: boolean
	callback?: () => void
}

export function WalletCard({ imageSrc, name, url, connectable, callback }: ComponentProps) {
	const handleButtonClick = useCallback(() => {
		if (connectable && callback) {
			return callback()
		}

		if (url) {
			return window.open(url, '_blank', 'noopener')?.focus()
		}

		return createWarningNotification('No logic is implemented for this function')
	}, [connectable, callback, url])

	return (
		<Card>
			<Stack p={{ xs: 2, md: 4 }} direction="row" alignItems="center" spacing={{ xs: 2, md: 4 }}>
				<Avatar sx={{ width: { md: 64 }, height: { md: 64 } }} src={imageSrc} />
				<Typography variant="h6">{name}</Typography>
				<Button
					onClick={handleButtonClick}
					variant={connectable ? 'outlined' : 'text'}
					sx={{ marginLeft: 'auto !important' }}
				>
					{connectable ? <Typography>Connect</Typography> : <Download />}
				</Button>
			</Stack>
		</Card>
	)
}
