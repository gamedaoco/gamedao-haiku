// Imports
// 3rd
import { config as loadConfig } from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
	loadConfig()
}
