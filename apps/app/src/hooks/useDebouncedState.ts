import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react'

export function useDebouncedState<T>(delay: number, defaultValue: any): [T, T, Dispatch<SetStateAction<T>>] {
	const [state, setState] = useState<T>(defaultValue)
	const [stateDebounced, setStateDebounced] = useState<T>(defaultValue)
	const timeoutRef = useRef(null)

	const handleSetValue = useCallback(
		(value: T) => {
			setState(value)
			clearTimeout(timeoutRef.current)
			timeoutRef.current = setTimeout(setStateDebounced, delay, value)
		},
		[setStateDebounced, delay],
	)

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				clearTimeout(timeoutRef.current)
			}
		}
	}, [])

	return [state, stateDebounced, handleSetValue]
}
