import { Identity } from 'src/queries'
import * as Yup from 'yup'

const webRegularExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi

export const initialValues = (identity: Identity) => ({
	display_name: identity?.display_name || '',
	legal_name: identity?.legal_name || '',
	email: identity?.email || '',
	riot: identity?.riot || '',
	twitter: identity?.twitter || '',
	web: '',
})
export const validationSchema = Yup.object({
	display_name: Yup.string().max(32, 'Max of 32 characters'),
	legal_name: Yup.string().max(32, 'Max of 32 characters'),
	riot: Yup.string().max(32, 'Max of 32 characters'),
	email: Yup.string().email('Must be a valid email').max(255),
	web: Yup.string().matches(webRegularExpression, 'Must be a valid website'),
})
