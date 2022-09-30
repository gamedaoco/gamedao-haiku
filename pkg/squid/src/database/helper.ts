import { EntityConstructor } from '../@types/entity';
import { Store } from '@subsquid/substrate-processor';


export async function get<TModel>(
	store: Store,
	entityConstructor: EntityConstructor<TModel>,
	id: string,
	relations: string[] = [],
): Promise<TModel | null> {
	// @ts-ignore
	return (await store.findOne<TModel>(entityConstructor, { where: { id }, relations })) ?? null;
}
