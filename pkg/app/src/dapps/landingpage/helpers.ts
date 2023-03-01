import { useCallback } from 'react'

export const openUrl = useCallback((url: string) => {
	window.open(url, '_blank', 'noopener').focus()
}, [])
