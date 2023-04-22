import { createInfoNotification } from './notificationUtils'

export const copytToClipboard = (content) => {
	console.log('copied', content)
	return navigator.clipboard.writeText(content).then(() => createInfoNotification('copied'))
}
