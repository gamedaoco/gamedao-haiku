import assert from 'assert';
import { EventContext, Result, deprecateLatest } from './support';
import * as v56 from './v56';

export class ControlAddMemberEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'control.AddMember');
	}

	/**
	 * A member has been added to the Org.
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getEventHash('control.AddMember') ===
			'e3ecfdf4ae9b50fc2755d1f9db55966f6a1b2d7d7dad41bf1d26118a9f3c59fe'
		);
	}

	/**
	 * A member has been added to the Org.
	 */
	get asV56(): { orgId: v56.H256; accountId: v56.AccountId32; addedAt: number } {
		assert(this.isV56);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): { orgId: v56.H256; accountId: v56.AccountId32; addedAt: number } {
		deprecateLatest();
		return this.asV56;
	}
}

export class ControlOrgCreatedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'control.OrgCreated');
	}

	/**
	 * Org was successfully created.
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getEventHash('control.OrgCreated') ===
			'8b455a07160eae124684c58db55014bb7e6b9c3520cbcd5ae2dad54b50829dc6'
		);
	}

	/**
	 * Org was successfully created.
	 */
	get asV56(): {
		senderId: v56.AccountId32;
		orgId: v56.H256;
		treasuryId: v56.AccountId32;
		createdAt: number;
		realmIndex: bigint;
	} {
		assert(this.isV56);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): {
		senderId: v56.AccountId32;
		orgId: v56.H256;
		treasuryId: v56.AccountId32;
		createdAt: number;
		realmIndex: bigint;
	} {
		deprecateLatest();
		return this.asV56;
	}
}

export class ControlRemoveMemberEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'control.RemoveMember');
	}

	/**
	 * A member has been removed from the Org.
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getEventHash('control.RemoveMember') ===
			'5d42b282f05739070f0f410d441cfe9c3bd6d3d47ad9292d5c6497e6157b58d2'
		);
	}

	/**
	 * A member has been removed from the Org.
	 */
	get asV56(): { orgId: v56.H256; accountId: v56.AccountId32; removedAt: number } {
		assert(this.isV56);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): { orgId: v56.H256; accountId: v56.AccountId32; removedAt: number } {
		deprecateLatest();
		return this.asV56;
	}
}

export class FlowCampaignContributedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'flow.CampaignContributed');
	}

	/**
	 * Campaign was contributed.
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.CampaignContributed') ===
			'd8db14008bc916744d2223c9ae64c77e900996ff702695e41ec566ede7ee72db'
		);
	}

	/**
	 * Campaign was contributed.
	 */
	get asV56(): { campaignId: v56.H256; sender: v56.AccountId32; contribution: bigint; blockNumber: number } {
		assert(this.isV56);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): { campaignId: v56.H256; sender: v56.AccountId32; contribution: bigint; blockNumber: number } {
		deprecateLatest();
		return this.asV56;
	}
}

export class FlowCampaignCreatedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'flow.CampaignCreated');
	}

	/**
	 * Campaign was successfully created.
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.CampaignCreated') ===
			'ff2ecea79f1fe30537e2d7e89f486cb3705ec64411ac17525c02b4c7369601c4'
		);
	}

	/**
	 * Campaign was successfully created.
	 */
	get asV56(): {
		campaignId: v56.H256;
		creator: v56.AccountId32;
		admin: v56.AccountId32;
		target: bigint;
		deposit: bigint;
		expiry: number;
		name: Uint8Array;
	} {
		assert(this.isV56);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): {
		campaignId: v56.H256;
		creator: v56.AccountId32;
		admin: v56.AccountId32;
		target: bigint;
		deposit: bigint;
		expiry: number;
		name: Uint8Array;
	} {
		deprecateLatest();
		return this.asV56;
	}
}

export class FlowCampaignFailedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'flow.CampaignFailed');
	}

	/**
	 * Campaign failed - successfully reverted.
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.CampaignFailed') ===
			'8f85cbd834ab8bd616c9a81d472f2cc6b0ee0111a1b6eddf44030d7d5d5b742d'
		);
	}

	/**
	 * Campaign failed - successfully reverted.
	 */
	get asV56(): { campaignId: v56.H256; campaignBalance: bigint; blockNumber: number; success: boolean } {
		assert(this.isV56);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): { campaignId: v56.H256; campaignBalance: bigint; blockNumber: number; success: boolean } {
		deprecateLatest();
		return this.asV56;
	}
}

export class FlowCampaignFinalizedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'flow.CampaignFinalized');
	}

	/**
	 * Campaign was finalized.
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.CampaignFinalized') ===
			'8f85cbd834ab8bd616c9a81d472f2cc6b0ee0111a1b6eddf44030d7d5d5b742d'
		);
	}

	/**
	 * Campaign was finalized.
	 */
	get asV56(): { campaignId: v56.H256; campaignBalance: bigint; blockNumber: number; success: boolean } {
		assert(this.isV56);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): { campaignId: v56.H256; campaignBalance: bigint; blockNumber: number; success: boolean } {
		deprecateLatest();
		return this.asV56;
	}
}

export class FlowCampaignUpdatedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'flow.CampaignUpdated');
	}

	/**
	 * Campaign was updated with a new state.
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.CampaignUpdated') ===
			'267fba49ebebc21ce2eb1619b84a079d4feeea75659223b0a0dc69ec79b12f5d'
		);
	}

	/**
	 * Campaign was updated with a new state.
	 */
	get asV56(): { campaignId: v56.H256; state: v56.FlowState; blockNumber: number } {
		assert(this.isV56);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): { campaignId: v56.H256; state: v56.FlowState; blockNumber: number } {
		deprecateLatest();
		return this.asV56;
	}
}

export class SignalProposalEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.Proposal');
	}

	/**
	 * Proposal was successfully created (ex. General proposal).
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.Proposal') ===
			'fe8c739a512a2ccc7bb867443cc59e1edebaee76fbf1d9752e1b2137c1681253'
		);
	}

	/**
	 * Proposal was successfully created (ex. General proposal).
	 */
	get asV56(): { senderId: v56.AccountId32; proposalId: v56.H256 } {
		assert(this.isV56);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): { senderId: v56.AccountId32; proposalId: v56.H256 } {
		deprecateLatest();
		return this.asV56;
	}
}

export class SignalProposalApprovedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.ProposalApproved');
	}

	/**
	 * Proposal was approved after the voting.
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.ProposalApproved') ===
			'6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
		);
	}

	/**
	 * Proposal was approved after the voting.
	 */
	get asV56(): { proposalId: v56.H256 } {
		assert(this.isV56);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): { proposalId: v56.H256 } {
		deprecateLatest();
		return this.asV56;
	}
}

export class SignalProposalCreatedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.ProposalCreated');
	}

	/**
	 * Proposal was successfully created (ex. Withdrawal proposal).
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.ProposalCreated') ===
			'057e4f0385c918485bc4d94917efedd4070a0420a25fbaf3fd33a64f9f2cdfbe'
		);
	}

	/**
	 * Proposal was successfully created (ex. Withdrawal proposal).
	 */
	get asV56(): {
		senderId: v56.AccountId32;
		orgId: v56.H256;
		campaignId: v56.H256 | undefined;
		proposalId: v56.H256;
		amount: bigint;
		expiry: number;
	} {
		assert(this.isV56);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): {
		senderId: v56.AccountId32;
		orgId: v56.H256;
		campaignId: v56.H256 | undefined;
		proposalId: v56.H256;
		amount: bigint;
		expiry: number;
	} {
		deprecateLatest();
		return this.asV56;
	}
}

export class SignalProposalExpiredEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.ProposalExpired');
	}

	/**
	 * Proposal was expired, not finalized before expiry block number.
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.ProposalExpired') ===
			'6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
		);
	}

	/**
	 * Proposal was expired, not finalized before expiry block number.
	 */
	get asV56(): { proposalId: v56.H256 } {
		assert(this.isV56);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): { proposalId: v56.H256 } {
		deprecateLatest();
		return this.asV56;
	}
}

export class SignalProposalRejectedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.ProposalRejected');
	}

	/**
	 * Proposal was rejected after the voting.
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.ProposalRejected') ===
			'6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
		);
	}

	/**
	 * Proposal was rejected after the voting.
	 */
	get asV56(): { proposalId: v56.H256 } {
		assert(this.isV56);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): { proposalId: v56.H256 } {
		deprecateLatest();
		return this.asV56;
	}
}

export class SignalProposalVotedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.ProposalVoted');
	}

	/**
	 * Proposal was voted.
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.ProposalVoted') ===
			'b9f0b54a4b7147462f039614c0aa5d0456be0d2838509b049b8c6db3b333100d'
		);
	}

	/**
	 * Proposal was voted.
	 */
	get asV56(): { senderId: v56.AccountId32; proposalId: v56.H256; vote: boolean } {
		assert(this.isV56);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): { senderId: v56.AccountId32; proposalId: v56.H256; vote: boolean } {
		deprecateLatest();
		return this.asV56;
	}
}

export class SignalWithdrawalGrantedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.WithdrawalGranted');
	}

	/**
	 * Balance was unlocked for the Withdrawal proposal.
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.WithdrawalGranted') ===
			'6a64fab7a260f3ff8d4fe197667aa7dd03417d4c6d05137596968eaf77958c63'
		);
	}

	/**
	 * Balance was unlocked for the Withdrawal proposal.
	 */
	get asV56(): { proposalId: v56.H256; campaignId: v56.H256; orgId: v56.H256 } {
		assert(this.isV56);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): { proposalId: v56.H256; campaignId: v56.H256; orgId: v56.H256 } {
		deprecateLatest();
		return this.asV56;
	}
}
