import { ReactNode, useCallback } from 'react'
import { useRouter } from 'next/router'

type NavLinkProps = {
	href: string
	children: ReactNode
	external?: boolean
}

export function NavLink({ href, external, children }: NavLinkProps) {
	const { push } = useRouter()

	const handleClick = useCallback(
		(e) => {
			e.preventDefault()
			if (external) {
				window.open(href, '_blank', 'noopener')
			} else {
				push(href)
			}
		},
		[href, external, push],
	)
	return (
		<a title={href} onClick={handleClick}>
			{children}
		</a>
	)
}
