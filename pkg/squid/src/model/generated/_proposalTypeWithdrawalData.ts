import assert from 'assert';
import * as marshal from './marshal';

export class ProposalTypeWithdrawalData {
	public readonly isTypeOf = 'ProposalTypeWithdrawalData';
	private _withdrawAmount!: bigint;

	constructor(props?: Partial<Omit<ProposalTypeWithdrawalData, 'toJSON'>>, json?: any) {
		Object.assign(this, props);
		if (json != null) {
			this._withdrawAmount = marshal.bigint.fromJSON(json.withdrawAmount);
		}
	}

	get withdrawAmount(): bigint {
		assert(this._withdrawAmount != null, 'uninitialized access');
		return this._withdrawAmount;
	}

	set withdrawAmount(value: bigint) {
		this._withdrawAmount = value;
	}

	toJSON(): object {
		return {
			isTypeOf: this.isTypeOf,
			withdrawAmount: marshal.bigint.toJSON(this.withdrawAmount),
		};
	}
}
