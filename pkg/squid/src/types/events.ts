import { EventContext, Result, deprecateLatest } from './support';
import * as v51 from './v51';
import * as v52 from './v52';
import assert from 'assert';

export class ControlAddMemberEvent {
	constructor(private ctx: EventContext) {
		assert(this.ctx.event.name === 'control.AddMember');
	}

	get isV51(): boolean {
		return (
			this.ctx._chain.getEventHash('control.AddMember') ===
			'1612429c53391716db913b270a71e38a6ffb82fdcf636676c05f981b186dc93d'
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
			'4e393aea082c3c6ff3eaea7f1751b935a60ac5e3314fa506947bbc9db9aff5dd'
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
			'6dbf5f59b7d96281f8c1c006ec712b5a09a4ede5daea0cf19dd7e2547cb9f420'
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
			'468323ba2b1d06ed69cab44dae01b73effde3718b7f6fa45825f7ab33b4b3470'
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
			'371b8f51721e1fd8ed81cf9a3772d6cc0f16c13a8914d6e2db030f98b0b8df78'
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
			'f8729adf95aca79ce70a6bf7e5552c2fbca3c375bd8d28e1c244ab667301a78e'
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
			'fc15b0acbdb489eb2e0dabd16a4be053f3ca74fb78406c41d8e49d6946894452'
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
			'374ef9f1f9e74398ef5466b31f981fbefc95ea63a0d7fd9dc3f519442cafda62'
		);
	}

	get asV51(): { campaignId: v51.H256; state: v51.FlowState; blockNumber: number } {
		assert(this.isV51);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isV52(): boolean {
		return (
			this.ctx._chain.getEventHash('flow.CampaignUpdated') ===
			'd53f44018d02dddde23ec6f21223f3faefce4ac995e762fae76a4e26ad18b37a'
		);
	}

	get asV52(): { campaignId: v52.H256; state: v52.FlowState; blockNumber: number } {
		assert(this.isV52);
		return this.ctx._chain.decodeEvent(this.ctx.event);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV52;
	}

	get asLatest(): { campaignId: v52.H256; state: v52.FlowState; blockNumber: number } {
		deprecateLatest();
		return this.asV52;
	}
}
