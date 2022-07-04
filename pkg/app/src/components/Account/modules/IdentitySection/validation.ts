import { Identity } from 'src/queries'

export const initialValues = (identity: Identity) => ({
	display_name: identity?.display_name || '',
	legal_name: identity?.legal_name || '',
	email: identity?.email || '',
	riot: identity?.riot || '',
	twitter: identity?.twitter || '',
	web: identity?.web || '',
})
