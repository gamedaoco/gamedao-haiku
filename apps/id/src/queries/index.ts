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
	Upload: any
	_text: any
	bigint: any
	bpchar: any
	enum_BattlepassLevels_syncStatus: any
	enum_BattlepassParticipants_status: any
	enum_BattlepassRewards_syncStatus: any
	enum_ChainActivities_activityType: any
	enum_DiscordActivities_activityType: any
	enum_GenericActivities_source: any
	enum_Quests_source: any
	enum_Quests_type: any
	enum_RewardClaims_syncStatus: any
	enum_TwitterActivities_activityType: any
	enum_UserTokens_source: any
	float8: any
	json: any
	numeric: any
	timestamp: any
	timestamptz: any
	uuid: any
}

/** columns and relationships of "account_balance" */
export type AccountBalance = {
	readonly __typename?: 'AccountBalance'
	readonly balanceId?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly historicalBalance?: Maybe<HistoricalBalance>
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly identityId?: Maybe<Scalars['String']>
}

/** aggregated selection of "account_balance" */
export type AccountBalanceAggregate = {
	readonly __typename?: 'AccountBalanceAggregate'
	readonly aggregate?: Maybe<AccountBalanceAggregateFields>
	readonly nodes: ReadonlyArray<AccountBalance>
}

export type AccountBalanceAggregateBoolExp = {
	readonly count?: InputMaybe<AccountBalanceAggregateBoolExpCount>
}

/** aggregate fields of "account_balance" */
export type AccountBalanceAggregateFields = {
	readonly __typename?: 'AccountBalanceAggregateFields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<AccountBalanceMaxFields>
	readonly min?: Maybe<AccountBalanceMinFields>
}

/** aggregate fields of "account_balance" */
export type AccountBalanceAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<AccountBalanceSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "account_balance" */
export type AccountBalanceAggregateOrderBy = {
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<AccountBalanceMaxOrderBy>
	readonly min?: InputMaybe<AccountBalanceMinOrderBy>
}

/** input type for inserting array relation for remote table "account_balance" */
export type AccountBalanceArrRelInsertInput = {
	readonly data: ReadonlyArray<AccountBalanceInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<AccountBalanceOnConflict>
}

/** Boolean expression to filter rows from the table "account_balance". All fields are combined with a logical 'AND'. */
export type AccountBalanceBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<AccountBalanceBoolExp>>
	readonly _not?: InputMaybe<AccountBalanceBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<AccountBalanceBoolExp>>
	readonly balanceId?: InputMaybe<StringComparisonExp>
	readonly historicalBalance?: InputMaybe<HistoricalBalanceBoolExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly identity?: InputMaybe<IdentityBoolExp>
	readonly identityId?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "account_balance" */
export enum AccountBalanceConstraint {
	/** unique or primary key constraint on columns "id" */
	PkBd893045760f719e24a95a42562 = 'PK_bd893045760f719e24a95a42562',
}

/** input type for inserting data into table "account_balance" */
export type AccountBalanceInsertInput = {
	readonly balanceId?: InputMaybe<Scalars['String']>
	readonly historicalBalance?: InputMaybe<HistoricalBalanceObjRelInsertInput>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<IdentityObjRelInsertInput>
	readonly identityId?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type AccountBalanceMaxFields = {
	readonly __typename?: 'AccountBalanceMaxFields'
	readonly balanceId?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly identityId?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "account_balance" */
export type AccountBalanceMaxOrderBy = {
	readonly balanceId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type AccountBalanceMinFields = {
	readonly __typename?: 'AccountBalanceMinFields'
	readonly balanceId?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly identityId?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "account_balance" */
export type AccountBalanceMinOrderBy = {
	readonly balanceId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "account_balance" */
export type AccountBalanceMutationResponse = {
	readonly __typename?: 'AccountBalanceMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<AccountBalance>
}

/** on_conflict condition type for table "account_balance" */
export type AccountBalanceOnConflict = {
	readonly constraint: AccountBalanceConstraint
	readonly updateColumns?: ReadonlyArray<AccountBalanceUpdateColumn>
	readonly where?: InputMaybe<AccountBalanceBoolExp>
}

/** Ordering options when selecting data from "account_balance". */
export type AccountBalanceOrderBy = {
	readonly balanceId?: InputMaybe<OrderBy>
	readonly historicalBalance?: InputMaybe<HistoricalBalanceOrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentityOrderBy>
	readonly identityId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: account_balance */
export type AccountBalancePkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "account_balance" */
export enum AccountBalanceSelectColumn {
	/** column name */
	BalanceId = 'balanceId',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
}

/** input type for updating data in table "account_balance" */
export type AccountBalanceSetInput = {
	readonly balanceId?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identityId?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "account_balance" */
export type AccountBalanceStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: AccountBalanceStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type AccountBalanceStreamCursorValueInput = {
	readonly balanceId?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identityId?: InputMaybe<Scalars['String']>
}

/** update columns of table "account_balance" */
export enum AccountBalanceUpdateColumn {
	/** column name */
	BalanceId = 'balanceId',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
}

export type AccountBalanceUpdates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<AccountBalanceSetInput>
	/** filter the rows which have to be updated */
	readonly where: AccountBalanceBoolExp
}

export type ApiProvider = {
	readonly __typename?: 'ApiProvider'
	readonly chainProperties: ChainProperties
	readonly name: Scalars['String']
	readonly types: Scalars['String']
	readonly wsProviderUrl: Scalars['String']
}

/** columns and relationships of "Balance" */
export type Balance = {
	readonly __typename?: 'Balance'
	readonly address: Scalars['String']
	readonly balanceId: Scalars['Int']
	readonly free: Scalars['String']
	readonly frozen: Scalars['String']
	readonly id: Scalars['bigint']
	readonly reserved: Scalars['String']
}

/** aggregated selection of "Balance" */
export type BalanceAggregate = {
	readonly __typename?: 'BalanceAggregate'
	readonly aggregate?: Maybe<BalanceAggregateFields>
	readonly nodes: ReadonlyArray<Balance>
}

/** aggregate fields of "Balance" */
export type BalanceAggregateFields = {
	readonly __typename?: 'BalanceAggregateFields'
	readonly avg?: Maybe<BalanceAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<BalanceMaxFields>
	readonly min?: Maybe<BalanceMinFields>
	readonly stddev?: Maybe<BalanceStddevFields>
	readonly stddevPop?: Maybe<BalanceStddevPopFields>
	readonly stddevSamp?: Maybe<BalanceStddevSampFields>
	readonly sum?: Maybe<BalanceSumFields>
	readonly varPop?: Maybe<BalanceVarPopFields>
	readonly varSamp?: Maybe<BalanceVarSampFields>
	readonly variance?: Maybe<BalanceVarianceFields>
}

/** aggregate fields of "Balance" */
export type BalanceAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<BalanceSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type BalanceAvgFields = {
	readonly __typename?: 'BalanceAvgFields'
	readonly balanceId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "Balance". All fields are combined with a logical 'AND'. */
export type BalanceBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<BalanceBoolExp>>
	readonly _not?: InputMaybe<BalanceBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<BalanceBoolExp>>
	readonly address?: InputMaybe<StringComparisonExp>
	readonly balanceId?: InputMaybe<IntComparisonExp>
	readonly free?: InputMaybe<StringComparisonExp>
	readonly frozen?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<BigintComparisonExp>
	readonly reserved?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "Balance" */
export enum BalanceConstraint {
	/** unique or primary key constraint on columns "address", "balanceId" */
	BalanceAddressBalanceIdKey = 'Balance_address_balanceId_key',
	/** unique or primary key constraint on columns "id" */
	BalancePkey = 'Balance_pkey',
}

/** input type for incrementing numeric columns in table "Balance" */
export type BalanceIncInput = {
	readonly balanceId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "Balance" */
export type BalanceInsertInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly balanceId?: InputMaybe<Scalars['Int']>
	readonly free?: InputMaybe<Scalars['String']>
	readonly frozen?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['bigint']>
	readonly reserved?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type BalanceMaxFields = {
	readonly __typename?: 'BalanceMaxFields'
	readonly address?: Maybe<Scalars['String']>
	readonly balanceId?: Maybe<Scalars['Int']>
	readonly free?: Maybe<Scalars['String']>
	readonly frozen?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['bigint']>
	readonly reserved?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type BalanceMinFields = {
	readonly __typename?: 'BalanceMinFields'
	readonly address?: Maybe<Scalars['String']>
	readonly balanceId?: Maybe<Scalars['Int']>
	readonly free?: Maybe<Scalars['String']>
	readonly frozen?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['bigint']>
	readonly reserved?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "Balance" */
export type BalanceMutationResponse = {
	readonly __typename?: 'BalanceMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Balance>
}

/** on_conflict condition type for table "Balance" */
export type BalanceOnConflict = {
	readonly constraint: BalanceConstraint
	readonly updateColumns?: ReadonlyArray<BalanceUpdateColumn>
	readonly where?: InputMaybe<BalanceBoolExp>
}

/** Ordering options when selecting data from "Balance". */
export type BalanceOrderBy = {
	readonly address?: InputMaybe<OrderBy>
	readonly balanceId?: InputMaybe<OrderBy>
	readonly free?: InputMaybe<OrderBy>
	readonly frozen?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly reserved?: InputMaybe<OrderBy>
}

/** primary key columns input for table: Balance */
export type BalancePkColumnsInput = {
	readonly id: Scalars['bigint']
}

/** select columns of table "Balance" */
export enum BalanceSelectColumn {
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
	Reserved = 'reserved',
}

/** input type for updating data in table "Balance" */
export type BalanceSetInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly balanceId?: InputMaybe<Scalars['Int']>
	readonly free?: InputMaybe<Scalars['String']>
	readonly frozen?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['bigint']>
	readonly reserved?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type BalanceStddevFields = {
	readonly __typename?: 'BalanceStddevFields'
	readonly balanceId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type BalanceStddevPopFields = {
	readonly __typename?: 'BalanceStddevPopFields'
	readonly balanceId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type BalanceStddevSampFields = {
	readonly __typename?: 'BalanceStddevSampFields'
	readonly balanceId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "Balance" */
export type BalanceStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: BalanceStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type BalanceStreamCursorValueInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly balanceId?: InputMaybe<Scalars['Int']>
	readonly free?: InputMaybe<Scalars['String']>
	readonly frozen?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['bigint']>
	readonly reserved?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type BalanceSumFields = {
	readonly __typename?: 'BalanceSumFields'
	readonly balanceId?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['bigint']>
}

/** update columns of table "Balance" */
export enum BalanceUpdateColumn {
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
	Reserved = 'reserved',
}

export type BalanceUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<BalanceIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<BalanceSetInput>
	/** filter the rows which have to be updated */
	readonly where: BalanceBoolExp
}

/** aggregate varPop on columns */
export type BalanceVarPopFields = {
	readonly __typename?: 'BalanceVarPopFields'
	readonly balanceId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type BalanceVarSampFields = {
	readonly __typename?: 'BalanceVarSampFields'
	readonly balanceId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type BalanceVarianceFields = {
	readonly __typename?: 'BalanceVarianceFields'
	readonly balanceId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "battlepass" */
export type Battlepass = {
	readonly __typename?: 'Battlepass'
	readonly activeFromBlock?: Maybe<Scalars['Int']>
	readonly activeToBlock?: Maybe<Scalars['Int']>
	/** An array relationship */
	readonly battlepassNfts: ReadonlyArray<BattlepassNft>
	/** An aggregate relationship */
	readonly battlepassNftsAggregate: BattlepassNftAggregate
	readonly cid: Scalars['String']
	readonly createdAtBlock: Scalars['Int']
	readonly creatorId?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly image?: Maybe<Scalars['String']>
	readonly name: Scalars['String']
	readonly orgId?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly organization?: Maybe<Organization>
	readonly price: Scalars['numeric']
	readonly season: Scalars['String']
	readonly state: Scalars['String']
	readonly updatedAtBlock: Scalars['Int']
}

/** columns and relationships of "battlepass" */
export type BattlepassBattlepassNftsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassNftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassNftOrderBy>>
	where?: InputMaybe<BattlepassNftBoolExp>
}

/** columns and relationships of "battlepass" */
export type BattlepassBattlepassNftsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassNftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassNftOrderBy>>
	where?: InputMaybe<BattlepassNftBoolExp>
}

/** aggregated selection of "battlepass" */
export type BattlepassAggregate = {
	readonly __typename?: 'BattlepassAggregate'
	readonly aggregate?: Maybe<BattlepassAggregateFields>
	readonly nodes: ReadonlyArray<Battlepass>
}

export type BattlepassAggregateBoolExp = {
	readonly count?: InputMaybe<BattlepassAggregateBoolExpCount>
}

/** aggregate fields of "battlepass" */
export type BattlepassAggregateFields = {
	readonly __typename?: 'BattlepassAggregateFields'
	readonly avg?: Maybe<BattlepassAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<BattlepassMaxFields>
	readonly min?: Maybe<BattlepassMinFields>
	readonly stddev?: Maybe<BattlepassStddevFields>
	readonly stddevPop?: Maybe<BattlepassStddevPopFields>
	readonly stddevSamp?: Maybe<BattlepassStddevSampFields>
	readonly sum?: Maybe<BattlepassSumFields>
	readonly varPop?: Maybe<BattlepassVarPopFields>
	readonly varSamp?: Maybe<BattlepassVarSampFields>
	readonly variance?: Maybe<BattlepassVarianceFields>
}

/** aggregate fields of "battlepass" */
export type BattlepassAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<BattlepassSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "battlepass" */
export type BattlepassAggregateOrderBy = {
	readonly avg?: InputMaybe<BattlepassAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<BattlepassMaxOrderBy>
	readonly min?: InputMaybe<BattlepassMinOrderBy>
	readonly stddev?: InputMaybe<BattlepassStddevOrderBy>
	readonly stddevPop?: InputMaybe<BattlepassStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<BattlepassStddevSampOrderBy>
	readonly sum?: InputMaybe<BattlepassSumOrderBy>
	readonly varPop?: InputMaybe<BattlepassVarPopOrderBy>
	readonly varSamp?: InputMaybe<BattlepassVarSampOrderBy>
	readonly variance?: InputMaybe<BattlepassVarianceOrderBy>
}

/** input type for inserting array relation for remote table "battlepass" */
export type BattlepassArrRelInsertInput = {
	readonly data: ReadonlyArray<BattlepassInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<BattlepassOnConflict>
}

/** aggregate avg on columns */
export type BattlepassAvgFields = {
	readonly __typename?: 'BattlepassAvgFields'
	readonly activeFromBlock?: Maybe<Scalars['Float']>
	readonly activeToBlock?: Maybe<Scalars['Float']>
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "battlepass" */
export type BattlepassAvgOrderBy = {
	readonly activeFromBlock?: InputMaybe<OrderBy>
	readonly activeToBlock?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly price?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "battlepass". All fields are combined with a logical 'AND'. */
export type BattlepassBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<BattlepassBoolExp>>
	readonly _not?: InputMaybe<BattlepassBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<BattlepassBoolExp>>
	readonly activeFromBlock?: InputMaybe<IntComparisonExp>
	readonly activeToBlock?: InputMaybe<IntComparisonExp>
	readonly battlepassNfts?: InputMaybe<BattlepassNftBoolExp>
	readonly battlepassNftsAggregate?: InputMaybe<BattlepassNftAggregateBoolExp>
	readonly cid?: InputMaybe<StringComparisonExp>
	readonly createdAtBlock?: InputMaybe<IntComparisonExp>
	readonly creatorId?: InputMaybe<StringComparisonExp>
	readonly description?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly identity?: InputMaybe<IdentityBoolExp>
	readonly image?: InputMaybe<StringComparisonExp>
	readonly name?: InputMaybe<StringComparisonExp>
	readonly orgId?: InputMaybe<StringComparisonExp>
	readonly organization?: InputMaybe<OrganizationBoolExp>
	readonly price?: InputMaybe<NumericComparisonExp>
	readonly season?: InputMaybe<StringComparisonExp>
	readonly state?: InputMaybe<StringComparisonExp>
	readonly updatedAtBlock?: InputMaybe<IntComparisonExp>
}

export enum BattlepassBotActivityType {
	Comment = 'comment',
	Connect = 'connect',
	Follow = 'follow',
	Identity = 'identity',
	Join = 'join',
	Like = 'like',
	Post = 'post',
	Reaction = 'reaction',
	Retweet = 'retweet',
	Tweet = 'tweet',
}

export type BattlepassBotBattlepass = {
	readonly __typename?: 'BattlepassBotBattlepass'
	readonly active: Scalars['Boolean']
	readonly chainId: Scalars['String']
	readonly cid?: Maybe<Scalars['String']>
	readonly currency?: Maybe<Scalars['String']>
	readonly endDate?: Maybe<Scalars['String']>
	readonly finalized: Scalars['Boolean']
	readonly freeClaimed: Scalars['Int']
	readonly freePasses: Scalars['Int']
	readonly id: Scalars['Int']
	readonly joinable: Scalars['Boolean']
	readonly members?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassMember>>>
	readonly name?: Maybe<Scalars['String']>
	readonly orgId: Scalars['String']
	readonly premiumClaimed: Scalars['Int']
	readonly premiumPasses?: Maybe<Scalars['Int']>
	readonly price?: Maybe<Scalars['Int']>
	readonly quests?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassQuest>>>
	readonly rewards?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassReward>>>
	readonly season?: Maybe<Scalars['Int']>
	readonly startDate?: Maybe<Scalars['String']>
	readonly totalJoined: Scalars['Int']
}

export type BattlepassBotBattlepassIdentity = {
	readonly __typename?: 'BattlepassBotBattlepassIdentity'
	readonly address?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly discord?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly epicGames?: Maybe<Scalars['String']>
	readonly id: Scalars['Int']
	readonly members?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassMember>>>
	readonly name?: Maybe<Scalars['String']>
	readonly progress?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassQuestProgress>>>
	readonly twitter?: Maybe<Scalars['String']>
	readonly uuid: Scalars['String']
}

export type BattlepassBotBattlepassLevel = {
	readonly __typename?: 'BattlepassBotBattlepassLevel'
	readonly battlepass: BattlepassBotBattlepass
	readonly battlepassId: Scalars['Int']
	readonly id: Scalars['Int']
	readonly level: Scalars['Int']
	readonly name?: Maybe<Scalars['String']>
	readonly points: Scalars['Int']
	readonly syncStatus: BattlepassBotSyncStatus
	readonly totalPoints: Scalars['Int']
}

export type BattlepassBotBattlepassMember = {
	readonly __typename?: 'BattlepassBotBattlepassMember'
	readonly battlepass: BattlepassBotBattlepass
	readonly battlepassId: Scalars['Int']
	readonly id?: Maybe<Scalars['Int']>
	readonly identity: BattlepassBotBattlepassIdentity
	readonly identityId: Scalars['Int']
	readonly passChainId?: Maybe<Scalars['String']>
	readonly points: Scalars['Int']
	readonly premium: Scalars['Boolean']
	readonly progress?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassQuestProgress>>>
	readonly status: BattlepassBotMemberStatus
}

export type BattlepassBotBattlepassPoint = {
	readonly __typename?: 'BattlepassBotBattlepassPoint'
	readonly battlepass: BattlepassBotBattlepass
	readonly battlepassId: Scalars['Int']
	readonly identity: BattlepassBotBattlepassIdentity
	readonly identityId?: Maybe<Scalars['Int']>
	readonly identityUuid?: Maybe<Scalars['String']>
	readonly points: Scalars['Int']
	readonly quests: Scalars['Int']
}

export type BattlepassBotBattlepassQuest = {
	readonly __typename?: 'BattlepassBotBattlepassQuest'
	readonly battlepass: BattlepassBotBattlepass
	readonly battlepassId: Scalars['Int']
	readonly channelId?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly guildId?: Maybe<Scalars['String']>
	readonly hashtag?: Maybe<Scalars['String']>
	readonly id: Scalars['Int']
	readonly link?: Maybe<Scalars['String']>
	readonly max?: Maybe<Scalars['Int']>
	readonly maxDaily?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly points: Scalars['Int']
	readonly progresses?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassQuestProgress>>>
	readonly quantity: Scalars['Int']
	readonly repeat: Scalars['Boolean']
	readonly source: BattlepassBotSource
	readonly twitterId?: Maybe<Scalars['String']>
	readonly type: BattlepassBotActivityType
}

export type BattlepassBotBattlepassQuestProgress = {
	readonly __typename?: 'BattlepassBotBattlepassQuestProgress'
	readonly id: Scalars['Int']
	readonly identity: BattlepassBotBattlepassIdentity
	readonly identityId: Scalars['Int']
	readonly progress: Scalars['Float']
	readonly quest: BattlepassBotBattlepassQuest
	readonly questId: Scalars['Int']
}

export type BattlepassBotBattlepassReward = {
	readonly __typename?: 'BattlepassBotBattlepassReward'
	readonly available: Scalars['Int']
	readonly battlepass: BattlepassBotBattlepass
	readonly battlepassId: Scalars['Int']
	readonly chainId?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly id: Scalars['Int']
	readonly level?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly points?: Maybe<Scalars['Int']>
	readonly syncStatus: BattlepassBotSyncStatus
	readonly total: Scalars['Int']
}

export type BattlepassBotBattlepassRewardClaim = {
	readonly __typename?: 'BattlepassBotBattlepassRewardClaim'
	readonly id: Scalars['Int']
	readonly identityUuid: Scalars['String']
	readonly member: BattlepassBotBattlepassMember
	readonly nftId?: Maybe<Scalars['Int']>
	readonly participantId: Scalars['Int']
	readonly reward: BattlepassBotBattlepassReward
	readonly rewardChainId?: Maybe<Scalars['String']>
	readonly rewardId: Scalars['Int']
	readonly syncStatus: BattlepassBotSyncStatus
}

export type BattlepassBotBattlepassesFilter = {
	readonly active?: InputMaybe<Scalars['Boolean']>
	readonly chainId?: InputMaybe<Scalars['String']>
	readonly finalized?: InputMaybe<Scalars['Boolean']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly orgChainId?: InputMaybe<Scalars['String']>
	readonly season?: InputMaybe<Scalars['Int']>
}

export type BattlepassBotIdentityFilter = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly discord?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly twitter?: InputMaybe<Scalars['String']>
	readonly uuid?: InputMaybe<Scalars['String']>
}

export type BattlepassBotLevel = {
	readonly level: Scalars['Int']
	readonly name?: InputMaybe<Scalars['String']>
	readonly points: Scalars['Int']
}

export type BattlepassBotLevelsFilter = {
	readonly battlepassChainId?: InputMaybe<Scalars['String']>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
}

export type BattlepassBotMemberFilter = {
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly identityUuid?: InputMaybe<Scalars['String']>
	readonly premium?: InputMaybe<Scalars['Boolean']>
}

export enum BattlepassBotMemberStatus {
	Free = 'free',
	Pending = 'pending',
	PendingPayment = 'pendingPayment',
	Synced = 'synced',
}

export type BattlepassBotPayment = {
	readonly __typename?: 'BattlepassBotPayment'
	readonly battlepass: Scalars['String']
	readonly identityUuid: Scalars['String']
	readonly paymentToken: Scalars['String']
	readonly status: BattlepassBotMemberStatus
}

export type BattlepassBotPointsFilter = {
	readonly battlepassChainId?: InputMaybe<Scalars['String']>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly identityUuid?: InputMaybe<Scalars['String']>
}

export type BattlepassBotProgressFilter = {
	readonly battlepassChainId?: InputMaybe<Scalars['String']>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly identityUuid?: InputMaybe<Scalars['String']>
	readonly questId?: InputMaybe<Scalars['Int']>
}

export type BattlepassBotQuestFilter = {
	readonly battlepassChainId?: InputMaybe<Scalars['String']>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly repeat?: InputMaybe<Scalars['Boolean']>
	readonly source?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<BattlepassBotActivityType>
}

export type BattlepassBotRewardClaimFilter = {
	readonly battlepassChainId?: InputMaybe<Scalars['String']>
	readonly identityUuid?: InputMaybe<Scalars['String']>
}

export type BattlepassBotRewardsFilter = {
	readonly battlepassChainId?: InputMaybe<Scalars['String']>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
}

export enum BattlepassBotSource {
	Discord = 'discord',
	EpicGames = 'epicGames',
	Gamedao = 'gamedao',
	Twitter = 'twitter',
}

export enum BattlepassBotSyncStatus {
	Failed = 'failed',
	Pending = 'pending',
	Synced = 'synced',
}

/** unique or primary key constraints on table "battlepass" */
export enum BattlepassConstraint {
	/** unique or primary key constraint on columns "id" */
	Pk_434ed07af6067d5b12ec01d502c = 'PK_434ed07af6067d5b12ec01d502c',
}

/** input type for incrementing numeric columns in table "battlepass" */
export type BattlepassIncInput = {
	readonly activeFromBlock?: InputMaybe<Scalars['Int']>
	readonly activeToBlock?: InputMaybe<Scalars['Int']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly price?: InputMaybe<Scalars['numeric']>
	readonly updatedAtBlock?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "battlepass" */
export type BattlepassInsertInput = {
	readonly activeFromBlock?: InputMaybe<Scalars['Int']>
	readonly activeToBlock?: InputMaybe<Scalars['Int']>
	readonly battlepassNfts?: InputMaybe<BattlepassNftArrRelInsertInput>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly creatorId?: InputMaybe<Scalars['String']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<IdentityObjRelInsertInput>
	readonly image?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly orgId?: InputMaybe<Scalars['String']>
	readonly organization?: InputMaybe<OrganizationObjRelInsertInput>
	readonly price?: InputMaybe<Scalars['numeric']>
	readonly season?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly updatedAtBlock?: InputMaybe<Scalars['Int']>
}

/** columns and relationships of "BattlepassLevels" */
export type BattlepassLevels = {
	readonly __typename?: 'BattlepassLevels'
	/** An object relationship */
	readonly battlepass?: Maybe<Battlepasses>
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly createdAt: Scalars['timestamptz']
	readonly id: Scalars['Int']
	readonly level: Scalars['Int']
	readonly name?: Maybe<Scalars['String']>
	readonly points: Scalars['Int']
	readonly syncStatus?: Maybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly totalPoints: Scalars['Int']
	readonly updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "BattlepassLevels" */
export type BattlepassLevelsAggregate = {
	readonly __typename?: 'BattlepassLevelsAggregate'
	readonly aggregate?: Maybe<BattlepassLevelsAggregateFields>
	readonly nodes: ReadonlyArray<BattlepassLevels>
}

export type BattlepassLevelsAggregateBoolExp = {
	readonly count?: InputMaybe<BattlepassLevelsAggregateBoolExpCount>
}

/** aggregate fields of "BattlepassLevels" */
export type BattlepassLevelsAggregateFields = {
	readonly __typename?: 'BattlepassLevelsAggregateFields'
	readonly avg?: Maybe<BattlepassLevelsAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<BattlepassLevelsMaxFields>
	readonly min?: Maybe<BattlepassLevelsMinFields>
	readonly stddev?: Maybe<BattlepassLevelsStddevFields>
	readonly stddevPop?: Maybe<BattlepassLevelsStddevPopFields>
	readonly stddevSamp?: Maybe<BattlepassLevelsStddevSampFields>
	readonly sum?: Maybe<BattlepassLevelsSumFields>
	readonly varPop?: Maybe<BattlepassLevelsVarPopFields>
	readonly varSamp?: Maybe<BattlepassLevelsVarSampFields>
	readonly variance?: Maybe<BattlepassLevelsVarianceFields>
}

/** aggregate fields of "BattlepassLevels" */
export type BattlepassLevelsAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<BattlepassLevelsSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "BattlepassLevels" */
export type BattlepassLevelsAggregateOrderBy = {
	readonly avg?: InputMaybe<BattlepassLevelsAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<BattlepassLevelsMaxOrderBy>
	readonly min?: InputMaybe<BattlepassLevelsMinOrderBy>
	readonly stddev?: InputMaybe<BattlepassLevelsStddevOrderBy>
	readonly stddevPop?: InputMaybe<BattlepassLevelsStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<BattlepassLevelsStddevSampOrderBy>
	readonly sum?: InputMaybe<BattlepassLevelsSumOrderBy>
	readonly varPop?: InputMaybe<BattlepassLevelsVarPopOrderBy>
	readonly varSamp?: InputMaybe<BattlepassLevelsVarSampOrderBy>
	readonly variance?: InputMaybe<BattlepassLevelsVarianceOrderBy>
}

/** input type for inserting array relation for remote table "BattlepassLevels" */
export type BattlepassLevelsArrRelInsertInput = {
	readonly data: ReadonlyArray<BattlepassLevelsInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<BattlepassLevelsOnConflict>
}

/** aggregate avg on columns */
export type BattlepassLevelsAvgFields = {
	readonly __typename?: 'BattlepassLevelsAvgFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly totalPoints?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "BattlepassLevels" */
export type BattlepassLevelsAvgOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly totalPoints?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "BattlepassLevels". All fields are combined with a logical 'AND'. */
export type BattlepassLevelsBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<BattlepassLevelsBoolExp>>
	readonly _not?: InputMaybe<BattlepassLevelsBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<BattlepassLevelsBoolExp>>
	readonly battlepass?: InputMaybe<BattlepassesBoolExp>
	readonly battlepassId?: InputMaybe<IntComparisonExp>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly level?: InputMaybe<IntComparisonExp>
	readonly name?: InputMaybe<StringComparisonExp>
	readonly points?: InputMaybe<IntComparisonExp>
	readonly syncStatus?: InputMaybe<EnumBattlepassLevelsSyncStatusComparisonExp>
	readonly totalPoints?: InputMaybe<IntComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "BattlepassLevels" */
export enum BattlepassLevelsConstraint {
	/** unique or primary key constraint on columns "id" */
	BattlepassLevelsPkey = 'BattlepassLevels_pkey',
}

/** input type for incrementing numeric columns in table "BattlepassLevels" */
export type BattlepassLevelsIncInput = {
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly level?: InputMaybe<Scalars['Int']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly totalPoints?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "BattlepassLevels" */
export type BattlepassLevelsInsertInput = {
	readonly battlepass?: InputMaybe<BattlepassesObjRelInsertInput>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly level?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly syncStatus?: InputMaybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly totalPoints?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type BattlepassLevelsMaxFields = {
	readonly __typename?: 'BattlepassLevelsMaxFields'
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly level?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly points?: Maybe<Scalars['Int']>
	readonly syncStatus?: Maybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly totalPoints?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "BattlepassLevels" */
export type BattlepassLevelsMaxOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly syncStatus?: InputMaybe<OrderBy>
	readonly totalPoints?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type BattlepassLevelsMinFields = {
	readonly __typename?: 'BattlepassLevelsMinFields'
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly level?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly points?: Maybe<Scalars['Int']>
	readonly syncStatus?: Maybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly totalPoints?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "BattlepassLevels" */
export type BattlepassLevelsMinOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly syncStatus?: InputMaybe<OrderBy>
	readonly totalPoints?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "BattlepassLevels" */
export type BattlepassLevelsMutationResponse = {
	readonly __typename?: 'BattlepassLevelsMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<BattlepassLevels>
}

/** on_conflict condition type for table "BattlepassLevels" */
export type BattlepassLevelsOnConflict = {
	readonly constraint: BattlepassLevelsConstraint
	readonly updateColumns?: ReadonlyArray<BattlepassLevelsUpdateColumn>
	readonly where?: InputMaybe<BattlepassLevelsBoolExp>
}

/** Ordering options when selecting data from "BattlepassLevels". */
export type BattlepassLevelsOrderBy = {
	readonly battlepass?: InputMaybe<BattlepassesOrderBy>
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly syncStatus?: InputMaybe<OrderBy>
	readonly totalPoints?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: BattlepassLevels */
export type BattlepassLevelsPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "BattlepassLevels" */
export enum BattlepassLevelsSelectColumn {
	/** column name */
	BattlepassId = 'battlepassId',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	Level = 'level',
	/** column name */
	Name = 'name',
	/** column name */
	Points = 'points',
	/** column name */
	SyncStatus = 'syncStatus',
	/** column name */
	TotalPoints = 'totalPoints',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "BattlepassLevels" */
export type BattlepassLevelsSetInput = {
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly level?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly syncStatus?: InputMaybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly totalPoints?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type BattlepassLevelsStddevFields = {
	readonly __typename?: 'BattlepassLevelsStddevFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly totalPoints?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "BattlepassLevels" */
export type BattlepassLevelsStddevOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly totalPoints?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type BattlepassLevelsStddevPopFields = {
	readonly __typename?: 'BattlepassLevelsStddevPopFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly totalPoints?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "BattlepassLevels" */
export type BattlepassLevelsStddevPopOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly totalPoints?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type BattlepassLevelsStddevSampFields = {
	readonly __typename?: 'BattlepassLevelsStddevSampFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly totalPoints?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "BattlepassLevels" */
export type BattlepassLevelsStddevSampOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly totalPoints?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "BattlepassLevels" */
export type BattlepassLevelsStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: BattlepassLevelsStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type BattlepassLevelsStreamCursorValueInput = {
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly level?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly syncStatus?: InputMaybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly totalPoints?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type BattlepassLevelsSumFields = {
	readonly __typename?: 'BattlepassLevelsSumFields'
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
	readonly level?: Maybe<Scalars['Int']>
	readonly points?: Maybe<Scalars['Int']>
	readonly totalPoints?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "BattlepassLevels" */
export type BattlepassLevelsSumOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly totalPoints?: InputMaybe<OrderBy>
}

/** update columns of table "BattlepassLevels" */
export enum BattlepassLevelsUpdateColumn {
	/** column name */
	BattlepassId = 'battlepassId',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	Level = 'level',
	/** column name */
	Name = 'name',
	/** column name */
	Points = 'points',
	/** column name */
	SyncStatus = 'syncStatus',
	/** column name */
	TotalPoints = 'totalPoints',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type BattlepassLevelsUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<BattlepassLevelsIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<BattlepassLevelsSetInput>
	/** filter the rows which have to be updated */
	readonly where: BattlepassLevelsBoolExp
}

/** aggregate varPop on columns */
export type BattlepassLevelsVarPopFields = {
	readonly __typename?: 'BattlepassLevelsVarPopFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly totalPoints?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "BattlepassLevels" */
export type BattlepassLevelsVarPopOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly totalPoints?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type BattlepassLevelsVarSampFields = {
	readonly __typename?: 'BattlepassLevelsVarSampFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly totalPoints?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "BattlepassLevels" */
export type BattlepassLevelsVarSampOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly totalPoints?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type BattlepassLevelsVarianceFields = {
	readonly __typename?: 'BattlepassLevelsVarianceFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly totalPoints?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "BattlepassLevels" */
export type BattlepassLevelsVarianceOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly totalPoints?: InputMaybe<OrderBy>
}

/** aggregate max on columns */
export type BattlepassMaxFields = {
	readonly __typename?: 'BattlepassMaxFields'
	readonly activeFromBlock?: Maybe<Scalars['Int']>
	readonly activeToBlock?: Maybe<Scalars['Int']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAtBlock?: Maybe<Scalars['Int']>
	readonly creatorId?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly orgId?: Maybe<Scalars['String']>
	readonly price?: Maybe<Scalars['numeric']>
	readonly season?: Maybe<Scalars['String']>
	readonly state?: Maybe<Scalars['String']>
	readonly updatedAtBlock?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "battlepass" */
export type BattlepassMaxOrderBy = {
	readonly activeFromBlock?: InputMaybe<OrderBy>
	readonly activeToBlock?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly creatorId?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly image?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly orgId?: InputMaybe<OrderBy>
	readonly price?: InputMaybe<OrderBy>
	readonly season?: InputMaybe<OrderBy>
	readonly state?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type BattlepassMinFields = {
	readonly __typename?: 'BattlepassMinFields'
	readonly activeFromBlock?: Maybe<Scalars['Int']>
	readonly activeToBlock?: Maybe<Scalars['Int']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAtBlock?: Maybe<Scalars['Int']>
	readonly creatorId?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly orgId?: Maybe<Scalars['String']>
	readonly price?: Maybe<Scalars['numeric']>
	readonly season?: Maybe<Scalars['String']>
	readonly state?: Maybe<Scalars['String']>
	readonly updatedAtBlock?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "battlepass" */
export type BattlepassMinOrderBy = {
	readonly activeFromBlock?: InputMaybe<OrderBy>
	readonly activeToBlock?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly creatorId?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly image?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly orgId?: InputMaybe<OrderBy>
	readonly price?: InputMaybe<OrderBy>
	readonly season?: InputMaybe<OrderBy>
	readonly state?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "battlepass" */
export type BattlepassMutationResponse = {
	readonly __typename?: 'BattlepassMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Battlepass>
}

/** columns and relationships of "battlepass_nft" */
export type BattlepassNft = {
	readonly __typename?: 'BattlepassNft'
	/** An object relationship */
	readonly battlepass?: Maybe<Battlepass>
	readonly battlepassId?: Maybe<Scalars['String']>
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	/** An object relationship */
	readonly nft?: Maybe<Nft>
	readonly nftId?: Maybe<Scalars['String']>
	readonly ownerId?: Maybe<Scalars['String']>
}

/** aggregated selection of "battlepass_nft" */
export type BattlepassNftAggregate = {
	readonly __typename?: 'BattlepassNftAggregate'
	readonly aggregate?: Maybe<BattlepassNftAggregateFields>
	readonly nodes: ReadonlyArray<BattlepassNft>
}

export type BattlepassNftAggregateBoolExp = {
	readonly count?: InputMaybe<BattlepassNftAggregateBoolExpCount>
}

/** aggregate fields of "battlepass_nft" */
export type BattlepassNftAggregateFields = {
	readonly __typename?: 'BattlepassNftAggregateFields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<BattlepassNftMaxFields>
	readonly min?: Maybe<BattlepassNftMinFields>
}

/** aggregate fields of "battlepass_nft" */
export type BattlepassNftAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<BattlepassNftSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "battlepass_nft" */
export type BattlepassNftAggregateOrderBy = {
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<BattlepassNftMaxOrderBy>
	readonly min?: InputMaybe<BattlepassNftMinOrderBy>
}

/** input type for inserting array relation for remote table "battlepass_nft" */
export type BattlepassNftArrRelInsertInput = {
	readonly data: ReadonlyArray<BattlepassNftInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<BattlepassNftOnConflict>
}

/** Boolean expression to filter rows from the table "battlepass_nft". All fields are combined with a logical 'AND'. */
export type BattlepassNftBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<BattlepassNftBoolExp>>
	readonly _not?: InputMaybe<BattlepassNftBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<BattlepassNftBoolExp>>
	readonly battlepass?: InputMaybe<BattlepassBoolExp>
	readonly battlepassId?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly identity?: InputMaybe<IdentityBoolExp>
	readonly nft?: InputMaybe<NftBoolExp>
	readonly nftId?: InputMaybe<StringComparisonExp>
	readonly ownerId?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "battlepass_nft" */
export enum BattlepassNftConstraint {
	/** unique or primary key constraint on columns "id" */
	Pk_403a8a9635a02968aca94a14c75 = 'PK_403a8a9635a02968aca94a14c75',
}

/** input type for inserting data into table "battlepass_nft" */
export type BattlepassNftInsertInput = {
	readonly battlepass?: InputMaybe<BattlepassObjRelInsertInput>
	readonly battlepassId?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<IdentityObjRelInsertInput>
	readonly nft?: InputMaybe<NftObjRelInsertInput>
	readonly nftId?: InputMaybe<Scalars['String']>
	readonly ownerId?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type BattlepassNftMaxFields = {
	readonly __typename?: 'BattlepassNftMaxFields'
	readonly battlepassId?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly nftId?: Maybe<Scalars['String']>
	readonly ownerId?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "battlepass_nft" */
export type BattlepassNftMaxOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly nftId?: InputMaybe<OrderBy>
	readonly ownerId?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type BattlepassNftMinFields = {
	readonly __typename?: 'BattlepassNftMinFields'
	readonly battlepassId?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly nftId?: Maybe<Scalars['String']>
	readonly ownerId?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "battlepass_nft" */
export type BattlepassNftMinOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly nftId?: InputMaybe<OrderBy>
	readonly ownerId?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "battlepass_nft" */
export type BattlepassNftMutationResponse = {
	readonly __typename?: 'BattlepassNftMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<BattlepassNft>
}

/** on_conflict condition type for table "battlepass_nft" */
export type BattlepassNftOnConflict = {
	readonly constraint: BattlepassNftConstraint
	readonly updateColumns?: ReadonlyArray<BattlepassNftUpdateColumn>
	readonly where?: InputMaybe<BattlepassNftBoolExp>
}

/** Ordering options when selecting data from "battlepass_nft". */
export type BattlepassNftOrderBy = {
	readonly battlepass?: InputMaybe<BattlepassOrderBy>
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentityOrderBy>
	readonly nft?: InputMaybe<NftOrderBy>
	readonly nftId?: InputMaybe<OrderBy>
	readonly ownerId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: battlepass_nft */
export type BattlepassNftPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "battlepass_nft" */
export enum BattlepassNftSelectColumn {
	/** column name */
	BattlepassId = 'battlepassId',
	/** column name */
	Id = 'id',
	/** column name */
	NftId = 'nftId',
	/** column name */
	OwnerId = 'ownerId',
}

/** input type for updating data in table "battlepass_nft" */
export type BattlepassNftSetInput = {
	readonly battlepassId?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly nftId?: InputMaybe<Scalars['String']>
	readonly ownerId?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "battlepass_nft" */
export type BattlepassNftStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: BattlepassNftStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type BattlepassNftStreamCursorValueInput = {
	readonly battlepassId?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly nftId?: InputMaybe<Scalars['String']>
	readonly ownerId?: InputMaybe<Scalars['String']>
}

/** update columns of table "battlepass_nft" */
export enum BattlepassNftUpdateColumn {
	/** column name */
	BattlepassId = 'battlepassId',
	/** column name */
	Id = 'id',
	/** column name */
	NftId = 'nftId',
	/** column name */
	OwnerId = 'ownerId',
}

export type BattlepassNftUpdates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<BattlepassNftSetInput>
	/** filter the rows which have to be updated */
	readonly where: BattlepassNftBoolExp
}

/** input type for inserting object relation for remote table "battlepass" */
export type BattlepassObjRelInsertInput = {
	readonly data: BattlepassInsertInput
	/** upsert condition */
	readonly onConflict?: InputMaybe<BattlepassOnConflict>
}

/** on_conflict condition type for table "battlepass" */
export type BattlepassOnConflict = {
	readonly constraint: BattlepassConstraint
	readonly updateColumns?: ReadonlyArray<BattlepassUpdateColumn>
	readonly where?: InputMaybe<BattlepassBoolExp>
}

/** Ordering options when selecting data from "battlepass". */
export type BattlepassOrderBy = {
	readonly activeFromBlock?: InputMaybe<OrderBy>
	readonly activeToBlock?: InputMaybe<OrderBy>
	readonly battlepassNftsAggregate?: InputMaybe<BattlepassNftAggregateOrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly creatorId?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentityOrderBy>
	readonly image?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly orgId?: InputMaybe<OrderBy>
	readonly organization?: InputMaybe<OrganizationOrderBy>
	readonly price?: InputMaybe<OrderBy>
	readonly season?: InputMaybe<OrderBy>
	readonly state?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** columns and relationships of "BattlepassParticipants" */
export type BattlepassParticipants = {
	readonly __typename?: 'BattlepassParticipants'
	/** An object relationship */
	readonly battlepass?: Maybe<Battlepasses>
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly createdAt: Scalars['timestamptz']
	readonly id: Scalars['Int']
	/** An object relationship */
	readonly identity?: Maybe<Identities>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly passChainId?: Maybe<Scalars['bpchar']>
	/** An array relationship */
	readonly payments: ReadonlyArray<Payments>
	/** An aggregate relationship */
	readonly paymentsAggregate: PaymentsAggregate
	readonly points: Scalars['Int']
	readonly premium?: Maybe<Scalars['Boolean']>
	/** An array relationship */
	readonly rewardClaims: ReadonlyArray<RewardClaims>
	/** An aggregate relationship */
	readonly rewardClaimsAggregate: RewardClaimsAggregate
	readonly status: Scalars['enum_BattlepassParticipants_status']
	readonly updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "BattlepassParticipants" */
export type BattlepassParticipantsPaymentsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<PaymentsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<PaymentsOrderBy>>
	where?: InputMaybe<PaymentsBoolExp>
}

/** columns and relationships of "BattlepassParticipants" */
export type BattlepassParticipantsPaymentsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<PaymentsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<PaymentsOrderBy>>
	where?: InputMaybe<PaymentsBoolExp>
}

/** columns and relationships of "BattlepassParticipants" */
export type BattlepassParticipantsRewardClaimsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<RewardClaimsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<RewardClaimsOrderBy>>
	where?: InputMaybe<RewardClaimsBoolExp>
}

/** columns and relationships of "BattlepassParticipants" */
export type BattlepassParticipantsRewardClaimsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<RewardClaimsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<RewardClaimsOrderBy>>
	where?: InputMaybe<RewardClaimsBoolExp>
}

/** aggregated selection of "BattlepassParticipants" */
export type BattlepassParticipantsAggregate = {
	readonly __typename?: 'BattlepassParticipantsAggregate'
	readonly aggregate?: Maybe<BattlepassParticipantsAggregateFields>
	readonly nodes: ReadonlyArray<BattlepassParticipants>
}

export type BattlepassParticipantsAggregateBoolExp = {
	readonly bool_and?: InputMaybe<BattlepassParticipantsAggregateBoolExpBool_And>
	readonly bool_or?: InputMaybe<BattlepassParticipantsAggregateBoolExpBool_Or>
	readonly count?: InputMaybe<BattlepassParticipantsAggregateBoolExpCount>
}

/** aggregate fields of "BattlepassParticipants" */
export type BattlepassParticipantsAggregateFields = {
	readonly __typename?: 'BattlepassParticipantsAggregateFields'
	readonly avg?: Maybe<BattlepassParticipantsAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<BattlepassParticipantsMaxFields>
	readonly min?: Maybe<BattlepassParticipantsMinFields>
	readonly stddev?: Maybe<BattlepassParticipantsStddevFields>
	readonly stddevPop?: Maybe<BattlepassParticipantsStddevPopFields>
	readonly stddevSamp?: Maybe<BattlepassParticipantsStddevSampFields>
	readonly sum?: Maybe<BattlepassParticipantsSumFields>
	readonly varPop?: Maybe<BattlepassParticipantsVarPopFields>
	readonly varSamp?: Maybe<BattlepassParticipantsVarSampFields>
	readonly variance?: Maybe<BattlepassParticipantsVarianceFields>
}

/** aggregate fields of "BattlepassParticipants" */
export type BattlepassParticipantsAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<BattlepassParticipantsSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "BattlepassParticipants" */
export type BattlepassParticipantsAggregateOrderBy = {
	readonly avg?: InputMaybe<BattlepassParticipantsAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<BattlepassParticipantsMaxOrderBy>
	readonly min?: InputMaybe<BattlepassParticipantsMinOrderBy>
	readonly stddev?: InputMaybe<BattlepassParticipantsStddevOrderBy>
	readonly stddevPop?: InputMaybe<BattlepassParticipantsStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<BattlepassParticipantsStddevSampOrderBy>
	readonly sum?: InputMaybe<BattlepassParticipantsSumOrderBy>
	readonly varPop?: InputMaybe<BattlepassParticipantsVarPopOrderBy>
	readonly varSamp?: InputMaybe<BattlepassParticipantsVarSampOrderBy>
	readonly variance?: InputMaybe<BattlepassParticipantsVarianceOrderBy>
}

/** input type for inserting array relation for remote table "BattlepassParticipants" */
export type BattlepassParticipantsArrRelInsertInput = {
	readonly data: ReadonlyArray<BattlepassParticipantsInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<BattlepassParticipantsOnConflict>
}

/** aggregate avg on columns */
export type BattlepassParticipantsAvgFields = {
	readonly __typename?: 'BattlepassParticipantsAvgFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "BattlepassParticipants" */
export type BattlepassParticipantsAvgOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "BattlepassParticipants". All fields are combined with a logical 'AND'. */
export type BattlepassParticipantsBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<BattlepassParticipantsBoolExp>>
	readonly _not?: InputMaybe<BattlepassParticipantsBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<BattlepassParticipantsBoolExp>>
	readonly battlepass?: InputMaybe<BattlepassesBoolExp>
	readonly battlepassId?: InputMaybe<IntComparisonExp>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly identity?: InputMaybe<IdentitiesBoolExp>
	readonly identityId?: InputMaybe<IntComparisonExp>
	readonly passChainId?: InputMaybe<BpcharComparisonExp>
	readonly payments?: InputMaybe<PaymentsBoolExp>
	readonly paymentsAggregate?: InputMaybe<PaymentsAggregateBoolExp>
	readonly points?: InputMaybe<IntComparisonExp>
	readonly premium?: InputMaybe<BooleanComparisonExp>
	readonly rewardClaims?: InputMaybe<RewardClaimsBoolExp>
	readonly rewardClaimsAggregate?: InputMaybe<RewardClaimsAggregateBoolExp>
	readonly status?: InputMaybe<EnumBattlepassParticipantsStatusComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "BattlepassParticipants" */
export enum BattlepassParticipantsConstraint {
	/** unique or primary key constraint on columns "id" */
	BattlepassParticipantsPkey = 'BattlepassParticipants_pkey',
}

/** input type for incrementing numeric columns in table "BattlepassParticipants" */
export type BattlepassParticipantsIncInput = {
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly points?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "BattlepassParticipants" */
export type BattlepassParticipantsInsertInput = {
	readonly battlepass?: InputMaybe<BattlepassesObjRelInsertInput>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identity?: InputMaybe<IdentitiesObjRelInsertInput>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly passChainId?: InputMaybe<Scalars['bpchar']>
	readonly payments?: InputMaybe<PaymentsArrRelInsertInput>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly premium?: InputMaybe<Scalars['Boolean']>
	readonly rewardClaims?: InputMaybe<RewardClaimsArrRelInsertInput>
	readonly status?: InputMaybe<Scalars['enum_BattlepassParticipants_status']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type BattlepassParticipantsMaxFields = {
	readonly __typename?: 'BattlepassParticipantsMaxFields'
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly passChainId?: Maybe<Scalars['bpchar']>
	readonly points?: Maybe<Scalars['Int']>
	readonly status?: Maybe<Scalars['enum_BattlepassParticipants_status']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "BattlepassParticipants" */
export type BattlepassParticipantsMaxOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly passChainId?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly status?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type BattlepassParticipantsMinFields = {
	readonly __typename?: 'BattlepassParticipantsMinFields'
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly passChainId?: Maybe<Scalars['bpchar']>
	readonly points?: Maybe<Scalars['Int']>
	readonly status?: Maybe<Scalars['enum_BattlepassParticipants_status']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "BattlepassParticipants" */
export type BattlepassParticipantsMinOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly passChainId?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly status?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "BattlepassParticipants" */
export type BattlepassParticipantsMutationResponse = {
	readonly __typename?: 'BattlepassParticipantsMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<BattlepassParticipants>
}

/** input type for inserting object relation for remote table "BattlepassParticipants" */
export type BattlepassParticipantsObjRelInsertInput = {
	readonly data: BattlepassParticipantsInsertInput
	/** upsert condition */
	readonly onConflict?: InputMaybe<BattlepassParticipantsOnConflict>
}

/** on_conflict condition type for table "BattlepassParticipants" */
export type BattlepassParticipantsOnConflict = {
	readonly constraint: BattlepassParticipantsConstraint
	readonly updateColumns?: ReadonlyArray<BattlepassParticipantsUpdateColumn>
	readonly where?: InputMaybe<BattlepassParticipantsBoolExp>
}

/** Ordering options when selecting data from "BattlepassParticipants". */
export type BattlepassParticipantsOrderBy = {
	readonly battlepass?: InputMaybe<BattlepassesOrderBy>
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentitiesOrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly passChainId?: InputMaybe<OrderBy>
	readonly paymentsAggregate?: InputMaybe<PaymentsAggregateOrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly premium?: InputMaybe<OrderBy>
	readonly rewardClaimsAggregate?: InputMaybe<RewardClaimsAggregateOrderBy>
	readonly status?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: BattlepassParticipants */
export type BattlepassParticipantsPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "BattlepassParticipants" */
export enum BattlepassParticipantsSelectColumn {
	/** column name */
	BattlepassId = 'battlepassId',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
	/** column name */
	PassChainId = 'passChainId',
	/** column name */
	Points = 'points',
	/** column name */
	Premium = 'premium',
	/** column name */
	Status = 'status',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** select "battlepassParticipantsAggregateBoolExpBool_andArgumentsColumns" columns of table "BattlepassParticipants" */
export enum BattlepassParticipantsSelectColumnBattlepassParticipantsAggregateBoolExpBool_AndArgumentsColumns {
	/** column name */
	Premium = 'premium',
}

/** select "battlepassParticipantsAggregateBoolExpBool_orArgumentsColumns" columns of table "BattlepassParticipants" */
export enum BattlepassParticipantsSelectColumnBattlepassParticipantsAggregateBoolExpBool_OrArgumentsColumns {
	/** column name */
	Premium = 'premium',
}

/** input type for updating data in table "BattlepassParticipants" */
export type BattlepassParticipantsSetInput = {
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly passChainId?: InputMaybe<Scalars['bpchar']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly premium?: InputMaybe<Scalars['Boolean']>
	readonly status?: InputMaybe<Scalars['enum_BattlepassParticipants_status']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type BattlepassParticipantsStddevFields = {
	readonly __typename?: 'BattlepassParticipantsStddevFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "BattlepassParticipants" */
export type BattlepassParticipantsStddevOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type BattlepassParticipantsStddevPopFields = {
	readonly __typename?: 'BattlepassParticipantsStddevPopFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "BattlepassParticipants" */
export type BattlepassParticipantsStddevPopOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type BattlepassParticipantsStddevSampFields = {
	readonly __typename?: 'BattlepassParticipantsStddevSampFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "BattlepassParticipants" */
export type BattlepassParticipantsStddevSampOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "BattlepassParticipants" */
export type BattlepassParticipantsStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: BattlepassParticipantsStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type BattlepassParticipantsStreamCursorValueInput = {
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly passChainId?: InputMaybe<Scalars['bpchar']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly premium?: InputMaybe<Scalars['Boolean']>
	readonly status?: InputMaybe<Scalars['enum_BattlepassParticipants_status']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type BattlepassParticipantsSumFields = {
	readonly __typename?: 'BattlepassParticipantsSumFields'
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly points?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "BattlepassParticipants" */
export type BattlepassParticipantsSumOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
}

/** update columns of table "BattlepassParticipants" */
export enum BattlepassParticipantsUpdateColumn {
	/** column name */
	BattlepassId = 'battlepassId',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
	/** column name */
	PassChainId = 'passChainId',
	/** column name */
	Points = 'points',
	/** column name */
	Premium = 'premium',
	/** column name */
	Status = 'status',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type BattlepassParticipantsUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<BattlepassParticipantsIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<BattlepassParticipantsSetInput>
	/** filter the rows which have to be updated */
	readonly where: BattlepassParticipantsBoolExp
}

/** aggregate varPop on columns */
export type BattlepassParticipantsVarPopFields = {
	readonly __typename?: 'BattlepassParticipantsVarPopFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "BattlepassParticipants" */
export type BattlepassParticipantsVarPopOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type BattlepassParticipantsVarSampFields = {
	readonly __typename?: 'BattlepassParticipantsVarSampFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "BattlepassParticipants" */
export type BattlepassParticipantsVarSampOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type BattlepassParticipantsVarianceFields = {
	readonly __typename?: 'BattlepassParticipantsVarianceFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "BattlepassParticipants" */
export type BattlepassParticipantsVarianceOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
}

/** primary key columns input for table: battlepass */
export type BattlepassPkColumnsInput = {
	readonly id: Scalars['String']
}

/** columns and relationships of "BattlepassRewards" */
export type BattlepassRewards = {
	readonly __typename?: 'BattlepassRewards'
	readonly available?: Maybe<Scalars['Int']>
	/** An object relationship */
	readonly battlepass?: Maybe<Battlepasses>
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly chainId?: Maybe<Scalars['bpchar']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAt: Scalars['timestamptz']
	readonly description?: Maybe<Scalars['String']>
	readonly id: Scalars['Int']
	readonly level?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly points?: Maybe<Scalars['Int']>
	/** An array relationship */
	readonly rewardClaims: ReadonlyArray<RewardClaims>
	/** An aggregate relationship */
	readonly rewardClaimsAggregate: RewardClaimsAggregate
	readonly syncStatus?: Maybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly total?: Maybe<Scalars['Int']>
	readonly updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "BattlepassRewards" */
export type BattlepassRewardsRewardClaimsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<RewardClaimsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<RewardClaimsOrderBy>>
	where?: InputMaybe<RewardClaimsBoolExp>
}

/** columns and relationships of "BattlepassRewards" */
export type BattlepassRewardsRewardClaimsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<RewardClaimsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<RewardClaimsOrderBy>>
	where?: InputMaybe<RewardClaimsBoolExp>
}

/** aggregated selection of "BattlepassRewards" */
export type BattlepassRewardsAggregate = {
	readonly __typename?: 'BattlepassRewardsAggregate'
	readonly aggregate?: Maybe<BattlepassRewardsAggregateFields>
	readonly nodes: ReadonlyArray<BattlepassRewards>
}

export type BattlepassRewardsAggregateBoolExp = {
	readonly count?: InputMaybe<BattlepassRewardsAggregateBoolExpCount>
}

/** aggregate fields of "BattlepassRewards" */
export type BattlepassRewardsAggregateFields = {
	readonly __typename?: 'BattlepassRewardsAggregateFields'
	readonly avg?: Maybe<BattlepassRewardsAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<BattlepassRewardsMaxFields>
	readonly min?: Maybe<BattlepassRewardsMinFields>
	readonly stddev?: Maybe<BattlepassRewardsStddevFields>
	readonly stddevPop?: Maybe<BattlepassRewardsStddevPopFields>
	readonly stddevSamp?: Maybe<BattlepassRewardsStddevSampFields>
	readonly sum?: Maybe<BattlepassRewardsSumFields>
	readonly varPop?: Maybe<BattlepassRewardsVarPopFields>
	readonly varSamp?: Maybe<BattlepassRewardsVarSampFields>
	readonly variance?: Maybe<BattlepassRewardsVarianceFields>
}

/** aggregate fields of "BattlepassRewards" */
export type BattlepassRewardsAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<BattlepassRewardsSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "BattlepassRewards" */
export type BattlepassRewardsAggregateOrderBy = {
	readonly avg?: InputMaybe<BattlepassRewardsAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<BattlepassRewardsMaxOrderBy>
	readonly min?: InputMaybe<BattlepassRewardsMinOrderBy>
	readonly stddev?: InputMaybe<BattlepassRewardsStddevOrderBy>
	readonly stddevPop?: InputMaybe<BattlepassRewardsStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<BattlepassRewardsStddevSampOrderBy>
	readonly sum?: InputMaybe<BattlepassRewardsSumOrderBy>
	readonly varPop?: InputMaybe<BattlepassRewardsVarPopOrderBy>
	readonly varSamp?: InputMaybe<BattlepassRewardsVarSampOrderBy>
	readonly variance?: InputMaybe<BattlepassRewardsVarianceOrderBy>
}

/** input type for inserting array relation for remote table "BattlepassRewards" */
export type BattlepassRewardsArrRelInsertInput = {
	readonly data: ReadonlyArray<BattlepassRewardsInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<BattlepassRewardsOnConflict>
}

/** aggregate avg on columns */
export type BattlepassRewardsAvgFields = {
	readonly __typename?: 'BattlepassRewardsAvgFields'
	readonly available?: Maybe<Scalars['Float']>
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "BattlepassRewards" */
export type BattlepassRewardsAvgOrderBy = {
	readonly available?: InputMaybe<OrderBy>
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly total?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "BattlepassRewards". All fields are combined with a logical 'AND'. */
export type BattlepassRewardsBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<BattlepassRewardsBoolExp>>
	readonly _not?: InputMaybe<BattlepassRewardsBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<BattlepassRewardsBoolExp>>
	readonly available?: InputMaybe<IntComparisonExp>
	readonly battlepass?: InputMaybe<BattlepassesBoolExp>
	readonly battlepassId?: InputMaybe<IntComparisonExp>
	readonly chainId?: InputMaybe<BpcharComparisonExp>
	readonly cid?: InputMaybe<StringComparisonExp>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly description?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly level?: InputMaybe<IntComparisonExp>
	readonly name?: InputMaybe<StringComparisonExp>
	readonly points?: InputMaybe<IntComparisonExp>
	readonly rewardClaims?: InputMaybe<RewardClaimsBoolExp>
	readonly rewardClaimsAggregate?: InputMaybe<RewardClaimsAggregateBoolExp>
	readonly syncStatus?: InputMaybe<EnumBattlepassRewardsSyncStatusComparisonExp>
	readonly total?: InputMaybe<IntComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "BattlepassRewards" */
export enum BattlepassRewardsConstraint {
	/** unique or primary key constraint on columns "id" */
	BattlepassRewardsPkey = 'BattlepassRewards_pkey',
}

/** input type for incrementing numeric columns in table "BattlepassRewards" */
export type BattlepassRewardsIncInput = {
	readonly available?: InputMaybe<Scalars['Int']>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly level?: InputMaybe<Scalars['Int']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly total?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "BattlepassRewards" */
export type BattlepassRewardsInsertInput = {
	readonly available?: InputMaybe<Scalars['Int']>
	readonly battlepass?: InputMaybe<BattlepassesObjRelInsertInput>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly chainId?: InputMaybe<Scalars['bpchar']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly level?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly rewardClaims?: InputMaybe<RewardClaimsArrRelInsertInput>
	readonly syncStatus?: InputMaybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly total?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type BattlepassRewardsMaxFields = {
	readonly __typename?: 'BattlepassRewardsMaxFields'
	readonly available?: Maybe<Scalars['Int']>
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly chainId?: Maybe<Scalars['bpchar']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['Int']>
	readonly level?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly points?: Maybe<Scalars['Int']>
	readonly syncStatus?: Maybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly total?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "BattlepassRewards" */
export type BattlepassRewardsMaxOrderBy = {
	readonly available?: InputMaybe<OrderBy>
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly chainId?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly syncStatus?: InputMaybe<OrderBy>
	readonly total?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type BattlepassRewardsMinFields = {
	readonly __typename?: 'BattlepassRewardsMinFields'
	readonly available?: Maybe<Scalars['Int']>
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly chainId?: Maybe<Scalars['bpchar']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['Int']>
	readonly level?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly points?: Maybe<Scalars['Int']>
	readonly syncStatus?: Maybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly total?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "BattlepassRewards" */
export type BattlepassRewardsMinOrderBy = {
	readonly available?: InputMaybe<OrderBy>
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly chainId?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly syncStatus?: InputMaybe<OrderBy>
	readonly total?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "BattlepassRewards" */
export type BattlepassRewardsMutationResponse = {
	readonly __typename?: 'BattlepassRewardsMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<BattlepassRewards>
}

/** input type for inserting object relation for remote table "BattlepassRewards" */
export type BattlepassRewardsObjRelInsertInput = {
	readonly data: BattlepassRewardsInsertInput
	/** upsert condition */
	readonly onConflict?: InputMaybe<BattlepassRewardsOnConflict>
}

/** on_conflict condition type for table "BattlepassRewards" */
export type BattlepassRewardsOnConflict = {
	readonly constraint: BattlepassRewardsConstraint
	readonly updateColumns?: ReadonlyArray<BattlepassRewardsUpdateColumn>
	readonly where?: InputMaybe<BattlepassRewardsBoolExp>
}

/** Ordering options when selecting data from "BattlepassRewards". */
export type BattlepassRewardsOrderBy = {
	readonly available?: InputMaybe<OrderBy>
	readonly battlepass?: InputMaybe<BattlepassesOrderBy>
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly chainId?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly rewardClaimsAggregate?: InputMaybe<RewardClaimsAggregateOrderBy>
	readonly syncStatus?: InputMaybe<OrderBy>
	readonly total?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: BattlepassRewards */
export type BattlepassRewardsPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "BattlepassRewards" */
export enum BattlepassRewardsSelectColumn {
	/** column name */
	Available = 'available',
	/** column name */
	BattlepassId = 'battlepassId',
	/** column name */
	ChainId = 'chainId',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	Level = 'level',
	/** column name */
	Name = 'name',
	/** column name */
	Points = 'points',
	/** column name */
	SyncStatus = 'syncStatus',
	/** column name */
	Total = 'total',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "BattlepassRewards" */
export type BattlepassRewardsSetInput = {
	readonly available?: InputMaybe<Scalars['Int']>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly chainId?: InputMaybe<Scalars['bpchar']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly level?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly syncStatus?: InputMaybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly total?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type BattlepassRewardsStddevFields = {
	readonly __typename?: 'BattlepassRewardsStddevFields'
	readonly available?: Maybe<Scalars['Float']>
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "BattlepassRewards" */
export type BattlepassRewardsStddevOrderBy = {
	readonly available?: InputMaybe<OrderBy>
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly total?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type BattlepassRewardsStddevPopFields = {
	readonly __typename?: 'BattlepassRewardsStddevPopFields'
	readonly available?: Maybe<Scalars['Float']>
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "BattlepassRewards" */
export type BattlepassRewardsStddevPopOrderBy = {
	readonly available?: InputMaybe<OrderBy>
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly total?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type BattlepassRewardsStddevSampFields = {
	readonly __typename?: 'BattlepassRewardsStddevSampFields'
	readonly available?: Maybe<Scalars['Float']>
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "BattlepassRewards" */
export type BattlepassRewardsStddevSampOrderBy = {
	readonly available?: InputMaybe<OrderBy>
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly total?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "BattlepassRewards" */
export type BattlepassRewardsStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: BattlepassRewardsStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type BattlepassRewardsStreamCursorValueInput = {
	readonly available?: InputMaybe<Scalars['Int']>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly chainId?: InputMaybe<Scalars['bpchar']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly level?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly syncStatus?: InputMaybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly total?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type BattlepassRewardsSumFields = {
	readonly __typename?: 'BattlepassRewardsSumFields'
	readonly available?: Maybe<Scalars['Int']>
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
	readonly level?: Maybe<Scalars['Int']>
	readonly points?: Maybe<Scalars['Int']>
	readonly total?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "BattlepassRewards" */
export type BattlepassRewardsSumOrderBy = {
	readonly available?: InputMaybe<OrderBy>
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly total?: InputMaybe<OrderBy>
}

/** update columns of table "BattlepassRewards" */
export enum BattlepassRewardsUpdateColumn {
	/** column name */
	Available = 'available',
	/** column name */
	BattlepassId = 'battlepassId',
	/** column name */
	ChainId = 'chainId',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	Level = 'level',
	/** column name */
	Name = 'name',
	/** column name */
	Points = 'points',
	/** column name */
	SyncStatus = 'syncStatus',
	/** column name */
	Total = 'total',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type BattlepassRewardsUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<BattlepassRewardsIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<BattlepassRewardsSetInput>
	/** filter the rows which have to be updated */
	readonly where: BattlepassRewardsBoolExp
}

/** aggregate varPop on columns */
export type BattlepassRewardsVarPopFields = {
	readonly __typename?: 'BattlepassRewardsVarPopFields'
	readonly available?: Maybe<Scalars['Float']>
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "BattlepassRewards" */
export type BattlepassRewardsVarPopOrderBy = {
	readonly available?: InputMaybe<OrderBy>
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly total?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type BattlepassRewardsVarSampFields = {
	readonly __typename?: 'BattlepassRewardsVarSampFields'
	readonly available?: Maybe<Scalars['Float']>
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "BattlepassRewards" */
export type BattlepassRewardsVarSampOrderBy = {
	readonly available?: InputMaybe<OrderBy>
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly total?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type BattlepassRewardsVarianceFields = {
	readonly __typename?: 'BattlepassRewardsVarianceFields'
	readonly available?: Maybe<Scalars['Float']>
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "BattlepassRewards" */
export type BattlepassRewardsVarianceOrderBy = {
	readonly available?: InputMaybe<OrderBy>
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly level?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly total?: InputMaybe<OrderBy>
}

/** select columns of table "battlepass" */
export enum BattlepassSelectColumn {
	/** column name */
	ActiveFromBlock = 'activeFromBlock',
	/** column name */
	ActiveToBlock = 'activeToBlock',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAtBlock = 'createdAtBlock',
	/** column name */
	CreatorId = 'creatorId',
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	Image = 'image',
	/** column name */
	Name = 'name',
	/** column name */
	OrgId = 'orgId',
	/** column name */
	Price = 'price',
	/** column name */
	Season = 'season',
	/** column name */
	State = 'state',
	/** column name */
	UpdatedAtBlock = 'updatedAtBlock',
}

/** input type for updating data in table "battlepass" */
export type BattlepassSetInput = {
	readonly activeFromBlock?: InputMaybe<Scalars['Int']>
	readonly activeToBlock?: InputMaybe<Scalars['Int']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly creatorId?: InputMaybe<Scalars['String']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly orgId?: InputMaybe<Scalars['String']>
	readonly price?: InputMaybe<Scalars['numeric']>
	readonly season?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly updatedAtBlock?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type BattlepassStddevFields = {
	readonly __typename?: 'BattlepassStddevFields'
	readonly activeFromBlock?: Maybe<Scalars['Float']>
	readonly activeToBlock?: Maybe<Scalars['Float']>
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "battlepass" */
export type BattlepassStddevOrderBy = {
	readonly activeFromBlock?: InputMaybe<OrderBy>
	readonly activeToBlock?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly price?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type BattlepassStddevPopFields = {
	readonly __typename?: 'BattlepassStddevPopFields'
	readonly activeFromBlock?: Maybe<Scalars['Float']>
	readonly activeToBlock?: Maybe<Scalars['Float']>
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "battlepass" */
export type BattlepassStddevPopOrderBy = {
	readonly activeFromBlock?: InputMaybe<OrderBy>
	readonly activeToBlock?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly price?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type BattlepassStddevSampFields = {
	readonly __typename?: 'BattlepassStddevSampFields'
	readonly activeFromBlock?: Maybe<Scalars['Float']>
	readonly activeToBlock?: Maybe<Scalars['Float']>
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "battlepass" */
export type BattlepassStddevSampOrderBy = {
	readonly activeFromBlock?: InputMaybe<OrderBy>
	readonly activeToBlock?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly price?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "battlepass" */
export type BattlepassStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: BattlepassStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type BattlepassStreamCursorValueInput = {
	readonly activeFromBlock?: InputMaybe<Scalars['Int']>
	readonly activeToBlock?: InputMaybe<Scalars['Int']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly creatorId?: InputMaybe<Scalars['String']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly orgId?: InputMaybe<Scalars['String']>
	readonly price?: InputMaybe<Scalars['numeric']>
	readonly season?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly updatedAtBlock?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type BattlepassSumFields = {
	readonly __typename?: 'BattlepassSumFields'
	readonly activeFromBlock?: Maybe<Scalars['Int']>
	readonly activeToBlock?: Maybe<Scalars['Int']>
	readonly createdAtBlock?: Maybe<Scalars['Int']>
	readonly price?: Maybe<Scalars['numeric']>
	readonly updatedAtBlock?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "battlepass" */
export type BattlepassSumOrderBy = {
	readonly activeFromBlock?: InputMaybe<OrderBy>
	readonly activeToBlock?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly price?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** update columns of table "battlepass" */
export enum BattlepassUpdateColumn {
	/** column name */
	ActiveFromBlock = 'activeFromBlock',
	/** column name */
	ActiveToBlock = 'activeToBlock',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAtBlock = 'createdAtBlock',
	/** column name */
	CreatorId = 'creatorId',
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	Image = 'image',
	/** column name */
	Name = 'name',
	/** column name */
	OrgId = 'orgId',
	/** column name */
	Price = 'price',
	/** column name */
	Season = 'season',
	/** column name */
	State = 'state',
	/** column name */
	UpdatedAtBlock = 'updatedAtBlock',
}

export type BattlepassUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<BattlepassIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<BattlepassSetInput>
	/** filter the rows which have to be updated */
	readonly where: BattlepassBoolExp
}

/** aggregate varPop on columns */
export type BattlepassVarPopFields = {
	readonly __typename?: 'BattlepassVarPopFields'
	readonly activeFromBlock?: Maybe<Scalars['Float']>
	readonly activeToBlock?: Maybe<Scalars['Float']>
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "battlepass" */
export type BattlepassVarPopOrderBy = {
	readonly activeFromBlock?: InputMaybe<OrderBy>
	readonly activeToBlock?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly price?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type BattlepassVarSampFields = {
	readonly __typename?: 'BattlepassVarSampFields'
	readonly activeFromBlock?: Maybe<Scalars['Float']>
	readonly activeToBlock?: Maybe<Scalars['Float']>
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "battlepass" */
export type BattlepassVarSampOrderBy = {
	readonly activeFromBlock?: InputMaybe<OrderBy>
	readonly activeToBlock?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly price?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type BattlepassVarianceFields = {
	readonly __typename?: 'BattlepassVarianceFields'
	readonly activeFromBlock?: Maybe<Scalars['Float']>
	readonly activeToBlock?: Maybe<Scalars['Float']>
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "battlepass" */
export type BattlepassVarianceOrderBy = {
	readonly activeFromBlock?: InputMaybe<OrderBy>
	readonly activeToBlock?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly price?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** columns and relationships of "Battlepasses" */
export type Battlepasses = {
	readonly __typename?: 'Battlepasses'
	readonly active: Scalars['Boolean']
	/** An array relationship */
	readonly battlepassLevels: ReadonlyArray<BattlepassLevels>
	/** An aggregate relationship */
	readonly battlepassLevelsAggregate: BattlepassLevelsAggregate
	/** An array relationship */
	readonly battlepassParticipants: ReadonlyArray<BattlepassParticipants>
	/** An aggregate relationship */
	readonly battlepassParticipantsAggregate: BattlepassParticipantsAggregate
	/** An array relationship */
	readonly battlepassRewards: ReadonlyArray<BattlepassRewards>
	/** An aggregate relationship */
	readonly battlepassRewardsAggregate: BattlepassRewardsAggregate
	readonly chainId: Scalars['bpchar']
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAt: Scalars['timestamptz']
	readonly endDate?: Maybe<Scalars['timestamptz']>
	readonly finalized: Scalars['Boolean']
	readonly freeClaimed: Scalars['Int']
	readonly freePasses: Scalars['Int']
	readonly id: Scalars['Int']
	readonly joinable: Scalars['Boolean']
	readonly name?: Maybe<Scalars['String']>
	readonly orgId: Scalars['bpchar']
	readonly premiumClaimed: Scalars['Int']
	readonly premiumPasses?: Maybe<Scalars['Int']>
	readonly price?: Maybe<Scalars['Int']>
	/** An array relationship */
	readonly quests: ReadonlyArray<Quests>
	/** An aggregate relationship */
	readonly questsAggregate: QuestsAggregate
	readonly season?: Maybe<Scalars['Int']>
	readonly startDate?: Maybe<Scalars['timestamptz']>
	readonly totalJoined: Scalars['Int']
	readonly updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesBattlepassLevelsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassLevelsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassLevelsOrderBy>>
	where?: InputMaybe<BattlepassLevelsBoolExp>
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesBattlepassLevelsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassLevelsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassLevelsOrderBy>>
	where?: InputMaybe<BattlepassLevelsBoolExp>
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesBattlepassParticipantsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassParticipantsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassParticipantsOrderBy>>
	where?: InputMaybe<BattlepassParticipantsBoolExp>
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesBattlepassParticipantsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassParticipantsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassParticipantsOrderBy>>
	where?: InputMaybe<BattlepassParticipantsBoolExp>
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesBattlepassRewardsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassRewardsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassRewardsOrderBy>>
	where?: InputMaybe<BattlepassRewardsBoolExp>
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesBattlepassRewardsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassRewardsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassRewardsOrderBy>>
	where?: InputMaybe<BattlepassRewardsBoolExp>
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesQuestsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<QuestsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<QuestsOrderBy>>
	where?: InputMaybe<QuestsBoolExp>
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesQuestsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<QuestsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<QuestsOrderBy>>
	where?: InputMaybe<QuestsBoolExp>
}

/** aggregated selection of "Battlepasses" */
export type BattlepassesAggregate = {
	readonly __typename?: 'BattlepassesAggregate'
	readonly aggregate?: Maybe<BattlepassesAggregateFields>
	readonly nodes: ReadonlyArray<Battlepasses>
}

/** aggregate fields of "Battlepasses" */
export type BattlepassesAggregateFields = {
	readonly __typename?: 'BattlepassesAggregateFields'
	readonly avg?: Maybe<BattlepassesAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<BattlepassesMaxFields>
	readonly min?: Maybe<BattlepassesMinFields>
	readonly stddev?: Maybe<BattlepassesStddevFields>
	readonly stddevPop?: Maybe<BattlepassesStddevPopFields>
	readonly stddevSamp?: Maybe<BattlepassesStddevSampFields>
	readonly sum?: Maybe<BattlepassesSumFields>
	readonly varPop?: Maybe<BattlepassesVarPopFields>
	readonly varSamp?: Maybe<BattlepassesVarSampFields>
	readonly variance?: Maybe<BattlepassesVarianceFields>
}

/** aggregate fields of "Battlepasses" */
export type BattlepassesAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<BattlepassesSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type BattlepassesAvgFields = {
	readonly __typename?: 'BattlepassesAvgFields'
	readonly freeClaimed?: Maybe<Scalars['Float']>
	readonly freePasses?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly premiumClaimed?: Maybe<Scalars['Float']>
	readonly premiumPasses?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly season?: Maybe<Scalars['Float']>
	readonly totalJoined?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "Battlepasses". All fields are combined with a logical 'AND'. */
export type BattlepassesBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<BattlepassesBoolExp>>
	readonly _not?: InputMaybe<BattlepassesBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<BattlepassesBoolExp>>
	readonly active?: InputMaybe<BooleanComparisonExp>
	readonly battlepassLevels?: InputMaybe<BattlepassLevelsBoolExp>
	readonly battlepassLevelsAggregate?: InputMaybe<BattlepassLevelsAggregateBoolExp>
	readonly battlepassParticipants?: InputMaybe<BattlepassParticipantsBoolExp>
	readonly battlepassParticipantsAggregate?: InputMaybe<BattlepassParticipantsAggregateBoolExp>
	readonly battlepassRewards?: InputMaybe<BattlepassRewardsBoolExp>
	readonly battlepassRewardsAggregate?: InputMaybe<BattlepassRewardsAggregateBoolExp>
	readonly chainId?: InputMaybe<BpcharComparisonExp>
	readonly cid?: InputMaybe<StringComparisonExp>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly endDate?: InputMaybe<TimestamptzComparisonExp>
	readonly finalized?: InputMaybe<BooleanComparisonExp>
	readonly freeClaimed?: InputMaybe<IntComparisonExp>
	readonly freePasses?: InputMaybe<IntComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly joinable?: InputMaybe<BooleanComparisonExp>
	readonly name?: InputMaybe<StringComparisonExp>
	readonly orgId?: InputMaybe<BpcharComparisonExp>
	readonly premiumClaimed?: InputMaybe<IntComparisonExp>
	readonly premiumPasses?: InputMaybe<IntComparisonExp>
	readonly price?: InputMaybe<IntComparisonExp>
	readonly quests?: InputMaybe<QuestsBoolExp>
	readonly questsAggregate?: InputMaybe<QuestsAggregateBoolExp>
	readonly season?: InputMaybe<IntComparisonExp>
	readonly startDate?: InputMaybe<TimestamptzComparisonExp>
	readonly totalJoined?: InputMaybe<IntComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "Battlepasses" */
export enum BattlepassesConstraint {
	/** unique or primary key constraint on columns "id" */
	BattlepassesPkey = 'Battlepasses_pkey',
}

/** input type for incrementing numeric columns in table "Battlepasses" */
export type BattlepassesIncInput = {
	readonly freeClaimed?: InputMaybe<Scalars['Int']>
	readonly freePasses?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly premiumClaimed?: InputMaybe<Scalars['Int']>
	readonly premiumPasses?: InputMaybe<Scalars['Int']>
	readonly price?: InputMaybe<Scalars['Int']>
	readonly season?: InputMaybe<Scalars['Int']>
	readonly totalJoined?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "Battlepasses" */
export type BattlepassesInsertInput = {
	readonly active?: InputMaybe<Scalars['Boolean']>
	readonly battlepassLevels?: InputMaybe<BattlepassLevelsArrRelInsertInput>
	readonly battlepassParticipants?: InputMaybe<BattlepassParticipantsArrRelInsertInput>
	readonly battlepassRewards?: InputMaybe<BattlepassRewardsArrRelInsertInput>
	readonly chainId?: InputMaybe<Scalars['bpchar']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly endDate?: InputMaybe<Scalars['timestamptz']>
	readonly finalized?: InputMaybe<Scalars['Boolean']>
	readonly freeClaimed?: InputMaybe<Scalars['Int']>
	readonly freePasses?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly joinable?: InputMaybe<Scalars['Boolean']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly orgId?: InputMaybe<Scalars['bpchar']>
	readonly premiumClaimed?: InputMaybe<Scalars['Int']>
	readonly premiumPasses?: InputMaybe<Scalars['Int']>
	readonly price?: InputMaybe<Scalars['Int']>
	readonly quests?: InputMaybe<QuestsArrRelInsertInput>
	readonly season?: InputMaybe<Scalars['Int']>
	readonly startDate?: InputMaybe<Scalars['timestamptz']>
	readonly totalJoined?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type BattlepassesMaxFields = {
	readonly __typename?: 'BattlepassesMaxFields'
	readonly chainId?: Maybe<Scalars['bpchar']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly endDate?: Maybe<Scalars['timestamptz']>
	readonly freeClaimed?: Maybe<Scalars['Int']>
	readonly freePasses?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly orgId?: Maybe<Scalars['bpchar']>
	readonly premiumClaimed?: Maybe<Scalars['Int']>
	readonly premiumPasses?: Maybe<Scalars['Int']>
	readonly price?: Maybe<Scalars['Int']>
	readonly season?: Maybe<Scalars['Int']>
	readonly startDate?: Maybe<Scalars['timestamptz']>
	readonly totalJoined?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type BattlepassesMinFields = {
	readonly __typename?: 'BattlepassesMinFields'
	readonly chainId?: Maybe<Scalars['bpchar']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly endDate?: Maybe<Scalars['timestamptz']>
	readonly freeClaimed?: Maybe<Scalars['Int']>
	readonly freePasses?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly orgId?: Maybe<Scalars['bpchar']>
	readonly premiumClaimed?: Maybe<Scalars['Int']>
	readonly premiumPasses?: Maybe<Scalars['Int']>
	readonly price?: Maybe<Scalars['Int']>
	readonly season?: Maybe<Scalars['Int']>
	readonly startDate?: Maybe<Scalars['timestamptz']>
	readonly totalJoined?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "Battlepasses" */
export type BattlepassesMutationResponse = {
	readonly __typename?: 'BattlepassesMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Battlepasses>
}

/** input type for inserting object relation for remote table "Battlepasses" */
export type BattlepassesObjRelInsertInput = {
	readonly data: BattlepassesInsertInput
	/** upsert condition */
	readonly onConflict?: InputMaybe<BattlepassesOnConflict>
}

/** on_conflict condition type for table "Battlepasses" */
export type BattlepassesOnConflict = {
	readonly constraint: BattlepassesConstraint
	readonly updateColumns?: ReadonlyArray<BattlepassesUpdateColumn>
	readonly where?: InputMaybe<BattlepassesBoolExp>
}

/** Ordering options when selecting data from "Battlepasses". */
export type BattlepassesOrderBy = {
	readonly active?: InputMaybe<OrderBy>
	readonly battlepassLevelsAggregate?: InputMaybe<BattlepassLevelsAggregateOrderBy>
	readonly battlepassParticipantsAggregate?: InputMaybe<BattlepassParticipantsAggregateOrderBy>
	readonly battlepassRewardsAggregate?: InputMaybe<BattlepassRewardsAggregateOrderBy>
	readonly chainId?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly endDate?: InputMaybe<OrderBy>
	readonly finalized?: InputMaybe<OrderBy>
	readonly freeClaimed?: InputMaybe<OrderBy>
	readonly freePasses?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly joinable?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly orgId?: InputMaybe<OrderBy>
	readonly premiumClaimed?: InputMaybe<OrderBy>
	readonly premiumPasses?: InputMaybe<OrderBy>
	readonly price?: InputMaybe<OrderBy>
	readonly questsAggregate?: InputMaybe<QuestsAggregateOrderBy>
	readonly season?: InputMaybe<OrderBy>
	readonly startDate?: InputMaybe<OrderBy>
	readonly totalJoined?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: Battlepasses */
export type BattlepassesPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "Battlepasses" */
export enum BattlepassesSelectColumn {
	/** column name */
	Active = 'active',
	/** column name */
	ChainId = 'chainId',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	EndDate = 'endDate',
	/** column name */
	Finalized = 'finalized',
	/** column name */
	FreeClaimed = 'freeClaimed',
	/** column name */
	FreePasses = 'freePasses',
	/** column name */
	Id = 'id',
	/** column name */
	Joinable = 'joinable',
	/** column name */
	Name = 'name',
	/** column name */
	OrgId = 'orgId',
	/** column name */
	PremiumClaimed = 'premiumClaimed',
	/** column name */
	PremiumPasses = 'premiumPasses',
	/** column name */
	Price = 'price',
	/** column name */
	Season = 'season',
	/** column name */
	StartDate = 'startDate',
	/** column name */
	TotalJoined = 'totalJoined',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "Battlepasses" */
export type BattlepassesSetInput = {
	readonly active?: InputMaybe<Scalars['Boolean']>
	readonly chainId?: InputMaybe<Scalars['bpchar']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly endDate?: InputMaybe<Scalars['timestamptz']>
	readonly finalized?: InputMaybe<Scalars['Boolean']>
	readonly freeClaimed?: InputMaybe<Scalars['Int']>
	readonly freePasses?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly joinable?: InputMaybe<Scalars['Boolean']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly orgId?: InputMaybe<Scalars['bpchar']>
	readonly premiumClaimed?: InputMaybe<Scalars['Int']>
	readonly premiumPasses?: InputMaybe<Scalars['Int']>
	readonly price?: InputMaybe<Scalars['Int']>
	readonly season?: InputMaybe<Scalars['Int']>
	readonly startDate?: InputMaybe<Scalars['timestamptz']>
	readonly totalJoined?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type BattlepassesStddevFields = {
	readonly __typename?: 'BattlepassesStddevFields'
	readonly freeClaimed?: Maybe<Scalars['Float']>
	readonly freePasses?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly premiumClaimed?: Maybe<Scalars['Float']>
	readonly premiumPasses?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly season?: Maybe<Scalars['Float']>
	readonly totalJoined?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type BattlepassesStddevPopFields = {
	readonly __typename?: 'BattlepassesStddevPopFields'
	readonly freeClaimed?: Maybe<Scalars['Float']>
	readonly freePasses?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly premiumClaimed?: Maybe<Scalars['Float']>
	readonly premiumPasses?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly season?: Maybe<Scalars['Float']>
	readonly totalJoined?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type BattlepassesStddevSampFields = {
	readonly __typename?: 'BattlepassesStddevSampFields'
	readonly freeClaimed?: Maybe<Scalars['Float']>
	readonly freePasses?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly premiumClaimed?: Maybe<Scalars['Float']>
	readonly premiumPasses?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly season?: Maybe<Scalars['Float']>
	readonly totalJoined?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "Battlepasses" */
export type BattlepassesStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: BattlepassesStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type BattlepassesStreamCursorValueInput = {
	readonly active?: InputMaybe<Scalars['Boolean']>
	readonly chainId?: InputMaybe<Scalars['bpchar']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly endDate?: InputMaybe<Scalars['timestamptz']>
	readonly finalized?: InputMaybe<Scalars['Boolean']>
	readonly freeClaimed?: InputMaybe<Scalars['Int']>
	readonly freePasses?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly joinable?: InputMaybe<Scalars['Boolean']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly orgId?: InputMaybe<Scalars['bpchar']>
	readonly premiumClaimed?: InputMaybe<Scalars['Int']>
	readonly premiumPasses?: InputMaybe<Scalars['Int']>
	readonly price?: InputMaybe<Scalars['Int']>
	readonly season?: InputMaybe<Scalars['Int']>
	readonly startDate?: InputMaybe<Scalars['timestamptz']>
	readonly totalJoined?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type BattlepassesSumFields = {
	readonly __typename?: 'BattlepassesSumFields'
	readonly freeClaimed?: Maybe<Scalars['Int']>
	readonly freePasses?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
	readonly premiumClaimed?: Maybe<Scalars['Int']>
	readonly premiumPasses?: Maybe<Scalars['Int']>
	readonly price?: Maybe<Scalars['Int']>
	readonly season?: Maybe<Scalars['Int']>
	readonly totalJoined?: Maybe<Scalars['Int']>
}

/** update columns of table "Battlepasses" */
export enum BattlepassesUpdateColumn {
	/** column name */
	Active = 'active',
	/** column name */
	ChainId = 'chainId',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	EndDate = 'endDate',
	/** column name */
	Finalized = 'finalized',
	/** column name */
	FreeClaimed = 'freeClaimed',
	/** column name */
	FreePasses = 'freePasses',
	/** column name */
	Id = 'id',
	/** column name */
	Joinable = 'joinable',
	/** column name */
	Name = 'name',
	/** column name */
	OrgId = 'orgId',
	/** column name */
	PremiumClaimed = 'premiumClaimed',
	/** column name */
	PremiumPasses = 'premiumPasses',
	/** column name */
	Price = 'price',
	/** column name */
	Season = 'season',
	/** column name */
	StartDate = 'startDate',
	/** column name */
	TotalJoined = 'totalJoined',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type BattlepassesUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<BattlepassesIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<BattlepassesSetInput>
	/** filter the rows which have to be updated */
	readonly where: BattlepassesBoolExp
}

/** aggregate varPop on columns */
export type BattlepassesVarPopFields = {
	readonly __typename?: 'BattlepassesVarPopFields'
	readonly freeClaimed?: Maybe<Scalars['Float']>
	readonly freePasses?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly premiumClaimed?: Maybe<Scalars['Float']>
	readonly premiumPasses?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly season?: Maybe<Scalars['Float']>
	readonly totalJoined?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type BattlepassesVarSampFields = {
	readonly __typename?: 'BattlepassesVarSampFields'
	readonly freeClaimed?: Maybe<Scalars['Float']>
	readonly freePasses?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly premiumClaimed?: Maybe<Scalars['Float']>
	readonly premiumPasses?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly season?: Maybe<Scalars['Float']>
	readonly totalJoined?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type BattlepassesVarianceFields = {
	readonly __typename?: 'BattlepassesVarianceFields'
	readonly freeClaimed?: Maybe<Scalars['Float']>
	readonly freePasses?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly premiumClaimed?: Maybe<Scalars['Float']>
	readonly premiumPasses?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly season?: Maybe<Scalars['Float']>
	readonly totalJoined?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['bigint']>
	readonly _gt?: InputMaybe<Scalars['bigint']>
	readonly _gte?: InputMaybe<Scalars['bigint']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['bigint']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['bigint']>
	readonly _lte?: InputMaybe<Scalars['bigint']>
	readonly _neq?: InputMaybe<Scalars['bigint']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['bigint']>>
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['Boolean']>
	readonly _gt?: InputMaybe<Scalars['Boolean']>
	readonly _gte?: InputMaybe<Scalars['Boolean']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['Boolean']>
	readonly _lte?: InputMaybe<Scalars['Boolean']>
	readonly _neq?: InputMaybe<Scalars['Boolean']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>
}

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type BpcharComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['bpchar']>
	readonly _gt?: InputMaybe<Scalars['bpchar']>
	readonly _gte?: InputMaybe<Scalars['bpchar']>
	/** does the column match the given case-insensitive pattern */
	readonly _ilike?: InputMaybe<Scalars['bpchar']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['bpchar']>>
	/** does the column match the given POSIX regular expression, case insensitive */
	readonly _iregex?: InputMaybe<Scalars['bpchar']>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	/** does the column match the given pattern */
	readonly _like?: InputMaybe<Scalars['bpchar']>
	readonly _lt?: InputMaybe<Scalars['bpchar']>
	readonly _lte?: InputMaybe<Scalars['bpchar']>
	readonly _neq?: InputMaybe<Scalars['bpchar']>
	/** does the column NOT match the given case-insensitive pattern */
	readonly _nilike?: InputMaybe<Scalars['bpchar']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['bpchar']>>
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	readonly _niregex?: InputMaybe<Scalars['bpchar']>
	/** does the column NOT match the given pattern */
	readonly _nlike?: InputMaybe<Scalars['bpchar']>
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	readonly _nregex?: InputMaybe<Scalars['bpchar']>
	/** does the column NOT match the given SQL regular expression */
	readonly _nsimilar?: InputMaybe<Scalars['bpchar']>
	/** does the column match the given POSIX regular expression, case sensitive */
	readonly _regex?: InputMaybe<Scalars['bpchar']>
	/** does the column match the given SQL regular expression */
	readonly _similar?: InputMaybe<Scalars['bpchar']>
}

/** columns and relationships of "campaign" */
export type Campaign = {
	readonly __typename?: 'Campaign'
	readonly admin: Scalars['String']
	readonly adminIdentityId?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly campaignContributors: ReadonlyArray<CampaignContributor>
	/** An aggregate relationship */
	readonly campaignContributorsAggregate: CampaignContributorAggregate
	readonly cid: Scalars['String']
	readonly createdAtBlock: Scalars['Int']
	readonly creator: Scalars['String']
	readonly creatorIdentityId?: Maybe<Scalars['String']>
	readonly deposit: Scalars['numeric']
	readonly description: Scalars['String']
	readonly email: Scalars['String']
	readonly expiry: Scalars['Int']
	readonly governance: Scalars['String']
	readonly header: Scalars['String']
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	/** An object relationship */
	readonly identityByCreatorIdentityId?: Maybe<Identity>
	readonly logo: Scalars['String']
	readonly markdown: Scalars['String']
	readonly name: Scalars['String']
	/** An object relationship */
	readonly organization?: Maybe<Organization>
	readonly organizationId?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly proposals: ReadonlyArray<Proposal>
	/** An aggregate relationship */
	readonly proposalsAggregate: ProposalAggregate
	readonly protocol: Scalars['String']
	readonly start: Scalars['Int']
	readonly state: Scalars['String']
	readonly target: Scalars['numeric']
	readonly title: Scalars['String']
	readonly tokenName?: Maybe<Scalars['String']>
	readonly tokenSymbol?: Maybe<Scalars['String']>
}

/** columns and relationships of "campaign" */
export type CampaignCampaignContributorsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignContributorSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignContributorOrderBy>>
	where?: InputMaybe<CampaignContributorBoolExp>
}

/** columns and relationships of "campaign" */
export type CampaignCampaignContributorsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignContributorSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignContributorOrderBy>>
	where?: InputMaybe<CampaignContributorBoolExp>
}

/** columns and relationships of "campaign" */
export type CampaignProposalsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalOrderBy>>
	where?: InputMaybe<ProposalBoolExp>
}

/** columns and relationships of "campaign" */
export type CampaignProposalsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalOrderBy>>
	where?: InputMaybe<ProposalBoolExp>
}

/** aggregated selection of "campaign" */
export type CampaignAggregate = {
	readonly __typename?: 'CampaignAggregate'
	readonly aggregate?: Maybe<CampaignAggregateFields>
	readonly nodes: ReadonlyArray<Campaign>
}

export type CampaignAggregateBoolExp = {
	readonly count?: InputMaybe<CampaignAggregateBoolExpCount>
}

/** aggregate fields of "campaign" */
export type CampaignAggregateFields = {
	readonly __typename?: 'CampaignAggregateFields'
	readonly avg?: Maybe<CampaignAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<CampaignMaxFields>
	readonly min?: Maybe<CampaignMinFields>
	readonly stddev?: Maybe<CampaignStddevFields>
	readonly stddevPop?: Maybe<CampaignStddevPopFields>
	readonly stddevSamp?: Maybe<CampaignStddevSampFields>
	readonly sum?: Maybe<CampaignSumFields>
	readonly varPop?: Maybe<CampaignVarPopFields>
	readonly varSamp?: Maybe<CampaignVarSampFields>
	readonly variance?: Maybe<CampaignVarianceFields>
}

/** aggregate fields of "campaign" */
export type CampaignAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<CampaignSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "campaign" */
export type CampaignAggregateOrderBy = {
	readonly avg?: InputMaybe<CampaignAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<CampaignMaxOrderBy>
	readonly min?: InputMaybe<CampaignMinOrderBy>
	readonly stddev?: InputMaybe<CampaignStddevOrderBy>
	readonly stddevPop?: InputMaybe<CampaignStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<CampaignStddevSampOrderBy>
	readonly sum?: InputMaybe<CampaignSumOrderBy>
	readonly varPop?: InputMaybe<CampaignVarPopOrderBy>
	readonly varSamp?: InputMaybe<CampaignVarSampOrderBy>
	readonly variance?: InputMaybe<CampaignVarianceOrderBy>
}

/** input type for inserting array relation for remote table "campaign" */
export type CampaignArrRelInsertInput = {
	readonly data: ReadonlyArray<CampaignInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<CampaignOnConflict>
}

/** aggregate avg on columns */
export type CampaignAvgFields = {
	readonly __typename?: 'CampaignAvgFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
	readonly target?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "campaign" */
export type CampaignAvgOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
	readonly target?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "campaign". All fields are combined with a logical 'AND'. */
export type CampaignBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<CampaignBoolExp>>
	readonly _not?: InputMaybe<CampaignBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<CampaignBoolExp>>
	readonly admin?: InputMaybe<StringComparisonExp>
	readonly adminIdentityId?: InputMaybe<StringComparisonExp>
	readonly campaignContributors?: InputMaybe<CampaignContributorBoolExp>
	readonly campaignContributorsAggregate?: InputMaybe<CampaignContributorAggregateBoolExp>
	readonly cid?: InputMaybe<StringComparisonExp>
	readonly createdAtBlock?: InputMaybe<IntComparisonExp>
	readonly creator?: InputMaybe<StringComparisonExp>
	readonly creatorIdentityId?: InputMaybe<StringComparisonExp>
	readonly deposit?: InputMaybe<NumericComparisonExp>
	readonly description?: InputMaybe<StringComparisonExp>
	readonly email?: InputMaybe<StringComparisonExp>
	readonly expiry?: InputMaybe<IntComparisonExp>
	readonly governance?: InputMaybe<StringComparisonExp>
	readonly header?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly identity?: InputMaybe<IdentityBoolExp>
	readonly identityByCreatorIdentityId?: InputMaybe<IdentityBoolExp>
	readonly logo?: InputMaybe<StringComparisonExp>
	readonly markdown?: InputMaybe<StringComparisonExp>
	readonly name?: InputMaybe<StringComparisonExp>
	readonly organization?: InputMaybe<OrganizationBoolExp>
	readonly organizationId?: InputMaybe<StringComparisonExp>
	readonly proposals?: InputMaybe<ProposalBoolExp>
	readonly proposalsAggregate?: InputMaybe<ProposalAggregateBoolExp>
	readonly protocol?: InputMaybe<StringComparisonExp>
	readonly start?: InputMaybe<IntComparisonExp>
	readonly state?: InputMaybe<StringComparisonExp>
	readonly target?: InputMaybe<NumericComparisonExp>
	readonly title?: InputMaybe<StringComparisonExp>
	readonly tokenName?: InputMaybe<StringComparisonExp>
	readonly tokenSymbol?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "campaign" */
export enum CampaignConstraint {
	/** unique or primary key constraint on columns "id" */
	Pk_0ce34d26e7f2eb316a3a592cdc4 = 'PK_0ce34d26e7f2eb316a3a592cdc4',
}

/** columns and relationships of "campaign_contributor" */
export type CampaignContributor = {
	readonly __typename?: 'CampaignContributor'
	readonly address: Scalars['String']
	/** An object relationship */
	readonly campaign?: Maybe<Campaign>
	readonly campaignId?: Maybe<Scalars['String']>
	readonly contributed: Scalars['numeric']
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly identityId?: Maybe<Scalars['String']>
}

/** aggregated selection of "campaign_contributor" */
export type CampaignContributorAggregate = {
	readonly __typename?: 'CampaignContributorAggregate'
	readonly aggregate?: Maybe<CampaignContributorAggregateFields>
	readonly nodes: ReadonlyArray<CampaignContributor>
}

export type CampaignContributorAggregateBoolExp = {
	readonly count?: InputMaybe<CampaignContributorAggregateBoolExpCount>
}

/** aggregate fields of "campaign_contributor" */
export type CampaignContributorAggregateFields = {
	readonly __typename?: 'CampaignContributorAggregateFields'
	readonly avg?: Maybe<CampaignContributorAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<CampaignContributorMaxFields>
	readonly min?: Maybe<CampaignContributorMinFields>
	readonly stddev?: Maybe<CampaignContributorStddevFields>
	readonly stddevPop?: Maybe<CampaignContributorStddevPopFields>
	readonly stddevSamp?: Maybe<CampaignContributorStddevSampFields>
	readonly sum?: Maybe<CampaignContributorSumFields>
	readonly varPop?: Maybe<CampaignContributorVarPopFields>
	readonly varSamp?: Maybe<CampaignContributorVarSampFields>
	readonly variance?: Maybe<CampaignContributorVarianceFields>
}

/** aggregate fields of "campaign_contributor" */
export type CampaignContributorAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<CampaignContributorSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "campaign_contributor" */
export type CampaignContributorAggregateOrderBy = {
	readonly avg?: InputMaybe<CampaignContributorAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<CampaignContributorMaxOrderBy>
	readonly min?: InputMaybe<CampaignContributorMinOrderBy>
	readonly stddev?: InputMaybe<CampaignContributorStddevOrderBy>
	readonly stddevPop?: InputMaybe<CampaignContributorStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<CampaignContributorStddevSampOrderBy>
	readonly sum?: InputMaybe<CampaignContributorSumOrderBy>
	readonly varPop?: InputMaybe<CampaignContributorVarPopOrderBy>
	readonly varSamp?: InputMaybe<CampaignContributorVarSampOrderBy>
	readonly variance?: InputMaybe<CampaignContributorVarianceOrderBy>
}

/** input type for inserting array relation for remote table "campaign_contributor" */
export type CampaignContributorArrRelInsertInput = {
	readonly data: ReadonlyArray<CampaignContributorInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<CampaignContributorOnConflict>
}

/** aggregate avg on columns */
export type CampaignContributorAvgFields = {
	readonly __typename?: 'CampaignContributorAvgFields'
	readonly contributed?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "campaign_contributor" */
export type CampaignContributorAvgOrderBy = {
	readonly contributed?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "campaign_contributor". All fields are combined with a logical 'AND'. */
export type CampaignContributorBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<CampaignContributorBoolExp>>
	readonly _not?: InputMaybe<CampaignContributorBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<CampaignContributorBoolExp>>
	readonly address?: InputMaybe<StringComparisonExp>
	readonly campaign?: InputMaybe<CampaignBoolExp>
	readonly campaignId?: InputMaybe<StringComparisonExp>
	readonly contributed?: InputMaybe<NumericComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly identity?: InputMaybe<IdentityBoolExp>
	readonly identityId?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "campaign_contributor" */
export enum CampaignContributorConstraint {
	/** unique or primary key constraint on columns "id" */
	Pk_0a35c586180eb88ed47f33d0914 = 'PK_0a35c586180eb88ed47f33d0914',
}

/** input type for incrementing numeric columns in table "campaign_contributor" */
export type CampaignContributorIncInput = {
	readonly contributed?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "campaign_contributor" */
export type CampaignContributorInsertInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly campaign?: InputMaybe<CampaignObjRelInsertInput>
	readonly campaignId?: InputMaybe<Scalars['String']>
	readonly contributed?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<IdentityObjRelInsertInput>
	readonly identityId?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type CampaignContributorMaxFields = {
	readonly __typename?: 'CampaignContributorMaxFields'
	readonly address?: Maybe<Scalars['String']>
	readonly campaignId?: Maybe<Scalars['String']>
	readonly contributed?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly identityId?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "campaign_contributor" */
export type CampaignContributorMaxOrderBy = {
	readonly address?: InputMaybe<OrderBy>
	readonly campaignId?: InputMaybe<OrderBy>
	readonly contributed?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type CampaignContributorMinFields = {
	readonly __typename?: 'CampaignContributorMinFields'
	readonly address?: Maybe<Scalars['String']>
	readonly campaignId?: Maybe<Scalars['String']>
	readonly contributed?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly identityId?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "campaign_contributor" */
export type CampaignContributorMinOrderBy = {
	readonly address?: InputMaybe<OrderBy>
	readonly campaignId?: InputMaybe<OrderBy>
	readonly contributed?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "campaign_contributor" */
export type CampaignContributorMutationResponse = {
	readonly __typename?: 'CampaignContributorMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<CampaignContributor>
}

/** on_conflict condition type for table "campaign_contributor" */
export type CampaignContributorOnConflict = {
	readonly constraint: CampaignContributorConstraint
	readonly updateColumns?: ReadonlyArray<CampaignContributorUpdateColumn>
	readonly where?: InputMaybe<CampaignContributorBoolExp>
}

/** Ordering options when selecting data from "campaign_contributor". */
export type CampaignContributorOrderBy = {
	readonly address?: InputMaybe<OrderBy>
	readonly campaign?: InputMaybe<CampaignOrderBy>
	readonly campaignId?: InputMaybe<OrderBy>
	readonly contributed?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentityOrderBy>
	readonly identityId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: campaign_contributor */
export type CampaignContributorPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "campaign_contributor" */
export enum CampaignContributorSelectColumn {
	/** column name */
	Address = 'address',
	/** column name */
	CampaignId = 'campaignId',
	/** column name */
	Contributed = 'contributed',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
}

/** input type for updating data in table "campaign_contributor" */
export type CampaignContributorSetInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly campaignId?: InputMaybe<Scalars['String']>
	readonly contributed?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identityId?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type CampaignContributorStddevFields = {
	readonly __typename?: 'CampaignContributorStddevFields'
	readonly contributed?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "campaign_contributor" */
export type CampaignContributorStddevOrderBy = {
	readonly contributed?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type CampaignContributorStddevPopFields = {
	readonly __typename?: 'CampaignContributorStddevPopFields'
	readonly contributed?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "campaign_contributor" */
export type CampaignContributorStddevPopOrderBy = {
	readonly contributed?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type CampaignContributorStddevSampFields = {
	readonly __typename?: 'CampaignContributorStddevSampFields'
	readonly contributed?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "campaign_contributor" */
export type CampaignContributorStddevSampOrderBy = {
	readonly contributed?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "campaign_contributor" */
export type CampaignContributorStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: CampaignContributorStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type CampaignContributorStreamCursorValueInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly campaignId?: InputMaybe<Scalars['String']>
	readonly contributed?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identityId?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type CampaignContributorSumFields = {
	readonly __typename?: 'CampaignContributorSumFields'
	readonly contributed?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "campaign_contributor" */
export type CampaignContributorSumOrderBy = {
	readonly contributed?: InputMaybe<OrderBy>
}

/** update columns of table "campaign_contributor" */
export enum CampaignContributorUpdateColumn {
	/** column name */
	Address = 'address',
	/** column name */
	CampaignId = 'campaignId',
	/** column name */
	Contributed = 'contributed',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
}

export type CampaignContributorUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<CampaignContributorIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<CampaignContributorSetInput>
	/** filter the rows which have to be updated */
	readonly where: CampaignContributorBoolExp
}

/** aggregate varPop on columns */
export type CampaignContributorVarPopFields = {
	readonly __typename?: 'CampaignContributorVarPopFields'
	readonly contributed?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "campaign_contributor" */
export type CampaignContributorVarPopOrderBy = {
	readonly contributed?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type CampaignContributorVarSampFields = {
	readonly __typename?: 'CampaignContributorVarSampFields'
	readonly contributed?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "campaign_contributor" */
export type CampaignContributorVarSampOrderBy = {
	readonly contributed?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type CampaignContributorVarianceFields = {
	readonly __typename?: 'CampaignContributorVarianceFields'
	readonly contributed?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "campaign_contributor" */
export type CampaignContributorVarianceOrderBy = {
	readonly contributed?: InputMaybe<OrderBy>
}

/** input type for incrementing numeric columns in table "campaign" */
export type CampaignIncInput = {
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly expiry?: InputMaybe<Scalars['Int']>
	readonly start?: InputMaybe<Scalars['Int']>
	readonly target?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "campaign" */
export type CampaignInsertInput = {
	readonly admin?: InputMaybe<Scalars['String']>
	readonly adminIdentityId?: InputMaybe<Scalars['String']>
	readonly campaignContributors?: InputMaybe<CampaignContributorArrRelInsertInput>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creatorIdentityId?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly expiry?: InputMaybe<Scalars['Int']>
	readonly governance?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<IdentityObjRelInsertInput>
	readonly identityByCreatorIdentityId?: InputMaybe<IdentityObjRelInsertInput>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly markdown?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly organization?: InputMaybe<OrganizationObjRelInsertInput>
	readonly organizationId?: InputMaybe<Scalars['String']>
	readonly proposals?: InputMaybe<ProposalArrRelInsertInput>
	readonly protocol?: InputMaybe<Scalars['String']>
	readonly start?: InputMaybe<Scalars['Int']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly target?: InputMaybe<Scalars['numeric']>
	readonly title?: InputMaybe<Scalars['String']>
	readonly tokenName?: InputMaybe<Scalars['String']>
	readonly tokenSymbol?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type CampaignMaxFields = {
	readonly __typename?: 'CampaignMaxFields'
	readonly admin?: Maybe<Scalars['String']>
	readonly adminIdentityId?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAtBlock?: Maybe<Scalars['Int']>
	readonly creator?: Maybe<Scalars['String']>
	readonly creatorIdentityId?: Maybe<Scalars['String']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly description?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly expiry?: Maybe<Scalars['Int']>
	readonly governance?: Maybe<Scalars['String']>
	readonly header?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly logo?: Maybe<Scalars['String']>
	readonly markdown?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly organizationId?: Maybe<Scalars['String']>
	readonly protocol?: Maybe<Scalars['String']>
	readonly start?: Maybe<Scalars['Int']>
	readonly state?: Maybe<Scalars['String']>
	readonly target?: Maybe<Scalars['numeric']>
	readonly title?: Maybe<Scalars['String']>
	readonly tokenName?: Maybe<Scalars['String']>
	readonly tokenSymbol?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "campaign" */
export type CampaignMaxOrderBy = {
	readonly admin?: InputMaybe<OrderBy>
	readonly adminIdentityId?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly creator?: InputMaybe<OrderBy>
	readonly creatorIdentityId?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly email?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly governance?: InputMaybe<OrderBy>
	readonly header?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly logo?: InputMaybe<OrderBy>
	readonly markdown?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly organizationId?: InputMaybe<OrderBy>
	readonly protocol?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
	readonly state?: InputMaybe<OrderBy>
	readonly target?: InputMaybe<OrderBy>
	readonly title?: InputMaybe<OrderBy>
	readonly tokenName?: InputMaybe<OrderBy>
	readonly tokenSymbol?: InputMaybe<OrderBy>
}

/** columns and relationships of "campaign_metadata" */
export type CampaignMetadata = {
	readonly __typename?: 'CampaignMetadata'
	readonly description: Scalars['String']
	readonly email: Scalars['String']
	readonly header: Scalars['String']
	readonly id: Scalars['String']
	readonly logo: Scalars['String']
	readonly markdown: Scalars['String']
	readonly name: Scalars['String']
	readonly title: Scalars['String']
}

/** aggregated selection of "campaign_metadata" */
export type CampaignMetadataAggregate = {
	readonly __typename?: 'CampaignMetadataAggregate'
	readonly aggregate?: Maybe<CampaignMetadataAggregateFields>
	readonly nodes: ReadonlyArray<CampaignMetadata>
}

/** aggregate fields of "campaign_metadata" */
export type CampaignMetadataAggregateFields = {
	readonly __typename?: 'CampaignMetadataAggregateFields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<CampaignMetadataMaxFields>
	readonly min?: Maybe<CampaignMetadataMinFields>
}

/** aggregate fields of "campaign_metadata" */
export type CampaignMetadataAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<CampaignMetadataSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "campaign_metadata". All fields are combined with a logical 'AND'. */
export type CampaignMetadataBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<CampaignMetadataBoolExp>>
	readonly _not?: InputMaybe<CampaignMetadataBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<CampaignMetadataBoolExp>>
	readonly description?: InputMaybe<StringComparisonExp>
	readonly email?: InputMaybe<StringComparisonExp>
	readonly header?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly logo?: InputMaybe<StringComparisonExp>
	readonly markdown?: InputMaybe<StringComparisonExp>
	readonly name?: InputMaybe<StringComparisonExp>
	readonly title?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "campaign_metadata" */
export enum CampaignMetadataConstraint {
	/** unique or primary key constraint on columns "id" */
	Pk_78e8f198409b4db925b1a44d092 = 'PK_78e8f198409b4db925b1a44d092',
}

/** input type for inserting data into table "campaign_metadata" */
export type CampaignMetadataInsertInput = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly markdown?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly title?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type CampaignMetadataMaxFields = {
	readonly __typename?: 'CampaignMetadataMaxFields'
	readonly description?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly header?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly logo?: Maybe<Scalars['String']>
	readonly markdown?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly title?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type CampaignMetadataMinFields = {
	readonly __typename?: 'CampaignMetadataMinFields'
	readonly description?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly header?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly logo?: Maybe<Scalars['String']>
	readonly markdown?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly title?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "campaign_metadata" */
export type CampaignMetadataMutationResponse = {
	readonly __typename?: 'CampaignMetadataMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<CampaignMetadata>
}

/** on_conflict condition type for table "campaign_metadata" */
export type CampaignMetadataOnConflict = {
	readonly constraint: CampaignMetadataConstraint
	readonly updateColumns?: ReadonlyArray<CampaignMetadataUpdateColumn>
	readonly where?: InputMaybe<CampaignMetadataBoolExp>
}

/** Ordering options when selecting data from "campaign_metadata". */
export type CampaignMetadataOrderBy = {
	readonly description?: InputMaybe<OrderBy>
	readonly email?: InputMaybe<OrderBy>
	readonly header?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly logo?: InputMaybe<OrderBy>
	readonly markdown?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly title?: InputMaybe<OrderBy>
}

/** primary key columns input for table: campaign_metadata */
export type CampaignMetadataPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "campaign_metadata" */
export enum CampaignMetadataSelectColumn {
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

/** input type for updating data in table "campaign_metadata" */
export type CampaignMetadataSetInput = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly markdown?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly title?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "campaign_metadata" */
export type CampaignMetadataStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: CampaignMetadataStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type CampaignMetadataStreamCursorValueInput = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly markdown?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly title?: InputMaybe<Scalars['String']>
}

/** update columns of table "campaign_metadata" */
export enum CampaignMetadataUpdateColumn {
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

export type CampaignMetadataUpdates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<CampaignMetadataSetInput>
	/** filter the rows which have to be updated */
	readonly where: CampaignMetadataBoolExp
}

/** aggregate min on columns */
export type CampaignMinFields = {
	readonly __typename?: 'CampaignMinFields'
	readonly admin?: Maybe<Scalars['String']>
	readonly adminIdentityId?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAtBlock?: Maybe<Scalars['Int']>
	readonly creator?: Maybe<Scalars['String']>
	readonly creatorIdentityId?: Maybe<Scalars['String']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly description?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly expiry?: Maybe<Scalars['Int']>
	readonly governance?: Maybe<Scalars['String']>
	readonly header?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly logo?: Maybe<Scalars['String']>
	readonly markdown?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly organizationId?: Maybe<Scalars['String']>
	readonly protocol?: Maybe<Scalars['String']>
	readonly start?: Maybe<Scalars['Int']>
	readonly state?: Maybe<Scalars['String']>
	readonly target?: Maybe<Scalars['numeric']>
	readonly title?: Maybe<Scalars['String']>
	readonly tokenName?: Maybe<Scalars['String']>
	readonly tokenSymbol?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "campaign" */
export type CampaignMinOrderBy = {
	readonly admin?: InputMaybe<OrderBy>
	readonly adminIdentityId?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly creator?: InputMaybe<OrderBy>
	readonly creatorIdentityId?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly email?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly governance?: InputMaybe<OrderBy>
	readonly header?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly logo?: InputMaybe<OrderBy>
	readonly markdown?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly organizationId?: InputMaybe<OrderBy>
	readonly protocol?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
	readonly state?: InputMaybe<OrderBy>
	readonly target?: InputMaybe<OrderBy>
	readonly title?: InputMaybe<OrderBy>
	readonly tokenName?: InputMaybe<OrderBy>
	readonly tokenSymbol?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "campaign" */
export type CampaignMutationResponse = {
	readonly __typename?: 'CampaignMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Campaign>
}

/** input type for inserting object relation for remote table "campaign" */
export type CampaignObjRelInsertInput = {
	readonly data: CampaignInsertInput
	/** upsert condition */
	readonly onConflict?: InputMaybe<CampaignOnConflict>
}

/** on_conflict condition type for table "campaign" */
export type CampaignOnConflict = {
	readonly constraint: CampaignConstraint
	readonly updateColumns?: ReadonlyArray<CampaignUpdateColumn>
	readonly where?: InputMaybe<CampaignBoolExp>
}

/** Ordering options when selecting data from "campaign". */
export type CampaignOrderBy = {
	readonly admin?: InputMaybe<OrderBy>
	readonly adminIdentityId?: InputMaybe<OrderBy>
	readonly campaignContributorsAggregate?: InputMaybe<CampaignContributorAggregateOrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly creator?: InputMaybe<OrderBy>
	readonly creatorIdentityId?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly email?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly governance?: InputMaybe<OrderBy>
	readonly header?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentityOrderBy>
	readonly identityByCreatorIdentityId?: InputMaybe<IdentityOrderBy>
	readonly logo?: InputMaybe<OrderBy>
	readonly markdown?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly organization?: InputMaybe<OrganizationOrderBy>
	readonly organizationId?: InputMaybe<OrderBy>
	readonly proposalsAggregate?: InputMaybe<ProposalAggregateOrderBy>
	readonly protocol?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
	readonly state?: InputMaybe<OrderBy>
	readonly target?: InputMaybe<OrderBy>
	readonly title?: InputMaybe<OrderBy>
	readonly tokenName?: InputMaybe<OrderBy>
	readonly tokenSymbol?: InputMaybe<OrderBy>
}

/** primary key columns input for table: campaign */
export type CampaignPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "campaign" */
export enum CampaignSelectColumn {
	/** column name */
	Admin = 'admin',
	/** column name */
	AdminIdentityId = 'adminIdentityId',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAtBlock = 'createdAtBlock',
	/** column name */
	Creator = 'creator',
	/** column name */
	CreatorIdentityId = 'creatorIdentityId',
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
	OrganizationId = 'organizationId',
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
	TokenName = 'tokenName',
	/** column name */
	TokenSymbol = 'tokenSymbol',
}

/** input type for updating data in table "campaign" */
export type CampaignSetInput = {
	readonly admin?: InputMaybe<Scalars['String']>
	readonly adminIdentityId?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creatorIdentityId?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly expiry?: InputMaybe<Scalars['Int']>
	readonly governance?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly markdown?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly organizationId?: InputMaybe<Scalars['String']>
	readonly protocol?: InputMaybe<Scalars['String']>
	readonly start?: InputMaybe<Scalars['Int']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly target?: InputMaybe<Scalars['numeric']>
	readonly title?: InputMaybe<Scalars['String']>
	readonly tokenName?: InputMaybe<Scalars['String']>
	readonly tokenSymbol?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type CampaignStddevFields = {
	readonly __typename?: 'CampaignStddevFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
	readonly target?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "campaign" */
export type CampaignStddevOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
	readonly target?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type CampaignStddevPopFields = {
	readonly __typename?: 'CampaignStddevPopFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
	readonly target?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "campaign" */
export type CampaignStddevPopOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
	readonly target?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type CampaignStddevSampFields = {
	readonly __typename?: 'CampaignStddevSampFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
	readonly target?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "campaign" */
export type CampaignStddevSampOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
	readonly target?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "campaign" */
export type CampaignStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: CampaignStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type CampaignStreamCursorValueInput = {
	readonly admin?: InputMaybe<Scalars['String']>
	readonly adminIdentityId?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creatorIdentityId?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly expiry?: InputMaybe<Scalars['Int']>
	readonly governance?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly markdown?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly organizationId?: InputMaybe<Scalars['String']>
	readonly protocol?: InputMaybe<Scalars['String']>
	readonly start?: InputMaybe<Scalars['Int']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly target?: InputMaybe<Scalars['numeric']>
	readonly title?: InputMaybe<Scalars['String']>
	readonly tokenName?: InputMaybe<Scalars['String']>
	readonly tokenSymbol?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type CampaignSumFields = {
	readonly __typename?: 'CampaignSumFields'
	readonly createdAtBlock?: Maybe<Scalars['Int']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly expiry?: Maybe<Scalars['Int']>
	readonly start?: Maybe<Scalars['Int']>
	readonly target?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "campaign" */
export type CampaignSumOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
	readonly target?: InputMaybe<OrderBy>
}

/** update columns of table "campaign" */
export enum CampaignUpdateColumn {
	/** column name */
	Admin = 'admin',
	/** column name */
	AdminIdentityId = 'adminIdentityId',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAtBlock = 'createdAtBlock',
	/** column name */
	Creator = 'creator',
	/** column name */
	CreatorIdentityId = 'creatorIdentityId',
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
	OrganizationId = 'organizationId',
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
	TokenName = 'tokenName',
	/** column name */
	TokenSymbol = 'tokenSymbol',
}

export type CampaignUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<CampaignIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<CampaignSetInput>
	/** filter the rows which have to be updated */
	readonly where: CampaignBoolExp
}

/** aggregate varPop on columns */
export type CampaignVarPopFields = {
	readonly __typename?: 'CampaignVarPopFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
	readonly target?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "campaign" */
export type CampaignVarPopOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
	readonly target?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type CampaignVarSampFields = {
	readonly __typename?: 'CampaignVarSampFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
	readonly target?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "campaign" */
export type CampaignVarSampOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
	readonly target?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type CampaignVarianceFields = {
	readonly __typename?: 'CampaignVarianceFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
	readonly target?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "campaign" */
export type CampaignVarianceOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
	readonly target?: InputMaybe<OrderBy>
}

/** columns and relationships of "ChainActivities" */
export type ChainActivities = {
	readonly __typename?: 'ChainActivities'
	readonly activityType: Scalars['enum_ChainActivities_activityType']
	readonly address: Scalars['bpchar']
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id: Scalars['Int']
	readonly updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "ChainActivities" */
export type ChainActivitiesAggregate = {
	readonly __typename?: 'ChainActivitiesAggregate'
	readonly aggregate?: Maybe<ChainActivitiesAggregateFields>
	readonly nodes: ReadonlyArray<ChainActivities>
}

/** aggregate fields of "ChainActivities" */
export type ChainActivitiesAggregateFields = {
	readonly __typename?: 'ChainActivitiesAggregateFields'
	readonly avg?: Maybe<ChainActivitiesAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<ChainActivitiesMaxFields>
	readonly min?: Maybe<ChainActivitiesMinFields>
	readonly stddev?: Maybe<ChainActivitiesStddevFields>
	readonly stddevPop?: Maybe<ChainActivitiesStddevPopFields>
	readonly stddevSamp?: Maybe<ChainActivitiesStddevSampFields>
	readonly sum?: Maybe<ChainActivitiesSumFields>
	readonly varPop?: Maybe<ChainActivitiesVarPopFields>
	readonly varSamp?: Maybe<ChainActivitiesVarSampFields>
	readonly variance?: Maybe<ChainActivitiesVarianceFields>
}

/** aggregate fields of "ChainActivities" */
export type ChainActivitiesAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<ChainActivitiesSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type ChainActivitiesAvgFields = {
	readonly __typename?: 'ChainActivitiesAvgFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "ChainActivities". All fields are combined with a logical 'AND'. */
export type ChainActivitiesBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<ChainActivitiesBoolExp>>
	readonly _not?: InputMaybe<ChainActivitiesBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<ChainActivitiesBoolExp>>
	readonly activityType?: InputMaybe<EnumChainActivitiesActivityTypeComparisonExp>
	readonly address?: InputMaybe<BpcharComparisonExp>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "ChainActivities" */
export enum ChainActivitiesConstraint {
	/** unique or primary key constraint on columns "id" */
	ChainActivitiesPkey = 'ChainActivities_pkey',
}

/** input type for incrementing numeric columns in table "ChainActivities" */
export type ChainActivitiesIncInput = {
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "ChainActivities" */
export type ChainActivitiesInsertInput = {
	readonly activityType?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly address?: InputMaybe<Scalars['bpchar']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type ChainActivitiesMaxFields = {
	readonly __typename?: 'ChainActivitiesMaxFields'
	readonly activityType?: Maybe<Scalars['enum_ChainActivities_activityType']>
	readonly address?: Maybe<Scalars['bpchar']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type ChainActivitiesMinFields = {
	readonly __typename?: 'ChainActivitiesMinFields'
	readonly activityType?: Maybe<Scalars['enum_ChainActivities_activityType']>
	readonly address?: Maybe<Scalars['bpchar']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "ChainActivities" */
export type ChainActivitiesMutationResponse = {
	readonly __typename?: 'ChainActivitiesMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<ChainActivities>
}

/** on_conflict condition type for table "ChainActivities" */
export type ChainActivitiesOnConflict = {
	readonly constraint: ChainActivitiesConstraint
	readonly updateColumns?: ReadonlyArray<ChainActivitiesUpdateColumn>
	readonly where?: InputMaybe<ChainActivitiesBoolExp>
}

/** Ordering options when selecting data from "ChainActivities". */
export type ChainActivitiesOrderBy = {
	readonly activityType?: InputMaybe<OrderBy>
	readonly address?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: ChainActivities */
export type ChainActivitiesPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "ChainActivities" */
export enum ChainActivitiesSelectColumn {
	/** column name */
	ActivityType = 'activityType',
	/** column name */
	Address = 'address',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "ChainActivities" */
export type ChainActivitiesSetInput = {
	readonly activityType?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly address?: InputMaybe<Scalars['bpchar']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type ChainActivitiesStddevFields = {
	readonly __typename?: 'ChainActivitiesStddevFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type ChainActivitiesStddevPopFields = {
	readonly __typename?: 'ChainActivitiesStddevPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type ChainActivitiesStddevSampFields = {
	readonly __typename?: 'ChainActivitiesStddevSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "ChainActivities" */
export type ChainActivitiesStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: ChainActivitiesStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type ChainActivitiesStreamCursorValueInput = {
	readonly activityType?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly address?: InputMaybe<Scalars['bpchar']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type ChainActivitiesSumFields = {
	readonly __typename?: 'ChainActivitiesSumFields'
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "ChainActivities" */
export enum ChainActivitiesUpdateColumn {
	/** column name */
	ActivityType = 'activityType',
	/** column name */
	Address = 'address',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type ChainActivitiesUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<ChainActivitiesIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<ChainActivitiesSetInput>
	/** filter the rows which have to be updated */
	readonly where: ChainActivitiesBoolExp
}

/** aggregate varPop on columns */
export type ChainActivitiesVarPopFields = {
	readonly __typename?: 'ChainActivitiesVarPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type ChainActivitiesVarSampFields = {
	readonly __typename?: 'ChainActivitiesVarSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type ChainActivitiesVarianceFields = {
	readonly __typename?: 'ChainActivitiesVarianceFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "ChainInfo" */
export type ChainInfo = {
	readonly __typename?: 'ChainInfo'
	readonly blockNumber: Scalars['bigint']
	readonly id: Scalars['Int']
}

/** aggregated selection of "ChainInfo" */
export type ChainInfoAggregate = {
	readonly __typename?: 'ChainInfoAggregate'
	readonly aggregate?: Maybe<ChainInfoAggregateFields>
	readonly nodes: ReadonlyArray<ChainInfo>
}

/** aggregate fields of "ChainInfo" */
export type ChainInfoAggregateFields = {
	readonly __typename?: 'ChainInfoAggregateFields'
	readonly avg?: Maybe<ChainInfoAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<ChainInfoMaxFields>
	readonly min?: Maybe<ChainInfoMinFields>
	readonly stddev?: Maybe<ChainInfoStddevFields>
	readonly stddevPop?: Maybe<ChainInfoStddevPopFields>
	readonly stddevSamp?: Maybe<ChainInfoStddevSampFields>
	readonly sum?: Maybe<ChainInfoSumFields>
	readonly varPop?: Maybe<ChainInfoVarPopFields>
	readonly varSamp?: Maybe<ChainInfoVarSampFields>
	readonly variance?: Maybe<ChainInfoVarianceFields>
}

/** aggregate fields of "ChainInfo" */
export type ChainInfoAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<ChainInfoSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type ChainInfoAvgFields = {
	readonly __typename?: 'ChainInfoAvgFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "ChainInfo". All fields are combined with a logical 'AND'. */
export type ChainInfoBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<ChainInfoBoolExp>>
	readonly _not?: InputMaybe<ChainInfoBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<ChainInfoBoolExp>>
	readonly blockNumber?: InputMaybe<BigintComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "ChainInfo" */
export enum ChainInfoConstraint {
	/** unique or primary key constraint on columns "id" */
	ChainInfoPkey = 'ChainInfo_pkey',
}

/** input type for incrementing numeric columns in table "ChainInfo" */
export type ChainInfoIncInput = {
	readonly blockNumber?: InputMaybe<Scalars['bigint']>
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "ChainInfo" */
export type ChainInfoInsertInput = {
	readonly blockNumber?: InputMaybe<Scalars['bigint']>
	readonly id?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type ChainInfoMaxFields = {
	readonly __typename?: 'ChainInfoMaxFields'
	readonly blockNumber?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type ChainInfoMinFields = {
	readonly __typename?: 'ChainInfoMinFields'
	readonly blockNumber?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['Int']>
}

/** response of any mutation on the table "ChainInfo" */
export type ChainInfoMutationResponse = {
	readonly __typename?: 'ChainInfoMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<ChainInfo>
}

/** on_conflict condition type for table "ChainInfo" */
export type ChainInfoOnConflict = {
	readonly constraint: ChainInfoConstraint
	readonly updateColumns?: ReadonlyArray<ChainInfoUpdateColumn>
	readonly where?: InputMaybe<ChainInfoBoolExp>
}

/** Ordering options when selecting data from "ChainInfo". */
export type ChainInfoOrderBy = {
	readonly blockNumber?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
}

/** primary key columns input for table: ChainInfo */
export type ChainInfoPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "ChainInfo" */
export enum ChainInfoSelectColumn {
	/** column name */
	BlockNumber = 'blockNumber',
	/** column name */
	Id = 'id',
}

/** input type for updating data in table "ChainInfo" */
export type ChainInfoSetInput = {
	readonly blockNumber?: InputMaybe<Scalars['bigint']>
	readonly id?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type ChainInfoStddevFields = {
	readonly __typename?: 'ChainInfoStddevFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type ChainInfoStddevPopFields = {
	readonly __typename?: 'ChainInfoStddevPopFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type ChainInfoStddevSampFields = {
	readonly __typename?: 'ChainInfoStddevSampFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "ChainInfo" */
export type ChainInfoStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: ChainInfoStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type ChainInfoStreamCursorValueInput = {
	readonly blockNumber?: InputMaybe<Scalars['bigint']>
	readonly id?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type ChainInfoSumFields = {
	readonly __typename?: 'ChainInfoSumFields'
	readonly blockNumber?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "ChainInfo" */
export enum ChainInfoUpdateColumn {
	/** column name */
	BlockNumber = 'blockNumber',
	/** column name */
	Id = 'id',
}

export type ChainInfoUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<ChainInfoIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<ChainInfoSetInput>
	/** filter the rows which have to be updated */
	readonly where: ChainInfoBoolExp
}

/** aggregate varPop on columns */
export type ChainInfoVarPopFields = {
	readonly __typename?: 'ChainInfoVarPopFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type ChainInfoVarSampFields = {
	readonly __typename?: 'ChainInfoVarSampFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type ChainInfoVarianceFields = {
	readonly __typename?: 'ChainInfoVarianceFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

export type ChainProperties = {
	readonly __typename?: 'ChainProperties'
	readonly blockTargetTime: Scalars['Int']
	readonly governanceCurrency: Scalars['Int']
	readonly networkCurrency: Scalars['Int']
	readonly paymentCurrencies: Scalars['Int']
	readonly ss58Format: Scalars['Int']
	readonly tokenDecimals: ReadonlyArray<Maybe<Scalars['String']>>
	readonly tokenSymbol: ReadonlyArray<Maybe<Scalars['String']>>
}

/** columns and relationships of "chain_state" */
export type ChainState = {
	readonly __typename?: 'ChainState'
	readonly blockNumber: Scalars['Int']
	readonly id: Scalars['String']
	readonly timestamp: Scalars['timestamptz']
	readonly tokenBalance: Scalars['numeric']
	readonly tokenHolders: Scalars['Int']
}

/** aggregated selection of "chain_state" */
export type ChainStateAggregate = {
	readonly __typename?: 'ChainStateAggregate'
	readonly aggregate?: Maybe<ChainStateAggregateFields>
	readonly nodes: ReadonlyArray<ChainState>
}

/** aggregate fields of "chain_state" */
export type ChainStateAggregateFields = {
	readonly __typename?: 'ChainStateAggregateFields'
	readonly avg?: Maybe<ChainStateAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<ChainStateMaxFields>
	readonly min?: Maybe<ChainStateMinFields>
	readonly stddev?: Maybe<ChainStateStddevFields>
	readonly stddevPop?: Maybe<ChainStateStddevPopFields>
	readonly stddevSamp?: Maybe<ChainStateStddevSampFields>
	readonly sum?: Maybe<ChainStateSumFields>
	readonly varPop?: Maybe<ChainStateVarPopFields>
	readonly varSamp?: Maybe<ChainStateVarSampFields>
	readonly variance?: Maybe<ChainStateVarianceFields>
}

/** aggregate fields of "chain_state" */
export type ChainStateAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<ChainStateSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type ChainStateAvgFields = {
	readonly __typename?: 'ChainStateAvgFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly tokenBalance?: Maybe<Scalars['Float']>
	readonly tokenHolders?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "chain_state". All fields are combined with a logical 'AND'. */
export type ChainStateBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<ChainStateBoolExp>>
	readonly _not?: InputMaybe<ChainStateBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<ChainStateBoolExp>>
	readonly blockNumber?: InputMaybe<IntComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly timestamp?: InputMaybe<TimestamptzComparisonExp>
	readonly tokenBalance?: InputMaybe<NumericComparisonExp>
	readonly tokenHolders?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "chain_state" */
export enum ChainStateConstraint {
	/** unique or primary key constraint on columns "id" */
	PkE28e46a238ada7cbbcf711b3f6c = 'PK_e28e46a238ada7cbbcf711b3f6c',
}

/** input type for incrementing numeric columns in table "chain_state" */
export type ChainStateIncInput = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly tokenBalance?: InputMaybe<Scalars['numeric']>
	readonly tokenHolders?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "chain_state" */
export type ChainStateInsertInput = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['timestamptz']>
	readonly tokenBalance?: InputMaybe<Scalars['numeric']>
	readonly tokenHolders?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type ChainStateMaxFields = {
	readonly __typename?: 'ChainStateMaxFields'
	readonly blockNumber?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly timestamp?: Maybe<Scalars['timestamptz']>
	readonly tokenBalance?: Maybe<Scalars['numeric']>
	readonly tokenHolders?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type ChainStateMinFields = {
	readonly __typename?: 'ChainStateMinFields'
	readonly blockNumber?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly timestamp?: Maybe<Scalars['timestamptz']>
	readonly tokenBalance?: Maybe<Scalars['numeric']>
	readonly tokenHolders?: Maybe<Scalars['Int']>
}

/** response of any mutation on the table "chain_state" */
export type ChainStateMutationResponse = {
	readonly __typename?: 'ChainStateMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<ChainState>
}

/** on_conflict condition type for table "chain_state" */
export type ChainStateOnConflict = {
	readonly constraint: ChainStateConstraint
	readonly updateColumns?: ReadonlyArray<ChainStateUpdateColumn>
	readonly where?: InputMaybe<ChainStateBoolExp>
}

/** Ordering options when selecting data from "chain_state". */
export type ChainStateOrderBy = {
	readonly blockNumber?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly timestamp?: InputMaybe<OrderBy>
	readonly tokenBalance?: InputMaybe<OrderBy>
	readonly tokenHolders?: InputMaybe<OrderBy>
}

/** primary key columns input for table: chain_state */
export type ChainStatePkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "chain_state" */
export enum ChainStateSelectColumn {
	/** column name */
	BlockNumber = 'blockNumber',
	/** column name */
	Id = 'id',
	/** column name */
	Timestamp = 'timestamp',
	/** column name */
	TokenBalance = 'tokenBalance',
	/** column name */
	TokenHolders = 'tokenHolders',
}

/** input type for updating data in table "chain_state" */
export type ChainStateSetInput = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['timestamptz']>
	readonly tokenBalance?: InputMaybe<Scalars['numeric']>
	readonly tokenHolders?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type ChainStateStddevFields = {
	readonly __typename?: 'ChainStateStddevFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly tokenBalance?: Maybe<Scalars['Float']>
	readonly tokenHolders?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type ChainStateStddevPopFields = {
	readonly __typename?: 'ChainStateStddevPopFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly tokenBalance?: Maybe<Scalars['Float']>
	readonly tokenHolders?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type ChainStateStddevSampFields = {
	readonly __typename?: 'ChainStateStddevSampFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly tokenBalance?: Maybe<Scalars['Float']>
	readonly tokenHolders?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "chain_state" */
export type ChainStateStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: ChainStateStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type ChainStateStreamCursorValueInput = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['timestamptz']>
	readonly tokenBalance?: InputMaybe<Scalars['numeric']>
	readonly tokenHolders?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type ChainStateSumFields = {
	readonly __typename?: 'ChainStateSumFields'
	readonly blockNumber?: Maybe<Scalars['Int']>
	readonly tokenBalance?: Maybe<Scalars['numeric']>
	readonly tokenHolders?: Maybe<Scalars['Int']>
}

/** update columns of table "chain_state" */
export enum ChainStateUpdateColumn {
	/** column name */
	BlockNumber = 'blockNumber',
	/** column name */
	Id = 'id',
	/** column name */
	Timestamp = 'timestamp',
	/** column name */
	TokenBalance = 'tokenBalance',
	/** column name */
	TokenHolders = 'tokenHolders',
}

export type ChainStateUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<ChainStateIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<ChainStateSetInput>
	/** filter the rows which have to be updated */
	readonly where: ChainStateBoolExp
}

/** aggregate varPop on columns */
export type ChainStateVarPopFields = {
	readonly __typename?: 'ChainStateVarPopFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly tokenBalance?: Maybe<Scalars['Float']>
	readonly tokenHolders?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type ChainStateVarSampFields = {
	readonly __typename?: 'ChainStateVarSampFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly tokenBalance?: Maybe<Scalars['Float']>
	readonly tokenHolders?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type ChainStateVarianceFields = {
	readonly __typename?: 'ChainStateVarianceFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly tokenBalance?: Maybe<Scalars['Float']>
	readonly tokenHolders?: Maybe<Scalars['Float']>
}

/** columns and relationships of "ChainStatuses" */
export type ChainStatuses = {
	readonly __typename?: 'ChainStatuses'
	readonly blockNumber: Scalars['Int']
	readonly createdAt: Scalars['timestamptz']
	readonly id: Scalars['Int']
	readonly updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "ChainStatuses" */
export type ChainStatusesAggregate = {
	readonly __typename?: 'ChainStatusesAggregate'
	readonly aggregate?: Maybe<ChainStatusesAggregateFields>
	readonly nodes: ReadonlyArray<ChainStatuses>
}

/** aggregate fields of "ChainStatuses" */
export type ChainStatusesAggregateFields = {
	readonly __typename?: 'ChainStatusesAggregateFields'
	readonly avg?: Maybe<ChainStatusesAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<ChainStatusesMaxFields>
	readonly min?: Maybe<ChainStatusesMinFields>
	readonly stddev?: Maybe<ChainStatusesStddevFields>
	readonly stddevPop?: Maybe<ChainStatusesStddevPopFields>
	readonly stddevSamp?: Maybe<ChainStatusesStddevSampFields>
	readonly sum?: Maybe<ChainStatusesSumFields>
	readonly varPop?: Maybe<ChainStatusesVarPopFields>
	readonly varSamp?: Maybe<ChainStatusesVarSampFields>
	readonly variance?: Maybe<ChainStatusesVarianceFields>
}

/** aggregate fields of "ChainStatuses" */
export type ChainStatusesAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<ChainStatusesSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type ChainStatusesAvgFields = {
	readonly __typename?: 'ChainStatusesAvgFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "ChainStatuses". All fields are combined with a logical 'AND'. */
export type ChainStatusesBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<ChainStatusesBoolExp>>
	readonly _not?: InputMaybe<ChainStatusesBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<ChainStatusesBoolExp>>
	readonly blockNumber?: InputMaybe<IntComparisonExp>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "ChainStatuses" */
export enum ChainStatusesConstraint {
	/** unique or primary key constraint on columns "id" */
	ChainStatusesPkey = 'ChainStatuses_pkey',
}

/** input type for incrementing numeric columns in table "ChainStatuses" */
export type ChainStatusesIncInput = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "ChainStatuses" */
export type ChainStatusesInsertInput = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type ChainStatusesMaxFields = {
	readonly __typename?: 'ChainStatusesMaxFields'
	readonly blockNumber?: Maybe<Scalars['Int']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type ChainStatusesMinFields = {
	readonly __typename?: 'ChainStatusesMinFields'
	readonly blockNumber?: Maybe<Scalars['Int']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "ChainStatuses" */
export type ChainStatusesMutationResponse = {
	readonly __typename?: 'ChainStatusesMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<ChainStatuses>
}

/** on_conflict condition type for table "ChainStatuses" */
export type ChainStatusesOnConflict = {
	readonly constraint: ChainStatusesConstraint
	readonly updateColumns?: ReadonlyArray<ChainStatusesUpdateColumn>
	readonly where?: InputMaybe<ChainStatusesBoolExp>
}

/** Ordering options when selecting data from "ChainStatuses". */
export type ChainStatusesOrderBy = {
	readonly blockNumber?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: ChainStatuses */
export type ChainStatusesPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "ChainStatuses" */
export enum ChainStatusesSelectColumn {
	/** column name */
	BlockNumber = 'blockNumber',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "ChainStatuses" */
export type ChainStatusesSetInput = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type ChainStatusesStddevFields = {
	readonly __typename?: 'ChainStatusesStddevFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type ChainStatusesStddevPopFields = {
	readonly __typename?: 'ChainStatusesStddevPopFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type ChainStatusesStddevSampFields = {
	readonly __typename?: 'ChainStatusesStddevSampFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "ChainStatuses" */
export type ChainStatusesStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: ChainStatusesStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type ChainStatusesStreamCursorValueInput = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type ChainStatusesSumFields = {
	readonly __typename?: 'ChainStatusesSumFields'
	readonly blockNumber?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "ChainStatuses" */
export enum ChainStatusesUpdateColumn {
	/** column name */
	BlockNumber = 'blockNumber',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type ChainStatusesUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<ChainStatusesIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<ChainStatusesSetInput>
	/** filter the rows which have to be updated */
	readonly where: ChainStatusesBoolExp
}

/** aggregate varPop on columns */
export type ChainStatusesVarPopFields = {
	readonly __typename?: 'ChainStatusesVarPopFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type ChainStatusesVarSampFields = {
	readonly __typename?: 'ChainStatusesVarSampFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type ChainStatusesVarianceFields = {
	readonly __typename?: 'ChainStatusesVarianceFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "CompletedQuests" */
export type CompletedQuests = {
	readonly __typename?: 'CompletedQuests'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly guildId?: Maybe<Scalars['String']>
	readonly id: Scalars['Int']
	/** An object relationship */
	readonly identity?: Maybe<Identities>
	readonly identityId?: Maybe<Scalars['Int']>
	/** An object relationship */
	readonly quest?: Maybe<Quests>
	readonly questId?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregated selection of "CompletedQuests" */
export type CompletedQuestsAggregate = {
	readonly __typename?: 'CompletedQuestsAggregate'
	readonly aggregate?: Maybe<CompletedQuestsAggregateFields>
	readonly nodes: ReadonlyArray<CompletedQuests>
}

export type CompletedQuestsAggregateBoolExp = {
	readonly count?: InputMaybe<CompletedQuestsAggregateBoolExpCount>
}

/** aggregate fields of "CompletedQuests" */
export type CompletedQuestsAggregateFields = {
	readonly __typename?: 'CompletedQuestsAggregateFields'
	readonly avg?: Maybe<CompletedQuestsAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<CompletedQuestsMaxFields>
	readonly min?: Maybe<CompletedQuestsMinFields>
	readonly stddev?: Maybe<CompletedQuestsStddevFields>
	readonly stddevPop?: Maybe<CompletedQuestsStddevPopFields>
	readonly stddevSamp?: Maybe<CompletedQuestsStddevSampFields>
	readonly sum?: Maybe<CompletedQuestsSumFields>
	readonly varPop?: Maybe<CompletedQuestsVarPopFields>
	readonly varSamp?: Maybe<CompletedQuestsVarSampFields>
	readonly variance?: Maybe<CompletedQuestsVarianceFields>
}

/** aggregate fields of "CompletedQuests" */
export type CompletedQuestsAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<CompletedQuestsSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "CompletedQuests" */
export type CompletedQuestsAggregateOrderBy = {
	readonly avg?: InputMaybe<CompletedQuestsAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<CompletedQuestsMaxOrderBy>
	readonly min?: InputMaybe<CompletedQuestsMinOrderBy>
	readonly stddev?: InputMaybe<CompletedQuestsStddevOrderBy>
	readonly stddevPop?: InputMaybe<CompletedQuestsStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<CompletedQuestsStddevSampOrderBy>
	readonly sum?: InputMaybe<CompletedQuestsSumOrderBy>
	readonly varPop?: InputMaybe<CompletedQuestsVarPopOrderBy>
	readonly varSamp?: InputMaybe<CompletedQuestsVarSampOrderBy>
	readonly variance?: InputMaybe<CompletedQuestsVarianceOrderBy>
}

/** input type for inserting array relation for remote table "CompletedQuests" */
export type CompletedQuestsArrRelInsertInput = {
	readonly data: ReadonlyArray<CompletedQuestsInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<CompletedQuestsOnConflict>
}

/** aggregate avg on columns */
export type CompletedQuestsAvgFields = {
	readonly __typename?: 'CompletedQuestsAvgFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "CompletedQuests" */
export type CompletedQuestsAvgOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "CompletedQuests". All fields are combined with a logical 'AND'. */
export type CompletedQuestsBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<CompletedQuestsBoolExp>>
	readonly _not?: InputMaybe<CompletedQuestsBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<CompletedQuestsBoolExp>>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly guildId?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly identity?: InputMaybe<IdentitiesBoolExp>
	readonly identityId?: InputMaybe<IntComparisonExp>
	readonly quest?: InputMaybe<QuestsBoolExp>
	readonly questId?: InputMaybe<IntComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "CompletedQuests" */
export enum CompletedQuestsConstraint {
	/** unique or primary key constraint on columns "id" */
	CompletedQuestsPkey = 'CompletedQuests_pkey',
}

/** input type for incrementing numeric columns in table "CompletedQuests" */
export type CompletedQuestsIncInput = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly questId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "CompletedQuests" */
export type CompletedQuestsInsertInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly guildId?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identity?: InputMaybe<IdentitiesObjRelInsertInput>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly quest?: InputMaybe<QuestsObjRelInsertInput>
	readonly questId?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type CompletedQuestsMaxFields = {
	readonly __typename?: 'CompletedQuestsMaxFields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly guildId?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly questId?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "CompletedQuests" */
export type CompletedQuestsMaxOrderBy = {
	readonly createdAt?: InputMaybe<OrderBy>
	readonly guildId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type CompletedQuestsMinFields = {
	readonly __typename?: 'CompletedQuestsMinFields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly guildId?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly questId?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "CompletedQuests" */
export type CompletedQuestsMinOrderBy = {
	readonly createdAt?: InputMaybe<OrderBy>
	readonly guildId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "CompletedQuests" */
export type CompletedQuestsMutationResponse = {
	readonly __typename?: 'CompletedQuestsMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<CompletedQuests>
}

/** on_conflict condition type for table "CompletedQuests" */
export type CompletedQuestsOnConflict = {
	readonly constraint: CompletedQuestsConstraint
	readonly updateColumns?: ReadonlyArray<CompletedQuestsUpdateColumn>
	readonly where?: InputMaybe<CompletedQuestsBoolExp>
}

/** Ordering options when selecting data from "CompletedQuests". */
export type CompletedQuestsOrderBy = {
	readonly createdAt?: InputMaybe<OrderBy>
	readonly guildId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentitiesOrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly quest?: InputMaybe<QuestsOrderBy>
	readonly questId?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: CompletedQuests */
export type CompletedQuestsPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "CompletedQuests" */
export enum CompletedQuestsSelectColumn {
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	GuildId = 'guildId',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
	/** column name */
	QuestId = 'questId',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "CompletedQuests" */
export type CompletedQuestsSetInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly guildId?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly questId?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type CompletedQuestsStddevFields = {
	readonly __typename?: 'CompletedQuestsStddevFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "CompletedQuests" */
export type CompletedQuestsStddevOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type CompletedQuestsStddevPopFields = {
	readonly __typename?: 'CompletedQuestsStddevPopFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "CompletedQuests" */
export type CompletedQuestsStddevPopOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type CompletedQuestsStddevSampFields = {
	readonly __typename?: 'CompletedQuestsStddevSampFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "CompletedQuests" */
export type CompletedQuestsStddevSampOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "CompletedQuests" */
export type CompletedQuestsStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: CompletedQuestsStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type CompletedQuestsStreamCursorValueInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly guildId?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly questId?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type CompletedQuestsSumFields = {
	readonly __typename?: 'CompletedQuestsSumFields'
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly questId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "CompletedQuests" */
export type CompletedQuestsSumOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

/** update columns of table "CompletedQuests" */
export enum CompletedQuestsUpdateColumn {
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	GuildId = 'guildId',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
	/** column name */
	QuestId = 'questId',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type CompletedQuestsUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<CompletedQuestsIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<CompletedQuestsSetInput>
	/** filter the rows which have to be updated */
	readonly where: CompletedQuestsBoolExp
}

/** aggregate varPop on columns */
export type CompletedQuestsVarPopFields = {
	readonly __typename?: 'CompletedQuestsVarPopFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "CompletedQuests" */
export type CompletedQuestsVarPopOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type CompletedQuestsVarSampFields = {
	readonly __typename?: 'CompletedQuestsVarSampFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "CompletedQuests" */
export type CompletedQuestsVarSampOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type CompletedQuestsVarianceFields = {
	readonly __typename?: 'CompletedQuestsVarianceFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "CompletedQuests" */
export type CompletedQuestsVarianceOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

export type Config = {
	readonly __typename?: 'Config'
	readonly CAMPAIGN_MIN_EXPIRY_IN_SECONDS?: Maybe<Scalars['String']>
	readonly CONTACT?: Maybe<Scalars['String']>
	readonly IPFS_GATEWAY?: Maybe<Scalars['String']>
	readonly LOG_LEVEL?: Maybe<LogLevel>
	readonly PROPOSAL_MIN_EXPIRY_IN_SECONDS?: Maybe<Scalars['String']>
	readonly SITE_DESCRIPTION?: Maybe<Scalars['String']>
	readonly SITE_IMAGE?: Maybe<Scalars['String']>
	readonly SITE_NAME?: Maybe<Scalars['String']>
	readonly SITE_TITLE?: Maybe<Scalars['String']>
	readonly TW_SITE_CREATOR?: Maybe<Scalars['String']>
	readonly TW_SITE_NAME?: Maybe<Scalars['String']>
}

/** columns and relationships of "current_chain_state" */
export type CurrentChainState = {
	readonly __typename?: 'CurrentChainState'
	readonly blockNumber: Scalars['Int']
	readonly id: Scalars['String']
	readonly timestamp: Scalars['timestamptz']
	readonly tokenBalance: Scalars['numeric']
	readonly tokenHolders: Scalars['Int']
}

/** aggregated selection of "current_chain_state" */
export type CurrentChainStateAggregate = {
	readonly __typename?: 'CurrentChainStateAggregate'
	readonly aggregate?: Maybe<CurrentChainStateAggregateFields>
	readonly nodes: ReadonlyArray<CurrentChainState>
}

/** aggregate fields of "current_chain_state" */
export type CurrentChainStateAggregateFields = {
	readonly __typename?: 'CurrentChainStateAggregateFields'
	readonly avg?: Maybe<CurrentChainStateAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<CurrentChainStateMaxFields>
	readonly min?: Maybe<CurrentChainStateMinFields>
	readonly stddev?: Maybe<CurrentChainStateStddevFields>
	readonly stddevPop?: Maybe<CurrentChainStateStddevPopFields>
	readonly stddevSamp?: Maybe<CurrentChainStateStddevSampFields>
	readonly sum?: Maybe<CurrentChainStateSumFields>
	readonly varPop?: Maybe<CurrentChainStateVarPopFields>
	readonly varSamp?: Maybe<CurrentChainStateVarSampFields>
	readonly variance?: Maybe<CurrentChainStateVarianceFields>
}

/** aggregate fields of "current_chain_state" */
export type CurrentChainStateAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<CurrentChainStateSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type CurrentChainStateAvgFields = {
	readonly __typename?: 'CurrentChainStateAvgFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly tokenBalance?: Maybe<Scalars['Float']>
	readonly tokenHolders?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "current_chain_state". All fields are combined with a logical 'AND'. */
export type CurrentChainStateBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<CurrentChainStateBoolExp>>
	readonly _not?: InputMaybe<CurrentChainStateBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<CurrentChainStateBoolExp>>
	readonly blockNumber?: InputMaybe<IntComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly timestamp?: InputMaybe<TimestamptzComparisonExp>
	readonly tokenBalance?: InputMaybe<NumericComparisonExp>
	readonly tokenHolders?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "current_chain_state" */
export enum CurrentChainStateConstraint {
	/** unique or primary key constraint on columns "id" */
	Pk_635aee56410df525938bf40f669 = 'PK_635aee56410df525938bf40f669',
}

/** input type for incrementing numeric columns in table "current_chain_state" */
export type CurrentChainStateIncInput = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly tokenBalance?: InputMaybe<Scalars['numeric']>
	readonly tokenHolders?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "current_chain_state" */
export type CurrentChainStateInsertInput = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['timestamptz']>
	readonly tokenBalance?: InputMaybe<Scalars['numeric']>
	readonly tokenHolders?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type CurrentChainStateMaxFields = {
	readonly __typename?: 'CurrentChainStateMaxFields'
	readonly blockNumber?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly timestamp?: Maybe<Scalars['timestamptz']>
	readonly tokenBalance?: Maybe<Scalars['numeric']>
	readonly tokenHolders?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type CurrentChainStateMinFields = {
	readonly __typename?: 'CurrentChainStateMinFields'
	readonly blockNumber?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly timestamp?: Maybe<Scalars['timestamptz']>
	readonly tokenBalance?: Maybe<Scalars['numeric']>
	readonly tokenHolders?: Maybe<Scalars['Int']>
}

/** response of any mutation on the table "current_chain_state" */
export type CurrentChainStateMutationResponse = {
	readonly __typename?: 'CurrentChainStateMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<CurrentChainState>
}

/** on_conflict condition type for table "current_chain_state" */
export type CurrentChainStateOnConflict = {
	readonly constraint: CurrentChainStateConstraint
	readonly updateColumns?: ReadonlyArray<CurrentChainStateUpdateColumn>
	readonly where?: InputMaybe<CurrentChainStateBoolExp>
}

/** Ordering options when selecting data from "current_chain_state". */
export type CurrentChainStateOrderBy = {
	readonly blockNumber?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly timestamp?: InputMaybe<OrderBy>
	readonly tokenBalance?: InputMaybe<OrderBy>
	readonly tokenHolders?: InputMaybe<OrderBy>
}

/** primary key columns input for table: current_chain_state */
export type CurrentChainStatePkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "current_chain_state" */
export enum CurrentChainStateSelectColumn {
	/** column name */
	BlockNumber = 'blockNumber',
	/** column name */
	Id = 'id',
	/** column name */
	Timestamp = 'timestamp',
	/** column name */
	TokenBalance = 'tokenBalance',
	/** column name */
	TokenHolders = 'tokenHolders',
}

/** input type for updating data in table "current_chain_state" */
export type CurrentChainStateSetInput = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['timestamptz']>
	readonly tokenBalance?: InputMaybe<Scalars['numeric']>
	readonly tokenHolders?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type CurrentChainStateStddevFields = {
	readonly __typename?: 'CurrentChainStateStddevFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly tokenBalance?: Maybe<Scalars['Float']>
	readonly tokenHolders?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type CurrentChainStateStddevPopFields = {
	readonly __typename?: 'CurrentChainStateStddevPopFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly tokenBalance?: Maybe<Scalars['Float']>
	readonly tokenHolders?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type CurrentChainStateStddevSampFields = {
	readonly __typename?: 'CurrentChainStateStddevSampFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly tokenBalance?: Maybe<Scalars['Float']>
	readonly tokenHolders?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "current_chain_state" */
export type CurrentChainStateStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: CurrentChainStateStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type CurrentChainStateStreamCursorValueInput = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['timestamptz']>
	readonly tokenBalance?: InputMaybe<Scalars['numeric']>
	readonly tokenHolders?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type CurrentChainStateSumFields = {
	readonly __typename?: 'CurrentChainStateSumFields'
	readonly blockNumber?: Maybe<Scalars['Int']>
	readonly tokenBalance?: Maybe<Scalars['numeric']>
	readonly tokenHolders?: Maybe<Scalars['Int']>
}

/** update columns of table "current_chain_state" */
export enum CurrentChainStateUpdateColumn {
	/** column name */
	BlockNumber = 'blockNumber',
	/** column name */
	Id = 'id',
	/** column name */
	Timestamp = 'timestamp',
	/** column name */
	TokenBalance = 'tokenBalance',
	/** column name */
	TokenHolders = 'tokenHolders',
}

export type CurrentChainStateUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<CurrentChainStateIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<CurrentChainStateSetInput>
	/** filter the rows which have to be updated */
	readonly where: CurrentChainStateBoolExp
}

/** aggregate varPop on columns */
export type CurrentChainStateVarPopFields = {
	readonly __typename?: 'CurrentChainStateVarPopFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly tokenBalance?: Maybe<Scalars['Float']>
	readonly tokenHolders?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type CurrentChainStateVarSampFields = {
	readonly __typename?: 'CurrentChainStateVarSampFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly tokenBalance?: Maybe<Scalars['Float']>
	readonly tokenHolders?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type CurrentChainStateVarianceFields = {
	readonly __typename?: 'CurrentChainStateVarianceFields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly tokenBalance?: Maybe<Scalars['Float']>
	readonly tokenHolders?: Maybe<Scalars['Float']>
}

/** ordering argument of a cursor */
export enum CursorOrdering {
	/** ascending ordering of the cursor */
	Asc = 'ASC',
	/** descending ordering of the cursor */
	Desc = 'DESC',
}

/** columns and relationships of "DiscordActivities" */
export type DiscordActivities = {
	readonly __typename?: 'DiscordActivities'
	readonly activityId: Scalars['String']
	readonly activityType?: Maybe<Scalars['enum_DiscordActivities_activityType']>
	readonly channelId?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly discordId: Scalars['String']
	readonly guildId: Scalars['String']
	readonly id: Scalars['Int']
	readonly updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "DiscordActivities" */
export type DiscordActivitiesAggregate = {
	readonly __typename?: 'DiscordActivitiesAggregate'
	readonly aggregate?: Maybe<DiscordActivitiesAggregateFields>
	readonly nodes: ReadonlyArray<DiscordActivities>
}

/** aggregate fields of "DiscordActivities" */
export type DiscordActivitiesAggregateFields = {
	readonly __typename?: 'DiscordActivitiesAggregateFields'
	readonly avg?: Maybe<DiscordActivitiesAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<DiscordActivitiesMaxFields>
	readonly min?: Maybe<DiscordActivitiesMinFields>
	readonly stddev?: Maybe<DiscordActivitiesStddevFields>
	readonly stddevPop?: Maybe<DiscordActivitiesStddevPopFields>
	readonly stddevSamp?: Maybe<DiscordActivitiesStddevSampFields>
	readonly sum?: Maybe<DiscordActivitiesSumFields>
	readonly varPop?: Maybe<DiscordActivitiesVarPopFields>
	readonly varSamp?: Maybe<DiscordActivitiesVarSampFields>
	readonly variance?: Maybe<DiscordActivitiesVarianceFields>
}

/** aggregate fields of "DiscordActivities" */
export type DiscordActivitiesAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<DiscordActivitiesSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type DiscordActivitiesAvgFields = {
	readonly __typename?: 'DiscordActivitiesAvgFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "DiscordActivities". All fields are combined with a logical 'AND'. */
export type DiscordActivitiesBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<DiscordActivitiesBoolExp>>
	readonly _not?: InputMaybe<DiscordActivitiesBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<DiscordActivitiesBoolExp>>
	readonly activityId?: InputMaybe<StringComparisonExp>
	readonly activityType?: InputMaybe<EnumDiscordActivitiesActivityTypeComparisonExp>
	readonly channelId?: InputMaybe<StringComparisonExp>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly discordId?: InputMaybe<StringComparisonExp>
	readonly guildId?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "DiscordActivities" */
export enum DiscordActivitiesConstraint {
	/** unique or primary key constraint on columns "id" */
	DiscordActivitiesPkey = 'DiscordActivities_pkey',
}

/** input type for incrementing numeric columns in table "DiscordActivities" */
export type DiscordActivitiesIncInput = {
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "DiscordActivities" */
export type DiscordActivitiesInsertInput = {
	readonly activityId?: InputMaybe<Scalars['String']>
	readonly activityType?: InputMaybe<Scalars['enum_DiscordActivities_activityType']>
	readonly channelId?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly discordId?: InputMaybe<Scalars['String']>
	readonly guildId?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type DiscordActivitiesMaxFields = {
	readonly __typename?: 'DiscordActivitiesMaxFields'
	readonly activityId?: Maybe<Scalars['String']>
	readonly activityType?: Maybe<Scalars['enum_DiscordActivities_activityType']>
	readonly channelId?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly discordId?: Maybe<Scalars['String']>
	readonly guildId?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type DiscordActivitiesMinFields = {
	readonly __typename?: 'DiscordActivitiesMinFields'
	readonly activityId?: Maybe<Scalars['String']>
	readonly activityType?: Maybe<Scalars['enum_DiscordActivities_activityType']>
	readonly channelId?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly discordId?: Maybe<Scalars['String']>
	readonly guildId?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "DiscordActivities" */
export type DiscordActivitiesMutationResponse = {
	readonly __typename?: 'DiscordActivitiesMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<DiscordActivities>
}

/** on_conflict condition type for table "DiscordActivities" */
export type DiscordActivitiesOnConflict = {
	readonly constraint: DiscordActivitiesConstraint
	readonly updateColumns?: ReadonlyArray<DiscordActivitiesUpdateColumn>
	readonly where?: InputMaybe<DiscordActivitiesBoolExp>
}

/** Ordering options when selecting data from "DiscordActivities". */
export type DiscordActivitiesOrderBy = {
	readonly activityId?: InputMaybe<OrderBy>
	readonly activityType?: InputMaybe<OrderBy>
	readonly channelId?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly discordId?: InputMaybe<OrderBy>
	readonly guildId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: DiscordActivities */
export type DiscordActivitiesPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "DiscordActivities" */
export enum DiscordActivitiesSelectColumn {
	/** column name */
	ActivityId = 'activityId',
	/** column name */
	ActivityType = 'activityType',
	/** column name */
	ChannelId = 'channelId',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	DiscordId = 'discordId',
	/** column name */
	GuildId = 'guildId',
	/** column name */
	Id = 'id',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "DiscordActivities" */
export type DiscordActivitiesSetInput = {
	readonly activityId?: InputMaybe<Scalars['String']>
	readonly activityType?: InputMaybe<Scalars['enum_DiscordActivities_activityType']>
	readonly channelId?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly discordId?: InputMaybe<Scalars['String']>
	readonly guildId?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type DiscordActivitiesStddevFields = {
	readonly __typename?: 'DiscordActivitiesStddevFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type DiscordActivitiesStddevPopFields = {
	readonly __typename?: 'DiscordActivitiesStddevPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type DiscordActivitiesStddevSampFields = {
	readonly __typename?: 'DiscordActivitiesStddevSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "DiscordActivities" */
export type DiscordActivitiesStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: DiscordActivitiesStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type DiscordActivitiesStreamCursorValueInput = {
	readonly activityId?: InputMaybe<Scalars['String']>
	readonly activityType?: InputMaybe<Scalars['enum_DiscordActivities_activityType']>
	readonly channelId?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly discordId?: InputMaybe<Scalars['String']>
	readonly guildId?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type DiscordActivitiesSumFields = {
	readonly __typename?: 'DiscordActivitiesSumFields'
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "DiscordActivities" */
export enum DiscordActivitiesUpdateColumn {
	/** column name */
	ActivityId = 'activityId',
	/** column name */
	ActivityType = 'activityType',
	/** column name */
	ChannelId = 'channelId',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	DiscordId = 'discordId',
	/** column name */
	GuildId = 'guildId',
	/** column name */
	Id = 'id',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type DiscordActivitiesUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<DiscordActivitiesIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<DiscordActivitiesSetInput>
	/** filter the rows which have to be updated */
	readonly where: DiscordActivitiesBoolExp
}

/** aggregate varPop on columns */
export type DiscordActivitiesVarPopFields = {
	readonly __typename?: 'DiscordActivitiesVarPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type DiscordActivitiesVarSampFields = {
	readonly __typename?: 'DiscordActivitiesVarSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type DiscordActivitiesVarianceFields = {
	readonly __typename?: 'DiscordActivitiesVarianceFields'
	readonly id?: Maybe<Scalars['Float']>
}

export type DisplayValueEntry = {
	readonly key: Scalars['String']
	readonly text: Scalars['String']
}

export type DisplayValueEntryCountry = DisplayValueEntry & {
	readonly __typename?: 'DisplayValueEntryCountry'
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
	readonly campaignFilters?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryString>>>
	readonly campaignFundingCategories?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly campaignSortOptions?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryString>>>
	readonly collateralTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly countries?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryCountry>>>
	readonly daoBodies?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly daoFeeModel?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly daoMemberGovernance?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly memberships?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly organizationSortOptions?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryString>>>
	readonly projectDurations?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly projectTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly proposalTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly protocolTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly tags?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
	readonly votingTypes?: Maybe<ReadonlyArray<Maybe<DisplayValueEntryNumber>>>
}

/** Boolean expression to compare columns of type "enum_BattlepassLevels_syncStatus". All fields are combined with logical 'AND'. */
export type EnumBattlepassLevelsSyncStatusComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly _gt?: InputMaybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly _gte?: InputMaybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_BattlepassLevels_syncStatus']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly _lte?: InputMaybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly _neq?: InputMaybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_BattlepassLevels_syncStatus']>>
}

/** Boolean expression to compare columns of type "enum_BattlepassParticipants_status". All fields are combined with logical 'AND'. */
export type EnumBattlepassParticipantsStatusComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['enum_BattlepassParticipants_status']>
	readonly _gt?: InputMaybe<Scalars['enum_BattlepassParticipants_status']>
	readonly _gte?: InputMaybe<Scalars['enum_BattlepassParticipants_status']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_BattlepassParticipants_status']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_BattlepassParticipants_status']>
	readonly _lte?: InputMaybe<Scalars['enum_BattlepassParticipants_status']>
	readonly _neq?: InputMaybe<Scalars['enum_BattlepassParticipants_status']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_BattlepassParticipants_status']>>
}

/** Boolean expression to compare columns of type "enum_BattlepassRewards_syncStatus". All fields are combined with logical 'AND'. */
export type EnumBattlepassRewardsSyncStatusComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly _gt?: InputMaybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly _gte?: InputMaybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_BattlepassRewards_syncStatus']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly _lte?: InputMaybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly _neq?: InputMaybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_BattlepassRewards_syncStatus']>>
}

/** Boolean expression to compare columns of type "enum_ChainActivities_activityType". All fields are combined with logical 'AND'. */
export type EnumChainActivitiesActivityTypeComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly _gt?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly _gte?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_ChainActivities_activityType']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly _lte?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly _neq?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_ChainActivities_activityType']>>
}

/** Boolean expression to compare columns of type "enum_DiscordActivities_activityType". All fields are combined with logical 'AND'. */
export type EnumDiscordActivitiesActivityTypeComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['enum_DiscordActivities_activityType']>
	readonly _gt?: InputMaybe<Scalars['enum_DiscordActivities_activityType']>
	readonly _gte?: InputMaybe<Scalars['enum_DiscordActivities_activityType']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_DiscordActivities_activityType']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_DiscordActivities_activityType']>
	readonly _lte?: InputMaybe<Scalars['enum_DiscordActivities_activityType']>
	readonly _neq?: InputMaybe<Scalars['enum_DiscordActivities_activityType']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_DiscordActivities_activityType']>>
}

/** Boolean expression to compare columns of type "enum_GenericActivities_source". All fields are combined with logical 'AND'. */
export type EnumGenericActivitiesSourceComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly _gt?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly _gte?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_GenericActivities_source']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly _lte?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly _neq?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_GenericActivities_source']>>
}

/** Boolean expression to compare columns of type "enum_Quests_source". All fields are combined with logical 'AND'. */
export type EnumQuestsSourceComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['enum_Quests_source']>
	readonly _gt?: InputMaybe<Scalars['enum_Quests_source']>
	readonly _gte?: InputMaybe<Scalars['enum_Quests_source']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_Quests_source']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_Quests_source']>
	readonly _lte?: InputMaybe<Scalars['enum_Quests_source']>
	readonly _neq?: InputMaybe<Scalars['enum_Quests_source']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_Quests_source']>>
}

/** Boolean expression to compare columns of type "enum_Quests_type". All fields are combined with logical 'AND'. */
export type EnumQuestsTypeComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['enum_Quests_type']>
	readonly _gt?: InputMaybe<Scalars['enum_Quests_type']>
	readonly _gte?: InputMaybe<Scalars['enum_Quests_type']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_Quests_type']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_Quests_type']>
	readonly _lte?: InputMaybe<Scalars['enum_Quests_type']>
	readonly _neq?: InputMaybe<Scalars['enum_Quests_type']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_Quests_type']>>
}

/** Boolean expression to compare columns of type "enum_RewardClaims_syncStatus". All fields are combined with logical 'AND'. */
export type EnumRewardClaimsSyncStatusComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly _gt?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly _gte?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_RewardClaims_syncStatus']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly _lte?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly _neq?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_RewardClaims_syncStatus']>>
}

/** Boolean expression to compare columns of type "enum_TwitterActivities_activityType". All fields are combined with logical 'AND'. */
export type EnumTwitterActivitiesActivityTypeComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['enum_TwitterActivities_activityType']>
	readonly _gt?: InputMaybe<Scalars['enum_TwitterActivities_activityType']>
	readonly _gte?: InputMaybe<Scalars['enum_TwitterActivities_activityType']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_TwitterActivities_activityType']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_TwitterActivities_activityType']>
	readonly _lte?: InputMaybe<Scalars['enum_TwitterActivities_activityType']>
	readonly _neq?: InputMaybe<Scalars['enum_TwitterActivities_activityType']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_TwitterActivities_activityType']>>
}

/** Boolean expression to compare columns of type "enum_UserTokens_source". All fields are combined with logical 'AND'. */
export type EnumUserTokensSourceComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly _gt?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly _gte?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_UserTokens_source']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly _lte?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly _neq?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_UserTokens_source']>>
}

export enum Environment {
	Development = 'DEVELOPMENT',
	Production = 'PRODUCTION',
	Staging = 'STAGING',
}

export type Features = OrganizationFeatures &
	ProposalFeatures & {
		readonly __typename?: 'Features'
		readonly CREATE_GENERAL_PROPOSAL: Scalars['Boolean']
		readonly CREATE_PROPOSAL: Scalars['Boolean']
		readonly CREATE_PROPOSAL_RELATIVE_MAJORITY: Scalars['Boolean']
		readonly CREATE_PROPOSAL_SIMPLE_MAJORITY: Scalars['Boolean']
		readonly CREATE_SPENDING_PROPOSAL: Scalars['Boolean']
		readonly CREATE_WITHDRAW_PROPOSAL: Scalars['Boolean']
		readonly ORGANIZATION_PAGE_SHOW_FILTERS: Scalars['Boolean']
		readonly ORGANIZATION_PAGE_SHOW_SEARCH: Scalars['Boolean']
		readonly ORGANIZATION_PAGE_SHOW_SORT: Scalars['Boolean']
	}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8ComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['float8']>
	readonly _gt?: InputMaybe<Scalars['float8']>
	readonly _gte?: InputMaybe<Scalars['float8']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['float8']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['float8']>
	readonly _lte?: InputMaybe<Scalars['float8']>
	readonly _neq?: InputMaybe<Scalars['float8']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['float8']>>
}

/** columns and relationships of "GenericActivities" */
export type GenericActivities = {
	readonly __typename?: 'GenericActivities'
	readonly activityType: Scalars['String']
	readonly authorId: Scalars['String']
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly extra?: Maybe<Scalars['json']>
	readonly id: Scalars['Int']
	readonly source: Scalars['enum_GenericActivities_source']
	readonly updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "GenericActivities" */
export type GenericActivitiesExtraArgs = {
	path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "GenericActivities" */
export type GenericActivitiesAggregate = {
	readonly __typename?: 'GenericActivitiesAggregate'
	readonly aggregate?: Maybe<GenericActivitiesAggregateFields>
	readonly nodes: ReadonlyArray<GenericActivities>
}

/** aggregate fields of "GenericActivities" */
export type GenericActivitiesAggregateFields = {
	readonly __typename?: 'GenericActivitiesAggregateFields'
	readonly avg?: Maybe<GenericActivitiesAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<GenericActivitiesMaxFields>
	readonly min?: Maybe<GenericActivitiesMinFields>
	readonly stddev?: Maybe<GenericActivitiesStddevFields>
	readonly stddevPop?: Maybe<GenericActivitiesStddevPopFields>
	readonly stddevSamp?: Maybe<GenericActivitiesStddevSampFields>
	readonly sum?: Maybe<GenericActivitiesSumFields>
	readonly varPop?: Maybe<GenericActivitiesVarPopFields>
	readonly varSamp?: Maybe<GenericActivitiesVarSampFields>
	readonly variance?: Maybe<GenericActivitiesVarianceFields>
}

/** aggregate fields of "GenericActivities" */
export type GenericActivitiesAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<GenericActivitiesSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type GenericActivitiesAvgFields = {
	readonly __typename?: 'GenericActivitiesAvgFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "GenericActivities". All fields are combined with a logical 'AND'. */
export type GenericActivitiesBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<GenericActivitiesBoolExp>>
	readonly _not?: InputMaybe<GenericActivitiesBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<GenericActivitiesBoolExp>>
	readonly activityType?: InputMaybe<StringComparisonExp>
	readonly authorId?: InputMaybe<StringComparisonExp>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly extra?: InputMaybe<JsonComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly source?: InputMaybe<EnumGenericActivitiesSourceComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "GenericActivities" */
export enum GenericActivitiesConstraint {
	/** unique or primary key constraint on columns "id" */
	GenericActivitiesPkey = 'GenericActivities_pkey',
}

/** input type for incrementing numeric columns in table "GenericActivities" */
export type GenericActivitiesIncInput = {
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "GenericActivities" */
export type GenericActivitiesInsertInput = {
	readonly activityType?: InputMaybe<Scalars['String']>
	readonly authorId?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly extra?: InputMaybe<Scalars['json']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly source?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type GenericActivitiesMaxFields = {
	readonly __typename?: 'GenericActivitiesMaxFields'
	readonly activityType?: Maybe<Scalars['String']>
	readonly authorId?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly source?: Maybe<Scalars['enum_GenericActivities_source']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type GenericActivitiesMinFields = {
	readonly __typename?: 'GenericActivitiesMinFields'
	readonly activityType?: Maybe<Scalars['String']>
	readonly authorId?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly source?: Maybe<Scalars['enum_GenericActivities_source']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "GenericActivities" */
export type GenericActivitiesMutationResponse = {
	readonly __typename?: 'GenericActivitiesMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<GenericActivities>
}

/** on_conflict condition type for table "GenericActivities" */
export type GenericActivitiesOnConflict = {
	readonly constraint: GenericActivitiesConstraint
	readonly updateColumns?: ReadonlyArray<GenericActivitiesUpdateColumn>
	readonly where?: InputMaybe<GenericActivitiesBoolExp>
}

/** Ordering options when selecting data from "GenericActivities". */
export type GenericActivitiesOrderBy = {
	readonly activityType?: InputMaybe<OrderBy>
	readonly authorId?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly extra?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly source?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: GenericActivities */
export type GenericActivitiesPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "GenericActivities" */
export enum GenericActivitiesSelectColumn {
	/** column name */
	ActivityType = 'activityType',
	/** column name */
	AuthorId = 'authorId',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Extra = 'extra',
	/** column name */
	Id = 'id',
	/** column name */
	Source = 'source',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "GenericActivities" */
export type GenericActivitiesSetInput = {
	readonly activityType?: InputMaybe<Scalars['String']>
	readonly authorId?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly extra?: InputMaybe<Scalars['json']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly source?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type GenericActivitiesStddevFields = {
	readonly __typename?: 'GenericActivitiesStddevFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type GenericActivitiesStddevPopFields = {
	readonly __typename?: 'GenericActivitiesStddevPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type GenericActivitiesStddevSampFields = {
	readonly __typename?: 'GenericActivitiesStddevSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "GenericActivities" */
export type GenericActivitiesStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: GenericActivitiesStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type GenericActivitiesStreamCursorValueInput = {
	readonly activityType?: InputMaybe<Scalars['String']>
	readonly authorId?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly extra?: InputMaybe<Scalars['json']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly source?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type GenericActivitiesSumFields = {
	readonly __typename?: 'GenericActivitiesSumFields'
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "GenericActivities" */
export enum GenericActivitiesUpdateColumn {
	/** column name */
	ActivityType = 'activityType',
	/** column name */
	AuthorId = 'authorId',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Extra = 'extra',
	/** column name */
	Id = 'id',
	/** column name */
	Source = 'source',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type GenericActivitiesUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<GenericActivitiesIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<GenericActivitiesSetInput>
	/** filter the rows which have to be updated */
	readonly where: GenericActivitiesBoolExp
}

/** aggregate varPop on columns */
export type GenericActivitiesVarPopFields = {
	readonly __typename?: 'GenericActivitiesVarPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type GenericActivitiesVarSampFields = {
	readonly __typename?: 'GenericActivitiesVarSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type GenericActivitiesVarianceFields = {
	readonly __typename?: 'GenericActivitiesVarianceFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "historical_balance" */
export type HistoricalBalance = {
	readonly __typename?: 'HistoricalBalance'
	/** An array relationship */
	readonly accountBalances: ReadonlyArray<AccountBalance>
	/** An aggregate relationship */
	readonly accountBalancesAggregate: AccountBalanceAggregate
	readonly address: Scalars['String']
	readonly block: Scalars['Int']
	readonly currencyId: Scalars['String']
	readonly free: Scalars['numeric']
	readonly id: Scalars['String']
	readonly reserved: Scalars['numeric']
	readonly total: Scalars['numeric']
}

/** columns and relationships of "historical_balance" */
export type HistoricalBalanceAccountBalancesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<AccountBalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<AccountBalanceOrderBy>>
	where?: InputMaybe<AccountBalanceBoolExp>
}

/** columns and relationships of "historical_balance" */
export type HistoricalBalanceAccountBalancesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<AccountBalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<AccountBalanceOrderBy>>
	where?: InputMaybe<AccountBalanceBoolExp>
}

/** aggregated selection of "historical_balance" */
export type HistoricalBalanceAggregate = {
	readonly __typename?: 'HistoricalBalanceAggregate'
	readonly aggregate?: Maybe<HistoricalBalanceAggregateFields>
	readonly nodes: ReadonlyArray<HistoricalBalance>
}

/** aggregate fields of "historical_balance" */
export type HistoricalBalanceAggregateFields = {
	readonly __typename?: 'HistoricalBalanceAggregateFields'
	readonly avg?: Maybe<HistoricalBalanceAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<HistoricalBalanceMaxFields>
	readonly min?: Maybe<HistoricalBalanceMinFields>
	readonly stddev?: Maybe<HistoricalBalanceStddevFields>
	readonly stddevPop?: Maybe<HistoricalBalanceStddevPopFields>
	readonly stddevSamp?: Maybe<HistoricalBalanceStddevSampFields>
	readonly sum?: Maybe<HistoricalBalanceSumFields>
	readonly varPop?: Maybe<HistoricalBalanceVarPopFields>
	readonly varSamp?: Maybe<HistoricalBalanceVarSampFields>
	readonly variance?: Maybe<HistoricalBalanceVarianceFields>
}

/** aggregate fields of "historical_balance" */
export type HistoricalBalanceAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<HistoricalBalanceSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type HistoricalBalanceAvgFields = {
	readonly __typename?: 'HistoricalBalanceAvgFields'
	readonly block?: Maybe<Scalars['Float']>
	readonly free?: Maybe<Scalars['Float']>
	readonly reserved?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "historical_balance". All fields are combined with a logical 'AND'. */
export type HistoricalBalanceBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<HistoricalBalanceBoolExp>>
	readonly _not?: InputMaybe<HistoricalBalanceBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<HistoricalBalanceBoolExp>>
	readonly accountBalances?: InputMaybe<AccountBalanceBoolExp>
	readonly accountBalancesAggregate?: InputMaybe<AccountBalanceAggregateBoolExp>
	readonly address?: InputMaybe<StringComparisonExp>
	readonly block?: InputMaybe<IntComparisonExp>
	readonly currencyId?: InputMaybe<StringComparisonExp>
	readonly free?: InputMaybe<NumericComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly reserved?: InputMaybe<NumericComparisonExp>
	readonly total?: InputMaybe<NumericComparisonExp>
}

/** unique or primary key constraints on table "historical_balance" */
export enum HistoricalBalanceConstraint {
	/** unique or primary key constraint on columns "id" */
	Pk_74ac29ad0bdffb6d1281a1e17e8 = 'PK_74ac29ad0bdffb6d1281a1e17e8',
}

/** input type for incrementing numeric columns in table "historical_balance" */
export type HistoricalBalanceIncInput = {
	readonly block?: InputMaybe<Scalars['Int']>
	readonly free?: InputMaybe<Scalars['numeric']>
	readonly reserved?: InputMaybe<Scalars['numeric']>
	readonly total?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "historical_balance" */
export type HistoricalBalanceInsertInput = {
	readonly accountBalances?: InputMaybe<AccountBalanceArrRelInsertInput>
	readonly address?: InputMaybe<Scalars['String']>
	readonly block?: InputMaybe<Scalars['Int']>
	readonly currencyId?: InputMaybe<Scalars['String']>
	readonly free?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly reserved?: InputMaybe<Scalars['numeric']>
	readonly total?: InputMaybe<Scalars['numeric']>
}

/** aggregate max on columns */
export type HistoricalBalanceMaxFields = {
	readonly __typename?: 'HistoricalBalanceMaxFields'
	readonly address?: Maybe<Scalars['String']>
	readonly block?: Maybe<Scalars['Int']>
	readonly currencyId?: Maybe<Scalars['String']>
	readonly free?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly reserved?: Maybe<Scalars['numeric']>
	readonly total?: Maybe<Scalars['numeric']>
}

/** aggregate min on columns */
export type HistoricalBalanceMinFields = {
	readonly __typename?: 'HistoricalBalanceMinFields'
	readonly address?: Maybe<Scalars['String']>
	readonly block?: Maybe<Scalars['Int']>
	readonly currencyId?: Maybe<Scalars['String']>
	readonly free?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly reserved?: Maybe<Scalars['numeric']>
	readonly total?: Maybe<Scalars['numeric']>
}

/** response of any mutation on the table "historical_balance" */
export type HistoricalBalanceMutationResponse = {
	readonly __typename?: 'HistoricalBalanceMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<HistoricalBalance>
}

/** input type for inserting object relation for remote table "historical_balance" */
export type HistoricalBalanceObjRelInsertInput = {
	readonly data: HistoricalBalanceInsertInput
	/** upsert condition */
	readonly onConflict?: InputMaybe<HistoricalBalanceOnConflict>
}

/** on_conflict condition type for table "historical_balance" */
export type HistoricalBalanceOnConflict = {
	readonly constraint: HistoricalBalanceConstraint
	readonly updateColumns?: ReadonlyArray<HistoricalBalanceUpdateColumn>
	readonly where?: InputMaybe<HistoricalBalanceBoolExp>
}

/** Ordering options when selecting data from "historical_balance". */
export type HistoricalBalanceOrderBy = {
	readonly accountBalancesAggregate?: InputMaybe<AccountBalanceAggregateOrderBy>
	readonly address?: InputMaybe<OrderBy>
	readonly block?: InputMaybe<OrderBy>
	readonly currencyId?: InputMaybe<OrderBy>
	readonly free?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly reserved?: InputMaybe<OrderBy>
	readonly total?: InputMaybe<OrderBy>
}

/** primary key columns input for table: historical_balance */
export type HistoricalBalancePkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "historical_balance" */
export enum HistoricalBalanceSelectColumn {
	/** column name */
	Address = 'address',
	/** column name */
	Block = 'block',
	/** column name */
	CurrencyId = 'currencyId',
	/** column name */
	Free = 'free',
	/** column name */
	Id = 'id',
	/** column name */
	Reserved = 'reserved',
	/** column name */
	Total = 'total',
}

/** input type for updating data in table "historical_balance" */
export type HistoricalBalanceSetInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly block?: InputMaybe<Scalars['Int']>
	readonly currencyId?: InputMaybe<Scalars['String']>
	readonly free?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly reserved?: InputMaybe<Scalars['numeric']>
	readonly total?: InputMaybe<Scalars['numeric']>
}

/** aggregate stddev on columns */
export type HistoricalBalanceStddevFields = {
	readonly __typename?: 'HistoricalBalanceStddevFields'
	readonly block?: Maybe<Scalars['Float']>
	readonly free?: Maybe<Scalars['Float']>
	readonly reserved?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type HistoricalBalanceStddevPopFields = {
	readonly __typename?: 'HistoricalBalanceStddevPopFields'
	readonly block?: Maybe<Scalars['Float']>
	readonly free?: Maybe<Scalars['Float']>
	readonly reserved?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type HistoricalBalanceStddevSampFields = {
	readonly __typename?: 'HistoricalBalanceStddevSampFields'
	readonly block?: Maybe<Scalars['Float']>
	readonly free?: Maybe<Scalars['Float']>
	readonly reserved?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "historical_balance" */
export type HistoricalBalanceStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: HistoricalBalanceStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type HistoricalBalanceStreamCursorValueInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly block?: InputMaybe<Scalars['Int']>
	readonly currencyId?: InputMaybe<Scalars['String']>
	readonly free?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly reserved?: InputMaybe<Scalars['numeric']>
	readonly total?: InputMaybe<Scalars['numeric']>
}

/** aggregate sum on columns */
export type HistoricalBalanceSumFields = {
	readonly __typename?: 'HistoricalBalanceSumFields'
	readonly block?: Maybe<Scalars['Int']>
	readonly free?: Maybe<Scalars['numeric']>
	readonly reserved?: Maybe<Scalars['numeric']>
	readonly total?: Maybe<Scalars['numeric']>
}

/** update columns of table "historical_balance" */
export enum HistoricalBalanceUpdateColumn {
	/** column name */
	Address = 'address',
	/** column name */
	Block = 'block',
	/** column name */
	CurrencyId = 'currencyId',
	/** column name */
	Free = 'free',
	/** column name */
	Id = 'id',
	/** column name */
	Reserved = 'reserved',
	/** column name */
	Total = 'total',
}

export type HistoricalBalanceUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<HistoricalBalanceIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<HistoricalBalanceSetInput>
	/** filter the rows which have to be updated */
	readonly where: HistoricalBalanceBoolExp
}

/** aggregate varPop on columns */
export type HistoricalBalanceVarPopFields = {
	readonly __typename?: 'HistoricalBalanceVarPopFields'
	readonly block?: Maybe<Scalars['Float']>
	readonly free?: Maybe<Scalars['Float']>
	readonly reserved?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type HistoricalBalanceVarSampFields = {
	readonly __typename?: 'HistoricalBalanceVarSampFields'
	readonly block?: Maybe<Scalars['Float']>
	readonly free?: Maybe<Scalars['Float']>
	readonly reserved?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type HistoricalBalanceVarianceFields = {
	readonly __typename?: 'HistoricalBalanceVarianceFields'
	readonly block?: Maybe<Scalars['Float']>
	readonly free?: Maybe<Scalars['Float']>
	readonly reserved?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** columns and relationships of "Identities" */
export type Identities = {
	readonly __typename?: 'Identities'
	readonly address?: Maybe<Scalars['bpchar']>
	/** An array relationship */
	readonly battlepassParticipants: ReadonlyArray<BattlepassParticipants>
	/** An aggregate relationship */
	readonly battlepassParticipantsAggregate: BattlepassParticipantsAggregate
	readonly cid?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly completedQuests: ReadonlyArray<CompletedQuests>
	/** An aggregate relationship */
	readonly completedQuestsAggregate: CompletedQuestsAggregate
	readonly createdAt: Scalars['timestamptz']
	readonly discord?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly epicGames?: Maybe<Scalars['String']>
	readonly id: Scalars['Int']
	readonly name?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly questProgresses: ReadonlyArray<QuestProgresses>
	/** An aggregate relationship */
	readonly questProgressesAggregate: QuestProgressesAggregate
	readonly twitter?: Maybe<Scalars['String']>
	readonly updatedAt: Scalars['timestamptz']
	/** An array relationship */
	readonly userTokens: ReadonlyArray<UserTokens>
	/** An aggregate relationship */
	readonly userTokensAggregate: UserTokensAggregate
	readonly uuid: Scalars['uuid']
}

/** columns and relationships of "Identities" */
export type IdentitiesBattlepassParticipantsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassParticipantsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassParticipantsOrderBy>>
	where?: InputMaybe<BattlepassParticipantsBoolExp>
}

/** columns and relationships of "Identities" */
export type IdentitiesBattlepassParticipantsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassParticipantsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassParticipantsOrderBy>>
	where?: InputMaybe<BattlepassParticipantsBoolExp>
}

/** columns and relationships of "Identities" */
export type IdentitiesCompletedQuestsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CompletedQuestsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CompletedQuestsOrderBy>>
	where?: InputMaybe<CompletedQuestsBoolExp>
}

/** columns and relationships of "Identities" */
export type IdentitiesCompletedQuestsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CompletedQuestsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CompletedQuestsOrderBy>>
	where?: InputMaybe<CompletedQuestsBoolExp>
}

/** columns and relationships of "Identities" */
export type IdentitiesQuestProgressesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<QuestProgressesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<QuestProgressesOrderBy>>
	where?: InputMaybe<QuestProgressesBoolExp>
}

/** columns and relationships of "Identities" */
export type IdentitiesQuestProgressesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<QuestProgressesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<QuestProgressesOrderBy>>
	where?: InputMaybe<QuestProgressesBoolExp>
}

/** columns and relationships of "Identities" */
export type IdentitiesUserTokensArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<UserTokensSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<UserTokensOrderBy>>
	where?: InputMaybe<UserTokensBoolExp>
}

/** columns and relationships of "Identities" */
export type IdentitiesUserTokensAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<UserTokensSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<UserTokensOrderBy>>
	where?: InputMaybe<UserTokensBoolExp>
}

/** aggregated selection of "Identities" */
export type IdentitiesAggregate = {
	readonly __typename?: 'IdentitiesAggregate'
	readonly aggregate?: Maybe<IdentitiesAggregateFields>
	readonly nodes: ReadonlyArray<Identities>
}

/** aggregate fields of "Identities" */
export type IdentitiesAggregateFields = {
	readonly __typename?: 'IdentitiesAggregateFields'
	readonly avg?: Maybe<IdentitiesAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<IdentitiesMaxFields>
	readonly min?: Maybe<IdentitiesMinFields>
	readonly stddev?: Maybe<IdentitiesStddevFields>
	readonly stddevPop?: Maybe<IdentitiesStddevPopFields>
	readonly stddevSamp?: Maybe<IdentitiesStddevSampFields>
	readonly sum?: Maybe<IdentitiesSumFields>
	readonly varPop?: Maybe<IdentitiesVarPopFields>
	readonly varSamp?: Maybe<IdentitiesVarSampFields>
	readonly variance?: Maybe<IdentitiesVarianceFields>
}

/** aggregate fields of "Identities" */
export type IdentitiesAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<IdentitiesSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type IdentitiesAvgFields = {
	readonly __typename?: 'IdentitiesAvgFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "Identities". All fields are combined with a logical 'AND'. */
export type IdentitiesBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<IdentitiesBoolExp>>
	readonly _not?: InputMaybe<IdentitiesBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<IdentitiesBoolExp>>
	readonly address?: InputMaybe<BpcharComparisonExp>
	readonly battlepassParticipants?: InputMaybe<BattlepassParticipantsBoolExp>
	readonly battlepassParticipantsAggregate?: InputMaybe<BattlepassParticipantsAggregateBoolExp>
	readonly cid?: InputMaybe<StringComparisonExp>
	readonly completedQuests?: InputMaybe<CompletedQuestsBoolExp>
	readonly completedQuestsAggregate?: InputMaybe<CompletedQuestsAggregateBoolExp>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly discord?: InputMaybe<StringComparisonExp>
	readonly email?: InputMaybe<StringComparisonExp>
	readonly epicGames?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly name?: InputMaybe<StringComparisonExp>
	readonly questProgresses?: InputMaybe<QuestProgressesBoolExp>
	readonly questProgressesAggregate?: InputMaybe<QuestProgressesAggregateBoolExp>
	readonly twitter?: InputMaybe<StringComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
	readonly userTokens?: InputMaybe<UserTokensBoolExp>
	readonly userTokensAggregate?: InputMaybe<UserTokensAggregateBoolExp>
	readonly uuid?: InputMaybe<UuidComparisonExp>
}

/** unique or primary key constraints on table "Identities" */
export enum IdentitiesConstraint {
	/** unique or primary key constraint on columns "id" */
	IdentitiesPkey = 'Identities_pkey',
}

/** input type for incrementing numeric columns in table "Identities" */
export type IdentitiesIncInput = {
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "Identities" */
export type IdentitiesInsertInput = {
	readonly address?: InputMaybe<Scalars['bpchar']>
	readonly battlepassParticipants?: InputMaybe<BattlepassParticipantsArrRelInsertInput>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly completedQuests?: InputMaybe<CompletedQuestsArrRelInsertInput>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly discord?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly epicGames?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly questProgresses?: InputMaybe<QuestProgressesArrRelInsertInput>
	readonly twitter?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
	readonly userTokens?: InputMaybe<UserTokensArrRelInsertInput>
	readonly uuid?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type IdentitiesMaxFields = {
	readonly __typename?: 'IdentitiesMaxFields'
	readonly address?: Maybe<Scalars['bpchar']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly discord?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly epicGames?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly twitter?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
	readonly uuid?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type IdentitiesMinFields = {
	readonly __typename?: 'IdentitiesMinFields'
	readonly address?: Maybe<Scalars['bpchar']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly discord?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly epicGames?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly twitter?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
	readonly uuid?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "Identities" */
export type IdentitiesMutationResponse = {
	readonly __typename?: 'IdentitiesMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Identities>
}

/** input type for inserting object relation for remote table "Identities" */
export type IdentitiesObjRelInsertInput = {
	readonly data: IdentitiesInsertInput
	/** upsert condition */
	readonly onConflict?: InputMaybe<IdentitiesOnConflict>
}

/** on_conflict condition type for table "Identities" */
export type IdentitiesOnConflict = {
	readonly constraint: IdentitiesConstraint
	readonly updateColumns?: ReadonlyArray<IdentitiesUpdateColumn>
	readonly where?: InputMaybe<IdentitiesBoolExp>
}

/** Ordering options when selecting data from "Identities". */
export type IdentitiesOrderBy = {
	readonly address?: InputMaybe<OrderBy>
	readonly battlepassParticipantsAggregate?: InputMaybe<BattlepassParticipantsAggregateOrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly completedQuestsAggregate?: InputMaybe<CompletedQuestsAggregateOrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly discord?: InputMaybe<OrderBy>
	readonly email?: InputMaybe<OrderBy>
	readonly epicGames?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly questProgressesAggregate?: InputMaybe<QuestProgressesAggregateOrderBy>
	readonly twitter?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
	readonly userTokensAggregate?: InputMaybe<UserTokensAggregateOrderBy>
	readonly uuid?: InputMaybe<OrderBy>
}

/** primary key columns input for table: Identities */
export type IdentitiesPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "Identities" */
export enum IdentitiesSelectColumn {
	/** column name */
	Address = 'address',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Discord = 'discord',
	/** column name */
	Email = 'email',
	/** column name */
	EpicGames = 'epicGames',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
	/** column name */
	Twitter = 'twitter',
	/** column name */
	UpdatedAt = 'updatedAt',
	/** column name */
	Uuid = 'uuid',
}

/** input type for updating data in table "Identities" */
export type IdentitiesSetInput = {
	readonly address?: InputMaybe<Scalars['bpchar']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly discord?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly epicGames?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly twitter?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
	readonly uuid?: InputMaybe<Scalars['uuid']>
}

/** aggregate stddev on columns */
export type IdentitiesStddevFields = {
	readonly __typename?: 'IdentitiesStddevFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type IdentitiesStddevPopFields = {
	readonly __typename?: 'IdentitiesStddevPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type IdentitiesStddevSampFields = {
	readonly __typename?: 'IdentitiesStddevSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "Identities" */
export type IdentitiesStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: IdentitiesStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type IdentitiesStreamCursorValueInput = {
	readonly address?: InputMaybe<Scalars['bpchar']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly discord?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly epicGames?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly twitter?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
	readonly uuid?: InputMaybe<Scalars['uuid']>
}

/** aggregate sum on columns */
export type IdentitiesSumFields = {
	readonly __typename?: 'IdentitiesSumFields'
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "Identities" */
export enum IdentitiesUpdateColumn {
	/** column name */
	Address = 'address',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Discord = 'discord',
	/** column name */
	Email = 'email',
	/** column name */
	EpicGames = 'epicGames',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
	/** column name */
	Twitter = 'twitter',
	/** column name */
	UpdatedAt = 'updatedAt',
	/** column name */
	Uuid = 'uuid',
}

export type IdentitiesUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<IdentitiesIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<IdentitiesSetInput>
	/** filter the rows which have to be updated */
	readonly where: IdentitiesBoolExp
}

/** aggregate varPop on columns */
export type IdentitiesVarPopFields = {
	readonly __typename?: 'IdentitiesVarPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type IdentitiesVarSampFields = {
	readonly __typename?: 'IdentitiesVarSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type IdentitiesVarianceFields = {
	readonly __typename?: 'IdentitiesVarianceFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "identity" */
export type Identity = {
	readonly __typename?: 'Identity'
	/** An array relationship */
	readonly accountBalances: ReadonlyArray<AccountBalance>
	/** An aggregate relationship */
	readonly accountBalancesAggregate: AccountBalanceAggregate
	readonly address: Scalars['String']
	/** An array relationship */
	readonly battlepassNfts: ReadonlyArray<BattlepassNft>
	/** An aggregate relationship */
	readonly battlepassNftsAggregate: BattlepassNftAggregate
	/** An array relationship */
	readonly battlepasses: ReadonlyArray<Battlepass>
	/** An aggregate relationship */
	readonly battlepassesAggregate: BattlepassAggregate
	/** An array relationship */
	readonly campaignContributors: ReadonlyArray<CampaignContributor>
	/** An aggregate relationship */
	readonly campaignContributorsAggregate: CampaignContributorAggregate
	/** An array relationship */
	readonly campaigns: ReadonlyArray<Campaign>
	/** An aggregate relationship */
	readonly campaignsAggregate: CampaignAggregate
	/** An array relationship */
	readonly campaignsByCreatorIdentityId: ReadonlyArray<Campaign>
	/** An aggregate relationship */
	readonly campaignsByCreatorIdentityIdAggregate: CampaignAggregate
	readonly discord?: Maybe<Scalars['String']>
	readonly displayName?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly id: Scalars['String']
	readonly image?: Maybe<Scalars['String']>
	readonly legalName?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly nftCollections: ReadonlyArray<NftCollection>
	/** An aggregate relationship */
	readonly nftCollectionsAggregate: NftCollectionAggregate
	/** An array relationship */
	readonly nfts: ReadonlyArray<Nft>
	/** An aggregate relationship */
	readonly nftsAggregate: NftAggregate
	/** An array relationship */
	readonly organizationMembers: ReadonlyArray<OrganizationMember>
	/** An aggregate relationship */
	readonly organizationMembersAggregate: OrganizationMemberAggregate
	/** An array relationship */
	readonly organizations: ReadonlyArray<Organization>
	/** An aggregate relationship */
	readonly organizationsAggregate: OrganizationAggregate
	/** An array relationship */
	readonly organizationsByCreatorIdentityId: ReadonlyArray<Organization>
	/** An aggregate relationship */
	readonly organizationsByCreatorIdentityIdAggregate: OrganizationAggregate
	/** An array relationship */
	readonly organizationsByTreasuryIdentityId: ReadonlyArray<Organization>
	/** An aggregate relationship */
	readonly organizationsByTreasuryIdentityIdAggregate: OrganizationAggregate
	/** An array relationship */
	readonly proposalVoters: ReadonlyArray<ProposalVoter>
	/** An aggregate relationship */
	readonly proposalVotersAggregate: ProposalVoterAggregate
	/** An array relationship */
	readonly proposals: ReadonlyArray<Proposal>
	/** An aggregate relationship */
	readonly proposalsAggregate: ProposalAggregate
	/** An array relationship */
	readonly proposalsByBeneficiaryIdentityId: ReadonlyArray<Proposal>
	/** An aggregate relationship */
	readonly proposalsByBeneficiaryIdentityIdAggregate: ProposalAggregate
	readonly riot?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly senseEntities: ReadonlyArray<SenseEntity>
	/** An aggregate relationship */
	readonly senseEntitiesAggregate: SenseEntityAggregate
	readonly twitter?: Maybe<Scalars['String']>
	readonly web?: Maybe<Scalars['String']>
	readonly web3name?: Maybe<Scalars['String']>
}

/** columns and relationships of "identity" */
export type IdentityAccountBalancesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<AccountBalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<AccountBalanceOrderBy>>
	where?: InputMaybe<AccountBalanceBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityAccountBalancesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<AccountBalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<AccountBalanceOrderBy>>
	where?: InputMaybe<AccountBalanceBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityBattlepassNftsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassNftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassNftOrderBy>>
	where?: InputMaybe<BattlepassNftBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityBattlepassNftsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassNftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassNftOrderBy>>
	where?: InputMaybe<BattlepassNftBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityBattlepassesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassOrderBy>>
	where?: InputMaybe<BattlepassBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityBattlepassesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassOrderBy>>
	where?: InputMaybe<BattlepassBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityCampaignContributorsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignContributorSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignContributorOrderBy>>
	where?: InputMaybe<CampaignContributorBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityCampaignContributorsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignContributorSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignContributorOrderBy>>
	where?: InputMaybe<CampaignContributorBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityCampaignsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignOrderBy>>
	where?: InputMaybe<CampaignBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityCampaignsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignOrderBy>>
	where?: InputMaybe<CampaignBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityCampaignsByCreatorIdentityIdArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignOrderBy>>
	where?: InputMaybe<CampaignBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityCampaignsByCreatorIdentityIdAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignOrderBy>>
	where?: InputMaybe<CampaignBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityNftCollectionsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<NftCollectionSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<NftCollectionOrderBy>>
	where?: InputMaybe<NftCollectionBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityNftCollectionsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<NftCollectionSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<NftCollectionOrderBy>>
	where?: InputMaybe<NftCollectionBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityNftsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<NftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<NftOrderBy>>
	where?: InputMaybe<NftBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityNftsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<NftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<NftOrderBy>>
	where?: InputMaybe<NftBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityOrganizationMembersArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationMemberSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationMemberOrderBy>>
	where?: InputMaybe<OrganizationMemberBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityOrganizationMembersAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationMemberSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationMemberOrderBy>>
	where?: InputMaybe<OrganizationMemberBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityOrganizationsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationOrderBy>>
	where?: InputMaybe<OrganizationBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityOrganizationsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationOrderBy>>
	where?: InputMaybe<OrganizationBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityOrganizationsByCreatorIdentityIdArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationOrderBy>>
	where?: InputMaybe<OrganizationBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityOrganizationsByCreatorIdentityIdAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationOrderBy>>
	where?: InputMaybe<OrganizationBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityOrganizationsByTreasuryIdentityIdArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationOrderBy>>
	where?: InputMaybe<OrganizationBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityOrganizationsByTreasuryIdentityIdAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationOrderBy>>
	where?: InputMaybe<OrganizationBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityProposalVotersArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalVoterSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalVoterOrderBy>>
	where?: InputMaybe<ProposalVoterBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityProposalVotersAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalVoterSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalVoterOrderBy>>
	where?: InputMaybe<ProposalVoterBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityProposalsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalOrderBy>>
	where?: InputMaybe<ProposalBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityProposalsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalOrderBy>>
	where?: InputMaybe<ProposalBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityProposalsByBeneficiaryIdentityIdArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalOrderBy>>
	where?: InputMaybe<ProposalBoolExp>
}

/** columns and relationships of "identity" */
export type IdentityProposalsByBeneficiaryIdentityIdAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalOrderBy>>
	where?: InputMaybe<ProposalBoolExp>
}

/** columns and relationships of "identity" */
export type IdentitySenseEntitiesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<SenseEntitySelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<SenseEntityOrderBy>>
	where?: InputMaybe<SenseEntityBoolExp>
}

/** columns and relationships of "identity" */
export type IdentitySenseEntitiesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<SenseEntitySelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<SenseEntityOrderBy>>
	where?: InputMaybe<SenseEntityBoolExp>
}

/** aggregated selection of "identity" */
export type IdentityAggregate = {
	readonly __typename?: 'IdentityAggregate'
	readonly aggregate?: Maybe<IdentityAggregateFields>
	readonly nodes: ReadonlyArray<Identity>
}

/** aggregate fields of "identity" */
export type IdentityAggregateFields = {
	readonly __typename?: 'IdentityAggregateFields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<IdentityMaxFields>
	readonly min?: Maybe<IdentityMinFields>
}

/** aggregate fields of "identity" */
export type IdentityAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<IdentitySelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "identity". All fields are combined with a logical 'AND'. */
export type IdentityBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<IdentityBoolExp>>
	readonly _not?: InputMaybe<IdentityBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<IdentityBoolExp>>
	readonly accountBalances?: InputMaybe<AccountBalanceBoolExp>
	readonly accountBalancesAggregate?: InputMaybe<AccountBalanceAggregateBoolExp>
	readonly address?: InputMaybe<StringComparisonExp>
	readonly battlepassNfts?: InputMaybe<BattlepassNftBoolExp>
	readonly battlepassNftsAggregate?: InputMaybe<BattlepassNftAggregateBoolExp>
	readonly battlepasses?: InputMaybe<BattlepassBoolExp>
	readonly battlepassesAggregate?: InputMaybe<BattlepassAggregateBoolExp>
	readonly campaignContributors?: InputMaybe<CampaignContributorBoolExp>
	readonly campaignContributorsAggregate?: InputMaybe<CampaignContributorAggregateBoolExp>
	readonly campaigns?: InputMaybe<CampaignBoolExp>
	readonly campaignsAggregate?: InputMaybe<CampaignAggregateBoolExp>
	readonly campaignsByCreatorIdentityId?: InputMaybe<CampaignBoolExp>
	readonly campaignsByCreatorIdentityIdAggregate?: InputMaybe<CampaignAggregateBoolExp>
	readonly discord?: InputMaybe<StringComparisonExp>
	readonly displayName?: InputMaybe<StringComparisonExp>
	readonly email?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly image?: InputMaybe<StringComparisonExp>
	readonly legalName?: InputMaybe<StringComparisonExp>
	readonly nftCollections?: InputMaybe<NftCollectionBoolExp>
	readonly nftCollectionsAggregate?: InputMaybe<NftCollectionAggregateBoolExp>
	readonly nfts?: InputMaybe<NftBoolExp>
	readonly nftsAggregate?: InputMaybe<NftAggregateBoolExp>
	readonly organizationMembers?: InputMaybe<OrganizationMemberBoolExp>
	readonly organizationMembersAggregate?: InputMaybe<OrganizationMemberAggregateBoolExp>
	readonly organizations?: InputMaybe<OrganizationBoolExp>
	readonly organizationsAggregate?: InputMaybe<OrganizationAggregateBoolExp>
	readonly organizationsByCreatorIdentityId?: InputMaybe<OrganizationBoolExp>
	readonly organizationsByCreatorIdentityIdAggregate?: InputMaybe<OrganizationAggregateBoolExp>
	readonly organizationsByTreasuryIdentityId?: InputMaybe<OrganizationBoolExp>
	readonly organizationsByTreasuryIdentityIdAggregate?: InputMaybe<OrganizationAggregateBoolExp>
	readonly proposalVoters?: InputMaybe<ProposalVoterBoolExp>
	readonly proposalVotersAggregate?: InputMaybe<ProposalVoterAggregateBoolExp>
	readonly proposals?: InputMaybe<ProposalBoolExp>
	readonly proposalsAggregate?: InputMaybe<ProposalAggregateBoolExp>
	readonly proposalsByBeneficiaryIdentityId?: InputMaybe<ProposalBoolExp>
	readonly proposalsByBeneficiaryIdentityIdAggregate?: InputMaybe<ProposalAggregateBoolExp>
	readonly riot?: InputMaybe<StringComparisonExp>
	readonly senseEntities?: InputMaybe<SenseEntityBoolExp>
	readonly senseEntitiesAggregate?: InputMaybe<SenseEntityAggregateBoolExp>
	readonly twitter?: InputMaybe<StringComparisonExp>
	readonly web?: InputMaybe<StringComparisonExp>
	readonly web3name?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "identity" */
export enum IdentityConstraint {
	/** unique or primary key constraint on columns "id" */
	PkFf16a44186b286d5e626178f726 = 'PK_ff16a44186b286d5e626178f726',
}

/** input type for inserting data into table "identity" */
export type IdentityInsertInput = {
	readonly accountBalances?: InputMaybe<AccountBalanceArrRelInsertInput>
	readonly address?: InputMaybe<Scalars['String']>
	readonly battlepassNfts?: InputMaybe<BattlepassNftArrRelInsertInput>
	readonly battlepasses?: InputMaybe<BattlepassArrRelInsertInput>
	readonly campaignContributors?: InputMaybe<CampaignContributorArrRelInsertInput>
	readonly campaigns?: InputMaybe<CampaignArrRelInsertInput>
	readonly campaignsByCreatorIdentityId?: InputMaybe<CampaignArrRelInsertInput>
	readonly discord?: InputMaybe<Scalars['String']>
	readonly displayName?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly legalName?: InputMaybe<Scalars['String']>
	readonly nftCollections?: InputMaybe<NftCollectionArrRelInsertInput>
	readonly nfts?: InputMaybe<NftArrRelInsertInput>
	readonly organizationMembers?: InputMaybe<OrganizationMemberArrRelInsertInput>
	readonly organizations?: InputMaybe<OrganizationArrRelInsertInput>
	readonly organizationsByCreatorIdentityId?: InputMaybe<OrganizationArrRelInsertInput>
	readonly organizationsByTreasuryIdentityId?: InputMaybe<OrganizationArrRelInsertInput>
	readonly proposalVoters?: InputMaybe<ProposalVoterArrRelInsertInput>
	readonly proposals?: InputMaybe<ProposalArrRelInsertInput>
	readonly proposalsByBeneficiaryIdentityId?: InputMaybe<ProposalArrRelInsertInput>
	readonly riot?: InputMaybe<Scalars['String']>
	readonly senseEntities?: InputMaybe<SenseEntityArrRelInsertInput>
	readonly twitter?: InputMaybe<Scalars['String']>
	readonly web?: InputMaybe<Scalars['String']>
	readonly web3name?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type IdentityMaxFields = {
	readonly __typename?: 'IdentityMaxFields'
	readonly address?: Maybe<Scalars['String']>
	readonly discord?: Maybe<Scalars['String']>
	readonly displayName?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly legalName?: Maybe<Scalars['String']>
	readonly riot?: Maybe<Scalars['String']>
	readonly twitter?: Maybe<Scalars['String']>
	readonly web?: Maybe<Scalars['String']>
	readonly web3name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type IdentityMinFields = {
	readonly __typename?: 'IdentityMinFields'
	readonly address?: Maybe<Scalars['String']>
	readonly discord?: Maybe<Scalars['String']>
	readonly displayName?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly legalName?: Maybe<Scalars['String']>
	readonly riot?: Maybe<Scalars['String']>
	readonly twitter?: Maybe<Scalars['String']>
	readonly web?: Maybe<Scalars['String']>
	readonly web3name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "identity" */
export type IdentityMutationResponse = {
	readonly __typename?: 'IdentityMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Identity>
}

/** input type for inserting object relation for remote table "identity" */
export type IdentityObjRelInsertInput = {
	readonly data: IdentityInsertInput
	/** upsert condition */
	readonly onConflict?: InputMaybe<IdentityOnConflict>
}

/** on_conflict condition type for table "identity" */
export type IdentityOnConflict = {
	readonly constraint: IdentityConstraint
	readonly updateColumns?: ReadonlyArray<IdentityUpdateColumn>
	readonly where?: InputMaybe<IdentityBoolExp>
}

/** Ordering options when selecting data from "identity". */
export type IdentityOrderBy = {
	readonly accountBalancesAggregate?: InputMaybe<AccountBalanceAggregateOrderBy>
	readonly address?: InputMaybe<OrderBy>
	readonly battlepassNftsAggregate?: InputMaybe<BattlepassNftAggregateOrderBy>
	readonly battlepassesAggregate?: InputMaybe<BattlepassAggregateOrderBy>
	readonly campaignContributorsAggregate?: InputMaybe<CampaignContributorAggregateOrderBy>
	readonly campaignsAggregate?: InputMaybe<CampaignAggregateOrderBy>
	readonly campaignsByCreatorIdentityIdAggregate?: InputMaybe<CampaignAggregateOrderBy>
	readonly discord?: InputMaybe<OrderBy>
	readonly displayName?: InputMaybe<OrderBy>
	readonly email?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly image?: InputMaybe<OrderBy>
	readonly legalName?: InputMaybe<OrderBy>
	readonly nftCollectionsAggregate?: InputMaybe<NftCollectionAggregateOrderBy>
	readonly nftsAggregate?: InputMaybe<NftAggregateOrderBy>
	readonly organizationMembersAggregate?: InputMaybe<OrganizationMemberAggregateOrderBy>
	readonly organizationsAggregate?: InputMaybe<OrganizationAggregateOrderBy>
	readonly organizationsByCreatorIdentityIdAggregate?: InputMaybe<OrganizationAggregateOrderBy>
	readonly organizationsByTreasuryIdentityIdAggregate?: InputMaybe<OrganizationAggregateOrderBy>
	readonly proposalVotersAggregate?: InputMaybe<ProposalVoterAggregateOrderBy>
	readonly proposalsAggregate?: InputMaybe<ProposalAggregateOrderBy>
	readonly proposalsByBeneficiaryIdentityIdAggregate?: InputMaybe<ProposalAggregateOrderBy>
	readonly riot?: InputMaybe<OrderBy>
	readonly senseEntitiesAggregate?: InputMaybe<SenseEntityAggregateOrderBy>
	readonly twitter?: InputMaybe<OrderBy>
	readonly web?: InputMaybe<OrderBy>
	readonly web3name?: InputMaybe<OrderBy>
}

/** primary key columns input for table: identity */
export type IdentityPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "identity" */
export enum IdentitySelectColumn {
	/** column name */
	Address = 'address',
	/** column name */
	Discord = 'discord',
	/** column name */
	DisplayName = 'displayName',
	/** column name */
	Email = 'email',
	/** column name */
	Id = 'id',
	/** column name */
	Image = 'image',
	/** column name */
	LegalName = 'legalName',
	/** column name */
	Riot = 'riot',
	/** column name */
	Twitter = 'twitter',
	/** column name */
	Web = 'web',
	/** column name */
	Web3name = 'web3name',
}

/** input type for updating data in table "identity" */
export type IdentitySetInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly discord?: InputMaybe<Scalars['String']>
	readonly displayName?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly legalName?: InputMaybe<Scalars['String']>
	readonly riot?: InputMaybe<Scalars['String']>
	readonly twitter?: InputMaybe<Scalars['String']>
	readonly web?: InputMaybe<Scalars['String']>
	readonly web3name?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "identity" */
export type IdentityStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: IdentityStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type IdentityStreamCursorValueInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly discord?: InputMaybe<Scalars['String']>
	readonly displayName?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly legalName?: InputMaybe<Scalars['String']>
	readonly riot?: InputMaybe<Scalars['String']>
	readonly twitter?: InputMaybe<Scalars['String']>
	readonly web?: InputMaybe<Scalars['String']>
	readonly web3name?: InputMaybe<Scalars['String']>
}

/** update columns of table "identity" */
export enum IdentityUpdateColumn {
	/** column name */
	Address = 'address',
	/** column name */
	Discord = 'discord',
	/** column name */
	DisplayName = 'displayName',
	/** column name */
	Email = 'email',
	/** column name */
	Id = 'id',
	/** column name */
	Image = 'image',
	/** column name */
	LegalName = 'legalName',
	/** column name */
	Riot = 'riot',
	/** column name */
	Twitter = 'twitter',
	/** column name */
	Web = 'web',
	/** column name */
	Web3name = 'web3name',
}

export type IdentityUpdates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<IdentitySetInput>
	/** filter the rows which have to be updated */
	readonly where: IdentityBoolExp
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['Int']>
	readonly _gt?: InputMaybe<Scalars['Int']>
	readonly _gte?: InputMaybe<Scalars['Int']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['Int']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['Int']>
	readonly _lte?: InputMaybe<Scalars['Int']>
	readonly _neq?: InputMaybe<Scalars['Int']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type JsonComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['json']>
	readonly _gt?: InputMaybe<Scalars['json']>
	readonly _gte?: InputMaybe<Scalars['json']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['json']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['json']>
	readonly _lte?: InputMaybe<Scalars['json']>
	readonly _neq?: InputMaybe<Scalars['json']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['json']>>
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

/** columns and relationships of "migrations" */
export type Migrations = {
	readonly __typename?: 'Migrations'
	readonly id: Scalars['Int']
	readonly name: Scalars['String']
	readonly timestamp: Scalars['bigint']
}

/** aggregated selection of "migrations" */
export type MigrationsAggregate = {
	readonly __typename?: 'MigrationsAggregate'
	readonly aggregate?: Maybe<MigrationsAggregateFields>
	readonly nodes: ReadonlyArray<Migrations>
}

/** aggregate fields of "migrations" */
export type MigrationsAggregateFields = {
	readonly __typename?: 'MigrationsAggregateFields'
	readonly avg?: Maybe<MigrationsAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<MigrationsMaxFields>
	readonly min?: Maybe<MigrationsMinFields>
	readonly stddev?: Maybe<MigrationsStddevFields>
	readonly stddevPop?: Maybe<MigrationsStddevPopFields>
	readonly stddevSamp?: Maybe<MigrationsStddevSampFields>
	readonly sum?: Maybe<MigrationsSumFields>
	readonly varPop?: Maybe<MigrationsVarPopFields>
	readonly varSamp?: Maybe<MigrationsVarSampFields>
	readonly variance?: Maybe<MigrationsVarianceFields>
}

/** aggregate fields of "migrations" */
export type MigrationsAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<MigrationsSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type MigrationsAvgFields = {
	readonly __typename?: 'MigrationsAvgFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly timestamp?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "migrations". All fields are combined with a logical 'AND'. */
export type MigrationsBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<MigrationsBoolExp>>
	readonly _not?: InputMaybe<MigrationsBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<MigrationsBoolExp>>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly name?: InputMaybe<StringComparisonExp>
	readonly timestamp?: InputMaybe<BigintComparisonExp>
}

/** unique or primary key constraints on table "migrations" */
export enum MigrationsConstraint {
	/** unique or primary key constraint on columns "id" */
	Pk_8c82d7f526340ab734260ea46be = 'PK_8c82d7f526340ab734260ea46be',
}

/** input type for incrementing numeric columns in table "migrations" */
export type MigrationsIncInput = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly timestamp?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "migrations" */
export type MigrationsInsertInput = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type MigrationsMaxFields = {
	readonly __typename?: 'MigrationsMaxFields'
	readonly id?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly timestamp?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type MigrationsMinFields = {
	readonly __typename?: 'MigrationsMinFields'
	readonly id?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly timestamp?: Maybe<Scalars['bigint']>
}

/** response of any mutation on the table "migrations" */
export type MigrationsMutationResponse = {
	readonly __typename?: 'MigrationsMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Migrations>
}

/** on_conflict condition type for table "migrations" */
export type MigrationsOnConflict = {
	readonly constraint: MigrationsConstraint
	readonly updateColumns?: ReadonlyArray<MigrationsUpdateColumn>
	readonly where?: InputMaybe<MigrationsBoolExp>
}

/** Ordering options when selecting data from "migrations". */
export type MigrationsOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly timestamp?: InputMaybe<OrderBy>
}

/** primary key columns input for table: migrations */
export type MigrationsPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "migrations" */
export enum MigrationsSelectColumn {
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
	/** column name */
	Timestamp = 'timestamp',
}

/** input type for updating data in table "migrations" */
export type MigrationsSetInput = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type MigrationsStddevFields = {
	readonly __typename?: 'MigrationsStddevFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly timestamp?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type MigrationsStddevPopFields = {
	readonly __typename?: 'MigrationsStddevPopFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly timestamp?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type MigrationsStddevSampFields = {
	readonly __typename?: 'MigrationsStddevSampFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly timestamp?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "migrations" */
export type MigrationsStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: MigrationsStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type MigrationsStreamCursorValueInput = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['bigint']>
}

/** aggregate sum on columns */
export type MigrationsSumFields = {
	readonly __typename?: 'MigrationsSumFields'
	readonly id?: Maybe<Scalars['Int']>
	readonly timestamp?: Maybe<Scalars['bigint']>
}

/** update columns of table "migrations" */
export enum MigrationsUpdateColumn {
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
	/** column name */
	Timestamp = 'timestamp',
}

export type MigrationsUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<MigrationsIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<MigrationsSetInput>
	/** filter the rows which have to be updated */
	readonly where: MigrationsBoolExp
}

/** aggregate varPop on columns */
export type MigrationsVarPopFields = {
	readonly __typename?: 'MigrationsVarPopFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly timestamp?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type MigrationsVarSampFields = {
	readonly __typename?: 'MigrationsVarSampFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly timestamp?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type MigrationsVarianceFields = {
	readonly __typename?: 'MigrationsVarianceFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly timestamp?: Maybe<Scalars['Float']>
}

/** columns and relationships of "nft" */
export type Nft = {
	readonly __typename?: 'Nft'
	/** An array relationship */
	readonly battlepassNfts: ReadonlyArray<BattlepassNft>
	/** An aggregate relationship */
	readonly battlepassNftsAggregate: BattlepassNftAggregate
	readonly collectionId?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly image?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadataIsFrozen?: Maybe<Scalars['Boolean']>
	readonly name?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly nftCollection?: Maybe<NftCollection>
	readonly ownerId?: Maybe<Scalars['String']>
}

/** columns and relationships of "nft" */
export type NftBattlepassNftsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassNftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassNftOrderBy>>
	where?: InputMaybe<BattlepassNftBoolExp>
}

/** columns and relationships of "nft" */
export type NftBattlepassNftsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassNftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassNftOrderBy>>
	where?: InputMaybe<BattlepassNftBoolExp>
}

/** aggregated selection of "nft" */
export type NftAggregate = {
	readonly __typename?: 'NftAggregate'
	readonly aggregate?: Maybe<NftAggregateFields>
	readonly nodes: ReadonlyArray<Nft>
}

export type NftAggregateBoolExp = {
	readonly bool_and?: InputMaybe<NftAggregateBoolExpBool_And>
	readonly bool_or?: InputMaybe<NftAggregateBoolExpBool_Or>
	readonly count?: InputMaybe<NftAggregateBoolExpCount>
}

/** aggregate fields of "nft" */
export type NftAggregateFields = {
	readonly __typename?: 'NftAggregateFields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<NftMaxFields>
	readonly min?: Maybe<NftMinFields>
}

/** aggregate fields of "nft" */
export type NftAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<NftSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "nft" */
export type NftAggregateOrderBy = {
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<NftMaxOrderBy>
	readonly min?: InputMaybe<NftMinOrderBy>
}

/** input type for inserting array relation for remote table "nft" */
export type NftArrRelInsertInput = {
	readonly data: ReadonlyArray<NftInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<NftOnConflict>
}

/** Boolean expression to filter rows from the table "nft". All fields are combined with a logical 'AND'. */
export type NftBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<NftBoolExp>>
	readonly _not?: InputMaybe<NftBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<NftBoolExp>>
	readonly battlepassNfts?: InputMaybe<BattlepassNftBoolExp>
	readonly battlepassNftsAggregate?: InputMaybe<BattlepassNftAggregateBoolExp>
	readonly collectionId?: InputMaybe<StringComparisonExp>
	readonly description?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly identity?: InputMaybe<IdentityBoolExp>
	readonly image?: InputMaybe<StringComparisonExp>
	readonly metadata?: InputMaybe<StringComparisonExp>
	readonly metadataIsFrozen?: InputMaybe<BooleanComparisonExp>
	readonly name?: InputMaybe<StringComparisonExp>
	readonly nftCollection?: InputMaybe<NftCollectionBoolExp>
	readonly ownerId?: InputMaybe<StringComparisonExp>
}

/** columns and relationships of "nft_collection" */
export type NftCollection = {
	readonly __typename?: 'NftCollection'
	readonly description?: Maybe<Scalars['String']>
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly image?: Maybe<Scalars['String']>
	readonly max?: Maybe<Scalars['Int']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadataIsFrozen?: Maybe<Scalars['Boolean']>
	readonly name?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly nfts: ReadonlyArray<Nft>
	/** An aggregate relationship */
	readonly nftsAggregate: NftAggregate
	readonly ownerId?: Maybe<Scalars['String']>
}

/** columns and relationships of "nft_collection" */
export type NftCollectionNftsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<NftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<NftOrderBy>>
	where?: InputMaybe<NftBoolExp>
}

/** columns and relationships of "nft_collection" */
export type NftCollectionNftsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<NftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<NftOrderBy>>
	where?: InputMaybe<NftBoolExp>
}

/** aggregated selection of "nft_collection" */
export type NftCollectionAggregate = {
	readonly __typename?: 'NftCollectionAggregate'
	readonly aggregate?: Maybe<NftCollectionAggregateFields>
	readonly nodes: ReadonlyArray<NftCollection>
}

export type NftCollectionAggregateBoolExp = {
	readonly bool_and?: InputMaybe<NftCollectionAggregateBoolExpBool_And>
	readonly bool_or?: InputMaybe<NftCollectionAggregateBoolExpBool_Or>
	readonly count?: InputMaybe<NftCollectionAggregateBoolExpCount>
}

/** aggregate fields of "nft_collection" */
export type NftCollectionAggregateFields = {
	readonly __typename?: 'NftCollectionAggregateFields'
	readonly avg?: Maybe<NftCollectionAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<NftCollectionMaxFields>
	readonly min?: Maybe<NftCollectionMinFields>
	readonly stddev?: Maybe<NftCollectionStddevFields>
	readonly stddevPop?: Maybe<NftCollectionStddevPopFields>
	readonly stddevSamp?: Maybe<NftCollectionStddevSampFields>
	readonly sum?: Maybe<NftCollectionSumFields>
	readonly varPop?: Maybe<NftCollectionVarPopFields>
	readonly varSamp?: Maybe<NftCollectionVarSampFields>
	readonly variance?: Maybe<NftCollectionVarianceFields>
}

/** aggregate fields of "nft_collection" */
export type NftCollectionAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<NftCollectionSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "nft_collection" */
export type NftCollectionAggregateOrderBy = {
	readonly avg?: InputMaybe<NftCollectionAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<NftCollectionMaxOrderBy>
	readonly min?: InputMaybe<NftCollectionMinOrderBy>
	readonly stddev?: InputMaybe<NftCollectionStddevOrderBy>
	readonly stddevPop?: InputMaybe<NftCollectionStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<NftCollectionStddevSampOrderBy>
	readonly sum?: InputMaybe<NftCollectionSumOrderBy>
	readonly varPop?: InputMaybe<NftCollectionVarPopOrderBy>
	readonly varSamp?: InputMaybe<NftCollectionVarSampOrderBy>
	readonly variance?: InputMaybe<NftCollectionVarianceOrderBy>
}

/** input type for inserting array relation for remote table "nft_collection" */
export type NftCollectionArrRelInsertInput = {
	readonly data: ReadonlyArray<NftCollectionInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<NftCollectionOnConflict>
}

/** aggregate avg on columns */
export type NftCollectionAvgFields = {
	readonly __typename?: 'NftCollectionAvgFields'
	readonly max?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "nft_collection" */
export type NftCollectionAvgOrderBy = {
	readonly max?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "nft_collection". All fields are combined with a logical 'AND'. */
export type NftCollectionBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<NftCollectionBoolExp>>
	readonly _not?: InputMaybe<NftCollectionBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<NftCollectionBoolExp>>
	readonly description?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly identity?: InputMaybe<IdentityBoolExp>
	readonly image?: InputMaybe<StringComparisonExp>
	readonly max?: InputMaybe<IntComparisonExp>
	readonly metadata?: InputMaybe<StringComparisonExp>
	readonly metadataIsFrozen?: InputMaybe<BooleanComparisonExp>
	readonly name?: InputMaybe<StringComparisonExp>
	readonly nfts?: InputMaybe<NftBoolExp>
	readonly nftsAggregate?: InputMaybe<NftAggregateBoolExp>
	readonly ownerId?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "nft_collection" */
export enum NftCollectionConstraint {
	/** unique or primary key constraint on columns "id" */
	PkFfe58aa05707db77c2f20ecdbc3 = 'PK_ffe58aa05707db77c2f20ecdbc3',
}

/** input type for incrementing numeric columns in table "nft_collection" */
export type NftCollectionIncInput = {
	readonly max?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "nft_collection" */
export type NftCollectionInsertInput = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<IdentityObjRelInsertInput>
	readonly image?: InputMaybe<Scalars['String']>
	readonly max?: InputMaybe<Scalars['Int']>
	readonly metadata?: InputMaybe<Scalars['String']>
	readonly metadataIsFrozen?: InputMaybe<Scalars['Boolean']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly nfts?: InputMaybe<NftArrRelInsertInput>
	readonly ownerId?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type NftCollectionMaxFields = {
	readonly __typename?: 'NftCollectionMaxFields'
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly max?: Maybe<Scalars['Int']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly ownerId?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "nft_collection" */
export type NftCollectionMaxOrderBy = {
	readonly description?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly image?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrderBy>
	readonly metadata?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly ownerId?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type NftCollectionMinFields = {
	readonly __typename?: 'NftCollectionMinFields'
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly max?: Maybe<Scalars['Int']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly ownerId?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "nft_collection" */
export type NftCollectionMinOrderBy = {
	readonly description?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly image?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrderBy>
	readonly metadata?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly ownerId?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "nft_collection" */
export type NftCollectionMutationResponse = {
	readonly __typename?: 'NftCollectionMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<NftCollection>
}

/** input type for inserting object relation for remote table "nft_collection" */
export type NftCollectionObjRelInsertInput = {
	readonly data: NftCollectionInsertInput
	/** upsert condition */
	readonly onConflict?: InputMaybe<NftCollectionOnConflict>
}

/** on_conflict condition type for table "nft_collection" */
export type NftCollectionOnConflict = {
	readonly constraint: NftCollectionConstraint
	readonly updateColumns?: ReadonlyArray<NftCollectionUpdateColumn>
	readonly where?: InputMaybe<NftCollectionBoolExp>
}

/** Ordering options when selecting data from "nft_collection". */
export type NftCollectionOrderBy = {
	readonly description?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentityOrderBy>
	readonly image?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrderBy>
	readonly metadata?: InputMaybe<OrderBy>
	readonly metadataIsFrozen?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly nftsAggregate?: InputMaybe<NftAggregateOrderBy>
	readonly ownerId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: nft_collection */
export type NftCollectionPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "nft_collection" */
export enum NftCollectionSelectColumn {
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
	MetadataIsFrozen = 'metadataIsFrozen',
	/** column name */
	Name = 'name',
	/** column name */
	OwnerId = 'ownerId',
}

/** select "nftCollectionAggregateBoolExpBool_andArgumentsColumns" columns of table "nft_collection" */
export enum NftCollectionSelectColumnNftCollectionAggregateBoolExpBool_AndArgumentsColumns {
	/** column name */
	MetadataIsFrozen = 'metadataIsFrozen',
}

/** select "nftCollectionAggregateBoolExpBool_orArgumentsColumns" columns of table "nft_collection" */
export enum NftCollectionSelectColumnNftCollectionAggregateBoolExpBool_OrArgumentsColumns {
	/** column name */
	MetadataIsFrozen = 'metadataIsFrozen',
}

/** input type for updating data in table "nft_collection" */
export type NftCollectionSetInput = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly max?: InputMaybe<Scalars['Int']>
	readonly metadata?: InputMaybe<Scalars['String']>
	readonly metadataIsFrozen?: InputMaybe<Scalars['Boolean']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly ownerId?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type NftCollectionStddevFields = {
	readonly __typename?: 'NftCollectionStddevFields'
	readonly max?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "nft_collection" */
export type NftCollectionStddevOrderBy = {
	readonly max?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type NftCollectionStddevPopFields = {
	readonly __typename?: 'NftCollectionStddevPopFields'
	readonly max?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "nft_collection" */
export type NftCollectionStddevPopOrderBy = {
	readonly max?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type NftCollectionStddevSampFields = {
	readonly __typename?: 'NftCollectionStddevSampFields'
	readonly max?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "nft_collection" */
export type NftCollectionStddevSampOrderBy = {
	readonly max?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "nft_collection" */
export type NftCollectionStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: NftCollectionStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type NftCollectionStreamCursorValueInput = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly max?: InputMaybe<Scalars['Int']>
	readonly metadata?: InputMaybe<Scalars['String']>
	readonly metadataIsFrozen?: InputMaybe<Scalars['Boolean']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly ownerId?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type NftCollectionSumFields = {
	readonly __typename?: 'NftCollectionSumFields'
	readonly max?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "nft_collection" */
export type NftCollectionSumOrderBy = {
	readonly max?: InputMaybe<OrderBy>
}

/** update columns of table "nft_collection" */
export enum NftCollectionUpdateColumn {
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
	MetadataIsFrozen = 'metadataIsFrozen',
	/** column name */
	Name = 'name',
	/** column name */
	OwnerId = 'ownerId',
}

export type NftCollectionUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<NftCollectionIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<NftCollectionSetInput>
	/** filter the rows which have to be updated */
	readonly where: NftCollectionBoolExp
}

/** aggregate varPop on columns */
export type NftCollectionVarPopFields = {
	readonly __typename?: 'NftCollectionVarPopFields'
	readonly max?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "nft_collection" */
export type NftCollectionVarPopOrderBy = {
	readonly max?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type NftCollectionVarSampFields = {
	readonly __typename?: 'NftCollectionVarSampFields'
	readonly max?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "nft_collection" */
export type NftCollectionVarSampOrderBy = {
	readonly max?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type NftCollectionVarianceFields = {
	readonly __typename?: 'NftCollectionVarianceFields'
	readonly max?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "nft_collection" */
export type NftCollectionVarianceOrderBy = {
	readonly max?: InputMaybe<OrderBy>
}

/** unique or primary key constraints on table "nft" */
export enum NftConstraint {
	/** unique or primary key constraint on columns "id" */
	Pk_8f46897c58e23b0e7bf6c8e56b0 = 'PK_8f46897c58e23b0e7bf6c8e56b0',
}

/** input type for inserting data into table "nft" */
export type NftInsertInput = {
	readonly battlepassNfts?: InputMaybe<BattlepassNftArrRelInsertInput>
	readonly collectionId?: InputMaybe<Scalars['String']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<IdentityObjRelInsertInput>
	readonly image?: InputMaybe<Scalars['String']>
	readonly metadata?: InputMaybe<Scalars['String']>
	readonly metadataIsFrozen?: InputMaybe<Scalars['Boolean']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly nftCollection?: InputMaybe<NftCollectionObjRelInsertInput>
	readonly ownerId?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type NftMaxFields = {
	readonly __typename?: 'NftMaxFields'
	readonly collectionId?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly ownerId?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "nft" */
export type NftMaxOrderBy = {
	readonly collectionId?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly image?: InputMaybe<OrderBy>
	readonly metadata?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly ownerId?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type NftMinFields = {
	readonly __typename?: 'NftMinFields'
	readonly collectionId?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly ownerId?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "nft" */
export type NftMinOrderBy = {
	readonly collectionId?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly image?: InputMaybe<OrderBy>
	readonly metadata?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly ownerId?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "nft" */
export type NftMutationResponse = {
	readonly __typename?: 'NftMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Nft>
}

/** input type for inserting object relation for remote table "nft" */
export type NftObjRelInsertInput = {
	readonly data: NftInsertInput
	/** upsert condition */
	readonly onConflict?: InputMaybe<NftOnConflict>
}

/** on_conflict condition type for table "nft" */
export type NftOnConflict = {
	readonly constraint: NftConstraint
	readonly updateColumns?: ReadonlyArray<NftUpdateColumn>
	readonly where?: InputMaybe<NftBoolExp>
}

/** Ordering options when selecting data from "nft". */
export type NftOrderBy = {
	readonly battlepassNftsAggregate?: InputMaybe<BattlepassNftAggregateOrderBy>
	readonly collectionId?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentityOrderBy>
	readonly image?: InputMaybe<OrderBy>
	readonly metadata?: InputMaybe<OrderBy>
	readonly metadataIsFrozen?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly nftCollection?: InputMaybe<NftCollectionOrderBy>
	readonly ownerId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: nft */
export type NftPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "nft" */
export enum NftSelectColumn {
	/** column name */
	CollectionId = 'collectionId',
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	Image = 'image',
	/** column name */
	Metadata = 'metadata',
	/** column name */
	MetadataIsFrozen = 'metadataIsFrozen',
	/** column name */
	Name = 'name',
	/** column name */
	OwnerId = 'ownerId',
}

/** select "nftAggregateBoolExpBool_andArgumentsColumns" columns of table "nft" */
export enum NftSelectColumnNftAggregateBoolExpBool_AndArgumentsColumns {
	/** column name */
	MetadataIsFrozen = 'metadataIsFrozen',
}

/** select "nftAggregateBoolExpBool_orArgumentsColumns" columns of table "nft" */
export enum NftSelectColumnNftAggregateBoolExpBool_OrArgumentsColumns {
	/** column name */
	MetadataIsFrozen = 'metadataIsFrozen',
}

/** input type for updating data in table "nft" */
export type NftSetInput = {
	readonly collectionId?: InputMaybe<Scalars['String']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly metadata?: InputMaybe<Scalars['String']>
	readonly metadataIsFrozen?: InputMaybe<Scalars['Boolean']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly ownerId?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "nft" */
export type NftStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: NftStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type NftStreamCursorValueInput = {
	readonly collectionId?: InputMaybe<Scalars['String']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly metadata?: InputMaybe<Scalars['String']>
	readonly metadataIsFrozen?: InputMaybe<Scalars['Boolean']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly ownerId?: InputMaybe<Scalars['String']>
}

/** update columns of table "nft" */
export enum NftUpdateColumn {
	/** column name */
	CollectionId = 'collectionId',
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	Image = 'image',
	/** column name */
	Metadata = 'metadata',
	/** column name */
	MetadataIsFrozen = 'metadataIsFrozen',
	/** column name */
	Name = 'name',
	/** column name */
	OwnerId = 'ownerId',
}

export type NftUpdates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<NftSetInput>
	/** filter the rows which have to be updated */
	readonly where: NftBoolExp
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['numeric']>
	readonly _gt?: InputMaybe<Scalars['numeric']>
	readonly _gte?: InputMaybe<Scalars['numeric']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['numeric']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['numeric']>
	readonly _lte?: InputMaybe<Scalars['numeric']>
	readonly _neq?: InputMaybe<Scalars['numeric']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['numeric']>>
}

/** column ordering options */
export enum OrderBy {
	/** in ascending order, nulls last */
	Asc = 'ASC',
	/** in ascending order, nulls first */
	AscNullsFirst = 'ASC_NULLS_FIRST',
	/** in ascending order, nulls last */
	AscNullsLast = 'ASC_NULLS_LAST',
	/** in descending order, nulls first */
	Desc = 'DESC',
	/** in descending order, nulls first */
	DescNullsFirst = 'DESC_NULLS_FIRST',
	/** in descending order, nulls last */
	DescNullsLast = 'DESC_NULLS_LAST',
}

/** columns and relationships of "organization" */
export type Organization = {
	readonly __typename?: 'Organization'
	readonly accessModel: Scalars['String']
	/** An array relationship */
	readonly battlepasses: ReadonlyArray<Battlepass>
	/** An aggregate relationship */
	readonly battlepassesAggregate: BattlepassAggregate
	/** An array relationship */
	readonly campaigns: ReadonlyArray<Campaign>
	/** An aggregate relationship */
	readonly campaignsAggregate: CampaignAggregate
	readonly cid: Scalars['String']
	readonly createdAtBlock: Scalars['Int']
	readonly creator: Scalars['String']
	readonly creatorIdentityId?: Maybe<Scalars['String']>
	readonly deposit: Scalars['numeric']
	readonly description: Scalars['String']
	readonly email: Scalars['String']
	readonly feeModel: Scalars['String']
	readonly govCurrency: Scalars['String']
	readonly header: Scalars['String']
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	/** An object relationship */
	readonly identityByCreatorIdentityId?: Maybe<Identity>
	/** An object relationship */
	readonly identityByTreasuryIdentityId?: Maybe<Identity>
	readonly location: Scalars['String']
	readonly logo: Scalars['String']
	readonly memberLimit: Scalars['Int']
	readonly membershipFee?: Maybe<Scalars['numeric']>
	readonly name: Scalars['String']
	/** An array relationship */
	readonly organizationMembers: ReadonlyArray<OrganizationMember>
	/** An aggregate relationship */
	readonly organizationMembersAggregate: OrganizationMemberAggregate
	readonly payCurrency: Scalars['String']
	readonly prime: Scalars['String']
	readonly primeIdentityId?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly proposals: ReadonlyArray<Proposal>
	/** An aggregate relationship */
	readonly proposalsAggregate: ProposalAggregate
	readonly repo: Scalars['String']
	readonly slug: Scalars['String']
	readonly state: Scalars['String']
	readonly tags: Scalars['_text']
	readonly treasury: Scalars['String']
	readonly treasuryIdentityId?: Maybe<Scalars['String']>
	readonly type: Scalars['String']
	readonly updatedAtBlock: Scalars['Int']
	readonly url: Scalars['String']
	readonly website: Scalars['String']
}

/** columns and relationships of "organization" */
export type OrganizationBattlepassesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassOrderBy>>
	where?: InputMaybe<BattlepassBoolExp>
}

/** columns and relationships of "organization" */
export type OrganizationBattlepassesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassOrderBy>>
	where?: InputMaybe<BattlepassBoolExp>
}

/** columns and relationships of "organization" */
export type OrganizationCampaignsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignOrderBy>>
	where?: InputMaybe<CampaignBoolExp>
}

/** columns and relationships of "organization" */
export type OrganizationCampaignsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignOrderBy>>
	where?: InputMaybe<CampaignBoolExp>
}

/** columns and relationships of "organization" */
export type OrganizationOrganizationMembersArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationMemberSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationMemberOrderBy>>
	where?: InputMaybe<OrganizationMemberBoolExp>
}

/** columns and relationships of "organization" */
export type OrganizationOrganizationMembersAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationMemberSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationMemberOrderBy>>
	where?: InputMaybe<OrganizationMemberBoolExp>
}

/** columns and relationships of "organization" */
export type OrganizationProposalsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalOrderBy>>
	where?: InputMaybe<ProposalBoolExp>
}

/** columns and relationships of "organization" */
export type OrganizationProposalsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalOrderBy>>
	where?: InputMaybe<ProposalBoolExp>
}

/** aggregated selection of "organization" */
export type OrganizationAggregate = {
	readonly __typename?: 'OrganizationAggregate'
	readonly aggregate?: Maybe<OrganizationAggregateFields>
	readonly nodes: ReadonlyArray<Organization>
}

export type OrganizationAggregateBoolExp = {
	readonly count?: InputMaybe<OrganizationAggregateBoolExpCount>
}

/** aggregate fields of "organization" */
export type OrganizationAggregateFields = {
	readonly __typename?: 'OrganizationAggregateFields'
	readonly avg?: Maybe<OrganizationAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<OrganizationMaxFields>
	readonly min?: Maybe<OrganizationMinFields>
	readonly stddev?: Maybe<OrganizationStddevFields>
	readonly stddevPop?: Maybe<OrganizationStddevPopFields>
	readonly stddevSamp?: Maybe<OrganizationStddevSampFields>
	readonly sum?: Maybe<OrganizationSumFields>
	readonly varPop?: Maybe<OrganizationVarPopFields>
	readonly varSamp?: Maybe<OrganizationVarSampFields>
	readonly variance?: Maybe<OrganizationVarianceFields>
}

/** aggregate fields of "organization" */
export type OrganizationAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<OrganizationSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "organization" */
export type OrganizationAggregateOrderBy = {
	readonly avg?: InputMaybe<OrganizationAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrganizationMaxOrderBy>
	readonly min?: InputMaybe<OrganizationMinOrderBy>
	readonly stddev?: InputMaybe<OrganizationStddevOrderBy>
	readonly stddevPop?: InputMaybe<OrganizationStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<OrganizationStddevSampOrderBy>
	readonly sum?: InputMaybe<OrganizationSumOrderBy>
	readonly varPop?: InputMaybe<OrganizationVarPopOrderBy>
	readonly varSamp?: InputMaybe<OrganizationVarSampOrderBy>
	readonly variance?: InputMaybe<OrganizationVarianceOrderBy>
}

/** input type for inserting array relation for remote table "organization" */
export type OrganizationArrRelInsertInput = {
	readonly data: ReadonlyArray<OrganizationInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<OrganizationOnConflict>
}

/** aggregate avg on columns */
export type OrganizationAvgFields = {
	readonly __typename?: 'OrganizationAvgFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly memberLimit?: Maybe<Scalars['Float']>
	readonly membershipFee?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "organization" */
export type OrganizationAvgOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly memberLimit?: InputMaybe<OrderBy>
	readonly membershipFee?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type OrganizationBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<OrganizationBoolExp>>
	readonly _not?: InputMaybe<OrganizationBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<OrganizationBoolExp>>
	readonly accessModel?: InputMaybe<StringComparisonExp>
	readonly battlepasses?: InputMaybe<BattlepassBoolExp>
	readonly battlepassesAggregate?: InputMaybe<BattlepassAggregateBoolExp>
	readonly campaigns?: InputMaybe<CampaignBoolExp>
	readonly campaignsAggregate?: InputMaybe<CampaignAggregateBoolExp>
	readonly cid?: InputMaybe<StringComparisonExp>
	readonly createdAtBlock?: InputMaybe<IntComparisonExp>
	readonly creator?: InputMaybe<StringComparisonExp>
	readonly creatorIdentityId?: InputMaybe<StringComparisonExp>
	readonly deposit?: InputMaybe<NumericComparisonExp>
	readonly description?: InputMaybe<StringComparisonExp>
	readonly email?: InputMaybe<StringComparisonExp>
	readonly feeModel?: InputMaybe<StringComparisonExp>
	readonly govCurrency?: InputMaybe<StringComparisonExp>
	readonly header?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly identity?: InputMaybe<IdentityBoolExp>
	readonly identityByCreatorIdentityId?: InputMaybe<IdentityBoolExp>
	readonly identityByTreasuryIdentityId?: InputMaybe<IdentityBoolExp>
	readonly location?: InputMaybe<StringComparisonExp>
	readonly logo?: InputMaybe<StringComparisonExp>
	readonly memberLimit?: InputMaybe<IntComparisonExp>
	readonly membershipFee?: InputMaybe<NumericComparisonExp>
	readonly name?: InputMaybe<StringComparisonExp>
	readonly organizationMembers?: InputMaybe<OrganizationMemberBoolExp>
	readonly organizationMembersAggregate?: InputMaybe<OrganizationMemberAggregateBoolExp>
	readonly payCurrency?: InputMaybe<StringComparisonExp>
	readonly prime?: InputMaybe<StringComparisonExp>
	readonly primeIdentityId?: InputMaybe<StringComparisonExp>
	readonly proposals?: InputMaybe<ProposalBoolExp>
	readonly proposalsAggregate?: InputMaybe<ProposalAggregateBoolExp>
	readonly repo?: InputMaybe<StringComparisonExp>
	readonly slug?: InputMaybe<StringComparisonExp>
	readonly state?: InputMaybe<StringComparisonExp>
	readonly tags?: InputMaybe<_TextComparisonExp>
	readonly treasury?: InputMaybe<StringComparisonExp>
	readonly treasuryIdentityId?: InputMaybe<StringComparisonExp>
	readonly type?: InputMaybe<StringComparisonExp>
	readonly updatedAtBlock?: InputMaybe<IntComparisonExp>
	readonly url?: InputMaybe<StringComparisonExp>
	readonly website?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "organization" */
export enum OrganizationConstraint {
	/** unique or primary key constraint on columns "slug" */
	IdxA08804baa7c5d5427067c49a31 = 'IDX_a08804baa7c5d5427067c49a31',
	/** unique or primary key constraint on columns "id" */
	Pk_472c1f99a32def1b0abb219cd67 = 'PK_472c1f99a32def1b0abb219cd67',
}

export type OrganizationFeatures = {
	readonly ORGANIZATION_PAGE_SHOW_FILTERS: Scalars['Boolean']
	readonly ORGANIZATION_PAGE_SHOW_SEARCH: Scalars['Boolean']
	readonly ORGANIZATION_PAGE_SHOW_SORT: Scalars['Boolean']
}

/** input type for incrementing numeric columns in table "organization" */
export type OrganizationIncInput = {
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly memberLimit?: InputMaybe<Scalars['Int']>
	readonly membershipFee?: InputMaybe<Scalars['numeric']>
	readonly updatedAtBlock?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "organization" */
export type OrganizationInsertInput = {
	readonly accessModel?: InputMaybe<Scalars['String']>
	readonly battlepasses?: InputMaybe<BattlepassArrRelInsertInput>
	readonly campaigns?: InputMaybe<CampaignArrRelInsertInput>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creatorIdentityId?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly feeModel?: InputMaybe<Scalars['String']>
	readonly govCurrency?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<IdentityObjRelInsertInput>
	readonly identityByCreatorIdentityId?: InputMaybe<IdentityObjRelInsertInput>
	readonly identityByTreasuryIdentityId?: InputMaybe<IdentityObjRelInsertInput>
	readonly location?: InputMaybe<Scalars['String']>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly memberLimit?: InputMaybe<Scalars['Int']>
	readonly membershipFee?: InputMaybe<Scalars['numeric']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly organizationMembers?: InputMaybe<OrganizationMemberArrRelInsertInput>
	readonly payCurrency?: InputMaybe<Scalars['String']>
	readonly prime?: InputMaybe<Scalars['String']>
	readonly primeIdentityId?: InputMaybe<Scalars['String']>
	readonly proposals?: InputMaybe<ProposalArrRelInsertInput>
	readonly repo?: InputMaybe<Scalars['String']>
	readonly slug?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly tags?: InputMaybe<Scalars['_text']>
	readonly treasury?: InputMaybe<Scalars['String']>
	readonly treasuryIdentityId?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<Scalars['String']>
	readonly updatedAtBlock?: InputMaybe<Scalars['Int']>
	readonly url?: InputMaybe<Scalars['String']>
	readonly website?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type OrganizationMaxFields = {
	readonly __typename?: 'OrganizationMaxFields'
	readonly accessModel?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAtBlock?: Maybe<Scalars['Int']>
	readonly creator?: Maybe<Scalars['String']>
	readonly creatorIdentityId?: Maybe<Scalars['String']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly description?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly feeModel?: Maybe<Scalars['String']>
	readonly govCurrency?: Maybe<Scalars['String']>
	readonly header?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly location?: Maybe<Scalars['String']>
	readonly logo?: Maybe<Scalars['String']>
	readonly memberLimit?: Maybe<Scalars['Int']>
	readonly membershipFee?: Maybe<Scalars['numeric']>
	readonly name?: Maybe<Scalars['String']>
	readonly payCurrency?: Maybe<Scalars['String']>
	readonly prime?: Maybe<Scalars['String']>
	readonly primeIdentityId?: Maybe<Scalars['String']>
	readonly repo?: Maybe<Scalars['String']>
	readonly slug?: Maybe<Scalars['String']>
	readonly state?: Maybe<Scalars['String']>
	readonly treasury?: Maybe<Scalars['String']>
	readonly treasuryIdentityId?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['String']>
	readonly updatedAtBlock?: Maybe<Scalars['Int']>
	readonly url?: Maybe<Scalars['String']>
	readonly website?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "organization" */
export type OrganizationMaxOrderBy = {
	readonly accessModel?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly creator?: InputMaybe<OrderBy>
	readonly creatorIdentityId?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly email?: InputMaybe<OrderBy>
	readonly feeModel?: InputMaybe<OrderBy>
	readonly govCurrency?: InputMaybe<OrderBy>
	readonly header?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly location?: InputMaybe<OrderBy>
	readonly logo?: InputMaybe<OrderBy>
	readonly memberLimit?: InputMaybe<OrderBy>
	readonly membershipFee?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly payCurrency?: InputMaybe<OrderBy>
	readonly prime?: InputMaybe<OrderBy>
	readonly primeIdentityId?: InputMaybe<OrderBy>
	readonly repo?: InputMaybe<OrderBy>
	readonly slug?: InputMaybe<OrderBy>
	readonly state?: InputMaybe<OrderBy>
	readonly treasury?: InputMaybe<OrderBy>
	readonly treasuryIdentityId?: InputMaybe<OrderBy>
	readonly type?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
	readonly url?: InputMaybe<OrderBy>
	readonly website?: InputMaybe<OrderBy>
}

/** columns and relationships of "organization_member" */
export type OrganizationMember = {
	readonly __typename?: 'OrganizationMember'
	readonly address: Scalars['String']
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly identityId?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly organization?: Maybe<Organization>
	readonly organizationId?: Maybe<Scalars['String']>
	readonly state: Scalars['String']
}

/** aggregated selection of "organization_member" */
export type OrganizationMemberAggregate = {
	readonly __typename?: 'OrganizationMemberAggregate'
	readonly aggregate?: Maybe<OrganizationMemberAggregateFields>
	readonly nodes: ReadonlyArray<OrganizationMember>
}

export type OrganizationMemberAggregateBoolExp = {
	readonly count?: InputMaybe<OrganizationMemberAggregateBoolExpCount>
}

/** aggregate fields of "organization_member" */
export type OrganizationMemberAggregateFields = {
	readonly __typename?: 'OrganizationMemberAggregateFields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<OrganizationMemberMaxFields>
	readonly min?: Maybe<OrganizationMemberMinFields>
}

/** aggregate fields of "organization_member" */
export type OrganizationMemberAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<OrganizationMemberSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "organization_member" */
export type OrganizationMemberAggregateOrderBy = {
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrganizationMemberMaxOrderBy>
	readonly min?: InputMaybe<OrganizationMemberMinOrderBy>
}

/** input type for inserting array relation for remote table "organization_member" */
export type OrganizationMemberArrRelInsertInput = {
	readonly data: ReadonlyArray<OrganizationMemberInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<OrganizationMemberOnConflict>
}

/** Boolean expression to filter rows from the table "organization_member". All fields are combined with a logical 'AND'. */
export type OrganizationMemberBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<OrganizationMemberBoolExp>>
	readonly _not?: InputMaybe<OrganizationMemberBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<OrganizationMemberBoolExp>>
	readonly address?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly identity?: InputMaybe<IdentityBoolExp>
	readonly identityId?: InputMaybe<StringComparisonExp>
	readonly organization?: InputMaybe<OrganizationBoolExp>
	readonly organizationId?: InputMaybe<StringComparisonExp>
	readonly state?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "organization_member" */
export enum OrganizationMemberConstraint {
	/** unique or primary key constraint on columns "id" */
	Pk_81dbbb093cbe0539c170f3d1484 = 'PK_81dbbb093cbe0539c170f3d1484',
}

/** input type for inserting data into table "organization_member" */
export type OrganizationMemberInsertInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<IdentityObjRelInsertInput>
	readonly identityId?: InputMaybe<Scalars['String']>
	readonly organization?: InputMaybe<OrganizationObjRelInsertInput>
	readonly organizationId?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type OrganizationMemberMaxFields = {
	readonly __typename?: 'OrganizationMemberMaxFields'
	readonly address?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly identityId?: Maybe<Scalars['String']>
	readonly organizationId?: Maybe<Scalars['String']>
	readonly state?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "organization_member" */
export type OrganizationMemberMaxOrderBy = {
	readonly address?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly organizationId?: InputMaybe<OrderBy>
	readonly state?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type OrganizationMemberMinFields = {
	readonly __typename?: 'OrganizationMemberMinFields'
	readonly address?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly identityId?: Maybe<Scalars['String']>
	readonly organizationId?: Maybe<Scalars['String']>
	readonly state?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "organization_member" */
export type OrganizationMemberMinOrderBy = {
	readonly address?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly organizationId?: InputMaybe<OrderBy>
	readonly state?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "organization_member" */
export type OrganizationMemberMutationResponse = {
	readonly __typename?: 'OrganizationMemberMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<OrganizationMember>
}

/** on_conflict condition type for table "organization_member" */
export type OrganizationMemberOnConflict = {
	readonly constraint: OrganizationMemberConstraint
	readonly updateColumns?: ReadonlyArray<OrganizationMemberUpdateColumn>
	readonly where?: InputMaybe<OrganizationMemberBoolExp>
}

/** Ordering options when selecting data from "organization_member". */
export type OrganizationMemberOrderBy = {
	readonly address?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentityOrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly organization?: InputMaybe<OrganizationOrderBy>
	readonly organizationId?: InputMaybe<OrderBy>
	readonly state?: InputMaybe<OrderBy>
}

/** primary key columns input for table: organization_member */
export type OrganizationMemberPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "organization_member" */
export enum OrganizationMemberSelectColumn {
	/** column name */
	Address = 'address',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
	/** column name */
	OrganizationId = 'organizationId',
	/** column name */
	State = 'state',
}

/** input type for updating data in table "organization_member" */
export type OrganizationMemberSetInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identityId?: InputMaybe<Scalars['String']>
	readonly organizationId?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "organization_member" */
export type OrganizationMemberStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: OrganizationMemberStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type OrganizationMemberStreamCursorValueInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identityId?: InputMaybe<Scalars['String']>
	readonly organizationId?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
}

/** update columns of table "organization_member" */
export enum OrganizationMemberUpdateColumn {
	/** column name */
	Address = 'address',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
	/** column name */
	OrganizationId = 'organizationId',
	/** column name */
	State = 'state',
}

export type OrganizationMemberUpdates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<OrganizationMemberSetInput>
	/** filter the rows which have to be updated */
	readonly where: OrganizationMemberBoolExp
}

/** columns and relationships of "organization_metadata" */
export type OrganizationMetadata = {
	readonly __typename?: 'OrganizationMetadata'
	readonly description: Scalars['String']
	readonly email: Scalars['String']
	readonly header: Scalars['String']
	readonly id: Scalars['String']
	readonly logo: Scalars['String']
	readonly name: Scalars['String']
	readonly repo: Scalars['String']
	readonly website: Scalars['String']
}

/** aggregated selection of "organization_metadata" */
export type OrganizationMetadataAggregate = {
	readonly __typename?: 'OrganizationMetadataAggregate'
	readonly aggregate?: Maybe<OrganizationMetadataAggregateFields>
	readonly nodes: ReadonlyArray<OrganizationMetadata>
}

/** aggregate fields of "organization_metadata" */
export type OrganizationMetadataAggregateFields = {
	readonly __typename?: 'OrganizationMetadataAggregateFields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<OrganizationMetadataMaxFields>
	readonly min?: Maybe<OrganizationMetadataMinFields>
}

/** aggregate fields of "organization_metadata" */
export type OrganizationMetadataAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<OrganizationMetadataSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "organization_metadata". All fields are combined with a logical 'AND'. */
export type OrganizationMetadataBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<OrganizationMetadataBoolExp>>
	readonly _not?: InputMaybe<OrganizationMetadataBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<OrganizationMetadataBoolExp>>
	readonly description?: InputMaybe<StringComparisonExp>
	readonly email?: InputMaybe<StringComparisonExp>
	readonly header?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly logo?: InputMaybe<StringComparisonExp>
	readonly name?: InputMaybe<StringComparisonExp>
	readonly repo?: InputMaybe<StringComparisonExp>
	readonly website?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "organization_metadata" */
export enum OrganizationMetadataConstraint {
	/** unique or primary key constraint on columns "id" */
	Pk_2fecc2ceb81f30a7f46be802cbd = 'PK_2fecc2ceb81f30a7f46be802cbd',
}

/** input type for inserting data into table "organization_metadata" */
export type OrganizationMetadataInsertInput = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly repo?: InputMaybe<Scalars['String']>
	readonly website?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type OrganizationMetadataMaxFields = {
	readonly __typename?: 'OrganizationMetadataMaxFields'
	readonly description?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly header?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly logo?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly repo?: Maybe<Scalars['String']>
	readonly website?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type OrganizationMetadataMinFields = {
	readonly __typename?: 'OrganizationMetadataMinFields'
	readonly description?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly header?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly logo?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly repo?: Maybe<Scalars['String']>
	readonly website?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "organization_metadata" */
export type OrganizationMetadataMutationResponse = {
	readonly __typename?: 'OrganizationMetadataMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<OrganizationMetadata>
}

/** on_conflict condition type for table "organization_metadata" */
export type OrganizationMetadataOnConflict = {
	readonly constraint: OrganizationMetadataConstraint
	readonly updateColumns?: ReadonlyArray<OrganizationMetadataUpdateColumn>
	readonly where?: InputMaybe<OrganizationMetadataBoolExp>
}

/** Ordering options when selecting data from "organization_metadata". */
export type OrganizationMetadataOrderBy = {
	readonly description?: InputMaybe<OrderBy>
	readonly email?: InputMaybe<OrderBy>
	readonly header?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly logo?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly repo?: InputMaybe<OrderBy>
	readonly website?: InputMaybe<OrderBy>
}

/** primary key columns input for table: organization_metadata */
export type OrganizationMetadataPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "organization_metadata" */
export enum OrganizationMetadataSelectColumn {
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
	Website = 'website',
}

/** input type for updating data in table "organization_metadata" */
export type OrganizationMetadataSetInput = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly repo?: InputMaybe<Scalars['String']>
	readonly website?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "organization_metadata" */
export type OrganizationMetadataStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: OrganizationMetadataStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type OrganizationMetadataStreamCursorValueInput = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly repo?: InputMaybe<Scalars['String']>
	readonly website?: InputMaybe<Scalars['String']>
}

/** update columns of table "organization_metadata" */
export enum OrganizationMetadataUpdateColumn {
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
	Website = 'website',
}

export type OrganizationMetadataUpdates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<OrganizationMetadataSetInput>
	/** filter the rows which have to be updated */
	readonly where: OrganizationMetadataBoolExp
}

/** aggregate min on columns */
export type OrganizationMinFields = {
	readonly __typename?: 'OrganizationMinFields'
	readonly accessModel?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAtBlock?: Maybe<Scalars['Int']>
	readonly creator?: Maybe<Scalars['String']>
	readonly creatorIdentityId?: Maybe<Scalars['String']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly description?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly feeModel?: Maybe<Scalars['String']>
	readonly govCurrency?: Maybe<Scalars['String']>
	readonly header?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly location?: Maybe<Scalars['String']>
	readonly logo?: Maybe<Scalars['String']>
	readonly memberLimit?: Maybe<Scalars['Int']>
	readonly membershipFee?: Maybe<Scalars['numeric']>
	readonly name?: Maybe<Scalars['String']>
	readonly payCurrency?: Maybe<Scalars['String']>
	readonly prime?: Maybe<Scalars['String']>
	readonly primeIdentityId?: Maybe<Scalars['String']>
	readonly repo?: Maybe<Scalars['String']>
	readonly slug?: Maybe<Scalars['String']>
	readonly state?: Maybe<Scalars['String']>
	readonly treasury?: Maybe<Scalars['String']>
	readonly treasuryIdentityId?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['String']>
	readonly updatedAtBlock?: Maybe<Scalars['Int']>
	readonly url?: Maybe<Scalars['String']>
	readonly website?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "organization" */
export type OrganizationMinOrderBy = {
	readonly accessModel?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly creator?: InputMaybe<OrderBy>
	readonly creatorIdentityId?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly email?: InputMaybe<OrderBy>
	readonly feeModel?: InputMaybe<OrderBy>
	readonly govCurrency?: InputMaybe<OrderBy>
	readonly header?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly location?: InputMaybe<OrderBy>
	readonly logo?: InputMaybe<OrderBy>
	readonly memberLimit?: InputMaybe<OrderBy>
	readonly membershipFee?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly payCurrency?: InputMaybe<OrderBy>
	readonly prime?: InputMaybe<OrderBy>
	readonly primeIdentityId?: InputMaybe<OrderBy>
	readonly repo?: InputMaybe<OrderBy>
	readonly slug?: InputMaybe<OrderBy>
	readonly state?: InputMaybe<OrderBy>
	readonly treasury?: InputMaybe<OrderBy>
	readonly treasuryIdentityId?: InputMaybe<OrderBy>
	readonly type?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
	readonly url?: InputMaybe<OrderBy>
	readonly website?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "organization" */
export type OrganizationMutationResponse = {
	readonly __typename?: 'OrganizationMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Organization>
}

/** input type for inserting object relation for remote table "organization" */
export type OrganizationObjRelInsertInput = {
	readonly data: OrganizationInsertInput
	/** upsert condition */
	readonly onConflict?: InputMaybe<OrganizationOnConflict>
}

/** on_conflict condition type for table "organization" */
export type OrganizationOnConflict = {
	readonly constraint: OrganizationConstraint
	readonly updateColumns?: ReadonlyArray<OrganizationUpdateColumn>
	readonly where?: InputMaybe<OrganizationBoolExp>
}

/** Ordering options when selecting data from "organization". */
export type OrganizationOrderBy = {
	readonly accessModel?: InputMaybe<OrderBy>
	readonly battlepassesAggregate?: InputMaybe<BattlepassAggregateOrderBy>
	readonly campaignsAggregate?: InputMaybe<CampaignAggregateOrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly creator?: InputMaybe<OrderBy>
	readonly creatorIdentityId?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly email?: InputMaybe<OrderBy>
	readonly feeModel?: InputMaybe<OrderBy>
	readonly govCurrency?: InputMaybe<OrderBy>
	readonly header?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentityOrderBy>
	readonly identityByCreatorIdentityId?: InputMaybe<IdentityOrderBy>
	readonly identityByTreasuryIdentityId?: InputMaybe<IdentityOrderBy>
	readonly location?: InputMaybe<OrderBy>
	readonly logo?: InputMaybe<OrderBy>
	readonly memberLimit?: InputMaybe<OrderBy>
	readonly membershipFee?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly organizationMembersAggregate?: InputMaybe<OrganizationMemberAggregateOrderBy>
	readonly payCurrency?: InputMaybe<OrderBy>
	readonly prime?: InputMaybe<OrderBy>
	readonly primeIdentityId?: InputMaybe<OrderBy>
	readonly proposalsAggregate?: InputMaybe<ProposalAggregateOrderBy>
	readonly repo?: InputMaybe<OrderBy>
	readonly slug?: InputMaybe<OrderBy>
	readonly state?: InputMaybe<OrderBy>
	readonly tags?: InputMaybe<OrderBy>
	readonly treasury?: InputMaybe<OrderBy>
	readonly treasuryIdentityId?: InputMaybe<OrderBy>
	readonly type?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
	readonly url?: InputMaybe<OrderBy>
	readonly website?: InputMaybe<OrderBy>
}

/** primary key columns input for table: organization */
export type OrganizationPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "organization" */
export enum OrganizationSelectColumn {
	/** column name */
	AccessModel = 'accessModel',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAtBlock = 'createdAtBlock',
	/** column name */
	Creator = 'creator',
	/** column name */
	CreatorIdentityId = 'creatorIdentityId',
	/** column name */
	Deposit = 'deposit',
	/** column name */
	Description = 'description',
	/** column name */
	Email = 'email',
	/** column name */
	FeeModel = 'feeModel',
	/** column name */
	GovCurrency = 'govCurrency',
	/** column name */
	Header = 'header',
	/** column name */
	Id = 'id',
	/** column name */
	Location = 'location',
	/** column name */
	Logo = 'logo',
	/** column name */
	MemberLimit = 'memberLimit',
	/** column name */
	MembershipFee = 'membershipFee',
	/** column name */
	Name = 'name',
	/** column name */
	PayCurrency = 'payCurrency',
	/** column name */
	Prime = 'prime',
	/** column name */
	PrimeIdentityId = 'primeIdentityId',
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
	TreasuryIdentityId = 'treasuryIdentityId',
	/** column name */
	Type = 'type',
	/** column name */
	UpdatedAtBlock = 'updatedAtBlock',
	/** column name */
	Url = 'url',
	/** column name */
	Website = 'website',
}

/** input type for updating data in table "organization" */
export type OrganizationSetInput = {
	readonly accessModel?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creatorIdentityId?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly feeModel?: InputMaybe<Scalars['String']>
	readonly govCurrency?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly location?: InputMaybe<Scalars['String']>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly memberLimit?: InputMaybe<Scalars['Int']>
	readonly membershipFee?: InputMaybe<Scalars['numeric']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly payCurrency?: InputMaybe<Scalars['String']>
	readonly prime?: InputMaybe<Scalars['String']>
	readonly primeIdentityId?: InputMaybe<Scalars['String']>
	readonly repo?: InputMaybe<Scalars['String']>
	readonly slug?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly tags?: InputMaybe<Scalars['_text']>
	readonly treasury?: InputMaybe<Scalars['String']>
	readonly treasuryIdentityId?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<Scalars['String']>
	readonly updatedAtBlock?: InputMaybe<Scalars['Int']>
	readonly url?: InputMaybe<Scalars['String']>
	readonly website?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type OrganizationStddevFields = {
	readonly __typename?: 'OrganizationStddevFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly memberLimit?: Maybe<Scalars['Float']>
	readonly membershipFee?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "organization" */
export type OrganizationStddevOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly memberLimit?: InputMaybe<OrderBy>
	readonly membershipFee?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type OrganizationStddevPopFields = {
	readonly __typename?: 'OrganizationStddevPopFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly memberLimit?: Maybe<Scalars['Float']>
	readonly membershipFee?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "organization" */
export type OrganizationStddevPopOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly memberLimit?: InputMaybe<OrderBy>
	readonly membershipFee?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type OrganizationStddevSampFields = {
	readonly __typename?: 'OrganizationStddevSampFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly memberLimit?: Maybe<Scalars['Float']>
	readonly membershipFee?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "organization" */
export type OrganizationStddevSampOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly memberLimit?: InputMaybe<OrderBy>
	readonly membershipFee?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "organization" */
export type OrganizationStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: OrganizationStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type OrganizationStreamCursorValueInput = {
	readonly accessModel?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creatorIdentityId?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly feeModel?: InputMaybe<Scalars['String']>
	readonly govCurrency?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly location?: InputMaybe<Scalars['String']>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly memberLimit?: InputMaybe<Scalars['Int']>
	readonly membershipFee?: InputMaybe<Scalars['numeric']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly payCurrency?: InputMaybe<Scalars['String']>
	readonly prime?: InputMaybe<Scalars['String']>
	readonly primeIdentityId?: InputMaybe<Scalars['String']>
	readonly repo?: InputMaybe<Scalars['String']>
	readonly slug?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly tags?: InputMaybe<Scalars['_text']>
	readonly treasury?: InputMaybe<Scalars['String']>
	readonly treasuryIdentityId?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<Scalars['String']>
	readonly updatedAtBlock?: InputMaybe<Scalars['Int']>
	readonly url?: InputMaybe<Scalars['String']>
	readonly website?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type OrganizationSumFields = {
	readonly __typename?: 'OrganizationSumFields'
	readonly createdAtBlock?: Maybe<Scalars['Int']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly memberLimit?: Maybe<Scalars['Int']>
	readonly membershipFee?: Maybe<Scalars['numeric']>
	readonly updatedAtBlock?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "organization" */
export type OrganizationSumOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly memberLimit?: InputMaybe<OrderBy>
	readonly membershipFee?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** update columns of table "organization" */
export enum OrganizationUpdateColumn {
	/** column name */
	AccessModel = 'accessModel',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAtBlock = 'createdAtBlock',
	/** column name */
	Creator = 'creator',
	/** column name */
	CreatorIdentityId = 'creatorIdentityId',
	/** column name */
	Deposit = 'deposit',
	/** column name */
	Description = 'description',
	/** column name */
	Email = 'email',
	/** column name */
	FeeModel = 'feeModel',
	/** column name */
	GovCurrency = 'govCurrency',
	/** column name */
	Header = 'header',
	/** column name */
	Id = 'id',
	/** column name */
	Location = 'location',
	/** column name */
	Logo = 'logo',
	/** column name */
	MemberLimit = 'memberLimit',
	/** column name */
	MembershipFee = 'membershipFee',
	/** column name */
	Name = 'name',
	/** column name */
	PayCurrency = 'payCurrency',
	/** column name */
	Prime = 'prime',
	/** column name */
	PrimeIdentityId = 'primeIdentityId',
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
	TreasuryIdentityId = 'treasuryIdentityId',
	/** column name */
	Type = 'type',
	/** column name */
	UpdatedAtBlock = 'updatedAtBlock',
	/** column name */
	Url = 'url',
	/** column name */
	Website = 'website',
}

export type OrganizationUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<OrganizationIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<OrganizationSetInput>
	/** filter the rows which have to be updated */
	readonly where: OrganizationBoolExp
}

/** aggregate varPop on columns */
export type OrganizationVarPopFields = {
	readonly __typename?: 'OrganizationVarPopFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly memberLimit?: Maybe<Scalars['Float']>
	readonly membershipFee?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "organization" */
export type OrganizationVarPopOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly memberLimit?: InputMaybe<OrderBy>
	readonly membershipFee?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type OrganizationVarSampFields = {
	readonly __typename?: 'OrganizationVarSampFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly memberLimit?: Maybe<Scalars['Float']>
	readonly membershipFee?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "organization" */
export type OrganizationVarSampOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly memberLimit?: InputMaybe<OrderBy>
	readonly membershipFee?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type OrganizationVarianceFields = {
	readonly __typename?: 'OrganizationVarianceFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly memberLimit?: Maybe<Scalars['Float']>
	readonly membershipFee?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "organization" */
export type OrganizationVarianceOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly memberLimit?: InputMaybe<OrderBy>
	readonly membershipFee?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** columns and relationships of "Payments" */
export type Payments = {
	readonly __typename?: 'Payments'
	/** An object relationship */
	readonly battlepassParticipant?: Maybe<BattlepassParticipants>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id: Scalars['Int']
	readonly participantId?: Maybe<Scalars['Int']>
	readonly paymentToken: Scalars['String']
	readonly updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "Payments" */
export type PaymentsAggregate = {
	readonly __typename?: 'PaymentsAggregate'
	readonly aggregate?: Maybe<PaymentsAggregateFields>
	readonly nodes: ReadonlyArray<Payments>
}

export type PaymentsAggregateBoolExp = {
	readonly count?: InputMaybe<PaymentsAggregateBoolExpCount>
}

/** aggregate fields of "Payments" */
export type PaymentsAggregateFields = {
	readonly __typename?: 'PaymentsAggregateFields'
	readonly avg?: Maybe<PaymentsAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<PaymentsMaxFields>
	readonly min?: Maybe<PaymentsMinFields>
	readonly stddev?: Maybe<PaymentsStddevFields>
	readonly stddevPop?: Maybe<PaymentsStddevPopFields>
	readonly stddevSamp?: Maybe<PaymentsStddevSampFields>
	readonly sum?: Maybe<PaymentsSumFields>
	readonly varPop?: Maybe<PaymentsVarPopFields>
	readonly varSamp?: Maybe<PaymentsVarSampFields>
	readonly variance?: Maybe<PaymentsVarianceFields>
}

/** aggregate fields of "Payments" */
export type PaymentsAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<PaymentsSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "Payments" */
export type PaymentsAggregateOrderBy = {
	readonly avg?: InputMaybe<PaymentsAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<PaymentsMaxOrderBy>
	readonly min?: InputMaybe<PaymentsMinOrderBy>
	readonly stddev?: InputMaybe<PaymentsStddevOrderBy>
	readonly stddevPop?: InputMaybe<PaymentsStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<PaymentsStddevSampOrderBy>
	readonly sum?: InputMaybe<PaymentsSumOrderBy>
	readonly varPop?: InputMaybe<PaymentsVarPopOrderBy>
	readonly varSamp?: InputMaybe<PaymentsVarSampOrderBy>
	readonly variance?: InputMaybe<PaymentsVarianceOrderBy>
}

/** input type for inserting array relation for remote table "Payments" */
export type PaymentsArrRelInsertInput = {
	readonly data: ReadonlyArray<PaymentsInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<PaymentsOnConflict>
}

/** aggregate avg on columns */
export type PaymentsAvgFields = {
	readonly __typename?: 'PaymentsAvgFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "Payments" */
export type PaymentsAvgOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "Payments". All fields are combined with a logical 'AND'. */
export type PaymentsBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<PaymentsBoolExp>>
	readonly _not?: InputMaybe<PaymentsBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<PaymentsBoolExp>>
	readonly battlepassParticipant?: InputMaybe<BattlepassParticipantsBoolExp>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly participantId?: InputMaybe<IntComparisonExp>
	readonly paymentToken?: InputMaybe<StringComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "Payments" */
export enum PaymentsConstraint {
	/** unique or primary key constraint on columns "id" */
	PaymentsPkey = 'Payments_pkey',
}

/** input type for incrementing numeric columns in table "Payments" */
export type PaymentsIncInput = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "Payments" */
export type PaymentsInsertInput = {
	readonly battlepassParticipant?: InputMaybe<BattlepassParticipantsObjRelInsertInput>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
	readonly paymentToken?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type PaymentsMaxFields = {
	readonly __typename?: 'PaymentsMaxFields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly participantId?: Maybe<Scalars['Int']>
	readonly paymentToken?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "Payments" */
export type PaymentsMaxOrderBy = {
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
	readonly paymentToken?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type PaymentsMinFields = {
	readonly __typename?: 'PaymentsMinFields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly participantId?: Maybe<Scalars['Int']>
	readonly paymentToken?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "Payments" */
export type PaymentsMinOrderBy = {
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
	readonly paymentToken?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "Payments" */
export type PaymentsMutationResponse = {
	readonly __typename?: 'PaymentsMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Payments>
}

/** on_conflict condition type for table "Payments" */
export type PaymentsOnConflict = {
	readonly constraint: PaymentsConstraint
	readonly updateColumns?: ReadonlyArray<PaymentsUpdateColumn>
	readonly where?: InputMaybe<PaymentsBoolExp>
}

/** Ordering options when selecting data from "Payments". */
export type PaymentsOrderBy = {
	readonly battlepassParticipant?: InputMaybe<BattlepassParticipantsOrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
	readonly paymentToken?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: Payments */
export type PaymentsPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "Payments" */
export enum PaymentsSelectColumn {
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	ParticipantId = 'participantId',
	/** column name */
	PaymentToken = 'paymentToken',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "Payments" */
export type PaymentsSetInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
	readonly paymentToken?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type PaymentsStddevFields = {
	readonly __typename?: 'PaymentsStddevFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "Payments" */
export type PaymentsStddevOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type PaymentsStddevPopFields = {
	readonly __typename?: 'PaymentsStddevPopFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "Payments" */
export type PaymentsStddevPopOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type PaymentsStddevSampFields = {
	readonly __typename?: 'PaymentsStddevSampFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "Payments" */
export type PaymentsStddevSampOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "Payments" */
export type PaymentsStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: PaymentsStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type PaymentsStreamCursorValueInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
	readonly paymentToken?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type PaymentsSumFields = {
	readonly __typename?: 'PaymentsSumFields'
	readonly id?: Maybe<Scalars['Int']>
	readonly participantId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "Payments" */
export type PaymentsSumOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
}

/** update columns of table "Payments" */
export enum PaymentsUpdateColumn {
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	ParticipantId = 'participantId',
	/** column name */
	PaymentToken = 'paymentToken',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type PaymentsUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<PaymentsIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<PaymentsSetInput>
	/** filter the rows which have to be updated */
	readonly where: PaymentsBoolExp
}

/** aggregate varPop on columns */
export type PaymentsVarPopFields = {
	readonly __typename?: 'PaymentsVarPopFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "Payments" */
export type PaymentsVarPopOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type PaymentsVarSampFields = {
	readonly __typename?: 'PaymentsVarSampFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "Payments" */
export type PaymentsVarSampOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type PaymentsVarianceFields = {
	readonly __typename?: 'PaymentsVarianceFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "Payments" */
export type PaymentsVarianceOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
}

/** columns and relationships of "proposal" */
export type Proposal = {
	readonly __typename?: 'Proposal'
	readonly amount?: Maybe<Scalars['numeric']>
	readonly beneficiary?: Maybe<Scalars['String']>
	readonly beneficiaryIdentityId?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly campaign?: Maybe<Campaign>
	readonly campaignId?: Maybe<Scalars['String']>
	readonly cid: Scalars['String']
	readonly createdAtBlock: Scalars['Int']
	readonly creator: Scalars['String']
	readonly creatorIdentityId?: Maybe<Scalars['String']>
	readonly currencyId?: Maybe<Scalars['String']>
	readonly deposit: Scalars['numeric']
	readonly description: Scalars['String']
	readonly expiry: Scalars['Int']
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	/** An object relationship */
	readonly identityByBeneficiaryIdentityId?: Maybe<Identity>
	readonly name: Scalars['String']
	/** An object relationship */
	readonly organization?: Maybe<Organization>
	readonly organizationId?: Maybe<Scalars['String']>
	readonly slashingRule?: Maybe<Scalars['String']>
	readonly start: Scalars['Int']
	readonly state: Scalars['String']
	readonly type: Scalars['String']
	/** An object relationship */
	readonly voting?: Maybe<Voting>
	readonly votingId?: Maybe<Scalars['String']>
}

/** aggregated selection of "proposal" */
export type ProposalAggregate = {
	readonly __typename?: 'ProposalAggregate'
	readonly aggregate?: Maybe<ProposalAggregateFields>
	readonly nodes: ReadonlyArray<Proposal>
}

export type ProposalAggregateBoolExp = {
	readonly count?: InputMaybe<ProposalAggregateBoolExpCount>
}

/** aggregate fields of "proposal" */
export type ProposalAggregateFields = {
	readonly __typename?: 'ProposalAggregateFields'
	readonly avg?: Maybe<ProposalAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<ProposalMaxFields>
	readonly min?: Maybe<ProposalMinFields>
	readonly stddev?: Maybe<ProposalStddevFields>
	readonly stddevPop?: Maybe<ProposalStddevPopFields>
	readonly stddevSamp?: Maybe<ProposalStddevSampFields>
	readonly sum?: Maybe<ProposalSumFields>
	readonly varPop?: Maybe<ProposalVarPopFields>
	readonly varSamp?: Maybe<ProposalVarSampFields>
	readonly variance?: Maybe<ProposalVarianceFields>
}

/** aggregate fields of "proposal" */
export type ProposalAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "proposal" */
export type ProposalAggregateOrderBy = {
	readonly avg?: InputMaybe<ProposalAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<ProposalMaxOrderBy>
	readonly min?: InputMaybe<ProposalMinOrderBy>
	readonly stddev?: InputMaybe<ProposalStddevOrderBy>
	readonly stddevPop?: InputMaybe<ProposalStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<ProposalStddevSampOrderBy>
	readonly sum?: InputMaybe<ProposalSumOrderBy>
	readonly varPop?: InputMaybe<ProposalVarPopOrderBy>
	readonly varSamp?: InputMaybe<ProposalVarSampOrderBy>
	readonly variance?: InputMaybe<ProposalVarianceOrderBy>
}

/** input type for inserting array relation for remote table "proposal" */
export type ProposalArrRelInsertInput = {
	readonly data: ReadonlyArray<ProposalInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<ProposalOnConflict>
}

/** aggregate avg on columns */
export type ProposalAvgFields = {
	readonly __typename?: 'ProposalAvgFields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "proposal" */
export type ProposalAvgOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "proposal". All fields are combined with a logical 'AND'. */
export type ProposalBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<ProposalBoolExp>>
	readonly _not?: InputMaybe<ProposalBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<ProposalBoolExp>>
	readonly amount?: InputMaybe<NumericComparisonExp>
	readonly beneficiary?: InputMaybe<StringComparisonExp>
	readonly beneficiaryIdentityId?: InputMaybe<StringComparisonExp>
	readonly campaign?: InputMaybe<CampaignBoolExp>
	readonly campaignId?: InputMaybe<StringComparisonExp>
	readonly cid?: InputMaybe<StringComparisonExp>
	readonly createdAtBlock?: InputMaybe<IntComparisonExp>
	readonly creator?: InputMaybe<StringComparisonExp>
	readonly creatorIdentityId?: InputMaybe<StringComparisonExp>
	readonly currencyId?: InputMaybe<StringComparisonExp>
	readonly deposit?: InputMaybe<NumericComparisonExp>
	readonly description?: InputMaybe<StringComparisonExp>
	readonly expiry?: InputMaybe<IntComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly identity?: InputMaybe<IdentityBoolExp>
	readonly identityByBeneficiaryIdentityId?: InputMaybe<IdentityBoolExp>
	readonly name?: InputMaybe<StringComparisonExp>
	readonly organization?: InputMaybe<OrganizationBoolExp>
	readonly organizationId?: InputMaybe<StringComparisonExp>
	readonly slashingRule?: InputMaybe<StringComparisonExp>
	readonly start?: InputMaybe<IntComparisonExp>
	readonly state?: InputMaybe<StringComparisonExp>
	readonly type?: InputMaybe<StringComparisonExp>
	readonly voting?: InputMaybe<VotingBoolExp>
	readonly votingId?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "proposal" */
export enum ProposalConstraint {
	/** unique or primary key constraint on columns "id" */
	PkCa872ecfe4fef5720d2d39e4275 = 'PK_ca872ecfe4fef5720d2d39e4275',
}

export type ProposalFeatures = {
	readonly CREATE_GENERAL_PROPOSAL: Scalars['Boolean']
	readonly CREATE_PROPOSAL: Scalars['Boolean']
	readonly CREATE_PROPOSAL_RELATIVE_MAJORITY: Scalars['Boolean']
	readonly CREATE_PROPOSAL_SIMPLE_MAJORITY: Scalars['Boolean']
	readonly CREATE_SPENDING_PROPOSAL: Scalars['Boolean']
	readonly CREATE_WITHDRAW_PROPOSAL: Scalars['Boolean']
}

/** input type for incrementing numeric columns in table "proposal" */
export type ProposalIncInput = {
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly expiry?: InputMaybe<Scalars['Int']>
	readonly start?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "proposal" */
export type ProposalInsertInput = {
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly beneficiary?: InputMaybe<Scalars['String']>
	readonly beneficiaryIdentityId?: InputMaybe<Scalars['String']>
	readonly campaign?: InputMaybe<CampaignObjRelInsertInput>
	readonly campaignId?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creatorIdentityId?: InputMaybe<Scalars['String']>
	readonly currencyId?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly expiry?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<IdentityObjRelInsertInput>
	readonly identityByBeneficiaryIdentityId?: InputMaybe<IdentityObjRelInsertInput>
	readonly name?: InputMaybe<Scalars['String']>
	readonly organization?: InputMaybe<OrganizationObjRelInsertInput>
	readonly organizationId?: InputMaybe<Scalars['String']>
	readonly slashingRule?: InputMaybe<Scalars['String']>
	readonly start?: InputMaybe<Scalars['Int']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<Scalars['String']>
	readonly voting?: InputMaybe<VotingObjRelInsertInput>
	readonly votingId?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type ProposalMaxFields = {
	readonly __typename?: 'ProposalMaxFields'
	readonly amount?: Maybe<Scalars['numeric']>
	readonly beneficiary?: Maybe<Scalars['String']>
	readonly beneficiaryIdentityId?: Maybe<Scalars['String']>
	readonly campaignId?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAtBlock?: Maybe<Scalars['Int']>
	readonly creator?: Maybe<Scalars['String']>
	readonly creatorIdentityId?: Maybe<Scalars['String']>
	readonly currencyId?: Maybe<Scalars['String']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly description?: Maybe<Scalars['String']>
	readonly expiry?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly organizationId?: Maybe<Scalars['String']>
	readonly slashingRule?: Maybe<Scalars['String']>
	readonly start?: Maybe<Scalars['Int']>
	readonly state?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['String']>
	readonly votingId?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "proposal" */
export type ProposalMaxOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly beneficiary?: InputMaybe<OrderBy>
	readonly beneficiaryIdentityId?: InputMaybe<OrderBy>
	readonly campaignId?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly creator?: InputMaybe<OrderBy>
	readonly creatorIdentityId?: InputMaybe<OrderBy>
	readonly currencyId?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly organizationId?: InputMaybe<OrderBy>
	readonly slashingRule?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
	readonly state?: InputMaybe<OrderBy>
	readonly type?: InputMaybe<OrderBy>
	readonly votingId?: InputMaybe<OrderBy>
}

/** columns and relationships of "proposal_metadata" */
export type ProposalMetadata = {
	readonly __typename?: 'ProposalMetadata'
	readonly description: Scalars['String']
	readonly id: Scalars['String']
	readonly name: Scalars['String']
}

/** aggregated selection of "proposal_metadata" */
export type ProposalMetadataAggregate = {
	readonly __typename?: 'ProposalMetadataAggregate'
	readonly aggregate?: Maybe<ProposalMetadataAggregateFields>
	readonly nodes: ReadonlyArray<ProposalMetadata>
}

/** aggregate fields of "proposal_metadata" */
export type ProposalMetadataAggregateFields = {
	readonly __typename?: 'ProposalMetadataAggregateFields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<ProposalMetadataMaxFields>
	readonly min?: Maybe<ProposalMetadataMinFields>
}

/** aggregate fields of "proposal_metadata" */
export type ProposalMetadataAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<ProposalMetadataSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "proposal_metadata". All fields are combined with a logical 'AND'. */
export type ProposalMetadataBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<ProposalMetadataBoolExp>>
	readonly _not?: InputMaybe<ProposalMetadataBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<ProposalMetadataBoolExp>>
	readonly description?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly name?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "proposal_metadata" */
export enum ProposalMetadataConstraint {
	/** unique or primary key constraint on columns "id" */
	Pk_7d1bbb4c8b93797430bc3bcd454 = 'PK_7d1bbb4c8b93797430bc3bcd454',
}

/** input type for inserting data into table "proposal_metadata" */
export type ProposalMetadataInsertInput = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type ProposalMetadataMaxFields = {
	readonly __typename?: 'ProposalMetadataMaxFields'
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type ProposalMetadataMinFields = {
	readonly __typename?: 'ProposalMetadataMinFields'
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "proposal_metadata" */
export type ProposalMetadataMutationResponse = {
	readonly __typename?: 'ProposalMetadataMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<ProposalMetadata>
}

/** on_conflict condition type for table "proposal_metadata" */
export type ProposalMetadataOnConflict = {
	readonly constraint: ProposalMetadataConstraint
	readonly updateColumns?: ReadonlyArray<ProposalMetadataUpdateColumn>
	readonly where?: InputMaybe<ProposalMetadataBoolExp>
}

/** Ordering options when selecting data from "proposal_metadata". */
export type ProposalMetadataOrderBy = {
	readonly description?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
}

/** primary key columns input for table: proposal_metadata */
export type ProposalMetadataPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "proposal_metadata" */
export enum ProposalMetadataSelectColumn {
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
}

/** input type for updating data in table "proposal_metadata" */
export type ProposalMetadataSetInput = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "proposal_metadata" */
export type ProposalMetadataStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: ProposalMetadataStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type ProposalMetadataStreamCursorValueInput = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
}

/** update columns of table "proposal_metadata" */
export enum ProposalMetadataUpdateColumn {
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
}

export type ProposalMetadataUpdates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<ProposalMetadataSetInput>
	/** filter the rows which have to be updated */
	readonly where: ProposalMetadataBoolExp
}

/** aggregate min on columns */
export type ProposalMinFields = {
	readonly __typename?: 'ProposalMinFields'
	readonly amount?: Maybe<Scalars['numeric']>
	readonly beneficiary?: Maybe<Scalars['String']>
	readonly beneficiaryIdentityId?: Maybe<Scalars['String']>
	readonly campaignId?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAtBlock?: Maybe<Scalars['Int']>
	readonly creator?: Maybe<Scalars['String']>
	readonly creatorIdentityId?: Maybe<Scalars['String']>
	readonly currencyId?: Maybe<Scalars['String']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly description?: Maybe<Scalars['String']>
	readonly expiry?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly organizationId?: Maybe<Scalars['String']>
	readonly slashingRule?: Maybe<Scalars['String']>
	readonly start?: Maybe<Scalars['Int']>
	readonly state?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['String']>
	readonly votingId?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "proposal" */
export type ProposalMinOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly beneficiary?: InputMaybe<OrderBy>
	readonly beneficiaryIdentityId?: InputMaybe<OrderBy>
	readonly campaignId?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly creator?: InputMaybe<OrderBy>
	readonly creatorIdentityId?: InputMaybe<OrderBy>
	readonly currencyId?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly organizationId?: InputMaybe<OrderBy>
	readonly slashingRule?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
	readonly state?: InputMaybe<OrderBy>
	readonly type?: InputMaybe<OrderBy>
	readonly votingId?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "proposal" */
export type ProposalMutationResponse = {
	readonly __typename?: 'ProposalMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Proposal>
}

/** on_conflict condition type for table "proposal" */
export type ProposalOnConflict = {
	readonly constraint: ProposalConstraint
	readonly updateColumns?: ReadonlyArray<ProposalUpdateColumn>
	readonly where?: InputMaybe<ProposalBoolExp>
}

/** Ordering options when selecting data from "proposal". */
export type ProposalOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly beneficiary?: InputMaybe<OrderBy>
	readonly beneficiaryIdentityId?: InputMaybe<OrderBy>
	readonly campaign?: InputMaybe<CampaignOrderBy>
	readonly campaignId?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly creator?: InputMaybe<OrderBy>
	readonly creatorIdentityId?: InputMaybe<OrderBy>
	readonly currencyId?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentityOrderBy>
	readonly identityByBeneficiaryIdentityId?: InputMaybe<IdentityOrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly organization?: InputMaybe<OrganizationOrderBy>
	readonly organizationId?: InputMaybe<OrderBy>
	readonly slashingRule?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
	readonly state?: InputMaybe<OrderBy>
	readonly type?: InputMaybe<OrderBy>
	readonly voting?: InputMaybe<VotingOrderBy>
	readonly votingId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: proposal */
export type ProposalPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "proposal" */
export enum ProposalSelectColumn {
	/** column name */
	Amount = 'amount',
	/** column name */
	Beneficiary = 'beneficiary',
	/** column name */
	BeneficiaryIdentityId = 'beneficiaryIdentityId',
	/** column name */
	CampaignId = 'campaignId',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAtBlock = 'createdAtBlock',
	/** column name */
	Creator = 'creator',
	/** column name */
	CreatorIdentityId = 'creatorIdentityId',
	/** column name */
	CurrencyId = 'currencyId',
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
	OrganizationId = 'organizationId',
	/** column name */
	SlashingRule = 'slashingRule',
	/** column name */
	Start = 'start',
	/** column name */
	State = 'state',
	/** column name */
	Type = 'type',
	/** column name */
	VotingId = 'votingId',
}

/** input type for updating data in table "proposal" */
export type ProposalSetInput = {
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly beneficiary?: InputMaybe<Scalars['String']>
	readonly beneficiaryIdentityId?: InputMaybe<Scalars['String']>
	readonly campaignId?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creatorIdentityId?: InputMaybe<Scalars['String']>
	readonly currencyId?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly expiry?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly organizationId?: InputMaybe<Scalars['String']>
	readonly slashingRule?: InputMaybe<Scalars['String']>
	readonly start?: InputMaybe<Scalars['Int']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<Scalars['String']>
	readonly votingId?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type ProposalStddevFields = {
	readonly __typename?: 'ProposalStddevFields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "proposal" */
export type ProposalStddevOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type ProposalStddevPopFields = {
	readonly __typename?: 'ProposalStddevPopFields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "proposal" */
export type ProposalStddevPopOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type ProposalStddevSampFields = {
	readonly __typename?: 'ProposalStddevSampFields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "proposal" */
export type ProposalStddevSampOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "proposal" */
export type ProposalStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: ProposalStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type ProposalStreamCursorValueInput = {
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly beneficiary?: InputMaybe<Scalars['String']>
	readonly beneficiaryIdentityId?: InputMaybe<Scalars['String']>
	readonly campaignId?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creatorIdentityId?: InputMaybe<Scalars['String']>
	readonly currencyId?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly expiry?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly organizationId?: InputMaybe<Scalars['String']>
	readonly slashingRule?: InputMaybe<Scalars['String']>
	readonly start?: InputMaybe<Scalars['Int']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<Scalars['String']>
	readonly votingId?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type ProposalSumFields = {
	readonly __typename?: 'ProposalSumFields'
	readonly amount?: Maybe<Scalars['numeric']>
	readonly createdAtBlock?: Maybe<Scalars['Int']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly expiry?: Maybe<Scalars['Int']>
	readonly start?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "proposal" */
export type ProposalSumOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
}

/** update columns of table "proposal" */
export enum ProposalUpdateColumn {
	/** column name */
	Amount = 'amount',
	/** column name */
	Beneficiary = 'beneficiary',
	/** column name */
	BeneficiaryIdentityId = 'beneficiaryIdentityId',
	/** column name */
	CampaignId = 'campaignId',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAtBlock = 'createdAtBlock',
	/** column name */
	Creator = 'creator',
	/** column name */
	CreatorIdentityId = 'creatorIdentityId',
	/** column name */
	CurrencyId = 'currencyId',
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
	OrganizationId = 'organizationId',
	/** column name */
	SlashingRule = 'slashingRule',
	/** column name */
	Start = 'start',
	/** column name */
	State = 'state',
	/** column name */
	Type = 'type',
	/** column name */
	VotingId = 'votingId',
}

export type ProposalUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<ProposalIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<ProposalSetInput>
	/** filter the rows which have to be updated */
	readonly where: ProposalBoolExp
}

/** aggregate varPop on columns */
export type ProposalVarPopFields = {
	readonly __typename?: 'ProposalVarPopFields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "proposal" */
export type ProposalVarPopOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type ProposalVarSampFields = {
	readonly __typename?: 'ProposalVarSampFields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "proposal" */
export type ProposalVarSampOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type ProposalVarianceFields = {
	readonly __typename?: 'ProposalVarianceFields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "proposal" */
export type ProposalVarianceOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly deposit?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly start?: InputMaybe<OrderBy>
}

/** columns and relationships of "proposal_voter" */
export type ProposalVoter = {
	readonly __typename?: 'ProposalVoter'
	readonly address: Scalars['String']
	readonly amount?: Maybe<Scalars['numeric']>
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly identityId?: Maybe<Scalars['String']>
	readonly power: Scalars['numeric']
	readonly voted: Scalars['Boolean']
	/** An object relationship */
	readonly voting?: Maybe<Voting>
	readonly votingId?: Maybe<Scalars['String']>
}

/** aggregated selection of "proposal_voter" */
export type ProposalVoterAggregate = {
	readonly __typename?: 'ProposalVoterAggregate'
	readonly aggregate?: Maybe<ProposalVoterAggregateFields>
	readonly nodes: ReadonlyArray<ProposalVoter>
}

export type ProposalVoterAggregateBoolExp = {
	readonly bool_and?: InputMaybe<ProposalVoterAggregateBoolExpBool_And>
	readonly bool_or?: InputMaybe<ProposalVoterAggregateBoolExpBool_Or>
	readonly count?: InputMaybe<ProposalVoterAggregateBoolExpCount>
}

/** aggregate fields of "proposal_voter" */
export type ProposalVoterAggregateFields = {
	readonly __typename?: 'ProposalVoterAggregateFields'
	readonly avg?: Maybe<ProposalVoterAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<ProposalVoterMaxFields>
	readonly min?: Maybe<ProposalVoterMinFields>
	readonly stddev?: Maybe<ProposalVoterStddevFields>
	readonly stddevPop?: Maybe<ProposalVoterStddevPopFields>
	readonly stddevSamp?: Maybe<ProposalVoterStddevSampFields>
	readonly sum?: Maybe<ProposalVoterSumFields>
	readonly varPop?: Maybe<ProposalVoterVarPopFields>
	readonly varSamp?: Maybe<ProposalVoterVarSampFields>
	readonly variance?: Maybe<ProposalVoterVarianceFields>
}

/** aggregate fields of "proposal_voter" */
export type ProposalVoterAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<ProposalVoterSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "proposal_voter" */
export type ProposalVoterAggregateOrderBy = {
	readonly avg?: InputMaybe<ProposalVoterAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<ProposalVoterMaxOrderBy>
	readonly min?: InputMaybe<ProposalVoterMinOrderBy>
	readonly stddev?: InputMaybe<ProposalVoterStddevOrderBy>
	readonly stddevPop?: InputMaybe<ProposalVoterStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<ProposalVoterStddevSampOrderBy>
	readonly sum?: InputMaybe<ProposalVoterSumOrderBy>
	readonly varPop?: InputMaybe<ProposalVoterVarPopOrderBy>
	readonly varSamp?: InputMaybe<ProposalVoterVarSampOrderBy>
	readonly variance?: InputMaybe<ProposalVoterVarianceOrderBy>
}

/** input type for inserting array relation for remote table "proposal_voter" */
export type ProposalVoterArrRelInsertInput = {
	readonly data: ReadonlyArray<ProposalVoterInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<ProposalVoterOnConflict>
}

/** aggregate avg on columns */
export type ProposalVoterAvgFields = {
	readonly __typename?: 'ProposalVoterAvgFields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly power?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "proposal_voter" */
export type ProposalVoterAvgOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly power?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "proposal_voter". All fields are combined with a logical 'AND'. */
export type ProposalVoterBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<ProposalVoterBoolExp>>
	readonly _not?: InputMaybe<ProposalVoterBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<ProposalVoterBoolExp>>
	readonly address?: InputMaybe<StringComparisonExp>
	readonly amount?: InputMaybe<NumericComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly identity?: InputMaybe<IdentityBoolExp>
	readonly identityId?: InputMaybe<StringComparisonExp>
	readonly power?: InputMaybe<NumericComparisonExp>
	readonly voted?: InputMaybe<BooleanComparisonExp>
	readonly voting?: InputMaybe<VotingBoolExp>
	readonly votingId?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "proposal_voter" */
export enum ProposalVoterConstraint {
	/** unique or primary key constraint on columns "id" */
	PkC5f3dc257803abae426e96df398 = 'PK_c5f3dc257803abae426e96df398',
}

/** input type for incrementing numeric columns in table "proposal_voter" */
export type ProposalVoterIncInput = {
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly power?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "proposal_voter" */
export type ProposalVoterInsertInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<IdentityObjRelInsertInput>
	readonly identityId?: InputMaybe<Scalars['String']>
	readonly power?: InputMaybe<Scalars['numeric']>
	readonly voted?: InputMaybe<Scalars['Boolean']>
	readonly voting?: InputMaybe<VotingObjRelInsertInput>
	readonly votingId?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type ProposalVoterMaxFields = {
	readonly __typename?: 'ProposalVoterMaxFields'
	readonly address?: Maybe<Scalars['String']>
	readonly amount?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly identityId?: Maybe<Scalars['String']>
	readonly power?: Maybe<Scalars['numeric']>
	readonly votingId?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "proposal_voter" */
export type ProposalVoterMaxOrderBy = {
	readonly address?: InputMaybe<OrderBy>
	readonly amount?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly power?: InputMaybe<OrderBy>
	readonly votingId?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type ProposalVoterMinFields = {
	readonly __typename?: 'ProposalVoterMinFields'
	readonly address?: Maybe<Scalars['String']>
	readonly amount?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly identityId?: Maybe<Scalars['String']>
	readonly power?: Maybe<Scalars['numeric']>
	readonly votingId?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "proposal_voter" */
export type ProposalVoterMinOrderBy = {
	readonly address?: InputMaybe<OrderBy>
	readonly amount?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly power?: InputMaybe<OrderBy>
	readonly votingId?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "proposal_voter" */
export type ProposalVoterMutationResponse = {
	readonly __typename?: 'ProposalVoterMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<ProposalVoter>
}

/** on_conflict condition type for table "proposal_voter" */
export type ProposalVoterOnConflict = {
	readonly constraint: ProposalVoterConstraint
	readonly updateColumns?: ReadonlyArray<ProposalVoterUpdateColumn>
	readonly where?: InputMaybe<ProposalVoterBoolExp>
}

/** Ordering options when selecting data from "proposal_voter". */
export type ProposalVoterOrderBy = {
	readonly address?: InputMaybe<OrderBy>
	readonly amount?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentityOrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly power?: InputMaybe<OrderBy>
	readonly voted?: InputMaybe<OrderBy>
	readonly voting?: InputMaybe<VotingOrderBy>
	readonly votingId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: proposal_voter */
export type ProposalVoterPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "proposal_voter" */
export enum ProposalVoterSelectColumn {
	/** column name */
	Address = 'address',
	/** column name */
	Amount = 'amount',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
	/** column name */
	Power = 'power',
	/** column name */
	Voted = 'voted',
	/** column name */
	VotingId = 'votingId',
}

/** select "proposalVoterAggregateBoolExpBool_andArgumentsColumns" columns of table "proposal_voter" */
export enum ProposalVoterSelectColumnProposalVoterAggregateBoolExpBool_AndArgumentsColumns {
	/** column name */
	Voted = 'voted',
}

/** select "proposalVoterAggregateBoolExpBool_orArgumentsColumns" columns of table "proposal_voter" */
export enum ProposalVoterSelectColumnProposalVoterAggregateBoolExpBool_OrArgumentsColumns {
	/** column name */
	Voted = 'voted',
}

/** input type for updating data in table "proposal_voter" */
export type ProposalVoterSetInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identityId?: InputMaybe<Scalars['String']>
	readonly power?: InputMaybe<Scalars['numeric']>
	readonly voted?: InputMaybe<Scalars['Boolean']>
	readonly votingId?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type ProposalVoterStddevFields = {
	readonly __typename?: 'ProposalVoterStddevFields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly power?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "proposal_voter" */
export type ProposalVoterStddevOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly power?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type ProposalVoterStddevPopFields = {
	readonly __typename?: 'ProposalVoterStddevPopFields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly power?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "proposal_voter" */
export type ProposalVoterStddevPopOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly power?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type ProposalVoterStddevSampFields = {
	readonly __typename?: 'ProposalVoterStddevSampFields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly power?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "proposal_voter" */
export type ProposalVoterStddevSampOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly power?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "proposal_voter" */
export type ProposalVoterStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: ProposalVoterStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type ProposalVoterStreamCursorValueInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identityId?: InputMaybe<Scalars['String']>
	readonly power?: InputMaybe<Scalars['numeric']>
	readonly voted?: InputMaybe<Scalars['Boolean']>
	readonly votingId?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type ProposalVoterSumFields = {
	readonly __typename?: 'ProposalVoterSumFields'
	readonly amount?: Maybe<Scalars['numeric']>
	readonly power?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "proposal_voter" */
export type ProposalVoterSumOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly power?: InputMaybe<OrderBy>
}

/** update columns of table "proposal_voter" */
export enum ProposalVoterUpdateColumn {
	/** column name */
	Address = 'address',
	/** column name */
	Amount = 'amount',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
	/** column name */
	Power = 'power',
	/** column name */
	Voted = 'voted',
	/** column name */
	VotingId = 'votingId',
}

export type ProposalVoterUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<ProposalVoterIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<ProposalVoterSetInput>
	/** filter the rows which have to be updated */
	readonly where: ProposalVoterBoolExp
}

/** aggregate varPop on columns */
export type ProposalVoterVarPopFields = {
	readonly __typename?: 'ProposalVoterVarPopFields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly power?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "proposal_voter" */
export type ProposalVoterVarPopOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly power?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type ProposalVoterVarSampFields = {
	readonly __typename?: 'ProposalVoterVarSampFields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly power?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "proposal_voter" */
export type ProposalVoterVarSampOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly power?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type ProposalVoterVarianceFields = {
	readonly __typename?: 'ProposalVoterVarianceFields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly power?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "proposal_voter" */
export type ProposalVoterVarianceOrderBy = {
	readonly amount?: InputMaybe<OrderBy>
	readonly power?: InputMaybe<OrderBy>
}

/** columns and relationships of "QuestProgresses" */
export type QuestProgresses = {
	readonly __typename?: 'QuestProgresses'
	readonly createdAt: Scalars['timestamptz']
	readonly id: Scalars['Int']
	/** An object relationship */
	readonly identity?: Maybe<Identities>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly progress: Scalars['float8']
	/** An object relationship */
	readonly quest?: Maybe<Quests>
	readonly questId?: Maybe<Scalars['Int']>
	readonly updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "QuestProgresses" */
export type QuestProgressesAggregate = {
	readonly __typename?: 'QuestProgressesAggregate'
	readonly aggregate?: Maybe<QuestProgressesAggregateFields>
	readonly nodes: ReadonlyArray<QuestProgresses>
}

export type QuestProgressesAggregateBoolExp = {
	readonly avg?: InputMaybe<QuestProgressesAggregateBoolExpAvg>
	readonly corr?: InputMaybe<QuestProgressesAggregateBoolExpCorr>
	readonly count?: InputMaybe<QuestProgressesAggregateBoolExpCount>
	readonly covar_samp?: InputMaybe<QuestProgressesAggregateBoolExpCovar_Samp>
	readonly max?: InputMaybe<QuestProgressesAggregateBoolExpMax>
	readonly min?: InputMaybe<QuestProgressesAggregateBoolExpMin>
	readonly stddev_samp?: InputMaybe<QuestProgressesAggregateBoolExpStddev_Samp>
	readonly sum?: InputMaybe<QuestProgressesAggregateBoolExpSum>
	readonly var_samp?: InputMaybe<QuestProgressesAggregateBoolExpVar_Samp>
}

/** aggregate fields of "QuestProgresses" */
export type QuestProgressesAggregateFields = {
	readonly __typename?: 'QuestProgressesAggregateFields'
	readonly avg?: Maybe<QuestProgressesAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<QuestProgressesMaxFields>
	readonly min?: Maybe<QuestProgressesMinFields>
	readonly stddev?: Maybe<QuestProgressesStddevFields>
	readonly stddevPop?: Maybe<QuestProgressesStddevPopFields>
	readonly stddevSamp?: Maybe<QuestProgressesStddevSampFields>
	readonly sum?: Maybe<QuestProgressesSumFields>
	readonly varPop?: Maybe<QuestProgressesVarPopFields>
	readonly varSamp?: Maybe<QuestProgressesVarSampFields>
	readonly variance?: Maybe<QuestProgressesVarianceFields>
}

/** aggregate fields of "QuestProgresses" */
export type QuestProgressesAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<QuestProgressesSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "QuestProgresses" */
export type QuestProgressesAggregateOrderBy = {
	readonly avg?: InputMaybe<QuestProgressesAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<QuestProgressesMaxOrderBy>
	readonly min?: InputMaybe<QuestProgressesMinOrderBy>
	readonly stddev?: InputMaybe<QuestProgressesStddevOrderBy>
	readonly stddevPop?: InputMaybe<QuestProgressesStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<QuestProgressesStddevSampOrderBy>
	readonly sum?: InputMaybe<QuestProgressesSumOrderBy>
	readonly varPop?: InputMaybe<QuestProgressesVarPopOrderBy>
	readonly varSamp?: InputMaybe<QuestProgressesVarSampOrderBy>
	readonly variance?: InputMaybe<QuestProgressesVarianceOrderBy>
}

/** input type for inserting array relation for remote table "QuestProgresses" */
export type QuestProgressesArrRelInsertInput = {
	readonly data: ReadonlyArray<QuestProgressesInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<QuestProgressesOnConflict>
}

/** aggregate avg on columns */
export type QuestProgressesAvgFields = {
	readonly __typename?: 'QuestProgressesAvgFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly progress?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "QuestProgresses" */
export type QuestProgressesAvgOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly progress?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "QuestProgresses". All fields are combined with a logical 'AND'. */
export type QuestProgressesBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<QuestProgressesBoolExp>>
	readonly _not?: InputMaybe<QuestProgressesBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<QuestProgressesBoolExp>>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly identity?: InputMaybe<IdentitiesBoolExp>
	readonly identityId?: InputMaybe<IntComparisonExp>
	readonly progress?: InputMaybe<Float8ComparisonExp>
	readonly quest?: InputMaybe<QuestsBoolExp>
	readonly questId?: InputMaybe<IntComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "QuestProgresses" */
export enum QuestProgressesConstraint {
	/** unique or primary key constraint on columns "id" */
	QuestProgressesPkey = 'QuestProgresses_pkey',
}

/** input type for incrementing numeric columns in table "QuestProgresses" */
export type QuestProgressesIncInput = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly progress?: InputMaybe<Scalars['float8']>
	readonly questId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "QuestProgresses" */
export type QuestProgressesInsertInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identity?: InputMaybe<IdentitiesObjRelInsertInput>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly progress?: InputMaybe<Scalars['float8']>
	readonly quest?: InputMaybe<QuestsObjRelInsertInput>
	readonly questId?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type QuestProgressesMaxFields = {
	readonly __typename?: 'QuestProgressesMaxFields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly progress?: Maybe<Scalars['float8']>
	readonly questId?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "QuestProgresses" */
export type QuestProgressesMaxOrderBy = {
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly progress?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type QuestProgressesMinFields = {
	readonly __typename?: 'QuestProgressesMinFields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly progress?: Maybe<Scalars['float8']>
	readonly questId?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "QuestProgresses" */
export type QuestProgressesMinOrderBy = {
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly progress?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "QuestProgresses" */
export type QuestProgressesMutationResponse = {
	readonly __typename?: 'QuestProgressesMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<QuestProgresses>
}

/** on_conflict condition type for table "QuestProgresses" */
export type QuestProgressesOnConflict = {
	readonly constraint: QuestProgressesConstraint
	readonly updateColumns?: ReadonlyArray<QuestProgressesUpdateColumn>
	readonly where?: InputMaybe<QuestProgressesBoolExp>
}

/** Ordering options when selecting data from "QuestProgresses". */
export type QuestProgressesOrderBy = {
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentitiesOrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly progress?: InputMaybe<OrderBy>
	readonly quest?: InputMaybe<QuestsOrderBy>
	readonly questId?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: QuestProgresses */
export type QuestProgressesPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "QuestProgresses" */
export enum QuestProgressesSelectColumn {
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
	/** column name */
	Progress = 'progress',
	/** column name */
	QuestId = 'questId',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** select "questProgressesAggregateBoolExpAvgArgumentsColumns" columns of table "QuestProgresses" */
export enum QuestProgressesSelectColumnQuestProgressesAggregateBoolExpAvgArgumentsColumns {
	/** column name */
	Progress = 'progress',
}

/** select "questProgressesAggregateBoolExpCorrArgumentsColumns" columns of table "QuestProgresses" */
export enum QuestProgressesSelectColumnQuestProgressesAggregateBoolExpCorrArgumentsColumns {
	/** column name */
	Progress = 'progress',
}

/** select "questProgressesAggregateBoolExpCovar_sampArgumentsColumns" columns of table "QuestProgresses" */
export enum QuestProgressesSelectColumnQuestProgressesAggregateBoolExpCovar_SampArgumentsColumns {
	/** column name */
	Progress = 'progress',
}

/** select "questProgressesAggregateBoolExpMaxArgumentsColumns" columns of table "QuestProgresses" */
export enum QuestProgressesSelectColumnQuestProgressesAggregateBoolExpMaxArgumentsColumns {
	/** column name */
	Progress = 'progress',
}

/** select "questProgressesAggregateBoolExpMinArgumentsColumns" columns of table "QuestProgresses" */
export enum QuestProgressesSelectColumnQuestProgressesAggregateBoolExpMinArgumentsColumns {
	/** column name */
	Progress = 'progress',
}

/** select "questProgressesAggregateBoolExpStddev_sampArgumentsColumns" columns of table "QuestProgresses" */
export enum QuestProgressesSelectColumnQuestProgressesAggregateBoolExpStddev_SampArgumentsColumns {
	/** column name */
	Progress = 'progress',
}

/** select "questProgressesAggregateBoolExpSumArgumentsColumns" columns of table "QuestProgresses" */
export enum QuestProgressesSelectColumnQuestProgressesAggregateBoolExpSumArgumentsColumns {
	/** column name */
	Progress = 'progress',
}

/** select "questProgressesAggregateBoolExpVar_sampArgumentsColumns" columns of table "QuestProgresses" */
export enum QuestProgressesSelectColumnQuestProgressesAggregateBoolExpVar_SampArgumentsColumns {
	/** column name */
	Progress = 'progress',
}

/** input type for updating data in table "QuestProgresses" */
export type QuestProgressesSetInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly progress?: InputMaybe<Scalars['float8']>
	readonly questId?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type QuestProgressesStddevFields = {
	readonly __typename?: 'QuestProgressesStddevFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly progress?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "QuestProgresses" */
export type QuestProgressesStddevOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly progress?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type QuestProgressesStddevPopFields = {
	readonly __typename?: 'QuestProgressesStddevPopFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly progress?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "QuestProgresses" */
export type QuestProgressesStddevPopOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly progress?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type QuestProgressesStddevSampFields = {
	readonly __typename?: 'QuestProgressesStddevSampFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly progress?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "QuestProgresses" */
export type QuestProgressesStddevSampOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly progress?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "QuestProgresses" */
export type QuestProgressesStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: QuestProgressesStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type QuestProgressesStreamCursorValueInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly progress?: InputMaybe<Scalars['float8']>
	readonly questId?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type QuestProgressesSumFields = {
	readonly __typename?: 'QuestProgressesSumFields'
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly progress?: Maybe<Scalars['float8']>
	readonly questId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "QuestProgresses" */
export type QuestProgressesSumOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly progress?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

/** update columns of table "QuestProgresses" */
export enum QuestProgressesUpdateColumn {
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
	/** column name */
	Progress = 'progress',
	/** column name */
	QuestId = 'questId',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type QuestProgressesUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<QuestProgressesIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<QuestProgressesSetInput>
	/** filter the rows which have to be updated */
	readonly where: QuestProgressesBoolExp
}

/** aggregate varPop on columns */
export type QuestProgressesVarPopFields = {
	readonly __typename?: 'QuestProgressesVarPopFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly progress?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "QuestProgresses" */
export type QuestProgressesVarPopOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly progress?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type QuestProgressesVarSampFields = {
	readonly __typename?: 'QuestProgressesVarSampFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly progress?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "QuestProgresses" */
export type QuestProgressesVarSampOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly progress?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type QuestProgressesVarianceFields = {
	readonly __typename?: 'QuestProgressesVarianceFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly progress?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "QuestProgresses" */
export type QuestProgressesVarianceOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly progress?: InputMaybe<OrderBy>
	readonly questId?: InputMaybe<OrderBy>
}

/** columns and relationships of "Quests" */
export type Quests = {
	readonly __typename?: 'Quests'
	/** An object relationship */
	readonly battlepass?: Maybe<Battlepasses>
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly channelId?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly completedQuests: ReadonlyArray<CompletedQuests>
	/** An aggregate relationship */
	readonly completedQuestsAggregate: CompletedQuestsAggregate
	readonly createdAt: Scalars['timestamptz']
	readonly description?: Maybe<Scalars['String']>
	readonly guildId?: Maybe<Scalars['String']>
	readonly hashtag?: Maybe<Scalars['String']>
	readonly id: Scalars['Int']
	readonly link?: Maybe<Scalars['String']>
	readonly max?: Maybe<Scalars['Int']>
	readonly maxDaily?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly points?: Maybe<Scalars['Int']>
	readonly quantity?: Maybe<Scalars['Int']>
	/** An array relationship */
	readonly questProgresses: ReadonlyArray<QuestProgresses>
	/** An aggregate relationship */
	readonly questProgressesAggregate: QuestProgressesAggregate
	readonly repeat?: Maybe<Scalars['Boolean']>
	readonly source?: Maybe<Scalars['enum_Quests_source']>
	readonly twitterId?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['enum_Quests_type']>
	readonly updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "Quests" */
export type QuestsCompletedQuestsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CompletedQuestsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CompletedQuestsOrderBy>>
	where?: InputMaybe<CompletedQuestsBoolExp>
}

/** columns and relationships of "Quests" */
export type QuestsCompletedQuestsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CompletedQuestsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CompletedQuestsOrderBy>>
	where?: InputMaybe<CompletedQuestsBoolExp>
}

/** columns and relationships of "Quests" */
export type QuestsQuestProgressesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<QuestProgressesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<QuestProgressesOrderBy>>
	where?: InputMaybe<QuestProgressesBoolExp>
}

/** columns and relationships of "Quests" */
export type QuestsQuestProgressesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<QuestProgressesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<QuestProgressesOrderBy>>
	where?: InputMaybe<QuestProgressesBoolExp>
}

/** aggregated selection of "Quests" */
export type QuestsAggregate = {
	readonly __typename?: 'QuestsAggregate'
	readonly aggregate?: Maybe<QuestsAggregateFields>
	readonly nodes: ReadonlyArray<Quests>
}

export type QuestsAggregateBoolExp = {
	readonly bool_and?: InputMaybe<QuestsAggregateBoolExpBool_And>
	readonly bool_or?: InputMaybe<QuestsAggregateBoolExpBool_Or>
	readonly count?: InputMaybe<QuestsAggregateBoolExpCount>
}

/** aggregate fields of "Quests" */
export type QuestsAggregateFields = {
	readonly __typename?: 'QuestsAggregateFields'
	readonly avg?: Maybe<QuestsAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<QuestsMaxFields>
	readonly min?: Maybe<QuestsMinFields>
	readonly stddev?: Maybe<QuestsStddevFields>
	readonly stddevPop?: Maybe<QuestsStddevPopFields>
	readonly stddevSamp?: Maybe<QuestsStddevSampFields>
	readonly sum?: Maybe<QuestsSumFields>
	readonly varPop?: Maybe<QuestsVarPopFields>
	readonly varSamp?: Maybe<QuestsVarSampFields>
	readonly variance?: Maybe<QuestsVarianceFields>
}

/** aggregate fields of "Quests" */
export type QuestsAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<QuestsSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "Quests" */
export type QuestsAggregateOrderBy = {
	readonly avg?: InputMaybe<QuestsAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<QuestsMaxOrderBy>
	readonly min?: InputMaybe<QuestsMinOrderBy>
	readonly stddev?: InputMaybe<QuestsStddevOrderBy>
	readonly stddevPop?: InputMaybe<QuestsStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<QuestsStddevSampOrderBy>
	readonly sum?: InputMaybe<QuestsSumOrderBy>
	readonly varPop?: InputMaybe<QuestsVarPopOrderBy>
	readonly varSamp?: InputMaybe<QuestsVarSampOrderBy>
	readonly variance?: InputMaybe<QuestsVarianceOrderBy>
}

/** input type for inserting array relation for remote table "Quests" */
export type QuestsArrRelInsertInput = {
	readonly data: ReadonlyArray<QuestsInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<QuestsOnConflict>
}

/** aggregate avg on columns */
export type QuestsAvgFields = {
	readonly __typename?: 'QuestsAvgFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
	readonly maxDaily?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly quantity?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "Quests" */
export type QuestsAvgOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrderBy>
	readonly maxDaily?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly quantity?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "Quests". All fields are combined with a logical 'AND'. */
export type QuestsBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<QuestsBoolExp>>
	readonly _not?: InputMaybe<QuestsBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<QuestsBoolExp>>
	readonly battlepass?: InputMaybe<BattlepassesBoolExp>
	readonly battlepassId?: InputMaybe<IntComparisonExp>
	readonly channelId?: InputMaybe<StringComparisonExp>
	readonly cid?: InputMaybe<StringComparisonExp>
	readonly completedQuests?: InputMaybe<CompletedQuestsBoolExp>
	readonly completedQuestsAggregate?: InputMaybe<CompletedQuestsAggregateBoolExp>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly description?: InputMaybe<StringComparisonExp>
	readonly guildId?: InputMaybe<StringComparisonExp>
	readonly hashtag?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly link?: InputMaybe<StringComparisonExp>
	readonly max?: InputMaybe<IntComparisonExp>
	readonly maxDaily?: InputMaybe<IntComparisonExp>
	readonly name?: InputMaybe<StringComparisonExp>
	readonly points?: InputMaybe<IntComparisonExp>
	readonly quantity?: InputMaybe<IntComparisonExp>
	readonly questProgresses?: InputMaybe<QuestProgressesBoolExp>
	readonly questProgressesAggregate?: InputMaybe<QuestProgressesAggregateBoolExp>
	readonly repeat?: InputMaybe<BooleanComparisonExp>
	readonly source?: InputMaybe<EnumQuestsSourceComparisonExp>
	readonly twitterId?: InputMaybe<StringComparisonExp>
	readonly type?: InputMaybe<EnumQuestsTypeComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "Quests" */
export enum QuestsConstraint {
	/** unique or primary key constraint on columns "id" */
	QuestsPkey = 'Quests_pkey',
}

/** input type for incrementing numeric columns in table "Quests" */
export type QuestsIncInput = {
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly max?: InputMaybe<Scalars['Int']>
	readonly maxDaily?: InputMaybe<Scalars['Int']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly quantity?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "Quests" */
export type QuestsInsertInput = {
	readonly battlepass?: InputMaybe<BattlepassesObjRelInsertInput>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly channelId?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly completedQuests?: InputMaybe<CompletedQuestsArrRelInsertInput>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly guildId?: InputMaybe<Scalars['String']>
	readonly hashtag?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly link?: InputMaybe<Scalars['String']>
	readonly max?: InputMaybe<Scalars['Int']>
	readonly maxDaily?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly quantity?: InputMaybe<Scalars['Int']>
	readonly questProgresses?: InputMaybe<QuestProgressesArrRelInsertInput>
	readonly repeat?: InputMaybe<Scalars['Boolean']>
	readonly source?: InputMaybe<Scalars['enum_Quests_source']>
	readonly twitterId?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<Scalars['enum_Quests_type']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type QuestsMaxFields = {
	readonly __typename?: 'QuestsMaxFields'
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly channelId?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly description?: Maybe<Scalars['String']>
	readonly guildId?: Maybe<Scalars['String']>
	readonly hashtag?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['Int']>
	readonly link?: Maybe<Scalars['String']>
	readonly max?: Maybe<Scalars['Int']>
	readonly maxDaily?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly points?: Maybe<Scalars['Int']>
	readonly quantity?: Maybe<Scalars['Int']>
	readonly source?: Maybe<Scalars['enum_Quests_source']>
	readonly twitterId?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['enum_Quests_type']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "Quests" */
export type QuestsMaxOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly channelId?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly guildId?: InputMaybe<OrderBy>
	readonly hashtag?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly link?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrderBy>
	readonly maxDaily?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly quantity?: InputMaybe<OrderBy>
	readonly source?: InputMaybe<OrderBy>
	readonly twitterId?: InputMaybe<OrderBy>
	readonly type?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type QuestsMinFields = {
	readonly __typename?: 'QuestsMinFields'
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly channelId?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly description?: Maybe<Scalars['String']>
	readonly guildId?: Maybe<Scalars['String']>
	readonly hashtag?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['Int']>
	readonly link?: Maybe<Scalars['String']>
	readonly max?: Maybe<Scalars['Int']>
	readonly maxDaily?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly points?: Maybe<Scalars['Int']>
	readonly quantity?: Maybe<Scalars['Int']>
	readonly source?: Maybe<Scalars['enum_Quests_source']>
	readonly twitterId?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['enum_Quests_type']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "Quests" */
export type QuestsMinOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly channelId?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly guildId?: InputMaybe<OrderBy>
	readonly hashtag?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly link?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrderBy>
	readonly maxDaily?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly quantity?: InputMaybe<OrderBy>
	readonly source?: InputMaybe<OrderBy>
	readonly twitterId?: InputMaybe<OrderBy>
	readonly type?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "Quests" */
export type QuestsMutationResponse = {
	readonly __typename?: 'QuestsMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Quests>
}

/** input type for inserting object relation for remote table "Quests" */
export type QuestsObjRelInsertInput = {
	readonly data: QuestsInsertInput
	/** upsert condition */
	readonly onConflict?: InputMaybe<QuestsOnConflict>
}

/** on_conflict condition type for table "Quests" */
export type QuestsOnConflict = {
	readonly constraint: QuestsConstraint
	readonly updateColumns?: ReadonlyArray<QuestsUpdateColumn>
	readonly where?: InputMaybe<QuestsBoolExp>
}

/** Ordering options when selecting data from "Quests". */
export type QuestsOrderBy = {
	readonly battlepass?: InputMaybe<BattlepassesOrderBy>
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly channelId?: InputMaybe<OrderBy>
	readonly cid?: InputMaybe<OrderBy>
	readonly completedQuestsAggregate?: InputMaybe<CompletedQuestsAggregateOrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly description?: InputMaybe<OrderBy>
	readonly guildId?: InputMaybe<OrderBy>
	readonly hashtag?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly link?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrderBy>
	readonly maxDaily?: InputMaybe<OrderBy>
	readonly name?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly quantity?: InputMaybe<OrderBy>
	readonly questProgressesAggregate?: InputMaybe<QuestProgressesAggregateOrderBy>
	readonly repeat?: InputMaybe<OrderBy>
	readonly source?: InputMaybe<OrderBy>
	readonly twitterId?: InputMaybe<OrderBy>
	readonly type?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: Quests */
export type QuestsPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "Quests" */
export enum QuestsSelectColumn {
	/** column name */
	BattlepassId = 'battlepassId',
	/** column name */
	ChannelId = 'channelId',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Description = 'description',
	/** column name */
	GuildId = 'guildId',
	/** column name */
	Hashtag = 'hashtag',
	/** column name */
	Id = 'id',
	/** column name */
	Link = 'link',
	/** column name */
	Max = 'max',
	/** column name */
	MaxDaily = 'maxDaily',
	/** column name */
	Name = 'name',
	/** column name */
	Points = 'points',
	/** column name */
	Quantity = 'quantity',
	/** column name */
	Repeat = 'repeat',
	/** column name */
	Source = 'source',
	/** column name */
	TwitterId = 'twitterId',
	/** column name */
	Type = 'type',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** select "questsAggregateBoolExpBool_andArgumentsColumns" columns of table "Quests" */
export enum QuestsSelectColumnQuestsAggregateBoolExpBool_AndArgumentsColumns {
	/** column name */
	Repeat = 'repeat',
}

/** select "questsAggregateBoolExpBool_orArgumentsColumns" columns of table "Quests" */
export enum QuestsSelectColumnQuestsAggregateBoolExpBool_OrArgumentsColumns {
	/** column name */
	Repeat = 'repeat',
}

/** input type for updating data in table "Quests" */
export type QuestsSetInput = {
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly channelId?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly guildId?: InputMaybe<Scalars['String']>
	readonly hashtag?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly link?: InputMaybe<Scalars['String']>
	readonly max?: InputMaybe<Scalars['Int']>
	readonly maxDaily?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly quantity?: InputMaybe<Scalars['Int']>
	readonly repeat?: InputMaybe<Scalars['Boolean']>
	readonly source?: InputMaybe<Scalars['enum_Quests_source']>
	readonly twitterId?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<Scalars['enum_Quests_type']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type QuestsStddevFields = {
	readonly __typename?: 'QuestsStddevFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
	readonly maxDaily?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly quantity?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "Quests" */
export type QuestsStddevOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrderBy>
	readonly maxDaily?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly quantity?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type QuestsStddevPopFields = {
	readonly __typename?: 'QuestsStddevPopFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
	readonly maxDaily?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly quantity?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "Quests" */
export type QuestsStddevPopOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrderBy>
	readonly maxDaily?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly quantity?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type QuestsStddevSampFields = {
	readonly __typename?: 'QuestsStddevSampFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
	readonly maxDaily?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly quantity?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "Quests" */
export type QuestsStddevSampOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrderBy>
	readonly maxDaily?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly quantity?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "Quests" */
export type QuestsStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: QuestsStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type QuestsStreamCursorValueInput = {
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly channelId?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly guildId?: InputMaybe<Scalars['String']>
	readonly hashtag?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly link?: InputMaybe<Scalars['String']>
	readonly max?: InputMaybe<Scalars['Int']>
	readonly maxDaily?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly quantity?: InputMaybe<Scalars['Int']>
	readonly repeat?: InputMaybe<Scalars['Boolean']>
	readonly source?: InputMaybe<Scalars['enum_Quests_source']>
	readonly twitterId?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<Scalars['enum_Quests_type']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type QuestsSumFields = {
	readonly __typename?: 'QuestsSumFields'
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
	readonly max?: Maybe<Scalars['Int']>
	readonly maxDaily?: Maybe<Scalars['Int']>
	readonly points?: Maybe<Scalars['Int']>
	readonly quantity?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "Quests" */
export type QuestsSumOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrderBy>
	readonly maxDaily?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly quantity?: InputMaybe<OrderBy>
}

/** update columns of table "Quests" */
export enum QuestsUpdateColumn {
	/** column name */
	BattlepassId = 'battlepassId',
	/** column name */
	ChannelId = 'channelId',
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Description = 'description',
	/** column name */
	GuildId = 'guildId',
	/** column name */
	Hashtag = 'hashtag',
	/** column name */
	Id = 'id',
	/** column name */
	Link = 'link',
	/** column name */
	Max = 'max',
	/** column name */
	MaxDaily = 'maxDaily',
	/** column name */
	Name = 'name',
	/** column name */
	Points = 'points',
	/** column name */
	Quantity = 'quantity',
	/** column name */
	Repeat = 'repeat',
	/** column name */
	Source = 'source',
	/** column name */
	TwitterId = 'twitterId',
	/** column name */
	Type = 'type',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type QuestsUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<QuestsIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<QuestsSetInput>
	/** filter the rows which have to be updated */
	readonly where: QuestsBoolExp
}

/** aggregate varPop on columns */
export type QuestsVarPopFields = {
	readonly __typename?: 'QuestsVarPopFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
	readonly maxDaily?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly quantity?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "Quests" */
export type QuestsVarPopOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrderBy>
	readonly maxDaily?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly quantity?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type QuestsVarSampFields = {
	readonly __typename?: 'QuestsVarSampFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
	readonly maxDaily?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly quantity?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "Quests" */
export type QuestsVarSampOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrderBy>
	readonly maxDaily?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly quantity?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type QuestsVarianceFields = {
	readonly __typename?: 'QuestsVarianceFields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
	readonly maxDaily?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly quantity?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "Quests" */
export type QuestsVarianceOrderBy = {
	readonly battlepassId?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<OrderBy>
	readonly maxDaily?: InputMaybe<OrderBy>
	readonly points?: InputMaybe<OrderBy>
	readonly quantity?: InputMaybe<OrderBy>
}

export type RmrkNft = {
	readonly __typename?: 'RMRKNft'
	readonly id: Scalars['String']
	readonly metadata: Scalars['String']
	readonly sn: Scalars['String']
}

/** columns and relationships of "RewardClaims" */
export type RewardClaims = {
	readonly __typename?: 'RewardClaims'
	/** An object relationship */
	readonly battlepassParticipant?: Maybe<BattlepassParticipants>
	/** An object relationship */
	readonly battlepassReward?: Maybe<BattlepassRewards>
	readonly createdAt: Scalars['timestamptz']
	readonly id: Scalars['Int']
	readonly nftId?: Maybe<Scalars['Int']>
	readonly participantId?: Maybe<Scalars['Int']>
	readonly rewardId?: Maybe<Scalars['Int']>
	readonly syncStatus?: Maybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "RewardClaims" */
export type RewardClaimsAggregate = {
	readonly __typename?: 'RewardClaimsAggregate'
	readonly aggregate?: Maybe<RewardClaimsAggregateFields>
	readonly nodes: ReadonlyArray<RewardClaims>
}

export type RewardClaimsAggregateBoolExp = {
	readonly count?: InputMaybe<RewardClaimsAggregateBoolExpCount>
}

/** aggregate fields of "RewardClaims" */
export type RewardClaimsAggregateFields = {
	readonly __typename?: 'RewardClaimsAggregateFields'
	readonly avg?: Maybe<RewardClaimsAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<RewardClaimsMaxFields>
	readonly min?: Maybe<RewardClaimsMinFields>
	readonly stddev?: Maybe<RewardClaimsStddevFields>
	readonly stddevPop?: Maybe<RewardClaimsStddevPopFields>
	readonly stddevSamp?: Maybe<RewardClaimsStddevSampFields>
	readonly sum?: Maybe<RewardClaimsSumFields>
	readonly varPop?: Maybe<RewardClaimsVarPopFields>
	readonly varSamp?: Maybe<RewardClaimsVarSampFields>
	readonly variance?: Maybe<RewardClaimsVarianceFields>
}

/** aggregate fields of "RewardClaims" */
export type RewardClaimsAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<RewardClaimsSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "RewardClaims" */
export type RewardClaimsAggregateOrderBy = {
	readonly avg?: InputMaybe<RewardClaimsAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<RewardClaimsMaxOrderBy>
	readonly min?: InputMaybe<RewardClaimsMinOrderBy>
	readonly stddev?: InputMaybe<RewardClaimsStddevOrderBy>
	readonly stddevPop?: InputMaybe<RewardClaimsStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<RewardClaimsStddevSampOrderBy>
	readonly sum?: InputMaybe<RewardClaimsSumOrderBy>
	readonly varPop?: InputMaybe<RewardClaimsVarPopOrderBy>
	readonly varSamp?: InputMaybe<RewardClaimsVarSampOrderBy>
	readonly variance?: InputMaybe<RewardClaimsVarianceOrderBy>
}

/** input type for inserting array relation for remote table "RewardClaims" */
export type RewardClaimsArrRelInsertInput = {
	readonly data: ReadonlyArray<RewardClaimsInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<RewardClaimsOnConflict>
}

/** aggregate avg on columns */
export type RewardClaimsAvgFields = {
	readonly __typename?: 'RewardClaimsAvgFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly nftId?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
	readonly rewardId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "RewardClaims" */
export type RewardClaimsAvgOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly nftId?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
	readonly rewardId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "RewardClaims". All fields are combined with a logical 'AND'. */
export type RewardClaimsBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<RewardClaimsBoolExp>>
	readonly _not?: InputMaybe<RewardClaimsBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<RewardClaimsBoolExp>>
	readonly battlepassParticipant?: InputMaybe<BattlepassParticipantsBoolExp>
	readonly battlepassReward?: InputMaybe<BattlepassRewardsBoolExp>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly nftId?: InputMaybe<IntComparisonExp>
	readonly participantId?: InputMaybe<IntComparisonExp>
	readonly rewardId?: InputMaybe<IntComparisonExp>
	readonly syncStatus?: InputMaybe<EnumRewardClaimsSyncStatusComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "RewardClaims" */
export enum RewardClaimsConstraint {
	/** unique or primary key constraint on columns "id" */
	RewardClaimsPkey = 'RewardClaims_pkey',
}

/** input type for incrementing numeric columns in table "RewardClaims" */
export type RewardClaimsIncInput = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly nftId?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
	readonly rewardId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "RewardClaims" */
export type RewardClaimsInsertInput = {
	readonly battlepassParticipant?: InputMaybe<BattlepassParticipantsObjRelInsertInput>
	readonly battlepassReward?: InputMaybe<BattlepassRewardsObjRelInsertInput>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly nftId?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
	readonly rewardId?: InputMaybe<Scalars['Int']>
	readonly syncStatus?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type RewardClaimsMaxFields = {
	readonly __typename?: 'RewardClaimsMaxFields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly nftId?: Maybe<Scalars['Int']>
	readonly participantId?: Maybe<Scalars['Int']>
	readonly rewardId?: Maybe<Scalars['Int']>
	readonly syncStatus?: Maybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "RewardClaims" */
export type RewardClaimsMaxOrderBy = {
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly nftId?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
	readonly rewardId?: InputMaybe<OrderBy>
	readonly syncStatus?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type RewardClaimsMinFields = {
	readonly __typename?: 'RewardClaimsMinFields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly nftId?: Maybe<Scalars['Int']>
	readonly participantId?: Maybe<Scalars['Int']>
	readonly rewardId?: Maybe<Scalars['Int']>
	readonly syncStatus?: Maybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "RewardClaims" */
export type RewardClaimsMinOrderBy = {
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly nftId?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
	readonly rewardId?: InputMaybe<OrderBy>
	readonly syncStatus?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "RewardClaims" */
export type RewardClaimsMutationResponse = {
	readonly __typename?: 'RewardClaimsMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<RewardClaims>
}

/** on_conflict condition type for table "RewardClaims" */
export type RewardClaimsOnConflict = {
	readonly constraint: RewardClaimsConstraint
	readonly updateColumns?: ReadonlyArray<RewardClaimsUpdateColumn>
	readonly where?: InputMaybe<RewardClaimsBoolExp>
}

/** Ordering options when selecting data from "RewardClaims". */
export type RewardClaimsOrderBy = {
	readonly battlepassParticipant?: InputMaybe<BattlepassParticipantsOrderBy>
	readonly battlepassReward?: InputMaybe<BattlepassRewardsOrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly nftId?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
	readonly rewardId?: InputMaybe<OrderBy>
	readonly syncStatus?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: RewardClaims */
export type RewardClaimsPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "RewardClaims" */
export enum RewardClaimsSelectColumn {
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	NftId = 'nftId',
	/** column name */
	ParticipantId = 'participantId',
	/** column name */
	RewardId = 'rewardId',
	/** column name */
	SyncStatus = 'syncStatus',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "RewardClaims" */
export type RewardClaimsSetInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly nftId?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
	readonly rewardId?: InputMaybe<Scalars['Int']>
	readonly syncStatus?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type RewardClaimsStddevFields = {
	readonly __typename?: 'RewardClaimsStddevFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly nftId?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
	readonly rewardId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "RewardClaims" */
export type RewardClaimsStddevOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly nftId?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
	readonly rewardId?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type RewardClaimsStddevPopFields = {
	readonly __typename?: 'RewardClaimsStddevPopFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly nftId?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
	readonly rewardId?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "RewardClaims" */
export type RewardClaimsStddevPopOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly nftId?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
	readonly rewardId?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type RewardClaimsStddevSampFields = {
	readonly __typename?: 'RewardClaimsStddevSampFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly nftId?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
	readonly rewardId?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "RewardClaims" */
export type RewardClaimsStddevSampOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly nftId?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
	readonly rewardId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "RewardClaims" */
export type RewardClaimsStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: RewardClaimsStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type RewardClaimsStreamCursorValueInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly nftId?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
	readonly rewardId?: InputMaybe<Scalars['Int']>
	readonly syncStatus?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type RewardClaimsSumFields = {
	readonly __typename?: 'RewardClaimsSumFields'
	readonly id?: Maybe<Scalars['Int']>
	readonly nftId?: Maybe<Scalars['Int']>
	readonly participantId?: Maybe<Scalars['Int']>
	readonly rewardId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "RewardClaims" */
export type RewardClaimsSumOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly nftId?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
	readonly rewardId?: InputMaybe<OrderBy>
}

/** update columns of table "RewardClaims" */
export enum RewardClaimsUpdateColumn {
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	NftId = 'nftId',
	/** column name */
	ParticipantId = 'participantId',
	/** column name */
	RewardId = 'rewardId',
	/** column name */
	SyncStatus = 'syncStatus',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type RewardClaimsUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<RewardClaimsIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<RewardClaimsSetInput>
	/** filter the rows which have to be updated */
	readonly where: RewardClaimsBoolExp
}

/** aggregate varPop on columns */
export type RewardClaimsVarPopFields = {
	readonly __typename?: 'RewardClaimsVarPopFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly nftId?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
	readonly rewardId?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "RewardClaims" */
export type RewardClaimsVarPopOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly nftId?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
	readonly rewardId?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type RewardClaimsVarSampFields = {
	readonly __typename?: 'RewardClaimsVarSampFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly nftId?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
	readonly rewardId?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "RewardClaims" */
export type RewardClaimsVarSampOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly nftId?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
	readonly rewardId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type RewardClaimsVarianceFields = {
	readonly __typename?: 'RewardClaimsVarianceFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly nftId?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
	readonly rewardId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "RewardClaims" */
export type RewardClaimsVarianceOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly nftId?: InputMaybe<OrderBy>
	readonly participantId?: InputMaybe<OrderBy>
	readonly rewardId?: InputMaybe<OrderBy>
}

/** columns and relationships of "sense_entity" */
export type SenseEntity = {
	readonly __typename?: 'SenseEntity'
	readonly cid: Scalars['String']
	readonly createdAtBlock: Scalars['Int']
	readonly experience: Scalars['numeric']
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly identityId?: Maybe<Scalars['String']>
	readonly reputation: Scalars['numeric']
	readonly trust: Scalars['numeric']
	readonly updatedAtBlock: Scalars['Int']
}

/** aggregated selection of "sense_entity" */
export type SenseEntityAggregate = {
	readonly __typename?: 'SenseEntityAggregate'
	readonly aggregate?: Maybe<SenseEntityAggregateFields>
	readonly nodes: ReadonlyArray<SenseEntity>
}

export type SenseEntityAggregateBoolExp = {
	readonly count?: InputMaybe<SenseEntityAggregateBoolExpCount>
}

/** aggregate fields of "sense_entity" */
export type SenseEntityAggregateFields = {
	readonly __typename?: 'SenseEntityAggregateFields'
	readonly avg?: Maybe<SenseEntityAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<SenseEntityMaxFields>
	readonly min?: Maybe<SenseEntityMinFields>
	readonly stddev?: Maybe<SenseEntityStddevFields>
	readonly stddevPop?: Maybe<SenseEntityStddevPopFields>
	readonly stddevSamp?: Maybe<SenseEntityStddevSampFields>
	readonly sum?: Maybe<SenseEntitySumFields>
	readonly varPop?: Maybe<SenseEntityVarPopFields>
	readonly varSamp?: Maybe<SenseEntityVarSampFields>
	readonly variance?: Maybe<SenseEntityVarianceFields>
}

/** aggregate fields of "sense_entity" */
export type SenseEntityAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<SenseEntitySelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "sense_entity" */
export type SenseEntityAggregateOrderBy = {
	readonly avg?: InputMaybe<SenseEntityAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<SenseEntityMaxOrderBy>
	readonly min?: InputMaybe<SenseEntityMinOrderBy>
	readonly stddev?: InputMaybe<SenseEntityStddevOrderBy>
	readonly stddevPop?: InputMaybe<SenseEntityStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<SenseEntityStddevSampOrderBy>
	readonly sum?: InputMaybe<SenseEntitySumOrderBy>
	readonly varPop?: InputMaybe<SenseEntityVarPopOrderBy>
	readonly varSamp?: InputMaybe<SenseEntityVarSampOrderBy>
	readonly variance?: InputMaybe<SenseEntityVarianceOrderBy>
}

/** input type for inserting array relation for remote table "sense_entity" */
export type SenseEntityArrRelInsertInput = {
	readonly data: ReadonlyArray<SenseEntityInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<SenseEntityOnConflict>
}

/** aggregate avg on columns */
export type SenseEntityAvgFields = {
	readonly __typename?: 'SenseEntityAvgFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly experience?: Maybe<Scalars['Float']>
	readonly reputation?: Maybe<Scalars['Float']>
	readonly trust?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "sense_entity" */
export type SenseEntityAvgOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly experience?: InputMaybe<OrderBy>
	readonly reputation?: InputMaybe<OrderBy>
	readonly trust?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "sense_entity". All fields are combined with a logical 'AND'. */
export type SenseEntityBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<SenseEntityBoolExp>>
	readonly _not?: InputMaybe<SenseEntityBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<SenseEntityBoolExp>>
	readonly cid?: InputMaybe<StringComparisonExp>
	readonly createdAtBlock?: InputMaybe<IntComparisonExp>
	readonly experience?: InputMaybe<NumericComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly identity?: InputMaybe<IdentityBoolExp>
	readonly identityId?: InputMaybe<StringComparisonExp>
	readonly reputation?: InputMaybe<NumericComparisonExp>
	readonly trust?: InputMaybe<NumericComparisonExp>
	readonly updatedAtBlock?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "sense_entity" */
export enum SenseEntityConstraint {
	/** unique or primary key constraint on columns "id" */
	PkB37964c035bf9449acdcd249e56 = 'PK_b37964c035bf9449acdcd249e56',
}

/** input type for incrementing numeric columns in table "sense_entity" */
export type SenseEntityIncInput = {
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly experience?: InputMaybe<Scalars['numeric']>
	readonly reputation?: InputMaybe<Scalars['numeric']>
	readonly trust?: InputMaybe<Scalars['numeric']>
	readonly updatedAtBlock?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "sense_entity" */
export type SenseEntityInsertInput = {
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly experience?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<IdentityObjRelInsertInput>
	readonly identityId?: InputMaybe<Scalars['String']>
	readonly reputation?: InputMaybe<Scalars['numeric']>
	readonly trust?: InputMaybe<Scalars['numeric']>
	readonly updatedAtBlock?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type SenseEntityMaxFields = {
	readonly __typename?: 'SenseEntityMaxFields'
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAtBlock?: Maybe<Scalars['Int']>
	readonly experience?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly identityId?: Maybe<Scalars['String']>
	readonly reputation?: Maybe<Scalars['numeric']>
	readonly trust?: Maybe<Scalars['numeric']>
	readonly updatedAtBlock?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "sense_entity" */
export type SenseEntityMaxOrderBy = {
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly experience?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly reputation?: InputMaybe<OrderBy>
	readonly trust?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type SenseEntityMinFields = {
	readonly __typename?: 'SenseEntityMinFields'
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAtBlock?: Maybe<Scalars['Int']>
	readonly experience?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly identityId?: Maybe<Scalars['String']>
	readonly reputation?: Maybe<Scalars['numeric']>
	readonly trust?: Maybe<Scalars['numeric']>
	readonly updatedAtBlock?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "sense_entity" */
export type SenseEntityMinOrderBy = {
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly experience?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly reputation?: InputMaybe<OrderBy>
	readonly trust?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "sense_entity" */
export type SenseEntityMutationResponse = {
	readonly __typename?: 'SenseEntityMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<SenseEntity>
}

/** on_conflict condition type for table "sense_entity" */
export type SenseEntityOnConflict = {
	readonly constraint: SenseEntityConstraint
	readonly updateColumns?: ReadonlyArray<SenseEntityUpdateColumn>
	readonly where?: InputMaybe<SenseEntityBoolExp>
}

/** Ordering options when selecting data from "sense_entity". */
export type SenseEntityOrderBy = {
	readonly cid?: InputMaybe<OrderBy>
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly experience?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentityOrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly reputation?: InputMaybe<OrderBy>
	readonly trust?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** primary key columns input for table: sense_entity */
export type SenseEntityPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "sense_entity" */
export enum SenseEntitySelectColumn {
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAtBlock = 'createdAtBlock',
	/** column name */
	Experience = 'experience',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
	/** column name */
	Reputation = 'reputation',
	/** column name */
	Trust = 'trust',
	/** column name */
	UpdatedAtBlock = 'updatedAtBlock',
}

/** input type for updating data in table "sense_entity" */
export type SenseEntitySetInput = {
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly experience?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identityId?: InputMaybe<Scalars['String']>
	readonly reputation?: InputMaybe<Scalars['numeric']>
	readonly trust?: InputMaybe<Scalars['numeric']>
	readonly updatedAtBlock?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type SenseEntityStddevFields = {
	readonly __typename?: 'SenseEntityStddevFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly experience?: Maybe<Scalars['Float']>
	readonly reputation?: Maybe<Scalars['Float']>
	readonly trust?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "sense_entity" */
export type SenseEntityStddevOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly experience?: InputMaybe<OrderBy>
	readonly reputation?: InputMaybe<OrderBy>
	readonly trust?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type SenseEntityStddevPopFields = {
	readonly __typename?: 'SenseEntityStddevPopFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly experience?: Maybe<Scalars['Float']>
	readonly reputation?: Maybe<Scalars['Float']>
	readonly trust?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "sense_entity" */
export type SenseEntityStddevPopOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly experience?: InputMaybe<OrderBy>
	readonly reputation?: InputMaybe<OrderBy>
	readonly trust?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type SenseEntityStddevSampFields = {
	readonly __typename?: 'SenseEntityStddevSampFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly experience?: Maybe<Scalars['Float']>
	readonly reputation?: Maybe<Scalars['Float']>
	readonly trust?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "sense_entity" */
export type SenseEntityStddevSampOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly experience?: InputMaybe<OrderBy>
	readonly reputation?: InputMaybe<OrderBy>
	readonly trust?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "sense_entity" */
export type SenseEntityStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: SenseEntityStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type SenseEntityStreamCursorValueInput = {
	readonly cid?: InputMaybe<Scalars['String']>
	readonly createdAtBlock?: InputMaybe<Scalars['Int']>
	readonly experience?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identityId?: InputMaybe<Scalars['String']>
	readonly reputation?: InputMaybe<Scalars['numeric']>
	readonly trust?: InputMaybe<Scalars['numeric']>
	readonly updatedAtBlock?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type SenseEntitySumFields = {
	readonly __typename?: 'SenseEntitySumFields'
	readonly createdAtBlock?: Maybe<Scalars['Int']>
	readonly experience?: Maybe<Scalars['numeric']>
	readonly reputation?: Maybe<Scalars['numeric']>
	readonly trust?: Maybe<Scalars['numeric']>
	readonly updatedAtBlock?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "sense_entity" */
export type SenseEntitySumOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly experience?: InputMaybe<OrderBy>
	readonly reputation?: InputMaybe<OrderBy>
	readonly trust?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** update columns of table "sense_entity" */
export enum SenseEntityUpdateColumn {
	/** column name */
	Cid = 'cid',
	/** column name */
	CreatedAtBlock = 'createdAtBlock',
	/** column name */
	Experience = 'experience',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
	/** column name */
	Reputation = 'reputation',
	/** column name */
	Trust = 'trust',
	/** column name */
	UpdatedAtBlock = 'updatedAtBlock',
}

export type SenseEntityUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<SenseEntityIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<SenseEntitySetInput>
	/** filter the rows which have to be updated */
	readonly where: SenseEntityBoolExp
}

/** aggregate varPop on columns */
export type SenseEntityVarPopFields = {
	readonly __typename?: 'SenseEntityVarPopFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly experience?: Maybe<Scalars['Float']>
	readonly reputation?: Maybe<Scalars['Float']>
	readonly trust?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "sense_entity" */
export type SenseEntityVarPopOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly experience?: InputMaybe<OrderBy>
	readonly reputation?: InputMaybe<OrderBy>
	readonly trust?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type SenseEntityVarSampFields = {
	readonly __typename?: 'SenseEntityVarSampFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly experience?: Maybe<Scalars['Float']>
	readonly reputation?: Maybe<Scalars['Float']>
	readonly trust?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "sense_entity" */
export type SenseEntityVarSampOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly experience?: InputMaybe<OrderBy>
	readonly reputation?: InputMaybe<OrderBy>
	readonly trust?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type SenseEntityVarianceFields = {
	readonly __typename?: 'SenseEntityVarianceFields'
	readonly createdAtBlock?: Maybe<Scalars['Float']>
	readonly experience?: Maybe<Scalars['Float']>
	readonly reputation?: Maybe<Scalars['Float']>
	readonly trust?: Maybe<Scalars['Float']>
	readonly updatedAtBlock?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "sense_entity" */
export type SenseEntityVarianceOrderBy = {
	readonly createdAtBlock?: InputMaybe<OrderBy>
	readonly experience?: InputMaybe<OrderBy>
	readonly reputation?: InputMaybe<OrderBy>
	readonly trust?: InputMaybe<OrderBy>
	readonly updatedAtBlock?: InputMaybe<OrderBy>
}

/** columns and relationships of "Session" */
export type Session = {
	readonly __typename?: 'Session'
	readonly address: Scalars['String']
	readonly id: Scalars['bigint']
	readonly key: Scalars['String']
	readonly updatedAt: Scalars['timestamp']
}

/** aggregated selection of "Session" */
export type SessionAggregate = {
	readonly __typename?: 'SessionAggregate'
	readonly aggregate?: Maybe<SessionAggregateFields>
	readonly nodes: ReadonlyArray<Session>
}

/** aggregate fields of "Session" */
export type SessionAggregateFields = {
	readonly __typename?: 'SessionAggregateFields'
	readonly avg?: Maybe<SessionAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<SessionMaxFields>
	readonly min?: Maybe<SessionMinFields>
	readonly stddev?: Maybe<SessionStddevFields>
	readonly stddevPop?: Maybe<SessionStddevPopFields>
	readonly stddevSamp?: Maybe<SessionStddevSampFields>
	readonly sum?: Maybe<SessionSumFields>
	readonly varPop?: Maybe<SessionVarPopFields>
	readonly varSamp?: Maybe<SessionVarSampFields>
	readonly variance?: Maybe<SessionVarianceFields>
}

/** aggregate fields of "Session" */
export type SessionAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<SessionSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type SessionAvgFields = {
	readonly __typename?: 'SessionAvgFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "Session". All fields are combined with a logical 'AND'. */
export type SessionBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<SessionBoolExp>>
	readonly _not?: InputMaybe<SessionBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<SessionBoolExp>>
	readonly address?: InputMaybe<StringComparisonExp>
	readonly id?: InputMaybe<BigintComparisonExp>
	readonly key?: InputMaybe<StringComparisonExp>
	readonly updatedAt?: InputMaybe<TimestampComparisonExp>
}

/** unique or primary key constraints on table "Session" */
export enum SessionConstraint {
	/** unique or primary key constraint on columns "address" */
	SessionAddressKey = 'Session_address_key',
	/** unique or primary key constraint on columns "key" */
	SessionKeyKey = 'Session_key_key',
	/** unique or primary key constraint on columns "id" */
	SessionPkey = 'Session_pkey',
}

/** input type for incrementing numeric columns in table "Session" */
export type SessionIncInput = {
	readonly id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "Session" */
export type SessionInsertInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['bigint']>
	readonly key?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type SessionMaxFields = {
	readonly __typename?: 'SessionMaxFields'
	readonly address?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['bigint']>
	readonly key?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type SessionMinFields = {
	readonly __typename?: 'SessionMinFields'
	readonly address?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['bigint']>
	readonly key?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "Session" */
export type SessionMutationResponse = {
	readonly __typename?: 'SessionMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Session>
}

/** on_conflict condition type for table "Session" */
export type SessionOnConflict = {
	readonly constraint: SessionConstraint
	readonly updateColumns?: ReadonlyArray<SessionUpdateColumn>
	readonly where?: InputMaybe<SessionBoolExp>
}

/** Ordering options when selecting data from "Session". */
export type SessionOrderBy = {
	readonly address?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly key?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: Session */
export type SessionPkColumnsInput = {
	readonly id: Scalars['bigint']
}

/** select columns of table "Session" */
export enum SessionSelectColumn {
	/** column name */
	Address = 'address',
	/** column name */
	Id = 'id',
	/** column name */
	Key = 'key',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "Session" */
export type SessionSetInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['bigint']>
	readonly key?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type SessionStddevFields = {
	readonly __typename?: 'SessionStddevFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type SessionStddevPopFields = {
	readonly __typename?: 'SessionStddevPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type SessionStddevSampFields = {
	readonly __typename?: 'SessionStddevSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "Session" */
export type SessionStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: SessionStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type SessionStreamCursorValueInput = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['bigint']>
	readonly key?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** aggregate sum on columns */
export type SessionSumFields = {
	readonly __typename?: 'SessionSumFields'
	readonly id?: Maybe<Scalars['bigint']>
}

/** update columns of table "Session" */
export enum SessionUpdateColumn {
	/** column name */
	Address = 'address',
	/** column name */
	Id = 'id',
	/** column name */
	Key = 'key',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type SessionUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<SessionIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<SessionSetInput>
	/** filter the rows which have to be updated */
	readonly where: SessionBoolExp
}

/** aggregate varPop on columns */
export type SessionVarPopFields = {
	readonly __typename?: 'SessionVarPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type SessionVarSampFields = {
	readonly __typename?: 'SessionVarSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type SessionVarianceFields = {
	readonly __typename?: 'SessionVarianceFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "squid_processor.status" */
export type SquidProcessorStatus = {
	readonly __typename?: 'SquidProcessorStatus'
	readonly height: Scalars['Int']
	readonly id: Scalars['Int']
}

/** aggregated selection of "squid_processor.status" */
export type SquidProcessorStatusAggregate = {
	readonly __typename?: 'SquidProcessorStatusAggregate'
	readonly aggregate?: Maybe<SquidProcessorStatusAggregateFields>
	readonly nodes: ReadonlyArray<SquidProcessorStatus>
}

/** aggregate fields of "squid_processor.status" */
export type SquidProcessorStatusAggregateFields = {
	readonly __typename?: 'SquidProcessorStatusAggregateFields'
	readonly avg?: Maybe<SquidProcessorStatusAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<SquidProcessorStatusMaxFields>
	readonly min?: Maybe<SquidProcessorStatusMinFields>
	readonly stddev?: Maybe<SquidProcessorStatusStddevFields>
	readonly stddevPop?: Maybe<SquidProcessorStatusStddevPopFields>
	readonly stddevSamp?: Maybe<SquidProcessorStatusStddevSampFields>
	readonly sum?: Maybe<SquidProcessorStatusSumFields>
	readonly varPop?: Maybe<SquidProcessorStatusVarPopFields>
	readonly varSamp?: Maybe<SquidProcessorStatusVarSampFields>
	readonly variance?: Maybe<SquidProcessorStatusVarianceFields>
}

/** aggregate fields of "squid_processor.status" */
export type SquidProcessorStatusAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<SquidProcessorStatusSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type SquidProcessorStatusAvgFields = {
	readonly __typename?: 'SquidProcessorStatusAvgFields'
	readonly height?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "squid_processor.status". All fields are combined with a logical 'AND'. */
export type SquidProcessorStatusBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<SquidProcessorStatusBoolExp>>
	readonly _not?: InputMaybe<SquidProcessorStatusBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<SquidProcessorStatusBoolExp>>
	readonly height?: InputMaybe<IntComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "squid_processor.status" */
export enum SquidProcessorStatusConstraint {
	/** unique or primary key constraint on columns "id" */
	StatusPkey = 'status_pkey',
}

/** input type for incrementing numeric columns in table "squid_processor.status" */
export type SquidProcessorStatusIncInput = {
	readonly height?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "squid_processor.status" */
export type SquidProcessorStatusInsertInput = {
	readonly height?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type SquidProcessorStatusMaxFields = {
	readonly __typename?: 'SquidProcessorStatusMaxFields'
	readonly height?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type SquidProcessorStatusMinFields = {
	readonly __typename?: 'SquidProcessorStatusMinFields'
	readonly height?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
}

/** response of any mutation on the table "squid_processor.status" */
export type SquidProcessorStatusMutationResponse = {
	readonly __typename?: 'SquidProcessorStatusMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<SquidProcessorStatus>
}

/** on_conflict condition type for table "squid_processor.status" */
export type SquidProcessorStatusOnConflict = {
	readonly constraint: SquidProcessorStatusConstraint
	readonly updateColumns?: ReadonlyArray<SquidProcessorStatusUpdateColumn>
	readonly where?: InputMaybe<SquidProcessorStatusBoolExp>
}

/** Ordering options when selecting data from "squid_processor.status". */
export type SquidProcessorStatusOrderBy = {
	readonly height?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
}

/** primary key columns input for table: squid_processor.status */
export type SquidProcessorStatusPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "squid_processor.status" */
export enum SquidProcessorStatusSelectColumn {
	/** column name */
	Height = 'height',
	/** column name */
	Id = 'id',
}

/** input type for updating data in table "squid_processor.status" */
export type SquidProcessorStatusSetInput = {
	readonly height?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type SquidProcessorStatusStddevFields = {
	readonly __typename?: 'SquidProcessorStatusStddevFields'
	readonly height?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type SquidProcessorStatusStddevPopFields = {
	readonly __typename?: 'SquidProcessorStatusStddevPopFields'
	readonly height?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type SquidProcessorStatusStddevSampFields = {
	readonly __typename?: 'SquidProcessorStatusStddevSampFields'
	readonly height?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "squid_processor_status" */
export type SquidProcessorStatusStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: SquidProcessorStatusStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type SquidProcessorStatusStreamCursorValueInput = {
	readonly height?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type SquidProcessorStatusSumFields = {
	readonly __typename?: 'SquidProcessorStatusSumFields'
	readonly height?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "squid_processor.status" */
export enum SquidProcessorStatusUpdateColumn {
	/** column name */
	Height = 'height',
	/** column name */
	Id = 'id',
}

export type SquidProcessorStatusUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<SquidProcessorStatusIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<SquidProcessorStatusSetInput>
	/** filter the rows which have to be updated */
	readonly where: SquidProcessorStatusBoolExp
}

/** aggregate varPop on columns */
export type SquidProcessorStatusVarPopFields = {
	readonly __typename?: 'SquidProcessorStatusVarPopFields'
	readonly height?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type SquidProcessorStatusVarSampFields = {
	readonly __typename?: 'SquidProcessorStatusVarSampFields'
	readonly height?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type SquidProcessorStatusVarianceFields = {
	readonly __typename?: 'SquidProcessorStatusVarianceFields'
	readonly height?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['String']>
	readonly _gt?: InputMaybe<Scalars['String']>
	readonly _gte?: InputMaybe<Scalars['String']>
	/** does the column match the given case-insensitive pattern */
	readonly _ilike?: InputMaybe<Scalars['String']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['String']>>
	/** does the column match the given POSIX regular expression, case insensitive */
	readonly _iregex?: InputMaybe<Scalars['String']>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
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

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['timestamp']>
	readonly _gt?: InputMaybe<Scalars['timestamp']>
	readonly _gte?: InputMaybe<Scalars['timestamp']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['timestamp']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['timestamp']>
	readonly _lte?: InputMaybe<Scalars['timestamp']>
	readonly _neq?: InputMaybe<Scalars['timestamp']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['timestamp']>>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['timestamptz']>
	readonly _gt?: InputMaybe<Scalars['timestamptz']>
	readonly _gte?: InputMaybe<Scalars['timestamptz']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['timestamptz']>
	readonly _lte?: InputMaybe<Scalars['timestamptz']>
	readonly _neq?: InputMaybe<Scalars['timestamptz']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>
}

/** columns and relationships of "TwitterActivities" */
export type TwitterActivities = {
	readonly __typename?: 'TwitterActivities'
	readonly activityId?: Maybe<Scalars['String']>
	readonly activityType?: Maybe<Scalars['enum_TwitterActivities_activityType']>
	readonly authorId?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id: Scalars['Int']
	readonly objectAuthor?: Maybe<Scalars['String']>
	readonly objectId?: Maybe<Scalars['String']>
	readonly updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "TwitterActivities" */
export type TwitterActivitiesAggregate = {
	readonly __typename?: 'TwitterActivitiesAggregate'
	readonly aggregate?: Maybe<TwitterActivitiesAggregateFields>
	readonly nodes: ReadonlyArray<TwitterActivities>
}

/** aggregate fields of "TwitterActivities" */
export type TwitterActivitiesAggregateFields = {
	readonly __typename?: 'TwitterActivitiesAggregateFields'
	readonly avg?: Maybe<TwitterActivitiesAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<TwitterActivitiesMaxFields>
	readonly min?: Maybe<TwitterActivitiesMinFields>
	readonly stddev?: Maybe<TwitterActivitiesStddevFields>
	readonly stddevPop?: Maybe<TwitterActivitiesStddevPopFields>
	readonly stddevSamp?: Maybe<TwitterActivitiesStddevSampFields>
	readonly sum?: Maybe<TwitterActivitiesSumFields>
	readonly varPop?: Maybe<TwitterActivitiesVarPopFields>
	readonly varSamp?: Maybe<TwitterActivitiesVarSampFields>
	readonly variance?: Maybe<TwitterActivitiesVarianceFields>
}

/** aggregate fields of "TwitterActivities" */
export type TwitterActivitiesAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<TwitterActivitiesSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type TwitterActivitiesAvgFields = {
	readonly __typename?: 'TwitterActivitiesAvgFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "TwitterActivities". All fields are combined with a logical 'AND'. */
export type TwitterActivitiesBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<TwitterActivitiesBoolExp>>
	readonly _not?: InputMaybe<TwitterActivitiesBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<TwitterActivitiesBoolExp>>
	readonly activityId?: InputMaybe<StringComparisonExp>
	readonly activityType?: InputMaybe<EnumTwitterActivitiesActivityTypeComparisonExp>
	readonly authorId?: InputMaybe<StringComparisonExp>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly objectAuthor?: InputMaybe<StringComparisonExp>
	readonly objectId?: InputMaybe<StringComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "TwitterActivities" */
export enum TwitterActivitiesConstraint {
	/** unique or primary key constraint on columns "id" */
	TwitterActivitiesPkey = 'TwitterActivities_pkey',
}

/** input type for incrementing numeric columns in table "TwitterActivities" */
export type TwitterActivitiesIncInput = {
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "TwitterActivities" */
export type TwitterActivitiesInsertInput = {
	readonly activityId?: InputMaybe<Scalars['String']>
	readonly activityType?: InputMaybe<Scalars['enum_TwitterActivities_activityType']>
	readonly authorId?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly objectAuthor?: InputMaybe<Scalars['String']>
	readonly objectId?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type TwitterActivitiesMaxFields = {
	readonly __typename?: 'TwitterActivitiesMaxFields'
	readonly activityId?: Maybe<Scalars['String']>
	readonly activityType?: Maybe<Scalars['enum_TwitterActivities_activityType']>
	readonly authorId?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly objectAuthor?: Maybe<Scalars['String']>
	readonly objectId?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type TwitterActivitiesMinFields = {
	readonly __typename?: 'TwitterActivitiesMinFields'
	readonly activityId?: Maybe<Scalars['String']>
	readonly activityType?: Maybe<Scalars['enum_TwitterActivities_activityType']>
	readonly authorId?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly objectAuthor?: Maybe<Scalars['String']>
	readonly objectId?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "TwitterActivities" */
export type TwitterActivitiesMutationResponse = {
	readonly __typename?: 'TwitterActivitiesMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<TwitterActivities>
}

/** on_conflict condition type for table "TwitterActivities" */
export type TwitterActivitiesOnConflict = {
	readonly constraint: TwitterActivitiesConstraint
	readonly updateColumns?: ReadonlyArray<TwitterActivitiesUpdateColumn>
	readonly where?: InputMaybe<TwitterActivitiesBoolExp>
}

/** Ordering options when selecting data from "TwitterActivities". */
export type TwitterActivitiesOrderBy = {
	readonly activityId?: InputMaybe<OrderBy>
	readonly activityType?: InputMaybe<OrderBy>
	readonly authorId?: InputMaybe<OrderBy>
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly objectAuthor?: InputMaybe<OrderBy>
	readonly objectId?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: TwitterActivities */
export type TwitterActivitiesPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "TwitterActivities" */
export enum TwitterActivitiesSelectColumn {
	/** column name */
	ActivityId = 'activityId',
	/** column name */
	ActivityType = 'activityType',
	/** column name */
	AuthorId = 'authorId',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	ObjectAuthor = 'objectAuthor',
	/** column name */
	ObjectId = 'objectId',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "TwitterActivities" */
export type TwitterActivitiesSetInput = {
	readonly activityId?: InputMaybe<Scalars['String']>
	readonly activityType?: InputMaybe<Scalars['enum_TwitterActivities_activityType']>
	readonly authorId?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly objectAuthor?: InputMaybe<Scalars['String']>
	readonly objectId?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type TwitterActivitiesStddevFields = {
	readonly __typename?: 'TwitterActivitiesStddevFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type TwitterActivitiesStddevPopFields = {
	readonly __typename?: 'TwitterActivitiesStddevPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type TwitterActivitiesStddevSampFields = {
	readonly __typename?: 'TwitterActivitiesStddevSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "TwitterActivities" */
export type TwitterActivitiesStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: TwitterActivitiesStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type TwitterActivitiesStreamCursorValueInput = {
	readonly activityId?: InputMaybe<Scalars['String']>
	readonly activityType?: InputMaybe<Scalars['enum_TwitterActivities_activityType']>
	readonly authorId?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly objectAuthor?: InputMaybe<Scalars['String']>
	readonly objectId?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type TwitterActivitiesSumFields = {
	readonly __typename?: 'TwitterActivitiesSumFields'
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "TwitterActivities" */
export enum TwitterActivitiesUpdateColumn {
	/** column name */
	ActivityId = 'activityId',
	/** column name */
	ActivityType = 'activityType',
	/** column name */
	AuthorId = 'authorId',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	ObjectAuthor = 'objectAuthor',
	/** column name */
	ObjectId = 'objectId',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type TwitterActivitiesUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<TwitterActivitiesIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<TwitterActivitiesSetInput>
	/** filter the rows which have to be updated */
	readonly where: TwitterActivitiesBoolExp
}

/** aggregate varPop on columns */
export type TwitterActivitiesVarPopFields = {
	readonly __typename?: 'TwitterActivitiesVarPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type TwitterActivitiesVarSampFields = {
	readonly __typename?: 'TwitterActivitiesVarSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type TwitterActivitiesVarianceFields = {
	readonly __typename?: 'TwitterActivitiesVarianceFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "TwitterSearches" */
export type TwitterSearches = {
	readonly __typename?: 'TwitterSearches'
	readonly createdAt: Scalars['timestamptz']
	readonly executedAt: Scalars['timestamptz']
	readonly id: Scalars['Int']
	readonly query?: Maybe<Scalars['String']>
	readonly updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "TwitterSearches" */
export type TwitterSearchesAggregate = {
	readonly __typename?: 'TwitterSearchesAggregate'
	readonly aggregate?: Maybe<TwitterSearchesAggregateFields>
	readonly nodes: ReadonlyArray<TwitterSearches>
}

/** aggregate fields of "TwitterSearches" */
export type TwitterSearchesAggregateFields = {
	readonly __typename?: 'TwitterSearchesAggregateFields'
	readonly avg?: Maybe<TwitterSearchesAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<TwitterSearchesMaxFields>
	readonly min?: Maybe<TwitterSearchesMinFields>
	readonly stddev?: Maybe<TwitterSearchesStddevFields>
	readonly stddevPop?: Maybe<TwitterSearchesStddevPopFields>
	readonly stddevSamp?: Maybe<TwitterSearchesStddevSampFields>
	readonly sum?: Maybe<TwitterSearchesSumFields>
	readonly varPop?: Maybe<TwitterSearchesVarPopFields>
	readonly varSamp?: Maybe<TwitterSearchesVarSampFields>
	readonly variance?: Maybe<TwitterSearchesVarianceFields>
}

/** aggregate fields of "TwitterSearches" */
export type TwitterSearchesAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<TwitterSearchesSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type TwitterSearchesAvgFields = {
	readonly __typename?: 'TwitterSearchesAvgFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "TwitterSearches". All fields are combined with a logical 'AND'. */
export type TwitterSearchesBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<TwitterSearchesBoolExp>>
	readonly _not?: InputMaybe<TwitterSearchesBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<TwitterSearchesBoolExp>>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly executedAt?: InputMaybe<TimestamptzComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly query?: InputMaybe<StringComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "TwitterSearches" */
export enum TwitterSearchesConstraint {
	/** unique or primary key constraint on columns "id" */
	TwitterSearchesPkey = 'TwitterSearches_pkey',
}

/** input type for incrementing numeric columns in table "TwitterSearches" */
export type TwitterSearchesIncInput = {
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "TwitterSearches" */
export type TwitterSearchesInsertInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly executedAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly query?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type TwitterSearchesMaxFields = {
	readonly __typename?: 'TwitterSearchesMaxFields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly executedAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly query?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type TwitterSearchesMinFields = {
	readonly __typename?: 'TwitterSearchesMinFields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly executedAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly query?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "TwitterSearches" */
export type TwitterSearchesMutationResponse = {
	readonly __typename?: 'TwitterSearchesMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<TwitterSearches>
}

/** on_conflict condition type for table "TwitterSearches" */
export type TwitterSearchesOnConflict = {
	readonly constraint: TwitterSearchesConstraint
	readonly updateColumns?: ReadonlyArray<TwitterSearchesUpdateColumn>
	readonly where?: InputMaybe<TwitterSearchesBoolExp>
}

/** Ordering options when selecting data from "TwitterSearches". */
export type TwitterSearchesOrderBy = {
	readonly createdAt?: InputMaybe<OrderBy>
	readonly executedAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly query?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: TwitterSearches */
export type TwitterSearchesPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "TwitterSearches" */
export enum TwitterSearchesSelectColumn {
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	ExecutedAt = 'executedAt',
	/** column name */
	Id = 'id',
	/** column name */
	Query = 'query',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "TwitterSearches" */
export type TwitterSearchesSetInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly executedAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly query?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type TwitterSearchesStddevFields = {
	readonly __typename?: 'TwitterSearchesStddevFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type TwitterSearchesStddevPopFields = {
	readonly __typename?: 'TwitterSearchesStddevPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type TwitterSearchesStddevSampFields = {
	readonly __typename?: 'TwitterSearchesStddevSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "TwitterSearches" */
export type TwitterSearchesStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: TwitterSearchesStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type TwitterSearchesStreamCursorValueInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly executedAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly query?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type TwitterSearchesSumFields = {
	readonly __typename?: 'TwitterSearchesSumFields'
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "TwitterSearches" */
export enum TwitterSearchesUpdateColumn {
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	ExecutedAt = 'executedAt',
	/** column name */
	Id = 'id',
	/** column name */
	Query = 'query',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type TwitterSearchesUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<TwitterSearchesIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<TwitterSearchesSetInput>
	/** filter the rows which have to be updated */
	readonly where: TwitterSearchesBoolExp
}

/** aggregate varPop on columns */
export type TwitterSearchesVarPopFields = {
	readonly __typename?: 'TwitterSearchesVarPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type TwitterSearchesVarSampFields = {
	readonly __typename?: 'TwitterSearchesVarSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type TwitterSearchesVarianceFields = {
	readonly __typename?: 'TwitterSearchesVarianceFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "TwitterUsers" */
export type TwitterUsers = {
	readonly __typename?: 'TwitterUsers'
	readonly createdAt: Scalars['timestamptz']
	readonly id: Scalars['Int']
	readonly twitterId: Scalars['String']
	readonly updatedAt: Scalars['timestamptz']
	readonly username: Scalars['String']
}

/** aggregated selection of "TwitterUsers" */
export type TwitterUsersAggregate = {
	readonly __typename?: 'TwitterUsersAggregate'
	readonly aggregate?: Maybe<TwitterUsersAggregateFields>
	readonly nodes: ReadonlyArray<TwitterUsers>
}

/** aggregate fields of "TwitterUsers" */
export type TwitterUsersAggregateFields = {
	readonly __typename?: 'TwitterUsersAggregateFields'
	readonly avg?: Maybe<TwitterUsersAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<TwitterUsersMaxFields>
	readonly min?: Maybe<TwitterUsersMinFields>
	readonly stddev?: Maybe<TwitterUsersStddevFields>
	readonly stddevPop?: Maybe<TwitterUsersStddevPopFields>
	readonly stddevSamp?: Maybe<TwitterUsersStddevSampFields>
	readonly sum?: Maybe<TwitterUsersSumFields>
	readonly varPop?: Maybe<TwitterUsersVarPopFields>
	readonly varSamp?: Maybe<TwitterUsersVarSampFields>
	readonly variance?: Maybe<TwitterUsersVarianceFields>
}

/** aggregate fields of "TwitterUsers" */
export type TwitterUsersAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<TwitterUsersSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type TwitterUsersAvgFields = {
	readonly __typename?: 'TwitterUsersAvgFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "TwitterUsers". All fields are combined with a logical 'AND'. */
export type TwitterUsersBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<TwitterUsersBoolExp>>
	readonly _not?: InputMaybe<TwitterUsersBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<TwitterUsersBoolExp>>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly twitterId?: InputMaybe<StringComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
	readonly username?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "TwitterUsers" */
export enum TwitterUsersConstraint {
	/** unique or primary key constraint on columns "id" */
	TwitterUsersPkey = 'TwitterUsers_pkey',
}

/** input type for incrementing numeric columns in table "TwitterUsers" */
export type TwitterUsersIncInput = {
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "TwitterUsers" */
export type TwitterUsersInsertInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly twitterId?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
	readonly username?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type TwitterUsersMaxFields = {
	readonly __typename?: 'TwitterUsersMaxFields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly twitterId?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
	readonly username?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type TwitterUsersMinFields = {
	readonly __typename?: 'TwitterUsersMinFields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly twitterId?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
	readonly username?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "TwitterUsers" */
export type TwitterUsersMutationResponse = {
	readonly __typename?: 'TwitterUsersMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<TwitterUsers>
}

/** on_conflict condition type for table "TwitterUsers" */
export type TwitterUsersOnConflict = {
	readonly constraint: TwitterUsersConstraint
	readonly updateColumns?: ReadonlyArray<TwitterUsersUpdateColumn>
	readonly where?: InputMaybe<TwitterUsersBoolExp>
}

/** Ordering options when selecting data from "TwitterUsers". */
export type TwitterUsersOrderBy = {
	readonly createdAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly twitterId?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
	readonly username?: InputMaybe<OrderBy>
}

/** primary key columns input for table: TwitterUsers */
export type TwitterUsersPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "TwitterUsers" */
export enum TwitterUsersSelectColumn {
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	TwitterId = 'twitterId',
	/** column name */
	UpdatedAt = 'updatedAt',
	/** column name */
	Username = 'username',
}

/** input type for updating data in table "TwitterUsers" */
export type TwitterUsersSetInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly twitterId?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
	readonly username?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type TwitterUsersStddevFields = {
	readonly __typename?: 'TwitterUsersStddevFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type TwitterUsersStddevPopFields = {
	readonly __typename?: 'TwitterUsersStddevPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type TwitterUsersStddevSampFields = {
	readonly __typename?: 'TwitterUsersStddevSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "TwitterUsers" */
export type TwitterUsersStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: TwitterUsersStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type TwitterUsersStreamCursorValueInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly twitterId?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
	readonly username?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type TwitterUsersSumFields = {
	readonly __typename?: 'TwitterUsersSumFields'
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "TwitterUsers" */
export enum TwitterUsersUpdateColumn {
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	TwitterId = 'twitterId',
	/** column name */
	UpdatedAt = 'updatedAt',
	/** column name */
	Username = 'username',
}

export type TwitterUsersUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<TwitterUsersIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<TwitterUsersSetInput>
	/** filter the rows which have to be updated */
	readonly where: TwitterUsersBoolExp
}

/** aggregate varPop on columns */
export type TwitterUsersVarPopFields = {
	readonly __typename?: 'TwitterUsersVarPopFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type TwitterUsersVarSampFields = {
	readonly __typename?: 'TwitterUsersVarSampFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type TwitterUsersVarianceFields = {
	readonly __typename?: 'TwitterUsersVarianceFields'
	readonly id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "UserTokens" */
export type UserTokens = {
	readonly __typename?: 'UserTokens'
	readonly createdAt: Scalars['timestamptz']
	readonly expiry?: Maybe<Scalars['timestamptz']>
	readonly id: Scalars['Int']
	/** An object relationship */
	readonly identity?: Maybe<Identities>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly source: Scalars['enum_UserTokens_source']
	readonly token: Scalars['String']
	readonly updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "UserTokens" */
export type UserTokensAggregate = {
	readonly __typename?: 'UserTokensAggregate'
	readonly aggregate?: Maybe<UserTokensAggregateFields>
	readonly nodes: ReadonlyArray<UserTokens>
}

export type UserTokensAggregateBoolExp = {
	readonly count?: InputMaybe<UserTokensAggregateBoolExpCount>
}

/** aggregate fields of "UserTokens" */
export type UserTokensAggregateFields = {
	readonly __typename?: 'UserTokensAggregateFields'
	readonly avg?: Maybe<UserTokensAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<UserTokensMaxFields>
	readonly min?: Maybe<UserTokensMinFields>
	readonly stddev?: Maybe<UserTokensStddevFields>
	readonly stddevPop?: Maybe<UserTokensStddevPopFields>
	readonly stddevSamp?: Maybe<UserTokensStddevSampFields>
	readonly sum?: Maybe<UserTokensSumFields>
	readonly varPop?: Maybe<UserTokensVarPopFields>
	readonly varSamp?: Maybe<UserTokensVarSampFields>
	readonly variance?: Maybe<UserTokensVarianceFields>
}

/** aggregate fields of "UserTokens" */
export type UserTokensAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<UserTokensSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "UserTokens" */
export type UserTokensAggregateOrderBy = {
	readonly avg?: InputMaybe<UserTokensAvgOrderBy>
	readonly count?: InputMaybe<OrderBy>
	readonly max?: InputMaybe<UserTokensMaxOrderBy>
	readonly min?: InputMaybe<UserTokensMinOrderBy>
	readonly stddev?: InputMaybe<UserTokensStddevOrderBy>
	readonly stddevPop?: InputMaybe<UserTokensStddevPopOrderBy>
	readonly stddevSamp?: InputMaybe<UserTokensStddevSampOrderBy>
	readonly sum?: InputMaybe<UserTokensSumOrderBy>
	readonly varPop?: InputMaybe<UserTokensVarPopOrderBy>
	readonly varSamp?: InputMaybe<UserTokensVarSampOrderBy>
	readonly variance?: InputMaybe<UserTokensVarianceOrderBy>
}

/** input type for inserting array relation for remote table "UserTokens" */
export type UserTokensArrRelInsertInput = {
	readonly data: ReadonlyArray<UserTokensInsertInput>
	/** upsert condition */
	readonly onConflict?: InputMaybe<UserTokensOnConflict>
}

/** aggregate avg on columns */
export type UserTokensAvgFields = {
	readonly __typename?: 'UserTokensAvgFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "UserTokens" */
export type UserTokensAvgOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "UserTokens". All fields are combined with a logical 'AND'. */
export type UserTokensBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<UserTokensBoolExp>>
	readonly _not?: InputMaybe<UserTokensBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<UserTokensBoolExp>>
	readonly createdAt?: InputMaybe<TimestamptzComparisonExp>
	readonly expiry?: InputMaybe<TimestamptzComparisonExp>
	readonly id?: InputMaybe<IntComparisonExp>
	readonly identity?: InputMaybe<IdentitiesBoolExp>
	readonly identityId?: InputMaybe<IntComparisonExp>
	readonly source?: InputMaybe<EnumUserTokensSourceComparisonExp>
	readonly token?: InputMaybe<StringComparisonExp>
	readonly updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "UserTokens" */
export enum UserTokensConstraint {
	/** unique or primary key constraint on columns "id" */
	UserTokensPkey = 'UserTokens_pkey',
}

/** input type for incrementing numeric columns in table "UserTokens" */
export type UserTokensIncInput = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "UserTokens" */
export type UserTokensInsertInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly expiry?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identity?: InputMaybe<IdentitiesObjRelInsertInput>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly source?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly token?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type UserTokensMaxFields = {
	readonly __typename?: 'UserTokensMaxFields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly expiry?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly source?: Maybe<Scalars['enum_UserTokens_source']>
	readonly token?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "UserTokens" */
export type UserTokensMaxOrderBy = {
	readonly createdAt?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly source?: InputMaybe<OrderBy>
	readonly token?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type UserTokensMinFields = {
	readonly __typename?: 'UserTokensMinFields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly expiry?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly source?: Maybe<Scalars['enum_UserTokens_source']>
	readonly token?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "UserTokens" */
export type UserTokensMinOrderBy = {
	readonly createdAt?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly source?: InputMaybe<OrderBy>
	readonly token?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "UserTokens" */
export type UserTokensMutationResponse = {
	readonly __typename?: 'UserTokensMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<UserTokens>
}

/** on_conflict condition type for table "UserTokens" */
export type UserTokensOnConflict = {
	readonly constraint: UserTokensConstraint
	readonly updateColumns?: ReadonlyArray<UserTokensUpdateColumn>
	readonly where?: InputMaybe<UserTokensBoolExp>
}

/** Ordering options when selecting data from "UserTokens". */
export type UserTokensOrderBy = {
	readonly createdAt?: InputMaybe<OrderBy>
	readonly expiry?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly identity?: InputMaybe<IdentitiesOrderBy>
	readonly identityId?: InputMaybe<OrderBy>
	readonly source?: InputMaybe<OrderBy>
	readonly token?: InputMaybe<OrderBy>
	readonly updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: UserTokens */
export type UserTokensPkColumnsInput = {
	readonly id: Scalars['Int']
}

/** select columns of table "UserTokens" */
export enum UserTokensSelectColumn {
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Expiry = 'expiry',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
	/** column name */
	Source = 'source',
	/** column name */
	Token = 'token',
	/** column name */
	UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "UserTokens" */
export type UserTokensSetInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly expiry?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly source?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly token?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type UserTokensStddevFields = {
	readonly __typename?: 'UserTokensStddevFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "UserTokens" */
export type UserTokensStddevOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
}

/** aggregate stddevPop on columns */
export type UserTokensStddevPopFields = {
	readonly __typename?: 'UserTokensStddevPopFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
}

/** order by stddevPop() on columns of table "UserTokens" */
export type UserTokensStddevPopOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
}

/** aggregate stddevSamp on columns */
export type UserTokensStddevSampFields = {
	readonly __typename?: 'UserTokensStddevSampFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
}

/** order by stddevSamp() on columns of table "UserTokens" */
export type UserTokensStddevSampOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "UserTokens" */
export type UserTokensStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: UserTokensStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type UserTokensStreamCursorValueInput = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly expiry?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly source?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly token?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type UserTokensSumFields = {
	readonly __typename?: 'UserTokensSumFields'
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "UserTokens" */
export type UserTokensSumOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
}

/** update columns of table "UserTokens" */
export enum UserTokensUpdateColumn {
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Expiry = 'expiry',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identityId',
	/** column name */
	Source = 'source',
	/** column name */
	Token = 'token',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type UserTokensUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<UserTokensIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<UserTokensSetInput>
	/** filter the rows which have to be updated */
	readonly where: UserTokensBoolExp
}

/** aggregate varPop on columns */
export type UserTokensVarPopFields = {
	readonly __typename?: 'UserTokensVarPopFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
}

/** order by varPop() on columns of table "UserTokens" */
export type UserTokensVarPopOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
}

/** aggregate varSamp on columns */
export type UserTokensVarSampFields = {
	readonly __typename?: 'UserTokensVarSampFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
}

/** order by varSamp() on columns of table "UserTokens" */
export type UserTokensVarSampOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type UserTokensVarianceFields = {
	readonly __typename?: 'UserTokensVarianceFields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "UserTokens" */
export type UserTokensVarianceOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly identityId?: InputMaybe<OrderBy>
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['uuid']>
	readonly _gt?: InputMaybe<Scalars['uuid']>
	readonly _gte?: InputMaybe<Scalars['uuid']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['uuid']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['uuid']>
	readonly _lte?: InputMaybe<Scalars['uuid']>
	readonly _neq?: InputMaybe<Scalars['uuid']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['uuid']>>
}

/** columns and relationships of "voting" */
export type Voting = {
	readonly __typename?: 'Voting'
	readonly id: Scalars['String']
	readonly majority: Scalars['String']
	readonly no: Scalars['numeric']
	/** An array relationship */
	readonly proposalVoters: ReadonlyArray<ProposalVoter>
	/** An aggregate relationship */
	readonly proposalVotersAggregate: ProposalVoterAggregate
	/** An array relationship */
	readonly proposals: ReadonlyArray<Proposal>
	/** An aggregate relationship */
	readonly proposalsAggregate: ProposalAggregate
	readonly quorum?: Maybe<Scalars['String']>
	readonly scale: Scalars['String']
	readonly unit: Scalars['String']
	readonly yes: Scalars['numeric']
}

/** columns and relationships of "voting" */
export type VotingProposalVotersArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalVoterSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalVoterOrderBy>>
	where?: InputMaybe<ProposalVoterBoolExp>
}

/** columns and relationships of "voting" */
export type VotingProposalVotersAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalVoterSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalVoterOrderBy>>
	where?: InputMaybe<ProposalVoterBoolExp>
}

/** columns and relationships of "voting" */
export type VotingProposalsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalOrderBy>>
	where?: InputMaybe<ProposalBoolExp>
}

/** columns and relationships of "voting" */
export type VotingProposalsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalOrderBy>>
	where?: InputMaybe<ProposalBoolExp>
}

/** aggregated selection of "voting" */
export type VotingAggregate = {
	readonly __typename?: 'VotingAggregate'
	readonly aggregate?: Maybe<VotingAggregateFields>
	readonly nodes: ReadonlyArray<Voting>
}

/** aggregate fields of "voting" */
export type VotingAggregateFields = {
	readonly __typename?: 'VotingAggregateFields'
	readonly avg?: Maybe<VotingAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<VotingMaxFields>
	readonly min?: Maybe<VotingMinFields>
	readonly stddev?: Maybe<VotingStddevFields>
	readonly stddevPop?: Maybe<VotingStddevPopFields>
	readonly stddevSamp?: Maybe<VotingStddevSampFields>
	readonly sum?: Maybe<VotingSumFields>
	readonly varPop?: Maybe<VotingVarPopFields>
	readonly varSamp?: Maybe<VotingVarSampFields>
	readonly variance?: Maybe<VotingVarianceFields>
}

/** aggregate fields of "voting" */
export type VotingAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<VotingSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type VotingAvgFields = {
	readonly __typename?: 'VotingAvgFields'
	readonly no?: Maybe<Scalars['Float']>
	readonly yes?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "voting". All fields are combined with a logical 'AND'. */
export type VotingBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<VotingBoolExp>>
	readonly _not?: InputMaybe<VotingBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<VotingBoolExp>>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly majority?: InputMaybe<StringComparisonExp>
	readonly no?: InputMaybe<NumericComparisonExp>
	readonly proposalVoters?: InputMaybe<ProposalVoterBoolExp>
	readonly proposalVotersAggregate?: InputMaybe<ProposalVoterAggregateBoolExp>
	readonly proposals?: InputMaybe<ProposalBoolExp>
	readonly proposalsAggregate?: InputMaybe<ProposalAggregateBoolExp>
	readonly quorum?: InputMaybe<StringComparisonExp>
	readonly scale?: InputMaybe<StringComparisonExp>
	readonly unit?: InputMaybe<StringComparisonExp>
	readonly yes?: InputMaybe<NumericComparisonExp>
}

/** unique or primary key constraints on table "voting" */
export enum VotingConstraint {
	/** unique or primary key constraint on columns "id" */
	Pk_2dff1e5c53fa2cc610bea30476c = 'PK_2dff1e5c53fa2cc610bea30476c',
}

/** input type for incrementing numeric columns in table "voting" */
export type VotingIncInput = {
	readonly no?: InputMaybe<Scalars['numeric']>
	readonly yes?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "voting" */
export type VotingInsertInput = {
	readonly id?: InputMaybe<Scalars['String']>
	readonly majority?: InputMaybe<Scalars['String']>
	readonly no?: InputMaybe<Scalars['numeric']>
	readonly proposalVoters?: InputMaybe<ProposalVoterArrRelInsertInput>
	readonly proposals?: InputMaybe<ProposalArrRelInsertInput>
	readonly quorum?: InputMaybe<Scalars['String']>
	readonly scale?: InputMaybe<Scalars['String']>
	readonly unit?: InputMaybe<Scalars['String']>
	readonly yes?: InputMaybe<Scalars['numeric']>
}

/** aggregate max on columns */
export type VotingMaxFields = {
	readonly __typename?: 'VotingMaxFields'
	readonly id?: Maybe<Scalars['String']>
	readonly majority?: Maybe<Scalars['String']>
	readonly no?: Maybe<Scalars['numeric']>
	readonly quorum?: Maybe<Scalars['String']>
	readonly scale?: Maybe<Scalars['String']>
	readonly unit?: Maybe<Scalars['String']>
	readonly yes?: Maybe<Scalars['numeric']>
}

/** aggregate min on columns */
export type VotingMinFields = {
	readonly __typename?: 'VotingMinFields'
	readonly id?: Maybe<Scalars['String']>
	readonly majority?: Maybe<Scalars['String']>
	readonly no?: Maybe<Scalars['numeric']>
	readonly quorum?: Maybe<Scalars['String']>
	readonly scale?: Maybe<Scalars['String']>
	readonly unit?: Maybe<Scalars['String']>
	readonly yes?: Maybe<Scalars['numeric']>
}

/** response of any mutation on the table "voting" */
export type VotingMutationResponse = {
	readonly __typename?: 'VotingMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Voting>
}

/** input type for inserting object relation for remote table "voting" */
export type VotingObjRelInsertInput = {
	readonly data: VotingInsertInput
	/** upsert condition */
	readonly onConflict?: InputMaybe<VotingOnConflict>
}

/** on_conflict condition type for table "voting" */
export type VotingOnConflict = {
	readonly constraint: VotingConstraint
	readonly updateColumns?: ReadonlyArray<VotingUpdateColumn>
	readonly where?: InputMaybe<VotingBoolExp>
}

/** Ordering options when selecting data from "voting". */
export type VotingOrderBy = {
	readonly id?: InputMaybe<OrderBy>
	readonly majority?: InputMaybe<OrderBy>
	readonly no?: InputMaybe<OrderBy>
	readonly proposalVotersAggregate?: InputMaybe<ProposalVoterAggregateOrderBy>
	readonly proposalsAggregate?: InputMaybe<ProposalAggregateOrderBy>
	readonly quorum?: InputMaybe<OrderBy>
	readonly scale?: InputMaybe<OrderBy>
	readonly unit?: InputMaybe<OrderBy>
	readonly yes?: InputMaybe<OrderBy>
}

/** primary key columns input for table: voting */
export type VotingPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "voting" */
export enum VotingSelectColumn {
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
	Yes = 'yes',
}

/** input type for updating data in table "voting" */
export type VotingSetInput = {
	readonly id?: InputMaybe<Scalars['String']>
	readonly majority?: InputMaybe<Scalars['String']>
	readonly no?: InputMaybe<Scalars['numeric']>
	readonly quorum?: InputMaybe<Scalars['String']>
	readonly scale?: InputMaybe<Scalars['String']>
	readonly unit?: InputMaybe<Scalars['String']>
	readonly yes?: InputMaybe<Scalars['numeric']>
}

/** aggregate stddev on columns */
export type VotingStddevFields = {
	readonly __typename?: 'VotingStddevFields'
	readonly no?: Maybe<Scalars['Float']>
	readonly yes?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type VotingStddevPopFields = {
	readonly __typename?: 'VotingStddevPopFields'
	readonly no?: Maybe<Scalars['Float']>
	readonly yes?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type VotingStddevSampFields = {
	readonly __typename?: 'VotingStddevSampFields'
	readonly no?: Maybe<Scalars['Float']>
	readonly yes?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "voting" */
export type VotingStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: VotingStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type VotingStreamCursorValueInput = {
	readonly id?: InputMaybe<Scalars['String']>
	readonly majority?: InputMaybe<Scalars['String']>
	readonly no?: InputMaybe<Scalars['numeric']>
	readonly quorum?: InputMaybe<Scalars['String']>
	readonly scale?: InputMaybe<Scalars['String']>
	readonly unit?: InputMaybe<Scalars['String']>
	readonly yes?: InputMaybe<Scalars['numeric']>
}

/** aggregate sum on columns */
export type VotingSumFields = {
	readonly __typename?: 'VotingSumFields'
	readonly no?: Maybe<Scalars['numeric']>
	readonly yes?: Maybe<Scalars['numeric']>
}

/** update columns of table "voting" */
export enum VotingUpdateColumn {
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
	Yes = 'yes',
}

export type VotingUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<VotingIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<VotingSetInput>
	/** filter the rows which have to be updated */
	readonly where: VotingBoolExp
}

/** aggregate varPop on columns */
export type VotingVarPopFields = {
	readonly __typename?: 'VotingVarPopFields'
	readonly no?: Maybe<Scalars['Float']>
	readonly yes?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type VotingVarSampFields = {
	readonly __typename?: 'VotingVarSampFields'
	readonly no?: Maybe<Scalars['Float']>
	readonly yes?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type VotingVarianceFields = {
	readonly __typename?: 'VotingVarianceFields'
	readonly no?: Maybe<Scalars['Float']>
	readonly yes?: Maybe<Scalars['Float']>
}

/** columns and relationships of "_prisma_migrations" */
export type _PrismaMigrations = {
	readonly __typename?: '_prismaMigrations'
	readonly appliedStepsCount: Scalars['Int']
	readonly checksum: Scalars['String']
	readonly finishedAt?: Maybe<Scalars['timestamptz']>
	readonly id: Scalars['String']
	readonly logs?: Maybe<Scalars['String']>
	readonly migrationName: Scalars['String']
	readonly rolledBackAt?: Maybe<Scalars['timestamptz']>
	readonly startedAt: Scalars['timestamptz']
}

/** aggregated selection of "_prisma_migrations" */
export type _PrismaMigrationsAggregate = {
	readonly __typename?: '_prismaMigrationsAggregate'
	readonly aggregate?: Maybe<_PrismaMigrationsAggregateFields>
	readonly nodes: ReadonlyArray<_PrismaMigrations>
}

/** aggregate fields of "_prisma_migrations" */
export type _PrismaMigrationsAggregateFields = {
	readonly __typename?: '_prismaMigrationsAggregateFields'
	readonly avg?: Maybe<_PrismaMigrationsAvgFields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<_PrismaMigrationsMaxFields>
	readonly min?: Maybe<_PrismaMigrationsMinFields>
	readonly stddev?: Maybe<_PrismaMigrationsStddevFields>
	readonly stddevPop?: Maybe<_PrismaMigrationsStddevPopFields>
	readonly stddevSamp?: Maybe<_PrismaMigrationsStddevSampFields>
	readonly sum?: Maybe<_PrismaMigrationsSumFields>
	readonly varPop?: Maybe<_PrismaMigrationsVarPopFields>
	readonly varSamp?: Maybe<_PrismaMigrationsVarSampFields>
	readonly variance?: Maybe<_PrismaMigrationsVarianceFields>
}

/** aggregate fields of "_prisma_migrations" */
export type _PrismaMigrationsAggregateFieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<_PrismaMigrationsSelectColumn>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type _PrismaMigrationsAvgFields = {
	readonly __typename?: '_prismaMigrationsAvgFields'
	readonly appliedStepsCount?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "_prisma_migrations". All fields are combined with a logical 'AND'. */
export type _PrismaMigrationsBoolExp = {
	readonly _and?: InputMaybe<ReadonlyArray<_PrismaMigrationsBoolExp>>
	readonly _not?: InputMaybe<_PrismaMigrationsBoolExp>
	readonly _or?: InputMaybe<ReadonlyArray<_PrismaMigrationsBoolExp>>
	readonly appliedStepsCount?: InputMaybe<IntComparisonExp>
	readonly checksum?: InputMaybe<StringComparisonExp>
	readonly finishedAt?: InputMaybe<TimestamptzComparisonExp>
	readonly id?: InputMaybe<StringComparisonExp>
	readonly logs?: InputMaybe<StringComparisonExp>
	readonly migrationName?: InputMaybe<StringComparisonExp>
	readonly rolledBackAt?: InputMaybe<TimestamptzComparisonExp>
	readonly startedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "_prisma_migrations" */
export enum _PrismaMigrationsConstraint {
	/** unique or primary key constraint on columns "id" */
	PrismaMigrationsPkey = '_prisma_migrations_pkey',
}

/** input type for incrementing numeric columns in table "_prisma_migrations" */
export type _PrismaMigrationsIncInput = {
	readonly appliedStepsCount?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "_prisma_migrations" */
export type _PrismaMigrationsInsertInput = {
	readonly appliedStepsCount?: InputMaybe<Scalars['Int']>
	readonly checksum?: InputMaybe<Scalars['String']>
	readonly finishedAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly logs?: InputMaybe<Scalars['String']>
	readonly migrationName?: InputMaybe<Scalars['String']>
	readonly rolledBackAt?: InputMaybe<Scalars['timestamptz']>
	readonly startedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type _PrismaMigrationsMaxFields = {
	readonly __typename?: '_prismaMigrationsMaxFields'
	readonly appliedStepsCount?: Maybe<Scalars['Int']>
	readonly checksum?: Maybe<Scalars['String']>
	readonly finishedAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['String']>
	readonly logs?: Maybe<Scalars['String']>
	readonly migrationName?: Maybe<Scalars['String']>
	readonly rolledBackAt?: Maybe<Scalars['timestamptz']>
	readonly startedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type _PrismaMigrationsMinFields = {
	readonly __typename?: '_prismaMigrationsMinFields'
	readonly appliedStepsCount?: Maybe<Scalars['Int']>
	readonly checksum?: Maybe<Scalars['String']>
	readonly finishedAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['String']>
	readonly logs?: Maybe<Scalars['String']>
	readonly migrationName?: Maybe<Scalars['String']>
	readonly rolledBackAt?: Maybe<Scalars['timestamptz']>
	readonly startedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "_prisma_migrations" */
export type _PrismaMigrationsMutationResponse = {
	readonly __typename?: '_prismaMigrationsMutationResponse'
	/** number of rows affected by the mutation */
	readonly affectedRows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<_PrismaMigrations>
}

/** on_conflict condition type for table "_prisma_migrations" */
export type _PrismaMigrationsOnConflict = {
	readonly constraint: _PrismaMigrationsConstraint
	readonly updateColumns?: ReadonlyArray<_PrismaMigrationsUpdateColumn>
	readonly where?: InputMaybe<_PrismaMigrationsBoolExp>
}

/** Ordering options when selecting data from "_prisma_migrations". */
export type _PrismaMigrationsOrderBy = {
	readonly appliedStepsCount?: InputMaybe<OrderBy>
	readonly checksum?: InputMaybe<OrderBy>
	readonly finishedAt?: InputMaybe<OrderBy>
	readonly id?: InputMaybe<OrderBy>
	readonly logs?: InputMaybe<OrderBy>
	readonly migrationName?: InputMaybe<OrderBy>
	readonly rolledBackAt?: InputMaybe<OrderBy>
	readonly startedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: _prisma_migrations */
export type _PrismaMigrationsPkColumnsInput = {
	readonly id: Scalars['String']
}

/** select columns of table "_prisma_migrations" */
export enum _PrismaMigrationsSelectColumn {
	/** column name */
	AppliedStepsCount = 'appliedStepsCount',
	/** column name */
	Checksum = 'checksum',
	/** column name */
	FinishedAt = 'finishedAt',
	/** column name */
	Id = 'id',
	/** column name */
	Logs = 'logs',
	/** column name */
	MigrationName = 'migrationName',
	/** column name */
	RolledBackAt = 'rolledBackAt',
	/** column name */
	StartedAt = 'startedAt',
}

/** input type for updating data in table "_prisma_migrations" */
export type _PrismaMigrationsSetInput = {
	readonly appliedStepsCount?: InputMaybe<Scalars['Int']>
	readonly checksum?: InputMaybe<Scalars['String']>
	readonly finishedAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly logs?: InputMaybe<Scalars['String']>
	readonly migrationName?: InputMaybe<Scalars['String']>
	readonly rolledBackAt?: InputMaybe<Scalars['timestamptz']>
	readonly startedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type _PrismaMigrationsStddevFields = {
	readonly __typename?: '_prismaMigrationsStddevFields'
	readonly appliedStepsCount?: Maybe<Scalars['Float']>
}

/** aggregate stddevPop on columns */
export type _PrismaMigrationsStddevPopFields = {
	readonly __typename?: '_prismaMigrationsStddevPopFields'
	readonly appliedStepsCount?: Maybe<Scalars['Float']>
}

/** aggregate stddevSamp on columns */
export type _PrismaMigrationsStddevSampFields = {
	readonly __typename?: '_prismaMigrationsStddevSampFields'
	readonly appliedStepsCount?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "_prisma_migrations" */
export type _PrismaMigrationsStreamCursorInput = {
	/** Stream column input with initial value */
	readonly initialValue: _PrismaMigrationsStreamCursorValueInput
	/** cursor ordering */
	readonly ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type _PrismaMigrationsStreamCursorValueInput = {
	readonly appliedStepsCount?: InputMaybe<Scalars['Int']>
	readonly checksum?: InputMaybe<Scalars['String']>
	readonly finishedAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly logs?: InputMaybe<Scalars['String']>
	readonly migrationName?: InputMaybe<Scalars['String']>
	readonly rolledBackAt?: InputMaybe<Scalars['timestamptz']>
	readonly startedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type _PrismaMigrationsSumFields = {
	readonly __typename?: '_prismaMigrationsSumFields'
	readonly appliedStepsCount?: Maybe<Scalars['Int']>
}

/** update columns of table "_prisma_migrations" */
export enum _PrismaMigrationsUpdateColumn {
	/** column name */
	AppliedStepsCount = 'appliedStepsCount',
	/** column name */
	Checksum = 'checksum',
	/** column name */
	FinishedAt = 'finishedAt',
	/** column name */
	Id = 'id',
	/** column name */
	Logs = 'logs',
	/** column name */
	MigrationName = 'migrationName',
	/** column name */
	RolledBackAt = 'rolledBackAt',
	/** column name */
	StartedAt = 'startedAt',
}

export type _PrismaMigrationsUpdates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<_PrismaMigrationsIncInput>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<_PrismaMigrationsSetInput>
	/** filter the rows which have to be updated */
	readonly where: _PrismaMigrationsBoolExp
}

/** aggregate varPop on columns */
export type _PrismaMigrationsVarPopFields = {
	readonly __typename?: '_prismaMigrationsVarPopFields'
	readonly appliedStepsCount?: Maybe<Scalars['Float']>
}

/** aggregate varSamp on columns */
export type _PrismaMigrationsVarSampFields = {
	readonly __typename?: '_prismaMigrationsVarSampFields'
	readonly appliedStepsCount?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type _PrismaMigrationsVarianceFields = {
	readonly __typename?: '_prismaMigrationsVarianceFields'
	readonly appliedStepsCount?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _TextComparisonExp = {
	readonly _eq?: InputMaybe<Scalars['_text']>
	readonly _gt?: InputMaybe<Scalars['_text']>
	readonly _gte?: InputMaybe<Scalars['_text']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['_text']>>
	readonly _isNull?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['_text']>
	readonly _lte?: InputMaybe<Scalars['_text']>
	readonly _neq?: InputMaybe<Scalars['_text']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['_text']>>
}

export type AccountBalanceAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<AccountBalanceSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<AccountBalanceBoolExp>
	readonly predicate: IntComparisonExp
}

export type BattlepassAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<BattlepassSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<BattlepassBoolExp>
	readonly predicate: IntComparisonExp
}

export type BattlepassBotMutation = {
	readonly __typename?: 'battlepassBotMutation'
	readonly claimReward?: Maybe<BattlepassBotBattlepassRewardClaim>
	readonly identity?: Maybe<BattlepassBotBattlepassIdentity>
	readonly join?: Maybe<BattlepassBotBattlepassMember>
	readonly joinPremium?: Maybe<BattlepassBotBattlepassMember>
	readonly levels?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassLevel>>>
	readonly processPayment?: Maybe<BattlepassBotPayment>
	readonly provideUserToken?: Maybe<BattlepassBotBattlepassIdentity>
	readonly quest?: Maybe<BattlepassBotBattlepassQuest>
	readonly reward?: Maybe<BattlepassBotBattlepassReward>
	readonly setFreePasses?: Maybe<BattlepassBotBattlepass>
	readonly updateBattlepass?: Maybe<BattlepassBotBattlepass>
}

export type BattlepassBotMutationClaimRewardArgs = {
	battlepass: Scalars['String']
	identityUuid: Scalars['String']
	reward: Scalars['String']
}

export type BattlepassBotMutationIdentityArgs = {
	address?: InputMaybe<Scalars['String']>
	cid?: InputMaybe<Scalars['String']>
	discord?: InputMaybe<Scalars['String']>
	email?: InputMaybe<Scalars['String']>
	name?: InputMaybe<Scalars['String']>
	twitter?: InputMaybe<Scalars['String']>
	uuid?: InputMaybe<Scalars['String']>
}

export type BattlepassBotMutationJoinArgs = {
	battlepass: Scalars['String']
	identityUuid: Scalars['String']
}

export type BattlepassBotMutationJoinPremiumArgs = {
	battlepass: Scalars['String']
	identityUuid: Scalars['String']
}

export type BattlepassBotMutationLevelsArgs = {
	battlepass: Scalars['String']
	levels: ReadonlyArray<InputMaybe<BattlepassBotLevel>>
}

export type BattlepassBotMutationProcessPaymentArgs = {
	battlepass: Scalars['String']
	identityUuid: Scalars['String']
	paymentToken: Scalars['String']
	securityToken: Scalars['String']
}

export type BattlepassBotMutationProvideUserTokenArgs = {
	identityUuid: Scalars['String']
	source: BattlepassBotSource
	token: Scalars['String']
}

export type BattlepassBotMutationQuestArgs = {
	battlepass: Scalars['String']
	channelId?: InputMaybe<Scalars['String']>
	cid?: InputMaybe<Scalars['String']>
	daily: Scalars['Boolean']
	description?: InputMaybe<Scalars['String']>
	guildId?: InputMaybe<Scalars['String']>
	hashtag?: InputMaybe<Scalars['String']>
	link?: InputMaybe<Scalars['String']>
	max?: InputMaybe<Scalars['Int']>
	maxDaily?: InputMaybe<Scalars['Int']>
	name?: InputMaybe<Scalars['String']>
	points: Scalars['Int']
	quantity: Scalars['Int']
	source: BattlepassBotSource
	twitterId?: InputMaybe<Scalars['String']>
	type: BattlepassBotActivityType
}

export type BattlepassBotMutationRewardArgs = {
	battlepass: Scalars['String']
	cid?: InputMaybe<Scalars['String']>
	description?: InputMaybe<Scalars['String']>
	level?: InputMaybe<Scalars['Int']>
	name?: InputMaybe<Scalars['String']>
	points?: InputMaybe<Scalars['Int']>
	total: Scalars['Int']
}

export type BattlepassBotMutationSetFreePassesArgs = {
	battlepass: Scalars['String']
	freePasses: Scalars['Int']
}

export type BattlepassBotMutationUpdateBattlepassArgs = {
	battlepass: Scalars['String']
	freePasses?: InputMaybe<Scalars['Int']>
	joinable?: InputMaybe<Scalars['Boolean']>
	premiumPasses?: InputMaybe<Scalars['Int']>
}

export type BattlepassBotQuery = {
	readonly __typename?: 'battlepassBotQuery'
	readonly battlepasses?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepass>>>
	readonly identities?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassIdentity>>>
	readonly levels?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassLevel>>>
	readonly members?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassMember>>>
	readonly points?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassPoint>>>
	readonly progresses?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassQuestProgress>>>
	readonly quests?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassQuest>>>
	readonly reward_claims?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassRewardClaim>>>
	readonly rewards?: Maybe<ReadonlyArray<Maybe<BattlepassBotBattlepassReward>>>
}

export type BattlepassBotQueryBattlepassesArgs = {
	where?: InputMaybe<BattlepassBotBattlepassesFilter>
}

export type BattlepassBotQueryIdentitiesArgs = {
	where?: InputMaybe<BattlepassBotIdentityFilter>
}

export type BattlepassBotQueryLevelsArgs = {
	where?: InputMaybe<BattlepassBotLevelsFilter>
}

export type BattlepassBotQueryMembersArgs = {
	where?: InputMaybe<BattlepassBotMemberFilter>
}

export type BattlepassBotQueryPointsArgs = {
	where?: InputMaybe<BattlepassBotPointsFilter>
}

export type BattlepassBotQueryProgressesArgs = {
	where?: InputMaybe<BattlepassBotProgressFilter>
}

export type BattlepassBotQueryQuestsArgs = {
	where?: InputMaybe<BattlepassBotQuestFilter>
}

export type BattlepassBotQueryReward_ClaimsArgs = {
	where?: InputMaybe<BattlepassBotRewardClaimFilter>
}

export type BattlepassBotQueryRewardsArgs = {
	where?: InputMaybe<BattlepassBotRewardsFilter>
}

export type BattlepassLevelsAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<BattlepassLevelsSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<BattlepassLevelsBoolExp>
	readonly predicate: IntComparisonExp
}

export type BattlepassNftAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<BattlepassNftSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<BattlepassNftBoolExp>
	readonly predicate: IntComparisonExp
}

export type BattlepassParticipantsAggregateBoolExpBool_And = {
	readonly arguments: BattlepassParticipantsSelectColumnBattlepassParticipantsAggregateBoolExpBool_AndArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<BattlepassParticipantsBoolExp>
	readonly predicate: BooleanComparisonExp
}

export type BattlepassParticipantsAggregateBoolExpBool_Or = {
	readonly arguments: BattlepassParticipantsSelectColumnBattlepassParticipantsAggregateBoolExpBool_OrArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<BattlepassParticipantsBoolExp>
	readonly predicate: BooleanComparisonExp
}

export type BattlepassParticipantsAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<BattlepassParticipantsSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<BattlepassParticipantsBoolExp>
	readonly predicate: IntComparisonExp
}

export type BattlepassRewardsAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<BattlepassRewardsSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<BattlepassRewardsBoolExp>
	readonly predicate: IntComparisonExp
}

export type CampaignAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<CampaignSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<CampaignBoolExp>
	readonly predicate: IntComparisonExp
}

export type CampaignContributorAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<CampaignContributorSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<CampaignContributorBoolExp>
	readonly predicate: IntComparisonExp
}

export type CompletedQuestsAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<CompletedQuestsSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<CompletedQuestsBoolExp>
	readonly predicate: IntComparisonExp
}

export type GamedaoMutation = {
	readonly __typename?: 'gamedaoMutation'
	readonly singleUpload: Scalars['String']
	readonly updateSession: Scalars['Boolean']
}

export type GamedaoMutationSingleUploadArgs = {
	fileStream: Scalars['Upload']
}

export type GamedaoMutationUpdateSessionArgs = {
	address: Scalars['String']
}

export type GamedaoQuery = {
	readonly __typename?: 'gamedaoQuery'
	readonly apiProvider: ApiProvider
	readonly config: Config
	readonly displayValues?: Maybe<DisplayValues>
	readonly features: Features
	readonly links: ReadonlyArray<Maybe<Link>>
	readonly rmrkNfts?: Maybe<ReadonlyArray<Maybe<RmrkNft>>>
	readonly version: Scalars['String']
}

export type GamedaoQueryConfigArgs = {
	env: Environment
}

export type GamedaoQueryFeaturesArgs = {
	env: Environment
}

export type GamedaoQueryRmrkNftsArgs = {
	address: Scalars['String']
}

/** mutation root */
export type Mutation_Root = {
	readonly __typename?: 'mutation_root'
	readonly battlepassBot?: Maybe<BattlepassBotMutation>
	/** delete data from the table: "account_balance" */
	readonly deleteAccountBalance?: Maybe<AccountBalanceMutationResponse>
	/** delete single row from the table: "account_balance" */
	readonly deleteAccountBalanceByPk?: Maybe<AccountBalance>
	/** delete data from the table: "Balance" */
	readonly deleteBalance?: Maybe<BalanceMutationResponse>
	/** delete single row from the table: "Balance" */
	readonly deleteBalanceByPk?: Maybe<Balance>
	/** delete data from the table: "battlepass" */
	readonly deleteBattlepass?: Maybe<BattlepassMutationResponse>
	/** delete single row from the table: "battlepass" */
	readonly deleteBattlepassByPk?: Maybe<Battlepass>
	/** delete data from the table: "BattlepassLevels" */
	readonly deleteBattlepassLevels?: Maybe<BattlepassLevelsMutationResponse>
	/** delete single row from the table: "BattlepassLevels" */
	readonly deleteBattlepassLevelsByPk?: Maybe<BattlepassLevels>
	/** delete data from the table: "battlepass_nft" */
	readonly deleteBattlepassNft?: Maybe<BattlepassNftMutationResponse>
	/** delete single row from the table: "battlepass_nft" */
	readonly deleteBattlepassNftByPk?: Maybe<BattlepassNft>
	/** delete data from the table: "BattlepassParticipants" */
	readonly deleteBattlepassParticipants?: Maybe<BattlepassParticipantsMutationResponse>
	/** delete single row from the table: "BattlepassParticipants" */
	readonly deleteBattlepassParticipantsByPk?: Maybe<BattlepassParticipants>
	/** delete data from the table: "BattlepassRewards" */
	readonly deleteBattlepassRewards?: Maybe<BattlepassRewardsMutationResponse>
	/** delete single row from the table: "BattlepassRewards" */
	readonly deleteBattlepassRewardsByPk?: Maybe<BattlepassRewards>
	/** delete data from the table: "Battlepasses" */
	readonly deleteBattlepasses?: Maybe<BattlepassesMutationResponse>
	/** delete single row from the table: "Battlepasses" */
	readonly deleteBattlepassesByPk?: Maybe<Battlepasses>
	/** delete data from the table: "campaign" */
	readonly deleteCampaign?: Maybe<CampaignMutationResponse>
	/** delete single row from the table: "campaign" */
	readonly deleteCampaignByPk?: Maybe<Campaign>
	/** delete data from the table: "campaign_contributor" */
	readonly deleteCampaignContributor?: Maybe<CampaignContributorMutationResponse>
	/** delete single row from the table: "campaign_contributor" */
	readonly deleteCampaignContributorByPk?: Maybe<CampaignContributor>
	/** delete data from the table: "campaign_metadata" */
	readonly deleteCampaignMetadata?: Maybe<CampaignMetadataMutationResponse>
	/** delete single row from the table: "campaign_metadata" */
	readonly deleteCampaignMetadataByPk?: Maybe<CampaignMetadata>
	/** delete data from the table: "ChainActivities" */
	readonly deleteChainActivities?: Maybe<ChainActivitiesMutationResponse>
	/** delete single row from the table: "ChainActivities" */
	readonly deleteChainActivitiesByPk?: Maybe<ChainActivities>
	/** delete data from the table: "ChainInfo" */
	readonly deleteChainInfo?: Maybe<ChainInfoMutationResponse>
	/** delete single row from the table: "ChainInfo" */
	readonly deleteChainInfoByPk?: Maybe<ChainInfo>
	/** delete data from the table: "chain_state" */
	readonly deleteChainState?: Maybe<ChainStateMutationResponse>
	/** delete single row from the table: "chain_state" */
	readonly deleteChainStateByPk?: Maybe<ChainState>
	/** delete data from the table: "ChainStatuses" */
	readonly deleteChainStatuses?: Maybe<ChainStatusesMutationResponse>
	/** delete single row from the table: "ChainStatuses" */
	readonly deleteChainStatusesByPk?: Maybe<ChainStatuses>
	/** delete data from the table: "CompletedQuests" */
	readonly deleteCompletedQuests?: Maybe<CompletedQuestsMutationResponse>
	/** delete single row from the table: "CompletedQuests" */
	readonly deleteCompletedQuestsByPk?: Maybe<CompletedQuests>
	/** delete data from the table: "current_chain_state" */
	readonly deleteCurrentChainState?: Maybe<CurrentChainStateMutationResponse>
	/** delete single row from the table: "current_chain_state" */
	readonly deleteCurrentChainStateByPk?: Maybe<CurrentChainState>
	/** delete data from the table: "DiscordActivities" */
	readonly deleteDiscordActivities?: Maybe<DiscordActivitiesMutationResponse>
	/** delete single row from the table: "DiscordActivities" */
	readonly deleteDiscordActivitiesByPk?: Maybe<DiscordActivities>
	/** delete data from the table: "GenericActivities" */
	readonly deleteGenericActivities?: Maybe<GenericActivitiesMutationResponse>
	/** delete single row from the table: "GenericActivities" */
	readonly deleteGenericActivitiesByPk?: Maybe<GenericActivities>
	/** delete data from the table: "historical_balance" */
	readonly deleteHistoricalBalance?: Maybe<HistoricalBalanceMutationResponse>
	/** delete single row from the table: "historical_balance" */
	readonly deleteHistoricalBalanceByPk?: Maybe<HistoricalBalance>
	/** delete data from the table: "Identities" */
	readonly deleteIdentities?: Maybe<IdentitiesMutationResponse>
	/** delete single row from the table: "Identities" */
	readonly deleteIdentitiesByPk?: Maybe<Identities>
	/** delete data from the table: "identity" */
	readonly deleteIdentity?: Maybe<IdentityMutationResponse>
	/** delete single row from the table: "identity" */
	readonly deleteIdentityByPk?: Maybe<Identity>
	/** delete data from the table: "migrations" */
	readonly deleteMigrations?: Maybe<MigrationsMutationResponse>
	/** delete single row from the table: "migrations" */
	readonly deleteMigrationsByPk?: Maybe<Migrations>
	/** delete data from the table: "nft" */
	readonly deleteNft?: Maybe<NftMutationResponse>
	/** delete single row from the table: "nft" */
	readonly deleteNftByPk?: Maybe<Nft>
	/** delete data from the table: "nft_collection" */
	readonly deleteNftCollection?: Maybe<NftCollectionMutationResponse>
	/** delete single row from the table: "nft_collection" */
	readonly deleteNftCollectionByPk?: Maybe<NftCollection>
	/** delete data from the table: "organization" */
	readonly deleteOrganization?: Maybe<OrganizationMutationResponse>
	/** delete single row from the table: "organization" */
	readonly deleteOrganizationByPk?: Maybe<Organization>
	/** delete data from the table: "organization_member" */
	readonly deleteOrganizationMember?: Maybe<OrganizationMemberMutationResponse>
	/** delete single row from the table: "organization_member" */
	readonly deleteOrganizationMemberByPk?: Maybe<OrganizationMember>
	/** delete data from the table: "organization_metadata" */
	readonly deleteOrganizationMetadata?: Maybe<OrganizationMetadataMutationResponse>
	/** delete single row from the table: "organization_metadata" */
	readonly deleteOrganizationMetadataByPk?: Maybe<OrganizationMetadata>
	/** delete data from the table: "Payments" */
	readonly deletePayments?: Maybe<PaymentsMutationResponse>
	/** delete single row from the table: "Payments" */
	readonly deletePaymentsByPk?: Maybe<Payments>
	/** delete data from the table: "proposal" */
	readonly deleteProposal?: Maybe<ProposalMutationResponse>
	/** delete single row from the table: "proposal" */
	readonly deleteProposalByPk?: Maybe<Proposal>
	/** delete data from the table: "proposal_metadata" */
	readonly deleteProposalMetadata?: Maybe<ProposalMetadataMutationResponse>
	/** delete single row from the table: "proposal_metadata" */
	readonly deleteProposalMetadataByPk?: Maybe<ProposalMetadata>
	/** delete data from the table: "proposal_voter" */
	readonly deleteProposalVoter?: Maybe<ProposalVoterMutationResponse>
	/** delete single row from the table: "proposal_voter" */
	readonly deleteProposalVoterByPk?: Maybe<ProposalVoter>
	/** delete data from the table: "QuestProgresses" */
	readonly deleteQuestProgresses?: Maybe<QuestProgressesMutationResponse>
	/** delete single row from the table: "QuestProgresses" */
	readonly deleteQuestProgressesByPk?: Maybe<QuestProgresses>
	/** delete data from the table: "Quests" */
	readonly deleteQuests?: Maybe<QuestsMutationResponse>
	/** delete single row from the table: "Quests" */
	readonly deleteQuestsByPk?: Maybe<Quests>
	/** delete data from the table: "RewardClaims" */
	readonly deleteRewardClaims?: Maybe<RewardClaimsMutationResponse>
	/** delete single row from the table: "RewardClaims" */
	readonly deleteRewardClaimsByPk?: Maybe<RewardClaims>
	/** delete data from the table: "sense_entity" */
	readonly deleteSenseEntity?: Maybe<SenseEntityMutationResponse>
	/** delete single row from the table: "sense_entity" */
	readonly deleteSenseEntityByPk?: Maybe<SenseEntity>
	/** delete data from the table: "Session" */
	readonly deleteSession?: Maybe<SessionMutationResponse>
	/** delete single row from the table: "Session" */
	readonly deleteSessionByPk?: Maybe<Session>
	/** delete data from the table: "squid_processor.status" */
	readonly deleteSquidProcessorStatus?: Maybe<SquidProcessorStatusMutationResponse>
	/** delete single row from the table: "squid_processor.status" */
	readonly deleteSquidProcessorStatusByPk?: Maybe<SquidProcessorStatus>
	/** delete data from the table: "TwitterActivities" */
	readonly deleteTwitterActivities?: Maybe<TwitterActivitiesMutationResponse>
	/** delete single row from the table: "TwitterActivities" */
	readonly deleteTwitterActivitiesByPk?: Maybe<TwitterActivities>
	/** delete data from the table: "TwitterSearches" */
	readonly deleteTwitterSearches?: Maybe<TwitterSearchesMutationResponse>
	/** delete single row from the table: "TwitterSearches" */
	readonly deleteTwitterSearchesByPk?: Maybe<TwitterSearches>
	/** delete data from the table: "TwitterUsers" */
	readonly deleteTwitterUsers?: Maybe<TwitterUsersMutationResponse>
	/** delete single row from the table: "TwitterUsers" */
	readonly deleteTwitterUsersByPk?: Maybe<TwitterUsers>
	/** delete data from the table: "UserTokens" */
	readonly deleteUserTokens?: Maybe<UserTokensMutationResponse>
	/** delete single row from the table: "UserTokens" */
	readonly deleteUserTokensByPk?: Maybe<UserTokens>
	/** delete data from the table: "voting" */
	readonly deleteVoting?: Maybe<VotingMutationResponse>
	/** delete single row from the table: "voting" */
	readonly deleteVotingByPk?: Maybe<Voting>
	/** delete data from the table: "_prisma_migrations" */
	readonly delete_prismaMigrations?: Maybe<_PrismaMigrationsMutationResponse>
	/** delete single row from the table: "_prisma_migrations" */
	readonly delete_prismaMigrationsByPk?: Maybe<_PrismaMigrations>
	readonly gamedao?: Maybe<GamedaoMutation>
	/** insert data into the table: "account_balance" */
	readonly insertAccountBalance?: Maybe<AccountBalanceMutationResponse>
	/** insert a single row into the table: "account_balance" */
	readonly insertAccountBalanceOne?: Maybe<AccountBalance>
	/** insert data into the table: "Balance" */
	readonly insertBalance?: Maybe<BalanceMutationResponse>
	/** insert a single row into the table: "Balance" */
	readonly insertBalanceOne?: Maybe<Balance>
	/** insert data into the table: "battlepass" */
	readonly insertBattlepass?: Maybe<BattlepassMutationResponse>
	/** insert data into the table: "BattlepassLevels" */
	readonly insertBattlepassLevels?: Maybe<BattlepassLevelsMutationResponse>
	/** insert a single row into the table: "BattlepassLevels" */
	readonly insertBattlepassLevelsOne?: Maybe<BattlepassLevels>
	/** insert data into the table: "battlepass_nft" */
	readonly insertBattlepassNft?: Maybe<BattlepassNftMutationResponse>
	/** insert a single row into the table: "battlepass_nft" */
	readonly insertBattlepassNftOne?: Maybe<BattlepassNft>
	/** insert a single row into the table: "battlepass" */
	readonly insertBattlepassOne?: Maybe<Battlepass>
	/** insert data into the table: "BattlepassParticipants" */
	readonly insertBattlepassParticipants?: Maybe<BattlepassParticipantsMutationResponse>
	/** insert a single row into the table: "BattlepassParticipants" */
	readonly insertBattlepassParticipantsOne?: Maybe<BattlepassParticipants>
	/** insert data into the table: "BattlepassRewards" */
	readonly insertBattlepassRewards?: Maybe<BattlepassRewardsMutationResponse>
	/** insert a single row into the table: "BattlepassRewards" */
	readonly insertBattlepassRewardsOne?: Maybe<BattlepassRewards>
	/** insert data into the table: "Battlepasses" */
	readonly insertBattlepasses?: Maybe<BattlepassesMutationResponse>
	/** insert a single row into the table: "Battlepasses" */
	readonly insertBattlepassesOne?: Maybe<Battlepasses>
	/** insert data into the table: "campaign" */
	readonly insertCampaign?: Maybe<CampaignMutationResponse>
	/** insert data into the table: "campaign_contributor" */
	readonly insertCampaignContributor?: Maybe<CampaignContributorMutationResponse>
	/** insert a single row into the table: "campaign_contributor" */
	readonly insertCampaignContributorOne?: Maybe<CampaignContributor>
	/** insert data into the table: "campaign_metadata" */
	readonly insertCampaignMetadata?: Maybe<CampaignMetadataMutationResponse>
	/** insert a single row into the table: "campaign_metadata" */
	readonly insertCampaignMetadataOne?: Maybe<CampaignMetadata>
	/** insert a single row into the table: "campaign" */
	readonly insertCampaignOne?: Maybe<Campaign>
	/** insert data into the table: "ChainActivities" */
	readonly insertChainActivities?: Maybe<ChainActivitiesMutationResponse>
	/** insert a single row into the table: "ChainActivities" */
	readonly insertChainActivitiesOne?: Maybe<ChainActivities>
	/** insert data into the table: "ChainInfo" */
	readonly insertChainInfo?: Maybe<ChainInfoMutationResponse>
	/** insert a single row into the table: "ChainInfo" */
	readonly insertChainInfoOne?: Maybe<ChainInfo>
	/** insert data into the table: "chain_state" */
	readonly insertChainState?: Maybe<ChainStateMutationResponse>
	/** insert a single row into the table: "chain_state" */
	readonly insertChainStateOne?: Maybe<ChainState>
	/** insert data into the table: "ChainStatuses" */
	readonly insertChainStatuses?: Maybe<ChainStatusesMutationResponse>
	/** insert a single row into the table: "ChainStatuses" */
	readonly insertChainStatusesOne?: Maybe<ChainStatuses>
	/** insert data into the table: "CompletedQuests" */
	readonly insertCompletedQuests?: Maybe<CompletedQuestsMutationResponse>
	/** insert a single row into the table: "CompletedQuests" */
	readonly insertCompletedQuestsOne?: Maybe<CompletedQuests>
	/** insert data into the table: "current_chain_state" */
	readonly insertCurrentChainState?: Maybe<CurrentChainStateMutationResponse>
	/** insert a single row into the table: "current_chain_state" */
	readonly insertCurrentChainStateOne?: Maybe<CurrentChainState>
	/** insert data into the table: "DiscordActivities" */
	readonly insertDiscordActivities?: Maybe<DiscordActivitiesMutationResponse>
	/** insert a single row into the table: "DiscordActivities" */
	readonly insertDiscordActivitiesOne?: Maybe<DiscordActivities>
	/** insert data into the table: "GenericActivities" */
	readonly insertGenericActivities?: Maybe<GenericActivitiesMutationResponse>
	/** insert a single row into the table: "GenericActivities" */
	readonly insertGenericActivitiesOne?: Maybe<GenericActivities>
	/** insert data into the table: "historical_balance" */
	readonly insertHistoricalBalance?: Maybe<HistoricalBalanceMutationResponse>
	/** insert a single row into the table: "historical_balance" */
	readonly insertHistoricalBalanceOne?: Maybe<HistoricalBalance>
	/** insert data into the table: "Identities" */
	readonly insertIdentities?: Maybe<IdentitiesMutationResponse>
	/** insert a single row into the table: "Identities" */
	readonly insertIdentitiesOne?: Maybe<Identities>
	/** insert data into the table: "identity" */
	readonly insertIdentity?: Maybe<IdentityMutationResponse>
	/** insert a single row into the table: "identity" */
	readonly insertIdentityOne?: Maybe<Identity>
	/** insert data into the table: "migrations" */
	readonly insertMigrations?: Maybe<MigrationsMutationResponse>
	/** insert a single row into the table: "migrations" */
	readonly insertMigrationsOne?: Maybe<Migrations>
	/** insert data into the table: "nft" */
	readonly insertNft?: Maybe<NftMutationResponse>
	/** insert data into the table: "nft_collection" */
	readonly insertNftCollection?: Maybe<NftCollectionMutationResponse>
	/** insert a single row into the table: "nft_collection" */
	readonly insertNftCollectionOne?: Maybe<NftCollection>
	/** insert a single row into the table: "nft" */
	readonly insertNftOne?: Maybe<Nft>
	/** insert data into the table: "organization" */
	readonly insertOrganization?: Maybe<OrganizationMutationResponse>
	/** insert data into the table: "organization_member" */
	readonly insertOrganizationMember?: Maybe<OrganizationMemberMutationResponse>
	/** insert a single row into the table: "organization_member" */
	readonly insertOrganizationMemberOne?: Maybe<OrganizationMember>
	/** insert data into the table: "organization_metadata" */
	readonly insertOrganizationMetadata?: Maybe<OrganizationMetadataMutationResponse>
	/** insert a single row into the table: "organization_metadata" */
	readonly insertOrganizationMetadataOne?: Maybe<OrganizationMetadata>
	/** insert a single row into the table: "organization" */
	readonly insertOrganizationOne?: Maybe<Organization>
	/** insert data into the table: "Payments" */
	readonly insertPayments?: Maybe<PaymentsMutationResponse>
	/** insert a single row into the table: "Payments" */
	readonly insertPaymentsOne?: Maybe<Payments>
	/** insert data into the table: "proposal" */
	readonly insertProposal?: Maybe<ProposalMutationResponse>
	/** insert data into the table: "proposal_metadata" */
	readonly insertProposalMetadata?: Maybe<ProposalMetadataMutationResponse>
	/** insert a single row into the table: "proposal_metadata" */
	readonly insertProposalMetadataOne?: Maybe<ProposalMetadata>
	/** insert a single row into the table: "proposal" */
	readonly insertProposalOne?: Maybe<Proposal>
	/** insert data into the table: "proposal_voter" */
	readonly insertProposalVoter?: Maybe<ProposalVoterMutationResponse>
	/** insert a single row into the table: "proposal_voter" */
	readonly insertProposalVoterOne?: Maybe<ProposalVoter>
	/** insert data into the table: "QuestProgresses" */
	readonly insertQuestProgresses?: Maybe<QuestProgressesMutationResponse>
	/** insert a single row into the table: "QuestProgresses" */
	readonly insertQuestProgressesOne?: Maybe<QuestProgresses>
	/** insert data into the table: "Quests" */
	readonly insertQuests?: Maybe<QuestsMutationResponse>
	/** insert a single row into the table: "Quests" */
	readonly insertQuestsOne?: Maybe<Quests>
	/** insert data into the table: "RewardClaims" */
	readonly insertRewardClaims?: Maybe<RewardClaimsMutationResponse>
	/** insert a single row into the table: "RewardClaims" */
	readonly insertRewardClaimsOne?: Maybe<RewardClaims>
	/** insert data into the table: "sense_entity" */
	readonly insertSenseEntity?: Maybe<SenseEntityMutationResponse>
	/** insert a single row into the table: "sense_entity" */
	readonly insertSenseEntityOne?: Maybe<SenseEntity>
	/** insert data into the table: "Session" */
	readonly insertSession?: Maybe<SessionMutationResponse>
	/** insert a single row into the table: "Session" */
	readonly insertSessionOne?: Maybe<Session>
	/** insert data into the table: "squid_processor.status" */
	readonly insertSquidProcessorStatus?: Maybe<SquidProcessorStatusMutationResponse>
	/** insert a single row into the table: "squid_processor.status" */
	readonly insertSquidProcessorStatusOne?: Maybe<SquidProcessorStatus>
	/** insert data into the table: "TwitterActivities" */
	readonly insertTwitterActivities?: Maybe<TwitterActivitiesMutationResponse>
	/** insert a single row into the table: "TwitterActivities" */
	readonly insertTwitterActivitiesOne?: Maybe<TwitterActivities>
	/** insert data into the table: "TwitterSearches" */
	readonly insertTwitterSearches?: Maybe<TwitterSearchesMutationResponse>
	/** insert a single row into the table: "TwitterSearches" */
	readonly insertTwitterSearchesOne?: Maybe<TwitterSearches>
	/** insert data into the table: "TwitterUsers" */
	readonly insertTwitterUsers?: Maybe<TwitterUsersMutationResponse>
	/** insert a single row into the table: "TwitterUsers" */
	readonly insertTwitterUsersOne?: Maybe<TwitterUsers>
	/** insert data into the table: "UserTokens" */
	readonly insertUserTokens?: Maybe<UserTokensMutationResponse>
	/** insert a single row into the table: "UserTokens" */
	readonly insertUserTokensOne?: Maybe<UserTokens>
	/** insert data into the table: "voting" */
	readonly insertVoting?: Maybe<VotingMutationResponse>
	/** insert a single row into the table: "voting" */
	readonly insertVotingOne?: Maybe<Voting>
	/** insert data into the table: "_prisma_migrations" */
	readonly insert_prismaMigrations?: Maybe<_PrismaMigrationsMutationResponse>
	/** insert a single row into the table: "_prisma_migrations" */
	readonly insert_prismaMigrationsOne?: Maybe<_PrismaMigrations>
	/** update data of the table: "account_balance" */
	readonly updateAccountBalance?: Maybe<AccountBalanceMutationResponse>
	/** update single row of the table: "account_balance" */
	readonly updateAccountBalanceByPk?: Maybe<AccountBalance>
	/** update multiples rows of table: "account_balance" */
	readonly updateAccountBalanceMany?: Maybe<ReadonlyArray<Maybe<AccountBalanceMutationResponse>>>
	/** update data of the table: "Balance" */
	readonly updateBalance?: Maybe<BalanceMutationResponse>
	/** update single row of the table: "Balance" */
	readonly updateBalanceByPk?: Maybe<Balance>
	/** update multiples rows of table: "Balance" */
	readonly updateBalanceMany?: Maybe<ReadonlyArray<Maybe<BalanceMutationResponse>>>
	/** update data of the table: "battlepass" */
	readonly updateBattlepass?: Maybe<BattlepassMutationResponse>
	/** update single row of the table: "battlepass" */
	readonly updateBattlepassByPk?: Maybe<Battlepass>
	/** update data of the table: "BattlepassLevels" */
	readonly updateBattlepassLevels?: Maybe<BattlepassLevelsMutationResponse>
	/** update single row of the table: "BattlepassLevels" */
	readonly updateBattlepassLevelsByPk?: Maybe<BattlepassLevels>
	/** update multiples rows of table: "BattlepassLevels" */
	readonly updateBattlepassLevelsMany?: Maybe<ReadonlyArray<Maybe<BattlepassLevelsMutationResponse>>>
	/** update multiples rows of table: "battlepass" */
	readonly updateBattlepassMany?: Maybe<ReadonlyArray<Maybe<BattlepassMutationResponse>>>
	/** update data of the table: "battlepass_nft" */
	readonly updateBattlepassNft?: Maybe<BattlepassNftMutationResponse>
	/** update single row of the table: "battlepass_nft" */
	readonly updateBattlepassNftByPk?: Maybe<BattlepassNft>
	/** update multiples rows of table: "battlepass_nft" */
	readonly updateBattlepassNftMany?: Maybe<ReadonlyArray<Maybe<BattlepassNftMutationResponse>>>
	/** update data of the table: "BattlepassParticipants" */
	readonly updateBattlepassParticipants?: Maybe<BattlepassParticipantsMutationResponse>
	/** update single row of the table: "BattlepassParticipants" */
	readonly updateBattlepassParticipantsByPk?: Maybe<BattlepassParticipants>
	/** update multiples rows of table: "BattlepassParticipants" */
	readonly updateBattlepassParticipantsMany?: Maybe<ReadonlyArray<Maybe<BattlepassParticipantsMutationResponse>>>
	/** update data of the table: "BattlepassRewards" */
	readonly updateBattlepassRewards?: Maybe<BattlepassRewardsMutationResponse>
	/** update single row of the table: "BattlepassRewards" */
	readonly updateBattlepassRewardsByPk?: Maybe<BattlepassRewards>
	/** update multiples rows of table: "BattlepassRewards" */
	readonly updateBattlepassRewardsMany?: Maybe<ReadonlyArray<Maybe<BattlepassRewardsMutationResponse>>>
	/** update data of the table: "Battlepasses" */
	readonly updateBattlepasses?: Maybe<BattlepassesMutationResponse>
	/** update single row of the table: "Battlepasses" */
	readonly updateBattlepassesByPk?: Maybe<Battlepasses>
	/** update multiples rows of table: "Battlepasses" */
	readonly updateBattlepassesMany?: Maybe<ReadonlyArray<Maybe<BattlepassesMutationResponse>>>
	/** update data of the table: "campaign" */
	readonly updateCampaign?: Maybe<CampaignMutationResponse>
	/** update single row of the table: "campaign" */
	readonly updateCampaignByPk?: Maybe<Campaign>
	/** update data of the table: "campaign_contributor" */
	readonly updateCampaignContributor?: Maybe<CampaignContributorMutationResponse>
	/** update single row of the table: "campaign_contributor" */
	readonly updateCampaignContributorByPk?: Maybe<CampaignContributor>
	/** update multiples rows of table: "campaign_contributor" */
	readonly updateCampaignContributorMany?: Maybe<ReadonlyArray<Maybe<CampaignContributorMutationResponse>>>
	/** update multiples rows of table: "campaign" */
	readonly updateCampaignMany?: Maybe<ReadonlyArray<Maybe<CampaignMutationResponse>>>
	/** update data of the table: "campaign_metadata" */
	readonly updateCampaignMetadata?: Maybe<CampaignMetadataMutationResponse>
	/** update single row of the table: "campaign_metadata" */
	readonly updateCampaignMetadataByPk?: Maybe<CampaignMetadata>
	/** update multiples rows of table: "campaign_metadata" */
	readonly updateCampaignMetadataMany?: Maybe<ReadonlyArray<Maybe<CampaignMetadataMutationResponse>>>
	/** update data of the table: "ChainActivities" */
	readonly updateChainActivities?: Maybe<ChainActivitiesMutationResponse>
	/** update single row of the table: "ChainActivities" */
	readonly updateChainActivitiesByPk?: Maybe<ChainActivities>
	/** update multiples rows of table: "ChainActivities" */
	readonly updateChainActivitiesMany?: Maybe<ReadonlyArray<Maybe<ChainActivitiesMutationResponse>>>
	/** update data of the table: "ChainInfo" */
	readonly updateChainInfo?: Maybe<ChainInfoMutationResponse>
	/** update single row of the table: "ChainInfo" */
	readonly updateChainInfoByPk?: Maybe<ChainInfo>
	/** update multiples rows of table: "ChainInfo" */
	readonly updateChainInfoMany?: Maybe<ReadonlyArray<Maybe<ChainInfoMutationResponse>>>
	/** update data of the table: "chain_state" */
	readonly updateChainState?: Maybe<ChainStateMutationResponse>
	/** update single row of the table: "chain_state" */
	readonly updateChainStateByPk?: Maybe<ChainState>
	/** update multiples rows of table: "chain_state" */
	readonly updateChainStateMany?: Maybe<ReadonlyArray<Maybe<ChainStateMutationResponse>>>
	/** update data of the table: "ChainStatuses" */
	readonly updateChainStatuses?: Maybe<ChainStatusesMutationResponse>
	/** update single row of the table: "ChainStatuses" */
	readonly updateChainStatusesByPk?: Maybe<ChainStatuses>
	/** update multiples rows of table: "ChainStatuses" */
	readonly updateChainStatusesMany?: Maybe<ReadonlyArray<Maybe<ChainStatusesMutationResponse>>>
	/** update data of the table: "CompletedQuests" */
	readonly updateCompletedQuests?: Maybe<CompletedQuestsMutationResponse>
	/** update single row of the table: "CompletedQuests" */
	readonly updateCompletedQuestsByPk?: Maybe<CompletedQuests>
	/** update multiples rows of table: "CompletedQuests" */
	readonly updateCompletedQuestsMany?: Maybe<ReadonlyArray<Maybe<CompletedQuestsMutationResponse>>>
	/** update data of the table: "current_chain_state" */
	readonly updateCurrentChainState?: Maybe<CurrentChainStateMutationResponse>
	/** update single row of the table: "current_chain_state" */
	readonly updateCurrentChainStateByPk?: Maybe<CurrentChainState>
	/** update multiples rows of table: "current_chain_state" */
	readonly updateCurrentChainStateMany?: Maybe<ReadonlyArray<Maybe<CurrentChainStateMutationResponse>>>
	/** update data of the table: "DiscordActivities" */
	readonly updateDiscordActivities?: Maybe<DiscordActivitiesMutationResponse>
	/** update single row of the table: "DiscordActivities" */
	readonly updateDiscordActivitiesByPk?: Maybe<DiscordActivities>
	/** update multiples rows of table: "DiscordActivities" */
	readonly updateDiscordActivitiesMany?: Maybe<ReadonlyArray<Maybe<DiscordActivitiesMutationResponse>>>
	/** update data of the table: "GenericActivities" */
	readonly updateGenericActivities?: Maybe<GenericActivitiesMutationResponse>
	/** update single row of the table: "GenericActivities" */
	readonly updateGenericActivitiesByPk?: Maybe<GenericActivities>
	/** update multiples rows of table: "GenericActivities" */
	readonly updateGenericActivitiesMany?: Maybe<ReadonlyArray<Maybe<GenericActivitiesMutationResponse>>>
	/** update data of the table: "historical_balance" */
	readonly updateHistoricalBalance?: Maybe<HistoricalBalanceMutationResponse>
	/** update single row of the table: "historical_balance" */
	readonly updateHistoricalBalanceByPk?: Maybe<HistoricalBalance>
	/** update multiples rows of table: "historical_balance" */
	readonly updateHistoricalBalanceMany?: Maybe<ReadonlyArray<Maybe<HistoricalBalanceMutationResponse>>>
	/** update data of the table: "Identities" */
	readonly updateIdentities?: Maybe<IdentitiesMutationResponse>
	/** update single row of the table: "Identities" */
	readonly updateIdentitiesByPk?: Maybe<Identities>
	/** update multiples rows of table: "Identities" */
	readonly updateIdentitiesMany?: Maybe<ReadonlyArray<Maybe<IdentitiesMutationResponse>>>
	/** update data of the table: "identity" */
	readonly updateIdentity?: Maybe<IdentityMutationResponse>
	/** update single row of the table: "identity" */
	readonly updateIdentityByPk?: Maybe<Identity>
	/** update multiples rows of table: "identity" */
	readonly updateIdentityMany?: Maybe<ReadonlyArray<Maybe<IdentityMutationResponse>>>
	/** update data of the table: "migrations" */
	readonly updateMigrations?: Maybe<MigrationsMutationResponse>
	/** update single row of the table: "migrations" */
	readonly updateMigrationsByPk?: Maybe<Migrations>
	/** update multiples rows of table: "migrations" */
	readonly updateMigrationsMany?: Maybe<ReadonlyArray<Maybe<MigrationsMutationResponse>>>
	/** update data of the table: "nft" */
	readonly updateNft?: Maybe<NftMutationResponse>
	/** update single row of the table: "nft" */
	readonly updateNftByPk?: Maybe<Nft>
	/** update data of the table: "nft_collection" */
	readonly updateNftCollection?: Maybe<NftCollectionMutationResponse>
	/** update single row of the table: "nft_collection" */
	readonly updateNftCollectionByPk?: Maybe<NftCollection>
	/** update multiples rows of table: "nft_collection" */
	readonly updateNftCollectionMany?: Maybe<ReadonlyArray<Maybe<NftCollectionMutationResponse>>>
	/** update multiples rows of table: "nft" */
	readonly updateNftMany?: Maybe<ReadonlyArray<Maybe<NftMutationResponse>>>
	/** update data of the table: "organization" */
	readonly updateOrganization?: Maybe<OrganizationMutationResponse>
	/** update single row of the table: "organization" */
	readonly updateOrganizationByPk?: Maybe<Organization>
	/** update multiples rows of table: "organization" */
	readonly updateOrganizationMany?: Maybe<ReadonlyArray<Maybe<OrganizationMutationResponse>>>
	/** update data of the table: "organization_member" */
	readonly updateOrganizationMember?: Maybe<OrganizationMemberMutationResponse>
	/** update single row of the table: "organization_member" */
	readonly updateOrganizationMemberByPk?: Maybe<OrganizationMember>
	/** update multiples rows of table: "organization_member" */
	readonly updateOrganizationMemberMany?: Maybe<ReadonlyArray<Maybe<OrganizationMemberMutationResponse>>>
	/** update data of the table: "organization_metadata" */
	readonly updateOrganizationMetadata?: Maybe<OrganizationMetadataMutationResponse>
	/** update single row of the table: "organization_metadata" */
	readonly updateOrganizationMetadataByPk?: Maybe<OrganizationMetadata>
	/** update multiples rows of table: "organization_metadata" */
	readonly updateOrganizationMetadataMany?: Maybe<ReadonlyArray<Maybe<OrganizationMetadataMutationResponse>>>
	/** update data of the table: "Payments" */
	readonly updatePayments?: Maybe<PaymentsMutationResponse>
	/** update single row of the table: "Payments" */
	readonly updatePaymentsByPk?: Maybe<Payments>
	/** update multiples rows of table: "Payments" */
	readonly updatePaymentsMany?: Maybe<ReadonlyArray<Maybe<PaymentsMutationResponse>>>
	/** update data of the table: "proposal" */
	readonly updateProposal?: Maybe<ProposalMutationResponse>
	/** update single row of the table: "proposal" */
	readonly updateProposalByPk?: Maybe<Proposal>
	/** update multiples rows of table: "proposal" */
	readonly updateProposalMany?: Maybe<ReadonlyArray<Maybe<ProposalMutationResponse>>>
	/** update data of the table: "proposal_metadata" */
	readonly updateProposalMetadata?: Maybe<ProposalMetadataMutationResponse>
	/** update single row of the table: "proposal_metadata" */
	readonly updateProposalMetadataByPk?: Maybe<ProposalMetadata>
	/** update multiples rows of table: "proposal_metadata" */
	readonly updateProposalMetadataMany?: Maybe<ReadonlyArray<Maybe<ProposalMetadataMutationResponse>>>
	/** update data of the table: "proposal_voter" */
	readonly updateProposalVoter?: Maybe<ProposalVoterMutationResponse>
	/** update single row of the table: "proposal_voter" */
	readonly updateProposalVoterByPk?: Maybe<ProposalVoter>
	/** update multiples rows of table: "proposal_voter" */
	readonly updateProposalVoterMany?: Maybe<ReadonlyArray<Maybe<ProposalVoterMutationResponse>>>
	/** update data of the table: "QuestProgresses" */
	readonly updateQuestProgresses?: Maybe<QuestProgressesMutationResponse>
	/** update single row of the table: "QuestProgresses" */
	readonly updateQuestProgressesByPk?: Maybe<QuestProgresses>
	/** update multiples rows of table: "QuestProgresses" */
	readonly updateQuestProgressesMany?: Maybe<ReadonlyArray<Maybe<QuestProgressesMutationResponse>>>
	/** update data of the table: "Quests" */
	readonly updateQuests?: Maybe<QuestsMutationResponse>
	/** update single row of the table: "Quests" */
	readonly updateQuestsByPk?: Maybe<Quests>
	/** update multiples rows of table: "Quests" */
	readonly updateQuestsMany?: Maybe<ReadonlyArray<Maybe<QuestsMutationResponse>>>
	/** update data of the table: "RewardClaims" */
	readonly updateRewardClaims?: Maybe<RewardClaimsMutationResponse>
	/** update single row of the table: "RewardClaims" */
	readonly updateRewardClaimsByPk?: Maybe<RewardClaims>
	/** update multiples rows of table: "RewardClaims" */
	readonly updateRewardClaimsMany?: Maybe<ReadonlyArray<Maybe<RewardClaimsMutationResponse>>>
	/** update data of the table: "sense_entity" */
	readonly updateSenseEntity?: Maybe<SenseEntityMutationResponse>
	/** update single row of the table: "sense_entity" */
	readonly updateSenseEntityByPk?: Maybe<SenseEntity>
	/** update multiples rows of table: "sense_entity" */
	readonly updateSenseEntityMany?: Maybe<ReadonlyArray<Maybe<SenseEntityMutationResponse>>>
	/** update data of the table: "Session" */
	readonly updateSession?: Maybe<SessionMutationResponse>
	/** update single row of the table: "Session" */
	readonly updateSessionByPk?: Maybe<Session>
	/** update multiples rows of table: "Session" */
	readonly updateSessionMany?: Maybe<ReadonlyArray<Maybe<SessionMutationResponse>>>
	/** update data of the table: "squid_processor.status" */
	readonly updateSquidProcessorStatus?: Maybe<SquidProcessorStatusMutationResponse>
	/** update single row of the table: "squid_processor.status" */
	readonly updateSquidProcessorStatusByPk?: Maybe<SquidProcessorStatus>
	/** update multiples rows of table: "squid_processor.status" */
	readonly updateSquidProcessorStatusMany?: Maybe<ReadonlyArray<Maybe<SquidProcessorStatusMutationResponse>>>
	/** update data of the table: "TwitterActivities" */
	readonly updateTwitterActivities?: Maybe<TwitterActivitiesMutationResponse>
	/** update single row of the table: "TwitterActivities" */
	readonly updateTwitterActivitiesByPk?: Maybe<TwitterActivities>
	/** update multiples rows of table: "TwitterActivities" */
	readonly updateTwitterActivitiesMany?: Maybe<ReadonlyArray<Maybe<TwitterActivitiesMutationResponse>>>
	/** update data of the table: "TwitterSearches" */
	readonly updateTwitterSearches?: Maybe<TwitterSearchesMutationResponse>
	/** update single row of the table: "TwitterSearches" */
	readonly updateTwitterSearchesByPk?: Maybe<TwitterSearches>
	/** update multiples rows of table: "TwitterSearches" */
	readonly updateTwitterSearchesMany?: Maybe<ReadonlyArray<Maybe<TwitterSearchesMutationResponse>>>
	/** update data of the table: "TwitterUsers" */
	readonly updateTwitterUsers?: Maybe<TwitterUsersMutationResponse>
	/** update single row of the table: "TwitterUsers" */
	readonly updateTwitterUsersByPk?: Maybe<TwitterUsers>
	/** update multiples rows of table: "TwitterUsers" */
	readonly updateTwitterUsersMany?: Maybe<ReadonlyArray<Maybe<TwitterUsersMutationResponse>>>
	/** update data of the table: "UserTokens" */
	readonly updateUserTokens?: Maybe<UserTokensMutationResponse>
	/** update single row of the table: "UserTokens" */
	readonly updateUserTokensByPk?: Maybe<UserTokens>
	/** update multiples rows of table: "UserTokens" */
	readonly updateUserTokensMany?: Maybe<ReadonlyArray<Maybe<UserTokensMutationResponse>>>
	/** update data of the table: "voting" */
	readonly updateVoting?: Maybe<VotingMutationResponse>
	/** update single row of the table: "voting" */
	readonly updateVotingByPk?: Maybe<Voting>
	/** update multiples rows of table: "voting" */
	readonly updateVotingMany?: Maybe<ReadonlyArray<Maybe<VotingMutationResponse>>>
	/** update data of the table: "_prisma_migrations" */
	readonly update_prismaMigrations?: Maybe<_PrismaMigrationsMutationResponse>
	/** update single row of the table: "_prisma_migrations" */
	readonly update_prismaMigrationsByPk?: Maybe<_PrismaMigrations>
	/** update multiples rows of table: "_prisma_migrations" */
	readonly update_prismaMigrationsMany?: Maybe<ReadonlyArray<Maybe<_PrismaMigrationsMutationResponse>>>
}

/** mutation root */
export type Mutation_RootDeleteAccountBalanceArgs = {
	where: AccountBalanceBoolExp
}

/** mutation root */
export type Mutation_RootDeleteAccountBalanceByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteBalanceArgs = {
	where: BalanceBoolExp
}

/** mutation root */
export type Mutation_RootDeleteBalanceByPkArgs = {
	id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDeleteBattlepassArgs = {
	where: BattlepassBoolExp
}

/** mutation root */
export type Mutation_RootDeleteBattlepassByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteBattlepassLevelsArgs = {
	where: BattlepassLevelsBoolExp
}

/** mutation root */
export type Mutation_RootDeleteBattlepassLevelsByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteBattlepassNftArgs = {
	where: BattlepassNftBoolExp
}

/** mutation root */
export type Mutation_RootDeleteBattlepassNftByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteBattlepassParticipantsArgs = {
	where: BattlepassParticipantsBoolExp
}

/** mutation root */
export type Mutation_RootDeleteBattlepassParticipantsByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteBattlepassRewardsArgs = {
	where: BattlepassRewardsBoolExp
}

/** mutation root */
export type Mutation_RootDeleteBattlepassRewardsByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteBattlepassesArgs = {
	where: BattlepassesBoolExp
}

/** mutation root */
export type Mutation_RootDeleteBattlepassesByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteCampaignArgs = {
	where: CampaignBoolExp
}

/** mutation root */
export type Mutation_RootDeleteCampaignByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteCampaignContributorArgs = {
	where: CampaignContributorBoolExp
}

/** mutation root */
export type Mutation_RootDeleteCampaignContributorByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteCampaignMetadataArgs = {
	where: CampaignMetadataBoolExp
}

/** mutation root */
export type Mutation_RootDeleteCampaignMetadataByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteChainActivitiesArgs = {
	where: ChainActivitiesBoolExp
}

/** mutation root */
export type Mutation_RootDeleteChainActivitiesByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteChainInfoArgs = {
	where: ChainInfoBoolExp
}

/** mutation root */
export type Mutation_RootDeleteChainInfoByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteChainStateArgs = {
	where: ChainStateBoolExp
}

/** mutation root */
export type Mutation_RootDeleteChainStateByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteChainStatusesArgs = {
	where: ChainStatusesBoolExp
}

/** mutation root */
export type Mutation_RootDeleteChainStatusesByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteCompletedQuestsArgs = {
	where: CompletedQuestsBoolExp
}

/** mutation root */
export type Mutation_RootDeleteCompletedQuestsByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteCurrentChainStateArgs = {
	where: CurrentChainStateBoolExp
}

/** mutation root */
export type Mutation_RootDeleteCurrentChainStateByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteDiscordActivitiesArgs = {
	where: DiscordActivitiesBoolExp
}

/** mutation root */
export type Mutation_RootDeleteDiscordActivitiesByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteGenericActivitiesArgs = {
	where: GenericActivitiesBoolExp
}

/** mutation root */
export type Mutation_RootDeleteGenericActivitiesByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteHistoricalBalanceArgs = {
	where: HistoricalBalanceBoolExp
}

/** mutation root */
export type Mutation_RootDeleteHistoricalBalanceByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteIdentitiesArgs = {
	where: IdentitiesBoolExp
}

/** mutation root */
export type Mutation_RootDeleteIdentitiesByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteIdentityArgs = {
	where: IdentityBoolExp
}

/** mutation root */
export type Mutation_RootDeleteIdentityByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteMigrationsArgs = {
	where: MigrationsBoolExp
}

/** mutation root */
export type Mutation_RootDeleteMigrationsByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteNftArgs = {
	where: NftBoolExp
}

/** mutation root */
export type Mutation_RootDeleteNftByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteNftCollectionArgs = {
	where: NftCollectionBoolExp
}

/** mutation root */
export type Mutation_RootDeleteNftCollectionByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteOrganizationArgs = {
	where: OrganizationBoolExp
}

/** mutation root */
export type Mutation_RootDeleteOrganizationByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteOrganizationMemberArgs = {
	where: OrganizationMemberBoolExp
}

/** mutation root */
export type Mutation_RootDeleteOrganizationMemberByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteOrganizationMetadataArgs = {
	where: OrganizationMetadataBoolExp
}

/** mutation root */
export type Mutation_RootDeleteOrganizationMetadataByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeletePaymentsArgs = {
	where: PaymentsBoolExp
}

/** mutation root */
export type Mutation_RootDeletePaymentsByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteProposalArgs = {
	where: ProposalBoolExp
}

/** mutation root */
export type Mutation_RootDeleteProposalByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteProposalMetadataArgs = {
	where: ProposalMetadataBoolExp
}

/** mutation root */
export type Mutation_RootDeleteProposalMetadataByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteProposalVoterArgs = {
	where: ProposalVoterBoolExp
}

/** mutation root */
export type Mutation_RootDeleteProposalVoterByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteQuestProgressesArgs = {
	where: QuestProgressesBoolExp
}

/** mutation root */
export type Mutation_RootDeleteQuestProgressesByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteQuestsArgs = {
	where: QuestsBoolExp
}

/** mutation root */
export type Mutation_RootDeleteQuestsByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteRewardClaimsArgs = {
	where: RewardClaimsBoolExp
}

/** mutation root */
export type Mutation_RootDeleteRewardClaimsByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteSenseEntityArgs = {
	where: SenseEntityBoolExp
}

/** mutation root */
export type Mutation_RootDeleteSenseEntityByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDeleteSessionArgs = {
	where: SessionBoolExp
}

/** mutation root */
export type Mutation_RootDeleteSessionByPkArgs = {
	id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDeleteSquidProcessorStatusArgs = {
	where: SquidProcessorStatusBoolExp
}

/** mutation root */
export type Mutation_RootDeleteSquidProcessorStatusByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteTwitterActivitiesArgs = {
	where: TwitterActivitiesBoolExp
}

/** mutation root */
export type Mutation_RootDeleteTwitterActivitiesByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteTwitterSearchesArgs = {
	where: TwitterSearchesBoolExp
}

/** mutation root */
export type Mutation_RootDeleteTwitterSearchesByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteTwitterUsersArgs = {
	where: TwitterUsersBoolExp
}

/** mutation root */
export type Mutation_RootDeleteTwitterUsersByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteUserTokensArgs = {
	where: UserTokensBoolExp
}

/** mutation root */
export type Mutation_RootDeleteUserTokensByPkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteVotingArgs = {
	where: VotingBoolExp
}

/** mutation root */
export type Mutation_RootDeleteVotingByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_PrismaMigrationsArgs = {
	where: _PrismaMigrationsBoolExp
}

/** mutation root */
export type Mutation_RootDelete_PrismaMigrationsByPkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootInsertAccountBalanceArgs = {
	objects: ReadonlyArray<AccountBalanceInsertInput>
	onConflict?: InputMaybe<AccountBalanceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertAccountBalanceOneArgs = {
	object: AccountBalanceInsertInput
	onConflict?: InputMaybe<AccountBalanceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBalanceArgs = {
	objects: ReadonlyArray<BalanceInsertInput>
	onConflict?: InputMaybe<BalanceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBalanceOneArgs = {
	object: BalanceInsertInput
	onConflict?: InputMaybe<BalanceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBattlepassArgs = {
	objects: ReadonlyArray<BattlepassInsertInput>
	onConflict?: InputMaybe<BattlepassOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBattlepassLevelsArgs = {
	objects: ReadonlyArray<BattlepassLevelsInsertInput>
	onConflict?: InputMaybe<BattlepassLevelsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBattlepassLevelsOneArgs = {
	object: BattlepassLevelsInsertInput
	onConflict?: InputMaybe<BattlepassLevelsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBattlepassNftArgs = {
	objects: ReadonlyArray<BattlepassNftInsertInput>
	onConflict?: InputMaybe<BattlepassNftOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBattlepassNftOneArgs = {
	object: BattlepassNftInsertInput
	onConflict?: InputMaybe<BattlepassNftOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBattlepassOneArgs = {
	object: BattlepassInsertInput
	onConflict?: InputMaybe<BattlepassOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBattlepassParticipantsArgs = {
	objects: ReadonlyArray<BattlepassParticipantsInsertInput>
	onConflict?: InputMaybe<BattlepassParticipantsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBattlepassParticipantsOneArgs = {
	object: BattlepassParticipantsInsertInput
	onConflict?: InputMaybe<BattlepassParticipantsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBattlepassRewardsArgs = {
	objects: ReadonlyArray<BattlepassRewardsInsertInput>
	onConflict?: InputMaybe<BattlepassRewardsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBattlepassRewardsOneArgs = {
	object: BattlepassRewardsInsertInput
	onConflict?: InputMaybe<BattlepassRewardsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBattlepassesArgs = {
	objects: ReadonlyArray<BattlepassesInsertInput>
	onConflict?: InputMaybe<BattlepassesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBattlepassesOneArgs = {
	object: BattlepassesInsertInput
	onConflict?: InputMaybe<BattlepassesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCampaignArgs = {
	objects: ReadonlyArray<CampaignInsertInput>
	onConflict?: InputMaybe<CampaignOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCampaignContributorArgs = {
	objects: ReadonlyArray<CampaignContributorInsertInput>
	onConflict?: InputMaybe<CampaignContributorOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCampaignContributorOneArgs = {
	object: CampaignContributorInsertInput
	onConflict?: InputMaybe<CampaignContributorOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCampaignMetadataArgs = {
	objects: ReadonlyArray<CampaignMetadataInsertInput>
	onConflict?: InputMaybe<CampaignMetadataOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCampaignMetadataOneArgs = {
	object: CampaignMetadataInsertInput
	onConflict?: InputMaybe<CampaignMetadataOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCampaignOneArgs = {
	object: CampaignInsertInput
	onConflict?: InputMaybe<CampaignOnConflict>
}

/** mutation root */
export type Mutation_RootInsertChainActivitiesArgs = {
	objects: ReadonlyArray<ChainActivitiesInsertInput>
	onConflict?: InputMaybe<ChainActivitiesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertChainActivitiesOneArgs = {
	object: ChainActivitiesInsertInput
	onConflict?: InputMaybe<ChainActivitiesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertChainInfoArgs = {
	objects: ReadonlyArray<ChainInfoInsertInput>
	onConflict?: InputMaybe<ChainInfoOnConflict>
}

/** mutation root */
export type Mutation_RootInsertChainInfoOneArgs = {
	object: ChainInfoInsertInput
	onConflict?: InputMaybe<ChainInfoOnConflict>
}

/** mutation root */
export type Mutation_RootInsertChainStateArgs = {
	objects: ReadonlyArray<ChainStateInsertInput>
	onConflict?: InputMaybe<ChainStateOnConflict>
}

/** mutation root */
export type Mutation_RootInsertChainStateOneArgs = {
	object: ChainStateInsertInput
	onConflict?: InputMaybe<ChainStateOnConflict>
}

/** mutation root */
export type Mutation_RootInsertChainStatusesArgs = {
	objects: ReadonlyArray<ChainStatusesInsertInput>
	onConflict?: InputMaybe<ChainStatusesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertChainStatusesOneArgs = {
	object: ChainStatusesInsertInput
	onConflict?: InputMaybe<ChainStatusesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCompletedQuestsArgs = {
	objects: ReadonlyArray<CompletedQuestsInsertInput>
	onConflict?: InputMaybe<CompletedQuestsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCompletedQuestsOneArgs = {
	object: CompletedQuestsInsertInput
	onConflict?: InputMaybe<CompletedQuestsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCurrentChainStateArgs = {
	objects: ReadonlyArray<CurrentChainStateInsertInput>
	onConflict?: InputMaybe<CurrentChainStateOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCurrentChainStateOneArgs = {
	object: CurrentChainStateInsertInput
	onConflict?: InputMaybe<CurrentChainStateOnConflict>
}

/** mutation root */
export type Mutation_RootInsertDiscordActivitiesArgs = {
	objects: ReadonlyArray<DiscordActivitiesInsertInput>
	onConflict?: InputMaybe<DiscordActivitiesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertDiscordActivitiesOneArgs = {
	object: DiscordActivitiesInsertInput
	onConflict?: InputMaybe<DiscordActivitiesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertGenericActivitiesArgs = {
	objects: ReadonlyArray<GenericActivitiesInsertInput>
	onConflict?: InputMaybe<GenericActivitiesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertGenericActivitiesOneArgs = {
	object: GenericActivitiesInsertInput
	onConflict?: InputMaybe<GenericActivitiesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertHistoricalBalanceArgs = {
	objects: ReadonlyArray<HistoricalBalanceInsertInput>
	onConflict?: InputMaybe<HistoricalBalanceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertHistoricalBalanceOneArgs = {
	object: HistoricalBalanceInsertInput
	onConflict?: InputMaybe<HistoricalBalanceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertIdentitiesArgs = {
	objects: ReadonlyArray<IdentitiesInsertInput>
	onConflict?: InputMaybe<IdentitiesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertIdentitiesOneArgs = {
	object: IdentitiesInsertInput
	onConflict?: InputMaybe<IdentitiesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertIdentityArgs = {
	objects: ReadonlyArray<IdentityInsertInput>
	onConflict?: InputMaybe<IdentityOnConflict>
}

/** mutation root */
export type Mutation_RootInsertIdentityOneArgs = {
	object: IdentityInsertInput
	onConflict?: InputMaybe<IdentityOnConflict>
}

/** mutation root */
export type Mutation_RootInsertMigrationsArgs = {
	objects: ReadonlyArray<MigrationsInsertInput>
	onConflict?: InputMaybe<MigrationsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertMigrationsOneArgs = {
	object: MigrationsInsertInput
	onConflict?: InputMaybe<MigrationsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertNftArgs = {
	objects: ReadonlyArray<NftInsertInput>
	onConflict?: InputMaybe<NftOnConflict>
}

/** mutation root */
export type Mutation_RootInsertNftCollectionArgs = {
	objects: ReadonlyArray<NftCollectionInsertInput>
	onConflict?: InputMaybe<NftCollectionOnConflict>
}

/** mutation root */
export type Mutation_RootInsertNftCollectionOneArgs = {
	object: NftCollectionInsertInput
	onConflict?: InputMaybe<NftCollectionOnConflict>
}

/** mutation root */
export type Mutation_RootInsertNftOneArgs = {
	object: NftInsertInput
	onConflict?: InputMaybe<NftOnConflict>
}

/** mutation root */
export type Mutation_RootInsertOrganizationArgs = {
	objects: ReadonlyArray<OrganizationInsertInput>
	onConflict?: InputMaybe<OrganizationOnConflict>
}

/** mutation root */
export type Mutation_RootInsertOrganizationMemberArgs = {
	objects: ReadonlyArray<OrganizationMemberInsertInput>
	onConflict?: InputMaybe<OrganizationMemberOnConflict>
}

/** mutation root */
export type Mutation_RootInsertOrganizationMemberOneArgs = {
	object: OrganizationMemberInsertInput
	onConflict?: InputMaybe<OrganizationMemberOnConflict>
}

/** mutation root */
export type Mutation_RootInsertOrganizationMetadataArgs = {
	objects: ReadonlyArray<OrganizationMetadataInsertInput>
	onConflict?: InputMaybe<OrganizationMetadataOnConflict>
}

/** mutation root */
export type Mutation_RootInsertOrganizationMetadataOneArgs = {
	object: OrganizationMetadataInsertInput
	onConflict?: InputMaybe<OrganizationMetadataOnConflict>
}

/** mutation root */
export type Mutation_RootInsertOrganizationOneArgs = {
	object: OrganizationInsertInput
	onConflict?: InputMaybe<OrganizationOnConflict>
}

/** mutation root */
export type Mutation_RootInsertPaymentsArgs = {
	objects: ReadonlyArray<PaymentsInsertInput>
	onConflict?: InputMaybe<PaymentsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertPaymentsOneArgs = {
	object: PaymentsInsertInput
	onConflict?: InputMaybe<PaymentsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertProposalArgs = {
	objects: ReadonlyArray<ProposalInsertInput>
	onConflict?: InputMaybe<ProposalOnConflict>
}

/** mutation root */
export type Mutation_RootInsertProposalMetadataArgs = {
	objects: ReadonlyArray<ProposalMetadataInsertInput>
	onConflict?: InputMaybe<ProposalMetadataOnConflict>
}

/** mutation root */
export type Mutation_RootInsertProposalMetadataOneArgs = {
	object: ProposalMetadataInsertInput
	onConflict?: InputMaybe<ProposalMetadataOnConflict>
}

/** mutation root */
export type Mutation_RootInsertProposalOneArgs = {
	object: ProposalInsertInput
	onConflict?: InputMaybe<ProposalOnConflict>
}

/** mutation root */
export type Mutation_RootInsertProposalVoterArgs = {
	objects: ReadonlyArray<ProposalVoterInsertInput>
	onConflict?: InputMaybe<ProposalVoterOnConflict>
}

/** mutation root */
export type Mutation_RootInsertProposalVoterOneArgs = {
	object: ProposalVoterInsertInput
	onConflict?: InputMaybe<ProposalVoterOnConflict>
}

/** mutation root */
export type Mutation_RootInsertQuestProgressesArgs = {
	objects: ReadonlyArray<QuestProgressesInsertInput>
	onConflict?: InputMaybe<QuestProgressesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertQuestProgressesOneArgs = {
	object: QuestProgressesInsertInput
	onConflict?: InputMaybe<QuestProgressesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertQuestsArgs = {
	objects: ReadonlyArray<QuestsInsertInput>
	onConflict?: InputMaybe<QuestsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertQuestsOneArgs = {
	object: QuestsInsertInput
	onConflict?: InputMaybe<QuestsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertRewardClaimsArgs = {
	objects: ReadonlyArray<RewardClaimsInsertInput>
	onConflict?: InputMaybe<RewardClaimsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertRewardClaimsOneArgs = {
	object: RewardClaimsInsertInput
	onConflict?: InputMaybe<RewardClaimsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertSenseEntityArgs = {
	objects: ReadonlyArray<SenseEntityInsertInput>
	onConflict?: InputMaybe<SenseEntityOnConflict>
}

/** mutation root */
export type Mutation_RootInsertSenseEntityOneArgs = {
	object: SenseEntityInsertInput
	onConflict?: InputMaybe<SenseEntityOnConflict>
}

/** mutation root */
export type Mutation_RootInsertSessionArgs = {
	objects: ReadonlyArray<SessionInsertInput>
	onConflict?: InputMaybe<SessionOnConflict>
}

/** mutation root */
export type Mutation_RootInsertSessionOneArgs = {
	object: SessionInsertInput
	onConflict?: InputMaybe<SessionOnConflict>
}

/** mutation root */
export type Mutation_RootInsertSquidProcessorStatusArgs = {
	objects: ReadonlyArray<SquidProcessorStatusInsertInput>
	onConflict?: InputMaybe<SquidProcessorStatusOnConflict>
}

/** mutation root */
export type Mutation_RootInsertSquidProcessorStatusOneArgs = {
	object: SquidProcessorStatusInsertInput
	onConflict?: InputMaybe<SquidProcessorStatusOnConflict>
}

/** mutation root */
export type Mutation_RootInsertTwitterActivitiesArgs = {
	objects: ReadonlyArray<TwitterActivitiesInsertInput>
	onConflict?: InputMaybe<TwitterActivitiesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertTwitterActivitiesOneArgs = {
	object: TwitterActivitiesInsertInput
	onConflict?: InputMaybe<TwitterActivitiesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertTwitterSearchesArgs = {
	objects: ReadonlyArray<TwitterSearchesInsertInput>
	onConflict?: InputMaybe<TwitterSearchesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertTwitterSearchesOneArgs = {
	object: TwitterSearchesInsertInput
	onConflict?: InputMaybe<TwitterSearchesOnConflict>
}

/** mutation root */
export type Mutation_RootInsertTwitterUsersArgs = {
	objects: ReadonlyArray<TwitterUsersInsertInput>
	onConflict?: InputMaybe<TwitterUsersOnConflict>
}

/** mutation root */
export type Mutation_RootInsertTwitterUsersOneArgs = {
	object: TwitterUsersInsertInput
	onConflict?: InputMaybe<TwitterUsersOnConflict>
}

/** mutation root */
export type Mutation_RootInsertUserTokensArgs = {
	objects: ReadonlyArray<UserTokensInsertInput>
	onConflict?: InputMaybe<UserTokensOnConflict>
}

/** mutation root */
export type Mutation_RootInsertUserTokensOneArgs = {
	object: UserTokensInsertInput
	onConflict?: InputMaybe<UserTokensOnConflict>
}

/** mutation root */
export type Mutation_RootInsertVotingArgs = {
	objects: ReadonlyArray<VotingInsertInput>
	onConflict?: InputMaybe<VotingOnConflict>
}

/** mutation root */
export type Mutation_RootInsertVotingOneArgs = {
	object: VotingInsertInput
	onConflict?: InputMaybe<VotingOnConflict>
}

/** mutation root */
export type Mutation_RootInsert_PrismaMigrationsArgs = {
	objects: ReadonlyArray<_PrismaMigrationsInsertInput>
	onConflict?: InputMaybe<_PrismaMigrationsOnConflict>
}

/** mutation root */
export type Mutation_RootInsert_PrismaMigrationsOneArgs = {
	object: _PrismaMigrationsInsertInput
	onConflict?: InputMaybe<_PrismaMigrationsOnConflict>
}

/** mutation root */
export type Mutation_RootUpdateAccountBalanceArgs = {
	_set?: InputMaybe<AccountBalanceSetInput>
	where: AccountBalanceBoolExp
}

/** mutation root */
export type Mutation_RootUpdateAccountBalanceByPkArgs = {
	_set?: InputMaybe<AccountBalanceSetInput>
	pkColumns: AccountBalancePkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateAccountBalanceManyArgs = {
	updates: ReadonlyArray<AccountBalanceUpdates>
}

/** mutation root */
export type Mutation_RootUpdateBalanceArgs = {
	_inc?: InputMaybe<BalanceIncInput>
	_set?: InputMaybe<BalanceSetInput>
	where: BalanceBoolExp
}

/** mutation root */
export type Mutation_RootUpdateBalanceByPkArgs = {
	_inc?: InputMaybe<BalanceIncInput>
	_set?: InputMaybe<BalanceSetInput>
	pkColumns: BalancePkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateBalanceManyArgs = {
	updates: ReadonlyArray<BalanceUpdates>
}

/** mutation root */
export type Mutation_RootUpdateBattlepassArgs = {
	_inc?: InputMaybe<BattlepassIncInput>
	_set?: InputMaybe<BattlepassSetInput>
	where: BattlepassBoolExp
}

/** mutation root */
export type Mutation_RootUpdateBattlepassByPkArgs = {
	_inc?: InputMaybe<BattlepassIncInput>
	_set?: InputMaybe<BattlepassSetInput>
	pkColumns: BattlepassPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateBattlepassLevelsArgs = {
	_inc?: InputMaybe<BattlepassLevelsIncInput>
	_set?: InputMaybe<BattlepassLevelsSetInput>
	where: BattlepassLevelsBoolExp
}

/** mutation root */
export type Mutation_RootUpdateBattlepassLevelsByPkArgs = {
	_inc?: InputMaybe<BattlepassLevelsIncInput>
	_set?: InputMaybe<BattlepassLevelsSetInput>
	pkColumns: BattlepassLevelsPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateBattlepassLevelsManyArgs = {
	updates: ReadonlyArray<BattlepassLevelsUpdates>
}

/** mutation root */
export type Mutation_RootUpdateBattlepassManyArgs = {
	updates: ReadonlyArray<BattlepassUpdates>
}

/** mutation root */
export type Mutation_RootUpdateBattlepassNftArgs = {
	_set?: InputMaybe<BattlepassNftSetInput>
	where: BattlepassNftBoolExp
}

/** mutation root */
export type Mutation_RootUpdateBattlepassNftByPkArgs = {
	_set?: InputMaybe<BattlepassNftSetInput>
	pkColumns: BattlepassNftPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateBattlepassNftManyArgs = {
	updates: ReadonlyArray<BattlepassNftUpdates>
}

/** mutation root */
export type Mutation_RootUpdateBattlepassParticipantsArgs = {
	_inc?: InputMaybe<BattlepassParticipantsIncInput>
	_set?: InputMaybe<BattlepassParticipantsSetInput>
	where: BattlepassParticipantsBoolExp
}

/** mutation root */
export type Mutation_RootUpdateBattlepassParticipantsByPkArgs = {
	_inc?: InputMaybe<BattlepassParticipantsIncInput>
	_set?: InputMaybe<BattlepassParticipantsSetInput>
	pkColumns: BattlepassParticipantsPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateBattlepassParticipantsManyArgs = {
	updates: ReadonlyArray<BattlepassParticipantsUpdates>
}

/** mutation root */
export type Mutation_RootUpdateBattlepassRewardsArgs = {
	_inc?: InputMaybe<BattlepassRewardsIncInput>
	_set?: InputMaybe<BattlepassRewardsSetInput>
	where: BattlepassRewardsBoolExp
}

/** mutation root */
export type Mutation_RootUpdateBattlepassRewardsByPkArgs = {
	_inc?: InputMaybe<BattlepassRewardsIncInput>
	_set?: InputMaybe<BattlepassRewardsSetInput>
	pkColumns: BattlepassRewardsPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateBattlepassRewardsManyArgs = {
	updates: ReadonlyArray<BattlepassRewardsUpdates>
}

/** mutation root */
export type Mutation_RootUpdateBattlepassesArgs = {
	_inc?: InputMaybe<BattlepassesIncInput>
	_set?: InputMaybe<BattlepassesSetInput>
	where: BattlepassesBoolExp
}

/** mutation root */
export type Mutation_RootUpdateBattlepassesByPkArgs = {
	_inc?: InputMaybe<BattlepassesIncInput>
	_set?: InputMaybe<BattlepassesSetInput>
	pkColumns: BattlepassesPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateBattlepassesManyArgs = {
	updates: ReadonlyArray<BattlepassesUpdates>
}

/** mutation root */
export type Mutation_RootUpdateCampaignArgs = {
	_inc?: InputMaybe<CampaignIncInput>
	_set?: InputMaybe<CampaignSetInput>
	where: CampaignBoolExp
}

/** mutation root */
export type Mutation_RootUpdateCampaignByPkArgs = {
	_inc?: InputMaybe<CampaignIncInput>
	_set?: InputMaybe<CampaignSetInput>
	pkColumns: CampaignPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateCampaignContributorArgs = {
	_inc?: InputMaybe<CampaignContributorIncInput>
	_set?: InputMaybe<CampaignContributorSetInput>
	where: CampaignContributorBoolExp
}

/** mutation root */
export type Mutation_RootUpdateCampaignContributorByPkArgs = {
	_inc?: InputMaybe<CampaignContributorIncInput>
	_set?: InputMaybe<CampaignContributorSetInput>
	pkColumns: CampaignContributorPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateCampaignContributorManyArgs = {
	updates: ReadonlyArray<CampaignContributorUpdates>
}

/** mutation root */
export type Mutation_RootUpdateCampaignManyArgs = {
	updates: ReadonlyArray<CampaignUpdates>
}

/** mutation root */
export type Mutation_RootUpdateCampaignMetadataArgs = {
	_set?: InputMaybe<CampaignMetadataSetInput>
	where: CampaignMetadataBoolExp
}

/** mutation root */
export type Mutation_RootUpdateCampaignMetadataByPkArgs = {
	_set?: InputMaybe<CampaignMetadataSetInput>
	pkColumns: CampaignMetadataPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateCampaignMetadataManyArgs = {
	updates: ReadonlyArray<CampaignMetadataUpdates>
}

/** mutation root */
export type Mutation_RootUpdateChainActivitiesArgs = {
	_inc?: InputMaybe<ChainActivitiesIncInput>
	_set?: InputMaybe<ChainActivitiesSetInput>
	where: ChainActivitiesBoolExp
}

/** mutation root */
export type Mutation_RootUpdateChainActivitiesByPkArgs = {
	_inc?: InputMaybe<ChainActivitiesIncInput>
	_set?: InputMaybe<ChainActivitiesSetInput>
	pkColumns: ChainActivitiesPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateChainActivitiesManyArgs = {
	updates: ReadonlyArray<ChainActivitiesUpdates>
}

/** mutation root */
export type Mutation_RootUpdateChainInfoArgs = {
	_inc?: InputMaybe<ChainInfoIncInput>
	_set?: InputMaybe<ChainInfoSetInput>
	where: ChainInfoBoolExp
}

/** mutation root */
export type Mutation_RootUpdateChainInfoByPkArgs = {
	_inc?: InputMaybe<ChainInfoIncInput>
	_set?: InputMaybe<ChainInfoSetInput>
	pkColumns: ChainInfoPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateChainInfoManyArgs = {
	updates: ReadonlyArray<ChainInfoUpdates>
}

/** mutation root */
export type Mutation_RootUpdateChainStateArgs = {
	_inc?: InputMaybe<ChainStateIncInput>
	_set?: InputMaybe<ChainStateSetInput>
	where: ChainStateBoolExp
}

/** mutation root */
export type Mutation_RootUpdateChainStateByPkArgs = {
	_inc?: InputMaybe<ChainStateIncInput>
	_set?: InputMaybe<ChainStateSetInput>
	pkColumns: ChainStatePkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateChainStateManyArgs = {
	updates: ReadonlyArray<ChainStateUpdates>
}

/** mutation root */
export type Mutation_RootUpdateChainStatusesArgs = {
	_inc?: InputMaybe<ChainStatusesIncInput>
	_set?: InputMaybe<ChainStatusesSetInput>
	where: ChainStatusesBoolExp
}

/** mutation root */
export type Mutation_RootUpdateChainStatusesByPkArgs = {
	_inc?: InputMaybe<ChainStatusesIncInput>
	_set?: InputMaybe<ChainStatusesSetInput>
	pkColumns: ChainStatusesPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateChainStatusesManyArgs = {
	updates: ReadonlyArray<ChainStatusesUpdates>
}

/** mutation root */
export type Mutation_RootUpdateCompletedQuestsArgs = {
	_inc?: InputMaybe<CompletedQuestsIncInput>
	_set?: InputMaybe<CompletedQuestsSetInput>
	where: CompletedQuestsBoolExp
}

/** mutation root */
export type Mutation_RootUpdateCompletedQuestsByPkArgs = {
	_inc?: InputMaybe<CompletedQuestsIncInput>
	_set?: InputMaybe<CompletedQuestsSetInput>
	pkColumns: CompletedQuestsPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateCompletedQuestsManyArgs = {
	updates: ReadonlyArray<CompletedQuestsUpdates>
}

/** mutation root */
export type Mutation_RootUpdateCurrentChainStateArgs = {
	_inc?: InputMaybe<CurrentChainStateIncInput>
	_set?: InputMaybe<CurrentChainStateSetInput>
	where: CurrentChainStateBoolExp
}

/** mutation root */
export type Mutation_RootUpdateCurrentChainStateByPkArgs = {
	_inc?: InputMaybe<CurrentChainStateIncInput>
	_set?: InputMaybe<CurrentChainStateSetInput>
	pkColumns: CurrentChainStatePkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateCurrentChainStateManyArgs = {
	updates: ReadonlyArray<CurrentChainStateUpdates>
}

/** mutation root */
export type Mutation_RootUpdateDiscordActivitiesArgs = {
	_inc?: InputMaybe<DiscordActivitiesIncInput>
	_set?: InputMaybe<DiscordActivitiesSetInput>
	where: DiscordActivitiesBoolExp
}

/** mutation root */
export type Mutation_RootUpdateDiscordActivitiesByPkArgs = {
	_inc?: InputMaybe<DiscordActivitiesIncInput>
	_set?: InputMaybe<DiscordActivitiesSetInput>
	pkColumns: DiscordActivitiesPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateDiscordActivitiesManyArgs = {
	updates: ReadonlyArray<DiscordActivitiesUpdates>
}

/** mutation root */
export type Mutation_RootUpdateGenericActivitiesArgs = {
	_inc?: InputMaybe<GenericActivitiesIncInput>
	_set?: InputMaybe<GenericActivitiesSetInput>
	where: GenericActivitiesBoolExp
}

/** mutation root */
export type Mutation_RootUpdateGenericActivitiesByPkArgs = {
	_inc?: InputMaybe<GenericActivitiesIncInput>
	_set?: InputMaybe<GenericActivitiesSetInput>
	pkColumns: GenericActivitiesPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateGenericActivitiesManyArgs = {
	updates: ReadonlyArray<GenericActivitiesUpdates>
}

/** mutation root */
export type Mutation_RootUpdateHistoricalBalanceArgs = {
	_inc?: InputMaybe<HistoricalBalanceIncInput>
	_set?: InputMaybe<HistoricalBalanceSetInput>
	where: HistoricalBalanceBoolExp
}

/** mutation root */
export type Mutation_RootUpdateHistoricalBalanceByPkArgs = {
	_inc?: InputMaybe<HistoricalBalanceIncInput>
	_set?: InputMaybe<HistoricalBalanceSetInput>
	pkColumns: HistoricalBalancePkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateHistoricalBalanceManyArgs = {
	updates: ReadonlyArray<HistoricalBalanceUpdates>
}

/** mutation root */
export type Mutation_RootUpdateIdentitiesArgs = {
	_inc?: InputMaybe<IdentitiesIncInput>
	_set?: InputMaybe<IdentitiesSetInput>
	where: IdentitiesBoolExp
}

/** mutation root */
export type Mutation_RootUpdateIdentitiesByPkArgs = {
	_inc?: InputMaybe<IdentitiesIncInput>
	_set?: InputMaybe<IdentitiesSetInput>
	pkColumns: IdentitiesPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateIdentitiesManyArgs = {
	updates: ReadonlyArray<IdentitiesUpdates>
}

/** mutation root */
export type Mutation_RootUpdateIdentityArgs = {
	_set?: InputMaybe<IdentitySetInput>
	where: IdentityBoolExp
}

/** mutation root */
export type Mutation_RootUpdateIdentityByPkArgs = {
	_set?: InputMaybe<IdentitySetInput>
	pkColumns: IdentityPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateIdentityManyArgs = {
	updates: ReadonlyArray<IdentityUpdates>
}

/** mutation root */
export type Mutation_RootUpdateMigrationsArgs = {
	_inc?: InputMaybe<MigrationsIncInput>
	_set?: InputMaybe<MigrationsSetInput>
	where: MigrationsBoolExp
}

/** mutation root */
export type Mutation_RootUpdateMigrationsByPkArgs = {
	_inc?: InputMaybe<MigrationsIncInput>
	_set?: InputMaybe<MigrationsSetInput>
	pkColumns: MigrationsPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateMigrationsManyArgs = {
	updates: ReadonlyArray<MigrationsUpdates>
}

/** mutation root */
export type Mutation_RootUpdateNftArgs = {
	_set?: InputMaybe<NftSetInput>
	where: NftBoolExp
}

/** mutation root */
export type Mutation_RootUpdateNftByPkArgs = {
	_set?: InputMaybe<NftSetInput>
	pkColumns: NftPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateNftCollectionArgs = {
	_inc?: InputMaybe<NftCollectionIncInput>
	_set?: InputMaybe<NftCollectionSetInput>
	where: NftCollectionBoolExp
}

/** mutation root */
export type Mutation_RootUpdateNftCollectionByPkArgs = {
	_inc?: InputMaybe<NftCollectionIncInput>
	_set?: InputMaybe<NftCollectionSetInput>
	pkColumns: NftCollectionPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateNftCollectionManyArgs = {
	updates: ReadonlyArray<NftCollectionUpdates>
}

/** mutation root */
export type Mutation_RootUpdateNftManyArgs = {
	updates: ReadonlyArray<NftUpdates>
}

/** mutation root */
export type Mutation_RootUpdateOrganizationArgs = {
	_inc?: InputMaybe<OrganizationIncInput>
	_set?: InputMaybe<OrganizationSetInput>
	where: OrganizationBoolExp
}

/** mutation root */
export type Mutation_RootUpdateOrganizationByPkArgs = {
	_inc?: InputMaybe<OrganizationIncInput>
	_set?: InputMaybe<OrganizationSetInput>
	pkColumns: OrganizationPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateOrganizationManyArgs = {
	updates: ReadonlyArray<OrganizationUpdates>
}

/** mutation root */
export type Mutation_RootUpdateOrganizationMemberArgs = {
	_set?: InputMaybe<OrganizationMemberSetInput>
	where: OrganizationMemberBoolExp
}

/** mutation root */
export type Mutation_RootUpdateOrganizationMemberByPkArgs = {
	_set?: InputMaybe<OrganizationMemberSetInput>
	pkColumns: OrganizationMemberPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateOrganizationMemberManyArgs = {
	updates: ReadonlyArray<OrganizationMemberUpdates>
}

/** mutation root */
export type Mutation_RootUpdateOrganizationMetadataArgs = {
	_set?: InputMaybe<OrganizationMetadataSetInput>
	where: OrganizationMetadataBoolExp
}

/** mutation root */
export type Mutation_RootUpdateOrganizationMetadataByPkArgs = {
	_set?: InputMaybe<OrganizationMetadataSetInput>
	pkColumns: OrganizationMetadataPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateOrganizationMetadataManyArgs = {
	updates: ReadonlyArray<OrganizationMetadataUpdates>
}

/** mutation root */
export type Mutation_RootUpdatePaymentsArgs = {
	_inc?: InputMaybe<PaymentsIncInput>
	_set?: InputMaybe<PaymentsSetInput>
	where: PaymentsBoolExp
}

/** mutation root */
export type Mutation_RootUpdatePaymentsByPkArgs = {
	_inc?: InputMaybe<PaymentsIncInput>
	_set?: InputMaybe<PaymentsSetInput>
	pkColumns: PaymentsPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdatePaymentsManyArgs = {
	updates: ReadonlyArray<PaymentsUpdates>
}

/** mutation root */
export type Mutation_RootUpdateProposalArgs = {
	_inc?: InputMaybe<ProposalIncInput>
	_set?: InputMaybe<ProposalSetInput>
	where: ProposalBoolExp
}

/** mutation root */
export type Mutation_RootUpdateProposalByPkArgs = {
	_inc?: InputMaybe<ProposalIncInput>
	_set?: InputMaybe<ProposalSetInput>
	pkColumns: ProposalPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateProposalManyArgs = {
	updates: ReadonlyArray<ProposalUpdates>
}

/** mutation root */
export type Mutation_RootUpdateProposalMetadataArgs = {
	_set?: InputMaybe<ProposalMetadataSetInput>
	where: ProposalMetadataBoolExp
}

/** mutation root */
export type Mutation_RootUpdateProposalMetadataByPkArgs = {
	_set?: InputMaybe<ProposalMetadataSetInput>
	pkColumns: ProposalMetadataPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateProposalMetadataManyArgs = {
	updates: ReadonlyArray<ProposalMetadataUpdates>
}

/** mutation root */
export type Mutation_RootUpdateProposalVoterArgs = {
	_inc?: InputMaybe<ProposalVoterIncInput>
	_set?: InputMaybe<ProposalVoterSetInput>
	where: ProposalVoterBoolExp
}

/** mutation root */
export type Mutation_RootUpdateProposalVoterByPkArgs = {
	_inc?: InputMaybe<ProposalVoterIncInput>
	_set?: InputMaybe<ProposalVoterSetInput>
	pkColumns: ProposalVoterPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateProposalVoterManyArgs = {
	updates: ReadonlyArray<ProposalVoterUpdates>
}

/** mutation root */
export type Mutation_RootUpdateQuestProgressesArgs = {
	_inc?: InputMaybe<QuestProgressesIncInput>
	_set?: InputMaybe<QuestProgressesSetInput>
	where: QuestProgressesBoolExp
}

/** mutation root */
export type Mutation_RootUpdateQuestProgressesByPkArgs = {
	_inc?: InputMaybe<QuestProgressesIncInput>
	_set?: InputMaybe<QuestProgressesSetInput>
	pkColumns: QuestProgressesPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateQuestProgressesManyArgs = {
	updates: ReadonlyArray<QuestProgressesUpdates>
}

/** mutation root */
export type Mutation_RootUpdateQuestsArgs = {
	_inc?: InputMaybe<QuestsIncInput>
	_set?: InputMaybe<QuestsSetInput>
	where: QuestsBoolExp
}

/** mutation root */
export type Mutation_RootUpdateQuestsByPkArgs = {
	_inc?: InputMaybe<QuestsIncInput>
	_set?: InputMaybe<QuestsSetInput>
	pkColumns: QuestsPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateQuestsManyArgs = {
	updates: ReadonlyArray<QuestsUpdates>
}

/** mutation root */
export type Mutation_RootUpdateRewardClaimsArgs = {
	_inc?: InputMaybe<RewardClaimsIncInput>
	_set?: InputMaybe<RewardClaimsSetInput>
	where: RewardClaimsBoolExp
}

/** mutation root */
export type Mutation_RootUpdateRewardClaimsByPkArgs = {
	_inc?: InputMaybe<RewardClaimsIncInput>
	_set?: InputMaybe<RewardClaimsSetInput>
	pkColumns: RewardClaimsPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateRewardClaimsManyArgs = {
	updates: ReadonlyArray<RewardClaimsUpdates>
}

/** mutation root */
export type Mutation_RootUpdateSenseEntityArgs = {
	_inc?: InputMaybe<SenseEntityIncInput>
	_set?: InputMaybe<SenseEntitySetInput>
	where: SenseEntityBoolExp
}

/** mutation root */
export type Mutation_RootUpdateSenseEntityByPkArgs = {
	_inc?: InputMaybe<SenseEntityIncInput>
	_set?: InputMaybe<SenseEntitySetInput>
	pkColumns: SenseEntityPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateSenseEntityManyArgs = {
	updates: ReadonlyArray<SenseEntityUpdates>
}

/** mutation root */
export type Mutation_RootUpdateSessionArgs = {
	_inc?: InputMaybe<SessionIncInput>
	_set?: InputMaybe<SessionSetInput>
	where: SessionBoolExp
}

/** mutation root */
export type Mutation_RootUpdateSessionByPkArgs = {
	_inc?: InputMaybe<SessionIncInput>
	_set?: InputMaybe<SessionSetInput>
	pkColumns: SessionPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateSessionManyArgs = {
	updates: ReadonlyArray<SessionUpdates>
}

/** mutation root */
export type Mutation_RootUpdateSquidProcessorStatusArgs = {
	_inc?: InputMaybe<SquidProcessorStatusIncInput>
	_set?: InputMaybe<SquidProcessorStatusSetInput>
	where: SquidProcessorStatusBoolExp
}

/** mutation root */
export type Mutation_RootUpdateSquidProcessorStatusByPkArgs = {
	_inc?: InputMaybe<SquidProcessorStatusIncInput>
	_set?: InputMaybe<SquidProcessorStatusSetInput>
	pkColumns: SquidProcessorStatusPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateSquidProcessorStatusManyArgs = {
	updates: ReadonlyArray<SquidProcessorStatusUpdates>
}

/** mutation root */
export type Mutation_RootUpdateTwitterActivitiesArgs = {
	_inc?: InputMaybe<TwitterActivitiesIncInput>
	_set?: InputMaybe<TwitterActivitiesSetInput>
	where: TwitterActivitiesBoolExp
}

/** mutation root */
export type Mutation_RootUpdateTwitterActivitiesByPkArgs = {
	_inc?: InputMaybe<TwitterActivitiesIncInput>
	_set?: InputMaybe<TwitterActivitiesSetInput>
	pkColumns: TwitterActivitiesPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateTwitterActivitiesManyArgs = {
	updates: ReadonlyArray<TwitterActivitiesUpdates>
}

/** mutation root */
export type Mutation_RootUpdateTwitterSearchesArgs = {
	_inc?: InputMaybe<TwitterSearchesIncInput>
	_set?: InputMaybe<TwitterSearchesSetInput>
	where: TwitterSearchesBoolExp
}

/** mutation root */
export type Mutation_RootUpdateTwitterSearchesByPkArgs = {
	_inc?: InputMaybe<TwitterSearchesIncInput>
	_set?: InputMaybe<TwitterSearchesSetInput>
	pkColumns: TwitterSearchesPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateTwitterSearchesManyArgs = {
	updates: ReadonlyArray<TwitterSearchesUpdates>
}

/** mutation root */
export type Mutation_RootUpdateTwitterUsersArgs = {
	_inc?: InputMaybe<TwitterUsersIncInput>
	_set?: InputMaybe<TwitterUsersSetInput>
	where: TwitterUsersBoolExp
}

/** mutation root */
export type Mutation_RootUpdateTwitterUsersByPkArgs = {
	_inc?: InputMaybe<TwitterUsersIncInput>
	_set?: InputMaybe<TwitterUsersSetInput>
	pkColumns: TwitterUsersPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateTwitterUsersManyArgs = {
	updates: ReadonlyArray<TwitterUsersUpdates>
}

/** mutation root */
export type Mutation_RootUpdateUserTokensArgs = {
	_inc?: InputMaybe<UserTokensIncInput>
	_set?: InputMaybe<UserTokensSetInput>
	where: UserTokensBoolExp
}

/** mutation root */
export type Mutation_RootUpdateUserTokensByPkArgs = {
	_inc?: InputMaybe<UserTokensIncInput>
	_set?: InputMaybe<UserTokensSetInput>
	pkColumns: UserTokensPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateUserTokensManyArgs = {
	updates: ReadonlyArray<UserTokensUpdates>
}

/** mutation root */
export type Mutation_RootUpdateVotingArgs = {
	_inc?: InputMaybe<VotingIncInput>
	_set?: InputMaybe<VotingSetInput>
	where: VotingBoolExp
}

/** mutation root */
export type Mutation_RootUpdateVotingByPkArgs = {
	_inc?: InputMaybe<VotingIncInput>
	_set?: InputMaybe<VotingSetInput>
	pkColumns: VotingPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateVotingManyArgs = {
	updates: ReadonlyArray<VotingUpdates>
}

/** mutation root */
export type Mutation_RootUpdate_PrismaMigrationsArgs = {
	_inc?: InputMaybe<_PrismaMigrationsIncInput>
	_set?: InputMaybe<_PrismaMigrationsSetInput>
	where: _PrismaMigrationsBoolExp
}

/** mutation root */
export type Mutation_RootUpdate_PrismaMigrationsByPkArgs = {
	_inc?: InputMaybe<_PrismaMigrationsIncInput>
	_set?: InputMaybe<_PrismaMigrationsSetInput>
	pkColumns: _PrismaMigrationsPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdate_PrismaMigrationsManyArgs = {
	updates: ReadonlyArray<_PrismaMigrationsUpdates>
}

export type NftAggregateBoolExpBool_And = {
	readonly arguments: NftSelectColumnNftAggregateBoolExpBool_AndArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<NftBoolExp>
	readonly predicate: BooleanComparisonExp
}

export type NftAggregateBoolExpBool_Or = {
	readonly arguments: NftSelectColumnNftAggregateBoolExpBool_OrArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<NftBoolExp>
	readonly predicate: BooleanComparisonExp
}

export type NftAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<NftSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<NftBoolExp>
	readonly predicate: IntComparisonExp
}

export type NftCollectionAggregateBoolExpBool_And = {
	readonly arguments: NftCollectionSelectColumnNftCollectionAggregateBoolExpBool_AndArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<NftCollectionBoolExp>
	readonly predicate: BooleanComparisonExp
}

export type NftCollectionAggregateBoolExpBool_Or = {
	readonly arguments: NftCollectionSelectColumnNftCollectionAggregateBoolExpBool_OrArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<NftCollectionBoolExp>
	readonly predicate: BooleanComparisonExp
}

export type NftCollectionAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<NftCollectionSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<NftCollectionBoolExp>
	readonly predicate: IntComparisonExp
}

export type OrganizationAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<OrganizationSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<OrganizationBoolExp>
	readonly predicate: IntComparisonExp
}

export type OrganizationMemberAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<OrganizationMemberSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<OrganizationMemberBoolExp>
	readonly predicate: IntComparisonExp
}

export type PaymentsAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<PaymentsSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<PaymentsBoolExp>
	readonly predicate: IntComparisonExp
}

export type ProposalAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<ProposalBoolExp>
	readonly predicate: IntComparisonExp
}

export type ProposalVoterAggregateBoolExpBool_And = {
	readonly arguments: ProposalVoterSelectColumnProposalVoterAggregateBoolExpBool_AndArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<ProposalVoterBoolExp>
	readonly predicate: BooleanComparisonExp
}

export type ProposalVoterAggregateBoolExpBool_Or = {
	readonly arguments: ProposalVoterSelectColumnProposalVoterAggregateBoolExpBool_OrArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<ProposalVoterBoolExp>
	readonly predicate: BooleanComparisonExp
}

export type ProposalVoterAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<ProposalVoterSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<ProposalVoterBoolExp>
	readonly predicate: IntComparisonExp
}

export type Query_Root = {
	readonly __typename?: 'query_root'
	/** fetch data from the table: "_prisma_migrations" */
	readonly _prismaMigrations: ReadonlyArray<_PrismaMigrations>
	/** fetch aggregated fields from the table: "_prisma_migrations" */
	readonly _prismaMigrationsAggregate: _PrismaMigrationsAggregate
	/** fetch data from the table: "_prisma_migrations" using primary key columns */
	readonly _prismaMigrationsByPk?: Maybe<_PrismaMigrations>
	/** fetch data from the table: "account_balance" */
	readonly accountBalance: ReadonlyArray<AccountBalance>
	/** fetch aggregated fields from the table: "account_balance" */
	readonly accountBalanceAggregate: AccountBalanceAggregate
	/** fetch data from the table: "account_balance" using primary key columns */
	readonly accountBalanceByPk?: Maybe<AccountBalance>
	/** fetch data from the table: "Balance" */
	readonly balance: ReadonlyArray<Balance>
	/** fetch aggregated fields from the table: "Balance" */
	readonly balanceAggregate: BalanceAggregate
	/** fetch data from the table: "Balance" using primary key columns */
	readonly balanceByPk?: Maybe<Balance>
	/** fetch data from the table: "battlepass" */
	readonly battlepass: ReadonlyArray<Battlepass>
	/** fetch aggregated fields from the table: "battlepass" */
	readonly battlepassAggregate: BattlepassAggregate
	readonly battlepassBot?: Maybe<BattlepassBotQuery>
	/** fetch data from the table: "battlepass" using primary key columns */
	readonly battlepassByPk?: Maybe<Battlepass>
	/** An array relationship */
	readonly battlepassLevels: ReadonlyArray<BattlepassLevels>
	/** An aggregate relationship */
	readonly battlepassLevelsAggregate: BattlepassLevelsAggregate
	/** fetch data from the table: "BattlepassLevels" using primary key columns */
	readonly battlepassLevelsByPk?: Maybe<BattlepassLevels>
	/** fetch data from the table: "battlepass_nft" */
	readonly battlepassNft: ReadonlyArray<BattlepassNft>
	/** fetch aggregated fields from the table: "battlepass_nft" */
	readonly battlepassNftAggregate: BattlepassNftAggregate
	/** fetch data from the table: "battlepass_nft" using primary key columns */
	readonly battlepassNftByPk?: Maybe<BattlepassNft>
	/** An array relationship */
	readonly battlepassParticipants: ReadonlyArray<BattlepassParticipants>
	/** An aggregate relationship */
	readonly battlepassParticipantsAggregate: BattlepassParticipantsAggregate
	/** fetch data from the table: "BattlepassParticipants" using primary key columns */
	readonly battlepassParticipantsByPk?: Maybe<BattlepassParticipants>
	/** An array relationship */
	readonly battlepassRewards: ReadonlyArray<BattlepassRewards>
	/** An aggregate relationship */
	readonly battlepassRewardsAggregate: BattlepassRewardsAggregate
	/** fetch data from the table: "BattlepassRewards" using primary key columns */
	readonly battlepassRewardsByPk?: Maybe<BattlepassRewards>
	/** fetch data from the table: "Battlepasses" */
	readonly battlepasses: ReadonlyArray<Battlepasses>
	/** fetch aggregated fields from the table: "Battlepasses" */
	readonly battlepassesAggregate: BattlepassesAggregate
	/** fetch data from the table: "Battlepasses" using primary key columns */
	readonly battlepassesByPk?: Maybe<Battlepasses>
	/** fetch data from the table: "campaign" */
	readonly campaign: ReadonlyArray<Campaign>
	/** fetch aggregated fields from the table: "campaign" */
	readonly campaignAggregate: CampaignAggregate
	/** fetch data from the table: "campaign" using primary key columns */
	readonly campaignByPk?: Maybe<Campaign>
	/** fetch data from the table: "campaign_contributor" */
	readonly campaignContributor: ReadonlyArray<CampaignContributor>
	/** fetch aggregated fields from the table: "campaign_contributor" */
	readonly campaignContributorAggregate: CampaignContributorAggregate
	/** fetch data from the table: "campaign_contributor" using primary key columns */
	readonly campaignContributorByPk?: Maybe<CampaignContributor>
	/** fetch data from the table: "campaign_metadata" */
	readonly campaignMetadata: ReadonlyArray<CampaignMetadata>
	/** fetch aggregated fields from the table: "campaign_metadata" */
	readonly campaignMetadataAggregate: CampaignMetadataAggregate
	/** fetch data from the table: "campaign_metadata" using primary key columns */
	readonly campaignMetadataByPk?: Maybe<CampaignMetadata>
	/** fetch data from the table: "ChainActivities" */
	readonly chainActivities: ReadonlyArray<ChainActivities>
	/** fetch aggregated fields from the table: "ChainActivities" */
	readonly chainActivitiesAggregate: ChainActivitiesAggregate
	/** fetch data from the table: "ChainActivities" using primary key columns */
	readonly chainActivitiesByPk?: Maybe<ChainActivities>
	/** fetch data from the table: "ChainInfo" */
	readonly chainInfo: ReadonlyArray<ChainInfo>
	/** fetch aggregated fields from the table: "ChainInfo" */
	readonly chainInfoAggregate: ChainInfoAggregate
	/** fetch data from the table: "ChainInfo" using primary key columns */
	readonly chainInfoByPk?: Maybe<ChainInfo>
	/** fetch data from the table: "chain_state" */
	readonly chainState: ReadonlyArray<ChainState>
	/** fetch aggregated fields from the table: "chain_state" */
	readonly chainStateAggregate: ChainStateAggregate
	/** fetch data from the table: "chain_state" using primary key columns */
	readonly chainStateByPk?: Maybe<ChainState>
	/** fetch data from the table: "ChainStatuses" */
	readonly chainStatuses: ReadonlyArray<ChainStatuses>
	/** fetch aggregated fields from the table: "ChainStatuses" */
	readonly chainStatusesAggregate: ChainStatusesAggregate
	/** fetch data from the table: "ChainStatuses" using primary key columns */
	readonly chainStatusesByPk?: Maybe<ChainStatuses>
	/** An array relationship */
	readonly completedQuests: ReadonlyArray<CompletedQuests>
	/** An aggregate relationship */
	readonly completedQuestsAggregate: CompletedQuestsAggregate
	/** fetch data from the table: "CompletedQuests" using primary key columns */
	readonly completedQuestsByPk?: Maybe<CompletedQuests>
	/** fetch data from the table: "current_chain_state" */
	readonly currentChainState: ReadonlyArray<CurrentChainState>
	/** fetch aggregated fields from the table: "current_chain_state" */
	readonly currentChainStateAggregate: CurrentChainStateAggregate
	/** fetch data from the table: "current_chain_state" using primary key columns */
	readonly currentChainStateByPk?: Maybe<CurrentChainState>
	/** fetch data from the table: "DiscordActivities" */
	readonly discordActivities: ReadonlyArray<DiscordActivities>
	/** fetch aggregated fields from the table: "DiscordActivities" */
	readonly discordActivitiesAggregate: DiscordActivitiesAggregate
	/** fetch data from the table: "DiscordActivities" using primary key columns */
	readonly discordActivitiesByPk?: Maybe<DiscordActivities>
	readonly gamedao?: Maybe<GamedaoQuery>
	/** fetch data from the table: "GenericActivities" */
	readonly genericActivities: ReadonlyArray<GenericActivities>
	/** fetch aggregated fields from the table: "GenericActivities" */
	readonly genericActivitiesAggregate: GenericActivitiesAggregate
	/** fetch data from the table: "GenericActivities" using primary key columns */
	readonly genericActivitiesByPk?: Maybe<GenericActivities>
	/** fetch data from the table: "historical_balance" */
	readonly historicalBalance: ReadonlyArray<HistoricalBalance>
	/** fetch aggregated fields from the table: "historical_balance" */
	readonly historicalBalanceAggregate: HistoricalBalanceAggregate
	/** fetch data from the table: "historical_balance" using primary key columns */
	readonly historicalBalanceByPk?: Maybe<HistoricalBalance>
	/** fetch data from the table: "Identities" */
	readonly identities: ReadonlyArray<Identities>
	/** fetch aggregated fields from the table: "Identities" */
	readonly identitiesAggregate: IdentitiesAggregate
	/** fetch data from the table: "Identities" using primary key columns */
	readonly identitiesByPk?: Maybe<Identities>
	/** fetch data from the table: "identity" */
	readonly identity: ReadonlyArray<Identity>
	/** fetch aggregated fields from the table: "identity" */
	readonly identityAggregate: IdentityAggregate
	/** fetch data from the table: "identity" using primary key columns */
	readonly identityByPk?: Maybe<Identity>
	/** fetch data from the table: "migrations" */
	readonly migrations: ReadonlyArray<Migrations>
	/** fetch aggregated fields from the table: "migrations" */
	readonly migrationsAggregate: MigrationsAggregate
	/** fetch data from the table: "migrations" using primary key columns */
	readonly migrationsByPk?: Maybe<Migrations>
	/** fetch data from the table: "nft" */
	readonly nft: ReadonlyArray<Nft>
	/** fetch aggregated fields from the table: "nft" */
	readonly nftAggregate: NftAggregate
	/** fetch data from the table: "nft" using primary key columns */
	readonly nftByPk?: Maybe<Nft>
	/** fetch data from the table: "nft_collection" */
	readonly nftCollection: ReadonlyArray<NftCollection>
	/** fetch aggregated fields from the table: "nft_collection" */
	readonly nftCollectionAggregate: NftCollectionAggregate
	/** fetch data from the table: "nft_collection" using primary key columns */
	readonly nftCollectionByPk?: Maybe<NftCollection>
	/** fetch data from the table: "organization" */
	readonly organization: ReadonlyArray<Organization>
	/** fetch aggregated fields from the table: "organization" */
	readonly organizationAggregate: OrganizationAggregate
	/** fetch data from the table: "organization" using primary key columns */
	readonly organizationByPk?: Maybe<Organization>
	/** fetch data from the table: "organization_member" */
	readonly organizationMember: ReadonlyArray<OrganizationMember>
	/** fetch aggregated fields from the table: "organization_member" */
	readonly organizationMemberAggregate: OrganizationMemberAggregate
	/** fetch data from the table: "organization_member" using primary key columns */
	readonly organizationMemberByPk?: Maybe<OrganizationMember>
	/** fetch data from the table: "organization_metadata" */
	readonly organizationMetadata: ReadonlyArray<OrganizationMetadata>
	/** fetch aggregated fields from the table: "organization_metadata" */
	readonly organizationMetadataAggregate: OrganizationMetadataAggregate
	/** fetch data from the table: "organization_metadata" using primary key columns */
	readonly organizationMetadataByPk?: Maybe<OrganizationMetadata>
	/** An array relationship */
	readonly payments: ReadonlyArray<Payments>
	/** An aggregate relationship */
	readonly paymentsAggregate: PaymentsAggregate
	/** fetch data from the table: "Payments" using primary key columns */
	readonly paymentsByPk?: Maybe<Payments>
	/** fetch data from the table: "proposal" */
	readonly proposal: ReadonlyArray<Proposal>
	/** fetch aggregated fields from the table: "proposal" */
	readonly proposalAggregate: ProposalAggregate
	/** fetch data from the table: "proposal" using primary key columns */
	readonly proposalByPk?: Maybe<Proposal>
	/** fetch data from the table: "proposal_metadata" */
	readonly proposalMetadata: ReadonlyArray<ProposalMetadata>
	/** fetch aggregated fields from the table: "proposal_metadata" */
	readonly proposalMetadataAggregate: ProposalMetadataAggregate
	/** fetch data from the table: "proposal_metadata" using primary key columns */
	readonly proposalMetadataByPk?: Maybe<ProposalMetadata>
	/** fetch data from the table: "proposal_voter" */
	readonly proposalVoter: ReadonlyArray<ProposalVoter>
	/** fetch aggregated fields from the table: "proposal_voter" */
	readonly proposalVoterAggregate: ProposalVoterAggregate
	/** fetch data from the table: "proposal_voter" using primary key columns */
	readonly proposalVoterByPk?: Maybe<ProposalVoter>
	/** An array relationship */
	readonly questProgresses: ReadonlyArray<QuestProgresses>
	/** An aggregate relationship */
	readonly questProgressesAggregate: QuestProgressesAggregate
	/** fetch data from the table: "QuestProgresses" using primary key columns */
	readonly questProgressesByPk?: Maybe<QuestProgresses>
	/** An array relationship */
	readonly quests: ReadonlyArray<Quests>
	/** An aggregate relationship */
	readonly questsAggregate: QuestsAggregate
	/** fetch data from the table: "Quests" using primary key columns */
	readonly questsByPk?: Maybe<Quests>
	/** An array relationship */
	readonly rewardClaims: ReadonlyArray<RewardClaims>
	/** An aggregate relationship */
	readonly rewardClaimsAggregate: RewardClaimsAggregate
	/** fetch data from the table: "RewardClaims" using primary key columns */
	readonly rewardClaimsByPk?: Maybe<RewardClaims>
	/** fetch data from the table: "sense_entity" */
	readonly senseEntity: ReadonlyArray<SenseEntity>
	/** fetch aggregated fields from the table: "sense_entity" */
	readonly senseEntityAggregate: SenseEntityAggregate
	/** fetch data from the table: "sense_entity" using primary key columns */
	readonly senseEntityByPk?: Maybe<SenseEntity>
	/** fetch data from the table: "Session" */
	readonly session: ReadonlyArray<Session>
	/** fetch aggregated fields from the table: "Session" */
	readonly sessionAggregate: SessionAggregate
	/** fetch data from the table: "Session" using primary key columns */
	readonly sessionByPk?: Maybe<Session>
	/** fetch data from the table: "squid_processor.status" */
	readonly squidProcessorStatus: ReadonlyArray<SquidProcessorStatus>
	/** fetch aggregated fields from the table: "squid_processor.status" */
	readonly squidProcessorStatusAggregate: SquidProcessorStatusAggregate
	/** fetch data from the table: "squid_processor.status" using primary key columns */
	readonly squidProcessorStatusByPk?: Maybe<SquidProcessorStatus>
	/** fetch data from the table: "TwitterActivities" */
	readonly twitterActivities: ReadonlyArray<TwitterActivities>
	/** fetch aggregated fields from the table: "TwitterActivities" */
	readonly twitterActivitiesAggregate: TwitterActivitiesAggregate
	/** fetch data from the table: "TwitterActivities" using primary key columns */
	readonly twitterActivitiesByPk?: Maybe<TwitterActivities>
	/** fetch data from the table: "TwitterSearches" */
	readonly twitterSearches: ReadonlyArray<TwitterSearches>
	/** fetch aggregated fields from the table: "TwitterSearches" */
	readonly twitterSearchesAggregate: TwitterSearchesAggregate
	/** fetch data from the table: "TwitterSearches" using primary key columns */
	readonly twitterSearchesByPk?: Maybe<TwitterSearches>
	/** fetch data from the table: "TwitterUsers" */
	readonly twitterUsers: ReadonlyArray<TwitterUsers>
	/** fetch aggregated fields from the table: "TwitterUsers" */
	readonly twitterUsersAggregate: TwitterUsersAggregate
	/** fetch data from the table: "TwitterUsers" using primary key columns */
	readonly twitterUsersByPk?: Maybe<TwitterUsers>
	/** An array relationship */
	readonly userTokens: ReadonlyArray<UserTokens>
	/** An aggregate relationship */
	readonly userTokensAggregate: UserTokensAggregate
	/** fetch data from the table: "UserTokens" using primary key columns */
	readonly userTokensByPk?: Maybe<UserTokens>
	/** fetch data from the table: "voting" */
	readonly voting: ReadonlyArray<Voting>
	/** fetch aggregated fields from the table: "voting" */
	readonly votingAggregate: VotingAggregate
	/** fetch data from the table: "voting" using primary key columns */
	readonly votingByPk?: Maybe<Voting>
}

export type Query_Root_PrismaMigrationsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<_PrismaMigrationsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<_PrismaMigrationsOrderBy>>
	where?: InputMaybe<_PrismaMigrationsBoolExp>
}

export type Query_Root_PrismaMigrationsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<_PrismaMigrationsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<_PrismaMigrationsOrderBy>>
	where?: InputMaybe<_PrismaMigrationsBoolExp>
}

export type Query_Root_PrismaMigrationsByPkArgs = {
	id: Scalars['String']
}

export type Query_RootAccountBalanceArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<AccountBalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<AccountBalanceOrderBy>>
	where?: InputMaybe<AccountBalanceBoolExp>
}

export type Query_RootAccountBalanceAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<AccountBalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<AccountBalanceOrderBy>>
	where?: InputMaybe<AccountBalanceBoolExp>
}

export type Query_RootAccountBalanceByPkArgs = {
	id: Scalars['String']
}

export type Query_RootBalanceArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BalanceOrderBy>>
	where?: InputMaybe<BalanceBoolExp>
}

export type Query_RootBalanceAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BalanceOrderBy>>
	where?: InputMaybe<BalanceBoolExp>
}

export type Query_RootBalanceByPkArgs = {
	id: Scalars['bigint']
}

export type Query_RootBattlepassArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassOrderBy>>
	where?: InputMaybe<BattlepassBoolExp>
}

export type Query_RootBattlepassAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassOrderBy>>
	where?: InputMaybe<BattlepassBoolExp>
}

export type Query_RootBattlepassByPkArgs = {
	id: Scalars['String']
}

export type Query_RootBattlepassLevelsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassLevelsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassLevelsOrderBy>>
	where?: InputMaybe<BattlepassLevelsBoolExp>
}

export type Query_RootBattlepassLevelsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassLevelsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassLevelsOrderBy>>
	where?: InputMaybe<BattlepassLevelsBoolExp>
}

export type Query_RootBattlepassLevelsByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootBattlepassNftArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassNftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassNftOrderBy>>
	where?: InputMaybe<BattlepassNftBoolExp>
}

export type Query_RootBattlepassNftAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassNftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassNftOrderBy>>
	where?: InputMaybe<BattlepassNftBoolExp>
}

export type Query_RootBattlepassNftByPkArgs = {
	id: Scalars['String']
}

export type Query_RootBattlepassParticipantsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassParticipantsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassParticipantsOrderBy>>
	where?: InputMaybe<BattlepassParticipantsBoolExp>
}

export type Query_RootBattlepassParticipantsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassParticipantsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassParticipantsOrderBy>>
	where?: InputMaybe<BattlepassParticipantsBoolExp>
}

export type Query_RootBattlepassParticipantsByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootBattlepassRewardsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassRewardsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassRewardsOrderBy>>
	where?: InputMaybe<BattlepassRewardsBoolExp>
}

export type Query_RootBattlepassRewardsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassRewardsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassRewardsOrderBy>>
	where?: InputMaybe<BattlepassRewardsBoolExp>
}

export type Query_RootBattlepassRewardsByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootBattlepassesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassesOrderBy>>
	where?: InputMaybe<BattlepassesBoolExp>
}

export type Query_RootBattlepassesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassesOrderBy>>
	where?: InputMaybe<BattlepassesBoolExp>
}

export type Query_RootBattlepassesByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootCampaignArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignOrderBy>>
	where?: InputMaybe<CampaignBoolExp>
}

export type Query_RootCampaignAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignOrderBy>>
	where?: InputMaybe<CampaignBoolExp>
}

export type Query_RootCampaignByPkArgs = {
	id: Scalars['String']
}

export type Query_RootCampaignContributorArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignContributorSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignContributorOrderBy>>
	where?: InputMaybe<CampaignContributorBoolExp>
}

export type Query_RootCampaignContributorAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignContributorSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignContributorOrderBy>>
	where?: InputMaybe<CampaignContributorBoolExp>
}

export type Query_RootCampaignContributorByPkArgs = {
	id: Scalars['String']
}

export type Query_RootCampaignMetadataArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignMetadataSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignMetadataOrderBy>>
	where?: InputMaybe<CampaignMetadataBoolExp>
}

export type Query_RootCampaignMetadataAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignMetadataSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignMetadataOrderBy>>
	where?: InputMaybe<CampaignMetadataBoolExp>
}

export type Query_RootCampaignMetadataByPkArgs = {
	id: Scalars['String']
}

export type Query_RootChainActivitiesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainActivitiesOrderBy>>
	where?: InputMaybe<ChainActivitiesBoolExp>
}

export type Query_RootChainActivitiesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainActivitiesOrderBy>>
	where?: InputMaybe<ChainActivitiesBoolExp>
}

export type Query_RootChainActivitiesByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootChainInfoArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainInfoSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainInfoOrderBy>>
	where?: InputMaybe<ChainInfoBoolExp>
}

export type Query_RootChainInfoAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainInfoSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainInfoOrderBy>>
	where?: InputMaybe<ChainInfoBoolExp>
}

export type Query_RootChainInfoByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootChainStateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainStateSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainStateOrderBy>>
	where?: InputMaybe<ChainStateBoolExp>
}

export type Query_RootChainStateAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainStateSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainStateOrderBy>>
	where?: InputMaybe<ChainStateBoolExp>
}

export type Query_RootChainStateByPkArgs = {
	id: Scalars['String']
}

export type Query_RootChainStatusesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainStatusesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainStatusesOrderBy>>
	where?: InputMaybe<ChainStatusesBoolExp>
}

export type Query_RootChainStatusesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainStatusesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainStatusesOrderBy>>
	where?: InputMaybe<ChainStatusesBoolExp>
}

export type Query_RootChainStatusesByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootCompletedQuestsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CompletedQuestsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CompletedQuestsOrderBy>>
	where?: InputMaybe<CompletedQuestsBoolExp>
}

export type Query_RootCompletedQuestsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CompletedQuestsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CompletedQuestsOrderBy>>
	where?: InputMaybe<CompletedQuestsBoolExp>
}

export type Query_RootCompletedQuestsByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootCurrentChainStateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CurrentChainStateSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CurrentChainStateOrderBy>>
	where?: InputMaybe<CurrentChainStateBoolExp>
}

export type Query_RootCurrentChainStateAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CurrentChainStateSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CurrentChainStateOrderBy>>
	where?: InputMaybe<CurrentChainStateBoolExp>
}

export type Query_RootCurrentChainStateByPkArgs = {
	id: Scalars['String']
}

export type Query_RootDiscordActivitiesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<DiscordActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<DiscordActivitiesOrderBy>>
	where?: InputMaybe<DiscordActivitiesBoolExp>
}

export type Query_RootDiscordActivitiesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<DiscordActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<DiscordActivitiesOrderBy>>
	where?: InputMaybe<DiscordActivitiesBoolExp>
}

export type Query_RootDiscordActivitiesByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootGenericActivitiesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<GenericActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<GenericActivitiesOrderBy>>
	where?: InputMaybe<GenericActivitiesBoolExp>
}

export type Query_RootGenericActivitiesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<GenericActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<GenericActivitiesOrderBy>>
	where?: InputMaybe<GenericActivitiesBoolExp>
}

export type Query_RootGenericActivitiesByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootHistoricalBalanceArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<HistoricalBalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<HistoricalBalanceOrderBy>>
	where?: InputMaybe<HistoricalBalanceBoolExp>
}

export type Query_RootHistoricalBalanceAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<HistoricalBalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<HistoricalBalanceOrderBy>>
	where?: InputMaybe<HistoricalBalanceBoolExp>
}

export type Query_RootHistoricalBalanceByPkArgs = {
	id: Scalars['String']
}

export type Query_RootIdentitiesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<IdentitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<IdentitiesOrderBy>>
	where?: InputMaybe<IdentitiesBoolExp>
}

export type Query_RootIdentitiesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<IdentitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<IdentitiesOrderBy>>
	where?: InputMaybe<IdentitiesBoolExp>
}

export type Query_RootIdentitiesByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootIdentityArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<IdentitySelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<IdentityOrderBy>>
	where?: InputMaybe<IdentityBoolExp>
}

export type Query_RootIdentityAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<IdentitySelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<IdentityOrderBy>>
	where?: InputMaybe<IdentityBoolExp>
}

export type Query_RootIdentityByPkArgs = {
	id: Scalars['String']
}

export type Query_RootMigrationsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<MigrationsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<MigrationsOrderBy>>
	where?: InputMaybe<MigrationsBoolExp>
}

export type Query_RootMigrationsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<MigrationsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<MigrationsOrderBy>>
	where?: InputMaybe<MigrationsBoolExp>
}

export type Query_RootMigrationsByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootNftArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<NftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<NftOrderBy>>
	where?: InputMaybe<NftBoolExp>
}

export type Query_RootNftAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<NftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<NftOrderBy>>
	where?: InputMaybe<NftBoolExp>
}

export type Query_RootNftByPkArgs = {
	id: Scalars['String']
}

export type Query_RootNftCollectionArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<NftCollectionSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<NftCollectionOrderBy>>
	where?: InputMaybe<NftCollectionBoolExp>
}

export type Query_RootNftCollectionAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<NftCollectionSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<NftCollectionOrderBy>>
	where?: InputMaybe<NftCollectionBoolExp>
}

export type Query_RootNftCollectionByPkArgs = {
	id: Scalars['String']
}

export type Query_RootOrganizationArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationOrderBy>>
	where?: InputMaybe<OrganizationBoolExp>
}

export type Query_RootOrganizationAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationOrderBy>>
	where?: InputMaybe<OrganizationBoolExp>
}

export type Query_RootOrganizationByPkArgs = {
	id: Scalars['String']
}

export type Query_RootOrganizationMemberArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationMemberSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationMemberOrderBy>>
	where?: InputMaybe<OrganizationMemberBoolExp>
}

export type Query_RootOrganizationMemberAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationMemberSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationMemberOrderBy>>
	where?: InputMaybe<OrganizationMemberBoolExp>
}

export type Query_RootOrganizationMemberByPkArgs = {
	id: Scalars['String']
}

export type Query_RootOrganizationMetadataArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationMetadataSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationMetadataOrderBy>>
	where?: InputMaybe<OrganizationMetadataBoolExp>
}

export type Query_RootOrganizationMetadataAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationMetadataSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationMetadataOrderBy>>
	where?: InputMaybe<OrganizationMetadataBoolExp>
}

export type Query_RootOrganizationMetadataByPkArgs = {
	id: Scalars['String']
}

export type Query_RootPaymentsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<PaymentsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<PaymentsOrderBy>>
	where?: InputMaybe<PaymentsBoolExp>
}

export type Query_RootPaymentsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<PaymentsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<PaymentsOrderBy>>
	where?: InputMaybe<PaymentsBoolExp>
}

export type Query_RootPaymentsByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootProposalArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalOrderBy>>
	where?: InputMaybe<ProposalBoolExp>
}

export type Query_RootProposalAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalOrderBy>>
	where?: InputMaybe<ProposalBoolExp>
}

export type Query_RootProposalByPkArgs = {
	id: Scalars['String']
}

export type Query_RootProposalMetadataArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalMetadataSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalMetadataOrderBy>>
	where?: InputMaybe<ProposalMetadataBoolExp>
}

export type Query_RootProposalMetadataAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalMetadataSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalMetadataOrderBy>>
	where?: InputMaybe<ProposalMetadataBoolExp>
}

export type Query_RootProposalMetadataByPkArgs = {
	id: Scalars['String']
}

export type Query_RootProposalVoterArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalVoterSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalVoterOrderBy>>
	where?: InputMaybe<ProposalVoterBoolExp>
}

export type Query_RootProposalVoterAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalVoterSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalVoterOrderBy>>
	where?: InputMaybe<ProposalVoterBoolExp>
}

export type Query_RootProposalVoterByPkArgs = {
	id: Scalars['String']
}

export type Query_RootQuestProgressesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<QuestProgressesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<QuestProgressesOrderBy>>
	where?: InputMaybe<QuestProgressesBoolExp>
}

export type Query_RootQuestProgressesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<QuestProgressesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<QuestProgressesOrderBy>>
	where?: InputMaybe<QuestProgressesBoolExp>
}

export type Query_RootQuestProgressesByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootQuestsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<QuestsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<QuestsOrderBy>>
	where?: InputMaybe<QuestsBoolExp>
}

export type Query_RootQuestsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<QuestsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<QuestsOrderBy>>
	where?: InputMaybe<QuestsBoolExp>
}

export type Query_RootQuestsByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootRewardClaimsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<RewardClaimsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<RewardClaimsOrderBy>>
	where?: InputMaybe<RewardClaimsBoolExp>
}

export type Query_RootRewardClaimsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<RewardClaimsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<RewardClaimsOrderBy>>
	where?: InputMaybe<RewardClaimsBoolExp>
}

export type Query_RootRewardClaimsByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootSenseEntityArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<SenseEntitySelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<SenseEntityOrderBy>>
	where?: InputMaybe<SenseEntityBoolExp>
}

export type Query_RootSenseEntityAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<SenseEntitySelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<SenseEntityOrderBy>>
	where?: InputMaybe<SenseEntityBoolExp>
}

export type Query_RootSenseEntityByPkArgs = {
	id: Scalars['String']
}

export type Query_RootSessionArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<SessionSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<SessionOrderBy>>
	where?: InputMaybe<SessionBoolExp>
}

export type Query_RootSessionAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<SessionSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<SessionOrderBy>>
	where?: InputMaybe<SessionBoolExp>
}

export type Query_RootSessionByPkArgs = {
	id: Scalars['bigint']
}

export type Query_RootSquidProcessorStatusArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<SquidProcessorStatusSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<SquidProcessorStatusOrderBy>>
	where?: InputMaybe<SquidProcessorStatusBoolExp>
}

export type Query_RootSquidProcessorStatusAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<SquidProcessorStatusSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<SquidProcessorStatusOrderBy>>
	where?: InputMaybe<SquidProcessorStatusBoolExp>
}

export type Query_RootSquidProcessorStatusByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootTwitterActivitiesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<TwitterActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<TwitterActivitiesOrderBy>>
	where?: InputMaybe<TwitterActivitiesBoolExp>
}

export type Query_RootTwitterActivitiesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<TwitterActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<TwitterActivitiesOrderBy>>
	where?: InputMaybe<TwitterActivitiesBoolExp>
}

export type Query_RootTwitterActivitiesByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootTwitterSearchesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<TwitterSearchesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<TwitterSearchesOrderBy>>
	where?: InputMaybe<TwitterSearchesBoolExp>
}

export type Query_RootTwitterSearchesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<TwitterSearchesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<TwitterSearchesOrderBy>>
	where?: InputMaybe<TwitterSearchesBoolExp>
}

export type Query_RootTwitterSearchesByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootTwitterUsersArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<TwitterUsersSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<TwitterUsersOrderBy>>
	where?: InputMaybe<TwitterUsersBoolExp>
}

export type Query_RootTwitterUsersAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<TwitterUsersSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<TwitterUsersOrderBy>>
	where?: InputMaybe<TwitterUsersBoolExp>
}

export type Query_RootTwitterUsersByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootUserTokensArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<UserTokensSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<UserTokensOrderBy>>
	where?: InputMaybe<UserTokensBoolExp>
}

export type Query_RootUserTokensAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<UserTokensSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<UserTokensOrderBy>>
	where?: InputMaybe<UserTokensBoolExp>
}

export type Query_RootUserTokensByPkArgs = {
	id: Scalars['Int']
}

export type Query_RootVotingArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<VotingSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<VotingOrderBy>>
	where?: InputMaybe<VotingBoolExp>
}

export type Query_RootVotingAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<VotingSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<VotingOrderBy>>
	where?: InputMaybe<VotingBoolExp>
}

export type Query_RootVotingByPkArgs = {
	id: Scalars['String']
}

export type QuestProgressesAggregateBoolExpAvg = {
	readonly arguments: QuestProgressesSelectColumnQuestProgressesAggregateBoolExpAvgArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgressesBoolExp>
	readonly predicate: Float8ComparisonExp
}

export type QuestProgressesAggregateBoolExpCorr = {
	readonly arguments: QuestProgressesAggregateBoolExpCorrArguments
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgressesBoolExp>
	readonly predicate: Float8ComparisonExp
}

export type QuestProgressesAggregateBoolExpCorrArguments = {
	readonly X: QuestProgressesSelectColumnQuestProgressesAggregateBoolExpCorrArgumentsColumns
	readonly Y: QuestProgressesSelectColumnQuestProgressesAggregateBoolExpCorrArgumentsColumns
}

export type QuestProgressesAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<QuestProgressesSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgressesBoolExp>
	readonly predicate: IntComparisonExp
}

export type QuestProgressesAggregateBoolExpCovar_Samp = {
	readonly arguments: QuestProgressesAggregateBoolExpCovar_SampArguments
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgressesBoolExp>
	readonly predicate: Float8ComparisonExp
}

export type QuestProgressesAggregateBoolExpCovar_SampArguments = {
	readonly X: QuestProgressesSelectColumnQuestProgressesAggregateBoolExpCovar_SampArgumentsColumns
	readonly Y: QuestProgressesSelectColumnQuestProgressesAggregateBoolExpCovar_SampArgumentsColumns
}

export type QuestProgressesAggregateBoolExpMax = {
	readonly arguments: QuestProgressesSelectColumnQuestProgressesAggregateBoolExpMaxArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgressesBoolExp>
	readonly predicate: Float8ComparisonExp
}

export type QuestProgressesAggregateBoolExpMin = {
	readonly arguments: QuestProgressesSelectColumnQuestProgressesAggregateBoolExpMinArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgressesBoolExp>
	readonly predicate: Float8ComparisonExp
}

export type QuestProgressesAggregateBoolExpStddev_Samp = {
	readonly arguments: QuestProgressesSelectColumnQuestProgressesAggregateBoolExpStddev_SampArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgressesBoolExp>
	readonly predicate: Float8ComparisonExp
}

export type QuestProgressesAggregateBoolExpSum = {
	readonly arguments: QuestProgressesSelectColumnQuestProgressesAggregateBoolExpSumArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgressesBoolExp>
	readonly predicate: Float8ComparisonExp
}

export type QuestProgressesAggregateBoolExpVar_Samp = {
	readonly arguments: QuestProgressesSelectColumnQuestProgressesAggregateBoolExpVar_SampArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgressesBoolExp>
	readonly predicate: Float8ComparisonExp
}

export type QuestsAggregateBoolExpBool_And = {
	readonly arguments: QuestsSelectColumnQuestsAggregateBoolExpBool_AndArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestsBoolExp>
	readonly predicate: BooleanComparisonExp
}

export type QuestsAggregateBoolExpBool_Or = {
	readonly arguments: QuestsSelectColumnQuestsAggregateBoolExpBool_OrArgumentsColumns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestsBoolExp>
	readonly predicate: BooleanComparisonExp
}

export type QuestsAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<QuestsSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestsBoolExp>
	readonly predicate: IntComparisonExp
}

export type RewardClaimsAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<RewardClaimsSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<RewardClaimsBoolExp>
	readonly predicate: IntComparisonExp
}

export type SenseEntityAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<SenseEntitySelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<SenseEntityBoolExp>
	readonly predicate: IntComparisonExp
}

export type Subscription_Root = {
	readonly __typename?: 'subscription_root'
	/** fetch data from the table: "_prisma_migrations" */
	readonly _prismaMigrations: ReadonlyArray<_PrismaMigrations>
	/** fetch aggregated fields from the table: "_prisma_migrations" */
	readonly _prismaMigrationsAggregate: _PrismaMigrationsAggregate
	/** fetch data from the table: "_prisma_migrations" using primary key columns */
	readonly _prismaMigrationsByPk?: Maybe<_PrismaMigrations>
	/** fetch data from the table in a streaming manner: "_prisma_migrations" */
	readonly _prismaMigrationsStream: ReadonlyArray<_PrismaMigrations>
	/** fetch data from the table: "account_balance" */
	readonly accountBalance: ReadonlyArray<AccountBalance>
	/** fetch aggregated fields from the table: "account_balance" */
	readonly accountBalanceAggregate: AccountBalanceAggregate
	/** fetch data from the table: "account_balance" using primary key columns */
	readonly accountBalanceByPk?: Maybe<AccountBalance>
	/** fetch data from the table in a streaming manner: "account_balance" */
	readonly accountBalanceStream: ReadonlyArray<AccountBalance>
	/** fetch data from the table: "Balance" */
	readonly balance: ReadonlyArray<Balance>
	/** fetch aggregated fields from the table: "Balance" */
	readonly balanceAggregate: BalanceAggregate
	/** fetch data from the table: "Balance" using primary key columns */
	readonly balanceByPk?: Maybe<Balance>
	/** fetch data from the table in a streaming manner: "Balance" */
	readonly balanceStream: ReadonlyArray<Balance>
	/** fetch data from the table: "battlepass" */
	readonly battlepass: ReadonlyArray<Battlepass>
	/** fetch aggregated fields from the table: "battlepass" */
	readonly battlepassAggregate: BattlepassAggregate
	/** fetch data from the table: "battlepass" using primary key columns */
	readonly battlepassByPk?: Maybe<Battlepass>
	/** An array relationship */
	readonly battlepassLevels: ReadonlyArray<BattlepassLevels>
	/** An aggregate relationship */
	readonly battlepassLevelsAggregate: BattlepassLevelsAggregate
	/** fetch data from the table: "BattlepassLevels" using primary key columns */
	readonly battlepassLevelsByPk?: Maybe<BattlepassLevels>
	/** fetch data from the table in a streaming manner: "BattlepassLevels" */
	readonly battlepassLevelsStream: ReadonlyArray<BattlepassLevels>
	/** fetch data from the table: "battlepass_nft" */
	readonly battlepassNft: ReadonlyArray<BattlepassNft>
	/** fetch aggregated fields from the table: "battlepass_nft" */
	readonly battlepassNftAggregate: BattlepassNftAggregate
	/** fetch data from the table: "battlepass_nft" using primary key columns */
	readonly battlepassNftByPk?: Maybe<BattlepassNft>
	/** fetch data from the table in a streaming manner: "battlepass_nft" */
	readonly battlepassNftStream: ReadonlyArray<BattlepassNft>
	/** An array relationship */
	readonly battlepassParticipants: ReadonlyArray<BattlepassParticipants>
	/** An aggregate relationship */
	readonly battlepassParticipantsAggregate: BattlepassParticipantsAggregate
	/** fetch data from the table: "BattlepassParticipants" using primary key columns */
	readonly battlepassParticipantsByPk?: Maybe<BattlepassParticipants>
	/** fetch data from the table in a streaming manner: "BattlepassParticipants" */
	readonly battlepassParticipantsStream: ReadonlyArray<BattlepassParticipants>
	/** An array relationship */
	readonly battlepassRewards: ReadonlyArray<BattlepassRewards>
	/** An aggregate relationship */
	readonly battlepassRewardsAggregate: BattlepassRewardsAggregate
	/** fetch data from the table: "BattlepassRewards" using primary key columns */
	readonly battlepassRewardsByPk?: Maybe<BattlepassRewards>
	/** fetch data from the table in a streaming manner: "BattlepassRewards" */
	readonly battlepassRewardsStream: ReadonlyArray<BattlepassRewards>
	/** fetch data from the table in a streaming manner: "battlepass" */
	readonly battlepassStream: ReadonlyArray<Battlepass>
	/** fetch data from the table: "Battlepasses" */
	readonly battlepasses: ReadonlyArray<Battlepasses>
	/** fetch aggregated fields from the table: "Battlepasses" */
	readonly battlepassesAggregate: BattlepassesAggregate
	/** fetch data from the table: "Battlepasses" using primary key columns */
	readonly battlepassesByPk?: Maybe<Battlepasses>
	/** fetch data from the table in a streaming manner: "Battlepasses" */
	readonly battlepassesStream: ReadonlyArray<Battlepasses>
	/** fetch data from the table: "campaign" */
	readonly campaign: ReadonlyArray<Campaign>
	/** fetch aggregated fields from the table: "campaign" */
	readonly campaignAggregate: CampaignAggregate
	/** fetch data from the table: "campaign" using primary key columns */
	readonly campaignByPk?: Maybe<Campaign>
	/** fetch data from the table: "campaign_contributor" */
	readonly campaignContributor: ReadonlyArray<CampaignContributor>
	/** fetch aggregated fields from the table: "campaign_contributor" */
	readonly campaignContributorAggregate: CampaignContributorAggregate
	/** fetch data from the table: "campaign_contributor" using primary key columns */
	readonly campaignContributorByPk?: Maybe<CampaignContributor>
	/** fetch data from the table in a streaming manner: "campaign_contributor" */
	readonly campaignContributorStream: ReadonlyArray<CampaignContributor>
	/** fetch data from the table: "campaign_metadata" */
	readonly campaignMetadata: ReadonlyArray<CampaignMetadata>
	/** fetch aggregated fields from the table: "campaign_metadata" */
	readonly campaignMetadataAggregate: CampaignMetadataAggregate
	/** fetch data from the table: "campaign_metadata" using primary key columns */
	readonly campaignMetadataByPk?: Maybe<CampaignMetadata>
	/** fetch data from the table in a streaming manner: "campaign_metadata" */
	readonly campaignMetadataStream: ReadonlyArray<CampaignMetadata>
	/** fetch data from the table in a streaming manner: "campaign" */
	readonly campaignStream: ReadonlyArray<Campaign>
	/** fetch data from the table: "ChainActivities" */
	readonly chainActivities: ReadonlyArray<ChainActivities>
	/** fetch aggregated fields from the table: "ChainActivities" */
	readonly chainActivitiesAggregate: ChainActivitiesAggregate
	/** fetch data from the table: "ChainActivities" using primary key columns */
	readonly chainActivitiesByPk?: Maybe<ChainActivities>
	/** fetch data from the table in a streaming manner: "ChainActivities" */
	readonly chainActivitiesStream: ReadonlyArray<ChainActivities>
	/** fetch data from the table: "ChainInfo" */
	readonly chainInfo: ReadonlyArray<ChainInfo>
	/** fetch aggregated fields from the table: "ChainInfo" */
	readonly chainInfoAggregate: ChainInfoAggregate
	/** fetch data from the table: "ChainInfo" using primary key columns */
	readonly chainInfoByPk?: Maybe<ChainInfo>
	/** fetch data from the table in a streaming manner: "ChainInfo" */
	readonly chainInfoStream: ReadonlyArray<ChainInfo>
	/** fetch data from the table: "chain_state" */
	readonly chainState: ReadonlyArray<ChainState>
	/** fetch aggregated fields from the table: "chain_state" */
	readonly chainStateAggregate: ChainStateAggregate
	/** fetch data from the table: "chain_state" using primary key columns */
	readonly chainStateByPk?: Maybe<ChainState>
	/** fetch data from the table in a streaming manner: "chain_state" */
	readonly chainStateStream: ReadonlyArray<ChainState>
	/** fetch data from the table: "ChainStatuses" */
	readonly chainStatuses: ReadonlyArray<ChainStatuses>
	/** fetch aggregated fields from the table: "ChainStatuses" */
	readonly chainStatusesAggregate: ChainStatusesAggregate
	/** fetch data from the table: "ChainStatuses" using primary key columns */
	readonly chainStatusesByPk?: Maybe<ChainStatuses>
	/** fetch data from the table in a streaming manner: "ChainStatuses" */
	readonly chainStatusesStream: ReadonlyArray<ChainStatuses>
	/** An array relationship */
	readonly completedQuests: ReadonlyArray<CompletedQuests>
	/** An aggregate relationship */
	readonly completedQuestsAggregate: CompletedQuestsAggregate
	/** fetch data from the table: "CompletedQuests" using primary key columns */
	readonly completedQuestsByPk?: Maybe<CompletedQuests>
	/** fetch data from the table in a streaming manner: "CompletedQuests" */
	readonly completedQuestsStream: ReadonlyArray<CompletedQuests>
	/** fetch data from the table: "current_chain_state" */
	readonly currentChainState: ReadonlyArray<CurrentChainState>
	/** fetch aggregated fields from the table: "current_chain_state" */
	readonly currentChainStateAggregate: CurrentChainStateAggregate
	/** fetch data from the table: "current_chain_state" using primary key columns */
	readonly currentChainStateByPk?: Maybe<CurrentChainState>
	/** fetch data from the table in a streaming manner: "current_chain_state" */
	readonly currentChainStateStream: ReadonlyArray<CurrentChainState>
	/** fetch data from the table: "DiscordActivities" */
	readonly discordActivities: ReadonlyArray<DiscordActivities>
	/** fetch aggregated fields from the table: "DiscordActivities" */
	readonly discordActivitiesAggregate: DiscordActivitiesAggregate
	/** fetch data from the table: "DiscordActivities" using primary key columns */
	readonly discordActivitiesByPk?: Maybe<DiscordActivities>
	/** fetch data from the table in a streaming manner: "DiscordActivities" */
	readonly discordActivitiesStream: ReadonlyArray<DiscordActivities>
	/** fetch data from the table: "GenericActivities" */
	readonly genericActivities: ReadonlyArray<GenericActivities>
	/** fetch aggregated fields from the table: "GenericActivities" */
	readonly genericActivitiesAggregate: GenericActivitiesAggregate
	/** fetch data from the table: "GenericActivities" using primary key columns */
	readonly genericActivitiesByPk?: Maybe<GenericActivities>
	/** fetch data from the table in a streaming manner: "GenericActivities" */
	readonly genericActivitiesStream: ReadonlyArray<GenericActivities>
	/** fetch data from the table: "historical_balance" */
	readonly historicalBalance: ReadonlyArray<HistoricalBalance>
	/** fetch aggregated fields from the table: "historical_balance" */
	readonly historicalBalanceAggregate: HistoricalBalanceAggregate
	/** fetch data from the table: "historical_balance" using primary key columns */
	readonly historicalBalanceByPk?: Maybe<HistoricalBalance>
	/** fetch data from the table in a streaming manner: "historical_balance" */
	readonly historicalBalanceStream: ReadonlyArray<HistoricalBalance>
	/** fetch data from the table: "Identities" */
	readonly identities: ReadonlyArray<Identities>
	/** fetch aggregated fields from the table: "Identities" */
	readonly identitiesAggregate: IdentitiesAggregate
	/** fetch data from the table: "Identities" using primary key columns */
	readonly identitiesByPk?: Maybe<Identities>
	/** fetch data from the table in a streaming manner: "Identities" */
	readonly identitiesStream: ReadonlyArray<Identities>
	/** fetch data from the table: "identity" */
	readonly identity: ReadonlyArray<Identity>
	/** fetch aggregated fields from the table: "identity" */
	readonly identityAggregate: IdentityAggregate
	/** fetch data from the table: "identity" using primary key columns */
	readonly identityByPk?: Maybe<Identity>
	/** fetch data from the table in a streaming manner: "identity" */
	readonly identityStream: ReadonlyArray<Identity>
	/** fetch data from the table: "migrations" */
	readonly migrations: ReadonlyArray<Migrations>
	/** fetch aggregated fields from the table: "migrations" */
	readonly migrationsAggregate: MigrationsAggregate
	/** fetch data from the table: "migrations" using primary key columns */
	readonly migrationsByPk?: Maybe<Migrations>
	/** fetch data from the table in a streaming manner: "migrations" */
	readonly migrationsStream: ReadonlyArray<Migrations>
	/** fetch data from the table: "nft" */
	readonly nft: ReadonlyArray<Nft>
	/** fetch aggregated fields from the table: "nft" */
	readonly nftAggregate: NftAggregate
	/** fetch data from the table: "nft" using primary key columns */
	readonly nftByPk?: Maybe<Nft>
	/** fetch data from the table: "nft_collection" */
	readonly nftCollection: ReadonlyArray<NftCollection>
	/** fetch aggregated fields from the table: "nft_collection" */
	readonly nftCollectionAggregate: NftCollectionAggregate
	/** fetch data from the table: "nft_collection" using primary key columns */
	readonly nftCollectionByPk?: Maybe<NftCollection>
	/** fetch data from the table in a streaming manner: "nft_collection" */
	readonly nftCollectionStream: ReadonlyArray<NftCollection>
	/** fetch data from the table in a streaming manner: "nft" */
	readonly nftStream: ReadonlyArray<Nft>
	/** fetch data from the table: "organization" */
	readonly organization: ReadonlyArray<Organization>
	/** fetch aggregated fields from the table: "organization" */
	readonly organizationAggregate: OrganizationAggregate
	/** fetch data from the table: "organization" using primary key columns */
	readonly organizationByPk?: Maybe<Organization>
	/** fetch data from the table: "organization_member" */
	readonly organizationMember: ReadonlyArray<OrganizationMember>
	/** fetch aggregated fields from the table: "organization_member" */
	readonly organizationMemberAggregate: OrganizationMemberAggregate
	/** fetch data from the table: "organization_member" using primary key columns */
	readonly organizationMemberByPk?: Maybe<OrganizationMember>
	/** fetch data from the table in a streaming manner: "organization_member" */
	readonly organizationMemberStream: ReadonlyArray<OrganizationMember>
	/** fetch data from the table: "organization_metadata" */
	readonly organizationMetadata: ReadonlyArray<OrganizationMetadata>
	/** fetch aggregated fields from the table: "organization_metadata" */
	readonly organizationMetadataAggregate: OrganizationMetadataAggregate
	/** fetch data from the table: "organization_metadata" using primary key columns */
	readonly organizationMetadataByPk?: Maybe<OrganizationMetadata>
	/** fetch data from the table in a streaming manner: "organization_metadata" */
	readonly organizationMetadataStream: ReadonlyArray<OrganizationMetadata>
	/** fetch data from the table in a streaming manner: "organization" */
	readonly organizationStream: ReadonlyArray<Organization>
	/** An array relationship */
	readonly payments: ReadonlyArray<Payments>
	/** An aggregate relationship */
	readonly paymentsAggregate: PaymentsAggregate
	/** fetch data from the table: "Payments" using primary key columns */
	readonly paymentsByPk?: Maybe<Payments>
	/** fetch data from the table in a streaming manner: "Payments" */
	readonly paymentsStream: ReadonlyArray<Payments>
	/** fetch data from the table: "proposal" */
	readonly proposal: ReadonlyArray<Proposal>
	/** fetch aggregated fields from the table: "proposal" */
	readonly proposalAggregate: ProposalAggregate
	/** fetch data from the table: "proposal" using primary key columns */
	readonly proposalByPk?: Maybe<Proposal>
	/** fetch data from the table: "proposal_metadata" */
	readonly proposalMetadata: ReadonlyArray<ProposalMetadata>
	/** fetch aggregated fields from the table: "proposal_metadata" */
	readonly proposalMetadataAggregate: ProposalMetadataAggregate
	/** fetch data from the table: "proposal_metadata" using primary key columns */
	readonly proposalMetadataByPk?: Maybe<ProposalMetadata>
	/** fetch data from the table in a streaming manner: "proposal_metadata" */
	readonly proposalMetadataStream: ReadonlyArray<ProposalMetadata>
	/** fetch data from the table in a streaming manner: "proposal" */
	readonly proposalStream: ReadonlyArray<Proposal>
	/** fetch data from the table: "proposal_voter" */
	readonly proposalVoter: ReadonlyArray<ProposalVoter>
	/** fetch aggregated fields from the table: "proposal_voter" */
	readonly proposalVoterAggregate: ProposalVoterAggregate
	/** fetch data from the table: "proposal_voter" using primary key columns */
	readonly proposalVoterByPk?: Maybe<ProposalVoter>
	/** fetch data from the table in a streaming manner: "proposal_voter" */
	readonly proposalVoterStream: ReadonlyArray<ProposalVoter>
	/** An array relationship */
	readonly questProgresses: ReadonlyArray<QuestProgresses>
	/** An aggregate relationship */
	readonly questProgressesAggregate: QuestProgressesAggregate
	/** fetch data from the table: "QuestProgresses" using primary key columns */
	readonly questProgressesByPk?: Maybe<QuestProgresses>
	/** fetch data from the table in a streaming manner: "QuestProgresses" */
	readonly questProgressesStream: ReadonlyArray<QuestProgresses>
	/** An array relationship */
	readonly quests: ReadonlyArray<Quests>
	/** An aggregate relationship */
	readonly questsAggregate: QuestsAggregate
	/** fetch data from the table: "Quests" using primary key columns */
	readonly questsByPk?: Maybe<Quests>
	/** fetch data from the table in a streaming manner: "Quests" */
	readonly questsStream: ReadonlyArray<Quests>
	/** An array relationship */
	readonly rewardClaims: ReadonlyArray<RewardClaims>
	/** An aggregate relationship */
	readonly rewardClaimsAggregate: RewardClaimsAggregate
	/** fetch data from the table: "RewardClaims" using primary key columns */
	readonly rewardClaimsByPk?: Maybe<RewardClaims>
	/** fetch data from the table in a streaming manner: "RewardClaims" */
	readonly rewardClaimsStream: ReadonlyArray<RewardClaims>
	/** fetch data from the table: "sense_entity" */
	readonly senseEntity: ReadonlyArray<SenseEntity>
	/** fetch aggregated fields from the table: "sense_entity" */
	readonly senseEntityAggregate: SenseEntityAggregate
	/** fetch data from the table: "sense_entity" using primary key columns */
	readonly senseEntityByPk?: Maybe<SenseEntity>
	/** fetch data from the table in a streaming manner: "sense_entity" */
	readonly senseEntityStream: ReadonlyArray<SenseEntity>
	/** fetch data from the table: "Session" */
	readonly session: ReadonlyArray<Session>
	/** fetch aggregated fields from the table: "Session" */
	readonly sessionAggregate: SessionAggregate
	/** fetch data from the table: "Session" using primary key columns */
	readonly sessionByPk?: Maybe<Session>
	/** fetch data from the table in a streaming manner: "Session" */
	readonly sessionStream: ReadonlyArray<Session>
	/** fetch data from the table: "squid_processor.status" */
	readonly squidProcessorStatus: ReadonlyArray<SquidProcessorStatus>
	/** fetch aggregated fields from the table: "squid_processor.status" */
	readonly squidProcessorStatusAggregate: SquidProcessorStatusAggregate
	/** fetch data from the table: "squid_processor.status" using primary key columns */
	readonly squidProcessorStatusByPk?: Maybe<SquidProcessorStatus>
	/** fetch data from the table in a streaming manner: "squid_processor.status" */
	readonly squidProcessorStatusStream: ReadonlyArray<SquidProcessorStatus>
	/** fetch data from the table: "TwitterActivities" */
	readonly twitterActivities: ReadonlyArray<TwitterActivities>
	/** fetch aggregated fields from the table: "TwitterActivities" */
	readonly twitterActivitiesAggregate: TwitterActivitiesAggregate
	/** fetch data from the table: "TwitterActivities" using primary key columns */
	readonly twitterActivitiesByPk?: Maybe<TwitterActivities>
	/** fetch data from the table in a streaming manner: "TwitterActivities" */
	readonly twitterActivitiesStream: ReadonlyArray<TwitterActivities>
	/** fetch data from the table: "TwitterSearches" */
	readonly twitterSearches: ReadonlyArray<TwitterSearches>
	/** fetch aggregated fields from the table: "TwitterSearches" */
	readonly twitterSearchesAggregate: TwitterSearchesAggregate
	/** fetch data from the table: "TwitterSearches" using primary key columns */
	readonly twitterSearchesByPk?: Maybe<TwitterSearches>
	/** fetch data from the table in a streaming manner: "TwitterSearches" */
	readonly twitterSearchesStream: ReadonlyArray<TwitterSearches>
	/** fetch data from the table: "TwitterUsers" */
	readonly twitterUsers: ReadonlyArray<TwitterUsers>
	/** fetch aggregated fields from the table: "TwitterUsers" */
	readonly twitterUsersAggregate: TwitterUsersAggregate
	/** fetch data from the table: "TwitterUsers" using primary key columns */
	readonly twitterUsersByPk?: Maybe<TwitterUsers>
	/** fetch data from the table in a streaming manner: "TwitterUsers" */
	readonly twitterUsersStream: ReadonlyArray<TwitterUsers>
	/** An array relationship */
	readonly userTokens: ReadonlyArray<UserTokens>
	/** An aggregate relationship */
	readonly userTokensAggregate: UserTokensAggregate
	/** fetch data from the table: "UserTokens" using primary key columns */
	readonly userTokensByPk?: Maybe<UserTokens>
	/** fetch data from the table in a streaming manner: "UserTokens" */
	readonly userTokensStream: ReadonlyArray<UserTokens>
	/** fetch data from the table: "voting" */
	readonly voting: ReadonlyArray<Voting>
	/** fetch aggregated fields from the table: "voting" */
	readonly votingAggregate: VotingAggregate
	/** fetch data from the table: "voting" using primary key columns */
	readonly votingByPk?: Maybe<Voting>
	/** fetch data from the table in a streaming manner: "voting" */
	readonly votingStream: ReadonlyArray<Voting>
}

export type Subscription_Root_PrismaMigrationsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<_PrismaMigrationsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<_PrismaMigrationsOrderBy>>
	where?: InputMaybe<_PrismaMigrationsBoolExp>
}

export type Subscription_Root_PrismaMigrationsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<_PrismaMigrationsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<_PrismaMigrationsOrderBy>>
	where?: InputMaybe<_PrismaMigrationsBoolExp>
}

export type Subscription_Root_PrismaMigrationsByPkArgs = {
	id: Scalars['String']
}

export type Subscription_Root_PrismaMigrationsStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<_PrismaMigrationsStreamCursorInput>>
	where?: InputMaybe<_PrismaMigrationsBoolExp>
}

export type Subscription_RootAccountBalanceArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<AccountBalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<AccountBalanceOrderBy>>
	where?: InputMaybe<AccountBalanceBoolExp>
}

export type Subscription_RootAccountBalanceAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<AccountBalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<AccountBalanceOrderBy>>
	where?: InputMaybe<AccountBalanceBoolExp>
}

export type Subscription_RootAccountBalanceByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootAccountBalanceStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<AccountBalanceStreamCursorInput>>
	where?: InputMaybe<AccountBalanceBoolExp>
}

export type Subscription_RootBalanceArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BalanceOrderBy>>
	where?: InputMaybe<BalanceBoolExp>
}

export type Subscription_RootBalanceAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BalanceOrderBy>>
	where?: InputMaybe<BalanceBoolExp>
}

export type Subscription_RootBalanceByPkArgs = {
	id: Scalars['bigint']
}

export type Subscription_RootBalanceStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<BalanceStreamCursorInput>>
	where?: InputMaybe<BalanceBoolExp>
}

export type Subscription_RootBattlepassArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassOrderBy>>
	where?: InputMaybe<BattlepassBoolExp>
}

export type Subscription_RootBattlepassAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassOrderBy>>
	where?: InputMaybe<BattlepassBoolExp>
}

export type Subscription_RootBattlepassByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootBattlepassLevelsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassLevelsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassLevelsOrderBy>>
	where?: InputMaybe<BattlepassLevelsBoolExp>
}

export type Subscription_RootBattlepassLevelsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassLevelsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassLevelsOrderBy>>
	where?: InputMaybe<BattlepassLevelsBoolExp>
}

export type Subscription_RootBattlepassLevelsByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootBattlepassLevelsStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<BattlepassLevelsStreamCursorInput>>
	where?: InputMaybe<BattlepassLevelsBoolExp>
}

export type Subscription_RootBattlepassNftArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassNftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassNftOrderBy>>
	where?: InputMaybe<BattlepassNftBoolExp>
}

export type Subscription_RootBattlepassNftAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassNftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassNftOrderBy>>
	where?: InputMaybe<BattlepassNftBoolExp>
}

export type Subscription_RootBattlepassNftByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootBattlepassNftStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<BattlepassNftStreamCursorInput>>
	where?: InputMaybe<BattlepassNftBoolExp>
}

export type Subscription_RootBattlepassParticipantsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassParticipantsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassParticipantsOrderBy>>
	where?: InputMaybe<BattlepassParticipantsBoolExp>
}

export type Subscription_RootBattlepassParticipantsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassParticipantsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassParticipantsOrderBy>>
	where?: InputMaybe<BattlepassParticipantsBoolExp>
}

export type Subscription_RootBattlepassParticipantsByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootBattlepassParticipantsStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<BattlepassParticipantsStreamCursorInput>>
	where?: InputMaybe<BattlepassParticipantsBoolExp>
}

export type Subscription_RootBattlepassRewardsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassRewardsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassRewardsOrderBy>>
	where?: InputMaybe<BattlepassRewardsBoolExp>
}

export type Subscription_RootBattlepassRewardsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassRewardsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassRewardsOrderBy>>
	where?: InputMaybe<BattlepassRewardsBoolExp>
}

export type Subscription_RootBattlepassRewardsByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootBattlepassRewardsStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<BattlepassRewardsStreamCursorInput>>
	where?: InputMaybe<BattlepassRewardsBoolExp>
}

export type Subscription_RootBattlepassStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<BattlepassStreamCursorInput>>
	where?: InputMaybe<BattlepassBoolExp>
}

export type Subscription_RootBattlepassesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassesOrderBy>>
	where?: InputMaybe<BattlepassesBoolExp>
}

export type Subscription_RootBattlepassesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<BattlepassesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<BattlepassesOrderBy>>
	where?: InputMaybe<BattlepassesBoolExp>
}

export type Subscription_RootBattlepassesByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootBattlepassesStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<BattlepassesStreamCursorInput>>
	where?: InputMaybe<BattlepassesBoolExp>
}

export type Subscription_RootCampaignArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignOrderBy>>
	where?: InputMaybe<CampaignBoolExp>
}

export type Subscription_RootCampaignAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignOrderBy>>
	where?: InputMaybe<CampaignBoolExp>
}

export type Subscription_RootCampaignByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootCampaignContributorArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignContributorSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignContributorOrderBy>>
	where?: InputMaybe<CampaignContributorBoolExp>
}

export type Subscription_RootCampaignContributorAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignContributorSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignContributorOrderBy>>
	where?: InputMaybe<CampaignContributorBoolExp>
}

export type Subscription_RootCampaignContributorByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootCampaignContributorStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<CampaignContributorStreamCursorInput>>
	where?: InputMaybe<CampaignContributorBoolExp>
}

export type Subscription_RootCampaignMetadataArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignMetadataSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignMetadataOrderBy>>
	where?: InputMaybe<CampaignMetadataBoolExp>
}

export type Subscription_RootCampaignMetadataAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CampaignMetadataSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CampaignMetadataOrderBy>>
	where?: InputMaybe<CampaignMetadataBoolExp>
}

export type Subscription_RootCampaignMetadataByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootCampaignMetadataStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<CampaignMetadataStreamCursorInput>>
	where?: InputMaybe<CampaignMetadataBoolExp>
}

export type Subscription_RootCampaignStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<CampaignStreamCursorInput>>
	where?: InputMaybe<CampaignBoolExp>
}

export type Subscription_RootChainActivitiesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainActivitiesOrderBy>>
	where?: InputMaybe<ChainActivitiesBoolExp>
}

export type Subscription_RootChainActivitiesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainActivitiesOrderBy>>
	where?: InputMaybe<ChainActivitiesBoolExp>
}

export type Subscription_RootChainActivitiesByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootChainActivitiesStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<ChainActivitiesStreamCursorInput>>
	where?: InputMaybe<ChainActivitiesBoolExp>
}

export type Subscription_RootChainInfoArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainInfoSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainInfoOrderBy>>
	where?: InputMaybe<ChainInfoBoolExp>
}

export type Subscription_RootChainInfoAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainInfoSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainInfoOrderBy>>
	where?: InputMaybe<ChainInfoBoolExp>
}

export type Subscription_RootChainInfoByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootChainInfoStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<ChainInfoStreamCursorInput>>
	where?: InputMaybe<ChainInfoBoolExp>
}

export type Subscription_RootChainStateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainStateSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainStateOrderBy>>
	where?: InputMaybe<ChainStateBoolExp>
}

export type Subscription_RootChainStateAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainStateSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainStateOrderBy>>
	where?: InputMaybe<ChainStateBoolExp>
}

export type Subscription_RootChainStateByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootChainStateStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<ChainStateStreamCursorInput>>
	where?: InputMaybe<ChainStateBoolExp>
}

export type Subscription_RootChainStatusesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainStatusesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainStatusesOrderBy>>
	where?: InputMaybe<ChainStatusesBoolExp>
}

export type Subscription_RootChainStatusesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ChainStatusesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ChainStatusesOrderBy>>
	where?: InputMaybe<ChainStatusesBoolExp>
}

export type Subscription_RootChainStatusesByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootChainStatusesStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<ChainStatusesStreamCursorInput>>
	where?: InputMaybe<ChainStatusesBoolExp>
}

export type Subscription_RootCompletedQuestsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CompletedQuestsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CompletedQuestsOrderBy>>
	where?: InputMaybe<CompletedQuestsBoolExp>
}

export type Subscription_RootCompletedQuestsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CompletedQuestsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CompletedQuestsOrderBy>>
	where?: InputMaybe<CompletedQuestsBoolExp>
}

export type Subscription_RootCompletedQuestsByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootCompletedQuestsStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<CompletedQuestsStreamCursorInput>>
	where?: InputMaybe<CompletedQuestsBoolExp>
}

export type Subscription_RootCurrentChainStateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CurrentChainStateSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CurrentChainStateOrderBy>>
	where?: InputMaybe<CurrentChainStateBoolExp>
}

export type Subscription_RootCurrentChainStateAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<CurrentChainStateSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<CurrentChainStateOrderBy>>
	where?: InputMaybe<CurrentChainStateBoolExp>
}

export type Subscription_RootCurrentChainStateByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootCurrentChainStateStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<CurrentChainStateStreamCursorInput>>
	where?: InputMaybe<CurrentChainStateBoolExp>
}

export type Subscription_RootDiscordActivitiesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<DiscordActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<DiscordActivitiesOrderBy>>
	where?: InputMaybe<DiscordActivitiesBoolExp>
}

export type Subscription_RootDiscordActivitiesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<DiscordActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<DiscordActivitiesOrderBy>>
	where?: InputMaybe<DiscordActivitiesBoolExp>
}

export type Subscription_RootDiscordActivitiesByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootDiscordActivitiesStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<DiscordActivitiesStreamCursorInput>>
	where?: InputMaybe<DiscordActivitiesBoolExp>
}

export type Subscription_RootGenericActivitiesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<GenericActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<GenericActivitiesOrderBy>>
	where?: InputMaybe<GenericActivitiesBoolExp>
}

export type Subscription_RootGenericActivitiesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<GenericActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<GenericActivitiesOrderBy>>
	where?: InputMaybe<GenericActivitiesBoolExp>
}

export type Subscription_RootGenericActivitiesByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootGenericActivitiesStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<GenericActivitiesStreamCursorInput>>
	where?: InputMaybe<GenericActivitiesBoolExp>
}

export type Subscription_RootHistoricalBalanceArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<HistoricalBalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<HistoricalBalanceOrderBy>>
	where?: InputMaybe<HistoricalBalanceBoolExp>
}

export type Subscription_RootHistoricalBalanceAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<HistoricalBalanceSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<HistoricalBalanceOrderBy>>
	where?: InputMaybe<HistoricalBalanceBoolExp>
}

export type Subscription_RootHistoricalBalanceByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootHistoricalBalanceStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<HistoricalBalanceStreamCursorInput>>
	where?: InputMaybe<HistoricalBalanceBoolExp>
}

export type Subscription_RootIdentitiesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<IdentitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<IdentitiesOrderBy>>
	where?: InputMaybe<IdentitiesBoolExp>
}

export type Subscription_RootIdentitiesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<IdentitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<IdentitiesOrderBy>>
	where?: InputMaybe<IdentitiesBoolExp>
}

export type Subscription_RootIdentitiesByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootIdentitiesStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<IdentitiesStreamCursorInput>>
	where?: InputMaybe<IdentitiesBoolExp>
}

export type Subscription_RootIdentityArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<IdentitySelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<IdentityOrderBy>>
	where?: InputMaybe<IdentityBoolExp>
}

export type Subscription_RootIdentityAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<IdentitySelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<IdentityOrderBy>>
	where?: InputMaybe<IdentityBoolExp>
}

export type Subscription_RootIdentityByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootIdentityStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<IdentityStreamCursorInput>>
	where?: InputMaybe<IdentityBoolExp>
}

export type Subscription_RootMigrationsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<MigrationsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<MigrationsOrderBy>>
	where?: InputMaybe<MigrationsBoolExp>
}

export type Subscription_RootMigrationsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<MigrationsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<MigrationsOrderBy>>
	where?: InputMaybe<MigrationsBoolExp>
}

export type Subscription_RootMigrationsByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootMigrationsStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<MigrationsStreamCursorInput>>
	where?: InputMaybe<MigrationsBoolExp>
}

export type Subscription_RootNftArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<NftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<NftOrderBy>>
	where?: InputMaybe<NftBoolExp>
}

export type Subscription_RootNftAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<NftSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<NftOrderBy>>
	where?: InputMaybe<NftBoolExp>
}

export type Subscription_RootNftByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootNftCollectionArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<NftCollectionSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<NftCollectionOrderBy>>
	where?: InputMaybe<NftCollectionBoolExp>
}

export type Subscription_RootNftCollectionAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<NftCollectionSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<NftCollectionOrderBy>>
	where?: InputMaybe<NftCollectionBoolExp>
}

export type Subscription_RootNftCollectionByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootNftCollectionStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<NftCollectionStreamCursorInput>>
	where?: InputMaybe<NftCollectionBoolExp>
}

export type Subscription_RootNftStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<NftStreamCursorInput>>
	where?: InputMaybe<NftBoolExp>
}

export type Subscription_RootOrganizationArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationOrderBy>>
	where?: InputMaybe<OrganizationBoolExp>
}

export type Subscription_RootOrganizationAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationOrderBy>>
	where?: InputMaybe<OrganizationBoolExp>
}

export type Subscription_RootOrganizationByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootOrganizationMemberArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationMemberSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationMemberOrderBy>>
	where?: InputMaybe<OrganizationMemberBoolExp>
}

export type Subscription_RootOrganizationMemberAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationMemberSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationMemberOrderBy>>
	where?: InputMaybe<OrganizationMemberBoolExp>
}

export type Subscription_RootOrganizationMemberByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootOrganizationMemberStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<OrganizationMemberStreamCursorInput>>
	where?: InputMaybe<OrganizationMemberBoolExp>
}

export type Subscription_RootOrganizationMetadataArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationMetadataSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationMetadataOrderBy>>
	where?: InputMaybe<OrganizationMetadataBoolExp>
}

export type Subscription_RootOrganizationMetadataAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<OrganizationMetadataSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<OrganizationMetadataOrderBy>>
	where?: InputMaybe<OrganizationMetadataBoolExp>
}

export type Subscription_RootOrganizationMetadataByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootOrganizationMetadataStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<OrganizationMetadataStreamCursorInput>>
	where?: InputMaybe<OrganizationMetadataBoolExp>
}

export type Subscription_RootOrganizationStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<OrganizationStreamCursorInput>>
	where?: InputMaybe<OrganizationBoolExp>
}

export type Subscription_RootPaymentsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<PaymentsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<PaymentsOrderBy>>
	where?: InputMaybe<PaymentsBoolExp>
}

export type Subscription_RootPaymentsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<PaymentsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<PaymentsOrderBy>>
	where?: InputMaybe<PaymentsBoolExp>
}

export type Subscription_RootPaymentsByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootPaymentsStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<PaymentsStreamCursorInput>>
	where?: InputMaybe<PaymentsBoolExp>
}

export type Subscription_RootProposalArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalOrderBy>>
	where?: InputMaybe<ProposalBoolExp>
}

export type Subscription_RootProposalAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalOrderBy>>
	where?: InputMaybe<ProposalBoolExp>
}

export type Subscription_RootProposalByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootProposalMetadataArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalMetadataSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalMetadataOrderBy>>
	where?: InputMaybe<ProposalMetadataBoolExp>
}

export type Subscription_RootProposalMetadataAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalMetadataSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalMetadataOrderBy>>
	where?: InputMaybe<ProposalMetadataBoolExp>
}

export type Subscription_RootProposalMetadataByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootProposalMetadataStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<ProposalMetadataStreamCursorInput>>
	where?: InputMaybe<ProposalMetadataBoolExp>
}

export type Subscription_RootProposalStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<ProposalStreamCursorInput>>
	where?: InputMaybe<ProposalBoolExp>
}

export type Subscription_RootProposalVoterArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalVoterSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalVoterOrderBy>>
	where?: InputMaybe<ProposalVoterBoolExp>
}

export type Subscription_RootProposalVoterAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<ProposalVoterSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<ProposalVoterOrderBy>>
	where?: InputMaybe<ProposalVoterBoolExp>
}

export type Subscription_RootProposalVoterByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootProposalVoterStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<ProposalVoterStreamCursorInput>>
	where?: InputMaybe<ProposalVoterBoolExp>
}

export type Subscription_RootQuestProgressesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<QuestProgressesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<QuestProgressesOrderBy>>
	where?: InputMaybe<QuestProgressesBoolExp>
}

export type Subscription_RootQuestProgressesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<QuestProgressesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<QuestProgressesOrderBy>>
	where?: InputMaybe<QuestProgressesBoolExp>
}

export type Subscription_RootQuestProgressesByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootQuestProgressesStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<QuestProgressesStreamCursorInput>>
	where?: InputMaybe<QuestProgressesBoolExp>
}

export type Subscription_RootQuestsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<QuestsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<QuestsOrderBy>>
	where?: InputMaybe<QuestsBoolExp>
}

export type Subscription_RootQuestsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<QuestsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<QuestsOrderBy>>
	where?: InputMaybe<QuestsBoolExp>
}

export type Subscription_RootQuestsByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootQuestsStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<QuestsStreamCursorInput>>
	where?: InputMaybe<QuestsBoolExp>
}

export type Subscription_RootRewardClaimsArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<RewardClaimsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<RewardClaimsOrderBy>>
	where?: InputMaybe<RewardClaimsBoolExp>
}

export type Subscription_RootRewardClaimsAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<RewardClaimsSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<RewardClaimsOrderBy>>
	where?: InputMaybe<RewardClaimsBoolExp>
}

export type Subscription_RootRewardClaimsByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootRewardClaimsStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<RewardClaimsStreamCursorInput>>
	where?: InputMaybe<RewardClaimsBoolExp>
}

export type Subscription_RootSenseEntityArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<SenseEntitySelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<SenseEntityOrderBy>>
	where?: InputMaybe<SenseEntityBoolExp>
}

export type Subscription_RootSenseEntityAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<SenseEntitySelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<SenseEntityOrderBy>>
	where?: InputMaybe<SenseEntityBoolExp>
}

export type Subscription_RootSenseEntityByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootSenseEntityStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<SenseEntityStreamCursorInput>>
	where?: InputMaybe<SenseEntityBoolExp>
}

export type Subscription_RootSessionArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<SessionSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<SessionOrderBy>>
	where?: InputMaybe<SessionBoolExp>
}

export type Subscription_RootSessionAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<SessionSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<SessionOrderBy>>
	where?: InputMaybe<SessionBoolExp>
}

export type Subscription_RootSessionByPkArgs = {
	id: Scalars['bigint']
}

export type Subscription_RootSessionStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<SessionStreamCursorInput>>
	where?: InputMaybe<SessionBoolExp>
}

export type Subscription_RootSquidProcessorStatusArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<SquidProcessorStatusSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<SquidProcessorStatusOrderBy>>
	where?: InputMaybe<SquidProcessorStatusBoolExp>
}

export type Subscription_RootSquidProcessorStatusAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<SquidProcessorStatusSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<SquidProcessorStatusOrderBy>>
	where?: InputMaybe<SquidProcessorStatusBoolExp>
}

export type Subscription_RootSquidProcessorStatusByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootSquidProcessorStatusStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<SquidProcessorStatusStreamCursorInput>>
	where?: InputMaybe<SquidProcessorStatusBoolExp>
}

export type Subscription_RootTwitterActivitiesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<TwitterActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<TwitterActivitiesOrderBy>>
	where?: InputMaybe<TwitterActivitiesBoolExp>
}

export type Subscription_RootTwitterActivitiesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<TwitterActivitiesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<TwitterActivitiesOrderBy>>
	where?: InputMaybe<TwitterActivitiesBoolExp>
}

export type Subscription_RootTwitterActivitiesByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootTwitterActivitiesStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<TwitterActivitiesStreamCursorInput>>
	where?: InputMaybe<TwitterActivitiesBoolExp>
}

export type Subscription_RootTwitterSearchesArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<TwitterSearchesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<TwitterSearchesOrderBy>>
	where?: InputMaybe<TwitterSearchesBoolExp>
}

export type Subscription_RootTwitterSearchesAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<TwitterSearchesSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<TwitterSearchesOrderBy>>
	where?: InputMaybe<TwitterSearchesBoolExp>
}

export type Subscription_RootTwitterSearchesByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootTwitterSearchesStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<TwitterSearchesStreamCursorInput>>
	where?: InputMaybe<TwitterSearchesBoolExp>
}

export type Subscription_RootTwitterUsersArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<TwitterUsersSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<TwitterUsersOrderBy>>
	where?: InputMaybe<TwitterUsersBoolExp>
}

export type Subscription_RootTwitterUsersAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<TwitterUsersSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<TwitterUsersOrderBy>>
	where?: InputMaybe<TwitterUsersBoolExp>
}

export type Subscription_RootTwitterUsersByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootTwitterUsersStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<TwitterUsersStreamCursorInput>>
	where?: InputMaybe<TwitterUsersBoolExp>
}

export type Subscription_RootUserTokensArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<UserTokensSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<UserTokensOrderBy>>
	where?: InputMaybe<UserTokensBoolExp>
}

export type Subscription_RootUserTokensAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<UserTokensSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<UserTokensOrderBy>>
	where?: InputMaybe<UserTokensBoolExp>
}

export type Subscription_RootUserTokensByPkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootUserTokensStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<UserTokensStreamCursorInput>>
	where?: InputMaybe<UserTokensBoolExp>
}

export type Subscription_RootVotingArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<VotingSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<VotingOrderBy>>
	where?: InputMaybe<VotingBoolExp>
}

export type Subscription_RootVotingAggregateArgs = {
	distinctOn?: InputMaybe<ReadonlyArray<VotingSelectColumn>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<VotingOrderBy>>
	where?: InputMaybe<VotingBoolExp>
}

export type Subscription_RootVotingByPkArgs = {
	id: Scalars['String']
}

export type Subscription_RootVotingStreamArgs = {
	batchSize: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<VotingStreamCursorInput>>
	where?: InputMaybe<VotingBoolExp>
}

export type UserTokensAggregateBoolExpCount = {
	readonly arguments?: InputMaybe<ReadonlyArray<UserTokensSelectColumn>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<UserTokensBoolExp>
	readonly predicate: IntComparisonExp
}

export type BalanceByAddressSubscriptionVariables = Exact<{
	address: Scalars['String']
}>

export type BalanceByAddressSubscription = {
	readonly __typename?: 'subscription_root'
	readonly balance: ReadonlyArray<{
		readonly __typename?: 'Balance'
		readonly address: string
		readonly balanceId: number
		readonly free: string
		readonly frozen: string
		readonly reserved: string
	}>
}

export type HistoricalBalanceSubscriptionVariables = Exact<{
	address: Scalars['String']
	symbol?: InputMaybe<Scalars['String']>
}>

export type HistoricalBalanceSubscription = {
	readonly __typename?: 'subscription_root'
	readonly historicalBalance: ReadonlyArray<{
		readonly __typename?: 'HistoricalBalance'
		readonly block: number
		readonly free: any
		readonly reserved: any
		readonly total: any
		readonly currencyId: string
	}>
}

export type CollectablesForUserQueryVariables = Exact<{
	owner: Scalars['String']
}>

export type CollectablesForUserQuery = {
	readonly __typename?: 'query_root'
	readonly gamedao?: {
		readonly __typename?: 'gamedaoQuery'
		readonly rmrkNfts?: ReadonlyArray<{
			readonly __typename?: 'RMRKNft'
			readonly id: string
			readonly metadata: string
			readonly sn: string
		} | null> | null
	} | null
}

export type GetIdentityByDiscordQueryVariables = Exact<{
	discord?: InputMaybe<Scalars['String']>
}>

export type GetIdentityByDiscordQuery = {
	readonly __typename?: 'query_root'
	readonly identities: ReadonlyArray<{
		readonly __typename?: 'Identities'
		readonly uuid: any
		readonly address?: any | null
		readonly discord?: string | null
		readonly twitter?: string | null
	}>
}

export type ConnectIdentityMutationVariables = Exact<{
	uuid?: InputMaybe<Scalars['String']>
	address?: InputMaybe<Scalars['String']>
	discord?: InputMaybe<Scalars['String']>
	name?: InputMaybe<Scalars['String']>
	email?: InputMaybe<Scalars['String']>
}>

export type ConnectIdentityMutation = {
	readonly __typename?: 'mutation_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotMutation'
		readonly identity?: {
			readonly __typename?: 'BattlepassBotBattlepassIdentity'
			readonly uuid: string
			readonly address?: string | null
			readonly discord?: string | null
			readonly twitter?: string | null
			readonly name?: string | null
			readonly email?: string | null
			readonly epicGames?: string | null
		} | null
	} | null
}

export type SuccessfulCampaignByOrganizationIdSubscriptionVariables = Exact<{
	orgId: Scalars['String']
}>

export type SuccessfulCampaignByOrganizationIdSubscription = {
	readonly __typename?: 'subscription_root'
	readonly campaign: ReadonlyArray<{ readonly __typename?: 'Campaign'; readonly id: string; readonly name: string }>
}

export type CampaignContributorsSubscriptionVariables = Exact<{
	address: Scalars['String']
}>

export type CampaignContributorsSubscription = {
	readonly __typename?: 'subscription_root'
	readonly campaignContributor: ReadonlyArray<{
		readonly __typename?: 'CampaignContributor'
		readonly id: string
		readonly contributed: any
		readonly campaign?: {
			readonly __typename?: 'Campaign'
			readonly name: string
			readonly title: string
			readonly header: string
			readonly expiry: number
			readonly createdAtBlock: number
			readonly tokenSymbol?: string | null
			readonly state: string
			readonly target: any
			readonly campaignContributorsAggregate: {
				readonly __typename?: 'CampaignContributorAggregate'
				readonly aggregate?: {
					readonly __typename?: 'CampaignContributorAggregateFields'
					readonly count: number
					readonly sum?: {
						readonly __typename?: 'CampaignContributorSumFields'
						readonly contributed?: any | null
					} | null
				} | null
			}
			readonly organization?: { readonly __typename?: 'Organization'; readonly name: string } | null
		} | null
	}>
}

export type CampaignSubscriptionVariables = Exact<{
	address?: InputMaybe<Scalars['String']>
}>

export type CampaignSubscription = {
	readonly __typename?: 'subscription_root'
	readonly campaign: ReadonlyArray<{
		readonly __typename?: 'Campaign'
		readonly id: string
		readonly target: any
		readonly state: string
		readonly expiry: number
		readonly tokenSymbol?: string | null
		readonly title: string
		readonly name: string
		readonly header: string
		readonly logo: string
		readonly campaignContributorsAggregate: {
			readonly __typename?: 'CampaignContributorAggregate'
			readonly aggregate?: {
				readonly __typename?: 'CampaignContributorAggregateFields'
				readonly count: number
				readonly sum?: {
					readonly __typename?: 'CampaignContributorSumFields'
					readonly contributed?: any | null
				} | null
			} | null
		}
		readonly organization?: {
			readonly __typename?: 'Organization'
			readonly id: string
			readonly name: string
			readonly logo: string
			readonly payCurrency: string
		} | null
	}>
}

export type CampaignByOrganizationIdSubscriptionVariables = Exact<{
	orgId: Scalars['String']
}>

export type CampaignByOrganizationIdSubscription = {
	readonly __typename?: 'subscription_root'
	readonly campaign: ReadonlyArray<{
		readonly __typename?: 'Campaign'
		readonly id: string
		readonly target: any
		readonly state: string
		readonly expiry: number
		readonly tokenSymbol?: string | null
		readonly title: string
		readonly name: string
		readonly header: string
		readonly logo: string
		readonly campaignContributorsAggregate: {
			readonly __typename?: 'CampaignContributorAggregate'
			readonly aggregate?: {
				readonly __typename?: 'CampaignContributorAggregateFields'
				readonly count: number
				readonly sum?: {
					readonly __typename?: 'CampaignContributorSumFields'
					readonly contributed?: any | null
				} | null
			} | null
		}
		readonly organization?: {
			readonly __typename?: 'Organization'
			readonly id: string
			readonly name: string
			readonly logo: string
			readonly payCurrency: string
		} | null
	}>
}

export type CampaignByIdSubscriptionVariables = Exact<{
	campaignId: Scalars['String']
	address?: InputMaybe<Scalars['String']>
}>

export type CampaignByIdSubscription = {
	readonly __typename?: 'subscription_root'
	readonly campaign: ReadonlyArray<{
		readonly __typename?: 'Campaign'
		readonly id: string
		readonly expiry: number
		readonly target: any
		readonly deposit: any
		readonly state: string
		readonly protocol: string
		readonly tokenSymbol?: string | null
		readonly description: string
		readonly header: string
		readonly name: string
		readonly markdown: string
		readonly campaignContributorsAggregate: {
			readonly __typename?: 'CampaignContributorAggregate'
			readonly aggregate?: {
				readonly __typename?: 'CampaignContributorAggregateFields'
				readonly count: number
				readonly sum?: {
					readonly __typename?: 'CampaignContributorSumFields'
					readonly contributed?: any | null
				} | null
			} | null
		}
		readonly userContributedCount: {
			readonly __typename?: 'CampaignContributorAggregate'
			readonly aggregate?: {
				readonly __typename?: 'CampaignContributorAggregateFields'
				readonly count: number
			} | null
		}
		readonly organization?: {
			readonly __typename?: 'Organization'
			readonly id: string
			readonly creator: string
		} | null
	}>
}

export type CampaignsPaginationSubscriptionVariables = Exact<{
	limit?: InputMaybe<Scalars['Int']>
	filters?: InputMaybe<ReadonlyArray<CampaignBoolExp> | CampaignBoolExp>
	orderBy?: InputMaybe<ReadonlyArray<CampaignOrderBy> | CampaignOrderBy>
}>

export type CampaignsPaginationSubscription = {
	readonly __typename?: 'subscription_root'
	readonly campaign: ReadonlyArray<{
		readonly __typename?: 'Campaign'
		readonly id: string
		readonly target: any
		readonly state: string
		readonly expiry: number
		readonly tokenSymbol?: string | null
		readonly title: string
		readonly name: string
		readonly header: string
		readonly logo: string
		readonly campaignContributorsAggregate: {
			readonly __typename?: 'CampaignContributorAggregate'
			readonly aggregate?: {
				readonly __typename?: 'CampaignContributorAggregateFields'
				readonly count: number
				readonly sum?: {
					readonly __typename?: 'CampaignContributorSumFields'
					readonly contributed?: any | null
				} | null
			} | null
		}
		readonly organization?: {
			readonly __typename?: 'Organization'
			readonly id: string
			readonly name: string
			readonly logo: string
			readonly payCurrency: string
		} | null
	}>
}

export type CampaignsPaginationCountSubscriptionVariables = Exact<{
	filters?: InputMaybe<ReadonlyArray<CampaignBoolExp> | CampaignBoolExp>
}>

export type CampaignsPaginationCountSubscription = {
	readonly __typename?: 'subscription_root'
	readonly campaignAggregate: {
		readonly __typename?: 'CampaignAggregate'
		readonly aggregate?: { readonly __typename?: 'CampaignAggregateFields'; readonly count: number } | null
	}
}

export type ProposalsByOrganizationIdSubscriptionVariables = Exact<{
	orgId: Scalars['String']
}>

export type ProposalsByOrganizationIdSubscription = {
	readonly __typename?: 'subscription_root'
	readonly proposal: ReadonlyArray<{
		readonly __typename?: 'Proposal'
		readonly id: string
		readonly creator: string
		readonly state: string
		readonly start: number
		readonly createdAtBlock: number
		readonly expiry: number
		readonly name: string
		readonly description: string
	}>
}

export type ProposalByIdSubscriptionVariables = Exact<{
	proposalId: Scalars['String']
}>

export type ProposalByIdSubscription = {
	readonly __typename?: 'subscription_root'
	readonly proposal: ReadonlyArray<{
		readonly __typename?: 'Proposal'
		readonly id: string
		readonly type: string
		readonly state: string
		readonly createdAtBlock: number
		readonly start: number
		readonly expiry: number
		readonly name: string
		readonly description: string
		readonly identity?: {
			readonly __typename?: 'Identity'
			readonly id: string
			readonly displayName?: string | null
		} | null
		readonly voting?: {
			readonly __typename?: 'Voting'
			readonly proposalVoters: ReadonlyArray<{
				readonly __typename?: 'ProposalVoter'
				readonly voted: boolean
				readonly identity?: {
					readonly __typename?: 'Identity'
					readonly id: string
					readonly displayName?: string | null
				} | null
			}>
		} | null
	}>
}

export type OrganizationVanityUrlQueryVariables = Exact<{
	searchQuery?: InputMaybe<Scalars['String']>
}>

export type OrganizationVanityUrlQuery = {
	readonly __typename?: 'query_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'Organization'
		readonly id: string
		readonly name: string
	}>
}

export type GetOrganizationsForPrimeSubscriptionVariables = Exact<{
	id: Scalars['String']
}>

export type GetOrganizationsForPrimeSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'Organization'
		readonly id: string
		readonly name: string
	}>
}

export type OrganizationMembersByStateSubscriptionVariables = Exact<{
	id: Scalars['String']
	state: Scalars['String']
}>

export type OrganizationMembersByStateSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'Organization'
		readonly id: string
		readonly organizationMembers: ReadonlyArray<{
			readonly __typename?: 'OrganizationMember'
			readonly address: string
			readonly state: string
		}>
	}>
}

export type OrganizationsPaginationCountSubscriptionVariables = Exact<{
	searchQuery?: InputMaybe<Scalars['String']>
}>

export type OrganizationsPaginationCountSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organizationAggregate: {
		readonly __typename?: 'OrganizationAggregate'
		readonly aggregate?: { readonly __typename?: 'OrganizationAggregateFields'; readonly count: number } | null
	}
}

export type OrganizationsPaginationSubscriptionVariables = Exact<{
	orderBy?: InputMaybe<ReadonlyArray<OrganizationOrderBy> | OrganizationOrderBy>
	first?: InputMaybe<Scalars['Int']>
	searchQuery?: InputMaybe<Scalars['String']>
}>

export type OrganizationsPaginationSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'Organization'
		readonly id: string
		readonly name: string
		readonly description: string
		readonly logo: string
		readonly header: string
		readonly accessModel: string
		readonly creator: string
		readonly organizationMembers: ReadonlyArray<{
			readonly __typename?: 'OrganizationMember'
			readonly address: string
			readonly state: string
		}>
	}>
}

export type GetOrganizationByNameQueryVariables = Exact<{
	name: Scalars['String']
}>

export type GetOrganizationByNameQuery = {
	readonly __typename?: 'query_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'Organization'
		readonly id: string
		readonly name: string
		readonly slug: string
	}>
}

export type GetOrganizationByIdQueryVariables = Exact<{
	id: Scalars['String']
}>

export type GetOrganizationByIdQuery = {
	readonly __typename?: 'query_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'Organization'
		readonly id: string
		readonly name: string
		readonly slug: string
	}>
}

export type OrganizationByIdSubscriptionVariables = Exact<{
	orgId: Scalars['String']
}>

export type OrganizationByIdSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'Organization'
		readonly accessModel: string
		readonly creator: string
		readonly createdAtBlock: number
		readonly feeModel: string
		readonly govCurrency: string
		readonly id: string
		readonly memberLimit: number
		readonly payCurrency: string
		readonly prime: string
		readonly treasury: string
		readonly type: string
		readonly description: string
		readonly email: string
		readonly logo: string
		readonly header: string
		readonly name: string
		readonly repo: string
		readonly website: string
		readonly url: string
		readonly location: string
		readonly tags: any
		readonly organizationMembers: ReadonlyArray<{
			readonly __typename?: 'OrganizationMember'
			readonly address: string
			readonly state: string
			readonly identity?: {
				readonly __typename?: 'Identity'
				readonly id: string
				readonly email?: string | null
				readonly displayName?: string | null
			} | null
		}>
		readonly organizationMembersAggregate: {
			readonly __typename?: 'OrganizationMemberAggregate'
			readonly aggregate?: {
				readonly __typename?: 'OrganizationMemberAggregateFields'
				readonly count: number
			} | null
		}
		readonly campaignsAggregate: {
			readonly __typename?: 'CampaignAggregate'
			readonly aggregate?: { readonly __typename?: 'CampaignAggregateFields'; readonly count: number } | null
			readonly nodes: ReadonlyArray<{
				readonly __typename?: 'Campaign'
				readonly id: string
				readonly state: string
			}>
		}
		readonly proposalsAggregate: {
			readonly __typename?: 'ProposalAggregate'
			readonly nodes: ReadonlyArray<{
				readonly __typename?: 'Proposal'
				readonly id: string
				readonly type: string
			}>
			readonly aggregate?: { readonly __typename?: 'ProposalAggregateFields'; readonly count: number } | null
		}
	}>
}

export type OrganizationsByAccountSubscriptionVariables = Exact<{
	address: Scalars['String']
}>

export type OrganizationsByAccountSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'Organization'
		readonly id: string
		readonly name: string
		readonly description: string
		readonly creator: string
		readonly prime: string
		readonly memberLimit: number
		readonly membershipFee?: any | null
		readonly accessModel: string
		readonly deposit: any
		readonly slug: string
		readonly logo: string
		readonly organizationMembersAggregate: {
			readonly __typename?: 'OrganizationMemberAggregate'
			readonly aggregate?: {
				readonly __typename?: 'OrganizationMemberAggregateFields'
				readonly count: number
			} | null
		}
		readonly organizationMembers: ReadonlyArray<{
			readonly __typename?: 'OrganizationMember'
			readonly address: string
			readonly state: string
		}>
	}>
}

export type IdentityByAddressSubscriptionVariables = Exact<{
	address: Scalars['String']
}>

export type IdentityByAddressSubscription = {
	readonly __typename?: 'subscription_root'
	readonly identityByPk?: {
		readonly __typename?: 'Identity'
		readonly id: string
		readonly email?: string | null
		readonly displayName?: string | null
		readonly image?: string | null
		readonly legalName?: string | null
		readonly riot?: string | null
		readonly twitter?: string | null
		readonly web?: string | null
		readonly web3name?: string | null
		readonly discord?: string | null
	} | null
}

export type BlockNumberSubscriptionVariables = Exact<{ [key: string]: never }>

export type BlockNumberSubscription = {
	readonly __typename?: 'subscription_root'
	readonly chainInfo: ReadonlyArray<{ readonly __typename?: 'ChainInfo'; readonly blockNumber: any }>
}

export type ConfigQueryVariables = Exact<{
	env: Environment
}>

export type ConfigQuery = {
	readonly __typename?: 'query_root'
	readonly gamedao?: {
		readonly __typename?: 'gamedaoQuery'
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
			readonly PROPOSAL_MIN_EXPIRY_IN_SECONDS?: string | null
			readonly CAMPAIGN_MIN_EXPIRY_IN_SECONDS?: string | null
		}
	} | null
}

export type ApiProviderConfigQueryVariables = Exact<{ [key: string]: never }>

export type ApiProviderConfigQuery = {
	readonly __typename?: 'query_root'
	readonly gamedao?: {
		readonly __typename?: 'gamedaoQuery'
		readonly apiProvider: {
			readonly __typename?: 'ApiProvider'
			readonly name: string
			readonly types: string
			readonly wsProviderUrl: string
			readonly chainProperties: {
				readonly __typename?: 'ChainProperties'
				readonly governanceCurrency: number
				readonly networkCurrency: number
				readonly paymentCurrencies: number
				readonly ss58Format: number
				readonly tokenDecimals: ReadonlyArray<string | null>
				readonly tokenSymbol: ReadonlyArray<string | null>
				readonly blockTargetTime: number
			}
		}
	} | null
}

export type DisplayValuesQueryVariables = Exact<{ [key: string]: never }>

export type DisplayValuesQuery = {
	readonly __typename?: 'query_root'
	readonly gamedao?: {
		readonly __typename?: 'gamedaoQuery'
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
			readonly campaignFundingCategories?: ReadonlyArray<{
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
			} | null> | null
			readonly organizationSortOptions?: ReadonlyArray<{
				readonly __typename?: 'DisplayValueEntryString'
				readonly key: string
				readonly value: string
				readonly text: string
			} | null> | null
			readonly campaignSortOptions?: ReadonlyArray<{
				readonly __typename?: 'DisplayValueEntryString'
				readonly key: string
				readonly value: string
				readonly text: string
			} | null> | null
			readonly campaignFilters?: ReadonlyArray<{
				readonly __typename?: 'DisplayValueEntryString'
				readonly key: string
				readonly text: string
				readonly value: string
			} | null> | null
			readonly tags?: ReadonlyArray<{
				readonly __typename?: 'DisplayValueEntryNumber'
				readonly key: string
				readonly text: string
				readonly value: number
			} | null> | null
		} | null
	} | null
}

export type FeaturesQueryVariables = Exact<{
	env: Environment
}>

export type FeaturesQuery = {
	readonly __typename?: 'query_root'
	readonly gamedao?: {
		readonly __typename?: 'gamedaoQuery'
		readonly features: {
			readonly __typename?: 'Features'
			readonly CREATE_PROPOSAL: boolean
			readonly CREATE_PROPOSAL_SIMPLE_MAJORITY: boolean
			readonly CREATE_PROPOSAL_RELATIVE_MAJORITY: boolean
			readonly CREATE_GENERAL_PROPOSAL: boolean
			readonly CREATE_WITHDRAW_PROPOSAL: boolean
			readonly CREATE_SPENDING_PROPOSAL: boolean
			readonly ORGANIZATION_PAGE_SHOW_FILTERS: boolean
			readonly ORGANIZATION_PAGE_SHOW_SEARCH: boolean
			readonly ORGANIZATION_PAGE_SHOW_SORT: boolean
		}
	} | null
}

export type UpdateSessionMutationVariables = Exact<{
	address: Scalars['String']
}>

export type UpdateSessionMutation = {
	readonly __typename?: 'mutation_root'
	readonly updateSession?: {
		readonly __typename?: 'SessionMutationResponse'
		readonly returning: ReadonlyArray<{ readonly __typename?: 'Session'; readonly key: string }>
	} | null
}

export type SidebarSubscriptionVariables = Exact<{
	address: Scalars['String']
}>

export type SidebarSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'Organization'
		readonly id: string
		readonly logo: string
		readonly name: string
	}>
}

export const BalanceByAddressDocument = gql`
	subscription BalanceByAddress($address: String!) {
		balance(where: { address: { _eq: $address } }) {
			address
			balanceId
			free
			frozen
			reserved
		}
	}
`

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
export function useBalanceByAddressSubscription(
	baseOptions: Apollo.SubscriptionHookOptions<BalanceByAddressSubscription, BalanceByAddressSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<BalanceByAddressSubscription, BalanceByAddressSubscriptionVariables>(
		BalanceByAddressDocument,
		options,
	)
}
export type BalanceByAddressSubscriptionHookResult = ReturnType<typeof useBalanceByAddressSubscription>
export type BalanceByAddressSubscriptionResult = Apollo.SubscriptionResult<BalanceByAddressSubscription>
export const HistoricalBalanceDocument = gql`
	subscription HistoricalBalance($address: String!, $symbol: String) {
		historicalBalance(where: { address: { _eq: $address }, currencyId: { _eq: $symbol } }) {
			block
			free
			reserved
			total
			currencyId
		}
	}
`

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
export function useHistoricalBalanceSubscription(
	baseOptions: Apollo.SubscriptionHookOptions<HistoricalBalanceSubscription, HistoricalBalanceSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<HistoricalBalanceSubscription, HistoricalBalanceSubscriptionVariables>(
		HistoricalBalanceDocument,
		options,
	)
}
export type HistoricalBalanceSubscriptionHookResult = ReturnType<typeof useHistoricalBalanceSubscription>
export type HistoricalBalanceSubscriptionResult = Apollo.SubscriptionResult<HistoricalBalanceSubscription>
export const CollectablesForUserDocument = gql`
	query CollectablesForUser($owner: String!) {
		gamedao {
			rmrkNfts(address: $owner) {
				id
				metadata
				sn
			}
		}
	}
`

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
export function useCollectablesForUserQuery(
	baseOptions: Apollo.QueryHookOptions<CollectablesForUserQuery, CollectablesForUserQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<CollectablesForUserQuery, CollectablesForUserQueryVariables>(
		CollectablesForUserDocument,
		options,
	)
}
export function useCollectablesForUserLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<CollectablesForUserQuery, CollectablesForUserQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<CollectablesForUserQuery, CollectablesForUserQueryVariables>(
		CollectablesForUserDocument,
		options,
	)
}
export type CollectablesForUserQueryHookResult = ReturnType<typeof useCollectablesForUserQuery>
export type CollectablesForUserLazyQueryHookResult = ReturnType<typeof useCollectablesForUserLazyQuery>
export type CollectablesForUserQueryResult = Apollo.QueryResult<
	CollectablesForUserQuery,
	CollectablesForUserQueryVariables
>
export const GetIdentityByDiscordDocument = gql`
	query GetIdentityByDiscord($discord: String) {
		identities(where: { discord: { _eq: $discord } }) {
			uuid
			address
			discord
			twitter
		}
	}
`

/**
 * __useGetIdentityByDiscordQuery__
 *
 * To run a query within a React component, call `useGetIdentityByDiscordQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIdentityByDiscordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIdentityByDiscordQuery({
 *   variables: {
 *      discord: // value for 'discord'
 *   },
 * });
 */
export function useGetIdentityByDiscordQuery(
	baseOptions?: Apollo.QueryHookOptions<GetIdentityByDiscordQuery, GetIdentityByDiscordQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetIdentityByDiscordQuery, GetIdentityByDiscordQueryVariables>(
		GetIdentityByDiscordDocument,
		options,
	)
}
export function useGetIdentityByDiscordLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetIdentityByDiscordQuery, GetIdentityByDiscordQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetIdentityByDiscordQuery, GetIdentityByDiscordQueryVariables>(
		GetIdentityByDiscordDocument,
		options,
	)
}
export type GetIdentityByDiscordQueryHookResult = ReturnType<typeof useGetIdentityByDiscordQuery>
export type GetIdentityByDiscordLazyQueryHookResult = ReturnType<typeof useGetIdentityByDiscordLazyQuery>
export type GetIdentityByDiscordQueryResult = Apollo.QueryResult<
	GetIdentityByDiscordQuery,
	GetIdentityByDiscordQueryVariables
>
export const ConnectIdentityDocument = gql`
	mutation ConnectIdentity($uuid: String, $address: String, $discord: String, $name: String, $email: String) {
		battlepassBot {
			identity(uuid: $uuid, address: $address, discord: $discord, name: $name, email: $email) {
				uuid
				address
				discord
				twitter
				name
				email
				epicGames
			}
		}
	}
`
export type ConnectIdentityMutationFn = Apollo.MutationFunction<
	ConnectIdentityMutation,
	ConnectIdentityMutationVariables
>

/**
 * __useConnectIdentityMutation__
 *
 * To run a mutation, you first call `useConnectIdentityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConnectIdentityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [connectIdentityMutation, { data, loading, error }] = useConnectIdentityMutation({
 *   variables: {
 *      uuid: // value for 'uuid'
 *      address: // value for 'address'
 *      discord: // value for 'discord'
 *      name: // value for 'name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useConnectIdentityMutation(
	baseOptions?: Apollo.MutationHookOptions<ConnectIdentityMutation, ConnectIdentityMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<ConnectIdentityMutation, ConnectIdentityMutationVariables>(
		ConnectIdentityDocument,
		options,
	)
}
export type ConnectIdentityMutationHookResult = ReturnType<typeof useConnectIdentityMutation>
export type ConnectIdentityMutationResult = Apollo.MutationResult<ConnectIdentityMutation>
export type ConnectIdentityMutationOptions = Apollo.BaseMutationOptions<
	ConnectIdentityMutation,
	ConnectIdentityMutationVariables
>
export const SuccessfulCampaignByOrganizationIdDocument = gql`
	subscription SuccessfulCampaignByOrganizationId($orgId: String!) {
		campaign(where: { organizationId: { _eq: $orgId }, state: { _eq: "Success" } }) {
			id
			name
		}
	}
`

/**
 * __useSuccessfulCampaignByOrganizationIdSubscription__
 *
 * To run a query within a React component, call `useSuccessfulCampaignByOrganizationIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSuccessfulCampaignByOrganizationIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSuccessfulCampaignByOrganizationIdSubscription({
 *   variables: {
 *      orgId: // value for 'orgId'
 *   },
 * });
 */
export function useSuccessfulCampaignByOrganizationIdSubscription(
	baseOptions: Apollo.SubscriptionHookOptions<
		SuccessfulCampaignByOrganizationIdSubscription,
		SuccessfulCampaignByOrganizationIdSubscriptionVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<
		SuccessfulCampaignByOrganizationIdSubscription,
		SuccessfulCampaignByOrganizationIdSubscriptionVariables
	>(SuccessfulCampaignByOrganizationIdDocument, options)
}
export type SuccessfulCampaignByOrganizationIdSubscriptionHookResult = ReturnType<
	typeof useSuccessfulCampaignByOrganizationIdSubscription
>
export type SuccessfulCampaignByOrganizationIdSubscriptionResult =
	Apollo.SubscriptionResult<SuccessfulCampaignByOrganizationIdSubscription>
export const CampaignContributorsDocument = gql`
	subscription CampaignContributors($address: String!) {
		campaignContributor(where: { identity: { address: { _eq: $address } } }) {
			id
			contributed
			campaign {
				name
				title
				header
				campaignContributorsAggregate {
					aggregate {
						sum {
							contributed
						}
						count
					}
				}
				organization {
					name
				}
				expiry
				createdAtBlock
				tokenSymbol
				state
				target
			}
		}
	}
`

/**
 * __useCampaignContributorsSubscription__
 *
 * To run a query within a React component, call `useCampaignContributorsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCampaignContributorsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCampaignContributorsSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useCampaignContributorsSubscription(
	baseOptions: Apollo.SubscriptionHookOptions<
		CampaignContributorsSubscription,
		CampaignContributorsSubscriptionVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<CampaignContributorsSubscription, CampaignContributorsSubscriptionVariables>(
		CampaignContributorsDocument,
		options,
	)
}
export type CampaignContributorsSubscriptionHookResult = ReturnType<typeof useCampaignContributorsSubscription>
export type CampaignContributorsSubscriptionResult = Apollo.SubscriptionResult<CampaignContributorsSubscription>
export const CampaignDocument = gql`
	subscription Campaign($address: String) {
		campaign(where: { adminIdentityId: { _eq: $address } }) {
			id
			target
			state
			expiry
			tokenSymbol
			title
			name
			header
			logo
			campaignContributorsAggregate {
				aggregate {
					sum {
						contributed
					}
					count(distinct: true)
				}
			}
			organization {
				id
				name
				logo
				payCurrency
			}
		}
	}
`

/**
 * __useCampaignSubscription__
 *
 * To run a query within a React component, call `useCampaignSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCampaignSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCampaignSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useCampaignSubscription(
	baseOptions?: Apollo.SubscriptionHookOptions<CampaignSubscription, CampaignSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<CampaignSubscription, CampaignSubscriptionVariables>(CampaignDocument, options)
}
export type CampaignSubscriptionHookResult = ReturnType<typeof useCampaignSubscription>
export type CampaignSubscriptionResult = Apollo.SubscriptionResult<CampaignSubscription>
export const CampaignByOrganizationIdDocument = gql`
	subscription CampaignByOrganizationId($orgId: String!) {
		campaign(where: { organizationId: { _eq: $orgId } }, orderBy: { expiry: ASC }) {
			id
			target
			state
			expiry
			tokenSymbol
			title
			name
			header
			logo
			campaignContributorsAggregate {
				aggregate {
					sum {
						contributed
					}
					count(distinct: true)
				}
			}
			organization {
				id
				name
				logo
				payCurrency
			}
		}
	}
`

/**
 * __useCampaignByOrganizationIdSubscription__
 *
 * To run a query within a React component, call `useCampaignByOrganizationIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCampaignByOrganizationIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCampaignByOrganizationIdSubscription({
 *   variables: {
 *      orgId: // value for 'orgId'
 *   },
 * });
 */
export function useCampaignByOrganizationIdSubscription(
	baseOptions: Apollo.SubscriptionHookOptions<
		CampaignByOrganizationIdSubscription,
		CampaignByOrganizationIdSubscriptionVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<CampaignByOrganizationIdSubscription, CampaignByOrganizationIdSubscriptionVariables>(
		CampaignByOrganizationIdDocument,
		options,
	)
}
export type CampaignByOrganizationIdSubscriptionHookResult = ReturnType<typeof useCampaignByOrganizationIdSubscription>
export type CampaignByOrganizationIdSubscriptionResult = Apollo.SubscriptionResult<CampaignByOrganizationIdSubscription>
export const CampaignByIdDocument = gql`
	subscription CampaignById($campaignId: String!, $address: String = "") {
		campaign(where: { id: { _eq: $campaignId } }) {
			id
			expiry
			target
			deposit
			state
			protocol
			tokenSymbol
			description
			header
			name
			markdown
			campaignContributorsAggregate {
				aggregate {
					count(distinct: true)
					sum {
						contributed
					}
				}
			}
			userContributedCount: campaignContributorsAggregate(where: { address: { _eq: $address } }) {
				aggregate {
					count
				}
			}
			organization {
				id
				creator
			}
		}
	}
`

/**
 * __useCampaignByIdSubscription__
 *
 * To run a query within a React component, call `useCampaignByIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCampaignByIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCampaignByIdSubscription({
 *   variables: {
 *      campaignId: // value for 'campaignId'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useCampaignByIdSubscription(
	baseOptions: Apollo.SubscriptionHookOptions<CampaignByIdSubscription, CampaignByIdSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<CampaignByIdSubscription, CampaignByIdSubscriptionVariables>(
		CampaignByIdDocument,
		options,
	)
}
export type CampaignByIdSubscriptionHookResult = ReturnType<typeof useCampaignByIdSubscription>
export type CampaignByIdSubscriptionResult = Apollo.SubscriptionResult<CampaignByIdSubscription>
export const CampaignsPaginationDocument = gql`
	subscription CampaignsPagination($limit: Int, $filters: [CampaignBoolExp!], $orderBy: [CampaignOrderBy!]) {
		campaign(limit: $limit, where: { _or: $filters }, orderBy: $orderBy) {
			id
			target
			state
			expiry
			tokenSymbol
			title
			name
			header
			logo
			campaignContributorsAggregate {
				aggregate {
					sum {
						contributed
					}
					count(distinct: true)
				}
			}
			organization {
				id
				name
				logo
				payCurrency
			}
		}
	}
`

/**
 * __useCampaignsPaginationSubscription__
 *
 * To run a query within a React component, call `useCampaignsPaginationSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCampaignsPaginationSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCampaignsPaginationSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      filters: // value for 'filters'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useCampaignsPaginationSubscription(
	baseOptions?: Apollo.SubscriptionHookOptions<
		CampaignsPaginationSubscription,
		CampaignsPaginationSubscriptionVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<CampaignsPaginationSubscription, CampaignsPaginationSubscriptionVariables>(
		CampaignsPaginationDocument,
		options,
	)
}
export type CampaignsPaginationSubscriptionHookResult = ReturnType<typeof useCampaignsPaginationSubscription>
export type CampaignsPaginationSubscriptionResult = Apollo.SubscriptionResult<CampaignsPaginationSubscription>
export const CampaignsPaginationCountDocument = gql`
	subscription CampaignsPaginationCount($filters: [CampaignBoolExp!]) {
		campaignAggregate(where: { _or: $filters }) {
			aggregate {
				count
			}
		}
	}
`

/**
 * __useCampaignsPaginationCountSubscription__
 *
 * To run a query within a React component, call `useCampaignsPaginationCountSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCampaignsPaginationCountSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCampaignsPaginationCountSubscription({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useCampaignsPaginationCountSubscription(
	baseOptions?: Apollo.SubscriptionHookOptions<
		CampaignsPaginationCountSubscription,
		CampaignsPaginationCountSubscriptionVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<CampaignsPaginationCountSubscription, CampaignsPaginationCountSubscriptionVariables>(
		CampaignsPaginationCountDocument,
		options,
	)
}
export type CampaignsPaginationCountSubscriptionHookResult = ReturnType<typeof useCampaignsPaginationCountSubscription>
export type CampaignsPaginationCountSubscriptionResult = Apollo.SubscriptionResult<CampaignsPaginationCountSubscription>
export const ProposalsByOrganizationIdDocument = gql`
	subscription ProposalsByOrganizationId($orgId: String!) {
		proposal(where: { organizationId: { _eq: $orgId } }) {
			id
			creator
			state
			start
			createdAtBlock
			expiry
			name
			description
		}
	}
`

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
export function useProposalsByOrganizationIdSubscription(
	baseOptions: Apollo.SubscriptionHookOptions<
		ProposalsByOrganizationIdSubscription,
		ProposalsByOrganizationIdSubscriptionVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<
		ProposalsByOrganizationIdSubscription,
		ProposalsByOrganizationIdSubscriptionVariables
	>(ProposalsByOrganizationIdDocument, options)
}
export type ProposalsByOrganizationIdSubscriptionHookResult = ReturnType<
	typeof useProposalsByOrganizationIdSubscription
>
export type ProposalsByOrganizationIdSubscriptionResult =
	Apollo.SubscriptionResult<ProposalsByOrganizationIdSubscription>
export const ProposalByIdDocument = gql`
	subscription ProposalById($proposalId: String!) {
		proposal(where: { id: { _eq: $proposalId } }) {
			id
			type
			type
			state
			createdAtBlock
			start
			expiry
			identity {
				id
				displayName
			}
			name
			description
			voting {
				proposalVoters {
					identity {
						id
						displayName
					}
					voted
				}
			}
		}
	}
`

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
export function useProposalByIdSubscription(
	baseOptions: Apollo.SubscriptionHookOptions<ProposalByIdSubscription, ProposalByIdSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<ProposalByIdSubscription, ProposalByIdSubscriptionVariables>(
		ProposalByIdDocument,
		options,
	)
}
export type ProposalByIdSubscriptionHookResult = ReturnType<typeof useProposalByIdSubscription>
export type ProposalByIdSubscriptionResult = Apollo.SubscriptionResult<ProposalByIdSubscription>
export const OrganizationVanityUrlDocument = gql`
	query OrganizationVanityUrl($searchQuery: String = "%") {
		organization {
			id
			name
		}
	}
`

/**
 * __useOrganizationVanityUrlQuery__
 *
 * To run a query within a React component, call `useOrganizationVanityUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationVanityUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationVanityUrlQuery({
 *   variables: {
 *      searchQuery: // value for 'searchQuery'
 *   },
 * });
 */
export function useOrganizationVanityUrlQuery(
	baseOptions?: Apollo.QueryHookOptions<OrganizationVanityUrlQuery, OrganizationVanityUrlQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<OrganizationVanityUrlQuery, OrganizationVanityUrlQueryVariables>(
		OrganizationVanityUrlDocument,
		options,
	)
}
export function useOrganizationVanityUrlLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<OrganizationVanityUrlQuery, OrganizationVanityUrlQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<OrganizationVanityUrlQuery, OrganizationVanityUrlQueryVariables>(
		OrganizationVanityUrlDocument,
		options,
	)
}
export type OrganizationVanityUrlQueryHookResult = ReturnType<typeof useOrganizationVanityUrlQuery>
export type OrganizationVanityUrlLazyQueryHookResult = ReturnType<typeof useOrganizationVanityUrlLazyQuery>
export type OrganizationVanityUrlQueryResult = Apollo.QueryResult<
	OrganizationVanityUrlQuery,
	OrganizationVanityUrlQueryVariables
>
export const GetOrganizationsForPrimeDocument = gql`
	subscription GetOrganizationsForPrime($id: String!) {
		organization(where: { prime: { _eq: $id } }) {
			id
			name
		}
	}
`

/**
 * __useGetOrganizationsForPrimeSubscription__
 *
 * To run a query within a React component, call `useGetOrganizationsForPrimeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationsForPrimeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationsForPrimeSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrganizationsForPrimeSubscription(
	baseOptions: Apollo.SubscriptionHookOptions<
		GetOrganizationsForPrimeSubscription,
		GetOrganizationsForPrimeSubscriptionVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<GetOrganizationsForPrimeSubscription, GetOrganizationsForPrimeSubscriptionVariables>(
		GetOrganizationsForPrimeDocument,
		options,
	)
}
export type GetOrganizationsForPrimeSubscriptionHookResult = ReturnType<typeof useGetOrganizationsForPrimeSubscription>
export type GetOrganizationsForPrimeSubscriptionResult = Apollo.SubscriptionResult<GetOrganizationsForPrimeSubscription>
export const OrganizationMembersByStateDocument = gql`
	subscription OrganizationMembersByState($id: String!, $state: String!) {
		organization(where: { id: { _eq: $id } }) {
			id
			organizationMembers(where: { state: { _eq: $state } }) {
				address
				state
			}
		}
	}
`

/**
 * __useOrganizationMembersByStateSubscription__
 *
 * To run a query within a React component, call `useOrganizationMembersByStateSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationMembersByStateSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationMembersByStateSubscription({
 *   variables: {
 *      id: // value for 'id'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useOrganizationMembersByStateSubscription(
	baseOptions: Apollo.SubscriptionHookOptions<
		OrganizationMembersByStateSubscription,
		OrganizationMembersByStateSubscriptionVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<
		OrganizationMembersByStateSubscription,
		OrganizationMembersByStateSubscriptionVariables
	>(OrganizationMembersByStateDocument, options)
}
export type OrganizationMembersByStateSubscriptionHookResult = ReturnType<
	typeof useOrganizationMembersByStateSubscription
>
export type OrganizationMembersByStateSubscriptionResult =
	Apollo.SubscriptionResult<OrganizationMembersByStateSubscription>
export const OrganizationsPaginationCountDocument = gql`
	subscription OrganizationsPaginationCount($searchQuery: String = "%") {
		organizationAggregate(
			where: { _or: [{ name: { _ilike: $searchQuery } }, { description: { _ilike: $searchQuery } }] }
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
	subscription OrganizationsPagination($orderBy: [OrganizationOrderBy!], $first: Int, $searchQuery: String = "%") {
		organization(
			limit: $first
			orderBy: $orderBy
			where: { _or: [{ name: { _ilike: $searchQuery } }, { description: { _ilike: $searchQuery } }] }
		) {
			id
			name
			description
			logo
			header
			accessModel
			creator
			organizationMembers {
				address
				state
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
export const GetOrganizationByNameDocument = gql`
	query GetOrganizationByName($name: String!) {
		organization(where: { name: { _eq: $name } }) {
			id
			name
			slug
		}
	}
`

/**
 * __useGetOrganizationByNameQuery__
 *
 * To run a query within a React component, call `useGetOrganizationByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetOrganizationByNameQuery(
	baseOptions: Apollo.QueryHookOptions<GetOrganizationByNameQuery, GetOrganizationByNameQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetOrganizationByNameQuery, GetOrganizationByNameQueryVariables>(
		GetOrganizationByNameDocument,
		options,
	)
}
export function useGetOrganizationByNameLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationByNameQuery, GetOrganizationByNameQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetOrganizationByNameQuery, GetOrganizationByNameQueryVariables>(
		GetOrganizationByNameDocument,
		options,
	)
}
export type GetOrganizationByNameQueryHookResult = ReturnType<typeof useGetOrganizationByNameQuery>
export type GetOrganizationByNameLazyQueryHookResult = ReturnType<typeof useGetOrganizationByNameLazyQuery>
export type GetOrganizationByNameQueryResult = Apollo.QueryResult<
	GetOrganizationByNameQuery,
	GetOrganizationByNameQueryVariables
>
export const GetOrganizationByIdDocument = gql`
	query GetOrganizationById($id: String!) {
		organization(where: { id: { _eq: $id } }) {
			id
			name
			slug
		}
	}
`

/**
 * __useGetOrganizationByIdQuery__
 *
 * To run a query within a React component, call `useGetOrganizationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrganizationByIdQuery(
	baseOptions: Apollo.QueryHookOptions<GetOrganizationByIdQuery, GetOrganizationByIdQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetOrganizationByIdQuery, GetOrganizationByIdQueryVariables>(
		GetOrganizationByIdDocument,
		options,
	)
}
export function useGetOrganizationByIdLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationByIdQuery, GetOrganizationByIdQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetOrganizationByIdQuery, GetOrganizationByIdQueryVariables>(
		GetOrganizationByIdDocument,
		options,
	)
}
export type GetOrganizationByIdQueryHookResult = ReturnType<typeof useGetOrganizationByIdQuery>
export type GetOrganizationByIdLazyQueryHookResult = ReturnType<typeof useGetOrganizationByIdLazyQuery>
export type GetOrganizationByIdQueryResult = Apollo.QueryResult<
	GetOrganizationByIdQuery,
	GetOrganizationByIdQueryVariables
>
export const OrganizationByIdDocument = gql`
	subscription OrganizationById($orgId: String!) {
		organization(where: { id: { _eq: $orgId } }) {
			accessModel
			creator
			createdAtBlock
			creator
			feeModel
			govCurrency
			id
			memberLimit
			payCurrency
			prime
			treasury
			type
			organizationMembers {
				address
				state
				identity {
					id
					email
					displayName
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
			organizationMembersAggregate {
				aggregate {
					count
				}
			}
			campaignsAggregate {
				aggregate {
					count
				}
				nodes {
					id
					state
				}
			}
			proposalsAggregate {
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
`

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
export function useOrganizationByIdSubscription(
	baseOptions: Apollo.SubscriptionHookOptions<OrganizationByIdSubscription, OrganizationByIdSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<OrganizationByIdSubscription, OrganizationByIdSubscriptionVariables>(
		OrganizationByIdDocument,
		options,
	)
}
export type OrganizationByIdSubscriptionHookResult = ReturnType<typeof useOrganizationByIdSubscription>
export type OrganizationByIdSubscriptionResult = Apollo.SubscriptionResult<OrganizationByIdSubscription>
export const OrganizationsByAccountDocument = gql`
	subscription OrganizationsByAccount($address: String!) {
		organization(where: { organizationMembers: { address: { _eq: $address } } }) {
			id
			name
			description
			creator
			prime
			memberLimit
			membershipFee
			accessModel
			deposit
			slug
			logo
			organizationMembersAggregate {
				aggregate {
					count
				}
			}
			organizationMembers(where: { address: { _eq: $address } }) {
				address
				state
			}
		}
	}
`

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
export function useOrganizationsByAccountSubscription(
	baseOptions: Apollo.SubscriptionHookOptions<
		OrganizationsByAccountSubscription,
		OrganizationsByAccountSubscriptionVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<OrganizationsByAccountSubscription, OrganizationsByAccountSubscriptionVariables>(
		OrganizationsByAccountDocument,
		options,
	)
}
export type OrganizationsByAccountSubscriptionHookResult = ReturnType<typeof useOrganizationsByAccountSubscription>
export type OrganizationsByAccountSubscriptionResult = Apollo.SubscriptionResult<OrganizationsByAccountSubscription>
export const IdentityByAddressDocument = gql`
	subscription IdentityByAddress($address: String!) {
		identityByPk(id: $address) {
			id
			email
			displayName
			image
			legalName
			riot
			twitter
			web
			web3name
			discord
		}
	}
`

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
export function useIdentityByAddressSubscription(
	baseOptions: Apollo.SubscriptionHookOptions<IdentityByAddressSubscription, IdentityByAddressSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<IdentityByAddressSubscription, IdentityByAddressSubscriptionVariables>(
		IdentityByAddressDocument,
		options,
	)
}
export type IdentityByAddressSubscriptionHookResult = ReturnType<typeof useIdentityByAddressSubscription>
export type IdentityByAddressSubscriptionResult = Apollo.SubscriptionResult<IdentityByAddressSubscription>
export const BlockNumberDocument = gql`
	subscription BlockNumber {
		chainInfo {
			blockNumber
		}
	}
`

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
export function useBlockNumberSubscription(
	baseOptions?: Apollo.SubscriptionHookOptions<BlockNumberSubscription, BlockNumberSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<BlockNumberSubscription, BlockNumberSubscriptionVariables>(
		BlockNumberDocument,
		options,
	)
}
export type BlockNumberSubscriptionHookResult = ReturnType<typeof useBlockNumberSubscription>
export type BlockNumberSubscriptionResult = Apollo.SubscriptionResult<BlockNumberSubscription>
export const ConfigDocument = gql`
	query Config($env: Environment!) {
		gamedao {
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
export const ApiProviderConfigDocument = gql`
	query ApiProviderConfig {
		gamedao {
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
	}
`

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
export function useApiProviderConfigQuery(
	baseOptions?: Apollo.QueryHookOptions<ApiProviderConfigQuery, ApiProviderConfigQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<ApiProviderConfigQuery, ApiProviderConfigQueryVariables>(ApiProviderConfigDocument, options)
}
export function useApiProviderConfigLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<ApiProviderConfigQuery, ApiProviderConfigQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<ApiProviderConfigQuery, ApiProviderConfigQueryVariables>(
		ApiProviderConfigDocument,
		options,
	)
}
export type ApiProviderConfigQueryHookResult = ReturnType<typeof useApiProviderConfigQuery>
export type ApiProviderConfigLazyQueryHookResult = ReturnType<typeof useApiProviderConfigLazyQuery>
export type ApiProviderConfigQueryResult = Apollo.QueryResult<ApiProviderConfigQuery, ApiProviderConfigQueryVariables>
export const DisplayValuesDocument = gql`
	query DisplayValues {
		gamedao {
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
				campaignFundingCategories {
					key
					value
					text
				}
				countries {
					key
					value
					text
				}
				organizationSortOptions {
					key
					value
					text
				}
				campaignSortOptions {
					key
					value
					text
				}
				campaignFilters {
					key
					text
					value
				}
				tags {
					key
					text
					value
				}
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
		gamedao {
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
export const UpdateSessionDocument = gql`
	mutation UpdateSession($address: String!) {
		updateSession(where: { address: { _eq: $address } }) {
			returning {
				key
			}
		}
	}
`
export type UpdateSessionMutationFn = Apollo.MutationFunction<UpdateSessionMutation, UpdateSessionMutationVariables>

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
export function useUpdateSessionMutation(
	baseOptions?: Apollo.MutationHookOptions<UpdateSessionMutation, UpdateSessionMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<UpdateSessionMutation, UpdateSessionMutationVariables>(UpdateSessionDocument, options)
}
export type UpdateSessionMutationHookResult = ReturnType<typeof useUpdateSessionMutation>
export type UpdateSessionMutationResult = Apollo.MutationResult<UpdateSessionMutation>
export type UpdateSessionMutationOptions = Apollo.BaseMutationOptions<
	UpdateSessionMutation,
	UpdateSessionMutationVariables
>
export const SidebarDocument = gql`
	subscription Sidebar($address: String!) {
		organization(where: { organizationMembers: { address: { _eq: $address } } }) {
			id
			logo
			name
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
