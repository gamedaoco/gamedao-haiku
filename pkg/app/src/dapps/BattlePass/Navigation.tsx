import { useState, useEffect, useMemo, useCallback, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { ContentTabs } from 'constants/battlepass'
import { Organization, useOrganizationByIdSubscription } from 'src/queries'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useAddMemberTransaction } from 'hooks/tx/useAddMemberTransaction'

import { useTheme } from '@mui/material/styles'
import { Box, Tab, Tabs, Button, Stack, useMediaQuery } from '@mui/material'
import { Loader } from 'components/Loader'
import { Join } from './components/JoinBtn'

interface Props {
	id: string | string[]
	path: ContentTabs
}

interface ITabs {
	label: string
	value?: ContentTabs
	disabled?: boolean
}

export function Navigation({ id, path }: Props) {
	const { t } = useTranslation()
	const { push } = useRouter()
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	const [organization, setOrganization] = useState<Organization>(null)
	const { loading, data, error } = useOrganizationByIdSubscription({
		variables: { orgId: id as string },
	})
	useEffect(() => {
		if (!data?.organization) return
		setOrganization(data.organization?.[0] as Organization)
	}, [data])

	const address = useCurrentAccountAddress()

	const [isMember, setIsMember] = useState<boolean>(false)
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isPrime, setIsPrime] = useState<boolean>(false)
	const [isBattlePass, setIsBattlePass] = useState<boolean>(true)

	useEffect(() => {
		if (address && organization) {
			setIsMember(organization.organization_members.some((member) => member.address === address))
			setIsPrime(organization.prime === address)
			setIsOpen(organization.access_model === 'Open' ? true : false)
		}
	}, [address, organization])

	const tabs = useMemo<ITabs[]>(
		() =>
			[
				true
					? {
							label: 'Overview',
							value: ContentTabs.OVERVIEW,
							// disabled: !isMember,
					  }
					: null,
				isBattlePass
					? {
							label: 'Battlepass',
							value: ContentTabs.BATTLEPASS,
							disabled: !isBattlePass,
					  }
					: null,
				isPrime
					? {
							label: 'Settings',
							value: ContentTabs.SETTINGS,
							disabled: !isPrime,
					  }
					: null,
			].filter((item) => item !== null),
		[isBattlePass, isPrime],
	)

	const handleTabChange = useCallback(
		(event: ChangeEvent<{}>, path: ContentTabs): void => {
			push(`/v1/${id}/${path}`)
		},
		[id, push],
	)

	return loading ? (
		<Loader />
	) : (
		<Box sx={{ backgroundColor: '#111111ee' }}>
			<Stack
				direction={isMd ? 'row' : 'column'}
				spacing={2}
				alignItems="center"
				justifyContent={isMd ? 'space-between' : 'center'}
				pr={isMd ? '1rem' : 0}
			>
				<Tabs
					centered={isMd}
					scrollButtons
					allowScrollButtonsMobile
					// textColor="primary"
					// indicatorColor="primary"
					sx={{ pl: isMd ? '200px' : 0, height: 60 }}
					onChange={handleTabChange}
					value={path || ContentTabs.OVERVIEW}
				>
					{tabs.map((tab, i) => (
						<Tab key={i} label={tab.label} value={tab.value} disabled={tab.disabled} />
					))}
				</Tabs>
				<Join args={{ id: id as string, isMember: isMember, isOpen: isOpen, isPrime: isPrime }} />
			</Stack>
		</Box>
	)
}

export default Navigation
