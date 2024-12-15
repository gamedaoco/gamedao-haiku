import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
  bigint: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

export type ApiProvider = {
  readonly __typename?: 'ApiProvider';
  readonly chainProperties: ChainProperties;
  readonly name: Scalars['String']['output'];
  readonly types: Scalars['String']['output'];
  readonly wsProviderUrl: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['Boolean']['input']>;
  readonly _gt?: InputMaybe<Scalars['Boolean']['input']>;
  readonly _gte?: InputMaybe<Scalars['Boolean']['input']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['Boolean']['input']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly _lt?: InputMaybe<Scalars['Boolean']['input']>;
  readonly _lte?: InputMaybe<Scalars['Boolean']['input']>;
  readonly _neq?: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Boolean']['input']>>;
};

export type ChainProperties = {
  readonly __typename?: 'ChainProperties';
  readonly blockTargetTime: Scalars['Int']['output'];
  readonly governanceCurrency: Scalars['Int']['output'];
  readonly networkCurrency: Scalars['Int']['output'];
  readonly paymentCurrencies: Scalars['Int']['output'];
  readonly ss58Format: Scalars['Int']['output'];
  readonly tokenDecimals: ReadonlyArray<Maybe<Scalars['String']['output']>>;
  readonly tokenSymbol: ReadonlyArray<Maybe<Scalars['String']['output']>>;
};

export type Config = {
  readonly __typename?: 'Config';
  readonly CAMPAIGN_MIN_EXPIRY_IN_SECONDS?: Maybe<Scalars['String']['output']>;
  readonly CONTACT?: Maybe<Scalars['String']['output']>;
  readonly IPFS_GATEWAY?: Maybe<Scalars['String']['output']>;
  readonly LOG_LEVEL?: Maybe<LogLevel>;
  readonly PROPOSAL_MIN_EXPIRY_IN_SECONDS?: Maybe<Scalars['String']['output']>;
  readonly SITE_DESCRIPTION?: Maybe<Scalars['String']['output']>;
  readonly SITE_IMAGE?: Maybe<Scalars['String']['output']>;
  readonly SITE_NAME?: Maybe<Scalars['String']['output']>;
  readonly SITE_TITLE?: Maybe<Scalars['String']['output']>;
  readonly TW_SITE_CREATOR?: Maybe<Scalars['String']['output']>;
  readonly TW_SITE_NAME?: Maybe<Scalars['String']['output']>;
};

export type DAppContent = {
  readonly __typename?: 'DAppContent';
  readonly address?: Maybe<Scalars['String']['output']>;
  readonly creationTime?: Maybe<Scalars['Int']['output']>;
  readonly iconUrl?: Maybe<Scalars['String']['output']>;
  readonly imagesUrl?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly mainCategory?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly shortDescription?: Maybe<Scalars['String']['output']>;
};

export type DisplayValueEntry = {
  readonly key: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
};

export type DisplayValueEntryCountry = DisplayValueEntry & {
  readonly __typename?: 'DisplayValueEntryCountry';
  readonly key: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type DisplayValueEntryNumber = DisplayValueEntry & {
  readonly __typename?: 'DisplayValueEntryNumber';
  readonly key: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
  readonly value: Scalars['Int']['output'];
};

export type DisplayValueEntryString = DisplayValueEntry & {
  readonly __typename?: 'DisplayValueEntryString';
  readonly key: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
  readonly value: Scalars['String']['output'];
};

export type DisplayValues = {
  readonly __typename?: 'DisplayValues';
  readonly campaignFilters?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryString>>>;
  readonly campaignFundingCategories?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly campaignSortOptions?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryString>>>;
  readonly collateralTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly countries?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryCountry>>>;
  readonly daoBodies?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly daoFeeModel?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly daoMemberGovernance?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly memberships?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly organizationSortOptions?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryString>>>;
  readonly projectDurations?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly projectTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly proposalTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly protocolTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
  readonly votingTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>;
};

export enum Environment {
  Development = 'DEVELOPMENT',
  Production = 'PRODUCTION',
  Staging = 'STAGING'
}

export type Features = OrganizationFeatures & ProposalFeatures & {
  readonly __typename?: 'Features';
  readonly CREATE_GENERAL_PROPOSAL: Scalars['Boolean']['output'];
  readonly CREATE_PROPOSAL: Scalars['Boolean']['output'];
  readonly CREATE_PROPOSAL_RELATIVE_MAJORITY: Scalars['Boolean']['output'];
  readonly CREATE_PROPOSAL_SIMPLE_MAJORITY: Scalars['Boolean']['output'];
  readonly CREATE_SPENDING_PROPOSAL: Scalars['Boolean']['output'];
  readonly CREATE_WITHDRAW_PROPOSAL: Scalars['Boolean']['output'];
  readonly ORGANIZATION_PAGE_SHOW_FILTERS: Scalars['Boolean']['output'];
  readonly ORGANIZATION_PAGE_SHOW_SEARCH: Scalars['Boolean']['output'];
  readonly ORGANIZATION_PAGE_SHOW_SORT: Scalars['Boolean']['output'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['Int']['input']>;
  readonly _gt?: InputMaybe<Scalars['Int']['input']>;
  readonly _gte?: InputMaybe<Scalars['Int']['input']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly _lt?: InputMaybe<Scalars['Int']['input']>;
  readonly _lte?: InputMaybe<Scalars['Int']['input']>;
  readonly _neq?: InputMaybe<Scalars['Int']['input']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
};

export type Link = {
  readonly __typename?: 'Link';
  readonly category?: Maybe<Scalars['String']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly imageUrl?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly users?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
};

export enum LogLevel {
  Debug = 'DEBUG',
  Error = 'ERROR',
  Info = 'INFO',
  Silent = 'SILENT',
  Trace = 'TRACE',
  Warn = 'WARN'
}

export type OrganizationFeatures = {
  readonly ORGANIZATION_PAGE_SHOW_FILTERS: Scalars['Boolean']['output'];
  readonly ORGANIZATION_PAGE_SHOW_SEARCH: Scalars['Boolean']['output'];
  readonly ORGANIZATION_PAGE_SHOW_SORT: Scalars['Boolean']['output'];
};

export type ProposalFeatures = {
  readonly CREATE_GENERAL_PROPOSAL: Scalars['Boolean']['output'];
  readonly CREATE_PROPOSAL: Scalars['Boolean']['output'];
  readonly CREATE_PROPOSAL_RELATIVE_MAJORITY: Scalars['Boolean']['output'];
  readonly CREATE_PROPOSAL_SIMPLE_MAJORITY: Scalars['Boolean']['output'];
  readonly CREATE_SPENDING_PROPOSAL: Scalars['Boolean']['output'];
  readonly CREATE_WITHDRAW_PROPOSAL: Scalars['Boolean']['output'];
};

export type RmrkNft = {
  readonly __typename?: 'RMRKNft';
  readonly id: Scalars['String']['output'];
  readonly metadata: Scalars['String']['output'];
  readonly sn: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  readonly _contained_in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  /** does the array contain the given value */
  readonly _contains?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly _eq?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly _gt?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly _gte?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly _in?: InputMaybe<ReadonlyArray<ReadonlyArray<Scalars['String']['input']>>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly _lt?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly _lte?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly _neq?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly _nin?: InputMaybe<ReadonlyArray<ReadonlyArray<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['String']['input']>;
  readonly _gt?: InputMaybe<Scalars['String']['input']>;
  readonly _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  readonly _ilike?: InputMaybe<Scalars['String']['input']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  readonly _iregex?: InputMaybe<Scalars['String']['input']>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  readonly _like?: InputMaybe<Scalars['String']['input']>;
  readonly _lt?: InputMaybe<Scalars['String']['input']>;
  readonly _lte?: InputMaybe<Scalars['String']['input']>;
  readonly _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  readonly _nilike?: InputMaybe<Scalars['String']['input']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  readonly _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  readonly _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  readonly _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  readonly _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  readonly _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  readonly _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "account_balance" */
export type Account_Balance = {
  readonly __typename?: 'account_balance';
  readonly balance_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  readonly historical_balance?: Maybe<Historical_Balance>;
  readonly id: Scalars['String']['output'];
  /** An object relationship */
  readonly identity?: Maybe<Identity>;
  readonly identity_id?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "account_balance" */
export type Account_Balance_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Account_Balance_Max_Order_By>;
  readonly min?: InputMaybe<Account_Balance_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "account_balance". All fields are combined with a logical 'AND'. */
export type Account_Balance_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Account_Balance_Bool_Exp>>;
  readonly _not?: InputMaybe<Account_Balance_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Account_Balance_Bool_Exp>>;
  readonly balance_id?: InputMaybe<String_Comparison_Exp>;
  readonly historical_balance?: InputMaybe<Historical_Balance_Bool_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly identity?: InputMaybe<Identity_Bool_Exp>;
  readonly identity_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "account_balance" */
export type Account_Balance_Max_Order_By = {
  readonly balance_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "account_balance" */
export type Account_Balance_Min_Order_By = {
  readonly balance_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "account_balance". */
export type Account_Balance_Order_By = {
  readonly balance_id?: InputMaybe<Order_By>;
  readonly historical_balance?: InputMaybe<Historical_Balance_Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity?: InputMaybe<Identity_Order_By>;
  readonly identity_id?: InputMaybe<Order_By>;
};

/** select columns of table "account_balance" */
export enum Account_Balance_Select_Column {
  /** column name */
  BalanceId = 'balance_id',
  /** column name */
  Id = 'id',
  /** column name */
  IdentityId = 'identity_id'
}

/** Streaming cursor of the table "account_balance" */
export type Account_Balance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Account_Balance_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Balance_Stream_Cursor_Value_Input = {
  readonly balance_id?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly identity_id?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "squid_processor.status" */
export type Astar_Indexer_Status = {
  readonly __typename?: 'astar_indexer_status';
  readonly hash?: Maybe<Scalars['String']['output']>;
  readonly height: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly nonce?: Maybe<Scalars['Int']['output']>;
};

/** Boolean expression to filter rows from the table "squid_processor.status". All fields are combined with a logical 'AND'. */
export type Astar_Indexer_Status_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Astar_Indexer_Status_Bool_Exp>>;
  readonly _not?: InputMaybe<Astar_Indexer_Status_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Astar_Indexer_Status_Bool_Exp>>;
  readonly hash?: InputMaybe<String_Comparison_Exp>;
  readonly height?: InputMaybe<Int_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly nonce?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "squid_processor.status". */
export type Astar_Indexer_Status_Order_By = {
  readonly hash?: InputMaybe<Order_By>;
  readonly height?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly nonce?: InputMaybe<Order_By>;
};

/** select columns of table "squid_processor.status" */
export enum Astar_Indexer_Status_Select_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Nonce = 'nonce'
}

/** Streaming cursor of the table "astar_indexer_status" */
export type Astar_Indexer_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Astar_Indexer_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Astar_Indexer_Status_Stream_Cursor_Value_Input = {
  readonly hash?: InputMaybe<Scalars['String']['input']>;
  readonly height?: InputMaybe<Scalars['Int']['input']>;
  readonly id?: InputMaybe<Scalars['Int']['input']>;
  readonly nonce?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "Balance" */
export type Balance = {
  readonly __typename?: 'balance';
  readonly address: Scalars['String']['output'];
  readonly balanceId: Scalars['Int']['output'];
  readonly free: Scalars['String']['output'];
  readonly frozen: Scalars['String']['output'];
  readonly id: Scalars['bigint']['output'];
  readonly reserved: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "Balance". All fields are combined with a logical 'AND'. */
export type Balance_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Balance_Bool_Exp>>;
  readonly _not?: InputMaybe<Balance_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Balance_Bool_Exp>>;
  readonly address?: InputMaybe<String_Comparison_Exp>;
  readonly balanceId?: InputMaybe<Int_Comparison_Exp>;
  readonly free?: InputMaybe<String_Comparison_Exp>;
  readonly frozen?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<Bigint_Comparison_Exp>;
  readonly reserved?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "Balance". */
export type Balance_Order_By = {
  readonly address?: InputMaybe<Order_By>;
  readonly balanceId?: InputMaybe<Order_By>;
  readonly free?: InputMaybe<Order_By>;
  readonly frozen?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly reserved?: InputMaybe<Order_By>;
};

/** select columns of table "Balance" */
export enum Balance_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BalanceId = 'balanceId',
  /** column name */
  Free = 'free',
  /** column name */
  Frozen = 'frozen',
  /** column name */
  Id = 'id',
  /** column name */
  Reserved = 'reserved'
}

/** Streaming cursor of the table "balance" */
export type Balance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Balance_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Balance_Stream_Cursor_Value_Input = {
  readonly address?: InputMaybe<Scalars['String']['input']>;
  readonly balanceId?: InputMaybe<Scalars['Int']['input']>;
  readonly free?: InputMaybe<Scalars['String']['input']>;
  readonly frozen?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['bigint']['input']>;
  readonly reserved?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "battlepass" */
export type Battlepass = {
  readonly __typename?: 'battlepass';
  readonly active_from_block?: Maybe<Scalars['Int']['output']>;
  readonly active_to_block?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  readonly battlepass_nfts: ReadonlyArray<Battlepass_Nft>;
  readonly cid: Scalars['String']['output'];
  readonly created_at_block: Scalars['Int']['output'];
  readonly creator_id?: Maybe<Scalars['String']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['String']['output'];
  /** An object relationship */
  readonly identity?: Maybe<Identity>;
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly org_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  readonly organization?: Maybe<Organization>;
  readonly price: Scalars['numeric']['output'];
  readonly season: Scalars['String']['output'];
  readonly state: Scalars['String']['output'];
  readonly updated_at_block: Scalars['Int']['output'];
};


/** columns and relationships of "battlepass" */
export type BattlepassBattlepass_NftsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Battlepass_Nft_Order_By>>;
  where?: InputMaybe<Battlepass_Nft_Bool_Exp>;
};

/** order by aggregate values of table "battlepass" */
export type Battlepass_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Battlepass_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Battlepass_Max_Order_By>;
  readonly min?: InputMaybe<Battlepass_Min_Order_By>;
  readonly stddev?: InputMaybe<Battlepass_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Battlepass_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Battlepass_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Battlepass_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Battlepass_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Battlepass_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Battlepass_Variance_Order_By>;
};

/** order by avg() on columns of table "battlepass" */
export type Battlepass_Avg_Order_By = {
  readonly active_from_block?: InputMaybe<Order_By>;
  readonly active_to_block?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly price?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "battlepass". All fields are combined with a logical 'AND'. */
export type Battlepass_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Battlepass_Bool_Exp>>;
  readonly _not?: InputMaybe<Battlepass_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Battlepass_Bool_Exp>>;
  readonly active_from_block?: InputMaybe<Int_Comparison_Exp>;
  readonly active_to_block?: InputMaybe<Int_Comparison_Exp>;
  readonly battlepass_nfts?: InputMaybe<Battlepass_Nft_Bool_Exp>;
  readonly cid?: InputMaybe<String_Comparison_Exp>;
  readonly created_at_block?: InputMaybe<Int_Comparison_Exp>;
  readonly creator_id?: InputMaybe<String_Comparison_Exp>;
  readonly description?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly identity?: InputMaybe<Identity_Bool_Exp>;
  readonly image?: InputMaybe<String_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly org_id?: InputMaybe<String_Comparison_Exp>;
  readonly organization?: InputMaybe<Organization_Bool_Exp>;
  readonly price?: InputMaybe<Numeric_Comparison_Exp>;
  readonly season?: InputMaybe<String_Comparison_Exp>;
  readonly state?: InputMaybe<String_Comparison_Exp>;
  readonly updated_at_block?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "battlepass" */
export type Battlepass_Max_Order_By = {
  readonly active_from_block?: InputMaybe<Order_By>;
  readonly active_to_block?: InputMaybe<Order_By>;
  readonly cid?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly creator_id?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly image?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly org_id?: InputMaybe<Order_By>;
  readonly price?: InputMaybe<Order_By>;
  readonly season?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "battlepass" */
export type Battlepass_Min_Order_By = {
  readonly active_from_block?: InputMaybe<Order_By>;
  readonly active_to_block?: InputMaybe<Order_By>;
  readonly cid?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly creator_id?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly image?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly org_id?: InputMaybe<Order_By>;
  readonly price?: InputMaybe<Order_By>;
  readonly season?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** columns and relationships of "battlepass_nft" */
export type Battlepass_Nft = {
  readonly __typename?: 'battlepass_nft';
  /** An object relationship */
  readonly battlepass?: Maybe<Battlepass>;
  readonly battlepass_id?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['String']['output'];
  /** An object relationship */
  readonly identity?: Maybe<Identity>;
  /** An object relationship */
  readonly nft?: Maybe<Nft>;
  readonly nft_id?: Maybe<Scalars['String']['output']>;
  readonly owner_id?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "battlepass_nft" */
export type Battlepass_Nft_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Battlepass_Nft_Max_Order_By>;
  readonly min?: InputMaybe<Battlepass_Nft_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "battlepass_nft". All fields are combined with a logical 'AND'. */
export type Battlepass_Nft_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Battlepass_Nft_Bool_Exp>>;
  readonly _not?: InputMaybe<Battlepass_Nft_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Battlepass_Nft_Bool_Exp>>;
  readonly battlepass?: InputMaybe<Battlepass_Bool_Exp>;
  readonly battlepass_id?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly identity?: InputMaybe<Identity_Bool_Exp>;
  readonly nft?: InputMaybe<Nft_Bool_Exp>;
  readonly nft_id?: InputMaybe<String_Comparison_Exp>;
  readonly owner_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "battlepass_nft" */
export type Battlepass_Nft_Max_Order_By = {
  readonly battlepass_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
  readonly owner_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "battlepass_nft" */
export type Battlepass_Nft_Min_Order_By = {
  readonly battlepass_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
  readonly owner_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "battlepass_nft". */
export type Battlepass_Nft_Order_By = {
  readonly battlepass?: InputMaybe<Battlepass_Order_By>;
  readonly battlepass_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity?: InputMaybe<Identity_Order_By>;
  readonly nft?: InputMaybe<Nft_Order_By>;
  readonly nft_id?: InputMaybe<Order_By>;
  readonly owner_id?: InputMaybe<Order_By>;
};

/** select columns of table "battlepass_nft" */
export enum Battlepass_Nft_Select_Column {
  /** column name */
  BattlepassId = 'battlepass_id',
  /** column name */
  Id = 'id',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  OwnerId = 'owner_id'
}

/** Streaming cursor of the table "battlepass_nft" */
export type Battlepass_Nft_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Battlepass_Nft_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Battlepass_Nft_Stream_Cursor_Value_Input = {
  readonly battlepass_id?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly nft_id?: InputMaybe<Scalars['String']['input']>;
  readonly owner_id?: InputMaybe<Scalars['String']['input']>;
};

/** Ordering options when selecting data from "battlepass". */
export type Battlepass_Order_By = {
  readonly active_from_block?: InputMaybe<Order_By>;
  readonly active_to_block?: InputMaybe<Order_By>;
  readonly battlepass_nfts_aggregate?: InputMaybe<Battlepass_Nft_Aggregate_Order_By>;
  readonly cid?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly creator_id?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity?: InputMaybe<Identity_Order_By>;
  readonly image?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly org_id?: InputMaybe<Order_By>;
  readonly organization?: InputMaybe<Organization_Order_By>;
  readonly price?: InputMaybe<Order_By>;
  readonly season?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** select columns of table "battlepass" */
export enum Battlepass_Select_Column {
  /** column name */
  ActiveFromBlock = 'active_from_block',
  /** column name */
  ActiveToBlock = 'active_to_block',
  /** column name */
  Cid = 'cid',
  /** column name */
  CreatedAtBlock = 'created_at_block',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  Price = 'price',
  /** column name */
  Season = 'season',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAtBlock = 'updated_at_block'
}

/** order by stddev() on columns of table "battlepass" */
export type Battlepass_Stddev_Order_By = {
  readonly active_from_block?: InputMaybe<Order_By>;
  readonly active_to_block?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly price?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "battlepass" */
export type Battlepass_Stddev_Pop_Order_By = {
  readonly active_from_block?: InputMaybe<Order_By>;
  readonly active_to_block?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly price?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "battlepass" */
export type Battlepass_Stddev_Samp_Order_By = {
  readonly active_from_block?: InputMaybe<Order_By>;
  readonly active_to_block?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly price?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "battlepass" */
export type Battlepass_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Battlepass_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Battlepass_Stream_Cursor_Value_Input = {
  readonly active_from_block?: InputMaybe<Scalars['Int']['input']>;
  readonly active_to_block?: InputMaybe<Scalars['Int']['input']>;
  readonly cid?: InputMaybe<Scalars['String']['input']>;
  readonly created_at_block?: InputMaybe<Scalars['Int']['input']>;
  readonly creator_id?: InputMaybe<Scalars['String']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly image?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly org_id?: InputMaybe<Scalars['String']['input']>;
  readonly price?: InputMaybe<Scalars['numeric']['input']>;
  readonly season?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<Scalars['String']['input']>;
  readonly updated_at_block?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "battlepass" */
export type Battlepass_Sum_Order_By = {
  readonly active_from_block?: InputMaybe<Order_By>;
  readonly active_to_block?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly price?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "battlepass" */
export type Battlepass_Var_Pop_Order_By = {
  readonly active_from_block?: InputMaybe<Order_By>;
  readonly active_to_block?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly price?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "battlepass" */
export type Battlepass_Var_Samp_Order_By = {
  readonly active_from_block?: InputMaybe<Order_By>;
  readonly active_to_block?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly price?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "battlepass" */
export type Battlepass_Variance_Order_By = {
  readonly active_from_block?: InputMaybe<Order_By>;
  readonly active_to_block?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly price?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['bigint']['input']>;
  readonly _gt?: InputMaybe<Scalars['bigint']['input']>;
  readonly _gte?: InputMaybe<Scalars['bigint']['input']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['bigint']['input']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly _lt?: InputMaybe<Scalars['bigint']['input']>;
  readonly _lte?: InputMaybe<Scalars['bigint']['input']>;
  readonly _neq?: InputMaybe<Scalars['bigint']['input']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['bigint']['input']>>;
};

/** columns and relationships of "burn" */
export type Burn = {
  readonly __typename?: 'burn';
  readonly amount: Scalars['numeric']['output'];
  readonly block_number: Scalars['Int']['output'];
  readonly id: Scalars['String']['output'];
  readonly timestamp: Scalars['numeric']['output'];
  readonly user: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "burn". All fields are combined with a logical 'AND'. */
export type Burn_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Burn_Bool_Exp>>;
  readonly _not?: InputMaybe<Burn_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Burn_Bool_Exp>>;
  readonly amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly block_number?: InputMaybe<Int_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly timestamp?: InputMaybe<Numeric_Comparison_Exp>;
  readonly user?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "burn". */
export type Burn_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly block_number?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly timestamp?: InputMaybe<Order_By>;
  readonly user?: InputMaybe<Order_By>;
};

/** select columns of table "burn" */
export enum Burn_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  User = 'user'
}

/** Streaming cursor of the table "burn" */
export type Burn_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Burn_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Burn_Stream_Cursor_Value_Input = {
  readonly amount?: InputMaybe<Scalars['numeric']['input']>;
  readonly block_number?: InputMaybe<Scalars['Int']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly timestamp?: InputMaybe<Scalars['numeric']['input']>;
  readonly user?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "campaign" */
export type Campaign = {
  readonly __typename?: 'campaign';
  readonly admin: Scalars['String']['output'];
  readonly admin_identity_id?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  readonly campaign_contributors: ReadonlyArray<Campaign_Contributor>;
  readonly cid: Scalars['String']['output'];
  readonly created_at_block: Scalars['Int']['output'];
  readonly creator: Scalars['String']['output'];
  readonly creator_identity_id?: Maybe<Scalars['String']['output']>;
  readonly deposit: Scalars['numeric']['output'];
  readonly description: Scalars['String']['output'];
  readonly email: Scalars['String']['output'];
  readonly expiry: Scalars['Int']['output'];
  readonly governance: Scalars['String']['output'];
  readonly header: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  /** An object relationship */
  readonly identity?: Maybe<Identity>;
  /** An object relationship */
  readonly identityByCreatorIdentityId?: Maybe<Identity>;
  readonly logo: Scalars['String']['output'];
  readonly markdown: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  /** An object relationship */
  readonly organization?: Maybe<Organization>;
  readonly organization_id?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  readonly proposals: ReadonlyArray<Proposal>;
  /** An aggregate relationship */
  readonly proposals_aggregate: Proposal_Aggregate;
  readonly protocol: Scalars['String']['output'];
  readonly start: Scalars['Int']['output'];
  readonly state: Scalars['String']['output'];
  readonly target: Scalars['numeric']['output'];
  readonly title: Scalars['String']['output'];
  readonly token_name?: Maybe<Scalars['String']['output']>;
  readonly token_symbol?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "campaign" */
export type CampaignCampaign_ContributorsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Contributor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Contributor_Order_By>>;
  where?: InputMaybe<Campaign_Contributor_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignProposalsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignProposals_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};

/** aggregated selection of "campaign" */
export type Campaign_Aggregate = {
  readonly __typename?: 'campaign_aggregate';
  readonly aggregate?: Maybe<Campaign_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Campaign>;
};

export type Campaign_Aggregate_Bool_Exp = {
  readonly count?: InputMaybe<Campaign_Aggregate_Bool_Exp_Count>;
};

export type Campaign_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']['input']>;
  readonly filter?: InputMaybe<Campaign_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "campaign" */
export type Campaign_Aggregate_Fields = {
  readonly __typename?: 'campaign_aggregate_fields';
  readonly avg?: Maybe<Campaign_Avg_Fields>;
  readonly count: Scalars['Int']['output'];
  readonly max?: Maybe<Campaign_Max_Fields>;
  readonly min?: Maybe<Campaign_Min_Fields>;
  readonly stddev?: Maybe<Campaign_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Campaign_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Campaign_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Campaign_Sum_Fields>;
  readonly var_pop?: Maybe<Campaign_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Campaign_Var_Samp_Fields>;
  readonly variance?: Maybe<Campaign_Variance_Fields>;
};


/** aggregate fields of "campaign" */
export type Campaign_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "campaign" */
export type Campaign_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Campaign_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Campaign_Max_Order_By>;
  readonly min?: InputMaybe<Campaign_Min_Order_By>;
  readonly stddev?: InputMaybe<Campaign_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Campaign_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Campaign_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Campaign_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Campaign_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Campaign_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Campaign_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Campaign_Avg_Fields = {
  readonly __typename?: 'campaign_avg_fields';
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly expiry?: Maybe<Scalars['Float']['output']>;
  readonly start?: Maybe<Scalars['Float']['output']>;
  readonly target?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "campaign" */
export type Campaign_Avg_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
  readonly target?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "campaign". All fields are combined with a logical 'AND'. */
export type Campaign_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Campaign_Bool_Exp>>;
  readonly _not?: InputMaybe<Campaign_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Campaign_Bool_Exp>>;
  readonly admin?: InputMaybe<String_Comparison_Exp>;
  readonly admin_identity_id?: InputMaybe<String_Comparison_Exp>;
  readonly campaign_contributors?: InputMaybe<Campaign_Contributor_Bool_Exp>;
  readonly cid?: InputMaybe<String_Comparison_Exp>;
  readonly created_at_block?: InputMaybe<Int_Comparison_Exp>;
  readonly creator?: InputMaybe<String_Comparison_Exp>;
  readonly creator_identity_id?: InputMaybe<String_Comparison_Exp>;
  readonly deposit?: InputMaybe<Numeric_Comparison_Exp>;
  readonly description?: InputMaybe<String_Comparison_Exp>;
  readonly email?: InputMaybe<String_Comparison_Exp>;
  readonly expiry?: InputMaybe<Int_Comparison_Exp>;
  readonly governance?: InputMaybe<String_Comparison_Exp>;
  readonly header?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly identity?: InputMaybe<Identity_Bool_Exp>;
  readonly identityByCreatorIdentityId?: InputMaybe<Identity_Bool_Exp>;
  readonly logo?: InputMaybe<String_Comparison_Exp>;
  readonly markdown?: InputMaybe<String_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly organization?: InputMaybe<Organization_Bool_Exp>;
  readonly organization_id?: InputMaybe<String_Comparison_Exp>;
  readonly proposals?: InputMaybe<Proposal_Bool_Exp>;
  readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>;
  readonly protocol?: InputMaybe<String_Comparison_Exp>;
  readonly start?: InputMaybe<Int_Comparison_Exp>;
  readonly state?: InputMaybe<String_Comparison_Exp>;
  readonly target?: InputMaybe<Numeric_Comparison_Exp>;
  readonly title?: InputMaybe<String_Comparison_Exp>;
  readonly token_name?: InputMaybe<String_Comparison_Exp>;
  readonly token_symbol?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "campaign_contributor" */
export type Campaign_Contributor = {
  readonly __typename?: 'campaign_contributor';
  readonly address: Scalars['String']['output'];
  /** An object relationship */
  readonly campaign?: Maybe<Campaign>;
  readonly campaign_id?: Maybe<Scalars['String']['output']>;
  readonly contributed: Scalars['numeric']['output'];
  readonly id: Scalars['String']['output'];
  /** An object relationship */
  readonly identity?: Maybe<Identity>;
  readonly identity_id?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "campaign_contributor" */
export type Campaign_Contributor_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Campaign_Contributor_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Campaign_Contributor_Max_Order_By>;
  readonly min?: InputMaybe<Campaign_Contributor_Min_Order_By>;
  readonly stddev?: InputMaybe<Campaign_Contributor_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Campaign_Contributor_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Campaign_Contributor_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Campaign_Contributor_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Campaign_Contributor_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Campaign_Contributor_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Campaign_Contributor_Variance_Order_By>;
};

/** order by avg() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Avg_Order_By = {
  readonly contributed?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "campaign_contributor". All fields are combined with a logical 'AND'. */
export type Campaign_Contributor_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Campaign_Contributor_Bool_Exp>>;
  readonly _not?: InputMaybe<Campaign_Contributor_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Campaign_Contributor_Bool_Exp>>;
  readonly address?: InputMaybe<String_Comparison_Exp>;
  readonly campaign?: InputMaybe<Campaign_Bool_Exp>;
  readonly campaign_id?: InputMaybe<String_Comparison_Exp>;
  readonly contributed?: InputMaybe<Numeric_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly identity?: InputMaybe<Identity_Bool_Exp>;
  readonly identity_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Max_Order_By = {
  readonly address?: InputMaybe<Order_By>;
  readonly campaign_id?: InputMaybe<Order_By>;
  readonly contributed?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Min_Order_By = {
  readonly address?: InputMaybe<Order_By>;
  readonly campaign_id?: InputMaybe<Order_By>;
  readonly contributed?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "campaign_contributor". */
export type Campaign_Contributor_Order_By = {
  readonly address?: InputMaybe<Order_By>;
  readonly campaign?: InputMaybe<Campaign_Order_By>;
  readonly campaign_id?: InputMaybe<Order_By>;
  readonly contributed?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity?: InputMaybe<Identity_Order_By>;
  readonly identity_id?: InputMaybe<Order_By>;
};

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
  IdentityId = 'identity_id'
}

/** order by stddev() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Stddev_Order_By = {
  readonly contributed?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Stddev_Pop_Order_By = {
  readonly contributed?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Stddev_Samp_Order_By = {
  readonly contributed?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "campaign_contributor" */
export type Campaign_Contributor_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Campaign_Contributor_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Campaign_Contributor_Stream_Cursor_Value_Input = {
  readonly address?: InputMaybe<Scalars['String']['input']>;
  readonly campaign_id?: InputMaybe<Scalars['String']['input']>;
  readonly contributed?: InputMaybe<Scalars['numeric']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly identity_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Sum_Order_By = {
  readonly contributed?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Var_Pop_Order_By = {
  readonly contributed?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Var_Samp_Order_By = {
  readonly contributed?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Variance_Order_By = {
  readonly contributed?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Campaign_Max_Fields = {
  readonly __typename?: 'campaign_max_fields';
  readonly admin?: Maybe<Scalars['String']['output']>;
  readonly admin_identity_id?: Maybe<Scalars['String']['output']>;
  readonly cid?: Maybe<Scalars['String']['output']>;
  readonly created_at_block?: Maybe<Scalars['Int']['output']>;
  readonly creator?: Maybe<Scalars['String']['output']>;
  readonly creator_identity_id?: Maybe<Scalars['String']['output']>;
  readonly deposit?: Maybe<Scalars['numeric']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly expiry?: Maybe<Scalars['Int']['output']>;
  readonly governance?: Maybe<Scalars['String']['output']>;
  readonly header?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly markdown?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly organization_id?: Maybe<Scalars['String']['output']>;
  readonly protocol?: Maybe<Scalars['String']['output']>;
  readonly start?: Maybe<Scalars['Int']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly target?: Maybe<Scalars['numeric']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
  readonly token_name?: Maybe<Scalars['String']['output']>;
  readonly token_symbol?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "campaign" */
export type Campaign_Max_Order_By = {
  readonly admin?: InputMaybe<Order_By>;
  readonly admin_identity_id?: InputMaybe<Order_By>;
  readonly cid?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly creator?: InputMaybe<Order_By>;
  readonly creator_identity_id?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly governance?: InputMaybe<Order_By>;
  readonly header?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly logo?: InputMaybe<Order_By>;
  readonly markdown?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly organization_id?: InputMaybe<Order_By>;
  readonly protocol?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
  readonly target?: InputMaybe<Order_By>;
  readonly title?: InputMaybe<Order_By>;
  readonly token_name?: InputMaybe<Order_By>;
  readonly token_symbol?: InputMaybe<Order_By>;
};

/** columns and relationships of "campaign_metadata" */
export type Campaign_Metadata = {
  readonly __typename?: 'campaign_metadata';
  readonly description: Scalars['String']['output'];
  readonly email: Scalars['String']['output'];
  readonly header: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly logo: Scalars['String']['output'];
  readonly markdown: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "campaign_metadata". All fields are combined with a logical 'AND'. */
export type Campaign_Metadata_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Campaign_Metadata_Bool_Exp>>;
  readonly _not?: InputMaybe<Campaign_Metadata_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Campaign_Metadata_Bool_Exp>>;
  readonly description?: InputMaybe<String_Comparison_Exp>;
  readonly email?: InputMaybe<String_Comparison_Exp>;
  readonly header?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly logo?: InputMaybe<String_Comparison_Exp>;
  readonly markdown?: InputMaybe<String_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly title?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "campaign_metadata". */
export type Campaign_Metadata_Order_By = {
  readonly description?: InputMaybe<Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly header?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly logo?: InputMaybe<Order_By>;
  readonly markdown?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly title?: InputMaybe<Order_By>;
};

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
  Title = 'title'
}

/** Streaming cursor of the table "campaign_metadata" */
export type Campaign_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Campaign_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Campaign_Metadata_Stream_Cursor_Value_Input = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly header?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly logo?: InputMaybe<Scalars['String']['input']>;
  readonly markdown?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate min on columns */
export type Campaign_Min_Fields = {
  readonly __typename?: 'campaign_min_fields';
  readonly admin?: Maybe<Scalars['String']['output']>;
  readonly admin_identity_id?: Maybe<Scalars['String']['output']>;
  readonly cid?: Maybe<Scalars['String']['output']>;
  readonly created_at_block?: Maybe<Scalars['Int']['output']>;
  readonly creator?: Maybe<Scalars['String']['output']>;
  readonly creator_identity_id?: Maybe<Scalars['String']['output']>;
  readonly deposit?: Maybe<Scalars['numeric']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly expiry?: Maybe<Scalars['Int']['output']>;
  readonly governance?: Maybe<Scalars['String']['output']>;
  readonly header?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly markdown?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly organization_id?: Maybe<Scalars['String']['output']>;
  readonly protocol?: Maybe<Scalars['String']['output']>;
  readonly start?: Maybe<Scalars['Int']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly target?: Maybe<Scalars['numeric']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
  readonly token_name?: Maybe<Scalars['String']['output']>;
  readonly token_symbol?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "campaign" */
export type Campaign_Min_Order_By = {
  readonly admin?: InputMaybe<Order_By>;
  readonly admin_identity_id?: InputMaybe<Order_By>;
  readonly cid?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly creator?: InputMaybe<Order_By>;
  readonly creator_identity_id?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly governance?: InputMaybe<Order_By>;
  readonly header?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly logo?: InputMaybe<Order_By>;
  readonly markdown?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly organization_id?: InputMaybe<Order_By>;
  readonly protocol?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
  readonly target?: InputMaybe<Order_By>;
  readonly title?: InputMaybe<Order_By>;
  readonly token_name?: InputMaybe<Order_By>;
  readonly token_symbol?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "campaign". */
export type Campaign_Order_By = {
  readonly admin?: InputMaybe<Order_By>;
  readonly admin_identity_id?: InputMaybe<Order_By>;
  readonly campaign_contributors_aggregate?: InputMaybe<Campaign_Contributor_Aggregate_Order_By>;
  readonly cid?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly creator?: InputMaybe<Order_By>;
  readonly creator_identity_id?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly governance?: InputMaybe<Order_By>;
  readonly header?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity?: InputMaybe<Identity_Order_By>;
  readonly identityByCreatorIdentityId?: InputMaybe<Identity_Order_By>;
  readonly logo?: InputMaybe<Order_By>;
  readonly markdown?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly organization?: InputMaybe<Organization_Order_By>;
  readonly organization_id?: InputMaybe<Order_By>;
  readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>;
  readonly protocol?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
  readonly target?: InputMaybe<Order_By>;
  readonly title?: InputMaybe<Order_By>;
  readonly token_name?: InputMaybe<Order_By>;
  readonly token_symbol?: InputMaybe<Order_By>;
};

/** select columns of table "campaign" */
export enum Campaign_Select_Column {
  /** column name */
  Admin = 'admin',
  /** column name */
  AdminIdentityId = 'admin_identity_id',
  /** column name */
  Cid = 'cid',
  /** column name */
  CreatedAtBlock = 'created_at_block',
  /** column name */
  Creator = 'creator',
  /** column name */
  CreatorIdentityId = 'creator_identity_id',
  /** column name */
  Deposit = 'deposit',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Expiry = 'expiry',
  /** column name */
  Governance = 'governance',
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
  OrganizationId = 'organization_id',
  /** column name */
  Protocol = 'protocol',
  /** column name */
  Start = 'start',
  /** column name */
  State = 'state',
  /** column name */
  Target = 'target',
  /** column name */
  Title = 'title',
  /** column name */
  TokenName = 'token_name',
  /** column name */
  TokenSymbol = 'token_symbol'
}

/** aggregate stddev on columns */
export type Campaign_Stddev_Fields = {
  readonly __typename?: 'campaign_stddev_fields';
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly expiry?: Maybe<Scalars['Float']['output']>;
  readonly start?: Maybe<Scalars['Float']['output']>;
  readonly target?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "campaign" */
export type Campaign_Stddev_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
  readonly target?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Campaign_Stddev_Pop_Fields = {
  readonly __typename?: 'campaign_stddev_pop_fields';
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly expiry?: Maybe<Scalars['Float']['output']>;
  readonly start?: Maybe<Scalars['Float']['output']>;
  readonly target?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "campaign" */
export type Campaign_Stddev_Pop_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
  readonly target?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Campaign_Stddev_Samp_Fields = {
  readonly __typename?: 'campaign_stddev_samp_fields';
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly expiry?: Maybe<Scalars['Float']['output']>;
  readonly start?: Maybe<Scalars['Float']['output']>;
  readonly target?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "campaign" */
export type Campaign_Stddev_Samp_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
  readonly target?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "campaign" */
export type Campaign_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Campaign_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Campaign_Stream_Cursor_Value_Input = {
  readonly admin?: InputMaybe<Scalars['String']['input']>;
  readonly admin_identity_id?: InputMaybe<Scalars['String']['input']>;
  readonly cid?: InputMaybe<Scalars['String']['input']>;
  readonly created_at_block?: InputMaybe<Scalars['Int']['input']>;
  readonly creator?: InputMaybe<Scalars['String']['input']>;
  readonly creator_identity_id?: InputMaybe<Scalars['String']['input']>;
  readonly deposit?: InputMaybe<Scalars['numeric']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly expiry?: InputMaybe<Scalars['Int']['input']>;
  readonly governance?: InputMaybe<Scalars['String']['input']>;
  readonly header?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly logo?: InputMaybe<Scalars['String']['input']>;
  readonly markdown?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly organization_id?: InputMaybe<Scalars['String']['input']>;
  readonly protocol?: InputMaybe<Scalars['String']['input']>;
  readonly start?: InputMaybe<Scalars['Int']['input']>;
  readonly state?: InputMaybe<Scalars['String']['input']>;
  readonly target?: InputMaybe<Scalars['numeric']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
  readonly token_name?: InputMaybe<Scalars['String']['input']>;
  readonly token_symbol?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Campaign_Sum_Fields = {
  readonly __typename?: 'campaign_sum_fields';
  readonly created_at_block?: Maybe<Scalars['Int']['output']>;
  readonly deposit?: Maybe<Scalars['numeric']['output']>;
  readonly expiry?: Maybe<Scalars['Int']['output']>;
  readonly start?: Maybe<Scalars['Int']['output']>;
  readonly target?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "campaign" */
export type Campaign_Sum_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
  readonly target?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Campaign_Var_Pop_Fields = {
  readonly __typename?: 'campaign_var_pop_fields';
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly expiry?: Maybe<Scalars['Float']['output']>;
  readonly start?: Maybe<Scalars['Float']['output']>;
  readonly target?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "campaign" */
export type Campaign_Var_Pop_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
  readonly target?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Campaign_Var_Samp_Fields = {
  readonly __typename?: 'campaign_var_samp_fields';
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly expiry?: Maybe<Scalars['Float']['output']>;
  readonly start?: Maybe<Scalars['Float']['output']>;
  readonly target?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "campaign" */
export type Campaign_Var_Samp_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
  readonly target?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Campaign_Variance_Fields = {
  readonly __typename?: 'campaign_variance_fields';
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly expiry?: Maybe<Scalars['Float']['output']>;
  readonly start?: Maybe<Scalars['Float']['output']>;
  readonly target?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "campaign" */
export type Campaign_Variance_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
  readonly target?: InputMaybe<Order_By>;
};

/** columns and relationships of "ChainInfo" */
export type Chain_Info = {
  readonly __typename?: 'chain_info';
  readonly blockNumber: Scalars['bigint']['output'];
  readonly id: Scalars['Int']['output'];
};

/** Boolean expression to filter rows from the table "ChainInfo". All fields are combined with a logical 'AND'. */
export type Chain_Info_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Chain_Info_Bool_Exp>>;
  readonly _not?: InputMaybe<Chain_Info_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Chain_Info_Bool_Exp>>;
  readonly blockNumber?: InputMaybe<Bigint_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "ChainInfo". */
export type Chain_Info_Order_By = {
  readonly blockNumber?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** select columns of table "ChainInfo" */
export enum Chain_Info_Select_Column {
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "chain_info" */
export type Chain_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Chain_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chain_Info_Stream_Cursor_Value_Input = {
  readonly blockNumber?: InputMaybe<Scalars['bigint']['input']>;
  readonly id?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "chain_state" */
export type Chain_State = {
  readonly __typename?: 'chain_state';
  readonly block_number: Scalars['Int']['output'];
  readonly id: Scalars['String']['output'];
  readonly timestamp: Scalars['timestamptz']['output'];
  readonly token_balance: Scalars['numeric']['output'];
  readonly token_holders: Scalars['Int']['output'];
};

/** Boolean expression to filter rows from the table "chain_state". All fields are combined with a logical 'AND'. */
export type Chain_State_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Chain_State_Bool_Exp>>;
  readonly _not?: InputMaybe<Chain_State_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Chain_State_Bool_Exp>>;
  readonly block_number?: InputMaybe<Int_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly token_balance?: InputMaybe<Numeric_Comparison_Exp>;
  readonly token_holders?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "chain_state". */
export type Chain_State_Order_By = {
  readonly block_number?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly timestamp?: InputMaybe<Order_By>;
  readonly token_balance?: InputMaybe<Order_By>;
  readonly token_holders?: InputMaybe<Order_By>;
};

/** select columns of table "chain_state" */
export enum Chain_State_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TokenBalance = 'token_balance',
  /** column name */
  TokenHolders = 'token_holders'
}

/** Streaming cursor of the table "chain_state" */
export type Chain_State_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Chain_State_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chain_State_Stream_Cursor_Value_Input = {
  readonly block_number?: InputMaybe<Scalars['Int']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  readonly token_balance?: InputMaybe<Scalars['numeric']['input']>;
  readonly token_holders?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "current_chain_state" */
export type Current_Chain_State = {
  readonly __typename?: 'current_chain_state';
  readonly block_number: Scalars['Int']['output'];
  readonly id: Scalars['String']['output'];
  readonly timestamp: Scalars['timestamptz']['output'];
  readonly token_balance: Scalars['numeric']['output'];
  readonly token_holders: Scalars['Int']['output'];
};

/** Boolean expression to filter rows from the table "current_chain_state". All fields are combined with a logical 'AND'. */
export type Current_Chain_State_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Current_Chain_State_Bool_Exp>>;
  readonly _not?: InputMaybe<Current_Chain_State_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Current_Chain_State_Bool_Exp>>;
  readonly block_number?: InputMaybe<Int_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly token_balance?: InputMaybe<Numeric_Comparison_Exp>;
  readonly token_holders?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "current_chain_state". */
export type Current_Chain_State_Order_By = {
  readonly block_number?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly timestamp?: InputMaybe<Order_By>;
  readonly token_balance?: InputMaybe<Order_By>;
  readonly token_holders?: InputMaybe<Order_By>;
};

/** select columns of table "current_chain_state" */
export enum Current_Chain_State_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TokenBalance = 'token_balance',
  /** column name */
  TokenHolders = 'token_holders'
}

/** Streaming cursor of the table "current_chain_state" */
export type Current_Chain_State_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Current_Chain_State_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Current_Chain_State_Stream_Cursor_Value_Input = {
  readonly block_number?: InputMaybe<Scalars['Int']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  readonly token_balance?: InputMaybe<Scalars['numeric']['input']>;
  readonly token_holders?: InputMaybe<Scalars['Int']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "dapp" */
export type Dapp = {
  readonly __typename?: 'dapp';
  readonly beneficiary?: Maybe<Scalars['String']['output']>;
  readonly dapp_id: Scalars['Int']['output'];
  readonly id: Scalars['String']['output'];
  readonly owner: Scalars['String']['output'];
  readonly registered_at: Scalars['numeric']['output'];
  readonly registration_block_number: Scalars['Int']['output'];
  readonly stakers_count: Scalars['Int']['output'];
  readonly state: Scalars['String']['output'];
  readonly unregistered_at?: Maybe<Scalars['numeric']['output']>;
  readonly unregistration_block_number?: Maybe<Scalars['Int']['output']>;
};

/** columns and relationships of "dapp_aggregated_daily" */
export type Dapp_Aggregated_Daily = {
  readonly __typename?: 'dapp_aggregated_daily';
  readonly dapp_address: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly stakers_count: Scalars['Int']['output'];
  readonly timestamp: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "dapp_aggregated_daily". All fields are combined with a logical 'AND'. */
export type Dapp_Aggregated_Daily_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Dapp_Aggregated_Daily_Bool_Exp>>;
  readonly _not?: InputMaybe<Dapp_Aggregated_Daily_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Dapp_Aggregated_Daily_Bool_Exp>>;
  readonly dapp_address?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly stakers_count?: InputMaybe<Int_Comparison_Exp>;
  readonly timestamp?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "dapp_aggregated_daily". */
export type Dapp_Aggregated_Daily_Order_By = {
  readonly dapp_address?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly stakers_count?: InputMaybe<Order_By>;
  readonly timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "dapp_aggregated_daily" */
export enum Dapp_Aggregated_Daily_Select_Column {
  /** column name */
  DappAddress = 'dapp_address',
  /** column name */
  Id = 'id',
  /** column name */
  StakersCount = 'stakers_count',
  /** column name */
  Timestamp = 'timestamp'
}

/** Streaming cursor of the table "dapp_aggregated_daily" */
export type Dapp_Aggregated_Daily_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Dapp_Aggregated_Daily_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dapp_Aggregated_Daily_Stream_Cursor_Value_Input = {
  readonly dapp_address?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly stakers_count?: InputMaybe<Scalars['Int']['input']>;
  readonly timestamp?: InputMaybe<Scalars['numeric']['input']>;
};

/** Boolean expression to filter rows from the table "dapp". All fields are combined with a logical 'AND'. */
export type Dapp_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Dapp_Bool_Exp>>;
  readonly _not?: InputMaybe<Dapp_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Dapp_Bool_Exp>>;
  readonly beneficiary?: InputMaybe<String_Comparison_Exp>;
  readonly dapp_id?: InputMaybe<Int_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly owner?: InputMaybe<String_Comparison_Exp>;
  readonly registered_at?: InputMaybe<Numeric_Comparison_Exp>;
  readonly registration_block_number?: InputMaybe<Int_Comparison_Exp>;
  readonly stakers_count?: InputMaybe<Int_Comparison_Exp>;
  readonly state?: InputMaybe<String_Comparison_Exp>;
  readonly unregistered_at?: InputMaybe<Numeric_Comparison_Exp>;
  readonly unregistration_block_number?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "dapp". */
export type Dapp_Order_By = {
  readonly beneficiary?: InputMaybe<Order_By>;
  readonly dapp_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly owner?: InputMaybe<Order_By>;
  readonly registered_at?: InputMaybe<Order_By>;
  readonly registration_block_number?: InputMaybe<Order_By>;
  readonly stakers_count?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
  readonly unregistered_at?: InputMaybe<Order_By>;
  readonly unregistration_block_number?: InputMaybe<Order_By>;
};

/** select columns of table "dapp" */
export enum Dapp_Select_Column {
  /** column name */
  Beneficiary = 'beneficiary',
  /** column name */
  DappId = 'dapp_id',
  /** column name */
  Id = 'id',
  /** column name */
  Owner = 'owner',
  /** column name */
  RegisteredAt = 'registered_at',
  /** column name */
  RegistrationBlockNumber = 'registration_block_number',
  /** column name */
  StakersCount = 'stakers_count',
  /** column name */
  State = 'state',
  /** column name */
  UnregisteredAt = 'unregistered_at',
  /** column name */
  UnregistrationBlockNumber = 'unregistration_block_number'
}

/** Streaming cursor of the table "dapp" */
export type Dapp_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Dapp_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dapp_Stream_Cursor_Value_Input = {
  readonly beneficiary?: InputMaybe<Scalars['String']['input']>;
  readonly dapp_id?: InputMaybe<Scalars['Int']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly owner?: InputMaybe<Scalars['String']['input']>;
  readonly registered_at?: InputMaybe<Scalars['numeric']['input']>;
  readonly registration_block_number?: InputMaybe<Scalars['Int']['input']>;
  readonly stakers_count?: InputMaybe<Scalars['Int']['input']>;
  readonly state?: InputMaybe<Scalars['String']['input']>;
  readonly unregistered_at?: InputMaybe<Scalars['numeric']['input']>;
  readonly unregistration_block_number?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "squid_processor.status" */
export type Gamedao_Indexer_Status = {
  readonly __typename?: 'gamedao_indexer_status';
  readonly height: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
};

/** Boolean expression to filter rows from the table "squid_processor.status". All fields are combined with a logical 'AND'. */
export type Gamedao_Indexer_Status_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Gamedao_Indexer_Status_Bool_Exp>>;
  readonly _not?: InputMaybe<Gamedao_Indexer_Status_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Gamedao_Indexer_Status_Bool_Exp>>;
  readonly height?: InputMaybe<Int_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "squid_processor.status". */
export type Gamedao_Indexer_Status_Order_By = {
  readonly height?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** select columns of table "squid_processor.status" */
export enum Gamedao_Indexer_Status_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "gamedao_indexer_status" */
export type Gamedao_Indexer_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Gamedao_Indexer_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gamedao_Indexer_Status_Stream_Cursor_Value_Input = {
  readonly height?: InputMaybe<Scalars['Int']['input']>;
  readonly id?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "migrations" */
export type Gamedao_Squid_Migrations = {
  readonly __typename?: 'gamedao_squid_migrations';
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['String']['output'];
  readonly timestamp: Scalars['bigint']['output'];
};

/** Boolean expression to filter rows from the table "migrations". All fields are combined with a logical 'AND'. */
export type Gamedao_Squid_Migrations_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Gamedao_Squid_Migrations_Bool_Exp>>;
  readonly _not?: InputMaybe<Gamedao_Squid_Migrations_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Gamedao_Squid_Migrations_Bool_Exp>>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly timestamp?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "migrations". */
export type Gamedao_Squid_Migrations_Order_By = {
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "migrations" */
export enum Gamedao_Squid_Migrations_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Timestamp = 'timestamp'
}

/** Streaming cursor of the table "gamedao_squid_migrations" */
export type Gamedao_Squid_Migrations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Gamedao_Squid_Migrations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gamedao_Squid_Migrations_Stream_Cursor_Value_Input = {
  readonly id?: InputMaybe<Scalars['Int']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly timestamp?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "grouped_staking_event" */
export type Grouped_Staking_Event = {
  readonly __typename?: 'grouped_staking_event';
  readonly amount: Scalars['numeric']['output'];
  readonly id: Scalars['String']['output'];
  readonly timestamp: Scalars['numeric']['output'];
  readonly transaction: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "grouped_staking_event". All fields are combined with a logical 'AND'. */
export type Grouped_Staking_Event_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Grouped_Staking_Event_Bool_Exp>>;
  readonly _not?: InputMaybe<Grouped_Staking_Event_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Grouped_Staking_Event_Bool_Exp>>;
  readonly amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly timestamp?: InputMaybe<Numeric_Comparison_Exp>;
  readonly transaction?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "grouped_staking_event". */
export type Grouped_Staking_Event_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly timestamp?: InputMaybe<Order_By>;
  readonly transaction?: InputMaybe<Order_By>;
};

/** select columns of table "grouped_staking_event" */
export enum Grouped_Staking_Event_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Transaction = 'transaction'
}

/** Streaming cursor of the table "grouped_staking_event" */
export type Grouped_Staking_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Grouped_Staking_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Grouped_Staking_Event_Stream_Cursor_Value_Input = {
  readonly amount?: InputMaybe<Scalars['numeric']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly timestamp?: InputMaybe<Scalars['numeric']['input']>;
  readonly transaction?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "historical_balance" */
export type Historical_Balance = {
  readonly __typename?: 'historical_balance';
  /** An array relationship */
  readonly account_balances: ReadonlyArray<Account_Balance>;
  readonly address: Scalars['String']['output'];
  readonly block: Scalars['Int']['output'];
  readonly currency_id: Scalars['String']['output'];
  readonly free: Scalars['numeric']['output'];
  readonly id: Scalars['String']['output'];
  readonly reserved: Scalars['numeric']['output'];
  readonly total: Scalars['numeric']['output'];
};


/** columns and relationships of "historical_balance" */
export type Historical_BalanceAccount_BalancesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Account_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Account_Balance_Order_By>>;
  where?: InputMaybe<Account_Balance_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "historical_balance". All fields are combined with a logical 'AND'. */
export type Historical_Balance_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Historical_Balance_Bool_Exp>>;
  readonly _not?: InputMaybe<Historical_Balance_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Historical_Balance_Bool_Exp>>;
  readonly account_balances?: InputMaybe<Account_Balance_Bool_Exp>;
  readonly address?: InputMaybe<String_Comparison_Exp>;
  readonly block?: InputMaybe<Int_Comparison_Exp>;
  readonly currency_id?: InputMaybe<String_Comparison_Exp>;
  readonly free?: InputMaybe<Numeric_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly reserved?: InputMaybe<Numeric_Comparison_Exp>;
  readonly total?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "historical_balance". */
export type Historical_Balance_Order_By = {
  readonly account_balances_aggregate?: InputMaybe<Account_Balance_Aggregate_Order_By>;
  readonly address?: InputMaybe<Order_By>;
  readonly block?: InputMaybe<Order_By>;
  readonly currency_id?: InputMaybe<Order_By>;
  readonly free?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly reserved?: InputMaybe<Order_By>;
  readonly total?: InputMaybe<Order_By>;
};

/** select columns of table "historical_balance" */
export enum Historical_Balance_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Block = 'block',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Free = 'free',
  /** column name */
  Id = 'id',
  /** column name */
  Reserved = 'reserved',
  /** column name */
  Total = 'total'
}

/** Streaming cursor of the table "historical_balance" */
export type Historical_Balance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Historical_Balance_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Historical_Balance_Stream_Cursor_Value_Input = {
  readonly address?: InputMaybe<Scalars['String']['input']>;
  readonly block?: InputMaybe<Scalars['Int']['input']>;
  readonly currency_id?: InputMaybe<Scalars['String']['input']>;
  readonly free?: InputMaybe<Scalars['numeric']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly reserved?: InputMaybe<Scalars['numeric']['input']>;
  readonly total?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "identity" */
export type Identity = {
  readonly __typename?: 'identity';
  /** An array relationship */
  readonly account_balances: ReadonlyArray<Account_Balance>;
  readonly address: Scalars['String']['output'];
  /** An array relationship */
  readonly battlepass_nfts: ReadonlyArray<Battlepass_Nft>;
  /** An array relationship */
  readonly battlepasses: ReadonlyArray<Battlepass>;
  /** An array relationship */
  readonly campaign_contributors: ReadonlyArray<Campaign_Contributor>;
  /** An array relationship */
  readonly campaigns: ReadonlyArray<Campaign>;
  /** An array relationship */
  readonly campaignsByCreatorIdentityId: ReadonlyArray<Campaign>;
  /** An aggregate relationship */
  readonly campaignsByCreatorIdentityId_aggregate: Campaign_Aggregate;
  /** An aggregate relationship */
  readonly campaigns_aggregate: Campaign_Aggregate;
  readonly discord?: Maybe<Scalars['String']['output']>;
  readonly display_name?: Maybe<Scalars['String']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['String']['output'];
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly legal_name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  readonly nft_collections: ReadonlyArray<Nft_Collection>;
  /** An array relationship */
  readonly nfts: ReadonlyArray<Nft>;
  /** An array relationship */
  readonly organization_members: ReadonlyArray<Organization_Member>;
  /** An aggregate relationship */
  readonly organization_members_aggregate: Organization_Member_Aggregate;
  /** An array relationship */
  readonly organizations: ReadonlyArray<Organization>;
  /** An array relationship */
  readonly organizationsByCreatorIdentityId: ReadonlyArray<Organization>;
  /** An aggregate relationship */
  readonly organizationsByCreatorIdentityId_aggregate: Organization_Aggregate;
  /** An array relationship */
  readonly organizationsByTreasuryIdentityId: ReadonlyArray<Organization>;
  /** An aggregate relationship */
  readonly organizationsByTreasuryIdentityId_aggregate: Organization_Aggregate;
  /** An aggregate relationship */
  readonly organizations_aggregate: Organization_Aggregate;
  /** An array relationship */
  readonly proposal_voters: ReadonlyArray<Proposal_Voter>;
  /** An array relationship */
  readonly proposals: ReadonlyArray<Proposal>;
  /** An array relationship */
  readonly proposalsByBeneficiaryIdentityId: ReadonlyArray<Proposal>;
  /** An aggregate relationship */
  readonly proposalsByBeneficiaryIdentityId_aggregate: Proposal_Aggregate;
  /** An aggregate relationship */
  readonly proposals_aggregate: Proposal_Aggregate;
  readonly riot?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  readonly sense_entities: ReadonlyArray<Sense_Entity>;
  readonly twitter?: Maybe<Scalars['String']['output']>;
  readonly web?: Maybe<Scalars['String']['output']>;
  readonly web3name?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "identity" */
export type IdentityAccount_BalancesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Account_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Account_Balance_Order_By>>;
  where?: InputMaybe<Account_Balance_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityBattlepass_NftsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Battlepass_Nft_Order_By>>;
  where?: InputMaybe<Battlepass_Nft_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityBattlepassesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Battlepass_Order_By>>;
  where?: InputMaybe<Battlepass_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityCampaign_ContributorsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Contributor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Contributor_Order_By>>;
  where?: InputMaybe<Campaign_Contributor_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityCampaignsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityCampaignsByCreatorIdentityIdArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityCampaignsByCreatorIdentityId_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityCampaigns_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityNft_CollectionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nft_Collection_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Nft_Collection_Order_By>>;
  where?: InputMaybe<Nft_Collection_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityNftsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityOrganization_MembersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityOrganization_Members_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityOrganizationsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityOrganizationsByCreatorIdentityIdArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityOrganizationsByCreatorIdentityId_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityOrganizationsByTreasuryIdentityIdArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityOrganizationsByTreasuryIdentityId_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityProposal_VotersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Voter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Voter_Order_By>>;
  where?: InputMaybe<Proposal_Voter_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityProposalsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityProposalsByBeneficiaryIdentityIdArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityProposalsByBeneficiaryIdentityId_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentityProposals_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "identity" */
export type IdentitySense_EntitiesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Sense_Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Sense_Entity_Order_By>>;
  where?: InputMaybe<Sense_Entity_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "identity". All fields are combined with a logical 'AND'. */
export type Identity_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Identity_Bool_Exp>>;
  readonly _not?: InputMaybe<Identity_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Identity_Bool_Exp>>;
  readonly account_balances?: InputMaybe<Account_Balance_Bool_Exp>;
  readonly address?: InputMaybe<String_Comparison_Exp>;
  readonly battlepass_nfts?: InputMaybe<Battlepass_Nft_Bool_Exp>;
  readonly battlepasses?: InputMaybe<Battlepass_Bool_Exp>;
  readonly campaign_contributors?: InputMaybe<Campaign_Contributor_Bool_Exp>;
  readonly campaigns?: InputMaybe<Campaign_Bool_Exp>;
  readonly campaignsByCreatorIdentityId?: InputMaybe<Campaign_Bool_Exp>;
  readonly campaignsByCreatorIdentityId_aggregate?: InputMaybe<Campaign_Aggregate_Bool_Exp>;
  readonly campaigns_aggregate?: InputMaybe<Campaign_Aggregate_Bool_Exp>;
  readonly discord?: InputMaybe<String_Comparison_Exp>;
  readonly display_name?: InputMaybe<String_Comparison_Exp>;
  readonly email?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly image?: InputMaybe<String_Comparison_Exp>;
  readonly legal_name?: InputMaybe<String_Comparison_Exp>;
  readonly nft_collections?: InputMaybe<Nft_Collection_Bool_Exp>;
  readonly nfts?: InputMaybe<Nft_Bool_Exp>;
  readonly organization_members?: InputMaybe<Organization_Member_Bool_Exp>;
  readonly organization_members_aggregate?: InputMaybe<Organization_Member_Aggregate_Bool_Exp>;
  readonly organizations?: InputMaybe<Organization_Bool_Exp>;
  readonly organizationsByCreatorIdentityId?: InputMaybe<Organization_Bool_Exp>;
  readonly organizationsByCreatorIdentityId_aggregate?: InputMaybe<Organization_Aggregate_Bool_Exp>;
  readonly organizationsByTreasuryIdentityId?: InputMaybe<Organization_Bool_Exp>;
  readonly organizationsByTreasuryIdentityId_aggregate?: InputMaybe<Organization_Aggregate_Bool_Exp>;
  readonly organizations_aggregate?: InputMaybe<Organization_Aggregate_Bool_Exp>;
  readonly proposal_voters?: InputMaybe<Proposal_Voter_Bool_Exp>;
  readonly proposals?: InputMaybe<Proposal_Bool_Exp>;
  readonly proposalsByBeneficiaryIdentityId?: InputMaybe<Proposal_Bool_Exp>;
  readonly proposalsByBeneficiaryIdentityId_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>;
  readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>;
  readonly riot?: InputMaybe<String_Comparison_Exp>;
  readonly sense_entities?: InputMaybe<Sense_Entity_Bool_Exp>;
  readonly twitter?: InputMaybe<String_Comparison_Exp>;
  readonly web?: InputMaybe<String_Comparison_Exp>;
  readonly web3name?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "identity". */
export type Identity_Order_By = {
  readonly account_balances_aggregate?: InputMaybe<Account_Balance_Aggregate_Order_By>;
  readonly address?: InputMaybe<Order_By>;
  readonly battlepass_nfts_aggregate?: InputMaybe<Battlepass_Nft_Aggregate_Order_By>;
  readonly battlepasses_aggregate?: InputMaybe<Battlepass_Aggregate_Order_By>;
  readonly campaign_contributors_aggregate?: InputMaybe<Campaign_Contributor_Aggregate_Order_By>;
  readonly campaignsByCreatorIdentityId_aggregate?: InputMaybe<Campaign_Aggregate_Order_By>;
  readonly campaigns_aggregate?: InputMaybe<Campaign_Aggregate_Order_By>;
  readonly discord?: InputMaybe<Order_By>;
  readonly display_name?: InputMaybe<Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly image?: InputMaybe<Order_By>;
  readonly legal_name?: InputMaybe<Order_By>;
  readonly nft_collections_aggregate?: InputMaybe<Nft_Collection_Aggregate_Order_By>;
  readonly nfts_aggregate?: InputMaybe<Nft_Aggregate_Order_By>;
  readonly organization_members_aggregate?: InputMaybe<Organization_Member_Aggregate_Order_By>;
  readonly organizationsByCreatorIdentityId_aggregate?: InputMaybe<Organization_Aggregate_Order_By>;
  readonly organizationsByTreasuryIdentityId_aggregate?: InputMaybe<Organization_Aggregate_Order_By>;
  readonly organizations_aggregate?: InputMaybe<Organization_Aggregate_Order_By>;
  readonly proposal_voters_aggregate?: InputMaybe<Proposal_Voter_Aggregate_Order_By>;
  readonly proposalsByBeneficiaryIdentityId_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>;
  readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>;
  readonly riot?: InputMaybe<Order_By>;
  readonly sense_entities_aggregate?: InputMaybe<Sense_Entity_Aggregate_Order_By>;
  readonly twitter?: InputMaybe<Order_By>;
  readonly web?: InputMaybe<Order_By>;
  readonly web3name?: InputMaybe<Order_By>;
};

/** select columns of table "identity" */
export enum Identity_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Discord = 'discord',
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
  /** column name */
  Web = 'web',
  /** column name */
  Web3name = 'web3name'
}

/** Streaming cursor of the table "identity" */
export type Identity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Identity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Identity_Stream_Cursor_Value_Input = {
  readonly address?: InputMaybe<Scalars['String']['input']>;
  readonly discord?: InputMaybe<Scalars['String']['input']>;
  readonly display_name?: InputMaybe<Scalars['String']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly image?: InputMaybe<Scalars['String']['input']>;
  readonly legal_name?: InputMaybe<Scalars['String']['input']>;
  readonly riot?: InputMaybe<Scalars['String']['input']>;
  readonly twitter?: InputMaybe<Scalars['String']['input']>;
  readonly web?: InputMaybe<Scalars['String']['input']>;
  readonly web3name?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "migrations" */
export type Migrations = {
  readonly __typename?: 'migrations';
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['String']['output'];
  readonly timestamp: Scalars['bigint']['output'];
};

/** Boolean expression to filter rows from the table "migrations". All fields are combined with a logical 'AND'. */
export type Migrations_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Migrations_Bool_Exp>>;
  readonly _not?: InputMaybe<Migrations_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Migrations_Bool_Exp>>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly timestamp?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "migrations". */
export type Migrations_Order_By = {
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "migrations" */
export enum Migrations_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Timestamp = 'timestamp'
}

/** Streaming cursor of the table "migrations" */
export type Migrations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Migrations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Migrations_Stream_Cursor_Value_Input = {
  readonly id?: InputMaybe<Scalars['Int']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly timestamp?: InputMaybe<Scalars['bigint']['input']>;
};

/** mutation root */
export type Mutation_Root = {
  readonly __typename?: 'mutation_root';
  readonly singleUpload: Scalars['String']['output'];
  readonly updateSession: Scalars['Boolean']['output'];
};


/** mutation root */
export type Mutation_RootSingleUploadArgs = {
  fileStream: Scalars['Upload']['input'];
};


/** mutation root */
export type Mutation_RootUpdateSessionArgs = {
  address: Scalars['String']['input'];
};

/** columns and relationships of "nft" */
export type Nft = {
  readonly __typename?: 'nft';
  /** An array relationship */
  readonly battlepass_nfts: ReadonlyArray<Battlepass_Nft>;
  readonly collection_id?: Maybe<Scalars['String']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['String']['output'];
  /** An object relationship */
  readonly identity?: Maybe<Identity>;
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly metadata?: Maybe<Scalars['String']['output']>;
  readonly metadata_is_frozen?: Maybe<Scalars['Boolean']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  readonly nft_collection?: Maybe<Nft_Collection>;
  readonly owner_id?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "nft" */
export type NftBattlepass_NftsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Battlepass_Nft_Order_By>>;
  where?: InputMaybe<Battlepass_Nft_Bool_Exp>;
};

/** order by aggregate values of table "nft" */
export type Nft_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Nft_Max_Order_By>;
  readonly min?: InputMaybe<Nft_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "nft". All fields are combined with a logical 'AND'. */
export type Nft_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Nft_Bool_Exp>>;
  readonly _not?: InputMaybe<Nft_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Nft_Bool_Exp>>;
  readonly battlepass_nfts?: InputMaybe<Battlepass_Nft_Bool_Exp>;
  readonly collection_id?: InputMaybe<String_Comparison_Exp>;
  readonly description?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly identity?: InputMaybe<Identity_Bool_Exp>;
  readonly image?: InputMaybe<String_Comparison_Exp>;
  readonly metadata?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_is_frozen?: InputMaybe<Boolean_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly nft_collection?: InputMaybe<Nft_Collection_Bool_Exp>;
  readonly owner_id?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "nft_collection" */
export type Nft_Collection = {
  readonly __typename?: 'nft_collection';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['String']['output'];
  /** An object relationship */
  readonly identity?: Maybe<Identity>;
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly max?: Maybe<Scalars['Int']['output']>;
  readonly metadata?: Maybe<Scalars['String']['output']>;
  readonly metadata_is_frozen?: Maybe<Scalars['Boolean']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  readonly nfts: ReadonlyArray<Nft>;
  readonly owner_id?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "nft_collection" */
export type Nft_CollectionNftsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};

/** order by aggregate values of table "nft_collection" */
export type Nft_Collection_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Nft_Collection_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Nft_Collection_Max_Order_By>;
  readonly min?: InputMaybe<Nft_Collection_Min_Order_By>;
  readonly stddev?: InputMaybe<Nft_Collection_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Nft_Collection_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Nft_Collection_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Nft_Collection_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Nft_Collection_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Nft_Collection_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Nft_Collection_Variance_Order_By>;
};

/** order by avg() on columns of table "nft_collection" */
export type Nft_Collection_Avg_Order_By = {
  readonly max?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nft_collection". All fields are combined with a logical 'AND'. */
export type Nft_Collection_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Nft_Collection_Bool_Exp>>;
  readonly _not?: InputMaybe<Nft_Collection_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Nft_Collection_Bool_Exp>>;
  readonly description?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly identity?: InputMaybe<Identity_Bool_Exp>;
  readonly image?: InputMaybe<String_Comparison_Exp>;
  readonly max?: InputMaybe<Int_Comparison_Exp>;
  readonly metadata?: InputMaybe<String_Comparison_Exp>;
  readonly metadata_is_frozen?: InputMaybe<Boolean_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly nfts?: InputMaybe<Nft_Bool_Exp>;
  readonly owner_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "nft_collection" */
export type Nft_Collection_Max_Order_By = {
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly image?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly owner_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "nft_collection" */
export type Nft_Collection_Min_Order_By = {
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly image?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly owner_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "nft_collection". */
export type Nft_Collection_Order_By = {
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity?: InputMaybe<Identity_Order_By>;
  readonly image?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly metadata_is_frozen?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly nfts_aggregate?: InputMaybe<Nft_Aggregate_Order_By>;
  readonly owner_id?: InputMaybe<Order_By>;
};

/** select columns of table "nft_collection" */
export enum Nft_Collection_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Max = 'max',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MetadataIsFrozen = 'metadata_is_frozen',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id'
}

/** order by stddev() on columns of table "nft_collection" */
export type Nft_Collection_Stddev_Order_By = {
  readonly max?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "nft_collection" */
export type Nft_Collection_Stddev_Pop_Order_By = {
  readonly max?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "nft_collection" */
export type Nft_Collection_Stddev_Samp_Order_By = {
  readonly max?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "nft_collection" */
export type Nft_Collection_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Nft_Collection_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_Collection_Stream_Cursor_Value_Input = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly image?: InputMaybe<Scalars['String']['input']>;
  readonly max?: InputMaybe<Scalars['Int']['input']>;
  readonly metadata?: InputMaybe<Scalars['String']['input']>;
  readonly metadata_is_frozen?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly owner_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "nft_collection" */
export type Nft_Collection_Sum_Order_By = {
  readonly max?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "nft_collection" */
export type Nft_Collection_Var_Pop_Order_By = {
  readonly max?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "nft_collection" */
export type Nft_Collection_Var_Samp_Order_By = {
  readonly max?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "nft_collection" */
export type Nft_Collection_Variance_Order_By = {
  readonly max?: InputMaybe<Order_By>;
};

/** order by max() on columns of table "nft" */
export type Nft_Max_Order_By = {
  readonly collection_id?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly image?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly owner_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "nft" */
export type Nft_Min_Order_By = {
  readonly collection_id?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly image?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly owner_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "nft". */
export type Nft_Order_By = {
  readonly battlepass_nfts_aggregate?: InputMaybe<Battlepass_Nft_Aggregate_Order_By>;
  readonly collection_id?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity?: InputMaybe<Identity_Order_By>;
  readonly image?: InputMaybe<Order_By>;
  readonly metadata?: InputMaybe<Order_By>;
  readonly metadata_is_frozen?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly nft_collection?: InputMaybe<Nft_Collection_Order_By>;
  readonly owner_id?: InputMaybe<Order_By>;
};

/** select columns of table "nft" */
export enum Nft_Select_Column {
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MetadataIsFrozen = 'metadata_is_frozen',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id'
}

/** Streaming cursor of the table "nft" */
export type Nft_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Nft_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_Stream_Cursor_Value_Input = {
  readonly collection_id?: InputMaybe<Scalars['String']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly image?: InputMaybe<Scalars['String']['input']>;
  readonly metadata?: InputMaybe<Scalars['String']['input']>;
  readonly metadata_is_frozen?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly owner_id?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['numeric']['input']>;
  readonly _gt?: InputMaybe<Scalars['numeric']['input']>;
  readonly _gte?: InputMaybe<Scalars['numeric']['input']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['numeric']['input']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly _lt?: InputMaybe<Scalars['numeric']['input']>;
  readonly _lte?: InputMaybe<Scalars['numeric']['input']>;
  readonly _neq?: InputMaybe<Scalars['numeric']['input']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['numeric']['input']>>;
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

/** columns and relationships of "organization" */
export type Organization = {
  readonly __typename?: 'organization';
  readonly access_model: Scalars['String']['output'];
  /** An array relationship */
  readonly battlepasses: ReadonlyArray<Battlepass>;
  /** An array relationship */
  readonly campaigns: ReadonlyArray<Campaign>;
  /** An aggregate relationship */
  readonly campaigns_aggregate: Campaign_Aggregate;
  readonly cid: Scalars['String']['output'];
  readonly created_at_block: Scalars['Int']['output'];
  readonly creator: Scalars['String']['output'];
  readonly creator_identity_id?: Maybe<Scalars['String']['output']>;
  readonly deposit: Scalars['numeric']['output'];
  readonly description: Scalars['String']['output'];
  readonly email: Scalars['String']['output'];
  readonly fee_model: Scalars['String']['output'];
  readonly gov_currency: Scalars['String']['output'];
  readonly header: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  /** An object relationship */
  readonly identity?: Maybe<Identity>;
  /** An object relationship */
  readonly identityByCreatorIdentityId?: Maybe<Identity>;
  /** An object relationship */
  readonly identityByTreasuryIdentityId?: Maybe<Identity>;
  readonly location: Scalars['String']['output'];
  readonly logo: Scalars['String']['output'];
  readonly member_limit: Scalars['Int']['output'];
  readonly membership_fee?: Maybe<Scalars['numeric']['output']>;
  readonly name: Scalars['String']['output'];
  /** An array relationship */
  readonly organization_members: ReadonlyArray<Organization_Member>;
  /** An aggregate relationship */
  readonly organization_members_aggregate: Organization_Member_Aggregate;
  readonly pay_currency: Scalars['String']['output'];
  readonly prime: Scalars['String']['output'];
  readonly prime_identity_id?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  readonly proposals: ReadonlyArray<Proposal>;
  /** An aggregate relationship */
  readonly proposals_aggregate: Proposal_Aggregate;
  readonly repo: Scalars['String']['output'];
  readonly slug: Scalars['String']['output'];
  readonly state: Scalars['String']['output'];
  readonly tags: ReadonlyArray<Scalars['String']['output']>;
  readonly treasury: Scalars['String']['output'];
  readonly treasury_identity_id?: Maybe<Scalars['String']['output']>;
  readonly type: Scalars['String']['output'];
  readonly updated_at_block: Scalars['Int']['output'];
  readonly url: Scalars['String']['output'];
  readonly website: Scalars['String']['output'];
};


/** columns and relationships of "organization" */
export type OrganizationBattlepassesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Battlepass_Order_By>>;
  where?: InputMaybe<Battlepass_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationCampaignsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationCampaigns_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationOrganization_MembersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationOrganization_Members_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationProposalsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationProposals_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};

/** aggregated selection of "organization" */
export type Organization_Aggregate = {
  readonly __typename?: 'organization_aggregate';
  readonly aggregate?: Maybe<Organization_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Organization>;
};

export type Organization_Aggregate_Bool_Exp = {
  readonly count?: InputMaybe<Organization_Aggregate_Bool_Exp_Count>;
};

export type Organization_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<Organization_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']['input']>;
  readonly filter?: InputMaybe<Organization_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "organization" */
export type Organization_Aggregate_Fields = {
  readonly __typename?: 'organization_aggregate_fields';
  readonly avg?: Maybe<Organization_Avg_Fields>;
  readonly count: Scalars['Int']['output'];
  readonly max?: Maybe<Organization_Max_Fields>;
  readonly min?: Maybe<Organization_Min_Fields>;
  readonly stddev?: Maybe<Organization_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Organization_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Organization_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Organization_Sum_Fields>;
  readonly var_pop?: Maybe<Organization_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Organization_Var_Samp_Fields>;
  readonly variance?: Maybe<Organization_Variance_Fields>;
};


/** aggregate fields of "organization" */
export type Organization_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Organization_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "organization" */
export type Organization_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Organization_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Organization_Max_Order_By>;
  readonly min?: InputMaybe<Organization_Min_Order_By>;
  readonly stddev?: InputMaybe<Organization_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Organization_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Organization_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Organization_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Organization_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Organization_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Organization_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Organization_Avg_Fields = {
  readonly __typename?: 'organization_avg_fields';
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly member_limit?: Maybe<Scalars['Float']['output']>;
  readonly membership_fee?: Maybe<Scalars['Float']['output']>;
  readonly updated_at_block?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "organization" */
export type Organization_Avg_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly member_limit?: InputMaybe<Order_By>;
  readonly membership_fee?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Organization_Bool_Exp>>;
  readonly _not?: InputMaybe<Organization_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Organization_Bool_Exp>>;
  readonly access_model?: InputMaybe<String_Comparison_Exp>;
  readonly battlepasses?: InputMaybe<Battlepass_Bool_Exp>;
  readonly campaigns?: InputMaybe<Campaign_Bool_Exp>;
  readonly campaigns_aggregate?: InputMaybe<Campaign_Aggregate_Bool_Exp>;
  readonly cid?: InputMaybe<String_Comparison_Exp>;
  readonly created_at_block?: InputMaybe<Int_Comparison_Exp>;
  readonly creator?: InputMaybe<String_Comparison_Exp>;
  readonly creator_identity_id?: InputMaybe<String_Comparison_Exp>;
  readonly deposit?: InputMaybe<Numeric_Comparison_Exp>;
  readonly description?: InputMaybe<String_Comparison_Exp>;
  readonly email?: InputMaybe<String_Comparison_Exp>;
  readonly fee_model?: InputMaybe<String_Comparison_Exp>;
  readonly gov_currency?: InputMaybe<String_Comparison_Exp>;
  readonly header?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly identity?: InputMaybe<Identity_Bool_Exp>;
  readonly identityByCreatorIdentityId?: InputMaybe<Identity_Bool_Exp>;
  readonly identityByTreasuryIdentityId?: InputMaybe<Identity_Bool_Exp>;
  readonly location?: InputMaybe<String_Comparison_Exp>;
  readonly logo?: InputMaybe<String_Comparison_Exp>;
  readonly member_limit?: InputMaybe<Int_Comparison_Exp>;
  readonly membership_fee?: InputMaybe<Numeric_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly organization_members?: InputMaybe<Organization_Member_Bool_Exp>;
  readonly organization_members_aggregate?: InputMaybe<Organization_Member_Aggregate_Bool_Exp>;
  readonly pay_currency?: InputMaybe<String_Comparison_Exp>;
  readonly prime?: InputMaybe<String_Comparison_Exp>;
  readonly prime_identity_id?: InputMaybe<String_Comparison_Exp>;
  readonly proposals?: InputMaybe<Proposal_Bool_Exp>;
  readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>;
  readonly repo?: InputMaybe<String_Comparison_Exp>;
  readonly slug?: InputMaybe<String_Comparison_Exp>;
  readonly state?: InputMaybe<String_Comparison_Exp>;
  readonly tags?: InputMaybe<String_Array_Comparison_Exp>;
  readonly treasury?: InputMaybe<String_Comparison_Exp>;
  readonly treasury_identity_id?: InputMaybe<String_Comparison_Exp>;
  readonly type?: InputMaybe<String_Comparison_Exp>;
  readonly updated_at_block?: InputMaybe<Int_Comparison_Exp>;
  readonly url?: InputMaybe<String_Comparison_Exp>;
  readonly website?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Organization_Max_Fields = {
  readonly __typename?: 'organization_max_fields';
  readonly access_model?: Maybe<Scalars['String']['output']>;
  readonly cid?: Maybe<Scalars['String']['output']>;
  readonly created_at_block?: Maybe<Scalars['Int']['output']>;
  readonly creator?: Maybe<Scalars['String']['output']>;
  readonly creator_identity_id?: Maybe<Scalars['String']['output']>;
  readonly deposit?: Maybe<Scalars['numeric']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly fee_model?: Maybe<Scalars['String']['output']>;
  readonly gov_currency?: Maybe<Scalars['String']['output']>;
  readonly header?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly location?: Maybe<Scalars['String']['output']>;
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly member_limit?: Maybe<Scalars['Int']['output']>;
  readonly membership_fee?: Maybe<Scalars['numeric']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly pay_currency?: Maybe<Scalars['String']['output']>;
  readonly prime?: Maybe<Scalars['String']['output']>;
  readonly prime_identity_id?: Maybe<Scalars['String']['output']>;
  readonly repo?: Maybe<Scalars['String']['output']>;
  readonly slug?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly treasury?: Maybe<Scalars['String']['output']>;
  readonly treasury_identity_id?: Maybe<Scalars['String']['output']>;
  readonly type?: Maybe<Scalars['String']['output']>;
  readonly updated_at_block?: Maybe<Scalars['Int']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly website?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "organization" */
export type Organization_Max_Order_By = {
  readonly access_model?: InputMaybe<Order_By>;
  readonly cid?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly creator?: InputMaybe<Order_By>;
  readonly creator_identity_id?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly fee_model?: InputMaybe<Order_By>;
  readonly gov_currency?: InputMaybe<Order_By>;
  readonly header?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly location?: InputMaybe<Order_By>;
  readonly logo?: InputMaybe<Order_By>;
  readonly member_limit?: InputMaybe<Order_By>;
  readonly membership_fee?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly pay_currency?: InputMaybe<Order_By>;
  readonly prime?: InputMaybe<Order_By>;
  readonly prime_identity_id?: InputMaybe<Order_By>;
  readonly repo?: InputMaybe<Order_By>;
  readonly slug?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
  readonly tags?: InputMaybe<Order_By>;
  readonly treasury?: InputMaybe<Order_By>;
  readonly treasury_identity_id?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
  readonly url?: InputMaybe<Order_By>;
  readonly website?: InputMaybe<Order_By>;
};

/** columns and relationships of "organization_member" */
export type Organization_Member = {
  readonly __typename?: 'organization_member';
  readonly address: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  /** An object relationship */
  readonly identity?: Maybe<Identity>;
  readonly identity_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  readonly organization?: Maybe<Organization>;
  readonly organization_id?: Maybe<Scalars['String']['output']>;
  readonly state: Scalars['String']['output'];
};

/** aggregated selection of "organization_member" */
export type Organization_Member_Aggregate = {
  readonly __typename?: 'organization_member_aggregate';
  readonly aggregate?: Maybe<Organization_Member_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Organization_Member>;
};

export type Organization_Member_Aggregate_Bool_Exp = {
  readonly count?: InputMaybe<Organization_Member_Aggregate_Bool_Exp_Count>;
};

export type Organization_Member_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']['input']>;
  readonly filter?: InputMaybe<Organization_Member_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "organization_member" */
export type Organization_Member_Aggregate_Fields = {
  readonly __typename?: 'organization_member_aggregate_fields';
  readonly count: Scalars['Int']['output'];
  readonly max?: Maybe<Organization_Member_Max_Fields>;
  readonly min?: Maybe<Organization_Member_Min_Fields>;
};


/** aggregate fields of "organization_member" */
export type Organization_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "organization_member" */
export type Organization_Member_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Organization_Member_Max_Order_By>;
  readonly min?: InputMaybe<Organization_Member_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "organization_member". All fields are combined with a logical 'AND'. */
export type Organization_Member_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Organization_Member_Bool_Exp>>;
  readonly _not?: InputMaybe<Organization_Member_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Organization_Member_Bool_Exp>>;
  readonly address?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly identity?: InputMaybe<Identity_Bool_Exp>;
  readonly identity_id?: InputMaybe<String_Comparison_Exp>;
  readonly organization?: InputMaybe<Organization_Bool_Exp>;
  readonly organization_id?: InputMaybe<String_Comparison_Exp>;
  readonly state?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Organization_Member_Max_Fields = {
  readonly __typename?: 'organization_member_max_fields';
  readonly address?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly identity_id?: Maybe<Scalars['String']['output']>;
  readonly organization_id?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "organization_member" */
export type Organization_Member_Max_Order_By = {
  readonly address?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity_id?: InputMaybe<Order_By>;
  readonly organization_id?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Organization_Member_Min_Fields = {
  readonly __typename?: 'organization_member_min_fields';
  readonly address?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly identity_id?: Maybe<Scalars['String']['output']>;
  readonly organization_id?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "organization_member" */
export type Organization_Member_Min_Order_By = {
  readonly address?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity_id?: InputMaybe<Order_By>;
  readonly organization_id?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "organization_member". */
export type Organization_Member_Order_By = {
  readonly address?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity?: InputMaybe<Identity_Order_By>;
  readonly identity_id?: InputMaybe<Order_By>;
  readonly organization?: InputMaybe<Organization_Order_By>;
  readonly organization_id?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
};

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
  /** column name */
  State = 'state'
}

/** Streaming cursor of the table "organization_member" */
export type Organization_Member_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Organization_Member_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Member_Stream_Cursor_Value_Input = {
  readonly address?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly identity_id?: InputMaybe<Scalars['String']['input']>;
  readonly organization_id?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "organization_metadata" */
export type Organization_Metadata = {
  readonly __typename?: 'organization_metadata';
  readonly description: Scalars['String']['output'];
  readonly email: Scalars['String']['output'];
  readonly header: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly logo: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly repo: Scalars['String']['output'];
  readonly website: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "organization_metadata". All fields are combined with a logical 'AND'. */
export type Organization_Metadata_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Organization_Metadata_Bool_Exp>>;
  readonly _not?: InputMaybe<Organization_Metadata_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Organization_Metadata_Bool_Exp>>;
  readonly description?: InputMaybe<String_Comparison_Exp>;
  readonly email?: InputMaybe<String_Comparison_Exp>;
  readonly header?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly logo?: InputMaybe<String_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly repo?: InputMaybe<String_Comparison_Exp>;
  readonly website?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "organization_metadata". */
export type Organization_Metadata_Order_By = {
  readonly description?: InputMaybe<Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly header?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly logo?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly repo?: InputMaybe<Order_By>;
  readonly website?: InputMaybe<Order_By>;
};

/** select columns of table "organization_metadata" */
export enum Organization_Metadata_Select_Column {
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
  Name = 'name',
  /** column name */
  Repo = 'repo',
  /** column name */
  Website = 'website'
}

/** Streaming cursor of the table "organization_metadata" */
export type Organization_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Organization_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Metadata_Stream_Cursor_Value_Input = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly header?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly logo?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly repo?: InputMaybe<Scalars['String']['input']>;
  readonly website?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate min on columns */
export type Organization_Min_Fields = {
  readonly __typename?: 'organization_min_fields';
  readonly access_model?: Maybe<Scalars['String']['output']>;
  readonly cid?: Maybe<Scalars['String']['output']>;
  readonly created_at_block?: Maybe<Scalars['Int']['output']>;
  readonly creator?: Maybe<Scalars['String']['output']>;
  readonly creator_identity_id?: Maybe<Scalars['String']['output']>;
  readonly deposit?: Maybe<Scalars['numeric']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly fee_model?: Maybe<Scalars['String']['output']>;
  readonly gov_currency?: Maybe<Scalars['String']['output']>;
  readonly header?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly location?: Maybe<Scalars['String']['output']>;
  readonly logo?: Maybe<Scalars['String']['output']>;
  readonly member_limit?: Maybe<Scalars['Int']['output']>;
  readonly membership_fee?: Maybe<Scalars['numeric']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly pay_currency?: Maybe<Scalars['String']['output']>;
  readonly prime?: Maybe<Scalars['String']['output']>;
  readonly prime_identity_id?: Maybe<Scalars['String']['output']>;
  readonly repo?: Maybe<Scalars['String']['output']>;
  readonly slug?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly treasury?: Maybe<Scalars['String']['output']>;
  readonly treasury_identity_id?: Maybe<Scalars['String']['output']>;
  readonly type?: Maybe<Scalars['String']['output']>;
  readonly updated_at_block?: Maybe<Scalars['Int']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly website?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "organization" */
export type Organization_Min_Order_By = {
  readonly access_model?: InputMaybe<Order_By>;
  readonly cid?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly creator?: InputMaybe<Order_By>;
  readonly creator_identity_id?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly fee_model?: InputMaybe<Order_By>;
  readonly gov_currency?: InputMaybe<Order_By>;
  readonly header?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly location?: InputMaybe<Order_By>;
  readonly logo?: InputMaybe<Order_By>;
  readonly member_limit?: InputMaybe<Order_By>;
  readonly membership_fee?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly pay_currency?: InputMaybe<Order_By>;
  readonly prime?: InputMaybe<Order_By>;
  readonly prime_identity_id?: InputMaybe<Order_By>;
  readonly repo?: InputMaybe<Order_By>;
  readonly slug?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
  readonly tags?: InputMaybe<Order_By>;
  readonly treasury?: InputMaybe<Order_By>;
  readonly treasury_identity_id?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
  readonly url?: InputMaybe<Order_By>;
  readonly website?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "organization". */
export type Organization_Order_By = {
  readonly access_model?: InputMaybe<Order_By>;
  readonly battlepasses_aggregate?: InputMaybe<Battlepass_Aggregate_Order_By>;
  readonly campaigns_aggregate?: InputMaybe<Campaign_Aggregate_Order_By>;
  readonly cid?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly creator?: InputMaybe<Order_By>;
  readonly creator_identity_id?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly fee_model?: InputMaybe<Order_By>;
  readonly gov_currency?: InputMaybe<Order_By>;
  readonly header?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity?: InputMaybe<Identity_Order_By>;
  readonly identityByCreatorIdentityId?: InputMaybe<Identity_Order_By>;
  readonly identityByTreasuryIdentityId?: InputMaybe<Identity_Order_By>;
  readonly location?: InputMaybe<Order_By>;
  readonly logo?: InputMaybe<Order_By>;
  readonly member_limit?: InputMaybe<Order_By>;
  readonly membership_fee?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly organization_members_aggregate?: InputMaybe<Organization_Member_Aggregate_Order_By>;
  readonly pay_currency?: InputMaybe<Order_By>;
  readonly prime?: InputMaybe<Order_By>;
  readonly prime_identity_id?: InputMaybe<Order_By>;
  readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>;
  readonly repo?: InputMaybe<Order_By>;
  readonly slug?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
  readonly tags?: InputMaybe<Order_By>;
  readonly treasury?: InputMaybe<Order_By>;
  readonly treasury_identity_id?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
  readonly url?: InputMaybe<Order_By>;
  readonly website?: InputMaybe<Order_By>;
};

/** select columns of table "organization" */
export enum Organization_Select_Column {
  /** column name */
  AccessModel = 'access_model',
  /** column name */
  Cid = 'cid',
  /** column name */
  CreatedAtBlock = 'created_at_block',
  /** column name */
  Creator = 'creator',
  /** column name */
  CreatorIdentityId = 'creator_identity_id',
  /** column name */
  Deposit = 'deposit',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  FeeModel = 'fee_model',
  /** column name */
  GovCurrency = 'gov_currency',
  /** column name */
  Header = 'header',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Logo = 'logo',
  /** column name */
  MemberLimit = 'member_limit',
  /** column name */
  MembershipFee = 'membership_fee',
  /** column name */
  Name = 'name',
  /** column name */
  PayCurrency = 'pay_currency',
  /** column name */
  Prime = 'prime',
  /** column name */
  PrimeIdentityId = 'prime_identity_id',
  /** column name */
  Repo = 'repo',
  /** column name */
  Slug = 'slug',
  /** column name */
  State = 'state',
  /** column name */
  Tags = 'tags',
  /** column name */
  Treasury = 'treasury',
  /** column name */
  TreasuryIdentityId = 'treasury_identity_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAtBlock = 'updated_at_block',
  /** column name */
  Url = 'url',
  /** column name */
  Website = 'website'
}

/** aggregate stddev on columns */
export type Organization_Stddev_Fields = {
  readonly __typename?: 'organization_stddev_fields';
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly member_limit?: Maybe<Scalars['Float']['output']>;
  readonly membership_fee?: Maybe<Scalars['Float']['output']>;
  readonly updated_at_block?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "organization" */
export type Organization_Stddev_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly member_limit?: InputMaybe<Order_By>;
  readonly membership_fee?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organization_Stddev_Pop_Fields = {
  readonly __typename?: 'organization_stddev_pop_fields';
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly member_limit?: Maybe<Scalars['Float']['output']>;
  readonly membership_fee?: Maybe<Scalars['Float']['output']>;
  readonly updated_at_block?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "organization" */
export type Organization_Stddev_Pop_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly member_limit?: InputMaybe<Order_By>;
  readonly membership_fee?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organization_Stddev_Samp_Fields = {
  readonly __typename?: 'organization_stddev_samp_fields';
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly member_limit?: Maybe<Scalars['Float']['output']>;
  readonly membership_fee?: Maybe<Scalars['Float']['output']>;
  readonly updated_at_block?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "organization" */
export type Organization_Stddev_Samp_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly member_limit?: InputMaybe<Order_By>;
  readonly membership_fee?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "organization" */
export type Organization_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Organization_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Stream_Cursor_Value_Input = {
  readonly access_model?: InputMaybe<Scalars['String']['input']>;
  readonly cid?: InputMaybe<Scalars['String']['input']>;
  readonly created_at_block?: InputMaybe<Scalars['Int']['input']>;
  readonly creator?: InputMaybe<Scalars['String']['input']>;
  readonly creator_identity_id?: InputMaybe<Scalars['String']['input']>;
  readonly deposit?: InputMaybe<Scalars['numeric']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly fee_model?: InputMaybe<Scalars['String']['input']>;
  readonly gov_currency?: InputMaybe<Scalars['String']['input']>;
  readonly header?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly location?: InputMaybe<Scalars['String']['input']>;
  readonly logo?: InputMaybe<Scalars['String']['input']>;
  readonly member_limit?: InputMaybe<Scalars['Int']['input']>;
  readonly membership_fee?: InputMaybe<Scalars['numeric']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly pay_currency?: InputMaybe<Scalars['String']['input']>;
  readonly prime?: InputMaybe<Scalars['String']['input']>;
  readonly prime_identity_id?: InputMaybe<Scalars['String']['input']>;
  readonly repo?: InputMaybe<Scalars['String']['input']>;
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<Scalars['String']['input']>;
  readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly treasury?: InputMaybe<Scalars['String']['input']>;
  readonly treasury_identity_id?: InputMaybe<Scalars['String']['input']>;
  readonly type?: InputMaybe<Scalars['String']['input']>;
  readonly updated_at_block?: InputMaybe<Scalars['Int']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
  readonly website?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Organization_Sum_Fields = {
  readonly __typename?: 'organization_sum_fields';
  readonly created_at_block?: Maybe<Scalars['Int']['output']>;
  readonly deposit?: Maybe<Scalars['numeric']['output']>;
  readonly member_limit?: Maybe<Scalars['Int']['output']>;
  readonly membership_fee?: Maybe<Scalars['numeric']['output']>;
  readonly updated_at_block?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "organization" */
export type Organization_Sum_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly member_limit?: InputMaybe<Order_By>;
  readonly membership_fee?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Organization_Var_Pop_Fields = {
  readonly __typename?: 'organization_var_pop_fields';
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly member_limit?: Maybe<Scalars['Float']['output']>;
  readonly membership_fee?: Maybe<Scalars['Float']['output']>;
  readonly updated_at_block?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "organization" */
export type Organization_Var_Pop_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly member_limit?: InputMaybe<Order_By>;
  readonly membership_fee?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organization_Var_Samp_Fields = {
  readonly __typename?: 'organization_var_samp_fields';
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly member_limit?: Maybe<Scalars['Float']['output']>;
  readonly membership_fee?: Maybe<Scalars['Float']['output']>;
  readonly updated_at_block?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "organization" */
export type Organization_Var_Samp_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly member_limit?: InputMaybe<Order_By>;
  readonly membership_fee?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Organization_Variance_Fields = {
  readonly __typename?: 'organization_variance_fields';
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly member_limit?: Maybe<Scalars['Float']['output']>;
  readonly membership_fee?: Maybe<Scalars['Float']['output']>;
  readonly updated_at_block?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "organization" */
export type Organization_Variance_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly member_limit?: InputMaybe<Order_By>;
  readonly membership_fee?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal" */
export type Proposal = {
  readonly __typename?: 'proposal';
  readonly amount?: Maybe<Scalars['numeric']['output']>;
  readonly beneficiary?: Maybe<Scalars['String']['output']>;
  readonly beneficiary_identity_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  readonly campaign?: Maybe<Campaign>;
  readonly campaign_id?: Maybe<Scalars['String']['output']>;
  readonly cid: Scalars['String']['output'];
  readonly created_at_block: Scalars['Int']['output'];
  readonly creator: Scalars['String']['output'];
  readonly creator_identity_id?: Maybe<Scalars['String']['output']>;
  readonly currency_id?: Maybe<Scalars['String']['output']>;
  readonly deposit: Scalars['numeric']['output'];
  readonly description: Scalars['String']['output'];
  readonly expiry: Scalars['Int']['output'];
  readonly id: Scalars['String']['output'];
  /** An object relationship */
  readonly identity?: Maybe<Identity>;
  /** An object relationship */
  readonly identityByBeneficiaryIdentityId?: Maybe<Identity>;
  readonly name: Scalars['String']['output'];
  /** An object relationship */
  readonly organization?: Maybe<Organization>;
  readonly organization_id?: Maybe<Scalars['String']['output']>;
  readonly slashing_rule?: Maybe<Scalars['String']['output']>;
  readonly start: Scalars['Int']['output'];
  readonly state: Scalars['String']['output'];
  readonly type: Scalars['String']['output'];
  /** An object relationship */
  readonly voting?: Maybe<Voting>;
  readonly voting_id?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "proposal" */
export type Proposal_Aggregate = {
  readonly __typename?: 'proposal_aggregate';
  readonly aggregate?: Maybe<Proposal_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Proposal>;
};

export type Proposal_Aggregate_Bool_Exp = {
  readonly count?: InputMaybe<Proposal_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']['input']>;
  readonly filter?: InputMaybe<Proposal_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal" */
export type Proposal_Aggregate_Fields = {
  readonly __typename?: 'proposal_aggregate_fields';
  readonly avg?: Maybe<Proposal_Avg_Fields>;
  readonly count: Scalars['Int']['output'];
  readonly max?: Maybe<Proposal_Max_Fields>;
  readonly min?: Maybe<Proposal_Min_Fields>;
  readonly stddev?: Maybe<Proposal_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Proposal_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Proposal_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Proposal_Sum_Fields>;
  readonly var_pop?: Maybe<Proposal_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Proposal_Var_Samp_Fields>;
  readonly variance?: Maybe<Proposal_Variance_Fields>;
};


/** aggregate fields of "proposal" */
export type Proposal_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "proposal" */
export type Proposal_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Proposal_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Proposal_Max_Order_By>;
  readonly min?: InputMaybe<Proposal_Min_Order_By>;
  readonly stddev?: InputMaybe<Proposal_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Proposal_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Proposal_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Proposal_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Proposal_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Proposal_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Proposal_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Proposal_Avg_Fields = {
  readonly __typename?: 'proposal_avg_fields';
  readonly amount?: Maybe<Scalars['Float']['output']>;
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly expiry?: Maybe<Scalars['Float']['output']>;
  readonly start?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "proposal" */
export type Proposal_Avg_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal". All fields are combined with a logical 'AND'. */
export type Proposal_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Proposal_Bool_Exp>>;
  readonly _not?: InputMaybe<Proposal_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Proposal_Bool_Exp>>;
  readonly amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly beneficiary?: InputMaybe<String_Comparison_Exp>;
  readonly beneficiary_identity_id?: InputMaybe<String_Comparison_Exp>;
  readonly campaign?: InputMaybe<Campaign_Bool_Exp>;
  readonly campaign_id?: InputMaybe<String_Comparison_Exp>;
  readonly cid?: InputMaybe<String_Comparison_Exp>;
  readonly created_at_block?: InputMaybe<Int_Comparison_Exp>;
  readonly creator?: InputMaybe<String_Comparison_Exp>;
  readonly creator_identity_id?: InputMaybe<String_Comparison_Exp>;
  readonly currency_id?: InputMaybe<String_Comparison_Exp>;
  readonly deposit?: InputMaybe<Numeric_Comparison_Exp>;
  readonly description?: InputMaybe<String_Comparison_Exp>;
  readonly expiry?: InputMaybe<Int_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly identity?: InputMaybe<Identity_Bool_Exp>;
  readonly identityByBeneficiaryIdentityId?: InputMaybe<Identity_Bool_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly organization?: InputMaybe<Organization_Bool_Exp>;
  readonly organization_id?: InputMaybe<String_Comparison_Exp>;
  readonly slashing_rule?: InputMaybe<String_Comparison_Exp>;
  readonly start?: InputMaybe<Int_Comparison_Exp>;
  readonly state?: InputMaybe<String_Comparison_Exp>;
  readonly type?: InputMaybe<String_Comparison_Exp>;
  readonly voting?: InputMaybe<Voting_Bool_Exp>;
  readonly voting_id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Proposal_Max_Fields = {
  readonly __typename?: 'proposal_max_fields';
  readonly amount?: Maybe<Scalars['numeric']['output']>;
  readonly beneficiary?: Maybe<Scalars['String']['output']>;
  readonly beneficiary_identity_id?: Maybe<Scalars['String']['output']>;
  readonly campaign_id?: Maybe<Scalars['String']['output']>;
  readonly cid?: Maybe<Scalars['String']['output']>;
  readonly created_at_block?: Maybe<Scalars['Int']['output']>;
  readonly creator?: Maybe<Scalars['String']['output']>;
  readonly creator_identity_id?: Maybe<Scalars['String']['output']>;
  readonly currency_id?: Maybe<Scalars['String']['output']>;
  readonly deposit?: Maybe<Scalars['numeric']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly expiry?: Maybe<Scalars['Int']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly organization_id?: Maybe<Scalars['String']['output']>;
  readonly slashing_rule?: Maybe<Scalars['String']['output']>;
  readonly start?: Maybe<Scalars['Int']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly type?: Maybe<Scalars['String']['output']>;
  readonly voting_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "proposal" */
export type Proposal_Max_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly beneficiary?: InputMaybe<Order_By>;
  readonly beneficiary_identity_id?: InputMaybe<Order_By>;
  readonly campaign_id?: InputMaybe<Order_By>;
  readonly cid?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly creator?: InputMaybe<Order_By>;
  readonly creator_identity_id?: InputMaybe<Order_By>;
  readonly currency_id?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly organization_id?: InputMaybe<Order_By>;
  readonly slashing_rule?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly voting_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_metadata" */
export type Proposal_Metadata = {
  readonly __typename?: 'proposal_metadata';
  readonly description: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "proposal_metadata". All fields are combined with a logical 'AND'. */
export type Proposal_Metadata_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Proposal_Metadata_Bool_Exp>>;
  readonly _not?: InputMaybe<Proposal_Metadata_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Proposal_Metadata_Bool_Exp>>;
  readonly description?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "proposal_metadata". */
export type Proposal_Metadata_Order_By = {
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_metadata" */
export enum Proposal_Metadata_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "proposal_metadata" */
export type Proposal_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Proposal_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Metadata_Stream_Cursor_Value_Input = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate min on columns */
export type Proposal_Min_Fields = {
  readonly __typename?: 'proposal_min_fields';
  readonly amount?: Maybe<Scalars['numeric']['output']>;
  readonly beneficiary?: Maybe<Scalars['String']['output']>;
  readonly beneficiary_identity_id?: Maybe<Scalars['String']['output']>;
  readonly campaign_id?: Maybe<Scalars['String']['output']>;
  readonly cid?: Maybe<Scalars['String']['output']>;
  readonly created_at_block?: Maybe<Scalars['Int']['output']>;
  readonly creator?: Maybe<Scalars['String']['output']>;
  readonly creator_identity_id?: Maybe<Scalars['String']['output']>;
  readonly currency_id?: Maybe<Scalars['String']['output']>;
  readonly deposit?: Maybe<Scalars['numeric']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly expiry?: Maybe<Scalars['Int']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly organization_id?: Maybe<Scalars['String']['output']>;
  readonly slashing_rule?: Maybe<Scalars['String']['output']>;
  readonly start?: Maybe<Scalars['Int']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly type?: Maybe<Scalars['String']['output']>;
  readonly voting_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "proposal" */
export type Proposal_Min_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly beneficiary?: InputMaybe<Order_By>;
  readonly beneficiary_identity_id?: InputMaybe<Order_By>;
  readonly campaign_id?: InputMaybe<Order_By>;
  readonly cid?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly creator?: InputMaybe<Order_By>;
  readonly creator_identity_id?: InputMaybe<Order_By>;
  readonly currency_id?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly organization_id?: InputMaybe<Order_By>;
  readonly slashing_rule?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly voting_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal". */
export type Proposal_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly beneficiary?: InputMaybe<Order_By>;
  readonly beneficiary_identity_id?: InputMaybe<Order_By>;
  readonly campaign?: InputMaybe<Campaign_Order_By>;
  readonly campaign_id?: InputMaybe<Order_By>;
  readonly cid?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly creator?: InputMaybe<Order_By>;
  readonly creator_identity_id?: InputMaybe<Order_By>;
  readonly currency_id?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity?: InputMaybe<Identity_Order_By>;
  readonly identityByBeneficiaryIdentityId?: InputMaybe<Identity_Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly organization?: InputMaybe<Organization_Order_By>;
  readonly organization_id?: InputMaybe<Order_By>;
  readonly slashing_rule?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
  readonly state?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly voting?: InputMaybe<Voting_Order_By>;
  readonly voting_id?: InputMaybe<Order_By>;
};

/** select columns of table "proposal" */
export enum Proposal_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Beneficiary = 'beneficiary',
  /** column name */
  BeneficiaryIdentityId = 'beneficiary_identity_id',
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  Cid = 'cid',
  /** column name */
  CreatedAtBlock = 'created_at_block',
  /** column name */
  Creator = 'creator',
  /** column name */
  CreatorIdentityId = 'creator_identity_id',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Deposit = 'deposit',
  /** column name */
  Description = 'description',
  /** column name */
  Expiry = 'expiry',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  SlashingRule = 'slashing_rule',
  /** column name */
  Start = 'start',
  /** column name */
  State = 'state',
  /** column name */
  Type = 'type',
  /** column name */
  VotingId = 'voting_id'
}

/** aggregate stddev on columns */
export type Proposal_Stddev_Fields = {
  readonly __typename?: 'proposal_stddev_fields';
  readonly amount?: Maybe<Scalars['Float']['output']>;
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly expiry?: Maybe<Scalars['Float']['output']>;
  readonly start?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "proposal" */
export type Proposal_Stddev_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Stddev_Pop_Fields = {
  readonly __typename?: 'proposal_stddev_pop_fields';
  readonly amount?: Maybe<Scalars['Float']['output']>;
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly expiry?: Maybe<Scalars['Float']['output']>;
  readonly start?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "proposal" */
export type Proposal_Stddev_Pop_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Stddev_Samp_Fields = {
  readonly __typename?: 'proposal_stddev_samp_fields';
  readonly amount?: Maybe<Scalars['Float']['output']>;
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly expiry?: Maybe<Scalars['Float']['output']>;
  readonly start?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "proposal" */
export type Proposal_Stddev_Samp_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal" */
export type Proposal_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Proposal_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Stream_Cursor_Value_Input = {
  readonly amount?: InputMaybe<Scalars['numeric']['input']>;
  readonly beneficiary?: InputMaybe<Scalars['String']['input']>;
  readonly beneficiary_identity_id?: InputMaybe<Scalars['String']['input']>;
  readonly campaign_id?: InputMaybe<Scalars['String']['input']>;
  readonly cid?: InputMaybe<Scalars['String']['input']>;
  readonly created_at_block?: InputMaybe<Scalars['Int']['input']>;
  readonly creator?: InputMaybe<Scalars['String']['input']>;
  readonly creator_identity_id?: InputMaybe<Scalars['String']['input']>;
  readonly currency_id?: InputMaybe<Scalars['String']['input']>;
  readonly deposit?: InputMaybe<Scalars['numeric']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly expiry?: InputMaybe<Scalars['Int']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly organization_id?: InputMaybe<Scalars['String']['input']>;
  readonly slashing_rule?: InputMaybe<Scalars['String']['input']>;
  readonly start?: InputMaybe<Scalars['Int']['input']>;
  readonly state?: InputMaybe<Scalars['String']['input']>;
  readonly type?: InputMaybe<Scalars['String']['input']>;
  readonly voting_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Proposal_Sum_Fields = {
  readonly __typename?: 'proposal_sum_fields';
  readonly amount?: Maybe<Scalars['numeric']['output']>;
  readonly created_at_block?: Maybe<Scalars['Int']['output']>;
  readonly deposit?: Maybe<Scalars['numeric']['output']>;
  readonly expiry?: Maybe<Scalars['Int']['output']>;
  readonly start?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "proposal" */
export type Proposal_Sum_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proposal_Var_Pop_Fields = {
  readonly __typename?: 'proposal_var_pop_fields';
  readonly amount?: Maybe<Scalars['Float']['output']>;
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly expiry?: Maybe<Scalars['Float']['output']>;
  readonly start?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "proposal" */
export type Proposal_Var_Pop_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Var_Samp_Fields = {
  readonly __typename?: 'proposal_var_samp_fields';
  readonly amount?: Maybe<Scalars['Float']['output']>;
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly expiry?: Maybe<Scalars['Float']['output']>;
  readonly start?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "proposal" */
export type Proposal_Var_Samp_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Variance_Fields = {
  readonly __typename?: 'proposal_variance_fields';
  readonly amount?: Maybe<Scalars['Float']['output']>;
  readonly created_at_block?: Maybe<Scalars['Float']['output']>;
  readonly deposit?: Maybe<Scalars['Float']['output']>;
  readonly expiry?: Maybe<Scalars['Float']['output']>;
  readonly start?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "proposal" */
export type Proposal_Variance_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly deposit?: InputMaybe<Order_By>;
  readonly expiry?: InputMaybe<Order_By>;
  readonly start?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_voter" */
export type Proposal_Voter = {
  readonly __typename?: 'proposal_voter';
  readonly address: Scalars['String']['output'];
  readonly amount?: Maybe<Scalars['numeric']['output']>;
  readonly id: Scalars['String']['output'];
  /** An object relationship */
  readonly identity?: Maybe<Identity>;
  readonly identity_id?: Maybe<Scalars['String']['output']>;
  readonly power: Scalars['numeric']['output'];
  readonly voted: Scalars['Boolean']['output'];
  /** An object relationship */
  readonly voting?: Maybe<Voting>;
  readonly voting_id?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "proposal_voter" */
export type Proposal_Voter_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Proposal_Voter_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Proposal_Voter_Max_Order_By>;
  readonly min?: InputMaybe<Proposal_Voter_Min_Order_By>;
  readonly stddev?: InputMaybe<Proposal_Voter_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Proposal_Voter_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Proposal_Voter_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Proposal_Voter_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Proposal_Voter_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Proposal_Voter_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Proposal_Voter_Variance_Order_By>;
};

/** order by avg() on columns of table "proposal_voter" */
export type Proposal_Voter_Avg_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_voter". All fields are combined with a logical 'AND'. */
export type Proposal_Voter_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Proposal_Voter_Bool_Exp>>;
  readonly _not?: InputMaybe<Proposal_Voter_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Proposal_Voter_Bool_Exp>>;
  readonly address?: InputMaybe<String_Comparison_Exp>;
  readonly amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly identity?: InputMaybe<Identity_Bool_Exp>;
  readonly identity_id?: InputMaybe<String_Comparison_Exp>;
  readonly power?: InputMaybe<Numeric_Comparison_Exp>;
  readonly voted?: InputMaybe<Boolean_Comparison_Exp>;
  readonly voting?: InputMaybe<Voting_Bool_Exp>;
  readonly voting_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "proposal_voter" */
export type Proposal_Voter_Max_Order_By = {
  readonly address?: InputMaybe<Order_By>;
  readonly amount?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity_id?: InputMaybe<Order_By>;
  readonly power?: InputMaybe<Order_By>;
  readonly voting_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "proposal_voter" */
export type Proposal_Voter_Min_Order_By = {
  readonly address?: InputMaybe<Order_By>;
  readonly amount?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity_id?: InputMaybe<Order_By>;
  readonly power?: InputMaybe<Order_By>;
  readonly voting_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_voter". */
export type Proposal_Voter_Order_By = {
  readonly address?: InputMaybe<Order_By>;
  readonly amount?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity?: InputMaybe<Identity_Order_By>;
  readonly identity_id?: InputMaybe<Order_By>;
  readonly power?: InputMaybe<Order_By>;
  readonly voted?: InputMaybe<Order_By>;
  readonly voting?: InputMaybe<Voting_Order_By>;
  readonly voting_id?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_voter" */
export enum Proposal_Voter_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id',
  /** column name */
  IdentityId = 'identity_id',
  /** column name */
  Power = 'power',
  /** column name */
  Voted = 'voted',
  /** column name */
  VotingId = 'voting_id'
}

/** order by stddev() on columns of table "proposal_voter" */
export type Proposal_Voter_Stddev_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly power?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "proposal_voter" */
export type Proposal_Voter_Stddev_Pop_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly power?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "proposal_voter" */
export type Proposal_Voter_Stddev_Samp_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_voter" */
export type Proposal_Voter_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Proposal_Voter_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Voter_Stream_Cursor_Value_Input = {
  readonly address?: InputMaybe<Scalars['String']['input']>;
  readonly amount?: InputMaybe<Scalars['numeric']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly identity_id?: InputMaybe<Scalars['String']['input']>;
  readonly power?: InputMaybe<Scalars['numeric']['input']>;
  readonly voted?: InputMaybe<Scalars['Boolean']['input']>;
  readonly voting_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "proposal_voter" */
export type Proposal_Voter_Sum_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly power?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "proposal_voter" */
export type Proposal_Voter_Var_Pop_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly power?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "proposal_voter" */
export type Proposal_Voter_Var_Samp_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly power?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "proposal_voter" */
export type Proposal_Voter_Variance_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly power?: InputMaybe<Order_By>;
};

export type Query_Root = {
  readonly __typename?: 'query_root';
  /** fetch data from the table: "account_balance" */
  readonly account_balance: ReadonlyArray<Account_Balance>;
  /** fetch data from the table: "account_balance" using primary key columns */
  readonly account_balance_by_pk?: Maybe<Account_Balance>;
  readonly apiProvider: ApiProvider;
  /** fetch data from the table: "squid_processor.status" */
  readonly astar_indexer_status: ReadonlyArray<Astar_Indexer_Status>;
  /** fetch data from the table: "squid_processor.status" using primary key columns */
  readonly astar_indexer_status_by_pk?: Maybe<Astar_Indexer_Status>;
  /** fetch data from the table: "Balance" */
  readonly balance: ReadonlyArray<Balance>;
  /** fetch data from the table: "Balance" using primary key columns */
  readonly balance_by_pk?: Maybe<Balance>;
  /** fetch data from the table: "battlepass" */
  readonly battlepass: ReadonlyArray<Battlepass>;
  /** fetch data from the table: "battlepass" using primary key columns */
  readonly battlepass_by_pk?: Maybe<Battlepass>;
  /** fetch data from the table: "battlepass_nft" */
  readonly battlepass_nft: ReadonlyArray<Battlepass_Nft>;
  /** fetch data from the table: "battlepass_nft" using primary key columns */
  readonly battlepass_nft_by_pk?: Maybe<Battlepass_Nft>;
  /** fetch data from the table: "burn" */
  readonly burn: ReadonlyArray<Burn>;
  /** fetch data from the table: "burn" using primary key columns */
  readonly burn_by_pk?: Maybe<Burn>;
  /** fetch data from the table: "campaign" */
  readonly campaign: ReadonlyArray<Campaign>;
  /** fetch aggregated fields from the table: "campaign" */
  readonly campaign_aggregate: Campaign_Aggregate;
  /** fetch data from the table: "campaign" using primary key columns */
  readonly campaign_by_pk?: Maybe<Campaign>;
  /** fetch data from the table: "campaign_contributor" */
  readonly campaign_contributor: ReadonlyArray<Campaign_Contributor>;
  /** fetch data from the table: "campaign_contributor" using primary key columns */
  readonly campaign_contributor_by_pk?: Maybe<Campaign_Contributor>;
  /** fetch data from the table: "campaign_metadata" */
  readonly campaign_metadata: ReadonlyArray<Campaign_Metadata>;
  /** fetch data from the table: "campaign_metadata" using primary key columns */
  readonly campaign_metadata_by_pk?: Maybe<Campaign_Metadata>;
  /** fetch data from the table: "ChainInfo" */
  readonly chain_info: ReadonlyArray<Chain_Info>;
  /** fetch data from the table: "ChainInfo" using primary key columns */
  readonly chain_info_by_pk?: Maybe<Chain_Info>;
  /** fetch data from the table: "chain_state" */
  readonly chain_state: ReadonlyArray<Chain_State>;
  /** fetch data from the table: "chain_state" using primary key columns */
  readonly chain_state_by_pk?: Maybe<Chain_State>;
  readonly config: Config;
  /** fetch data from the table: "current_chain_state" */
  readonly current_chain_state: ReadonlyArray<Current_Chain_State>;
  /** fetch data from the table: "current_chain_state" using primary key columns */
  readonly current_chain_state_by_pk?: Maybe<Current_Chain_State>;
  /** Astar dApp Staking Content */
  readonly dAppContent?: Maybe<ReadonlyArray<Maybe<DAppContent>>>;
  /** fetch data from the table: "dapp" */
  readonly dapp: ReadonlyArray<Dapp>;
  /** fetch data from the table: "dapp_aggregated_daily" */
  readonly dapp_aggregated_daily: ReadonlyArray<Dapp_Aggregated_Daily>;
  /** fetch data from the table: "dapp_aggregated_daily" using primary key columns */
  readonly dapp_aggregated_daily_by_pk?: Maybe<Dapp_Aggregated_Daily>;
  /** fetch data from the table: "dapp" using primary key columns */
  readonly dapp_by_pk?: Maybe<Dapp>;
  readonly displayValues?: Maybe<DisplayValues>;
  readonly features: Features;
  /** fetch data from the table: "squid_processor.status" */
  readonly gamedao_indexer_status: ReadonlyArray<Gamedao_Indexer_Status>;
  /** fetch data from the table: "squid_processor.status" using primary key columns */
  readonly gamedao_indexer_status_by_pk?: Maybe<Gamedao_Indexer_Status>;
  /** fetch data from the table: "migrations" */
  readonly gamedao_squid_migrations: ReadonlyArray<Gamedao_Squid_Migrations>;
  /** fetch data from the table: "migrations" using primary key columns */
  readonly gamedao_squid_migrations_by_pk?: Maybe<Gamedao_Squid_Migrations>;
  /** fetch data from the table: "grouped_staking_event" */
  readonly grouped_staking_event: ReadonlyArray<Grouped_Staking_Event>;
  /** fetch data from the table: "grouped_staking_event" using primary key columns */
  readonly grouped_staking_event_by_pk?: Maybe<Grouped_Staking_Event>;
  /** fetch data from the table: "historical_balance" */
  readonly historical_balance: ReadonlyArray<Historical_Balance>;
  /** fetch data from the table: "historical_balance" using primary key columns */
  readonly historical_balance_by_pk?: Maybe<Historical_Balance>;
  /** fetch data from the table: "identity" */
  readonly identity: ReadonlyArray<Identity>;
  /** fetch data from the table: "identity" using primary key columns */
  readonly identity_by_pk?: Maybe<Identity>;
  readonly links: ReadonlyArray<Maybe<Link>>;
  /** fetch data from the table: "migrations" */
  readonly migrations: ReadonlyArray<Migrations>;
  /** fetch data from the table: "migrations" using primary key columns */
  readonly migrations_by_pk?: Maybe<Migrations>;
  /** fetch data from the table: "nft" */
  readonly nft: ReadonlyArray<Nft>;
  /** fetch data from the table: "nft" using primary key columns */
  readonly nft_by_pk?: Maybe<Nft>;
  /** fetch data from the table: "nft_collection" */
  readonly nft_collection: ReadonlyArray<Nft_Collection>;
  /** fetch data from the table: "nft_collection" using primary key columns */
  readonly nft_collection_by_pk?: Maybe<Nft_Collection>;
  /** fetch data from the table: "organization" */
  readonly organization: ReadonlyArray<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  readonly organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  readonly organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "organization_member" */
  readonly organization_member: ReadonlyArray<Organization_Member>;
  /** fetch aggregated fields from the table: "organization_member" */
  readonly organization_member_aggregate: Organization_Member_Aggregate;
  /** fetch data from the table: "organization_member" using primary key columns */
  readonly organization_member_by_pk?: Maybe<Organization_Member>;
  /** fetch data from the table: "organization_metadata" */
  readonly organization_metadata: ReadonlyArray<Organization_Metadata>;
  /** fetch data from the table: "organization_metadata" using primary key columns */
  readonly organization_metadata_by_pk?: Maybe<Organization_Metadata>;
  /** fetch data from the table: "proposal" */
  readonly proposal: ReadonlyArray<Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  readonly proposal_aggregate: Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  readonly proposal_by_pk?: Maybe<Proposal>;
  /** fetch data from the table: "proposal_metadata" */
  readonly proposal_metadata: ReadonlyArray<Proposal_Metadata>;
  /** fetch data from the table: "proposal_metadata" using primary key columns */
  readonly proposal_metadata_by_pk?: Maybe<Proposal_Metadata>;
  /** fetch data from the table: "proposal_voter" */
  readonly proposal_voter: ReadonlyArray<Proposal_Voter>;
  /** fetch data from the table: "proposal_voter" using primary key columns */
  readonly proposal_voter_by_pk?: Maybe<Proposal_Voter>;
  /** fetch data from the table: "reward_aggregated_daily" */
  readonly reward_aggregated_daily: ReadonlyArray<Reward_Aggregated_Daily>;
  /** fetch data from the table: "reward_aggregated_daily" using primary key columns */
  readonly reward_aggregated_daily_by_pk?: Maybe<Reward_Aggregated_Daily>;
  /** fetch data from the table: "reward_event" */
  readonly reward_event: ReadonlyArray<Reward_Event>;
  /** fetch data from the table: "reward_event" using primary key columns */
  readonly reward_event_by_pk?: Maybe<Reward_Event>;
  readonly rmrkNfts?: Maybe<ReadonlyArray<Maybe<RmrkNft>>>;
  /** fetch data from the table: "sense_entity" */
  readonly sense_entity: ReadonlyArray<Sense_Entity>;
  /** fetch data from the table: "sense_entity" using primary key columns */
  readonly sense_entity_by_pk?: Maybe<Sense_Entity>;
  /** fetch data from the table: "Session" */
  readonly session: ReadonlyArray<Session>;
  /** fetch data from the table: "Session" using primary key columns */
  readonly session_by_pk?: Maybe<Session>;
  /** fetch data from the table: "stake" */
  readonly stake: ReadonlyArray<Stake>;
  /** fetch aggregated fields from the table: "stake" */
  readonly stake_aggregate: Stake_Aggregate;
  /** fetch data from the table: "stake" using primary key columns */
  readonly stake_by_pk?: Maybe<Stake>;
  /** fetch data from the table: "stakers" */
  readonly stakers: ReadonlyArray<Stakers>;
  /** fetch data from the table: "stakers" using primary key columns */
  readonly stakers_by_pk?: Maybe<Stakers>;
  /** fetch data from the table: "stakers_count_aggregated_daily" */
  readonly stakers_count_aggregated_daily: ReadonlyArray<Stakers_Count_Aggregated_Daily>;
  /** fetch data from the table: "stakers_count_aggregated_daily" using primary key columns */
  readonly stakers_count_aggregated_daily_by_pk?: Maybe<Stakers_Count_Aggregated_Daily>;
  /** fetch data from the table: "stakes_per_dap_and_period" */
  readonly stakes_per_dap_and_period: ReadonlyArray<Stakes_Per_Dap_And_Period>;
  /** fetch data from the table: "stakes_per_dap_and_period" using primary key columns */
  readonly stakes_per_dap_and_period_by_pk?: Maybe<Stakes_Per_Dap_And_Period>;
  /** fetch data from the table: "stakes_per_staker_and_period" */
  readonly stakes_per_staker_and_period: ReadonlyArray<Stakes_Per_Staker_And_Period>;
  /** fetch data from the table: "stakes_per_staker_and_period" using primary key columns */
  readonly stakes_per_staker_and_period_by_pk?: Maybe<Stakes_Per_Staker_And_Period>;
  /** fetch data from the table: "staking_event" */
  readonly staking_event: ReadonlyArray<Staking_Event>;
  /** fetch data from the table: "staking_event" using primary key columns */
  readonly staking_event_by_pk?: Maybe<Staking_Event>;
  /** fetch data from the table: "subperiod" */
  readonly subperiod: ReadonlyArray<Subperiod>;
  /** fetch data from the table: "subperiod" using primary key columns */
  readonly subperiod_by_pk?: Maybe<Subperiod>;
  /** fetch data from the table: "tvl_aggregated_daily" */
  readonly tvl_aggregated_daily: ReadonlyArray<Tvl_Aggregated_Daily>;
  /** fetch data from the table: "tvl_aggregated_daily" using primary key columns */
  readonly tvl_aggregated_daily_by_pk?: Maybe<Tvl_Aggregated_Daily>;
  /** fetch data from the table: "unique_locker_address" */
  readonly unique_locker_address: ReadonlyArray<Unique_Locker_Address>;
  /** fetch data from the table: "unique_locker_address" using primary key columns */
  readonly unique_locker_address_by_pk?: Maybe<Unique_Locker_Address>;
  /** fetch data from the table: "unique_staker_address" */
  readonly unique_staker_address: ReadonlyArray<Unique_Staker_Address>;
  /** fetch data from the table: "unique_staker_address" using primary key columns */
  readonly unique_staker_address_by_pk?: Maybe<Unique_Staker_Address>;
  readonly version: Scalars['String']['output'];
  /** fetch data from the table: "voting" */
  readonly voting: ReadonlyArray<Voting>;
  /** fetch data from the table: "voting" using primary key columns */
  readonly voting_by_pk?: Maybe<Voting>;
};


export type Query_RootAccount_BalanceArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Account_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Account_Balance_Order_By>>;
  where?: InputMaybe<Account_Balance_Bool_Exp>;
};


export type Query_RootAccount_Balance_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootAstar_Indexer_StatusArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Astar_Indexer_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Astar_Indexer_Status_Order_By>>;
  where?: InputMaybe<Astar_Indexer_Status_Bool_Exp>;
};


export type Query_RootAstar_Indexer_Status_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootBalanceArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Balance_Order_By>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


export type Query_RootBalance_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootBattlepassArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Battlepass_Order_By>>;
  where?: InputMaybe<Battlepass_Bool_Exp>;
};


export type Query_RootBattlepass_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootBattlepass_NftArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Battlepass_Nft_Order_By>>;
  where?: InputMaybe<Battlepass_Nft_Bool_Exp>;
};


export type Query_RootBattlepass_Nft_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootBurnArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Burn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Burn_Order_By>>;
  where?: InputMaybe<Burn_Bool_Exp>;
};


export type Query_RootBurn_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootCampaignArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Query_RootCampaign_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Query_RootCampaign_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootCampaign_ContributorArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Contributor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Contributor_Order_By>>;
  where?: InputMaybe<Campaign_Contributor_Bool_Exp>;
};


export type Query_RootCampaign_Contributor_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootCampaign_MetadataArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Metadata_Order_By>>;
  where?: InputMaybe<Campaign_Metadata_Bool_Exp>;
};


export type Query_RootCampaign_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootChain_InfoArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Chain_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Chain_Info_Order_By>>;
  where?: InputMaybe<Chain_Info_Bool_Exp>;
};


export type Query_RootChain_Info_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootChain_StateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Chain_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Chain_State_Order_By>>;
  where?: InputMaybe<Chain_State_Bool_Exp>;
};


export type Query_RootChain_State_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootConfigArgs = {
  env: Environment;
};


export type Query_RootCurrent_Chain_StateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Current_Chain_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Current_Chain_State_Order_By>>;
  where?: InputMaybe<Current_Chain_State_Bool_Exp>;
};


export type Query_RootCurrent_Chain_State_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootDAppContentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type Query_RootDappArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Dapp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Dapp_Order_By>>;
  where?: InputMaybe<Dapp_Bool_Exp>;
};


export type Query_RootDapp_Aggregated_DailyArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Dapp_Aggregated_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Dapp_Aggregated_Daily_Order_By>>;
  where?: InputMaybe<Dapp_Aggregated_Daily_Bool_Exp>;
};


export type Query_RootDapp_Aggregated_Daily_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootDapp_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootFeaturesArgs = {
  env: Environment;
};


export type Query_RootGamedao_Indexer_StatusArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Gamedao_Indexer_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Gamedao_Indexer_Status_Order_By>>;
  where?: InputMaybe<Gamedao_Indexer_Status_Bool_Exp>;
};


export type Query_RootGamedao_Indexer_Status_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootGamedao_Squid_MigrationsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Gamedao_Squid_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Gamedao_Squid_Migrations_Order_By>>;
  where?: InputMaybe<Gamedao_Squid_Migrations_Bool_Exp>;
};


export type Query_RootGamedao_Squid_Migrations_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootGrouped_Staking_EventArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Grouped_Staking_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Grouped_Staking_Event_Order_By>>;
  where?: InputMaybe<Grouped_Staking_Event_Bool_Exp>;
};


export type Query_RootGrouped_Staking_Event_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootHistorical_BalanceArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Historical_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Historical_Balance_Order_By>>;
  where?: InputMaybe<Historical_Balance_Bool_Exp>;
};


export type Query_RootHistorical_Balance_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootIdentityArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Identity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Identity_Order_By>>;
  where?: InputMaybe<Identity_Bool_Exp>;
};


export type Query_RootIdentity_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootMigrationsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Migrations_Order_By>>;
  where?: InputMaybe<Migrations_Bool_Exp>;
};


export type Query_RootMigrations_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootNftArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


export type Query_RootNft_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootNft_CollectionArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nft_Collection_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Nft_Collection_Order_By>>;
  where?: InputMaybe<Nft_Collection_Bool_Exp>;
};


export type Query_RootNft_Collection_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootOrganizationArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootOrganization_MemberArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


export type Query_RootOrganization_Member_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


export type Query_RootOrganization_Member_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootOrganization_MetadataArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Metadata_Order_By>>;
  where?: InputMaybe<Organization_Metadata_Bool_Exp>;
};


export type Query_RootOrganization_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootProposalArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Query_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Query_RootProposal_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootProposal_MetadataArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Metadata_Order_By>>;
  where?: InputMaybe<Proposal_Metadata_Bool_Exp>;
};


export type Query_RootProposal_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootProposal_VoterArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Voter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Voter_Order_By>>;
  where?: InputMaybe<Proposal_Voter_Bool_Exp>;
};


export type Query_RootProposal_Voter_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootReward_Aggregated_DailyArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reward_Aggregated_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Reward_Aggregated_Daily_Order_By>>;
  where?: InputMaybe<Reward_Aggregated_Daily_Bool_Exp>;
};


export type Query_RootReward_Aggregated_Daily_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootReward_EventArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reward_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Reward_Event_Order_By>>;
  where?: InputMaybe<Reward_Event_Bool_Exp>;
};


export type Query_RootReward_Event_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootRmrkNftsArgs = {
  address: Scalars['String']['input'];
};


export type Query_RootSense_EntityArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Sense_Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Sense_Entity_Order_By>>;
  where?: InputMaybe<Sense_Entity_Bool_Exp>;
};


export type Query_RootSense_Entity_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootSessionArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Session_Order_By>>;
  where?: InputMaybe<Session_Bool_Exp>;
};


export type Query_RootSession_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootStakeArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Stake_Order_By>>;
  where?: InputMaybe<Stake_Bool_Exp>;
};


export type Query_RootStake_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Stake_Order_By>>;
  where?: InputMaybe<Stake_Bool_Exp>;
};


export type Query_RootStake_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootStakersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Stakers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Stakers_Order_By>>;
  where?: InputMaybe<Stakers_Bool_Exp>;
};


export type Query_RootStakers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootStakers_Count_Aggregated_DailyArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Stakers_Count_Aggregated_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Stakers_Count_Aggregated_Daily_Order_By>>;
  where?: InputMaybe<Stakers_Count_Aggregated_Daily_Bool_Exp>;
};


export type Query_RootStakers_Count_Aggregated_Daily_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootStakes_Per_Dap_And_PeriodArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Stakes_Per_Dap_And_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Stakes_Per_Dap_And_Period_Order_By>>;
  where?: InputMaybe<Stakes_Per_Dap_And_Period_Bool_Exp>;
};


export type Query_RootStakes_Per_Dap_And_Period_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootStakes_Per_Staker_And_PeriodArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Stakes_Per_Staker_And_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Stakes_Per_Staker_And_Period_Order_By>>;
  where?: InputMaybe<Stakes_Per_Staker_And_Period_Bool_Exp>;
};


export type Query_RootStakes_Per_Staker_And_Period_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootStaking_EventArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Staking_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Staking_Event_Order_By>>;
  where?: InputMaybe<Staking_Event_Bool_Exp>;
};


export type Query_RootStaking_Event_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootSubperiodArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Subperiod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Subperiod_Order_By>>;
  where?: InputMaybe<Subperiod_Bool_Exp>;
};


export type Query_RootSubperiod_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootTvl_Aggregated_DailyArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Tvl_Aggregated_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Tvl_Aggregated_Daily_Order_By>>;
  where?: InputMaybe<Tvl_Aggregated_Daily_Bool_Exp>;
};


export type Query_RootTvl_Aggregated_Daily_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootUnique_Locker_AddressArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Unique_Locker_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Unique_Locker_Address_Order_By>>;
  where?: InputMaybe<Unique_Locker_Address_Bool_Exp>;
};


export type Query_RootUnique_Locker_Address_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootUnique_Staker_AddressArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Unique_Staker_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Unique_Staker_Address_Order_By>>;
  where?: InputMaybe<Unique_Staker_Address_Bool_Exp>;
};


export type Query_RootUnique_Staker_Address_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootVotingArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Voting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Voting_Order_By>>;
  where?: InputMaybe<Voting_Bool_Exp>;
};


export type Query_RootVoting_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** columns and relationships of "reward_aggregated_daily" */
export type Reward_Aggregated_Daily = {
  readonly __typename?: 'reward_aggregated_daily';
  readonly amount: Scalars['numeric']['output'];
  readonly beneficiary: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly timestamp: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "reward_aggregated_daily". All fields are combined with a logical 'AND'. */
export type Reward_Aggregated_Daily_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Reward_Aggregated_Daily_Bool_Exp>>;
  readonly _not?: InputMaybe<Reward_Aggregated_Daily_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Reward_Aggregated_Daily_Bool_Exp>>;
  readonly amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly beneficiary?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly timestamp?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "reward_aggregated_daily". */
export type Reward_Aggregated_Daily_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly beneficiary?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "reward_aggregated_daily" */
export enum Reward_Aggregated_Daily_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Beneficiary = 'beneficiary',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp'
}

/** Streaming cursor of the table "reward_aggregated_daily" */
export type Reward_Aggregated_Daily_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Reward_Aggregated_Daily_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Reward_Aggregated_Daily_Stream_Cursor_Value_Input = {
  readonly amount?: InputMaybe<Scalars['numeric']['input']>;
  readonly beneficiary?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly timestamp?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "reward_event" */
export type Reward_Event = {
  readonly __typename?: 'reward_event';
  readonly amount: Scalars['numeric']['output'];
  readonly block_number: Scalars['numeric']['output'];
  readonly contract_address?: Maybe<Scalars['String']['output']>;
  readonly era?: Maybe<Scalars['numeric']['output']>;
  readonly id: Scalars['String']['output'];
  readonly period?: Maybe<Scalars['Int']['output']>;
  readonly tier_id?: Maybe<Scalars['Int']['output']>;
  readonly timestamp: Scalars['numeric']['output'];
  readonly transaction: Scalars['String']['output'];
  readonly user_address: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "reward_event". All fields are combined with a logical 'AND'. */
export type Reward_Event_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Reward_Event_Bool_Exp>>;
  readonly _not?: InputMaybe<Reward_Event_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Reward_Event_Bool_Exp>>;
  readonly amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly block_number?: InputMaybe<Numeric_Comparison_Exp>;
  readonly contract_address?: InputMaybe<String_Comparison_Exp>;
  readonly era?: InputMaybe<Numeric_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly period?: InputMaybe<Int_Comparison_Exp>;
  readonly tier_id?: InputMaybe<Int_Comparison_Exp>;
  readonly timestamp?: InputMaybe<Numeric_Comparison_Exp>;
  readonly transaction?: InputMaybe<String_Comparison_Exp>;
  readonly user_address?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "reward_event". */
export type Reward_Event_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly block_number?: InputMaybe<Order_By>;
  readonly contract_address?: InputMaybe<Order_By>;
  readonly era?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly period?: InputMaybe<Order_By>;
  readonly tier_id?: InputMaybe<Order_By>;
  readonly timestamp?: InputMaybe<Order_By>;
  readonly transaction?: InputMaybe<Order_By>;
  readonly user_address?: InputMaybe<Order_By>;
};

/** select columns of table "reward_event" */
export enum Reward_Event_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  Era = 'era',
  /** column name */
  Id = 'id',
  /** column name */
  Period = 'period',
  /** column name */
  TierId = 'tier_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Transaction = 'transaction',
  /** column name */
  UserAddress = 'user_address'
}

/** Streaming cursor of the table "reward_event" */
export type Reward_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Reward_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Reward_Event_Stream_Cursor_Value_Input = {
  readonly amount?: InputMaybe<Scalars['numeric']['input']>;
  readonly block_number?: InputMaybe<Scalars['numeric']['input']>;
  readonly contract_address?: InputMaybe<Scalars['String']['input']>;
  readonly era?: InputMaybe<Scalars['numeric']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly period?: InputMaybe<Scalars['Int']['input']>;
  readonly tier_id?: InputMaybe<Scalars['Int']['input']>;
  readonly timestamp?: InputMaybe<Scalars['numeric']['input']>;
  readonly transaction?: InputMaybe<Scalars['String']['input']>;
  readonly user_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "sense_entity" */
export type Sense_Entity = {
  readonly __typename?: 'sense_entity';
  readonly cid: Scalars['String']['output'];
  readonly created_at_block: Scalars['Int']['output'];
  readonly experience: Scalars['numeric']['output'];
  readonly id: Scalars['String']['output'];
  /** An object relationship */
  readonly identity?: Maybe<Identity>;
  readonly identity_id?: Maybe<Scalars['String']['output']>;
  readonly reputation: Scalars['numeric']['output'];
  readonly trust: Scalars['numeric']['output'];
  readonly updated_at_block: Scalars['Int']['output'];
};

/** order by aggregate values of table "sense_entity" */
export type Sense_Entity_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Sense_Entity_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Sense_Entity_Max_Order_By>;
  readonly min?: InputMaybe<Sense_Entity_Min_Order_By>;
  readonly stddev?: InputMaybe<Sense_Entity_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Sense_Entity_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Sense_Entity_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Sense_Entity_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Sense_Entity_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Sense_Entity_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Sense_Entity_Variance_Order_By>;
};

/** order by avg() on columns of table "sense_entity" */
export type Sense_Entity_Avg_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly experience?: InputMaybe<Order_By>;
  readonly reputation?: InputMaybe<Order_By>;
  readonly trust?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sense_entity". All fields are combined with a logical 'AND'. */
export type Sense_Entity_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Sense_Entity_Bool_Exp>>;
  readonly _not?: InputMaybe<Sense_Entity_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Sense_Entity_Bool_Exp>>;
  readonly cid?: InputMaybe<String_Comparison_Exp>;
  readonly created_at_block?: InputMaybe<Int_Comparison_Exp>;
  readonly experience?: InputMaybe<Numeric_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly identity?: InputMaybe<Identity_Bool_Exp>;
  readonly identity_id?: InputMaybe<String_Comparison_Exp>;
  readonly reputation?: InputMaybe<Numeric_Comparison_Exp>;
  readonly trust?: InputMaybe<Numeric_Comparison_Exp>;
  readonly updated_at_block?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "sense_entity" */
export type Sense_Entity_Max_Order_By = {
  readonly cid?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly experience?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity_id?: InputMaybe<Order_By>;
  readonly reputation?: InputMaybe<Order_By>;
  readonly trust?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "sense_entity" */
export type Sense_Entity_Min_Order_By = {
  readonly cid?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly experience?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity_id?: InputMaybe<Order_By>;
  readonly reputation?: InputMaybe<Order_By>;
  readonly trust?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "sense_entity". */
export type Sense_Entity_Order_By = {
  readonly cid?: InputMaybe<Order_By>;
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly experience?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly identity?: InputMaybe<Identity_Order_By>;
  readonly identity_id?: InputMaybe<Order_By>;
  readonly reputation?: InputMaybe<Order_By>;
  readonly trust?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** select columns of table "sense_entity" */
export enum Sense_Entity_Select_Column {
  /** column name */
  Cid = 'cid',
  /** column name */
  CreatedAtBlock = 'created_at_block',
  /** column name */
  Experience = 'experience',
  /** column name */
  Id = 'id',
  /** column name */
  IdentityId = 'identity_id',
  /** column name */
  Reputation = 'reputation',
  /** column name */
  Trust = 'trust',
  /** column name */
  UpdatedAtBlock = 'updated_at_block'
}

/** order by stddev() on columns of table "sense_entity" */
export type Sense_Entity_Stddev_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly experience?: InputMaybe<Order_By>;
  readonly reputation?: InputMaybe<Order_By>;
  readonly trust?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "sense_entity" */
export type Sense_Entity_Stddev_Pop_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly experience?: InputMaybe<Order_By>;
  readonly reputation?: InputMaybe<Order_By>;
  readonly trust?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "sense_entity" */
export type Sense_Entity_Stddev_Samp_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly experience?: InputMaybe<Order_By>;
  readonly reputation?: InputMaybe<Order_By>;
  readonly trust?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "sense_entity" */
export type Sense_Entity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Sense_Entity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sense_Entity_Stream_Cursor_Value_Input = {
  readonly cid?: InputMaybe<Scalars['String']['input']>;
  readonly created_at_block?: InputMaybe<Scalars['Int']['input']>;
  readonly experience?: InputMaybe<Scalars['numeric']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly identity_id?: InputMaybe<Scalars['String']['input']>;
  readonly reputation?: InputMaybe<Scalars['numeric']['input']>;
  readonly trust?: InputMaybe<Scalars['numeric']['input']>;
  readonly updated_at_block?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "sense_entity" */
export type Sense_Entity_Sum_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly experience?: InputMaybe<Order_By>;
  readonly reputation?: InputMaybe<Order_By>;
  readonly trust?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "sense_entity" */
export type Sense_Entity_Var_Pop_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly experience?: InputMaybe<Order_By>;
  readonly reputation?: InputMaybe<Order_By>;
  readonly trust?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "sense_entity" */
export type Sense_Entity_Var_Samp_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly experience?: InputMaybe<Order_By>;
  readonly reputation?: InputMaybe<Order_By>;
  readonly trust?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "sense_entity" */
export type Sense_Entity_Variance_Order_By = {
  readonly created_at_block?: InputMaybe<Order_By>;
  readonly experience?: InputMaybe<Order_By>;
  readonly reputation?: InputMaybe<Order_By>;
  readonly trust?: InputMaybe<Order_By>;
  readonly updated_at_block?: InputMaybe<Order_By>;
};

/** columns and relationships of "Session" */
export type Session = {
  readonly __typename?: 'session';
  readonly address: Scalars['String']['output'];
  readonly id: Scalars['bigint']['output'];
  readonly key: Scalars['String']['output'];
  readonly updatedAt: Scalars['timestamp']['output'];
};

/** Boolean expression to filter rows from the table "Session". All fields are combined with a logical 'AND'. */
export type Session_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Session_Bool_Exp>>;
  readonly _not?: InputMaybe<Session_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Session_Bool_Exp>>;
  readonly address?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<Bigint_Comparison_Exp>;
  readonly key?: InputMaybe<String_Comparison_Exp>;
  readonly updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** Ordering options when selecting data from "Session". */
export type Session_Order_By = {
  readonly address?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly key?: InputMaybe<Order_By>;
  readonly updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "Session" */
export enum Session_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "session" */
export type Session_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Session_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Session_Stream_Cursor_Value_Input = {
  readonly address?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['bigint']['input']>;
  readonly key?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** columns and relationships of "stake" */
export type Stake = {
  readonly __typename?: 'stake';
  readonly amount: Scalars['numeric']['output'];
  readonly block_number: Scalars['Int']['output'];
  readonly dapp_address: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly period: Scalars['Int']['output'];
  readonly staker_address: Scalars['String']['output'];
  readonly timestamp: Scalars['numeric']['output'];
};

/** aggregated selection of "stake" */
export type Stake_Aggregate = {
  readonly __typename?: 'stake_aggregate';
  readonly aggregate?: Maybe<Stake_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Stake>;
};

/** aggregate fields of "stake" */
export type Stake_Aggregate_Fields = {
  readonly __typename?: 'stake_aggregate_fields';
  readonly avg?: Maybe<Stake_Avg_Fields>;
  readonly count: Scalars['Int']['output'];
  readonly max?: Maybe<Stake_Max_Fields>;
  readonly min?: Maybe<Stake_Min_Fields>;
  readonly stddev?: Maybe<Stake_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Stake_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Stake_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Stake_Sum_Fields>;
  readonly var_pop?: Maybe<Stake_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Stake_Var_Samp_Fields>;
  readonly variance?: Maybe<Stake_Variance_Fields>;
};


/** aggregate fields of "stake" */
export type Stake_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Stake_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Stake_Avg_Fields = {
  readonly __typename?: 'stake_avg_fields';
  readonly amount?: Maybe<Scalars['Float']['output']>;
  readonly block_number?: Maybe<Scalars['Float']['output']>;
  readonly period?: Maybe<Scalars['Float']['output']>;
  readonly timestamp?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "stake". All fields are combined with a logical 'AND'. */
export type Stake_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Stake_Bool_Exp>>;
  readonly _not?: InputMaybe<Stake_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Stake_Bool_Exp>>;
  readonly amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly block_number?: InputMaybe<Int_Comparison_Exp>;
  readonly dapp_address?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly period?: InputMaybe<Int_Comparison_Exp>;
  readonly staker_address?: InputMaybe<String_Comparison_Exp>;
  readonly timestamp?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Stake_Max_Fields = {
  readonly __typename?: 'stake_max_fields';
  readonly amount?: Maybe<Scalars['numeric']['output']>;
  readonly block_number?: Maybe<Scalars['Int']['output']>;
  readonly dapp_address?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly period?: Maybe<Scalars['Int']['output']>;
  readonly staker_address?: Maybe<Scalars['String']['output']>;
  readonly timestamp?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Stake_Min_Fields = {
  readonly __typename?: 'stake_min_fields';
  readonly amount?: Maybe<Scalars['numeric']['output']>;
  readonly block_number?: Maybe<Scalars['Int']['output']>;
  readonly dapp_address?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly period?: Maybe<Scalars['Int']['output']>;
  readonly staker_address?: Maybe<Scalars['String']['output']>;
  readonly timestamp?: Maybe<Scalars['numeric']['output']>;
};

/** Ordering options when selecting data from "stake". */
export type Stake_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly block_number?: InputMaybe<Order_By>;
  readonly dapp_address?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly period?: InputMaybe<Order_By>;
  readonly staker_address?: InputMaybe<Order_By>;
  readonly timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "stake" */
export enum Stake_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  DappAddress = 'dapp_address',
  /** column name */
  Id = 'id',
  /** column name */
  Period = 'period',
  /** column name */
  StakerAddress = 'staker_address',
  /** column name */
  Timestamp = 'timestamp'
}

/** aggregate stddev on columns */
export type Stake_Stddev_Fields = {
  readonly __typename?: 'stake_stddev_fields';
  readonly amount?: Maybe<Scalars['Float']['output']>;
  readonly block_number?: Maybe<Scalars['Float']['output']>;
  readonly period?: Maybe<Scalars['Float']['output']>;
  readonly timestamp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Stake_Stddev_Pop_Fields = {
  readonly __typename?: 'stake_stddev_pop_fields';
  readonly amount?: Maybe<Scalars['Float']['output']>;
  readonly block_number?: Maybe<Scalars['Float']['output']>;
  readonly period?: Maybe<Scalars['Float']['output']>;
  readonly timestamp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Stake_Stddev_Samp_Fields = {
  readonly __typename?: 'stake_stddev_samp_fields';
  readonly amount?: Maybe<Scalars['Float']['output']>;
  readonly block_number?: Maybe<Scalars['Float']['output']>;
  readonly period?: Maybe<Scalars['Float']['output']>;
  readonly timestamp?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "stake" */
export type Stake_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Stake_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stake_Stream_Cursor_Value_Input = {
  readonly amount?: InputMaybe<Scalars['numeric']['input']>;
  readonly block_number?: InputMaybe<Scalars['Int']['input']>;
  readonly dapp_address?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly period?: InputMaybe<Scalars['Int']['input']>;
  readonly staker_address?: InputMaybe<Scalars['String']['input']>;
  readonly timestamp?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Stake_Sum_Fields = {
  readonly __typename?: 'stake_sum_fields';
  readonly amount?: Maybe<Scalars['numeric']['output']>;
  readonly block_number?: Maybe<Scalars['Int']['output']>;
  readonly period?: Maybe<Scalars['Int']['output']>;
  readonly timestamp?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Stake_Var_Pop_Fields = {
  readonly __typename?: 'stake_var_pop_fields';
  readonly amount?: Maybe<Scalars['Float']['output']>;
  readonly block_number?: Maybe<Scalars['Float']['output']>;
  readonly period?: Maybe<Scalars['Float']['output']>;
  readonly timestamp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Stake_Var_Samp_Fields = {
  readonly __typename?: 'stake_var_samp_fields';
  readonly amount?: Maybe<Scalars['Float']['output']>;
  readonly block_number?: Maybe<Scalars['Float']['output']>;
  readonly period?: Maybe<Scalars['Float']['output']>;
  readonly timestamp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Stake_Variance_Fields = {
  readonly __typename?: 'stake_variance_fields';
  readonly amount?: Maybe<Scalars['Float']['output']>;
  readonly block_number?: Maybe<Scalars['Float']['output']>;
  readonly period?: Maybe<Scalars['Float']['output']>;
  readonly timestamp?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "stakers" */
export type Stakers = {
  readonly __typename?: 'stakers';
  readonly amount: Scalars['numeric']['output'];
  readonly dapp_address: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly staker_address: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "stakers". All fields are combined with a logical 'AND'. */
export type Stakers_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Stakers_Bool_Exp>>;
  readonly _not?: InputMaybe<Stakers_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Stakers_Bool_Exp>>;
  readonly amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly dapp_address?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly staker_address?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "stakers_count_aggregated_daily" */
export type Stakers_Count_Aggregated_Daily = {
  readonly __typename?: 'stakers_count_aggregated_daily';
  readonly block_number: Scalars['Int']['output'];
  readonly id: Scalars['String']['output'];
  readonly stakers_amount: Scalars['numeric']['output'];
  readonly stakers_count: Scalars['Int']['output'];
  readonly usd_price: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "stakers_count_aggregated_daily". All fields are combined with a logical 'AND'. */
export type Stakers_Count_Aggregated_Daily_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Stakers_Count_Aggregated_Daily_Bool_Exp>>;
  readonly _not?: InputMaybe<Stakers_Count_Aggregated_Daily_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Stakers_Count_Aggregated_Daily_Bool_Exp>>;
  readonly block_number?: InputMaybe<Int_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly stakers_amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly stakers_count?: InputMaybe<Int_Comparison_Exp>;
  readonly usd_price?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "stakers_count_aggregated_daily". */
export type Stakers_Count_Aggregated_Daily_Order_By = {
  readonly block_number?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly stakers_amount?: InputMaybe<Order_By>;
  readonly stakers_count?: InputMaybe<Order_By>;
  readonly usd_price?: InputMaybe<Order_By>;
};

/** select columns of table "stakers_count_aggregated_daily" */
export enum Stakers_Count_Aggregated_Daily_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  Id = 'id',
  /** column name */
  StakersAmount = 'stakers_amount',
  /** column name */
  StakersCount = 'stakers_count',
  /** column name */
  UsdPrice = 'usd_price'
}

/** Streaming cursor of the table "stakers_count_aggregated_daily" */
export type Stakers_Count_Aggregated_Daily_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Stakers_Count_Aggregated_Daily_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stakers_Count_Aggregated_Daily_Stream_Cursor_Value_Input = {
  readonly block_number?: InputMaybe<Scalars['Int']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly stakers_amount?: InputMaybe<Scalars['numeric']['input']>;
  readonly stakers_count?: InputMaybe<Scalars['Int']['input']>;
  readonly usd_price?: InputMaybe<Scalars['numeric']['input']>;
};

/** Ordering options when selecting data from "stakers". */
export type Stakers_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly dapp_address?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly staker_address?: InputMaybe<Order_By>;
};

/** select columns of table "stakers" */
export enum Stakers_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DappAddress = 'dapp_address',
  /** column name */
  Id = 'id',
  /** column name */
  StakerAddress = 'staker_address'
}

/** Streaming cursor of the table "stakers" */
export type Stakers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Stakers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stakers_Stream_Cursor_Value_Input = {
  readonly amount?: InputMaybe<Scalars['numeric']['input']>;
  readonly dapp_address?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly staker_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "stakes_per_dap_and_period" */
export type Stakes_Per_Dap_And_Period = {
  readonly __typename?: 'stakes_per_dap_and_period';
  readonly dapp_address: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly period: Scalars['Int']['output'];
  readonly reward_amount: Scalars['numeric']['output'];
  readonly stake_amount: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "stakes_per_dap_and_period". All fields are combined with a logical 'AND'. */
export type Stakes_Per_Dap_And_Period_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Stakes_Per_Dap_And_Period_Bool_Exp>>;
  readonly _not?: InputMaybe<Stakes_Per_Dap_And_Period_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Stakes_Per_Dap_And_Period_Bool_Exp>>;
  readonly dapp_address?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly period?: InputMaybe<Int_Comparison_Exp>;
  readonly reward_amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly stake_amount?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "stakes_per_dap_and_period". */
export type Stakes_Per_Dap_And_Period_Order_By = {
  readonly dapp_address?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly period?: InputMaybe<Order_By>;
  readonly reward_amount?: InputMaybe<Order_By>;
  readonly stake_amount?: InputMaybe<Order_By>;
};

/** select columns of table "stakes_per_dap_and_period" */
export enum Stakes_Per_Dap_And_Period_Select_Column {
  /** column name */
  DappAddress = 'dapp_address',
  /** column name */
  Id = 'id',
  /** column name */
  Period = 'period',
  /** column name */
  RewardAmount = 'reward_amount',
  /** column name */
  StakeAmount = 'stake_amount'
}

/** Streaming cursor of the table "stakes_per_dap_and_period" */
export type Stakes_Per_Dap_And_Period_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Stakes_Per_Dap_And_Period_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stakes_Per_Dap_And_Period_Stream_Cursor_Value_Input = {
  readonly dapp_address?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly period?: InputMaybe<Scalars['Int']['input']>;
  readonly reward_amount?: InputMaybe<Scalars['numeric']['input']>;
  readonly stake_amount?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "stakes_per_staker_and_period" */
export type Stakes_Per_Staker_And_Period = {
  readonly __typename?: 'stakes_per_staker_and_period';
  readonly bonus_reward_amount: Scalars['numeric']['output'];
  readonly id: Scalars['String']['output'];
  readonly period: Scalars['Int']['output'];
  readonly stake_amount: Scalars['numeric']['output'];
  readonly staker_address: Scalars['String']['output'];
  readonly staker_reward_amount: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "stakes_per_staker_and_period". All fields are combined with a logical 'AND'. */
export type Stakes_Per_Staker_And_Period_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Stakes_Per_Staker_And_Period_Bool_Exp>>;
  readonly _not?: InputMaybe<Stakes_Per_Staker_And_Period_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Stakes_Per_Staker_And_Period_Bool_Exp>>;
  readonly bonus_reward_amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly period?: InputMaybe<Int_Comparison_Exp>;
  readonly stake_amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly staker_address?: InputMaybe<String_Comparison_Exp>;
  readonly staker_reward_amount?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "stakes_per_staker_and_period". */
export type Stakes_Per_Staker_And_Period_Order_By = {
  readonly bonus_reward_amount?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly period?: InputMaybe<Order_By>;
  readonly stake_amount?: InputMaybe<Order_By>;
  readonly staker_address?: InputMaybe<Order_By>;
  readonly staker_reward_amount?: InputMaybe<Order_By>;
};

/** select columns of table "stakes_per_staker_and_period" */
export enum Stakes_Per_Staker_And_Period_Select_Column {
  /** column name */
  BonusRewardAmount = 'bonus_reward_amount',
  /** column name */
  Id = 'id',
  /** column name */
  Period = 'period',
  /** column name */
  StakeAmount = 'stake_amount',
  /** column name */
  StakerAddress = 'staker_address',
  /** column name */
  StakerRewardAmount = 'staker_reward_amount'
}

/** Streaming cursor of the table "stakes_per_staker_and_period" */
export type Stakes_Per_Staker_And_Period_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Stakes_Per_Staker_And_Period_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stakes_Per_Staker_And_Period_Stream_Cursor_Value_Input = {
  readonly bonus_reward_amount?: InputMaybe<Scalars['numeric']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly period?: InputMaybe<Scalars['Int']['input']>;
  readonly stake_amount?: InputMaybe<Scalars['numeric']['input']>;
  readonly staker_address?: InputMaybe<Scalars['String']['input']>;
  readonly staker_reward_amount?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "staking_event" */
export type Staking_Event = {
  readonly __typename?: 'staking_event';
  readonly amount: Scalars['numeric']['output'];
  readonly block_number: Scalars['numeric']['output'];
  readonly contract_address?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['String']['output'];
  readonly timestamp: Scalars['numeric']['output'];
  readonly transaction: Scalars['String']['output'];
  readonly user_address: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "staking_event". All fields are combined with a logical 'AND'. */
export type Staking_Event_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Staking_Event_Bool_Exp>>;
  readonly _not?: InputMaybe<Staking_Event_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Staking_Event_Bool_Exp>>;
  readonly amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly block_number?: InputMaybe<Numeric_Comparison_Exp>;
  readonly contract_address?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly timestamp?: InputMaybe<Numeric_Comparison_Exp>;
  readonly transaction?: InputMaybe<String_Comparison_Exp>;
  readonly user_address?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "staking_event". */
export type Staking_Event_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly block_number?: InputMaybe<Order_By>;
  readonly contract_address?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly timestamp?: InputMaybe<Order_By>;
  readonly transaction?: InputMaybe<Order_By>;
  readonly user_address?: InputMaybe<Order_By>;
};

/** select columns of table "staking_event" */
export enum Staking_Event_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Transaction = 'transaction',
  /** column name */
  UserAddress = 'user_address'
}

/** Streaming cursor of the table "staking_event" */
export type Staking_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Staking_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staking_Event_Stream_Cursor_Value_Input = {
  readonly amount?: InputMaybe<Scalars['numeric']['input']>;
  readonly block_number?: InputMaybe<Scalars['numeric']['input']>;
  readonly contract_address?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly timestamp?: InputMaybe<Scalars['numeric']['input']>;
  readonly transaction?: InputMaybe<Scalars['String']['input']>;
  readonly user_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "subperiod" */
export type Subperiod = {
  readonly __typename?: 'subperiod';
  readonly block_number: Scalars['Int']['output'];
  readonly id: Scalars['String']['output'];
  readonly timestamp: Scalars['numeric']['output'];
  readonly type: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "subperiod". All fields are combined with a logical 'AND'. */
export type Subperiod_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Subperiod_Bool_Exp>>;
  readonly _not?: InputMaybe<Subperiod_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Subperiod_Bool_Exp>>;
  readonly block_number?: InputMaybe<Int_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly timestamp?: InputMaybe<Numeric_Comparison_Exp>;
  readonly type?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "subperiod". */
export type Subperiod_Order_By = {
  readonly block_number?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly timestamp?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
};

/** select columns of table "subperiod" */
export enum Subperiod_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "subperiod" */
export type Subperiod_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Subperiod_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subperiod_Stream_Cursor_Value_Input = {
  readonly block_number?: InputMaybe<Scalars['Int']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly timestamp?: InputMaybe<Scalars['numeric']['input']>;
  readonly type?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription_Root = {
  readonly __typename?: 'subscription_root';
  /** fetch data from the table: "account_balance" */
  readonly account_balance: ReadonlyArray<Account_Balance>;
  /** fetch data from the table: "account_balance" using primary key columns */
  readonly account_balance_by_pk?: Maybe<Account_Balance>;
  /** fetch data from the table in a streaming manner: "account_balance" */
  readonly account_balance_stream: ReadonlyArray<Account_Balance>;
  /** fetch data from the table: "squid_processor.status" */
  readonly astar_indexer_status: ReadonlyArray<Astar_Indexer_Status>;
  /** fetch data from the table: "squid_processor.status" using primary key columns */
  readonly astar_indexer_status_by_pk?: Maybe<Astar_Indexer_Status>;
  /** fetch data from the table in a streaming manner: "squid_processor.status" */
  readonly astar_indexer_status_stream: ReadonlyArray<Astar_Indexer_Status>;
  /** fetch data from the table: "Balance" */
  readonly balance: ReadonlyArray<Balance>;
  /** fetch data from the table: "Balance" using primary key columns */
  readonly balance_by_pk?: Maybe<Balance>;
  /** fetch data from the table in a streaming manner: "Balance" */
  readonly balance_stream: ReadonlyArray<Balance>;
  /** fetch data from the table: "battlepass" */
  readonly battlepass: ReadonlyArray<Battlepass>;
  /** fetch data from the table: "battlepass" using primary key columns */
  readonly battlepass_by_pk?: Maybe<Battlepass>;
  /** fetch data from the table: "battlepass_nft" */
  readonly battlepass_nft: ReadonlyArray<Battlepass_Nft>;
  /** fetch data from the table: "battlepass_nft" using primary key columns */
  readonly battlepass_nft_by_pk?: Maybe<Battlepass_Nft>;
  /** fetch data from the table in a streaming manner: "battlepass_nft" */
  readonly battlepass_nft_stream: ReadonlyArray<Battlepass_Nft>;
  /** fetch data from the table in a streaming manner: "battlepass" */
  readonly battlepass_stream: ReadonlyArray<Battlepass>;
  /** fetch data from the table: "burn" */
  readonly burn: ReadonlyArray<Burn>;
  /** fetch data from the table: "burn" using primary key columns */
  readonly burn_by_pk?: Maybe<Burn>;
  /** fetch data from the table in a streaming manner: "burn" */
  readonly burn_stream: ReadonlyArray<Burn>;
  /** fetch data from the table: "campaign" */
  readonly campaign: ReadonlyArray<Campaign>;
  /** fetch aggregated fields from the table: "campaign" */
  readonly campaign_aggregate: Campaign_Aggregate;
  /** fetch data from the table: "campaign" using primary key columns */
  readonly campaign_by_pk?: Maybe<Campaign>;
  /** fetch data from the table: "campaign_contributor" */
  readonly campaign_contributor: ReadonlyArray<Campaign_Contributor>;
  /** fetch data from the table: "campaign_contributor" using primary key columns */
  readonly campaign_contributor_by_pk?: Maybe<Campaign_Contributor>;
  /** fetch data from the table in a streaming manner: "campaign_contributor" */
  readonly campaign_contributor_stream: ReadonlyArray<Campaign_Contributor>;
  /** fetch data from the table: "campaign_metadata" */
  readonly campaign_metadata: ReadonlyArray<Campaign_Metadata>;
  /** fetch data from the table: "campaign_metadata" using primary key columns */
  readonly campaign_metadata_by_pk?: Maybe<Campaign_Metadata>;
  /** fetch data from the table in a streaming manner: "campaign_metadata" */
  readonly campaign_metadata_stream: ReadonlyArray<Campaign_Metadata>;
  /** fetch data from the table in a streaming manner: "campaign" */
  readonly campaign_stream: ReadonlyArray<Campaign>;
  /** fetch data from the table: "ChainInfo" */
  readonly chain_info: ReadonlyArray<Chain_Info>;
  /** fetch data from the table: "ChainInfo" using primary key columns */
  readonly chain_info_by_pk?: Maybe<Chain_Info>;
  /** fetch data from the table in a streaming manner: "ChainInfo" */
  readonly chain_info_stream: ReadonlyArray<Chain_Info>;
  /** fetch data from the table: "chain_state" */
  readonly chain_state: ReadonlyArray<Chain_State>;
  /** fetch data from the table: "chain_state" using primary key columns */
  readonly chain_state_by_pk?: Maybe<Chain_State>;
  /** fetch data from the table in a streaming manner: "chain_state" */
  readonly chain_state_stream: ReadonlyArray<Chain_State>;
  /** fetch data from the table: "current_chain_state" */
  readonly current_chain_state: ReadonlyArray<Current_Chain_State>;
  /** fetch data from the table: "current_chain_state" using primary key columns */
  readonly current_chain_state_by_pk?: Maybe<Current_Chain_State>;
  /** fetch data from the table in a streaming manner: "current_chain_state" */
  readonly current_chain_state_stream: ReadonlyArray<Current_Chain_State>;
  /** fetch data from the table: "dapp" */
  readonly dapp: ReadonlyArray<Dapp>;
  /** fetch data from the table: "dapp_aggregated_daily" */
  readonly dapp_aggregated_daily: ReadonlyArray<Dapp_Aggregated_Daily>;
  /** fetch data from the table: "dapp_aggregated_daily" using primary key columns */
  readonly dapp_aggregated_daily_by_pk?: Maybe<Dapp_Aggregated_Daily>;
  /** fetch data from the table in a streaming manner: "dapp_aggregated_daily" */
  readonly dapp_aggregated_daily_stream: ReadonlyArray<Dapp_Aggregated_Daily>;
  /** fetch data from the table: "dapp" using primary key columns */
  readonly dapp_by_pk?: Maybe<Dapp>;
  /** fetch data from the table in a streaming manner: "dapp" */
  readonly dapp_stream: ReadonlyArray<Dapp>;
  /** fetch data from the table: "squid_processor.status" */
  readonly gamedao_indexer_status: ReadonlyArray<Gamedao_Indexer_Status>;
  /** fetch data from the table: "squid_processor.status" using primary key columns */
  readonly gamedao_indexer_status_by_pk?: Maybe<Gamedao_Indexer_Status>;
  /** fetch data from the table in a streaming manner: "squid_processor.status" */
  readonly gamedao_indexer_status_stream: ReadonlyArray<Gamedao_Indexer_Status>;
  /** fetch data from the table: "migrations" */
  readonly gamedao_squid_migrations: ReadonlyArray<Gamedao_Squid_Migrations>;
  /** fetch data from the table: "migrations" using primary key columns */
  readonly gamedao_squid_migrations_by_pk?: Maybe<Gamedao_Squid_Migrations>;
  /** fetch data from the table in a streaming manner: "migrations" */
  readonly gamedao_squid_migrations_stream: ReadonlyArray<Gamedao_Squid_Migrations>;
  /** fetch data from the table: "grouped_staking_event" */
  readonly grouped_staking_event: ReadonlyArray<Grouped_Staking_Event>;
  /** fetch data from the table: "grouped_staking_event" using primary key columns */
  readonly grouped_staking_event_by_pk?: Maybe<Grouped_Staking_Event>;
  /** fetch data from the table in a streaming manner: "grouped_staking_event" */
  readonly grouped_staking_event_stream: ReadonlyArray<Grouped_Staking_Event>;
  /** fetch data from the table: "historical_balance" */
  readonly historical_balance: ReadonlyArray<Historical_Balance>;
  /** fetch data from the table: "historical_balance" using primary key columns */
  readonly historical_balance_by_pk?: Maybe<Historical_Balance>;
  /** fetch data from the table in a streaming manner: "historical_balance" */
  readonly historical_balance_stream: ReadonlyArray<Historical_Balance>;
  /** fetch data from the table: "identity" */
  readonly identity: ReadonlyArray<Identity>;
  /** fetch data from the table: "identity" using primary key columns */
  readonly identity_by_pk?: Maybe<Identity>;
  /** fetch data from the table in a streaming manner: "identity" */
  readonly identity_stream: ReadonlyArray<Identity>;
  /** fetch data from the table: "migrations" */
  readonly migrations: ReadonlyArray<Migrations>;
  /** fetch data from the table: "migrations" using primary key columns */
  readonly migrations_by_pk?: Maybe<Migrations>;
  /** fetch data from the table in a streaming manner: "migrations" */
  readonly migrations_stream: ReadonlyArray<Migrations>;
  /** fetch data from the table: "nft" */
  readonly nft: ReadonlyArray<Nft>;
  /** fetch data from the table: "nft" using primary key columns */
  readonly nft_by_pk?: Maybe<Nft>;
  /** fetch data from the table: "nft_collection" */
  readonly nft_collection: ReadonlyArray<Nft_Collection>;
  /** fetch data from the table: "nft_collection" using primary key columns */
  readonly nft_collection_by_pk?: Maybe<Nft_Collection>;
  /** fetch data from the table in a streaming manner: "nft_collection" */
  readonly nft_collection_stream: ReadonlyArray<Nft_Collection>;
  /** fetch data from the table in a streaming manner: "nft" */
  readonly nft_stream: ReadonlyArray<Nft>;
  /** fetch data from the table: "organization" */
  readonly organization: ReadonlyArray<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  readonly organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  readonly organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "organization_member" */
  readonly organization_member: ReadonlyArray<Organization_Member>;
  /** fetch aggregated fields from the table: "organization_member" */
  readonly organization_member_aggregate: Organization_Member_Aggregate;
  /** fetch data from the table: "organization_member" using primary key columns */
  readonly organization_member_by_pk?: Maybe<Organization_Member>;
  /** fetch data from the table in a streaming manner: "organization_member" */
  readonly organization_member_stream: ReadonlyArray<Organization_Member>;
  /** fetch data from the table: "organization_metadata" */
  readonly organization_metadata: ReadonlyArray<Organization_Metadata>;
  /** fetch data from the table: "organization_metadata" using primary key columns */
  readonly organization_metadata_by_pk?: Maybe<Organization_Metadata>;
  /** fetch data from the table in a streaming manner: "organization_metadata" */
  readonly organization_metadata_stream: ReadonlyArray<Organization_Metadata>;
  /** fetch data from the table in a streaming manner: "organization" */
  readonly organization_stream: ReadonlyArray<Organization>;
  /** fetch data from the table: "proposal" */
  readonly proposal: ReadonlyArray<Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  readonly proposal_aggregate: Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  readonly proposal_by_pk?: Maybe<Proposal>;
  /** fetch data from the table: "proposal_metadata" */
  readonly proposal_metadata: ReadonlyArray<Proposal_Metadata>;
  /** fetch data from the table: "proposal_metadata" using primary key columns */
  readonly proposal_metadata_by_pk?: Maybe<Proposal_Metadata>;
  /** fetch data from the table in a streaming manner: "proposal_metadata" */
  readonly proposal_metadata_stream: ReadonlyArray<Proposal_Metadata>;
  /** fetch data from the table in a streaming manner: "proposal" */
  readonly proposal_stream: ReadonlyArray<Proposal>;
  /** fetch data from the table: "proposal_voter" */
  readonly proposal_voter: ReadonlyArray<Proposal_Voter>;
  /** fetch data from the table: "proposal_voter" using primary key columns */
  readonly proposal_voter_by_pk?: Maybe<Proposal_Voter>;
  /** fetch data from the table in a streaming manner: "proposal_voter" */
  readonly proposal_voter_stream: ReadonlyArray<Proposal_Voter>;
  /** fetch data from the table: "reward_aggregated_daily" */
  readonly reward_aggregated_daily: ReadonlyArray<Reward_Aggregated_Daily>;
  /** fetch data from the table: "reward_aggregated_daily" using primary key columns */
  readonly reward_aggregated_daily_by_pk?: Maybe<Reward_Aggregated_Daily>;
  /** fetch data from the table in a streaming manner: "reward_aggregated_daily" */
  readonly reward_aggregated_daily_stream: ReadonlyArray<Reward_Aggregated_Daily>;
  /** fetch data from the table: "reward_event" */
  readonly reward_event: ReadonlyArray<Reward_Event>;
  /** fetch data from the table: "reward_event" using primary key columns */
  readonly reward_event_by_pk?: Maybe<Reward_Event>;
  /** fetch data from the table in a streaming manner: "reward_event" */
  readonly reward_event_stream: ReadonlyArray<Reward_Event>;
  /** fetch data from the table: "sense_entity" */
  readonly sense_entity: ReadonlyArray<Sense_Entity>;
  /** fetch data from the table: "sense_entity" using primary key columns */
  readonly sense_entity_by_pk?: Maybe<Sense_Entity>;
  /** fetch data from the table in a streaming manner: "sense_entity" */
  readonly sense_entity_stream: ReadonlyArray<Sense_Entity>;
  /** fetch data from the table: "Session" */
  readonly session: ReadonlyArray<Session>;
  /** fetch data from the table: "Session" using primary key columns */
  readonly session_by_pk?: Maybe<Session>;
  /** fetch data from the table in a streaming manner: "Session" */
  readonly session_stream: ReadonlyArray<Session>;
  /** fetch data from the table: "stake" */
  readonly stake: ReadonlyArray<Stake>;
  /** fetch aggregated fields from the table: "stake" */
  readonly stake_aggregate: Stake_Aggregate;
  /** fetch data from the table: "stake" using primary key columns */
  readonly stake_by_pk?: Maybe<Stake>;
  /** fetch data from the table in a streaming manner: "stake" */
  readonly stake_stream: ReadonlyArray<Stake>;
  /** fetch data from the table: "stakers" */
  readonly stakers: ReadonlyArray<Stakers>;
  /** fetch data from the table: "stakers" using primary key columns */
  readonly stakers_by_pk?: Maybe<Stakers>;
  /** fetch data from the table: "stakers_count_aggregated_daily" */
  readonly stakers_count_aggregated_daily: ReadonlyArray<Stakers_Count_Aggregated_Daily>;
  /** fetch data from the table: "stakers_count_aggregated_daily" using primary key columns */
  readonly stakers_count_aggregated_daily_by_pk?: Maybe<Stakers_Count_Aggregated_Daily>;
  /** fetch data from the table in a streaming manner: "stakers_count_aggregated_daily" */
  readonly stakers_count_aggregated_daily_stream: ReadonlyArray<Stakers_Count_Aggregated_Daily>;
  /** fetch data from the table in a streaming manner: "stakers" */
  readonly stakers_stream: ReadonlyArray<Stakers>;
  /** fetch data from the table: "stakes_per_dap_and_period" */
  readonly stakes_per_dap_and_period: ReadonlyArray<Stakes_Per_Dap_And_Period>;
  /** fetch data from the table: "stakes_per_dap_and_period" using primary key columns */
  readonly stakes_per_dap_and_period_by_pk?: Maybe<Stakes_Per_Dap_And_Period>;
  /** fetch data from the table in a streaming manner: "stakes_per_dap_and_period" */
  readonly stakes_per_dap_and_period_stream: ReadonlyArray<Stakes_Per_Dap_And_Period>;
  /** fetch data from the table: "stakes_per_staker_and_period" */
  readonly stakes_per_staker_and_period: ReadonlyArray<Stakes_Per_Staker_And_Period>;
  /** fetch data from the table: "stakes_per_staker_and_period" using primary key columns */
  readonly stakes_per_staker_and_period_by_pk?: Maybe<Stakes_Per_Staker_And_Period>;
  /** fetch data from the table in a streaming manner: "stakes_per_staker_and_period" */
  readonly stakes_per_staker_and_period_stream: ReadonlyArray<Stakes_Per_Staker_And_Period>;
  /** fetch data from the table: "staking_event" */
  readonly staking_event: ReadonlyArray<Staking_Event>;
  /** fetch data from the table: "staking_event" using primary key columns */
  readonly staking_event_by_pk?: Maybe<Staking_Event>;
  /** fetch data from the table in a streaming manner: "staking_event" */
  readonly staking_event_stream: ReadonlyArray<Staking_Event>;
  /** fetch data from the table: "subperiod" */
  readonly subperiod: ReadonlyArray<Subperiod>;
  /** fetch data from the table: "subperiod" using primary key columns */
  readonly subperiod_by_pk?: Maybe<Subperiod>;
  /** fetch data from the table in a streaming manner: "subperiod" */
  readonly subperiod_stream: ReadonlyArray<Subperiod>;
  /** fetch data from the table: "tvl_aggregated_daily" */
  readonly tvl_aggregated_daily: ReadonlyArray<Tvl_Aggregated_Daily>;
  /** fetch data from the table: "tvl_aggregated_daily" using primary key columns */
  readonly tvl_aggregated_daily_by_pk?: Maybe<Tvl_Aggregated_Daily>;
  /** fetch data from the table in a streaming manner: "tvl_aggregated_daily" */
  readonly tvl_aggregated_daily_stream: ReadonlyArray<Tvl_Aggregated_Daily>;
  /** fetch data from the table: "unique_locker_address" */
  readonly unique_locker_address: ReadonlyArray<Unique_Locker_Address>;
  /** fetch data from the table: "unique_locker_address" using primary key columns */
  readonly unique_locker_address_by_pk?: Maybe<Unique_Locker_Address>;
  /** fetch data from the table in a streaming manner: "unique_locker_address" */
  readonly unique_locker_address_stream: ReadonlyArray<Unique_Locker_Address>;
  /** fetch data from the table: "unique_staker_address" */
  readonly unique_staker_address: ReadonlyArray<Unique_Staker_Address>;
  /** fetch data from the table: "unique_staker_address" using primary key columns */
  readonly unique_staker_address_by_pk?: Maybe<Unique_Staker_Address>;
  /** fetch data from the table in a streaming manner: "unique_staker_address" */
  readonly unique_staker_address_stream: ReadonlyArray<Unique_Staker_Address>;
  /** fetch data from the table: "voting" */
  readonly voting: ReadonlyArray<Voting>;
  /** fetch data from the table: "voting" using primary key columns */
  readonly voting_by_pk?: Maybe<Voting>;
  /** fetch data from the table in a streaming manner: "voting" */
  readonly voting_stream: ReadonlyArray<Voting>;
};


export type Subscription_RootAccount_BalanceArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Account_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Account_Balance_Order_By>>;
  where?: InputMaybe<Account_Balance_Bool_Exp>;
};


export type Subscription_RootAccount_Balance_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAccount_Balance_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Account_Balance_Stream_Cursor_Input>>;
  where?: InputMaybe<Account_Balance_Bool_Exp>;
};


export type Subscription_RootAstar_Indexer_StatusArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Astar_Indexer_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Astar_Indexer_Status_Order_By>>;
  where?: InputMaybe<Astar_Indexer_Status_Bool_Exp>;
};


export type Subscription_RootAstar_Indexer_Status_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootAstar_Indexer_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Astar_Indexer_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Astar_Indexer_Status_Bool_Exp>;
};


export type Subscription_RootBalanceArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Balance_Order_By>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


export type Subscription_RootBalance_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootBalance_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Balance_Stream_Cursor_Input>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


export type Subscription_RootBattlepassArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Battlepass_Order_By>>;
  where?: InputMaybe<Battlepass_Bool_Exp>;
};


export type Subscription_RootBattlepass_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBattlepass_NftArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Battlepass_Nft_Order_By>>;
  where?: InputMaybe<Battlepass_Nft_Bool_Exp>;
};


export type Subscription_RootBattlepass_Nft_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBattlepass_Nft_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Battlepass_Nft_Stream_Cursor_Input>>;
  where?: InputMaybe<Battlepass_Nft_Bool_Exp>;
};


export type Subscription_RootBattlepass_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Battlepass_Stream_Cursor_Input>>;
  where?: InputMaybe<Battlepass_Bool_Exp>;
};


export type Subscription_RootBurnArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Burn_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Burn_Order_By>>;
  where?: InputMaybe<Burn_Bool_Exp>;
};


export type Subscription_RootBurn_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBurn_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Burn_Stream_Cursor_Input>>;
  where?: InputMaybe<Burn_Bool_Exp>;
};


export type Subscription_RootCampaignArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Subscription_RootCampaign_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Subscription_RootCampaign_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootCampaign_ContributorArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Contributor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Contributor_Order_By>>;
  where?: InputMaybe<Campaign_Contributor_Bool_Exp>;
};


export type Subscription_RootCampaign_Contributor_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootCampaign_Contributor_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Campaign_Contributor_Stream_Cursor_Input>>;
  where?: InputMaybe<Campaign_Contributor_Bool_Exp>;
};


export type Subscription_RootCampaign_MetadataArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Campaign_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Campaign_Metadata_Order_By>>;
  where?: InputMaybe<Campaign_Metadata_Bool_Exp>;
};


export type Subscription_RootCampaign_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootCampaign_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Campaign_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Campaign_Metadata_Bool_Exp>;
};


export type Subscription_RootCampaign_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Campaign_Stream_Cursor_Input>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Subscription_RootChain_InfoArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Chain_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Chain_Info_Order_By>>;
  where?: InputMaybe<Chain_Info_Bool_Exp>;
};


export type Subscription_RootChain_Info_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootChain_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Chain_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Chain_Info_Bool_Exp>;
};


export type Subscription_RootChain_StateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Chain_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Chain_State_Order_By>>;
  where?: InputMaybe<Chain_State_Bool_Exp>;
};


export type Subscription_RootChain_State_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootChain_State_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Chain_State_Stream_Cursor_Input>>;
  where?: InputMaybe<Chain_State_Bool_Exp>;
};


export type Subscription_RootCurrent_Chain_StateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Current_Chain_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Current_Chain_State_Order_By>>;
  where?: InputMaybe<Current_Chain_State_Bool_Exp>;
};


export type Subscription_RootCurrent_Chain_State_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootCurrent_Chain_State_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Current_Chain_State_Stream_Cursor_Input>>;
  where?: InputMaybe<Current_Chain_State_Bool_Exp>;
};


export type Subscription_RootDappArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Dapp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Dapp_Order_By>>;
  where?: InputMaybe<Dapp_Bool_Exp>;
};


export type Subscription_RootDapp_Aggregated_DailyArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Dapp_Aggregated_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Dapp_Aggregated_Daily_Order_By>>;
  where?: InputMaybe<Dapp_Aggregated_Daily_Bool_Exp>;
};


export type Subscription_RootDapp_Aggregated_Daily_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootDapp_Aggregated_Daily_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Dapp_Aggregated_Daily_Stream_Cursor_Input>>;
  where?: InputMaybe<Dapp_Aggregated_Daily_Bool_Exp>;
};


export type Subscription_RootDapp_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootDapp_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Dapp_Stream_Cursor_Input>>;
  where?: InputMaybe<Dapp_Bool_Exp>;
};


export type Subscription_RootGamedao_Indexer_StatusArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Gamedao_Indexer_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Gamedao_Indexer_Status_Order_By>>;
  where?: InputMaybe<Gamedao_Indexer_Status_Bool_Exp>;
};


export type Subscription_RootGamedao_Indexer_Status_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootGamedao_Indexer_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Gamedao_Indexer_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Gamedao_Indexer_Status_Bool_Exp>;
};


export type Subscription_RootGamedao_Squid_MigrationsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Gamedao_Squid_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Gamedao_Squid_Migrations_Order_By>>;
  where?: InputMaybe<Gamedao_Squid_Migrations_Bool_Exp>;
};


export type Subscription_RootGamedao_Squid_Migrations_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootGamedao_Squid_Migrations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Gamedao_Squid_Migrations_Stream_Cursor_Input>>;
  where?: InputMaybe<Gamedao_Squid_Migrations_Bool_Exp>;
};


export type Subscription_RootGrouped_Staking_EventArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Grouped_Staking_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Grouped_Staking_Event_Order_By>>;
  where?: InputMaybe<Grouped_Staking_Event_Bool_Exp>;
};


export type Subscription_RootGrouped_Staking_Event_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootGrouped_Staking_Event_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Grouped_Staking_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Grouped_Staking_Event_Bool_Exp>;
};


export type Subscription_RootHistorical_BalanceArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Historical_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Historical_Balance_Order_By>>;
  where?: InputMaybe<Historical_Balance_Bool_Exp>;
};


export type Subscription_RootHistorical_Balance_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootHistorical_Balance_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Historical_Balance_Stream_Cursor_Input>>;
  where?: InputMaybe<Historical_Balance_Bool_Exp>;
};


export type Subscription_RootIdentityArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Identity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Identity_Order_By>>;
  where?: InputMaybe<Identity_Bool_Exp>;
};


export type Subscription_RootIdentity_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootIdentity_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Identity_Stream_Cursor_Input>>;
  where?: InputMaybe<Identity_Bool_Exp>;
};


export type Subscription_RootMigrationsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Migrations_Order_By>>;
  where?: InputMaybe<Migrations_Bool_Exp>;
};


export type Subscription_RootMigrations_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMigrations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Migrations_Stream_Cursor_Input>>;
  where?: InputMaybe<Migrations_Bool_Exp>;
};


export type Subscription_RootNftArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


export type Subscription_RootNft_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootNft_CollectionArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Nft_Collection_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Nft_Collection_Order_By>>;
  where?: InputMaybe<Nft_Collection_Bool_Exp>;
};


export type Subscription_RootNft_Collection_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootNft_Collection_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Nft_Collection_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_Collection_Bool_Exp>;
};


export type Subscription_RootNft_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Nft_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


export type Subscription_RootOrganizationArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootOrganization_MemberArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


export type Subscription_RootOrganization_Member_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Member_Order_By>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


export type Subscription_RootOrganization_Member_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootOrganization_Member_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Organization_Member_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Member_Bool_Exp>;
};


export type Subscription_RootOrganization_MetadataArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Organization_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Organization_Metadata_Order_By>>;
  where?: InputMaybe<Organization_Metadata_Bool_Exp>;
};


export type Subscription_RootOrganization_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootOrganization_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Organization_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Metadata_Bool_Exp>;
};


export type Subscription_RootOrganization_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Organization_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootProposalArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootProposal_MetadataArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Metadata_Order_By>>;
  where?: InputMaybe<Proposal_Metadata_Bool_Exp>;
};


export type Subscription_RootProposal_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootProposal_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Proposal_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Metadata_Bool_Exp>;
};


export type Subscription_RootProposal_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Proposal_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_VoterArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Voter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Voter_Order_By>>;
  where?: InputMaybe<Proposal_Voter_Bool_Exp>;
};


export type Subscription_RootProposal_Voter_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootProposal_Voter_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Proposal_Voter_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Voter_Bool_Exp>;
};


export type Subscription_RootReward_Aggregated_DailyArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reward_Aggregated_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Reward_Aggregated_Daily_Order_By>>;
  where?: InputMaybe<Reward_Aggregated_Daily_Bool_Exp>;
};


export type Subscription_RootReward_Aggregated_Daily_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootReward_Aggregated_Daily_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Reward_Aggregated_Daily_Stream_Cursor_Input>>;
  where?: InputMaybe<Reward_Aggregated_Daily_Bool_Exp>;
};


export type Subscription_RootReward_EventArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Reward_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Reward_Event_Order_By>>;
  where?: InputMaybe<Reward_Event_Bool_Exp>;
};


export type Subscription_RootReward_Event_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootReward_Event_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Reward_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Reward_Event_Bool_Exp>;
};


export type Subscription_RootSense_EntityArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Sense_Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Sense_Entity_Order_By>>;
  where?: InputMaybe<Sense_Entity_Bool_Exp>;
};


export type Subscription_RootSense_Entity_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootSense_Entity_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Sense_Entity_Stream_Cursor_Input>>;
  where?: InputMaybe<Sense_Entity_Bool_Exp>;
};


export type Subscription_RootSessionArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Session_Order_By>>;
  where?: InputMaybe<Session_Bool_Exp>;
};


export type Subscription_RootSession_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootSession_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Session_Stream_Cursor_Input>>;
  where?: InputMaybe<Session_Bool_Exp>;
};


export type Subscription_RootStakeArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Stake_Order_By>>;
  where?: InputMaybe<Stake_Bool_Exp>;
};


export type Subscription_RootStake_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Stake_Order_By>>;
  where?: InputMaybe<Stake_Bool_Exp>;
};


export type Subscription_RootStake_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootStake_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Stake_Stream_Cursor_Input>>;
  where?: InputMaybe<Stake_Bool_Exp>;
};


export type Subscription_RootStakersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Stakers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Stakers_Order_By>>;
  where?: InputMaybe<Stakers_Bool_Exp>;
};


export type Subscription_RootStakers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootStakers_Count_Aggregated_DailyArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Stakers_Count_Aggregated_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Stakers_Count_Aggregated_Daily_Order_By>>;
  where?: InputMaybe<Stakers_Count_Aggregated_Daily_Bool_Exp>;
};


export type Subscription_RootStakers_Count_Aggregated_Daily_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootStakers_Count_Aggregated_Daily_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Stakers_Count_Aggregated_Daily_Stream_Cursor_Input>>;
  where?: InputMaybe<Stakers_Count_Aggregated_Daily_Bool_Exp>;
};


export type Subscription_RootStakers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Stakers_Stream_Cursor_Input>>;
  where?: InputMaybe<Stakers_Bool_Exp>;
};


export type Subscription_RootStakes_Per_Dap_And_PeriodArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Stakes_Per_Dap_And_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Stakes_Per_Dap_And_Period_Order_By>>;
  where?: InputMaybe<Stakes_Per_Dap_And_Period_Bool_Exp>;
};


export type Subscription_RootStakes_Per_Dap_And_Period_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootStakes_Per_Dap_And_Period_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Stakes_Per_Dap_And_Period_Stream_Cursor_Input>>;
  where?: InputMaybe<Stakes_Per_Dap_And_Period_Bool_Exp>;
};


export type Subscription_RootStakes_Per_Staker_And_PeriodArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Stakes_Per_Staker_And_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Stakes_Per_Staker_And_Period_Order_By>>;
  where?: InputMaybe<Stakes_Per_Staker_And_Period_Bool_Exp>;
};


export type Subscription_RootStakes_Per_Staker_And_Period_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootStakes_Per_Staker_And_Period_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Stakes_Per_Staker_And_Period_Stream_Cursor_Input>>;
  where?: InputMaybe<Stakes_Per_Staker_And_Period_Bool_Exp>;
};


export type Subscription_RootStaking_EventArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Staking_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Staking_Event_Order_By>>;
  where?: InputMaybe<Staking_Event_Bool_Exp>;
};


export type Subscription_RootStaking_Event_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootStaking_Event_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Staking_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Staking_Event_Bool_Exp>;
};


export type Subscription_RootSubperiodArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Subperiod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Subperiod_Order_By>>;
  where?: InputMaybe<Subperiod_Bool_Exp>;
};


export type Subscription_RootSubperiod_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootSubperiod_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Subperiod_Stream_Cursor_Input>>;
  where?: InputMaybe<Subperiod_Bool_Exp>;
};


export type Subscription_RootTvl_Aggregated_DailyArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Tvl_Aggregated_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Tvl_Aggregated_Daily_Order_By>>;
  where?: InputMaybe<Tvl_Aggregated_Daily_Bool_Exp>;
};


export type Subscription_RootTvl_Aggregated_Daily_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootTvl_Aggregated_Daily_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Tvl_Aggregated_Daily_Stream_Cursor_Input>>;
  where?: InputMaybe<Tvl_Aggregated_Daily_Bool_Exp>;
};


export type Subscription_RootUnique_Locker_AddressArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Unique_Locker_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Unique_Locker_Address_Order_By>>;
  where?: InputMaybe<Unique_Locker_Address_Bool_Exp>;
};


export type Subscription_RootUnique_Locker_Address_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUnique_Locker_Address_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Unique_Locker_Address_Stream_Cursor_Input>>;
  where?: InputMaybe<Unique_Locker_Address_Bool_Exp>;
};


export type Subscription_RootUnique_Staker_AddressArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Unique_Staker_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Unique_Staker_Address_Order_By>>;
  where?: InputMaybe<Unique_Staker_Address_Bool_Exp>;
};


export type Subscription_RootUnique_Staker_Address_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUnique_Staker_Address_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Unique_Staker_Address_Stream_Cursor_Input>>;
  where?: InputMaybe<Unique_Staker_Address_Bool_Exp>;
};


export type Subscription_RootVotingArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Voting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Voting_Order_By>>;
  where?: InputMaybe<Voting_Bool_Exp>;
};


export type Subscription_RootVoting_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootVoting_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: ReadonlyArray<InputMaybe<Voting_Stream_Cursor_Input>>;
  where?: InputMaybe<Voting_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['timestamp']['input']>;
  readonly _gt?: InputMaybe<Scalars['timestamp']['input']>;
  readonly _gte?: InputMaybe<Scalars['timestamp']['input']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['timestamp']['input']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly _lt?: InputMaybe<Scalars['timestamp']['input']>;
  readonly _lte?: InputMaybe<Scalars['timestamp']['input']>;
  readonly _neq?: InputMaybe<Scalars['timestamp']['input']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  readonly _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  readonly _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['timestamptz']['input']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  readonly _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  readonly _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "tvl_aggregated_daily" */
export type Tvl_Aggregated_Daily = {
  readonly __typename?: 'tvl_aggregated_daily';
  readonly block_number: Scalars['Int']['output'];
  readonly id: Scalars['String']['output'];
  readonly lockers_count: Scalars['Int']['output'];
  readonly tvl: Scalars['numeric']['output'];
  readonly usd_price: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "tvl_aggregated_daily". All fields are combined with a logical 'AND'. */
export type Tvl_Aggregated_Daily_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Tvl_Aggregated_Daily_Bool_Exp>>;
  readonly _not?: InputMaybe<Tvl_Aggregated_Daily_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Tvl_Aggregated_Daily_Bool_Exp>>;
  readonly block_number?: InputMaybe<Int_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly lockers_count?: InputMaybe<Int_Comparison_Exp>;
  readonly tvl?: InputMaybe<Numeric_Comparison_Exp>;
  readonly usd_price?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "tvl_aggregated_daily". */
export type Tvl_Aggregated_Daily_Order_By = {
  readonly block_number?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly lockers_count?: InputMaybe<Order_By>;
  readonly tvl?: InputMaybe<Order_By>;
  readonly usd_price?: InputMaybe<Order_By>;
};

/** select columns of table "tvl_aggregated_daily" */
export enum Tvl_Aggregated_Daily_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  Id = 'id',
  /** column name */
  LockersCount = 'lockers_count',
  /** column name */
  Tvl = 'tvl',
  /** column name */
  UsdPrice = 'usd_price'
}

/** Streaming cursor of the table "tvl_aggregated_daily" */
export type Tvl_Aggregated_Daily_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Tvl_Aggregated_Daily_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tvl_Aggregated_Daily_Stream_Cursor_Value_Input = {
  readonly block_number?: InputMaybe<Scalars['Int']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lockers_count?: InputMaybe<Scalars['Int']['input']>;
  readonly tvl?: InputMaybe<Scalars['numeric']['input']>;
  readonly usd_price?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "unique_locker_address" */
export type Unique_Locker_Address = {
  readonly __typename?: 'unique_locker_address';
  readonly amount: Scalars['numeric']['output'];
  readonly id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "unique_locker_address". All fields are combined with a logical 'AND'. */
export type Unique_Locker_Address_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Unique_Locker_Address_Bool_Exp>>;
  readonly _not?: InputMaybe<Unique_Locker_Address_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Unique_Locker_Address_Bool_Exp>>;
  readonly amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "unique_locker_address". */
export type Unique_Locker_Address_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** select columns of table "unique_locker_address" */
export enum Unique_Locker_Address_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "unique_locker_address" */
export type Unique_Locker_Address_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Unique_Locker_Address_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Unique_Locker_Address_Stream_Cursor_Value_Input = {
  readonly amount?: InputMaybe<Scalars['numeric']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "unique_staker_address" */
export type Unique_Staker_Address = {
  readonly __typename?: 'unique_staker_address';
  readonly id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "unique_staker_address". All fields are combined with a logical 'AND'. */
export type Unique_Staker_Address_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Unique_Staker_Address_Bool_Exp>>;
  readonly _not?: InputMaybe<Unique_Staker_Address_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Unique_Staker_Address_Bool_Exp>>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "unique_staker_address". */
export type Unique_Staker_Address_Order_By = {
  readonly id?: InputMaybe<Order_By>;
};

/** select columns of table "unique_staker_address" */
export enum Unique_Staker_Address_Select_Column {
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "unique_staker_address" */
export type Unique_Staker_Address_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Unique_Staker_Address_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Unique_Staker_Address_Stream_Cursor_Value_Input = {
  readonly id?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "voting" */
export type Voting = {
  readonly __typename?: 'voting';
  readonly id: Scalars['String']['output'];
  readonly majority: Scalars['String']['output'];
  readonly no: Scalars['numeric']['output'];
  /** An array relationship */
  readonly proposal_voters: ReadonlyArray<Proposal_Voter>;
  /** An array relationship */
  readonly proposals: ReadonlyArray<Proposal>;
  /** An aggregate relationship */
  readonly proposals_aggregate: Proposal_Aggregate;
  readonly quorum?: Maybe<Scalars['String']['output']>;
  readonly scale: Scalars['String']['output'];
  readonly unit: Scalars['String']['output'];
  readonly yes: Scalars['numeric']['output'];
};


/** columns and relationships of "voting" */
export type VotingProposal_VotersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Voter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Voter_Order_By>>;
  where?: InputMaybe<Proposal_Voter_Bool_Exp>;
};


/** columns and relationships of "voting" */
export type VotingProposalsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "voting" */
export type VotingProposals_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "voting". All fields are combined with a logical 'AND'. */
export type Voting_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Voting_Bool_Exp>>;
  readonly _not?: InputMaybe<Voting_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Voting_Bool_Exp>>;
  readonly id?: InputMaybe<String_Comparison_Exp>;
  readonly majority?: InputMaybe<String_Comparison_Exp>;
  readonly no?: InputMaybe<Numeric_Comparison_Exp>;
  readonly proposal_voters?: InputMaybe<Proposal_Voter_Bool_Exp>;
  readonly proposals?: InputMaybe<Proposal_Bool_Exp>;
  readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>;
  readonly quorum?: InputMaybe<String_Comparison_Exp>;
  readonly scale?: InputMaybe<String_Comparison_Exp>;
  readonly unit?: InputMaybe<String_Comparison_Exp>;
  readonly yes?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "voting". */
export type Voting_Order_By = {
  readonly id?: InputMaybe<Order_By>;
  readonly majority?: InputMaybe<Order_By>;
  readonly no?: InputMaybe<Order_By>;
  readonly proposal_voters_aggregate?: InputMaybe<Proposal_Voter_Aggregate_Order_By>;
  readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>;
  readonly quorum?: InputMaybe<Order_By>;
  readonly scale?: InputMaybe<Order_By>;
  readonly unit?: InputMaybe<Order_By>;
  readonly yes?: InputMaybe<Order_By>;
};

/** select columns of table "voting" */
export enum Voting_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Majority = 'majority',
  /** column name */
  No = 'no',
  /** column name */
  Quorum = 'quorum',
  /** column name */
  Scale = 'scale',
  /** column name */
  Unit = 'unit',
  /** column name */
  Yes = 'yes'
}

/** Streaming cursor of the table "voting" */
export type Voting_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Voting_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Voting_Stream_Cursor_Value_Input = {
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly majority?: InputMaybe<Scalars['String']['input']>;
  readonly no?: InputMaybe<Scalars['numeric']['input']>;
  readonly quorum?: InputMaybe<Scalars['String']['input']>;
  readonly scale?: InputMaybe<Scalars['String']['input']>;
  readonly unit?: InputMaybe<Scalars['String']['input']>;
  readonly yes?: InputMaybe<Scalars['numeric']['input']>;
};

export type AstarDappStakingEventsQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<Scalars['Int']['input']>;
  dapp?: InputMaybe<Scalars['String']['input']>;
}>;


export type AstarDappStakingEventsQuery = { readonly __typename?: 'query_root', readonly stake: ReadonlyArray<{ readonly __typename?: 'stake', readonly id: string, readonly dapp_address: string, readonly block_number: number, readonly amount: any, readonly period: number, readonly staker_address: string, readonly timestamp: any }> };

export type AstarDappStakingEventsAggregateQueryVariables = Exact<{
  dapp?: InputMaybe<Scalars['String']['input']>;
}>;


export type AstarDappStakingEventsAggregateQuery = { readonly __typename?: 'query_root', readonly stake_aggregate: { readonly __typename?: 'stake_aggregate', readonly nodes: ReadonlyArray<{ readonly __typename?: 'stake', readonly block_number: number, readonly amount: any, readonly staker_address: string }> } };

export type CurrentDappStakeSubscriptionVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CurrentDappStakeSubscription = { readonly __typename?: 'subscription_root', readonly stakes_per_dap_and_period: ReadonlyArray<{ readonly __typename?: 'stakes_per_dap_and_period', readonly stake_amount: any, readonly period: number, readonly reward_amount: any }> };

export type AstarDappContentQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type AstarDappContentQuery = { readonly __typename?: 'query_root', readonly dAppContent?: ReadonlyArray<{ readonly __typename?: 'DAppContent', readonly address?: string | null, readonly creationTime?: number | null, readonly iconUrl?: string | null, readonly imagesUrl?: ReadonlyArray<string | null> | null, readonly mainCategory?: string | null, readonly name?: string | null, readonly shortDescription?: string | null } | null> | null };

export type StakersPerDappSubscriptionVariables = Exact<{
  dapp: Scalars['String']['input'];
}>;


export type StakersPerDappSubscription = { readonly __typename?: 'subscription_root', readonly stakers: ReadonlyArray<{ readonly __typename?: 'stakers', readonly amount: any, readonly dapp_address: string, readonly id: string, readonly staker_address: string }> };

export type StakesPerDappAndPeriodSubscriptionVariables = Exact<{
  dapp: Scalars['String']['input'];
  period: Scalars['Int']['input'];
}>;


export type StakesPerDappAndPeriodSubscription = { readonly __typename?: 'subscription_root', readonly stakes_per_dap_and_period: ReadonlyArray<{ readonly __typename?: 'stakes_per_dap_and_period', readonly dapp_address: string, readonly id: string, readonly period: number, readonly reward_amount: any, readonly stake_amount: any }> };

export type CurrentTvlSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type CurrentTvlSubscription = { readonly __typename?: 'subscription_root', readonly tvl_aggregated_daily: ReadonlyArray<{ readonly __typename?: 'tvl_aggregated_daily', readonly block_number: number, readonly tvl: any, readonly usd_price: any, readonly lockers_count: number, readonly id: string }> };

export type StakesPerStakerAndPeriodSubscriptionVariables = Exact<{
  dapp: Scalars['String']['input'];
}>;


export type StakesPerStakerAndPeriodSubscription = { readonly __typename?: 'subscription_root', readonly stakes_per_dap_and_period: ReadonlyArray<{ readonly __typename?: 'stakes_per_dap_and_period', readonly id: string, readonly stake_amount: any }> };

export type StakingDataSubscriptionVariables = Exact<{
  dapp_address: Scalars['String']['input'];
  staker_address: Scalars['String']['input'];
}>;


export type StakingDataSubscription = { readonly __typename?: 'subscription_root', readonly stake: ReadonlyArray<{ readonly __typename?: 'stake', readonly amount: any, readonly block_number: number, readonly dapp_address: string, readonly period: number, readonly staker_address: string, readonly timestamp: any }> };

export type DappDataQueryVariables = Exact<{
  dapp_address: Scalars['String']['input'];
  staker_address: Scalars['String']['input'];
}>;


export type DappDataQuery = { readonly __typename?: 'query_root', readonly dapp: ReadonlyArray<{ readonly __typename?: 'dapp', readonly dapp_id: number, readonly beneficiary?: string | null, readonly owner: string, readonly id: string }> };

export type BalanceByAddressSubscriptionVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type BalanceByAddressSubscription = { readonly __typename?: 'subscription_root', readonly balance: ReadonlyArray<{ readonly __typename?: 'balance', readonly id: any, readonly address: string, readonly balanceId: number, readonly free: string, readonly frozen: string, readonly reserved: string }> };

export type HistoricalBalanceSubscriptionVariables = Exact<{
  address: Scalars['String']['input'];
  symbol?: InputMaybe<Scalars['String']['input']>;
}>;


export type HistoricalBalanceSubscription = { readonly __typename?: 'subscription_root', readonly historical_balance: ReadonlyArray<{ readonly __typename?: 'historical_balance', readonly id: string, readonly block: number, readonly free: any, readonly reserved: any, readonly total: any, readonly currency_id: string }> };

export type CollectablesForUserQueryVariables = Exact<{
  owner: Scalars['String']['input'];
}>;


export type CollectablesForUserQuery = { readonly __typename?: 'query_root', readonly rmrkNfts?: ReadonlyArray<{ readonly __typename?: 'RMRKNft', readonly id: string, readonly metadata: string, readonly sn: string } | null> | null };

export type ProposalsByOrganizationIdSubscriptionVariables = Exact<{
  orgId: Scalars['String']['input'];
}>;


export type ProposalsByOrganizationIdSubscription = { readonly __typename?: 'subscription_root', readonly proposal: ReadonlyArray<{ readonly __typename?: 'proposal', readonly id: string, readonly creator: string, readonly state: string, readonly start: number, readonly created_at_block: number, readonly expiry: number, readonly name: string, readonly description: string }> };

export type ProposalByIdSubscriptionVariables = Exact<{
  proposalId: Scalars['String']['input'];
}>;


export type ProposalByIdSubscription = { readonly __typename?: 'subscription_root', readonly proposal: ReadonlyArray<{ readonly __typename?: 'proposal', readonly id: string, readonly type: string, readonly state: string, readonly created_at_block: number, readonly start: number, readonly expiry: number, readonly name: string, readonly description: string, readonly identity?: { readonly __typename?: 'identity', readonly id: string, readonly display_name?: string | null } | null, readonly voting?: { readonly __typename?: 'voting', readonly proposal_voters: ReadonlyArray<{ readonly __typename?: 'proposal_voter', readonly voted: boolean, readonly identity?: { readonly __typename?: 'identity', readonly id: string, readonly display_name?: string | null } | null }> } | null }> };

export type OrganizationByIdSubscriptionVariables = Exact<{
  orgId: Scalars['String']['input'];
}>;


export type OrganizationByIdSubscription = { readonly __typename?: 'subscription_root', readonly organization: ReadonlyArray<{ readonly __typename?: 'organization', readonly access_model: string, readonly creator: string, readonly created_at_block: number, readonly fee_model: string, readonly gov_currency: string, readonly id: string, readonly member_limit: number, readonly pay_currency: string, readonly prime: string, readonly treasury: string, readonly type: string, readonly description: string, readonly email: string, readonly logo: string, readonly header: string, readonly name: string, readonly repo: string, readonly website: string, readonly url: string, readonly location: string, readonly tags: ReadonlyArray<string>, readonly organization_members: ReadonlyArray<{ readonly __typename?: 'organization_member', readonly address: string, readonly state: string, readonly identity?: { readonly __typename?: 'identity', readonly id: string, readonly email?: string | null, readonly display_name?: string | null } | null }>, readonly organization_members_aggregate: { readonly __typename?: 'organization_member_aggregate', readonly aggregate?: { readonly __typename?: 'organization_member_aggregate_fields', readonly count: number } | null }, readonly campaigns_aggregate: { readonly __typename?: 'campaign_aggregate', readonly aggregate?: { readonly __typename?: 'campaign_aggregate_fields', readonly count: number } | null, readonly nodes: ReadonlyArray<{ readonly __typename?: 'campaign', readonly id: string, readonly state: string }> }, readonly proposals_aggregate: { readonly __typename?: 'proposal_aggregate', readonly nodes: ReadonlyArray<{ readonly __typename?: 'proposal', readonly id: string, readonly type: string }>, readonly aggregate?: { readonly __typename?: 'proposal_aggregate_fields', readonly count: number } | null } }> };

export type OrganizationsByAccountSubscriptionVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type OrganizationsByAccountSubscription = { readonly __typename?: 'subscription_root', readonly organization: ReadonlyArray<{ readonly __typename?: 'organization', readonly id: string, readonly name: string, readonly description: string, readonly creator: string, readonly prime: string, readonly member_limit: number, readonly membership_fee?: any | null, readonly access_model: string, readonly deposit: any, readonly slug: string, readonly logo: string, readonly organization_members_aggregate: { readonly __typename?: 'organization_member_aggregate', readonly aggregate?: { readonly __typename?: 'organization_member_aggregate_fields', readonly count: number } | null }, readonly organization_members: ReadonlyArray<{ readonly __typename?: 'organization_member', readonly address: string, readonly state: string }> }> };

export type IdentityByAddressSubscriptionVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type IdentityByAddressSubscription = { readonly __typename?: 'subscription_root', readonly identity_by_pk?: { readonly __typename?: 'identity', readonly id: string, readonly email?: string | null, readonly display_name?: string | null, readonly image?: string | null, readonly legal_name?: string | null, readonly riot?: string | null, readonly twitter?: string | null, readonly web?: string | null, readonly web3name?: string | null, readonly discord?: string | null } | null };

export type BlockNumberSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type BlockNumberSubscription = { readonly __typename?: 'subscription_root', readonly chain_info: ReadonlyArray<{ readonly __typename?: 'chain_info', readonly blockNumber: any }> };

export type ConfigQueryVariables = Exact<{
  env: Environment;
}>;


export type ConfigQuery = { readonly __typename?: 'query_root', readonly config: { readonly __typename?: 'Config', readonly SITE_NAME?: string | null, readonly SITE_TITLE?: string | null, readonly SITE_DESCRIPTION?: string | null, readonly SITE_IMAGE?: string | null, readonly TW_SITE_NAME?: string | null, readonly TW_SITE_CREATOR?: string | null, readonly CONTACT?: string | null, readonly IPFS_GATEWAY?: string | null, readonly LOG_LEVEL?: LogLevel | null, readonly PROPOSAL_MIN_EXPIRY_IN_SECONDS?: string | null, readonly CAMPAIGN_MIN_EXPIRY_IN_SECONDS?: string | null } };

export type ApiProviderConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type ApiProviderConfigQuery = { readonly __typename?: 'query_root', readonly apiProvider: { readonly __typename?: 'ApiProvider', readonly name: string, readonly types: string, readonly wsProviderUrl: string, readonly chainProperties: { readonly __typename?: 'ChainProperties', readonly governanceCurrency: number, readonly networkCurrency: number, readonly paymentCurrencies: number, readonly ss58Format: number, readonly tokenDecimals: ReadonlyArray<string | null>, readonly tokenSymbol: ReadonlyArray<string | null>, readonly blockTargetTime: number } } };

export type FeaturesQueryVariables = Exact<{
  env: Environment;
}>;


export type FeaturesQuery = { readonly __typename?: 'query_root', readonly features: { readonly __typename?: 'Features', readonly CREATE_PROPOSAL: boolean, readonly CREATE_PROPOSAL_SIMPLE_MAJORITY: boolean, readonly CREATE_PROPOSAL_RELATIVE_MAJORITY: boolean, readonly CREATE_GENERAL_PROPOSAL: boolean, readonly CREATE_WITHDRAW_PROPOSAL: boolean, readonly CREATE_SPENDING_PROPOSAL: boolean, readonly ORGANIZATION_PAGE_SHOW_FILTERS: boolean, readonly ORGANIZATION_PAGE_SHOW_SEARCH: boolean, readonly ORGANIZATION_PAGE_SHOW_SORT: boolean } };

export type UpdateSessionMutationVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type UpdateSessionMutation = { readonly __typename?: 'mutation_root', readonly updateSession: boolean };


export const AstarDappStakingEventsDocument = gql`
    query AstarDappStakingEvents($address: String, $period: Int, $dapp: String) {
  stake(
    where: {dapp_address: {_eq: $dapp}, staker_address: {_eq: $address}, period: {_eq: $period}}
  ) {
    id
    dapp_address
    block_number
    amount
    period
    staker_address
    timestamp
  }
}
    `;

/**
 * __useAstarDappStakingEventsQuery__
 *
 * To run a query within a React component, call `useAstarDappStakingEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAstarDappStakingEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAstarDappStakingEventsQuery({
 *   variables: {
 *      address: // value for 'address'
 *      period: // value for 'period'
 *      dapp: // value for 'dapp'
 *   },
 * });
 */
export function useAstarDappStakingEventsQuery(baseOptions?: Apollo.QueryHookOptions<AstarDappStakingEventsQuery, AstarDappStakingEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AstarDappStakingEventsQuery, AstarDappStakingEventsQueryVariables>(AstarDappStakingEventsDocument, options);
      }
export function useAstarDappStakingEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AstarDappStakingEventsQuery, AstarDappStakingEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AstarDappStakingEventsQuery, AstarDappStakingEventsQueryVariables>(AstarDappStakingEventsDocument, options);
        }
export function useAstarDappStakingEventsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AstarDappStakingEventsQuery, AstarDappStakingEventsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AstarDappStakingEventsQuery, AstarDappStakingEventsQueryVariables>(AstarDappStakingEventsDocument, options);
        }
export type AstarDappStakingEventsQueryHookResult = ReturnType<typeof useAstarDappStakingEventsQuery>;
export type AstarDappStakingEventsLazyQueryHookResult = ReturnType<typeof useAstarDappStakingEventsLazyQuery>;
export type AstarDappStakingEventsSuspenseQueryHookResult = ReturnType<typeof useAstarDappStakingEventsSuspenseQuery>;
export type AstarDappStakingEventsQueryResult = Apollo.QueryResult<AstarDappStakingEventsQuery, AstarDappStakingEventsQueryVariables>;
export const AstarDappStakingEventsAggregateDocument = gql`
    query AstarDappStakingEventsAggregate($dapp: String) {
  stake_aggregate(where: {dapp_address: {_eq: $dapp}}) {
    nodes {
      block_number
      amount
      staker_address
    }
  }
}
    `;

/**
 * __useAstarDappStakingEventsAggregateQuery__
 *
 * To run a query within a React component, call `useAstarDappStakingEventsAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useAstarDappStakingEventsAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAstarDappStakingEventsAggregateQuery({
 *   variables: {
 *      dapp: // value for 'dapp'
 *   },
 * });
 */
export function useAstarDappStakingEventsAggregateQuery(baseOptions?: Apollo.QueryHookOptions<AstarDappStakingEventsAggregateQuery, AstarDappStakingEventsAggregateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AstarDappStakingEventsAggregateQuery, AstarDappStakingEventsAggregateQueryVariables>(AstarDappStakingEventsAggregateDocument, options);
      }
export function useAstarDappStakingEventsAggregateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AstarDappStakingEventsAggregateQuery, AstarDappStakingEventsAggregateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AstarDappStakingEventsAggregateQuery, AstarDappStakingEventsAggregateQueryVariables>(AstarDappStakingEventsAggregateDocument, options);
        }
export function useAstarDappStakingEventsAggregateSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AstarDappStakingEventsAggregateQuery, AstarDappStakingEventsAggregateQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AstarDappStakingEventsAggregateQuery, AstarDappStakingEventsAggregateQueryVariables>(AstarDappStakingEventsAggregateDocument, options);
        }
export type AstarDappStakingEventsAggregateQueryHookResult = ReturnType<typeof useAstarDappStakingEventsAggregateQuery>;
export type AstarDappStakingEventsAggregateLazyQueryHookResult = ReturnType<typeof useAstarDappStakingEventsAggregateLazyQuery>;
export type AstarDappStakingEventsAggregateSuspenseQueryHookResult = ReturnType<typeof useAstarDappStakingEventsAggregateSuspenseQuery>;
export type AstarDappStakingEventsAggregateQueryResult = Apollo.QueryResult<AstarDappStakingEventsAggregateQuery, AstarDappStakingEventsAggregateQueryVariables>;
export const CurrentDappStakeDocument = gql`
    subscription CurrentDappStake($id: String, $period: Int) {
  stakes_per_dap_and_period(
    where: {dapp_address: {_eq: $id}, period: {_eq: $period}}
  ) {
    stake_amount
    period
    reward_amount
  }
}
    `;

/**
 * __useCurrentDappStakeSubscription__
 *
 * To run a query within a React component, call `useCurrentDappStakeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCurrentDappStakeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentDappStakeSubscription({
 *   variables: {
 *      id: // value for 'id'
 *      period: // value for 'period'
 *   },
 * });
 */
export function useCurrentDappStakeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<CurrentDappStakeSubscription, CurrentDappStakeSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CurrentDappStakeSubscription, CurrentDappStakeSubscriptionVariables>(CurrentDappStakeDocument, options);
      }
export type CurrentDappStakeSubscriptionHookResult = ReturnType<typeof useCurrentDappStakeSubscription>;
export type CurrentDappStakeSubscriptionResult = Apollo.SubscriptionResult<CurrentDappStakeSubscription>;
export const AstarDappContentDocument = gql`
    query AstarDappContent($id: String) {
  dAppContent(id: $id) {
    address
    creationTime
    iconUrl
    imagesUrl
    mainCategory
    name
    shortDescription
  }
}
    `;

/**
 * __useAstarDappContentQuery__
 *
 * To run a query within a React component, call `useAstarDappContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useAstarDappContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAstarDappContentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAstarDappContentQuery(baseOptions?: Apollo.QueryHookOptions<AstarDappContentQuery, AstarDappContentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AstarDappContentQuery, AstarDappContentQueryVariables>(AstarDappContentDocument, options);
      }
export function useAstarDappContentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AstarDappContentQuery, AstarDappContentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AstarDappContentQuery, AstarDappContentQueryVariables>(AstarDappContentDocument, options);
        }
export function useAstarDappContentSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AstarDappContentQuery, AstarDappContentQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AstarDappContentQuery, AstarDappContentQueryVariables>(AstarDappContentDocument, options);
        }
export type AstarDappContentQueryHookResult = ReturnType<typeof useAstarDappContentQuery>;
export type AstarDappContentLazyQueryHookResult = ReturnType<typeof useAstarDappContentLazyQuery>;
export type AstarDappContentSuspenseQueryHookResult = ReturnType<typeof useAstarDappContentSuspenseQuery>;
export type AstarDappContentQueryResult = Apollo.QueryResult<AstarDappContentQuery, AstarDappContentQueryVariables>;
export const StakersPerDappDocument = gql`
    subscription StakersPerDapp($dapp: String!) {
  stakers(where: {dapp_address: {_eq: $dapp}}) {
    amount
    dapp_address
    id
    staker_address
  }
}
    `;

/**
 * __useStakersPerDappSubscription__
 *
 * To run a query within a React component, call `useStakersPerDappSubscription` and pass it any options that fit your needs.
 * When your component renders, `useStakersPerDappSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStakersPerDappSubscription({
 *   variables: {
 *      dapp: // value for 'dapp'
 *   },
 * });
 */
export function useStakersPerDappSubscription(baseOptions: Apollo.SubscriptionHookOptions<StakersPerDappSubscription, StakersPerDappSubscriptionVariables> & ({ variables: StakersPerDappSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<StakersPerDappSubscription, StakersPerDappSubscriptionVariables>(StakersPerDappDocument, options);
      }
export type StakersPerDappSubscriptionHookResult = ReturnType<typeof useStakersPerDappSubscription>;
export type StakersPerDappSubscriptionResult = Apollo.SubscriptionResult<StakersPerDappSubscription>;
export const StakesPerDappAndPeriodDocument = gql`
    subscription StakesPerDappAndPeriod($dapp: String!, $period: Int!) {
  stakes_per_dap_and_period(
    where: {dapp_address: {_eq: $dapp}, period: {_eq: $period}}
  ) {
    dapp_address
    id
    period
    reward_amount
    stake_amount
  }
}
    `;

/**
 * __useStakesPerDappAndPeriodSubscription__
 *
 * To run a query within a React component, call `useStakesPerDappAndPeriodSubscription` and pass it any options that fit your needs.
 * When your component renders, `useStakesPerDappAndPeriodSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStakesPerDappAndPeriodSubscription({
 *   variables: {
 *      dapp: // value for 'dapp'
 *      period: // value for 'period'
 *   },
 * });
 */
export function useStakesPerDappAndPeriodSubscription(baseOptions: Apollo.SubscriptionHookOptions<StakesPerDappAndPeriodSubscription, StakesPerDappAndPeriodSubscriptionVariables> & ({ variables: StakesPerDappAndPeriodSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<StakesPerDappAndPeriodSubscription, StakesPerDappAndPeriodSubscriptionVariables>(StakesPerDappAndPeriodDocument, options);
      }
export type StakesPerDappAndPeriodSubscriptionHookResult = ReturnType<typeof useStakesPerDappAndPeriodSubscription>;
export type StakesPerDappAndPeriodSubscriptionResult = Apollo.SubscriptionResult<StakesPerDappAndPeriodSubscription>;
export const CurrentTvlDocument = gql`
    subscription CurrentTVL {
  tvl_aggregated_daily(limit: 1, order_by: {block_number: desc}) {
    block_number
    tvl
    usd_price
    lockers_count
    id
  }
}
    `;

/**
 * __useCurrentTvlSubscription__
 *
 * To run a query within a React component, call `useCurrentTvlSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCurrentTvlSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentTvlSubscription({
 *   variables: {
 *   },
 * });
 */
export function useCurrentTvlSubscription(baseOptions?: Apollo.SubscriptionHookOptions<CurrentTvlSubscription, CurrentTvlSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CurrentTvlSubscription, CurrentTvlSubscriptionVariables>(CurrentTvlDocument, options);
      }
export type CurrentTvlSubscriptionHookResult = ReturnType<typeof useCurrentTvlSubscription>;
export type CurrentTvlSubscriptionResult = Apollo.SubscriptionResult<CurrentTvlSubscription>;
export const StakesPerStakerAndPeriodDocument = gql`
    subscription StakesPerStakerAndPeriod($dapp: String!) {
  stakes_per_dap_and_period(where: {dapp_address: {_eq: $dapp}}) {
    id
    stake_amount
  }
}
    `;

/**
 * __useStakesPerStakerAndPeriodSubscription__
 *
 * To run a query within a React component, call `useStakesPerStakerAndPeriodSubscription` and pass it any options that fit your needs.
 * When your component renders, `useStakesPerStakerAndPeriodSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStakesPerStakerAndPeriodSubscription({
 *   variables: {
 *      dapp: // value for 'dapp'
 *   },
 * });
 */
export function useStakesPerStakerAndPeriodSubscription(baseOptions: Apollo.SubscriptionHookOptions<StakesPerStakerAndPeriodSubscription, StakesPerStakerAndPeriodSubscriptionVariables> & ({ variables: StakesPerStakerAndPeriodSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<StakesPerStakerAndPeriodSubscription, StakesPerStakerAndPeriodSubscriptionVariables>(StakesPerStakerAndPeriodDocument, options);
      }
export type StakesPerStakerAndPeriodSubscriptionHookResult = ReturnType<typeof useStakesPerStakerAndPeriodSubscription>;
export type StakesPerStakerAndPeriodSubscriptionResult = Apollo.SubscriptionResult<StakesPerStakerAndPeriodSubscription>;
export const StakingDataDocument = gql`
    subscription StakingData($dapp_address: String!, $staker_address: String!) {
  stake(
    where: {staker_address: {_eq: $staker_address}, dapp_address: {_eq: $dapp_address}}
  ) {
    amount
    block_number
    dapp_address
    period
    staker_address
    timestamp
  }
}
    `;

/**
 * __useStakingDataSubscription__
 *
 * To run a query within a React component, call `useStakingDataSubscription` and pass it any options that fit your needs.
 * When your component renders, `useStakingDataSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStakingDataSubscription({
 *   variables: {
 *      dapp_address: // value for 'dapp_address'
 *      staker_address: // value for 'staker_address'
 *   },
 * });
 */
export function useStakingDataSubscription(baseOptions: Apollo.SubscriptionHookOptions<StakingDataSubscription, StakingDataSubscriptionVariables> & ({ variables: StakingDataSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<StakingDataSubscription, StakingDataSubscriptionVariables>(StakingDataDocument, options);
      }
export type StakingDataSubscriptionHookResult = ReturnType<typeof useStakingDataSubscription>;
export type StakingDataSubscriptionResult = Apollo.SubscriptionResult<StakingDataSubscription>;
export const DappDataDocument = gql`
    query DappData($dapp_address: String!, $staker_address: String!) {
  dapp(where: {id: {_eq: $staker_address}}) {
    dapp_id
    beneficiary
    owner
    id
  }
}
    `;

/**
 * __useDappDataQuery__
 *
 * To run a query within a React component, call `useDappDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useDappDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDappDataQuery({
 *   variables: {
 *      dapp_address: // value for 'dapp_address'
 *      staker_address: // value for 'staker_address'
 *   },
 * });
 */
export function useDappDataQuery(baseOptions: Apollo.QueryHookOptions<DappDataQuery, DappDataQueryVariables> & ({ variables: DappDataQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DappDataQuery, DappDataQueryVariables>(DappDataDocument, options);
      }
export function useDappDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DappDataQuery, DappDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DappDataQuery, DappDataQueryVariables>(DappDataDocument, options);
        }
export function useDappDataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DappDataQuery, DappDataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DappDataQuery, DappDataQueryVariables>(DappDataDocument, options);
        }
export type DappDataQueryHookResult = ReturnType<typeof useDappDataQuery>;
export type DappDataLazyQueryHookResult = ReturnType<typeof useDappDataLazyQuery>;
export type DappDataSuspenseQueryHookResult = ReturnType<typeof useDappDataSuspenseQuery>;
export type DappDataQueryResult = Apollo.QueryResult<DappDataQuery, DappDataQueryVariables>;
export const BalanceByAddressDocument = gql`
    subscription BalanceByAddress($address: String!) {
  balance(where: {address: {_eq: $address}}) {
    id
    address
    balanceId
    free
    frozen
    reserved
  }
}
    `;

/**
 * __useBalanceByAddressSubscription__
 *
 * To run a query within a React component, call `useBalanceByAddressSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBalanceByAddressSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalanceByAddressSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useBalanceByAddressSubscription(baseOptions: Apollo.SubscriptionHookOptions<BalanceByAddressSubscription, BalanceByAddressSubscriptionVariables> & ({ variables: BalanceByAddressSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<BalanceByAddressSubscription, BalanceByAddressSubscriptionVariables>(BalanceByAddressDocument, options);
      }
export type BalanceByAddressSubscriptionHookResult = ReturnType<typeof useBalanceByAddressSubscription>;
export type BalanceByAddressSubscriptionResult = Apollo.SubscriptionResult<BalanceByAddressSubscription>;
export const HistoricalBalanceDocument = gql`
    subscription HistoricalBalance($address: String!, $symbol: String) {
  historical_balance(
    where: {address: {_eq: $address}, currency_id: {_eq: $symbol}}
  ) {
    id
    block
    free
    reserved
    total
    currency_id
  }
}
    `;

/**
 * __useHistoricalBalanceSubscription__
 *
 * To run a query within a React component, call `useHistoricalBalanceSubscription` and pass it any options that fit your needs.
 * When your component renders, `useHistoricalBalanceSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHistoricalBalanceSubscription({
 *   variables: {
 *      address: // value for 'address'
 *      symbol: // value for 'symbol'
 *   },
 * });
 */
export function useHistoricalBalanceSubscription(baseOptions: Apollo.SubscriptionHookOptions<HistoricalBalanceSubscription, HistoricalBalanceSubscriptionVariables> & ({ variables: HistoricalBalanceSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<HistoricalBalanceSubscription, HistoricalBalanceSubscriptionVariables>(HistoricalBalanceDocument, options);
      }
export type HistoricalBalanceSubscriptionHookResult = ReturnType<typeof useHistoricalBalanceSubscription>;
export type HistoricalBalanceSubscriptionResult = Apollo.SubscriptionResult<HistoricalBalanceSubscription>;
export const CollectablesForUserDocument = gql`
    query CollectablesForUser($owner: String!) {
  rmrkNfts(address: $owner) {
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
export function useCollectablesForUserQuery(baseOptions: Apollo.QueryHookOptions<CollectablesForUserQuery, CollectablesForUserQueryVariables> & ({ variables: CollectablesForUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectablesForUserQuery, CollectablesForUserQueryVariables>(CollectablesForUserDocument, options);
      }
export function useCollectablesForUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectablesForUserQuery, CollectablesForUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectablesForUserQuery, CollectablesForUserQueryVariables>(CollectablesForUserDocument, options);
        }
export function useCollectablesForUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CollectablesForUserQuery, CollectablesForUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CollectablesForUserQuery, CollectablesForUserQueryVariables>(CollectablesForUserDocument, options);
        }
export type CollectablesForUserQueryHookResult = ReturnType<typeof useCollectablesForUserQuery>;
export type CollectablesForUserLazyQueryHookResult = ReturnType<typeof useCollectablesForUserLazyQuery>;
export type CollectablesForUserSuspenseQueryHookResult = ReturnType<typeof useCollectablesForUserSuspenseQuery>;
export type CollectablesForUserQueryResult = Apollo.QueryResult<CollectablesForUserQuery, CollectablesForUserQueryVariables>;
export const ProposalsByOrganizationIdDocument = gql`
    subscription ProposalsByOrganizationId($orgId: String!) {
  proposal(where: {organization_id: {_eq: $orgId}}) {
    id
    creator
    state
    start
    created_at_block
    expiry
    name
    description
  }
}
    `;

/**
 * __useProposalsByOrganizationIdSubscription__
 *
 * To run a query within a React component, call `useProposalsByOrganizationIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useProposalsByOrganizationIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalsByOrganizationIdSubscription({
 *   variables: {
 *      orgId: // value for 'orgId'
 *   },
 * });
 */
export function useProposalsByOrganizationIdSubscription(baseOptions: Apollo.SubscriptionHookOptions<ProposalsByOrganizationIdSubscription, ProposalsByOrganizationIdSubscriptionVariables> & ({ variables: ProposalsByOrganizationIdSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ProposalsByOrganizationIdSubscription, ProposalsByOrganizationIdSubscriptionVariables>(ProposalsByOrganizationIdDocument, options);
      }
export type ProposalsByOrganizationIdSubscriptionHookResult = ReturnType<typeof useProposalsByOrganizationIdSubscription>;
export type ProposalsByOrganizationIdSubscriptionResult = Apollo.SubscriptionResult<ProposalsByOrganizationIdSubscription>;
export const ProposalByIdDocument = gql`
    subscription ProposalById($proposalId: String!) {
  proposal(where: {id: {_eq: $proposalId}}) {
    id
    type
    type
    state
    created_at_block
    start
    expiry
    identity {
      id
      display_name
    }
    name
    description
    voting {
      proposal_voters {
        identity {
          id
          display_name
        }
        voted
      }
    }
  }
}
    `;

/**
 * __useProposalByIdSubscription__
 *
 * To run a query within a React component, call `useProposalByIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useProposalByIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalByIdSubscription({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useProposalByIdSubscription(baseOptions: Apollo.SubscriptionHookOptions<ProposalByIdSubscription, ProposalByIdSubscriptionVariables> & ({ variables: ProposalByIdSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ProposalByIdSubscription, ProposalByIdSubscriptionVariables>(ProposalByIdDocument, options);
      }
export type ProposalByIdSubscriptionHookResult = ReturnType<typeof useProposalByIdSubscription>;
export type ProposalByIdSubscriptionResult = Apollo.SubscriptionResult<ProposalByIdSubscription>;
export const OrganizationByIdDocument = gql`
    subscription OrganizationById($orgId: String!) {
  organization(where: {id: {_eq: $orgId}}) {
    access_model
    creator
    created_at_block
    creator
    fee_model
    gov_currency
    id
    member_limit
    pay_currency
    prime
    treasury
    type
    organization_members {
      address
      state
      identity {
        id
        email
        display_name
      }
    }
    description
    email
    id
    logo
    header
    name
    repo
    website
    url
    location
    tags
    organization_members_aggregate {
      aggregate {
        count
      }
    }
    campaigns_aggregate {
      aggregate {
        count
      }
      nodes {
        id
        state
      }
    }
    proposals_aggregate {
      nodes {
        id
        type
      }
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useOrganizationByIdSubscription__
 *
 * To run a query within a React component, call `useOrganizationByIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationByIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationByIdSubscription({
 *   variables: {
 *      orgId: // value for 'orgId'
 *   },
 * });
 */
export function useOrganizationByIdSubscription(baseOptions: Apollo.SubscriptionHookOptions<OrganizationByIdSubscription, OrganizationByIdSubscriptionVariables> & ({ variables: OrganizationByIdSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OrganizationByIdSubscription, OrganizationByIdSubscriptionVariables>(OrganizationByIdDocument, options);
      }
export type OrganizationByIdSubscriptionHookResult = ReturnType<typeof useOrganizationByIdSubscription>;
export type OrganizationByIdSubscriptionResult = Apollo.SubscriptionResult<OrganizationByIdSubscription>;
export const OrganizationsByAccountDocument = gql`
    subscription OrganizationsByAccount($address: String!) {
  organization(where: {organization_members: {address: {_eq: $address}}}) {
    id
    name
    description
    creator
    prime
    member_limit
    membership_fee
    access_model
    deposit
    slug
    logo
    organization_members_aggregate {
      aggregate {
        count
      }
    }
    organization_members(where: {address: {_eq: $address}}) {
      address
      state
    }
  }
}
    `;

/**
 * __useOrganizationsByAccountSubscription__
 *
 * To run a query within a React component, call `useOrganizationsByAccountSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationsByAccountSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationsByAccountSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useOrganizationsByAccountSubscription(baseOptions: Apollo.SubscriptionHookOptions<OrganizationsByAccountSubscription, OrganizationsByAccountSubscriptionVariables> & ({ variables: OrganizationsByAccountSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OrganizationsByAccountSubscription, OrganizationsByAccountSubscriptionVariables>(OrganizationsByAccountDocument, options);
      }
export type OrganizationsByAccountSubscriptionHookResult = ReturnType<typeof useOrganizationsByAccountSubscription>;
export type OrganizationsByAccountSubscriptionResult = Apollo.SubscriptionResult<OrganizationsByAccountSubscription>;
export const IdentityByAddressDocument = gql`
    subscription IdentityByAddress($address: String!) {
  identity_by_pk(id: $address) {
    id
    email
    display_name
    image
    legal_name
    riot
    twitter
    web
    web3name
    discord
  }
}
    `;

/**
 * __useIdentityByAddressSubscription__
 *
 * To run a query within a React component, call `useIdentityByAddressSubscription` and pass it any options that fit your needs.
 * When your component renders, `useIdentityByAddressSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIdentityByAddressSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useIdentityByAddressSubscription(baseOptions: Apollo.SubscriptionHookOptions<IdentityByAddressSubscription, IdentityByAddressSubscriptionVariables> & ({ variables: IdentityByAddressSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<IdentityByAddressSubscription, IdentityByAddressSubscriptionVariables>(IdentityByAddressDocument, options);
      }
export type IdentityByAddressSubscriptionHookResult = ReturnType<typeof useIdentityByAddressSubscription>;
export type IdentityByAddressSubscriptionResult = Apollo.SubscriptionResult<IdentityByAddressSubscription>;
export const BlockNumberDocument = gql`
    subscription BlockNumber {
  chain_info {
    blockNumber
  }
}
    `;

/**
 * __useBlockNumberSubscription__
 *
 * To run a query within a React component, call `useBlockNumberSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBlockNumberSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlockNumberSubscription({
 *   variables: {
 *   },
 * });
 */
export function useBlockNumberSubscription(baseOptions?: Apollo.SubscriptionHookOptions<BlockNumberSubscription, BlockNumberSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<BlockNumberSubscription, BlockNumberSubscriptionVariables>(BlockNumberDocument, options);
      }
export type BlockNumberSubscriptionHookResult = ReturnType<typeof useBlockNumberSubscription>;
export type BlockNumberSubscriptionResult = Apollo.SubscriptionResult<BlockNumberSubscription>;
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
    PROPOSAL_MIN_EXPIRY_IN_SECONDS
    CAMPAIGN_MIN_EXPIRY_IN_SECONDS
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
export function useConfigQuery(baseOptions: Apollo.QueryHookOptions<ConfigQuery, ConfigQueryVariables> & ({ variables: ConfigQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConfigQuery, ConfigQueryVariables>(ConfigDocument, options);
      }
export function useConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConfigQuery, ConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConfigQuery, ConfigQueryVariables>(ConfigDocument, options);
        }
export function useConfigSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ConfigQuery, ConfigQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ConfigQuery, ConfigQueryVariables>(ConfigDocument, options);
        }
export type ConfigQueryHookResult = ReturnType<typeof useConfigQuery>;
export type ConfigLazyQueryHookResult = ReturnType<typeof useConfigLazyQuery>;
export type ConfigSuspenseQueryHookResult = ReturnType<typeof useConfigSuspenseQuery>;
export type ConfigQueryResult = Apollo.QueryResult<ConfigQuery, ConfigQueryVariables>;
export const ApiProviderConfigDocument = gql`
    query ApiProviderConfig {
  apiProvider {
    name
    types
    wsProviderUrl
    chainProperties {
      governanceCurrency
      networkCurrency
      paymentCurrencies
      ss58Format
      tokenDecimals
      tokenSymbol
      blockTargetTime
    }
  }
}
    `;

/**
 * __useApiProviderConfigQuery__
 *
 * To run a query within a React component, call `useApiProviderConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useApiProviderConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApiProviderConfigQuery({
 *   variables: {
 *   },
 * });
 */
export function useApiProviderConfigQuery(baseOptions?: Apollo.QueryHookOptions<ApiProviderConfigQuery, ApiProviderConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ApiProviderConfigQuery, ApiProviderConfigQueryVariables>(ApiProviderConfigDocument, options);
      }
export function useApiProviderConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ApiProviderConfigQuery, ApiProviderConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ApiProviderConfigQuery, ApiProviderConfigQueryVariables>(ApiProviderConfigDocument, options);
        }
export function useApiProviderConfigSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ApiProviderConfigQuery, ApiProviderConfigQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ApiProviderConfigQuery, ApiProviderConfigQueryVariables>(ApiProviderConfigDocument, options);
        }
export type ApiProviderConfigQueryHookResult = ReturnType<typeof useApiProviderConfigQuery>;
export type ApiProviderConfigLazyQueryHookResult = ReturnType<typeof useApiProviderConfigLazyQuery>;
export type ApiProviderConfigSuspenseQueryHookResult = ReturnType<typeof useApiProviderConfigSuspenseQuery>;
export type ApiProviderConfigQueryResult = Apollo.QueryResult<ApiProviderConfigQuery, ApiProviderConfigQueryVariables>;
export const FeaturesDocument = gql`
    query Features($env: Environment!) {
  features(env: $env) {
    CREATE_PROPOSAL
    CREATE_PROPOSAL_SIMPLE_MAJORITY
    CREATE_PROPOSAL_RELATIVE_MAJORITY
    CREATE_GENERAL_PROPOSAL
    CREATE_WITHDRAW_PROPOSAL
    CREATE_SPENDING_PROPOSAL
    ORGANIZATION_PAGE_SHOW_FILTERS
    ORGANIZATION_PAGE_SHOW_SEARCH
    ORGANIZATION_PAGE_SHOW_SORT
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
export function useFeaturesQuery(baseOptions: Apollo.QueryHookOptions<FeaturesQuery, FeaturesQueryVariables> & ({ variables: FeaturesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeaturesQuery, FeaturesQueryVariables>(FeaturesDocument, options);
      }
export function useFeaturesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeaturesQuery, FeaturesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeaturesQuery, FeaturesQueryVariables>(FeaturesDocument, options);
        }
export function useFeaturesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FeaturesQuery, FeaturesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FeaturesQuery, FeaturesQueryVariables>(FeaturesDocument, options);
        }
export type FeaturesQueryHookResult = ReturnType<typeof useFeaturesQuery>;
export type FeaturesLazyQueryHookResult = ReturnType<typeof useFeaturesLazyQuery>;
export type FeaturesSuspenseQueryHookResult = ReturnType<typeof useFeaturesSuspenseQuery>;
export type FeaturesQueryResult = Apollo.QueryResult<FeaturesQuery, FeaturesQueryVariables>;
export const UpdateSessionDocument = gql`
    mutation UpdateSession($address: String!) {
  updateSession(address: $address)
}
    `;
export type UpdateSessionMutationFn = Apollo.MutationFunction<UpdateSessionMutation, UpdateSessionMutationVariables>;

/**
 * __useUpdateSessionMutation__
 *
 * To run a mutation, you first call `useUpdateSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSessionMutation, { data, loading, error }] = useUpdateSessionMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useUpdateSessionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSessionMutation, UpdateSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSessionMutation, UpdateSessionMutationVariables>(UpdateSessionDocument, options);
      }
export type UpdateSessionMutationHookResult = ReturnType<typeof useUpdateSessionMutation>;
export type UpdateSessionMutationResult = Apollo.MutationResult<UpdateSessionMutation>;
export type UpdateSessionMutationOptions = Apollo.BaseMutationOptions<UpdateSessionMutation, UpdateSessionMutationVariables>;