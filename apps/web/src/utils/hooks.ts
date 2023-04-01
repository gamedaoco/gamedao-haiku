import type { MutableRefObject } from 'react'

export function unsubRef(ref: MutableRefObject<any>) {
	if (ref.current && typeof ref.current === 'function') {
		ref.current()
	}
}
