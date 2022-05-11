import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'

export function useLocalStorage<T>(key: string, defaultValue: any): [T, Dispatch<SetStateAction<T>>] {
	const [state, setState] = useState<T>(defaultValue)

	const handleSetValue = useCallback(
		(value: T) => {
			window.localStorage.setItem(key, JSON.stringify(value))
			setState(value)
		},
		[setState, key],
	)

	useEffect(() => {
		const storedValue = window.localStorage.getItem(key)
		if (storedValue !== null) {
			setState(JSON.parse(storedValue))
		}
	}, [key])

	return [state, handleSetValue]
}
