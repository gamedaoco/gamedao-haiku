// provides a hook to a OrganizationVanityUrl subscription
// used for resolving slug based vanity urls
// TODO: make names claimable
import { useEffect, useState } from 'react'
import { useLogger } from 'src/hooks/useLogger'

// import { useOrganizationVanityUrlQuery } from 'src/queries'
// import { useOrganizationMembersByStateSubscription } from 'src/queries'
// import { useOrganizationByIdSubscription } from 'src/queries'

export type TOrg = {
	id: string
	name: string
}

// export const useVanityList = (): TOrg[] => {

// 	const logger = useLogger('VanityURL')
// 	const { data, error } = useOrganizationVanityUrlQuery()
// 	const [ org, setOrg ] = useState<TOrg[]>([])

// 	useEffect(() => {
// 		if (data) {
// 			setOrg(
// 				data.organization.map( (item,i) => {
// 					return {
// 						id: item.id,
// 						name: item.name,
// 					} as TOrg
// 				}),
// 			)
// 		}
// 	}, [data])

// 	return org
// }

// export type TOrgMemberState = {
// 	id: string
// 	state: string
// }

// export const useOrgMembersByState = ( id = null ): TOrgMemberState[] => {

// 	const logger = useLogger('MemberState')
// 	const { data, error } = useOrganizationByIdSubscription(id)
// 	const [ members, setMembers ] = useState<TOrgMemberState[]>([])

// 	useEffect(() => {
// 		if (data) {

// 			setMembers(
// 				data.organization?.organizationMembers?.map( (item,i) => {
// 					return {
// 						id: item.address,
// 						state: item.state || '',
// 					} as TOrgMemberState
// 				}),
// 			)
// 		}
// 	}, [data.organization?])

// 	return members
// }
