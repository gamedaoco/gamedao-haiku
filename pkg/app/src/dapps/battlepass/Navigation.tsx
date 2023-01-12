import { useState, useEffect, useMemo, useCallback, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { ContentTabs } from 'constants/battlepass'
import { Organization } from 'src/queries'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useAddMemberTransaction } from 'hooks/tx/useAddMemberTransaction'

import { useTheme } from '@mui/material/styles'
import { Box, Tab, Tabs, Button, Stack, useMediaQuery } from '@mui/material'
import { Loader } from 'components/Loader'
import { Join } from './components/JoinBtn'

type TProps = {
	id: string
	path: ContentTabs
	organization?: Organization
}

interface ITabs {
	label: string
	value?: ContentTabs
	disabled?: boolean
}

const initialRole = {
	member: false,
	open: false,
	prime: false,
	battlepass: false,
}

export function Navigation({ id, path, organization }: TProps) {
	const { t } = useTranslation()
	const { push } = useRouter()
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	// const [organization, setOrganization] = useState<Organization>(null)
	// const { loading, data, error } = useOrganizationByIdSubscription({
	// 	variables: { orgId: id as string },
	// })
	// useEffect(() => {
	// 	if (!data?.organization) return
	// 	setOrganization(data.organization?.[0] as Organization)
	// }, [data])

	const address = useCurrentAccountAddress()

	const [isMember, setIsMember] = useState<boolean>(false)
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isPrime, setIsPrime] = useState<boolean>(false)
	const [isBattlePass, setIsBattlePass] = useState<boolean>(true)

	useEffect(() => {
		if (!address || !organization) return
		setIsMember(organization.organization_members.some((member) => member.address === address))
		setIsPrime(organization.prime === address)
		setIsOpen(organization.access_model === 'Open' ? true : false)
	}, [address, organization])

	const tabs = useMemo<ITabs[]>(
		() =>
			[
				isBattlePass
					? {
							label: 'Battlepass',
							value: ContentTabs.BATTLEPASS,
							disabled: !isBattlePass,
					  }
					: null,
			].filter((item) => item !== null),
		[isBattlePass, isMember, isPrime],
	)

	const handleTabChange = useCallback(
		(event: ChangeEvent<{}>, path: ContentTabs): void => {
			push(`/v1/${id}/${path}`)
		},
		[id, push],
	)

	return (
		<Box sx={{ backgroundColor: '#020202ee' }}>
			<Stack
				direction={isMd ? 'row' : 'column'}
				spacing={2}
				alignItems="center"
				justifyContent={isMd ? 'space-between' : 'center'}
				pr={isMd ? '1rem' : 0}
			>
				<Box>
					{/*				<Tabs
					centered={true}
					scrollButtons
					allowScrollButtonsMobile
					textColor="primary"
					indicatorColor="primary"
					sx={{ pl: isMd ? '200px' : 0, height: 60 }}
					onChange={handleTabChange}
					value={path || ContentTabs.BATTLEPASS}
				>
					{tabs.map((tab, i) => (
						<Tab key={i} label={tab.label} value={tab.value} disabled={tab.disabled} />
					))}
				</Tabs>*/}
				</Box>
				<Join args={{ id: id, isMember: isMember, isOpen: isOpen, isPrime: isPrime }} />
			</Stack>
		</Box>
	)
}

export default Navigation
