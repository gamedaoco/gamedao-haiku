export type EntityConstructor<T> = {
	new (...args: any[]): T;
};
