import type { Session } from '@prisma/client'
import EventEmitter from 'eventemitter3'

import { getZeroAddressFromAddress } from '../utils/accountUtils'
import { DbClient } from './dbClient'

const dbClient = DbClient.Instance

export class SessionManager {
	private static readonly _intervalMs = 15 * 30 * 1000
	private static readonly _activeSessionUpdateEvent = 'activeSessionUpdate'
	private static _instance: SessionManager

	private isInitialized: boolean = false
	private activeSessions: Session[] = []
	private interval: any
	private emitter: EventEmitter

	constructor() {
		this.emitter = new EventEmitter()
	}

	public static get Instance() {
		return SessionManager._instance || (SessionManager._instance = new SessionManager())
	}

	public async Initialize() {
		if (this.isInitialized) {
			return
		}

		this.isInitialized = true
		this.interval = setInterval(this.manageSessions.bind(this), SessionManager._intervalMs)
	}

	public onActiveSessionsUpdate(fn: (activeSessions: Session[]) => void) {
		return this.emitter.on(SessionManager._activeSessionUpdateEvent, fn)
	}

	public async updateSession(address: string): Promise<boolean> {
		if (!dbClient.initialized) {
			return false
		}

		try {
			const date = new Date()
			const addressZeroFormat = getZeroAddressFromAddress(address)
			const update = await dbClient.client.session.upsert({
				where: { address: addressZeroFormat },
				update: {
					updatedAt: date,
				},
				create: {
					address: addressZeroFormat,
					updatedAt: date,
				},
			})

			if (update) {
				this.manageSessions()
			}

			return !!update
		} catch (e) {
			console.error('updateSession', e)
		}

		return false
	}

	// Get called every 15 minutes(_intervalMs) or by updateSessions
	// This method is responsible for removing sessions that are expired
	private async manageSessions(): Promise<void> {
		if (!dbClient.initialized) {
			return
		}

		// Get all sessions active sessions
		this.activeSessions = await dbClient.client.session.findMany({
			where: { updatedAt: { gte: new Date(Date.now() - SessionManager._intervalMs) } },
		})

		this.emitter.emit(SessionManager._activeSessionUpdateEvent, this.activeSessions)
	}
}
