import { ReactNode, Fragment } from 'react'
import { useAppContext } from 'src/providers/app/components/context'
import { Loader } from 'components/atoms/Loader'

interface ComponentProps {
	children: ReactNode
}

export function ReadyProvider({ children }: ComponentProps) {
	const appContext = useAppContext()
	return !appContext.ready ? <Loader /> : <Fragment>{children}</Fragment>
}
