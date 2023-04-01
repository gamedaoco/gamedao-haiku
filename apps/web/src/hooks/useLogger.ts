import { useEffect, useState } from 'react'

import { useConfig } from 'src/hooks/useConfig'
import { Logger } from 'src/lib/logger'
import { Logger as LoggerType } from 'loglevel'

export function useLogger(name: string = 'HAIKU'): LoggerType {
	const config = useConfig()
	const [loggerState, setLoggerState] = useState<LoggerType>(Logger(name, config?.LOG_LEVEL))

	useEffect(() => {
		if (config.LOG_LEVEL) {
			setLoggerState(Logger(name, config.LOG_LEVEL))
		}
	}, [name, config?.LOG_LEVEL])

	return loggerState
}
