import { PubSub as ApolloPubSub } from 'graphql-subscriptions'

export class PubSub {
	private static _instance: PubSub
	private readonly pubsub: ApolloPubSub

	constructor() {
		this.pubsub = new ApolloPubSub()
	}

	public static get Instance() {
		return PubSub._instance || (PubSub._instance = new PubSub())
	}

	public get client(): ApolloPubSub {
		return this.pubsub
	}
}
