import { ReactNode, Fragment } from 'react'
import { useAppContext } from 'src/providers/app/modules/context'
import { Loader } from 'src/components/Loader'

interface ComponentProps {
	children: ReactNode
}

export function ReadyProvider({ children }: ComponentProps) {
	const appContext = useAppContext()
	return !appContext.ready ? <Loader /> : <Fragment>{children}</Fragment>
}
