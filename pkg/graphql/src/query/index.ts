import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Big number integer */
  BigInt: any;
  /** Binary data encoded as a hex string always prefixed with 0x */
  Bytes: any;
  /** A date-time string in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) */
  DateTime: any;
  bigint: any;
  jsonb: any;
  numeric: any;
  smallint: any;
  timestamptz: any;
};

export type Account = {
  readonly __typename?: 'Account';
  readonly balances?: Maybe<ReadonlyArray<Maybe<AccountBalance>>>;
  readonly organizations?: Maybe<ReadonlyArray<Maybe<AccountOrganizations>>>;
};

export type AccountBalance = {
  readonly __typename?: 'AccountBalance';
  readonly locked: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly reserved: Scalars['Int'];
  readonly symbol: Scalars['String'];
  readonly total: Scalars['Int'];
  readonly transferrable: Scalars['Int'];
};

export type AccountOrganizationMember = {
  readonly __typename?: 'AccountOrganizationMember';
  readonly canEdit: Scalars['Boolean'];
  readonly role: Scalars['String'];
  readonly valueLocked: Scalars['Float'];
};

export type AccountOrganizationMetadata = {
  readonly __typename?: 'AccountOrganizationMetadata';
  readonly logo?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
};

export type AccountOrganizations = {
  readonly __typename?: 'AccountOrganizations';
  readonly access: Scalars['String'];
  readonly member: AccountOrganizationMember;
  readonly membersCount: Scalars['Int'];
  readonly metadata: AccountOrganizationMetadata;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['Boolean']>;
  readonly _gt?: InputMaybe<Scalars['Boolean']>;
  readonly _gte?: InputMaybe<Scalars['Boolean']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['Boolean']>;
  readonly _lte?: InputMaybe<Scalars['Boolean']>;
  readonly _neq?: InputMaybe<Scalars['Boolean']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
};

export type Campaign = {
  readonly __typename?: 'Campaign';
  readonly admin: Scalars['String'];
  readonly adminIdentity: Identity;
  readonly contributors: ReadonlyArray<CampaignContributor>;
  readonly createdAtBlock: Scalars['Int'];
  readonly creator: Scalars['String'];
  readonly creatorIdentity: Identity;
  readonly deposit: Scalars['BigInt'];
  readonly expiry: Scalars['Int'];
  readonly governance: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly metadata?: Maybe<CampaignMetadata>;
  readonly organization: Organization;
  readonly protocol: Scalars['String'];
  readonly state: Scalars['String'];
  readonly target: Scalars['BigInt'];
  readonly tokenName: Scalars['String'];
  readonly tokenSymbol: Scalars['String'];
};


export type CampaignContributorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<InputMaybe<CampaignContributorOrderByInput>>>;
  where?: InputMaybe<CampaignContributorWhereInput>;
};

export type CampaignContributor = {
  readonly __typename?: 'CampaignContributor';
  readonly address: Scalars['String'];
  readonly campaign: Campaign;
  readonly contributed: Scalars['BigInt'];
  readonly id: Scalars['ID'];
  readonly identity: Identity;
};

export type CampaignContributorEdge = {
  readonly __typename?: 'CampaignContributorEdge';
  readonly cursor: Scalars['String'];
  readonly node: CampaignContributor;
};

export enum CampaignContributorOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CampaignAdminAsc = 'campaign_admin_ASC',
  CampaignAdminDesc = 'campaign_admin_DESC',
  CampaignCreatedAtBlockAsc = 'campaign_createdAtBlock_ASC',
  CampaignCreatedAtBlockDesc = 'campaign_createdAtBlock_DESC',
  CampaignCreatorAsc = 'campaign_creator_ASC',
  CampaignCreatorDesc = 'campaign_creator_DESC',
  CampaignDepositAsc = 'campaign_deposit_ASC',
  CampaignDepositDesc = 'campaign_deposit_DESC',
  CampaignExpiryAsc = 'campaign_expiry_ASC',
  CampaignExpiryDesc = 'campaign_expiry_DESC',
  CampaignGovernanceAsc = 'campaign_governance_ASC',
  CampaignGovernanceDesc = 'campaign_governance_DESC',
  CampaignIdAsc = 'campaign_id_ASC',
  CampaignIdDesc = 'campaign_id_DESC',
  CampaignProtocolAsc = 'campaign_protocol_ASC',
  CampaignProtocolDesc = 'campaign_protocol_DESC',
  CampaignStateAsc = 'campaign_state_ASC',
  CampaignStateDesc = 'campaign_state_DESC',
  CampaignTargetAsc = 'campaign_target_ASC',
  CampaignTargetDesc = 'campaign_target_DESC',
  CampaignTokenNameAsc = 'campaign_tokenName_ASC',
  CampaignTokenNameDesc = 'campaign_tokenName_DESC',
  CampaignTokenSymbolAsc = 'campaign_tokenSymbol_ASC',
  CampaignTokenSymbolDesc = 'campaign_tokenSymbol_DESC',
  ContributedAsc = 'contributed_ASC',
  ContributedDesc = 'contributed_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentityAddressAsc = 'identity_address_ASC',
  IdentityAddressDesc = 'identity_address_DESC',
  IdentityDisplayNameAsc = 'identity_displayName_ASC',
  IdentityDisplayNameDesc = 'identity_displayName_DESC',
  IdentityEmailAsc = 'identity_email_ASC',
  IdentityEmailDesc = 'identity_email_DESC',
  IdentityIdAsc = 'identity_id_ASC',
  IdentityIdDesc = 'identity_id_DESC',
  IdentityImageAsc = 'identity_image_ASC',
  IdentityImageDesc = 'identity_image_DESC',
  IdentityLegalNameAsc = 'identity_legalName_ASC',
  IdentityLegalNameDesc = 'identity_legalName_DESC',
  IdentityRiotAsc = 'identity_riot_ASC',
  IdentityRiotDesc = 'identity_riot_DESC',
  IdentityTwitterAsc = 'identity_twitter_ASC',
  IdentityTwitterDesc = 'identity_twitter_DESC'
}

export type CampaignContributorWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<CampaignContributorWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CampaignContributorWhereInput>>;
  readonly address_contains?: InputMaybe<Scalars['String']>;
  readonly address_endsWith?: InputMaybe<Scalars['String']>;
  readonly address_eq?: InputMaybe<Scalars['String']>;
  readonly address_gt?: InputMaybe<Scalars['String']>;
  readonly address_gte?: InputMaybe<Scalars['String']>;
  readonly address_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly address_lt?: InputMaybe<Scalars['String']>;
  readonly address_lte?: InputMaybe<Scalars['String']>;
  readonly address_not_contains?: InputMaybe<Scalars['String']>;
  readonly address_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly address_not_eq?: InputMaybe<Scalars['String']>;
  readonly address_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly address_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly address_startsWith?: InputMaybe<Scalars['String']>;
  readonly campaign?: InputMaybe<CampaignWhereInput>;
  readonly contributed_eq?: InputMaybe<Scalars['BigInt']>;
  readonly contributed_gt?: InputMaybe<Scalars['BigInt']>;
  readonly contributed_gte?: InputMaybe<Scalars['BigInt']>;
  readonly contributed_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly contributed_lt?: InputMaybe<Scalars['BigInt']>;
  readonly contributed_lte?: InputMaybe<Scalars['BigInt']>;
  readonly contributed_not_eq?: InputMaybe<Scalars['BigInt']>;
  readonly contributed_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  readonly id_endsWith?: InputMaybe<Scalars['ID']>;
  readonly id_eq?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  readonly id_not_endsWith?: InputMaybe<Scalars['ID']>;
  readonly id_not_eq?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_startsWith?: InputMaybe<Scalars['ID']>;
  readonly id_startsWith?: InputMaybe<Scalars['ID']>;
  readonly identity?: InputMaybe<IdentityWhereInput>;
};

export type CampaignContributorWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type CampaignContributorsConnection = {
  readonly __typename?: 'CampaignContributorsConnection';
  readonly edges: ReadonlyArray<CampaignContributorEdge>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type CampaignEdge = {
  readonly __typename?: 'CampaignEdge';
  readonly cursor: Scalars['String'];
  readonly node: Campaign;
};

export type CampaignMetadata = {
  readonly __typename?: 'CampaignMetadata';
  readonly description: Scalars['String'];
  readonly email: Scalars['String'];
  readonly header: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly logo: Scalars['String'];
  readonly markdown: Scalars['String'];
  readonly name: Scalars['String'];
  readonly title: Scalars['String'];
};

export type CampaignMetadataConnection = {
  readonly __typename?: 'CampaignMetadataConnection';
  readonly edges: ReadonlyArray<CampaignMetadataEdge>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type CampaignMetadataEdge = {
  readonly __typename?: 'CampaignMetadataEdge';
  readonly cursor: Scalars['String'];
  readonly node: CampaignMetadata;
};

export enum CampaignMetadataOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LogoAsc = 'logo_ASC',
  LogoDesc = 'logo_DESC',
  MarkdownAsc = 'markdown_ASC',
  MarkdownDesc = 'markdown_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CampaignMetadataWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<CampaignMetadataWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CampaignMetadataWhereInput>>;
  readonly description_contains?: InputMaybe<Scalars['String']>;
  readonly description_endsWith?: InputMaybe<Scalars['String']>;
  readonly description_eq?: InputMaybe<Scalars['String']>;
  readonly description_gt?: InputMaybe<Scalars['String']>;
  readonly description_gte?: InputMaybe<Scalars['String']>;
  readonly description_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly description_lt?: InputMaybe<Scalars['String']>;
  readonly description_lte?: InputMaybe<Scalars['String']>;
  readonly description_not_contains?: InputMaybe<Scalars['String']>;
  readonly description_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly description_not_eq?: InputMaybe<Scalars['String']>;
  readonly description_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly description_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly description_startsWith?: InputMaybe<Scalars['String']>;
  readonly email_contains?: InputMaybe<Scalars['String']>;
  readonly email_endsWith?: InputMaybe<Scalars['String']>;
  readonly email_eq?: InputMaybe<Scalars['String']>;
  readonly email_gt?: InputMaybe<Scalars['String']>;
  readonly email_gte?: InputMaybe<Scalars['String']>;
  readonly email_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly email_lt?: InputMaybe<Scalars['String']>;
  readonly email_lte?: InputMaybe<Scalars['String']>;
  readonly email_not_contains?: InputMaybe<Scalars['String']>;
  readonly email_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly email_not_eq?: InputMaybe<Scalars['String']>;
  readonly email_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly email_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly email_startsWith?: InputMaybe<Scalars['String']>;
  readonly header_contains?: InputMaybe<Scalars['String']>;
  readonly header_endsWith?: InputMaybe<Scalars['String']>;
  readonly header_eq?: InputMaybe<Scalars['String']>;
  readonly header_gt?: InputMaybe<Scalars['String']>;
  readonly header_gte?: InputMaybe<Scalars['String']>;
  readonly header_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly header_lt?: InputMaybe<Scalars['String']>;
  readonly header_lte?: InputMaybe<Scalars['String']>;
  readonly header_not_contains?: InputMaybe<Scalars['String']>;
  readonly header_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly header_not_eq?: InputMaybe<Scalars['String']>;
  readonly header_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly header_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly header_startsWith?: InputMaybe<Scalars['String']>;
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  readonly id_endsWith?: InputMaybe<Scalars['ID']>;
  readonly id_eq?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  readonly id_not_endsWith?: InputMaybe<Scalars['ID']>;
  readonly id_not_eq?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_startsWith?: InputMaybe<Scalars['ID']>;
  readonly id_startsWith?: InputMaybe<Scalars['ID']>;
  readonly logo_contains?: InputMaybe<Scalars['String']>;
  readonly logo_endsWith?: InputMaybe<Scalars['String']>;
  readonly logo_eq?: InputMaybe<Scalars['String']>;
  readonly logo_gt?: InputMaybe<Scalars['String']>;
  readonly logo_gte?: InputMaybe<Scalars['String']>;
  readonly logo_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logo_lt?: InputMaybe<Scalars['String']>;
  readonly logo_lte?: InputMaybe<Scalars['String']>;
  readonly logo_not_contains?: InputMaybe<Scalars['String']>;
  readonly logo_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly logo_not_eq?: InputMaybe<Scalars['String']>;
  readonly logo_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logo_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly logo_startsWith?: InputMaybe<Scalars['String']>;
  readonly markdown_contains?: InputMaybe<Scalars['String']>;
  readonly markdown_endsWith?: InputMaybe<Scalars['String']>;
  readonly markdown_eq?: InputMaybe<Scalars['String']>;
  readonly markdown_gt?: InputMaybe<Scalars['String']>;
  readonly markdown_gte?: InputMaybe<Scalars['String']>;
  readonly markdown_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly markdown_lt?: InputMaybe<Scalars['String']>;
  readonly markdown_lte?: InputMaybe<Scalars['String']>;
  readonly markdown_not_contains?: InputMaybe<Scalars['String']>;
  readonly markdown_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly markdown_not_eq?: InputMaybe<Scalars['String']>;
  readonly markdown_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly markdown_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly markdown_startsWith?: InputMaybe<Scalars['String']>;
  readonly name_contains?: InputMaybe<Scalars['String']>;
  readonly name_endsWith?: InputMaybe<Scalars['String']>;
  readonly name_eq?: InputMaybe<Scalars['String']>;
  readonly name_gt?: InputMaybe<Scalars['String']>;
  readonly name_gte?: InputMaybe<Scalars['String']>;
  readonly name_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: InputMaybe<Scalars['String']>;
  readonly name_lte?: InputMaybe<Scalars['String']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']>;
  readonly name_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly name_not_eq?: InputMaybe<Scalars['String']>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly name_startsWith?: InputMaybe<Scalars['String']>;
  readonly title_contains?: InputMaybe<Scalars['String']>;
  readonly title_endsWith?: InputMaybe<Scalars['String']>;
  readonly title_eq?: InputMaybe<Scalars['String']>;
  readonly title_gt?: InputMaybe<Scalars['String']>;
  readonly title_gte?: InputMaybe<Scalars['String']>;
  readonly title_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly title_lt?: InputMaybe<Scalars['String']>;
  readonly title_lte?: InputMaybe<Scalars['String']>;
  readonly title_not_contains?: InputMaybe<Scalars['String']>;
  readonly title_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly title_not_eq?: InputMaybe<Scalars['String']>;
  readonly title_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly title_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly title_startsWith?: InputMaybe<Scalars['String']>;
};

export type CampaignMetadataWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export enum CampaignOrderByInput {
  AdminIdentityAddressAsc = 'adminIdentity_address_ASC',
  AdminIdentityAddressDesc = 'adminIdentity_address_DESC',
  AdminIdentityDisplayNameAsc = 'adminIdentity_displayName_ASC',
  AdminIdentityDisplayNameDesc = 'adminIdentity_displayName_DESC',
  AdminIdentityEmailAsc = 'adminIdentity_email_ASC',
  AdminIdentityEmailDesc = 'adminIdentity_email_DESC',
  AdminIdentityIdAsc = 'adminIdentity_id_ASC',
  AdminIdentityIdDesc = 'adminIdentity_id_DESC',
  AdminIdentityImageAsc = 'adminIdentity_image_ASC',
  AdminIdentityImageDesc = 'adminIdentity_image_DESC',
  AdminIdentityLegalNameAsc = 'adminIdentity_legalName_ASC',
  AdminIdentityLegalNameDesc = 'adminIdentity_legalName_DESC',
  AdminIdentityRiotAsc = 'adminIdentity_riot_ASC',
  AdminIdentityRiotDesc = 'adminIdentity_riot_DESC',
  AdminIdentityTwitterAsc = 'adminIdentity_twitter_ASC',
  AdminIdentityTwitterDesc = 'adminIdentity_twitter_DESC',
  AdminAsc = 'admin_ASC',
  AdminDesc = 'admin_DESC',
  CreatedAtBlockAsc = 'createdAtBlock_ASC',
  CreatedAtBlockDesc = 'createdAtBlock_DESC',
  CreatorIdentityAddressAsc = 'creatorIdentity_address_ASC',
  CreatorIdentityAddressDesc = 'creatorIdentity_address_DESC',
  CreatorIdentityDisplayNameAsc = 'creatorIdentity_displayName_ASC',
  CreatorIdentityDisplayNameDesc = 'creatorIdentity_displayName_DESC',
  CreatorIdentityEmailAsc = 'creatorIdentity_email_ASC',
  CreatorIdentityEmailDesc = 'creatorIdentity_email_DESC',
  CreatorIdentityIdAsc = 'creatorIdentity_id_ASC',
  CreatorIdentityIdDesc = 'creatorIdentity_id_DESC',
  CreatorIdentityImageAsc = 'creatorIdentity_image_ASC',
  CreatorIdentityImageDesc = 'creatorIdentity_image_DESC',
  CreatorIdentityLegalNameAsc = 'creatorIdentity_legalName_ASC',
  CreatorIdentityLegalNameDesc = 'creatorIdentity_legalName_DESC',
  CreatorIdentityRiotAsc = 'creatorIdentity_riot_ASC',
  CreatorIdentityRiotDesc = 'creatorIdentity_riot_DESC',
  CreatorIdentityTwitterAsc = 'creatorIdentity_twitter_ASC',
  CreatorIdentityTwitterDesc = 'creatorIdentity_twitter_DESC',
  CreatorAsc = 'creator_ASC',
  CreatorDesc = 'creator_DESC',
  DepositAsc = 'deposit_ASC',
  DepositDesc = 'deposit_DESC',
  ExpiryAsc = 'expiry_ASC',
  ExpiryDesc = 'expiry_DESC',
  GovernanceAsc = 'governance_ASC',
  GovernanceDesc = 'governance_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetadataDescriptionAsc = 'metadata_description_ASC',
  MetadataDescriptionDesc = 'metadata_description_DESC',
  MetadataEmailAsc = 'metadata_email_ASC',
  MetadataEmailDesc = 'metadata_email_DESC',
  MetadataHeaderAsc = 'metadata_header_ASC',
  MetadataHeaderDesc = 'metadata_header_DESC',
  MetadataIdAsc = 'metadata_id_ASC',
  MetadataIdDesc = 'metadata_id_DESC',
  MetadataLogoAsc = 'metadata_logo_ASC',
  MetadataLogoDesc = 'metadata_logo_DESC',
  MetadataMarkdownAsc = 'metadata_markdown_ASC',
  MetadataMarkdownDesc = 'metadata_markdown_DESC',
  MetadataNameAsc = 'metadata_name_ASC',
  MetadataNameDesc = 'metadata_name_DESC',
  MetadataTitleAsc = 'metadata_title_ASC',
  MetadataTitleDesc = 'metadata_title_DESC',
  OrganizationAccessAsc = 'organization_access_ASC',
  OrganizationAccessDesc = 'organization_access_DESC',
  OrganizationControllerAsc = 'organization_controller_ASC',
  OrganizationControllerDesc = 'organization_controller_DESC',
  OrganizationCreatedAtBlockAsc = 'organization_createdAtBlock_ASC',
  OrganizationCreatedAtBlockDesc = 'organization_createdAtBlock_DESC',
  OrganizationCreatorAsc = 'organization_creator_ASC',
  OrganizationCreatorDesc = 'organization_creator_DESC',
  OrganizationFeeModelAsc = 'organization_feeModel_ASC',
  OrganizationFeeModelDesc = 'organization_feeModel_DESC',
  OrganizationFeeAsc = 'organization_fee_ASC',
  OrganizationFeeDesc = 'organization_fee_DESC',
  OrganizationGovAssetAsc = 'organization_govAsset_ASC',
  OrganizationGovAssetDesc = 'organization_govAsset_DESC',
  OrganizationIdAsc = 'organization_id_ASC',
  OrganizationIdDesc = 'organization_id_DESC',
  OrganizationMemberLimitAsc = 'organization_memberLimit_ASC',
  OrganizationMemberLimitDesc = 'organization_memberLimit_DESC',
  OrganizationPayAssetAsc = 'organization_payAsset_ASC',
  OrganizationPayAssetDesc = 'organization_payAsset_DESC',
  OrganizationTreasuryAsc = 'organization_treasury_ASC',
  OrganizationTreasuryDesc = 'organization_treasury_DESC',
  OrganizationTypeAsc = 'organization_type_ASC',
  OrganizationTypeDesc = 'organization_type_DESC',
  ProtocolAsc = 'protocol_ASC',
  ProtocolDesc = 'protocol_DESC',
  StateAsc = 'state_ASC',
  StateDesc = 'state_DESC',
  TargetAsc = 'target_ASC',
  TargetDesc = 'target_DESC',
  TokenNameAsc = 'tokenName_ASC',
  TokenNameDesc = 'tokenName_DESC',
  TokenSymbolAsc = 'tokenSymbol_ASC',
  TokenSymbolDesc = 'tokenSymbol_DESC'
}

export type CampaignWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<CampaignWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CampaignWhereInput>>;
  readonly adminIdentity?: InputMaybe<IdentityWhereInput>;
  readonly admin_contains?: InputMaybe<Scalars['String']>;
  readonly admin_endsWith?: InputMaybe<Scalars['String']>;
  readonly admin_eq?: InputMaybe<Scalars['String']>;
  readonly admin_gt?: InputMaybe<Scalars['String']>;
  readonly admin_gte?: InputMaybe<Scalars['String']>;
  readonly admin_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly admin_lt?: InputMaybe<Scalars['String']>;
  readonly admin_lte?: InputMaybe<Scalars['String']>;
  readonly admin_not_contains?: InputMaybe<Scalars['String']>;
  readonly admin_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly admin_not_eq?: InputMaybe<Scalars['String']>;
  readonly admin_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly admin_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly admin_startsWith?: InputMaybe<Scalars['String']>;
  readonly contributors_every?: InputMaybe<CampaignContributorWhereInput>;
  readonly contributors_none?: InputMaybe<CampaignContributorWhereInput>;
  readonly contributors_some?: InputMaybe<CampaignContributorWhereInput>;
  readonly createdAtBlock_eq?: InputMaybe<Scalars['Int']>;
  readonly createdAtBlock_gt?: InputMaybe<Scalars['Int']>;
  readonly createdAtBlock_gte?: InputMaybe<Scalars['Int']>;
  readonly createdAtBlock_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly createdAtBlock_lt?: InputMaybe<Scalars['Int']>;
  readonly createdAtBlock_lte?: InputMaybe<Scalars['Int']>;
  readonly createdAtBlock_not_eq?: InputMaybe<Scalars['Int']>;
  readonly createdAtBlock_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly creatorIdentity?: InputMaybe<IdentityWhereInput>;
  readonly creator_contains?: InputMaybe<Scalars['String']>;
  readonly creator_endsWith?: InputMaybe<Scalars['String']>;
  readonly creator_eq?: InputMaybe<Scalars['String']>;
  readonly creator_gt?: InputMaybe<Scalars['String']>;
  readonly creator_gte?: InputMaybe<Scalars['String']>;
  readonly creator_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly creator_lt?: InputMaybe<Scalars['String']>;
  readonly creator_lte?: InputMaybe<Scalars['String']>;
  readonly creator_not_contains?: InputMaybe<Scalars['String']>;
  readonly creator_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly creator_not_eq?: InputMaybe<Scalars['String']>;
  readonly creator_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly creator_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly creator_startsWith?: InputMaybe<Scalars['String']>;
  readonly deposit_eq?: InputMaybe<Scalars['BigInt']>;
  readonly deposit_gt?: InputMaybe<Scalars['BigInt']>;
  readonly deposit_gte?: InputMaybe<Scalars['BigInt']>;
  readonly deposit_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly deposit_lt?: InputMaybe<Scalars['BigInt']>;
  readonly deposit_lte?: InputMaybe<Scalars['BigInt']>;
  readonly deposit_not_eq?: InputMaybe<Scalars['BigInt']>;
  readonly deposit_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly expiry_eq?: InputMaybe<Scalars['Int']>;
  readonly expiry_gt?: InputMaybe<Scalars['Int']>;
  readonly expiry_gte?: InputMaybe<Scalars['Int']>;
  readonly expiry_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly expiry_lt?: InputMaybe<Scalars['Int']>;
  readonly expiry_lte?: InputMaybe<Scalars['Int']>;
  readonly expiry_not_eq?: InputMaybe<Scalars['Int']>;
  readonly expiry_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly governance_contains?: InputMaybe<Scalars['String']>;
  readonly governance_endsWith?: InputMaybe<Scalars['String']>;
  readonly governance_eq?: InputMaybe<Scalars['String']>;
  readonly governance_gt?: InputMaybe<Scalars['String']>;
  readonly governance_gte?: InputMaybe<Scalars['String']>;
  readonly governance_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly governance_lt?: InputMaybe<Scalars['String']>;
  readonly governance_lte?: InputMaybe<Scalars['String']>;
  readonly governance_not_contains?: InputMaybe<Scalars['String']>;
  readonly governance_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly governance_not_eq?: InputMaybe<Scalars['String']>;
  readonly governance_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly governance_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly governance_startsWith?: InputMaybe<Scalars['String']>;
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  readonly id_endsWith?: InputMaybe<Scalars['ID']>;
  readonly id_eq?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  readonly id_not_endsWith?: InputMaybe<Scalars['ID']>;
  readonly id_not_eq?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_startsWith?: InputMaybe<Scalars['ID']>;
  readonly id_startsWith?: InputMaybe<Scalars['ID']>;
  readonly metadata?: InputMaybe<CampaignMetadataWhereInput>;
  readonly metadata_isNull?: InputMaybe<Scalars['Boolean']>;
  readonly organization?: InputMaybe<OrganizationWhereInput>;
  readonly protocol_contains?: InputMaybe<Scalars['String']>;
  readonly protocol_endsWith?: InputMaybe<Scalars['String']>;
  readonly protocol_eq?: InputMaybe<Scalars['String']>;
  readonly protocol_gt?: InputMaybe<Scalars['String']>;
  readonly protocol_gte?: InputMaybe<Scalars['String']>;
  readonly protocol_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly protocol_lt?: InputMaybe<Scalars['String']>;
  readonly protocol_lte?: InputMaybe<Scalars['String']>;
  readonly protocol_not_contains?: InputMaybe<Scalars['String']>;
  readonly protocol_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly protocol_not_eq?: InputMaybe<Scalars['String']>;
  readonly protocol_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly protocol_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly protocol_startsWith?: InputMaybe<Scalars['String']>;
  readonly state_contains?: InputMaybe<Scalars['String']>;
  readonly state_endsWith?: InputMaybe<Scalars['String']>;
  readonly state_eq?: InputMaybe<Scalars['String']>;
  readonly state_gt?: InputMaybe<Scalars['String']>;
  readonly state_gte?: InputMaybe<Scalars['String']>;
  readonly state_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly state_lt?: InputMaybe<Scalars['String']>;
  readonly state_lte?: InputMaybe<Scalars['String']>;
  readonly state_not_contains?: InputMaybe<Scalars['String']>;
  readonly state_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly state_not_eq?: InputMaybe<Scalars['String']>;
  readonly state_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly state_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly state_startsWith?: InputMaybe<Scalars['String']>;
  readonly target_eq?: InputMaybe<Scalars['BigInt']>;
  readonly target_gt?: InputMaybe<Scalars['BigInt']>;
  readonly target_gte?: InputMaybe<Scalars['BigInt']>;
  readonly target_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly target_lt?: InputMaybe<Scalars['BigInt']>;
  readonly target_lte?: InputMaybe<Scalars['BigInt']>;
  readonly target_not_eq?: InputMaybe<Scalars['BigInt']>;
  readonly target_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly tokenName_contains?: InputMaybe<Scalars['String']>;
  readonly tokenName_endsWith?: InputMaybe<Scalars['String']>;
  readonly tokenName_eq?: InputMaybe<Scalars['String']>;
  readonly tokenName_gt?: InputMaybe<Scalars['String']>;
  readonly tokenName_gte?: InputMaybe<Scalars['String']>;
  readonly tokenName_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tokenName_lt?: InputMaybe<Scalars['String']>;
  readonly tokenName_lte?: InputMaybe<Scalars['String']>;
  readonly tokenName_not_contains?: InputMaybe<Scalars['String']>;
  readonly tokenName_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly tokenName_not_eq?: InputMaybe<Scalars['String']>;
  readonly tokenName_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tokenName_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly tokenName_startsWith?: InputMaybe<Scalars['String']>;
  readonly tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  readonly tokenSymbol_endsWith?: InputMaybe<Scalars['String']>;
  readonly tokenSymbol_eq?: InputMaybe<Scalars['String']>;
  readonly tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  readonly tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  readonly tokenSymbol_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  readonly tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  readonly tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  readonly tokenSymbol_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly tokenSymbol_not_eq?: InputMaybe<Scalars['String']>;
  readonly tokenSymbol_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tokenSymbol_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly tokenSymbol_startsWith?: InputMaybe<Scalars['String']>;
};

export type CampaignWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type CampaignsConnection = {
  readonly __typename?: 'CampaignsConnection';
  readonly edges: ReadonlyArray<CampaignEdge>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type Config = {
  readonly __typename?: 'Config';
  readonly CONTACT?: Maybe<Scalars['String']>;
  readonly IPFS_GATEWAY?: Maybe<Scalars['String']>;
  readonly LOG_LEVEL?: Maybe<LogLevel>;
  readonly SITE_DESCRIPTION?: Maybe<Scalars['String']>;
  readonly SITE_IMAGE?: Maybe<Scalars['String']>;
  readonly SITE_NAME?: Maybe<Scalars['String']>;
  readonly SITE_TITLE?: Maybe<Scalars['String']>;
  readonly TW_SITE_CREATOR?: Maybe<Scalars['String']>;
  readonly TW_SITE_NAME?: Maybe<Scalars['String']>;
};

export type DisplayValueEntry = {
  readonly key: Scalars['String'];
  readonly text: Scalars['String'];
};

export type DisplayValueEntryCountry = DisplayValueEntry & {
  readonly __typename?: 'DisplayValueEntryCountry';
  readonly flag: Scalars['String'];
  readonly key: Scalars['String'];
  readonly text: Scalars['String'];
  readonly value: Scalars['String'];
};

export type DisplayValueEntryNumber = DisplayValueEntry & {
  readonly __typename?: 'DisplayValueEntryNumber';
  readonly key: Scalars['String'];
  readonly text: Scalars['String'];
  readonly value: Scalars['Int'];
};

export type DisplayValueEntryString = DisplayValueEntry & {
  readonly __typename?: 'DisplayValueEntryString';
  readonly key: Scalars['String'];
  readonly text: Scalars['String'];
  readonly value: Scalars['String'];
};

export type DisplayValues = {
  readonly __typename?: 'DisplayValues';
  readonly collateralTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly countries?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryCountry>>>;
  readonly daoBodies?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly daoFeeModel?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly daoMemberGovernance?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly memberships?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly projectDurations?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly projectTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly proposalTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly protocolTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly votingTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
};

export enum Environment {
  Development = 'DEVELOPMENT',
  Production = 'PRODUCTION',
  Staging = 'STAGING'
}

export type Features = ProposalFeatures & {
  readonly __typename?: 'Features';
  readonly CREATE_GENERAL_PROPOSAL: Scalars['Boolean'];
  readonly CREATE_PROPOSAL: Scalars['Boolean'];
  readonly CREATE_PROPOSAL_RELATIVE_MAJORITY: Scalars['Boolean'];
  readonly CREATE_PROPOSAL_SIMPLE_MAJORITY: Scalars['Boolean'];
  readonly CREATE_SPENDING_PROPOSAL: Scalars['Boolean'];
  readonly CREATE_WITHDRAW_PROPOSAL: Scalars['Boolean'];
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['Float']>;
  readonly _gt?: InputMaybe<Scalars['Float']>;
  readonly _gte?: InputMaybe<Scalars['Float']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['Float']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['Float']>;
  readonly _lte?: InputMaybe<Scalars['Float']>;
  readonly _neq?: InputMaybe<Scalars['Float']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Float']>>;
};

export type IdentitiesConnection = {
  readonly __typename?: 'IdentitiesConnection';
  readonly edges: ReadonlyArray<IdentityEdge>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type Identity = {
  readonly __typename?: 'Identity';
  readonly address: Scalars['String'];
  readonly campaignContributors: ReadonlyArray<CampaignContributor>;
  readonly controllerOrganizations: ReadonlyArray<Organization>;
  readonly createdCampaigns: ReadonlyArray<Campaign>;
  readonly createdOrganizations: ReadonlyArray<Organization>;
  readonly displayName?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly image?: Maybe<Scalars['String']>;
  readonly legalName?: Maybe<Scalars['String']>;
  readonly organizationMembers: ReadonlyArray<OrganizationMember>;
  readonly riot?: Maybe<Scalars['String']>;
  readonly twitter?: Maybe<Scalars['String']>;
};


export type IdentityCampaignContributorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<InputMaybe<CampaignContributorOrderByInput>>>;
  where?: InputMaybe<CampaignContributorWhereInput>;
};


export type IdentityControllerOrganizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<InputMaybe<OrganizationOrderByInput>>>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type IdentityCreatedCampaignsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<InputMaybe<CampaignOrderByInput>>>;
  where?: InputMaybe<CampaignWhereInput>;
};


export type IdentityCreatedOrganizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<InputMaybe<OrganizationOrderByInput>>>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type IdentityOrganizationMembersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<InputMaybe<OrganizationMemberOrderByInput>>>;
  where?: InputMaybe<OrganizationMemberWhereInput>;
};

export type IdentityEdge = {
  readonly __typename?: 'IdentityEdge';
  readonly cursor: Scalars['String'];
  readonly node: Identity;
};

export enum IdentityOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  DisplayNameAsc = 'displayName_ASC',
  DisplayNameDesc = 'displayName_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  LegalNameAsc = 'legalName_ASC',
  LegalNameDesc = 'legalName_DESC',
  RiotAsc = 'riot_ASC',
  RiotDesc = 'riot_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC'
}

export type IdentityWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<IdentityWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<IdentityWhereInput>>;
  readonly address_contains?: InputMaybe<Scalars['String']>;
  readonly address_endsWith?: InputMaybe<Scalars['String']>;
  readonly address_eq?: InputMaybe<Scalars['String']>;
  readonly address_gt?: InputMaybe<Scalars['String']>;
  readonly address_gte?: InputMaybe<Scalars['String']>;
  readonly address_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly address_lt?: InputMaybe<Scalars['String']>;
  readonly address_lte?: InputMaybe<Scalars['String']>;
  readonly address_not_contains?: InputMaybe<Scalars['String']>;
  readonly address_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly address_not_eq?: InputMaybe<Scalars['String']>;
  readonly address_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly address_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly address_startsWith?: InputMaybe<Scalars['String']>;
  readonly campaignContributors_every?: InputMaybe<CampaignContributorWhereInput>;
  readonly campaignContributors_none?: InputMaybe<CampaignContributorWhereInput>;
  readonly campaignContributors_some?: InputMaybe<CampaignContributorWhereInput>;
  readonly controllerOrganizations_every?: InputMaybe<OrganizationWhereInput>;
  readonly controllerOrganizations_none?: InputMaybe<OrganizationWhereInput>;
  readonly controllerOrganizations_some?: InputMaybe<OrganizationWhereInput>;
  readonly createdCampaigns_every?: InputMaybe<CampaignWhereInput>;
  readonly createdCampaigns_none?: InputMaybe<CampaignWhereInput>;
  readonly createdCampaigns_some?: InputMaybe<CampaignWhereInput>;
  readonly createdOrganizations_every?: InputMaybe<OrganizationWhereInput>;
  readonly createdOrganizations_none?: InputMaybe<OrganizationWhereInput>;
  readonly createdOrganizations_some?: InputMaybe<OrganizationWhereInput>;
  readonly displayName_contains?: InputMaybe<Scalars['String']>;
  readonly displayName_endsWith?: InputMaybe<Scalars['String']>;
  readonly displayName_eq?: InputMaybe<Scalars['String']>;
  readonly displayName_gt?: InputMaybe<Scalars['String']>;
  readonly displayName_gte?: InputMaybe<Scalars['String']>;
  readonly displayName_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly displayName_isNull?: InputMaybe<Scalars['Boolean']>;
  readonly displayName_lt?: InputMaybe<Scalars['String']>;
  readonly displayName_lte?: InputMaybe<Scalars['String']>;
  readonly displayName_not_contains?: InputMaybe<Scalars['String']>;
  readonly displayName_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly displayName_not_eq?: InputMaybe<Scalars['String']>;
  readonly displayName_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly displayName_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly displayName_startsWith?: InputMaybe<Scalars['String']>;
  readonly email_contains?: InputMaybe<Scalars['String']>;
  readonly email_endsWith?: InputMaybe<Scalars['String']>;
  readonly email_eq?: InputMaybe<Scalars['String']>;
  readonly email_gt?: InputMaybe<Scalars['String']>;
  readonly email_gte?: InputMaybe<Scalars['String']>;
  readonly email_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly email_isNull?: InputMaybe<Scalars['Boolean']>;
  readonly email_lt?: InputMaybe<Scalars['String']>;
  readonly email_lte?: InputMaybe<Scalars['String']>;
  readonly email_not_contains?: InputMaybe<Scalars['String']>;
  readonly email_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly email_not_eq?: InputMaybe<Scalars['String']>;
  readonly email_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly email_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly email_startsWith?: InputMaybe<Scalars['String']>;
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  readonly id_endsWith?: InputMaybe<Scalars['ID']>;
  readonly id_eq?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  readonly id_not_endsWith?: InputMaybe<Scalars['ID']>;
  readonly id_not_eq?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_startsWith?: InputMaybe<Scalars['ID']>;
  readonly id_startsWith?: InputMaybe<Scalars['ID']>;
  readonly image_contains?: InputMaybe<Scalars['String']>;
  readonly image_endsWith?: InputMaybe<Scalars['String']>;
  readonly image_eq?: InputMaybe<Scalars['String']>;
  readonly image_gt?: InputMaybe<Scalars['String']>;
  readonly image_gte?: InputMaybe<Scalars['String']>;
  readonly image_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly image_isNull?: InputMaybe<Scalars['Boolean']>;
  readonly image_lt?: InputMaybe<Scalars['String']>;
  readonly image_lte?: InputMaybe<Scalars['String']>;
  readonly image_not_contains?: InputMaybe<Scalars['String']>;
  readonly image_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly image_not_eq?: InputMaybe<Scalars['String']>;
  readonly image_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly image_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly image_startsWith?: InputMaybe<Scalars['String']>;
  readonly legalName_contains?: InputMaybe<Scalars['String']>;
  readonly legalName_endsWith?: InputMaybe<Scalars['String']>;
  readonly legalName_eq?: InputMaybe<Scalars['String']>;
  readonly legalName_gt?: InputMaybe<Scalars['String']>;
  readonly legalName_gte?: InputMaybe<Scalars['String']>;
  readonly legalName_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly legalName_isNull?: InputMaybe<Scalars['Boolean']>;
  readonly legalName_lt?: InputMaybe<Scalars['String']>;
  readonly legalName_lte?: InputMaybe<Scalars['String']>;
  readonly legalName_not_contains?: InputMaybe<Scalars['String']>;
  readonly legalName_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly legalName_not_eq?: InputMaybe<Scalars['String']>;
  readonly legalName_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly legalName_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly legalName_startsWith?: InputMaybe<Scalars['String']>;
  readonly organizationMembers_every?: InputMaybe<OrganizationMemberWhereInput>;
  readonly organizationMembers_none?: InputMaybe<OrganizationMemberWhereInput>;
  readonly organizationMembers_some?: InputMaybe<OrganizationMemberWhereInput>;
  readonly riot_contains?: InputMaybe<Scalars['String']>;
  readonly riot_endsWith?: InputMaybe<Scalars['String']>;
  readonly riot_eq?: InputMaybe<Scalars['String']>;
  readonly riot_gt?: InputMaybe<Scalars['String']>;
  readonly riot_gte?: InputMaybe<Scalars['String']>;
  readonly riot_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly riot_isNull?: InputMaybe<Scalars['Boolean']>;
  readonly riot_lt?: InputMaybe<Scalars['String']>;
  readonly riot_lte?: InputMaybe<Scalars['String']>;
  readonly riot_not_contains?: InputMaybe<Scalars['String']>;
  readonly riot_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly riot_not_eq?: InputMaybe<Scalars['String']>;
  readonly riot_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly riot_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly riot_startsWith?: InputMaybe<Scalars['String']>;
  readonly twitter_contains?: InputMaybe<Scalars['String']>;
  readonly twitter_endsWith?: InputMaybe<Scalars['String']>;
  readonly twitter_eq?: InputMaybe<Scalars['String']>;
  readonly twitter_gt?: InputMaybe<Scalars['String']>;
  readonly twitter_gte?: InputMaybe<Scalars['String']>;
  readonly twitter_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly twitter_isNull?: InputMaybe<Scalars['Boolean']>;
  readonly twitter_lt?: InputMaybe<Scalars['String']>;
  readonly twitter_lte?: InputMaybe<Scalars['String']>;
  readonly twitter_not_contains?: InputMaybe<Scalars['String']>;
  readonly twitter_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly twitter_not_eq?: InputMaybe<Scalars['String']>;
  readonly twitter_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly twitter_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly twitter_startsWith?: InputMaybe<Scalars['String']>;
};

export type IdentityWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['Int']>;
  readonly _gt?: InputMaybe<Scalars['Int']>;
  readonly _gte?: InputMaybe<Scalars['Int']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['Int']>;
  readonly _lte?: InputMaybe<Scalars['Int']>;
  readonly _neq?: InputMaybe<Scalars['Int']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
};

export type Link = {
  readonly __typename?: 'Link';
  readonly category?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly imageUrl?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly users?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export enum LogLevel {
  Debug = 'DEBUG',
  Error = 'ERROR',
  Info = 'INFO',
  Silent = 'SILENT',
  Trace = 'TRACE',
  Warn = 'WARN'
}

/** mutation root */
export type Mutation = {
  readonly __typename?: 'Mutation';
  /** insert data into the table: "hatched_birds" */
  readonly insert_hatched_birds?: Maybe<Hatched_Birds_Mutation_Response>;
  /** insert a single row into the table: "hatched_birds" */
  readonly insert_hatched_birds_one?: Maybe<Hatched_Birds>;
};


/** mutation root */
export type MutationInsert_Hatched_BirdsArgs = {
  objects: ReadonlyArray<Hatched_Birds_Insert_Input>;
};


/** mutation root */
export type MutationInsert_Hatched_Birds_OneArgs = {
  object: Hatched_Birds_Insert_Input;
};

export type Organization = {
  readonly __typename?: 'Organization';
  readonly access: Scalars['String'];
  readonly campaigns: ReadonlyArray<Campaign>;
  readonly controller: Scalars['String'];
  readonly controllerIdentity: Identity;
  readonly createdAtBlock: Scalars['Int'];
  readonly creator: Scalars['String'];
  readonly creatorIdentity: Identity;
  readonly fee: Scalars['BigInt'];
  readonly feeModel: Scalars['String'];
  readonly govAsset: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly memberLimit: Scalars['BigInt'];
  readonly members: ReadonlyArray<OrganizationMember>;
  readonly metadata?: Maybe<OrganizationMetadata>;
  readonly payAsset: Scalars['Int'];
  readonly treasury: Scalars['String'];
  readonly treasuryIdentity: Identity;
  readonly type: Scalars['String'];
};


export type OrganizationCampaignsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<InputMaybe<CampaignOrderByInput>>>;
  where?: InputMaybe<CampaignWhereInput>;
};


export type OrganizationMembersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<InputMaybe<OrganizationMemberOrderByInput>>>;
  where?: InputMaybe<OrganizationMemberWhereInput>;
};

export type OrganizationEdge = {
  readonly __typename?: 'OrganizationEdge';
  readonly cursor: Scalars['String'];
  readonly node: Organization;
};

export type OrganizationMember = {
  readonly __typename?: 'OrganizationMember';
  readonly address: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly identity: Identity;
  readonly organization: Organization;
};

export type OrganizationMemberEdge = {
  readonly __typename?: 'OrganizationMemberEdge';
  readonly cursor: Scalars['String'];
  readonly node: OrganizationMember;
};

export enum OrganizationMemberOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentityAddressAsc = 'identity_address_ASC',
  IdentityAddressDesc = 'identity_address_DESC',
  IdentityDisplayNameAsc = 'identity_displayName_ASC',
  IdentityDisplayNameDesc = 'identity_displayName_DESC',
  IdentityEmailAsc = 'identity_email_ASC',
  IdentityEmailDesc = 'identity_email_DESC',
  IdentityIdAsc = 'identity_id_ASC',
  IdentityIdDesc = 'identity_id_DESC',
  IdentityImageAsc = 'identity_image_ASC',
  IdentityImageDesc = 'identity_image_DESC',
  IdentityLegalNameAsc = 'identity_legalName_ASC',
  IdentityLegalNameDesc = 'identity_legalName_DESC',
  IdentityRiotAsc = 'identity_riot_ASC',
  IdentityRiotDesc = 'identity_riot_DESC',
  IdentityTwitterAsc = 'identity_twitter_ASC',
  IdentityTwitterDesc = 'identity_twitter_DESC',
  OrganizationAccessAsc = 'organization_access_ASC',
  OrganizationAccessDesc = 'organization_access_DESC',
  OrganizationControllerAsc = 'organization_controller_ASC',
  OrganizationControllerDesc = 'organization_controller_DESC',
  OrganizationCreatedAtBlockAsc = 'organization_createdAtBlock_ASC',
  OrganizationCreatedAtBlockDesc = 'organization_createdAtBlock_DESC',
  OrganizationCreatorAsc = 'organization_creator_ASC',
  OrganizationCreatorDesc = 'organization_creator_DESC',
  OrganizationFeeModelAsc = 'organization_feeModel_ASC',
  OrganizationFeeModelDesc = 'organization_feeModel_DESC',
  OrganizationFeeAsc = 'organization_fee_ASC',
  OrganizationFeeDesc = 'organization_fee_DESC',
  OrganizationGovAssetAsc = 'organization_govAsset_ASC',
  OrganizationGovAssetDesc = 'organization_govAsset_DESC',
  OrganizationIdAsc = 'organization_id_ASC',
  OrganizationIdDesc = 'organization_id_DESC',
  OrganizationMemberLimitAsc = 'organization_memberLimit_ASC',
  OrganizationMemberLimitDesc = 'organization_memberLimit_DESC',
  OrganizationPayAssetAsc = 'organization_payAsset_ASC',
  OrganizationPayAssetDesc = 'organization_payAsset_DESC',
  OrganizationTreasuryAsc = 'organization_treasury_ASC',
  OrganizationTreasuryDesc = 'organization_treasury_DESC',
  OrganizationTypeAsc = 'organization_type_ASC',
  OrganizationTypeDesc = 'organization_type_DESC'
}

export type OrganizationMemberWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<OrganizationMemberWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<OrganizationMemberWhereInput>>;
  readonly address_contains?: InputMaybe<Scalars['String']>;
  readonly address_endsWith?: InputMaybe<Scalars['String']>;
  readonly address_eq?: InputMaybe<Scalars['String']>;
  readonly address_gt?: InputMaybe<Scalars['String']>;
  readonly address_gte?: InputMaybe<Scalars['String']>;
  readonly address_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly address_lt?: InputMaybe<Scalars['String']>;
  readonly address_lte?: InputMaybe<Scalars['String']>;
  readonly address_not_contains?: InputMaybe<Scalars['String']>;
  readonly address_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly address_not_eq?: InputMaybe<Scalars['String']>;
  readonly address_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly address_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly address_startsWith?: InputMaybe<Scalars['String']>;
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  readonly id_endsWith?: InputMaybe<Scalars['ID']>;
  readonly id_eq?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  readonly id_not_endsWith?: InputMaybe<Scalars['ID']>;
  readonly id_not_eq?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_startsWith?: InputMaybe<Scalars['ID']>;
  readonly id_startsWith?: InputMaybe<Scalars['ID']>;
  readonly identity?: InputMaybe<IdentityWhereInput>;
  readonly organization?: InputMaybe<OrganizationWhereInput>;
};

export type OrganizationMemberWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type OrganizationMembersConnection = {
  readonly __typename?: 'OrganizationMembersConnection';
  readonly edges: ReadonlyArray<OrganizationMemberEdge>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type OrganizationMetadata = {
  readonly __typename?: 'OrganizationMetadata';
  readonly description: Scalars['String'];
  readonly email: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly logo: Scalars['String'];
  readonly name: Scalars['String'];
  readonly repo: Scalars['String'];
  readonly website: Scalars['String'];
};

export type OrganizationMetadataConnection = {
  readonly __typename?: 'OrganizationMetadataConnection';
  readonly edges: ReadonlyArray<OrganizationMetadataEdge>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type OrganizationMetadataEdge = {
  readonly __typename?: 'OrganizationMetadataEdge';
  readonly cursor: Scalars['String'];
  readonly node: OrganizationMetadata;
};

export enum OrganizationMetadataOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LogoAsc = 'logo_ASC',
  LogoDesc = 'logo_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RepoAsc = 'repo_ASC',
  RepoDesc = 'repo_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC'
}

export type OrganizationMetadataWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<OrganizationMetadataWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<OrganizationMetadataWhereInput>>;
  readonly description_contains?: InputMaybe<Scalars['String']>;
  readonly description_endsWith?: InputMaybe<Scalars['String']>;
  readonly description_eq?: InputMaybe<Scalars['String']>;
  readonly description_gt?: InputMaybe<Scalars['String']>;
  readonly description_gte?: InputMaybe<Scalars['String']>;
  readonly description_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly description_lt?: InputMaybe<Scalars['String']>;
  readonly description_lte?: InputMaybe<Scalars['String']>;
  readonly description_not_contains?: InputMaybe<Scalars['String']>;
  readonly description_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly description_not_eq?: InputMaybe<Scalars['String']>;
  readonly description_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly description_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly description_startsWith?: InputMaybe<Scalars['String']>;
  readonly email_contains?: InputMaybe<Scalars['String']>;
  readonly email_endsWith?: InputMaybe<Scalars['String']>;
  readonly email_eq?: InputMaybe<Scalars['String']>;
  readonly email_gt?: InputMaybe<Scalars['String']>;
  readonly email_gte?: InputMaybe<Scalars['String']>;
  readonly email_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly email_lt?: InputMaybe<Scalars['String']>;
  readonly email_lte?: InputMaybe<Scalars['String']>;
  readonly email_not_contains?: InputMaybe<Scalars['String']>;
  readonly email_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly email_not_eq?: InputMaybe<Scalars['String']>;
  readonly email_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly email_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly email_startsWith?: InputMaybe<Scalars['String']>;
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  readonly id_endsWith?: InputMaybe<Scalars['ID']>;
  readonly id_eq?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  readonly id_not_endsWith?: InputMaybe<Scalars['ID']>;
  readonly id_not_eq?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_startsWith?: InputMaybe<Scalars['ID']>;
  readonly id_startsWith?: InputMaybe<Scalars['ID']>;
  readonly logo_contains?: InputMaybe<Scalars['String']>;
  readonly logo_endsWith?: InputMaybe<Scalars['String']>;
  readonly logo_eq?: InputMaybe<Scalars['String']>;
  readonly logo_gt?: InputMaybe<Scalars['String']>;
  readonly logo_gte?: InputMaybe<Scalars['String']>;
  readonly logo_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logo_lt?: InputMaybe<Scalars['String']>;
  readonly logo_lte?: InputMaybe<Scalars['String']>;
  readonly logo_not_contains?: InputMaybe<Scalars['String']>;
  readonly logo_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly logo_not_eq?: InputMaybe<Scalars['String']>;
  readonly logo_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logo_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly logo_startsWith?: InputMaybe<Scalars['String']>;
  readonly name_contains?: InputMaybe<Scalars['String']>;
  readonly name_endsWith?: InputMaybe<Scalars['String']>;
  readonly name_eq?: InputMaybe<Scalars['String']>;
  readonly name_gt?: InputMaybe<Scalars['String']>;
  readonly name_gte?: InputMaybe<Scalars['String']>;
  readonly name_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: InputMaybe<Scalars['String']>;
  readonly name_lte?: InputMaybe<Scalars['String']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']>;
  readonly name_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly name_not_eq?: InputMaybe<Scalars['String']>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly name_startsWith?: InputMaybe<Scalars['String']>;
  readonly repo_contains?: InputMaybe<Scalars['String']>;
  readonly repo_endsWith?: InputMaybe<Scalars['String']>;
  readonly repo_eq?: InputMaybe<Scalars['String']>;
  readonly repo_gt?: InputMaybe<Scalars['String']>;
  readonly repo_gte?: InputMaybe<Scalars['String']>;
  readonly repo_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly repo_lt?: InputMaybe<Scalars['String']>;
  readonly repo_lte?: InputMaybe<Scalars['String']>;
  readonly repo_not_contains?: InputMaybe<Scalars['String']>;
  readonly repo_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly repo_not_eq?: InputMaybe<Scalars['String']>;
  readonly repo_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly repo_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly repo_startsWith?: InputMaybe<Scalars['String']>;
  readonly website_contains?: InputMaybe<Scalars['String']>;
  readonly website_endsWith?: InputMaybe<Scalars['String']>;
  readonly website_eq?: InputMaybe<Scalars['String']>;
  readonly website_gt?: InputMaybe<Scalars['String']>;
  readonly website_gte?: InputMaybe<Scalars['String']>;
  readonly website_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly website_lt?: InputMaybe<Scalars['String']>;
  readonly website_lte?: InputMaybe<Scalars['String']>;
  readonly website_not_contains?: InputMaybe<Scalars['String']>;
  readonly website_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly website_not_eq?: InputMaybe<Scalars['String']>;
  readonly website_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly website_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly website_startsWith?: InputMaybe<Scalars['String']>;
};

export type OrganizationMetadataWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export enum OrganizationOrderByInput {
  AccessAsc = 'access_ASC',
  AccessDesc = 'access_DESC',
  ControllerIdentityAddressAsc = 'controllerIdentity_address_ASC',
  ControllerIdentityAddressDesc = 'controllerIdentity_address_DESC',
  ControllerIdentityDisplayNameAsc = 'controllerIdentity_displayName_ASC',
  ControllerIdentityDisplayNameDesc = 'controllerIdentity_displayName_DESC',
  ControllerIdentityEmailAsc = 'controllerIdentity_email_ASC',
  ControllerIdentityEmailDesc = 'controllerIdentity_email_DESC',
  ControllerIdentityIdAsc = 'controllerIdentity_id_ASC',
  ControllerIdentityIdDesc = 'controllerIdentity_id_DESC',
  ControllerIdentityImageAsc = 'controllerIdentity_image_ASC',
  ControllerIdentityImageDesc = 'controllerIdentity_image_DESC',
  ControllerIdentityLegalNameAsc = 'controllerIdentity_legalName_ASC',
  ControllerIdentityLegalNameDesc = 'controllerIdentity_legalName_DESC',
  ControllerIdentityRiotAsc = 'controllerIdentity_riot_ASC',
  ControllerIdentityRiotDesc = 'controllerIdentity_riot_DESC',
  ControllerIdentityTwitterAsc = 'controllerIdentity_twitter_ASC',
  ControllerIdentityTwitterDesc = 'controllerIdentity_twitter_DESC',
  ControllerAsc = 'controller_ASC',
  ControllerDesc = 'controller_DESC',
  CreatedAtBlockAsc = 'createdAtBlock_ASC',
  CreatedAtBlockDesc = 'createdAtBlock_DESC',
  CreatorIdentityAddressAsc = 'creatorIdentity_address_ASC',
  CreatorIdentityAddressDesc = 'creatorIdentity_address_DESC',
  CreatorIdentityDisplayNameAsc = 'creatorIdentity_displayName_ASC',
  CreatorIdentityDisplayNameDesc = 'creatorIdentity_displayName_DESC',
  CreatorIdentityEmailAsc = 'creatorIdentity_email_ASC',
  CreatorIdentityEmailDesc = 'creatorIdentity_email_DESC',
  CreatorIdentityIdAsc = 'creatorIdentity_id_ASC',
  CreatorIdentityIdDesc = 'creatorIdentity_id_DESC',
  CreatorIdentityImageAsc = 'creatorIdentity_image_ASC',
  CreatorIdentityImageDesc = 'creatorIdentity_image_DESC',
  CreatorIdentityLegalNameAsc = 'creatorIdentity_legalName_ASC',
  CreatorIdentityLegalNameDesc = 'creatorIdentity_legalName_DESC',
  CreatorIdentityRiotAsc = 'creatorIdentity_riot_ASC',
  CreatorIdentityRiotDesc = 'creatorIdentity_riot_DESC',
  CreatorIdentityTwitterAsc = 'creatorIdentity_twitter_ASC',
  CreatorIdentityTwitterDesc = 'creatorIdentity_twitter_DESC',
  CreatorAsc = 'creator_ASC',
  CreatorDesc = 'creator_DESC',
  FeeModelAsc = 'feeModel_ASC',
  FeeModelDesc = 'feeModel_DESC',
  FeeAsc = 'fee_ASC',
  FeeDesc = 'fee_DESC',
  GovAssetAsc = 'govAsset_ASC',
  GovAssetDesc = 'govAsset_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MemberLimitAsc = 'memberLimit_ASC',
  MemberLimitDesc = 'memberLimit_DESC',
  MetadataDescriptionAsc = 'metadata_description_ASC',
  MetadataDescriptionDesc = 'metadata_description_DESC',
  MetadataEmailAsc = 'metadata_email_ASC',
  MetadataEmailDesc = 'metadata_email_DESC',
  MetadataIdAsc = 'metadata_id_ASC',
  MetadataIdDesc = 'metadata_id_DESC',
  MetadataLogoAsc = 'metadata_logo_ASC',
  MetadataLogoDesc = 'metadata_logo_DESC',
  MetadataNameAsc = 'metadata_name_ASC',
  MetadataNameDesc = 'metadata_name_DESC',
  MetadataRepoAsc = 'metadata_repo_ASC',
  MetadataRepoDesc = 'metadata_repo_DESC',
  MetadataWebsiteAsc = 'metadata_website_ASC',
  MetadataWebsiteDesc = 'metadata_website_DESC',
  PayAssetAsc = 'payAsset_ASC',
  PayAssetDesc = 'payAsset_DESC',
  TreasuryIdentityAddressAsc = 'treasuryIdentity_address_ASC',
  TreasuryIdentityAddressDesc = 'treasuryIdentity_address_DESC',
  TreasuryIdentityDisplayNameAsc = 'treasuryIdentity_displayName_ASC',
  TreasuryIdentityDisplayNameDesc = 'treasuryIdentity_displayName_DESC',
  TreasuryIdentityEmailAsc = 'treasuryIdentity_email_ASC',
  TreasuryIdentityEmailDesc = 'treasuryIdentity_email_DESC',
  TreasuryIdentityIdAsc = 'treasuryIdentity_id_ASC',
  TreasuryIdentityIdDesc = 'treasuryIdentity_id_DESC',
  TreasuryIdentityImageAsc = 'treasuryIdentity_image_ASC',
  TreasuryIdentityImageDesc = 'treasuryIdentity_image_DESC',
  TreasuryIdentityLegalNameAsc = 'treasuryIdentity_legalName_ASC',
  TreasuryIdentityLegalNameDesc = 'treasuryIdentity_legalName_DESC',
  TreasuryIdentityRiotAsc = 'treasuryIdentity_riot_ASC',
  TreasuryIdentityRiotDesc = 'treasuryIdentity_riot_DESC',
  TreasuryIdentityTwitterAsc = 'treasuryIdentity_twitter_ASC',
  TreasuryIdentityTwitterDesc = 'treasuryIdentity_twitter_DESC',
  TreasuryAsc = 'treasury_ASC',
  TreasuryDesc = 'treasury_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type OrganizationWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<OrganizationWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<OrganizationWhereInput>>;
  readonly access_contains?: InputMaybe<Scalars['String']>;
  readonly access_endsWith?: InputMaybe<Scalars['String']>;
  readonly access_eq?: InputMaybe<Scalars['String']>;
  readonly access_gt?: InputMaybe<Scalars['String']>;
  readonly access_gte?: InputMaybe<Scalars['String']>;
  readonly access_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly access_lt?: InputMaybe<Scalars['String']>;
  readonly access_lte?: InputMaybe<Scalars['String']>;
  readonly access_not_contains?: InputMaybe<Scalars['String']>;
  readonly access_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly access_not_eq?: InputMaybe<Scalars['String']>;
  readonly access_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly access_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly access_startsWith?: InputMaybe<Scalars['String']>;
  readonly campaigns_every?: InputMaybe<CampaignWhereInput>;
  readonly campaigns_none?: InputMaybe<CampaignWhereInput>;
  readonly campaigns_some?: InputMaybe<CampaignWhereInput>;
  readonly controllerIdentity?: InputMaybe<IdentityWhereInput>;
  readonly controller_contains?: InputMaybe<Scalars['String']>;
  readonly controller_endsWith?: InputMaybe<Scalars['String']>;
  readonly controller_eq?: InputMaybe<Scalars['String']>;
  readonly controller_gt?: InputMaybe<Scalars['String']>;
  readonly controller_gte?: InputMaybe<Scalars['String']>;
  readonly controller_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly controller_lt?: InputMaybe<Scalars['String']>;
  readonly controller_lte?: InputMaybe<Scalars['String']>;
  readonly controller_not_contains?: InputMaybe<Scalars['String']>;
  readonly controller_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly controller_not_eq?: InputMaybe<Scalars['String']>;
  readonly controller_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly controller_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly controller_startsWith?: InputMaybe<Scalars['String']>;
  readonly createdAtBlock_eq?: InputMaybe<Scalars['Int']>;
  readonly createdAtBlock_gt?: InputMaybe<Scalars['Int']>;
  readonly createdAtBlock_gte?: InputMaybe<Scalars['Int']>;
  readonly createdAtBlock_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly createdAtBlock_lt?: InputMaybe<Scalars['Int']>;
  readonly createdAtBlock_lte?: InputMaybe<Scalars['Int']>;
  readonly createdAtBlock_not_eq?: InputMaybe<Scalars['Int']>;
  readonly createdAtBlock_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly creatorIdentity?: InputMaybe<IdentityWhereInput>;
  readonly creator_contains?: InputMaybe<Scalars['String']>;
  readonly creator_endsWith?: InputMaybe<Scalars['String']>;
  readonly creator_eq?: InputMaybe<Scalars['String']>;
  readonly creator_gt?: InputMaybe<Scalars['String']>;
  readonly creator_gte?: InputMaybe<Scalars['String']>;
  readonly creator_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly creator_lt?: InputMaybe<Scalars['String']>;
  readonly creator_lte?: InputMaybe<Scalars['String']>;
  readonly creator_not_contains?: InputMaybe<Scalars['String']>;
  readonly creator_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly creator_not_eq?: InputMaybe<Scalars['String']>;
  readonly creator_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly creator_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly creator_startsWith?: InputMaybe<Scalars['String']>;
  readonly feeModel_contains?: InputMaybe<Scalars['String']>;
  readonly feeModel_endsWith?: InputMaybe<Scalars['String']>;
  readonly feeModel_eq?: InputMaybe<Scalars['String']>;
  readonly feeModel_gt?: InputMaybe<Scalars['String']>;
  readonly feeModel_gte?: InputMaybe<Scalars['String']>;
  readonly feeModel_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly feeModel_lt?: InputMaybe<Scalars['String']>;
  readonly feeModel_lte?: InputMaybe<Scalars['String']>;
  readonly feeModel_not_contains?: InputMaybe<Scalars['String']>;
  readonly feeModel_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly feeModel_not_eq?: InputMaybe<Scalars['String']>;
  readonly feeModel_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly feeModel_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly feeModel_startsWith?: InputMaybe<Scalars['String']>;
  readonly fee_eq?: InputMaybe<Scalars['BigInt']>;
  readonly fee_gt?: InputMaybe<Scalars['BigInt']>;
  readonly fee_gte?: InputMaybe<Scalars['BigInt']>;
  readonly fee_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly fee_lt?: InputMaybe<Scalars['BigInt']>;
  readonly fee_lte?: InputMaybe<Scalars['BigInt']>;
  readonly fee_not_eq?: InputMaybe<Scalars['BigInt']>;
  readonly fee_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly govAsset_eq?: InputMaybe<Scalars['Int']>;
  readonly govAsset_gt?: InputMaybe<Scalars['Int']>;
  readonly govAsset_gte?: InputMaybe<Scalars['Int']>;
  readonly govAsset_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly govAsset_lt?: InputMaybe<Scalars['Int']>;
  readonly govAsset_lte?: InputMaybe<Scalars['Int']>;
  readonly govAsset_not_eq?: InputMaybe<Scalars['Int']>;
  readonly govAsset_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  readonly id_endsWith?: InputMaybe<Scalars['ID']>;
  readonly id_eq?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  readonly id_not_endsWith?: InputMaybe<Scalars['ID']>;
  readonly id_not_eq?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_startsWith?: InputMaybe<Scalars['ID']>;
  readonly id_startsWith?: InputMaybe<Scalars['ID']>;
  readonly memberLimit_eq?: InputMaybe<Scalars['BigInt']>;
  readonly memberLimit_gt?: InputMaybe<Scalars['BigInt']>;
  readonly memberLimit_gte?: InputMaybe<Scalars['BigInt']>;
  readonly memberLimit_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly memberLimit_lt?: InputMaybe<Scalars['BigInt']>;
  readonly memberLimit_lte?: InputMaybe<Scalars['BigInt']>;
  readonly memberLimit_not_eq?: InputMaybe<Scalars['BigInt']>;
  readonly memberLimit_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly members_every?: InputMaybe<OrganizationMemberWhereInput>;
  readonly members_none?: InputMaybe<OrganizationMemberWhereInput>;
  readonly members_some?: InputMaybe<OrganizationMemberWhereInput>;
  readonly metadata?: InputMaybe<OrganizationMetadataWhereInput>;
  readonly metadata_isNull?: InputMaybe<Scalars['Boolean']>;
  readonly payAsset_eq?: InputMaybe<Scalars['Int']>;
  readonly payAsset_gt?: InputMaybe<Scalars['Int']>;
  readonly payAsset_gte?: InputMaybe<Scalars['Int']>;
  readonly payAsset_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly payAsset_lt?: InputMaybe<Scalars['Int']>;
  readonly payAsset_lte?: InputMaybe<Scalars['Int']>;
  readonly payAsset_not_eq?: InputMaybe<Scalars['Int']>;
  readonly payAsset_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly treasuryIdentity?: InputMaybe<IdentityWhereInput>;
  readonly treasury_contains?: InputMaybe<Scalars['String']>;
  readonly treasury_endsWith?: InputMaybe<Scalars['String']>;
  readonly treasury_eq?: InputMaybe<Scalars['String']>;
  readonly treasury_gt?: InputMaybe<Scalars['String']>;
  readonly treasury_gte?: InputMaybe<Scalars['String']>;
  readonly treasury_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly treasury_lt?: InputMaybe<Scalars['String']>;
  readonly treasury_lte?: InputMaybe<Scalars['String']>;
  readonly treasury_not_contains?: InputMaybe<Scalars['String']>;
  readonly treasury_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly treasury_not_eq?: InputMaybe<Scalars['String']>;
  readonly treasury_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly treasury_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly treasury_startsWith?: InputMaybe<Scalars['String']>;
  readonly type_contains?: InputMaybe<Scalars['String']>;
  readonly type_endsWith?: InputMaybe<Scalars['String']>;
  readonly type_eq?: InputMaybe<Scalars['String']>;
  readonly type_gt?: InputMaybe<Scalars['String']>;
  readonly type_gte?: InputMaybe<Scalars['String']>;
  readonly type_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly type_lt?: InputMaybe<Scalars['String']>;
  readonly type_lte?: InputMaybe<Scalars['String']>;
  readonly type_not_contains?: InputMaybe<Scalars['String']>;
  readonly type_not_endsWith?: InputMaybe<Scalars['String']>;
  readonly type_not_eq?: InputMaybe<Scalars['String']>;
  readonly type_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly type_not_startsWith?: InputMaybe<Scalars['String']>;
  readonly type_startsWith?: InputMaybe<Scalars['String']>;
};

export type OrganizationWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type OrganizationsConnection = {
  readonly __typename?: 'OrganizationsConnection';
  readonly edges: ReadonlyArray<OrganizationEdge>;
  readonly pageInfo: PageInfo;
  readonly totalCount: Scalars['Int'];
};

export type PageInfo = {
  readonly __typename?: 'PageInfo';
  readonly endCursor: Scalars['String'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly startCursor: Scalars['String'];
};

export type ProposalFeatures = {
  readonly CREATE_GENERAL_PROPOSAL: Scalars['Boolean'];
  readonly CREATE_PROPOSAL: Scalars['Boolean'];
  readonly CREATE_PROPOSAL_RELATIVE_MAJORITY: Scalars['Boolean'];
  readonly CREATE_PROPOSAL_SIMPLE_MAJORITY: Scalars['Boolean'];
  readonly CREATE_SPENDING_PROPOSAL: Scalars['Boolean'];
  readonly CREATE_WITHDRAW_PROPOSAL: Scalars['Boolean'];
};

export type Query = {
  readonly __typename?: 'Query';
  readonly account?: Maybe<Account>;
  /** fetch data from the table: "base_themes" */
  readonly base_themes: ReadonlyArray<Base_Themes>;
  /** fetch data from the table: "base_themes" using primary key columns */
  readonly base_themes_by_pk?: Maybe<Base_Themes>;
  /** fetch data from the table: "bases" */
  readonly bases: ReadonlyArray<Bases>;
  /** fetch aggregated fields from the table: "bases" */
  readonly bases_aggregate: Bases_Aggregate;
  /** fetch data from the table: "bases" using primary key columns */
  readonly bases_by_pk?: Maybe<Bases>;
  readonly campaignById?: Maybe<Campaign>;
  /** @deprecated Use `campaignById` */
  readonly campaignByUniqueInput?: Maybe<Campaign>;
  readonly campaignContributorById?: Maybe<CampaignContributor>;
  /** @deprecated Use `campaignContributorById` */
  readonly campaignContributorByUniqueInput?: Maybe<CampaignContributor>;
  readonly campaignContributors: ReadonlyArray<CampaignContributor>;
  readonly campaignContributorsConnection: CampaignContributorsConnection;
  readonly campaignMetadata: ReadonlyArray<CampaignMetadata>;
  readonly campaignMetadataById?: Maybe<CampaignMetadata>;
  /** @deprecated Use `campaignMetadataById` */
  readonly campaignMetadataByUniqueInput?: Maybe<CampaignMetadata>;
  readonly campaignMetadataConnection: CampaignMetadataConnection;
  readonly campaigns: ReadonlyArray<Campaign>;
  readonly campaignsConnection: CampaignsConnection;
  /** An array relationship */
  readonly changes: ReadonlyArray<Changes>;
  /** An aggregate relationship */
  readonly changes_aggregate: Changes_Aggregate;
  /** fetch data from the table: "changes" using primary key columns */
  readonly changes_by_pk?: Maybe<Changes>;
  /** An array relationship */
  readonly changes_collection: ReadonlyArray<Changes_Collection>;
  /** fetch data from the table: "changes_collection" using primary key columns */
  readonly changes_collection_by_pk?: Maybe<Changes_Collection>;
  /** fetch data from the table: "collection_banners" */
  readonly collection_banners: ReadonlyArray<Collection_Banners>;
  /** fetch data from the table: "collection_banners" using primary key columns */
  readonly collection_banners_by_pk?: Maybe<Collection_Banners>;
  /** fetch data from the table: "collections" */
  readonly collections: ReadonlyArray<Collections>;
  /** fetch aggregated fields from the table: "collections" */
  readonly collections_aggregate: Collections_Aggregate;
  /** fetch data from the table: "collections" using primary key columns */
  readonly collections_by_pk?: Maybe<Collections>;
  readonly config: Config;
  readonly displayValues?: Maybe<DisplayValues>;
  /** fetch data from the table: "distinct_kanaria_nfts" */
  readonly distinct_kanaria_nfts: ReadonlyArray<Distinct_Kanaria_Nfts>;
  /** fetch aggregated fields from the table: "distinct_kanaria_nfts" */
  readonly distinct_kanaria_nfts_aggregate: Distinct_Kanaria_Nfts_Aggregate;
  /** fetch data from the table: "distinct_nfts" */
  readonly distinct_nfts: ReadonlyArray<Distinct_Nfts>;
  /** fetch aggregated fields from the table: "distinct_nfts" */
  readonly distinct_nfts_aggregate: Distinct_Nfts_Aggregate;
  /** fetch data from the table: "dutchie" */
  readonly dutchie: ReadonlyArray<Dutchie>;
  /** fetch data from the table: "dutchie" using primary key columns */
  readonly dutchie_by_pk?: Maybe<Dutchie>;
  readonly features: Features;
  /** fetch data from the table: "gems_enabled" */
  readonly gems_enabled: ReadonlyArray<Gems_Enabled>;
  /** fetch data from the table: "gems_enabled" using primary key columns */
  readonly gems_enabled_by_pk?: Maybe<Gems_Enabled>;
  /** execute function "get_by_unicode" which returns "reactions" */
  readonly get_by_unicode: ReadonlyArray<Reactions>;
  /** execute function "get_by_unicode" and query aggregates on result of table type "reactions" */
  readonly get_by_unicode_aggregate: Reactions_Aggregate;
  /** execute function "get_newly_listed" which returns "nfts" */
  readonly get_newly_listed: ReadonlyArray<Nfts>;
  /** execute function "get_newly_listed" and query aggregates on result of table type "nfts" */
  readonly get_newly_listed_aggregate: Nfts_Aggregate;
  /** execute function "get_newly_minted" which returns "nfts" */
  readonly get_newly_minted: ReadonlyArray<Nfts>;
  /** execute function "get_newly_minted" and query aggregates on result of table type "nfts" */
  readonly get_newly_minted_aggregate: Nfts_Aggregate;
  /** execute function "get_ordered_changes_stats" which returns "changes" */
  readonly get_ordered_changes_stats: ReadonlyArray<Changes>;
  /** execute function "get_ordered_changes_stats" and query aggregates on result of table type "changes" */
  readonly get_ordered_changes_stats_aggregate: Changes_Aggregate;
  /** fetch data from the table: "hatched_birds" */
  readonly hatched_birds: ReadonlyArray<Hatched_Birds>;
  /** fetch data from the table: "hatched_birds" using primary key columns */
  readonly hatched_birds_by_pk?: Maybe<Hatched_Birds>;
  readonly identities: ReadonlyArray<Identity>;
  readonly identitiesConnection: IdentitiesConnection;
  readonly identityById?: Maybe<Identity>;
  /** @deprecated Use `identityById` */
  readonly identityByUniqueInput?: Maybe<Identity>;
  readonly links: ReadonlyArray<Maybe<Link>>;
  /** An array relationship */
  readonly nfts: ReadonlyArray<Nfts>;
  /** An aggregate relationship */
  readonly nfts_aggregate: Nfts_Aggregate;
  /** fetch data from the table: "nfts" using primary key columns */
  readonly nfts_by_pk?: Maybe<Nfts>;
  /** fetch data from the table: "nfts_reactions_stats" */
  readonly nfts_reactions_stats: ReadonlyArray<Nfts_Reactions_Stats>;
  /** fetch aggregated fields from the table: "nfts_reactions_stats" */
  readonly nfts_reactions_stats_aggregate: Nfts_Reactions_Stats_Aggregate;
  /** fetch data from the table: "nfts_stats" */
  readonly nfts_stats: ReadonlyArray<Nfts_Stats>;
  /** fetch aggregated fields from the table: "nfts_stats" */
  readonly nfts_stats_aggregate: Nfts_Stats_Aggregate;
  readonly organizationById?: Maybe<Organization>;
  /** @deprecated Use `organizationById` */
  readonly organizationByUniqueInput?: Maybe<Organization>;
  readonly organizationMemberById?: Maybe<OrganizationMember>;
  /** @deprecated Use `organizationMemberById` */
  readonly organizationMemberByUniqueInput?: Maybe<OrganizationMember>;
  readonly organizationMembers: ReadonlyArray<OrganizationMember>;
  readonly organizationMembersConnection: OrganizationMembersConnection;
  readonly organizationMetadata: ReadonlyArray<OrganizationMetadata>;
  readonly organizationMetadataById?: Maybe<OrganizationMetadata>;
  /** @deprecated Use `organizationMetadataById` */
  readonly organizationMetadataByUniqueInput?: Maybe<OrganizationMetadata>;
  readonly organizationMetadataConnection: OrganizationMetadataConnection;
  readonly organizations: ReadonlyArray<Organization>;
  readonly organizationsConnection: OrganizationsConnection;
  /** An array relationship */
  readonly parts: ReadonlyArray<Parts>;
  /** An aggregate relationship */
  readonly parts_aggregate: Parts_Aggregate;
  /** fetch data from the table: "parts" using primary key columns */
  readonly parts_by_pk?: Maybe<Parts>;
  /** fetch data from the table: "reactions" */
  readonly reactions: ReadonlyArray<Reactions>;
  /** fetch aggregated fields from the table: "reactions" */
  readonly reactions_aggregate: Reactions_Aggregate;
  /** fetch data from the table: "reactions" using primary key columns */
  readonly reactions_by_pk?: Maybe<Reactions>;
  /** An array relationship */
  readonly reactions_unicode: ReadonlyArray<Reactions_Unicode>;
  /** An aggregate relationship */
  readonly reactions_unicode_aggregate: Reactions_Unicode_Aggregate;
  /** fetch data from the table: "reactions_users" */
  readonly reactions_users: ReadonlyArray<Reactions_Users>;
  /** fetch aggregated fields from the table: "reactions_users" */
  readonly reactions_users_aggregate: Reactions_Users_Aggregate;
  /** fetch data from the table: "recently_listed" */
  readonly recently_listed: ReadonlyArray<Recently_Listed>;
  /** fetch aggregated fields from the table: "recently_listed" */
  readonly recently_listed_aggregate: Recently_Listed_Aggregate;
  /** An array relationship */
  readonly resources: ReadonlyArray<Resources>;
  /** An aggregate relationship */
  readonly resources_aggregate: Resources_Aggregate;
  /** An array relationship */
  readonly resources_base_themes: ReadonlyArray<Resources_Base_Themes>;
  /** fetch data from the table: "resources_base_themes" using primary key columns */
  readonly resources_base_themes_by_pk?: Maybe<Resources_Base_Themes>;
  /** fetch data from the table: "resources" using primary key columns */
  readonly resources_by_pk?: Maybe<Resources>;
  /** An array relationship */
  readonly resources_parts: ReadonlyArray<Resources_Parts>;
  /** An aggregate relationship */
  readonly resources_parts_aggregate: Resources_Parts_Aggregate;
  /** fetch data from the table: "resources_parts" using primary key columns */
  readonly resources_parts_by_pk?: Maybe<Resources_Parts>;
  /** fetch data from the table: "sales" */
  readonly sales: ReadonlyArray<Sales>;
  /** An array relationship */
  readonly singular_blacklisted_accounts: ReadonlyArray<Singular_Blacklisted_Accounts>;
  /** fetch data from the table: "singular_blacklisted_accounts" using primary key columns */
  readonly singular_blacklisted_accounts_by_pk?: Maybe<Singular_Blacklisted_Accounts>;
  /** An array relationship */
  readonly singular_blacklisted_collections: ReadonlyArray<Singular_Blacklisted_Collections>;
  /** fetch data from the table: "singular_blacklisted_collections" using primary key columns */
  readonly singular_blacklisted_collections_by_pk?: Maybe<Singular_Blacklisted_Collections>;
  /** An array relationship */
  readonly singular_curated: ReadonlyArray<Singular_Curated>;
  /** An aggregate relationship */
  readonly singular_curated_aggregate: Singular_Curated_Aggregate;
  /** fetch data from the table: "singular_curated" using primary key columns */
  readonly singular_curated_by_pk?: Maybe<Singular_Curated>;
  /** fetch data from the table: "singular_curated_collections" */
  readonly singular_curated_collections: ReadonlyArray<Singular_Curated_Collections>;
  /** fetch aggregated fields from the table: "singular_curated_collections" */
  readonly singular_curated_collections_aggregate: Singular_Curated_Collections_Aggregate;
  /** fetch data from the table: "singular_curated_collections" using primary key columns */
  readonly singular_curated_collections_by_pk?: Maybe<Singular_Curated_Collections>;
  /** fetch data from the table: "singular_hidden_collections" */
  readonly singular_hidden_collections: ReadonlyArray<Singular_Hidden_Collections>;
  /** fetch data from the table: "singular_hidden_collections" using primary key columns */
  readonly singular_hidden_collections_by_pk?: Maybe<Singular_Hidden_Collections>;
  /** An array relationship */
  readonly singular_nsfw_collections: ReadonlyArray<Singular_Nsfw_Collections>;
  /** An aggregate relationship */
  readonly singular_nsfw_collections_aggregate: Singular_Nsfw_Collections_Aggregate;
  /** fetch data from the table: "singular_nsfw_collections" using primary key columns */
  readonly singular_nsfw_collections_by_pk?: Maybe<Singular_Nsfw_Collections>;
  /** fetch data from the table: "singular_nsfw_nfts" */
  readonly singular_nsfw_nfts: ReadonlyArray<Singular_Nsfw_Nfts>;
  /** fetch aggregated fields from the table: "singular_nsfw_nfts" */
  readonly singular_nsfw_nfts_aggregate: Singular_Nsfw_Nfts_Aggregate;
  /** fetch data from the table: "singular_nsfw_nfts" using primary key columns */
  readonly singular_nsfw_nfts_by_pk?: Maybe<Singular_Nsfw_Nfts>;
  /** An array relationship */
  readonly singular_verified_collections: ReadonlyArray<Singular_Verified_Collections>;
  /** An aggregate relationship */
  readonly singular_verified_collections_aggregate: Singular_Verified_Collections_Aggregate;
  /** fetch data from the table: "singular_verified_collections" using primary key columns */
  readonly singular_verified_collections_by_pk?: Maybe<Singular_Verified_Collections>;
  /** fetch data from the table: "system" */
  readonly system: ReadonlyArray<System>;
  /** fetch data from the table: "system" using primary key columns */
  readonly system_by_pk?: Maybe<System>;
  readonly version: Scalars['String'];
  /** fetch data from the table: "yuletide_item_track" */
  readonly yuletide_item_track: ReadonlyArray<Yuletide_Item_Track>;
  /** fetch aggregated fields from the table: "yuletide_item_track" */
  readonly yuletide_item_track_aggregate: Yuletide_Item_Track_Aggregate;
  /** fetch data from the table: "yuletide_item_track" using primary key columns */
  readonly yuletide_item_track_by_pk?: Maybe<Yuletide_Item_Track>;
};


export type QueryAccountArgs = {
  address: Scalars['String'];
};


export type QueryBase_ThemesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Base_Themes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Base_Themes_Order_By>>;
  where?: InputMaybe<Base_Themes_Bool_Exp>;
};


export type QueryBase_Themes_By_PkArgs = {
  id: Scalars['String'];
};


export type QueryBasesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Bases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Bases_Order_By>>;
  where?: InputMaybe<Bases_Bool_Exp>;
};


export type QueryBases_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Bases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Bases_Order_By>>;
  where?: InputMaybe<Bases_Bool_Exp>;
};


export type QueryBases_By_PkArgs = {
  id: Scalars['String'];
};


export type QueryCampaignByIdArgs = {
  id: Scalars['ID'];
};


export type QueryCampaignByUniqueInputArgs = {
  where: CampaignWhereUniqueInput;
};


export type QueryCampaignContributorByIdArgs = {
  id: Scalars['ID'];
};


export type QueryCampaignContributorByUniqueInputArgs = {
  where: CampaignContributorWhereUniqueInput;
};


export type QueryCampaignContributorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<InputMaybe<CampaignContributorOrderByInput>>>;
  where?: InputMaybe<CampaignContributorWhereInput>;
};


export type QueryCampaignContributorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: ReadonlyArray<CampaignContributorOrderByInput>;
  where?: InputMaybe<CampaignContributorWhereInput>;
};


export type QueryCampaignMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<InputMaybe<CampaignMetadataOrderByInput>>>;
  where?: InputMaybe<CampaignMetadataWhereInput>;
};


export type QueryCampaignMetadataByIdArgs = {
  id: Scalars['ID'];
};


export type QueryCampaignMetadataByUniqueInputArgs = {
  where: CampaignMetadataWhereUniqueInput;
};


export type QueryCampaignMetadataConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: ReadonlyArray<CampaignMetadataOrderByInput>;
  where?: InputMaybe<CampaignMetadataWhereInput>;
};


export type QueryCampaignsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<InputMaybe<CampaignOrderByInput>>>;
  where?: InputMaybe<CampaignWhereInput>;
};


export type QueryCampaignsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: ReadonlyArray<CampaignOrderByInput>;
  where?: InputMaybe<CampaignWhereInput>;
};


export type QueryChangesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>;
  where?: InputMaybe<Changes_Bool_Exp>;
};


export type QueryChanges_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>;
  where?: InputMaybe<Changes_Bool_Exp>;
};


export type QueryChanges_By_PkArgs = {
  id: Scalars['Int'];
};


export type QueryChanges_CollectionArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Changes_Collection_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Changes_Collection_Order_By>>;
  where?: InputMaybe<Changes_Collection_Bool_Exp>;
};


export type QueryChanges_Collection_By_PkArgs = {
  id: Scalars['Int'];
};


export type QueryCollection_BannersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Collection_Banners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Collection_Banners_Order_By>>;
  where?: InputMaybe<Collection_Banners_Bool_Exp>;
};


export type QueryCollection_Banners_By_PkArgs = {
  collection_id: Scalars['String'];
};


export type QueryCollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type QueryCollections_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type QueryCollections_By_PkArgs = {
  id: Scalars['String'];
};


export type QueryConfigArgs = {
  env: Environment;
};


export type QueryDistinct_Kanaria_NftsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Order_By>>;
  where?: InputMaybe<Distinct_Kanaria_Nfts_Bool_Exp>;
};


export type QueryDistinct_Kanaria_Nfts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Order_By>>;
  where?: InputMaybe<Distinct_Kanaria_Nfts_Bool_Exp>;
};


export type QueryDistinct_NftsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Distinct_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Distinct_Nfts_Order_By>>;
  where?: InputMaybe<Distinct_Nfts_Bool_Exp>;
};


export type QueryDistinct_Nfts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Distinct_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Distinct_Nfts_Order_By>>;
  where?: InputMaybe<Distinct_Nfts_Bool_Exp>;
};


export type QueryDutchieArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Dutchie_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Dutchie_Order_By>>;
  where?: InputMaybe<Dutchie_Bool_Exp>;
};


export type QueryDutchie_By_PkArgs = {
  id: Scalars['Int'];
};


export type QueryFeaturesArgs = {
  env: Environment;
};


export type QueryGems_EnabledArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Gems_Enabled_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Gems_Enabled_Order_By>>;
  where?: InputMaybe<Gems_Enabled_Bool_Exp>;
};


export type QueryGems_Enabled_By_PkArgs = {
  id: Scalars['String'];
};


export type QueryGet_By_UnicodeArgs = {
  args: Get_By_Unicode_Args;
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


export type QueryGet_By_Unicode_AggregateArgs = {
  args: Get_By_Unicode_Args;
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


export type QueryGet_Newly_ListedArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


export type QueryGet_Newly_Listed_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


export type QueryGet_Newly_MintedArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


export type QueryGet_Newly_Minted_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


export type QueryGet_Ordered_Changes_StatsArgs = {
  args: Get_Ordered_Changes_Stats_Args;
  distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>;
  where?: InputMaybe<Changes_Bool_Exp>;
};


export type QueryGet_Ordered_Changes_Stats_AggregateArgs = {
  args: Get_Ordered_Changes_Stats_Args;
  distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>;
  where?: InputMaybe<Changes_Bool_Exp>;
};


export type QueryHatched_BirdsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Hatched_Birds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Hatched_Birds_Order_By>>;
  where?: InputMaybe<Hatched_Birds_Bool_Exp>;
};


export type QueryHatched_Birds_By_PkArgs = {
  id: Scalars['String'];
};


export type QueryIdentitiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<InputMaybe<IdentityOrderByInput>>>;
  where?: InputMaybe<IdentityWhereInput>;
};


export type QueryIdentitiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: ReadonlyArray<IdentityOrderByInput>;
  where?: InputMaybe<IdentityWhereInput>;
};


export type QueryIdentityByIdArgs = {
  id: Scalars['ID'];
};


export type QueryIdentityByUniqueInputArgs = {
  where: IdentityWhereUniqueInput;
};


export type QueryNftsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


export type QueryNfts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


export type QueryNfts_By_PkArgs = {
  id: Scalars['String'];
};


export type QueryNfts_Reactions_StatsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Order_By>>;
  where?: InputMaybe<Nfts_Reactions_Stats_Bool_Exp>;
};


export type QueryNfts_Reactions_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Order_By>>;
  where?: InputMaybe<Nfts_Reactions_Stats_Bool_Exp>;
};


export type QueryNfts_StatsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Stats_Order_By>>;
  where?: InputMaybe<Nfts_Stats_Bool_Exp>;
};


export type QueryNfts_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Stats_Order_By>>;
  where?: InputMaybe<Nfts_Stats_Bool_Exp>;
};


export type QueryOrganizationByIdArgs = {
  id: Scalars['ID'];
};


export type QueryOrganizationByUniqueInputArgs = {
  where: OrganizationWhereUniqueInput;
};


export type QueryOrganizationMemberByIdArgs = {
  id: Scalars['ID'];
};


export type QueryOrganizationMemberByUniqueInputArgs = {
  where: OrganizationMemberWhereUniqueInput;
};


export type QueryOrganizationMembersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<InputMaybe<OrganizationMemberOrderByInput>>>;
  where?: InputMaybe<OrganizationMemberWhereInput>;
};


export type QueryOrganizationMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: ReadonlyArray<OrganizationMemberOrderByInput>;
  where?: InputMaybe<OrganizationMemberWhereInput>;
};


export type QueryOrganizationMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<InputMaybe<OrganizationMetadataOrderByInput>>>;
  where?: InputMaybe<OrganizationMetadataWhereInput>;
};


export type QueryOrganizationMetadataByIdArgs = {
  id: Scalars['ID'];
};


export type QueryOrganizationMetadataByUniqueInputArgs = {
  where: OrganizationMetadataWhereUniqueInput;
};


export type QueryOrganizationMetadataConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: ReadonlyArray<OrganizationMetadataOrderByInput>;
  where?: InputMaybe<OrganizationMetadataWhereInput>;
};


export type QueryOrganizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<InputMaybe<OrganizationOrderByInput>>>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryOrganizationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: ReadonlyArray<OrganizationOrderByInput>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryPartsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Parts_Order_By>>;
  where?: InputMaybe<Parts_Bool_Exp>;
};


export type QueryParts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Parts_Order_By>>;
  where?: InputMaybe<Parts_Bool_Exp>;
};


export type QueryParts_By_PkArgs = {
  id: Scalars['String'];
};


export type QueryReactionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


export type QueryReactions_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


export type QueryReactions_By_PkArgs = {
  nft_id: Scalars['String'];
  owner: Scalars['String'];
  unicode: Scalars['String'];
};


export type QueryReactions_UnicodeArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Unicode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Unicode_Order_By>>;
  where?: InputMaybe<Reactions_Unicode_Bool_Exp>;
};


export type QueryReactions_Unicode_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Unicode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Unicode_Order_By>>;
  where?: InputMaybe<Reactions_Unicode_Bool_Exp>;
};


export type QueryReactions_UsersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Users_Order_By>>;
  where?: InputMaybe<Reactions_Users_Bool_Exp>;
};


export type QueryReactions_Users_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Users_Order_By>>;
  where?: InputMaybe<Reactions_Users_Bool_Exp>;
};


export type QueryRecently_ListedArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Recently_Listed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Recently_Listed_Order_By>>;
  where?: InputMaybe<Recently_Listed_Bool_Exp>;
};


export type QueryRecently_Listed_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Recently_Listed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Recently_Listed_Order_By>>;
  where?: InputMaybe<Recently_Listed_Bool_Exp>;
};


export type QueryResourcesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type QueryResources_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type QueryResources_Base_ThemesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Order_By>>;
  where?: InputMaybe<Resources_Base_Themes_Bool_Exp>;
};


export type QueryResources_Base_Themes_By_PkArgs = {
  resource_id: Scalars['String'];
  theme_id: Scalars['String'];
};


export type QueryResources_By_PkArgs = {
  id: Scalars['String'];
};


export type QueryResources_PartsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Parts_Order_By>>;
  where?: InputMaybe<Resources_Parts_Bool_Exp>;
};


export type QueryResources_Parts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Parts_Order_By>>;
  where?: InputMaybe<Resources_Parts_Bool_Exp>;
};


export type QueryResources_Parts_By_PkArgs = {
  part_id: Scalars['String'];
  resource_id: Scalars['String'];
};


export type QuerySalesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Sales_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Sales_Order_By>>;
  where?: InputMaybe<Sales_Bool_Exp>;
};


export type QuerySingular_Blacklisted_AccountsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Order_By>>;
  where?: InputMaybe<Singular_Blacklisted_Accounts_Bool_Exp>;
};


export type QuerySingular_Blacklisted_Accounts_By_PkArgs = {
  account: Scalars['String'];
};


export type QuerySingular_Blacklisted_CollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Order_By>>;
  where?: InputMaybe<Singular_Blacklisted_Collections_Bool_Exp>;
};


export type QuerySingular_Blacklisted_Collections_By_PkArgs = {
  collection_id: Scalars['String'];
};


export type QuerySingular_CuratedArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>;
  where?: InputMaybe<Singular_Curated_Bool_Exp>;
};


export type QuerySingular_Curated_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>;
  where?: InputMaybe<Singular_Curated_Bool_Exp>;
};


export type QuerySingular_Curated_By_PkArgs = {
  nft_id: Scalars['String'];
};


export type QuerySingular_Curated_CollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Order_By>>;
  where?: InputMaybe<Singular_Curated_Collections_Bool_Exp>;
};


export type QuerySingular_Curated_Collections_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Order_By>>;
  where?: InputMaybe<Singular_Curated_Collections_Bool_Exp>;
};


export type QuerySingular_Curated_Collections_By_PkArgs = {
  collection_id: Scalars['String'];
};


export type QuerySingular_Hidden_CollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Hidden_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Hidden_Collections_Order_By>>;
  where?: InputMaybe<Singular_Hidden_Collections_Bool_Exp>;
};


export type QuerySingular_Hidden_Collections_By_PkArgs = {
  collection_id: Scalars['String'];
};


export type QuerySingular_Nsfw_CollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Order_By>>;
  where?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>;
};


export type QuerySingular_Nsfw_Collections_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Order_By>>;
  where?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>;
};


export type QuerySingular_Nsfw_Collections_By_PkArgs = {
  collection_id: Scalars['String'];
};


export type QuerySingular_Nsfw_NftsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>;
  where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>;
};


export type QuerySingular_Nsfw_Nfts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>;
  where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>;
};


export type QuerySingular_Nsfw_Nfts_By_PkArgs = {
  nft_id: Scalars['String'];
};


export type QuerySingular_Verified_CollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Order_By>>;
  where?: InputMaybe<Singular_Verified_Collections_Bool_Exp>;
};


export type QuerySingular_Verified_Collections_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Order_By>>;
  where?: InputMaybe<Singular_Verified_Collections_Bool_Exp>;
};


export type QuerySingular_Verified_Collections_By_PkArgs = {
  collection_id: Scalars['String'];
};


export type QuerySystemArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<System_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<System_Order_By>>;
  where?: InputMaybe<System_Bool_Exp>;
};


export type QuerySystem_By_PkArgs = {
  purchaseEnabled: Scalars['Boolean'];
};


export type QueryYuletide_Item_TrackArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Order_By>>;
  where?: InputMaybe<Yuletide_Item_Track_Bool_Exp>;
};


export type QueryYuletide_Item_Track_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Order_By>>;
  where?: InputMaybe<Yuletide_Item_Track_Bool_Exp>;
};


export type QueryYuletide_Item_Track_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['String']>;
  readonly _gt?: InputMaybe<Scalars['String']>;
  readonly _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  readonly _ilike?: InputMaybe<Scalars['String']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  readonly _iregex?: InputMaybe<Scalars['String']>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  readonly _like?: InputMaybe<Scalars['String']>;
  readonly _lt?: InputMaybe<Scalars['String']>;
  readonly _lte?: InputMaybe<Scalars['String']>;
  readonly _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  readonly _nilike?: InputMaybe<Scalars['String']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  readonly _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  readonly _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  readonly _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  readonly _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  readonly _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  readonly _similar?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  /** fetch data from the table: "base_themes" */
  readonly base_themes: ReadonlyArray<Base_Themes>;
  /** fetch data from the table: "base_themes" using primary key columns */
  readonly base_themes_by_pk?: Maybe<Base_Themes>;
  /** fetch data from the table: "bases" */
  readonly bases: ReadonlyArray<Bases>;
  /** fetch aggregated fields from the table: "bases" */
  readonly bases_aggregate: Bases_Aggregate;
  /** fetch data from the table: "bases" using primary key columns */
  readonly bases_by_pk?: Maybe<Bases>;
  /** An array relationship */
  readonly changes: ReadonlyArray<Changes>;
  /** An aggregate relationship */
  readonly changes_aggregate: Changes_Aggregate;
  /** fetch data from the table: "changes" using primary key columns */
  readonly changes_by_pk?: Maybe<Changes>;
  /** An array relationship */
  readonly changes_collection: ReadonlyArray<Changes_Collection>;
  /** fetch data from the table: "changes_collection" using primary key columns */
  readonly changes_collection_by_pk?: Maybe<Changes_Collection>;
  /** fetch data from the table: "collection_banners" */
  readonly collection_banners: ReadonlyArray<Collection_Banners>;
  /** fetch data from the table: "collection_banners" using primary key columns */
  readonly collection_banners_by_pk?: Maybe<Collection_Banners>;
  /** fetch data from the table: "collections" */
  readonly collections: ReadonlyArray<Collections>;
  /** fetch aggregated fields from the table: "collections" */
  readonly collections_aggregate: Collections_Aggregate;
  /** fetch data from the table: "collections" using primary key columns */
  readonly collections_by_pk?: Maybe<Collections>;
  /** fetch data from the table: "distinct_kanaria_nfts" */
  readonly distinct_kanaria_nfts: ReadonlyArray<Distinct_Kanaria_Nfts>;
  /** fetch aggregated fields from the table: "distinct_kanaria_nfts" */
  readonly distinct_kanaria_nfts_aggregate: Distinct_Kanaria_Nfts_Aggregate;
  /** fetch data from the table: "distinct_nfts" */
  readonly distinct_nfts: ReadonlyArray<Distinct_Nfts>;
  /** fetch aggregated fields from the table: "distinct_nfts" */
  readonly distinct_nfts_aggregate: Distinct_Nfts_Aggregate;
  /** fetch data from the table: "dutchie" */
  readonly dutchie: ReadonlyArray<Dutchie>;
  /** fetch data from the table: "dutchie" using primary key columns */
  readonly dutchie_by_pk?: Maybe<Dutchie>;
  /** fetch data from the table: "gems_enabled" */
  readonly gems_enabled: ReadonlyArray<Gems_Enabled>;
  /** fetch data from the table: "gems_enabled" using primary key columns */
  readonly gems_enabled_by_pk?: Maybe<Gems_Enabled>;
  /** execute function "get_by_unicode" which returns "reactions" */
  readonly get_by_unicode: ReadonlyArray<Reactions>;
  /** execute function "get_by_unicode" and query aggregates on result of table type "reactions" */
  readonly get_by_unicode_aggregate: Reactions_Aggregate;
  /** execute function "get_newly_listed" which returns "nfts" */
  readonly get_newly_listed: ReadonlyArray<Nfts>;
  /** execute function "get_newly_listed" and query aggregates on result of table type "nfts" */
  readonly get_newly_listed_aggregate: Nfts_Aggregate;
  /** execute function "get_newly_minted" which returns "nfts" */
  readonly get_newly_minted: ReadonlyArray<Nfts>;
  /** execute function "get_newly_minted" and query aggregates on result of table type "nfts" */
  readonly get_newly_minted_aggregate: Nfts_Aggregate;
  /** execute function "get_ordered_changes_stats" which returns "changes" */
  readonly get_ordered_changes_stats: ReadonlyArray<Changes>;
  /** execute function "get_ordered_changes_stats" and query aggregates on result of table type "changes" */
  readonly get_ordered_changes_stats_aggregate: Changes_Aggregate;
  /** fetch data from the table: "hatched_birds" */
  readonly hatched_birds: ReadonlyArray<Hatched_Birds>;
  /** fetch data from the table: "hatched_birds" using primary key columns */
  readonly hatched_birds_by_pk?: Maybe<Hatched_Birds>;
  /** An array relationship */
  readonly nfts: ReadonlyArray<Nfts>;
  /** An aggregate relationship */
  readonly nfts_aggregate: Nfts_Aggregate;
  /** fetch data from the table: "nfts" using primary key columns */
  readonly nfts_by_pk?: Maybe<Nfts>;
  /** fetch data from the table: "nfts_reactions_stats" */
  readonly nfts_reactions_stats: ReadonlyArray<Nfts_Reactions_Stats>;
  /** fetch aggregated fields from the table: "nfts_reactions_stats" */
  readonly nfts_reactions_stats_aggregate: Nfts_Reactions_Stats_Aggregate;
  /** fetch data from the table: "nfts_stats" */
  readonly nfts_stats: ReadonlyArray<Nfts_Stats>;
  /** fetch aggregated fields from the table: "nfts_stats" */
  readonly nfts_stats_aggregate: Nfts_Stats_Aggregate;
  /** An array relationship */
  readonly parts: ReadonlyArray<Parts>;
  /** An aggregate relationship */
  readonly parts_aggregate: Parts_Aggregate;
  /** fetch data from the table: "parts" using primary key columns */
  readonly parts_by_pk?: Maybe<Parts>;
  /** fetch data from the table: "reactions" */
  readonly reactions: ReadonlyArray<Reactions>;
  /** fetch aggregated fields from the table: "reactions" */
  readonly reactions_aggregate: Reactions_Aggregate;
  /** fetch data from the table: "reactions" using primary key columns */
  readonly reactions_by_pk?: Maybe<Reactions>;
  /** An array relationship */
  readonly reactions_unicode: ReadonlyArray<Reactions_Unicode>;
  /** An aggregate relationship */
  readonly reactions_unicode_aggregate: Reactions_Unicode_Aggregate;
  /** fetch data from the table: "reactions_users" */
  readonly reactions_users: ReadonlyArray<Reactions_Users>;
  /** fetch aggregated fields from the table: "reactions_users" */
  readonly reactions_users_aggregate: Reactions_Users_Aggregate;
  /** fetch data from the table: "recently_listed" */
  readonly recently_listed: ReadonlyArray<Recently_Listed>;
  /** fetch aggregated fields from the table: "recently_listed" */
  readonly recently_listed_aggregate: Recently_Listed_Aggregate;
  /** An array relationship */
  readonly resources: ReadonlyArray<Resources>;
  /** An aggregate relationship */
  readonly resources_aggregate: Resources_Aggregate;
  /** An array relationship */
  readonly resources_base_themes: ReadonlyArray<Resources_Base_Themes>;
  /** fetch data from the table: "resources_base_themes" using primary key columns */
  readonly resources_base_themes_by_pk?: Maybe<Resources_Base_Themes>;
  /** fetch data from the table: "resources" using primary key columns */
  readonly resources_by_pk?: Maybe<Resources>;
  /** An array relationship */
  readonly resources_parts: ReadonlyArray<Resources_Parts>;
  /** An aggregate relationship */
  readonly resources_parts_aggregate: Resources_Parts_Aggregate;
  /** fetch data from the table: "resources_parts" using primary key columns */
  readonly resources_parts_by_pk?: Maybe<Resources_Parts>;
  /** fetch data from the table: "sales" */
  readonly sales: ReadonlyArray<Sales>;
  /** An array relationship */
  readonly singular_blacklisted_accounts: ReadonlyArray<Singular_Blacklisted_Accounts>;
  /** fetch data from the table: "singular_blacklisted_accounts" using primary key columns */
  readonly singular_blacklisted_accounts_by_pk?: Maybe<Singular_Blacklisted_Accounts>;
  /** An array relationship */
  readonly singular_blacklisted_collections: ReadonlyArray<Singular_Blacklisted_Collections>;
  /** fetch data from the table: "singular_blacklisted_collections" using primary key columns */
  readonly singular_blacklisted_collections_by_pk?: Maybe<Singular_Blacklisted_Collections>;
  /** An array relationship */
  readonly singular_curated: ReadonlyArray<Singular_Curated>;
  /** An aggregate relationship */
  readonly singular_curated_aggregate: Singular_Curated_Aggregate;
  /** fetch data from the table: "singular_curated" using primary key columns */
  readonly singular_curated_by_pk?: Maybe<Singular_Curated>;
  /** fetch data from the table: "singular_curated_collections" */
  readonly singular_curated_collections: ReadonlyArray<Singular_Curated_Collections>;
  /** fetch aggregated fields from the table: "singular_curated_collections" */
  readonly singular_curated_collections_aggregate: Singular_Curated_Collections_Aggregate;
  /** fetch data from the table: "singular_curated_collections" using primary key columns */
  readonly singular_curated_collections_by_pk?: Maybe<Singular_Curated_Collections>;
  /** fetch data from the table: "singular_hidden_collections" */
  readonly singular_hidden_collections: ReadonlyArray<Singular_Hidden_Collections>;
  /** fetch data from the table: "singular_hidden_collections" using primary key columns */
  readonly singular_hidden_collections_by_pk?: Maybe<Singular_Hidden_Collections>;
  /** An array relationship */
  readonly singular_nsfw_collections: ReadonlyArray<Singular_Nsfw_Collections>;
  /** An aggregate relationship */
  readonly singular_nsfw_collections_aggregate: Singular_Nsfw_Collections_Aggregate;
  /** fetch data from the table: "singular_nsfw_collections" using primary key columns */
  readonly singular_nsfw_collections_by_pk?: Maybe<Singular_Nsfw_Collections>;
  /** fetch data from the table: "singular_nsfw_nfts" */
  readonly singular_nsfw_nfts: ReadonlyArray<Singular_Nsfw_Nfts>;
  /** fetch aggregated fields from the table: "singular_nsfw_nfts" */
  readonly singular_nsfw_nfts_aggregate: Singular_Nsfw_Nfts_Aggregate;
  /** fetch data from the table: "singular_nsfw_nfts" using primary key columns */
  readonly singular_nsfw_nfts_by_pk?: Maybe<Singular_Nsfw_Nfts>;
  /** An array relationship */
  readonly singular_verified_collections: ReadonlyArray<Singular_Verified_Collections>;
  /** An aggregate relationship */
  readonly singular_verified_collections_aggregate: Singular_Verified_Collections_Aggregate;
  /** fetch data from the table: "singular_verified_collections" using primary key columns */
  readonly singular_verified_collections_by_pk?: Maybe<Singular_Verified_Collections>;
  /** fetch data from the table: "system" */
  readonly system: ReadonlyArray<System>;
  /** fetch data from the table: "system" using primary key columns */
  readonly system_by_pk?: Maybe<System>;
  /** fetch data from the table: "yuletide_item_track" */
  readonly yuletide_item_track: ReadonlyArray<Yuletide_Item_Track>;
  /** fetch aggregated fields from the table: "yuletide_item_track" */
  readonly yuletide_item_track_aggregate: Yuletide_Item_Track_Aggregate;
  /** fetch data from the table: "yuletide_item_track" using primary key columns */
  readonly yuletide_item_track_by_pk?: Maybe<Yuletide_Item_Track>;
};


export type SubscriptionBase_ThemesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Base_Themes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Base_Themes_Order_By>>;
  where?: InputMaybe<Base_Themes_Bool_Exp>;
};


export type SubscriptionBase_Themes_By_PkArgs = {
  id: Scalars['String'];
};


export type SubscriptionBasesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Bases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Bases_Order_By>>;
  where?: InputMaybe<Bases_Bool_Exp>;
};


export type SubscriptionBases_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Bases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Bases_Order_By>>;
  where?: InputMaybe<Bases_Bool_Exp>;
};


export type SubscriptionBases_By_PkArgs = {
  id: Scalars['String'];
};


export type SubscriptionChangesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>;
  where?: InputMaybe<Changes_Bool_Exp>;
};


export type SubscriptionChanges_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>;
  where?: InputMaybe<Changes_Bool_Exp>;
};


export type SubscriptionChanges_By_PkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionChanges_CollectionArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Changes_Collection_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Changes_Collection_Order_By>>;
  where?: InputMaybe<Changes_Collection_Bool_Exp>;
};


export type SubscriptionChanges_Collection_By_PkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionCollection_BannersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Collection_Banners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Collection_Banners_Order_By>>;
  where?: InputMaybe<Collection_Banners_Bool_Exp>;
};


export type SubscriptionCollection_Banners_By_PkArgs = {
  collection_id: Scalars['String'];
};


export type SubscriptionCollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type SubscriptionCollections_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type SubscriptionCollections_By_PkArgs = {
  id: Scalars['String'];
};


export type SubscriptionDistinct_Kanaria_NftsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Order_By>>;
  where?: InputMaybe<Distinct_Kanaria_Nfts_Bool_Exp>;
};


export type SubscriptionDistinct_Kanaria_Nfts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Order_By>>;
  where?: InputMaybe<Distinct_Kanaria_Nfts_Bool_Exp>;
};


export type SubscriptionDistinct_NftsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Distinct_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Distinct_Nfts_Order_By>>;
  where?: InputMaybe<Distinct_Nfts_Bool_Exp>;
};


export type SubscriptionDistinct_Nfts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Distinct_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Distinct_Nfts_Order_By>>;
  where?: InputMaybe<Distinct_Nfts_Bool_Exp>;
};


export type SubscriptionDutchieArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Dutchie_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Dutchie_Order_By>>;
  where?: InputMaybe<Dutchie_Bool_Exp>;
};


export type SubscriptionDutchie_By_PkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionGems_EnabledArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Gems_Enabled_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Gems_Enabled_Order_By>>;
  where?: InputMaybe<Gems_Enabled_Bool_Exp>;
};


export type SubscriptionGems_Enabled_By_PkArgs = {
  id: Scalars['String'];
};


export type SubscriptionGet_By_UnicodeArgs = {
  args: Get_By_Unicode_Args;
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


export type SubscriptionGet_By_Unicode_AggregateArgs = {
  args: Get_By_Unicode_Args;
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


export type SubscriptionGet_Newly_ListedArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


export type SubscriptionGet_Newly_Listed_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


export type SubscriptionGet_Newly_MintedArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


export type SubscriptionGet_Newly_Minted_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


export type SubscriptionGet_Ordered_Changes_StatsArgs = {
  args: Get_Ordered_Changes_Stats_Args;
  distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>;
  where?: InputMaybe<Changes_Bool_Exp>;
};


export type SubscriptionGet_Ordered_Changes_Stats_AggregateArgs = {
  args: Get_Ordered_Changes_Stats_Args;
  distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>;
  where?: InputMaybe<Changes_Bool_Exp>;
};


export type SubscriptionHatched_BirdsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Hatched_Birds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Hatched_Birds_Order_By>>;
  where?: InputMaybe<Hatched_Birds_Bool_Exp>;
};


export type SubscriptionHatched_Birds_By_PkArgs = {
  id: Scalars['String'];
};


export type SubscriptionNftsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


export type SubscriptionNfts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


export type SubscriptionNfts_By_PkArgs = {
  id: Scalars['String'];
};


export type SubscriptionNfts_Reactions_StatsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Order_By>>;
  where?: InputMaybe<Nfts_Reactions_Stats_Bool_Exp>;
};


export type SubscriptionNfts_Reactions_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Order_By>>;
  where?: InputMaybe<Nfts_Reactions_Stats_Bool_Exp>;
};


export type SubscriptionNfts_StatsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Stats_Order_By>>;
  where?: InputMaybe<Nfts_Stats_Bool_Exp>;
};


export type SubscriptionNfts_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Stats_Order_By>>;
  where?: InputMaybe<Nfts_Stats_Bool_Exp>;
};


export type SubscriptionPartsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Parts_Order_By>>;
  where?: InputMaybe<Parts_Bool_Exp>;
};


export type SubscriptionParts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Parts_Order_By>>;
  where?: InputMaybe<Parts_Bool_Exp>;
};


export type SubscriptionParts_By_PkArgs = {
  id: Scalars['String'];
};


export type SubscriptionReactionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


export type SubscriptionReactions_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


export type SubscriptionReactions_By_PkArgs = {
  nft_id: Scalars['String'];
  owner: Scalars['String'];
  unicode: Scalars['String'];
};


export type SubscriptionReactions_UnicodeArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Unicode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Unicode_Order_By>>;
  where?: InputMaybe<Reactions_Unicode_Bool_Exp>;
};


export type SubscriptionReactions_Unicode_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Unicode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Unicode_Order_By>>;
  where?: InputMaybe<Reactions_Unicode_Bool_Exp>;
};


export type SubscriptionReactions_UsersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Users_Order_By>>;
  where?: InputMaybe<Reactions_Users_Bool_Exp>;
};


export type SubscriptionReactions_Users_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Users_Order_By>>;
  where?: InputMaybe<Reactions_Users_Bool_Exp>;
};


export type SubscriptionRecently_ListedArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Recently_Listed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Recently_Listed_Order_By>>;
  where?: InputMaybe<Recently_Listed_Bool_Exp>;
};


export type SubscriptionRecently_Listed_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Recently_Listed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Recently_Listed_Order_By>>;
  where?: InputMaybe<Recently_Listed_Bool_Exp>;
};


export type SubscriptionResourcesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type SubscriptionResources_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type SubscriptionResources_Base_ThemesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Order_By>>;
  where?: InputMaybe<Resources_Base_Themes_Bool_Exp>;
};


export type SubscriptionResources_Base_Themes_By_PkArgs = {
  resource_id: Scalars['String'];
  theme_id: Scalars['String'];
};


export type SubscriptionResources_By_PkArgs = {
  id: Scalars['String'];
};


export type SubscriptionResources_PartsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Parts_Order_By>>;
  where?: InputMaybe<Resources_Parts_Bool_Exp>;
};


export type SubscriptionResources_Parts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Parts_Order_By>>;
  where?: InputMaybe<Resources_Parts_Bool_Exp>;
};


export type SubscriptionResources_Parts_By_PkArgs = {
  part_id: Scalars['String'];
  resource_id: Scalars['String'];
};


export type SubscriptionSalesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Sales_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Sales_Order_By>>;
  where?: InputMaybe<Sales_Bool_Exp>;
};


export type SubscriptionSingular_Blacklisted_AccountsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Order_By>>;
  where?: InputMaybe<Singular_Blacklisted_Accounts_Bool_Exp>;
};


export type SubscriptionSingular_Blacklisted_Accounts_By_PkArgs = {
  account: Scalars['String'];
};


export type SubscriptionSingular_Blacklisted_CollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Order_By>>;
  where?: InputMaybe<Singular_Blacklisted_Collections_Bool_Exp>;
};


export type SubscriptionSingular_Blacklisted_Collections_By_PkArgs = {
  collection_id: Scalars['String'];
};


export type SubscriptionSingular_CuratedArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>;
  where?: InputMaybe<Singular_Curated_Bool_Exp>;
};


export type SubscriptionSingular_Curated_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>;
  where?: InputMaybe<Singular_Curated_Bool_Exp>;
};


export type SubscriptionSingular_Curated_By_PkArgs = {
  nft_id: Scalars['String'];
};


export type SubscriptionSingular_Curated_CollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Order_By>>;
  where?: InputMaybe<Singular_Curated_Collections_Bool_Exp>;
};


export type SubscriptionSingular_Curated_Collections_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Order_By>>;
  where?: InputMaybe<Singular_Curated_Collections_Bool_Exp>;
};


export type SubscriptionSingular_Curated_Collections_By_PkArgs = {
  collection_id: Scalars['String'];
};


export type SubscriptionSingular_Hidden_CollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Hidden_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Hidden_Collections_Order_By>>;
  where?: InputMaybe<Singular_Hidden_Collections_Bool_Exp>;
};


export type SubscriptionSingular_Hidden_Collections_By_PkArgs = {
  collection_id: Scalars['String'];
};


export type SubscriptionSingular_Nsfw_CollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Order_By>>;
  where?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>;
};


export type SubscriptionSingular_Nsfw_Collections_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Order_By>>;
  where?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>;
};


export type SubscriptionSingular_Nsfw_Collections_By_PkArgs = {
  collection_id: Scalars['String'];
};


export type SubscriptionSingular_Nsfw_NftsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>;
  where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>;
};


export type SubscriptionSingular_Nsfw_Nfts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>;
  where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>;
};


export type SubscriptionSingular_Nsfw_Nfts_By_PkArgs = {
  nft_id: Scalars['String'];
};


export type SubscriptionSingular_Verified_CollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Order_By>>;
  where?: InputMaybe<Singular_Verified_Collections_Bool_Exp>;
};


export type SubscriptionSingular_Verified_Collections_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Order_By>>;
  where?: InputMaybe<Singular_Verified_Collections_Bool_Exp>;
};


export type SubscriptionSingular_Verified_Collections_By_PkArgs = {
  collection_id: Scalars['String'];
};


export type SubscriptionSystemArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<System_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<System_Order_By>>;
  where?: InputMaybe<System_Bool_Exp>;
};


export type SubscriptionSystem_By_PkArgs = {
  purchaseEnabled: Scalars['Boolean'];
};


export type SubscriptionYuletide_Item_TrackArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Order_By>>;
  where?: InputMaybe<Yuletide_Item_Track_Bool_Exp>;
};


export type SubscriptionYuletide_Item_Track_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Order_By>>;
  where?: InputMaybe<Yuletide_Item_Track_Bool_Exp>;
};


export type SubscriptionYuletide_Item_Track_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "base_themes" */
export type Base_Themes = {
  readonly __typename?: 'base_themes';
  readonly id: Scalars['String'];
  /** An array relationship */
  readonly resources_base_themes: ReadonlyArray<Resources_Base_Themes>;
  readonly theme_color_1?: Maybe<Scalars['String']>;
  readonly theme_color_2?: Maybe<Scalars['String']>;
  readonly theme_color_3?: Maybe<Scalars['String']>;
  readonly theme_color_4?: Maybe<Scalars['String']>;
};


/** columns and relationships of "base_themes" */
export type Base_ThemesResources_Base_ThemesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Order_By>>;
  where?: InputMaybe<Resources_Base_Themes_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "base_themes". All fields are combined with a logical 'AND'. */
export type Base_Themes_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Base_Themes_Bool_Exp>>;
  readonly _not?: InputMaybe<Base_Themes_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Base_Themes_Bool_Exp>>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly resources_base_themes?: InputMaybe<Resources_Base_Themes_Bool_Exp>;
  readonly theme_color_1?: InputMaybe<String_Comparison_Exp>;
  readonly theme_color_2?: InputMaybe<String_Comparison_Exp>;
  readonly theme_color_3?: InputMaybe<String_Comparison_Exp>;
  readonly theme_color_4?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "base_themes". */
export type Base_Themes_Order_By = {
  readonly id?: InputMaybe<Order_By>;
  readonly resources_base_themes_aggregate?: InputMaybe<Resources_Base_Themes_Aggregate_Order_By>;
  readonly theme_color_1?: InputMaybe<Order_By>;
  readonly theme_color_2?: InputMaybe<Order_By>;
  readonly theme_color_3?: InputMaybe<Order_By>;
  readonly theme_color_4?: InputMaybe<Order_By>;
};

/** select columns of table "base_themes" */
export enum Base_Themes_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ThemeColor_1 = 'theme_color_1',
  /** column name */
  ThemeColor_2 = 'theme_color_2',
  /** column name */
  ThemeColor_3 = 'theme_color_3',
  /** column name */
  ThemeColor_4 = 'theme_color_4'
}

/** columns and relationships of "bases" */
export type Bases = {
  readonly __typename?: 'bases';
  readonly block: Scalars['Int'];
  /** An array relationship */
  readonly changes: ReadonlyArray<Changes>;
  /** An aggregate relationship */
  readonly changes_aggregate: Changes_Aggregate;
  readonly id: Scalars['String'];
  readonly issuer: Scalars['String'];
  readonly metadata?: Maybe<Scalars['String']>;
  /** An array relationship */
  readonly parts: ReadonlyArray<Parts>;
  /** An aggregate relationship */
  readonly parts_aggregate: Parts_Aggregate;
  readonly symbol: Scalars['String'];
  readonly type: Scalars['String'];
};


/** columns and relationships of "bases" */
export type BasesChangesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>;
  where?: InputMaybe<Changes_Bool_Exp>;
};


/** columns and relationships of "bases" */
export type BasesChanges_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>;
  where?: InputMaybe<Changes_Bool_Exp>;
};


/** columns and relationships of "bases" */
export type BasesPartsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Parts_Order_By>>;
  where?: InputMaybe<Parts_Bool_Exp>;
};


/** columns and relationships of "bases" */
export type BasesParts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Parts_Order_By>>;
  where?: InputMaybe<Parts_Bool_Exp>;
};

/** aggregated selection of "bases" */
export type Bases_Aggregate = {
  readonly __typename?: 'bases_aggregate';
  readonly aggregate?: Maybe<Bases_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Bases>;
};

/** aggregate fields of "bases" */
export type Bases_Aggregate_Fields = {
  readonly __typename?: 'bases_aggregate_fields';
  readonly avg?: Maybe<Bases_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Bases_Max_Fields>;
  readonly min?: Maybe<Bases_Min_Fields>;
  readonly stddev?: Maybe<Bases_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Bases_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Bases_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Bases_Sum_Fields>;
  readonly var_pop?: Maybe<Bases_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Bases_Var_Samp_Fields>;
  readonly variance?: Maybe<Bases_Variance_Fields>;
};


/** aggregate fields of "bases" */
export type Bases_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Bases_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Bases_Avg_Fields = {
  readonly __typename?: 'bases_avg_fields';
  readonly block?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "bases". All fields are combined with a logical 'AND'. */
export type Bases_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Bases_Bool_Exp>>;
  readonly _not?: InputMaybe<Bases_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Bases_Bool_Exp>>;
  readonly block?: InputMaybe<Int_Comparison_Exp>;
  readonly changes?: InputMaybe<Changes_Bool_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly issuer?: InputMaybe<String_Comparison_Exp>;
  readonly metadata?: InputMaybe<String_Comparison_Exp>;
  readonly parts?: InputMaybe<Parts_Bool_Exp>;
  readonly symbol?: InputMaybe<String_Comparison_Exp>;
  readonly type?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Bases_Max_Fields = {
  readonly __typename?: 'bases_max_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly issuer?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly symbol?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Bases_Min_Fields = {
  readonly __typename?: 'bases_min_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly issuer?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly symbol?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "bases". */
export type Bases_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly changes_aggregate?: InputMaybe<Changes_Aggregate_Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly issuer?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly parts_aggregate?: InputMaybe<Parts_Aggregate_Order_By>;
  readonly symbol?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
};

/** select columns of table "bases" */
export enum Bases_Select_Column {
  /** column name */
  Block = 'block',
  /** column name */
  Id = 'id',
  /** column name */
  Issuer = 'issuer',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  Type = 'type'
}

/** aggregate stddev on columns */
export type Bases_Stddev_Fields = {
  readonly __typename?: 'bases_stddev_fields';
  readonly block?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Bases_Stddev_Pop_Fields = {
  readonly __typename?: 'bases_stddev_pop_fields';
  readonly block?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Bases_Stddev_Samp_Fields = {
  readonly __typename?: 'bases_stddev_samp_fields';
  readonly block?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Bases_Sum_Fields = {
  readonly __typename?: 'bases_sum_fields';
  readonly block?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Bases_Var_Pop_Fields = {
  readonly __typename?: 'bases_var_pop_fields';
  readonly block?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Bases_Var_Samp_Fields = {
  readonly __typename?: 'bases_var_samp_fields';
  readonly block?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Bases_Variance_Fields = {
  readonly __typename?: 'bases_variance_fields';
  readonly block?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['bigint']>;
  readonly _gt?: InputMaybe<Scalars['bigint']>;
  readonly _gte?: InputMaybe<Scalars['bigint']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['bigint']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['bigint']>;
  readonly _lte?: InputMaybe<Scalars['bigint']>;
  readonly _neq?: InputMaybe<Scalars['bigint']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['bigint']>>;
};

/** columns and relationships of "changes" */
export type Changes = {
  readonly __typename?: 'changes';
  readonly block: Scalars['Int'];
  readonly caller: Scalars['String'];
  readonly created_at: Scalars['timestamptz'];
  readonly extraTransfers?: Maybe<Scalars['jsonb']>;
  readonly field: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly new: Scalars['String'];
  /** An object relationship */
  readonly nft?: Maybe<Nfts>;
  /** An object relationship */
  readonly nftclass?: Maybe<Collections>;
  readonly old: Scalars['String'];
  readonly opType: Scalars['String'];
  readonly ref_id: Scalars['String'];
};


/** columns and relationships of "changes" */
export type ChangesExtraTransfersArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "changes" */
export type Changes_Aggregate = {
  readonly __typename?: 'changes_aggregate';
  readonly aggregate?: Maybe<Changes_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Changes>;
};

/** aggregate fields of "changes" */
export type Changes_Aggregate_Fields = {
  readonly __typename?: 'changes_aggregate_fields';
  readonly avg?: Maybe<Changes_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Changes_Max_Fields>;
  readonly min?: Maybe<Changes_Min_Fields>;
  readonly stddev?: Maybe<Changes_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Changes_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Changes_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Changes_Sum_Fields>;
  readonly var_pop?: Maybe<Changes_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Changes_Var_Samp_Fields>;
  readonly variance?: Maybe<Changes_Variance_Fields>;
};


/** aggregate fields of "changes" */
export type Changes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Changes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "changes" */
export type Changes_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Changes_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Changes_Max_Order_By>;
  readonly min?: InputMaybe<Changes_Min_Order_By>;
  readonly stddev?: InputMaybe<Changes_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Changes_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Changes_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Changes_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Changes_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Changes_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Changes_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Changes_Avg_Fields = {
  readonly __typename?: 'changes_avg_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "changes" */
export type Changes_Avg_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "changes". All fields are combined with a logical 'AND'. */
export type Changes_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Changes_Bool_Exp>>;
  readonly _not?: InputMaybe<Changes_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Changes_Bool_Exp>>;
  readonly block?: InputMaybe<Int_Comparison_Exp>;
  readonly caller?: InputMaybe<String_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly extraTransfers?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly field?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly new?: InputMaybe<String_Comparison_Exp>;
  readonly nft?: InputMaybe<Nfts_Bool_Exp>;
  readonly nftclass?: InputMaybe<Collections_Bool_Exp>;
  readonly old?: InputMaybe<String_Comparison_Exp>;
  readonly opType?: InputMaybe<String_Comparison_Exp>;
  readonly ref_id?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "changes_collection" */
export type Changes_Collection = {
  readonly __typename?: 'changes_collection';
  readonly block: Scalars['Int'];
  readonly caller: Scalars['String'];
  /** An object relationship */
  readonly collection?: Maybe<Collections>;
  readonly created_at: Scalars['timestamptz'];
  readonly field: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly new: Scalars['String'];
  readonly old: Scalars['String'];
  readonly opType: Scalars['String'];
  readonly ref_id: Scalars['String'];
};

/** order by aggregate values of table "changes_collection" */
export type Changes_Collection_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Changes_Collection_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Changes_Collection_Max_Order_By>;
  readonly min?: InputMaybe<Changes_Collection_Min_Order_By>;
  readonly stddev?: InputMaybe<Changes_Collection_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Changes_Collection_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Changes_Collection_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Changes_Collection_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Changes_Collection_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Changes_Collection_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Changes_Collection_Variance_Order_By>;
};

/** order by avg() on columns of table "changes_collection" */
export type Changes_Collection_Avg_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "changes_collection". All fields are combined with a logical 'AND'. */
export type Changes_Collection_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Changes_Collection_Bool_Exp>>;
  readonly _not?: InputMaybe<Changes_Collection_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Changes_Collection_Bool_Exp>>;
  readonly block?: InputMaybe<Int_Comparison_Exp>;
  readonly caller?: InputMaybe<String_Comparison_Exp>;
  readonly collection?: InputMaybe<Collections_Bool_Exp>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly field?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly new?: InputMaybe<String_Comparison_Exp>;
  readonly old?: InputMaybe<String_Comparison_Exp>;
  readonly opType?: InputMaybe<String_Comparison_Exp>;
  readonly ref_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "changes_collection" */
export type Changes_Collection_Max_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly caller?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly field?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly new?: InputMaybe<Order_By>;
  readonly old?: InputMaybe<Order_By>;
  readonly opType?: InputMaybe<Order_By>;
  readonly ref_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "changes_collection" */
export type Changes_Collection_Min_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly caller?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly field?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly new?: InputMaybe<Order_By>;
  readonly old?: InputMaybe<Order_By>;
  readonly opType?: InputMaybe<Order_By>;
  readonly ref_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "changes_collection". */
export type Changes_Collection_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly caller?: InputMaybe<Order_By>;
  readonly collection?: InputMaybe<Collections_Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly field?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly new?: InputMaybe<Order_By>;
  readonly old?: InputMaybe<Order_By>;
  readonly opType?: InputMaybe<Order_By>;
  readonly ref_id?: InputMaybe<Order_By>;
};

/** select columns of table "changes_collection" */
export enum Changes_Collection_Select_Column {
  /** column name */
  Block = 'block',
  /** column name */
  Caller = 'caller',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Field = 'field',
  /** column name */
  Id = 'id',
  /** column name */
  New = 'new',
  /** column name */
  Old = 'old',
  /** column name */
  OpType = 'opType',
  /** column name */
  RefId = 'ref_id'
}

/** order by stddev() on columns of table "changes_collection" */
export type Changes_Collection_Stddev_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "changes_collection" */
export type Changes_Collection_Stddev_Pop_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "changes_collection" */
export type Changes_Collection_Stddev_Samp_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "changes_collection" */
export type Changes_Collection_Sum_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "changes_collection" */
export type Changes_Collection_Var_Pop_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "changes_collection" */
export type Changes_Collection_Var_Samp_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "changes_collection" */
export type Changes_Collection_Variance_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Changes_Max_Fields = {
  readonly __typename?: 'changes_max_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly caller?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly field?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly new?: Maybe<Scalars['String']>;
  readonly old?: Maybe<Scalars['String']>;
  readonly opType?: Maybe<Scalars['String']>;
  readonly ref_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "changes" */
export type Changes_Max_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly caller?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly field?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly new?: InputMaybe<Order_By>;
  readonly old?: InputMaybe<Order_By>;
  readonly opType?: InputMaybe<Order_By>;
  readonly ref_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Changes_Min_Fields = {
  readonly __typename?: 'changes_min_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly caller?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly field?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly new?: Maybe<Scalars['String']>;
  readonly old?: Maybe<Scalars['String']>;
  readonly opType?: Maybe<Scalars['String']>;
  readonly ref_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "changes" */
export type Changes_Min_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly caller?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly field?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly new?: InputMaybe<Order_By>;
  readonly old?: InputMaybe<Order_By>;
  readonly opType?: InputMaybe<Order_By>;
  readonly ref_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "changes". */
export type Changes_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly caller?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly extraTransfers?: InputMaybe<Order_By>;
  readonly field?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly new?: InputMaybe<Order_By>;
  readonly nft?: InputMaybe<Nfts_Order_By>;
  readonly nftclass?: InputMaybe<Collections_Order_By>;
  readonly old?: InputMaybe<Order_By>;
  readonly opType?: InputMaybe<Order_By>;
  readonly ref_id?: InputMaybe<Order_By>;
};

/** select columns of table "changes" */
export enum Changes_Select_Column {
  /** column name */
  Block = 'block',
  /** column name */
  Caller = 'caller',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExtraTransfers = 'extraTransfers',
  /** column name */
  Field = 'field',
  /** column name */
  Id = 'id',
  /** column name */
  New = 'new',
  /** column name */
  Old = 'old',
  /** column name */
  OpType = 'opType',
  /** column name */
  RefId = 'ref_id'
}

/** aggregate stddev on columns */
export type Changes_Stddev_Fields = {
  readonly __typename?: 'changes_stddev_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "changes" */
export type Changes_Stddev_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Changes_Stddev_Pop_Fields = {
  readonly __typename?: 'changes_stddev_pop_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "changes" */
export type Changes_Stddev_Pop_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Changes_Stddev_Samp_Fields = {
  readonly __typename?: 'changes_stddev_samp_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "changes" */
export type Changes_Stddev_Samp_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Changes_Sum_Fields = {
  readonly __typename?: 'changes_sum_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "changes" */
export type Changes_Sum_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Changes_Var_Pop_Fields = {
  readonly __typename?: 'changes_var_pop_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "changes" */
export type Changes_Var_Pop_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Changes_Var_Samp_Fields = {
  readonly __typename?: 'changes_var_samp_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "changes" */
export type Changes_Var_Samp_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Changes_Variance_Fields = {
  readonly __typename?: 'changes_variance_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "changes" */
export type Changes_Variance_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** columns and relationships of "collection_banners" */
export type Collection_Banners = {
  readonly __typename?: 'collection_banners';
  /** An object relationship */
  readonly collection?: Maybe<Collections>;
  readonly collection_id: Scalars['String'];
  readonly created_at: Scalars['timestamptz'];
  readonly image: Scalars['String'];
};

/** Boolean expression to filter rows from the table "collection_banners". All fields are combined with a logical 'AND'. */
export type Collection_Banners_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Collection_Banners_Bool_Exp>>;
  readonly _not?: InputMaybe<Collection_Banners_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Collection_Banners_Bool_Exp>>;
  readonly collection?: InputMaybe<Collections_Bool_Exp>;
  readonly collection_id?: InputMaybe<String_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly image?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "collection_banners". */
export type Collection_Banners_Order_By = {
  readonly collection?: InputMaybe<Collections_Order_By>;
  readonly collection_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly image?: InputMaybe<Order_By>;
};

/** select columns of table "collection_banners" */
export enum Collection_Banners_Select_Column {
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Image = 'image'
}

/** columns and relationships of "collections" */
export type Collections = {
  readonly __typename?: 'collections';
  /** An object relationship */
  readonly banners?: Maybe<Collection_Banners>;
  readonly block: Scalars['Int'];
  /** An array relationship */
  readonly changes_collection: ReadonlyArray<Changes_Collection>;
  readonly id: Scalars['String'];
  readonly issuer: Scalars['String'];
  readonly max: Scalars['Int'];
  readonly metadata: Scalars['String'];
  readonly metadata_content_type?: Maybe<Scalars['String']>;
  readonly metadata_description?: Maybe<Scalars['String']>;
  readonly metadata_image?: Maybe<Scalars['String']>;
  readonly metadata_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  readonly nfts: ReadonlyArray<Nfts>;
  /** An aggregate relationship */
  readonly nfts_aggregate: Nfts_Aggregate;
  /** An object relationship */
  readonly nfts_stats?: Maybe<Nfts_Stats>;
  /** An array relationship */
  readonly singular_blacklisted_accounts: ReadonlyArray<Singular_Blacklisted_Accounts>;
  /** An array relationship */
  readonly singular_blacklisted_collections: ReadonlyArray<Singular_Blacklisted_Collections>;
  /** An array relationship */
  readonly singular_curated: ReadonlyArray<Singular_Curated_Collections>;
  /** An aggregate relationship */
  readonly singular_curated_aggregate: Singular_Curated_Collections_Aggregate;
  /** An array relationship */
  readonly singular_nsfw_collections: ReadonlyArray<Singular_Nsfw_Collections>;
  /** An aggregate relationship */
  readonly singular_nsfw_collections_aggregate: Singular_Nsfw_Collections_Aggregate;
  /** An array relationship */
  readonly singular_verified_collections: ReadonlyArray<Singular_Verified_Collections>;
  /** An aggregate relationship */
  readonly singular_verified_collections_aggregate: Singular_Verified_Collections_Aggregate;
  readonly symbol: Scalars['String'];
};


/** columns and relationships of "collections" */
export type CollectionsChanges_CollectionArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Changes_Collection_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Changes_Collection_Order_By>>;
  where?: InputMaybe<Changes_Collection_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsNftsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsNfts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsSingular_Blacklisted_AccountsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Order_By>>;
  where?: InputMaybe<Singular_Blacklisted_Accounts_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsSingular_Blacklisted_CollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Order_By>>;
  where?: InputMaybe<Singular_Blacklisted_Collections_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsSingular_CuratedArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Order_By>>;
  where?: InputMaybe<Singular_Curated_Collections_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsSingular_Curated_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Order_By>>;
  where?: InputMaybe<Singular_Curated_Collections_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsSingular_Nsfw_CollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Order_By>>;
  where?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsSingular_Nsfw_Collections_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Order_By>>;
  where?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsSingular_Verified_CollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Order_By>>;
  where?: InputMaybe<Singular_Verified_Collections_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsSingular_Verified_Collections_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Order_By>>;
  where?: InputMaybe<Singular_Verified_Collections_Bool_Exp>;
};

/** aggregated selection of "collections" */
export type Collections_Aggregate = {
  readonly __typename?: 'collections_aggregate';
  readonly aggregate?: Maybe<Collections_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Collections>;
};

/** aggregate fields of "collections" */
export type Collections_Aggregate_Fields = {
  readonly __typename?: 'collections_aggregate_fields';
  readonly avg?: Maybe<Collections_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Collections_Max_Fields>;
  readonly min?: Maybe<Collections_Min_Fields>;
  readonly stddev?: Maybe<Collections_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Collections_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Collections_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Collections_Sum_Fields>;
  readonly var_pop?: Maybe<Collections_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Collections_Var_Samp_Fields>;
  readonly variance?: Maybe<Collections_Variance_Fields>;
};


/** aggregate fields of "collections" */
export type Collections_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Collections_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Collections_Avg_Fields = {
  readonly __typename?: 'collections_avg_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly max?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "collections". All fields are combined with a logical 'AND'. */
export type Collections_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Collections_Bool_Exp>>;
  readonly _not?: InputMaybe<Collections_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Collections_Bool_Exp>>;
  readonly banners?: InputMaybe<Collection_Banners_Bool_Exp>;
  readonly block?: InputMaybe<Int_Comparison_Exp>;
  readonly changes_collection?: InputMaybe<Changes_Collection_Bool_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly issuer?: InputMaybe<String_Comparison_Exp>;
  readonly max?: InputMaybe<Int_Comparison_Exp>;
  readonly metadata?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_content_type?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_description?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_image?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_name?: InputMaybe<String_Comparison_Exp>;
  readonly nfts?: InputMaybe<Nfts_Bool_Exp>;
  readonly nfts_stats?: InputMaybe<Nfts_Stats_Bool_Exp>;
  readonly singular_blacklisted_accounts?: InputMaybe<Singular_Blacklisted_Accounts_Bool_Exp>;
  readonly singular_blacklisted_collections?: InputMaybe<Singular_Blacklisted_Collections_Bool_Exp>;
  readonly singular_curated?: InputMaybe<Singular_Curated_Collections_Bool_Exp>;
  readonly singular_nsfw_collections?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>;
  readonly singular_verified_collections?: InputMaybe<Singular_Verified_Collections_Bool_Exp>;
  readonly symbol?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Collections_Max_Fields = {
  readonly __typename?: 'collections_max_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly issuer?: Maybe<Scalars['String']>;
  readonly max?: Maybe<Scalars['Int']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly metadata_content_type?: Maybe<Scalars['String']>;
  readonly metadata_description?: Maybe<Scalars['String']>;
  readonly metadata_image?: Maybe<Scalars['String']>;
  readonly metadata_name?: Maybe<Scalars['String']>;
  readonly symbol?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Collections_Min_Fields = {
  readonly __typename?: 'collections_min_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly issuer?: Maybe<Scalars['String']>;
  readonly max?: Maybe<Scalars['Int']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly metadata_content_type?: Maybe<Scalars['String']>;
  readonly metadata_description?: Maybe<Scalars['String']>;
  readonly metadata_image?: Maybe<Scalars['String']>;
  readonly metadata_name?: Maybe<Scalars['String']>;
  readonly symbol?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "collections". */
export type Collections_Order_By = {
  readonly banners?: InputMaybe<Collection_Banners_Order_By>;
  readonly block?: InputMaybe<Order_By>;
  readonly changes_collection_aggregate?: InputMaybe<Changes_Collection_Aggregate_Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly issuer?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly metadata_content_type?: InputMaybe<Order_By>;
  readonly metadata_description?: InputMaybe<Order_By>;
  readonly metadata_image?: InputMaybe<Order_By>;
  readonly metadata_name?: InputMaybe<Order_By>;
  readonly nfts_aggregate?: InputMaybe<Nfts_Aggregate_Order_By>;
  readonly nfts_stats?: InputMaybe<Nfts_Stats_Order_By>;
  readonly singular_blacklisted_accounts_aggregate?: InputMaybe<Singular_Blacklisted_Accounts_Aggregate_Order_By>;
  readonly singular_blacklisted_collections_aggregate?: InputMaybe<Singular_Blacklisted_Collections_Aggregate_Order_By>;
  readonly singular_curated_aggregate?: InputMaybe<Singular_Curated_Collections_Aggregate_Order_By>;
  readonly singular_nsfw_collections_aggregate?: InputMaybe<Singular_Nsfw_Collections_Aggregate_Order_By>;
  readonly singular_verified_collections_aggregate?: InputMaybe<Singular_Verified_Collections_Aggregate_Order_By>;
  readonly symbol?: InputMaybe<Order_By>;
};

/** select columns of table "collections" */
export enum Collections_Select_Column {
  /** column name */
  Block = 'block',
  /** column name */
  Id = 'id',
  /** column name */
  Issuer = 'issuer',
  /** column name */
  Max = 'max',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MetadataContentType = 'metadata_content_type',
  /** column name */
  MetadataDescription = 'metadata_description',
  /** column name */
  MetadataImage = 'metadata_image',
  /** column name */
  MetadataName = 'metadata_name',
  /** column name */
  Symbol = 'symbol'
}

/** aggregate stddev on columns */
export type Collections_Stddev_Fields = {
  readonly __typename?: 'collections_stddev_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly max?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Collections_Stddev_Pop_Fields = {
  readonly __typename?: 'collections_stddev_pop_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly max?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Collections_Stddev_Samp_Fields = {
  readonly __typename?: 'collections_stddev_samp_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly max?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Collections_Sum_Fields = {
  readonly __typename?: 'collections_sum_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Collections_Var_Pop_Fields = {
  readonly __typename?: 'collections_var_pop_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly max?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Collections_Var_Samp_Fields = {
  readonly __typename?: 'collections_var_samp_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly max?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Collections_Variance_Fields = {
  readonly __typename?: 'collections_variance_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly max?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_Nfts = {
  readonly __typename?: 'distinct_kanaria_nfts';
  readonly block?: Maybe<Scalars['Int']>;
  readonly burned?: Maybe<Scalars['String']>;
  /** An array relationship */
  readonly children: ReadonlyArray<Nfts>;
  /** An aggregate relationship */
  readonly children_aggregate: Nfts_Aggregate;
  /** An object relationship */
  readonly collection?: Maybe<Collections>;
  readonly collectionId?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly equipped_id?: Maybe<Scalars['String']>;
  readonly forsale?: Maybe<Scalars['bigint']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly metadata_description?: Maybe<Scalars['String']>;
  readonly metadata_image?: Maybe<Scalars['String']>;
  readonly metadata_name?: Maybe<Scalars['String']>;
  readonly metadata_rarity?: Maybe<Scalars['String']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly pending?: Maybe<Scalars['Boolean']>;
  readonly priority?: Maybe<Scalars['jsonb']>;
  readonly properties?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  readonly resources: ReadonlyArray<Resources>;
  /** An aggregate relationship */
  readonly resources_aggregate: Resources_Aggregate;
  readonly rootowner?: Maybe<Scalars['String']>;
  readonly sn?: Maybe<Scalars['String']>;
  readonly symbol?: Maybe<Scalars['String']>;
  readonly transferable?: Maybe<Scalars['Int']>;
  readonly tx_block?: Maybe<Scalars['Int']>;
  readonly tx_caller?: Maybe<Scalars['String']>;
  readonly tx_pending?: Maybe<Scalars['Boolean']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_NftsChildrenArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


/** columns and relationships of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_NftsChildren_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


/** columns and relationships of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_NftsPriorityArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_NftsPropertiesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_NftsResourcesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


/** columns and relationships of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_NftsResources_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};

/** aggregated selection of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_Nfts_Aggregate = {
  readonly __typename?: 'distinct_kanaria_nfts_aggregate';
  readonly aggregate?: Maybe<Distinct_Kanaria_Nfts_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Distinct_Kanaria_Nfts>;
};

/** aggregate fields of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_Nfts_Aggregate_Fields = {
  readonly __typename?: 'distinct_kanaria_nfts_aggregate_fields';
  readonly avg?: Maybe<Distinct_Kanaria_Nfts_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Distinct_Kanaria_Nfts_Max_Fields>;
  readonly min?: Maybe<Distinct_Kanaria_Nfts_Min_Fields>;
  readonly stddev?: Maybe<Distinct_Kanaria_Nfts_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Distinct_Kanaria_Nfts_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Distinct_Kanaria_Nfts_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Distinct_Kanaria_Nfts_Sum_Fields>;
  readonly var_pop?: Maybe<Distinct_Kanaria_Nfts_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Distinct_Kanaria_Nfts_Var_Samp_Fields>;
  readonly variance?: Maybe<Distinct_Kanaria_Nfts_Variance_Fields>;
};


/** aggregate fields of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_Nfts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Distinct_Kanaria_Nfts_Avg_Fields = {
  readonly __typename?: 'distinct_kanaria_nfts_avg_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly tx_block?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "distinct_kanaria_nfts". All fields are combined with a logical 'AND'. */
export type Distinct_Kanaria_Nfts_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Bool_Exp>>;
  readonly _not?: InputMaybe<Distinct_Kanaria_Nfts_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Bool_Exp>>;
  readonly block?: InputMaybe<Int_Comparison_Exp>;
  readonly burned?: InputMaybe<String_Comparison_Exp>;
  readonly children?: InputMaybe<Nfts_Bool_Exp>;
  readonly collection?: InputMaybe<Collections_Bool_Exp>;
  readonly collectionId?: InputMaybe<String_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly equipped_id?: InputMaybe<String_Comparison_Exp>;
  readonly forsale?: InputMaybe<Bigint_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly metadata?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_description?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_image?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_name?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_rarity?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_rarity_percentage?: InputMaybe<Float_Comparison_Exp>;
  readonly owner?: InputMaybe<String_Comparison_Exp>;
  readonly pending?: InputMaybe<Boolean_Comparison_Exp>;
  readonly priority?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly properties?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly resources?: InputMaybe<Resources_Bool_Exp>;
  readonly rootowner?: InputMaybe<String_Comparison_Exp>;
  readonly sn?: InputMaybe<String_Comparison_Exp>;
  readonly symbol?: InputMaybe<String_Comparison_Exp>;
  readonly transferable?: InputMaybe<Int_Comparison_Exp>;
  readonly tx_block?: InputMaybe<Int_Comparison_Exp>;
  readonly tx_caller?: InputMaybe<String_Comparison_Exp>;
  readonly tx_pending?: InputMaybe<Boolean_Comparison_Exp>;
  readonly updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Distinct_Kanaria_Nfts_Max_Fields = {
  readonly __typename?: 'distinct_kanaria_nfts_max_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly burned?: Maybe<Scalars['String']>;
  readonly collectionId?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly equipped_id?: Maybe<Scalars['String']>;
  readonly forsale?: Maybe<Scalars['bigint']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly metadata_description?: Maybe<Scalars['String']>;
  readonly metadata_image?: Maybe<Scalars['String']>;
  readonly metadata_name?: Maybe<Scalars['String']>;
  readonly metadata_rarity?: Maybe<Scalars['String']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly rootowner?: Maybe<Scalars['String']>;
  readonly sn?: Maybe<Scalars['String']>;
  readonly symbol?: Maybe<Scalars['String']>;
  readonly transferable?: Maybe<Scalars['Int']>;
  readonly tx_block?: Maybe<Scalars['Int']>;
  readonly tx_caller?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Distinct_Kanaria_Nfts_Min_Fields = {
  readonly __typename?: 'distinct_kanaria_nfts_min_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly burned?: Maybe<Scalars['String']>;
  readonly collectionId?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly equipped_id?: Maybe<Scalars['String']>;
  readonly forsale?: Maybe<Scalars['bigint']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly metadata_description?: Maybe<Scalars['String']>;
  readonly metadata_image?: Maybe<Scalars['String']>;
  readonly metadata_name?: Maybe<Scalars['String']>;
  readonly metadata_rarity?: Maybe<Scalars['String']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly rootowner?: Maybe<Scalars['String']>;
  readonly sn?: Maybe<Scalars['String']>;
  readonly symbol?: Maybe<Scalars['String']>;
  readonly transferable?: Maybe<Scalars['Int']>;
  readonly tx_block?: Maybe<Scalars['Int']>;
  readonly tx_caller?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};

/** Ordering options when selecting data from "distinct_kanaria_nfts". */
export type Distinct_Kanaria_Nfts_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly burned?: InputMaybe<Order_By>;
  readonly children_aggregate?: InputMaybe<Nfts_Aggregate_Order_By>;
  readonly collection?: InputMaybe<Collections_Order_By>;
  readonly collectionId?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly equipped_id?: InputMaybe<Order_By>;
  readonly forsale?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly metadata_description?: InputMaybe<Order_By>;
  readonly metadata_image?: InputMaybe<Order_By>;
  readonly metadata_name?: InputMaybe<Order_By>;
  readonly metadata_rarity?: InputMaybe<Order_By>;
  readonly metadata_rarity_percentage?: InputMaybe<Order_By>;
  readonly owner?: InputMaybe<Order_By>;
  readonly pending?: InputMaybe<Order_By>;
  readonly priority?: InputMaybe<Order_By>;
  readonly properties?: InputMaybe<Order_By>;
  readonly resources_aggregate?: InputMaybe<Resources_Aggregate_Order_By>;
  readonly rootowner?: InputMaybe<Order_By>;
  readonly sn?: InputMaybe<Order_By>;
  readonly symbol?: InputMaybe<Order_By>;
  readonly transferable?: InputMaybe<Order_By>;
  readonly tx_block?: InputMaybe<Order_By>;
  readonly tx_caller?: InputMaybe<Order_By>;
  readonly tx_pending?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "distinct_kanaria_nfts" */
export enum Distinct_Kanaria_Nfts_Select_Column {
  /** column name */
  Block = 'block',
  /** column name */
  Burned = 'burned',
  /** column name */
  CollectionId = 'collectionId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EquippedId = 'equipped_id',
  /** column name */
  Forsale = 'forsale',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MetadataDescription = 'metadata_description',
  /** column name */
  MetadataImage = 'metadata_image',
  /** column name */
  MetadataName = 'metadata_name',
  /** column name */
  MetadataRarity = 'metadata_rarity',
  /** column name */
  MetadataRarityPercentage = 'metadata_rarity_percentage',
  /** column name */
  Owner = 'owner',
  /** column name */
  Pending = 'pending',
  /** column name */
  Priority = 'priority',
  /** column name */
  Properties = 'properties',
  /** column name */
  Rootowner = 'rootowner',
  /** column name */
  Sn = 'sn',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  Transferable = 'transferable',
  /** column name */
  TxBlock = 'tx_block',
  /** column name */
  TxCaller = 'tx_caller',
  /** column name */
  TxPending = 'tx_pending',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Distinct_Kanaria_Nfts_Stddev_Fields = {
  readonly __typename?: 'distinct_kanaria_nfts_stddev_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly tx_block?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Distinct_Kanaria_Nfts_Stddev_Pop_Fields = {
  readonly __typename?: 'distinct_kanaria_nfts_stddev_pop_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly tx_block?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Distinct_Kanaria_Nfts_Stddev_Samp_Fields = {
  readonly __typename?: 'distinct_kanaria_nfts_stddev_samp_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly tx_block?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Distinct_Kanaria_Nfts_Sum_Fields = {
  readonly __typename?: 'distinct_kanaria_nfts_sum_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly forsale?: Maybe<Scalars['bigint']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Int']>;
  readonly tx_block?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Distinct_Kanaria_Nfts_Var_Pop_Fields = {
  readonly __typename?: 'distinct_kanaria_nfts_var_pop_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly tx_block?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Distinct_Kanaria_Nfts_Var_Samp_Fields = {
  readonly __typename?: 'distinct_kanaria_nfts_var_samp_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly tx_block?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Distinct_Kanaria_Nfts_Variance_Fields = {
  readonly __typename?: 'distinct_kanaria_nfts_variance_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly tx_block?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "distinct_nfts" */
export type Distinct_Nfts = {
  readonly __typename?: 'distinct_nfts';
  readonly block?: Maybe<Scalars['Int']>;
  readonly burned?: Maybe<Scalars['String']>;
  /** An array relationship */
  readonly children: ReadonlyArray<Nfts>;
  /** An aggregate relationship */
  readonly children_aggregate: Nfts_Aggregate;
  /** An object relationship */
  readonly collection?: Maybe<Collections>;
  readonly collectionId?: Maybe<Scalars['String']>;
  /** An object relationship */
  readonly dutchie?: Maybe<Dutchie>;
  readonly equipped_id?: Maybe<Scalars['String']>;
  readonly forsale?: Maybe<Scalars['bigint']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly metadata_content_type?: Maybe<Scalars['String']>;
  readonly metadata_image?: Maybe<Scalars['String']>;
  readonly metadata_name?: Maybe<Scalars['String']>;
  readonly metadata_rarity?: Maybe<Scalars['String']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly pending?: Maybe<Scalars['Boolean']>;
  readonly priority?: Maybe<Scalars['jsonb']>;
  readonly properties?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  readonly resources: ReadonlyArray<Resources>;
  /** An aggregate relationship */
  readonly resources_aggregate: Resources_Aggregate;
  readonly rootowner?: Maybe<Scalars['String']>;
  /** An array relationship */
  readonly singular_curated: ReadonlyArray<Singular_Curated>;
  /** An aggregate relationship */
  readonly singular_curated_aggregate: Singular_Curated_Aggregate;
  /** An array relationship */
  readonly singular_nsfw: ReadonlyArray<Singular_Nsfw_Nfts>;
  /** An aggregate relationship */
  readonly singular_nsfw_aggregate: Singular_Nsfw_Nfts_Aggregate;
  readonly sn?: Maybe<Scalars['String']>;
  readonly symbol?: Maybe<Scalars['String']>;
  readonly transferable?: Maybe<Scalars['Int']>;
  readonly tx_block?: Maybe<Scalars['Int']>;
  readonly tx_caller?: Maybe<Scalars['String']>;
  readonly tx_pending?: Maybe<Scalars['Boolean']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsChildrenArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsChildren_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsPriorityArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsPropertiesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsResourcesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsResources_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsSingular_CuratedArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>;
  where?: InputMaybe<Singular_Curated_Bool_Exp>;
};


/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsSingular_Curated_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>;
  where?: InputMaybe<Singular_Curated_Bool_Exp>;
};


/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsSingular_NsfwArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>;
  where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>;
};


/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsSingular_Nsfw_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>;
  where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>;
};

/** aggregated selection of "distinct_nfts" */
export type Distinct_Nfts_Aggregate = {
  readonly __typename?: 'distinct_nfts_aggregate';
  readonly aggregate?: Maybe<Distinct_Nfts_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Distinct_Nfts>;
};

/** aggregate fields of "distinct_nfts" */
export type Distinct_Nfts_Aggregate_Fields = {
  readonly __typename?: 'distinct_nfts_aggregate_fields';
  readonly avg?: Maybe<Distinct_Nfts_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Distinct_Nfts_Max_Fields>;
  readonly min?: Maybe<Distinct_Nfts_Min_Fields>;
  readonly stddev?: Maybe<Distinct_Nfts_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Distinct_Nfts_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Distinct_Nfts_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Distinct_Nfts_Sum_Fields>;
  readonly var_pop?: Maybe<Distinct_Nfts_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Distinct_Nfts_Var_Samp_Fields>;
  readonly variance?: Maybe<Distinct_Nfts_Variance_Fields>;
};


/** aggregate fields of "distinct_nfts" */
export type Distinct_Nfts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Distinct_Nfts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Distinct_Nfts_Avg_Fields = {
  readonly __typename?: 'distinct_nfts_avg_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly tx_block?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "distinct_nfts". All fields are combined with a logical 'AND'. */
export type Distinct_Nfts_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Distinct_Nfts_Bool_Exp>>;
  readonly _not?: InputMaybe<Distinct_Nfts_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Distinct_Nfts_Bool_Exp>>;
  readonly block?: InputMaybe<Int_Comparison_Exp>;
  readonly burned?: InputMaybe<String_Comparison_Exp>;
  readonly children?: InputMaybe<Nfts_Bool_Exp>;
  readonly collection?: InputMaybe<Collections_Bool_Exp>;
  readonly collectionId?: InputMaybe<String_Comparison_Exp>;
  readonly dutchie?: InputMaybe<Dutchie_Bool_Exp>;
  readonly equipped_id?: InputMaybe<String_Comparison_Exp>;
  readonly forsale?: InputMaybe<Bigint_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly metadata?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_content_type?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_image?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_name?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_rarity?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_rarity_percentage?: InputMaybe<Float_Comparison_Exp>;
  readonly owner?: InputMaybe<String_Comparison_Exp>;
  readonly pending?: InputMaybe<Boolean_Comparison_Exp>;
  readonly priority?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly properties?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly resources?: InputMaybe<Resources_Bool_Exp>;
  readonly rootowner?: InputMaybe<String_Comparison_Exp>;
  readonly singular_curated?: InputMaybe<Singular_Curated_Bool_Exp>;
  readonly singular_nsfw?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>;
  readonly sn?: InputMaybe<String_Comparison_Exp>;
  readonly symbol?: InputMaybe<String_Comparison_Exp>;
  readonly transferable?: InputMaybe<Int_Comparison_Exp>;
  readonly tx_block?: InputMaybe<Int_Comparison_Exp>;
  readonly tx_caller?: InputMaybe<String_Comparison_Exp>;
  readonly tx_pending?: InputMaybe<Boolean_Comparison_Exp>;
  readonly updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Distinct_Nfts_Max_Fields = {
  readonly __typename?: 'distinct_nfts_max_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly burned?: Maybe<Scalars['String']>;
  readonly collectionId?: Maybe<Scalars['String']>;
  readonly equipped_id?: Maybe<Scalars['String']>;
  readonly forsale?: Maybe<Scalars['bigint']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly metadata_content_type?: Maybe<Scalars['String']>;
  readonly metadata_image?: Maybe<Scalars['String']>;
  readonly metadata_name?: Maybe<Scalars['String']>;
  readonly metadata_rarity?: Maybe<Scalars['String']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly rootowner?: Maybe<Scalars['String']>;
  readonly sn?: Maybe<Scalars['String']>;
  readonly symbol?: Maybe<Scalars['String']>;
  readonly transferable?: Maybe<Scalars['Int']>;
  readonly tx_block?: Maybe<Scalars['Int']>;
  readonly tx_caller?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Distinct_Nfts_Min_Fields = {
  readonly __typename?: 'distinct_nfts_min_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly burned?: Maybe<Scalars['String']>;
  readonly collectionId?: Maybe<Scalars['String']>;
  readonly equipped_id?: Maybe<Scalars['String']>;
  readonly forsale?: Maybe<Scalars['bigint']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly metadata_content_type?: Maybe<Scalars['String']>;
  readonly metadata_image?: Maybe<Scalars['String']>;
  readonly metadata_name?: Maybe<Scalars['String']>;
  readonly metadata_rarity?: Maybe<Scalars['String']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly rootowner?: Maybe<Scalars['String']>;
  readonly sn?: Maybe<Scalars['String']>;
  readonly symbol?: Maybe<Scalars['String']>;
  readonly transferable?: Maybe<Scalars['Int']>;
  readonly tx_block?: Maybe<Scalars['Int']>;
  readonly tx_caller?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};

/** Ordering options when selecting data from "distinct_nfts". */
export type Distinct_Nfts_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly burned?: InputMaybe<Order_By>;
  readonly children_aggregate?: InputMaybe<Nfts_Aggregate_Order_By>;
  readonly collection?: InputMaybe<Collections_Order_By>;
  readonly collectionId?: InputMaybe<Order_By>;
  readonly dutchie?: InputMaybe<Dutchie_Order_By>;
  readonly equipped_id?: InputMaybe<Order_By>;
  readonly forsale?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly metadata_content_type?: InputMaybe<Order_By>;
  readonly metadata_image?: InputMaybe<Order_By>;
  readonly metadata_name?: InputMaybe<Order_By>;
  readonly metadata_rarity?: InputMaybe<Order_By>;
  readonly metadata_rarity_percentage?: InputMaybe<Order_By>;
  readonly owner?: InputMaybe<Order_By>;
  readonly pending?: InputMaybe<Order_By>;
  readonly priority?: InputMaybe<Order_By>;
  readonly properties?: InputMaybe<Order_By>;
  readonly resources_aggregate?: InputMaybe<Resources_Aggregate_Order_By>;
  readonly rootowner?: InputMaybe<Order_By>;
  readonly singular_curated_aggregate?: InputMaybe<Singular_Curated_Aggregate_Order_By>;
  readonly singular_nsfw_aggregate?: InputMaybe<Singular_Nsfw_Nfts_Aggregate_Order_By>;
  readonly sn?: InputMaybe<Order_By>;
  readonly symbol?: InputMaybe<Order_By>;
  readonly transferable?: InputMaybe<Order_By>;
  readonly tx_block?: InputMaybe<Order_By>;
  readonly tx_caller?: InputMaybe<Order_By>;
  readonly tx_pending?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "distinct_nfts" */
export enum Distinct_Nfts_Select_Column {
  /** column name */
  Block = 'block',
  /** column name */
  Burned = 'burned',
  /** column name */
  CollectionId = 'collectionId',
  /** column name */
  EquippedId = 'equipped_id',
  /** column name */
  Forsale = 'forsale',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MetadataContentType = 'metadata_content_type',
  /** column name */
  MetadataImage = 'metadata_image',
  /** column name */
  MetadataName = 'metadata_name',
  /** column name */
  MetadataRarity = 'metadata_rarity',
  /** column name */
  MetadataRarityPercentage = 'metadata_rarity_percentage',
  /** column name */
  Owner = 'owner',
  /** column name */
  Pending = 'pending',
  /** column name */
  Priority = 'priority',
  /** column name */
  Properties = 'properties',
  /** column name */
  Rootowner = 'rootowner',
  /** column name */
  Sn = 'sn',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  Transferable = 'transferable',
  /** column name */
  TxBlock = 'tx_block',
  /** column name */
  TxCaller = 'tx_caller',
  /** column name */
  TxPending = 'tx_pending',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Distinct_Nfts_Stddev_Fields = {
  readonly __typename?: 'distinct_nfts_stddev_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly tx_block?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Distinct_Nfts_Stddev_Pop_Fields = {
  readonly __typename?: 'distinct_nfts_stddev_pop_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly tx_block?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Distinct_Nfts_Stddev_Samp_Fields = {
  readonly __typename?: 'distinct_nfts_stddev_samp_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly tx_block?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Distinct_Nfts_Sum_Fields = {
  readonly __typename?: 'distinct_nfts_sum_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly forsale?: Maybe<Scalars['bigint']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Int']>;
  readonly tx_block?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Distinct_Nfts_Var_Pop_Fields = {
  readonly __typename?: 'distinct_nfts_var_pop_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly tx_block?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Distinct_Nfts_Var_Samp_Fields = {
  readonly __typename?: 'distinct_nfts_var_samp_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly tx_block?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Distinct_Nfts_Variance_Fields = {
  readonly __typename?: 'distinct_nfts_variance_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly tx_block?: Maybe<Scalars['Float']>;
};

/**
 * nfts dutchi auction table
 *
 *
 * columns and relationships of "dutchie"
 *
 */
export type Dutchie = {
  readonly __typename?: 'dutchie';
  readonly active: Scalars['Boolean'];
  readonly current_price: Scalars['bigint'];
  readonly id: Scalars['Int'];
  readonly initial_price: Scalars['bigint'];
  readonly interval?: Maybe<Scalars['smallint']>;
  readonly min_price: Scalars['bigint'];
  /** An object relationship */
  readonly nft?: Maybe<Nfts>;
  readonly nft_id: Scalars['String'];
  readonly reduction: Scalars['numeric'];
  readonly sold: Scalars['Boolean'];
  readonly start_time: Scalars['timestamptz'];
  readonly tick: Scalars['Int'];
};

/** Boolean expression to filter rows from the table "dutchie". All fields are combined with a logical 'AND'. */
export type Dutchie_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Dutchie_Bool_Exp>>;
  readonly _not?: InputMaybe<Dutchie_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Dutchie_Bool_Exp>>;
  readonly active?: InputMaybe<Boolean_Comparison_Exp>;
  readonly current_price?: InputMaybe<Bigint_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly initial_price?: InputMaybe<Bigint_Comparison_Exp>;
  readonly interval?: InputMaybe<Smallint_Comparison_Exp>;
  readonly min_price?: InputMaybe<Bigint_Comparison_Exp>;
  readonly nft?: InputMaybe<Nfts_Bool_Exp>;
  readonly nft_id?: InputMaybe<String_Comparison_Exp>;
  readonly reduction?: InputMaybe<Numeric_Comparison_Exp>;
  readonly sold?: InputMaybe<Boolean_Comparison_Exp>;
  readonly start_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly tick?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "dutchie". */
export type Dutchie_Order_By = {
  readonly active?: InputMaybe<Order_By>;
  readonly current_price?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly initial_price?: InputMaybe<Order_By>;
  readonly interval?: InputMaybe<Order_By>;
  readonly min_price?: InputMaybe<Order_By>;
  readonly nft?: InputMaybe<Nfts_Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
  readonly reduction?: InputMaybe<Order_By>;
  readonly sold?: InputMaybe<Order_By>;
  readonly start_time?: InputMaybe<Order_By>;
  readonly tick?: InputMaybe<Order_By>;
};

/** select columns of table "dutchie" */
export enum Dutchie_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CurrentPrice = 'current_price',
  /** column name */
  Id = 'id',
  /** column name */
  InitialPrice = 'initial_price',
  /** column name */
  Interval = 'interval',
  /** column name */
  MinPrice = 'min_price',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  Reduction = 'reduction',
  /** column name */
  Sold = 'sold',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Tick = 'tick'
}

/** columns and relationships of "gems_enabled" */
export type Gems_Enabled = {
  readonly __typename?: 'gems_enabled';
  readonly enabled: Scalars['Boolean'];
  readonly id: Scalars['String'];
  /** An object relationship */
  readonly nft?: Maybe<Nfts>;
};

/** Boolean expression to filter rows from the table "gems_enabled". All fields are combined with a logical 'AND'. */
export type Gems_Enabled_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Gems_Enabled_Bool_Exp>>;
  readonly _not?: InputMaybe<Gems_Enabled_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Gems_Enabled_Bool_Exp>>;
  readonly enabled?: InputMaybe<Boolean_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly nft?: InputMaybe<Nfts_Bool_Exp>;
};

/** Ordering options when selecting data from "gems_enabled". */
export type Gems_Enabled_Order_By = {
  readonly enabled?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly nft?: InputMaybe<Nfts_Order_By>;
};

/** select columns of table "gems_enabled" */
export enum Gems_Enabled_Select_Column {
  /** column name */
  Enabled = 'enabled',
  /** column name */
  Id = 'id'
}

export type Get_By_Unicode_Args = {
  readonly nft?: InputMaybe<Scalars['String']>;
};

export type Get_Ordered_Changes_Stats_Args = {
  readonly optype?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "hatched_birds" */
export type Hatched_Birds = {
  readonly __typename?: 'hatched_birds';
  readonly id: Scalars['String'];
};

/** Boolean expression to filter rows from the table "hatched_birds". All fields are combined with a logical 'AND'. */
export type Hatched_Birds_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Hatched_Birds_Bool_Exp>>;
  readonly _not?: InputMaybe<Hatched_Birds_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Hatched_Birds_Bool_Exp>>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "hatched_birds" */
export type Hatched_Birds_Insert_Input = {
  readonly id?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "hatched_birds" */
export type Hatched_Birds_Mutation_Response = {
  readonly __typename?: 'hatched_birds_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Hatched_Birds>;
};

/** Ordering options when selecting data from "hatched_birds". */
export type Hatched_Birds_Order_By = {
  readonly id?: InputMaybe<Order_By>;
};

/** select columns of table "hatched_birds" */
export enum Hatched_Birds_Select_Column {
  /** column name */
  Id = 'id'
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  readonly _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  readonly _contains?: InputMaybe<Scalars['jsonb']>;
  readonly _eq?: InputMaybe<Scalars['jsonb']>;
  readonly _gt?: InputMaybe<Scalars['jsonb']>;
  readonly _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  readonly _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  readonly _has_keys_all?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  readonly _has_keys_any?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['jsonb']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['jsonb']>;
  readonly _lte?: InputMaybe<Scalars['jsonb']>;
  readonly _neq?: InputMaybe<Scalars['jsonb']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['jsonb']>>;
};

/** columns and relationships of "nfts" */
export type Nfts = {
  readonly __typename?: 'nfts';
  readonly block: Scalars['Int'];
  readonly burned: Scalars['String'];
  /** An array relationship */
  readonly changes: ReadonlyArray<Changes>;
  /** An aggregate relationship */
  readonly changes_aggregate: Changes_Aggregate;
  /** An array relationship */
  readonly children: ReadonlyArray<Nfts>;
  /** An aggregate relationship */
  readonly children_aggregate: Nfts_Aggregate;
  /** An object relationship */
  readonly collection?: Maybe<Collections>;
  readonly collectionId: Scalars['String'];
  readonly created_at: Scalars['timestamptz'];
  /** An object relationship */
  readonly dutchie?: Maybe<Dutchie>;
  /** An object relationship */
  readonly equipped?: Maybe<Parts>;
  readonly equipped_id?: Maybe<Scalars['String']>;
  readonly forsale: Scalars['bigint'];
  /** An object relationship */
  readonly gem_enabled?: Maybe<Gems_Enabled>;
  readonly id: Scalars['String'];
  readonly id_md5?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly metadata_content_type?: Maybe<Scalars['String']>;
  readonly metadata_description?: Maybe<Scalars['String']>;
  readonly metadata_image?: Maybe<Scalars['String']>;
  readonly metadata_name?: Maybe<Scalars['String']>;
  readonly metadata_properties?: Maybe<Scalars['jsonb']>;
  readonly metadata_rarity?: Maybe<Scalars['String']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly owner: Scalars['String'];
  /** An object relationship */
  readonly parent?: Maybe<Nfts>;
  readonly pending?: Maybe<Scalars['Boolean']>;
  readonly priority: Scalars['jsonb'];
  readonly properties?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  readonly resources: ReadonlyArray<Resources>;
  /** An aggregate relationship */
  readonly resources_aggregate: Resources_Aggregate;
  readonly rootowner: Scalars['String'];
  /** An array relationship */
  readonly singular_curated: ReadonlyArray<Singular_Curated>;
  /** An aggregate relationship */
  readonly singular_curated_aggregate: Singular_Curated_Aggregate;
  /** An array relationship */
  readonly singular_nsfw: ReadonlyArray<Singular_Nsfw_Nfts>;
  /** An aggregate relationship */
  readonly singular_nsfw_aggregate: Singular_Nsfw_Nfts_Aggregate;
  readonly sn: Scalars['String'];
  readonly symbol: Scalars['String'];
  readonly transferable: Scalars['Int'];
  readonly txBlock?: Maybe<Scalars['Int']>;
  readonly txCaller?: Maybe<Scalars['String']>;
  readonly txPending: Scalars['Boolean'];
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "nfts" */
export type NftsChangesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>;
  where?: InputMaybe<Changes_Bool_Exp>;
};


/** columns and relationships of "nfts" */
export type NftsChanges_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>;
  where?: InputMaybe<Changes_Bool_Exp>;
};


/** columns and relationships of "nfts" */
export type NftsChildrenArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


/** columns and relationships of "nfts" */
export type NftsChildren_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


/** columns and relationships of "nfts" */
export type NftsMetadata_PropertiesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "nfts" */
export type NftsPriorityArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "nfts" */
export type NftsPropertiesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "nfts" */
export type NftsResourcesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


/** columns and relationships of "nfts" */
export type NftsResources_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


/** columns and relationships of "nfts" */
export type NftsSingular_CuratedArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>;
  where?: InputMaybe<Singular_Curated_Bool_Exp>;
};


/** columns and relationships of "nfts" */
export type NftsSingular_Curated_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>;
  where?: InputMaybe<Singular_Curated_Bool_Exp>;
};


/** columns and relationships of "nfts" */
export type NftsSingular_NsfwArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>;
  where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>;
};


/** columns and relationships of "nfts" */
export type NftsSingular_Nsfw_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>;
  where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>;
};

/** aggregated selection of "nfts" */
export type Nfts_Aggregate = {
  readonly __typename?: 'nfts_aggregate';
  readonly aggregate?: Maybe<Nfts_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Nfts>;
};

/** aggregate fields of "nfts" */
export type Nfts_Aggregate_Fields = {
  readonly __typename?: 'nfts_aggregate_fields';
  readonly avg?: Maybe<Nfts_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Nfts_Max_Fields>;
  readonly min?: Maybe<Nfts_Min_Fields>;
  readonly stddev?: Maybe<Nfts_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Nfts_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Nfts_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Nfts_Sum_Fields>;
  readonly var_pop?: Maybe<Nfts_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Nfts_Var_Samp_Fields>;
  readonly variance?: Maybe<Nfts_Variance_Fields>;
};


/** aggregate fields of "nfts" */
export type Nfts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nfts" */
export type Nfts_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Nfts_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Nfts_Max_Order_By>;
  readonly min?: InputMaybe<Nfts_Min_Order_By>;
  readonly stddev?: InputMaybe<Nfts_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Nfts_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Nfts_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Nfts_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Nfts_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Nfts_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Nfts_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Nfts_Avg_Fields = {
  readonly __typename?: 'nfts_avg_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly txBlock?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nfts" */
export type Nfts_Avg_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly forsale?: InputMaybe<Order_By>;
  readonly metadata_rarity_percentage?: InputMaybe<Order_By>;
  readonly transferable?: InputMaybe<Order_By>;
  readonly txBlock?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nfts". All fields are combined with a logical 'AND'. */
export type Nfts_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Nfts_Bool_Exp>>;
  readonly _not?: InputMaybe<Nfts_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Nfts_Bool_Exp>>;
  readonly block?: InputMaybe<Int_Comparison_Exp>;
  readonly burned?: InputMaybe<String_Comparison_Exp>;
  readonly changes?: InputMaybe<Changes_Bool_Exp>;
  readonly children?: InputMaybe<Nfts_Bool_Exp>;
  readonly collection?: InputMaybe<Collections_Bool_Exp>;
  readonly collectionId?: InputMaybe<String_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly dutchie?: InputMaybe<Dutchie_Bool_Exp>;
  readonly equipped?: InputMaybe<Parts_Bool_Exp>;
  readonly equipped_id?: InputMaybe<String_Comparison_Exp>;
  readonly forsale?: InputMaybe<Bigint_Comparison_Exp>;
  readonly gem_enabled?: InputMaybe<Gems_Enabled_Bool_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly id_md5?: InputMaybe<String_Comparison_Exp>;
  readonly metadata?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_content_type?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_description?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_image?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_name?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_properties?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly metadata_rarity?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_rarity_percentage?: InputMaybe<Float_Comparison_Exp>;
  readonly owner?: InputMaybe<String_Comparison_Exp>;
  readonly parent?: InputMaybe<Nfts_Bool_Exp>;
  readonly pending?: InputMaybe<Boolean_Comparison_Exp>;
  readonly priority?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly properties?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly resources?: InputMaybe<Resources_Bool_Exp>;
  readonly rootowner?: InputMaybe<String_Comparison_Exp>;
  readonly singular_curated?: InputMaybe<Singular_Curated_Bool_Exp>;
  readonly singular_nsfw?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>;
  readonly sn?: InputMaybe<String_Comparison_Exp>;
  readonly symbol?: InputMaybe<String_Comparison_Exp>;
  readonly transferable?: InputMaybe<Int_Comparison_Exp>;
  readonly txBlock?: InputMaybe<Int_Comparison_Exp>;
  readonly txCaller?: InputMaybe<String_Comparison_Exp>;
  readonly txPending?: InputMaybe<Boolean_Comparison_Exp>;
  readonly updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nfts_Max_Fields = {
  readonly __typename?: 'nfts_max_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly burned?: Maybe<Scalars['String']>;
  readonly collectionId?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly equipped_id?: Maybe<Scalars['String']>;
  readonly forsale?: Maybe<Scalars['bigint']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly id_md5?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly metadata_content_type?: Maybe<Scalars['String']>;
  readonly metadata_description?: Maybe<Scalars['String']>;
  readonly metadata_image?: Maybe<Scalars['String']>;
  readonly metadata_name?: Maybe<Scalars['String']>;
  readonly metadata_rarity?: Maybe<Scalars['String']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly rootowner?: Maybe<Scalars['String']>;
  readonly sn?: Maybe<Scalars['String']>;
  readonly symbol?: Maybe<Scalars['String']>;
  readonly transferable?: Maybe<Scalars['Int']>;
  readonly txBlock?: Maybe<Scalars['Int']>;
  readonly txCaller?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "nfts" */
export type Nfts_Max_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly burned?: InputMaybe<Order_By>;
  readonly collectionId?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly equipped_id?: InputMaybe<Order_By>;
  readonly forsale?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly id_md5?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly metadata_content_type?: InputMaybe<Order_By>;
  readonly metadata_description?: InputMaybe<Order_By>;
  readonly metadata_image?: InputMaybe<Order_By>;
  readonly metadata_name?: InputMaybe<Order_By>;
  readonly metadata_rarity?: InputMaybe<Order_By>;
  readonly metadata_rarity_percentage?: InputMaybe<Order_By>;
  readonly owner?: InputMaybe<Order_By>;
  readonly rootowner?: InputMaybe<Order_By>;
  readonly sn?: InputMaybe<Order_By>;
  readonly symbol?: InputMaybe<Order_By>;
  readonly transferable?: InputMaybe<Order_By>;
  readonly txBlock?: InputMaybe<Order_By>;
  readonly txCaller?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nfts_Min_Fields = {
  readonly __typename?: 'nfts_min_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly burned?: Maybe<Scalars['String']>;
  readonly collectionId?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly equipped_id?: Maybe<Scalars['String']>;
  readonly forsale?: Maybe<Scalars['bigint']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly id_md5?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly metadata_content_type?: Maybe<Scalars['String']>;
  readonly metadata_description?: Maybe<Scalars['String']>;
  readonly metadata_image?: Maybe<Scalars['String']>;
  readonly metadata_name?: Maybe<Scalars['String']>;
  readonly metadata_rarity?: Maybe<Scalars['String']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly rootowner?: Maybe<Scalars['String']>;
  readonly sn?: Maybe<Scalars['String']>;
  readonly symbol?: Maybe<Scalars['String']>;
  readonly transferable?: Maybe<Scalars['Int']>;
  readonly txBlock?: Maybe<Scalars['Int']>;
  readonly txCaller?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "nfts" */
export type Nfts_Min_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly burned?: InputMaybe<Order_By>;
  readonly collectionId?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly equipped_id?: InputMaybe<Order_By>;
  readonly forsale?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly id_md5?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly metadata_content_type?: InputMaybe<Order_By>;
  readonly metadata_description?: InputMaybe<Order_By>;
  readonly metadata_image?: InputMaybe<Order_By>;
  readonly metadata_name?: InputMaybe<Order_By>;
  readonly metadata_rarity?: InputMaybe<Order_By>;
  readonly metadata_rarity_percentage?: InputMaybe<Order_By>;
  readonly owner?: InputMaybe<Order_By>;
  readonly rootowner?: InputMaybe<Order_By>;
  readonly sn?: InputMaybe<Order_By>;
  readonly symbol?: InputMaybe<Order_By>;
  readonly transferable?: InputMaybe<Order_By>;
  readonly txBlock?: InputMaybe<Order_By>;
  readonly txCaller?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "nfts". */
export type Nfts_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly burned?: InputMaybe<Order_By>;
  readonly changes_aggregate?: InputMaybe<Changes_Aggregate_Order_By>;
  readonly children_aggregate?: InputMaybe<Nfts_Aggregate_Order_By>;
  readonly collection?: InputMaybe<Collections_Order_By>;
  readonly collectionId?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly dutchie?: InputMaybe<Dutchie_Order_By>;
  readonly equipped?: InputMaybe<Parts_Order_By>;
  readonly equipped_id?: InputMaybe<Order_By>;
  readonly forsale?: InputMaybe<Order_By>;
  readonly gem_enabled?: InputMaybe<Gems_Enabled_Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly id_md5?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly metadata_content_type?: InputMaybe<Order_By>;
  readonly metadata_description?: InputMaybe<Order_By>;
  readonly metadata_image?: InputMaybe<Order_By>;
  readonly metadata_name?: InputMaybe<Order_By>;
  readonly metadata_properties?: InputMaybe<Order_By>;
  readonly metadata_rarity?: InputMaybe<Order_By>;
  readonly metadata_rarity_percentage?: InputMaybe<Order_By>;
  readonly owner?: InputMaybe<Order_By>;
  readonly parent?: InputMaybe<Nfts_Order_By>;
  readonly pending?: InputMaybe<Order_By>;
  readonly priority?: InputMaybe<Order_By>;
  readonly properties?: InputMaybe<Order_By>;
  readonly resources_aggregate?: InputMaybe<Resources_Aggregate_Order_By>;
  readonly rootowner?: InputMaybe<Order_By>;
  readonly singular_curated_aggregate?: InputMaybe<Singular_Curated_Aggregate_Order_By>;
  readonly singular_nsfw_aggregate?: InputMaybe<Singular_Nsfw_Nfts_Aggregate_Order_By>;
  readonly sn?: InputMaybe<Order_By>;
  readonly symbol?: InputMaybe<Order_By>;
  readonly transferable?: InputMaybe<Order_By>;
  readonly txBlock?: InputMaybe<Order_By>;
  readonly txCaller?: InputMaybe<Order_By>;
  readonly txPending?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
};

/** columns and relationships of "nfts_reactions_stats" */
export type Nfts_Reactions_Stats = {
  readonly __typename?: 'nfts_reactions_stats';
  readonly count?: Maybe<Scalars['bigint']>;
  readonly nft_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  readonly nft_reaction_stats: ReadonlyArray<Reactions>;
  /** An aggregate relationship */
  readonly nft_reaction_stats_aggregate: Reactions_Aggregate;
};


/** columns and relationships of "nfts_reactions_stats" */
export type Nfts_Reactions_StatsNft_Reaction_StatsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


/** columns and relationships of "nfts_reactions_stats" */
export type Nfts_Reactions_StatsNft_Reaction_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};

/** aggregated selection of "nfts_reactions_stats" */
export type Nfts_Reactions_Stats_Aggregate = {
  readonly __typename?: 'nfts_reactions_stats_aggregate';
  readonly aggregate?: Maybe<Nfts_Reactions_Stats_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Nfts_Reactions_Stats>;
};

/** aggregate fields of "nfts_reactions_stats" */
export type Nfts_Reactions_Stats_Aggregate_Fields = {
  readonly __typename?: 'nfts_reactions_stats_aggregate_fields';
  readonly avg?: Maybe<Nfts_Reactions_Stats_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Nfts_Reactions_Stats_Max_Fields>;
  readonly min?: Maybe<Nfts_Reactions_Stats_Min_Fields>;
  readonly stddev?: Maybe<Nfts_Reactions_Stats_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Nfts_Reactions_Stats_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Nfts_Reactions_Stats_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Nfts_Reactions_Stats_Sum_Fields>;
  readonly var_pop?: Maybe<Nfts_Reactions_Stats_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Nfts_Reactions_Stats_Var_Samp_Fields>;
  readonly variance?: Maybe<Nfts_Reactions_Stats_Variance_Fields>;
};


/** aggregate fields of "nfts_reactions_stats" */
export type Nfts_Reactions_Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nfts_Reactions_Stats_Avg_Fields = {
  readonly __typename?: 'nfts_reactions_stats_avg_fields';
  readonly count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nfts_reactions_stats". All fields are combined with a logical 'AND'. */
export type Nfts_Reactions_Stats_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Bool_Exp>>;
  readonly _not?: InputMaybe<Nfts_Reactions_Stats_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Bool_Exp>>;
  readonly count?: InputMaybe<Bigint_Comparison_Exp>;
  readonly nft_id?: InputMaybe<String_Comparison_Exp>;
  readonly nft_reaction_stats?: InputMaybe<Reactions_Bool_Exp>;
};

/** aggregate max on columns */
export type Nfts_Reactions_Stats_Max_Fields = {
  readonly __typename?: 'nfts_reactions_stats_max_fields';
  readonly count?: Maybe<Scalars['bigint']>;
  readonly nft_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Nfts_Reactions_Stats_Min_Fields = {
  readonly __typename?: 'nfts_reactions_stats_min_fields';
  readonly count?: Maybe<Scalars['bigint']>;
  readonly nft_id?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "nfts_reactions_stats". */
export type Nfts_Reactions_Stats_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
  readonly nft_reaction_stats_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
};

/** select columns of table "nfts_reactions_stats" */
export enum Nfts_Reactions_Stats_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  NftId = 'nft_id'
}

/** aggregate stddev on columns */
export type Nfts_Reactions_Stats_Stddev_Fields = {
  readonly __typename?: 'nfts_reactions_stats_stddev_fields';
  readonly count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nfts_Reactions_Stats_Stddev_Pop_Fields = {
  readonly __typename?: 'nfts_reactions_stats_stddev_pop_fields';
  readonly count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nfts_Reactions_Stats_Stddev_Samp_Fields = {
  readonly __typename?: 'nfts_reactions_stats_stddev_samp_fields';
  readonly count?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nfts_Reactions_Stats_Sum_Fields = {
  readonly __typename?: 'nfts_reactions_stats_sum_fields';
  readonly count?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Nfts_Reactions_Stats_Var_Pop_Fields = {
  readonly __typename?: 'nfts_reactions_stats_var_pop_fields';
  readonly count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nfts_Reactions_Stats_Var_Samp_Fields = {
  readonly __typename?: 'nfts_reactions_stats_var_samp_fields';
  readonly count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nfts_Reactions_Stats_Variance_Fields = {
  readonly __typename?: 'nfts_reactions_stats_variance_fields';
  readonly count?: Maybe<Scalars['Float']>;
};

/** select columns of table "nfts" */
export enum Nfts_Select_Column {
  /** column name */
  Block = 'block',
  /** column name */
  Burned = 'burned',
  /** column name */
  CollectionId = 'collectionId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EquippedId = 'equipped_id',
  /** column name */
  Forsale = 'forsale',
  /** column name */
  Id = 'id',
  /** column name */
  IdMd5 = 'id_md5',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MetadataContentType = 'metadata_content_type',
  /** column name */
  MetadataDescription = 'metadata_description',
  /** column name */
  MetadataImage = 'metadata_image',
  /** column name */
  MetadataName = 'metadata_name',
  /** column name */
  MetadataProperties = 'metadata_properties',
  /** column name */
  MetadataRarity = 'metadata_rarity',
  /** column name */
  MetadataRarityPercentage = 'metadata_rarity_percentage',
  /** column name */
  Owner = 'owner',
  /** column name */
  Pending = 'pending',
  /** column name */
  Priority = 'priority',
  /** column name */
  Properties = 'properties',
  /** column name */
  Rootowner = 'rootowner',
  /** column name */
  Sn = 'sn',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  Transferable = 'transferable',
  /** column name */
  TxBlock = 'txBlock',
  /** column name */
  TxCaller = 'txCaller',
  /** column name */
  TxPending = 'txPending',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "nfts_stats" */
export type Nfts_Stats = {
  readonly __typename?: 'nfts_stats';
  readonly collection_id?: Maybe<Scalars['String']>;
  readonly count?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "nfts_stats" */
export type Nfts_Stats_Aggregate = {
  readonly __typename?: 'nfts_stats_aggregate';
  readonly aggregate?: Maybe<Nfts_Stats_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Nfts_Stats>;
};

/** aggregate fields of "nfts_stats" */
export type Nfts_Stats_Aggregate_Fields = {
  readonly __typename?: 'nfts_stats_aggregate_fields';
  readonly avg?: Maybe<Nfts_Stats_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Nfts_Stats_Max_Fields>;
  readonly min?: Maybe<Nfts_Stats_Min_Fields>;
  readonly stddev?: Maybe<Nfts_Stats_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Nfts_Stats_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Nfts_Stats_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Nfts_Stats_Sum_Fields>;
  readonly var_pop?: Maybe<Nfts_Stats_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Nfts_Stats_Var_Samp_Fields>;
  readonly variance?: Maybe<Nfts_Stats_Variance_Fields>;
};


/** aggregate fields of "nfts_stats" */
export type Nfts_Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Nfts_Stats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nfts_Stats_Avg_Fields = {
  readonly __typename?: 'nfts_stats_avg_fields';
  readonly count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nfts_stats". All fields are combined with a logical 'AND'. */
export type Nfts_Stats_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Nfts_Stats_Bool_Exp>>;
  readonly _not?: InputMaybe<Nfts_Stats_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Nfts_Stats_Bool_Exp>>;
  readonly collection_id?: InputMaybe<String_Comparison_Exp>;
  readonly count?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nfts_Stats_Max_Fields = {
  readonly __typename?: 'nfts_stats_max_fields';
  readonly collection_id?: Maybe<Scalars['String']>;
  readonly count?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Nfts_Stats_Min_Fields = {
  readonly __typename?: 'nfts_stats_min_fields';
  readonly collection_id?: Maybe<Scalars['String']>;
  readonly count?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "nfts_stats". */
export type Nfts_Stats_Order_By = {
  readonly collection_id?: InputMaybe<Order_By>;
  readonly count?: InputMaybe<Order_By>;
};

/** select columns of table "nfts_stats" */
export enum Nfts_Stats_Select_Column {
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  Count = 'count'
}

/** aggregate stddev on columns */
export type Nfts_Stats_Stddev_Fields = {
  readonly __typename?: 'nfts_stats_stddev_fields';
  readonly count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nfts_Stats_Stddev_Pop_Fields = {
  readonly __typename?: 'nfts_stats_stddev_pop_fields';
  readonly count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nfts_Stats_Stddev_Samp_Fields = {
  readonly __typename?: 'nfts_stats_stddev_samp_fields';
  readonly count?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nfts_Stats_Sum_Fields = {
  readonly __typename?: 'nfts_stats_sum_fields';
  readonly count?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Nfts_Stats_Var_Pop_Fields = {
  readonly __typename?: 'nfts_stats_var_pop_fields';
  readonly count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nfts_Stats_Var_Samp_Fields = {
  readonly __typename?: 'nfts_stats_var_samp_fields';
  readonly count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nfts_Stats_Variance_Fields = {
  readonly __typename?: 'nfts_stats_variance_fields';
  readonly count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Nfts_Stddev_Fields = {
  readonly __typename?: 'nfts_stddev_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly txBlock?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nfts" */
export type Nfts_Stddev_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly forsale?: InputMaybe<Order_By>;
  readonly metadata_rarity_percentage?: InputMaybe<Order_By>;
  readonly transferable?: InputMaybe<Order_By>;
  readonly txBlock?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nfts_Stddev_Pop_Fields = {
  readonly __typename?: 'nfts_stddev_pop_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly txBlock?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nfts" */
export type Nfts_Stddev_Pop_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly forsale?: InputMaybe<Order_By>;
  readonly metadata_rarity_percentage?: InputMaybe<Order_By>;
  readonly transferable?: InputMaybe<Order_By>;
  readonly txBlock?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nfts_Stddev_Samp_Fields = {
  readonly __typename?: 'nfts_stddev_samp_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly txBlock?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nfts" */
export type Nfts_Stddev_Samp_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly forsale?: InputMaybe<Order_By>;
  readonly metadata_rarity_percentage?: InputMaybe<Order_By>;
  readonly transferable?: InputMaybe<Order_By>;
  readonly txBlock?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Nfts_Sum_Fields = {
  readonly __typename?: 'nfts_sum_fields';
  readonly block?: Maybe<Scalars['Int']>;
  readonly forsale?: Maybe<Scalars['bigint']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Int']>;
  readonly txBlock?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "nfts" */
export type Nfts_Sum_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly forsale?: InputMaybe<Order_By>;
  readonly metadata_rarity_percentage?: InputMaybe<Order_By>;
  readonly transferable?: InputMaybe<Order_By>;
  readonly txBlock?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Nfts_Var_Pop_Fields = {
  readonly __typename?: 'nfts_var_pop_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly txBlock?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nfts" */
export type Nfts_Var_Pop_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly forsale?: InputMaybe<Order_By>;
  readonly metadata_rarity_percentage?: InputMaybe<Order_By>;
  readonly transferable?: InputMaybe<Order_By>;
  readonly txBlock?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nfts_Var_Samp_Fields = {
  readonly __typename?: 'nfts_var_samp_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly txBlock?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nfts" */
export type Nfts_Var_Samp_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly forsale?: InputMaybe<Order_By>;
  readonly metadata_rarity_percentage?: InputMaybe<Order_By>;
  readonly transferable?: InputMaybe<Order_By>;
  readonly txBlock?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nfts_Variance_Fields = {
  readonly __typename?: 'nfts_variance_fields';
  readonly block?: Maybe<Scalars['Float']>;
  readonly forsale?: Maybe<Scalars['Float']>;
  readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>;
  readonly transferable?: Maybe<Scalars['Float']>;
  readonly txBlock?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nfts" */
export type Nfts_Variance_Order_By = {
  readonly block?: InputMaybe<Order_By>;
  readonly forsale?: InputMaybe<Order_By>;
  readonly metadata_rarity_percentage?: InputMaybe<Order_By>;
  readonly transferable?: InputMaybe<Order_By>;
  readonly txBlock?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['numeric']>;
  readonly _gt?: InputMaybe<Scalars['numeric']>;
  readonly _gte?: InputMaybe<Scalars['numeric']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['numeric']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['numeric']>;
  readonly _lte?: InputMaybe<Scalars['numeric']>;
  readonly _neq?: InputMaybe<Scalars['numeric']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "parts" */
export type Parts = {
  readonly __typename?: 'parts';
  /** An object relationship */
  readonly base: Bases;
  readonly base_id: Scalars['String'];
  readonly equippable?: Maybe<Scalars['jsonb']>;
  readonly id: Scalars['String'];
  readonly metadata?: Maybe<Scalars['String']>;
  /** An array relationship */
  readonly nfts_equipped: ReadonlyArray<Nfts>;
  /** An aggregate relationship */
  readonly nfts_equipped_aggregate: Nfts_Aggregate;
  readonly part_id: Scalars['String'];
  /** An array relationship */
  readonly resources: ReadonlyArray<Resources>;
  /** An aggregate relationship */
  readonly resources_aggregate: Resources_Aggregate;
  /** An object relationship */
  readonly resources_part?: Maybe<Resources_Parts>;
  readonly src?: Maybe<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly z: Scalars['Int'];
};


/** columns and relationships of "parts" */
export type PartsEquippableArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "parts" */
export type PartsNfts_EquippedArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


/** columns and relationships of "parts" */
export type PartsNfts_Equipped_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


/** columns and relationships of "parts" */
export type PartsResourcesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


/** columns and relationships of "parts" */
export type PartsResources_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};

/** aggregated selection of "parts" */
export type Parts_Aggregate = {
  readonly __typename?: 'parts_aggregate';
  readonly aggregate?: Maybe<Parts_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Parts>;
};

/** aggregate fields of "parts" */
export type Parts_Aggregate_Fields = {
  readonly __typename?: 'parts_aggregate_fields';
  readonly avg?: Maybe<Parts_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Parts_Max_Fields>;
  readonly min?: Maybe<Parts_Min_Fields>;
  readonly stddev?: Maybe<Parts_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Parts_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Parts_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Parts_Sum_Fields>;
  readonly var_pop?: Maybe<Parts_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Parts_Var_Samp_Fields>;
  readonly variance?: Maybe<Parts_Variance_Fields>;
};


/** aggregate fields of "parts" */
export type Parts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Parts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "parts" */
export type Parts_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Parts_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Parts_Max_Order_By>;
  readonly min?: InputMaybe<Parts_Min_Order_By>;
  readonly stddev?: InputMaybe<Parts_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Parts_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Parts_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Parts_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Parts_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Parts_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Parts_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Parts_Avg_Fields = {
  readonly __typename?: 'parts_avg_fields';
  readonly z?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "parts" */
export type Parts_Avg_Order_By = {
  readonly z?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "parts". All fields are combined with a logical 'AND'. */
export type Parts_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Parts_Bool_Exp>>;
  readonly _not?: InputMaybe<Parts_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Parts_Bool_Exp>>;
  readonly base?: InputMaybe<Bases_Bool_Exp>;
  readonly base_id?: InputMaybe<String_Comparison_Exp>;
  readonly equippable?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly metadata?: InputMaybe<String_Comparison_Exp>;
  readonly nfts_equipped?: InputMaybe<Nfts_Bool_Exp>;
  readonly part_id?: InputMaybe<String_Comparison_Exp>;
  readonly resources?: InputMaybe<Resources_Bool_Exp>;
  readonly resources_part?: InputMaybe<Resources_Parts_Bool_Exp>;
  readonly src?: InputMaybe<String_Comparison_Exp>;
  readonly type?: InputMaybe<String_Comparison_Exp>;
  readonly z?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Parts_Max_Fields = {
  readonly __typename?: 'parts_max_fields';
  readonly base_id?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly part_id?: Maybe<Scalars['String']>;
  readonly src?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly z?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "parts" */
export type Parts_Max_Order_By = {
  readonly base_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly part_id?: InputMaybe<Order_By>;
  readonly src?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly z?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Parts_Min_Fields = {
  readonly __typename?: 'parts_min_fields';
  readonly base_id?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly part_id?: Maybe<Scalars['String']>;
  readonly src?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly z?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "parts" */
export type Parts_Min_Order_By = {
  readonly base_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly part_id?: InputMaybe<Order_By>;
  readonly src?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly z?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "parts". */
export type Parts_Order_By = {
  readonly base?: InputMaybe<Bases_Order_By>;
  readonly base_id?: InputMaybe<Order_By>;
  readonly equippable?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly nfts_equipped_aggregate?: InputMaybe<Nfts_Aggregate_Order_By>;
  readonly part_id?: InputMaybe<Order_By>;
  readonly resources_aggregate?: InputMaybe<Resources_Aggregate_Order_By>;
  readonly resources_part?: InputMaybe<Resources_Parts_Order_By>;
  readonly src?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly z?: InputMaybe<Order_By>;
};

/** select columns of table "parts" */
export enum Parts_Select_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  Equippable = 'equippable',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  PartId = 'part_id',
  /** column name */
  Src = 'src',
  /** column name */
  Type = 'type',
  /** column name */
  Z = 'z'
}

/** aggregate stddev on columns */
export type Parts_Stddev_Fields = {
  readonly __typename?: 'parts_stddev_fields';
  readonly z?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "parts" */
export type Parts_Stddev_Order_By = {
  readonly z?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Parts_Stddev_Pop_Fields = {
  readonly __typename?: 'parts_stddev_pop_fields';
  readonly z?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "parts" */
export type Parts_Stddev_Pop_Order_By = {
  readonly z?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Parts_Stddev_Samp_Fields = {
  readonly __typename?: 'parts_stddev_samp_fields';
  readonly z?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "parts" */
export type Parts_Stddev_Samp_Order_By = {
  readonly z?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Parts_Sum_Fields = {
  readonly __typename?: 'parts_sum_fields';
  readonly z?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "parts" */
export type Parts_Sum_Order_By = {
  readonly z?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Parts_Var_Pop_Fields = {
  readonly __typename?: 'parts_var_pop_fields';
  readonly z?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "parts" */
export type Parts_Var_Pop_Order_By = {
  readonly z?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Parts_Var_Samp_Fields = {
  readonly __typename?: 'parts_var_samp_fields';
  readonly z?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "parts" */
export type Parts_Var_Samp_Order_By = {
  readonly z?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Parts_Variance_Fields = {
  readonly __typename?: 'parts_variance_fields';
  readonly z?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "parts" */
export type Parts_Variance_Order_By = {
  readonly z?: InputMaybe<Order_By>;
};

/** columns and relationships of "reactions" */
export type Reactions = {
  readonly __typename?: 'reactions';
  readonly created_at: Scalars['timestamptz'];
  readonly id: Scalars['Int'];
  readonly nft_id: Scalars['String'];
  readonly owner: Scalars['String'];
  /** An array relationship */
  readonly reactions_unicode: ReadonlyArray<Reactions_Unicode>;
  /** An aggregate relationship */
  readonly reactions_unicode_aggregate: Reactions_Unicode_Aggregate;
  /** An object relationship */
  readonly stats?: Maybe<Nfts_Reactions_Stats>;
  readonly unicode: Scalars['String'];
  /** An array relationship */
  readonly user_reactions: ReadonlyArray<Reactions_Users>;
  /** An aggregate relationship */
  readonly user_reactions_aggregate: Reactions_Users_Aggregate;
};


/** columns and relationships of "reactions" */
export type ReactionsReactions_UnicodeArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Unicode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Unicode_Order_By>>;
  where?: InputMaybe<Reactions_Unicode_Bool_Exp>;
};


/** columns and relationships of "reactions" */
export type ReactionsReactions_Unicode_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Unicode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Unicode_Order_By>>;
  where?: InputMaybe<Reactions_Unicode_Bool_Exp>;
};


/** columns and relationships of "reactions" */
export type ReactionsUser_ReactionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Users_Order_By>>;
  where?: InputMaybe<Reactions_Users_Bool_Exp>;
};


/** columns and relationships of "reactions" */
export type ReactionsUser_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reactions_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Reactions_Users_Order_By>>;
  where?: InputMaybe<Reactions_Users_Bool_Exp>;
};

/** aggregated selection of "reactions" */
export type Reactions_Aggregate = {
  readonly __typename?: 'reactions_aggregate';
  readonly aggregate?: Maybe<Reactions_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Reactions>;
};

/** aggregate fields of "reactions" */
export type Reactions_Aggregate_Fields = {
  readonly __typename?: 'reactions_aggregate_fields';
  readonly avg?: Maybe<Reactions_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Reactions_Max_Fields>;
  readonly min?: Maybe<Reactions_Min_Fields>;
  readonly stddev?: Maybe<Reactions_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Reactions_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Reactions_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Reactions_Sum_Fields>;
  readonly var_pop?: Maybe<Reactions_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Reactions_Var_Samp_Fields>;
  readonly variance?: Maybe<Reactions_Variance_Fields>;
};


/** aggregate fields of "reactions" */
export type Reactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reactions" */
export type Reactions_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Reactions_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Reactions_Max_Order_By>;
  readonly min?: InputMaybe<Reactions_Min_Order_By>;
  readonly stddev?: InputMaybe<Reactions_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Reactions_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Reactions_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Reactions_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Reactions_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Reactions_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Reactions_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Reactions_Avg_Fields = {
  readonly __typename?: 'reactions_avg_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "reactions" */
export type Reactions_Avg_Order_By = {
  readonly id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "reactions". All fields are combined with a logical 'AND'. */
export type Reactions_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Reactions_Bool_Exp>>;
  readonly _not?: InputMaybe<Reactions_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Reactions_Bool_Exp>>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly nft_id?: InputMaybe<String_Comparison_Exp>;
  readonly owner?: InputMaybe<String_Comparison_Exp>;
  readonly reactions_unicode?: InputMaybe<Reactions_Unicode_Bool_Exp>;
  readonly stats?: InputMaybe<Nfts_Reactions_Stats_Bool_Exp>;
  readonly unicode?: InputMaybe<String_Comparison_Exp>;
  readonly user_reactions?: InputMaybe<Reactions_Users_Bool_Exp>;
};

/** aggregate max on columns */
export type Reactions_Max_Fields = {
  readonly __typename?: 'reactions_max_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly nft_id?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly unicode?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "reactions" */
export type Reactions_Max_Order_By = {
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
  readonly owner?: InputMaybe<Order_By>;
  readonly unicode?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Reactions_Min_Fields = {
  readonly __typename?: 'reactions_min_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly nft_id?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly unicode?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "reactions" */
export type Reactions_Min_Order_By = {
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
  readonly owner?: InputMaybe<Order_By>;
  readonly unicode?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "reactions". */
export type Reactions_Order_By = {
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
  readonly owner?: InputMaybe<Order_By>;
  readonly reactions_unicode_aggregate?: InputMaybe<Reactions_Unicode_Aggregate_Order_By>;
  readonly stats?: InputMaybe<Nfts_Reactions_Stats_Order_By>;
  readonly unicode?: InputMaybe<Order_By>;
  readonly user_reactions_aggregate?: InputMaybe<Reactions_Users_Aggregate_Order_By>;
};

/** select columns of table "reactions" */
export enum Reactions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  Owner = 'owner',
  /** column name */
  Unicode = 'unicode'
}

/** aggregate stddev on columns */
export type Reactions_Stddev_Fields = {
  readonly __typename?: 'reactions_stddev_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "reactions" */
export type Reactions_Stddev_Order_By = {
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Reactions_Stddev_Pop_Fields = {
  readonly __typename?: 'reactions_stddev_pop_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "reactions" */
export type Reactions_Stddev_Pop_Order_By = {
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Reactions_Stddev_Samp_Fields = {
  readonly __typename?: 'reactions_stddev_samp_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "reactions" */
export type Reactions_Stddev_Samp_Order_By = {
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Reactions_Sum_Fields = {
  readonly __typename?: 'reactions_sum_fields';
  readonly id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "reactions" */
export type Reactions_Sum_Order_By = {
  readonly id?: InputMaybe<Order_By>;
};

/** columns and relationships of "reactions_unicode" */
export type Reactions_Unicode = {
  readonly __typename?: 'reactions_unicode';
  readonly nft_id?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<Scalars['String']>;
  /** An object relationship */
  readonly reactions_unicode?: Maybe<Reactions_Unicode>;
  readonly unicode?: Maybe<Scalars['String']>;
};

/** aggregated selection of "reactions_unicode" */
export type Reactions_Unicode_Aggregate = {
  readonly __typename?: 'reactions_unicode_aggregate';
  readonly aggregate?: Maybe<Reactions_Unicode_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Reactions_Unicode>;
};

/** aggregate fields of "reactions_unicode" */
export type Reactions_Unicode_Aggregate_Fields = {
  readonly __typename?: 'reactions_unicode_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Reactions_Unicode_Max_Fields>;
  readonly min?: Maybe<Reactions_Unicode_Min_Fields>;
};


/** aggregate fields of "reactions_unicode" */
export type Reactions_Unicode_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Reactions_Unicode_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reactions_unicode" */
export type Reactions_Unicode_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Reactions_Unicode_Max_Order_By>;
  readonly min?: InputMaybe<Reactions_Unicode_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "reactions_unicode". All fields are combined with a logical 'AND'. */
export type Reactions_Unicode_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Reactions_Unicode_Bool_Exp>>;
  readonly _not?: InputMaybe<Reactions_Unicode_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Reactions_Unicode_Bool_Exp>>;
  readonly nft_id?: InputMaybe<String_Comparison_Exp>;
  readonly owner?: InputMaybe<String_Comparison_Exp>;
  readonly reactions_unicode?: InputMaybe<Reactions_Unicode_Bool_Exp>;
  readonly unicode?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Reactions_Unicode_Max_Fields = {
  readonly __typename?: 'reactions_unicode_max_fields';
  readonly nft_id?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly unicode?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "reactions_unicode" */
export type Reactions_Unicode_Max_Order_By = {
  readonly nft_id?: InputMaybe<Order_By>;
  readonly owner?: InputMaybe<Order_By>;
  readonly unicode?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Reactions_Unicode_Min_Fields = {
  readonly __typename?: 'reactions_unicode_min_fields';
  readonly nft_id?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly unicode?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "reactions_unicode" */
export type Reactions_Unicode_Min_Order_By = {
  readonly nft_id?: InputMaybe<Order_By>;
  readonly owner?: InputMaybe<Order_By>;
  readonly unicode?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "reactions_unicode". */
export type Reactions_Unicode_Order_By = {
  readonly nft_id?: InputMaybe<Order_By>;
  readonly owner?: InputMaybe<Order_By>;
  readonly reactions_unicode?: InputMaybe<Reactions_Unicode_Order_By>;
  readonly unicode?: InputMaybe<Order_By>;
};

/** select columns of table "reactions_unicode" */
export enum Reactions_Unicode_Select_Column {
  /** column name */
  NftId = 'nft_id',
  /** column name */
  Owner = 'owner',
  /** column name */
  Unicode = 'unicode'
}

/** columns and relationships of "reactions_users" */
export type Reactions_Users = {
  readonly __typename?: 'reactions_users';
  readonly nft_id?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly unicode?: Maybe<Scalars['String']>;
  /** An object relationship */
  readonly user_reactions?: Maybe<Reactions_Users>;
};

/** aggregated selection of "reactions_users" */
export type Reactions_Users_Aggregate = {
  readonly __typename?: 'reactions_users_aggregate';
  readonly aggregate?: Maybe<Reactions_Users_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Reactions_Users>;
};

/** aggregate fields of "reactions_users" */
export type Reactions_Users_Aggregate_Fields = {
  readonly __typename?: 'reactions_users_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Reactions_Users_Max_Fields>;
  readonly min?: Maybe<Reactions_Users_Min_Fields>;
};


/** aggregate fields of "reactions_users" */
export type Reactions_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Reactions_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reactions_users" */
export type Reactions_Users_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Reactions_Users_Max_Order_By>;
  readonly min?: InputMaybe<Reactions_Users_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "reactions_users". All fields are combined with a logical 'AND'. */
export type Reactions_Users_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Reactions_Users_Bool_Exp>>;
  readonly _not?: InputMaybe<Reactions_Users_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Reactions_Users_Bool_Exp>>;
  readonly nft_id?: InputMaybe<String_Comparison_Exp>;
  readonly owner?: InputMaybe<String_Comparison_Exp>;
  readonly unicode?: InputMaybe<String_Comparison_Exp>;
  readonly user_reactions?: InputMaybe<Reactions_Users_Bool_Exp>;
};

/** aggregate max on columns */
export type Reactions_Users_Max_Fields = {
  readonly __typename?: 'reactions_users_max_fields';
  readonly nft_id?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly unicode?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "reactions_users" */
export type Reactions_Users_Max_Order_By = {
  readonly nft_id?: InputMaybe<Order_By>;
  readonly owner?: InputMaybe<Order_By>;
  readonly unicode?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Reactions_Users_Min_Fields = {
  readonly __typename?: 'reactions_users_min_fields';
  readonly nft_id?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<Scalars['String']>;
  readonly unicode?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "reactions_users" */
export type Reactions_Users_Min_Order_By = {
  readonly nft_id?: InputMaybe<Order_By>;
  readonly owner?: InputMaybe<Order_By>;
  readonly unicode?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "reactions_users". */
export type Reactions_Users_Order_By = {
  readonly nft_id?: InputMaybe<Order_By>;
  readonly owner?: InputMaybe<Order_By>;
  readonly unicode?: InputMaybe<Order_By>;
  readonly user_reactions?: InputMaybe<Reactions_Users_Order_By>;
};

/** select columns of table "reactions_users" */
export enum Reactions_Users_Select_Column {
  /** column name */
  NftId = 'nft_id',
  /** column name */
  Owner = 'owner',
  /** column name */
  Unicode = 'unicode'
}

/** aggregate var_pop on columns */
export type Reactions_Var_Pop_Fields = {
  readonly __typename?: 'reactions_var_pop_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "reactions" */
export type Reactions_Var_Pop_Order_By = {
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Reactions_Var_Samp_Fields = {
  readonly __typename?: 'reactions_var_samp_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "reactions" */
export type Reactions_Var_Samp_Order_By = {
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Reactions_Variance_Fields = {
  readonly __typename?: 'reactions_variance_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "reactions" */
export type Reactions_Variance_Order_By = {
  readonly id?: InputMaybe<Order_By>;
};

/** columns and relationships of "recently_listed" */
export type Recently_Listed = {
  readonly __typename?: 'recently_listed';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly forsale?: Maybe<Scalars['bigint']>;
  readonly id?: Maybe<Scalars['String']>;
  /** An object relationship */
  readonly nft?: Maybe<Nfts>;
};

/** aggregated selection of "recently_listed" */
export type Recently_Listed_Aggregate = {
  readonly __typename?: 'recently_listed_aggregate';
  readonly aggregate?: Maybe<Recently_Listed_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Recently_Listed>;
};

/** aggregate fields of "recently_listed" */
export type Recently_Listed_Aggregate_Fields = {
  readonly __typename?: 'recently_listed_aggregate_fields';
  readonly avg?: Maybe<Recently_Listed_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Recently_Listed_Max_Fields>;
  readonly min?: Maybe<Recently_Listed_Min_Fields>;
  readonly stddev?: Maybe<Recently_Listed_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Recently_Listed_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Recently_Listed_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Recently_Listed_Sum_Fields>;
  readonly var_pop?: Maybe<Recently_Listed_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Recently_Listed_Var_Samp_Fields>;
  readonly variance?: Maybe<Recently_Listed_Variance_Fields>;
};


/** aggregate fields of "recently_listed" */
export type Recently_Listed_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Recently_Listed_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Recently_Listed_Avg_Fields = {
  readonly __typename?: 'recently_listed_avg_fields';
  readonly forsale?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "recently_listed". All fields are combined with a logical 'AND'. */
export type Recently_Listed_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Recently_Listed_Bool_Exp>>;
  readonly _not?: InputMaybe<Recently_Listed_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Recently_Listed_Bool_Exp>>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly forsale?: InputMaybe<Bigint_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly nft?: InputMaybe<Nfts_Bool_Exp>;
};

/** aggregate max on columns */
export type Recently_Listed_Max_Fields = {
  readonly __typename?: 'recently_listed_max_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly forsale?: Maybe<Scalars['bigint']>;
  readonly id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Recently_Listed_Min_Fields = {
  readonly __typename?: 'recently_listed_min_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly forsale?: Maybe<Scalars['bigint']>;
  readonly id?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "recently_listed". */
export type Recently_Listed_Order_By = {
  readonly created_at?: InputMaybe<Order_By>;
  readonly forsale?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly nft?: InputMaybe<Nfts_Order_By>;
};

/** select columns of table "recently_listed" */
export enum Recently_Listed_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Forsale = 'forsale',
  /** column name */
  Id = 'id'
}

/** aggregate stddev on columns */
export type Recently_Listed_Stddev_Fields = {
  readonly __typename?: 'recently_listed_stddev_fields';
  readonly forsale?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Recently_Listed_Stddev_Pop_Fields = {
  readonly __typename?: 'recently_listed_stddev_pop_fields';
  readonly forsale?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Recently_Listed_Stddev_Samp_Fields = {
  readonly __typename?: 'recently_listed_stddev_samp_fields';
  readonly forsale?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Recently_Listed_Sum_Fields = {
  readonly __typename?: 'recently_listed_sum_fields';
  readonly forsale?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Recently_Listed_Var_Pop_Fields = {
  readonly __typename?: 'recently_listed_var_pop_fields';
  readonly forsale?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Recently_Listed_Var_Samp_Fields = {
  readonly __typename?: 'recently_listed_var_samp_fields';
  readonly forsale?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Recently_Listed_Variance_Fields = {
  readonly __typename?: 'recently_listed_variance_fields';
  readonly forsale?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "resources" */
export type Resources = {
  readonly __typename?: 'resources';
  /** An object relationship */
  readonly base?: Maybe<Bases>;
  readonly base_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  readonly base_theme?: Maybe<Resources_Base_Themes>;
  readonly id: Scalars['String'];
  readonly metadata?: Maybe<Scalars['String']>;
  readonly nft_id: Scalars['String'];
  /** An object relationship */
  readonly nfts: Nfts;
  readonly parts?: Maybe<Scalars['jsonb']>;
  readonly pending: Scalars['Boolean'];
  readonly replace?: Maybe<Scalars['String']>;
  /** An object relationship */
  readonly resources_part?: Maybe<Resources_Parts>;
  /** An array relationship */
  readonly resources_parts: ReadonlyArray<Resources_Parts>;
  /** An aggregate relationship */
  readonly resources_parts_aggregate: Resources_Parts_Aggregate;
  /** An object relationship */
  readonly slot?: Maybe<Parts>;
  readonly slot_id?: Maybe<Scalars['String']>;
  readonly src?: Maybe<Scalars['String']>;
  readonly theme?: Maybe<Scalars['jsonb']>;
  readonly thumb?: Maybe<Scalars['String']>;
};


/** columns and relationships of "resources" */
export type ResourcesPartsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "resources" */
export type ResourcesResources_PartsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Parts_Order_By>>;
  where?: InputMaybe<Resources_Parts_Bool_Exp>;
};


/** columns and relationships of "resources" */
export type ResourcesResources_Parts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Resources_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Resources_Parts_Order_By>>;
  where?: InputMaybe<Resources_Parts_Bool_Exp>;
};


/** columns and relationships of "resources" */
export type ResourcesThemeArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "resources" */
export type Resources_Aggregate = {
  readonly __typename?: 'resources_aggregate';
  readonly aggregate?: Maybe<Resources_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Resources>;
};

/** aggregate fields of "resources" */
export type Resources_Aggregate_Fields = {
  readonly __typename?: 'resources_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Resources_Max_Fields>;
  readonly min?: Maybe<Resources_Min_Fields>;
};


/** aggregate fields of "resources" */
export type Resources_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Resources_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "resources" */
export type Resources_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Resources_Max_Order_By>;
  readonly min?: InputMaybe<Resources_Min_Order_By>;
};

/** columns and relationships of "resources_base_themes" */
export type Resources_Base_Themes = {
  readonly __typename?: 'resources_base_themes';
  readonly resource_id: Scalars['String'];
  /** An object relationship */
  readonly theme: Base_Themes;
  readonly theme_id: Scalars['String'];
};

/** order by aggregate values of table "resources_base_themes" */
export type Resources_Base_Themes_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Resources_Base_Themes_Max_Order_By>;
  readonly min?: InputMaybe<Resources_Base_Themes_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "resources_base_themes". All fields are combined with a logical 'AND'. */
export type Resources_Base_Themes_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Bool_Exp>>;
  readonly _not?: InputMaybe<Resources_Base_Themes_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Bool_Exp>>;
  readonly resource_id?: InputMaybe<String_Comparison_Exp>;
  readonly theme?: InputMaybe<Base_Themes_Bool_Exp>;
  readonly theme_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "resources_base_themes" */
export type Resources_Base_Themes_Max_Order_By = {
  readonly resource_id?: InputMaybe<Order_By>;
  readonly theme_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "resources_base_themes" */
export type Resources_Base_Themes_Min_Order_By = {
  readonly resource_id?: InputMaybe<Order_By>;
  readonly theme_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "resources_base_themes". */
export type Resources_Base_Themes_Order_By = {
  readonly resource_id?: InputMaybe<Order_By>;
  readonly theme?: InputMaybe<Base_Themes_Order_By>;
  readonly theme_id?: InputMaybe<Order_By>;
};

/** select columns of table "resources_base_themes" */
export enum Resources_Base_Themes_Select_Column {
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  ThemeId = 'theme_id'
}

/** Boolean expression to filter rows from the table "resources". All fields are combined with a logical 'AND'. */
export type Resources_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Resources_Bool_Exp>>;
  readonly _not?: InputMaybe<Resources_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Resources_Bool_Exp>>;
  readonly base?: InputMaybe<Bases_Bool_Exp>;
  readonly base_id?: InputMaybe<String_Comparison_Exp>;
  readonly base_theme?: InputMaybe<Resources_Base_Themes_Bool_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly metadata?: InputMaybe<String_Comparison_Exp>;
  readonly nft_id?: InputMaybe<String_Comparison_Exp>;
  readonly nfts?: InputMaybe<Nfts_Bool_Exp>;
  readonly parts?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly pending?: InputMaybe<Boolean_Comparison_Exp>;
  readonly replace?: InputMaybe<String_Comparison_Exp>;
  readonly resources_part?: InputMaybe<Resources_Parts_Bool_Exp>;
  readonly resources_parts?: InputMaybe<Resources_Parts_Bool_Exp>;
  readonly slot?: InputMaybe<Parts_Bool_Exp>;
  readonly slot_id?: InputMaybe<String_Comparison_Exp>;
  readonly src?: InputMaybe<String_Comparison_Exp>;
  readonly theme?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly thumb?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Resources_Max_Fields = {
  readonly __typename?: 'resources_max_fields';
  readonly base_id?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly nft_id?: Maybe<Scalars['String']>;
  readonly replace?: Maybe<Scalars['String']>;
  readonly slot_id?: Maybe<Scalars['String']>;
  readonly src?: Maybe<Scalars['String']>;
  readonly thumb?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "resources" */
export type Resources_Max_Order_By = {
  readonly base_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
  readonly replace?: InputMaybe<Order_By>;
  readonly slot_id?: InputMaybe<Order_By>;
  readonly src?: InputMaybe<Order_By>;
  readonly thumb?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Resources_Min_Fields = {
  readonly __typename?: 'resources_min_fields';
  readonly base_id?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['String']>;
  readonly nft_id?: Maybe<Scalars['String']>;
  readonly replace?: Maybe<Scalars['String']>;
  readonly slot_id?: Maybe<Scalars['String']>;
  readonly src?: Maybe<Scalars['String']>;
  readonly thumb?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "resources" */
export type Resources_Min_Order_By = {
  readonly base_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
  readonly replace?: InputMaybe<Order_By>;
  readonly slot_id?: InputMaybe<Order_By>;
  readonly src?: InputMaybe<Order_By>;
  readonly thumb?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "resources". */
export type Resources_Order_By = {
  readonly base?: InputMaybe<Bases_Order_By>;
  readonly base_id?: InputMaybe<Order_By>;
  readonly base_theme?: InputMaybe<Resources_Base_Themes_Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
  readonly nfts?: InputMaybe<Nfts_Order_By>;
  readonly parts?: InputMaybe<Order_By>;
  readonly pending?: InputMaybe<Order_By>;
  readonly replace?: InputMaybe<Order_By>;
  readonly resources_part?: InputMaybe<Resources_Parts_Order_By>;
  readonly resources_parts_aggregate?: InputMaybe<Resources_Parts_Aggregate_Order_By>;
  readonly slot?: InputMaybe<Parts_Order_By>;
  readonly slot_id?: InputMaybe<Order_By>;
  readonly src?: InputMaybe<Order_By>;
  readonly theme?: InputMaybe<Order_By>;
  readonly thumb?: InputMaybe<Order_By>;
};

/** columns and relationships of "resources_parts" */
export type Resources_Parts = {
  readonly __typename?: 'resources_parts';
  /** An object relationship */
  readonly part: Parts;
  readonly part_id: Scalars['String'];
  /** An object relationship */
  readonly resource: Resources;
  readonly resource_id: Scalars['String'];
};

/** aggregated selection of "resources_parts" */
export type Resources_Parts_Aggregate = {
  readonly __typename?: 'resources_parts_aggregate';
  readonly aggregate?: Maybe<Resources_Parts_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Resources_Parts>;
};

/** aggregate fields of "resources_parts" */
export type Resources_Parts_Aggregate_Fields = {
  readonly __typename?: 'resources_parts_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Resources_Parts_Max_Fields>;
  readonly min?: Maybe<Resources_Parts_Min_Fields>;
};


/** aggregate fields of "resources_parts" */
export type Resources_Parts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Resources_Parts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "resources_parts" */
export type Resources_Parts_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Resources_Parts_Max_Order_By>;
  readonly min?: InputMaybe<Resources_Parts_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "resources_parts". All fields are combined with a logical 'AND'. */
export type Resources_Parts_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Resources_Parts_Bool_Exp>>;
  readonly _not?: InputMaybe<Resources_Parts_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Resources_Parts_Bool_Exp>>;
  readonly part?: InputMaybe<Parts_Bool_Exp>;
  readonly part_id?: InputMaybe<String_Comparison_Exp>;
  readonly resource?: InputMaybe<Resources_Bool_Exp>;
  readonly resource_id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Resources_Parts_Max_Fields = {
  readonly __typename?: 'resources_parts_max_fields';
  readonly part_id?: Maybe<Scalars['String']>;
  readonly resource_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "resources_parts" */
export type Resources_Parts_Max_Order_By = {
  readonly part_id?: InputMaybe<Order_By>;
  readonly resource_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Resources_Parts_Min_Fields = {
  readonly __typename?: 'resources_parts_min_fields';
  readonly part_id?: Maybe<Scalars['String']>;
  readonly resource_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "resources_parts" */
export type Resources_Parts_Min_Order_By = {
  readonly part_id?: InputMaybe<Order_By>;
  readonly resource_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "resources_parts". */
export type Resources_Parts_Order_By = {
  readonly part?: InputMaybe<Parts_Order_By>;
  readonly part_id?: InputMaybe<Order_By>;
  readonly resource?: InputMaybe<Resources_Order_By>;
  readonly resource_id?: InputMaybe<Order_By>;
};

/** select columns of table "resources_parts" */
export enum Resources_Parts_Select_Column {
  /** column name */
  PartId = 'part_id',
  /** column name */
  ResourceId = 'resource_id'
}

/** select columns of table "resources" */
export enum Resources_Select_Column {
  /** column name */
  BaseId = 'base_id',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  Parts = 'parts',
  /** column name */
  Pending = 'pending',
  /** column name */
  Replace = 'replace',
  /** column name */
  SlotId = 'slot_id',
  /** column name */
  Src = 'src',
  /** column name */
  Theme = 'theme',
  /** column name */
  Thumb = 'thumb'
}

/** columns and relationships of "sales" */
export type Sales = {
  readonly __typename?: 'sales';
  readonly day?: Maybe<Scalars['numeric']>;
  readonly month?: Maybe<Scalars['numeric']>;
  readonly month3?: Maybe<Scalars['numeric']>;
  readonly week?: Maybe<Scalars['numeric']>;
};

/** Boolean expression to filter rows from the table "sales". All fields are combined with a logical 'AND'. */
export type Sales_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Sales_Bool_Exp>>;
  readonly _not?: InputMaybe<Sales_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Sales_Bool_Exp>>;
  readonly day?: InputMaybe<Numeric_Comparison_Exp>;
  readonly month?: InputMaybe<Numeric_Comparison_Exp>;
  readonly month3?: InputMaybe<Numeric_Comparison_Exp>;
  readonly week?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "sales". */
export type Sales_Order_By = {
  readonly day?: InputMaybe<Order_By>;
  readonly month?: InputMaybe<Order_By>;
  readonly month3?: InputMaybe<Order_By>;
  readonly week?: InputMaybe<Order_By>;
};

/** select columns of table "sales" */
export enum Sales_Select_Column {
  /** column name */
  Day = 'day',
  /** column name */
  Month = 'month',
  /** column name */
  Month3 = 'month3',
  /** column name */
  Week = 'week'
}

/** columns and relationships of "singular_blacklisted_accounts" */
export type Singular_Blacklisted_Accounts = {
  readonly __typename?: 'singular_blacklisted_accounts';
  readonly account: Scalars['String'];
  readonly created_at: Scalars['timestamptz'];
};

/** order by aggregate values of table "singular_blacklisted_accounts" */
export type Singular_Blacklisted_Accounts_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Singular_Blacklisted_Accounts_Max_Order_By>;
  readonly min?: InputMaybe<Singular_Blacklisted_Accounts_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "singular_blacklisted_accounts". All fields are combined with a logical 'AND'. */
export type Singular_Blacklisted_Accounts_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Bool_Exp>>;
  readonly _not?: InputMaybe<Singular_Blacklisted_Accounts_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Bool_Exp>>;
  readonly account?: InputMaybe<String_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "singular_blacklisted_accounts" */
export type Singular_Blacklisted_Accounts_Max_Order_By = {
  readonly account?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "singular_blacklisted_accounts" */
export type Singular_Blacklisted_Accounts_Min_Order_By = {
  readonly account?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "singular_blacklisted_accounts". */
export type Singular_Blacklisted_Accounts_Order_By = {
  readonly account?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
};

/** select columns of table "singular_blacklisted_accounts" */
export enum Singular_Blacklisted_Accounts_Select_Column {
  /** column name */
  Account = 'account',
  /** column name */
  CreatedAt = 'created_at'
}

/** columns and relationships of "singular_blacklisted_collections" */
export type Singular_Blacklisted_Collections = {
  readonly __typename?: 'singular_blacklisted_collections';
  /** An object relationship */
  readonly collection?: Maybe<Collections>;
  readonly collection_id: Scalars['String'];
  readonly created_at: Scalars['timestamptz'];
};

/** order by aggregate values of table "singular_blacklisted_collections" */
export type Singular_Blacklisted_Collections_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Singular_Blacklisted_Collections_Max_Order_By>;
  readonly min?: InputMaybe<Singular_Blacklisted_Collections_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "singular_blacklisted_collections". All fields are combined with a logical 'AND'. */
export type Singular_Blacklisted_Collections_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Bool_Exp>>;
  readonly _not?: InputMaybe<Singular_Blacklisted_Collections_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Bool_Exp>>;
  readonly collection?: InputMaybe<Collections_Bool_Exp>;
  readonly collection_id?: InputMaybe<String_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "singular_blacklisted_collections" */
export type Singular_Blacklisted_Collections_Max_Order_By = {
  readonly collection_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "singular_blacklisted_collections" */
export type Singular_Blacklisted_Collections_Min_Order_By = {
  readonly collection_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "singular_blacklisted_collections". */
export type Singular_Blacklisted_Collections_Order_By = {
  readonly collection?: InputMaybe<Collections_Order_By>;
  readonly collection_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
};

/** select columns of table "singular_blacklisted_collections" */
export enum Singular_Blacklisted_Collections_Select_Column {
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at'
}

/** columns and relationships of "singular_curated" */
export type Singular_Curated = {
  readonly __typename?: 'singular_curated';
  readonly created_at: Scalars['timestamptz'];
  readonly nft_id: Scalars['String'];
};

/** aggregated selection of "singular_curated" */
export type Singular_Curated_Aggregate = {
  readonly __typename?: 'singular_curated_aggregate';
  readonly aggregate?: Maybe<Singular_Curated_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Singular_Curated>;
};

/** aggregate fields of "singular_curated" */
export type Singular_Curated_Aggregate_Fields = {
  readonly __typename?: 'singular_curated_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Singular_Curated_Max_Fields>;
  readonly min?: Maybe<Singular_Curated_Min_Fields>;
};


/** aggregate fields of "singular_curated" */
export type Singular_Curated_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "singular_curated" */
export type Singular_Curated_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Singular_Curated_Max_Order_By>;
  readonly min?: InputMaybe<Singular_Curated_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "singular_curated". All fields are combined with a logical 'AND'. */
export type Singular_Curated_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Singular_Curated_Bool_Exp>>;
  readonly _not?: InputMaybe<Singular_Curated_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Singular_Curated_Bool_Exp>>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly nft_id?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "singular_curated_collections" */
export type Singular_Curated_Collections = {
  readonly __typename?: 'singular_curated_collections';
  readonly collection_id: Scalars['String'];
  readonly created_at: Scalars['timestamptz'];
};

/** aggregated selection of "singular_curated_collections" */
export type Singular_Curated_Collections_Aggregate = {
  readonly __typename?: 'singular_curated_collections_aggregate';
  readonly aggregate?: Maybe<Singular_Curated_Collections_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Singular_Curated_Collections>;
};

/** aggregate fields of "singular_curated_collections" */
export type Singular_Curated_Collections_Aggregate_Fields = {
  readonly __typename?: 'singular_curated_collections_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Singular_Curated_Collections_Max_Fields>;
  readonly min?: Maybe<Singular_Curated_Collections_Min_Fields>;
};


/** aggregate fields of "singular_curated_collections" */
export type Singular_Curated_Collections_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "singular_curated_collections" */
export type Singular_Curated_Collections_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Singular_Curated_Collections_Max_Order_By>;
  readonly min?: InputMaybe<Singular_Curated_Collections_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "singular_curated_collections". All fields are combined with a logical 'AND'. */
export type Singular_Curated_Collections_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Bool_Exp>>;
  readonly _not?: InputMaybe<Singular_Curated_Collections_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Bool_Exp>>;
  readonly collection_id?: InputMaybe<String_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Singular_Curated_Collections_Max_Fields = {
  readonly __typename?: 'singular_curated_collections_max_fields';
  readonly collection_id?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "singular_curated_collections" */
export type Singular_Curated_Collections_Max_Order_By = {
  readonly collection_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Singular_Curated_Collections_Min_Fields = {
  readonly __typename?: 'singular_curated_collections_min_fields';
  readonly collection_id?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "singular_curated_collections" */
export type Singular_Curated_Collections_Min_Order_By = {
  readonly collection_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "singular_curated_collections". */
export type Singular_Curated_Collections_Order_By = {
  readonly collection_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
};

/** select columns of table "singular_curated_collections" */
export enum Singular_Curated_Collections_Select_Column {
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at'
}

/** aggregate max on columns */
export type Singular_Curated_Max_Fields = {
  readonly __typename?: 'singular_curated_max_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly nft_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "singular_curated" */
export type Singular_Curated_Max_Order_By = {
  readonly created_at?: InputMaybe<Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Singular_Curated_Min_Fields = {
  readonly __typename?: 'singular_curated_min_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly nft_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "singular_curated" */
export type Singular_Curated_Min_Order_By = {
  readonly created_at?: InputMaybe<Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "singular_curated". */
export type Singular_Curated_Order_By = {
  readonly created_at?: InputMaybe<Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
};

/** select columns of table "singular_curated" */
export enum Singular_Curated_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  NftId = 'nft_id'
}

/** columns and relationships of "singular_hidden_collections" */
export type Singular_Hidden_Collections = {
  readonly __typename?: 'singular_hidden_collections';
  readonly collection_id: Scalars['String'];
  readonly created_at: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "singular_hidden_collections". All fields are combined with a logical 'AND'. */
export type Singular_Hidden_Collections_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Singular_Hidden_Collections_Bool_Exp>>;
  readonly _not?: InputMaybe<Singular_Hidden_Collections_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Singular_Hidden_Collections_Bool_Exp>>;
  readonly collection_id?: InputMaybe<String_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "singular_hidden_collections". */
export type Singular_Hidden_Collections_Order_By = {
  readonly collection_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
};

/** select columns of table "singular_hidden_collections" */
export enum Singular_Hidden_Collections_Select_Column {
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at'
}

/** columns and relationships of "singular_nsfw_collections" */
export type Singular_Nsfw_Collections = {
  readonly __typename?: 'singular_nsfw_collections';
  /** An object relationship */
  readonly collection?: Maybe<Collections>;
  readonly collection_id: Scalars['String'];
  readonly created_at: Scalars['timestamptz'];
  readonly reason?: Maybe<Scalars['jsonb']>;
};


/** columns and relationships of "singular_nsfw_collections" */
export type Singular_Nsfw_CollectionsReasonArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "singular_nsfw_collections" */
export type Singular_Nsfw_Collections_Aggregate = {
  readonly __typename?: 'singular_nsfw_collections_aggregate';
  readonly aggregate?: Maybe<Singular_Nsfw_Collections_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Singular_Nsfw_Collections>;
};

/** aggregate fields of "singular_nsfw_collections" */
export type Singular_Nsfw_Collections_Aggregate_Fields = {
  readonly __typename?: 'singular_nsfw_collections_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Singular_Nsfw_Collections_Max_Fields>;
  readonly min?: Maybe<Singular_Nsfw_Collections_Min_Fields>;
};


/** aggregate fields of "singular_nsfw_collections" */
export type Singular_Nsfw_Collections_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "singular_nsfw_collections" */
export type Singular_Nsfw_Collections_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Singular_Nsfw_Collections_Max_Order_By>;
  readonly min?: InputMaybe<Singular_Nsfw_Collections_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "singular_nsfw_collections". All fields are combined with a logical 'AND'. */
export type Singular_Nsfw_Collections_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Bool_Exp>>;
  readonly _not?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Bool_Exp>>;
  readonly collection?: InputMaybe<Collections_Bool_Exp>;
  readonly collection_id?: InputMaybe<String_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly reason?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** aggregate max on columns */
export type Singular_Nsfw_Collections_Max_Fields = {
  readonly __typename?: 'singular_nsfw_collections_max_fields';
  readonly collection_id?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "singular_nsfw_collections" */
export type Singular_Nsfw_Collections_Max_Order_By = {
  readonly collection_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Singular_Nsfw_Collections_Min_Fields = {
  readonly __typename?: 'singular_nsfw_collections_min_fields';
  readonly collection_id?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "singular_nsfw_collections" */
export type Singular_Nsfw_Collections_Min_Order_By = {
  readonly collection_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "singular_nsfw_collections". */
export type Singular_Nsfw_Collections_Order_By = {
  readonly collection?: InputMaybe<Collections_Order_By>;
  readonly collection_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly reason?: InputMaybe<Order_By>;
};

/** select columns of table "singular_nsfw_collections" */
export enum Singular_Nsfw_Collections_Select_Column {
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Reason = 'reason'
}

/** columns and relationships of "singular_nsfw_nfts" */
export type Singular_Nsfw_Nfts = {
  readonly __typename?: 'singular_nsfw_nfts';
  readonly created_at: Scalars['timestamptz'];
  /** An object relationship */
  readonly nft: Nfts;
  readonly nft_id: Scalars['String'];
  readonly reason?: Maybe<Scalars['jsonb']>;
};


/** columns and relationships of "singular_nsfw_nfts" */
export type Singular_Nsfw_NftsReasonArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "singular_nsfw_nfts" */
export type Singular_Nsfw_Nfts_Aggregate = {
  readonly __typename?: 'singular_nsfw_nfts_aggregate';
  readonly aggregate?: Maybe<Singular_Nsfw_Nfts_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Singular_Nsfw_Nfts>;
};

/** aggregate fields of "singular_nsfw_nfts" */
export type Singular_Nsfw_Nfts_Aggregate_Fields = {
  readonly __typename?: 'singular_nsfw_nfts_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Singular_Nsfw_Nfts_Max_Fields>;
  readonly min?: Maybe<Singular_Nsfw_Nfts_Min_Fields>;
};


/** aggregate fields of "singular_nsfw_nfts" */
export type Singular_Nsfw_Nfts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "singular_nsfw_nfts" */
export type Singular_Nsfw_Nfts_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Singular_Nsfw_Nfts_Max_Order_By>;
  readonly min?: InputMaybe<Singular_Nsfw_Nfts_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "singular_nsfw_nfts". All fields are combined with a logical 'AND'. */
export type Singular_Nsfw_Nfts_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Bool_Exp>>;
  readonly _not?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Bool_Exp>>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly nft?: InputMaybe<Nfts_Bool_Exp>;
  readonly nft_id?: InputMaybe<String_Comparison_Exp>;
  readonly reason?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** aggregate max on columns */
export type Singular_Nsfw_Nfts_Max_Fields = {
  readonly __typename?: 'singular_nsfw_nfts_max_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly nft_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "singular_nsfw_nfts" */
export type Singular_Nsfw_Nfts_Max_Order_By = {
  readonly created_at?: InputMaybe<Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Singular_Nsfw_Nfts_Min_Fields = {
  readonly __typename?: 'singular_nsfw_nfts_min_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly nft_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "singular_nsfw_nfts" */
export type Singular_Nsfw_Nfts_Min_Order_By = {
  readonly created_at?: InputMaybe<Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "singular_nsfw_nfts". */
export type Singular_Nsfw_Nfts_Order_By = {
  readonly created_at?: InputMaybe<Order_By>;
  readonly nft?: InputMaybe<Nfts_Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
  readonly reason?: InputMaybe<Order_By>;
};

/** select columns of table "singular_nsfw_nfts" */
export enum Singular_Nsfw_Nfts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  Reason = 'reason'
}

/** columns and relationships of "singular_verified_collections" */
export type Singular_Verified_Collections = {
  readonly __typename?: 'singular_verified_collections';
  readonly collection_id: Scalars['String'];
  readonly created_at: Scalars['timestamptz'];
};

/** aggregated selection of "singular_verified_collections" */
export type Singular_Verified_Collections_Aggregate = {
  readonly __typename?: 'singular_verified_collections_aggregate';
  readonly aggregate?: Maybe<Singular_Verified_Collections_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Singular_Verified_Collections>;
};

/** aggregate fields of "singular_verified_collections" */
export type Singular_Verified_Collections_Aggregate_Fields = {
  readonly __typename?: 'singular_verified_collections_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Singular_Verified_Collections_Max_Fields>;
  readonly min?: Maybe<Singular_Verified_Collections_Min_Fields>;
};


/** aggregate fields of "singular_verified_collections" */
export type Singular_Verified_Collections_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "singular_verified_collections" */
export type Singular_Verified_Collections_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Singular_Verified_Collections_Max_Order_By>;
  readonly min?: InputMaybe<Singular_Verified_Collections_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "singular_verified_collections". All fields are combined with a logical 'AND'. */
export type Singular_Verified_Collections_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Bool_Exp>>;
  readonly _not?: InputMaybe<Singular_Verified_Collections_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Bool_Exp>>;
  readonly collection_id?: InputMaybe<String_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Singular_Verified_Collections_Max_Fields = {
  readonly __typename?: 'singular_verified_collections_max_fields';
  readonly collection_id?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "singular_verified_collections" */
export type Singular_Verified_Collections_Max_Order_By = {
  readonly collection_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Singular_Verified_Collections_Min_Fields = {
  readonly __typename?: 'singular_verified_collections_min_fields';
  readonly collection_id?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "singular_verified_collections" */
export type Singular_Verified_Collections_Min_Order_By = {
  readonly collection_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "singular_verified_collections". */
export type Singular_Verified_Collections_Order_By = {
  readonly collection_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
};

/** select columns of table "singular_verified_collections" */
export enum Singular_Verified_Collections_Select_Column {
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at'
}

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['smallint']>;
  readonly _gt?: InputMaybe<Scalars['smallint']>;
  readonly _gte?: InputMaybe<Scalars['smallint']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['smallint']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['smallint']>;
  readonly _lte?: InputMaybe<Scalars['smallint']>;
  readonly _neq?: InputMaybe<Scalars['smallint']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['smallint']>>;
};

/** columns and relationships of "system" */
export type System = {
  readonly __typename?: 'system';
  readonly purchaseEnabled: Scalars['Boolean'];
};

/** Boolean expression to filter rows from the table "system". All fields are combined with a logical 'AND'. */
export type System_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<System_Bool_Exp>>;
  readonly _not?: InputMaybe<System_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<System_Bool_Exp>>;
  readonly purchaseEnabled?: InputMaybe<Boolean_Comparison_Exp>;
};

/** Ordering options when selecting data from "system". */
export type System_Order_By = {
  readonly purchaseEnabled?: InputMaybe<Order_By>;
};

/** select columns of table "system" */
export enum System_Select_Column {
  /** column name */
  PurchaseEnabled = 'purchaseEnabled'
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['timestamptz']>;
  readonly _gt?: InputMaybe<Scalars['timestamptz']>;
  readonly _gte?: InputMaybe<Scalars['timestamptz']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['timestamptz']>;
  readonly _lte?: InputMaybe<Scalars['timestamptz']>;
  readonly _neq?: InputMaybe<Scalars['timestamptz']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>;
};

/**
 * track how many yuletide items an account owns
 *
 *
 * columns and relationships of "yuletide_item_track"
 *
 */
export type Yuletide_Item_Track = {
  readonly __typename?: 'yuletide_item_track';
  readonly id: Scalars['String'];
  readonly item_count: Scalars['Int'];
};

/** aggregated selection of "yuletide_item_track" */
export type Yuletide_Item_Track_Aggregate = {
  readonly __typename?: 'yuletide_item_track_aggregate';
  readonly aggregate?: Maybe<Yuletide_Item_Track_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Yuletide_Item_Track>;
};

/** aggregate fields of "yuletide_item_track" */
export type Yuletide_Item_Track_Aggregate_Fields = {
  readonly __typename?: 'yuletide_item_track_aggregate_fields';
  readonly avg?: Maybe<Yuletide_Item_Track_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Yuletide_Item_Track_Max_Fields>;
  readonly min?: Maybe<Yuletide_Item_Track_Min_Fields>;
  readonly stddev?: Maybe<Yuletide_Item_Track_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Yuletide_Item_Track_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Yuletide_Item_Track_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Yuletide_Item_Track_Sum_Fields>;
  readonly var_pop?: Maybe<Yuletide_Item_Track_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Yuletide_Item_Track_Var_Samp_Fields>;
  readonly variance?: Maybe<Yuletide_Item_Track_Variance_Fields>;
};


/** aggregate fields of "yuletide_item_track" */
export type Yuletide_Item_Track_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Yuletide_Item_Track_Avg_Fields = {
  readonly __typename?: 'yuletide_item_track_avg_fields';
  readonly item_count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "yuletide_item_track". All fields are combined with a logical 'AND'. */
export type Yuletide_Item_Track_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Bool_Exp>>;
  readonly _not?: InputMaybe<Yuletide_Item_Track_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Bool_Exp>>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly item_count?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Yuletide_Item_Track_Max_Fields = {
  readonly __typename?: 'yuletide_item_track_max_fields';
  readonly id?: Maybe<Scalars['String']>;
  readonly item_count?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Yuletide_Item_Track_Min_Fields = {
  readonly __typename?: 'yuletide_item_track_min_fields';
  readonly id?: Maybe<Scalars['String']>;
  readonly item_count?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "yuletide_item_track". */
export type Yuletide_Item_Track_Order_By = {
  readonly id?: InputMaybe<Order_By>;
  readonly item_count?: InputMaybe<Order_By>;
};

/** select columns of table "yuletide_item_track" */
export enum Yuletide_Item_Track_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ItemCount = 'item_count'
}

/** aggregate stddev on columns */
export type Yuletide_Item_Track_Stddev_Fields = {
  readonly __typename?: 'yuletide_item_track_stddev_fields';
  readonly item_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Yuletide_Item_Track_Stddev_Pop_Fields = {
  readonly __typename?: 'yuletide_item_track_stddev_pop_fields';
  readonly item_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Yuletide_Item_Track_Stddev_Samp_Fields = {
  readonly __typename?: 'yuletide_item_track_stddev_samp_fields';
  readonly item_count?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Yuletide_Item_Track_Sum_Fields = {
  readonly __typename?: 'yuletide_item_track_sum_fields';
  readonly item_count?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Yuletide_Item_Track_Var_Pop_Fields = {
  readonly __typename?: 'yuletide_item_track_var_pop_fields';
  readonly item_count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Yuletide_Item_Track_Var_Samp_Fields = {
  readonly __typename?: 'yuletide_item_track_var_samp_fields';
  readonly item_count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Yuletide_Item_Track_Variance_Fields = {
  readonly __typename?: 'yuletide_item_track_variance_fields';
  readonly item_count?: Maybe<Scalars['Float']>;
};

export type AccountQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type AccountQuery = { readonly __typename?: 'Query', readonly account?: { readonly __typename?: 'Account', readonly organizations?: ReadonlyArray<{ readonly __typename?: 'AccountOrganizations', readonly membersCount: number, readonly access: string, readonly member: { readonly __typename?: 'AccountOrganizationMember', readonly valueLocked: number, readonly canEdit: boolean, readonly role: string }, readonly metadata: { readonly __typename?: 'AccountOrganizationMetadata', readonly logo?: string | null, readonly name: string } } | null> | null, readonly balances?: ReadonlyArray<{ readonly __typename?: 'AccountBalance', readonly name: string, readonly symbol: string, readonly transferrable: number, readonly locked: number, readonly reserved: number, readonly total: number } | null> | null } | null };

export type CampaignContributorsConnectionQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type CampaignContributorsConnectionQuery = { readonly __typename?: 'Query', readonly campaignContributorsConnection: { readonly __typename?: 'CampaignContributorsConnection', readonly edges: ReadonlyArray<{ readonly __typename?: 'CampaignContributorEdge', readonly node: { readonly __typename?: 'CampaignContributor', readonly id: string, readonly contributed: any, readonly campaign: { readonly __typename?: 'Campaign', readonly createdAtBlock: number, readonly deposit: any, readonly expiry: number, readonly state: string, readonly target: any, readonly metadata?: { readonly __typename?: 'CampaignMetadata', readonly name: string, readonly title: string, readonly logo: string } | null, readonly contributors: ReadonlyArray<{ readonly __typename?: 'CampaignContributor', readonly id: string, readonly contributed: any }> } } }> } };

export type CampaignsQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type CampaignsQuery = { readonly __typename?: 'Query', readonly campaigns: ReadonlyArray<{ readonly __typename?: 'Campaign', readonly target: any, readonly deposit: any, readonly metadata?: { readonly __typename?: 'CampaignMetadata', readonly name: string, readonly logo: string, readonly title: string, readonly header: string } | null, readonly contributors: ReadonlyArray<{ readonly __typename?: 'CampaignContributor', readonly contributed: any, readonly id: string }> }> };

export type CollectablesForUserQueryVariables = Exact<{
  owner: Scalars['String'];
}>;


export type CollectablesForUserQuery = { readonly __typename?: 'Query', readonly nfts: ReadonlyArray<{ readonly __typename?: 'nfts', readonly id: string, readonly metadata?: string | null, readonly sn: string }> };

export type ConfigQueryVariables = Exact<{
  env: Environment;
}>;


export type ConfigQuery = { readonly __typename?: 'Query', readonly config: { readonly __typename?: 'Config', readonly SITE_NAME?: string | null, readonly SITE_TITLE?: string | null, readonly SITE_DESCRIPTION?: string | null, readonly SITE_IMAGE?: string | null, readonly TW_SITE_NAME?: string | null, readonly TW_SITE_CREATOR?: string | null, readonly CONTACT?: string | null, readonly IPFS_GATEWAY?: string | null, readonly LOG_LEVEL?: LogLevel | null } };

export type DisplayValuesQueryVariables = Exact<{ [key: string]: never; }>;


export type DisplayValuesQuery = { readonly __typename?: 'Query', readonly displayValues?: { readonly __typename?: 'DisplayValues', readonly collateralTypes?: ReadonlyArray<{ readonly __typename?: 'DisplayValueEntryNumber', readonly key: string, readonly value: number, readonly text: string } | null> | null, readonly proposalTypes?: ReadonlyArray<{ readonly __typename?: 'DisplayValueEntryNumber', readonly key: string, readonly value: number, readonly text: string } | null> | null, readonly votingTypes?: ReadonlyArray<{ readonly __typename?: 'DisplayValueEntryNumber', readonly key: string, readonly value: number, readonly text: string } | null> | null, readonly daoBodies?: ReadonlyArray<{ readonly __typename?: 'DisplayValueEntryNumber', readonly key: string, readonly value: number, readonly text: string } | null> | null, readonly daoMemberGovernance?: ReadonlyArray<{ readonly __typename?: 'DisplayValueEntryNumber', readonly key: string, readonly value: number, readonly text: string } | null> | null, readonly daoFeeModel?: ReadonlyArray<{ readonly __typename?: 'DisplayValueEntryNumber', readonly key: string, readonly value: number, readonly text: string } | null> | null, readonly projectTypes?: ReadonlyArray<{ readonly __typename?: 'DisplayValueEntryNumber', readonly key: string, readonly value: number, readonly text: string } | null> | null, readonly protocolTypes?: ReadonlyArray<{ readonly __typename?: 'DisplayValueEntryNumber', readonly key: string, readonly value: number, readonly text: string } | null> | null, readonly projectDurations?: ReadonlyArray<{ readonly __typename?: 'DisplayValueEntryNumber', readonly key: string, readonly value: number, readonly text: string } | null> | null, readonly memberships?: ReadonlyArray<{ readonly __typename?: 'DisplayValueEntryNumber', readonly key: string, readonly value: number, readonly text: string } | null> | null, readonly countries?: ReadonlyArray<{ readonly __typename?: 'DisplayValueEntryCountry', readonly key: string, readonly value: string, readonly text: string, readonly flag: string } | null> | null } | null };

export type FeaturesQueryVariables = Exact<{
  env: Environment;
}>;


export type FeaturesQuery = { readonly __typename?: 'Query', readonly features: { readonly __typename?: 'Features', readonly CREATE_PROPOSAL: boolean, readonly CREATE_PROPOSAL_SIMPLE_MAJORITY: boolean, readonly CREATE_PROPOSAL_RELATIVE_MAJORITY: boolean, readonly CREATE_GENERAL_PROPOSAL: boolean, readonly CREATE_WITHDRAW_PROPOSAL: boolean, readonly CREATE_SPENDING_PROPOSAL: boolean } };

export type IdentityByAddressQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type IdentityByAddressQuery = { readonly __typename?: 'Query', readonly identities: ReadonlyArray<{ readonly __typename?: 'Identity', readonly id: string, readonly email?: string | null, readonly displayName?: string | null, readonly image?: string | null, readonly legalName?: string | null, readonly riot?: string | null, readonly twitter?: string | null }> };

export type OrganizationsQueryVariables = Exact<{
  orderBy: ReadonlyArray<OrganizationOrderByInput> | OrganizationOrderByInput;
  first?: InputMaybe<Scalars['Int']>;
  searchQuery?: InputMaybe<Scalars['String']>;
}>;


export type OrganizationsQuery = { readonly __typename?: 'Query', readonly organizationsConnection: { readonly __typename?: 'OrganizationsConnection', readonly totalCount: number }, readonly organizations: ReadonlyArray<{ readonly __typename?: 'Organization', readonly id: string, readonly access: string, readonly creator: string, readonly metadata?: { readonly __typename?: 'OrganizationMetadata', readonly name: string, readonly description: string, readonly logo: string } | null, readonly members: ReadonlyArray<{ readonly __typename?: 'OrganizationMember', readonly address: string, readonly identity: { readonly __typename?: 'Identity', readonly displayName?: string | null } }> }> };

export type OrganizationByIdQueryVariables = Exact<{
  orgId: Scalars['ID'];
}>;


export type OrganizationByIdQuery = { readonly __typename?: 'Query', readonly organizations: ReadonlyArray<{ readonly __typename?: 'Organization', readonly access: string, readonly controller: string, readonly createdAtBlock: number, readonly creator: string, readonly fee: any, readonly feeModel: string, readonly govAsset: number, readonly id: string, readonly memberLimit: any, readonly payAsset: number, readonly treasury: string, readonly type: string, readonly metadata?: { readonly __typename?: 'OrganizationMetadata', readonly description: string, readonly email: string, readonly id: string, readonly logo: string, readonly name: string, readonly repo: string, readonly website: string } | null }> };

export type SidebarQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type SidebarQuery = { readonly __typename?: 'Query', readonly organizations: ReadonlyArray<{ readonly __typename?: 'Organization', readonly id: string, readonly metadata?: { readonly __typename?: 'OrganizationMetadata', readonly logo: string, readonly name: string } | null }> };


export const AccountDocument = gql`
    query account($address: String!) {
  account(address: $address) {
    organizations {
      membersCount
      member {
        valueLocked
        canEdit
        role
      }
      access
      metadata {
        logo
        name
      }
    }
    balances {
      name
      symbol
      transferrable
      locked
      reserved
      total
    }
  }
}
    `;

/**
 * __useAccountQuery__
 *
 * To run a query within a React component, call `useAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountQuery(baseOptions: Apollo.QueryHookOptions<AccountQuery, AccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountQuery, AccountQueryVariables>(AccountDocument, options);
      }
export function useAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountQuery, AccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountQuery, AccountQueryVariables>(AccountDocument, options);
        }
export type AccountQueryHookResult = ReturnType<typeof useAccountQuery>;
export type AccountLazyQueryHookResult = ReturnType<typeof useAccountLazyQuery>;
export type AccountQueryResult = Apollo.QueryResult<AccountQuery, AccountQueryVariables>;
export const CampaignContributorsConnectionDocument = gql`
    query CampaignContributorsConnection($address: String!) {
  campaignContributorsConnection(orderBy: id_ASC, where: {address_eq: $address}) {
    edges {
      node {
        id
        contributed
        campaign {
          metadata {
            name
            title
            logo
          }
          contributors {
            id
            contributed
          }
          createdAtBlock
          deposit
          expiry
          state
          target
        }
      }
    }
  }
}
    `;

/**
 * __useCampaignContributorsConnectionQuery__
 *
 * To run a query within a React component, call `useCampaignContributorsConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCampaignContributorsConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCampaignContributorsConnectionQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useCampaignContributorsConnectionQuery(baseOptions: Apollo.QueryHookOptions<CampaignContributorsConnectionQuery, CampaignContributorsConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CampaignContributorsConnectionQuery, CampaignContributorsConnectionQueryVariables>(CampaignContributorsConnectionDocument, options);
      }
export function useCampaignContributorsConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CampaignContributorsConnectionQuery, CampaignContributorsConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CampaignContributorsConnectionQuery, CampaignContributorsConnectionQueryVariables>(CampaignContributorsConnectionDocument, options);
        }
export type CampaignContributorsConnectionQueryHookResult = ReturnType<typeof useCampaignContributorsConnectionQuery>;
export type CampaignContributorsConnectionLazyQueryHookResult = ReturnType<typeof useCampaignContributorsConnectionLazyQuery>;
export type CampaignContributorsConnectionQueryResult = Apollo.QueryResult<CampaignContributorsConnectionQuery, CampaignContributorsConnectionQueryVariables>;
export const CampaignsDocument = gql`
    query Campaigns($address: String!) {
  campaigns(where: {adminIdentity: {address_eq: $address}}) {
    target
    deposit
    metadata {
      name
      logo
      title
      header
    }
    contributors {
      contributed
      id
    }
  }
}
    `;

/**
 * __useCampaignsQuery__
 *
 * To run a query within a React component, call `useCampaignsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCampaignsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCampaignsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useCampaignsQuery(baseOptions: Apollo.QueryHookOptions<CampaignsQuery, CampaignsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CampaignsQuery, CampaignsQueryVariables>(CampaignsDocument, options);
      }
export function useCampaignsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CampaignsQuery, CampaignsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CampaignsQuery, CampaignsQueryVariables>(CampaignsDocument, options);
        }
export type CampaignsQueryHookResult = ReturnType<typeof useCampaignsQuery>;
export type CampaignsLazyQueryHookResult = ReturnType<typeof useCampaignsLazyQuery>;
export type CampaignsQueryResult = Apollo.QueryResult<CampaignsQuery, CampaignsQueryVariables>;
export const CollectablesForUserDocument = gql`
    query CollectablesForUser($owner: String!) {
  nfts(where: {owner: {_eq: $owner}}) {
    id
    metadata
    sn
  }
}
    `;

/**
 * __useCollectablesForUserQuery__
 *
 * To run a query within a React component, call `useCollectablesForUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectablesForUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectablesForUserQuery({
 *   variables: {
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useCollectablesForUserQuery(baseOptions: Apollo.QueryHookOptions<CollectablesForUserQuery, CollectablesForUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectablesForUserQuery, CollectablesForUserQueryVariables>(CollectablesForUserDocument, options);
      }
export function useCollectablesForUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectablesForUserQuery, CollectablesForUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectablesForUserQuery, CollectablesForUserQueryVariables>(CollectablesForUserDocument, options);
        }
export type CollectablesForUserQueryHookResult = ReturnType<typeof useCollectablesForUserQuery>;
export type CollectablesForUserLazyQueryHookResult = ReturnType<typeof useCollectablesForUserLazyQuery>;
export type CollectablesForUserQueryResult = Apollo.QueryResult<CollectablesForUserQuery, CollectablesForUserQueryVariables>;
export const ConfigDocument = gql`
    query Config($env: Environment!) {
  config(env: $env) {
    SITE_NAME
    SITE_TITLE
    SITE_DESCRIPTION
    SITE_IMAGE
    TW_SITE_NAME
    TW_SITE_CREATOR
    CONTACT
    IPFS_GATEWAY
    LOG_LEVEL
  }
}
    `;

/**
 * __useConfigQuery__
 *
 * To run a query within a React component, call `useConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConfigQuery({
 *   variables: {
 *      env: // value for 'env'
 *   },
 * });
 */
export function useConfigQuery(baseOptions: Apollo.QueryHookOptions<ConfigQuery, ConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConfigQuery, ConfigQueryVariables>(ConfigDocument, options);
      }
export function useConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConfigQuery, ConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConfigQuery, ConfigQueryVariables>(ConfigDocument, options);
        }
export type ConfigQueryHookResult = ReturnType<typeof useConfigQuery>;
export type ConfigLazyQueryHookResult = ReturnType<typeof useConfigLazyQuery>;
export type ConfigQueryResult = Apollo.QueryResult<ConfigQuery, ConfigQueryVariables>;
export const DisplayValuesDocument = gql`
    query DisplayValues {
  displayValues {
    collateralTypes {
      key
      value
      text
    }
    proposalTypes {
      key
      value
      text
    }
    votingTypes {
      key
      value
      text
    }
    daoBodies {
      key
      value
      text
    }
    daoMemberGovernance {
      key
      value
      text
    }
    daoFeeModel {
      key
      value
      text
    }
    projectTypes {
      key
      value
      text
    }
    protocolTypes {
      key
      value
      text
    }
    projectDurations {
      key
      value
      text
    }
    memberships {
      key
      value
      text
    }
    countries {
      key
      value
      text
      flag
    }
  }
}
    `;

/**
 * __useDisplayValuesQuery__
 *
 * To run a query within a React component, call `useDisplayValuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDisplayValuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDisplayValuesQuery({
 *   variables: {
 *   },
 * });
 */
export function useDisplayValuesQuery(baseOptions?: Apollo.QueryHookOptions<DisplayValuesQuery, DisplayValuesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DisplayValuesQuery, DisplayValuesQueryVariables>(DisplayValuesDocument, options);
      }
export function useDisplayValuesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DisplayValuesQuery, DisplayValuesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DisplayValuesQuery, DisplayValuesQueryVariables>(DisplayValuesDocument, options);
        }
export type DisplayValuesQueryHookResult = ReturnType<typeof useDisplayValuesQuery>;
export type DisplayValuesLazyQueryHookResult = ReturnType<typeof useDisplayValuesLazyQuery>;
export type DisplayValuesQueryResult = Apollo.QueryResult<DisplayValuesQuery, DisplayValuesQueryVariables>;
export const FeaturesDocument = gql`
    query Features($env: Environment!) {
  features(env: $env) {
    CREATE_PROPOSAL
    CREATE_PROPOSAL_SIMPLE_MAJORITY
    CREATE_PROPOSAL_RELATIVE_MAJORITY
    CREATE_GENERAL_PROPOSAL
    CREATE_WITHDRAW_PROPOSAL
    CREATE_SPENDING_PROPOSAL
  }
}
    `;

/**
 * __useFeaturesQuery__
 *
 * To run a query within a React component, call `useFeaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeaturesQuery({
 *   variables: {
 *      env: // value for 'env'
 *   },
 * });
 */
export function useFeaturesQuery(baseOptions: Apollo.QueryHookOptions<FeaturesQuery, FeaturesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeaturesQuery, FeaturesQueryVariables>(FeaturesDocument, options);
      }
export function useFeaturesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeaturesQuery, FeaturesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeaturesQuery, FeaturesQueryVariables>(FeaturesDocument, options);
        }
export type FeaturesQueryHookResult = ReturnType<typeof useFeaturesQuery>;
export type FeaturesLazyQueryHookResult = ReturnType<typeof useFeaturesLazyQuery>;
export type FeaturesQueryResult = Apollo.QueryResult<FeaturesQuery, FeaturesQueryVariables>;
export const IdentityByAddressDocument = gql`
    query IdentityByAddress($address: String!) {
  identities(where: {address_eq: $address}) {
    id
    email
    displayName
    image
    legalName
    riot
    twitter
  }
}
    `;

/**
 * __useIdentityByAddressQuery__
 *
 * To run a query within a React component, call `useIdentityByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useIdentityByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIdentityByAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useIdentityByAddressQuery(baseOptions: Apollo.QueryHookOptions<IdentityByAddressQuery, IdentityByAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IdentityByAddressQuery, IdentityByAddressQueryVariables>(IdentityByAddressDocument, options);
      }
export function useIdentityByAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IdentityByAddressQuery, IdentityByAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IdentityByAddressQuery, IdentityByAddressQueryVariables>(IdentityByAddressDocument, options);
        }
export type IdentityByAddressQueryHookResult = ReturnType<typeof useIdentityByAddressQuery>;
export type IdentityByAddressLazyQueryHookResult = ReturnType<typeof useIdentityByAddressLazyQuery>;
export type IdentityByAddressQueryResult = Apollo.QueryResult<IdentityByAddressQuery, IdentityByAddressQueryVariables>;
export const OrganizationsDocument = gql`
    query Organizations($orderBy: [OrganizationOrderByInput!]!, $first: Int, $searchQuery: String) {
  organizationsConnection(
    orderBy: $orderBy
    first: $first
    where: {metadata: {name_contains: $searchQuery, OR: {description_contains: $searchQuery}}}
  ) {
    totalCount
  }
  organizations(
    limit: $first
    orderBy: $orderBy
    where: {metadata: {name_contains: $searchQuery, OR: {description_contains: $searchQuery}}}
  ) {
    id
    metadata {
      name
      description
      logo
    }
    access
    creator
    members {
      address
      identity {
        displayName
      }
    }
  }
}
    `;

/**
 * __useOrganizationsQuery__
 *
 * To run a query within a React component, call `useOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      searchQuery: // value for 'searchQuery'
 *   },
 * });
 */
export function useOrganizationsQuery(baseOptions: Apollo.QueryHookOptions<OrganizationsQuery, OrganizationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, options);
      }
export function useOrganizationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationsQuery, OrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, options);
        }
export type OrganizationsQueryHookResult = ReturnType<typeof useOrganizationsQuery>;
export type OrganizationsLazyQueryHookResult = ReturnType<typeof useOrganizationsLazyQuery>;
export type OrganizationsQueryResult = Apollo.QueryResult<OrganizationsQuery, OrganizationsQueryVariables>;
export const OrganizationByIdDocument = gql`
    query OrganizationById($orgId: ID!) {
  organizations(where: {id_eq: $orgId}) {
    access
    controller
    createdAtBlock
    creator
    fee
    feeModel
    govAsset
    id
    memberLimit
    payAsset
    treasury
    type
    metadata {
      description
      email
      id
      logo
      name
      repo
      website
    }
  }
}
    `;

/**
 * __useOrganizationByIdQuery__
 *
 * To run a query within a React component, call `useOrganizationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationByIdQuery({
 *   variables: {
 *      orgId: // value for 'orgId'
 *   },
 * });
 */
export function useOrganizationByIdQuery(baseOptions: Apollo.QueryHookOptions<OrganizationByIdQuery, OrganizationByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationByIdQuery, OrganizationByIdQueryVariables>(OrganizationByIdDocument, options);
      }
export function useOrganizationByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationByIdQuery, OrganizationByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationByIdQuery, OrganizationByIdQueryVariables>(OrganizationByIdDocument, options);
        }
export type OrganizationByIdQueryHookResult = ReturnType<typeof useOrganizationByIdQuery>;
export type OrganizationByIdLazyQueryHookResult = ReturnType<typeof useOrganizationByIdLazyQuery>;
export type OrganizationByIdQueryResult = Apollo.QueryResult<OrganizationByIdQuery, OrganizationByIdQueryVariables>;
export const SidebarDocument = gql`
    query Sidebar($address: String!) {
  organizations(where: {members_some: {address_eq: $address}}) {
    id
    metadata {
      logo
      name
    }
  }
}
    `;

/**
 * __useSidebarQuery__
 *
 * To run a query within a React component, call `useSidebarQuery` and pass it any options that fit your needs.
 * When your component renders, `useSidebarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSidebarQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useSidebarQuery(baseOptions: Apollo.QueryHookOptions<SidebarQuery, SidebarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SidebarQuery, SidebarQueryVariables>(SidebarDocument, options);
      }
export function useSidebarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SidebarQuery, SidebarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SidebarQuery, SidebarQueryVariables>(SidebarDocument, options);
        }
export type SidebarQueryHookResult = ReturnType<typeof useSidebarQuery>;
export type SidebarLazyQueryHookResult = ReturnType<typeof useSidebarLazyQuery>;
export type SidebarQueryResult = Apollo.QueryResult<SidebarQuery, SidebarQueryVariables>;