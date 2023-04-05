import { toast } from 'react-toastify'

export function createErrorNotification(error: string) {
	return toast.error(error)
}

export function createWarningNotification(warning: string) {
	return toast.warn(warning)
}

export function createSuccessNotification(message: string) {
	return toast.success(message)
}

export function createInfoNotification(message: string) {
	return toast.info(message)
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
