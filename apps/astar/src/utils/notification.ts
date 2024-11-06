import { toast } from 'react-toastify'

const options = {
	autoClose: 10000,
}
export function createErrorNotification(error: string) {
	return toast.error(error, options)
}

export function createWarningNotification(warning: string) {
	return toast.warn(warning, options)
}

export function createSuccessNotification(message: string) {
	return toast.success(message, options)
}

export function createInfoNotification(message: string) {
	return toast.info(message, options)
}

export async function createPromiseNotification(
	promise: Promise<any>,
	pendingMessage: string,
	successMessage: string,
	errorMessage: string,
) {
	return toast.promise(promise, {
		pending: pendingMessage,
		success: successMessage,
		error: errorMessage,
	})
}
