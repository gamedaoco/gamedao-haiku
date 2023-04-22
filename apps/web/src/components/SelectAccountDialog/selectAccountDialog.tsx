import { Fragment, useEffect } from 'react'

import { Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useExtensionContext } from 'src/providers/extension/modules/context'
import { AccountState } from 'src/@types/extension'
import { getAddressFromAccountState } from 'utils/accountUtils'

import { AccountCard } from 'src/components/AccountCard/accountCard'
import { BaseDialog } from 'src/components/BaseDialog/baseDialog'

interface ComponentProps {
	open: boolean
	onClose: () => void
}

export function SelectAccountDialog({ open, onClose }: ComponentProps) {
	const { selectedAccount, accounts } = useExtensionContext()
	const theme = useTheme()

	useEffect(() => {
		if (open && accounts?.length === 1) {
			// We do not have another account that we can use
			onClose()
		}
	}, [open, accounts, onClose])

	// There is no account available
	if (!accounts?.length) {
		return null
	}

	return (
		<BaseDialog title="Select wallet" open={open} onClose={onClose}>
			<Grid
				display={'grid'}
				gridTemplateColumns={{
					xs: 'repeat(auto-fit, minmax(310px, 500px))',
					md: 'repeat(auto-fit, minmax(400px, 500px))',
				}}
				justifyContent="space-around"
				gap={'1rem'}
				maxWidth={{ xs: 'auto', lg: theme.breakpoints.values.lg }}
			>
				{accounts.map((accountState: AccountState) => {
					const address = getAddressFromAccountState(accountState)
					return (
						<Fragment key={address}>
							<AccountCard
								accountState={accountState}
								active={accountState === selectedAccount}
								callback={onClose}
								selectable
							/>
						</Fragment>
					)
				})}
			</Grid>
		</BaseDialog>
	)
}
