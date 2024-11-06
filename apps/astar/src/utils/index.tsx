import { createInfoNotification } from './notification'

export const copyToClipboard = (content) => {
	console.log('copied', content)
	return navigator.clipboard.writeText(content).then(() => createInfoNotification('copied'))
}
