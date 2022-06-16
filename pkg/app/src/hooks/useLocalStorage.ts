import {Dispatch, SetStateAction, useCallback, useEffect, useRef, useState} from 'react'

export function useLocalStorage<T>(key: string, defaultValue: any): [T, Dispatch<SetStateAction<T>>] {
	const [state, setState] = useState<T>(defaultValue)

	const handleSetValue = useCallback(
		(value: T) => {
			window.localStorage.setItem(key, JSON.stringify(value))
			setState(value)
		},
		[setState, key],
	)
	const handleUpdateStoreEvent = useCallback((event: StorageEvent) => {
		if (event.key === key) {
			setState(event.newValue as any);
		}
	}, [setState, key]);

	useEffect(() => {
		if (handleUpdateStoreEvent) {
			removeEventListener('storage', handleUpdateStoreEvent)
			addEventListener('storage', handleUpdateStoreEvent);
		}

		return ()  => {
			removeEventListener('storage', handleUpdateStoreEvent)
		};
	}, [handleUpdateStoreEvent]);

	useEffect(() => {
		const storedValue = window.localStorage.getItem(key)
		if (storedValue !== null) {
			setState(JSON.parse(storedValue))
		}
	}, [key])

	return [state, handleSetValue]
}
