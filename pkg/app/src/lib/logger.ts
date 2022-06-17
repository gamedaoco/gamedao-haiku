import chalk, { Chalk } from 'chalk'
import log, { LogLevel, setDefaultLevel } from 'loglevel'
import prefix from 'loglevel-plugin-prefix'

type Levels = keyof LogLevel
// TODO: @darknebula0 get env from config
const TempLogLevelFromConfig = 'INFO'
const defaultLevel: Levels = ( TempLogLevelFromConfig || 'INFO' ).toUpperCase() as any
setDefaultLevel( defaultLevel )

const colors: Record<Levels, Chalk> = {
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
		const now = new Date()
		const date = `${now.getFullYear()}${now.getMonth() + 1}${now.getDay().toString().padStart(2, '0')}-`
		const time = _time.toString().replaceAll(':', '')
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