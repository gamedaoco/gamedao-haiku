import assert from 'assert';
import { CallContext, Result, deprecateLatest } from './support';
import * as v51 from './v51';
import * as v55 from './v55';

export class ControlCreateOrgCall {
	constructor(private ctx: CallContext) {
		assert(this.ctx.extrinsic.name === 'control.createOrg' || this.ctx.extrinsic.name === 'control.create_org');
	}

	/**
	 * Create Org
	 * create an on chain organisation
	 *
	 * - `creator`: creator
	 * - `controller`: current controller
	 * - `name`: Org name
	 * - `cid`: IPFS
	 * - `org_type`: individual | legal Org | dao
	 * - `access`: anyDAO can join | only member can add | only
	 * - `fee_model`: only TX by OS | fees are reserved | fees are moved to treasury
	 * - `fee`: fee
	 * - `gov_asset`: control assets to empower actors
	 * - `pay_asset`:
	 * - `member_limit`: max members, if 0 == no limit
	 *
	 * Emits `OrgCreated` event when successful.
	 *
	 * Weight:
	 */
	get isV51(): boolean {
		return (
			this.ctx._chain.getCallHash('control.create_org') ===
			'e4015a6d3c42952f5c7d89a5ef9c94907af0fd271f7546354945cb59408149cc'
		);
	}

	/**
	 * Create Org
	 * create an on chain organisation
	 *
	 * - `creator`: creator
	 * - `controller`: current controller
	 * - `name`: Org name
	 * - `cid`: IPFS
	 * - `org_type`: individual | legal Org | dao
	 * - `access`: anyDAO can join | only member can add | only
	 * - `fee_model`: only TX by OS | fees are reserved | fees are moved to treasury
	 * - `fee`: fee
	 * - `gov_asset`: control assets to empower actors
	 * - `pay_asset`:
	 * - `member_limit`: max members, if 0 == no limit
	 *
	 * Emits `OrgCreated` event when successful.
	 *
	 * Weight:
	 */
	get asV51(): {
		controller: v51.AccountId32;
		name: Uint8Array;
		cid: Uint8Array;
		orgType: v51.OrgType;
		access: v51.AccessModel;
		feeModel: v51.FeeModel;
		fee: bigint;
		govAsset: number;
		payAsset: number;
		memberLimit: bigint;
	} {
		assert(this.isV51);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	/**
	 * Create Org
	 * create an on chain organisation
	 *
	 * - `creator`: creator
	 * - `controller`: current controller
	 * - `name`: Org name
	 * - `cid`: IPFS
	 * - `org_type`: individual | legal Org | dao
	 * - `access`: anyDAO can join | only member can add | only
	 * - `fee_model`: only TX by OS | fees are reserved | fees are moved to treasury
	 * - `fee`: fee
	 * - `gov_asset`: control assets to empower actors
	 * - `pay_asset`:
	 * - `member_limit`: max members, if 0 == no limit
	 * - `deposit`: initial deposit for the org treasury
	 *
	 * Emits `OrgCreated` event when successful.
	 *
	 * Weight:
	 */
	get isV55(): boolean {
		return (
			this.ctx._chain.getCallHash('control.create_org') ===
			'ec8a2644eea287189ed3cc6df51e8a6abe070543beda8ef7a476f4fc05517912'
		);
	}

	/**
	 * Create Org
	 * create an on chain organisation
	 *
	 * - `creator`: creator
	 * - `controller`: current controller
	 * - `name`: Org name
	 * - `cid`: IPFS
	 * - `org_type`: individual | legal Org | dao
	 * - `access`: anyDAO can join | only member can add | only
	 * - `fee_model`: only TX by OS | fees are reserved | fees are moved to treasury
	 * - `fee`: fee
	 * - `gov_asset`: control assets to empower actors
	 * - `pay_asset`:
	 * - `member_limit`: max members, if 0 == no limit
	 * - `deposit`: initial deposit for the org treasury
	 *
	 * Emits `OrgCreated` event when successful.
	 *
	 * Weight:
	 */
	get asV55(): {
		controllerId: v55.AccountId32;
		name: Uint8Array;
		cid: Uint8Array;
		orgType: v55.OrgType;
		access: v55.AccessModel;
		feeModel: v55.FeeModel;
		fee: bigint;
		govAsset: number;
		payAsset: number;
		memberLimit: bigint;
		deposit: bigint;
	} {
		assert(this.isV55);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV55;
	}

	get asLatest(): {
		controllerId: v55.AccountId32;
		name: Uint8Array;
		cid: Uint8Array;
		orgType: v55.OrgType;
		access: v55.AccessModel;
		feeModel: v55.FeeModel;
		fee: bigint;
		govAsset: number;
		payAsset: number;
		memberLimit: bigint;
		deposit: bigint;
	} {
		deprecateLatest();
		return this.asV55;
	}
}

export class FlowContributeCall {
	constructor(private ctx: CallContext) {
		assert(this.ctx.extrinsic.name === 'flow.contribute');
	}

	/**
	 * Contribute to project
	 *
	 * - `campaign_id`:
	 * - `contribution`:
	 *
	 * Emits `CampaignContributed` event when successful.
	 *
	 * Weight:
	 */
	get isV51(): boolean {
		return (
			this.ctx._chain.getCallHash('flow.contribute') ===
			'35bde54551e073c690aea459d53b33dc6aa20c27dc77adb7a7d131d352f68540'
		);
	}

	/**
	 * Contribute to project
	 *
	 * - `campaign_id`:
	 * - `contribution`:
	 *
	 * Emits `CampaignContributed` event when successful.
	 *
	 * Weight:
	 */
	get asV51(): { campaignId: v51.H256; contribution: bigint } {
		assert(this.isV51);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV51;
	}

	get asLatest(): { campaignId: v51.H256; contribution: bigint } {
		deprecateLatest();
		return this.asV51;
	}
}

export class FlowCreateCampaignCall {
	constructor(private ctx: CallContext) {
		assert(this.ctx.extrinsic.name === 'flow.createCampaign' || this.ctx.extrinsic.name === 'flow.create_campaign');
	}

	/**
	 * Create campaign
	 *
	 * - `org`:
	 * - `admin`: Campaign admin. Supervision, should be dao provided!
	 * - `treasury`:
	 * - `name`: Campaign name
	 * - `target`:
	 * - `deposit`:
	 * - `expiry`:
	 * - `protocol`:
	 * - `governance`:
	 * - `cid`: IPFS
	 * - `token_symbol`:
	 * - `token_name`:
	 *
	 * Emits `CampaignCreated` event when successful.
	 *
	 * Weight:
	 */
	get isV51(): boolean {
		return (
			this.ctx._chain.getCallHash('flow.create_campaign') ===
			'77c1724dfc18684d7f5d51a8e1c49861a65a819834f3482edb08aa131c12b07a'
		);
	}

	/**
	 * Create campaign
	 *
	 * - `org`:
	 * - `admin`: Campaign admin. Supervision, should be dao provided!
	 * - `treasury`:
	 * - `name`: Campaign name
	 * - `target`:
	 * - `deposit`:
	 * - `expiry`:
	 * - `protocol`:
	 * - `governance`:
	 * - `cid`: IPFS
	 * - `token_symbol`:
	 * - `token_name`:
	 *
	 * Emits `CampaignCreated` event when successful.
	 *
	 * Weight:
	 */
	get asV51(): {
		org: v51.H256;
		admin: v51.AccountId32;
		name: Uint8Array;
		target: bigint;
		deposit: bigint;
		expiry: number;
		protocol: v51.FlowProtocol;
		governance: v51.FlowGovernance;
		cid: Uint8Array;
		tokenSymbol: Uint8Array;
		tokenName: Uint8Array;
	} {
		assert(this.isV51);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	/**
	 * Create campaign
	 *
	 * - `org`:
	 * - `admin`: Campaign admin. Supervision, should be dao provided!
	 * - `treasury`:
	 * - `name`: Campaign name
	 * - `target`:
	 * - `deposit`:
	 * - `expiry`:
	 * - `protocol`:
	 * - `governance`:
	 * - `cid`: IPFS
	 * - `token_symbol`:
	 * - `token_name`:
	 *
	 * Emits `CampaignCreated` event when successful.
	 *
	 * Weight:
	 */
	get isV55(): boolean {
		return (
			this.ctx._chain.getCallHash('flow.create_campaign') ===
			'548b4652cb7480edaf5d64431696136d5b4d32d71d836d3e0670defc3437742d'
		);
	}

	/**
	 * Create campaign
	 *
	 * - `org`:
	 * - `admin`: Campaign admin. Supervision, should be dao provided!
	 * - `treasury`:
	 * - `name`: Campaign name
	 * - `target`:
	 * - `deposit`:
	 * - `expiry`:
	 * - `protocol`:
	 * - `governance`:
	 * - `cid`: IPFS
	 * - `token_symbol`:
	 * - `token_name`:
	 *
	 * Emits `CampaignCreated` event when successful.
	 *
	 * Weight:
	 */
	get asV55(): {
		orgId: v55.H256;
		adminId: v55.AccountId32;
		name: Uint8Array;
		target: bigint;
		deposit: bigint;
		expiry: number;
		protocol: v55.FlowProtocol;
		governance: v55.FlowGovernance;
		cid: Uint8Array;
		tokenSymbol: Uint8Array;
		tokenName: Uint8Array;
	} {
		assert(this.isV55);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV55;
	}

	get asLatest(): {
		orgId: v55.H256;
		adminId: v55.AccountId32;
		name: Uint8Array;
		target: bigint;
		deposit: bigint;
		expiry: number;
		protocol: v55.FlowProtocol;
		governance: v55.FlowGovernance;
		cid: Uint8Array;
		tokenSymbol: Uint8Array;
		tokenName: Uint8Array;
	} {
		deprecateLatest();
		return this.asV55;
	}
}

export class FlowUpdateStateCall {
	constructor(private ctx: CallContext) {
		assert(this.ctx.extrinsic.name === 'flow.updateState' || this.ctx.extrinsic.name === 'flow.update_state');
	}

	/**
	 * Update campaign state
	 *
	 * - `campaign_id`:
	 * - `state`:
	 *
	 * Emits `CampaignUpdated` event when successful.
	 *
	 * Weight:
	 */
	get isV51(): boolean {
		return (
			this.ctx._chain.getCallHash('flow.update_state') ===
			'2d94c26601218d5d123f721766e7be47db410799a29b3070a7eaaf0aed12db7f'
		);
	}

	/**
	 * Update campaign state
	 *
	 * - `campaign_id`:
	 * - `state`:
	 *
	 * Emits `CampaignUpdated` event when successful.
	 *
	 * Weight:
	 */
	get asV51(): { campaignId: v51.H256; state: v51.FlowState } {
		assert(this.isV51);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	/**
	 * Update campaign state
	 *
	 * - `campaign_id`:
	 * - `state`:
	 *
	 * Emits `CampaignUpdated` event when successful.
	 *
	 * Weight:
	 */
	get isV55(): boolean {
		return (
			this.ctx._chain.getCallHash('flow.update_state') ===
			'c64752f2d1ab8a2192e339d44ff98337d7d71317a35d873b4eaa5122665216a8'
		);
	}

	/**
	 * Update campaign state
	 *
	 * - `campaign_id`:
	 * - `state`:
	 *
	 * Emits `CampaignUpdated` event when successful.
	 *
	 * Weight:
	 */
	get asV55(): { campaignId: v55.H256; state: v55.FlowState } {
		assert(this.isV55);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV55;
	}

	get asLatest(): { campaignId: v55.H256; state: v55.FlowState } {
		deprecateLatest();
		return this.asV55;
	}
}

export class SignalGeneralProposalCall {
	constructor(private ctx: CallContext) {
		assert(
			this.ctx.extrinsic.name === 'signal.generalProposal' ||
				this.ctx.extrinsic.name === 'signal.general_proposal',
		);
	}

	/**
	 * Create a general proposal
	 *
	 * - `campaign_id`:
	 * - `title`:
	 * - `cid`:
	 * - `start`:
	 * - `expiry`:
	 *
	 * Emits `Proposal` event when successful.
	 *
	 * Weight:
	 */
	get isV51(): boolean {
		return (
			this.ctx._chain.getCallHash('signal.general_proposal') ===
			'e92f2cb2b953f31ac7759281e775b46dc1ad4af0020570540b46aef881da8698'
		);
	}

	/**
	 * Create a general proposal
	 *
	 * - `campaign_id`:
	 * - `title`:
	 * - `cid`:
	 * - `start`:
	 * - `expiry`:
	 *
	 * Emits `Proposal` event when successful.
	 *
	 * Weight:
	 */
	get asV51(): { campaignId: v51.H256; title: Uint8Array; cid: Uint8Array; start: number; expiry: number } {
		assert(this.isV51);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	/**
	 * Create a general proposal
	 *
	 * - `org_id`:
	 * - `title`:
	 * - `cid`:
	 * - `start`:
	 * - `expiry`:
	 *
	 * Emits `Proposal` event when successful.
	 *
	 * Weight:
	 */
	get isV55(): boolean {
		return (
			this.ctx._chain.getCallHash('signal.general_proposal') ===
			'6288e6d7ea1e66ac8f48f8c15e15b0e7913454ed573fca61a600ed52c9a54a2b'
		);
	}

	/**
	 * Create a general proposal
	 *
	 * - `org_id`:
	 * - `title`:
	 * - `cid`:
	 * - `start`:
	 * - `expiry`:
	 *
	 * Emits `Proposal` event when successful.
	 *
	 * Weight:
	 */
	get asV55(): { orgId: v55.H256; title: Uint8Array; cid: Uint8Array; start: number; expiry: number } {
		assert(this.isV55);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV55;
	}

	get asLatest(): { orgId: v55.H256; title: Uint8Array; cid: Uint8Array; start: number; expiry: number } {
		deprecateLatest();
		return this.asV55;
	}
}

export class SignalWithdrawProposalCall {
	constructor(private ctx: CallContext) {
		assert(
			this.ctx.extrinsic.name === 'signal.withdrawProposal' ||
				this.ctx.extrinsic.name === 'signal.withdraw_proposal',
		);
	}

	/**
	 * Create a withdrawal proposal
	 * origin must be controller of the campaign == controller of the dao
	 * beneficiary must be the treasury of the dao
	 *
	 * - `campaign_id`:
	 * - `_member`:
	 * - `_action`:
	 * - `_start`:
	 * - `_expiry`:
	 *
	 * Emits `Proposal` event when successful.
	 *
	 * Weight:
	 */
	get isV51(): boolean {
		return (
			this.ctx._chain.getCallHash('signal.withdraw_proposal') ===
			'181f7eb8207b336afbe94515eda27a95279f858acd7d7758f752172ae750eb7a'
		);
	}

	/**
	 * Create a withdrawal proposal
	 * origin must be controller of the campaign == controller of the dao
	 * beneficiary must be the treasury of the dao
	 *
	 * - `campaign_id`:
	 * - `_member`:
	 * - `_action`:
	 * - `_start`:
	 * - `_expiry`:
	 *
	 * Emits `Proposal` event when successful.
	 *
	 * Weight:
	 */
	get asV51(): {
		campaignId: v51.H256;
		title: Uint8Array;
		cid: Uint8Array;
		amount: bigint;
		start: number;
		expiry: number;
	} {
		assert(this.isV51);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV51;
	}

	get asLatest(): {
		campaignId: v51.H256;
		title: Uint8Array;
		cid: Uint8Array;
		amount: bigint;
		start: number;
		expiry: number;
	} {
		deprecateLatest();
		return this.asV51;
	}
}
