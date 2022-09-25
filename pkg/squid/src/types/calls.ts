import assert from 'assert'
import {CallContext, Result, deprecateLatest} from './support'
import * as v60 from './v60'

export class ControlAddMemberCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'control.addMember' || this.ctx.extrinsic.name === 'control.add_member')
  }

  /**
   * Add Member to Org
   * 
   * Allowed origins: Root or prime if OrgType::Individual
   * 
   * Parameters:
   * - `org_id`: Org id
   * - `who`: Account to be added
   * 
   * Emits `MemberAdded` event when successful.
   * 
   * Weight: `O(log n)`
   */
  get isV60(): boolean {
    return this.ctx._chain.getCallHash('control.add_member') === '605eac3ab5ba75dcb2e8e5b628cfa200c62828d80eb5d3d3b468c7cdecf64ddb'
  }

  /**
   * Add Member to Org
   * 
   * Allowed origins: Root or prime if OrgType::Individual
   * 
   * Parameters:
   * - `org_id`: Org id
   * - `who`: Account to be added
   * 
   * Emits `MemberAdded` event when successful.
   * 
   * Weight: `O(log n)`
   */
  get asV60(): {orgId: v60.H256, who: v60.AccountId32} {
    assert(this.isV60)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV60
  }

  get asLatest(): {orgId: v60.H256, who: v60.AccountId32} {
    deprecateLatest()
    return this.asV60
  }
}

export class ControlCreateOrgCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'control.createOrg' || this.ctx.extrinsic.name === 'control.create_org')
  }

  /**
   * Create an on chain organization
   * 
   * Parameters:
   * - `origin`: Org creator.
   * - `name`: Org name.
   * - `cid`: IPFS content identifier.
   * - `org_type`: Individual | Company | Dao | Hybrid.
   * - `access_model`:
   * - `fee_model`:
   * 
   * Optional parameters:
   * - `member_limit`: max members. Default: MaxMembers.
   * - `member_fee`: fees amount to be applied to new members based on fee model (in `gov_asset` tokens).
   * - `gov_asset`: control assets to empower actors.
   * - `pay_asset`: asset used for payments.
   * - `deposit`: initial deposit for the org treasury (in Protocol tokens).
   * 
   * Emits `OrgCreated` event when successful.
   * 
   * Weight: `O(1)`
   */
  get isV60(): boolean {
    return this.ctx._chain.getCallHash('control.create_org') === '32c958c6fe0b62e58040453945ec841fa302cb24810196bdf9f2aa7448fef7e4'
  }

  /**
   * Create an on chain organization
   * 
   * Parameters:
   * - `origin`: Org creator.
   * - `name`: Org name.
   * - `cid`: IPFS content identifier.
   * - `org_type`: Individual | Company | Dao | Hybrid.
   * - `access_model`:
   * - `fee_model`:
   * 
   * Optional parameters:
   * - `member_limit`: max members. Default: MaxMembers.
   * - `member_fee`: fees amount to be applied to new members based on fee model (in `gov_asset` tokens).
   * - `gov_asset`: control assets to empower actors.
   * - `pay_asset`: asset used for payments.
   * - `deposit`: initial deposit for the org treasury (in Protocol tokens).
   * 
   * Emits `OrgCreated` event when successful.
   * 
   * Weight: `O(1)`
   */
  get asV60(): {name: Uint8Array, cid: Uint8Array, orgType: v60.OrgType, accessModel: v60.AccessModel, feeModel: v60.FeeModel, memberLimit: (number | undefined), membershipFee: (bigint | undefined), govCurrency: (v60.CurrencyId | undefined), payCurrency: (v60.CurrencyId | undefined), deposit: (bigint | undefined)} {
    assert(this.isV60)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV60
  }

  get asLatest(): {name: Uint8Array, cid: Uint8Array, orgType: v60.OrgType, accessModel: v60.AccessModel, feeModel: v60.FeeModel, memberLimit: (number | undefined), membershipFee: (bigint | undefined), govCurrency: (v60.CurrencyId | undefined), payCurrency: (v60.CurrencyId | undefined), deposit: (bigint | undefined)} {
    deprecateLatest()
    return this.asV60
  }
}

export class ControlEnableOrgCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'control.enableOrg' || this.ctx.extrinsic.name === 'control.enable_org')
  }

  /**
   * Enable Org
   * 
   * Enables an Org to be used and changes it's state to Active.
   * Allowed origins: Root or prime if OrgType::Individual
   * 
   * Parameters:
   * - `org_id`: Org hash.
   * 
   * Emits `OrgEnabled` event when successful.
   * 
   * Weight: `O(1)`
   */
  get isV60(): boolean {
    return this.ctx._chain.getCallHash('control.enable_org') === 'b9796c19f14245cb5d424cb9d2f6dbb57fecb5ca5170883939bc418fa3a260d8'
  }

  /**
   * Enable Org
   * 
   * Enables an Org to be used and changes it's state to Active.
   * Allowed origins: Root or prime if OrgType::Individual
   * 
   * Parameters:
   * - `org_id`: Org hash.
   * 
   * Emits `OrgEnabled` event when successful.
   * 
   * Weight: `O(1)`
   */
  get asV60(): {orgId: v60.H256} {
    assert(this.isV60)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV60
  }

  get asLatest(): {orgId: v60.H256} {
    deprecateLatest()
    return this.asV60
  }
}

export class ControlRemoveMemberCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'control.removeMember' || this.ctx.extrinsic.name === 'control.remove_member')
  }

  /**
   * Remove member from Org
   * 
   * Allowed origins: Root or prime if OrgType::Individual
   * 
   * Parameters:
   * - `org_id`: Org id
   * - `who`: Account to be removed
   * 
   * Emits `MemberRemoved` event when successful.
   * 
   * Weight: `O(log n)`
   */
  get isV60(): boolean {
    return this.ctx._chain.getCallHash('control.remove_member') === '605eac3ab5ba75dcb2e8e5b628cfa200c62828d80eb5d3d3b468c7cdecf64ddb'
  }

  /**
   * Remove member from Org
   * 
   * Allowed origins: Root or prime if OrgType::Individual
   * 
   * Parameters:
   * - `org_id`: Org id
   * - `who`: Account to be removed
   * 
   * Emits `MemberRemoved` event when successful.
   * 
   * Weight: `O(log n)`
   */
  get asV60(): {orgId: v60.H256, who: v60.AccountId32} {
    assert(this.isV60)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV60
  }

  get asLatest(): {orgId: v60.H256, who: v60.AccountId32} {
    deprecateLatest()
    return this.asV60
  }
}

export class ControlSpendFundsCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'control.spendFunds' || this.ctx.extrinsic.name === 'control.spend_funds')
  }

  /**
   * Make spending from the org treasury
   * 
   * Allowed origins: Root or prime if OrgType::Individual
   * 
   * Parameters:
   * - `org_id`: Org id
   * - `currency_id`: currency to be spent
   * - `beneficiary`: receiver account
   * - `amount`: amount to be spent
   * 
   * Emits `FundsSpended` event when successful.
   * 
   * Weight: `O(1)`
   */
  get isV60(): boolean {
    return this.ctx._chain.getCallHash('control.spend_funds') === '680a7f896adf67cdfc0cc0100420c7c6a1e8118084d97810f438d75c69016216'
  }

  /**
   * Make spending from the org treasury
   * 
   * Allowed origins: Root or prime if OrgType::Individual
   * 
   * Parameters:
   * - `org_id`: Org id
   * - `currency_id`: currency to be spent
   * - `beneficiary`: receiver account
   * - `amount`: amount to be spent
   * 
   * Emits `FundsSpended` event when successful.
   * 
   * Weight: `O(1)`
   */
  get asV60(): {orgId: v60.H256, currencyId: v60.CurrencyId, beneficiary: v60.AccountId32, amount: bigint} {
    assert(this.isV60)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV60
  }

  get asLatest(): {orgId: v60.H256, currencyId: v60.CurrencyId, beneficiary: v60.AccountId32, amount: bigint} {
    deprecateLatest()
    return this.asV60
  }
}

export class ControlUpdateOrgCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'control.updateOrg' || this.ctx.extrinsic.name === 'control.update_org')
  }

  /**
   * Update Org
   * 
   * Allowed origins: Root or prime if OrgType::Individual
   * 
   * Parameters:
   * - `org_id`: Org hash.
   * 
   * Optional parameters:
   * - `prime_id`: new prime id.
   * - `access_model`: new access model.
   * - `member_limit`: new member limit.
   * - `fee_model`: new fee model.
   * - `membership_fee`: new membership fee.
   * 
   * Emits `OrgUpdated` event when successful.
   * 
   * Weight: `O(1)`
   */
  get isV60(): boolean {
    return this.ctx._chain.getCallHash('control.update_org') === 'fa253ba8b2a6cabe3189ec3a9fd8d2928af0e1bc12efa0b2f51904d382397c98'
  }

  /**
   * Update Org
   * 
   * Allowed origins: Root or prime if OrgType::Individual
   * 
   * Parameters:
   * - `org_id`: Org hash.
   * 
   * Optional parameters:
   * - `prime_id`: new prime id.
   * - `access_model`: new access model.
   * - `member_limit`: new member limit.
   * - `fee_model`: new fee model.
   * - `membership_fee`: new membership fee.
   * 
   * Emits `OrgUpdated` event when successful.
   * 
   * Weight: `O(1)`
   */
  get asV60(): {orgId: v60.H256, primeId: (v60.AccountId32 | undefined), orgType: (v60.OrgType | undefined), accessModel: (v60.AccessModel | undefined), memberLimit: (number | undefined), feeModel: (v60.FeeModel | undefined), membershipFee: (bigint | undefined)} {
    assert(this.isV60)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV60
  }

  get asLatest(): {orgId: v60.H256, primeId: (v60.AccountId32 | undefined), orgType: (v60.OrgType | undefined), accessModel: (v60.AccessModel | undefined), memberLimit: (number | undefined), feeModel: (v60.FeeModel | undefined), membershipFee: (bigint | undefined)} {
    deprecateLatest()
    return this.asV60
  }
}

export class FlowContributeCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'flow.contribute')
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
  get isV60(): boolean {
    return this.ctx._chain.getCallHash('flow.contribute') === '35bde54551e073c690aea459d53b33dc6aa20c27dc77adb7a7d131d352f68540'
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
  get asV60(): {campaignId: v60.H256, contribution: bigint} {
    assert(this.isV60)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV60
  }

  get asLatest(): {campaignId: v60.H256, contribution: bigint} {
    deprecateLatest()
    return this.asV60
  }
}

export class FlowCreateCampaignCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'flow.createCampaign' || this.ctx.extrinsic.name === 'flow.create_campaign')
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
   * - `token_symbol`: a new custom token symbol
   * - `token_name`: a new custom token name
   * - `start`:
   * 
   * The two params `token_symbol` and `token_name` are meant for setting up a new custom token if creator wants to 
   * conduct a token generation event. Therefore these two are optionals and would result in a TGE dropping 
   * fungible token with a new currency id to contributors.
   * 
   * Emits `CampaignCreated` event when successful.
   * 
   * Weight: `O(1)`
   */
  get isV60(): boolean {
    return this.ctx._chain.getCallHash('flow.create_campaign') === 'c9f740ca2f598a88223de690445f81cc5bd3d60101f812046545d137cbc2d4cc'
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
   * - `token_symbol`: a new custom token symbol
   * - `token_name`: a new custom token name
   * - `start`:
   * 
   * The two params `token_symbol` and `token_name` are meant for setting up a new custom token if creator wants to 
   * conduct a token generation event. Therefore these two are optionals and would result in a TGE dropping 
   * fungible token with a new currency id to contributors.
   * 
   * Emits `CampaignCreated` event when successful.
   * 
   * Weight: `O(1)`
   */
  get asV60(): {orgId: v60.H256, adminId: v60.AccountId32, name: Uint8Array, target: bigint, deposit: bigint, expiry: number, protocol: v60.FlowProtocol, governance: v60.FlowGovernance, cid: Uint8Array, start: (number | undefined), tokenSymbol: (Uint8Array | undefined), tokenName: (Uint8Array | undefined)} {
    assert(this.isV60)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV60
  }

  get asLatest(): {orgId: v60.H256, adminId: v60.AccountId32, name: Uint8Array, target: bigint, deposit: bigint, expiry: number, protocol: v60.FlowProtocol, governance: v60.FlowGovernance, cid: Uint8Array, start: (number | undefined), tokenSymbol: (Uint8Array | undefined), tokenName: (Uint8Array | undefined)} {
    deprecateLatest()
    return this.asV60
  }
}

export class SignalProposalCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'signal.proposal')
  }

  get isV60(): boolean {
    return this.ctx._chain.getCallHash('signal.proposal') === '754c9374f1bb0fad08349cf32ab445cc3049fd96ac4088033d81f486a2696f83'
  }

  get asV60(): {proposalType: v60.ProposalType, orgId: v60.H256, title: Uint8Array, cid: Uint8Array, expiry: number, majority: v60.Majority, unit: v60.Unit, scale: v60.Scale, start: (number | undefined), quorum: (v60.Permill | undefined), deposit: (bigint | undefined), campaignId: (v60.H256 | undefined), amount: (bigint | undefined), beneficiary: (v60.AccountId32 | undefined), currencyId: (v60.CurrencyId | undefined)} {
    assert(this.isV60)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV60
  }

  get asLatest(): {proposalType: v60.ProposalType, orgId: v60.H256, title: Uint8Array, cid: Uint8Array, expiry: number, majority: v60.Majority, unit: v60.Unit, scale: v60.Scale, start: (number | undefined), quorum: (v60.Permill | undefined), deposit: (bigint | undefined), campaignId: (v60.H256 | undefined), amount: (bigint | undefined), beneficiary: (v60.AccountId32 | undefined), currencyId: (v60.CurrencyId | undefined)} {
    deprecateLatest()
    return this.asV60
  }
}

export class SignalVoteCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'signal.vote')
  }

  get isV60(): boolean {
    return this.ctx._chain.getCallHash('signal.vote') === 'bd01187272ea169a48a8d7026e7d5656782ba5d0c500d610c99c1d39528c6890'
  }

  get asV60(): {proposalId: v60.H256, approve: boolean, deposit: (bigint | undefined)} {
    assert(this.isV60)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV60
  }

  get asLatest(): {proposalId: v60.H256, approve: boolean, deposit: (bigint | undefined)} {
    deprecateLatest()
    return this.asV60
  }
}
