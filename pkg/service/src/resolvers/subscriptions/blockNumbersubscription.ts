import { ResolverTypeWrapper, SubscriptionResolver } from '../../@types/schema'
import { PubSub } from '../../modules/pubSub'

const pubsub = PubSub.Instance

export const blockNumberSubscription: SubscriptionResolver<ResolverTypeWrapper<number>, 'blockNumber'> = {
	subscribe: () => pubsub.client.asyncIterator(['NEW_BLOCK_NUMBER']) as any,
}
