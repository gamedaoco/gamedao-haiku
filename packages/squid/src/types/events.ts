import assert from 'assert';
import { EventContext, Result, deprecateLatest } from './support';
import * as v62 from './v62';

export class ControlFundsSpendedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'control.FundsSpended');
	}

	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('control.FundsSpended') ===
			'099c5be51a66396abb273e830e2058b941aad39f3071d1634c96f9b293f58a04'
		);
	}

	get asV62(): {
		orgId: v62.H256;
		beneficiary: v62.AccountId32;
		amount: bigint;
		currencyId: v62.CurrencyId;
		blockNumber: number;
	} {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): {
		orgId: v62.H256;
		beneficiary: v62.AccountId32;
		amount: bigint;
		currencyId: v62.CurrencyId;
		blockNumber: number;
	} {
		deprecateLatest();
		return this.asV62;
	}
}

export class ControlMemberAddedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'control.MemberAdded');
	}

	/**
	 * A member has been added to the Org.
	 */
	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('control.MemberAdded') ===
			'c57cca31f3dcf3e0516f54aad1cbcd104d3e4afc717e4fb5667c8c9e8b1d1e27'
		);
	}

	/**
	 * A member has been added to the Org.
	 */
	get asV62(): { orgId: v62.H256; who: v62.AccountId32; blockNumber: number } {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): { orgId: v62.H256; who: v62.AccountId32; blockNumber: number } {
		deprecateLatest();
		return this.asV62;
	}
}

export class ControlMemberRemovedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'control.MemberRemoved');
	}

	/**
	 * A member has been removed from the Org.
	 */
	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('control.MemberRemoved') ===
			'c57cca31f3dcf3e0516f54aad1cbcd104d3e4afc717e4fb5667c8c9e8b1d1e27'
		);
	}

	/**
	 * A member has been removed from the Org.
	 */
	get asV62(): { orgId: v62.H256; who: v62.AccountId32; blockNumber: number } {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): { orgId: v62.H256; who: v62.AccountId32; blockNumber: number } {
		deprecateLatest();
		return this.asV62;
	}
}

export class ControlOrgCreatedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'control.OrgCreated');
	}

	/**
	 * Org was successfully created.
	 */
	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('control.OrgCreated') ===
			'6dc87039cf7ad8828c149f473dd3d7aabd1dd4c9e85e2f729bf294df9474ccc1'
		);
	}

	/**
	 * Org was successfully created.
	 */
	get asV62(): {
		orgId: v62.H256;
		creator: v62.AccountId32;
		treasuryId: v62.AccountId32;
		createdAt: number;
		realmIndex: bigint;
	} {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): {
		orgId: v62.H256;
		creator: v62.AccountId32;
		treasuryId: v62.AccountId32;
		createdAt: number;
		realmIndex: bigint;
	} {
		deprecateLatest();
		return this.asV62;
	}
}

export class ControlOrgDisabledEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'control.OrgDisabled');
	}

	/**
	 * Org was disabled and it's state become Inactive.
	 */
	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('control.OrgDisabled') ===
			'21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
		);
	}

	/**
	 * Org was disabled and it's state become Inactive.
	 */
	get asV62(): v62.H256 {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): v62.H256 {
		deprecateLatest();
		return this.asV62;
	}
}

export class ControlOrgEnabledEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'control.OrgEnabled');
	}

	/**
	 * Org was enabled and it's state become Active.
	 */
	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('control.OrgEnabled') ===
			'21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
		);
	}

	/**
	 * Org was enabled and it's state become Active.
	 */
	get asV62(): v62.H256 {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): v62.H256 {
		deprecateLatest();
		return this.asV62;
	}
}

export class ControlOrgUpdatedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'control.OrgUpdated');
	}

	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('control.OrgUpdated') ===
			'56e286ff0883c501a4abbab304815f66e27195e490410248f38fdd3ec39562a4'
		);
	}

	get asV62(): {
		orgId: v62.H256;
		primeId: v62.AccountId32 | undefined;
		orgType: v62.OrgType | undefined;
		accessModel: v62.AccessModel | undefined;
		memberLimit: number | undefined;
		feeModel: v62.FeeModel | undefined;
		membershipFee: bigint | undefined;
		blockNumber: number;
	} {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): {
		orgId: v62.H256;
		primeId: v62.AccountId32 | undefined;
		orgType: v62.OrgType | undefined;
		accessModel: v62.AccessModel | undefined;
		memberLimit: number | undefined;
		feeModel: v62.FeeModel | undefined;
		membershipFee: bigint | undefined;
		blockNumber: number;
	} {
		deprecateLatest();
		return this.asV62;
	}
}

export class FlowActivatedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'flow.Activated');
	}

	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.Activated') ===
			'1298080916d3502103b1b010f17c51ff90da4cfa7278463486275e928c258bc5'
		);
	}

	get asV62(): { campaignId: v62.H256 } {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): { campaignId: v62.H256 } {
		deprecateLatest();
		return this.asV62;
	}
}

export class FlowContributedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'flow.Contributed');
	}

	/**
	 * Campaign was contributed.
	 */
	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.Contributed') ===
			'd8db14008bc916744d2223c9ae64c77e900996ff702695e41ec566ede7ee72db'
		);
	}

	/**
	 * Campaign was contributed.
	 */
	get asV62(): { campaignId: v62.H256; sender: v62.AccountId32; contribution: bigint; blockNumber: number } {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): { campaignId: v62.H256; sender: v62.AccountId32; contribution: bigint; blockNumber: number } {
		deprecateLatest();
		return this.asV62;
	}
}

export class FlowCreatedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'flow.Created');
	}

	/**
	 * Campaign was successfully created.
	 */
	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.Created') ===
			'ff2ecea79f1fe30537e2d7e89f486cb3705ec64411ac17525c02b4c7369601c4'
		);
	}

	/**
	 * Campaign was successfully created.
	 */
	get asV62(): {
		campaignId: v62.H256;
		creator: v62.AccountId32;
		admin: v62.AccountId32;
		target: bigint;
		deposit: bigint;
		expiry: number;
		name: Uint8Array;
	} {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): {
		campaignId: v62.H256;
		creator: v62.AccountId32;
		admin: v62.AccountId32;
		target: bigint;
		deposit: bigint;
		expiry: number;
		name: Uint8Array;
	} {
		deprecateLatest();
		return this.asV62;
	}
}

export class FlowFailedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'flow.Failed');
	}

	/**
	 * Campaign failed - successfully reverted.
	 */
	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.Failed') ===
			'8c26af8c0dbcf4eedccfc26b2eaa166ab0f2b6cd9cb14b67768380ced0d0251b'
		);
	}

	/**
	 * Campaign failed - successfully reverted.
	 */
	get asV62(): { campaignId: v62.H256; campaignBalance: bigint; blockNumber: number } {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): { campaignId: v62.H256; campaignBalance: bigint; blockNumber: number } {
		deprecateLatest();
		return this.asV62;
	}
}

export class FlowSucceededEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'flow.Succeeded');
	}

	/**
	 * Campaign was finalized.
	 */
	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.Succeeded') ===
			'8c26af8c0dbcf4eedccfc26b2eaa166ab0f2b6cd9cb14b67768380ced0d0251b'
		);
	}

	/**
	 * Campaign was finalized.
	 */
	get asV62(): { campaignId: v62.H256; campaignBalance: bigint; blockNumber: number } {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): { campaignId: v62.H256; campaignBalance: bigint; blockNumber: number } {
		deprecateLatest();
		return this.asV62;
	}
}

export class SignalAbortedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.Aborted');
	}

	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.Aborted') ===
			'6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
		);
	}

	get asV62(): { proposalId: v62.H256 } {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): { proposalId: v62.H256 } {
		deprecateLatest();
		return this.asV62;
	}
}

export class SignalAcceptedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.Accepted');
	}

	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.Accepted') ===
			'6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
		);
	}

	get asV62(): { proposalId: v62.H256 } {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): { proposalId: v62.H256 } {
		deprecateLatest();
		return this.asV62;
	}
}

export class SignalActivatedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.Activated');
	}

	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.Activated') ===
			'6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
		);
	}

	get asV62(): { proposalId: v62.H256 } {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): { proposalId: v62.H256 } {
		deprecateLatest();
		return this.asV62;
	}
}

export class SignalCreatedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.Created');
	}

	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.Created') ===
			'a32001d595a80cd793e2fb41d5441290f20cdb8b2c9e5bccb6809adc21ae606a'
		);
	}

	get asV62(): {
		account: v62.AccountId32;
		proposalId: v62.H256;
		orgId: v62.H256;
		campaignId: v62.H256 | undefined;
		amount: bigint | undefined;
		start: number;
		expiry: number;
	} {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): {
		account: v62.AccountId32;
		proposalId: v62.H256;
		orgId: v62.H256;
		campaignId: v62.H256 | undefined;
		amount: bigint | undefined;
		start: number;
		expiry: number;
	} {
		deprecateLatest();
		return this.asV62;
	}
}

export class SignalExpiredEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.Expired');
	}

	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.Expired') ===
			'6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
		);
	}

	get asV62(): { proposalId: v62.H256 } {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): { proposalId: v62.H256 } {
		deprecateLatest();
		return this.asV62;
	}
}

export class SignalFinalizedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.Finalized');
	}

	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.Finalized') ===
			'6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
		);
	}

	get asV62(): { proposalId: v62.H256 } {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): { proposalId: v62.H256 } {
		deprecateLatest();
		return this.asV62;
	}
}

export class SignalRejectedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.Rejected');
	}

	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.Rejected') ===
			'6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
		);
	}

	get asV62(): { proposalId: v62.H256 } {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): { proposalId: v62.H256 } {
		deprecateLatest();
		return this.asV62;
	}
}

export class SignalVotedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.Voted');
	}

	get isV62(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.Voted') ===
			'c017b1f31028a2d6a927c9c9de81e8be0f84cc28fdc5daba87b671932d1be3be'
		);
	}

	get asV62(): {
		account: v62.AccountId32;
		proposalId: v62.H256;
		voted: boolean;
		yes: bigint;
		no: bigint;
		votePower: bigint;
	} {
		assert(this.isV62);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV62;
	}

	get asLatest(): {
		account: v62.AccountId32;
		proposalId: v62.H256;
		voted: boolean;
		yes: bigint;
		no: bigint;
		votePower: bigint;
	} {
		deprecateLatest();
		return this.asV62;
	}
}
