import { useState, useEffect, useMemo, useCallback, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { BattlepassViews } from 'src/constants/battlepass'
import { Organization, useOrganizationByIdSubscription } from 'src/queries'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useAddMemberTransaction } from 'hooks/tx/useAddMemberTransaction'

import { useTheme } from '@mui/material/styles'
import { Box, Tab, Tabs, Button, Stack, useMediaQuery } from '@mui/material'
import { Loader } from 'src/components/Loader'

// import { Join } from './JoinBtn'

type TProps = {
	id: string
	view: BattlepassViews
	org?: string
}

interface ITabs {
	label: string
	value?: BattlepassViews
	disabled?: boolean
}

const initialRole = {
	member: false,
	open: false,
	prime: false,
	battlepass: false,
}

export function Navigation({ id, view, org }: TProps) {
	const { t } = useTranslation()
	const { push } = useRouter()
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	const [organization, setOrganization] = useState(null)
	const { loading: loadingOrg, data: orgData } = useOrganizationByIdSubscription({
		variables: { orgId: org },
	})
	useEffect(() => {
		if (loadingOrg) return
		if (!orgData?.organization.length) return
		setOrganization(orgData.organization?.[0])
	}, [orgData])

	const address = useCurrentAccountAddress()

	const [isMember, setIsMember] = useState<boolean>(false)
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isPrime, setIsPrime] = useState<boolean>(false)
	const [isBattlePass, setIsBattlePass] = useState<boolean>(true)

	useEffect(() => {
		if (!address || !organization) return
		setIsMember(organization.organizationMembers.some((member) => member.address === address))
		setIsPrime(organization.prime === address)
		setIsOpen(organization.accessModel === 'Open' ? true : false)
	}, [address, organization])

	const tabs = useMemo<ITabs[]>(
		() =>
			[
				isBattlePass
					? {
							label: 'Dashboard',
							value: BattlepassViews.DASHBOARD,
							disabled: !isBattlePass,
					  }
					: null,
				isBattlePass
					? {
							label: 'Leaderboard',
							value: BattlepassViews.LEADERBOARD,
							disabled: !isBattlePass,
					  }
					: null,
				isPrime
					? {
							label: 'Admin',
							value: BattlepassViews.ADMIN,
							disabled: !isPrime,
					  }
					: null,
			].filter((item) => item !== null),
		[isBattlePass, isMember, isPrime],
	)

	const handleTabChange = useCallback(
		(event: ChangeEvent<{}>, view: BattlepassViews): void => {
			push(`/battlepass/${id}/${view}`)
		},
		[id, push],
	)

	return (
		<Box
		// sx={{ backgroundColor: '#02020299', backgroundBlendMode: 'multiply' }}
		>
			<Stack
				direction={isMd ? 'row' : 'column'}
				spacing={2}
				alignItems="center"
				justifyContent={isMd ? 'space-between' : 'center'}
				// p={isMd ? '1rem' : 0}
			>
				<Box>
					<Tabs
						centered={true}
						scrollButtons
						allowScrollButtonsMobile
						textColor="primary"
						indicatorColor="primary"
						sx={{ pl: isMd ? '130px' : 0, height: '72px', pt: '12px' }}
						onChange={handleTabChange}
						value={view || BattlepassViews.DASHBOARD}
						TabIndicatorProps={{
							sx: {
								height: '0px',
								borderRadius: '1px',
								'&::after': {
									content: '""',
									position: 'absolute',
									width: '80%',
									borderColor: '#ff00ff',
									borderRadius: '2px 0px 0px 2px',
									boxShadow: '0 0px 20px 2px #00ffcc',
									borderTop: '5px solid white',
									left: '10%',
									right: '10%',
									top: '0',
								},
								'&::before': {
									content: '""',
									position: 'absolute',
									bottom: 0,
									left: '10%',
									right: '10%',
									width: '80%',
									borderRadius: '2px',
									borderTop: '2px solid #00ffcc11',
									zIndex: '100',
								},
							},
						}}
					>
						{tabs.map((tab, i) => (
							<Tab sx={{ p: 2 }} key={i} label={tab.label} value={tab.value} disabled={tab.disabled} />
						))}
					</Tabs>
				</Box>
				{/* <Join args={{ id: id, isMember: isMember, isOpen: isOpen, isPrime: isPrime }} /> */}
			</Stack>
		</Box>
	)
}

export default Navigation
