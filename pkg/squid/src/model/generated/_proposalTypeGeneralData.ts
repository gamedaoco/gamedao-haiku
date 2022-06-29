import assert from 'assert';
import * as marshal from './marshal';

export class ProposalTypeGeneralData {
	public readonly isTypeOf = 'ProposalTypeGeneralData';
	private _type!: number;

	constructor(props?: Partial<Omit<ProposalTypeGeneralData, 'toJSON'>>, json?: any) {
		Object.assign(this, props);
		if (json != null) {
			this._type = marshal.int.fromJSON(json.type);
		}
	}

	get type(): number {
		assert(this._type != null, 'uninitialized access');
		return this._type;
	}

	set type(value: number) {
		this._type = value;
	}

	toJSON(): object {
		return {
			isTypeOf: this.isTypeOf,
			type: this.type,
		};
	}
}
