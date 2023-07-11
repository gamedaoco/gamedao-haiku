import { ReactNode, Fragment } from 'react'
import { Loader } from 'src/components/Loader'
import { useAppContext } from 'src/providers/app/modules/context'

interface ComponentProps {
	children: ReactNode
}

export function ReadyProvider({ children }: ComponentProps) {
	const appContext = useAppContext()
	return !appContext.ready ? <Loader /> : <Fragment>{children}</Fragment>
}
