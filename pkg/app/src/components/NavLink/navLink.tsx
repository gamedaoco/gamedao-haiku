import { ReactNode, useCallback } from 'react'
import { useRouter } from 'next/router'

type NavLinkProps = {
	href: string
	children: ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
	const { push } = useRouter()

	const handleClick = useCallback(
		(e) => {
			e.preventDefault()
			push(href)
		},
		[href, push],
	)
	return (
		<div title={href} onClick={handleClick}>
			{children}
		</div>
	)
}
