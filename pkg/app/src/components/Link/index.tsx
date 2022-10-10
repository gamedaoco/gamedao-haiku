import { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
	href: string
	target: string
	children: ReactNode
}

const Component = ({ href, target, children }: Props) => {
	return (
		<>
			{target ? (
				<a target="_blank" href={href}>
					{children}
				</a>
			) : (
				<a>
					<Link href={href}>{children}</Link>
				</a>
			)}
		</>
	)
}

export default Component
