import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	/** The `Upload` scalar type represents a file upload. */
	Upload: any
	numeric: any
}

export type Config = {
	readonly __typename?: 'Config'
	readonly CONTACT?: Maybe<Scalars['String']>
	readonly IPFS_GATEWAY?: Maybe<Scalars['String']>
	readonly LOG_LEVEL?: Maybe<LogLevel>
	readonly SITE_DESCRIPTION?: Maybe<Scalars['String']>
	readonly SITE_IMAGE?: Maybe<Scalars['String']>
	readonly SITE_NAME?: Maybe<Scalars['String']>
	readonly SITE_TITLE?: Maybe<Scalars['String']>
	readonly TW_SITE_CREATOR?: Maybe<Scalars['String']>
	readonly TW_SITE_NAME?: Maybe<Scalars['String']>
}

export type DisplayValueEntry = {
	readonly key: Scalars['String']
	readonly text: Scalars['String']
}

export type DisplayValueEntryCountry = DisplayValueEntry & {
	readonly __typename?: 'DisplayValueEntryCountry'
	readonly flag: Scalars['String']
	readonly key: Scalars['String']
	readonly text: Scalars['String']
	readonly value: Scalars['String']
}

export type DisplayValueEntryNumber = DisplayValueEntry & {
	readonly __typename?: 'DisplayValueEntryNumber'
	readonly key: Scalars['String']
	readonly text: Scalars['String']
	readonly value: Scalars['Int']
}

export type DisplayValueEntryString = DisplayValueEntry & {
	readonly __typename?: 'DisplayValueEntryString'
	readonly key: Scalars['String']
	readonly text: Scalars['String']
	readonly value: Scalars['String']
}

export type DisplayValues = {
	readonly __typename?: 'DisplayValues'
	readonly collateralTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly countries?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryCountry>>>
	readonly daoBodies?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly daoFeeModel?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly daoMemberGovernance?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly memberships?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly projectDurations?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly projectTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly proposalTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly protocolTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly votingTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
}

export enum Environment {
	Development = 'DEVELOPMENT',
	Production = 'PRODUCTION',
	Staging = 'STAGING',
}

export type Features = ProposalFeatures & {
	readonly __typename?: 'Features'
	readonly CREATE_GENERAL_PROPOSAL: Scalars['Boolean']
	readonly CREATE_PROPOSAL: Scalars['Boolean']
	readonly CREATE_PROPOSAL_RELATIVE_MAJORITY: Scalars['Boolean']
	readonly CREATE_PROPOSAL_SIMPLE_MAJORITY: Scalars['Boolean']
	readonly CREATE_SPENDING_PROPOSAL: Scalars['Boolean']
	readonly CREATE_WITHDRAW_PROPOSAL: Scalars['Boolean']
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['Int']>
	readonly _gt?: InputMaybe<Scalars['Int']>
	readonly _gte?: InputMaybe<Scalars['Int']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['Int']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['Int']>
	readonly _lte?: InputMaybe<Scalars['Int']>
	readonly _neq?: InputMaybe<Scalars['Int']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Int']>>
}

export type Link = {
	readonly __typename?: 'Link'
	readonly category?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly imageUrl?: Maybe<Scalars['String']>
	readonly title?: Maybe<Scalars['String']>
	readonly url?: Maybe<Scalars['String']>
	readonly users?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
}

export enum LogLevel {
	Debug = 'DEBUG',
	Error = 'ERROR',
	Info = 'INFO',
	Silent = 'SILENT',
	Trace = 'TRACE',
	Warn = 'WARN',
}

export type ProposalFeatures = {
	readonly CREATE_GENERAL_PROPOSAL: Scalars['Boolean']
	readonly CREATE_PROPOSAL: Scalars['Boolean']
	readonly CREATE_PROPOSAL_RELATIVE_MAJORITY: Scalars['Boolean']
	readonly CREATE_PROPOSAL_SIMPLE_MAJORITY: Scalars['Boolean']
	readonly CREATE_SPENDING_PROPOSAL: Scalars['Boolean']
	readonly CREATE_WITHDRAW_PROPOSAL: Scalars['Boolean']
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['String']>
	readonly _gt?: InputMaybe<Scalars['String']>
	readonly _gte?: InputMaybe<Scalars['String']>
	/** does the column match the given case-insensitive pattern */
	readonly _ilike?: InputMaybe<Scalars['String']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['String']>>
	/** does the column match the given POSIX regular expression, case insensitive */
	readonly _iregex?: InputMaybe<Scalars['String']>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	/** does the column match the given pattern */
	readonly _like?: InputMaybe<Scalars['String']>
	readonly _lt?: InputMaybe<Scalars['String']>
	readonly _lte?: InputMaybe<Scalars['String']>
	readonly _neq?: InputMaybe<Scalars['String']>
	/** does the column NOT match the given case-insensitive pattern */
	readonly _nilike?: InputMaybe<Scalars['String']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['String']>>
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	readonly _niregex?: InputMaybe<Scalars['String']>
	/** does the column NOT match the given pattern */
	readonly _nlike?: InputMaybe<Scalars['String']>
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	readonly _nregex?: InputMaybe<Scalars['String']>
	/** does the column NOT match the given SQL regular expression */
	readonly _nsimilar?: InputMaybe<Scalars['String']>
	/** does the column match the given POSIX regular expression, case sensitive */
	readonly _regex?: InputMaybe<Scalars['String']>
	/** does the column match the given SQL regular expression */
	readonly _similar?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "campaign" */
export type Campaign = {
	readonly __typename?: 'campaign'
	readonly admin: Scalars['String']
	readonly admin_identity_id: Scalars['String']
	/** An array relationship */
	readonly campaign_contributors: ReadonlyArray<Campaign_Contributor>
	/** An object relationship */
	readonly campaign_metadatum?: Maybe<Campaign_Metadata>
	readonly created_at_block: Scalars['Int']
	readonly creator: Scalars['String']
	readonly creator_identity_id: Scalars['String']
	readonly deposit: Scalars['numeric']
	readonly expiry: Scalars['Int']
	readonly governance: Scalars['String']
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity: Identity
	/** An object relationship */
	readonly identityByCreatorIdentityId: Identity
	readonly metadata_id?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly organization: Organization
	readonly organization_id: Scalars['String']
	readonly protocol: Scalars['String']
	readonly state: Scalars['String']
	readonly target: Scalars['numeric']
	readonly token_name: Scalars['String']
	readonly token_symbol: Scalars['String']
}

/** columns and relationships of "campaign" */
export type CampaignCampaign_ContributorsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Contributor_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Contributor_Order_By>>
	where?: InputMaybe<Campaign_Contributor_Bool_Exp>
}

/** order by aggregate values of table "campaign" */
export type Campaign_Aggregate_Order_By = {
	readonly avg?: InputMaybe<Campaign_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Campaign_Max_Order_By>
	readonly min?: InputMaybe<Campaign_Min_Order_By>
	readonly stddev?: InputMaybe<Campaign_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<Campaign_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<Campaign_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<Campaign_Sum_Order_By>
	readonly var_pop?: InputMaybe<Campaign_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<Campaign_Var_Samp_Order_By>
	readonly variance?: InputMaybe<Campaign_Variance_Order_By>
}

/** order by avg() on columns of table "campaign" */
export type Campaign_Avg_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "campaign". All fields are combined with a logical 'AND'. */
export type Campaign_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Campaign_Bool_Exp>>
	readonly _not?: InputMaybe<Campaign_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Campaign_Bool_Exp>>
	readonly admin?: InputMaybe<String_Comparison_Exp>
	readonly admin_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly campaign_contributors?: InputMaybe<Campaign_Contributor_Bool_Exp>
	readonly campaign_metadatum?: InputMaybe<Campaign_Metadata_Bool_Exp>
	readonly created_at_block?: InputMaybe<Int_Comparison_Exp>
	readonly creator?: InputMaybe<String_Comparison_Exp>
	readonly creator_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly deposit?: InputMaybe<Numeric_Comparison_Exp>
	readonly expiry?: InputMaybe<Int_Comparison_Exp>
	readonly governance?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly identity?: InputMaybe<Identity_Bool_Exp>
	readonly identityByCreatorIdentityId?: InputMaybe<Identity_Bool_Exp>
	readonly metadata_id?: InputMaybe<String_Comparison_Exp>
	readonly organization?: InputMaybe<Organization_Bool_Exp>
	readonly organization_id?: InputMaybe<String_Comparison_Exp>
	readonly protocol?: InputMaybe<String_Comparison_Exp>
	readonly state?: InputMaybe<String_Comparison_Exp>
	readonly target?: InputMaybe<Numeric_Comparison_Exp>
	readonly token_name?: InputMaybe<String_Comparison_Exp>
	readonly token_symbol?: InputMaybe<String_Comparison_Exp>
}

/** columns and relationships of "campaign_contributor" */
export type Campaign_Contributor = {
	readonly __typename?: 'campaign_contributor'
	readonly address: Scalars['String']
	/** An object relationship */
	readonly campaign: Campaign
	readonly campaign_id: Scalars['String']
	readonly contributed: Scalars['numeric']
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity: Identity
	readonly identity_id: Scalars['String']
}

/** order by aggregate values of table "campaign_contributor" */
export type Campaign_Contributor_Aggregate_Order_By = {
	readonly avg?: InputMaybe<Campaign_Contributor_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Campaign_Contributor_Max_Order_By>
	readonly min?: InputMaybe<Campaign_Contributor_Min_Order_By>
	readonly stddev?: InputMaybe<Campaign_Contributor_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<Campaign_Contributor_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<Campaign_Contributor_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<Campaign_Contributor_Sum_Order_By>
	readonly var_pop?: InputMaybe<Campaign_Contributor_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<Campaign_Contributor_Var_Samp_Order_By>
	readonly variance?: InputMaybe<Campaign_Contributor_Variance_Order_By>
}

/** order by avg() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Avg_Order_By = {
	readonly contributed?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "campaign_contributor". All fields are combined with a logical 'AND'. */
export type Campaign_Contributor_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Campaign_Contributor_Bool_Exp>>
	readonly _not?: InputMaybe<Campaign_Contributor_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Campaign_Contributor_Bool_Exp>>
	readonly address?: InputMaybe<String_Comparison_Exp>
	readonly campaign?: InputMaybe<Campaign_Bool_Exp>
	readonly campaign_id?: InputMaybe<String_Comparison_Exp>
	readonly contributed?: InputMaybe<Numeric_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly identity?: InputMaybe<Identity_Bool_Exp>
	readonly identity_id?: InputMaybe<String_Comparison_Exp>
}

/** order by max() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Max_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly campaign_id?: InputMaybe<Order_By>
	readonly contributed?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
}

/** order by min() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Min_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly campaign_id?: InputMaybe<Order_By>
	readonly contributed?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "campaign_contributor". */
export type Campaign_Contributor_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly campaign?: InputMaybe<Campaign_Order_By>
	readonly campaign_id?: InputMaybe<Order_By>
	readonly contributed?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly identity_id?: InputMaybe<Order_By>
}

/** select columns of table "campaign_contributor" */
export enum Campaign_Contributor_Select_Column {
	/** column name */
	Address = 'address',
	/** column name */
	CampaignId = 'campaign_id',
	/** column name */
	Contributed = 'contributed',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identity_id',
}

/** order by stddev() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Stddev_Order_By = {
	readonly contributed?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Stddev_Pop_Order_By = {
	readonly contributed?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Stddev_Samp_Order_By = {
	readonly contributed?: InputMaybe<Order_By>
}

/** order by sum() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Sum_Order_By = {
	readonly contributed?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Var_Pop_Order_By = {
	readonly contributed?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Var_Samp_Order_By = {
	readonly contributed?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Variance_Order_By = {
	readonly contributed?: InputMaybe<Order_By>
}

/** order by max() on columns of table "campaign" */
export type Campaign_Max_Order_By = {
	readonly admin?: InputMaybe<Order_By>
	readonly admin_identity_id?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly governance?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly metadata_id?: InputMaybe<Order_By>
	readonly organization_id?: InputMaybe<Order_By>
	readonly protocol?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
	readonly token_name?: InputMaybe<Order_By>
	readonly token_symbol?: InputMaybe<Order_By>
}

/** columns and relationships of "campaign_metadata" */
export type Campaign_Metadata = {
	readonly __typename?: 'campaign_metadata'
	/** An array relationship */
	readonly campaigns: ReadonlyArray<Campaign>
	readonly description: Scalars['String']
	readonly email: Scalars['String']
	readonly header: Scalars['String']
	readonly id: Scalars['String']
	readonly logo: Scalars['String']
	readonly markdown: Scalars['String']
	readonly name: Scalars['String']
	readonly title: Scalars['String']
}

/** columns and relationships of "campaign_metadata" */
export type Campaign_MetadataCampaignsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>
	where?: InputMaybe<Campaign_Bool_Exp>
}

/** Boolean expression to filter rows from the table "campaign_metadata". All fields are combined with a logical 'AND'. */
export type Campaign_Metadata_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Campaign_Metadata_Bool_Exp>>
	readonly _not?: InputMaybe<Campaign_Metadata_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Campaign_Metadata_Bool_Exp>>
	readonly campaigns?: InputMaybe<Campaign_Bool_Exp>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly email?: InputMaybe<String_Comparison_Exp>
	readonly header?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly logo?: InputMaybe<String_Comparison_Exp>
	readonly markdown?: InputMaybe<String_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly title?: InputMaybe<String_Comparison_Exp>
}

/** Ordering options when selecting data from "campaign_metadata". */
export type Campaign_Metadata_Order_By = {
	readonly campaigns_aggregate?: InputMaybe<Campaign_Aggregate_Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly email?: InputMaybe<Order_By>
	readonly header?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly logo?: InputMaybe<Order_By>
	readonly markdown?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly title?: InputMaybe<Order_By>
}

/** select columns of table "campaign_metadata" */
export enum Campaign_Metadata_Select_Column {
	/** column name */
	Description = 'description',
	/** column name */
	Email = 'email',
	/** column name */
	Header = 'header',
	/** column name */
	Id = 'id',
	/** column name */
	Logo = 'logo',
	/** column name */
	Markdown = 'markdown',
	/** column name */
	Name = 'name',
	/** column name */
	Title = 'title',
}

/** order by min() on columns of table "campaign" */
export type Campaign_Min_Order_By = {
	readonly admin?: InputMaybe<Order_By>
	readonly admin_identity_id?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly governance?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly metadata_id?: InputMaybe<Order_By>
	readonly organization_id?: InputMaybe<Order_By>
	readonly protocol?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
	readonly token_name?: InputMaybe<Order_By>
	readonly token_symbol?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "campaign". */
export type Campaign_Order_By = {
	readonly admin?: InputMaybe<Order_By>
	readonly admin_identity_id?: InputMaybe<Order_By>
	readonly campaign_contributors_aggregate?: InputMaybe<Campaign_Contributor_Aggregate_Order_By>
	readonly campaign_metadatum?: InputMaybe<Campaign_Metadata_Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly governance?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly identityByCreatorIdentityId?: InputMaybe<Identity_Order_By>
	readonly metadata_id?: InputMaybe<Order_By>
	readonly organization?: InputMaybe<Organization_Order_By>
	readonly organization_id?: InputMaybe<Order_By>
	readonly protocol?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
	readonly token_name?: InputMaybe<Order_By>
	readonly token_symbol?: InputMaybe<Order_By>
}

/** select columns of table "campaign" */
export enum Campaign_Select_Column {
	/** column name */
	Admin = 'admin',
	/** column name */
	AdminIdentityId = 'admin_identity_id',
	/** column name */
	CreatedAtBlock = 'created_at_block',
	/** column name */
	Creator = 'creator',
	/** column name */
	CreatorIdentityId = 'creator_identity_id',
	/** column name */
	Deposit = 'deposit',
	/** column name */
	Expiry = 'expiry',
	/** column name */
	Governance = 'governance',
	/** column name */
	Id = 'id',
	/** column name */
	MetadataId = 'metadata_id',
	/** column name */
	OrganizationId = 'organization_id',
	/** column name */
	Protocol = 'protocol',
	/** column name */
	State = 'state',
	/** column name */
	Target = 'target',
	/** column name */
	TokenName = 'token_name',
	/** column name */
	TokenSymbol = 'token_symbol',
}

/** order by stddev() on columns of table "campaign" */
export type Campaign_Stddev_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "campaign" */
export type Campaign_Stddev_Pop_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "campaign" */
export type Campaign_Stddev_Samp_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
}

/** order by sum() on columns of table "campaign" */
export type Campaign_Sum_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "campaign" */
export type Campaign_Var_Pop_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "campaign" */
export type Campaign_Var_Samp_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "campaign" */
export type Campaign_Variance_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
}

/** columns and relationships of "identity" */
export type Identity = {
	readonly __typename?: 'identity'
	readonly address: Scalars['String']
	/** An array relationship */
	readonly campaign_contributors: ReadonlyArray<Campaign_Contributor>
	/** An array relationship */
	readonly campaigns: ReadonlyArray<Campaign>
	/** An array relationship */
	readonly campaignsByCreatorIdentityId: ReadonlyArray<Campaign>
	readonly display_name?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly id: Scalars['String']
	readonly image?: Maybe<Scalars['String']>
	readonly legal_name?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly organization_members: ReadonlyArray<Organization_Member>
	/** An array relationship */
	readonly organizations: ReadonlyArray<Organization>
	/** An array relationship */
	readonly organizationsByControllerIdentityId: ReadonlyArray<Organization>
	/** An aggregate relationship */
	readonly organizationsByControllerIdentityId_aggregate: Organization_Aggregate
	/** An array relationship */
	readonly organizationsByCreatorIdentityId: ReadonlyArray<Organization>
	/** An aggregate relationship */
	readonly organizationsByCreatorIdentityId_aggregate: Organization_Aggregate
	/** An aggregate relationship */
	readonly organizations_aggregate: Organization_Aggregate
	readonly riot?: Maybe<Scalars['String']>
	readonly twitter?: Maybe<Scalars['String']>
}

/** columns and relationships of "identity" */
export type IdentityCampaign_ContributorsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Contributor_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Contributor_Order_By>>
	where?: InputMaybe<Campaign_Contributor_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityCampaignsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>
	where?: InputMaybe<Campaign_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityCampaignsByCreatorIdentityIdArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>
	where?: InputMaybe<Campaign_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityOrganization_MembersArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Member_Order_By>>
	where?: InputMaybe<Organization_Member_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityOrganizationsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>
	where?: InputMaybe<Organization_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityOrganizationsByControllerIdentityIdArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>
	where?: InputMaybe<Organization_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityOrganizationsByControllerIdentityId_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>
	where?: InputMaybe<Organization_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityOrganizationsByCreatorIdentityIdArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>
	where?: InputMaybe<Organization_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityOrganizationsByCreatorIdentityId_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>
	where?: InputMaybe<Organization_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityOrganizations_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>
	where?: InputMaybe<Organization_Bool_Exp>
}

/** Boolean expression to filter rows from the table "identity". All fields are combined with a logical 'AND'. */
export type Identity_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Identity_Bool_Exp>>
	readonly _not?: InputMaybe<Identity_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Identity_Bool_Exp>>
	readonly address?: InputMaybe<String_Comparison_Exp>
	readonly campaign_contributors?: InputMaybe<Campaign_Contributor_Bool_Exp>
	readonly campaigns?: InputMaybe<Campaign_Bool_Exp>
	readonly campaignsByCreatorIdentityId?: InputMaybe<Campaign_Bool_Exp>
	readonly display_name?: InputMaybe<String_Comparison_Exp>
	readonly email?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly image?: InputMaybe<String_Comparison_Exp>
	readonly legal_name?: InputMaybe<String_Comparison_Exp>
	readonly organization_members?: InputMaybe<Organization_Member_Bool_Exp>
	readonly organizations?: InputMaybe<Organization_Bool_Exp>
	readonly organizationsByControllerIdentityId?: InputMaybe<Organization_Bool_Exp>
	readonly organizationsByCreatorIdentityId?: InputMaybe<Organization_Bool_Exp>
	readonly riot?: InputMaybe<String_Comparison_Exp>
	readonly twitter?: InputMaybe<String_Comparison_Exp>
}

/** Ordering options when selecting data from "identity". */
export type Identity_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly campaign_contributors_aggregate?: InputMaybe<Campaign_Contributor_Aggregate_Order_By>
	readonly campaignsByCreatorIdentityId_aggregate?: InputMaybe<Campaign_Aggregate_Order_By>
	readonly campaigns_aggregate?: InputMaybe<Campaign_Aggregate_Order_By>
	readonly display_name?: InputMaybe<Order_By>
	readonly email?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly image?: InputMaybe<Order_By>
	readonly legal_name?: InputMaybe<Order_By>
	readonly organization_members_aggregate?: InputMaybe<Organization_Member_Aggregate_Order_By>
	readonly organizationsByControllerIdentityId_aggregate?: InputMaybe<Organization_Aggregate_Order_By>
	readonly organizationsByCreatorIdentityId_aggregate?: InputMaybe<Organization_Aggregate_Order_By>
	readonly organizations_aggregate?: InputMaybe<Organization_Aggregate_Order_By>
	readonly riot?: InputMaybe<Order_By>
	readonly twitter?: InputMaybe<Order_By>
}

/** select columns of table "identity" */
export enum Identity_Select_Column {
	/** column name */
	Address = 'address',
	/** column name */
	DisplayName = 'display_name',
	/** column name */
	Email = 'email',
	/** column name */
	Id = 'id',
	/** column name */
	Image = 'image',
	/** column name */
	LegalName = 'legal_name',
	/** column name */
	Riot = 'riot',
	/** column name */
	Twitter = 'twitter',
}

/** mutation root */
export type Mutation_Root = {
	readonly __typename?: 'mutation_root'
	readonly singleUpload: Scalars['String']
}

/** mutation root */
export type Mutation_RootSingleUploadArgs = {
	fileStream: Scalars['Upload']
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['numeric']>
	readonly _gt?: InputMaybe<Scalars['numeric']>
	readonly _gte?: InputMaybe<Scalars['numeric']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['numeric']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['numeric']>
	readonly _lte?: InputMaybe<Scalars['numeric']>
	readonly _neq?: InputMaybe<Scalars['numeric']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['numeric']>>
}

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
	DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "organization" */
export type Organization = {
	readonly __typename?: 'organization'
	readonly access: Scalars['String']
	/** An array relationship */
	readonly campaigns: ReadonlyArray<Campaign>
	readonly controller: Scalars['String']
	readonly controller_identity_id: Scalars['String']
	readonly created_at_block: Scalars['Int']
	readonly creator: Scalars['String']
	readonly creator_identity_id: Scalars['String']
	readonly fee: Scalars['numeric']
	readonly fee_model: Scalars['String']
	readonly gov_asset: Scalars['Int']
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity: Identity
	/** An object relationship */
	readonly identityByControllerIdentityId: Identity
	/** An object relationship */
	readonly identityByCreatorIdentityId: Identity
	readonly member_limit: Scalars['numeric']
	readonly metadata_id?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly organization_members: ReadonlyArray<Organization_Member>
	/** An object relationship */
	readonly organization_metadata?: Maybe<Organization_Metadata>
	readonly pay_asset: Scalars['Int']
	readonly treasury: Scalars['String']
	readonly treasury_identity_id: Scalars['String']
	readonly type: Scalars['String']
}

/** columns and relationships of "organization" */
export type OrganizationCampaignsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>
	where?: InputMaybe<Campaign_Bool_Exp>
}

/** columns and relationships of "organization" */
export type OrganizationOrganization_MembersArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Member_Order_By>>
	where?: InputMaybe<Organization_Member_Bool_Exp>
}

/** aggregated selection of "organization" */
export type Organization_Aggregate = {
	readonly __typename?: 'organization_aggregate'
	readonly aggregate?: Maybe<Organization_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Organization>
}

/** aggregate fields of "organization" */
export type Organization_Aggregate_Fields = {
	readonly __typename?: 'organization_aggregate_fields'
	readonly avg?: Maybe<Organization_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Organization_Max_Fields>
	readonly min?: Maybe<Organization_Min_Fields>
	readonly stddev?: Maybe<Organization_Stddev_Fields>
	readonly stddev_pop?: Maybe<Organization_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Organization_Stddev_Samp_Fields>
	readonly sum?: Maybe<Organization_Sum_Fields>
	readonly var_pop?: Maybe<Organization_Var_Pop_Fields>
	readonly var_samp?: Maybe<Organization_Var_Samp_Fields>
	readonly variance?: Maybe<Organization_Variance_Fields>
}

/** aggregate fields of "organization" */
export type Organization_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Organization_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "organization" */
export type Organization_Aggregate_Order_By = {
	readonly avg?: InputMaybe<Organization_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Organization_Max_Order_By>
	readonly min?: InputMaybe<Organization_Min_Order_By>
	readonly stddev?: InputMaybe<Organization_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<Organization_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<Organization_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<Organization_Sum_Order_By>
	readonly var_pop?: InputMaybe<Organization_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<Organization_Var_Samp_Order_By>
	readonly variance?: InputMaybe<Organization_Variance_Order_By>
}

/** aggregate avg on columns */
export type Organization_Avg_Fields = {
	readonly __typename?: 'organization_avg_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly fee?: Maybe<Scalars['Float']>
	readonly gov_asset?: Maybe<Scalars['Float']>
	readonly member_limit?: Maybe<Scalars['Float']>
	readonly pay_asset?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "organization" */
export type Organization_Avg_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly fee?: InputMaybe<Order_By>
	readonly gov_asset?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly pay_asset?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Organization_Bool_Exp>>
	readonly _not?: InputMaybe<Organization_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Organization_Bool_Exp>>
	readonly access?: InputMaybe<String_Comparison_Exp>
	readonly campaigns?: InputMaybe<Campaign_Bool_Exp>
	readonly controller?: InputMaybe<String_Comparison_Exp>
	readonly controller_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly created_at_block?: InputMaybe<Int_Comparison_Exp>
	readonly creator?: InputMaybe<String_Comparison_Exp>
	readonly creator_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly fee?: InputMaybe<Numeric_Comparison_Exp>
	readonly fee_model?: InputMaybe<String_Comparison_Exp>
	readonly gov_asset?: InputMaybe<Int_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly identity?: InputMaybe<Identity_Bool_Exp>
	readonly identityByControllerIdentityId?: InputMaybe<Identity_Bool_Exp>
	readonly identityByCreatorIdentityId?: InputMaybe<Identity_Bool_Exp>
	readonly member_limit?: InputMaybe<Numeric_Comparison_Exp>
	readonly metadata_id?: InputMaybe<String_Comparison_Exp>
	readonly organization_members?: InputMaybe<Organization_Member_Bool_Exp>
	readonly organization_metadata?: InputMaybe<Organization_Metadata_Bool_Exp>
	readonly pay_asset?: InputMaybe<Int_Comparison_Exp>
	readonly treasury?: InputMaybe<String_Comparison_Exp>
	readonly treasury_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly type?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Organization_Max_Fields = {
	readonly __typename?: 'organization_max_fields'
	readonly access?: Maybe<Scalars['String']>
	readonly controller?: Maybe<Scalars['String']>
	readonly controller_identity_id?: Maybe<Scalars['String']>
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly creator?: Maybe<Scalars['String']>
	readonly creator_identity_id?: Maybe<Scalars['String']>
	readonly fee?: Maybe<Scalars['numeric']>
	readonly fee_model?: Maybe<Scalars['String']>
	readonly gov_asset?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly member_limit?: Maybe<Scalars['numeric']>
	readonly metadata_id?: Maybe<Scalars['String']>
	readonly pay_asset?: Maybe<Scalars['Int']>
	readonly treasury?: Maybe<Scalars['String']>
	readonly treasury_identity_id?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "organization" */
export type Organization_Max_Order_By = {
	readonly access?: InputMaybe<Order_By>
	readonly controller?: InputMaybe<Order_By>
	readonly controller_identity_id?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly fee?: InputMaybe<Order_By>
	readonly fee_model?: InputMaybe<Order_By>
	readonly gov_asset?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly metadata_id?: InputMaybe<Order_By>
	readonly pay_asset?: InputMaybe<Order_By>
	readonly treasury?: InputMaybe<Order_By>
	readonly treasury_identity_id?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
}

/** columns and relationships of "organization_member" */
export type Organization_Member = {
	readonly __typename?: 'organization_member'
	readonly address: Scalars['String']
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity: Identity
	readonly identity_id: Scalars['String']
	/** An object relationship */
	readonly organization: Organization
	readonly organization_id: Scalars['String']
}

/** order by aggregate values of table "organization_member" */
export type Organization_Member_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Organization_Member_Max_Order_By>
	readonly min?: InputMaybe<Organization_Member_Min_Order_By>
}

/** Boolean expression to filter rows from the table "organization_member". All fields are combined with a logical 'AND'. */
export type Organization_Member_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Organization_Member_Bool_Exp>>
	readonly _not?: InputMaybe<Organization_Member_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Organization_Member_Bool_Exp>>
	readonly address?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly identity?: InputMaybe<Identity_Bool_Exp>
	readonly identity_id?: InputMaybe<String_Comparison_Exp>
	readonly organization?: InputMaybe<Organization_Bool_Exp>
	readonly organization_id?: InputMaybe<String_Comparison_Exp>
}

/** order by max() on columns of table "organization_member" */
export type Organization_Member_Max_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
	readonly organization_id?: InputMaybe<Order_By>
}

/** order by min() on columns of table "organization_member" */
export type Organization_Member_Min_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
	readonly organization_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "organization_member". */
export type Organization_Member_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly identity_id?: InputMaybe<Order_By>
	readonly organization?: InputMaybe<Organization_Order_By>
	readonly organization_id?: InputMaybe<Order_By>
}

/** select columns of table "organization_member" */
export enum Organization_Member_Select_Column {
	/** column name */
	Address = 'address',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identity_id',
	/** column name */
	OrganizationId = 'organization_id',
}

/** columns and relationships of "organization_metadata" */
export type Organization_Metadata = {
	readonly __typename?: 'organization_metadata'
	readonly description: Scalars['String']
	readonly email: Scalars['String']
	readonly id: Scalars['String']
	readonly logo: Scalars['String']
	readonly name: Scalars['String']
	/** An array relationship */
	readonly organizations: ReadonlyArray<Organization>
	/** An aggregate relationship */
	readonly organizations_aggregate: Organization_Aggregate
	readonly repo: Scalars['String']
	readonly website: Scalars['String']
}

/** columns and relationships of "organization_metadata" */
export type Organization_MetadataOrganizationsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>
	where?: InputMaybe<Organization_Bool_Exp>
}

/** columns and relationships of "organization_metadata" */
export type Organization_MetadataOrganizations_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>
	where?: InputMaybe<Organization_Bool_Exp>
}

/** Boolean expression to filter rows from the table "organization_metadata". All fields are combined with a logical 'AND'. */
export type Organization_Metadata_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Organization_Metadata_Bool_Exp>>
	readonly _not?: InputMaybe<Organization_Metadata_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Organization_Metadata_Bool_Exp>>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly email?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly logo?: InputMaybe<String_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly organizations?: InputMaybe<Organization_Bool_Exp>
	readonly repo?: InputMaybe<String_Comparison_Exp>
	readonly website?: InputMaybe<String_Comparison_Exp>
}

/** Ordering options when selecting data from "organization_metadata". */
export type Organization_Metadata_Order_By = {
	readonly description?: InputMaybe<Order_By>
	readonly email?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly logo?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly organizations_aggregate?: InputMaybe<Organization_Aggregate_Order_By>
	readonly repo?: InputMaybe<Order_By>
	readonly website?: InputMaybe<Order_By>
}

/** select columns of table "organization_metadata" */
export enum Organization_Metadata_Select_Column {
	/** column name */
	Description = 'description',
	/** column name */
	Email = 'email',
	/** column name */
	Id = 'id',
	/** column name */
	Logo = 'logo',
	/** column name */
	Name = 'name',
	/** column name */
	Repo = 'repo',
	/** column name */
	Website = 'website',
}

/** aggregate min on columns */
export type Organization_Min_Fields = {
	readonly __typename?: 'organization_min_fields'
	readonly access?: Maybe<Scalars['String']>
	readonly controller?: Maybe<Scalars['String']>
	readonly controller_identity_id?: Maybe<Scalars['String']>
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly creator?: Maybe<Scalars['String']>
	readonly creator_identity_id?: Maybe<Scalars['String']>
	readonly fee?: Maybe<Scalars['numeric']>
	readonly fee_model?: Maybe<Scalars['String']>
	readonly gov_asset?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly member_limit?: Maybe<Scalars['numeric']>
	readonly metadata_id?: Maybe<Scalars['String']>
	readonly pay_asset?: Maybe<Scalars['Int']>
	readonly treasury?: Maybe<Scalars['String']>
	readonly treasury_identity_id?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "organization" */
export type Organization_Min_Order_By = {
	readonly access?: InputMaybe<Order_By>
	readonly controller?: InputMaybe<Order_By>
	readonly controller_identity_id?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly fee?: InputMaybe<Order_By>
	readonly fee_model?: InputMaybe<Order_By>
	readonly gov_asset?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly metadata_id?: InputMaybe<Order_By>
	readonly pay_asset?: InputMaybe<Order_By>
	readonly treasury?: InputMaybe<Order_By>
	readonly treasury_identity_id?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "organization". */
export type Organization_Order_By = {
	readonly access?: InputMaybe<Order_By>
	readonly campaigns_aggregate?: InputMaybe<Campaign_Aggregate_Order_By>
	readonly controller?: InputMaybe<Order_By>
	readonly controller_identity_id?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly fee?: InputMaybe<Order_By>
	readonly fee_model?: InputMaybe<Order_By>
	readonly gov_asset?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly identityByControllerIdentityId?: InputMaybe<Identity_Order_By>
	readonly identityByCreatorIdentityId?: InputMaybe<Identity_Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly metadata_id?: InputMaybe<Order_By>
	readonly organization_members_aggregate?: InputMaybe<Organization_Member_Aggregate_Order_By>
	readonly organization_metadata?: InputMaybe<Organization_Metadata_Order_By>
	readonly pay_asset?: InputMaybe<Order_By>
	readonly treasury?: InputMaybe<Order_By>
	readonly treasury_identity_id?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
}

/** select columns of table "organization" */
export enum Organization_Select_Column {
	/** column name */
	Access = 'access',
	/** column name */
	Controller = 'controller',
	/** column name */
	ControllerIdentityId = 'controller_identity_id',
	/** column name */
	CreatedAtBlock = 'created_at_block',
	/** column name */
	Creator = 'creator',
	/** column name */
	CreatorIdentityId = 'creator_identity_id',
	/** column name */
	Fee = 'fee',
	/** column name */
	FeeModel = 'fee_model',
	/** column name */
	GovAsset = 'gov_asset',
	/** column name */
	Id = 'id',
	/** column name */
	MemberLimit = 'member_limit',
	/** column name */
	MetadataId = 'metadata_id',
	/** column name */
	PayAsset = 'pay_asset',
	/** column name */
	Treasury = 'treasury',
	/** column name */
	TreasuryIdentityId = 'treasury_identity_id',
	/** column name */
	Type = 'type',
}

/** aggregate stddev on columns */
export type Organization_Stddev_Fields = {
	readonly __typename?: 'organization_stddev_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly fee?: Maybe<Scalars['Float']>
	readonly gov_asset?: Maybe<Scalars['Float']>
	readonly member_limit?: Maybe<Scalars['Float']>
	readonly pay_asset?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "organization" */
export type Organization_Stddev_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly fee?: InputMaybe<Order_By>
	readonly gov_asset?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly pay_asset?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Organization_Stddev_Pop_Fields = {
	readonly __typename?: 'organization_stddev_pop_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly fee?: Maybe<Scalars['Float']>
	readonly gov_asset?: Maybe<Scalars['Float']>
	readonly member_limit?: Maybe<Scalars['Float']>
	readonly pay_asset?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "organization" */
export type Organization_Stddev_Pop_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly fee?: InputMaybe<Order_By>
	readonly gov_asset?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly pay_asset?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Organization_Stddev_Samp_Fields = {
	readonly __typename?: 'organization_stddev_samp_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly fee?: Maybe<Scalars['Float']>
	readonly gov_asset?: Maybe<Scalars['Float']>
	readonly member_limit?: Maybe<Scalars['Float']>
	readonly pay_asset?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "organization" */
export type Organization_Stddev_Samp_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly fee?: InputMaybe<Order_By>
	readonly gov_asset?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly pay_asset?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Organization_Sum_Fields = {
	readonly __typename?: 'organization_sum_fields'
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly fee?: Maybe<Scalars['numeric']>
	readonly gov_asset?: Maybe<Scalars['Int']>
	readonly member_limit?: Maybe<Scalars['numeric']>
	readonly pay_asset?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "organization" */
export type Organization_Sum_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly fee?: InputMaybe<Order_By>
	readonly gov_asset?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly pay_asset?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Organization_Var_Pop_Fields = {
	readonly __typename?: 'organization_var_pop_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly fee?: Maybe<Scalars['Float']>
	readonly gov_asset?: Maybe<Scalars['Float']>
	readonly member_limit?: Maybe<Scalars['Float']>
	readonly pay_asset?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "organization" */
export type Organization_Var_Pop_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly fee?: InputMaybe<Order_By>
	readonly gov_asset?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly pay_asset?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Organization_Var_Samp_Fields = {
	readonly __typename?: 'organization_var_samp_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly fee?: Maybe<Scalars['Float']>
	readonly gov_asset?: Maybe<Scalars['Float']>
	readonly member_limit?: Maybe<Scalars['Float']>
	readonly pay_asset?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "organization" */
export type Organization_Var_Samp_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly fee?: InputMaybe<Order_By>
	readonly gov_asset?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly pay_asset?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Organization_Variance_Fields = {
	readonly __typename?: 'organization_variance_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly fee?: Maybe<Scalars['Float']>
	readonly gov_asset?: Maybe<Scalars['Float']>
	readonly member_limit?: Maybe<Scalars['Float']>
	readonly pay_asset?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "organization" */
export type Organization_Variance_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly fee?: InputMaybe<Order_By>
	readonly gov_asset?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly pay_asset?: InputMaybe<Order_By>
}

export type Query_Root = {
	readonly __typename?: 'query_root'
	/** fetch data from the table: "campaign" */
	readonly campaign: ReadonlyArray<Campaign>
	/** fetch data from the table: "campaign" using primary key columns */
	readonly campaign_by_pk?: Maybe<Campaign>
	/** fetch data from the table: "campaign_contributor" */
	readonly campaign_contributor: ReadonlyArray<Campaign_Contributor>
	/** fetch data from the table: "campaign_contributor" using primary key columns */
	readonly campaign_contributor_by_pk?: Maybe<Campaign_Contributor>
	/** fetch data from the table: "campaign_metadata" */
	readonly campaign_metadata: ReadonlyArray<Campaign_Metadata>
	/** fetch data from the table: "campaign_metadata" using primary key columns */
	readonly campaign_metadata_by_pk?: Maybe<Campaign_Metadata>
	readonly config: Config
	readonly displayValues?: Maybe<DisplayValues>
	readonly features: Features
	/** fetch data from the table: "identity" */
	readonly identity: ReadonlyArray<Identity>
	/** fetch data from the table: "identity" using primary key columns */
	readonly identity_by_pk?: Maybe<Identity>
	readonly links: ReadonlyArray<Maybe<Link>>
	/** fetch data from the table: "organization" */
	readonly organization: ReadonlyArray<Organization>
	/** fetch aggregated fields from the table: "organization" */
	readonly organization_aggregate: Organization_Aggregate
	/** fetch data from the table: "organization" using primary key columns */
	readonly organization_by_pk?: Maybe<Organization>
	/** fetch data from the table: "organization_member" */
	readonly organization_member: ReadonlyArray<Organization_Member>
	/** fetch data from the table: "organization_member" using primary key columns */
	readonly organization_member_by_pk?: Maybe<Organization_Member>
	/** fetch data from the table: "organization_metadata" */
	readonly organization_metadata: ReadonlyArray<Organization_Metadata>
	/** fetch data from the table: "organization_metadata" using primary key columns */
	readonly organization_metadata_by_pk?: Maybe<Organization_Metadata>
	readonly version: Scalars['String']
}

export type Query_RootCampaignArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>
	where?: InputMaybe<Campaign_Bool_Exp>
}

export type Query_RootCampaign_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootCampaign_ContributorArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Contributor_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Contributor_Order_By>>
	where?: InputMaybe<Campaign_Contributor_Bool_Exp>
}

export type Query_RootCampaign_Contributor_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootCampaign_MetadataArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Metadata_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Metadata_Order_By>>
	where?: InputMaybe<Campaign_Metadata_Bool_Exp>
}

export type Query_RootCampaign_Metadata_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootConfigArgs = {
	env: Environment
}

export type Query_RootFeaturesArgs = {
	env: Environment
}

export type Query_RootIdentityArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Identity_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Identity_Order_By>>
	where?: InputMaybe<Identity_Bool_Exp>
}

export type Query_RootIdentity_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootOrganizationArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>
	where?: InputMaybe<Organization_Bool_Exp>
}

export type Query_RootOrganization_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>
	where?: InputMaybe<Organization_Bool_Exp>
}

export type Query_RootOrganization_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootOrganization_MemberArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Member_Order_By>>
	where?: InputMaybe<Organization_Member_Bool_Exp>
}

export type Query_RootOrganization_Member_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootOrganization_MetadataArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Metadata_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Metadata_Order_By>>
	where?: InputMaybe<Organization_Metadata_Bool_Exp>
}

export type Query_RootOrganization_Metadata_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_Root = {
	readonly __typename?: 'subscription_root'
	/** fetch data from the table: "campaign" */
	readonly campaign: ReadonlyArray<Campaign>
	/** fetch data from the table: "campaign" using primary key columns */
	readonly campaign_by_pk?: Maybe<Campaign>
	/** fetch data from the table: "campaign_contributor" */
	readonly campaign_contributor: ReadonlyArray<Campaign_Contributor>
	/** fetch data from the table: "campaign_contributor" using primary key columns */
	readonly campaign_contributor_by_pk?: Maybe<Campaign_Contributor>
	/** fetch data from the table: "campaign_metadata" */
	readonly campaign_metadata: ReadonlyArray<Campaign_Metadata>
	/** fetch data from the table: "campaign_metadata" using primary key columns */
	readonly campaign_metadata_by_pk?: Maybe<Campaign_Metadata>
	/** fetch data from the table: "identity" */
	readonly identity: ReadonlyArray<Identity>
	/** fetch data from the table: "identity" using primary key columns */
	readonly identity_by_pk?: Maybe<Identity>
	/** fetch data from the table: "organization" */
	readonly organization: ReadonlyArray<Organization>
	/** fetch aggregated fields from the table: "organization" */
	readonly organization_aggregate: Organization_Aggregate
	/** fetch data from the table: "organization" using primary key columns */
	readonly organization_by_pk?: Maybe<Organization>
	/** fetch data from the table: "organization_member" */
	readonly organization_member: ReadonlyArray<Organization_Member>
	/** fetch data from the table: "organization_member" using primary key columns */
	readonly organization_member_by_pk?: Maybe<Organization_Member>
	/** fetch data from the table: "organization_metadata" */
	readonly organization_metadata: ReadonlyArray<Organization_Metadata>
	/** fetch data from the table: "organization_metadata" using primary key columns */
	readonly organization_metadata_by_pk?: Maybe<Organization_Metadata>
}

export type Subscription_RootCampaignArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>
	where?: InputMaybe<Campaign_Bool_Exp>
}

export type Subscription_RootCampaign_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootCampaign_ContributorArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Contributor_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Contributor_Order_By>>
	where?: InputMaybe<Campaign_Contributor_Bool_Exp>
}

export type Subscription_RootCampaign_Contributor_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootCampaign_MetadataArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Metadata_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Metadata_Order_By>>
	where?: InputMaybe<Campaign_Metadata_Bool_Exp>
}

export type Subscription_RootCampaign_Metadata_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootIdentityArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Identity_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Identity_Order_By>>
	where?: InputMaybe<Identity_Bool_Exp>
}

export type Subscription_RootIdentity_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootOrganizationArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>
	where?: InputMaybe<Organization_Bool_Exp>
}

export type Subscription_RootOrganization_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>
	where?: InputMaybe<Organization_Bool_Exp>
}

export type Subscription_RootOrganization_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootOrganization_MemberArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Member_Order_By>>
	where?: InputMaybe<Organization_Member_Bool_Exp>
}

export type Subscription_RootOrganization_Member_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootOrganization_MetadataArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Metadata_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Metadata_Order_By>>
	where?: InputMaybe<Organization_Metadata_Bool_Exp>
}

export type Subscription_RootOrganization_Metadata_By_PkArgs = {
	id: Scalars['String']
}

export type ConfigQueryVariables = Exact<{
	env: Environment
}>

export type ConfigQuery = {
	readonly __typename?: 'query_root'
	readonly config: {
		readonly __typename?: 'Config'
		readonly SITE_NAME?: string | null
		readonly SITE_TITLE?: string | null
		readonly SITE_DESCRIPTION?: string | null
		readonly SITE_IMAGE?: string | null
		readonly TW_SITE_NAME?: string | null
		readonly TW_SITE_CREATOR?: string | null
		readonly CONTACT?: string | null
		readonly IPFS_GATEWAY?: string | null
		readonly LOG_LEVEL?: LogLevel | null
	}
}

export type DisplayValuesQueryVariables = Exact<{ [key: string]: never }>

export type DisplayValuesQuery = {
	readonly __typename?: 'query_root'
	readonly displayValues?: {
		readonly __typename?: 'DisplayValues'
		readonly collateralTypes?: ReadonlyArray<{
			readonly __typename?: 'DisplayValueEntryNumber'
			readonly key: string
			readonly value: number
			readonly text: string
		} | null> | null
		readonly proposalTypes?: ReadonlyArray<{
			readonly __typename?: 'DisplayValueEntryNumber'
			readonly key: string
			readonly value: number
			readonly text: string
		} | null> | null
		readonly votingTypes?: ReadonlyArray<{
			readonly __typename?: 'DisplayValueEntryNumber'
			readonly key: string
			readonly value: number
			readonly text: string
		} | null> | null
		readonly daoBodies?: ReadonlyArray<{
			readonly __typename?: 'DisplayValueEntryNumber'
			readonly key: string
			readonly value: number
			readonly text: string
		} | null> | null
		readonly daoMemberGovernance?: ReadonlyArray<{
			readonly __typename?: 'DisplayValueEntryNumber'
			readonly key: string
			readonly value: number
			readonly text: string
		} | null> | null
		readonly daoFeeModel?: ReadonlyArray<{
			readonly __typename?: 'DisplayValueEntryNumber'
			readonly key: string
			readonly value: number
			readonly text: string
		} | null> | null
		readonly projectTypes?: ReadonlyArray<{
			readonly __typename?: 'DisplayValueEntryNumber'
			readonly key: string
			readonly value: number
			readonly text: string
		} | null> | null
		readonly protocolTypes?: ReadonlyArray<{
			readonly __typename?: 'DisplayValueEntryNumber'
			readonly key: string
			readonly value: number
			readonly text: string
		} | null> | null
		readonly projectDurations?: ReadonlyArray<{
			readonly __typename?: 'DisplayValueEntryNumber'
			readonly key: string
			readonly value: number
			readonly text: string
		} | null> | null
		readonly memberships?: ReadonlyArray<{
			readonly __typename?: 'DisplayValueEntryNumber'
			readonly key: string
			readonly value: number
			readonly text: string
		} | null> | null
		readonly countries?: ReadonlyArray<{
			readonly __typename?: 'DisplayValueEntryCountry'
			readonly key: string
			readonly value: string
			readonly text: string
			readonly flag: string
		} | null> | null
	} | null
}

export type FeaturesQueryVariables = Exact<{
	env: Environment
}>

export type FeaturesQuery = {
	readonly __typename?: 'query_root'
	readonly features: {
		readonly __typename?: 'Features'
		readonly CREATE_PROPOSAL: boolean
		readonly CREATE_PROPOSAL_SIMPLE_MAJORITY: boolean
		readonly CREATE_PROPOSAL_RELATIVE_MAJORITY: boolean
		readonly CREATE_GENERAL_PROPOSAL: boolean
		readonly CREATE_WITHDRAW_PROPOSAL: boolean
		readonly CREATE_SPENDING_PROPOSAL: boolean
	}
}

export type IdentityByAddressQueryVariables = Exact<{
	address: Scalars['String']
}>

export type IdentityByAddressQuery = {
	readonly __typename?: 'query_root'
	readonly identity_by_pk?: {
		readonly __typename?: 'identity'
		readonly id: string
		readonly email?: string | null
		readonly display_name?: string | null
		readonly image?: string | null
		readonly legal_name?: string | null
		readonly riot?: string | null
		readonly twitter?: string | null
	} | null
}

export type OrganizationsPaginationCountSubscriptionVariables = Exact<{
	orderBy?: InputMaybe<ReadonlyArray<Organization_Order_By> | Organization_Order_By>
	first?: InputMaybe<Scalars['Int']>
	searchQuery?: InputMaybe<Scalars['String']>
}>

export type OrganizationsPaginationCountSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organization_aggregate: {
		readonly __typename?: 'organization_aggregate'
		readonly aggregate?: { readonly __typename?: 'organization_aggregate_fields'; readonly count: number } | null
	}
}

export type OrganizationsPaginationSubscriptionVariables = Exact<{
	orderBy?: InputMaybe<ReadonlyArray<Organization_Order_By> | Organization_Order_By>
	first?: InputMaybe<Scalars['Int']>
	searchQuery?: InputMaybe<Scalars['String']>
}>

export type OrganizationsPaginationSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'organization'
		readonly id: string
		readonly access: string
		readonly creator: string
		readonly organization_metadata?: {
			readonly __typename?: 'organization_metadata'
			readonly name: string
			readonly description: string
			readonly logo: string
		} | null
		readonly organization_members: ReadonlyArray<{
			readonly __typename?: 'organization_member'
			readonly address: string
		}>
	}>
}

export type OrganizationByIdQueryVariables = Exact<{
	orgId: Scalars['String']
}>

export type OrganizationByIdQuery = {
	readonly __typename?: 'query_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'organization'
		readonly access: string
		readonly controller: string
		readonly created_at_block: number
		readonly creator: string
		readonly fee: any
		readonly fee_model: string
		readonly gov_asset: number
		readonly id: string
		readonly member_limit: any
		readonly pay_asset: number
		readonly treasury: string
		readonly type: string
		readonly organization_metadata?: {
			readonly __typename?: 'organization_metadata'
			readonly description: string
			readonly email: string
			readonly id: string
			readonly logo: string
			readonly name: string
			readonly repo: string
			readonly website: string
		} | null
	}>
}

export type SidebarSubscriptionVariables = Exact<{
	address: Scalars['String']
}>

export type SidebarSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'organization'
		readonly id: string
		readonly metadata?: {
			readonly __typename?: 'organization_metadata'
			readonly logo: string
			readonly name: string
		} | null
	}>
}

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
`

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
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<ConfigQuery, ConfigQueryVariables>(ConfigDocument, options)
}
export function useConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConfigQuery, ConfigQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<ConfigQuery, ConfigQueryVariables>(ConfigDocument, options)
}
export type ConfigQueryHookResult = ReturnType<typeof useConfigQuery>
export type ConfigLazyQueryHookResult = ReturnType<typeof useConfigLazyQuery>
export type ConfigQueryResult = Apollo.QueryResult<ConfigQuery, ConfigQueryVariables>
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
`

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
export function useDisplayValuesQuery(
	baseOptions?: Apollo.QueryHookOptions<DisplayValuesQuery, DisplayValuesQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<DisplayValuesQuery, DisplayValuesQueryVariables>(DisplayValuesDocument, options)
}
export function useDisplayValuesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<DisplayValuesQuery, DisplayValuesQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<DisplayValuesQuery, DisplayValuesQueryVariables>(DisplayValuesDocument, options)
}
export type DisplayValuesQueryHookResult = ReturnType<typeof useDisplayValuesQuery>
export type DisplayValuesLazyQueryHookResult = ReturnType<typeof useDisplayValuesLazyQuery>
export type DisplayValuesQueryResult = Apollo.QueryResult<DisplayValuesQuery, DisplayValuesQueryVariables>
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
`

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
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<FeaturesQuery, FeaturesQueryVariables>(FeaturesDocument, options)
}
export function useFeaturesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeaturesQuery, FeaturesQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<FeaturesQuery, FeaturesQueryVariables>(FeaturesDocument, options)
}
export type FeaturesQueryHookResult = ReturnType<typeof useFeaturesQuery>
export type FeaturesLazyQueryHookResult = ReturnType<typeof useFeaturesLazyQuery>
export type FeaturesQueryResult = Apollo.QueryResult<FeaturesQuery, FeaturesQueryVariables>
export const IdentityByAddressDocument = gql`
	query IdentityByAddress($address: String!) {
		identity_by_pk(id: $address) {
			id
			email
			display_name
			image
			legal_name
			riot
			twitter
		}
	}
`

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
export function useIdentityByAddressQuery(
	baseOptions: Apollo.QueryHookOptions<IdentityByAddressQuery, IdentityByAddressQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<IdentityByAddressQuery, IdentityByAddressQueryVariables>(IdentityByAddressDocument, options)
}
export function useIdentityByAddressLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<IdentityByAddressQuery, IdentityByAddressQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<IdentityByAddressQuery, IdentityByAddressQueryVariables>(
		IdentityByAddressDocument,
		options,
	)
}
export type IdentityByAddressQueryHookResult = ReturnType<typeof useIdentityByAddressQuery>
export type IdentityByAddressLazyQueryHookResult = ReturnType<typeof useIdentityByAddressLazyQuery>
export type IdentityByAddressQueryResult = Apollo.QueryResult<IdentityByAddressQuery, IdentityByAddressQueryVariables>
export const OrganizationsPaginationCountDocument = gql`
	subscription OrganizationsPaginationCount(
		$orderBy: [organization_order_by!]
		$first: Int
		$searchQuery: String = "%"
	) {
		organization_aggregate(
			order_by: $orderBy
			offset: $first
			where: {
				organization_metadata: {
					name: { _ilike: $searchQuery }
					_or: { description: { _ilike: $searchQuery } }
				}
			}
		) {
			aggregate {
				count
			}
		}
	}
`

/**
 * __useOrganizationsPaginationCountSubscription__
 *
 * To run a query within a React component, call `useOrganizationsPaginationCountSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationsPaginationCountSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationsPaginationCountSubscription({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      searchQuery: // value for 'searchQuery'
 *   },
 * });
 */
export function useOrganizationsPaginationCountSubscription(
	baseOptions?: Apollo.SubscriptionHookOptions<
		OrganizationsPaginationCountSubscription,
		OrganizationsPaginationCountSubscriptionVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<
		OrganizationsPaginationCountSubscription,
		OrganizationsPaginationCountSubscriptionVariables
	>(OrganizationsPaginationCountDocument, options)
}
export type OrganizationsPaginationCountSubscriptionHookResult = ReturnType<
	typeof useOrganizationsPaginationCountSubscription
>
export type OrganizationsPaginationCountSubscriptionResult =
	Apollo.SubscriptionResult<OrganizationsPaginationCountSubscription>
export const OrganizationsPaginationDocument = gql`
	subscription OrganizationsPagination($orderBy: [organization_order_by!], $first: Int, $searchQuery: String = "%") {
		organization(
			limit: $first
			order_by: $orderBy
			where: {
				organization_metadata: {
					name: { _ilike: $searchQuery }
					_or: { description: { _ilike: $searchQuery } }
				}
			}
		) {
			id
			organization_metadata {
				name
				description
				logo
			}
			access
			creator
			organization_members {
				address
			}
		}
	}
`

/**
 * __useOrganizationsPaginationSubscription__
 *
 * To run a query within a React component, call `useOrganizationsPaginationSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationsPaginationSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationsPaginationSubscription({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      searchQuery: // value for 'searchQuery'
 *   },
 * });
 */
export function useOrganizationsPaginationSubscription(
	baseOptions?: Apollo.SubscriptionHookOptions<
		OrganizationsPaginationSubscription,
		OrganizationsPaginationSubscriptionVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<OrganizationsPaginationSubscription, OrganizationsPaginationSubscriptionVariables>(
		OrganizationsPaginationDocument,
		options,
	)
}
export type OrganizationsPaginationSubscriptionHookResult = ReturnType<typeof useOrganizationsPaginationSubscription>
export type OrganizationsPaginationSubscriptionResult = Apollo.SubscriptionResult<OrganizationsPaginationSubscription>
export const OrganizationByIdDocument = gql`
	query OrganizationById($orgId: String!) {
		organization(where: { id: { _eq: $orgId } }) {
			access
			controller
			created_at_block
			creator
			fee
			fee_model
			gov_asset
			id
			member_limit
			pay_asset
			treasury
			type
			organization_metadata {
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
`

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
export function useOrganizationByIdQuery(
	baseOptions: Apollo.QueryHookOptions<OrganizationByIdQuery, OrganizationByIdQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<OrganizationByIdQuery, OrganizationByIdQueryVariables>(OrganizationByIdDocument, options)
}
export function useOrganizationByIdLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<OrganizationByIdQuery, OrganizationByIdQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<OrganizationByIdQuery, OrganizationByIdQueryVariables>(OrganizationByIdDocument, options)
}
export type OrganizationByIdQueryHookResult = ReturnType<typeof useOrganizationByIdQuery>
export type OrganizationByIdLazyQueryHookResult = ReturnType<typeof useOrganizationByIdLazyQuery>
export type OrganizationByIdQueryResult = Apollo.QueryResult<OrganizationByIdQuery, OrganizationByIdQueryVariables>
export const SidebarDocument = gql`
	subscription Sidebar($address: String!) {
		organization(where: { organization_members: { address: { _eq: $address } } }) {
			id
			metadata: organization_metadata {
				logo
				name
			}
		}
	}
`

/**
 * __useSidebarSubscription__
 *
 * To run a query within a React component, call `useSidebarSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSidebarSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSidebarSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useSidebarSubscription(
	baseOptions: Apollo.SubscriptionHookOptions<SidebarSubscription, SidebarSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<SidebarSubscription, SidebarSubscriptionVariables>(SidebarDocument, options)
}
export type SidebarSubscriptionHookResult = ReturnType<typeof useSidebarSubscription>
export type SidebarSubscriptionResult = Apollo.SubscriptionResult<SidebarSubscription>
