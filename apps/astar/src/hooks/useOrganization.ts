// provides a hook to a OrganizationVanityUrl subscription
// used for resolving slug based vanity urls
// TODO: make names claimable

import { useEffect, useState } from 'react'
import { useLogger } from 'src/hooks/useLogger'

// import { useOrganizationVanityUrlQuery } from 'src/queries'
// import { useOrganizationMembersByStateSubscription } from 'src/queries'
import { Organization, useOrganizationByIdSubscription } from 'src/queries'

// export type TOrg = {
// 	id?: string
// 	slug?: string
// 	organization?: Organization
// }

// export const useOrganization = ( id: string ) => {

// 	console.log( 'useOrganization', id )

// 	const { loading, data, error } = useOrganizationByIdSubscription({ variables: { orgId: id } })
// 	const [ org, setOrg ] = useState(null)

// 	useEffect(() => {
// 		if ( loading || !data?.organization[0] ) return
// 		console.log('updating org', data)
// 		// setOrg(  )
// 	}, [loading, data?.organization])

// 	return org
// }

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
