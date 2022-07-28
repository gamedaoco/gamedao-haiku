import assert from 'assert';
import { CallContext, Result, deprecateLatest } from './support';
import * as v55 from './v55';
import * as v56 from './v56';

export class ControlCreateOrgCall {
	constructor(private ctx: CallContext) {
		assert(this.ctx.extrinsic.name === 'control.createOrg' || this.ctx.extrinsic.name === 'control.create_org');
	}

	/**
	 * Create an on chain organization
	 *
	 * Parameters:
	 * - `origin`: Org creator.
	 * - `controller_id`: Org controller.
	 * - `name`: Org name.
	 * - `cid`: IPFS content identifier.
	 * - `org_type`: Individual | Company | Dao | Hybrid.
	 * - `access`: Open (anyone can join) | Voting (membership voting) |
	 * 	Controller (controller invites).
	 * - `fee_model`: NoFees | Reserve (amount reserved in user account) |
	 * 	Transfer (amount transfered to Org treasury).
	 * - `fee`: fees amount to be applied to new members based on fee model (in Protocol tokens).
	 * - `gov_asset`: control assets to empower actors.
	 * - `pay_asset`: asset used for payments.
	 * - `member_limit`: max members, if 0 == no limit.
	 * - `deposit`: initial deposit for the org treasury (in Protocol tokens).
	 *
	 * Emits `OrgCreated` event when successful.
	 *
	 * Weight: `O(1)`
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getCallHash('control.create_org') ===
			'72bef6a8437e2c665d4546e43c3451ff7d802debe4f99c1040c863f2afb2c0cd'
		);
	}

	/**
	 * Create an on chain organization
	 *
	 * Parameters:
	 * - `origin`: Org creator.
	 * - `controller_id`: Org controller.
	 * - `name`: Org name.
	 * - `cid`: IPFS content identifier.
	 * - `org_type`: Individual | Company | Dao | Hybrid.
	 * - `access`: Open (anyone can join) | Voting (membership voting) |
	 * 	Controller (controller invites).
	 * - `fee_model`: NoFees | Reserve (amount reserved in user account) |
	 * 	Transfer (amount transfered to Org treasury).
	 * - `fee`: fees amount to be applied to new members based on fee model (in Protocol tokens).
	 * - `gov_asset`: control assets to empower actors.
	 * - `pay_asset`: asset used for payments.
	 * - `member_limit`: max members, if 0 == no limit.
	 * - `deposit`: initial deposit for the org treasury (in Protocol tokens).
	 *
	 * Emits `OrgCreated` event when successful.
	 *
	 * Weight: `O(1)`
	 */
	get asV56(): {
		controllerId: v56.AccountId32;
		name: Uint8Array;
		cid: Uint8Array;
		orgType: v56.OrgType;
		access: v56.AccessModel;
		feeModel: v56.FeeModel;
		fee: bigint;
		govAsset: v56.CurrencyId;
		payAsset: v56.CurrencyId;
		memberLimit: bigint;
		deposit: bigint | undefined;
	} {
		assert(this.isV56);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	/**
	 * Create an on chain organization
	 *
	 * Parameters:
	 * - `origin`: Org creator.
	 * - `controller_id`: Org controller.
	 * - `name`: Org name.
	 * - `cid`: IPFS content identifier.
	 * - `org_type`: Individual | Company | Dao | Hybrid.
	 * - `access`: Open (anyone can join) | Voting (membership voting) |
	 * 	Controller (controller invites).
	 * - `fee_model`: NoFees | Reserve (amount reserved in user account) |
	 * 	Transfer (amount transfered to Org treasury).
	 * - `fee`: fees amount to be applied to new members based on fee model (in Protocol tokens).
	 * - `gov_asset`: control assets to empower actors.
	 * - `pay_asset`: asset used for payments.
	 * - `member_limit`: max members, if 0 == no limit.
	 * - `deposit`: initial deposit for the org treasury (in Protocol tokens).
	 *
	 * Emits `OrgCreated` event when successful.
	 *
	 * Weight: `O(1)`
	 */
	get isV55(): boolean {
		return (
			this.ctx._chain.getCallHash('control.create_org') ===
			'9edf5b9e4cb0364148f5f748221fb4f00b43e146853afb1e7687455005ed72e7'
		);
	}

	/**
	 * Create an on chain organization
	 *
	 * Parameters:
	 * - `origin`: Org creator.
	 * - `controller_id`: Org controller.
	 * - `name`: Org name.
	 * - `cid`: IPFS content identifier.
	 * - `org_type`: Individual | Company | Dao | Hybrid.
	 * - `access`: Open (anyone can join) | Voting (membership voting) |
	 * 	Controller (controller invites).
	 * - `fee_model`: NoFees | Reserve (amount reserved in user account) |
	 * 	Transfer (amount transfered to Org treasury).
	 * - `fee`: fees amount to be applied to new members based on fee model (in Protocol tokens).
	 * - `gov_asset`: control assets to empower actors.
	 * - `pay_asset`: asset used for payments.
	 * - `member_limit`: max members, if 0 == no limit.
	 * - `deposit`: initial deposit for the org treasury (in Protocol tokens).
	 *
	 * Emits `OrgCreated` event when successful.
	 *
	 * Weight: `O(1)`
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
		deposit: bigint | undefined;
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
		deposit: bigint | undefined;
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
	 * Weight: O(1)
	 */
	get isV56(): boolean {
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
	 * Weight: O(1)
	 */
	get asV56(): { campaignId: v56.H256; contribution: bigint } {
		assert(this.isV56);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): { campaignId: v56.H256; contribution: bigint } {
		deprecateLatest();
		return this.asV56;
	}
}

export class FlowCreateCampaignCall {
	constructor(private ctx: CallContext) {
		assert(this.ctx.extrinsic.name === 'flow.createCampaign' || this.ctx.extrinsic.name === 'flow.create_campaign');
	}

	/**
	 * Create campaign
	 *
	 * - `org_id`:
	 * - `admin_id`: Campaign admin. Supervision, should be dao provided!
	 * - `treasury`:
	 * - `name`: Campaign name
	 * - `target`:
	 * - `deposit`:
	 * - `expiry`:
	 * - `protocol`:
	 * - `governance`:
	 * - `cid`: IPFS content identifier.
	 * - `token_symbol`:
	 * - `token_name`:
	 *
	 * Emits `CampaignCreated` event when successful.
	 *
	 * Weight: `O(log n)`
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getCallHash('flow.create_campaign') ===
			'548b4652cb7480edaf5d64431696136d5b4d32d71d836d3e0670defc3437742d'
		);
	}

	/**
	 * Create campaign
	 *
	 * - `org_id`:
	 * - `admin_id`: Campaign admin. Supervision, should be dao provided!
	 * - `treasury`:
	 * - `name`: Campaign name
	 * - `target`:
	 * - `deposit`:
	 * - `expiry`:
	 * - `protocol`:
	 * - `governance`:
	 * - `cid`: IPFS content identifier.
	 * - `token_symbol`:
	 * - `token_name`:
	 *
	 * Emits `CampaignCreated` event when successful.
	 *
	 * Weight: `O(log n)`
	 */
	get asV56(): {
		orgId: v56.H256;
		adminId: v56.AccountId32;
		name: Uint8Array;
		target: bigint;
		deposit: bigint;
		expiry: number;
		protocol: v56.FlowProtocol;
		governance: v56.FlowGovernance;
		cid: Uint8Array;
		tokenSymbol: Uint8Array;
		tokenName: Uint8Array;
	} {
		assert(this.isV56);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): {
		orgId: v56.H256;
		adminId: v56.AccountId32;
		name: Uint8Array;
		target: bigint;
		deposit: bigint;
		expiry: number;
		protocol: v56.FlowProtocol;
		governance: v56.FlowGovernance;
		cid: Uint8Array;
		tokenSymbol: Uint8Array;
		tokenName: Uint8Array;
	} {
		deprecateLatest();
		return this.asV56;
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
	 * Weight: O(log n)
	 */
	get isV56(): boolean {
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
	 * Weight: O(log n)
	 */
	get asV56(): { campaignId: v56.H256; state: v56.FlowState } {
		assert(this.isV56);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): { campaignId: v56.H256; state: v56.FlowState } {
		deprecateLatest();
		return this.asV56;
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
	 * - `org_id`: Organization id.
	 * - `title`: Proposal's title.
	 * - `cid`: IPFS content identifier.
	 * - `start`: Block when the proposal starts.
	 * - `expiry`: Block when the proposal finishes.
	 *
	 * Emits `Proposal` event when successful.
	 *
	 * Weight: O(1)
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getCallHash('signal.general_proposal') ===
			'6288e6d7ea1e66ac8f48f8c15e15b0e7913454ed573fca61a600ed52c9a54a2b'
		);
	}

	/**
	 * Create a general proposal
	 *
	 * - `org_id`: Organization id.
	 * - `title`: Proposal's title.
	 * - `cid`: IPFS content identifier.
	 * - `start`: Block when the proposal starts.
	 * - `expiry`: Block when the proposal finishes.
	 *
	 * Emits `Proposal` event when successful.
	 *
	 * Weight: O(1)
	 */
	get asV56(): { orgId: v56.H256; title: Uint8Array; cid: Uint8Array; start: number; expiry: number } {
		assert(this.isV56);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): { orgId: v56.H256; title: Uint8Array; cid: Uint8Array; start: number; expiry: number } {
		deprecateLatest();
		return this.asV56;
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
	 *
	 * Origin must be controller of the campaign == controller of the dao
	 * beneficiary must be the treasury of the dao.
	 *
	 * - `campaign_id`: Campaign id.
	 * - `title`: Proposal's title.
	 * - `cid`: IPFS content identifier.
	 * - `amount`: Balance to be withdrawn.
	 * - `start`: Block when the proposal starts.
	 * - `expiry`: Block when the proposal finishes.
	 *
	 * Emits `ProposalCreated` event when successful.
	 *
	 * Weight: O(1)
	 */
	get isV56(): boolean {
		return (
			this.ctx._chain.getCallHash('signal.withdraw_proposal') ===
			'181f7eb8207b336afbe94515eda27a95279f858acd7d7758f752172ae750eb7a'
		);
	}

	/**
	 * Create a withdrawal proposal
	 *
	 * Origin must be controller of the campaign == controller of the dao
	 * beneficiary must be the treasury of the dao.
	 *
	 * - `campaign_id`: Campaign id.
	 * - `title`: Proposal's title.
	 * - `cid`: IPFS content identifier.
	 * - `amount`: Balance to be withdrawn.
	 * - `start`: Block when the proposal starts.
	 * - `expiry`: Block when the proposal finishes.
	 *
	 * Emits `ProposalCreated` event when successful.
	 *
	 * Weight: O(1)
	 */
	get asV56(): {
		campaignId: v56.H256;
		title: Uint8Array;
		cid: Uint8Array;
		amount: bigint;
		start: number;
		expiry: number;
	} {
		assert(this.isV56);
		return this.ctx._chain.decodeCall(this.ctx.extrinsic);
	}

	get isLatest(): boolean {
		deprecateLatest();
		return this.isV56;
	}

	get asLatest(): {
		campaignId: v56.H256;
		title: Uint8Array;
		cid: Uint8Array;
		amount: bigint;
		start: number;
		expiry: number;
	} {
		deprecateLatest();
		return this.asV56;
	}
}
