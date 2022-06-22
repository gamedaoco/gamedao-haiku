import { Identity } from '@gamedao-haiku/graphql/dist'
import * as Yup from 'yup'

const webRegularExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
export interface FormValues {
	displayName: string
	twitter: string
	legalName: string
	riot: string
	email: string
	totalDeposit?: string
	web: string
}

export const initialValues = (identity: Identity) => ({
	displayName: identity?.displayName || '',
	twitter: identity?.twitter || '',
	legalName: identity?.legalName || '',
	riot: identity?.riot || '',
	email: identity?.email || '',
	totalDeposit: '',
	web: '',
})
export const validationSchema = Yup.object({
	displayName: Yup.string().max(32, 'Max of 32 characters').required('Display Name is required'),
	legalName: Yup.string().max(32, 'Max of 32 characters'),
	riot: Yup.string().max(32, 'Max of 32 characters'),
	email: Yup.string().email('Must be a valid email').max(255),
	totalDeposit: Yup.number().typeError('Must be a valid number'),
	web: Yup.string().matches(webRegularExpression, 'Must be a valid website'),
})
