import { useEffect, useState } from 'react'
import { useConfig } from '../hooks/useConfig'
import { type LoggerType, Logger } from '../utils/logger'

export function useLogger(name: string = '📜'): LoggerType {
	const config = useConfig()
	const [loggerState, setLoggerState] = useState<LoggerType>(Logger(name, config?.LOG_LEVEL))

	useEffect(() => {
		if (config.LOG_LEVEL) {
			setLoggerState(Logger(name, config.LOG_LEVEL))
		}
	}, [name, config?.LOG_LEVEL])

	return loggerState
}
