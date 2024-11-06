import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react'

export function useLocalStorage<T>(key: string, defaultValue: any): [T, Dispatch<SetStateAction<T>>] {
	const [state, setState] = useState<T>(defaultValue)

	const handleSetValue = useCallback(
		(value: T) => {
			const stringValue = JSON.stringify(value)
			const event = new StorageEvent('storage', {
				key: key,
				newValue: stringValue,
			})

			window.localStorage.setItem(key, stringValue)
			window.dispatchEvent(event)

			setState(value)
		},
		[setState, key],
	)
	const handleUpdateStoreEvent = useCallback(
		(event: StorageEvent) => {
			if (event.key === key && event.newValue) {
				setState(JSON.parse(event.newValue))
			}
		},
		[setState, key],
	)

	useEffect(() => {
		if (handleUpdateStoreEvent) {
			removeEventListener('storage', handleUpdateStoreEvent)
			addEventListener('storage', handleUpdateStoreEvent)
		}

		return () => {
			removeEventListener('storage', handleUpdateStoreEvent)
		}
	}, [handleUpdateStoreEvent])

	useEffect(() => {
		const storedValue = window.localStorage.getItem(key)
		if (!window || !storedValue || storedValue == undefined) return
		setState(JSON.parse(storedValue))
	}, [key])

	return [state, handleSetValue]
}
