import { createInfoNotification } from 'src/utils/notificationUtils'

export const copytToClipboard = (content) => {
	console.log('copied', content)
	return navigator.clipboard.writeText(content).then(() => createInfoNotification('copied'))
}
