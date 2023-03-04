import { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
	href: string
	target?: string
	children: ReactNode
}

const Component = ({ href, target, children }: Props) => {
	return target || href.startsWith('http') ? (
		<a target="_blank" rel="noreferrer" href={href}>
			{children}
		</a>
	) : (
		<>
			<Link href={href}>{children}</Link>
		</>
	)
}

export default Component
