import { SessionManager } from '../../modules/sessionManager'

const sessionManager = SessionManager.Instance

export async function updateSessionResolver(_: any, { address }: any): Promise<boolean> {
	return await sessionManager.updateSession(address)
}
