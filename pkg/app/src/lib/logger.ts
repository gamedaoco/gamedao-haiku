import chalk, { ChalkInstance } from 'chalk'
import log, { LogLevel, setDefaultLevel } from 'loglevel'
import prefix from 'loglevel-plugin-prefix'

export type Levels = keyof LogLevel
const defaultLevel: Levels = 'INFO' as any
setDefaultLevel(defaultLevel)

const colors: Record<Levels, ChalkInstance> = {
	TRACE: chalk.magenta,
	DEBUG: chalk.cyan,
	INFO: chalk.blue,
	WARN: chalk.yellow,
	ERROR: chalk.red,
	SILENT: chalk.gray,
}

prefix.reg(log)
log.enableAll()

prefix.apply(log, {
	format(_level, _name, _time) {
		const level = colors[_level.toUpperCase() as Levels](_level).padEnd(5, ' ')
		const name = chalk.green(_name)
		return `${level} ${name}:`
	},
})

export const Logger = (name: string = 'gamedao', level?: Levels) => {
	const logger = log.getLogger(name)
	logger.setLevel(level || defaultLevel)
	return logger
}
