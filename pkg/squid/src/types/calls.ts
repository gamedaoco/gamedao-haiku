import { CallContext, Result, deprecateLatest } from './support';
import * as v51 from './v51';
import * as v52 from './v52';
import assert from 'assert';

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
			'bd66e94f1a9c6b0b127b60556a0af1ef48b7753daf019cf5e66d57c1aa4e7692'
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
	get isV52(): boolean {
		return (
			this.ctx._chain.getCallHash('control.create_org') ===
			'5a41cf027d0dfe63aaadfff3d4b5cda9eee31089c10470af216dd162e62656e8'
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
	get asV52(): {
		controllerId: v52.AccountId32;
		name: Uint8Array;
		cid: Uint8Array;
		orgType: v52.OrgType;
		access: v52.AccessModel;
		feeModel: v52.FeeModel;
		fee: bigint;
		govAsset: number;
		payAsset: number;
		memberLimit: bigint;
		deposit: bigint;
	} {
		assert(this.isV52);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV52;
	}

	get asLatest(): {
		controllerId: v52.AccountId32;
		name: Uint8Array;
		cid: Uint8Array;
		orgType: v52.OrgType;
		access: v52.AccessModel;
		feeModel: v52.FeeModel;
		fee: bigint;
		govAsset: number;
		payAsset: number;
		memberLimit: bigint;
		deposit: bigint;
	} {
		deprecateLatest();
		return this.asV52;
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
			'61eaa781937ad2c3bdc3d93252533a3ed9af24cea84b9e11282872cab4f156d4'
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
			'5565110b83767f4dfa70de59a3cc97fca2f164735c45155550a56bec20aa98b7'
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
	get isV52(): boolean {
		return (
			this.ctx._chain.getCallHash('flow.create_campaign') ===
			'84695d5b64ff13ce4f64ca0eba57df5d41339b681cef22db16f05b7e417221ff'
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
	get asV52(): {
		orgId: v52.H256;
		adminId: v52.AccountId32;
		name: Uint8Array;
		target: bigint;
		deposit: bigint;
		expiry: number;
		protocol: v52.FlowProtocol;
		governance: v52.FlowGovernance;
		cid: Uint8Array;
		tokenSymbol: Uint8Array;
		tokenName: Uint8Array;
	} {
		assert(this.isV52);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV52;
	}

	get asLatest(): {
		orgId: v52.H256;
		adminId: v52.AccountId32;
		name: Uint8Array;
		target: bigint;
		deposit: bigint;
		expiry: number;
		protocol: v52.FlowProtocol;
		governance: v52.FlowGovernance;
		cid: Uint8Array;
		tokenSymbol: Uint8Array;
		tokenName: Uint8Array;
	} {
		deprecateLatest();
		return this.asV52;
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
			'7a71460dbd54d3f24c0e77a93e35b1f11a2a15c0f039ddc3b8494032f28e004e'
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
	get isV52(): boolean {
		return (
			this.ctx._chain.getCallHash('flow.update_state') ===
			'f05863bcf1b93380634f42c04678e86a622a4541b3fe23dfda0a629f950d383e'
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
	get asV52(): { campaignId: v52.H256; state: v52.FlowState } {
		assert(this.isV52);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV52;
	}

	get asLatest(): { campaignId: v52.H256; state: v52.FlowState } {
		deprecateLatest();
		return this.asV52;
	}
}
