import assert from 'assert';
import { EventContext, Result, deprecateLatest } from './support';
import * as v51 from './v51';
import * as v55 from './v55';

export class ControlAddMemberEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'control.AddMember');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('control.AddMember') ===
			'e3ecfdf4ae9b50fc2755d1f9db55966f6a1b2d7d7dad41bf1d26118a9f3c59fe'
		);
	}

	get asV51(): { orgId: v51.H256; accountId: v51.AccountId32; addedAt: number } {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV51;
	}

	get asLatest(): { orgId: v51.H256; accountId: v51.AccountId32; addedAt: number } {
		deprecateLatest();
		return this.asV51;
	}
}

export class ControlOrgCreatedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'control.OrgCreated');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('control.OrgCreated') ===
			'8b455a07160eae124684c58db55014bb7e6b9c3520cbcd5ae2dad54b50829dc6'
		);
	}

	get asV51(): {
		senderId: v51.AccountId32;
		orgId: v51.H256;
		treasuryId: v51.AccountId32;
		createdAt: number;
		realmIndex: bigint;
	} {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV51;
	}

	get asLatest(): {
		senderId: v51.AccountId32;
		orgId: v51.H256;
		treasuryId: v51.AccountId32;
		createdAt: number;
		realmIndex: bigint;
	} {
		deprecateLatest();
		return this.asV51;
	}
}

export class ControlRemoveMemberEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'control.RemoveMember');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('control.RemoveMember') ===
			'5d42b282f05739070f0f410d441cfe9c3bd6d3d47ad9292d5c6497e6157b58d2'
		);
	}

	get asV51(): { orgId: v51.H256; accountId: v51.AccountId32; removedAt: number } {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV51;
	}

	get asLatest(): { orgId: v51.H256; accountId: v51.AccountId32; removedAt: number } {
		deprecateLatest();
		return this.asV51;
	}
}

export class FlowCampaignContributedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'flow.CampaignContributed');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.CampaignContributed') ===
			'd8db14008bc916744d2223c9ae64c77e900996ff702695e41ec566ede7ee72db'
		);
	}

	get asV51(): { campaignId: v51.H256; sender: v51.AccountId32; contribution: bigint; blockNumber: number } {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV51;
	}

	get asLatest(): { campaignId: v51.H256; sender: v51.AccountId32; contribution: bigint; blockNumber: number } {
		deprecateLatest();
		return this.asV51;
	}
}

export class FlowCampaignCreatedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'flow.CampaignCreated');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.CampaignCreated') ===
			'ff2ecea79f1fe30537e2d7e89f486cb3705ec64411ac17525c02b4c7369601c4'
		);
	}

	get asV51(): {
		campaignId: v51.H256;
		creator: v51.AccountId32;
		admin: v51.AccountId32;
		target: bigint;
		deposit: bigint;
		expiry: number;
		name: Uint8Array;
	} {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV51;
	}

	get asLatest(): {
		campaignId: v51.H256;
		creator: v51.AccountId32;
		admin: v51.AccountId32;
		target: bigint;
		deposit: bigint;
		expiry: number;
		name: Uint8Array;
	} {
		deprecateLatest();
		return this.asV51;
	}
}

export class FlowCampaignFailedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'flow.CampaignFailed');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.CampaignFailed') ===
			'8f85cbd834ab8bd616c9a81d472f2cc6b0ee0111a1b6eddf44030d7d5d5b742d'
		);
	}

	get asV51(): { campaignId: v51.H256; campaignBalance: bigint; blockNumber: number; success: boolean } {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV51;
	}

	get asLatest(): { campaignId: v51.H256; campaignBalance: bigint; blockNumber: number; success: boolean } {
		deprecateLatest();
		return this.asV51;
	}
}

export class FlowCampaignFinalizedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'flow.CampaignFinalized');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.CampaignFinalized') ===
			'8f85cbd834ab8bd616c9a81d472f2cc6b0ee0111a1b6eddf44030d7d5d5b742d'
		);
	}

	get asV51(): { campaignId: v51.H256; campaignBalance: bigint; blockNumber: number; success: boolean } {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV51;
	}

	get asLatest(): { campaignId: v51.H256; campaignBalance: bigint; blockNumber: number; success: boolean } {
		deprecateLatest();
		return this.asV51;
	}
}

export class FlowCampaignUpdatedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'flow.CampaignUpdated');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.CampaignUpdated') ===
			'279ec5a38271bd0d9063c05562eab6c0a03fd7108e17a6c334c36455bbc78ea9'
		);
	}

	get asV51(): { campaignId: v51.H256; state: v51.FlowState; blockNumber: number } {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isV55(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.CampaignUpdated') ===
			'267fba49ebebc21ce2eb1619b84a079d4feeea75659223b0a0dc69ec79b12f5d'
		);
	}

	get asV55(): { campaignId: v55.H256; state: v55.FlowState; blockNumber: number } {
		assert(this.isV55);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV55;
	}

	get asLatest(): { campaignId: v55.H256; state: v55.FlowState; blockNumber: number } {
		deprecateLatest();
		return this.asV55;
	}
}

export class SignalProposalEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.Proposal');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.Proposal') ===
			'fe8c739a512a2ccc7bb867443cc59e1edebaee76fbf1d9752e1b2137c1681253'
		);
	}

	get asV51(): { senderId: v51.AccountId32; proposalId: v51.H256 } {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV51;
	}

	get asLatest(): { senderId: v51.AccountId32; proposalId: v51.H256 } {
		deprecateLatest();
		return this.asV51;
	}
}

export class SignalProposalApprovedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.ProposalApproved');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.ProposalApproved') ===
			'6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
		);
	}

	get asV51(): { proposalId: v51.H256 } {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV51;
	}

	get asLatest(): { proposalId: v51.H256 } {
		deprecateLatest();
		return this.asV51;
	}
}

export class SignalProposalCreatedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.ProposalCreated');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.ProposalCreated') ===
			'6d8015dc32da812c176da8c2ff038ca67122eca69065b0754f9d44ad7a03b3bc'
		);
	}

	get asV51(): {
		senderId: v51.AccountId32;
		campaignId: v51.H256;
		proposalId: v51.H256;
		amount: bigint;
		expiry: number;
	} {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isV55(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.ProposalCreated') ===
			'9d818c84d63620004efe846a214e3cc101a0d7d0c65f062ade8c6d041174e2d9'
		);
	}

	get asV55(): {
		senderId: v55.AccountId32;
		contextId: v55.H256;
		proposalId: v55.H256;
		amount: bigint;
		expiry: number;
	} {
		assert(this.isV55);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV55;
	}

	get asLatest(): {
		senderId: v55.AccountId32;
		contextId: v55.H256;
		proposalId: v55.H256;
		amount: bigint;
		expiry: number;
	} {
		deprecateLatest();
		return this.asV55;
	}
}

export class SignalProposalExpiredEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.ProposalExpired');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.ProposalExpired') ===
			'6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
		);
	}

	get asV51(): { proposalId: v51.H256 } {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV51;
	}

	get asLatest(): { proposalId: v51.H256 } {
		deprecateLatest();
		return this.asV51;
	}
}

export class SignalProposalRejectedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.ProposalRejected');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.ProposalRejected') ===
			'6e72a97ae5b806677fe57a7494d12e2b9c7eb6bf41b48bb46554771f71d3e1cc'
		);
	}

	get asV51(): { proposalId: v51.H256 } {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV51;
	}

	get asLatest(): { proposalId: v51.H256 } {
		deprecateLatest();
		return this.asV51;
	}
}

export class SignalProposalVotedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.ProposalVoted');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.ProposalVoted') ===
			'b9f0b54a4b7147462f039614c0aa5d0456be0d2838509b049b8c6db3b333100d'
		);
	}

	get asV51(): { senderId: v51.AccountId32; proposalId: v51.H256; vote: boolean } {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV51;
	}

	get asLatest(): { senderId: v51.AccountId32; proposalId: v51.H256; vote: boolean } {
		deprecateLatest();
		return this.asV51;
	}
}

export class SignalWithdrawalGrantedEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'signal.WithdrawalGranted');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('signal.WithdrawalGranted') ===
			'6a64fab7a260f3ff8d4fe197667aa7dd03417d4c6d05137596968eaf77958c63'
		);
	}

	get asV51(): { proposalId: v51.H256; campaignId: v51.H256; orgId: v51.H256 } {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV51;
	}

	get asLatest(): { proposalId: v51.H256; campaignId: v51.H256; orgId: v51.H256 } {
		deprecateLatest();
		return this.asV51;
	}
}
