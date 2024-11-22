import { PrismaClient } from '@prisma/client'

export class DbClient {
	private static _instance: DbClient
	private isInitialized: boolean = false
	private readonly prismaClient: PrismaClient

	constructor() {
		this.prismaClient = new PrismaClient()
	}

	public static get Instance() {
		return DbClient._instance || (DbClient._instance = new DbClient())
	}

	public get initialized() {
		return this.isInitialized
	}

	public get client(): PrismaClient {
		return this.prismaClient
	}

	public async updateBlockNumber(blockNumber: number): Promise<boolean> {
		if (!this.initialized) {
			return false
		}

		const update = await this.prismaClient.chainInfo.upsert({
			where: { id: 1 },
			update: {
				blockNumber: blockNumber,
			},
			create: {
				blockNumber: blockNumber,
			},
		})

		return !!update
	}

	public async Initialize() {
		this.isInitialized = true
	}
}
