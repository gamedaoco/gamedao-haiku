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

export enum ActivityType {
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
export type Balance_Aggregate = {
	readonly __typename?: 'Balance_aggregate'
	readonly aggregate?: Maybe<Balance_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Balance>
}

/** aggregate fields of "Balance" */
export type Balance_Aggregate_Fields = {
	readonly __typename?: 'Balance_aggregate_fields'
	readonly avg?: Maybe<Balance_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Balance_Max_Fields>
	readonly min?: Maybe<Balance_Min_Fields>
	readonly stddev?: Maybe<Balance_Stddev_Fields>
	readonly stddev_pop?: Maybe<Balance_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Balance_Stddev_Samp_Fields>
	readonly sum?: Maybe<Balance_Sum_Fields>
	readonly var_pop?: Maybe<Balance_Var_Pop_Fields>
	readonly var_samp?: Maybe<Balance_Var_Samp_Fields>
	readonly variance?: Maybe<Balance_Variance_Fields>
}

/** aggregate fields of "Balance" */
export type Balance_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Balance_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Balance_Avg_Fields = {
	readonly __typename?: 'Balance_avg_fields'
	readonly balanceId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "Balance". All fields are combined with a logical 'AND'. */
export type Balance_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Balance_Bool_Exp>>
	readonly _not?: InputMaybe<Balance_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Balance_Bool_Exp>>
	readonly address?: InputMaybe<String_Comparison_Exp>
	readonly balanceId?: InputMaybe<Int_Comparison_Exp>
	readonly free?: InputMaybe<String_Comparison_Exp>
	readonly frozen?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<Bigint_Comparison_Exp>
	readonly reserved?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "Balance" */
export enum Balance_Constraint {
	/** unique or primary key constraint on columns "address", "balanceId" */
	BalanceAddressBalanceIdKey = 'Balance_address_balanceId_key',
	/** unique or primary key constraint on columns "id" */
	BalancePkey = 'Balance_pkey',
}

/** input type for incrementing numeric columns in table "Balance" */
export type Balance_Inc_Input = {
	readonly balanceId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "Balance" */
export type Balance_Insert_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly balanceId?: InputMaybe<Scalars['Int']>
	readonly free?: InputMaybe<Scalars['String']>
	readonly frozen?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['bigint']>
	readonly reserved?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Balance_Max_Fields = {
	readonly __typename?: 'Balance_max_fields'
	readonly address?: Maybe<Scalars['String']>
	readonly balanceId?: Maybe<Scalars['Int']>
	readonly free?: Maybe<Scalars['String']>
	readonly frozen?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['bigint']>
	readonly reserved?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Balance_Min_Fields = {
	readonly __typename?: 'Balance_min_fields'
	readonly address?: Maybe<Scalars['String']>
	readonly balanceId?: Maybe<Scalars['Int']>
	readonly free?: Maybe<Scalars['String']>
	readonly frozen?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['bigint']>
	readonly reserved?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "Balance" */
export type Balance_Mutation_Response = {
	readonly __typename?: 'Balance_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Balance>
}

/** on_conflict condition type for table "Balance" */
export type Balance_On_Conflict = {
	readonly constraint: Balance_Constraint
	readonly update_columns?: ReadonlyArray<Balance_Update_Column>
	readonly where?: InputMaybe<Balance_Bool_Exp>
}

/** Ordering options when selecting data from "Balance". */
export type Balance_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly balanceId?: InputMaybe<Order_By>
	readonly free?: InputMaybe<Order_By>
	readonly frozen?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly reserved?: InputMaybe<Order_By>
}

/** primary key columns input for table: Balance */
export type Balance_Pk_Columns_Input = {
	readonly id: Scalars['bigint']
}

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
	Reserved = 'reserved',
}

/** input type for updating data in table "Balance" */
export type Balance_Set_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly balanceId?: InputMaybe<Scalars['Int']>
	readonly free?: InputMaybe<Scalars['String']>
	readonly frozen?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['bigint']>
	readonly reserved?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Balance_Stddev_Fields = {
	readonly __typename?: 'Balance_stddev_fields'
	readonly balanceId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Balance_Stddev_Pop_Fields = {
	readonly __typename?: 'Balance_stddev_pop_fields'
	readonly balanceId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Balance_Stddev_Samp_Fields = {
	readonly __typename?: 'Balance_stddev_samp_fields'
	readonly balanceId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "Balance" */
export type Balance_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Balance_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Balance_Stream_Cursor_Value_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly balanceId?: InputMaybe<Scalars['Int']>
	readonly free?: InputMaybe<Scalars['String']>
	readonly frozen?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['bigint']>
	readonly reserved?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type Balance_Sum_Fields = {
	readonly __typename?: 'Balance_sum_fields'
	readonly balanceId?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['bigint']>
}

/** update columns of table "Balance" */
export enum Balance_Update_Column {
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

export type Balance_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Balance_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Balance_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Balance_Bool_Exp
}

/** aggregate var_pop on columns */
export type Balance_Var_Pop_Fields = {
	readonly __typename?: 'Balance_var_pop_fields'
	readonly balanceId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Balance_Var_Samp_Fields = {
	readonly __typename?: 'Balance_var_samp_fields'
	readonly balanceId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Balance_Variance_Fields = {
	readonly __typename?: 'Balance_variance_fields'
	readonly balanceId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

export type Battlepass = {
	readonly __typename?: 'Battlepass'
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
	readonly members?: Maybe<ReadonlyArray<Maybe<BattlepassMember>>>
	readonly name?: Maybe<Scalars['String']>
	readonly orgId: Scalars['String']
	readonly premiumClaimed: Scalars['Int']
	readonly premiumPasses?: Maybe<Scalars['Int']>
	readonly price?: Maybe<Scalars['Int']>
	readonly quests?: Maybe<ReadonlyArray<Maybe<BattlepassQuest>>>
	readonly rewards?: Maybe<ReadonlyArray<Maybe<BattlepassReward>>>
	readonly season?: Maybe<Scalars['Int']>
	readonly startDate?: Maybe<Scalars['String']>
	readonly totalJoined: Scalars['Int']
}

export type BattlepassIdentity = {
	readonly __typename?: 'BattlepassIdentity'
	readonly address?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly discord?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly epicGames?: Maybe<Scalars['String']>
	readonly id: Scalars['Int']
	readonly members?: Maybe<ReadonlyArray<Maybe<BattlepassMember>>>
	readonly name?: Maybe<Scalars['String']>
	readonly progress?: Maybe<ReadonlyArray<Maybe<BattlepassQuestProgress>>>
	readonly twitter?: Maybe<Scalars['String']>
	readonly uuid: Scalars['String']
}

export type BattlepassLevel = {
	readonly __typename?: 'BattlepassLevel'
	readonly battlepass: Battlepass
	readonly battlepassId: Scalars['Int']
	readonly id: Scalars['Int']
	readonly level: Scalars['Int']
	readonly name?: Maybe<Scalars['String']>
	readonly points: Scalars['Int']
	readonly syncStatus: SyncStatus
	readonly totalPoints: Scalars['Int']
}

/** columns and relationships of "BattlepassLevels" */
export type BattlepassLevels = {
	readonly __typename?: 'BattlepassLevels'
	/** An object relationship */
	readonly Battlepass?: Maybe<Battlepasses>
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
export type BattlepassLevels_Aggregate = {
	readonly __typename?: 'BattlepassLevels_aggregate'
	readonly aggregate?: Maybe<BattlepassLevels_Aggregate_Fields>
	readonly nodes: ReadonlyArray<BattlepassLevels>
}

export type BattlepassLevels_Aggregate_Bool_Exp = {
	readonly count?: InputMaybe<BattlepassLevels_Aggregate_Bool_Exp_Count>
}

export type BattlepassLevels_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<BattlepassLevels_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<BattlepassLevels_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "BattlepassLevels" */
export type BattlepassLevels_Aggregate_Fields = {
	readonly __typename?: 'BattlepassLevels_aggregate_fields'
	readonly avg?: Maybe<BattlepassLevels_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<BattlepassLevels_Max_Fields>
	readonly min?: Maybe<BattlepassLevels_Min_Fields>
	readonly stddev?: Maybe<BattlepassLevels_Stddev_Fields>
	readonly stddev_pop?: Maybe<BattlepassLevels_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<BattlepassLevels_Stddev_Samp_Fields>
	readonly sum?: Maybe<BattlepassLevels_Sum_Fields>
	readonly var_pop?: Maybe<BattlepassLevels_Var_Pop_Fields>
	readonly var_samp?: Maybe<BattlepassLevels_Var_Samp_Fields>
	readonly variance?: Maybe<BattlepassLevels_Variance_Fields>
}

/** aggregate fields of "BattlepassLevels" */
export type BattlepassLevels_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<BattlepassLevels_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "BattlepassLevels" */
export type BattlepassLevels_Aggregate_Order_By = {
	readonly avg?: InputMaybe<BattlepassLevels_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<BattlepassLevels_Max_Order_By>
	readonly min?: InputMaybe<BattlepassLevels_Min_Order_By>
	readonly stddev?: InputMaybe<BattlepassLevels_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<BattlepassLevels_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<BattlepassLevels_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<BattlepassLevels_Sum_Order_By>
	readonly var_pop?: InputMaybe<BattlepassLevels_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<BattlepassLevels_Var_Samp_Order_By>
	readonly variance?: InputMaybe<BattlepassLevels_Variance_Order_By>
}

/** input type for inserting array relation for remote table "BattlepassLevels" */
export type BattlepassLevels_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<BattlepassLevels_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<BattlepassLevels_On_Conflict>
}

/** aggregate avg on columns */
export type BattlepassLevels_Avg_Fields = {
	readonly __typename?: 'BattlepassLevels_avg_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly totalPoints?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "BattlepassLevels" */
export type BattlepassLevels_Avg_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "BattlepassLevels". All fields are combined with a logical 'AND'. */
export type BattlepassLevels_Bool_Exp = {
	readonly Battlepass?: InputMaybe<Battlepasses_Bool_Exp>
	readonly _and?: InputMaybe<ReadonlyArray<BattlepassLevels_Bool_Exp>>
	readonly _not?: InputMaybe<BattlepassLevels_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<BattlepassLevels_Bool_Exp>>
	readonly battlepassId?: InputMaybe<Int_Comparison_Exp>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly level?: InputMaybe<Int_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly points?: InputMaybe<Int_Comparison_Exp>
	readonly syncStatus?: InputMaybe<Enum_BattlepassLevels_SyncStatus_Comparison_Exp>
	readonly totalPoints?: InputMaybe<Int_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "BattlepassLevels" */
export enum BattlepassLevels_Constraint {
	/** unique or primary key constraint on columns "id" */
	BattlepassLevelsPkey = 'BattlepassLevels_pkey',
}

/** input type for incrementing numeric columns in table "BattlepassLevels" */
export type BattlepassLevels_Inc_Input = {
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly level?: InputMaybe<Scalars['Int']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly totalPoints?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "BattlepassLevels" */
export type BattlepassLevels_Insert_Input = {
	readonly Battlepass?: InputMaybe<Battlepasses_Obj_Rel_Insert_Input>
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
export type BattlepassLevels_Max_Fields = {
	readonly __typename?: 'BattlepassLevels_max_fields'
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
export type BattlepassLevels_Max_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly syncStatus?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type BattlepassLevels_Min_Fields = {
	readonly __typename?: 'BattlepassLevels_min_fields'
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
export type BattlepassLevels_Min_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly syncStatus?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** response of any mutation on the table "BattlepassLevels" */
export type BattlepassLevels_Mutation_Response = {
	readonly __typename?: 'BattlepassLevels_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<BattlepassLevels>
}

/** on_conflict condition type for table "BattlepassLevels" */
export type BattlepassLevels_On_Conflict = {
	readonly constraint: BattlepassLevels_Constraint
	readonly update_columns?: ReadonlyArray<BattlepassLevels_Update_Column>
	readonly where?: InputMaybe<BattlepassLevels_Bool_Exp>
}

/** Ordering options when selecting data from "BattlepassLevels". */
export type BattlepassLevels_Order_By = {
	readonly Battlepass?: InputMaybe<Battlepasses_Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly syncStatus?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: BattlepassLevels */
export type BattlepassLevels_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "BattlepassLevels" */
export enum BattlepassLevels_Select_Column {
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
export type BattlepassLevels_Set_Input = {
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
export type BattlepassLevels_Stddev_Fields = {
	readonly __typename?: 'BattlepassLevels_stddev_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly totalPoints?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "BattlepassLevels" */
export type BattlepassLevels_Stddev_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type BattlepassLevels_Stddev_Pop_Fields = {
	readonly __typename?: 'BattlepassLevels_stddev_pop_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly totalPoints?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "BattlepassLevels" */
export type BattlepassLevels_Stddev_Pop_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type BattlepassLevels_Stddev_Samp_Fields = {
	readonly __typename?: 'BattlepassLevels_stddev_samp_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly totalPoints?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "BattlepassLevels" */
export type BattlepassLevels_Stddev_Samp_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "BattlepassLevels" */
export type BattlepassLevels_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: BattlepassLevels_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type BattlepassLevels_Stream_Cursor_Value_Input = {
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
export type BattlepassLevels_Sum_Fields = {
	readonly __typename?: 'BattlepassLevels_sum_fields'
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
	readonly level?: Maybe<Scalars['Int']>
	readonly points?: Maybe<Scalars['Int']>
	readonly totalPoints?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "BattlepassLevels" */
export type BattlepassLevels_Sum_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
}

/** update columns of table "BattlepassLevels" */
export enum BattlepassLevels_Update_Column {
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

export type BattlepassLevels_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<BattlepassLevels_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<BattlepassLevels_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: BattlepassLevels_Bool_Exp
}

/** aggregate var_pop on columns */
export type BattlepassLevels_Var_Pop_Fields = {
	readonly __typename?: 'BattlepassLevels_var_pop_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly totalPoints?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "BattlepassLevels" */
export type BattlepassLevels_Var_Pop_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type BattlepassLevels_Var_Samp_Fields = {
	readonly __typename?: 'BattlepassLevels_var_samp_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly totalPoints?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "BattlepassLevels" */
export type BattlepassLevels_Var_Samp_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type BattlepassLevels_Variance_Fields = {
	readonly __typename?: 'BattlepassLevels_variance_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly totalPoints?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "BattlepassLevels" */
export type BattlepassLevels_Variance_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
}

export type BattlepassMember = {
	readonly __typename?: 'BattlepassMember'
	readonly battlepass: Battlepass
	readonly battlepassId: Scalars['Int']
	readonly id?: Maybe<Scalars['Int']>
	readonly identity: BattlepassIdentity
	readonly identityId: Scalars['Int']
	readonly passChainId?: Maybe<Scalars['String']>
	readonly points: Scalars['Int']
	readonly premium: Scalars['Boolean']
	readonly progress?: Maybe<ReadonlyArray<Maybe<BattlepassQuestProgress>>>
	readonly status: MemberStatus
}

/** columns and relationships of "BattlepassParticipants" */
export type BattlepassParticipants = {
	readonly __typename?: 'BattlepassParticipants'
	/** An object relationship */
	readonly Battlepass?: Maybe<Battlepasses>
	/** An object relationship */
	readonly Identity?: Maybe<Identities>
	/** An array relationship */
	readonly Payments: ReadonlyArray<Payments>
	/** An aggregate relationship */
	readonly Payments_aggregate: Payments_Aggregate
	/** An array relationship */
	readonly RewardClaims: ReadonlyArray<RewardClaims>
	/** An aggregate relationship */
	readonly RewardClaims_aggregate: RewardClaims_Aggregate
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly createdAt: Scalars['timestamptz']
	readonly id: Scalars['Int']
	readonly identityId?: Maybe<Scalars['Int']>
	readonly passChainId?: Maybe<Scalars['bpchar']>
	readonly points: Scalars['Int']
	readonly premium?: Maybe<Scalars['Boolean']>
	readonly status: Scalars['enum_BattlepassParticipants_status']
	readonly updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "BattlepassParticipants" */
export type BattlepassParticipantsPaymentsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Payments_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Payments_Order_By>>
	where?: InputMaybe<Payments_Bool_Exp>
}

/** columns and relationships of "BattlepassParticipants" */
export type BattlepassParticipantsPayments_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Payments_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Payments_Order_By>>
	where?: InputMaybe<Payments_Bool_Exp>
}

/** columns and relationships of "BattlepassParticipants" */
export type BattlepassParticipantsRewardClaimsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<RewardClaims_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<RewardClaims_Order_By>>
	where?: InputMaybe<RewardClaims_Bool_Exp>
}

/** columns and relationships of "BattlepassParticipants" */
export type BattlepassParticipantsRewardClaims_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<RewardClaims_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<RewardClaims_Order_By>>
	where?: InputMaybe<RewardClaims_Bool_Exp>
}

/** aggregated selection of "BattlepassParticipants" */
export type BattlepassParticipants_Aggregate = {
	readonly __typename?: 'BattlepassParticipants_aggregate'
	readonly aggregate?: Maybe<BattlepassParticipants_Aggregate_Fields>
	readonly nodes: ReadonlyArray<BattlepassParticipants>
}

export type BattlepassParticipants_Aggregate_Bool_Exp = {
	readonly bool_and?: InputMaybe<BattlepassParticipants_Aggregate_Bool_Exp_Bool_And>
	readonly bool_or?: InputMaybe<BattlepassParticipants_Aggregate_Bool_Exp_Bool_Or>
	readonly count?: InputMaybe<BattlepassParticipants_Aggregate_Bool_Exp_Count>
}

export type BattlepassParticipants_Aggregate_Bool_Exp_Bool_And = {
	readonly arguments: BattlepassParticipants_Select_Column_BattlepassParticipants_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<BattlepassParticipants_Bool_Exp>
	readonly predicate: Boolean_Comparison_Exp
}

export type BattlepassParticipants_Aggregate_Bool_Exp_Bool_Or = {
	readonly arguments: BattlepassParticipants_Select_Column_BattlepassParticipants_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<BattlepassParticipants_Bool_Exp>
	readonly predicate: Boolean_Comparison_Exp
}

export type BattlepassParticipants_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<BattlepassParticipants_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<BattlepassParticipants_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "BattlepassParticipants" */
export type BattlepassParticipants_Aggregate_Fields = {
	readonly __typename?: 'BattlepassParticipants_aggregate_fields'
	readonly avg?: Maybe<BattlepassParticipants_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<BattlepassParticipants_Max_Fields>
	readonly min?: Maybe<BattlepassParticipants_Min_Fields>
	readonly stddev?: Maybe<BattlepassParticipants_Stddev_Fields>
	readonly stddev_pop?: Maybe<BattlepassParticipants_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<BattlepassParticipants_Stddev_Samp_Fields>
	readonly sum?: Maybe<BattlepassParticipants_Sum_Fields>
	readonly var_pop?: Maybe<BattlepassParticipants_Var_Pop_Fields>
	readonly var_samp?: Maybe<BattlepassParticipants_Var_Samp_Fields>
	readonly variance?: Maybe<BattlepassParticipants_Variance_Fields>
}

/** aggregate fields of "BattlepassParticipants" */
export type BattlepassParticipants_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<BattlepassParticipants_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "BattlepassParticipants" */
export type BattlepassParticipants_Aggregate_Order_By = {
	readonly avg?: InputMaybe<BattlepassParticipants_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<BattlepassParticipants_Max_Order_By>
	readonly min?: InputMaybe<BattlepassParticipants_Min_Order_By>
	readonly stddev?: InputMaybe<BattlepassParticipants_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<BattlepassParticipants_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<BattlepassParticipants_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<BattlepassParticipants_Sum_Order_By>
	readonly var_pop?: InputMaybe<BattlepassParticipants_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<BattlepassParticipants_Var_Samp_Order_By>
	readonly variance?: InputMaybe<BattlepassParticipants_Variance_Order_By>
}

/** input type for inserting array relation for remote table "BattlepassParticipants" */
export type BattlepassParticipants_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<BattlepassParticipants_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<BattlepassParticipants_On_Conflict>
}

/** aggregate avg on columns */
export type BattlepassParticipants_Avg_Fields = {
	readonly __typename?: 'BattlepassParticipants_avg_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "BattlepassParticipants" */
export type BattlepassParticipants_Avg_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "BattlepassParticipants". All fields are combined with a logical 'AND'. */
export type BattlepassParticipants_Bool_Exp = {
	readonly Battlepass?: InputMaybe<Battlepasses_Bool_Exp>
	readonly Identity?: InputMaybe<Identities_Bool_Exp>
	readonly Payments?: InputMaybe<Payments_Bool_Exp>
	readonly Payments_aggregate?: InputMaybe<Payments_Aggregate_Bool_Exp>
	readonly RewardClaims?: InputMaybe<RewardClaims_Bool_Exp>
	readonly RewardClaims_aggregate?: InputMaybe<RewardClaims_Aggregate_Bool_Exp>
	readonly _and?: InputMaybe<ReadonlyArray<BattlepassParticipants_Bool_Exp>>
	readonly _not?: InputMaybe<BattlepassParticipants_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<BattlepassParticipants_Bool_Exp>>
	readonly battlepassId?: InputMaybe<Int_Comparison_Exp>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly identityId?: InputMaybe<Int_Comparison_Exp>
	readonly passChainId?: InputMaybe<Bpchar_Comparison_Exp>
	readonly points?: InputMaybe<Int_Comparison_Exp>
	readonly premium?: InputMaybe<Boolean_Comparison_Exp>
	readonly status?: InputMaybe<Enum_BattlepassParticipants_Status_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "BattlepassParticipants" */
export enum BattlepassParticipants_Constraint {
	/** unique or primary key constraint on columns "id" */
	BattlepassParticipantsPkey = 'BattlepassParticipants_pkey',
}

/** input type for incrementing numeric columns in table "BattlepassParticipants" */
export type BattlepassParticipants_Inc_Input = {
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly points?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "BattlepassParticipants" */
export type BattlepassParticipants_Insert_Input = {
	readonly Battlepass?: InputMaybe<Battlepasses_Obj_Rel_Insert_Input>
	readonly Identity?: InputMaybe<Identities_Obj_Rel_Insert_Input>
	readonly Payments?: InputMaybe<Payments_Arr_Rel_Insert_Input>
	readonly RewardClaims?: InputMaybe<RewardClaims_Arr_Rel_Insert_Input>
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

/** aggregate max on columns */
export type BattlepassParticipants_Max_Fields = {
	readonly __typename?: 'BattlepassParticipants_max_fields'
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
export type BattlepassParticipants_Max_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly passChainId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly status?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type BattlepassParticipants_Min_Fields = {
	readonly __typename?: 'BattlepassParticipants_min_fields'
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
export type BattlepassParticipants_Min_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly passChainId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly status?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** response of any mutation on the table "BattlepassParticipants" */
export type BattlepassParticipants_Mutation_Response = {
	readonly __typename?: 'BattlepassParticipants_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<BattlepassParticipants>
}

/** input type for inserting object relation for remote table "BattlepassParticipants" */
export type BattlepassParticipants_Obj_Rel_Insert_Input = {
	readonly data: BattlepassParticipants_Insert_Input
	/** upsert condition */
	readonly on_conflict?: InputMaybe<BattlepassParticipants_On_Conflict>
}

/** on_conflict condition type for table "BattlepassParticipants" */
export type BattlepassParticipants_On_Conflict = {
	readonly constraint: BattlepassParticipants_Constraint
	readonly update_columns?: ReadonlyArray<BattlepassParticipants_Update_Column>
	readonly where?: InputMaybe<BattlepassParticipants_Bool_Exp>
}

/** Ordering options when selecting data from "BattlepassParticipants". */
export type BattlepassParticipants_Order_By = {
	readonly Battlepass?: InputMaybe<Battlepasses_Order_By>
	readonly Identity?: InputMaybe<Identities_Order_By>
	readonly Payments_aggregate?: InputMaybe<Payments_Aggregate_Order_By>
	readonly RewardClaims_aggregate?: InputMaybe<RewardClaims_Aggregate_Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly passChainId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly premium?: InputMaybe<Order_By>
	readonly status?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: BattlepassParticipants */
export type BattlepassParticipants_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "BattlepassParticipants" */
export enum BattlepassParticipants_Select_Column {
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

/** select "BattlepassParticipants_aggregate_bool_exp_bool_and_arguments_columns" columns of table "BattlepassParticipants" */
export enum BattlepassParticipants_Select_Column_BattlepassParticipants_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
	/** column name */
	Premium = 'premium',
}

/** select "BattlepassParticipants_aggregate_bool_exp_bool_or_arguments_columns" columns of table "BattlepassParticipants" */
export enum BattlepassParticipants_Select_Column_BattlepassParticipants_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
	/** column name */
	Premium = 'premium',
}

/** input type for updating data in table "BattlepassParticipants" */
export type BattlepassParticipants_Set_Input = {
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
export type BattlepassParticipants_Stddev_Fields = {
	readonly __typename?: 'BattlepassParticipants_stddev_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "BattlepassParticipants" */
export type BattlepassParticipants_Stddev_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type BattlepassParticipants_Stddev_Pop_Fields = {
	readonly __typename?: 'BattlepassParticipants_stddev_pop_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "BattlepassParticipants" */
export type BattlepassParticipants_Stddev_Pop_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type BattlepassParticipants_Stddev_Samp_Fields = {
	readonly __typename?: 'BattlepassParticipants_stddev_samp_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "BattlepassParticipants" */
export type BattlepassParticipants_Stddev_Samp_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "BattlepassParticipants" */
export type BattlepassParticipants_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: BattlepassParticipants_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type BattlepassParticipants_Stream_Cursor_Value_Input = {
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
export type BattlepassParticipants_Sum_Fields = {
	readonly __typename?: 'BattlepassParticipants_sum_fields'
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly points?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "BattlepassParticipants" */
export type BattlepassParticipants_Sum_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
}

/** update columns of table "BattlepassParticipants" */
export enum BattlepassParticipants_Update_Column {
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

export type BattlepassParticipants_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<BattlepassParticipants_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<BattlepassParticipants_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: BattlepassParticipants_Bool_Exp
}

/** aggregate var_pop on columns */
export type BattlepassParticipants_Var_Pop_Fields = {
	readonly __typename?: 'BattlepassParticipants_var_pop_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "BattlepassParticipants" */
export type BattlepassParticipants_Var_Pop_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type BattlepassParticipants_Var_Samp_Fields = {
	readonly __typename?: 'BattlepassParticipants_var_samp_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "BattlepassParticipants" */
export type BattlepassParticipants_Var_Samp_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type BattlepassParticipants_Variance_Fields = {
	readonly __typename?: 'BattlepassParticipants_variance_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "BattlepassParticipants" */
export type BattlepassParticipants_Variance_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
}

export type BattlepassPoint = {
	readonly __typename?: 'BattlepassPoint'
	readonly battlepass: Battlepass
	readonly battlepassId: Scalars['Int']
	readonly identity: BattlepassIdentity
	readonly identityId?: Maybe<Scalars['Int']>
	readonly identityUuid?: Maybe<Scalars['String']>
	readonly points: Scalars['Int']
	readonly quests: Scalars['Int']
}

export type BattlepassQuest = {
	readonly __typename?: 'BattlepassQuest'
	readonly battlepass: Battlepass
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
	readonly progresses?: Maybe<ReadonlyArray<Maybe<BattlepassQuestProgress>>>
	readonly quantity: Scalars['Int']
	readonly repeat: Scalars['Boolean']
	readonly source: Source
	readonly twitterId?: Maybe<Scalars['String']>
	readonly type: ActivityType
}

export type BattlepassQuestProgress = {
	readonly __typename?: 'BattlepassQuestProgress'
	readonly id: Scalars['Int']
	readonly identity: BattlepassIdentity
	readonly identityId: Scalars['Int']
	readonly progress: Scalars['Float']
	readonly quest: BattlepassQuest
	readonly questId: Scalars['Int']
}

export type BattlepassReward = {
	readonly __typename?: 'BattlepassReward'
	readonly available: Scalars['Int']
	readonly battlepass: Battlepass
	readonly battlepassId: Scalars['Int']
	readonly chainId?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly id: Scalars['Int']
	readonly level?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly points?: Maybe<Scalars['Int']>
	readonly syncStatus: SyncStatus
	readonly total: Scalars['Int']
}

export type BattlepassRewardClaim = {
	readonly __typename?: 'BattlepassRewardClaim'
	readonly id: Scalars['Int']
	readonly identityUuid: Scalars['String']
	readonly member: BattlepassMember
	readonly nftId?: Maybe<Scalars['Int']>
	readonly participantId: Scalars['Int']
	readonly reward: BattlepassReward
	readonly rewardChainId?: Maybe<Scalars['String']>
	readonly rewardId: Scalars['Int']
	readonly syncStatus: SyncStatus
}

/** columns and relationships of "BattlepassRewards" */
export type BattlepassRewards = {
	readonly __typename?: 'BattlepassRewards'
	/** An object relationship */
	readonly Battlepass?: Maybe<Battlepasses>
	/** An array relationship */
	readonly RewardClaims: ReadonlyArray<RewardClaims>
	/** An aggregate relationship */
	readonly RewardClaims_aggregate: RewardClaims_Aggregate
	readonly available?: Maybe<Scalars['Int']>
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly chainId?: Maybe<Scalars['bpchar']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAt: Scalars['timestamptz']
	readonly description?: Maybe<Scalars['String']>
	readonly id: Scalars['Int']
	readonly level?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly points?: Maybe<Scalars['Int']>
	readonly syncStatus?: Maybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly total?: Maybe<Scalars['Int']>
	readonly updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "BattlepassRewards" */
export type BattlepassRewardsRewardClaimsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<RewardClaims_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<RewardClaims_Order_By>>
	where?: InputMaybe<RewardClaims_Bool_Exp>
}

/** columns and relationships of "BattlepassRewards" */
export type BattlepassRewardsRewardClaims_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<RewardClaims_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<RewardClaims_Order_By>>
	where?: InputMaybe<RewardClaims_Bool_Exp>
}

/** aggregated selection of "BattlepassRewards" */
export type BattlepassRewards_Aggregate = {
	readonly __typename?: 'BattlepassRewards_aggregate'
	readonly aggregate?: Maybe<BattlepassRewards_Aggregate_Fields>
	readonly nodes: ReadonlyArray<BattlepassRewards>
}

export type BattlepassRewards_Aggregate_Bool_Exp = {
	readonly count?: InputMaybe<BattlepassRewards_Aggregate_Bool_Exp_Count>
}

export type BattlepassRewards_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<BattlepassRewards_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<BattlepassRewards_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "BattlepassRewards" */
export type BattlepassRewards_Aggregate_Fields = {
	readonly __typename?: 'BattlepassRewards_aggregate_fields'
	readonly avg?: Maybe<BattlepassRewards_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<BattlepassRewards_Max_Fields>
	readonly min?: Maybe<BattlepassRewards_Min_Fields>
	readonly stddev?: Maybe<BattlepassRewards_Stddev_Fields>
	readonly stddev_pop?: Maybe<BattlepassRewards_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<BattlepassRewards_Stddev_Samp_Fields>
	readonly sum?: Maybe<BattlepassRewards_Sum_Fields>
	readonly var_pop?: Maybe<BattlepassRewards_Var_Pop_Fields>
	readonly var_samp?: Maybe<BattlepassRewards_Var_Samp_Fields>
	readonly variance?: Maybe<BattlepassRewards_Variance_Fields>
}

/** aggregate fields of "BattlepassRewards" */
export type BattlepassRewards_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<BattlepassRewards_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "BattlepassRewards" */
export type BattlepassRewards_Aggregate_Order_By = {
	readonly avg?: InputMaybe<BattlepassRewards_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<BattlepassRewards_Max_Order_By>
	readonly min?: InputMaybe<BattlepassRewards_Min_Order_By>
	readonly stddev?: InputMaybe<BattlepassRewards_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<BattlepassRewards_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<BattlepassRewards_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<BattlepassRewards_Sum_Order_By>
	readonly var_pop?: InputMaybe<BattlepassRewards_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<BattlepassRewards_Var_Samp_Order_By>
	readonly variance?: InputMaybe<BattlepassRewards_Variance_Order_By>
}

/** input type for inserting array relation for remote table "BattlepassRewards" */
export type BattlepassRewards_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<BattlepassRewards_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<BattlepassRewards_On_Conflict>
}

/** aggregate avg on columns */
export type BattlepassRewards_Avg_Fields = {
	readonly __typename?: 'BattlepassRewards_avg_fields'
	readonly available?: Maybe<Scalars['Float']>
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "BattlepassRewards" */
export type BattlepassRewards_Avg_Order_By = {
	readonly available?: InputMaybe<Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly total?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "BattlepassRewards". All fields are combined with a logical 'AND'. */
export type BattlepassRewards_Bool_Exp = {
	readonly Battlepass?: InputMaybe<Battlepasses_Bool_Exp>
	readonly RewardClaims?: InputMaybe<RewardClaims_Bool_Exp>
	readonly RewardClaims_aggregate?: InputMaybe<RewardClaims_Aggregate_Bool_Exp>
	readonly _and?: InputMaybe<ReadonlyArray<BattlepassRewards_Bool_Exp>>
	readonly _not?: InputMaybe<BattlepassRewards_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<BattlepassRewards_Bool_Exp>>
	readonly available?: InputMaybe<Int_Comparison_Exp>
	readonly battlepassId?: InputMaybe<Int_Comparison_Exp>
	readonly chainId?: InputMaybe<Bpchar_Comparison_Exp>
	readonly cid?: InputMaybe<String_Comparison_Exp>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly level?: InputMaybe<Int_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly points?: InputMaybe<Int_Comparison_Exp>
	readonly syncStatus?: InputMaybe<Enum_BattlepassRewards_SyncStatus_Comparison_Exp>
	readonly total?: InputMaybe<Int_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "BattlepassRewards" */
export enum BattlepassRewards_Constraint {
	/** unique or primary key constraint on columns "id" */
	BattlepassRewardsPkey = 'BattlepassRewards_pkey',
}

/** input type for incrementing numeric columns in table "BattlepassRewards" */
export type BattlepassRewards_Inc_Input = {
	readonly available?: InputMaybe<Scalars['Int']>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly level?: InputMaybe<Scalars['Int']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly total?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "BattlepassRewards" */
export type BattlepassRewards_Insert_Input = {
	readonly Battlepass?: InputMaybe<Battlepasses_Obj_Rel_Insert_Input>
	readonly RewardClaims?: InputMaybe<RewardClaims_Arr_Rel_Insert_Input>
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

/** aggregate max on columns */
export type BattlepassRewards_Max_Fields = {
	readonly __typename?: 'BattlepassRewards_max_fields'
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
export type BattlepassRewards_Max_Order_By = {
	readonly available?: InputMaybe<Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly chainId?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly syncStatus?: InputMaybe<Order_By>
	readonly total?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type BattlepassRewards_Min_Fields = {
	readonly __typename?: 'BattlepassRewards_min_fields'
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
export type BattlepassRewards_Min_Order_By = {
	readonly available?: InputMaybe<Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly chainId?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly syncStatus?: InputMaybe<Order_By>
	readonly total?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** response of any mutation on the table "BattlepassRewards" */
export type BattlepassRewards_Mutation_Response = {
	readonly __typename?: 'BattlepassRewards_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<BattlepassRewards>
}

/** input type for inserting object relation for remote table "BattlepassRewards" */
export type BattlepassRewards_Obj_Rel_Insert_Input = {
	readonly data: BattlepassRewards_Insert_Input
	/** upsert condition */
	readonly on_conflict?: InputMaybe<BattlepassRewards_On_Conflict>
}

/** on_conflict condition type for table "BattlepassRewards" */
export type BattlepassRewards_On_Conflict = {
	readonly constraint: BattlepassRewards_Constraint
	readonly update_columns?: ReadonlyArray<BattlepassRewards_Update_Column>
	readonly where?: InputMaybe<BattlepassRewards_Bool_Exp>
}

/** Ordering options when selecting data from "BattlepassRewards". */
export type BattlepassRewards_Order_By = {
	readonly Battlepass?: InputMaybe<Battlepasses_Order_By>
	readonly RewardClaims_aggregate?: InputMaybe<RewardClaims_Aggregate_Order_By>
	readonly available?: InputMaybe<Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly chainId?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly syncStatus?: InputMaybe<Order_By>
	readonly total?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: BattlepassRewards */
export type BattlepassRewards_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "BattlepassRewards" */
export enum BattlepassRewards_Select_Column {
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
export type BattlepassRewards_Set_Input = {
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
export type BattlepassRewards_Stddev_Fields = {
	readonly __typename?: 'BattlepassRewards_stddev_fields'
	readonly available?: Maybe<Scalars['Float']>
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "BattlepassRewards" */
export type BattlepassRewards_Stddev_Order_By = {
	readonly available?: InputMaybe<Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly total?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type BattlepassRewards_Stddev_Pop_Fields = {
	readonly __typename?: 'BattlepassRewards_stddev_pop_fields'
	readonly available?: Maybe<Scalars['Float']>
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "BattlepassRewards" */
export type BattlepassRewards_Stddev_Pop_Order_By = {
	readonly available?: InputMaybe<Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly total?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type BattlepassRewards_Stddev_Samp_Fields = {
	readonly __typename?: 'BattlepassRewards_stddev_samp_fields'
	readonly available?: Maybe<Scalars['Float']>
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "BattlepassRewards" */
export type BattlepassRewards_Stddev_Samp_Order_By = {
	readonly available?: InputMaybe<Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly total?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "BattlepassRewards" */
export type BattlepassRewards_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: BattlepassRewards_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type BattlepassRewards_Stream_Cursor_Value_Input = {
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
export type BattlepassRewards_Sum_Fields = {
	readonly __typename?: 'BattlepassRewards_sum_fields'
	readonly available?: Maybe<Scalars['Int']>
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
	readonly level?: Maybe<Scalars['Int']>
	readonly points?: Maybe<Scalars['Int']>
	readonly total?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "BattlepassRewards" */
export type BattlepassRewards_Sum_Order_By = {
	readonly available?: InputMaybe<Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly total?: InputMaybe<Order_By>
}

/** update columns of table "BattlepassRewards" */
export enum BattlepassRewards_Update_Column {
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

export type BattlepassRewards_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<BattlepassRewards_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<BattlepassRewards_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: BattlepassRewards_Bool_Exp
}

/** aggregate var_pop on columns */
export type BattlepassRewards_Var_Pop_Fields = {
	readonly __typename?: 'BattlepassRewards_var_pop_fields'
	readonly available?: Maybe<Scalars['Float']>
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "BattlepassRewards" */
export type BattlepassRewards_Var_Pop_Order_By = {
	readonly available?: InputMaybe<Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly total?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type BattlepassRewards_Var_Samp_Fields = {
	readonly __typename?: 'BattlepassRewards_var_samp_fields'
	readonly available?: Maybe<Scalars['Float']>
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "BattlepassRewards" */
export type BattlepassRewards_Var_Samp_Order_By = {
	readonly available?: InputMaybe<Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly total?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type BattlepassRewards_Variance_Fields = {
	readonly __typename?: 'BattlepassRewards_variance_fields'
	readonly available?: Maybe<Scalars['Float']>
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly level?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "BattlepassRewards" */
export type BattlepassRewards_Variance_Order_By = {
	readonly available?: InputMaybe<Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly total?: InputMaybe<Order_By>
}

/** columns and relationships of "Battlepasses" */
export type Battlepasses = {
	readonly __typename?: 'Battlepasses'
	/** An array relationship */
	readonly BattlepassLevels: ReadonlyArray<BattlepassLevels>
	/** An aggregate relationship */
	readonly BattlepassLevels_aggregate: BattlepassLevels_Aggregate
	/** An array relationship */
	readonly BattlepassParticipants: ReadonlyArray<BattlepassParticipants>
	/** An aggregate relationship */
	readonly BattlepassParticipants_aggregate: BattlepassParticipants_Aggregate
	/** An array relationship */
	readonly BattlepassRewards: ReadonlyArray<BattlepassRewards>
	/** An aggregate relationship */
	readonly BattlepassRewards_aggregate: BattlepassRewards_Aggregate
	/** An array relationship */
	readonly Quests: ReadonlyArray<Quests>
	/** An aggregate relationship */
	readonly Quests_aggregate: Quests_Aggregate
	readonly active: Scalars['Boolean']
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
	readonly season?: Maybe<Scalars['Int']>
	readonly startDate?: Maybe<Scalars['timestamptz']>
	readonly totalJoined: Scalars['Int']
	readonly updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesBattlepassLevelsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassLevels_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassLevels_Order_By>>
	where?: InputMaybe<BattlepassLevels_Bool_Exp>
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesBattlepassLevels_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassLevels_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassLevels_Order_By>>
	where?: InputMaybe<BattlepassLevels_Bool_Exp>
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesBattlepassParticipantsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassParticipants_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassParticipants_Order_By>>
	where?: InputMaybe<BattlepassParticipants_Bool_Exp>
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesBattlepassParticipants_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassParticipants_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassParticipants_Order_By>>
	where?: InputMaybe<BattlepassParticipants_Bool_Exp>
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesBattlepassRewardsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassRewards_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassRewards_Order_By>>
	where?: InputMaybe<BattlepassRewards_Bool_Exp>
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesBattlepassRewards_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassRewards_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassRewards_Order_By>>
	where?: InputMaybe<BattlepassRewards_Bool_Exp>
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesQuestsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Quests_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Quests_Order_By>>
	where?: InputMaybe<Quests_Bool_Exp>
}

/** columns and relationships of "Battlepasses" */
export type BattlepassesQuests_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Quests_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Quests_Order_By>>
	where?: InputMaybe<Quests_Bool_Exp>
}

export type BattlepassesFilter = {
	readonly active?: InputMaybe<Scalars['Boolean']>
	readonly chainId?: InputMaybe<Scalars['String']>
	readonly finalized?: InputMaybe<Scalars['Boolean']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly orgChainId?: InputMaybe<Scalars['String']>
	readonly season?: InputMaybe<Scalars['Int']>
}

/** aggregated selection of "Battlepasses" */
export type Battlepasses_Aggregate = {
	readonly __typename?: 'Battlepasses_aggregate'
	readonly aggregate?: Maybe<Battlepasses_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Battlepasses>
}

/** aggregate fields of "Battlepasses" */
export type Battlepasses_Aggregate_Fields = {
	readonly __typename?: 'Battlepasses_aggregate_fields'
	readonly avg?: Maybe<Battlepasses_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Battlepasses_Max_Fields>
	readonly min?: Maybe<Battlepasses_Min_Fields>
	readonly stddev?: Maybe<Battlepasses_Stddev_Fields>
	readonly stddev_pop?: Maybe<Battlepasses_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Battlepasses_Stddev_Samp_Fields>
	readonly sum?: Maybe<Battlepasses_Sum_Fields>
	readonly var_pop?: Maybe<Battlepasses_Var_Pop_Fields>
	readonly var_samp?: Maybe<Battlepasses_Var_Samp_Fields>
	readonly variance?: Maybe<Battlepasses_Variance_Fields>
}

/** aggregate fields of "Battlepasses" */
export type Battlepasses_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Battlepasses_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Battlepasses_Avg_Fields = {
	readonly __typename?: 'Battlepasses_avg_fields'
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
export type Battlepasses_Bool_Exp = {
	readonly BattlepassLevels?: InputMaybe<BattlepassLevels_Bool_Exp>
	readonly BattlepassLevels_aggregate?: InputMaybe<BattlepassLevels_Aggregate_Bool_Exp>
	readonly BattlepassParticipants?: InputMaybe<BattlepassParticipants_Bool_Exp>
	readonly BattlepassParticipants_aggregate?: InputMaybe<BattlepassParticipants_Aggregate_Bool_Exp>
	readonly BattlepassRewards?: InputMaybe<BattlepassRewards_Bool_Exp>
	readonly BattlepassRewards_aggregate?: InputMaybe<BattlepassRewards_Aggregate_Bool_Exp>
	readonly Quests?: InputMaybe<Quests_Bool_Exp>
	readonly Quests_aggregate?: InputMaybe<Quests_Aggregate_Bool_Exp>
	readonly _and?: InputMaybe<ReadonlyArray<Battlepasses_Bool_Exp>>
	readonly _not?: InputMaybe<Battlepasses_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Battlepasses_Bool_Exp>>
	readonly active?: InputMaybe<Boolean_Comparison_Exp>
	readonly chainId?: InputMaybe<Bpchar_Comparison_Exp>
	readonly cid?: InputMaybe<String_Comparison_Exp>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly endDate?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly finalized?: InputMaybe<Boolean_Comparison_Exp>
	readonly freeClaimed?: InputMaybe<Int_Comparison_Exp>
	readonly freePasses?: InputMaybe<Int_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly joinable?: InputMaybe<Boolean_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly orgId?: InputMaybe<Bpchar_Comparison_Exp>
	readonly premiumClaimed?: InputMaybe<Int_Comparison_Exp>
	readonly premiumPasses?: InputMaybe<Int_Comparison_Exp>
	readonly price?: InputMaybe<Int_Comparison_Exp>
	readonly season?: InputMaybe<Int_Comparison_Exp>
	readonly startDate?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly totalJoined?: InputMaybe<Int_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "Battlepasses" */
export enum Battlepasses_Constraint {
	/** unique or primary key constraint on columns "id" */
	BattlepassesPkey = 'Battlepasses_pkey',
}

/** input type for incrementing numeric columns in table "Battlepasses" */
export type Battlepasses_Inc_Input = {
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
export type Battlepasses_Insert_Input = {
	readonly BattlepassLevels?: InputMaybe<BattlepassLevels_Arr_Rel_Insert_Input>
	readonly BattlepassParticipants?: InputMaybe<BattlepassParticipants_Arr_Rel_Insert_Input>
	readonly BattlepassRewards?: InputMaybe<BattlepassRewards_Arr_Rel_Insert_Input>
	readonly Quests?: InputMaybe<Quests_Arr_Rel_Insert_Input>
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

/** aggregate max on columns */
export type Battlepasses_Max_Fields = {
	readonly __typename?: 'Battlepasses_max_fields'
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
export type Battlepasses_Min_Fields = {
	readonly __typename?: 'Battlepasses_min_fields'
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
export type Battlepasses_Mutation_Response = {
	readonly __typename?: 'Battlepasses_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Battlepasses>
}

/** input type for inserting object relation for remote table "Battlepasses" */
export type Battlepasses_Obj_Rel_Insert_Input = {
	readonly data: Battlepasses_Insert_Input
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Battlepasses_On_Conflict>
}

/** on_conflict condition type for table "Battlepasses" */
export type Battlepasses_On_Conflict = {
	readonly constraint: Battlepasses_Constraint
	readonly update_columns?: ReadonlyArray<Battlepasses_Update_Column>
	readonly where?: InputMaybe<Battlepasses_Bool_Exp>
}

/** Ordering options when selecting data from "Battlepasses". */
export type Battlepasses_Order_By = {
	readonly BattlepassLevels_aggregate?: InputMaybe<BattlepassLevels_Aggregate_Order_By>
	readonly BattlepassParticipants_aggregate?: InputMaybe<BattlepassParticipants_Aggregate_Order_By>
	readonly BattlepassRewards_aggregate?: InputMaybe<BattlepassRewards_Aggregate_Order_By>
	readonly Quests_aggregate?: InputMaybe<Quests_Aggregate_Order_By>
	readonly active?: InputMaybe<Order_By>
	readonly chainId?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly endDate?: InputMaybe<Order_By>
	readonly finalized?: InputMaybe<Order_By>
	readonly freeClaimed?: InputMaybe<Order_By>
	readonly freePasses?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly joinable?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly orgId?: InputMaybe<Order_By>
	readonly premiumClaimed?: InputMaybe<Order_By>
	readonly premiumPasses?: InputMaybe<Order_By>
	readonly price?: InputMaybe<Order_By>
	readonly season?: InputMaybe<Order_By>
	readonly startDate?: InputMaybe<Order_By>
	readonly totalJoined?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: Battlepasses */
export type Battlepasses_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "Battlepasses" */
export enum Battlepasses_Select_Column {
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
export type Battlepasses_Set_Input = {
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
export type Battlepasses_Stddev_Fields = {
	readonly __typename?: 'Battlepasses_stddev_fields'
	readonly freeClaimed?: Maybe<Scalars['Float']>
	readonly freePasses?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly premiumClaimed?: Maybe<Scalars['Float']>
	readonly premiumPasses?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly season?: Maybe<Scalars['Float']>
	readonly totalJoined?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Battlepasses_Stddev_Pop_Fields = {
	readonly __typename?: 'Battlepasses_stddev_pop_fields'
	readonly freeClaimed?: Maybe<Scalars['Float']>
	readonly freePasses?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly premiumClaimed?: Maybe<Scalars['Float']>
	readonly premiumPasses?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly season?: Maybe<Scalars['Float']>
	readonly totalJoined?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Battlepasses_Stddev_Samp_Fields = {
	readonly __typename?: 'Battlepasses_stddev_samp_fields'
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
export type Battlepasses_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Battlepasses_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Battlepasses_Stream_Cursor_Value_Input = {
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
export type Battlepasses_Sum_Fields = {
	readonly __typename?: 'Battlepasses_sum_fields'
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
export enum Battlepasses_Update_Column {
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

export type Battlepasses_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Battlepasses_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Battlepasses_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Battlepasses_Bool_Exp
}

/** aggregate var_pop on columns */
export type Battlepasses_Var_Pop_Fields = {
	readonly __typename?: 'Battlepasses_var_pop_fields'
	readonly freeClaimed?: Maybe<Scalars['Float']>
	readonly freePasses?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly premiumClaimed?: Maybe<Scalars['Float']>
	readonly premiumPasses?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly season?: Maybe<Scalars['Float']>
	readonly totalJoined?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Battlepasses_Var_Samp_Fields = {
	readonly __typename?: 'Battlepasses_var_samp_fields'
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
export type Battlepasses_Variance_Fields = {
	readonly __typename?: 'Battlepasses_variance_fields'
	readonly freeClaimed?: Maybe<Scalars['Float']>
	readonly freePasses?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly premiumClaimed?: Maybe<Scalars['Float']>
	readonly premiumPasses?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly season?: Maybe<Scalars['Float']>
	readonly totalJoined?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['Boolean']>
	readonly _gt?: InputMaybe<Scalars['Boolean']>
	readonly _gte?: InputMaybe<Scalars['Boolean']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['Boolean']>
	readonly _lte?: InputMaybe<Scalars['Boolean']>
	readonly _neq?: InputMaybe<Scalars['Boolean']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>
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
export type ChainActivities_Aggregate = {
	readonly __typename?: 'ChainActivities_aggregate'
	readonly aggregate?: Maybe<ChainActivities_Aggregate_Fields>
	readonly nodes: ReadonlyArray<ChainActivities>
}

/** aggregate fields of "ChainActivities" */
export type ChainActivities_Aggregate_Fields = {
	readonly __typename?: 'ChainActivities_aggregate_fields'
	readonly avg?: Maybe<ChainActivities_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<ChainActivities_Max_Fields>
	readonly min?: Maybe<ChainActivities_Min_Fields>
	readonly stddev?: Maybe<ChainActivities_Stddev_Fields>
	readonly stddev_pop?: Maybe<ChainActivities_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<ChainActivities_Stddev_Samp_Fields>
	readonly sum?: Maybe<ChainActivities_Sum_Fields>
	readonly var_pop?: Maybe<ChainActivities_Var_Pop_Fields>
	readonly var_samp?: Maybe<ChainActivities_Var_Samp_Fields>
	readonly variance?: Maybe<ChainActivities_Variance_Fields>
}

/** aggregate fields of "ChainActivities" */
export type ChainActivities_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<ChainActivities_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type ChainActivities_Avg_Fields = {
	readonly __typename?: 'ChainActivities_avg_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "ChainActivities". All fields are combined with a logical 'AND'. */
export type ChainActivities_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<ChainActivities_Bool_Exp>>
	readonly _not?: InputMaybe<ChainActivities_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<ChainActivities_Bool_Exp>>
	readonly activityType?: InputMaybe<Enum_ChainActivities_ActivityType_Comparison_Exp>
	readonly address?: InputMaybe<Bpchar_Comparison_Exp>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "ChainActivities" */
export enum ChainActivities_Constraint {
	/** unique or primary key constraint on columns "id" */
	ChainActivitiesPkey = 'ChainActivities_pkey',
}

/** input type for incrementing numeric columns in table "ChainActivities" */
export type ChainActivities_Inc_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "ChainActivities" */
export type ChainActivities_Insert_Input = {
	readonly activityType?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly address?: InputMaybe<Scalars['bpchar']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type ChainActivities_Max_Fields = {
	readonly __typename?: 'ChainActivities_max_fields'
	readonly activityType?: Maybe<Scalars['enum_ChainActivities_activityType']>
	readonly address?: Maybe<Scalars['bpchar']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type ChainActivities_Min_Fields = {
	readonly __typename?: 'ChainActivities_min_fields'
	readonly activityType?: Maybe<Scalars['enum_ChainActivities_activityType']>
	readonly address?: Maybe<Scalars['bpchar']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "ChainActivities" */
export type ChainActivities_Mutation_Response = {
	readonly __typename?: 'ChainActivities_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<ChainActivities>
}

/** on_conflict condition type for table "ChainActivities" */
export type ChainActivities_On_Conflict = {
	readonly constraint: ChainActivities_Constraint
	readonly update_columns?: ReadonlyArray<ChainActivities_Update_Column>
	readonly where?: InputMaybe<ChainActivities_Bool_Exp>
}

/** Ordering options when selecting data from "ChainActivities". */
export type ChainActivities_Order_By = {
	readonly activityType?: InputMaybe<Order_By>
	readonly address?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: ChainActivities */
export type ChainActivities_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "ChainActivities" */
export enum ChainActivities_Select_Column {
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
export type ChainActivities_Set_Input = {
	readonly activityType?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly address?: InputMaybe<Scalars['bpchar']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type ChainActivities_Stddev_Fields = {
	readonly __typename?: 'ChainActivities_stddev_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type ChainActivities_Stddev_Pop_Fields = {
	readonly __typename?: 'ChainActivities_stddev_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type ChainActivities_Stddev_Samp_Fields = {
	readonly __typename?: 'ChainActivities_stddev_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "ChainActivities" */
export type ChainActivities_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: ChainActivities_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type ChainActivities_Stream_Cursor_Value_Input = {
	readonly activityType?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly address?: InputMaybe<Scalars['bpchar']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type ChainActivities_Sum_Fields = {
	readonly __typename?: 'ChainActivities_sum_fields'
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "ChainActivities" */
export enum ChainActivities_Update_Column {
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

export type ChainActivities_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<ChainActivities_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<ChainActivities_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: ChainActivities_Bool_Exp
}

/** aggregate var_pop on columns */
export type ChainActivities_Var_Pop_Fields = {
	readonly __typename?: 'ChainActivities_var_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type ChainActivities_Var_Samp_Fields = {
	readonly __typename?: 'ChainActivities_var_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type ChainActivities_Variance_Fields = {
	readonly __typename?: 'ChainActivities_variance_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "ChainInfo" */
export type ChainInfo = {
	readonly __typename?: 'ChainInfo'
	readonly blockNumber: Scalars['bigint']
	readonly id: Scalars['Int']
}

/** aggregated selection of "ChainInfo" */
export type ChainInfo_Aggregate = {
	readonly __typename?: 'ChainInfo_aggregate'
	readonly aggregate?: Maybe<ChainInfo_Aggregate_Fields>
	readonly nodes: ReadonlyArray<ChainInfo>
}

/** aggregate fields of "ChainInfo" */
export type ChainInfo_Aggregate_Fields = {
	readonly __typename?: 'ChainInfo_aggregate_fields'
	readonly avg?: Maybe<ChainInfo_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<ChainInfo_Max_Fields>
	readonly min?: Maybe<ChainInfo_Min_Fields>
	readonly stddev?: Maybe<ChainInfo_Stddev_Fields>
	readonly stddev_pop?: Maybe<ChainInfo_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<ChainInfo_Stddev_Samp_Fields>
	readonly sum?: Maybe<ChainInfo_Sum_Fields>
	readonly var_pop?: Maybe<ChainInfo_Var_Pop_Fields>
	readonly var_samp?: Maybe<ChainInfo_Var_Samp_Fields>
	readonly variance?: Maybe<ChainInfo_Variance_Fields>
}

/** aggregate fields of "ChainInfo" */
export type ChainInfo_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<ChainInfo_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type ChainInfo_Avg_Fields = {
	readonly __typename?: 'ChainInfo_avg_fields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "ChainInfo". All fields are combined with a logical 'AND'. */
export type ChainInfo_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<ChainInfo_Bool_Exp>>
	readonly _not?: InputMaybe<ChainInfo_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<ChainInfo_Bool_Exp>>
	readonly blockNumber?: InputMaybe<Bigint_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "ChainInfo" */
export enum ChainInfo_Constraint {
	/** unique or primary key constraint on columns "id" */
	ChainInfoPkey = 'ChainInfo_pkey',
}

/** input type for incrementing numeric columns in table "ChainInfo" */
export type ChainInfo_Inc_Input = {
	readonly blockNumber?: InputMaybe<Scalars['bigint']>
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "ChainInfo" */
export type ChainInfo_Insert_Input = {
	readonly blockNumber?: InputMaybe<Scalars['bigint']>
	readonly id?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type ChainInfo_Max_Fields = {
	readonly __typename?: 'ChainInfo_max_fields'
	readonly blockNumber?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type ChainInfo_Min_Fields = {
	readonly __typename?: 'ChainInfo_min_fields'
	readonly blockNumber?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['Int']>
}

/** response of any mutation on the table "ChainInfo" */
export type ChainInfo_Mutation_Response = {
	readonly __typename?: 'ChainInfo_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<ChainInfo>
}

/** on_conflict condition type for table "ChainInfo" */
export type ChainInfo_On_Conflict = {
	readonly constraint: ChainInfo_Constraint
	readonly update_columns?: ReadonlyArray<ChainInfo_Update_Column>
	readonly where?: InputMaybe<ChainInfo_Bool_Exp>
}

/** Ordering options when selecting data from "ChainInfo". */
export type ChainInfo_Order_By = {
	readonly blockNumber?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** primary key columns input for table: ChainInfo */
export type ChainInfo_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "ChainInfo" */
export enum ChainInfo_Select_Column {
	/** column name */
	BlockNumber = 'blockNumber',
	/** column name */
	Id = 'id',
}

/** input type for updating data in table "ChainInfo" */
export type ChainInfo_Set_Input = {
	readonly blockNumber?: InputMaybe<Scalars['bigint']>
	readonly id?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type ChainInfo_Stddev_Fields = {
	readonly __typename?: 'ChainInfo_stddev_fields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type ChainInfo_Stddev_Pop_Fields = {
	readonly __typename?: 'ChainInfo_stddev_pop_fields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type ChainInfo_Stddev_Samp_Fields = {
	readonly __typename?: 'ChainInfo_stddev_samp_fields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "ChainInfo" */
export type ChainInfo_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: ChainInfo_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type ChainInfo_Stream_Cursor_Value_Input = {
	readonly blockNumber?: InputMaybe<Scalars['bigint']>
	readonly id?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type ChainInfo_Sum_Fields = {
	readonly __typename?: 'ChainInfo_sum_fields'
	readonly blockNumber?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "ChainInfo" */
export enum ChainInfo_Update_Column {
	/** column name */
	BlockNumber = 'blockNumber',
	/** column name */
	Id = 'id',
}

export type ChainInfo_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<ChainInfo_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<ChainInfo_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: ChainInfo_Bool_Exp
}

/** aggregate var_pop on columns */
export type ChainInfo_Var_Pop_Fields = {
	readonly __typename?: 'ChainInfo_var_pop_fields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type ChainInfo_Var_Samp_Fields = {
	readonly __typename?: 'ChainInfo_var_samp_fields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type ChainInfo_Variance_Fields = {
	readonly __typename?: 'ChainInfo_variance_fields'
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

/** columns and relationships of "ChainStatuses" */
export type ChainStatuses = {
	readonly __typename?: 'ChainStatuses'
	readonly blockNumber: Scalars['Int']
	readonly createdAt: Scalars['timestamptz']
	readonly id: Scalars['Int']
	readonly updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "ChainStatuses" */
export type ChainStatuses_Aggregate = {
	readonly __typename?: 'ChainStatuses_aggregate'
	readonly aggregate?: Maybe<ChainStatuses_Aggregate_Fields>
	readonly nodes: ReadonlyArray<ChainStatuses>
}

/** aggregate fields of "ChainStatuses" */
export type ChainStatuses_Aggregate_Fields = {
	readonly __typename?: 'ChainStatuses_aggregate_fields'
	readonly avg?: Maybe<ChainStatuses_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<ChainStatuses_Max_Fields>
	readonly min?: Maybe<ChainStatuses_Min_Fields>
	readonly stddev?: Maybe<ChainStatuses_Stddev_Fields>
	readonly stddev_pop?: Maybe<ChainStatuses_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<ChainStatuses_Stddev_Samp_Fields>
	readonly sum?: Maybe<ChainStatuses_Sum_Fields>
	readonly var_pop?: Maybe<ChainStatuses_Var_Pop_Fields>
	readonly var_samp?: Maybe<ChainStatuses_Var_Samp_Fields>
	readonly variance?: Maybe<ChainStatuses_Variance_Fields>
}

/** aggregate fields of "ChainStatuses" */
export type ChainStatuses_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<ChainStatuses_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type ChainStatuses_Avg_Fields = {
	readonly __typename?: 'ChainStatuses_avg_fields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "ChainStatuses". All fields are combined with a logical 'AND'. */
export type ChainStatuses_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<ChainStatuses_Bool_Exp>>
	readonly _not?: InputMaybe<ChainStatuses_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<ChainStatuses_Bool_Exp>>
	readonly blockNumber?: InputMaybe<Int_Comparison_Exp>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "ChainStatuses" */
export enum ChainStatuses_Constraint {
	/** unique or primary key constraint on columns "id" */
	ChainStatusesPkey = 'ChainStatuses_pkey',
}

/** input type for incrementing numeric columns in table "ChainStatuses" */
export type ChainStatuses_Inc_Input = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "ChainStatuses" */
export type ChainStatuses_Insert_Input = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type ChainStatuses_Max_Fields = {
	readonly __typename?: 'ChainStatuses_max_fields'
	readonly blockNumber?: Maybe<Scalars['Int']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type ChainStatuses_Min_Fields = {
	readonly __typename?: 'ChainStatuses_min_fields'
	readonly blockNumber?: Maybe<Scalars['Int']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "ChainStatuses" */
export type ChainStatuses_Mutation_Response = {
	readonly __typename?: 'ChainStatuses_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<ChainStatuses>
}

/** on_conflict condition type for table "ChainStatuses" */
export type ChainStatuses_On_Conflict = {
	readonly constraint: ChainStatuses_Constraint
	readonly update_columns?: ReadonlyArray<ChainStatuses_Update_Column>
	readonly where?: InputMaybe<ChainStatuses_Bool_Exp>
}

/** Ordering options when selecting data from "ChainStatuses". */
export type ChainStatuses_Order_By = {
	readonly blockNumber?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: ChainStatuses */
export type ChainStatuses_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "ChainStatuses" */
export enum ChainStatuses_Select_Column {
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
export type ChainStatuses_Set_Input = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type ChainStatuses_Stddev_Fields = {
	readonly __typename?: 'ChainStatuses_stddev_fields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type ChainStatuses_Stddev_Pop_Fields = {
	readonly __typename?: 'ChainStatuses_stddev_pop_fields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type ChainStatuses_Stddev_Samp_Fields = {
	readonly __typename?: 'ChainStatuses_stddev_samp_fields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "ChainStatuses" */
export type ChainStatuses_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: ChainStatuses_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type ChainStatuses_Stream_Cursor_Value_Input = {
	readonly blockNumber?: InputMaybe<Scalars['Int']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type ChainStatuses_Sum_Fields = {
	readonly __typename?: 'ChainStatuses_sum_fields'
	readonly blockNumber?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "ChainStatuses" */
export enum ChainStatuses_Update_Column {
	/** column name */
	BlockNumber = 'blockNumber',
	/** column name */
	CreatedAt = 'createdAt',
	/** column name */
	Id = 'id',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type ChainStatuses_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<ChainStatuses_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<ChainStatuses_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: ChainStatuses_Bool_Exp
}

/** aggregate var_pop on columns */
export type ChainStatuses_Var_Pop_Fields = {
	readonly __typename?: 'ChainStatuses_var_pop_fields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type ChainStatuses_Var_Samp_Fields = {
	readonly __typename?: 'ChainStatuses_var_samp_fields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type ChainStatuses_Variance_Fields = {
	readonly __typename?: 'ChainStatuses_variance_fields'
	readonly blockNumber?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "CompletedQuests" */
export type CompletedQuests = {
	readonly __typename?: 'CompletedQuests'
	/** An object relationship */
	readonly Identity?: Maybe<Identities>
	/** An object relationship */
	readonly Quest?: Maybe<Quests>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly guildId?: Maybe<Scalars['String']>
	readonly id: Scalars['Int']
	readonly identityId?: Maybe<Scalars['Int']>
	readonly questId?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregated selection of "CompletedQuests" */
export type CompletedQuests_Aggregate = {
	readonly __typename?: 'CompletedQuests_aggregate'
	readonly aggregate?: Maybe<CompletedQuests_Aggregate_Fields>
	readonly nodes: ReadonlyArray<CompletedQuests>
}

export type CompletedQuests_Aggregate_Bool_Exp = {
	readonly count?: InputMaybe<CompletedQuests_Aggregate_Bool_Exp_Count>
}

export type CompletedQuests_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<CompletedQuests_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<CompletedQuests_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "CompletedQuests" */
export type CompletedQuests_Aggregate_Fields = {
	readonly __typename?: 'CompletedQuests_aggregate_fields'
	readonly avg?: Maybe<CompletedQuests_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<CompletedQuests_Max_Fields>
	readonly min?: Maybe<CompletedQuests_Min_Fields>
	readonly stddev?: Maybe<CompletedQuests_Stddev_Fields>
	readonly stddev_pop?: Maybe<CompletedQuests_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<CompletedQuests_Stddev_Samp_Fields>
	readonly sum?: Maybe<CompletedQuests_Sum_Fields>
	readonly var_pop?: Maybe<CompletedQuests_Var_Pop_Fields>
	readonly var_samp?: Maybe<CompletedQuests_Var_Samp_Fields>
	readonly variance?: Maybe<CompletedQuests_Variance_Fields>
}

/** aggregate fields of "CompletedQuests" */
export type CompletedQuests_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<CompletedQuests_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "CompletedQuests" */
export type CompletedQuests_Aggregate_Order_By = {
	readonly avg?: InputMaybe<CompletedQuests_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<CompletedQuests_Max_Order_By>
	readonly min?: InputMaybe<CompletedQuests_Min_Order_By>
	readonly stddev?: InputMaybe<CompletedQuests_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<CompletedQuests_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<CompletedQuests_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<CompletedQuests_Sum_Order_By>
	readonly var_pop?: InputMaybe<CompletedQuests_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<CompletedQuests_Var_Samp_Order_By>
	readonly variance?: InputMaybe<CompletedQuests_Variance_Order_By>
}

/** input type for inserting array relation for remote table "CompletedQuests" */
export type CompletedQuests_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<CompletedQuests_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<CompletedQuests_On_Conflict>
}

/** aggregate avg on columns */
export type CompletedQuests_Avg_Fields = {
	readonly __typename?: 'CompletedQuests_avg_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "CompletedQuests" */
export type CompletedQuests_Avg_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "CompletedQuests". All fields are combined with a logical 'AND'. */
export type CompletedQuests_Bool_Exp = {
	readonly Identity?: InputMaybe<Identities_Bool_Exp>
	readonly Quest?: InputMaybe<Quests_Bool_Exp>
	readonly _and?: InputMaybe<ReadonlyArray<CompletedQuests_Bool_Exp>>
	readonly _not?: InputMaybe<CompletedQuests_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<CompletedQuests_Bool_Exp>>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly guildId?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly identityId?: InputMaybe<Int_Comparison_Exp>
	readonly questId?: InputMaybe<Int_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "CompletedQuests" */
export enum CompletedQuests_Constraint {
	/** unique or primary key constraint on columns "id" */
	CompletedQuestsPkey = 'CompletedQuests_pkey',
}

/** input type for incrementing numeric columns in table "CompletedQuests" */
export type CompletedQuests_Inc_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly questId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "CompletedQuests" */
export type CompletedQuests_Insert_Input = {
	readonly Identity?: InputMaybe<Identities_Obj_Rel_Insert_Input>
	readonly Quest?: InputMaybe<Quests_Obj_Rel_Insert_Input>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly guildId?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly questId?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type CompletedQuests_Max_Fields = {
	readonly __typename?: 'CompletedQuests_max_fields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly guildId?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly questId?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "CompletedQuests" */
export type CompletedQuests_Max_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly guildId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type CompletedQuests_Min_Fields = {
	readonly __typename?: 'CompletedQuests_min_fields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly guildId?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly questId?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "CompletedQuests" */
export type CompletedQuests_Min_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly guildId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** response of any mutation on the table "CompletedQuests" */
export type CompletedQuests_Mutation_Response = {
	readonly __typename?: 'CompletedQuests_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<CompletedQuests>
}

/** on_conflict condition type for table "CompletedQuests" */
export type CompletedQuests_On_Conflict = {
	readonly constraint: CompletedQuests_Constraint
	readonly update_columns?: ReadonlyArray<CompletedQuests_Update_Column>
	readonly where?: InputMaybe<CompletedQuests_Bool_Exp>
}

/** Ordering options when selecting data from "CompletedQuests". */
export type CompletedQuests_Order_By = {
	readonly Identity?: InputMaybe<Identities_Order_By>
	readonly Quest?: InputMaybe<Quests_Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly guildId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: CompletedQuests */
export type CompletedQuests_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "CompletedQuests" */
export enum CompletedQuests_Select_Column {
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
export type CompletedQuests_Set_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly guildId?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly questId?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type CompletedQuests_Stddev_Fields = {
	readonly __typename?: 'CompletedQuests_stddev_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "CompletedQuests" */
export type CompletedQuests_Stddev_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type CompletedQuests_Stddev_Pop_Fields = {
	readonly __typename?: 'CompletedQuests_stddev_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "CompletedQuests" */
export type CompletedQuests_Stddev_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type CompletedQuests_Stddev_Samp_Fields = {
	readonly __typename?: 'CompletedQuests_stddev_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "CompletedQuests" */
export type CompletedQuests_Stddev_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "CompletedQuests" */
export type CompletedQuests_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: CompletedQuests_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type CompletedQuests_Stream_Cursor_Value_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly guildId?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly questId?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type CompletedQuests_Sum_Fields = {
	readonly __typename?: 'CompletedQuests_sum_fields'
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly questId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "CompletedQuests" */
export type CompletedQuests_Sum_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** update columns of table "CompletedQuests" */
export enum CompletedQuests_Update_Column {
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

export type CompletedQuests_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<CompletedQuests_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<CompletedQuests_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: CompletedQuests_Bool_Exp
}

/** aggregate var_pop on columns */
export type CompletedQuests_Var_Pop_Fields = {
	readonly __typename?: 'CompletedQuests_var_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "CompletedQuests" */
export type CompletedQuests_Var_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type CompletedQuests_Var_Samp_Fields = {
	readonly __typename?: 'CompletedQuests_var_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "CompletedQuests" */
export type CompletedQuests_Var_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type CompletedQuests_Variance_Fields = {
	readonly __typename?: 'CompletedQuests_variance_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "CompletedQuests" */
export type CompletedQuests_Variance_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
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
export type DiscordActivities_Aggregate = {
	readonly __typename?: 'DiscordActivities_aggregate'
	readonly aggregate?: Maybe<DiscordActivities_Aggregate_Fields>
	readonly nodes: ReadonlyArray<DiscordActivities>
}

/** aggregate fields of "DiscordActivities" */
export type DiscordActivities_Aggregate_Fields = {
	readonly __typename?: 'DiscordActivities_aggregate_fields'
	readonly avg?: Maybe<DiscordActivities_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<DiscordActivities_Max_Fields>
	readonly min?: Maybe<DiscordActivities_Min_Fields>
	readonly stddev?: Maybe<DiscordActivities_Stddev_Fields>
	readonly stddev_pop?: Maybe<DiscordActivities_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<DiscordActivities_Stddev_Samp_Fields>
	readonly sum?: Maybe<DiscordActivities_Sum_Fields>
	readonly var_pop?: Maybe<DiscordActivities_Var_Pop_Fields>
	readonly var_samp?: Maybe<DiscordActivities_Var_Samp_Fields>
	readonly variance?: Maybe<DiscordActivities_Variance_Fields>
}

/** aggregate fields of "DiscordActivities" */
export type DiscordActivities_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<DiscordActivities_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type DiscordActivities_Avg_Fields = {
	readonly __typename?: 'DiscordActivities_avg_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "DiscordActivities". All fields are combined with a logical 'AND'. */
export type DiscordActivities_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<DiscordActivities_Bool_Exp>>
	readonly _not?: InputMaybe<DiscordActivities_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<DiscordActivities_Bool_Exp>>
	readonly activityId?: InputMaybe<String_Comparison_Exp>
	readonly activityType?: InputMaybe<Enum_DiscordActivities_ActivityType_Comparison_Exp>
	readonly channelId?: InputMaybe<String_Comparison_Exp>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly discordId?: InputMaybe<String_Comparison_Exp>
	readonly guildId?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "DiscordActivities" */
export enum DiscordActivities_Constraint {
	/** unique or primary key constraint on columns "id" */
	DiscordActivitiesPkey = 'DiscordActivities_pkey',
}

/** input type for incrementing numeric columns in table "DiscordActivities" */
export type DiscordActivities_Inc_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "DiscordActivities" */
export type DiscordActivities_Insert_Input = {
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
export type DiscordActivities_Max_Fields = {
	readonly __typename?: 'DiscordActivities_max_fields'
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
export type DiscordActivities_Min_Fields = {
	readonly __typename?: 'DiscordActivities_min_fields'
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
export type DiscordActivities_Mutation_Response = {
	readonly __typename?: 'DiscordActivities_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<DiscordActivities>
}

/** on_conflict condition type for table "DiscordActivities" */
export type DiscordActivities_On_Conflict = {
	readonly constraint: DiscordActivities_Constraint
	readonly update_columns?: ReadonlyArray<DiscordActivities_Update_Column>
	readonly where?: InputMaybe<DiscordActivities_Bool_Exp>
}

/** Ordering options when selecting data from "DiscordActivities". */
export type DiscordActivities_Order_By = {
	readonly activityId?: InputMaybe<Order_By>
	readonly activityType?: InputMaybe<Order_By>
	readonly channelId?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly discordId?: InputMaybe<Order_By>
	readonly guildId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: DiscordActivities */
export type DiscordActivities_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "DiscordActivities" */
export enum DiscordActivities_Select_Column {
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
export type DiscordActivities_Set_Input = {
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
export type DiscordActivities_Stddev_Fields = {
	readonly __typename?: 'DiscordActivities_stddev_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type DiscordActivities_Stddev_Pop_Fields = {
	readonly __typename?: 'DiscordActivities_stddev_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type DiscordActivities_Stddev_Samp_Fields = {
	readonly __typename?: 'DiscordActivities_stddev_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "DiscordActivities" */
export type DiscordActivities_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: DiscordActivities_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type DiscordActivities_Stream_Cursor_Value_Input = {
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
export type DiscordActivities_Sum_Fields = {
	readonly __typename?: 'DiscordActivities_sum_fields'
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "DiscordActivities" */
export enum DiscordActivities_Update_Column {
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

export type DiscordActivities_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<DiscordActivities_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<DiscordActivities_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: DiscordActivities_Bool_Exp
}

/** aggregate var_pop on columns */
export type DiscordActivities_Var_Pop_Fields = {
	readonly __typename?: 'DiscordActivities_var_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type DiscordActivities_Var_Samp_Fields = {
	readonly __typename?: 'DiscordActivities_var_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type DiscordActivities_Variance_Fields = {
	readonly __typename?: 'DiscordActivities_variance_fields'
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
export type GenericActivities_Aggregate = {
	readonly __typename?: 'GenericActivities_aggregate'
	readonly aggregate?: Maybe<GenericActivities_Aggregate_Fields>
	readonly nodes: ReadonlyArray<GenericActivities>
}

/** aggregate fields of "GenericActivities" */
export type GenericActivities_Aggregate_Fields = {
	readonly __typename?: 'GenericActivities_aggregate_fields'
	readonly avg?: Maybe<GenericActivities_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<GenericActivities_Max_Fields>
	readonly min?: Maybe<GenericActivities_Min_Fields>
	readonly stddev?: Maybe<GenericActivities_Stddev_Fields>
	readonly stddev_pop?: Maybe<GenericActivities_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<GenericActivities_Stddev_Samp_Fields>
	readonly sum?: Maybe<GenericActivities_Sum_Fields>
	readonly var_pop?: Maybe<GenericActivities_Var_Pop_Fields>
	readonly var_samp?: Maybe<GenericActivities_Var_Samp_Fields>
	readonly variance?: Maybe<GenericActivities_Variance_Fields>
}

/** aggregate fields of "GenericActivities" */
export type GenericActivities_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<GenericActivities_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type GenericActivities_Avg_Fields = {
	readonly __typename?: 'GenericActivities_avg_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "GenericActivities". All fields are combined with a logical 'AND'. */
export type GenericActivities_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<GenericActivities_Bool_Exp>>
	readonly _not?: InputMaybe<GenericActivities_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<GenericActivities_Bool_Exp>>
	readonly activityType?: InputMaybe<String_Comparison_Exp>
	readonly authorId?: InputMaybe<String_Comparison_Exp>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly extra?: InputMaybe<Json_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly source?: InputMaybe<Enum_GenericActivities_Source_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "GenericActivities" */
export enum GenericActivities_Constraint {
	/** unique or primary key constraint on columns "id" */
	GenericActivitiesPkey = 'GenericActivities_pkey',
}

/** input type for incrementing numeric columns in table "GenericActivities" */
export type GenericActivities_Inc_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "GenericActivities" */
export type GenericActivities_Insert_Input = {
	readonly activityType?: InputMaybe<Scalars['String']>
	readonly authorId?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly extra?: InputMaybe<Scalars['json']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly source?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type GenericActivities_Max_Fields = {
	readonly __typename?: 'GenericActivities_max_fields'
	readonly activityType?: Maybe<Scalars['String']>
	readonly authorId?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly source?: Maybe<Scalars['enum_GenericActivities_source']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type GenericActivities_Min_Fields = {
	readonly __typename?: 'GenericActivities_min_fields'
	readonly activityType?: Maybe<Scalars['String']>
	readonly authorId?: Maybe<Scalars['String']>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly source?: Maybe<Scalars['enum_GenericActivities_source']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "GenericActivities" */
export type GenericActivities_Mutation_Response = {
	readonly __typename?: 'GenericActivities_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<GenericActivities>
}

/** on_conflict condition type for table "GenericActivities" */
export type GenericActivities_On_Conflict = {
	readonly constraint: GenericActivities_Constraint
	readonly update_columns?: ReadonlyArray<GenericActivities_Update_Column>
	readonly where?: InputMaybe<GenericActivities_Bool_Exp>
}

/** Ordering options when selecting data from "GenericActivities". */
export type GenericActivities_Order_By = {
	readonly activityType?: InputMaybe<Order_By>
	readonly authorId?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly extra?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly source?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: GenericActivities */
export type GenericActivities_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "GenericActivities" */
export enum GenericActivities_Select_Column {
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
export type GenericActivities_Set_Input = {
	readonly activityType?: InputMaybe<Scalars['String']>
	readonly authorId?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly extra?: InputMaybe<Scalars['json']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly source?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type GenericActivities_Stddev_Fields = {
	readonly __typename?: 'GenericActivities_stddev_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type GenericActivities_Stddev_Pop_Fields = {
	readonly __typename?: 'GenericActivities_stddev_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type GenericActivities_Stddev_Samp_Fields = {
	readonly __typename?: 'GenericActivities_stddev_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "GenericActivities" */
export type GenericActivities_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: GenericActivities_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type GenericActivities_Stream_Cursor_Value_Input = {
	readonly activityType?: InputMaybe<Scalars['String']>
	readonly authorId?: InputMaybe<Scalars['String']>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly extra?: InputMaybe<Scalars['json']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly source?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type GenericActivities_Sum_Fields = {
	readonly __typename?: 'GenericActivities_sum_fields'
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "GenericActivities" */
export enum GenericActivities_Update_Column {
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

export type GenericActivities_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<GenericActivities_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<GenericActivities_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: GenericActivities_Bool_Exp
}

/** aggregate var_pop on columns */
export type GenericActivities_Var_Pop_Fields = {
	readonly __typename?: 'GenericActivities_var_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type GenericActivities_Var_Samp_Fields = {
	readonly __typename?: 'GenericActivities_var_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type GenericActivities_Variance_Fields = {
	readonly __typename?: 'GenericActivities_variance_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "Identities" */
export type Identities = {
	readonly __typename?: 'Identities'
	/** An array relationship */
	readonly BattlepassParticipants: ReadonlyArray<BattlepassParticipants>
	/** An aggregate relationship */
	readonly BattlepassParticipants_aggregate: BattlepassParticipants_Aggregate
	/** An array relationship */
	readonly CompletedQuests: ReadonlyArray<CompletedQuests>
	/** An aggregate relationship */
	readonly CompletedQuests_aggregate: CompletedQuests_Aggregate
	/** An array relationship */
	readonly QuestProgresses: ReadonlyArray<QuestProgresses>
	/** An aggregate relationship */
	readonly QuestProgresses_aggregate: QuestProgresses_Aggregate
	/** An array relationship */
	readonly UserTokens: ReadonlyArray<UserTokens>
	/** An aggregate relationship */
	readonly UserTokens_aggregate: UserTokens_Aggregate
	readonly address?: Maybe<Scalars['bpchar']>
	readonly cid?: Maybe<Scalars['String']>
	readonly createdAt: Scalars['timestamptz']
	readonly discord?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly epicGames?: Maybe<Scalars['String']>
	readonly id: Scalars['Int']
	readonly name?: Maybe<Scalars['String']>
	readonly twitter?: Maybe<Scalars['String']>
	readonly updatedAt: Scalars['timestamptz']
	readonly uuid: Scalars['uuid']
}

/** columns and relationships of "Identities" */
export type IdentitiesBattlepassParticipantsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassParticipants_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassParticipants_Order_By>>
	where?: InputMaybe<BattlepassParticipants_Bool_Exp>
}

/** columns and relationships of "Identities" */
export type IdentitiesBattlepassParticipants_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassParticipants_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassParticipants_Order_By>>
	where?: InputMaybe<BattlepassParticipants_Bool_Exp>
}

/** columns and relationships of "Identities" */
export type IdentitiesCompletedQuestsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<CompletedQuests_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<CompletedQuests_Order_By>>
	where?: InputMaybe<CompletedQuests_Bool_Exp>
}

/** columns and relationships of "Identities" */
export type IdentitiesCompletedQuests_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<CompletedQuests_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<CompletedQuests_Order_By>>
	where?: InputMaybe<CompletedQuests_Bool_Exp>
}

/** columns and relationships of "Identities" */
export type IdentitiesQuestProgressesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<QuestProgresses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<QuestProgresses_Order_By>>
	where?: InputMaybe<QuestProgresses_Bool_Exp>
}

/** columns and relationships of "Identities" */
export type IdentitiesQuestProgresses_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<QuestProgresses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<QuestProgresses_Order_By>>
	where?: InputMaybe<QuestProgresses_Bool_Exp>
}

/** columns and relationships of "Identities" */
export type IdentitiesUserTokensArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<UserTokens_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<UserTokens_Order_By>>
	where?: InputMaybe<UserTokens_Bool_Exp>
}

/** columns and relationships of "Identities" */
export type IdentitiesUserTokens_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<UserTokens_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<UserTokens_Order_By>>
	where?: InputMaybe<UserTokens_Bool_Exp>
}

/** aggregated selection of "Identities" */
export type Identities_Aggregate = {
	readonly __typename?: 'Identities_aggregate'
	readonly aggregate?: Maybe<Identities_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Identities>
}

/** aggregate fields of "Identities" */
export type Identities_Aggregate_Fields = {
	readonly __typename?: 'Identities_aggregate_fields'
	readonly avg?: Maybe<Identities_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Identities_Max_Fields>
	readonly min?: Maybe<Identities_Min_Fields>
	readonly stddev?: Maybe<Identities_Stddev_Fields>
	readonly stddev_pop?: Maybe<Identities_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Identities_Stddev_Samp_Fields>
	readonly sum?: Maybe<Identities_Sum_Fields>
	readonly var_pop?: Maybe<Identities_Var_Pop_Fields>
	readonly var_samp?: Maybe<Identities_Var_Samp_Fields>
	readonly variance?: Maybe<Identities_Variance_Fields>
}

/** aggregate fields of "Identities" */
export type Identities_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Identities_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Identities_Avg_Fields = {
	readonly __typename?: 'Identities_avg_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "Identities". All fields are combined with a logical 'AND'. */
export type Identities_Bool_Exp = {
	readonly BattlepassParticipants?: InputMaybe<BattlepassParticipants_Bool_Exp>
	readonly BattlepassParticipants_aggregate?: InputMaybe<BattlepassParticipants_Aggregate_Bool_Exp>
	readonly CompletedQuests?: InputMaybe<CompletedQuests_Bool_Exp>
	readonly CompletedQuests_aggregate?: InputMaybe<CompletedQuests_Aggregate_Bool_Exp>
	readonly QuestProgresses?: InputMaybe<QuestProgresses_Bool_Exp>
	readonly QuestProgresses_aggregate?: InputMaybe<QuestProgresses_Aggregate_Bool_Exp>
	readonly UserTokens?: InputMaybe<UserTokens_Bool_Exp>
	readonly UserTokens_aggregate?: InputMaybe<UserTokens_Aggregate_Bool_Exp>
	readonly _and?: InputMaybe<ReadonlyArray<Identities_Bool_Exp>>
	readonly _not?: InputMaybe<Identities_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Identities_Bool_Exp>>
	readonly address?: InputMaybe<Bpchar_Comparison_Exp>
	readonly cid?: InputMaybe<String_Comparison_Exp>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly discord?: InputMaybe<String_Comparison_Exp>
	readonly email?: InputMaybe<String_Comparison_Exp>
	readonly epicGames?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly twitter?: InputMaybe<String_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly uuid?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "Identities" */
export enum Identities_Constraint {
	/** unique or primary key constraint on columns "id" */
	IdentitiesPkey = 'Identities_pkey',
}

/** input type for incrementing numeric columns in table "Identities" */
export type Identities_Inc_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "Identities" */
export type Identities_Insert_Input = {
	readonly BattlepassParticipants?: InputMaybe<BattlepassParticipants_Arr_Rel_Insert_Input>
	readonly CompletedQuests?: InputMaybe<CompletedQuests_Arr_Rel_Insert_Input>
	readonly QuestProgresses?: InputMaybe<QuestProgresses_Arr_Rel_Insert_Input>
	readonly UserTokens?: InputMaybe<UserTokens_Arr_Rel_Insert_Input>
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

/** aggregate max on columns */
export type Identities_Max_Fields = {
	readonly __typename?: 'Identities_max_fields'
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
export type Identities_Min_Fields = {
	readonly __typename?: 'Identities_min_fields'
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
export type Identities_Mutation_Response = {
	readonly __typename?: 'Identities_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Identities>
}

/** input type for inserting object relation for remote table "Identities" */
export type Identities_Obj_Rel_Insert_Input = {
	readonly data: Identities_Insert_Input
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Identities_On_Conflict>
}

/** on_conflict condition type for table "Identities" */
export type Identities_On_Conflict = {
	readonly constraint: Identities_Constraint
	readonly update_columns?: ReadonlyArray<Identities_Update_Column>
	readonly where?: InputMaybe<Identities_Bool_Exp>
}

/** Ordering options when selecting data from "Identities". */
export type Identities_Order_By = {
	readonly BattlepassParticipants_aggregate?: InputMaybe<BattlepassParticipants_Aggregate_Order_By>
	readonly CompletedQuests_aggregate?: InputMaybe<CompletedQuests_Aggregate_Order_By>
	readonly QuestProgresses_aggregate?: InputMaybe<QuestProgresses_Aggregate_Order_By>
	readonly UserTokens_aggregate?: InputMaybe<UserTokens_Aggregate_Order_By>
	readonly address?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly discord?: InputMaybe<Order_By>
	readonly email?: InputMaybe<Order_By>
	readonly epicGames?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly twitter?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
	readonly uuid?: InputMaybe<Order_By>
}

/** primary key columns input for table: Identities */
export type Identities_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "Identities" */
export enum Identities_Select_Column {
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
export type Identities_Set_Input = {
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
export type Identities_Stddev_Fields = {
	readonly __typename?: 'Identities_stddev_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Identities_Stddev_Pop_Fields = {
	readonly __typename?: 'Identities_stddev_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Identities_Stddev_Samp_Fields = {
	readonly __typename?: 'Identities_stddev_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "Identities" */
export type Identities_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Identities_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Identities_Stream_Cursor_Value_Input = {
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
export type Identities_Sum_Fields = {
	readonly __typename?: 'Identities_sum_fields'
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "Identities" */
export enum Identities_Update_Column {
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

export type Identities_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Identities_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Identities_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Identities_Bool_Exp
}

/** aggregate var_pop on columns */
export type Identities_Var_Pop_Fields = {
	readonly __typename?: 'Identities_var_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Identities_Var_Samp_Fields = {
	readonly __typename?: 'Identities_var_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Identities_Variance_Fields = {
	readonly __typename?: 'Identities_variance_fields'
	readonly id?: Maybe<Scalars['Float']>
}

export type IdentityFilter = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly discord?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly twitter?: InputMaybe<Scalars['String']>
	readonly uuid?: InputMaybe<Scalars['String']>
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

export type Level = {
	readonly level: Scalars['Int']
	readonly name?: InputMaybe<Scalars['String']>
	readonly points: Scalars['Int']
}

export type LevelsFilter = {
	readonly battlepassChainId?: InputMaybe<Scalars['String']>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
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

export type MemberFilter = {
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly identityUuid?: InputMaybe<Scalars['String']>
	readonly premium?: InputMaybe<Scalars['Boolean']>
}

export enum MemberStatus {
	Free = 'free',
	Pending = 'pending',
	PendingPayment = 'pendingPayment',
	Synced = 'synced',
}

export type OrganizationFeatures = {
	readonly ORGANIZATION_PAGE_SHOW_FILTERS: Scalars['Boolean']
	readonly ORGANIZATION_PAGE_SHOW_SEARCH: Scalars['Boolean']
	readonly ORGANIZATION_PAGE_SHOW_SORT: Scalars['Boolean']
}

export type Payment = {
	readonly __typename?: 'Payment'
	readonly battlepass: Scalars['String']
	readonly identityUuid: Scalars['String']
	readonly paymentToken: Scalars['String']
	readonly status: MemberStatus
}

/** columns and relationships of "Payments" */
export type Payments = {
	readonly __typename?: 'Payments'
	/** An object relationship */
	readonly BattlepassParticipant?: Maybe<BattlepassParticipants>
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id: Scalars['Int']
	readonly participantId?: Maybe<Scalars['Int']>
	readonly paymentToken: Scalars['String']
	readonly updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "Payments" */
export type Payments_Aggregate = {
	readonly __typename?: 'Payments_aggregate'
	readonly aggregate?: Maybe<Payments_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Payments>
}

export type Payments_Aggregate_Bool_Exp = {
	readonly count?: InputMaybe<Payments_Aggregate_Bool_Exp_Count>
}

export type Payments_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<Payments_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Payments_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "Payments" */
export type Payments_Aggregate_Fields = {
	readonly __typename?: 'Payments_aggregate_fields'
	readonly avg?: Maybe<Payments_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Payments_Max_Fields>
	readonly min?: Maybe<Payments_Min_Fields>
	readonly stddev?: Maybe<Payments_Stddev_Fields>
	readonly stddev_pop?: Maybe<Payments_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Payments_Stddev_Samp_Fields>
	readonly sum?: Maybe<Payments_Sum_Fields>
	readonly var_pop?: Maybe<Payments_Var_Pop_Fields>
	readonly var_samp?: Maybe<Payments_Var_Samp_Fields>
	readonly variance?: Maybe<Payments_Variance_Fields>
}

/** aggregate fields of "Payments" */
export type Payments_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Payments_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "Payments" */
export type Payments_Aggregate_Order_By = {
	readonly avg?: InputMaybe<Payments_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Payments_Max_Order_By>
	readonly min?: InputMaybe<Payments_Min_Order_By>
	readonly stddev?: InputMaybe<Payments_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<Payments_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<Payments_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<Payments_Sum_Order_By>
	readonly var_pop?: InputMaybe<Payments_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<Payments_Var_Samp_Order_By>
	readonly variance?: InputMaybe<Payments_Variance_Order_By>
}

/** input type for inserting array relation for remote table "Payments" */
export type Payments_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<Payments_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Payments_On_Conflict>
}

/** aggregate avg on columns */
export type Payments_Avg_Fields = {
	readonly __typename?: 'Payments_avg_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "Payments" */
export type Payments_Avg_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "Payments". All fields are combined with a logical 'AND'. */
export type Payments_Bool_Exp = {
	readonly BattlepassParticipant?: InputMaybe<BattlepassParticipants_Bool_Exp>
	readonly _and?: InputMaybe<ReadonlyArray<Payments_Bool_Exp>>
	readonly _not?: InputMaybe<Payments_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Payments_Bool_Exp>>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly participantId?: InputMaybe<Int_Comparison_Exp>
	readonly paymentToken?: InputMaybe<String_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "Payments" */
export enum Payments_Constraint {
	/** unique or primary key constraint on columns "id" */
	PaymentsPkey = 'Payments_pkey',
}

/** input type for incrementing numeric columns in table "Payments" */
export type Payments_Inc_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "Payments" */
export type Payments_Insert_Input = {
	readonly BattlepassParticipant?: InputMaybe<BattlepassParticipants_Obj_Rel_Insert_Input>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
	readonly paymentToken?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Payments_Max_Fields = {
	readonly __typename?: 'Payments_max_fields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly participantId?: Maybe<Scalars['Int']>
	readonly paymentToken?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "Payments" */
export type Payments_Max_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly paymentToken?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Payments_Min_Fields = {
	readonly __typename?: 'Payments_min_fields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly participantId?: Maybe<Scalars['Int']>
	readonly paymentToken?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "Payments" */
export type Payments_Min_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly paymentToken?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** response of any mutation on the table "Payments" */
export type Payments_Mutation_Response = {
	readonly __typename?: 'Payments_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Payments>
}

/** on_conflict condition type for table "Payments" */
export type Payments_On_Conflict = {
	readonly constraint: Payments_Constraint
	readonly update_columns?: ReadonlyArray<Payments_Update_Column>
	readonly where?: InputMaybe<Payments_Bool_Exp>
}

/** Ordering options when selecting data from "Payments". */
export type Payments_Order_By = {
	readonly BattlepassParticipant?: InputMaybe<BattlepassParticipants_Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly paymentToken?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: Payments */
export type Payments_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "Payments" */
export enum Payments_Select_Column {
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
export type Payments_Set_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
	readonly paymentToken?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Payments_Stddev_Fields = {
	readonly __typename?: 'Payments_stddev_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "Payments" */
export type Payments_Stddev_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Payments_Stddev_Pop_Fields = {
	readonly __typename?: 'Payments_stddev_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "Payments" */
export type Payments_Stddev_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Payments_Stddev_Samp_Fields = {
	readonly __typename?: 'Payments_stddev_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "Payments" */
export type Payments_Stddev_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "Payments" */
export type Payments_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Payments_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Payments_Stream_Cursor_Value_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
	readonly paymentToken?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type Payments_Sum_Fields = {
	readonly __typename?: 'Payments_sum_fields'
	readonly id?: Maybe<Scalars['Int']>
	readonly participantId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "Payments" */
export type Payments_Sum_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
}

/** update columns of table "Payments" */
export enum Payments_Update_Column {
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

export type Payments_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Payments_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Payments_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Payments_Bool_Exp
}

/** aggregate var_pop on columns */
export type Payments_Var_Pop_Fields = {
	readonly __typename?: 'Payments_var_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "Payments" */
export type Payments_Var_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Payments_Var_Samp_Fields = {
	readonly __typename?: 'Payments_var_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "Payments" */
export type Payments_Var_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Payments_Variance_Fields = {
	readonly __typename?: 'Payments_variance_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "Payments" */
export type Payments_Variance_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
}

export type PointsFilter = {
	readonly battlepassChainId?: InputMaybe<Scalars['String']>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly identityUuid?: InputMaybe<Scalars['String']>
}

export type ProgressFilter = {
	readonly battlepassChainId?: InputMaybe<Scalars['String']>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly identityUuid?: InputMaybe<Scalars['String']>
	readonly questId?: InputMaybe<Scalars['Int']>
}

export type ProposalFeatures = {
	readonly CREATE_GENERAL_PROPOSAL: Scalars['Boolean']
	readonly CREATE_PROPOSAL: Scalars['Boolean']
	readonly CREATE_PROPOSAL_RELATIVE_MAJORITY: Scalars['Boolean']
	readonly CREATE_PROPOSAL_SIMPLE_MAJORITY: Scalars['Boolean']
	readonly CREATE_SPENDING_PROPOSAL: Scalars['Boolean']
	readonly CREATE_WITHDRAW_PROPOSAL: Scalars['Boolean']
}

export type QuestFilter = {
	readonly battlepassChainId?: InputMaybe<Scalars['String']>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly repeat?: InputMaybe<Scalars['Boolean']>
	readonly source?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<ActivityType>
}

/** columns and relationships of "QuestProgresses" */
export type QuestProgresses = {
	readonly __typename?: 'QuestProgresses'
	/** An object relationship */
	readonly Identity?: Maybe<Identities>
	/** An object relationship */
	readonly Quest?: Maybe<Quests>
	readonly createdAt: Scalars['timestamptz']
	readonly id: Scalars['Int']
	readonly identityId?: Maybe<Scalars['Int']>
	readonly progress: Scalars['float8']
	readonly questId?: Maybe<Scalars['Int']>
	readonly updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "QuestProgresses" */
export type QuestProgresses_Aggregate = {
	readonly __typename?: 'QuestProgresses_aggregate'
	readonly aggregate?: Maybe<QuestProgresses_Aggregate_Fields>
	readonly nodes: ReadonlyArray<QuestProgresses>
}

export type QuestProgresses_Aggregate_Bool_Exp = {
	readonly avg?: InputMaybe<QuestProgresses_Aggregate_Bool_Exp_Avg>
	readonly corr?: InputMaybe<QuestProgresses_Aggregate_Bool_Exp_Corr>
	readonly count?: InputMaybe<QuestProgresses_Aggregate_Bool_Exp_Count>
	readonly covar_samp?: InputMaybe<QuestProgresses_Aggregate_Bool_Exp_Covar_Samp>
	readonly max?: InputMaybe<QuestProgresses_Aggregate_Bool_Exp_Max>
	readonly min?: InputMaybe<QuestProgresses_Aggregate_Bool_Exp_Min>
	readonly stddev_samp?: InputMaybe<QuestProgresses_Aggregate_Bool_Exp_Stddev_Samp>
	readonly sum?: InputMaybe<QuestProgresses_Aggregate_Bool_Exp_Sum>
	readonly var_samp?: InputMaybe<QuestProgresses_Aggregate_Bool_Exp_Var_Samp>
}

export type QuestProgresses_Aggregate_Bool_Exp_Avg = {
	readonly arguments: QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Avg_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgresses_Bool_Exp>
	readonly predicate: Float8_Comparison_Exp
}

export type QuestProgresses_Aggregate_Bool_Exp_Corr = {
	readonly arguments: QuestProgresses_Aggregate_Bool_Exp_Corr_Arguments
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgresses_Bool_Exp>
	readonly predicate: Float8_Comparison_Exp
}

export type QuestProgresses_Aggregate_Bool_Exp_Corr_Arguments = {
	readonly X: QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Corr_Arguments_Columns
	readonly Y: QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Corr_Arguments_Columns
}

export type QuestProgresses_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<QuestProgresses_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgresses_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

export type QuestProgresses_Aggregate_Bool_Exp_Covar_Samp = {
	readonly arguments: QuestProgresses_Aggregate_Bool_Exp_Covar_Samp_Arguments
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgresses_Bool_Exp>
	readonly predicate: Float8_Comparison_Exp
}

export type QuestProgresses_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
	readonly X: QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns
	readonly Y: QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns
}

export type QuestProgresses_Aggregate_Bool_Exp_Max = {
	readonly arguments: QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Max_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgresses_Bool_Exp>
	readonly predicate: Float8_Comparison_Exp
}

export type QuestProgresses_Aggregate_Bool_Exp_Min = {
	readonly arguments: QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Min_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgresses_Bool_Exp>
	readonly predicate: Float8_Comparison_Exp
}

export type QuestProgresses_Aggregate_Bool_Exp_Stddev_Samp = {
	readonly arguments: QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgresses_Bool_Exp>
	readonly predicate: Float8_Comparison_Exp
}

export type QuestProgresses_Aggregate_Bool_Exp_Sum = {
	readonly arguments: QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Sum_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgresses_Bool_Exp>
	readonly predicate: Float8_Comparison_Exp
}

export type QuestProgresses_Aggregate_Bool_Exp_Var_Samp = {
	readonly arguments: QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<QuestProgresses_Bool_Exp>
	readonly predicate: Float8_Comparison_Exp
}

/** aggregate fields of "QuestProgresses" */
export type QuestProgresses_Aggregate_Fields = {
	readonly __typename?: 'QuestProgresses_aggregate_fields'
	readonly avg?: Maybe<QuestProgresses_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<QuestProgresses_Max_Fields>
	readonly min?: Maybe<QuestProgresses_Min_Fields>
	readonly stddev?: Maybe<QuestProgresses_Stddev_Fields>
	readonly stddev_pop?: Maybe<QuestProgresses_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<QuestProgresses_Stddev_Samp_Fields>
	readonly sum?: Maybe<QuestProgresses_Sum_Fields>
	readonly var_pop?: Maybe<QuestProgresses_Var_Pop_Fields>
	readonly var_samp?: Maybe<QuestProgresses_Var_Samp_Fields>
	readonly variance?: Maybe<QuestProgresses_Variance_Fields>
}

/** aggregate fields of "QuestProgresses" */
export type QuestProgresses_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<QuestProgresses_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "QuestProgresses" */
export type QuestProgresses_Aggregate_Order_By = {
	readonly avg?: InputMaybe<QuestProgresses_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<QuestProgresses_Max_Order_By>
	readonly min?: InputMaybe<QuestProgresses_Min_Order_By>
	readonly stddev?: InputMaybe<QuestProgresses_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<QuestProgresses_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<QuestProgresses_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<QuestProgresses_Sum_Order_By>
	readonly var_pop?: InputMaybe<QuestProgresses_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<QuestProgresses_Var_Samp_Order_By>
	readonly variance?: InputMaybe<QuestProgresses_Variance_Order_By>
}

/** input type for inserting array relation for remote table "QuestProgresses" */
export type QuestProgresses_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<QuestProgresses_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<QuestProgresses_On_Conflict>
}

/** aggregate avg on columns */
export type QuestProgresses_Avg_Fields = {
	readonly __typename?: 'QuestProgresses_avg_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly progress?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "QuestProgresses" */
export type QuestProgresses_Avg_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "QuestProgresses". All fields are combined with a logical 'AND'. */
export type QuestProgresses_Bool_Exp = {
	readonly Identity?: InputMaybe<Identities_Bool_Exp>
	readonly Quest?: InputMaybe<Quests_Bool_Exp>
	readonly _and?: InputMaybe<ReadonlyArray<QuestProgresses_Bool_Exp>>
	readonly _not?: InputMaybe<QuestProgresses_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<QuestProgresses_Bool_Exp>>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly identityId?: InputMaybe<Int_Comparison_Exp>
	readonly progress?: InputMaybe<Float8_Comparison_Exp>
	readonly questId?: InputMaybe<Int_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "QuestProgresses" */
export enum QuestProgresses_Constraint {
	/** unique or primary key constraint on columns "id" */
	QuestProgressesPkey = 'QuestProgresses_pkey',
}

/** input type for incrementing numeric columns in table "QuestProgresses" */
export type QuestProgresses_Inc_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly progress?: InputMaybe<Scalars['float8']>
	readonly questId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "QuestProgresses" */
export type QuestProgresses_Insert_Input = {
	readonly Identity?: InputMaybe<Identities_Obj_Rel_Insert_Input>
	readonly Quest?: InputMaybe<Quests_Obj_Rel_Insert_Input>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly progress?: InputMaybe<Scalars['float8']>
	readonly questId?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type QuestProgresses_Max_Fields = {
	readonly __typename?: 'QuestProgresses_max_fields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly progress?: Maybe<Scalars['float8']>
	readonly questId?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "QuestProgresses" */
export type QuestProgresses_Max_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type QuestProgresses_Min_Fields = {
	readonly __typename?: 'QuestProgresses_min_fields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly progress?: Maybe<Scalars['float8']>
	readonly questId?: Maybe<Scalars['Int']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "QuestProgresses" */
export type QuestProgresses_Min_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** response of any mutation on the table "QuestProgresses" */
export type QuestProgresses_Mutation_Response = {
	readonly __typename?: 'QuestProgresses_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<QuestProgresses>
}

/** on_conflict condition type for table "QuestProgresses" */
export type QuestProgresses_On_Conflict = {
	readonly constraint: QuestProgresses_Constraint
	readonly update_columns?: ReadonlyArray<QuestProgresses_Update_Column>
	readonly where?: InputMaybe<QuestProgresses_Bool_Exp>
}

/** Ordering options when selecting data from "QuestProgresses". */
export type QuestProgresses_Order_By = {
	readonly Identity?: InputMaybe<Identities_Order_By>
	readonly Quest?: InputMaybe<Quests_Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: QuestProgresses */
export type QuestProgresses_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "QuestProgresses" */
export enum QuestProgresses_Select_Column {
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

/** select "QuestProgresses_aggregate_bool_exp_avg_arguments_columns" columns of table "QuestProgresses" */
export enum QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Avg_Arguments_Columns {
	/** column name */
	Progress = 'progress',
}

/** select "QuestProgresses_aggregate_bool_exp_corr_arguments_columns" columns of table "QuestProgresses" */
export enum QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Corr_Arguments_Columns {
	/** column name */
	Progress = 'progress',
}

/** select "QuestProgresses_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "QuestProgresses" */
export enum QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
	/** column name */
	Progress = 'progress',
}

/** select "QuestProgresses_aggregate_bool_exp_max_arguments_columns" columns of table "QuestProgresses" */
export enum QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Max_Arguments_Columns {
	/** column name */
	Progress = 'progress',
}

/** select "QuestProgresses_aggregate_bool_exp_min_arguments_columns" columns of table "QuestProgresses" */
export enum QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Min_Arguments_Columns {
	/** column name */
	Progress = 'progress',
}

/** select "QuestProgresses_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "QuestProgresses" */
export enum QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
	/** column name */
	Progress = 'progress',
}

/** select "QuestProgresses_aggregate_bool_exp_sum_arguments_columns" columns of table "QuestProgresses" */
export enum QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Sum_Arguments_Columns {
	/** column name */
	Progress = 'progress',
}

/** select "QuestProgresses_aggregate_bool_exp_var_samp_arguments_columns" columns of table "QuestProgresses" */
export enum QuestProgresses_Select_Column_QuestProgresses_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
	/** column name */
	Progress = 'progress',
}

/** input type for updating data in table "QuestProgresses" */
export type QuestProgresses_Set_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly progress?: InputMaybe<Scalars['float8']>
	readonly questId?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type QuestProgresses_Stddev_Fields = {
	readonly __typename?: 'QuestProgresses_stddev_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly progress?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "QuestProgresses" */
export type QuestProgresses_Stddev_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type QuestProgresses_Stddev_Pop_Fields = {
	readonly __typename?: 'QuestProgresses_stddev_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly progress?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "QuestProgresses" */
export type QuestProgresses_Stddev_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type QuestProgresses_Stddev_Samp_Fields = {
	readonly __typename?: 'QuestProgresses_stddev_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly progress?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "QuestProgresses" */
export type QuestProgresses_Stddev_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "QuestProgresses" */
export type QuestProgresses_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: QuestProgresses_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type QuestProgresses_Stream_Cursor_Value_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly progress?: InputMaybe<Scalars['float8']>
	readonly questId?: InputMaybe<Scalars['Int']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type QuestProgresses_Sum_Fields = {
	readonly __typename?: 'QuestProgresses_sum_fields'
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly progress?: Maybe<Scalars['float8']>
	readonly questId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "QuestProgresses" */
export type QuestProgresses_Sum_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** update columns of table "QuestProgresses" */
export enum QuestProgresses_Update_Column {
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

export type QuestProgresses_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<QuestProgresses_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<QuestProgresses_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: QuestProgresses_Bool_Exp
}

/** aggregate var_pop on columns */
export type QuestProgresses_Var_Pop_Fields = {
	readonly __typename?: 'QuestProgresses_var_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly progress?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "QuestProgresses" */
export type QuestProgresses_Var_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type QuestProgresses_Var_Samp_Fields = {
	readonly __typename?: 'QuestProgresses_var_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly progress?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "QuestProgresses" */
export type QuestProgresses_Var_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type QuestProgresses_Variance_Fields = {
	readonly __typename?: 'QuestProgresses_variance_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
	readonly progress?: Maybe<Scalars['Float']>
	readonly questId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "QuestProgresses" */
export type QuestProgresses_Variance_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** columns and relationships of "Quests" */
export type Quests = {
	readonly __typename?: 'Quests'
	/** An object relationship */
	readonly Battlepass?: Maybe<Battlepasses>
	/** An array relationship */
	readonly CompletedQuests: ReadonlyArray<CompletedQuests>
	/** An aggregate relationship */
	readonly CompletedQuests_aggregate: CompletedQuests_Aggregate
	/** An array relationship */
	readonly QuestProgresses: ReadonlyArray<QuestProgresses>
	/** An aggregate relationship */
	readonly QuestProgresses_aggregate: QuestProgresses_Aggregate
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly channelId?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
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
	readonly repeat?: Maybe<Scalars['Boolean']>
	readonly source?: Maybe<Scalars['enum_Quests_source']>
	readonly twitterId?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['enum_Quests_type']>
	readonly updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "Quests" */
export type QuestsCompletedQuestsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<CompletedQuests_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<CompletedQuests_Order_By>>
	where?: InputMaybe<CompletedQuests_Bool_Exp>
}

/** columns and relationships of "Quests" */
export type QuestsCompletedQuests_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<CompletedQuests_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<CompletedQuests_Order_By>>
	where?: InputMaybe<CompletedQuests_Bool_Exp>
}

/** columns and relationships of "Quests" */
export type QuestsQuestProgressesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<QuestProgresses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<QuestProgresses_Order_By>>
	where?: InputMaybe<QuestProgresses_Bool_Exp>
}

/** columns and relationships of "Quests" */
export type QuestsQuestProgresses_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<QuestProgresses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<QuestProgresses_Order_By>>
	where?: InputMaybe<QuestProgresses_Bool_Exp>
}

/** aggregated selection of "Quests" */
export type Quests_Aggregate = {
	readonly __typename?: 'Quests_aggregate'
	readonly aggregate?: Maybe<Quests_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Quests>
}

export type Quests_Aggregate_Bool_Exp = {
	readonly bool_and?: InputMaybe<Quests_Aggregate_Bool_Exp_Bool_And>
	readonly bool_or?: InputMaybe<Quests_Aggregate_Bool_Exp_Bool_Or>
	readonly count?: InputMaybe<Quests_Aggregate_Bool_Exp_Count>
}

export type Quests_Aggregate_Bool_Exp_Bool_And = {
	readonly arguments: Quests_Select_Column_Quests_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Quests_Bool_Exp>
	readonly predicate: Boolean_Comparison_Exp
}

export type Quests_Aggregate_Bool_Exp_Bool_Or = {
	readonly arguments: Quests_Select_Column_Quests_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Quests_Bool_Exp>
	readonly predicate: Boolean_Comparison_Exp
}

export type Quests_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<Quests_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Quests_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "Quests" */
export type Quests_Aggregate_Fields = {
	readonly __typename?: 'Quests_aggregate_fields'
	readonly avg?: Maybe<Quests_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Quests_Max_Fields>
	readonly min?: Maybe<Quests_Min_Fields>
	readonly stddev?: Maybe<Quests_Stddev_Fields>
	readonly stddev_pop?: Maybe<Quests_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Quests_Stddev_Samp_Fields>
	readonly sum?: Maybe<Quests_Sum_Fields>
	readonly var_pop?: Maybe<Quests_Var_Pop_Fields>
	readonly var_samp?: Maybe<Quests_Var_Samp_Fields>
	readonly variance?: Maybe<Quests_Variance_Fields>
}

/** aggregate fields of "Quests" */
export type Quests_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Quests_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "Quests" */
export type Quests_Aggregate_Order_By = {
	readonly avg?: InputMaybe<Quests_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Quests_Max_Order_By>
	readonly min?: InputMaybe<Quests_Min_Order_By>
	readonly stddev?: InputMaybe<Quests_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<Quests_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<Quests_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<Quests_Sum_Order_By>
	readonly var_pop?: InputMaybe<Quests_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<Quests_Var_Samp_Order_By>
	readonly variance?: InputMaybe<Quests_Variance_Order_By>
}

/** input type for inserting array relation for remote table "Quests" */
export type Quests_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<Quests_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Quests_On_Conflict>
}

/** aggregate avg on columns */
export type Quests_Avg_Fields = {
	readonly __typename?: 'Quests_avg_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
	readonly maxDaily?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly quantity?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "Quests" */
export type Quests_Avg_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly maxDaily?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly quantity?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "Quests". All fields are combined with a logical 'AND'. */
export type Quests_Bool_Exp = {
	readonly Battlepass?: InputMaybe<Battlepasses_Bool_Exp>
	readonly CompletedQuests?: InputMaybe<CompletedQuests_Bool_Exp>
	readonly CompletedQuests_aggregate?: InputMaybe<CompletedQuests_Aggregate_Bool_Exp>
	readonly QuestProgresses?: InputMaybe<QuestProgresses_Bool_Exp>
	readonly QuestProgresses_aggregate?: InputMaybe<QuestProgresses_Aggregate_Bool_Exp>
	readonly _and?: InputMaybe<ReadonlyArray<Quests_Bool_Exp>>
	readonly _not?: InputMaybe<Quests_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Quests_Bool_Exp>>
	readonly battlepassId?: InputMaybe<Int_Comparison_Exp>
	readonly channelId?: InputMaybe<String_Comparison_Exp>
	readonly cid?: InputMaybe<String_Comparison_Exp>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly guildId?: InputMaybe<String_Comparison_Exp>
	readonly hashtag?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly link?: InputMaybe<String_Comparison_Exp>
	readonly max?: InputMaybe<Int_Comparison_Exp>
	readonly maxDaily?: InputMaybe<Int_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly points?: InputMaybe<Int_Comparison_Exp>
	readonly quantity?: InputMaybe<Int_Comparison_Exp>
	readonly repeat?: InputMaybe<Boolean_Comparison_Exp>
	readonly source?: InputMaybe<Enum_Quests_Source_Comparison_Exp>
	readonly twitterId?: InputMaybe<String_Comparison_Exp>
	readonly type?: InputMaybe<Enum_Quests_Type_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "Quests" */
export enum Quests_Constraint {
	/** unique or primary key constraint on columns "id" */
	QuestsPkey = 'Quests_pkey',
}

/** input type for incrementing numeric columns in table "Quests" */
export type Quests_Inc_Input = {
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly max?: InputMaybe<Scalars['Int']>
	readonly maxDaily?: InputMaybe<Scalars['Int']>
	readonly points?: InputMaybe<Scalars['Int']>
	readonly quantity?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "Quests" */
export type Quests_Insert_Input = {
	readonly Battlepass?: InputMaybe<Battlepasses_Obj_Rel_Insert_Input>
	readonly CompletedQuests?: InputMaybe<CompletedQuests_Arr_Rel_Insert_Input>
	readonly QuestProgresses?: InputMaybe<QuestProgresses_Arr_Rel_Insert_Input>
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

/** aggregate max on columns */
export type Quests_Max_Fields = {
	readonly __typename?: 'Quests_max_fields'
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
export type Quests_Max_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly channelId?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly guildId?: InputMaybe<Order_By>
	readonly hashtag?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly link?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly maxDaily?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly quantity?: InputMaybe<Order_By>
	readonly source?: InputMaybe<Order_By>
	readonly twitterId?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Quests_Min_Fields = {
	readonly __typename?: 'Quests_min_fields'
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
export type Quests_Min_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly channelId?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly guildId?: InputMaybe<Order_By>
	readonly hashtag?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly link?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly maxDaily?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly quantity?: InputMaybe<Order_By>
	readonly source?: InputMaybe<Order_By>
	readonly twitterId?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** response of any mutation on the table "Quests" */
export type Quests_Mutation_Response = {
	readonly __typename?: 'Quests_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Quests>
}

/** input type for inserting object relation for remote table "Quests" */
export type Quests_Obj_Rel_Insert_Input = {
	readonly data: Quests_Insert_Input
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Quests_On_Conflict>
}

/** on_conflict condition type for table "Quests" */
export type Quests_On_Conflict = {
	readonly constraint: Quests_Constraint
	readonly update_columns?: ReadonlyArray<Quests_Update_Column>
	readonly where?: InputMaybe<Quests_Bool_Exp>
}

/** Ordering options when selecting data from "Quests". */
export type Quests_Order_By = {
	readonly Battlepass?: InputMaybe<Battlepasses_Order_By>
	readonly CompletedQuests_aggregate?: InputMaybe<CompletedQuests_Aggregate_Order_By>
	readonly QuestProgresses_aggregate?: InputMaybe<QuestProgresses_Aggregate_Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly channelId?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly guildId?: InputMaybe<Order_By>
	readonly hashtag?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly link?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly maxDaily?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly quantity?: InputMaybe<Order_By>
	readonly repeat?: InputMaybe<Order_By>
	readonly source?: InputMaybe<Order_By>
	readonly twitterId?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: Quests */
export type Quests_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "Quests" */
export enum Quests_Select_Column {
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

/** select "Quests_aggregate_bool_exp_bool_and_arguments_columns" columns of table "Quests" */
export enum Quests_Select_Column_Quests_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
	/** column name */
	Repeat = 'repeat',
}

/** select "Quests_aggregate_bool_exp_bool_or_arguments_columns" columns of table "Quests" */
export enum Quests_Select_Column_Quests_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
	/** column name */
	Repeat = 'repeat',
}

/** input type for updating data in table "Quests" */
export type Quests_Set_Input = {
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
export type Quests_Stddev_Fields = {
	readonly __typename?: 'Quests_stddev_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
	readonly maxDaily?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly quantity?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "Quests" */
export type Quests_Stddev_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly maxDaily?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly quantity?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Quests_Stddev_Pop_Fields = {
	readonly __typename?: 'Quests_stddev_pop_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
	readonly maxDaily?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly quantity?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "Quests" */
export type Quests_Stddev_Pop_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly maxDaily?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly quantity?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Quests_Stddev_Samp_Fields = {
	readonly __typename?: 'Quests_stddev_samp_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
	readonly maxDaily?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly quantity?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "Quests" */
export type Quests_Stddev_Samp_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly maxDaily?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly quantity?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "Quests" */
export type Quests_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Quests_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Quests_Stream_Cursor_Value_Input = {
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
export type Quests_Sum_Fields = {
	readonly __typename?: 'Quests_sum_fields'
	readonly battlepassId?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
	readonly max?: Maybe<Scalars['Int']>
	readonly maxDaily?: Maybe<Scalars['Int']>
	readonly points?: Maybe<Scalars['Int']>
	readonly quantity?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "Quests" */
export type Quests_Sum_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly maxDaily?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly quantity?: InputMaybe<Order_By>
}

/** update columns of table "Quests" */
export enum Quests_Update_Column {
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

export type Quests_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Quests_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Quests_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Quests_Bool_Exp
}

/** aggregate var_pop on columns */
export type Quests_Var_Pop_Fields = {
	readonly __typename?: 'Quests_var_pop_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
	readonly maxDaily?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly quantity?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "Quests" */
export type Quests_Var_Pop_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly maxDaily?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly quantity?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Quests_Var_Samp_Fields = {
	readonly __typename?: 'Quests_var_samp_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
	readonly maxDaily?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly quantity?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "Quests" */
export type Quests_Var_Samp_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly maxDaily?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly quantity?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Quests_Variance_Fields = {
	readonly __typename?: 'Quests_variance_fields'
	readonly battlepassId?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
	readonly maxDaily?: Maybe<Scalars['Float']>
	readonly points?: Maybe<Scalars['Float']>
	readonly quantity?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "Quests" */
export type Quests_Variance_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly maxDaily?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly quantity?: InputMaybe<Order_By>
}

export type RmrkNft = {
	readonly __typename?: 'RMRKNft'
	readonly id: Scalars['String']
	readonly metadata: Scalars['String']
	readonly sn: Scalars['String']
}

export type RewardClaimFilter = {
	readonly battlepassChainId?: InputMaybe<Scalars['String']>
	readonly identityUuid?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "RewardClaims" */
export type RewardClaims = {
	readonly __typename?: 'RewardClaims'
	/** An object relationship */
	readonly BattlepassParticipant?: Maybe<BattlepassParticipants>
	/** An object relationship */
	readonly BattlepassReward?: Maybe<BattlepassRewards>
	readonly createdAt: Scalars['timestamptz']
	readonly id: Scalars['Int']
	readonly nftId?: Maybe<Scalars['Int']>
	readonly participantId?: Maybe<Scalars['Int']>
	readonly rewardId?: Maybe<Scalars['Int']>
	readonly syncStatus?: Maybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "RewardClaims" */
export type RewardClaims_Aggregate = {
	readonly __typename?: 'RewardClaims_aggregate'
	readonly aggregate?: Maybe<RewardClaims_Aggregate_Fields>
	readonly nodes: ReadonlyArray<RewardClaims>
}

export type RewardClaims_Aggregate_Bool_Exp = {
	readonly count?: InputMaybe<RewardClaims_Aggregate_Bool_Exp_Count>
}

export type RewardClaims_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<RewardClaims_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<RewardClaims_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "RewardClaims" */
export type RewardClaims_Aggregate_Fields = {
	readonly __typename?: 'RewardClaims_aggregate_fields'
	readonly avg?: Maybe<RewardClaims_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<RewardClaims_Max_Fields>
	readonly min?: Maybe<RewardClaims_Min_Fields>
	readonly stddev?: Maybe<RewardClaims_Stddev_Fields>
	readonly stddev_pop?: Maybe<RewardClaims_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<RewardClaims_Stddev_Samp_Fields>
	readonly sum?: Maybe<RewardClaims_Sum_Fields>
	readonly var_pop?: Maybe<RewardClaims_Var_Pop_Fields>
	readonly var_samp?: Maybe<RewardClaims_Var_Samp_Fields>
	readonly variance?: Maybe<RewardClaims_Variance_Fields>
}

/** aggregate fields of "RewardClaims" */
export type RewardClaims_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<RewardClaims_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "RewardClaims" */
export type RewardClaims_Aggregate_Order_By = {
	readonly avg?: InputMaybe<RewardClaims_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<RewardClaims_Max_Order_By>
	readonly min?: InputMaybe<RewardClaims_Min_Order_By>
	readonly stddev?: InputMaybe<RewardClaims_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<RewardClaims_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<RewardClaims_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<RewardClaims_Sum_Order_By>
	readonly var_pop?: InputMaybe<RewardClaims_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<RewardClaims_Var_Samp_Order_By>
	readonly variance?: InputMaybe<RewardClaims_Variance_Order_By>
}

/** input type for inserting array relation for remote table "RewardClaims" */
export type RewardClaims_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<RewardClaims_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<RewardClaims_On_Conflict>
}

/** aggregate avg on columns */
export type RewardClaims_Avg_Fields = {
	readonly __typename?: 'RewardClaims_avg_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly nftId?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
	readonly rewardId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "RewardClaims" */
export type RewardClaims_Avg_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "RewardClaims". All fields are combined with a logical 'AND'. */
export type RewardClaims_Bool_Exp = {
	readonly BattlepassParticipant?: InputMaybe<BattlepassParticipants_Bool_Exp>
	readonly BattlepassReward?: InputMaybe<BattlepassRewards_Bool_Exp>
	readonly _and?: InputMaybe<ReadonlyArray<RewardClaims_Bool_Exp>>
	readonly _not?: InputMaybe<RewardClaims_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<RewardClaims_Bool_Exp>>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly nftId?: InputMaybe<Int_Comparison_Exp>
	readonly participantId?: InputMaybe<Int_Comparison_Exp>
	readonly rewardId?: InputMaybe<Int_Comparison_Exp>
	readonly syncStatus?: InputMaybe<Enum_RewardClaims_SyncStatus_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "RewardClaims" */
export enum RewardClaims_Constraint {
	/** unique or primary key constraint on columns "id" */
	RewardClaimsPkey = 'RewardClaims_pkey',
}

/** input type for incrementing numeric columns in table "RewardClaims" */
export type RewardClaims_Inc_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly nftId?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
	readonly rewardId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "RewardClaims" */
export type RewardClaims_Insert_Input = {
	readonly BattlepassParticipant?: InputMaybe<BattlepassParticipants_Obj_Rel_Insert_Input>
	readonly BattlepassReward?: InputMaybe<BattlepassRewards_Obj_Rel_Insert_Input>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly nftId?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
	readonly rewardId?: InputMaybe<Scalars['Int']>
	readonly syncStatus?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type RewardClaims_Max_Fields = {
	readonly __typename?: 'RewardClaims_max_fields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly nftId?: Maybe<Scalars['Int']>
	readonly participantId?: Maybe<Scalars['Int']>
	readonly rewardId?: Maybe<Scalars['Int']>
	readonly syncStatus?: Maybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "RewardClaims" */
export type RewardClaims_Max_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
	readonly syncStatus?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type RewardClaims_Min_Fields = {
	readonly __typename?: 'RewardClaims_min_fields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly nftId?: Maybe<Scalars['Int']>
	readonly participantId?: Maybe<Scalars['Int']>
	readonly rewardId?: Maybe<Scalars['Int']>
	readonly syncStatus?: Maybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "RewardClaims" */
export type RewardClaims_Min_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
	readonly syncStatus?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** response of any mutation on the table "RewardClaims" */
export type RewardClaims_Mutation_Response = {
	readonly __typename?: 'RewardClaims_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<RewardClaims>
}

/** on_conflict condition type for table "RewardClaims" */
export type RewardClaims_On_Conflict = {
	readonly constraint: RewardClaims_Constraint
	readonly update_columns?: ReadonlyArray<RewardClaims_Update_Column>
	readonly where?: InputMaybe<RewardClaims_Bool_Exp>
}

/** Ordering options when selecting data from "RewardClaims". */
export type RewardClaims_Order_By = {
	readonly BattlepassParticipant?: InputMaybe<BattlepassParticipants_Order_By>
	readonly BattlepassReward?: InputMaybe<BattlepassRewards_Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
	readonly syncStatus?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: RewardClaims */
export type RewardClaims_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "RewardClaims" */
export enum RewardClaims_Select_Column {
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
export type RewardClaims_Set_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly nftId?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
	readonly rewardId?: InputMaybe<Scalars['Int']>
	readonly syncStatus?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type RewardClaims_Stddev_Fields = {
	readonly __typename?: 'RewardClaims_stddev_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly nftId?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
	readonly rewardId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "RewardClaims" */
export type RewardClaims_Stddev_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type RewardClaims_Stddev_Pop_Fields = {
	readonly __typename?: 'RewardClaims_stddev_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly nftId?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
	readonly rewardId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "RewardClaims" */
export type RewardClaims_Stddev_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type RewardClaims_Stddev_Samp_Fields = {
	readonly __typename?: 'RewardClaims_stddev_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly nftId?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
	readonly rewardId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "RewardClaims" */
export type RewardClaims_Stddev_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "RewardClaims" */
export type RewardClaims_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: RewardClaims_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type RewardClaims_Stream_Cursor_Value_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly nftId?: InputMaybe<Scalars['Int']>
	readonly participantId?: InputMaybe<Scalars['Int']>
	readonly rewardId?: InputMaybe<Scalars['Int']>
	readonly syncStatus?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type RewardClaims_Sum_Fields = {
	readonly __typename?: 'RewardClaims_sum_fields'
	readonly id?: Maybe<Scalars['Int']>
	readonly nftId?: Maybe<Scalars['Int']>
	readonly participantId?: Maybe<Scalars['Int']>
	readonly rewardId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "RewardClaims" */
export type RewardClaims_Sum_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
}

/** update columns of table "RewardClaims" */
export enum RewardClaims_Update_Column {
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

export type RewardClaims_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<RewardClaims_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<RewardClaims_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: RewardClaims_Bool_Exp
}

/** aggregate var_pop on columns */
export type RewardClaims_Var_Pop_Fields = {
	readonly __typename?: 'RewardClaims_var_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly nftId?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
	readonly rewardId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "RewardClaims" */
export type RewardClaims_Var_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type RewardClaims_Var_Samp_Fields = {
	readonly __typename?: 'RewardClaims_var_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly nftId?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
	readonly rewardId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "RewardClaims" */
export type RewardClaims_Var_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type RewardClaims_Variance_Fields = {
	readonly __typename?: 'RewardClaims_variance_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly nftId?: Maybe<Scalars['Float']>
	readonly participantId?: Maybe<Scalars['Float']>
	readonly rewardId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "RewardClaims" */
export type RewardClaims_Variance_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
}

export type RewardsFilter = {
	readonly battlepassChainId?: InputMaybe<Scalars['String']>
	readonly battlepassId?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['Int']>
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
export type Session_Aggregate = {
	readonly __typename?: 'Session_aggregate'
	readonly aggregate?: Maybe<Session_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Session>
}

/** aggregate fields of "Session" */
export type Session_Aggregate_Fields = {
	readonly __typename?: 'Session_aggregate_fields'
	readonly avg?: Maybe<Session_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Session_Max_Fields>
	readonly min?: Maybe<Session_Min_Fields>
	readonly stddev?: Maybe<Session_Stddev_Fields>
	readonly stddev_pop?: Maybe<Session_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Session_Stddev_Samp_Fields>
	readonly sum?: Maybe<Session_Sum_Fields>
	readonly var_pop?: Maybe<Session_Var_Pop_Fields>
	readonly var_samp?: Maybe<Session_Var_Samp_Fields>
	readonly variance?: Maybe<Session_Variance_Fields>
}

/** aggregate fields of "Session" */
export type Session_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Session_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Session_Avg_Fields = {
	readonly __typename?: 'Session_avg_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "Session". All fields are combined with a logical 'AND'. */
export type Session_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Session_Bool_Exp>>
	readonly _not?: InputMaybe<Session_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Session_Bool_Exp>>
	readonly address?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<Bigint_Comparison_Exp>
	readonly key?: InputMaybe<String_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamp_Comparison_Exp>
}

/** unique or primary key constraints on table "Session" */
export enum Session_Constraint {
	/** unique or primary key constraint on columns "address" */
	SessionAddressKey = 'Session_address_key',
	/** unique or primary key constraint on columns "key" */
	SessionKeyKey = 'Session_key_key',
	/** unique or primary key constraint on columns "id" */
	SessionPkey = 'Session_pkey',
}

/** input type for incrementing numeric columns in table "Session" */
export type Session_Inc_Input = {
	readonly id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "Session" */
export type Session_Insert_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['bigint']>
	readonly key?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type Session_Max_Fields = {
	readonly __typename?: 'Session_max_fields'
	readonly address?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['bigint']>
	readonly key?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type Session_Min_Fields = {
	readonly __typename?: 'Session_min_fields'
	readonly address?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['bigint']>
	readonly key?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "Session" */
export type Session_Mutation_Response = {
	readonly __typename?: 'Session_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Session>
}

/** on_conflict condition type for table "Session" */
export type Session_On_Conflict = {
	readonly constraint: Session_Constraint
	readonly update_columns?: ReadonlyArray<Session_Update_Column>
	readonly where?: InputMaybe<Session_Bool_Exp>
}

/** Ordering options when selecting data from "Session". */
export type Session_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly key?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: Session */
export type Session_Pk_Columns_Input = {
	readonly id: Scalars['bigint']
}

/** select columns of table "Session" */
export enum Session_Select_Column {
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
export type Session_Set_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['bigint']>
	readonly key?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Session_Stddev_Fields = {
	readonly __typename?: 'Session_stddev_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Session_Stddev_Pop_Fields = {
	readonly __typename?: 'Session_stddev_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Session_Stddev_Samp_Fields = {
	readonly __typename?: 'Session_stddev_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "Session" */
export type Session_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Session_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Session_Stream_Cursor_Value_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['bigint']>
	readonly key?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamp']>
}

/** aggregate sum on columns */
export type Session_Sum_Fields = {
	readonly __typename?: 'Session_sum_fields'
	readonly id?: Maybe<Scalars['bigint']>
}

/** update columns of table "Session" */
export enum Session_Update_Column {
	/** column name */
	Address = 'address',
	/** column name */
	Id = 'id',
	/** column name */
	Key = 'key',
	/** column name */
	UpdatedAt = 'updatedAt',
}

export type Session_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Session_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Session_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Session_Bool_Exp
}

/** aggregate var_pop on columns */
export type Session_Var_Pop_Fields = {
	readonly __typename?: 'Session_var_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Session_Var_Samp_Fields = {
	readonly __typename?: 'Session_var_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Session_Variance_Fields = {
	readonly __typename?: 'Session_variance_fields'
	readonly id?: Maybe<Scalars['Float']>
}

export enum Source {
	Discord = 'discord',
	EpicGames = 'epicGames',
	Gamedao = 'gamedao',
	Twitter = 'twitter',
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

export enum SyncStatus {
	Failed = 'failed',
	Pending = 'pending',
	Synced = 'synced',
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
export type TwitterActivities_Aggregate = {
	readonly __typename?: 'TwitterActivities_aggregate'
	readonly aggregate?: Maybe<TwitterActivities_Aggregate_Fields>
	readonly nodes: ReadonlyArray<TwitterActivities>
}

/** aggregate fields of "TwitterActivities" */
export type TwitterActivities_Aggregate_Fields = {
	readonly __typename?: 'TwitterActivities_aggregate_fields'
	readonly avg?: Maybe<TwitterActivities_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<TwitterActivities_Max_Fields>
	readonly min?: Maybe<TwitterActivities_Min_Fields>
	readonly stddev?: Maybe<TwitterActivities_Stddev_Fields>
	readonly stddev_pop?: Maybe<TwitterActivities_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<TwitterActivities_Stddev_Samp_Fields>
	readonly sum?: Maybe<TwitterActivities_Sum_Fields>
	readonly var_pop?: Maybe<TwitterActivities_Var_Pop_Fields>
	readonly var_samp?: Maybe<TwitterActivities_Var_Samp_Fields>
	readonly variance?: Maybe<TwitterActivities_Variance_Fields>
}

/** aggregate fields of "TwitterActivities" */
export type TwitterActivities_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<TwitterActivities_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type TwitterActivities_Avg_Fields = {
	readonly __typename?: 'TwitterActivities_avg_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "TwitterActivities". All fields are combined with a logical 'AND'. */
export type TwitterActivities_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<TwitterActivities_Bool_Exp>>
	readonly _not?: InputMaybe<TwitterActivities_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<TwitterActivities_Bool_Exp>>
	readonly activityId?: InputMaybe<String_Comparison_Exp>
	readonly activityType?: InputMaybe<Enum_TwitterActivities_ActivityType_Comparison_Exp>
	readonly authorId?: InputMaybe<String_Comparison_Exp>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly objectAuthor?: InputMaybe<String_Comparison_Exp>
	readonly objectId?: InputMaybe<String_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "TwitterActivities" */
export enum TwitterActivities_Constraint {
	/** unique or primary key constraint on columns "id" */
	TwitterActivitiesPkey = 'TwitterActivities_pkey',
}

/** input type for incrementing numeric columns in table "TwitterActivities" */
export type TwitterActivities_Inc_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "TwitterActivities" */
export type TwitterActivities_Insert_Input = {
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
export type TwitterActivities_Max_Fields = {
	readonly __typename?: 'TwitterActivities_max_fields'
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
export type TwitterActivities_Min_Fields = {
	readonly __typename?: 'TwitterActivities_min_fields'
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
export type TwitterActivities_Mutation_Response = {
	readonly __typename?: 'TwitterActivities_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<TwitterActivities>
}

/** on_conflict condition type for table "TwitterActivities" */
export type TwitterActivities_On_Conflict = {
	readonly constraint: TwitterActivities_Constraint
	readonly update_columns?: ReadonlyArray<TwitterActivities_Update_Column>
	readonly where?: InputMaybe<TwitterActivities_Bool_Exp>
}

/** Ordering options when selecting data from "TwitterActivities". */
export type TwitterActivities_Order_By = {
	readonly activityId?: InputMaybe<Order_By>
	readonly activityType?: InputMaybe<Order_By>
	readonly authorId?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly objectAuthor?: InputMaybe<Order_By>
	readonly objectId?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: TwitterActivities */
export type TwitterActivities_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "TwitterActivities" */
export enum TwitterActivities_Select_Column {
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
export type TwitterActivities_Set_Input = {
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
export type TwitterActivities_Stddev_Fields = {
	readonly __typename?: 'TwitterActivities_stddev_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type TwitterActivities_Stddev_Pop_Fields = {
	readonly __typename?: 'TwitterActivities_stddev_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type TwitterActivities_Stddev_Samp_Fields = {
	readonly __typename?: 'TwitterActivities_stddev_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "TwitterActivities" */
export type TwitterActivities_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: TwitterActivities_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type TwitterActivities_Stream_Cursor_Value_Input = {
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
export type TwitterActivities_Sum_Fields = {
	readonly __typename?: 'TwitterActivities_sum_fields'
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "TwitterActivities" */
export enum TwitterActivities_Update_Column {
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

export type TwitterActivities_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<TwitterActivities_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<TwitterActivities_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: TwitterActivities_Bool_Exp
}

/** aggregate var_pop on columns */
export type TwitterActivities_Var_Pop_Fields = {
	readonly __typename?: 'TwitterActivities_var_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type TwitterActivities_Var_Samp_Fields = {
	readonly __typename?: 'TwitterActivities_var_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type TwitterActivities_Variance_Fields = {
	readonly __typename?: 'TwitterActivities_variance_fields'
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
export type TwitterSearches_Aggregate = {
	readonly __typename?: 'TwitterSearches_aggregate'
	readonly aggregate?: Maybe<TwitterSearches_Aggregate_Fields>
	readonly nodes: ReadonlyArray<TwitterSearches>
}

/** aggregate fields of "TwitterSearches" */
export type TwitterSearches_Aggregate_Fields = {
	readonly __typename?: 'TwitterSearches_aggregate_fields'
	readonly avg?: Maybe<TwitterSearches_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<TwitterSearches_Max_Fields>
	readonly min?: Maybe<TwitterSearches_Min_Fields>
	readonly stddev?: Maybe<TwitterSearches_Stddev_Fields>
	readonly stddev_pop?: Maybe<TwitterSearches_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<TwitterSearches_Stddev_Samp_Fields>
	readonly sum?: Maybe<TwitterSearches_Sum_Fields>
	readonly var_pop?: Maybe<TwitterSearches_Var_Pop_Fields>
	readonly var_samp?: Maybe<TwitterSearches_Var_Samp_Fields>
	readonly variance?: Maybe<TwitterSearches_Variance_Fields>
}

/** aggregate fields of "TwitterSearches" */
export type TwitterSearches_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<TwitterSearches_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type TwitterSearches_Avg_Fields = {
	readonly __typename?: 'TwitterSearches_avg_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "TwitterSearches". All fields are combined with a logical 'AND'. */
export type TwitterSearches_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<TwitterSearches_Bool_Exp>>
	readonly _not?: InputMaybe<TwitterSearches_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<TwitterSearches_Bool_Exp>>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly executedAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly query?: InputMaybe<String_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "TwitterSearches" */
export enum TwitterSearches_Constraint {
	/** unique or primary key constraint on columns "id" */
	TwitterSearchesPkey = 'TwitterSearches_pkey',
}

/** input type for incrementing numeric columns in table "TwitterSearches" */
export type TwitterSearches_Inc_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "TwitterSearches" */
export type TwitterSearches_Insert_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly executedAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly query?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type TwitterSearches_Max_Fields = {
	readonly __typename?: 'TwitterSearches_max_fields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly executedAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly query?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type TwitterSearches_Min_Fields = {
	readonly __typename?: 'TwitterSearches_min_fields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly executedAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly query?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "TwitterSearches" */
export type TwitterSearches_Mutation_Response = {
	readonly __typename?: 'TwitterSearches_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<TwitterSearches>
}

/** on_conflict condition type for table "TwitterSearches" */
export type TwitterSearches_On_Conflict = {
	readonly constraint: TwitterSearches_Constraint
	readonly update_columns?: ReadonlyArray<TwitterSearches_Update_Column>
	readonly where?: InputMaybe<TwitterSearches_Bool_Exp>
}

/** Ordering options when selecting data from "TwitterSearches". */
export type TwitterSearches_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly executedAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly query?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: TwitterSearches */
export type TwitterSearches_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "TwitterSearches" */
export enum TwitterSearches_Select_Column {
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
export type TwitterSearches_Set_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly executedAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly query?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type TwitterSearches_Stddev_Fields = {
	readonly __typename?: 'TwitterSearches_stddev_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type TwitterSearches_Stddev_Pop_Fields = {
	readonly __typename?: 'TwitterSearches_stddev_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type TwitterSearches_Stddev_Samp_Fields = {
	readonly __typename?: 'TwitterSearches_stddev_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "TwitterSearches" */
export type TwitterSearches_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: TwitterSearches_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type TwitterSearches_Stream_Cursor_Value_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly executedAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly query?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type TwitterSearches_Sum_Fields = {
	readonly __typename?: 'TwitterSearches_sum_fields'
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "TwitterSearches" */
export enum TwitterSearches_Update_Column {
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

export type TwitterSearches_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<TwitterSearches_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<TwitterSearches_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: TwitterSearches_Bool_Exp
}

/** aggregate var_pop on columns */
export type TwitterSearches_Var_Pop_Fields = {
	readonly __typename?: 'TwitterSearches_var_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type TwitterSearches_Var_Samp_Fields = {
	readonly __typename?: 'TwitterSearches_var_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type TwitterSearches_Variance_Fields = {
	readonly __typename?: 'TwitterSearches_variance_fields'
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
export type TwitterUsers_Aggregate = {
	readonly __typename?: 'TwitterUsers_aggregate'
	readonly aggregate?: Maybe<TwitterUsers_Aggregate_Fields>
	readonly nodes: ReadonlyArray<TwitterUsers>
}

/** aggregate fields of "TwitterUsers" */
export type TwitterUsers_Aggregate_Fields = {
	readonly __typename?: 'TwitterUsers_aggregate_fields'
	readonly avg?: Maybe<TwitterUsers_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<TwitterUsers_Max_Fields>
	readonly min?: Maybe<TwitterUsers_Min_Fields>
	readonly stddev?: Maybe<TwitterUsers_Stddev_Fields>
	readonly stddev_pop?: Maybe<TwitterUsers_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<TwitterUsers_Stddev_Samp_Fields>
	readonly sum?: Maybe<TwitterUsers_Sum_Fields>
	readonly var_pop?: Maybe<TwitterUsers_Var_Pop_Fields>
	readonly var_samp?: Maybe<TwitterUsers_Var_Samp_Fields>
	readonly variance?: Maybe<TwitterUsers_Variance_Fields>
}

/** aggregate fields of "TwitterUsers" */
export type TwitterUsers_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<TwitterUsers_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type TwitterUsers_Avg_Fields = {
	readonly __typename?: 'TwitterUsers_avg_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "TwitterUsers". All fields are combined with a logical 'AND'. */
export type TwitterUsers_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<TwitterUsers_Bool_Exp>>
	readonly _not?: InputMaybe<TwitterUsers_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<TwitterUsers_Bool_Exp>>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly twitterId?: InputMaybe<String_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly username?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "TwitterUsers" */
export enum TwitterUsers_Constraint {
	/** unique or primary key constraint on columns "id" */
	TwitterUsersPkey = 'TwitterUsers_pkey',
}

/** input type for incrementing numeric columns in table "TwitterUsers" */
export type TwitterUsers_Inc_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "TwitterUsers" */
export type TwitterUsers_Insert_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly twitterId?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
	readonly username?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type TwitterUsers_Max_Fields = {
	readonly __typename?: 'TwitterUsers_max_fields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly twitterId?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
	readonly username?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type TwitterUsers_Min_Fields = {
	readonly __typename?: 'TwitterUsers_min_fields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly twitterId?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
	readonly username?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "TwitterUsers" */
export type TwitterUsers_Mutation_Response = {
	readonly __typename?: 'TwitterUsers_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<TwitterUsers>
}

/** on_conflict condition type for table "TwitterUsers" */
export type TwitterUsers_On_Conflict = {
	readonly constraint: TwitterUsers_Constraint
	readonly update_columns?: ReadonlyArray<TwitterUsers_Update_Column>
	readonly where?: InputMaybe<TwitterUsers_Bool_Exp>
}

/** Ordering options when selecting data from "TwitterUsers". */
export type TwitterUsers_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly twitterId?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
	readonly username?: InputMaybe<Order_By>
}

/** primary key columns input for table: TwitterUsers */
export type TwitterUsers_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "TwitterUsers" */
export enum TwitterUsers_Select_Column {
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
export type TwitterUsers_Set_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly twitterId?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
	readonly username?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type TwitterUsers_Stddev_Fields = {
	readonly __typename?: 'TwitterUsers_stddev_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type TwitterUsers_Stddev_Pop_Fields = {
	readonly __typename?: 'TwitterUsers_stddev_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type TwitterUsers_Stddev_Samp_Fields = {
	readonly __typename?: 'TwitterUsers_stddev_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "TwitterUsers" */
export type TwitterUsers_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: TwitterUsers_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type TwitterUsers_Stream_Cursor_Value_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly twitterId?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
	readonly username?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type TwitterUsers_Sum_Fields = {
	readonly __typename?: 'TwitterUsers_sum_fields'
	readonly id?: Maybe<Scalars['Int']>
}

/** update columns of table "TwitterUsers" */
export enum TwitterUsers_Update_Column {
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

export type TwitterUsers_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<TwitterUsers_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<TwitterUsers_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: TwitterUsers_Bool_Exp
}

/** aggregate var_pop on columns */
export type TwitterUsers_Var_Pop_Fields = {
	readonly __typename?: 'TwitterUsers_var_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type TwitterUsers_Var_Samp_Fields = {
	readonly __typename?: 'TwitterUsers_var_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type TwitterUsers_Variance_Fields = {
	readonly __typename?: 'TwitterUsers_variance_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "UserTokens" */
export type UserTokens = {
	readonly __typename?: 'UserTokens'
	/** An object relationship */
	readonly Identity?: Maybe<Identities>
	readonly createdAt: Scalars['timestamptz']
	readonly expiry?: Maybe<Scalars['timestamptz']>
	readonly id: Scalars['Int']
	readonly identityId?: Maybe<Scalars['Int']>
	readonly source: Scalars['enum_UserTokens_source']
	readonly token: Scalars['String']
	readonly updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "UserTokens" */
export type UserTokens_Aggregate = {
	readonly __typename?: 'UserTokens_aggregate'
	readonly aggregate?: Maybe<UserTokens_Aggregate_Fields>
	readonly nodes: ReadonlyArray<UserTokens>
}

export type UserTokens_Aggregate_Bool_Exp = {
	readonly count?: InputMaybe<UserTokens_Aggregate_Bool_Exp_Count>
}

export type UserTokens_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<UserTokens_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<UserTokens_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "UserTokens" */
export type UserTokens_Aggregate_Fields = {
	readonly __typename?: 'UserTokens_aggregate_fields'
	readonly avg?: Maybe<UserTokens_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<UserTokens_Max_Fields>
	readonly min?: Maybe<UserTokens_Min_Fields>
	readonly stddev?: Maybe<UserTokens_Stddev_Fields>
	readonly stddev_pop?: Maybe<UserTokens_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<UserTokens_Stddev_Samp_Fields>
	readonly sum?: Maybe<UserTokens_Sum_Fields>
	readonly var_pop?: Maybe<UserTokens_Var_Pop_Fields>
	readonly var_samp?: Maybe<UserTokens_Var_Samp_Fields>
	readonly variance?: Maybe<UserTokens_Variance_Fields>
}

/** aggregate fields of "UserTokens" */
export type UserTokens_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<UserTokens_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "UserTokens" */
export type UserTokens_Aggregate_Order_By = {
	readonly avg?: InputMaybe<UserTokens_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<UserTokens_Max_Order_By>
	readonly min?: InputMaybe<UserTokens_Min_Order_By>
	readonly stddev?: InputMaybe<UserTokens_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<UserTokens_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<UserTokens_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<UserTokens_Sum_Order_By>
	readonly var_pop?: InputMaybe<UserTokens_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<UserTokens_Var_Samp_Order_By>
	readonly variance?: InputMaybe<UserTokens_Variance_Order_By>
}

/** input type for inserting array relation for remote table "UserTokens" */
export type UserTokens_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<UserTokens_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<UserTokens_On_Conflict>
}

/** aggregate avg on columns */
export type UserTokens_Avg_Fields = {
	readonly __typename?: 'UserTokens_avg_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "UserTokens" */
export type UserTokens_Avg_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "UserTokens". All fields are combined with a logical 'AND'. */
export type UserTokens_Bool_Exp = {
	readonly Identity?: InputMaybe<Identities_Bool_Exp>
	readonly _and?: InputMaybe<ReadonlyArray<UserTokens_Bool_Exp>>
	readonly _not?: InputMaybe<UserTokens_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<UserTokens_Bool_Exp>>
	readonly createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly expiry?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly identityId?: InputMaybe<Int_Comparison_Exp>
	readonly source?: InputMaybe<Enum_UserTokens_Source_Comparison_Exp>
	readonly token?: InputMaybe<String_Comparison_Exp>
	readonly updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "UserTokens" */
export enum UserTokens_Constraint {
	/** unique or primary key constraint on columns "id" */
	UserTokensPkey = 'UserTokens_pkey',
}

/** input type for incrementing numeric columns in table "UserTokens" */
export type UserTokens_Inc_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "UserTokens" */
export type UserTokens_Insert_Input = {
	readonly Identity?: InputMaybe<Identities_Obj_Rel_Insert_Input>
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly expiry?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly source?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly token?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type UserTokens_Max_Fields = {
	readonly __typename?: 'UserTokens_max_fields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly expiry?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly source?: Maybe<Scalars['enum_UserTokens_source']>
	readonly token?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "UserTokens" */
export type UserTokens_Max_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly source?: InputMaybe<Order_By>
	readonly token?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type UserTokens_Min_Fields = {
	readonly __typename?: 'UserTokens_min_fields'
	readonly createdAt?: Maybe<Scalars['timestamptz']>
	readonly expiry?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
	readonly source?: Maybe<Scalars['enum_UserTokens_source']>
	readonly token?: Maybe<Scalars['String']>
	readonly updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "UserTokens" */
export type UserTokens_Min_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly source?: InputMaybe<Order_By>
	readonly token?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** response of any mutation on the table "UserTokens" */
export type UserTokens_Mutation_Response = {
	readonly __typename?: 'UserTokens_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<UserTokens>
}

/** on_conflict condition type for table "UserTokens" */
export type UserTokens_On_Conflict = {
	readonly constraint: UserTokens_Constraint
	readonly update_columns?: ReadonlyArray<UserTokens_Update_Column>
	readonly where?: InputMaybe<UserTokens_Bool_Exp>
}

/** Ordering options when selecting data from "UserTokens". */
export type UserTokens_Order_By = {
	readonly Identity?: InputMaybe<Identities_Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly source?: InputMaybe<Order_By>
	readonly token?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: UserTokens */
export type UserTokens_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "UserTokens" */
export enum UserTokens_Select_Column {
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
export type UserTokens_Set_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly expiry?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly source?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly token?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type UserTokens_Stddev_Fields = {
	readonly __typename?: 'UserTokens_stddev_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "UserTokens" */
export type UserTokens_Stddev_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type UserTokens_Stddev_Pop_Fields = {
	readonly __typename?: 'UserTokens_stddev_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "UserTokens" */
export type UserTokens_Stddev_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type UserTokens_Stddev_Samp_Fields = {
	readonly __typename?: 'UserTokens_stddev_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "UserTokens" */
export type UserTokens_Stddev_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "UserTokens" */
export type UserTokens_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: UserTokens_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type UserTokens_Stream_Cursor_Value_Input = {
	readonly createdAt?: InputMaybe<Scalars['timestamptz']>
	readonly expiry?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['Int']>
	readonly identityId?: InputMaybe<Scalars['Int']>
	readonly source?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly token?: InputMaybe<Scalars['String']>
	readonly updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type UserTokens_Sum_Fields = {
	readonly __typename?: 'UserTokens_sum_fields'
	readonly id?: Maybe<Scalars['Int']>
	readonly identityId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "UserTokens" */
export type UserTokens_Sum_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
}

/** update columns of table "UserTokens" */
export enum UserTokens_Update_Column {
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

export type UserTokens_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<UserTokens_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<UserTokens_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: UserTokens_Bool_Exp
}

/** aggregate var_pop on columns */
export type UserTokens_Var_Pop_Fields = {
	readonly __typename?: 'UserTokens_var_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "UserTokens" */
export type UserTokens_Var_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type UserTokens_Var_Samp_Fields = {
	readonly __typename?: 'UserTokens_var_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "UserTokens" */
export type UserTokens_Var_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type UserTokens_Variance_Fields = {
	readonly __typename?: 'UserTokens_variance_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly identityId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "UserTokens" */
export type UserTokens_Variance_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
}

/** columns and relationships of "_prisma_migrations" */
export type _Prisma_Migrations = {
	readonly __typename?: '_prisma_migrations'
	readonly applied_steps_count: Scalars['Int']
	readonly checksum: Scalars['String']
	readonly finished_at?: Maybe<Scalars['timestamptz']>
	readonly id: Scalars['String']
	readonly logs?: Maybe<Scalars['String']>
	readonly migration_name: Scalars['String']
	readonly rolled_back_at?: Maybe<Scalars['timestamptz']>
	readonly started_at: Scalars['timestamptz']
}

/** aggregated selection of "_prisma_migrations" */
export type _Prisma_Migrations_Aggregate = {
	readonly __typename?: '_prisma_migrations_aggregate'
	readonly aggregate?: Maybe<_Prisma_Migrations_Aggregate_Fields>
	readonly nodes: ReadonlyArray<_Prisma_Migrations>
}

/** aggregate fields of "_prisma_migrations" */
export type _Prisma_Migrations_Aggregate_Fields = {
	readonly __typename?: '_prisma_migrations_aggregate_fields'
	readonly avg?: Maybe<_Prisma_Migrations_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<_Prisma_Migrations_Max_Fields>
	readonly min?: Maybe<_Prisma_Migrations_Min_Fields>
	readonly stddev?: Maybe<_Prisma_Migrations_Stddev_Fields>
	readonly stddev_pop?: Maybe<_Prisma_Migrations_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<_Prisma_Migrations_Stddev_Samp_Fields>
	readonly sum?: Maybe<_Prisma_Migrations_Sum_Fields>
	readonly var_pop?: Maybe<_Prisma_Migrations_Var_Pop_Fields>
	readonly var_samp?: Maybe<_Prisma_Migrations_Var_Samp_Fields>
	readonly variance?: Maybe<_Prisma_Migrations_Variance_Fields>
}

/** aggregate fields of "_prisma_migrations" */
export type _Prisma_Migrations_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<_Prisma_Migrations_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type _Prisma_Migrations_Avg_Fields = {
	readonly __typename?: '_prisma_migrations_avg_fields'
	readonly applied_steps_count?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "_prisma_migrations". All fields are combined with a logical 'AND'. */
export type _Prisma_Migrations_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<_Prisma_Migrations_Bool_Exp>>
	readonly _not?: InputMaybe<_Prisma_Migrations_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<_Prisma_Migrations_Bool_Exp>>
	readonly applied_steps_count?: InputMaybe<Int_Comparison_Exp>
	readonly checksum?: InputMaybe<String_Comparison_Exp>
	readonly finished_at?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly logs?: InputMaybe<String_Comparison_Exp>
	readonly migration_name?: InputMaybe<String_Comparison_Exp>
	readonly rolled_back_at?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly started_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "_prisma_migrations" */
export enum _Prisma_Migrations_Constraint {
	/** unique or primary key constraint on columns "id" */
	PrismaMigrationsPkey = '_prisma_migrations_pkey',
}

/** input type for incrementing numeric columns in table "_prisma_migrations" */
export type _Prisma_Migrations_Inc_Input = {
	readonly applied_steps_count?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "_prisma_migrations" */
export type _Prisma_Migrations_Insert_Input = {
	readonly applied_steps_count?: InputMaybe<Scalars['Int']>
	readonly checksum?: InputMaybe<Scalars['String']>
	readonly finished_at?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly logs?: InputMaybe<Scalars['String']>
	readonly migration_name?: InputMaybe<Scalars['String']>
	readonly rolled_back_at?: InputMaybe<Scalars['timestamptz']>
	readonly started_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type _Prisma_Migrations_Max_Fields = {
	readonly __typename?: '_prisma_migrations_max_fields'
	readonly applied_steps_count?: Maybe<Scalars['Int']>
	readonly checksum?: Maybe<Scalars['String']>
	readonly finished_at?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['String']>
	readonly logs?: Maybe<Scalars['String']>
	readonly migration_name?: Maybe<Scalars['String']>
	readonly rolled_back_at?: Maybe<Scalars['timestamptz']>
	readonly started_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type _Prisma_Migrations_Min_Fields = {
	readonly __typename?: '_prisma_migrations_min_fields'
	readonly applied_steps_count?: Maybe<Scalars['Int']>
	readonly checksum?: Maybe<Scalars['String']>
	readonly finished_at?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['String']>
	readonly logs?: Maybe<Scalars['String']>
	readonly migration_name?: Maybe<Scalars['String']>
	readonly rolled_back_at?: Maybe<Scalars['timestamptz']>
	readonly started_at?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "_prisma_migrations" */
export type _Prisma_Migrations_Mutation_Response = {
	readonly __typename?: '_prisma_migrations_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<_Prisma_Migrations>
}

/** on_conflict condition type for table "_prisma_migrations" */
export type _Prisma_Migrations_On_Conflict = {
	readonly constraint: _Prisma_Migrations_Constraint
	readonly update_columns?: ReadonlyArray<_Prisma_Migrations_Update_Column>
	readonly where?: InputMaybe<_Prisma_Migrations_Bool_Exp>
}

/** Ordering options when selecting data from "_prisma_migrations". */
export type _Prisma_Migrations_Order_By = {
	readonly applied_steps_count?: InputMaybe<Order_By>
	readonly checksum?: InputMaybe<Order_By>
	readonly finished_at?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly logs?: InputMaybe<Order_By>
	readonly migration_name?: InputMaybe<Order_By>
	readonly rolled_back_at?: InputMaybe<Order_By>
	readonly started_at?: InputMaybe<Order_By>
}

/** primary key columns input for table: _prisma_migrations */
export type _Prisma_Migrations_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

/** select columns of table "_prisma_migrations" */
export enum _Prisma_Migrations_Select_Column {
	/** column name */
	AppliedStepsCount = 'applied_steps_count',
	/** column name */
	Checksum = 'checksum',
	/** column name */
	FinishedAt = 'finished_at',
	/** column name */
	Id = 'id',
	/** column name */
	Logs = 'logs',
	/** column name */
	MigrationName = 'migration_name',
	/** column name */
	RolledBackAt = 'rolled_back_at',
	/** column name */
	StartedAt = 'started_at',
}

/** input type for updating data in table "_prisma_migrations" */
export type _Prisma_Migrations_Set_Input = {
	readonly applied_steps_count?: InputMaybe<Scalars['Int']>
	readonly checksum?: InputMaybe<Scalars['String']>
	readonly finished_at?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly logs?: InputMaybe<Scalars['String']>
	readonly migration_name?: InputMaybe<Scalars['String']>
	readonly rolled_back_at?: InputMaybe<Scalars['timestamptz']>
	readonly started_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type _Prisma_Migrations_Stddev_Fields = {
	readonly __typename?: '_prisma_migrations_stddev_fields'
	readonly applied_steps_count?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type _Prisma_Migrations_Stddev_Pop_Fields = {
	readonly __typename?: '_prisma_migrations_stddev_pop_fields'
	readonly applied_steps_count?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type _Prisma_Migrations_Stddev_Samp_Fields = {
	readonly __typename?: '_prisma_migrations_stddev_samp_fields'
	readonly applied_steps_count?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "_prisma_migrations" */
export type _Prisma_Migrations_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: _Prisma_Migrations_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type _Prisma_Migrations_Stream_Cursor_Value_Input = {
	readonly applied_steps_count?: InputMaybe<Scalars['Int']>
	readonly checksum?: InputMaybe<Scalars['String']>
	readonly finished_at?: InputMaybe<Scalars['timestamptz']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly logs?: InputMaybe<Scalars['String']>
	readonly migration_name?: InputMaybe<Scalars['String']>
	readonly rolled_back_at?: InputMaybe<Scalars['timestamptz']>
	readonly started_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type _Prisma_Migrations_Sum_Fields = {
	readonly __typename?: '_prisma_migrations_sum_fields'
	readonly applied_steps_count?: Maybe<Scalars['Int']>
}

/** update columns of table "_prisma_migrations" */
export enum _Prisma_Migrations_Update_Column {
	/** column name */
	AppliedStepsCount = 'applied_steps_count',
	/** column name */
	Checksum = 'checksum',
	/** column name */
	FinishedAt = 'finished_at',
	/** column name */
	Id = 'id',
	/** column name */
	Logs = 'logs',
	/** column name */
	MigrationName = 'migration_name',
	/** column name */
	RolledBackAt = 'rolled_back_at',
	/** column name */
	StartedAt = 'started_at',
}

export type _Prisma_Migrations_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<_Prisma_Migrations_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<_Prisma_Migrations_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: _Prisma_Migrations_Bool_Exp
}

/** aggregate var_pop on columns */
export type _Prisma_Migrations_Var_Pop_Fields = {
	readonly __typename?: '_prisma_migrations_var_pop_fields'
	readonly applied_steps_count?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type _Prisma_Migrations_Var_Samp_Fields = {
	readonly __typename?: '_prisma_migrations_var_samp_fields'
	readonly applied_steps_count?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type _Prisma_Migrations_Variance_Fields = {
	readonly __typename?: '_prisma_migrations_variance_fields'
	readonly applied_steps_count?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['_text']>
	readonly _gt?: InputMaybe<Scalars['_text']>
	readonly _gte?: InputMaybe<Scalars['_text']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['_text']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['_text']>
	readonly _lte?: InputMaybe<Scalars['_text']>
	readonly _neq?: InputMaybe<Scalars['_text']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['_text']>>
}

/** columns and relationships of "account_balance" */
export type Account_Balance = {
	readonly __typename?: 'account_balance'
	readonly balance_id?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly historical_balance?: Maybe<Historical_Balance>
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly identity_id?: Maybe<Scalars['String']>
}

/** aggregated selection of "account_balance" */
export type Account_Balance_Aggregate = {
	readonly __typename?: 'account_balance_aggregate'
	readonly aggregate?: Maybe<Account_Balance_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Account_Balance>
}

export type Account_Balance_Aggregate_Bool_Exp = {
	readonly count?: InputMaybe<Account_Balance_Aggregate_Bool_Exp_Count>
}

export type Account_Balance_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<Account_Balance_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Account_Balance_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "account_balance" */
export type Account_Balance_Aggregate_Fields = {
	readonly __typename?: 'account_balance_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Account_Balance_Max_Fields>
	readonly min?: Maybe<Account_Balance_Min_Fields>
}

/** aggregate fields of "account_balance" */
export type Account_Balance_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Account_Balance_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "account_balance" */
export type Account_Balance_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Account_Balance_Max_Order_By>
	readonly min?: InputMaybe<Account_Balance_Min_Order_By>
}

/** input type for inserting array relation for remote table "account_balance" */
export type Account_Balance_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<Account_Balance_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Account_Balance_On_Conflict>
}

/** Boolean expression to filter rows from the table "account_balance". All fields are combined with a logical 'AND'. */
export type Account_Balance_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Account_Balance_Bool_Exp>>
	readonly _not?: InputMaybe<Account_Balance_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Account_Balance_Bool_Exp>>
	readonly balance_id?: InputMaybe<String_Comparison_Exp>
	readonly historical_balance?: InputMaybe<Historical_Balance_Bool_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly identity?: InputMaybe<Identity_Bool_Exp>
	readonly identity_id?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "account_balance" */
export enum Account_Balance_Constraint {
	/** unique or primary key constraint on columns "id" */
	PkBd893045760f719e24a95a42562 = 'PK_bd893045760f719e24a95a42562',
}

/** input type for inserting data into table "account_balance" */
export type Account_Balance_Insert_Input = {
	readonly balance_id?: InputMaybe<Scalars['String']>
	readonly historical_balance?: InputMaybe<Historical_Balance_Obj_Rel_Insert_Input>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly identity_id?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Account_Balance_Max_Fields = {
	readonly __typename?: 'account_balance_max_fields'
	readonly balance_id?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly identity_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "account_balance" */
export type Account_Balance_Max_Order_By = {
	readonly balance_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Account_Balance_Min_Fields = {
	readonly __typename?: 'account_balance_min_fields'
	readonly balance_id?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly identity_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "account_balance" */
export type Account_Balance_Min_Order_By = {
	readonly balance_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
}

/** response of any mutation on the table "account_balance" */
export type Account_Balance_Mutation_Response = {
	readonly __typename?: 'account_balance_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Account_Balance>
}

/** on_conflict condition type for table "account_balance" */
export type Account_Balance_On_Conflict = {
	readonly constraint: Account_Balance_Constraint
	readonly update_columns?: ReadonlyArray<Account_Balance_Update_Column>
	readonly where?: InputMaybe<Account_Balance_Bool_Exp>
}

/** Ordering options when selecting data from "account_balance". */
export type Account_Balance_Order_By = {
	readonly balance_id?: InputMaybe<Order_By>
	readonly historical_balance?: InputMaybe<Historical_Balance_Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly identity_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: account_balance */
export type Account_Balance_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

/** select columns of table "account_balance" */
export enum Account_Balance_Select_Column {
	/** column name */
	BalanceId = 'balance_id',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identity_id',
}

/** input type for updating data in table "account_balance" */
export type Account_Balance_Set_Input = {
	readonly balance_id?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity_id?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "account_balance" */
export type Account_Balance_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Account_Balance_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Account_Balance_Stream_Cursor_Value_Input = {
	readonly balance_id?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity_id?: InputMaybe<Scalars['String']>
}

/** update columns of table "account_balance" */
export enum Account_Balance_Update_Column {
	/** column name */
	BalanceId = 'balance_id',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identity_id',
}

export type Account_Balance_Updates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Account_Balance_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Account_Balance_Bool_Exp
}

/** columns and relationships of "battlepass" */
export type Battlepass = {
	readonly __typename?: 'battlepass'
	readonly active_from_block?: Maybe<Scalars['Int']>
	readonly active_to_block?: Maybe<Scalars['Int']>
	/** An array relationship */
	readonly battlepass_nfts: ReadonlyArray<Battlepass_Nft>
	/** An aggregate relationship */
	readonly battlepass_nfts_aggregate: Battlepass_Nft_Aggregate
	readonly cid: Scalars['String']
	readonly created_at_block: Scalars['Int']
	readonly creator_id?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly image?: Maybe<Scalars['String']>
	readonly name: Scalars['String']
	readonly org_id?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly organization?: Maybe<Organization>
	readonly price: Scalars['numeric']
	readonly season: Scalars['String']
	readonly state: Scalars['String']
	readonly updated_at_block: Scalars['Int']
}

/** columns and relationships of "battlepass" */
export type BattlepassBattlepass_NftsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Nft_Order_By>>
	where?: InputMaybe<Battlepass_Nft_Bool_Exp>
}

/** columns and relationships of "battlepass" */
export type BattlepassBattlepass_Nfts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Nft_Order_By>>
	where?: InputMaybe<Battlepass_Nft_Bool_Exp>
}

export type BattlepassBotMutation = {
	readonly __typename?: 'battlepassBotMutation'
	readonly claimReward?: Maybe<BattlepassRewardClaim>
	readonly identity?: Maybe<BattlepassIdentity>
	readonly join?: Maybe<BattlepassMember>
	readonly joinPremium?: Maybe<BattlepassMember>
	readonly levels?: Maybe<ReadonlyArray<Maybe<BattlepassLevel>>>
	readonly processPayment?: Maybe<Payment>
	readonly provideUserToken?: Maybe<BattlepassIdentity>
	readonly quest?: Maybe<BattlepassQuest>
	readonly reward?: Maybe<BattlepassReward>
	readonly setFreePasses?: Maybe<Battlepass>
	readonly updateBattlepass?: Maybe<Battlepass>
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
	levels: ReadonlyArray<InputMaybe<Level>>
}

export type BattlepassBotMutationProcessPaymentArgs = {
	battlepass: Scalars['String']
	identityUuid: Scalars['String']
	paymentToken: Scalars['String']
	securityToken: Scalars['String']
}

export type BattlepassBotMutationProvideUserTokenArgs = {
	identityUuid: Scalars['String']
	source: Source
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
	source: Source
	twitterId?: InputMaybe<Scalars['String']>
	type: ActivityType
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
	readonly battlepasses?: Maybe<ReadonlyArray<Maybe<Battlepass>>>
	readonly identities?: Maybe<ReadonlyArray<Maybe<BattlepassIdentity>>>
	readonly levels?: Maybe<ReadonlyArray<Maybe<BattlepassLevel>>>
	readonly members?: Maybe<ReadonlyArray<Maybe<BattlepassMember>>>
	readonly points?: Maybe<ReadonlyArray<Maybe<BattlepassPoint>>>
	readonly progresses?: Maybe<ReadonlyArray<Maybe<BattlepassQuestProgress>>>
	readonly quests?: Maybe<ReadonlyArray<Maybe<BattlepassQuest>>>
	readonly reward_claims?: Maybe<ReadonlyArray<Maybe<BattlepassRewardClaim>>>
	readonly rewards?: Maybe<ReadonlyArray<Maybe<BattlepassReward>>>
}

export type BattlepassBotQueryBattlepassesArgs = {
	where?: InputMaybe<BattlepassesFilter>
}

export type BattlepassBotQueryIdentitiesArgs = {
	where?: InputMaybe<IdentityFilter>
}

export type BattlepassBotQueryLevelsArgs = {
	where?: InputMaybe<LevelsFilter>
}

export type BattlepassBotQueryMembersArgs = {
	where?: InputMaybe<MemberFilter>
}

export type BattlepassBotQueryPointsArgs = {
	where?: InputMaybe<PointsFilter>
}

export type BattlepassBotQueryProgressesArgs = {
	where?: InputMaybe<ProgressFilter>
}

export type BattlepassBotQueryQuestsArgs = {
	where?: InputMaybe<QuestFilter>
}

export type BattlepassBotQueryReward_ClaimsArgs = {
	where?: InputMaybe<RewardClaimFilter>
}

export type BattlepassBotQueryRewardsArgs = {
	where?: InputMaybe<RewardsFilter>
}

/** aggregated selection of "battlepass" */
export type Battlepass_Aggregate = {
	readonly __typename?: 'battlepass_aggregate'
	readonly aggregate?: Maybe<Battlepass_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Battlepass>
}

export type Battlepass_Aggregate_Bool_Exp = {
	readonly count?: InputMaybe<Battlepass_Aggregate_Bool_Exp_Count>
}

export type Battlepass_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<Battlepass_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Battlepass_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "battlepass" */
export type Battlepass_Aggregate_Fields = {
	readonly __typename?: 'battlepass_aggregate_fields'
	readonly avg?: Maybe<Battlepass_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Battlepass_Max_Fields>
	readonly min?: Maybe<Battlepass_Min_Fields>
	readonly stddev?: Maybe<Battlepass_Stddev_Fields>
	readonly stddev_pop?: Maybe<Battlepass_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Battlepass_Stddev_Samp_Fields>
	readonly sum?: Maybe<Battlepass_Sum_Fields>
	readonly var_pop?: Maybe<Battlepass_Var_Pop_Fields>
	readonly var_samp?: Maybe<Battlepass_Var_Samp_Fields>
	readonly variance?: Maybe<Battlepass_Variance_Fields>
}

/** aggregate fields of "battlepass" */
export type Battlepass_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Battlepass_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "battlepass" */
export type Battlepass_Aggregate_Order_By = {
	readonly avg?: InputMaybe<Battlepass_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Battlepass_Max_Order_By>
	readonly min?: InputMaybe<Battlepass_Min_Order_By>
	readonly stddev?: InputMaybe<Battlepass_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<Battlepass_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<Battlepass_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<Battlepass_Sum_Order_By>
	readonly var_pop?: InputMaybe<Battlepass_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<Battlepass_Var_Samp_Order_By>
	readonly variance?: InputMaybe<Battlepass_Variance_Order_By>
}

/** input type for inserting array relation for remote table "battlepass" */
export type Battlepass_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<Battlepass_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Battlepass_On_Conflict>
}

/** aggregate avg on columns */
export type Battlepass_Avg_Fields = {
	readonly __typename?: 'battlepass_avg_fields'
	readonly active_from_block?: Maybe<Scalars['Float']>
	readonly active_to_block?: Maybe<Scalars['Float']>
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "battlepass" */
export type Battlepass_Avg_Order_By = {
	readonly active_from_block?: InputMaybe<Order_By>
	readonly active_to_block?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly price?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "battlepass". All fields are combined with a logical 'AND'. */
export type Battlepass_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Battlepass_Bool_Exp>>
	readonly _not?: InputMaybe<Battlepass_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Battlepass_Bool_Exp>>
	readonly active_from_block?: InputMaybe<Int_Comparison_Exp>
	readonly active_to_block?: InputMaybe<Int_Comparison_Exp>
	readonly battlepass_nfts?: InputMaybe<Battlepass_Nft_Bool_Exp>
	readonly battlepass_nfts_aggregate?: InputMaybe<Battlepass_Nft_Aggregate_Bool_Exp>
	readonly cid?: InputMaybe<String_Comparison_Exp>
	readonly created_at_block?: InputMaybe<Int_Comparison_Exp>
	readonly creator_id?: InputMaybe<String_Comparison_Exp>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly identity?: InputMaybe<Identity_Bool_Exp>
	readonly image?: InputMaybe<String_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly org_id?: InputMaybe<String_Comparison_Exp>
	readonly organization?: InputMaybe<Organization_Bool_Exp>
	readonly price?: InputMaybe<Numeric_Comparison_Exp>
	readonly season?: InputMaybe<String_Comparison_Exp>
	readonly state?: InputMaybe<String_Comparison_Exp>
	readonly updated_at_block?: InputMaybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "battlepass" */
export enum Battlepass_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_434ed07af6067d5b12ec01d502c = 'PK_434ed07af6067d5b12ec01d502c',
}

/** input type for incrementing numeric columns in table "battlepass" */
export type Battlepass_Inc_Input = {
	readonly active_from_block?: InputMaybe<Scalars['Int']>
	readonly active_to_block?: InputMaybe<Scalars['Int']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly price?: InputMaybe<Scalars['numeric']>
	readonly updated_at_block?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "battlepass" */
export type Battlepass_Insert_Input = {
	readonly active_from_block?: InputMaybe<Scalars['Int']>
	readonly active_to_block?: InputMaybe<Scalars['Int']>
	readonly battlepass_nfts?: InputMaybe<Battlepass_Nft_Arr_Rel_Insert_Input>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly creator_id?: InputMaybe<Scalars['String']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly image?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly org_id?: InputMaybe<Scalars['String']>
	readonly organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>
	readonly price?: InputMaybe<Scalars['numeric']>
	readonly season?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly updated_at_block?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Battlepass_Max_Fields = {
	readonly __typename?: 'battlepass_max_fields'
	readonly active_from_block?: Maybe<Scalars['Int']>
	readonly active_to_block?: Maybe<Scalars['Int']>
	readonly cid?: Maybe<Scalars['String']>
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly creator_id?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly org_id?: Maybe<Scalars['String']>
	readonly price?: Maybe<Scalars['numeric']>
	readonly season?: Maybe<Scalars['String']>
	readonly state?: Maybe<Scalars['String']>
	readonly updated_at_block?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "battlepass" */
export type Battlepass_Max_Order_By = {
	readonly active_from_block?: InputMaybe<Order_By>
	readonly active_to_block?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator_id?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly image?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly org_id?: InputMaybe<Order_By>
	readonly price?: InputMaybe<Order_By>
	readonly season?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Battlepass_Min_Fields = {
	readonly __typename?: 'battlepass_min_fields'
	readonly active_from_block?: Maybe<Scalars['Int']>
	readonly active_to_block?: Maybe<Scalars['Int']>
	readonly cid?: Maybe<Scalars['String']>
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly creator_id?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly org_id?: Maybe<Scalars['String']>
	readonly price?: Maybe<Scalars['numeric']>
	readonly season?: Maybe<Scalars['String']>
	readonly state?: Maybe<Scalars['String']>
	readonly updated_at_block?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "battlepass" */
export type Battlepass_Min_Order_By = {
	readonly active_from_block?: InputMaybe<Order_By>
	readonly active_to_block?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator_id?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly image?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly org_id?: InputMaybe<Order_By>
	readonly price?: InputMaybe<Order_By>
	readonly season?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** response of any mutation on the table "battlepass" */
export type Battlepass_Mutation_Response = {
	readonly __typename?: 'battlepass_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Battlepass>
}

/** columns and relationships of "battlepass_nft" */
export type Battlepass_Nft = {
	readonly __typename?: 'battlepass_nft'
	/** An object relationship */
	readonly battlepass?: Maybe<Battlepass>
	readonly battlepass_id?: Maybe<Scalars['String']>
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	/** An object relationship */
	readonly nft?: Maybe<Nft>
	readonly nft_id?: Maybe<Scalars['String']>
	readonly owner_id?: Maybe<Scalars['String']>
}

/** aggregated selection of "battlepass_nft" */
export type Battlepass_Nft_Aggregate = {
	readonly __typename?: 'battlepass_nft_aggregate'
	readonly aggregate?: Maybe<Battlepass_Nft_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Battlepass_Nft>
}

export type Battlepass_Nft_Aggregate_Bool_Exp = {
	readonly count?: InputMaybe<Battlepass_Nft_Aggregate_Bool_Exp_Count>
}

export type Battlepass_Nft_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Battlepass_Nft_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "battlepass_nft" */
export type Battlepass_Nft_Aggregate_Fields = {
	readonly __typename?: 'battlepass_nft_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Battlepass_Nft_Max_Fields>
	readonly min?: Maybe<Battlepass_Nft_Min_Fields>
}

/** aggregate fields of "battlepass_nft" */
export type Battlepass_Nft_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "battlepass_nft" */
export type Battlepass_Nft_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Battlepass_Nft_Max_Order_By>
	readonly min?: InputMaybe<Battlepass_Nft_Min_Order_By>
}

/** input type for inserting array relation for remote table "battlepass_nft" */
export type Battlepass_Nft_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<Battlepass_Nft_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Battlepass_Nft_On_Conflict>
}

/** Boolean expression to filter rows from the table "battlepass_nft". All fields are combined with a logical 'AND'. */
export type Battlepass_Nft_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Battlepass_Nft_Bool_Exp>>
	readonly _not?: InputMaybe<Battlepass_Nft_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Battlepass_Nft_Bool_Exp>>
	readonly battlepass?: InputMaybe<Battlepass_Bool_Exp>
	readonly battlepass_id?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly identity?: InputMaybe<Identity_Bool_Exp>
	readonly nft?: InputMaybe<Nft_Bool_Exp>
	readonly nft_id?: InputMaybe<String_Comparison_Exp>
	readonly owner_id?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "battlepass_nft" */
export enum Battlepass_Nft_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_403a8a9635a02968aca94a14c75 = 'PK_403a8a9635a02968aca94a14c75',
}

/** input type for inserting data into table "battlepass_nft" */
export type Battlepass_Nft_Insert_Input = {
	readonly battlepass?: InputMaybe<Battlepass_Obj_Rel_Insert_Input>
	readonly battlepass_id?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly nft?: InputMaybe<Nft_Obj_Rel_Insert_Input>
	readonly nft_id?: InputMaybe<Scalars['String']>
	readonly owner_id?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Battlepass_Nft_Max_Fields = {
	readonly __typename?: 'battlepass_nft_max_fields'
	readonly battlepass_id?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly nft_id?: Maybe<Scalars['String']>
	readonly owner_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "battlepass_nft" */
export type Battlepass_Nft_Max_Order_By = {
	readonly battlepass_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly nft_id?: InputMaybe<Order_By>
	readonly owner_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Battlepass_Nft_Min_Fields = {
	readonly __typename?: 'battlepass_nft_min_fields'
	readonly battlepass_id?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly nft_id?: Maybe<Scalars['String']>
	readonly owner_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "battlepass_nft" */
export type Battlepass_Nft_Min_Order_By = {
	readonly battlepass_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly nft_id?: InputMaybe<Order_By>
	readonly owner_id?: InputMaybe<Order_By>
}

/** response of any mutation on the table "battlepass_nft" */
export type Battlepass_Nft_Mutation_Response = {
	readonly __typename?: 'battlepass_nft_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Battlepass_Nft>
}

/** on_conflict condition type for table "battlepass_nft" */
export type Battlepass_Nft_On_Conflict = {
	readonly constraint: Battlepass_Nft_Constraint
	readonly update_columns?: ReadonlyArray<Battlepass_Nft_Update_Column>
	readonly where?: InputMaybe<Battlepass_Nft_Bool_Exp>
}

/** Ordering options when selecting data from "battlepass_nft". */
export type Battlepass_Nft_Order_By = {
	readonly battlepass?: InputMaybe<Battlepass_Order_By>
	readonly battlepass_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly nft?: InputMaybe<Nft_Order_By>
	readonly nft_id?: InputMaybe<Order_By>
	readonly owner_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: battlepass_nft */
export type Battlepass_Nft_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

/** select columns of table "battlepass_nft" */
export enum Battlepass_Nft_Select_Column {
	/** column name */
	BattlepassId = 'battlepass_id',
	/** column name */
	Id = 'id',
	/** column name */
	NftId = 'nft_id',
	/** column name */
	OwnerId = 'owner_id',
}

/** input type for updating data in table "battlepass_nft" */
export type Battlepass_Nft_Set_Input = {
	readonly battlepass_id?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly nft_id?: InputMaybe<Scalars['String']>
	readonly owner_id?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "battlepass_nft" */
export type Battlepass_Nft_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Battlepass_Nft_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Battlepass_Nft_Stream_Cursor_Value_Input = {
	readonly battlepass_id?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly nft_id?: InputMaybe<Scalars['String']>
	readonly owner_id?: InputMaybe<Scalars['String']>
}

/** update columns of table "battlepass_nft" */
export enum Battlepass_Nft_Update_Column {
	/** column name */
	BattlepassId = 'battlepass_id',
	/** column name */
	Id = 'id',
	/** column name */
	NftId = 'nft_id',
	/** column name */
	OwnerId = 'owner_id',
}

export type Battlepass_Nft_Updates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Battlepass_Nft_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Battlepass_Nft_Bool_Exp
}

/** input type for inserting object relation for remote table "battlepass" */
export type Battlepass_Obj_Rel_Insert_Input = {
	readonly data: Battlepass_Insert_Input
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Battlepass_On_Conflict>
}

/** on_conflict condition type for table "battlepass" */
export type Battlepass_On_Conflict = {
	readonly constraint: Battlepass_Constraint
	readonly update_columns?: ReadonlyArray<Battlepass_Update_Column>
	readonly where?: InputMaybe<Battlepass_Bool_Exp>
}

/** Ordering options when selecting data from "battlepass". */
export type Battlepass_Order_By = {
	readonly active_from_block?: InputMaybe<Order_By>
	readonly active_to_block?: InputMaybe<Order_By>
	readonly battlepass_nfts_aggregate?: InputMaybe<Battlepass_Nft_Aggregate_Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator_id?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly image?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly org_id?: InputMaybe<Order_By>
	readonly organization?: InputMaybe<Organization_Order_By>
	readonly price?: InputMaybe<Order_By>
	readonly season?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** primary key columns input for table: battlepass */
export type Battlepass_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

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
	UpdatedAtBlock = 'updated_at_block',
}

/** input type for updating data in table "battlepass" */
export type Battlepass_Set_Input = {
	readonly active_from_block?: InputMaybe<Scalars['Int']>
	readonly active_to_block?: InputMaybe<Scalars['Int']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly creator_id?: InputMaybe<Scalars['String']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly org_id?: InputMaybe<Scalars['String']>
	readonly price?: InputMaybe<Scalars['numeric']>
	readonly season?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly updated_at_block?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Battlepass_Stddev_Fields = {
	readonly __typename?: 'battlepass_stddev_fields'
	readonly active_from_block?: Maybe<Scalars['Float']>
	readonly active_to_block?: Maybe<Scalars['Float']>
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "battlepass" */
export type Battlepass_Stddev_Order_By = {
	readonly active_from_block?: InputMaybe<Order_By>
	readonly active_to_block?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly price?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Battlepass_Stddev_Pop_Fields = {
	readonly __typename?: 'battlepass_stddev_pop_fields'
	readonly active_from_block?: Maybe<Scalars['Float']>
	readonly active_to_block?: Maybe<Scalars['Float']>
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "battlepass" */
export type Battlepass_Stddev_Pop_Order_By = {
	readonly active_from_block?: InputMaybe<Order_By>
	readonly active_to_block?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly price?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Battlepass_Stddev_Samp_Fields = {
	readonly __typename?: 'battlepass_stddev_samp_fields'
	readonly active_from_block?: Maybe<Scalars['Float']>
	readonly active_to_block?: Maybe<Scalars['Float']>
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "battlepass" */
export type Battlepass_Stddev_Samp_Order_By = {
	readonly active_from_block?: InputMaybe<Order_By>
	readonly active_to_block?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly price?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "battlepass" */
export type Battlepass_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Battlepass_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Battlepass_Stream_Cursor_Value_Input = {
	readonly active_from_block?: InputMaybe<Scalars['Int']>
	readonly active_to_block?: InputMaybe<Scalars['Int']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly creator_id?: InputMaybe<Scalars['String']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly org_id?: InputMaybe<Scalars['String']>
	readonly price?: InputMaybe<Scalars['numeric']>
	readonly season?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly updated_at_block?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type Battlepass_Sum_Fields = {
	readonly __typename?: 'battlepass_sum_fields'
	readonly active_from_block?: Maybe<Scalars['Int']>
	readonly active_to_block?: Maybe<Scalars['Int']>
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly price?: Maybe<Scalars['numeric']>
	readonly updated_at_block?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "battlepass" */
export type Battlepass_Sum_Order_By = {
	readonly active_from_block?: InputMaybe<Order_By>
	readonly active_to_block?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly price?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** update columns of table "battlepass" */
export enum Battlepass_Update_Column {
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
	UpdatedAtBlock = 'updated_at_block',
}

export type Battlepass_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Battlepass_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Battlepass_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Battlepass_Bool_Exp
}

/** aggregate var_pop on columns */
export type Battlepass_Var_Pop_Fields = {
	readonly __typename?: 'battlepass_var_pop_fields'
	readonly active_from_block?: Maybe<Scalars['Float']>
	readonly active_to_block?: Maybe<Scalars['Float']>
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "battlepass" */
export type Battlepass_Var_Pop_Order_By = {
	readonly active_from_block?: InputMaybe<Order_By>
	readonly active_to_block?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly price?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Battlepass_Var_Samp_Fields = {
	readonly __typename?: 'battlepass_var_samp_fields'
	readonly active_from_block?: Maybe<Scalars['Float']>
	readonly active_to_block?: Maybe<Scalars['Float']>
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "battlepass" */
export type Battlepass_Var_Samp_Order_By = {
	readonly active_from_block?: InputMaybe<Order_By>
	readonly active_to_block?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly price?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Battlepass_Variance_Fields = {
	readonly __typename?: 'battlepass_variance_fields'
	readonly active_from_block?: Maybe<Scalars['Float']>
	readonly active_to_block?: Maybe<Scalars['Float']>
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly price?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "battlepass" */
export type Battlepass_Variance_Order_By = {
	readonly active_from_block?: InputMaybe<Order_By>
	readonly active_to_block?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly price?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['bigint']>
	readonly _gt?: InputMaybe<Scalars['bigint']>
	readonly _gte?: InputMaybe<Scalars['bigint']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['bigint']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['bigint']>
	readonly _lte?: InputMaybe<Scalars['bigint']>
	readonly _neq?: InputMaybe<Scalars['bigint']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['bigint']>>
}

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['bpchar']>
	readonly _gt?: InputMaybe<Scalars['bpchar']>
	readonly _gte?: InputMaybe<Scalars['bpchar']>
	/** does the column match the given case-insensitive pattern */
	readonly _ilike?: InputMaybe<Scalars['bpchar']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['bpchar']>>
	/** does the column match the given POSIX regular expression, case insensitive */
	readonly _iregex?: InputMaybe<Scalars['bpchar']>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
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
	readonly __typename?: 'campaign'
	readonly admin: Scalars['String']
	readonly admin_identity_id?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly campaign_contributors: ReadonlyArray<Campaign_Contributor>
	/** An aggregate relationship */
	readonly campaign_contributors_aggregate: Campaign_Contributor_Aggregate
	readonly cid: Scalars['String']
	readonly created_at_block: Scalars['Int']
	readonly creator: Scalars['String']
	readonly creator_identity_id?: Maybe<Scalars['String']>
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
	readonly organization_id?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly proposals: ReadonlyArray<Proposal>
	/** An aggregate relationship */
	readonly proposals_aggregate: Proposal_Aggregate
	readonly protocol: Scalars['String']
	readonly start: Scalars['Int']
	readonly state: Scalars['String']
	readonly target: Scalars['numeric']
	readonly title: Scalars['String']
	readonly token_name?: Maybe<Scalars['String']>
	readonly token_symbol?: Maybe<Scalars['String']>
}

/** columns and relationships of "campaign" */
export type CampaignCampaign_ContributorsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Contributor_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Contributor_Order_By>>
	where?: InputMaybe<Campaign_Contributor_Bool_Exp>
}

/** columns and relationships of "campaign" */
export type CampaignCampaign_Contributors_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Contributor_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Contributor_Order_By>>
	where?: InputMaybe<Campaign_Contributor_Bool_Exp>
}

/** columns and relationships of "campaign" */
export type CampaignProposalsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>
	where?: InputMaybe<Proposal_Bool_Exp>
}

/** columns and relationships of "campaign" */
export type CampaignProposals_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>
	where?: InputMaybe<Proposal_Bool_Exp>
}

/** aggregated selection of "campaign" */
export type Campaign_Aggregate = {
	readonly __typename?: 'campaign_aggregate'
	readonly aggregate?: Maybe<Campaign_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Campaign>
}

export type Campaign_Aggregate_Bool_Exp = {
	readonly count?: InputMaybe<Campaign_Aggregate_Bool_Exp_Count>
}

export type Campaign_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Campaign_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "campaign" */
export type Campaign_Aggregate_Fields = {
	readonly __typename?: 'campaign_aggregate_fields'
	readonly avg?: Maybe<Campaign_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Campaign_Max_Fields>
	readonly min?: Maybe<Campaign_Min_Fields>
	readonly stddev?: Maybe<Campaign_Stddev_Fields>
	readonly stddev_pop?: Maybe<Campaign_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Campaign_Stddev_Samp_Fields>
	readonly sum?: Maybe<Campaign_Sum_Fields>
	readonly var_pop?: Maybe<Campaign_Var_Pop_Fields>
	readonly var_samp?: Maybe<Campaign_Var_Samp_Fields>
	readonly variance?: Maybe<Campaign_Variance_Fields>
}

/** aggregate fields of "campaign" */
export type Campaign_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
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

/** input type for inserting array relation for remote table "campaign" */
export type Campaign_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<Campaign_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Campaign_On_Conflict>
}

/** aggregate avg on columns */
export type Campaign_Avg_Fields = {
	readonly __typename?: 'campaign_avg_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
	readonly target?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "campaign" */
export type Campaign_Avg_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
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
	readonly campaign_contributors_aggregate?: InputMaybe<Campaign_Contributor_Aggregate_Bool_Exp>
	readonly cid?: InputMaybe<String_Comparison_Exp>
	readonly created_at_block?: InputMaybe<Int_Comparison_Exp>
	readonly creator?: InputMaybe<String_Comparison_Exp>
	readonly creator_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly deposit?: InputMaybe<Numeric_Comparison_Exp>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly email?: InputMaybe<String_Comparison_Exp>
	readonly expiry?: InputMaybe<Int_Comparison_Exp>
	readonly governance?: InputMaybe<String_Comparison_Exp>
	readonly header?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly identity?: InputMaybe<Identity_Bool_Exp>
	readonly identityByCreatorIdentityId?: InputMaybe<Identity_Bool_Exp>
	readonly logo?: InputMaybe<String_Comparison_Exp>
	readonly markdown?: InputMaybe<String_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly organization?: InputMaybe<Organization_Bool_Exp>
	readonly organization_id?: InputMaybe<String_Comparison_Exp>
	readonly proposals?: InputMaybe<Proposal_Bool_Exp>
	readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>
	readonly protocol?: InputMaybe<String_Comparison_Exp>
	readonly start?: InputMaybe<Int_Comparison_Exp>
	readonly state?: InputMaybe<String_Comparison_Exp>
	readonly target?: InputMaybe<Numeric_Comparison_Exp>
	readonly title?: InputMaybe<String_Comparison_Exp>
	readonly token_name?: InputMaybe<String_Comparison_Exp>
	readonly token_symbol?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "campaign" */
export enum Campaign_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_0ce34d26e7f2eb316a3a592cdc4 = 'PK_0ce34d26e7f2eb316a3a592cdc4',
}

/** columns and relationships of "campaign_contributor" */
export type Campaign_Contributor = {
	readonly __typename?: 'campaign_contributor'
	readonly address: Scalars['String']
	/** An object relationship */
	readonly campaign?: Maybe<Campaign>
	readonly campaign_id?: Maybe<Scalars['String']>
	readonly contributed: Scalars['numeric']
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly identity_id?: Maybe<Scalars['String']>
}

/** aggregated selection of "campaign_contributor" */
export type Campaign_Contributor_Aggregate = {
	readonly __typename?: 'campaign_contributor_aggregate'
	readonly aggregate?: Maybe<Campaign_Contributor_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Campaign_Contributor>
}

export type Campaign_Contributor_Aggregate_Bool_Exp = {
	readonly count?: InputMaybe<Campaign_Contributor_Aggregate_Bool_Exp_Count>
}

export type Campaign_Contributor_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<Campaign_Contributor_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Campaign_Contributor_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "campaign_contributor" */
export type Campaign_Contributor_Aggregate_Fields = {
	readonly __typename?: 'campaign_contributor_aggregate_fields'
	readonly avg?: Maybe<Campaign_Contributor_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Campaign_Contributor_Max_Fields>
	readonly min?: Maybe<Campaign_Contributor_Min_Fields>
	readonly stddev?: Maybe<Campaign_Contributor_Stddev_Fields>
	readonly stddev_pop?: Maybe<Campaign_Contributor_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Campaign_Contributor_Stddev_Samp_Fields>
	readonly sum?: Maybe<Campaign_Contributor_Sum_Fields>
	readonly var_pop?: Maybe<Campaign_Contributor_Var_Pop_Fields>
	readonly var_samp?: Maybe<Campaign_Contributor_Var_Samp_Fields>
	readonly variance?: Maybe<Campaign_Contributor_Variance_Fields>
}

/** aggregate fields of "campaign_contributor" */
export type Campaign_Contributor_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Campaign_Contributor_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
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

/** input type for inserting array relation for remote table "campaign_contributor" */
export type Campaign_Contributor_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<Campaign_Contributor_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Campaign_Contributor_On_Conflict>
}

/** aggregate avg on columns */
export type Campaign_Contributor_Avg_Fields = {
	readonly __typename?: 'campaign_contributor_avg_fields'
	readonly contributed?: Maybe<Scalars['Float']>
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

/** unique or primary key constraints on table "campaign_contributor" */
export enum Campaign_Contributor_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_0a35c586180eb88ed47f33d0914 = 'PK_0a35c586180eb88ed47f33d0914',
}

/** input type for incrementing numeric columns in table "campaign_contributor" */
export type Campaign_Contributor_Inc_Input = {
	readonly contributed?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "campaign_contributor" */
export type Campaign_Contributor_Insert_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly campaign?: InputMaybe<Campaign_Obj_Rel_Insert_Input>
	readonly campaign_id?: InputMaybe<Scalars['String']>
	readonly contributed?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly identity_id?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Campaign_Contributor_Max_Fields = {
	readonly __typename?: 'campaign_contributor_max_fields'
	readonly address?: Maybe<Scalars['String']>
	readonly campaign_id?: Maybe<Scalars['String']>
	readonly contributed?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly identity_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Max_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly campaign_id?: InputMaybe<Order_By>
	readonly contributed?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Campaign_Contributor_Min_Fields = {
	readonly __typename?: 'campaign_contributor_min_fields'
	readonly address?: Maybe<Scalars['String']>
	readonly campaign_id?: Maybe<Scalars['String']>
	readonly contributed?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly identity_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Min_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly campaign_id?: InputMaybe<Order_By>
	readonly contributed?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
}

/** response of any mutation on the table "campaign_contributor" */
export type Campaign_Contributor_Mutation_Response = {
	readonly __typename?: 'campaign_contributor_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Campaign_Contributor>
}

/** on_conflict condition type for table "campaign_contributor" */
export type Campaign_Contributor_On_Conflict = {
	readonly constraint: Campaign_Contributor_Constraint
	readonly update_columns?: ReadonlyArray<Campaign_Contributor_Update_Column>
	readonly where?: InputMaybe<Campaign_Contributor_Bool_Exp>
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

/** primary key columns input for table: campaign_contributor */
export type Campaign_Contributor_Pk_Columns_Input = {
	readonly id: Scalars['String']
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

/** input type for updating data in table "campaign_contributor" */
export type Campaign_Contributor_Set_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly campaign_id?: InputMaybe<Scalars['String']>
	readonly contributed?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity_id?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Campaign_Contributor_Stddev_Fields = {
	readonly __typename?: 'campaign_contributor_stddev_fields'
	readonly contributed?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Stddev_Order_By = {
	readonly contributed?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Campaign_Contributor_Stddev_Pop_Fields = {
	readonly __typename?: 'campaign_contributor_stddev_pop_fields'
	readonly contributed?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Stddev_Pop_Order_By = {
	readonly contributed?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Campaign_Contributor_Stddev_Samp_Fields = {
	readonly __typename?: 'campaign_contributor_stddev_samp_fields'
	readonly contributed?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Stddev_Samp_Order_By = {
	readonly contributed?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "campaign_contributor" */
export type Campaign_Contributor_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Campaign_Contributor_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Campaign_Contributor_Stream_Cursor_Value_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly campaign_id?: InputMaybe<Scalars['String']>
	readonly contributed?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity_id?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type Campaign_Contributor_Sum_Fields = {
	readonly __typename?: 'campaign_contributor_sum_fields'
	readonly contributed?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Sum_Order_By = {
	readonly contributed?: InputMaybe<Order_By>
}

/** update columns of table "campaign_contributor" */
export enum Campaign_Contributor_Update_Column {
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

export type Campaign_Contributor_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Campaign_Contributor_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Campaign_Contributor_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Campaign_Contributor_Bool_Exp
}

/** aggregate var_pop on columns */
export type Campaign_Contributor_Var_Pop_Fields = {
	readonly __typename?: 'campaign_contributor_var_pop_fields'
	readonly contributed?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Var_Pop_Order_By = {
	readonly contributed?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Campaign_Contributor_Var_Samp_Fields = {
	readonly __typename?: 'campaign_contributor_var_samp_fields'
	readonly contributed?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Var_Samp_Order_By = {
	readonly contributed?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Campaign_Contributor_Variance_Fields = {
	readonly __typename?: 'campaign_contributor_variance_fields'
	readonly contributed?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Variance_Order_By = {
	readonly contributed?: InputMaybe<Order_By>
}

/** input type for incrementing numeric columns in table "campaign" */
export type Campaign_Inc_Input = {
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly expiry?: InputMaybe<Scalars['Int']>
	readonly start?: InputMaybe<Scalars['Int']>
	readonly target?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "campaign" */
export type Campaign_Insert_Input = {
	readonly admin?: InputMaybe<Scalars['String']>
	readonly admin_identity_id?: InputMaybe<Scalars['String']>
	readonly campaign_contributors?: InputMaybe<Campaign_Contributor_Arr_Rel_Insert_Input>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creator_identity_id?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly expiry?: InputMaybe<Scalars['Int']>
	readonly governance?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly identityByCreatorIdentityId?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly markdown?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>
	readonly organization_id?: InputMaybe<Scalars['String']>
	readonly proposals?: InputMaybe<Proposal_Arr_Rel_Insert_Input>
	readonly protocol?: InputMaybe<Scalars['String']>
	readonly start?: InputMaybe<Scalars['Int']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly target?: InputMaybe<Scalars['numeric']>
	readonly title?: InputMaybe<Scalars['String']>
	readonly token_name?: InputMaybe<Scalars['String']>
	readonly token_symbol?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Campaign_Max_Fields = {
	readonly __typename?: 'campaign_max_fields'
	readonly admin?: Maybe<Scalars['String']>
	readonly admin_identity_id?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly creator?: Maybe<Scalars['String']>
	readonly creator_identity_id?: Maybe<Scalars['String']>
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
	readonly organization_id?: Maybe<Scalars['String']>
	readonly protocol?: Maybe<Scalars['String']>
	readonly start?: Maybe<Scalars['Int']>
	readonly state?: Maybe<Scalars['String']>
	readonly target?: Maybe<Scalars['numeric']>
	readonly title?: Maybe<Scalars['String']>
	readonly token_name?: Maybe<Scalars['String']>
	readonly token_symbol?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "campaign" */
export type Campaign_Max_Order_By = {
	readonly admin?: InputMaybe<Order_By>
	readonly admin_identity_id?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly email?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly governance?: InputMaybe<Order_By>
	readonly header?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly logo?: InputMaybe<Order_By>
	readonly markdown?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly organization_id?: InputMaybe<Order_By>
	readonly protocol?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
	readonly title?: InputMaybe<Order_By>
	readonly token_name?: InputMaybe<Order_By>
	readonly token_symbol?: InputMaybe<Order_By>
}

/** columns and relationships of "campaign_metadata" */
export type Campaign_Metadata = {
	readonly __typename?: 'campaign_metadata'
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
export type Campaign_Metadata_Aggregate = {
	readonly __typename?: 'campaign_metadata_aggregate'
	readonly aggregate?: Maybe<Campaign_Metadata_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Campaign_Metadata>
}

/** aggregate fields of "campaign_metadata" */
export type Campaign_Metadata_Aggregate_Fields = {
	readonly __typename?: 'campaign_metadata_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Campaign_Metadata_Max_Fields>
	readonly min?: Maybe<Campaign_Metadata_Min_Fields>
}

/** aggregate fields of "campaign_metadata" */
export type Campaign_Metadata_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Campaign_Metadata_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "campaign_metadata". All fields are combined with a logical 'AND'. */
export type Campaign_Metadata_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Campaign_Metadata_Bool_Exp>>
	readonly _not?: InputMaybe<Campaign_Metadata_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Campaign_Metadata_Bool_Exp>>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly email?: InputMaybe<String_Comparison_Exp>
	readonly header?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly logo?: InputMaybe<String_Comparison_Exp>
	readonly markdown?: InputMaybe<String_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly title?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "campaign_metadata" */
export enum Campaign_Metadata_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_78e8f198409b4db925b1a44d092 = 'PK_78e8f198409b4db925b1a44d092',
}

/** input type for inserting data into table "campaign_metadata" */
export type Campaign_Metadata_Insert_Input = {
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
export type Campaign_Metadata_Max_Fields = {
	readonly __typename?: 'campaign_metadata_max_fields'
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
export type Campaign_Metadata_Min_Fields = {
	readonly __typename?: 'campaign_metadata_min_fields'
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
export type Campaign_Metadata_Mutation_Response = {
	readonly __typename?: 'campaign_metadata_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Campaign_Metadata>
}

/** on_conflict condition type for table "campaign_metadata" */
export type Campaign_Metadata_On_Conflict = {
	readonly constraint: Campaign_Metadata_Constraint
	readonly update_columns?: ReadonlyArray<Campaign_Metadata_Update_Column>
	readonly where?: InputMaybe<Campaign_Metadata_Bool_Exp>
}

/** Ordering options when selecting data from "campaign_metadata". */
export type Campaign_Metadata_Order_By = {
	readonly description?: InputMaybe<Order_By>
	readonly email?: InputMaybe<Order_By>
	readonly header?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly logo?: InputMaybe<Order_By>
	readonly markdown?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly title?: InputMaybe<Order_By>
}

/** primary key columns input for table: campaign_metadata */
export type Campaign_Metadata_Pk_Columns_Input = {
	readonly id: Scalars['String']
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

/** input type for updating data in table "campaign_metadata" */
export type Campaign_Metadata_Set_Input = {
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
export type Campaign_Metadata_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Campaign_Metadata_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Campaign_Metadata_Stream_Cursor_Value_Input = {
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
export enum Campaign_Metadata_Update_Column {
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

export type Campaign_Metadata_Updates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Campaign_Metadata_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Campaign_Metadata_Bool_Exp
}

/** aggregate min on columns */
export type Campaign_Min_Fields = {
	readonly __typename?: 'campaign_min_fields'
	readonly admin?: Maybe<Scalars['String']>
	readonly admin_identity_id?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly creator?: Maybe<Scalars['String']>
	readonly creator_identity_id?: Maybe<Scalars['String']>
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
	readonly organization_id?: Maybe<Scalars['String']>
	readonly protocol?: Maybe<Scalars['String']>
	readonly start?: Maybe<Scalars['Int']>
	readonly state?: Maybe<Scalars['String']>
	readonly target?: Maybe<Scalars['numeric']>
	readonly title?: Maybe<Scalars['String']>
	readonly token_name?: Maybe<Scalars['String']>
	readonly token_symbol?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "campaign" */
export type Campaign_Min_Order_By = {
	readonly admin?: InputMaybe<Order_By>
	readonly admin_identity_id?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly email?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly governance?: InputMaybe<Order_By>
	readonly header?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly logo?: InputMaybe<Order_By>
	readonly markdown?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly organization_id?: InputMaybe<Order_By>
	readonly protocol?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
	readonly title?: InputMaybe<Order_By>
	readonly token_name?: InputMaybe<Order_By>
	readonly token_symbol?: InputMaybe<Order_By>
}

/** response of any mutation on the table "campaign" */
export type Campaign_Mutation_Response = {
	readonly __typename?: 'campaign_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Campaign>
}

/** input type for inserting object relation for remote table "campaign" */
export type Campaign_Obj_Rel_Insert_Input = {
	readonly data: Campaign_Insert_Input
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Campaign_On_Conflict>
}

/** on_conflict condition type for table "campaign" */
export type Campaign_On_Conflict = {
	readonly constraint: Campaign_Constraint
	readonly update_columns?: ReadonlyArray<Campaign_Update_Column>
	readonly where?: InputMaybe<Campaign_Bool_Exp>
}

/** Ordering options when selecting data from "campaign". */
export type Campaign_Order_By = {
	readonly admin?: InputMaybe<Order_By>
	readonly admin_identity_id?: InputMaybe<Order_By>
	readonly campaign_contributors_aggregate?: InputMaybe<Campaign_Contributor_Aggregate_Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly email?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly governance?: InputMaybe<Order_By>
	readonly header?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly identityByCreatorIdentityId?: InputMaybe<Identity_Order_By>
	readonly logo?: InputMaybe<Order_By>
	readonly markdown?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly organization?: InputMaybe<Organization_Order_By>
	readonly organization_id?: InputMaybe<Order_By>
	readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>
	readonly protocol?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
	readonly title?: InputMaybe<Order_By>
	readonly token_name?: InputMaybe<Order_By>
	readonly token_symbol?: InputMaybe<Order_By>
}

/** primary key columns input for table: campaign */
export type Campaign_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

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
	TokenSymbol = 'token_symbol',
}

/** input type for updating data in table "campaign" */
export type Campaign_Set_Input = {
	readonly admin?: InputMaybe<Scalars['String']>
	readonly admin_identity_id?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creator_identity_id?: InputMaybe<Scalars['String']>
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
	readonly organization_id?: InputMaybe<Scalars['String']>
	readonly protocol?: InputMaybe<Scalars['String']>
	readonly start?: InputMaybe<Scalars['Int']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly target?: InputMaybe<Scalars['numeric']>
	readonly title?: InputMaybe<Scalars['String']>
	readonly token_name?: InputMaybe<Scalars['String']>
	readonly token_symbol?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Campaign_Stddev_Fields = {
	readonly __typename?: 'campaign_stddev_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
	readonly target?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "campaign" */
export type Campaign_Stddev_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Campaign_Stddev_Pop_Fields = {
	readonly __typename?: 'campaign_stddev_pop_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
	readonly target?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "campaign" */
export type Campaign_Stddev_Pop_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Campaign_Stddev_Samp_Fields = {
	readonly __typename?: 'campaign_stddev_samp_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
	readonly target?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "campaign" */
export type Campaign_Stddev_Samp_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "campaign" */
export type Campaign_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Campaign_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Campaign_Stream_Cursor_Value_Input = {
	readonly admin?: InputMaybe<Scalars['String']>
	readonly admin_identity_id?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creator_identity_id?: InputMaybe<Scalars['String']>
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
	readonly organization_id?: InputMaybe<Scalars['String']>
	readonly protocol?: InputMaybe<Scalars['String']>
	readonly start?: InputMaybe<Scalars['Int']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly target?: InputMaybe<Scalars['numeric']>
	readonly title?: InputMaybe<Scalars['String']>
	readonly token_name?: InputMaybe<Scalars['String']>
	readonly token_symbol?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type Campaign_Sum_Fields = {
	readonly __typename?: 'campaign_sum_fields'
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly expiry?: Maybe<Scalars['Int']>
	readonly start?: Maybe<Scalars['Int']>
	readonly target?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "campaign" */
export type Campaign_Sum_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
}

/** update columns of table "campaign" */
export enum Campaign_Update_Column {
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
	TokenSymbol = 'token_symbol',
}

export type Campaign_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Campaign_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Campaign_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Campaign_Bool_Exp
}

/** aggregate var_pop on columns */
export type Campaign_Var_Pop_Fields = {
	readonly __typename?: 'campaign_var_pop_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
	readonly target?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "campaign" */
export type Campaign_Var_Pop_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Campaign_Var_Samp_Fields = {
	readonly __typename?: 'campaign_var_samp_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
	readonly target?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "campaign" */
export type Campaign_Var_Samp_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Campaign_Variance_Fields = {
	readonly __typename?: 'campaign_variance_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
	readonly target?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "campaign" */
export type Campaign_Variance_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
	readonly target?: InputMaybe<Order_By>
}

/** columns and relationships of "chain_state" */
export type Chain_State = {
	readonly __typename?: 'chain_state'
	readonly block_number: Scalars['Int']
	readonly id: Scalars['String']
	readonly timestamp: Scalars['timestamptz']
	readonly token_balance: Scalars['numeric']
	readonly token_holders: Scalars['Int']
}

/** aggregated selection of "chain_state" */
export type Chain_State_Aggregate = {
	readonly __typename?: 'chain_state_aggregate'
	readonly aggregate?: Maybe<Chain_State_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Chain_State>
}

/** aggregate fields of "chain_state" */
export type Chain_State_Aggregate_Fields = {
	readonly __typename?: 'chain_state_aggregate_fields'
	readonly avg?: Maybe<Chain_State_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Chain_State_Max_Fields>
	readonly min?: Maybe<Chain_State_Min_Fields>
	readonly stddev?: Maybe<Chain_State_Stddev_Fields>
	readonly stddev_pop?: Maybe<Chain_State_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Chain_State_Stddev_Samp_Fields>
	readonly sum?: Maybe<Chain_State_Sum_Fields>
	readonly var_pop?: Maybe<Chain_State_Var_Pop_Fields>
	readonly var_samp?: Maybe<Chain_State_Var_Samp_Fields>
	readonly variance?: Maybe<Chain_State_Variance_Fields>
}

/** aggregate fields of "chain_state" */
export type Chain_State_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Chain_State_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Chain_State_Avg_Fields = {
	readonly __typename?: 'chain_state_avg_fields'
	readonly block_number?: Maybe<Scalars['Float']>
	readonly token_balance?: Maybe<Scalars['Float']>
	readonly token_holders?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "chain_state". All fields are combined with a logical 'AND'. */
export type Chain_State_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Chain_State_Bool_Exp>>
	readonly _not?: InputMaybe<Chain_State_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Chain_State_Bool_Exp>>
	readonly block_number?: InputMaybe<Int_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly timestamp?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly token_balance?: InputMaybe<Numeric_Comparison_Exp>
	readonly token_holders?: InputMaybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "chain_state" */
export enum Chain_State_Constraint {
	/** unique or primary key constraint on columns "id" */
	PkE28e46a238ada7cbbcf711b3f6c = 'PK_e28e46a238ada7cbbcf711b3f6c',
}

/** input type for incrementing numeric columns in table "chain_state" */
export type Chain_State_Inc_Input = {
	readonly block_number?: InputMaybe<Scalars['Int']>
	readonly token_balance?: InputMaybe<Scalars['numeric']>
	readonly token_holders?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "chain_state" */
export type Chain_State_Insert_Input = {
	readonly block_number?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['timestamptz']>
	readonly token_balance?: InputMaybe<Scalars['numeric']>
	readonly token_holders?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Chain_State_Max_Fields = {
	readonly __typename?: 'chain_state_max_fields'
	readonly block_number?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly timestamp?: Maybe<Scalars['timestamptz']>
	readonly token_balance?: Maybe<Scalars['numeric']>
	readonly token_holders?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type Chain_State_Min_Fields = {
	readonly __typename?: 'chain_state_min_fields'
	readonly block_number?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly timestamp?: Maybe<Scalars['timestamptz']>
	readonly token_balance?: Maybe<Scalars['numeric']>
	readonly token_holders?: Maybe<Scalars['Int']>
}

/** response of any mutation on the table "chain_state" */
export type Chain_State_Mutation_Response = {
	readonly __typename?: 'chain_state_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Chain_State>
}

/** on_conflict condition type for table "chain_state" */
export type Chain_State_On_Conflict = {
	readonly constraint: Chain_State_Constraint
	readonly update_columns?: ReadonlyArray<Chain_State_Update_Column>
	readonly where?: InputMaybe<Chain_State_Bool_Exp>
}

/** Ordering options when selecting data from "chain_state". */
export type Chain_State_Order_By = {
	readonly block_number?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly timestamp?: InputMaybe<Order_By>
	readonly token_balance?: InputMaybe<Order_By>
	readonly token_holders?: InputMaybe<Order_By>
}

/** primary key columns input for table: chain_state */
export type Chain_State_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

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
	TokenHolders = 'token_holders',
}

/** input type for updating data in table "chain_state" */
export type Chain_State_Set_Input = {
	readonly block_number?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['timestamptz']>
	readonly token_balance?: InputMaybe<Scalars['numeric']>
	readonly token_holders?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Chain_State_Stddev_Fields = {
	readonly __typename?: 'chain_state_stddev_fields'
	readonly block_number?: Maybe<Scalars['Float']>
	readonly token_balance?: Maybe<Scalars['Float']>
	readonly token_holders?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Chain_State_Stddev_Pop_Fields = {
	readonly __typename?: 'chain_state_stddev_pop_fields'
	readonly block_number?: Maybe<Scalars['Float']>
	readonly token_balance?: Maybe<Scalars['Float']>
	readonly token_holders?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Chain_State_Stddev_Samp_Fields = {
	readonly __typename?: 'chain_state_stddev_samp_fields'
	readonly block_number?: Maybe<Scalars['Float']>
	readonly token_balance?: Maybe<Scalars['Float']>
	readonly token_holders?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "chain_state" */
export type Chain_State_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Chain_State_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Chain_State_Stream_Cursor_Value_Input = {
	readonly block_number?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['timestamptz']>
	readonly token_balance?: InputMaybe<Scalars['numeric']>
	readonly token_holders?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type Chain_State_Sum_Fields = {
	readonly __typename?: 'chain_state_sum_fields'
	readonly block_number?: Maybe<Scalars['Int']>
	readonly token_balance?: Maybe<Scalars['numeric']>
	readonly token_holders?: Maybe<Scalars['Int']>
}

/** update columns of table "chain_state" */
export enum Chain_State_Update_Column {
	/** column name */
	BlockNumber = 'block_number',
	/** column name */
	Id = 'id',
	/** column name */
	Timestamp = 'timestamp',
	/** column name */
	TokenBalance = 'token_balance',
	/** column name */
	TokenHolders = 'token_holders',
}

export type Chain_State_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Chain_State_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Chain_State_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Chain_State_Bool_Exp
}

/** aggregate var_pop on columns */
export type Chain_State_Var_Pop_Fields = {
	readonly __typename?: 'chain_state_var_pop_fields'
	readonly block_number?: Maybe<Scalars['Float']>
	readonly token_balance?: Maybe<Scalars['Float']>
	readonly token_holders?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Chain_State_Var_Samp_Fields = {
	readonly __typename?: 'chain_state_var_samp_fields'
	readonly block_number?: Maybe<Scalars['Float']>
	readonly token_balance?: Maybe<Scalars['Float']>
	readonly token_holders?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Chain_State_Variance_Fields = {
	readonly __typename?: 'chain_state_variance_fields'
	readonly block_number?: Maybe<Scalars['Float']>
	readonly token_balance?: Maybe<Scalars['Float']>
	readonly token_holders?: Maybe<Scalars['Float']>
}

/** columns and relationships of "current_chain_state" */
export type Current_Chain_State = {
	readonly __typename?: 'current_chain_state'
	readonly block_number: Scalars['Int']
	readonly id: Scalars['String']
	readonly timestamp: Scalars['timestamptz']
	readonly token_balance: Scalars['numeric']
	readonly token_holders: Scalars['Int']
}

/** aggregated selection of "current_chain_state" */
export type Current_Chain_State_Aggregate = {
	readonly __typename?: 'current_chain_state_aggregate'
	readonly aggregate?: Maybe<Current_Chain_State_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Current_Chain_State>
}

/** aggregate fields of "current_chain_state" */
export type Current_Chain_State_Aggregate_Fields = {
	readonly __typename?: 'current_chain_state_aggregate_fields'
	readonly avg?: Maybe<Current_Chain_State_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Current_Chain_State_Max_Fields>
	readonly min?: Maybe<Current_Chain_State_Min_Fields>
	readonly stddev?: Maybe<Current_Chain_State_Stddev_Fields>
	readonly stddev_pop?: Maybe<Current_Chain_State_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Current_Chain_State_Stddev_Samp_Fields>
	readonly sum?: Maybe<Current_Chain_State_Sum_Fields>
	readonly var_pop?: Maybe<Current_Chain_State_Var_Pop_Fields>
	readonly var_samp?: Maybe<Current_Chain_State_Var_Samp_Fields>
	readonly variance?: Maybe<Current_Chain_State_Variance_Fields>
}

/** aggregate fields of "current_chain_state" */
export type Current_Chain_State_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Current_Chain_State_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Current_Chain_State_Avg_Fields = {
	readonly __typename?: 'current_chain_state_avg_fields'
	readonly block_number?: Maybe<Scalars['Float']>
	readonly token_balance?: Maybe<Scalars['Float']>
	readonly token_holders?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "current_chain_state". All fields are combined with a logical 'AND'. */
export type Current_Chain_State_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Current_Chain_State_Bool_Exp>>
	readonly _not?: InputMaybe<Current_Chain_State_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Current_Chain_State_Bool_Exp>>
	readonly block_number?: InputMaybe<Int_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly timestamp?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly token_balance?: InputMaybe<Numeric_Comparison_Exp>
	readonly token_holders?: InputMaybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "current_chain_state" */
export enum Current_Chain_State_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_635aee56410df525938bf40f669 = 'PK_635aee56410df525938bf40f669',
}

/** input type for incrementing numeric columns in table "current_chain_state" */
export type Current_Chain_State_Inc_Input = {
	readonly block_number?: InputMaybe<Scalars['Int']>
	readonly token_balance?: InputMaybe<Scalars['numeric']>
	readonly token_holders?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "current_chain_state" */
export type Current_Chain_State_Insert_Input = {
	readonly block_number?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['timestamptz']>
	readonly token_balance?: InputMaybe<Scalars['numeric']>
	readonly token_holders?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Current_Chain_State_Max_Fields = {
	readonly __typename?: 'current_chain_state_max_fields'
	readonly block_number?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly timestamp?: Maybe<Scalars['timestamptz']>
	readonly token_balance?: Maybe<Scalars['numeric']>
	readonly token_holders?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type Current_Chain_State_Min_Fields = {
	readonly __typename?: 'current_chain_state_min_fields'
	readonly block_number?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly timestamp?: Maybe<Scalars['timestamptz']>
	readonly token_balance?: Maybe<Scalars['numeric']>
	readonly token_holders?: Maybe<Scalars['Int']>
}

/** response of any mutation on the table "current_chain_state" */
export type Current_Chain_State_Mutation_Response = {
	readonly __typename?: 'current_chain_state_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Current_Chain_State>
}

/** on_conflict condition type for table "current_chain_state" */
export type Current_Chain_State_On_Conflict = {
	readonly constraint: Current_Chain_State_Constraint
	readonly update_columns?: ReadonlyArray<Current_Chain_State_Update_Column>
	readonly where?: InputMaybe<Current_Chain_State_Bool_Exp>
}

/** Ordering options when selecting data from "current_chain_state". */
export type Current_Chain_State_Order_By = {
	readonly block_number?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly timestamp?: InputMaybe<Order_By>
	readonly token_balance?: InputMaybe<Order_By>
	readonly token_holders?: InputMaybe<Order_By>
}

/** primary key columns input for table: current_chain_state */
export type Current_Chain_State_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

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
	TokenHolders = 'token_holders',
}

/** input type for updating data in table "current_chain_state" */
export type Current_Chain_State_Set_Input = {
	readonly block_number?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['timestamptz']>
	readonly token_balance?: InputMaybe<Scalars['numeric']>
	readonly token_holders?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Current_Chain_State_Stddev_Fields = {
	readonly __typename?: 'current_chain_state_stddev_fields'
	readonly block_number?: Maybe<Scalars['Float']>
	readonly token_balance?: Maybe<Scalars['Float']>
	readonly token_holders?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Current_Chain_State_Stddev_Pop_Fields = {
	readonly __typename?: 'current_chain_state_stddev_pop_fields'
	readonly block_number?: Maybe<Scalars['Float']>
	readonly token_balance?: Maybe<Scalars['Float']>
	readonly token_holders?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Current_Chain_State_Stddev_Samp_Fields = {
	readonly __typename?: 'current_chain_state_stddev_samp_fields'
	readonly block_number?: Maybe<Scalars['Float']>
	readonly token_balance?: Maybe<Scalars['Float']>
	readonly token_holders?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "current_chain_state" */
export type Current_Chain_State_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Current_Chain_State_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Current_Chain_State_Stream_Cursor_Value_Input = {
	readonly block_number?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['timestamptz']>
	readonly token_balance?: InputMaybe<Scalars['numeric']>
	readonly token_holders?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type Current_Chain_State_Sum_Fields = {
	readonly __typename?: 'current_chain_state_sum_fields'
	readonly block_number?: Maybe<Scalars['Int']>
	readonly token_balance?: Maybe<Scalars['numeric']>
	readonly token_holders?: Maybe<Scalars['Int']>
}

/** update columns of table "current_chain_state" */
export enum Current_Chain_State_Update_Column {
	/** column name */
	BlockNumber = 'block_number',
	/** column name */
	Id = 'id',
	/** column name */
	Timestamp = 'timestamp',
	/** column name */
	TokenBalance = 'token_balance',
	/** column name */
	TokenHolders = 'token_holders',
}

export type Current_Chain_State_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Current_Chain_State_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Current_Chain_State_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Current_Chain_State_Bool_Exp
}

/** aggregate var_pop on columns */
export type Current_Chain_State_Var_Pop_Fields = {
	readonly __typename?: 'current_chain_state_var_pop_fields'
	readonly block_number?: Maybe<Scalars['Float']>
	readonly token_balance?: Maybe<Scalars['Float']>
	readonly token_holders?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Current_Chain_State_Var_Samp_Fields = {
	readonly __typename?: 'current_chain_state_var_samp_fields'
	readonly block_number?: Maybe<Scalars['Float']>
	readonly token_balance?: Maybe<Scalars['Float']>
	readonly token_holders?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Current_Chain_State_Variance_Fields = {
	readonly __typename?: 'current_chain_state_variance_fields'
	readonly block_number?: Maybe<Scalars['Float']>
	readonly token_balance?: Maybe<Scalars['Float']>
	readonly token_holders?: Maybe<Scalars['Float']>
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
	/** ascending ordering of the cursor */
	Asc = 'ASC',
	/** descending ordering of the cursor */
	Desc = 'DESC',
}

/** Boolean expression to compare columns of type "enum_BattlepassLevels_syncStatus". All fields are combined with logical 'AND'. */
export type Enum_BattlepassLevels_SyncStatus_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly _gt?: InputMaybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly _gte?: InputMaybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_BattlepassLevels_syncStatus']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly _lte?: InputMaybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly _neq?: InputMaybe<Scalars['enum_BattlepassLevels_syncStatus']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_BattlepassLevels_syncStatus']>>
}

/** Boolean expression to compare columns of type "enum_BattlepassParticipants_status". All fields are combined with logical 'AND'. */
export type Enum_BattlepassParticipants_Status_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['enum_BattlepassParticipants_status']>
	readonly _gt?: InputMaybe<Scalars['enum_BattlepassParticipants_status']>
	readonly _gte?: InputMaybe<Scalars['enum_BattlepassParticipants_status']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_BattlepassParticipants_status']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_BattlepassParticipants_status']>
	readonly _lte?: InputMaybe<Scalars['enum_BattlepassParticipants_status']>
	readonly _neq?: InputMaybe<Scalars['enum_BattlepassParticipants_status']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_BattlepassParticipants_status']>>
}

/** Boolean expression to compare columns of type "enum_BattlepassRewards_syncStatus". All fields are combined with logical 'AND'. */
export type Enum_BattlepassRewards_SyncStatus_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly _gt?: InputMaybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly _gte?: InputMaybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_BattlepassRewards_syncStatus']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly _lte?: InputMaybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly _neq?: InputMaybe<Scalars['enum_BattlepassRewards_syncStatus']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_BattlepassRewards_syncStatus']>>
}

/** Boolean expression to compare columns of type "enum_ChainActivities_activityType". All fields are combined with logical 'AND'. */
export type Enum_ChainActivities_ActivityType_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly _gt?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly _gte?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_ChainActivities_activityType']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly _lte?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly _neq?: InputMaybe<Scalars['enum_ChainActivities_activityType']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_ChainActivities_activityType']>>
}

/** Boolean expression to compare columns of type "enum_DiscordActivities_activityType". All fields are combined with logical 'AND'. */
export type Enum_DiscordActivities_ActivityType_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['enum_DiscordActivities_activityType']>
	readonly _gt?: InputMaybe<Scalars['enum_DiscordActivities_activityType']>
	readonly _gte?: InputMaybe<Scalars['enum_DiscordActivities_activityType']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_DiscordActivities_activityType']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_DiscordActivities_activityType']>
	readonly _lte?: InputMaybe<Scalars['enum_DiscordActivities_activityType']>
	readonly _neq?: InputMaybe<Scalars['enum_DiscordActivities_activityType']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_DiscordActivities_activityType']>>
}

/** Boolean expression to compare columns of type "enum_GenericActivities_source". All fields are combined with logical 'AND'. */
export type Enum_GenericActivities_Source_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly _gt?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly _gte?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_GenericActivities_source']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly _lte?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly _neq?: InputMaybe<Scalars['enum_GenericActivities_source']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_GenericActivities_source']>>
}

/** Boolean expression to compare columns of type "enum_Quests_source". All fields are combined with logical 'AND'. */
export type Enum_Quests_Source_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['enum_Quests_source']>
	readonly _gt?: InputMaybe<Scalars['enum_Quests_source']>
	readonly _gte?: InputMaybe<Scalars['enum_Quests_source']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_Quests_source']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_Quests_source']>
	readonly _lte?: InputMaybe<Scalars['enum_Quests_source']>
	readonly _neq?: InputMaybe<Scalars['enum_Quests_source']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_Quests_source']>>
}

/** Boolean expression to compare columns of type "enum_Quests_type". All fields are combined with logical 'AND'. */
export type Enum_Quests_Type_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['enum_Quests_type']>
	readonly _gt?: InputMaybe<Scalars['enum_Quests_type']>
	readonly _gte?: InputMaybe<Scalars['enum_Quests_type']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_Quests_type']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_Quests_type']>
	readonly _lte?: InputMaybe<Scalars['enum_Quests_type']>
	readonly _neq?: InputMaybe<Scalars['enum_Quests_type']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_Quests_type']>>
}

/** Boolean expression to compare columns of type "enum_RewardClaims_syncStatus". All fields are combined with logical 'AND'. */
export type Enum_RewardClaims_SyncStatus_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly _gt?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly _gte?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_RewardClaims_syncStatus']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly _lte?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly _neq?: InputMaybe<Scalars['enum_RewardClaims_syncStatus']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_RewardClaims_syncStatus']>>
}

/** Boolean expression to compare columns of type "enum_TwitterActivities_activityType". All fields are combined with logical 'AND'. */
export type Enum_TwitterActivities_ActivityType_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['enum_TwitterActivities_activityType']>
	readonly _gt?: InputMaybe<Scalars['enum_TwitterActivities_activityType']>
	readonly _gte?: InputMaybe<Scalars['enum_TwitterActivities_activityType']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_TwitterActivities_activityType']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_TwitterActivities_activityType']>
	readonly _lte?: InputMaybe<Scalars['enum_TwitterActivities_activityType']>
	readonly _neq?: InputMaybe<Scalars['enum_TwitterActivities_activityType']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_TwitterActivities_activityType']>>
}

/** Boolean expression to compare columns of type "enum_UserTokens_source". All fields are combined with logical 'AND'. */
export type Enum_UserTokens_Source_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly _gt?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly _gte?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['enum_UserTokens_source']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly _lte?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly _neq?: InputMaybe<Scalars['enum_UserTokens_source']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['enum_UserTokens_source']>>
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['float8']>
	readonly _gt?: InputMaybe<Scalars['float8']>
	readonly _gte?: InputMaybe<Scalars['float8']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['float8']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['float8']>
	readonly _lte?: InputMaybe<Scalars['float8']>
	readonly _neq?: InputMaybe<Scalars['float8']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['float8']>>
}

/** columns and relationships of "historical_balance" */
export type Historical_Balance = {
	readonly __typename?: 'historical_balance'
	/** An array relationship */
	readonly account_balances: ReadonlyArray<Account_Balance>
	/** An aggregate relationship */
	readonly account_balances_aggregate: Account_Balance_Aggregate
	readonly address: Scalars['String']
	readonly block: Scalars['Int']
	readonly currency_id: Scalars['String']
	readonly free: Scalars['numeric']
	readonly id: Scalars['String']
	readonly reserved: Scalars['numeric']
	readonly total: Scalars['numeric']
}

/** columns and relationships of "historical_balance" */
export type Historical_BalanceAccount_BalancesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Account_Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Account_Balance_Order_By>>
	where?: InputMaybe<Account_Balance_Bool_Exp>
}

/** columns and relationships of "historical_balance" */
export type Historical_BalanceAccount_Balances_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Account_Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Account_Balance_Order_By>>
	where?: InputMaybe<Account_Balance_Bool_Exp>
}

/** aggregated selection of "historical_balance" */
export type Historical_Balance_Aggregate = {
	readonly __typename?: 'historical_balance_aggregate'
	readonly aggregate?: Maybe<Historical_Balance_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Historical_Balance>
}

/** aggregate fields of "historical_balance" */
export type Historical_Balance_Aggregate_Fields = {
	readonly __typename?: 'historical_balance_aggregate_fields'
	readonly avg?: Maybe<Historical_Balance_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Historical_Balance_Max_Fields>
	readonly min?: Maybe<Historical_Balance_Min_Fields>
	readonly stddev?: Maybe<Historical_Balance_Stddev_Fields>
	readonly stddev_pop?: Maybe<Historical_Balance_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Historical_Balance_Stddev_Samp_Fields>
	readonly sum?: Maybe<Historical_Balance_Sum_Fields>
	readonly var_pop?: Maybe<Historical_Balance_Var_Pop_Fields>
	readonly var_samp?: Maybe<Historical_Balance_Var_Samp_Fields>
	readonly variance?: Maybe<Historical_Balance_Variance_Fields>
}

/** aggregate fields of "historical_balance" */
export type Historical_Balance_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Historical_Balance_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Historical_Balance_Avg_Fields = {
	readonly __typename?: 'historical_balance_avg_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly free?: Maybe<Scalars['Float']>
	readonly reserved?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "historical_balance". All fields are combined with a logical 'AND'. */
export type Historical_Balance_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Historical_Balance_Bool_Exp>>
	readonly _not?: InputMaybe<Historical_Balance_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Historical_Balance_Bool_Exp>>
	readonly account_balances?: InputMaybe<Account_Balance_Bool_Exp>
	readonly account_balances_aggregate?: InputMaybe<Account_Balance_Aggregate_Bool_Exp>
	readonly address?: InputMaybe<String_Comparison_Exp>
	readonly block?: InputMaybe<Int_Comparison_Exp>
	readonly currency_id?: InputMaybe<String_Comparison_Exp>
	readonly free?: InputMaybe<Numeric_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly reserved?: InputMaybe<Numeric_Comparison_Exp>
	readonly total?: InputMaybe<Numeric_Comparison_Exp>
}

/** unique or primary key constraints on table "historical_balance" */
export enum Historical_Balance_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_74ac29ad0bdffb6d1281a1e17e8 = 'PK_74ac29ad0bdffb6d1281a1e17e8',
}

/** input type for incrementing numeric columns in table "historical_balance" */
export type Historical_Balance_Inc_Input = {
	readonly block?: InputMaybe<Scalars['Int']>
	readonly free?: InputMaybe<Scalars['numeric']>
	readonly reserved?: InputMaybe<Scalars['numeric']>
	readonly total?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "historical_balance" */
export type Historical_Balance_Insert_Input = {
	readonly account_balances?: InputMaybe<Account_Balance_Arr_Rel_Insert_Input>
	readonly address?: InputMaybe<Scalars['String']>
	readonly block?: InputMaybe<Scalars['Int']>
	readonly currency_id?: InputMaybe<Scalars['String']>
	readonly free?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly reserved?: InputMaybe<Scalars['numeric']>
	readonly total?: InputMaybe<Scalars['numeric']>
}

/** aggregate max on columns */
export type Historical_Balance_Max_Fields = {
	readonly __typename?: 'historical_balance_max_fields'
	readonly address?: Maybe<Scalars['String']>
	readonly block?: Maybe<Scalars['Int']>
	readonly currency_id?: Maybe<Scalars['String']>
	readonly free?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly reserved?: Maybe<Scalars['numeric']>
	readonly total?: Maybe<Scalars['numeric']>
}

/** aggregate min on columns */
export type Historical_Balance_Min_Fields = {
	readonly __typename?: 'historical_balance_min_fields'
	readonly address?: Maybe<Scalars['String']>
	readonly block?: Maybe<Scalars['Int']>
	readonly currency_id?: Maybe<Scalars['String']>
	readonly free?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly reserved?: Maybe<Scalars['numeric']>
	readonly total?: Maybe<Scalars['numeric']>
}

/** response of any mutation on the table "historical_balance" */
export type Historical_Balance_Mutation_Response = {
	readonly __typename?: 'historical_balance_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Historical_Balance>
}

/** input type for inserting object relation for remote table "historical_balance" */
export type Historical_Balance_Obj_Rel_Insert_Input = {
	readonly data: Historical_Balance_Insert_Input
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Historical_Balance_On_Conflict>
}

/** on_conflict condition type for table "historical_balance" */
export type Historical_Balance_On_Conflict = {
	readonly constraint: Historical_Balance_Constraint
	readonly update_columns?: ReadonlyArray<Historical_Balance_Update_Column>
	readonly where?: InputMaybe<Historical_Balance_Bool_Exp>
}

/** Ordering options when selecting data from "historical_balance". */
export type Historical_Balance_Order_By = {
	readonly account_balances_aggregate?: InputMaybe<Account_Balance_Aggregate_Order_By>
	readonly address?: InputMaybe<Order_By>
	readonly block?: InputMaybe<Order_By>
	readonly currency_id?: InputMaybe<Order_By>
	readonly free?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly reserved?: InputMaybe<Order_By>
	readonly total?: InputMaybe<Order_By>
}

/** primary key columns input for table: historical_balance */
export type Historical_Balance_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

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
	Total = 'total',
}

/** input type for updating data in table "historical_balance" */
export type Historical_Balance_Set_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly block?: InputMaybe<Scalars['Int']>
	readonly currency_id?: InputMaybe<Scalars['String']>
	readonly free?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly reserved?: InputMaybe<Scalars['numeric']>
	readonly total?: InputMaybe<Scalars['numeric']>
}

/** aggregate stddev on columns */
export type Historical_Balance_Stddev_Fields = {
	readonly __typename?: 'historical_balance_stddev_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly free?: Maybe<Scalars['Float']>
	readonly reserved?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Historical_Balance_Stddev_Pop_Fields = {
	readonly __typename?: 'historical_balance_stddev_pop_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly free?: Maybe<Scalars['Float']>
	readonly reserved?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Historical_Balance_Stddev_Samp_Fields = {
	readonly __typename?: 'historical_balance_stddev_samp_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly free?: Maybe<Scalars['Float']>
	readonly reserved?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "historical_balance" */
export type Historical_Balance_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Historical_Balance_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Historical_Balance_Stream_Cursor_Value_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly block?: InputMaybe<Scalars['Int']>
	readonly currency_id?: InputMaybe<Scalars['String']>
	readonly free?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly reserved?: InputMaybe<Scalars['numeric']>
	readonly total?: InputMaybe<Scalars['numeric']>
}

/** aggregate sum on columns */
export type Historical_Balance_Sum_Fields = {
	readonly __typename?: 'historical_balance_sum_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly free?: Maybe<Scalars['numeric']>
	readonly reserved?: Maybe<Scalars['numeric']>
	readonly total?: Maybe<Scalars['numeric']>
}

/** update columns of table "historical_balance" */
export enum Historical_Balance_Update_Column {
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
	Total = 'total',
}

export type Historical_Balance_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Historical_Balance_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Historical_Balance_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Historical_Balance_Bool_Exp
}

/** aggregate var_pop on columns */
export type Historical_Balance_Var_Pop_Fields = {
	readonly __typename?: 'historical_balance_var_pop_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly free?: Maybe<Scalars['Float']>
	readonly reserved?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Historical_Balance_Var_Samp_Fields = {
	readonly __typename?: 'historical_balance_var_samp_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly free?: Maybe<Scalars['Float']>
	readonly reserved?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Historical_Balance_Variance_Fields = {
	readonly __typename?: 'historical_balance_variance_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly free?: Maybe<Scalars['Float']>
	readonly reserved?: Maybe<Scalars['Float']>
	readonly total?: Maybe<Scalars['Float']>
}

/** columns and relationships of "identity" */
export type Identity = {
	readonly __typename?: 'identity'
	/** An array relationship */
	readonly account_balances: ReadonlyArray<Account_Balance>
	/** An aggregate relationship */
	readonly account_balances_aggregate: Account_Balance_Aggregate
	readonly address: Scalars['String']
	/** An array relationship */
	readonly battlepass_nfts: ReadonlyArray<Battlepass_Nft>
	/** An aggregate relationship */
	readonly battlepass_nfts_aggregate: Battlepass_Nft_Aggregate
	/** An array relationship */
	readonly battlepasses: ReadonlyArray<Battlepass>
	/** An aggregate relationship */
	readonly battlepasses_aggregate: Battlepass_Aggregate
	/** An array relationship */
	readonly campaign_contributors: ReadonlyArray<Campaign_Contributor>
	/** An aggregate relationship */
	readonly campaign_contributors_aggregate: Campaign_Contributor_Aggregate
	/** An array relationship */
	readonly campaigns: ReadonlyArray<Campaign>
	/** An array relationship */
	readonly campaignsByCreatorIdentityId: ReadonlyArray<Campaign>
	/** An aggregate relationship */
	readonly campaignsByCreatorIdentityId_aggregate: Campaign_Aggregate
	/** An aggregate relationship */
	readonly campaigns_aggregate: Campaign_Aggregate
	readonly discord?: Maybe<Scalars['String']>
	readonly display_name?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly id: Scalars['String']
	readonly image?: Maybe<Scalars['String']>
	readonly legal_name?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly nft_collections: ReadonlyArray<Nft_Collection>
	/** An aggregate relationship */
	readonly nft_collections_aggregate: Nft_Collection_Aggregate
	/** An array relationship */
	readonly nfts: ReadonlyArray<Nft>
	/** An aggregate relationship */
	readonly nfts_aggregate: Nft_Aggregate
	/** An array relationship */
	readonly organization_members: ReadonlyArray<Organization_Member>
	/** An aggregate relationship */
	readonly organization_members_aggregate: Organization_Member_Aggregate
	/** An array relationship */
	readonly organizations: ReadonlyArray<Organization>
	/** An array relationship */
	readonly organizationsByCreatorIdentityId: ReadonlyArray<Organization>
	/** An aggregate relationship */
	readonly organizationsByCreatorIdentityId_aggregate: Organization_Aggregate
	/** An array relationship */
	readonly organizationsByTreasuryIdentityId: ReadonlyArray<Organization>
	/** An aggregate relationship */
	readonly organizationsByTreasuryIdentityId_aggregate: Organization_Aggregate
	/** An aggregate relationship */
	readonly organizations_aggregate: Organization_Aggregate
	/** An array relationship */
	readonly proposal_voters: ReadonlyArray<Proposal_Voter>
	/** An aggregate relationship */
	readonly proposal_voters_aggregate: Proposal_Voter_Aggregate
	/** An array relationship */
	readonly proposals: ReadonlyArray<Proposal>
	/** An array relationship */
	readonly proposalsByBeneficiaryIdentityId: ReadonlyArray<Proposal>
	/** An aggregate relationship */
	readonly proposalsByBeneficiaryIdentityId_aggregate: Proposal_Aggregate
	/** An aggregate relationship */
	readonly proposals_aggregate: Proposal_Aggregate
	readonly riot?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly sense_entities: ReadonlyArray<Sense_Entity>
	/** An aggregate relationship */
	readonly sense_entities_aggregate: Sense_Entity_Aggregate
	readonly twitter?: Maybe<Scalars['String']>
	readonly web?: Maybe<Scalars['String']>
	readonly web3name?: Maybe<Scalars['String']>
}

/** columns and relationships of "identity" */
export type IdentityAccount_BalancesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Account_Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Account_Balance_Order_By>>
	where?: InputMaybe<Account_Balance_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityAccount_Balances_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Account_Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Account_Balance_Order_By>>
	where?: InputMaybe<Account_Balance_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityBattlepass_NftsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Nft_Order_By>>
	where?: InputMaybe<Battlepass_Nft_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityBattlepass_Nfts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Nft_Order_By>>
	where?: InputMaybe<Battlepass_Nft_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityBattlepassesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Order_By>>
	where?: InputMaybe<Battlepass_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityBattlepasses_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Order_By>>
	where?: InputMaybe<Battlepass_Bool_Exp>
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
export type IdentityCampaign_Contributors_AggregateArgs = {
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
export type IdentityCampaignsByCreatorIdentityId_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>
	where?: InputMaybe<Campaign_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityCampaigns_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>
	where?: InputMaybe<Campaign_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityNft_CollectionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nft_Collection_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nft_Collection_Order_By>>
	where?: InputMaybe<Nft_Collection_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityNft_Collections_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nft_Collection_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nft_Collection_Order_By>>
	where?: InputMaybe<Nft_Collection_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityNftsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nft_Order_By>>
	where?: InputMaybe<Nft_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityNfts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nft_Order_By>>
	where?: InputMaybe<Nft_Bool_Exp>
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
export type IdentityOrganization_Members_AggregateArgs = {
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
export type IdentityOrganizationsByTreasuryIdentityIdArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Order_By>>
	where?: InputMaybe<Organization_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityOrganizationsByTreasuryIdentityId_AggregateArgs = {
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

/** columns and relationships of "identity" */
export type IdentityProposal_VotersArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Voter_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Voter_Order_By>>
	where?: InputMaybe<Proposal_Voter_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityProposal_Voters_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Voter_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Voter_Order_By>>
	where?: InputMaybe<Proposal_Voter_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityProposalsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>
	where?: InputMaybe<Proposal_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityProposalsByBeneficiaryIdentityIdArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>
	where?: InputMaybe<Proposal_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityProposalsByBeneficiaryIdentityId_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>
	where?: InputMaybe<Proposal_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentityProposals_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>
	where?: InputMaybe<Proposal_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentitySense_EntitiesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Sense_Entity_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Sense_Entity_Order_By>>
	where?: InputMaybe<Sense_Entity_Bool_Exp>
}

/** columns and relationships of "identity" */
export type IdentitySense_Entities_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Sense_Entity_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Sense_Entity_Order_By>>
	where?: InputMaybe<Sense_Entity_Bool_Exp>
}

/** aggregated selection of "identity" */
export type Identity_Aggregate = {
	readonly __typename?: 'identity_aggregate'
	readonly aggregate?: Maybe<Identity_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Identity>
}

/** aggregate fields of "identity" */
export type Identity_Aggregate_Fields = {
	readonly __typename?: 'identity_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Identity_Max_Fields>
	readonly min?: Maybe<Identity_Min_Fields>
}

/** aggregate fields of "identity" */
export type Identity_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Identity_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "identity". All fields are combined with a logical 'AND'. */
export type Identity_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Identity_Bool_Exp>>
	readonly _not?: InputMaybe<Identity_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Identity_Bool_Exp>>
	readonly account_balances?: InputMaybe<Account_Balance_Bool_Exp>
	readonly account_balances_aggregate?: InputMaybe<Account_Balance_Aggregate_Bool_Exp>
	readonly address?: InputMaybe<String_Comparison_Exp>
	readonly battlepass_nfts?: InputMaybe<Battlepass_Nft_Bool_Exp>
	readonly battlepass_nfts_aggregate?: InputMaybe<Battlepass_Nft_Aggregate_Bool_Exp>
	readonly battlepasses?: InputMaybe<Battlepass_Bool_Exp>
	readonly battlepasses_aggregate?: InputMaybe<Battlepass_Aggregate_Bool_Exp>
	readonly campaign_contributors?: InputMaybe<Campaign_Contributor_Bool_Exp>
	readonly campaign_contributors_aggregate?: InputMaybe<Campaign_Contributor_Aggregate_Bool_Exp>
	readonly campaigns?: InputMaybe<Campaign_Bool_Exp>
	readonly campaignsByCreatorIdentityId?: InputMaybe<Campaign_Bool_Exp>
	readonly campaignsByCreatorIdentityId_aggregate?: InputMaybe<Campaign_Aggregate_Bool_Exp>
	readonly campaigns_aggregate?: InputMaybe<Campaign_Aggregate_Bool_Exp>
	readonly discord?: InputMaybe<String_Comparison_Exp>
	readonly display_name?: InputMaybe<String_Comparison_Exp>
	readonly email?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly image?: InputMaybe<String_Comparison_Exp>
	readonly legal_name?: InputMaybe<String_Comparison_Exp>
	readonly nft_collections?: InputMaybe<Nft_Collection_Bool_Exp>
	readonly nft_collections_aggregate?: InputMaybe<Nft_Collection_Aggregate_Bool_Exp>
	readonly nfts?: InputMaybe<Nft_Bool_Exp>
	readonly nfts_aggregate?: InputMaybe<Nft_Aggregate_Bool_Exp>
	readonly organization_members?: InputMaybe<Organization_Member_Bool_Exp>
	readonly organization_members_aggregate?: InputMaybe<Organization_Member_Aggregate_Bool_Exp>
	readonly organizations?: InputMaybe<Organization_Bool_Exp>
	readonly organizationsByCreatorIdentityId?: InputMaybe<Organization_Bool_Exp>
	readonly organizationsByCreatorIdentityId_aggregate?: InputMaybe<Organization_Aggregate_Bool_Exp>
	readonly organizationsByTreasuryIdentityId?: InputMaybe<Organization_Bool_Exp>
	readonly organizationsByTreasuryIdentityId_aggregate?: InputMaybe<Organization_Aggregate_Bool_Exp>
	readonly organizations_aggregate?: InputMaybe<Organization_Aggregate_Bool_Exp>
	readonly proposal_voters?: InputMaybe<Proposal_Voter_Bool_Exp>
	readonly proposal_voters_aggregate?: InputMaybe<Proposal_Voter_Aggregate_Bool_Exp>
	readonly proposals?: InputMaybe<Proposal_Bool_Exp>
	readonly proposalsByBeneficiaryIdentityId?: InputMaybe<Proposal_Bool_Exp>
	readonly proposalsByBeneficiaryIdentityId_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>
	readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>
	readonly riot?: InputMaybe<String_Comparison_Exp>
	readonly sense_entities?: InputMaybe<Sense_Entity_Bool_Exp>
	readonly sense_entities_aggregate?: InputMaybe<Sense_Entity_Aggregate_Bool_Exp>
	readonly twitter?: InputMaybe<String_Comparison_Exp>
	readonly web?: InputMaybe<String_Comparison_Exp>
	readonly web3name?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "identity" */
export enum Identity_Constraint {
	/** unique or primary key constraint on columns "id" */
	PkFf16a44186b286d5e626178f726 = 'PK_ff16a44186b286d5e626178f726',
}

/** input type for inserting data into table "identity" */
export type Identity_Insert_Input = {
	readonly account_balances?: InputMaybe<Account_Balance_Arr_Rel_Insert_Input>
	readonly address?: InputMaybe<Scalars['String']>
	readonly battlepass_nfts?: InputMaybe<Battlepass_Nft_Arr_Rel_Insert_Input>
	readonly battlepasses?: InputMaybe<Battlepass_Arr_Rel_Insert_Input>
	readonly campaign_contributors?: InputMaybe<Campaign_Contributor_Arr_Rel_Insert_Input>
	readonly campaigns?: InputMaybe<Campaign_Arr_Rel_Insert_Input>
	readonly campaignsByCreatorIdentityId?: InputMaybe<Campaign_Arr_Rel_Insert_Input>
	readonly discord?: InputMaybe<Scalars['String']>
	readonly display_name?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly legal_name?: InputMaybe<Scalars['String']>
	readonly nft_collections?: InputMaybe<Nft_Collection_Arr_Rel_Insert_Input>
	readonly nfts?: InputMaybe<Nft_Arr_Rel_Insert_Input>
	readonly organization_members?: InputMaybe<Organization_Member_Arr_Rel_Insert_Input>
	readonly organizations?: InputMaybe<Organization_Arr_Rel_Insert_Input>
	readonly organizationsByCreatorIdentityId?: InputMaybe<Organization_Arr_Rel_Insert_Input>
	readonly organizationsByTreasuryIdentityId?: InputMaybe<Organization_Arr_Rel_Insert_Input>
	readonly proposal_voters?: InputMaybe<Proposal_Voter_Arr_Rel_Insert_Input>
	readonly proposals?: InputMaybe<Proposal_Arr_Rel_Insert_Input>
	readonly proposalsByBeneficiaryIdentityId?: InputMaybe<Proposal_Arr_Rel_Insert_Input>
	readonly riot?: InputMaybe<Scalars['String']>
	readonly sense_entities?: InputMaybe<Sense_Entity_Arr_Rel_Insert_Input>
	readonly twitter?: InputMaybe<Scalars['String']>
	readonly web?: InputMaybe<Scalars['String']>
	readonly web3name?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Identity_Max_Fields = {
	readonly __typename?: 'identity_max_fields'
	readonly address?: Maybe<Scalars['String']>
	readonly discord?: Maybe<Scalars['String']>
	readonly display_name?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly legal_name?: Maybe<Scalars['String']>
	readonly riot?: Maybe<Scalars['String']>
	readonly twitter?: Maybe<Scalars['String']>
	readonly web?: Maybe<Scalars['String']>
	readonly web3name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Identity_Min_Fields = {
	readonly __typename?: 'identity_min_fields'
	readonly address?: Maybe<Scalars['String']>
	readonly discord?: Maybe<Scalars['String']>
	readonly display_name?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly legal_name?: Maybe<Scalars['String']>
	readonly riot?: Maybe<Scalars['String']>
	readonly twitter?: Maybe<Scalars['String']>
	readonly web?: Maybe<Scalars['String']>
	readonly web3name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "identity" */
export type Identity_Mutation_Response = {
	readonly __typename?: 'identity_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Identity>
}

/** input type for inserting object relation for remote table "identity" */
export type Identity_Obj_Rel_Insert_Input = {
	readonly data: Identity_Insert_Input
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Identity_On_Conflict>
}

/** on_conflict condition type for table "identity" */
export type Identity_On_Conflict = {
	readonly constraint: Identity_Constraint
	readonly update_columns?: ReadonlyArray<Identity_Update_Column>
	readonly where?: InputMaybe<Identity_Bool_Exp>
}

/** Ordering options when selecting data from "identity". */
export type Identity_Order_By = {
	readonly account_balances_aggregate?: InputMaybe<Account_Balance_Aggregate_Order_By>
	readonly address?: InputMaybe<Order_By>
	readonly battlepass_nfts_aggregate?: InputMaybe<Battlepass_Nft_Aggregate_Order_By>
	readonly battlepasses_aggregate?: InputMaybe<Battlepass_Aggregate_Order_By>
	readonly campaign_contributors_aggregate?: InputMaybe<Campaign_Contributor_Aggregate_Order_By>
	readonly campaignsByCreatorIdentityId_aggregate?: InputMaybe<Campaign_Aggregate_Order_By>
	readonly campaigns_aggregate?: InputMaybe<Campaign_Aggregate_Order_By>
	readonly discord?: InputMaybe<Order_By>
	readonly display_name?: InputMaybe<Order_By>
	readonly email?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly image?: InputMaybe<Order_By>
	readonly legal_name?: InputMaybe<Order_By>
	readonly nft_collections_aggregate?: InputMaybe<Nft_Collection_Aggregate_Order_By>
	readonly nfts_aggregate?: InputMaybe<Nft_Aggregate_Order_By>
	readonly organization_members_aggregate?: InputMaybe<Organization_Member_Aggregate_Order_By>
	readonly organizationsByCreatorIdentityId_aggregate?: InputMaybe<Organization_Aggregate_Order_By>
	readonly organizationsByTreasuryIdentityId_aggregate?: InputMaybe<Organization_Aggregate_Order_By>
	readonly organizations_aggregate?: InputMaybe<Organization_Aggregate_Order_By>
	readonly proposal_voters_aggregate?: InputMaybe<Proposal_Voter_Aggregate_Order_By>
	readonly proposalsByBeneficiaryIdentityId_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>
	readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>
	readonly riot?: InputMaybe<Order_By>
	readonly sense_entities_aggregate?: InputMaybe<Sense_Entity_Aggregate_Order_By>
	readonly twitter?: InputMaybe<Order_By>
	readonly web?: InputMaybe<Order_By>
	readonly web3name?: InputMaybe<Order_By>
}

/** primary key columns input for table: identity */
export type Identity_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

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
	Web3name = 'web3name',
}

/** input type for updating data in table "identity" */
export type Identity_Set_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly discord?: InputMaybe<Scalars['String']>
	readonly display_name?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly legal_name?: InputMaybe<Scalars['String']>
	readonly riot?: InputMaybe<Scalars['String']>
	readonly twitter?: InputMaybe<Scalars['String']>
	readonly web?: InputMaybe<Scalars['String']>
	readonly web3name?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "identity" */
export type Identity_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Identity_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Identity_Stream_Cursor_Value_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly discord?: InputMaybe<Scalars['String']>
	readonly display_name?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly legal_name?: InputMaybe<Scalars['String']>
	readonly riot?: InputMaybe<Scalars['String']>
	readonly twitter?: InputMaybe<Scalars['String']>
	readonly web?: InputMaybe<Scalars['String']>
	readonly web3name?: InputMaybe<Scalars['String']>
}

/** update columns of table "identity" */
export enum Identity_Update_Column {
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
	Web3name = 'web3name',
}

export type Identity_Updates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Identity_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Identity_Bool_Exp
}

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['json']>
	readonly _gt?: InputMaybe<Scalars['json']>
	readonly _gte?: InputMaybe<Scalars['json']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['json']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['json']>
	readonly _lte?: InputMaybe<Scalars['json']>
	readonly _neq?: InputMaybe<Scalars['json']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['json']>>
}

/** columns and relationships of "migrations" */
export type Migrations = {
	readonly __typename?: 'migrations'
	readonly id: Scalars['Int']
	readonly name: Scalars['String']
	readonly timestamp: Scalars['bigint']
}

/** aggregated selection of "migrations" */
export type Migrations_Aggregate = {
	readonly __typename?: 'migrations_aggregate'
	readonly aggregate?: Maybe<Migrations_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Migrations>
}

/** aggregate fields of "migrations" */
export type Migrations_Aggregate_Fields = {
	readonly __typename?: 'migrations_aggregate_fields'
	readonly avg?: Maybe<Migrations_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Migrations_Max_Fields>
	readonly min?: Maybe<Migrations_Min_Fields>
	readonly stddev?: Maybe<Migrations_Stddev_Fields>
	readonly stddev_pop?: Maybe<Migrations_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Migrations_Stddev_Samp_Fields>
	readonly sum?: Maybe<Migrations_Sum_Fields>
	readonly var_pop?: Maybe<Migrations_Var_Pop_Fields>
	readonly var_samp?: Maybe<Migrations_Var_Samp_Fields>
	readonly variance?: Maybe<Migrations_Variance_Fields>
}

/** aggregate fields of "migrations" */
export type Migrations_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Migrations_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Migrations_Avg_Fields = {
	readonly __typename?: 'migrations_avg_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly timestamp?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "migrations". All fields are combined with a logical 'AND'. */
export type Migrations_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Migrations_Bool_Exp>>
	readonly _not?: InputMaybe<Migrations_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Migrations_Bool_Exp>>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly timestamp?: InputMaybe<Bigint_Comparison_Exp>
}

/** unique or primary key constraints on table "migrations" */
export enum Migrations_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_8c82d7f526340ab734260ea46be = 'PK_8c82d7f526340ab734260ea46be',
}

/** input type for incrementing numeric columns in table "migrations" */
export type Migrations_Inc_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly timestamp?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "migrations" */
export type Migrations_Insert_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type Migrations_Max_Fields = {
	readonly __typename?: 'migrations_max_fields'
	readonly id?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly timestamp?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type Migrations_Min_Fields = {
	readonly __typename?: 'migrations_min_fields'
	readonly id?: Maybe<Scalars['Int']>
	readonly name?: Maybe<Scalars['String']>
	readonly timestamp?: Maybe<Scalars['bigint']>
}

/** response of any mutation on the table "migrations" */
export type Migrations_Mutation_Response = {
	readonly __typename?: 'migrations_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Migrations>
}

/** on_conflict condition type for table "migrations" */
export type Migrations_On_Conflict = {
	readonly constraint: Migrations_Constraint
	readonly update_columns?: ReadonlyArray<Migrations_Update_Column>
	readonly where?: InputMaybe<Migrations_Bool_Exp>
}

/** Ordering options when selecting data from "migrations". */
export type Migrations_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly timestamp?: InputMaybe<Order_By>
}

/** primary key columns input for table: migrations */
export type Migrations_Pk_Columns_Input = {
	readonly id: Scalars['Int']
}

/** select columns of table "migrations" */
export enum Migrations_Select_Column {
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
	/** column name */
	Timestamp = 'timestamp',
}

/** input type for updating data in table "migrations" */
export type Migrations_Set_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type Migrations_Stddev_Fields = {
	readonly __typename?: 'migrations_stddev_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly timestamp?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Migrations_Stddev_Pop_Fields = {
	readonly __typename?: 'migrations_stddev_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly timestamp?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Migrations_Stddev_Samp_Fields = {
	readonly __typename?: 'migrations_stddev_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly timestamp?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "migrations" */
export type Migrations_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Migrations_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Migrations_Stream_Cursor_Value_Input = {
	readonly id?: InputMaybe<Scalars['Int']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly timestamp?: InputMaybe<Scalars['bigint']>
}

/** aggregate sum on columns */
export type Migrations_Sum_Fields = {
	readonly __typename?: 'migrations_sum_fields'
	readonly id?: Maybe<Scalars['Int']>
	readonly timestamp?: Maybe<Scalars['bigint']>
}

/** update columns of table "migrations" */
export enum Migrations_Update_Column {
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
	/** column name */
	Timestamp = 'timestamp',
}

export type Migrations_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Migrations_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Migrations_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Migrations_Bool_Exp
}

/** aggregate var_pop on columns */
export type Migrations_Var_Pop_Fields = {
	readonly __typename?: 'migrations_var_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly timestamp?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Migrations_Var_Samp_Fields = {
	readonly __typename?: 'migrations_var_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly timestamp?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Migrations_Variance_Fields = {
	readonly __typename?: 'migrations_variance_fields'
	readonly id?: Maybe<Scalars['Float']>
	readonly timestamp?: Maybe<Scalars['Float']>
}

/** mutation root */
export type Mutation_Root = {
	readonly __typename?: 'mutation_root'
	readonly battlepassBot?: Maybe<BattlepassBotMutation>
	/** delete data from the table: "Balance" */
	readonly delete_Balance?: Maybe<Balance_Mutation_Response>
	/** delete single row from the table: "Balance" */
	readonly delete_Balance_by_pk?: Maybe<Balance>
	/** delete data from the table: "BattlepassLevels" */
	readonly delete_BattlepassLevels?: Maybe<BattlepassLevels_Mutation_Response>
	/** delete single row from the table: "BattlepassLevels" */
	readonly delete_BattlepassLevels_by_pk?: Maybe<BattlepassLevels>
	/** delete data from the table: "BattlepassParticipants" */
	readonly delete_BattlepassParticipants?: Maybe<BattlepassParticipants_Mutation_Response>
	/** delete single row from the table: "BattlepassParticipants" */
	readonly delete_BattlepassParticipants_by_pk?: Maybe<BattlepassParticipants>
	/** delete data from the table: "BattlepassRewards" */
	readonly delete_BattlepassRewards?: Maybe<BattlepassRewards_Mutation_Response>
	/** delete single row from the table: "BattlepassRewards" */
	readonly delete_BattlepassRewards_by_pk?: Maybe<BattlepassRewards>
	/** delete data from the table: "Battlepasses" */
	readonly delete_Battlepasses?: Maybe<Battlepasses_Mutation_Response>
	/** delete single row from the table: "Battlepasses" */
	readonly delete_Battlepasses_by_pk?: Maybe<Battlepasses>
	/** delete data from the table: "ChainActivities" */
	readonly delete_ChainActivities?: Maybe<ChainActivities_Mutation_Response>
	/** delete single row from the table: "ChainActivities" */
	readonly delete_ChainActivities_by_pk?: Maybe<ChainActivities>
	/** delete data from the table: "ChainInfo" */
	readonly delete_ChainInfo?: Maybe<ChainInfo_Mutation_Response>
	/** delete single row from the table: "ChainInfo" */
	readonly delete_ChainInfo_by_pk?: Maybe<ChainInfo>
	/** delete data from the table: "ChainStatuses" */
	readonly delete_ChainStatuses?: Maybe<ChainStatuses_Mutation_Response>
	/** delete single row from the table: "ChainStatuses" */
	readonly delete_ChainStatuses_by_pk?: Maybe<ChainStatuses>
	/** delete data from the table: "CompletedQuests" */
	readonly delete_CompletedQuests?: Maybe<CompletedQuests_Mutation_Response>
	/** delete single row from the table: "CompletedQuests" */
	readonly delete_CompletedQuests_by_pk?: Maybe<CompletedQuests>
	/** delete data from the table: "DiscordActivities" */
	readonly delete_DiscordActivities?: Maybe<DiscordActivities_Mutation_Response>
	/** delete single row from the table: "DiscordActivities" */
	readonly delete_DiscordActivities_by_pk?: Maybe<DiscordActivities>
	/** delete data from the table: "GenericActivities" */
	readonly delete_GenericActivities?: Maybe<GenericActivities_Mutation_Response>
	/** delete single row from the table: "GenericActivities" */
	readonly delete_GenericActivities_by_pk?: Maybe<GenericActivities>
	/** delete data from the table: "Identities" */
	readonly delete_Identities?: Maybe<Identities_Mutation_Response>
	/** delete single row from the table: "Identities" */
	readonly delete_Identities_by_pk?: Maybe<Identities>
	/** delete data from the table: "Payments" */
	readonly delete_Payments?: Maybe<Payments_Mutation_Response>
	/** delete single row from the table: "Payments" */
	readonly delete_Payments_by_pk?: Maybe<Payments>
	/** delete data from the table: "QuestProgresses" */
	readonly delete_QuestProgresses?: Maybe<QuestProgresses_Mutation_Response>
	/** delete single row from the table: "QuestProgresses" */
	readonly delete_QuestProgresses_by_pk?: Maybe<QuestProgresses>
	/** delete data from the table: "Quests" */
	readonly delete_Quests?: Maybe<Quests_Mutation_Response>
	/** delete single row from the table: "Quests" */
	readonly delete_Quests_by_pk?: Maybe<Quests>
	/** delete data from the table: "RewardClaims" */
	readonly delete_RewardClaims?: Maybe<RewardClaims_Mutation_Response>
	/** delete single row from the table: "RewardClaims" */
	readonly delete_RewardClaims_by_pk?: Maybe<RewardClaims>
	/** delete data from the table: "Session" */
	readonly delete_Session?: Maybe<Session_Mutation_Response>
	/** delete single row from the table: "Session" */
	readonly delete_Session_by_pk?: Maybe<Session>
	/** delete data from the table: "TwitterActivities" */
	readonly delete_TwitterActivities?: Maybe<TwitterActivities_Mutation_Response>
	/** delete single row from the table: "TwitterActivities" */
	readonly delete_TwitterActivities_by_pk?: Maybe<TwitterActivities>
	/** delete data from the table: "TwitterSearches" */
	readonly delete_TwitterSearches?: Maybe<TwitterSearches_Mutation_Response>
	/** delete single row from the table: "TwitterSearches" */
	readonly delete_TwitterSearches_by_pk?: Maybe<TwitterSearches>
	/** delete data from the table: "TwitterUsers" */
	readonly delete_TwitterUsers?: Maybe<TwitterUsers_Mutation_Response>
	/** delete single row from the table: "TwitterUsers" */
	readonly delete_TwitterUsers_by_pk?: Maybe<TwitterUsers>
	/** delete data from the table: "UserTokens" */
	readonly delete_UserTokens?: Maybe<UserTokens_Mutation_Response>
	/** delete single row from the table: "UserTokens" */
	readonly delete_UserTokens_by_pk?: Maybe<UserTokens>
	/** delete data from the table: "_prisma_migrations" */
	readonly delete__prisma_migrations?: Maybe<_Prisma_Migrations_Mutation_Response>
	/** delete single row from the table: "_prisma_migrations" */
	readonly delete__prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>
	/** delete data from the table: "account_balance" */
	readonly delete_account_balance?: Maybe<Account_Balance_Mutation_Response>
	/** delete single row from the table: "account_balance" */
	readonly delete_account_balance_by_pk?: Maybe<Account_Balance>
	/** delete data from the table: "battlepass" */
	readonly delete_battlepass?: Maybe<Battlepass_Mutation_Response>
	/** delete single row from the table: "battlepass" */
	readonly delete_battlepass_by_pk?: Maybe<Battlepass>
	/** delete data from the table: "battlepass_nft" */
	readonly delete_battlepass_nft?: Maybe<Battlepass_Nft_Mutation_Response>
	/** delete single row from the table: "battlepass_nft" */
	readonly delete_battlepass_nft_by_pk?: Maybe<Battlepass_Nft>
	/** delete data from the table: "campaign" */
	readonly delete_campaign?: Maybe<Campaign_Mutation_Response>
	/** delete single row from the table: "campaign" */
	readonly delete_campaign_by_pk?: Maybe<Campaign>
	/** delete data from the table: "campaign_contributor" */
	readonly delete_campaign_contributor?: Maybe<Campaign_Contributor_Mutation_Response>
	/** delete single row from the table: "campaign_contributor" */
	readonly delete_campaign_contributor_by_pk?: Maybe<Campaign_Contributor>
	/** delete data from the table: "campaign_metadata" */
	readonly delete_campaign_metadata?: Maybe<Campaign_Metadata_Mutation_Response>
	/** delete single row from the table: "campaign_metadata" */
	readonly delete_campaign_metadata_by_pk?: Maybe<Campaign_Metadata>
	/** delete data from the table: "chain_state" */
	readonly delete_chain_state?: Maybe<Chain_State_Mutation_Response>
	/** delete single row from the table: "chain_state" */
	readonly delete_chain_state_by_pk?: Maybe<Chain_State>
	/** delete data from the table: "current_chain_state" */
	readonly delete_current_chain_state?: Maybe<Current_Chain_State_Mutation_Response>
	/** delete single row from the table: "current_chain_state" */
	readonly delete_current_chain_state_by_pk?: Maybe<Current_Chain_State>
	/** delete data from the table: "historical_balance" */
	readonly delete_historical_balance?: Maybe<Historical_Balance_Mutation_Response>
	/** delete single row from the table: "historical_balance" */
	readonly delete_historical_balance_by_pk?: Maybe<Historical_Balance>
	/** delete data from the table: "identity" */
	readonly delete_identity?: Maybe<Identity_Mutation_Response>
	/** delete single row from the table: "identity" */
	readonly delete_identity_by_pk?: Maybe<Identity>
	/** delete data from the table: "migrations" */
	readonly delete_migrations?: Maybe<Migrations_Mutation_Response>
	/** delete single row from the table: "migrations" */
	readonly delete_migrations_by_pk?: Maybe<Migrations>
	/** delete data from the table: "nft" */
	readonly delete_nft?: Maybe<Nft_Mutation_Response>
	/** delete single row from the table: "nft" */
	readonly delete_nft_by_pk?: Maybe<Nft>
	/** delete data from the table: "nft_collection" */
	readonly delete_nft_collection?: Maybe<Nft_Collection_Mutation_Response>
	/** delete single row from the table: "nft_collection" */
	readonly delete_nft_collection_by_pk?: Maybe<Nft_Collection>
	/** delete data from the table: "organization" */
	readonly delete_organization?: Maybe<Organization_Mutation_Response>
	/** delete single row from the table: "organization" */
	readonly delete_organization_by_pk?: Maybe<Organization>
	/** delete data from the table: "organization_member" */
	readonly delete_organization_member?: Maybe<Organization_Member_Mutation_Response>
	/** delete single row from the table: "organization_member" */
	readonly delete_organization_member_by_pk?: Maybe<Organization_Member>
	/** delete data from the table: "organization_metadata" */
	readonly delete_organization_metadata?: Maybe<Organization_Metadata_Mutation_Response>
	/** delete single row from the table: "organization_metadata" */
	readonly delete_organization_metadata_by_pk?: Maybe<Organization_Metadata>
	/** delete data from the table: "proposal" */
	readonly delete_proposal?: Maybe<Proposal_Mutation_Response>
	/** delete single row from the table: "proposal" */
	readonly delete_proposal_by_pk?: Maybe<Proposal>
	/** delete data from the table: "proposal_metadata" */
	readonly delete_proposal_metadata?: Maybe<Proposal_Metadata_Mutation_Response>
	/** delete single row from the table: "proposal_metadata" */
	readonly delete_proposal_metadata_by_pk?: Maybe<Proposal_Metadata>
	/** delete data from the table: "proposal_voter" */
	readonly delete_proposal_voter?: Maybe<Proposal_Voter_Mutation_Response>
	/** delete single row from the table: "proposal_voter" */
	readonly delete_proposal_voter_by_pk?: Maybe<Proposal_Voter>
	/** delete data from the table: "sense_entity" */
	readonly delete_sense_entity?: Maybe<Sense_Entity_Mutation_Response>
	/** delete single row from the table: "sense_entity" */
	readonly delete_sense_entity_by_pk?: Maybe<Sense_Entity>
	/** delete data from the table: "voting" */
	readonly delete_voting?: Maybe<Voting_Mutation_Response>
	/** delete single row from the table: "voting" */
	readonly delete_voting_by_pk?: Maybe<Voting>
	/** insert data into the table: "Balance" */
	readonly insert_Balance?: Maybe<Balance_Mutation_Response>
	/** insert a single row into the table: "Balance" */
	readonly insert_Balance_one?: Maybe<Balance>
	/** insert data into the table: "BattlepassLevels" */
	readonly insert_BattlepassLevels?: Maybe<BattlepassLevels_Mutation_Response>
	/** insert a single row into the table: "BattlepassLevels" */
	readonly insert_BattlepassLevels_one?: Maybe<BattlepassLevels>
	/** insert data into the table: "BattlepassParticipants" */
	readonly insert_BattlepassParticipants?: Maybe<BattlepassParticipants_Mutation_Response>
	/** insert a single row into the table: "BattlepassParticipants" */
	readonly insert_BattlepassParticipants_one?: Maybe<BattlepassParticipants>
	/** insert data into the table: "BattlepassRewards" */
	readonly insert_BattlepassRewards?: Maybe<BattlepassRewards_Mutation_Response>
	/** insert a single row into the table: "BattlepassRewards" */
	readonly insert_BattlepassRewards_one?: Maybe<BattlepassRewards>
	/** insert data into the table: "Battlepasses" */
	readonly insert_Battlepasses?: Maybe<Battlepasses_Mutation_Response>
	/** insert a single row into the table: "Battlepasses" */
	readonly insert_Battlepasses_one?: Maybe<Battlepasses>
	/** insert data into the table: "ChainActivities" */
	readonly insert_ChainActivities?: Maybe<ChainActivities_Mutation_Response>
	/** insert a single row into the table: "ChainActivities" */
	readonly insert_ChainActivities_one?: Maybe<ChainActivities>
	/** insert data into the table: "ChainInfo" */
	readonly insert_ChainInfo?: Maybe<ChainInfo_Mutation_Response>
	/** insert a single row into the table: "ChainInfo" */
	readonly insert_ChainInfo_one?: Maybe<ChainInfo>
	/** insert data into the table: "ChainStatuses" */
	readonly insert_ChainStatuses?: Maybe<ChainStatuses_Mutation_Response>
	/** insert a single row into the table: "ChainStatuses" */
	readonly insert_ChainStatuses_one?: Maybe<ChainStatuses>
	/** insert data into the table: "CompletedQuests" */
	readonly insert_CompletedQuests?: Maybe<CompletedQuests_Mutation_Response>
	/** insert a single row into the table: "CompletedQuests" */
	readonly insert_CompletedQuests_one?: Maybe<CompletedQuests>
	/** insert data into the table: "DiscordActivities" */
	readonly insert_DiscordActivities?: Maybe<DiscordActivities_Mutation_Response>
	/** insert a single row into the table: "DiscordActivities" */
	readonly insert_DiscordActivities_one?: Maybe<DiscordActivities>
	/** insert data into the table: "GenericActivities" */
	readonly insert_GenericActivities?: Maybe<GenericActivities_Mutation_Response>
	/** insert a single row into the table: "GenericActivities" */
	readonly insert_GenericActivities_one?: Maybe<GenericActivities>
	/** insert data into the table: "Identities" */
	readonly insert_Identities?: Maybe<Identities_Mutation_Response>
	/** insert a single row into the table: "Identities" */
	readonly insert_Identities_one?: Maybe<Identities>
	/** insert data into the table: "Payments" */
	readonly insert_Payments?: Maybe<Payments_Mutation_Response>
	/** insert a single row into the table: "Payments" */
	readonly insert_Payments_one?: Maybe<Payments>
	/** insert data into the table: "QuestProgresses" */
	readonly insert_QuestProgresses?: Maybe<QuestProgresses_Mutation_Response>
	/** insert a single row into the table: "QuestProgresses" */
	readonly insert_QuestProgresses_one?: Maybe<QuestProgresses>
	/** insert data into the table: "Quests" */
	readonly insert_Quests?: Maybe<Quests_Mutation_Response>
	/** insert a single row into the table: "Quests" */
	readonly insert_Quests_one?: Maybe<Quests>
	/** insert data into the table: "RewardClaims" */
	readonly insert_RewardClaims?: Maybe<RewardClaims_Mutation_Response>
	/** insert a single row into the table: "RewardClaims" */
	readonly insert_RewardClaims_one?: Maybe<RewardClaims>
	/** insert data into the table: "Session" */
	readonly insert_Session?: Maybe<Session_Mutation_Response>
	/** insert a single row into the table: "Session" */
	readonly insert_Session_one?: Maybe<Session>
	/** insert data into the table: "TwitterActivities" */
	readonly insert_TwitterActivities?: Maybe<TwitterActivities_Mutation_Response>
	/** insert a single row into the table: "TwitterActivities" */
	readonly insert_TwitterActivities_one?: Maybe<TwitterActivities>
	/** insert data into the table: "TwitterSearches" */
	readonly insert_TwitterSearches?: Maybe<TwitterSearches_Mutation_Response>
	/** insert a single row into the table: "TwitterSearches" */
	readonly insert_TwitterSearches_one?: Maybe<TwitterSearches>
	/** insert data into the table: "TwitterUsers" */
	readonly insert_TwitterUsers?: Maybe<TwitterUsers_Mutation_Response>
	/** insert a single row into the table: "TwitterUsers" */
	readonly insert_TwitterUsers_one?: Maybe<TwitterUsers>
	/** insert data into the table: "UserTokens" */
	readonly insert_UserTokens?: Maybe<UserTokens_Mutation_Response>
	/** insert a single row into the table: "UserTokens" */
	readonly insert_UserTokens_one?: Maybe<UserTokens>
	/** insert data into the table: "_prisma_migrations" */
	readonly insert__prisma_migrations?: Maybe<_Prisma_Migrations_Mutation_Response>
	/** insert a single row into the table: "_prisma_migrations" */
	readonly insert__prisma_migrations_one?: Maybe<_Prisma_Migrations>
	/** insert data into the table: "account_balance" */
	readonly insert_account_balance?: Maybe<Account_Balance_Mutation_Response>
	/** insert a single row into the table: "account_balance" */
	readonly insert_account_balance_one?: Maybe<Account_Balance>
	/** insert data into the table: "battlepass" */
	readonly insert_battlepass?: Maybe<Battlepass_Mutation_Response>
	/** insert data into the table: "battlepass_nft" */
	readonly insert_battlepass_nft?: Maybe<Battlepass_Nft_Mutation_Response>
	/** insert a single row into the table: "battlepass_nft" */
	readonly insert_battlepass_nft_one?: Maybe<Battlepass_Nft>
	/** insert a single row into the table: "battlepass" */
	readonly insert_battlepass_one?: Maybe<Battlepass>
	/** insert data into the table: "campaign" */
	readonly insert_campaign?: Maybe<Campaign_Mutation_Response>
	/** insert data into the table: "campaign_contributor" */
	readonly insert_campaign_contributor?: Maybe<Campaign_Contributor_Mutation_Response>
	/** insert a single row into the table: "campaign_contributor" */
	readonly insert_campaign_contributor_one?: Maybe<Campaign_Contributor>
	/** insert data into the table: "campaign_metadata" */
	readonly insert_campaign_metadata?: Maybe<Campaign_Metadata_Mutation_Response>
	/** insert a single row into the table: "campaign_metadata" */
	readonly insert_campaign_metadata_one?: Maybe<Campaign_Metadata>
	/** insert a single row into the table: "campaign" */
	readonly insert_campaign_one?: Maybe<Campaign>
	/** insert data into the table: "chain_state" */
	readonly insert_chain_state?: Maybe<Chain_State_Mutation_Response>
	/** insert a single row into the table: "chain_state" */
	readonly insert_chain_state_one?: Maybe<Chain_State>
	/** insert data into the table: "current_chain_state" */
	readonly insert_current_chain_state?: Maybe<Current_Chain_State_Mutation_Response>
	/** insert a single row into the table: "current_chain_state" */
	readonly insert_current_chain_state_one?: Maybe<Current_Chain_State>
	/** insert data into the table: "historical_balance" */
	readonly insert_historical_balance?: Maybe<Historical_Balance_Mutation_Response>
	/** insert a single row into the table: "historical_balance" */
	readonly insert_historical_balance_one?: Maybe<Historical_Balance>
	/** insert data into the table: "identity" */
	readonly insert_identity?: Maybe<Identity_Mutation_Response>
	/** insert a single row into the table: "identity" */
	readonly insert_identity_one?: Maybe<Identity>
	/** insert data into the table: "migrations" */
	readonly insert_migrations?: Maybe<Migrations_Mutation_Response>
	/** insert a single row into the table: "migrations" */
	readonly insert_migrations_one?: Maybe<Migrations>
	/** insert data into the table: "nft" */
	readonly insert_nft?: Maybe<Nft_Mutation_Response>
	/** insert data into the table: "nft_collection" */
	readonly insert_nft_collection?: Maybe<Nft_Collection_Mutation_Response>
	/** insert a single row into the table: "nft_collection" */
	readonly insert_nft_collection_one?: Maybe<Nft_Collection>
	/** insert a single row into the table: "nft" */
	readonly insert_nft_one?: Maybe<Nft>
	/** insert data into the table: "organization" */
	readonly insert_organization?: Maybe<Organization_Mutation_Response>
	/** insert data into the table: "organization_member" */
	readonly insert_organization_member?: Maybe<Organization_Member_Mutation_Response>
	/** insert a single row into the table: "organization_member" */
	readonly insert_organization_member_one?: Maybe<Organization_Member>
	/** insert data into the table: "organization_metadata" */
	readonly insert_organization_metadata?: Maybe<Organization_Metadata_Mutation_Response>
	/** insert a single row into the table: "organization_metadata" */
	readonly insert_organization_metadata_one?: Maybe<Organization_Metadata>
	/** insert a single row into the table: "organization" */
	readonly insert_organization_one?: Maybe<Organization>
	/** insert data into the table: "proposal" */
	readonly insert_proposal?: Maybe<Proposal_Mutation_Response>
	/** insert data into the table: "proposal_metadata" */
	readonly insert_proposal_metadata?: Maybe<Proposal_Metadata_Mutation_Response>
	/** insert a single row into the table: "proposal_metadata" */
	readonly insert_proposal_metadata_one?: Maybe<Proposal_Metadata>
	/** insert a single row into the table: "proposal" */
	readonly insert_proposal_one?: Maybe<Proposal>
	/** insert data into the table: "proposal_voter" */
	readonly insert_proposal_voter?: Maybe<Proposal_Voter_Mutation_Response>
	/** insert a single row into the table: "proposal_voter" */
	readonly insert_proposal_voter_one?: Maybe<Proposal_Voter>
	/** insert data into the table: "sense_entity" */
	readonly insert_sense_entity?: Maybe<Sense_Entity_Mutation_Response>
	/** insert a single row into the table: "sense_entity" */
	readonly insert_sense_entity_one?: Maybe<Sense_Entity>
	/** insert data into the table: "voting" */
	readonly insert_voting?: Maybe<Voting_Mutation_Response>
	/** insert a single row into the table: "voting" */
	readonly insert_voting_one?: Maybe<Voting>
	readonly singleUpload: Scalars['String']
	readonly updateSession: Scalars['Boolean']
	/** update data of the table: "Balance" */
	readonly update_Balance?: Maybe<Balance_Mutation_Response>
	/** update single row of the table: "Balance" */
	readonly update_Balance_by_pk?: Maybe<Balance>
	/** update multiples rows of table: "Balance" */
	readonly update_Balance_many?: Maybe<ReadonlyArray<Maybe<Balance_Mutation_Response>>>
	/** update data of the table: "BattlepassLevels" */
	readonly update_BattlepassLevels?: Maybe<BattlepassLevels_Mutation_Response>
	/** update single row of the table: "BattlepassLevels" */
	readonly update_BattlepassLevels_by_pk?: Maybe<BattlepassLevels>
	/** update multiples rows of table: "BattlepassLevels" */
	readonly update_BattlepassLevels_many?: Maybe<ReadonlyArray<Maybe<BattlepassLevels_Mutation_Response>>>
	/** update data of the table: "BattlepassParticipants" */
	readonly update_BattlepassParticipants?: Maybe<BattlepassParticipants_Mutation_Response>
	/** update single row of the table: "BattlepassParticipants" */
	readonly update_BattlepassParticipants_by_pk?: Maybe<BattlepassParticipants>
	/** update multiples rows of table: "BattlepassParticipants" */
	readonly update_BattlepassParticipants_many?: Maybe<ReadonlyArray<Maybe<BattlepassParticipants_Mutation_Response>>>
	/** update data of the table: "BattlepassRewards" */
	readonly update_BattlepassRewards?: Maybe<BattlepassRewards_Mutation_Response>
	/** update single row of the table: "BattlepassRewards" */
	readonly update_BattlepassRewards_by_pk?: Maybe<BattlepassRewards>
	/** update multiples rows of table: "BattlepassRewards" */
	readonly update_BattlepassRewards_many?: Maybe<ReadonlyArray<Maybe<BattlepassRewards_Mutation_Response>>>
	/** update data of the table: "Battlepasses" */
	readonly update_Battlepasses?: Maybe<Battlepasses_Mutation_Response>
	/** update single row of the table: "Battlepasses" */
	readonly update_Battlepasses_by_pk?: Maybe<Battlepasses>
	/** update multiples rows of table: "Battlepasses" */
	readonly update_Battlepasses_many?: Maybe<ReadonlyArray<Maybe<Battlepasses_Mutation_Response>>>
	/** update data of the table: "ChainActivities" */
	readonly update_ChainActivities?: Maybe<ChainActivities_Mutation_Response>
	/** update single row of the table: "ChainActivities" */
	readonly update_ChainActivities_by_pk?: Maybe<ChainActivities>
	/** update multiples rows of table: "ChainActivities" */
	readonly update_ChainActivities_many?: Maybe<ReadonlyArray<Maybe<ChainActivities_Mutation_Response>>>
	/** update data of the table: "ChainInfo" */
	readonly update_ChainInfo?: Maybe<ChainInfo_Mutation_Response>
	/** update single row of the table: "ChainInfo" */
	readonly update_ChainInfo_by_pk?: Maybe<ChainInfo>
	/** update multiples rows of table: "ChainInfo" */
	readonly update_ChainInfo_many?: Maybe<ReadonlyArray<Maybe<ChainInfo_Mutation_Response>>>
	/** update data of the table: "ChainStatuses" */
	readonly update_ChainStatuses?: Maybe<ChainStatuses_Mutation_Response>
	/** update single row of the table: "ChainStatuses" */
	readonly update_ChainStatuses_by_pk?: Maybe<ChainStatuses>
	/** update multiples rows of table: "ChainStatuses" */
	readonly update_ChainStatuses_many?: Maybe<ReadonlyArray<Maybe<ChainStatuses_Mutation_Response>>>
	/** update data of the table: "CompletedQuests" */
	readonly update_CompletedQuests?: Maybe<CompletedQuests_Mutation_Response>
	/** update single row of the table: "CompletedQuests" */
	readonly update_CompletedQuests_by_pk?: Maybe<CompletedQuests>
	/** update multiples rows of table: "CompletedQuests" */
	readonly update_CompletedQuests_many?: Maybe<ReadonlyArray<Maybe<CompletedQuests_Mutation_Response>>>
	/** update data of the table: "DiscordActivities" */
	readonly update_DiscordActivities?: Maybe<DiscordActivities_Mutation_Response>
	/** update single row of the table: "DiscordActivities" */
	readonly update_DiscordActivities_by_pk?: Maybe<DiscordActivities>
	/** update multiples rows of table: "DiscordActivities" */
	readonly update_DiscordActivities_many?: Maybe<ReadonlyArray<Maybe<DiscordActivities_Mutation_Response>>>
	/** update data of the table: "GenericActivities" */
	readonly update_GenericActivities?: Maybe<GenericActivities_Mutation_Response>
	/** update single row of the table: "GenericActivities" */
	readonly update_GenericActivities_by_pk?: Maybe<GenericActivities>
	/** update multiples rows of table: "GenericActivities" */
	readonly update_GenericActivities_many?: Maybe<ReadonlyArray<Maybe<GenericActivities_Mutation_Response>>>
	/** update data of the table: "Identities" */
	readonly update_Identities?: Maybe<Identities_Mutation_Response>
	/** update single row of the table: "Identities" */
	readonly update_Identities_by_pk?: Maybe<Identities>
	/** update multiples rows of table: "Identities" */
	readonly update_Identities_many?: Maybe<ReadonlyArray<Maybe<Identities_Mutation_Response>>>
	/** update data of the table: "Payments" */
	readonly update_Payments?: Maybe<Payments_Mutation_Response>
	/** update single row of the table: "Payments" */
	readonly update_Payments_by_pk?: Maybe<Payments>
	/** update multiples rows of table: "Payments" */
	readonly update_Payments_many?: Maybe<ReadonlyArray<Maybe<Payments_Mutation_Response>>>
	/** update data of the table: "QuestProgresses" */
	readonly update_QuestProgresses?: Maybe<QuestProgresses_Mutation_Response>
	/** update single row of the table: "QuestProgresses" */
	readonly update_QuestProgresses_by_pk?: Maybe<QuestProgresses>
	/** update multiples rows of table: "QuestProgresses" */
	readonly update_QuestProgresses_many?: Maybe<ReadonlyArray<Maybe<QuestProgresses_Mutation_Response>>>
	/** update data of the table: "Quests" */
	readonly update_Quests?: Maybe<Quests_Mutation_Response>
	/** update single row of the table: "Quests" */
	readonly update_Quests_by_pk?: Maybe<Quests>
	/** update multiples rows of table: "Quests" */
	readonly update_Quests_many?: Maybe<ReadonlyArray<Maybe<Quests_Mutation_Response>>>
	/** update data of the table: "RewardClaims" */
	readonly update_RewardClaims?: Maybe<RewardClaims_Mutation_Response>
	/** update single row of the table: "RewardClaims" */
	readonly update_RewardClaims_by_pk?: Maybe<RewardClaims>
	/** update multiples rows of table: "RewardClaims" */
	readonly update_RewardClaims_many?: Maybe<ReadonlyArray<Maybe<RewardClaims_Mutation_Response>>>
	/** update data of the table: "Session" */
	readonly update_Session?: Maybe<Session_Mutation_Response>
	/** update single row of the table: "Session" */
	readonly update_Session_by_pk?: Maybe<Session>
	/** update multiples rows of table: "Session" */
	readonly update_Session_many?: Maybe<ReadonlyArray<Maybe<Session_Mutation_Response>>>
	/** update data of the table: "TwitterActivities" */
	readonly update_TwitterActivities?: Maybe<TwitterActivities_Mutation_Response>
	/** update single row of the table: "TwitterActivities" */
	readonly update_TwitterActivities_by_pk?: Maybe<TwitterActivities>
	/** update multiples rows of table: "TwitterActivities" */
	readonly update_TwitterActivities_many?: Maybe<ReadonlyArray<Maybe<TwitterActivities_Mutation_Response>>>
	/** update data of the table: "TwitterSearches" */
	readonly update_TwitterSearches?: Maybe<TwitterSearches_Mutation_Response>
	/** update single row of the table: "TwitterSearches" */
	readonly update_TwitterSearches_by_pk?: Maybe<TwitterSearches>
	/** update multiples rows of table: "TwitterSearches" */
	readonly update_TwitterSearches_many?: Maybe<ReadonlyArray<Maybe<TwitterSearches_Mutation_Response>>>
	/** update data of the table: "TwitterUsers" */
	readonly update_TwitterUsers?: Maybe<TwitterUsers_Mutation_Response>
	/** update single row of the table: "TwitterUsers" */
	readonly update_TwitterUsers_by_pk?: Maybe<TwitterUsers>
	/** update multiples rows of table: "TwitterUsers" */
	readonly update_TwitterUsers_many?: Maybe<ReadonlyArray<Maybe<TwitterUsers_Mutation_Response>>>
	/** update data of the table: "UserTokens" */
	readonly update_UserTokens?: Maybe<UserTokens_Mutation_Response>
	/** update single row of the table: "UserTokens" */
	readonly update_UserTokens_by_pk?: Maybe<UserTokens>
	/** update multiples rows of table: "UserTokens" */
	readonly update_UserTokens_many?: Maybe<ReadonlyArray<Maybe<UserTokens_Mutation_Response>>>
	/** update data of the table: "_prisma_migrations" */
	readonly update__prisma_migrations?: Maybe<_Prisma_Migrations_Mutation_Response>
	/** update single row of the table: "_prisma_migrations" */
	readonly update__prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>
	/** update multiples rows of table: "_prisma_migrations" */
	readonly update__prisma_migrations_many?: Maybe<ReadonlyArray<Maybe<_Prisma_Migrations_Mutation_Response>>>
	/** update data of the table: "account_balance" */
	readonly update_account_balance?: Maybe<Account_Balance_Mutation_Response>
	/** update single row of the table: "account_balance" */
	readonly update_account_balance_by_pk?: Maybe<Account_Balance>
	/** update multiples rows of table: "account_balance" */
	readonly update_account_balance_many?: Maybe<ReadonlyArray<Maybe<Account_Balance_Mutation_Response>>>
	/** update data of the table: "battlepass" */
	readonly update_battlepass?: Maybe<Battlepass_Mutation_Response>
	/** update single row of the table: "battlepass" */
	readonly update_battlepass_by_pk?: Maybe<Battlepass>
	/** update multiples rows of table: "battlepass" */
	readonly update_battlepass_many?: Maybe<ReadonlyArray<Maybe<Battlepass_Mutation_Response>>>
	/** update data of the table: "battlepass_nft" */
	readonly update_battlepass_nft?: Maybe<Battlepass_Nft_Mutation_Response>
	/** update single row of the table: "battlepass_nft" */
	readonly update_battlepass_nft_by_pk?: Maybe<Battlepass_Nft>
	/** update multiples rows of table: "battlepass_nft" */
	readonly update_battlepass_nft_many?: Maybe<ReadonlyArray<Maybe<Battlepass_Nft_Mutation_Response>>>
	/** update data of the table: "campaign" */
	readonly update_campaign?: Maybe<Campaign_Mutation_Response>
	/** update single row of the table: "campaign" */
	readonly update_campaign_by_pk?: Maybe<Campaign>
	/** update data of the table: "campaign_contributor" */
	readonly update_campaign_contributor?: Maybe<Campaign_Contributor_Mutation_Response>
	/** update single row of the table: "campaign_contributor" */
	readonly update_campaign_contributor_by_pk?: Maybe<Campaign_Contributor>
	/** update multiples rows of table: "campaign_contributor" */
	readonly update_campaign_contributor_many?: Maybe<ReadonlyArray<Maybe<Campaign_Contributor_Mutation_Response>>>
	/** update multiples rows of table: "campaign" */
	readonly update_campaign_many?: Maybe<ReadonlyArray<Maybe<Campaign_Mutation_Response>>>
	/** update data of the table: "campaign_metadata" */
	readonly update_campaign_metadata?: Maybe<Campaign_Metadata_Mutation_Response>
	/** update single row of the table: "campaign_metadata" */
	readonly update_campaign_metadata_by_pk?: Maybe<Campaign_Metadata>
	/** update multiples rows of table: "campaign_metadata" */
	readonly update_campaign_metadata_many?: Maybe<ReadonlyArray<Maybe<Campaign_Metadata_Mutation_Response>>>
	/** update data of the table: "chain_state" */
	readonly update_chain_state?: Maybe<Chain_State_Mutation_Response>
	/** update single row of the table: "chain_state" */
	readonly update_chain_state_by_pk?: Maybe<Chain_State>
	/** update multiples rows of table: "chain_state" */
	readonly update_chain_state_many?: Maybe<ReadonlyArray<Maybe<Chain_State_Mutation_Response>>>
	/** update data of the table: "current_chain_state" */
	readonly update_current_chain_state?: Maybe<Current_Chain_State_Mutation_Response>
	/** update single row of the table: "current_chain_state" */
	readonly update_current_chain_state_by_pk?: Maybe<Current_Chain_State>
	/** update multiples rows of table: "current_chain_state" */
	readonly update_current_chain_state_many?: Maybe<ReadonlyArray<Maybe<Current_Chain_State_Mutation_Response>>>
	/** update data of the table: "historical_balance" */
	readonly update_historical_balance?: Maybe<Historical_Balance_Mutation_Response>
	/** update single row of the table: "historical_balance" */
	readonly update_historical_balance_by_pk?: Maybe<Historical_Balance>
	/** update multiples rows of table: "historical_balance" */
	readonly update_historical_balance_many?: Maybe<ReadonlyArray<Maybe<Historical_Balance_Mutation_Response>>>
	/** update data of the table: "identity" */
	readonly update_identity?: Maybe<Identity_Mutation_Response>
	/** update single row of the table: "identity" */
	readonly update_identity_by_pk?: Maybe<Identity>
	/** update multiples rows of table: "identity" */
	readonly update_identity_many?: Maybe<ReadonlyArray<Maybe<Identity_Mutation_Response>>>
	/** update data of the table: "migrations" */
	readonly update_migrations?: Maybe<Migrations_Mutation_Response>
	/** update single row of the table: "migrations" */
	readonly update_migrations_by_pk?: Maybe<Migrations>
	/** update multiples rows of table: "migrations" */
	readonly update_migrations_many?: Maybe<ReadonlyArray<Maybe<Migrations_Mutation_Response>>>
	/** update data of the table: "nft" */
	readonly update_nft?: Maybe<Nft_Mutation_Response>
	/** update single row of the table: "nft" */
	readonly update_nft_by_pk?: Maybe<Nft>
	/** update data of the table: "nft_collection" */
	readonly update_nft_collection?: Maybe<Nft_Collection_Mutation_Response>
	/** update single row of the table: "nft_collection" */
	readonly update_nft_collection_by_pk?: Maybe<Nft_Collection>
	/** update multiples rows of table: "nft_collection" */
	readonly update_nft_collection_many?: Maybe<ReadonlyArray<Maybe<Nft_Collection_Mutation_Response>>>
	/** update multiples rows of table: "nft" */
	readonly update_nft_many?: Maybe<ReadonlyArray<Maybe<Nft_Mutation_Response>>>
	/** update data of the table: "organization" */
	readonly update_organization?: Maybe<Organization_Mutation_Response>
	/** update single row of the table: "organization" */
	readonly update_organization_by_pk?: Maybe<Organization>
	/** update multiples rows of table: "organization" */
	readonly update_organization_many?: Maybe<ReadonlyArray<Maybe<Organization_Mutation_Response>>>
	/** update data of the table: "organization_member" */
	readonly update_organization_member?: Maybe<Organization_Member_Mutation_Response>
	/** update single row of the table: "organization_member" */
	readonly update_organization_member_by_pk?: Maybe<Organization_Member>
	/** update multiples rows of table: "organization_member" */
	readonly update_organization_member_many?: Maybe<ReadonlyArray<Maybe<Organization_Member_Mutation_Response>>>
	/** update data of the table: "organization_metadata" */
	readonly update_organization_metadata?: Maybe<Organization_Metadata_Mutation_Response>
	/** update single row of the table: "organization_metadata" */
	readonly update_organization_metadata_by_pk?: Maybe<Organization_Metadata>
	/** update multiples rows of table: "organization_metadata" */
	readonly update_organization_metadata_many?: Maybe<ReadonlyArray<Maybe<Organization_Metadata_Mutation_Response>>>
	/** update data of the table: "proposal" */
	readonly update_proposal?: Maybe<Proposal_Mutation_Response>
	/** update single row of the table: "proposal" */
	readonly update_proposal_by_pk?: Maybe<Proposal>
	/** update multiples rows of table: "proposal" */
	readonly update_proposal_many?: Maybe<ReadonlyArray<Maybe<Proposal_Mutation_Response>>>
	/** update data of the table: "proposal_metadata" */
	readonly update_proposal_metadata?: Maybe<Proposal_Metadata_Mutation_Response>
	/** update single row of the table: "proposal_metadata" */
	readonly update_proposal_metadata_by_pk?: Maybe<Proposal_Metadata>
	/** update multiples rows of table: "proposal_metadata" */
	readonly update_proposal_metadata_many?: Maybe<ReadonlyArray<Maybe<Proposal_Metadata_Mutation_Response>>>
	/** update data of the table: "proposal_voter" */
	readonly update_proposal_voter?: Maybe<Proposal_Voter_Mutation_Response>
	/** update single row of the table: "proposal_voter" */
	readonly update_proposal_voter_by_pk?: Maybe<Proposal_Voter>
	/** update multiples rows of table: "proposal_voter" */
	readonly update_proposal_voter_many?: Maybe<ReadonlyArray<Maybe<Proposal_Voter_Mutation_Response>>>
	/** update data of the table: "sense_entity" */
	readonly update_sense_entity?: Maybe<Sense_Entity_Mutation_Response>
	/** update single row of the table: "sense_entity" */
	readonly update_sense_entity_by_pk?: Maybe<Sense_Entity>
	/** update multiples rows of table: "sense_entity" */
	readonly update_sense_entity_many?: Maybe<ReadonlyArray<Maybe<Sense_Entity_Mutation_Response>>>
	/** update data of the table: "voting" */
	readonly update_voting?: Maybe<Voting_Mutation_Response>
	/** update single row of the table: "voting" */
	readonly update_voting_by_pk?: Maybe<Voting>
	/** update multiples rows of table: "voting" */
	readonly update_voting_many?: Maybe<ReadonlyArray<Maybe<Voting_Mutation_Response>>>
}

/** mutation root */
export type Mutation_RootDelete_BalanceArgs = {
	where: Balance_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Balance_By_PkArgs = {
	id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_BattlepassLevelsArgs = {
	where: BattlepassLevels_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_BattlepassLevels_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_BattlepassParticipantsArgs = {
	where: BattlepassParticipants_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_BattlepassParticipants_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_BattlepassRewardsArgs = {
	where: BattlepassRewards_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_BattlepassRewards_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_BattlepassesArgs = {
	where: Battlepasses_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Battlepasses_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_ChainActivitiesArgs = {
	where: ChainActivities_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_ChainActivities_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_ChainInfoArgs = {
	where: ChainInfo_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_ChainInfo_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_ChainStatusesArgs = {
	where: ChainStatuses_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_ChainStatuses_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_CompletedQuestsArgs = {
	where: CompletedQuests_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_CompletedQuests_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_DiscordActivitiesArgs = {
	where: DiscordActivities_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_DiscordActivities_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_GenericActivitiesArgs = {
	where: GenericActivities_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_GenericActivities_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_IdentitiesArgs = {
	where: Identities_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Identities_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_PaymentsArgs = {
	where: Payments_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Payments_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_QuestProgressesArgs = {
	where: QuestProgresses_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_QuestProgresses_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_QuestsArgs = {
	where: Quests_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Quests_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_RewardClaimsArgs = {
	where: RewardClaims_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_RewardClaims_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_SessionArgs = {
	where: Session_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Session_By_PkArgs = {
	id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_TwitterActivitiesArgs = {
	where: TwitterActivities_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_TwitterActivities_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_TwitterSearchesArgs = {
	where: TwitterSearches_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_TwitterSearches_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_TwitterUsersArgs = {
	where: TwitterUsers_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_TwitterUsers_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_UserTokensArgs = {
	where: UserTokens_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_UserTokens_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete__Prisma_MigrationsArgs = {
	where: _Prisma_Migrations_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete__Prisma_Migrations_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Account_BalanceArgs = {
	where: Account_Balance_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Account_Balance_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_BattlepassArgs = {
	where: Battlepass_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Battlepass_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Battlepass_NftArgs = {
	where: Battlepass_Nft_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Battlepass_Nft_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_CampaignArgs = {
	where: Campaign_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Campaign_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Campaign_ContributorArgs = {
	where: Campaign_Contributor_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Campaign_Contributor_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Campaign_MetadataArgs = {
	where: Campaign_Metadata_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Campaign_Metadata_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Chain_StateArgs = {
	where: Chain_State_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Chain_State_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Current_Chain_StateArgs = {
	where: Current_Chain_State_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Current_Chain_State_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Historical_BalanceArgs = {
	where: Historical_Balance_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Historical_Balance_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_IdentityArgs = {
	where: Identity_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Identity_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_MigrationsArgs = {
	where: Migrations_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Migrations_By_PkArgs = {
	id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_NftArgs = {
	where: Nft_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Nft_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Nft_CollectionArgs = {
	where: Nft_Collection_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Nft_Collection_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_OrganizationArgs = {
	where: Organization_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Organization_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Organization_MemberArgs = {
	where: Organization_Member_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Organization_Member_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Organization_MetadataArgs = {
	where: Organization_Metadata_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Organization_Metadata_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_ProposalArgs = {
	where: Proposal_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Proposal_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Proposal_MetadataArgs = {
	where: Proposal_Metadata_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Proposal_Metadata_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Proposal_VoterArgs = {
	where: Proposal_Voter_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Proposal_Voter_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Sense_EntityArgs = {
	where: Sense_Entity_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Sense_Entity_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_VotingArgs = {
	where: Voting_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Voting_By_PkArgs = {
	id: Scalars['String']
}

/** mutation root */
export type Mutation_RootInsert_BalanceArgs = {
	objects: ReadonlyArray<Balance_Insert_Input>
	on_conflict?: InputMaybe<Balance_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Balance_OneArgs = {
	object: Balance_Insert_Input
	on_conflict?: InputMaybe<Balance_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_BattlepassLevelsArgs = {
	objects: ReadonlyArray<BattlepassLevels_Insert_Input>
	on_conflict?: InputMaybe<BattlepassLevels_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_BattlepassLevels_OneArgs = {
	object: BattlepassLevels_Insert_Input
	on_conflict?: InputMaybe<BattlepassLevels_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_BattlepassParticipantsArgs = {
	objects: ReadonlyArray<BattlepassParticipants_Insert_Input>
	on_conflict?: InputMaybe<BattlepassParticipants_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_BattlepassParticipants_OneArgs = {
	object: BattlepassParticipants_Insert_Input
	on_conflict?: InputMaybe<BattlepassParticipants_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_BattlepassRewardsArgs = {
	objects: ReadonlyArray<BattlepassRewards_Insert_Input>
	on_conflict?: InputMaybe<BattlepassRewards_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_BattlepassRewards_OneArgs = {
	object: BattlepassRewards_Insert_Input
	on_conflict?: InputMaybe<BattlepassRewards_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_BattlepassesArgs = {
	objects: ReadonlyArray<Battlepasses_Insert_Input>
	on_conflict?: InputMaybe<Battlepasses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Battlepasses_OneArgs = {
	object: Battlepasses_Insert_Input
	on_conflict?: InputMaybe<Battlepasses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ChainActivitiesArgs = {
	objects: ReadonlyArray<ChainActivities_Insert_Input>
	on_conflict?: InputMaybe<ChainActivities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ChainActivities_OneArgs = {
	object: ChainActivities_Insert_Input
	on_conflict?: InputMaybe<ChainActivities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ChainInfoArgs = {
	objects: ReadonlyArray<ChainInfo_Insert_Input>
	on_conflict?: InputMaybe<ChainInfo_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ChainInfo_OneArgs = {
	object: ChainInfo_Insert_Input
	on_conflict?: InputMaybe<ChainInfo_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ChainStatusesArgs = {
	objects: ReadonlyArray<ChainStatuses_Insert_Input>
	on_conflict?: InputMaybe<ChainStatuses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ChainStatuses_OneArgs = {
	object: ChainStatuses_Insert_Input
	on_conflict?: InputMaybe<ChainStatuses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CompletedQuestsArgs = {
	objects: ReadonlyArray<CompletedQuests_Insert_Input>
	on_conflict?: InputMaybe<CompletedQuests_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CompletedQuests_OneArgs = {
	object: CompletedQuests_Insert_Input
	on_conflict?: InputMaybe<CompletedQuests_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_DiscordActivitiesArgs = {
	objects: ReadonlyArray<DiscordActivities_Insert_Input>
	on_conflict?: InputMaybe<DiscordActivities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_DiscordActivities_OneArgs = {
	object: DiscordActivities_Insert_Input
	on_conflict?: InputMaybe<DiscordActivities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_GenericActivitiesArgs = {
	objects: ReadonlyArray<GenericActivities_Insert_Input>
	on_conflict?: InputMaybe<GenericActivities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_GenericActivities_OneArgs = {
	object: GenericActivities_Insert_Input
	on_conflict?: InputMaybe<GenericActivities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_IdentitiesArgs = {
	objects: ReadonlyArray<Identities_Insert_Input>
	on_conflict?: InputMaybe<Identities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Identities_OneArgs = {
	object: Identities_Insert_Input
	on_conflict?: InputMaybe<Identities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PaymentsArgs = {
	objects: ReadonlyArray<Payments_Insert_Input>
	on_conflict?: InputMaybe<Payments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Payments_OneArgs = {
	object: Payments_Insert_Input
	on_conflict?: InputMaybe<Payments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_QuestProgressesArgs = {
	objects: ReadonlyArray<QuestProgresses_Insert_Input>
	on_conflict?: InputMaybe<QuestProgresses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_QuestProgresses_OneArgs = {
	object: QuestProgresses_Insert_Input
	on_conflict?: InputMaybe<QuestProgresses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_QuestsArgs = {
	objects: ReadonlyArray<Quests_Insert_Input>
	on_conflict?: InputMaybe<Quests_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Quests_OneArgs = {
	object: Quests_Insert_Input
	on_conflict?: InputMaybe<Quests_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_RewardClaimsArgs = {
	objects: ReadonlyArray<RewardClaims_Insert_Input>
	on_conflict?: InputMaybe<RewardClaims_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_RewardClaims_OneArgs = {
	object: RewardClaims_Insert_Input
	on_conflict?: InputMaybe<RewardClaims_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_SessionArgs = {
	objects: ReadonlyArray<Session_Insert_Input>
	on_conflict?: InputMaybe<Session_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Session_OneArgs = {
	object: Session_Insert_Input
	on_conflict?: InputMaybe<Session_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TwitterActivitiesArgs = {
	objects: ReadonlyArray<TwitterActivities_Insert_Input>
	on_conflict?: InputMaybe<TwitterActivities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TwitterActivities_OneArgs = {
	object: TwitterActivities_Insert_Input
	on_conflict?: InputMaybe<TwitterActivities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TwitterSearchesArgs = {
	objects: ReadonlyArray<TwitterSearches_Insert_Input>
	on_conflict?: InputMaybe<TwitterSearches_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TwitterSearches_OneArgs = {
	object: TwitterSearches_Insert_Input
	on_conflict?: InputMaybe<TwitterSearches_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TwitterUsersArgs = {
	objects: ReadonlyArray<TwitterUsers_Insert_Input>
	on_conflict?: InputMaybe<TwitterUsers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TwitterUsers_OneArgs = {
	object: TwitterUsers_Insert_Input
	on_conflict?: InputMaybe<TwitterUsers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UserTokensArgs = {
	objects: ReadonlyArray<UserTokens_Insert_Input>
	on_conflict?: InputMaybe<UserTokens_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UserTokens_OneArgs = {
	object: UserTokens_Insert_Input
	on_conflict?: InputMaybe<UserTokens_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert__Prisma_MigrationsArgs = {
	objects: ReadonlyArray<_Prisma_Migrations_Insert_Input>
	on_conflict?: InputMaybe<_Prisma_Migrations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert__Prisma_Migrations_OneArgs = {
	object: _Prisma_Migrations_Insert_Input
	on_conflict?: InputMaybe<_Prisma_Migrations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Account_BalanceArgs = {
	objects: ReadonlyArray<Account_Balance_Insert_Input>
	on_conflict?: InputMaybe<Account_Balance_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Account_Balance_OneArgs = {
	object: Account_Balance_Insert_Input
	on_conflict?: InputMaybe<Account_Balance_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_BattlepassArgs = {
	objects: ReadonlyArray<Battlepass_Insert_Input>
	on_conflict?: InputMaybe<Battlepass_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Battlepass_NftArgs = {
	objects: ReadonlyArray<Battlepass_Nft_Insert_Input>
	on_conflict?: InputMaybe<Battlepass_Nft_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Battlepass_Nft_OneArgs = {
	object: Battlepass_Nft_Insert_Input
	on_conflict?: InputMaybe<Battlepass_Nft_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Battlepass_OneArgs = {
	object: Battlepass_Insert_Input
	on_conflict?: InputMaybe<Battlepass_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CampaignArgs = {
	objects: ReadonlyArray<Campaign_Insert_Input>
	on_conflict?: InputMaybe<Campaign_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Campaign_ContributorArgs = {
	objects: ReadonlyArray<Campaign_Contributor_Insert_Input>
	on_conflict?: InputMaybe<Campaign_Contributor_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Campaign_Contributor_OneArgs = {
	object: Campaign_Contributor_Insert_Input
	on_conflict?: InputMaybe<Campaign_Contributor_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Campaign_MetadataArgs = {
	objects: ReadonlyArray<Campaign_Metadata_Insert_Input>
	on_conflict?: InputMaybe<Campaign_Metadata_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Campaign_Metadata_OneArgs = {
	object: Campaign_Metadata_Insert_Input
	on_conflict?: InputMaybe<Campaign_Metadata_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Campaign_OneArgs = {
	object: Campaign_Insert_Input
	on_conflict?: InputMaybe<Campaign_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Chain_StateArgs = {
	objects: ReadonlyArray<Chain_State_Insert_Input>
	on_conflict?: InputMaybe<Chain_State_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Chain_State_OneArgs = {
	object: Chain_State_Insert_Input
	on_conflict?: InputMaybe<Chain_State_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Current_Chain_StateArgs = {
	objects: ReadonlyArray<Current_Chain_State_Insert_Input>
	on_conflict?: InputMaybe<Current_Chain_State_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Current_Chain_State_OneArgs = {
	object: Current_Chain_State_Insert_Input
	on_conflict?: InputMaybe<Current_Chain_State_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Historical_BalanceArgs = {
	objects: ReadonlyArray<Historical_Balance_Insert_Input>
	on_conflict?: InputMaybe<Historical_Balance_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Historical_Balance_OneArgs = {
	object: Historical_Balance_Insert_Input
	on_conflict?: InputMaybe<Historical_Balance_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_IdentityArgs = {
	objects: ReadonlyArray<Identity_Insert_Input>
	on_conflict?: InputMaybe<Identity_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Identity_OneArgs = {
	object: Identity_Insert_Input
	on_conflict?: InputMaybe<Identity_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_MigrationsArgs = {
	objects: ReadonlyArray<Migrations_Insert_Input>
	on_conflict?: InputMaybe<Migrations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Migrations_OneArgs = {
	object: Migrations_Insert_Input
	on_conflict?: InputMaybe<Migrations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_NftArgs = {
	objects: ReadonlyArray<Nft_Insert_Input>
	on_conflict?: InputMaybe<Nft_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Nft_CollectionArgs = {
	objects: ReadonlyArray<Nft_Collection_Insert_Input>
	on_conflict?: InputMaybe<Nft_Collection_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Nft_Collection_OneArgs = {
	object: Nft_Collection_Insert_Input
	on_conflict?: InputMaybe<Nft_Collection_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Nft_OneArgs = {
	object: Nft_Insert_Input
	on_conflict?: InputMaybe<Nft_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_OrganizationArgs = {
	objects: ReadonlyArray<Organization_Insert_Input>
	on_conflict?: InputMaybe<Organization_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Organization_MemberArgs = {
	objects: ReadonlyArray<Organization_Member_Insert_Input>
	on_conflict?: InputMaybe<Organization_Member_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Organization_Member_OneArgs = {
	object: Organization_Member_Insert_Input
	on_conflict?: InputMaybe<Organization_Member_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Organization_MetadataArgs = {
	objects: ReadonlyArray<Organization_Metadata_Insert_Input>
	on_conflict?: InputMaybe<Organization_Metadata_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Organization_Metadata_OneArgs = {
	object: Organization_Metadata_Insert_Input
	on_conflict?: InputMaybe<Organization_Metadata_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Organization_OneArgs = {
	object: Organization_Insert_Input
	on_conflict?: InputMaybe<Organization_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ProposalArgs = {
	objects: ReadonlyArray<Proposal_Insert_Input>
	on_conflict?: InputMaybe<Proposal_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Proposal_MetadataArgs = {
	objects: ReadonlyArray<Proposal_Metadata_Insert_Input>
	on_conflict?: InputMaybe<Proposal_Metadata_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Proposal_Metadata_OneArgs = {
	object: Proposal_Metadata_Insert_Input
	on_conflict?: InputMaybe<Proposal_Metadata_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Proposal_OneArgs = {
	object: Proposal_Insert_Input
	on_conflict?: InputMaybe<Proposal_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Proposal_VoterArgs = {
	objects: ReadonlyArray<Proposal_Voter_Insert_Input>
	on_conflict?: InputMaybe<Proposal_Voter_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Proposal_Voter_OneArgs = {
	object: Proposal_Voter_Insert_Input
	on_conflict?: InputMaybe<Proposal_Voter_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Sense_EntityArgs = {
	objects: ReadonlyArray<Sense_Entity_Insert_Input>
	on_conflict?: InputMaybe<Sense_Entity_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Sense_Entity_OneArgs = {
	object: Sense_Entity_Insert_Input
	on_conflict?: InputMaybe<Sense_Entity_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_VotingArgs = {
	objects: ReadonlyArray<Voting_Insert_Input>
	on_conflict?: InputMaybe<Voting_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Voting_OneArgs = {
	object: Voting_Insert_Input
	on_conflict?: InputMaybe<Voting_On_Conflict>
}

/** mutation root */
export type Mutation_RootSingleUploadArgs = {
	fileStream: Scalars['Upload']
}

/** mutation root */
export type Mutation_RootUpdateSessionArgs = {
	address: Scalars['String']
}

/** mutation root */
export type Mutation_RootUpdate_BalanceArgs = {
	_inc?: InputMaybe<Balance_Inc_Input>
	_set?: InputMaybe<Balance_Set_Input>
	where: Balance_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Balance_By_PkArgs = {
	_inc?: InputMaybe<Balance_Inc_Input>
	_set?: InputMaybe<Balance_Set_Input>
	pk_columns: Balance_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Balance_ManyArgs = {
	updates: ReadonlyArray<Balance_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_BattlepassLevelsArgs = {
	_inc?: InputMaybe<BattlepassLevels_Inc_Input>
	_set?: InputMaybe<BattlepassLevels_Set_Input>
	where: BattlepassLevels_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_BattlepassLevels_By_PkArgs = {
	_inc?: InputMaybe<BattlepassLevels_Inc_Input>
	_set?: InputMaybe<BattlepassLevels_Set_Input>
	pk_columns: BattlepassLevels_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_BattlepassLevels_ManyArgs = {
	updates: ReadonlyArray<BattlepassLevels_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_BattlepassParticipantsArgs = {
	_inc?: InputMaybe<BattlepassParticipants_Inc_Input>
	_set?: InputMaybe<BattlepassParticipants_Set_Input>
	where: BattlepassParticipants_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_BattlepassParticipants_By_PkArgs = {
	_inc?: InputMaybe<BattlepassParticipants_Inc_Input>
	_set?: InputMaybe<BattlepassParticipants_Set_Input>
	pk_columns: BattlepassParticipants_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_BattlepassParticipants_ManyArgs = {
	updates: ReadonlyArray<BattlepassParticipants_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_BattlepassRewardsArgs = {
	_inc?: InputMaybe<BattlepassRewards_Inc_Input>
	_set?: InputMaybe<BattlepassRewards_Set_Input>
	where: BattlepassRewards_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_BattlepassRewards_By_PkArgs = {
	_inc?: InputMaybe<BattlepassRewards_Inc_Input>
	_set?: InputMaybe<BattlepassRewards_Set_Input>
	pk_columns: BattlepassRewards_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_BattlepassRewards_ManyArgs = {
	updates: ReadonlyArray<BattlepassRewards_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_BattlepassesArgs = {
	_inc?: InputMaybe<Battlepasses_Inc_Input>
	_set?: InputMaybe<Battlepasses_Set_Input>
	where: Battlepasses_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Battlepasses_By_PkArgs = {
	_inc?: InputMaybe<Battlepasses_Inc_Input>
	_set?: InputMaybe<Battlepasses_Set_Input>
	pk_columns: Battlepasses_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Battlepasses_ManyArgs = {
	updates: ReadonlyArray<Battlepasses_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_ChainActivitiesArgs = {
	_inc?: InputMaybe<ChainActivities_Inc_Input>
	_set?: InputMaybe<ChainActivities_Set_Input>
	where: ChainActivities_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_ChainActivities_By_PkArgs = {
	_inc?: InputMaybe<ChainActivities_Inc_Input>
	_set?: InputMaybe<ChainActivities_Set_Input>
	pk_columns: ChainActivities_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_ChainActivities_ManyArgs = {
	updates: ReadonlyArray<ChainActivities_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_ChainInfoArgs = {
	_inc?: InputMaybe<ChainInfo_Inc_Input>
	_set?: InputMaybe<ChainInfo_Set_Input>
	where: ChainInfo_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_ChainInfo_By_PkArgs = {
	_inc?: InputMaybe<ChainInfo_Inc_Input>
	_set?: InputMaybe<ChainInfo_Set_Input>
	pk_columns: ChainInfo_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_ChainInfo_ManyArgs = {
	updates: ReadonlyArray<ChainInfo_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_ChainStatusesArgs = {
	_inc?: InputMaybe<ChainStatuses_Inc_Input>
	_set?: InputMaybe<ChainStatuses_Set_Input>
	where: ChainStatuses_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_ChainStatuses_By_PkArgs = {
	_inc?: InputMaybe<ChainStatuses_Inc_Input>
	_set?: InputMaybe<ChainStatuses_Set_Input>
	pk_columns: ChainStatuses_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_ChainStatuses_ManyArgs = {
	updates: ReadonlyArray<ChainStatuses_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_CompletedQuestsArgs = {
	_inc?: InputMaybe<CompletedQuests_Inc_Input>
	_set?: InputMaybe<CompletedQuests_Set_Input>
	where: CompletedQuests_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_CompletedQuests_By_PkArgs = {
	_inc?: InputMaybe<CompletedQuests_Inc_Input>
	_set?: InputMaybe<CompletedQuests_Set_Input>
	pk_columns: CompletedQuests_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_CompletedQuests_ManyArgs = {
	updates: ReadonlyArray<CompletedQuests_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_DiscordActivitiesArgs = {
	_inc?: InputMaybe<DiscordActivities_Inc_Input>
	_set?: InputMaybe<DiscordActivities_Set_Input>
	where: DiscordActivities_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_DiscordActivities_By_PkArgs = {
	_inc?: InputMaybe<DiscordActivities_Inc_Input>
	_set?: InputMaybe<DiscordActivities_Set_Input>
	pk_columns: DiscordActivities_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_DiscordActivities_ManyArgs = {
	updates: ReadonlyArray<DiscordActivities_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_GenericActivitiesArgs = {
	_inc?: InputMaybe<GenericActivities_Inc_Input>
	_set?: InputMaybe<GenericActivities_Set_Input>
	where: GenericActivities_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_GenericActivities_By_PkArgs = {
	_inc?: InputMaybe<GenericActivities_Inc_Input>
	_set?: InputMaybe<GenericActivities_Set_Input>
	pk_columns: GenericActivities_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_GenericActivities_ManyArgs = {
	updates: ReadonlyArray<GenericActivities_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_IdentitiesArgs = {
	_inc?: InputMaybe<Identities_Inc_Input>
	_set?: InputMaybe<Identities_Set_Input>
	where: Identities_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Identities_By_PkArgs = {
	_inc?: InputMaybe<Identities_Inc_Input>
	_set?: InputMaybe<Identities_Set_Input>
	pk_columns: Identities_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Identities_ManyArgs = {
	updates: ReadonlyArray<Identities_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_PaymentsArgs = {
	_inc?: InputMaybe<Payments_Inc_Input>
	_set?: InputMaybe<Payments_Set_Input>
	where: Payments_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Payments_By_PkArgs = {
	_inc?: InputMaybe<Payments_Inc_Input>
	_set?: InputMaybe<Payments_Set_Input>
	pk_columns: Payments_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Payments_ManyArgs = {
	updates: ReadonlyArray<Payments_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_QuestProgressesArgs = {
	_inc?: InputMaybe<QuestProgresses_Inc_Input>
	_set?: InputMaybe<QuestProgresses_Set_Input>
	where: QuestProgresses_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_QuestProgresses_By_PkArgs = {
	_inc?: InputMaybe<QuestProgresses_Inc_Input>
	_set?: InputMaybe<QuestProgresses_Set_Input>
	pk_columns: QuestProgresses_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_QuestProgresses_ManyArgs = {
	updates: ReadonlyArray<QuestProgresses_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_QuestsArgs = {
	_inc?: InputMaybe<Quests_Inc_Input>
	_set?: InputMaybe<Quests_Set_Input>
	where: Quests_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Quests_By_PkArgs = {
	_inc?: InputMaybe<Quests_Inc_Input>
	_set?: InputMaybe<Quests_Set_Input>
	pk_columns: Quests_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Quests_ManyArgs = {
	updates: ReadonlyArray<Quests_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_RewardClaimsArgs = {
	_inc?: InputMaybe<RewardClaims_Inc_Input>
	_set?: InputMaybe<RewardClaims_Set_Input>
	where: RewardClaims_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_RewardClaims_By_PkArgs = {
	_inc?: InputMaybe<RewardClaims_Inc_Input>
	_set?: InputMaybe<RewardClaims_Set_Input>
	pk_columns: RewardClaims_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_RewardClaims_ManyArgs = {
	updates: ReadonlyArray<RewardClaims_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_SessionArgs = {
	_inc?: InputMaybe<Session_Inc_Input>
	_set?: InputMaybe<Session_Set_Input>
	where: Session_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Session_By_PkArgs = {
	_inc?: InputMaybe<Session_Inc_Input>
	_set?: InputMaybe<Session_Set_Input>
	pk_columns: Session_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Session_ManyArgs = {
	updates: ReadonlyArray<Session_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_TwitterActivitiesArgs = {
	_inc?: InputMaybe<TwitterActivities_Inc_Input>
	_set?: InputMaybe<TwitterActivities_Set_Input>
	where: TwitterActivities_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_TwitterActivities_By_PkArgs = {
	_inc?: InputMaybe<TwitterActivities_Inc_Input>
	_set?: InputMaybe<TwitterActivities_Set_Input>
	pk_columns: TwitterActivities_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_TwitterActivities_ManyArgs = {
	updates: ReadonlyArray<TwitterActivities_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_TwitterSearchesArgs = {
	_inc?: InputMaybe<TwitterSearches_Inc_Input>
	_set?: InputMaybe<TwitterSearches_Set_Input>
	where: TwitterSearches_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_TwitterSearches_By_PkArgs = {
	_inc?: InputMaybe<TwitterSearches_Inc_Input>
	_set?: InputMaybe<TwitterSearches_Set_Input>
	pk_columns: TwitterSearches_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_TwitterSearches_ManyArgs = {
	updates: ReadonlyArray<TwitterSearches_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_TwitterUsersArgs = {
	_inc?: InputMaybe<TwitterUsers_Inc_Input>
	_set?: InputMaybe<TwitterUsers_Set_Input>
	where: TwitterUsers_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_TwitterUsers_By_PkArgs = {
	_inc?: InputMaybe<TwitterUsers_Inc_Input>
	_set?: InputMaybe<TwitterUsers_Set_Input>
	pk_columns: TwitterUsers_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_TwitterUsers_ManyArgs = {
	updates: ReadonlyArray<TwitterUsers_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_UserTokensArgs = {
	_inc?: InputMaybe<UserTokens_Inc_Input>
	_set?: InputMaybe<UserTokens_Set_Input>
	where: UserTokens_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_UserTokens_By_PkArgs = {
	_inc?: InputMaybe<UserTokens_Inc_Input>
	_set?: InputMaybe<UserTokens_Set_Input>
	pk_columns: UserTokens_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UserTokens_ManyArgs = {
	updates: ReadonlyArray<UserTokens_Updates>
}

/** mutation root */
export type Mutation_RootUpdate__Prisma_MigrationsArgs = {
	_inc?: InputMaybe<_Prisma_Migrations_Inc_Input>
	_set?: InputMaybe<_Prisma_Migrations_Set_Input>
	where: _Prisma_Migrations_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate__Prisma_Migrations_By_PkArgs = {
	_inc?: InputMaybe<_Prisma_Migrations_Inc_Input>
	_set?: InputMaybe<_Prisma_Migrations_Set_Input>
	pk_columns: _Prisma_Migrations_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate__Prisma_Migrations_ManyArgs = {
	updates: ReadonlyArray<_Prisma_Migrations_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Account_BalanceArgs = {
	_set?: InputMaybe<Account_Balance_Set_Input>
	where: Account_Balance_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Account_Balance_By_PkArgs = {
	_set?: InputMaybe<Account_Balance_Set_Input>
	pk_columns: Account_Balance_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Account_Balance_ManyArgs = {
	updates: ReadonlyArray<Account_Balance_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_BattlepassArgs = {
	_inc?: InputMaybe<Battlepass_Inc_Input>
	_set?: InputMaybe<Battlepass_Set_Input>
	where: Battlepass_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Battlepass_By_PkArgs = {
	_inc?: InputMaybe<Battlepass_Inc_Input>
	_set?: InputMaybe<Battlepass_Set_Input>
	pk_columns: Battlepass_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Battlepass_ManyArgs = {
	updates: ReadonlyArray<Battlepass_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Battlepass_NftArgs = {
	_set?: InputMaybe<Battlepass_Nft_Set_Input>
	where: Battlepass_Nft_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Battlepass_Nft_By_PkArgs = {
	_set?: InputMaybe<Battlepass_Nft_Set_Input>
	pk_columns: Battlepass_Nft_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Battlepass_Nft_ManyArgs = {
	updates: ReadonlyArray<Battlepass_Nft_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_CampaignArgs = {
	_inc?: InputMaybe<Campaign_Inc_Input>
	_set?: InputMaybe<Campaign_Set_Input>
	where: Campaign_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Campaign_By_PkArgs = {
	_inc?: InputMaybe<Campaign_Inc_Input>
	_set?: InputMaybe<Campaign_Set_Input>
	pk_columns: Campaign_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Campaign_ContributorArgs = {
	_inc?: InputMaybe<Campaign_Contributor_Inc_Input>
	_set?: InputMaybe<Campaign_Contributor_Set_Input>
	where: Campaign_Contributor_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Campaign_Contributor_By_PkArgs = {
	_inc?: InputMaybe<Campaign_Contributor_Inc_Input>
	_set?: InputMaybe<Campaign_Contributor_Set_Input>
	pk_columns: Campaign_Contributor_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Campaign_Contributor_ManyArgs = {
	updates: ReadonlyArray<Campaign_Contributor_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Campaign_ManyArgs = {
	updates: ReadonlyArray<Campaign_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Campaign_MetadataArgs = {
	_set?: InputMaybe<Campaign_Metadata_Set_Input>
	where: Campaign_Metadata_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Campaign_Metadata_By_PkArgs = {
	_set?: InputMaybe<Campaign_Metadata_Set_Input>
	pk_columns: Campaign_Metadata_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Campaign_Metadata_ManyArgs = {
	updates: ReadonlyArray<Campaign_Metadata_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Chain_StateArgs = {
	_inc?: InputMaybe<Chain_State_Inc_Input>
	_set?: InputMaybe<Chain_State_Set_Input>
	where: Chain_State_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Chain_State_By_PkArgs = {
	_inc?: InputMaybe<Chain_State_Inc_Input>
	_set?: InputMaybe<Chain_State_Set_Input>
	pk_columns: Chain_State_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Chain_State_ManyArgs = {
	updates: ReadonlyArray<Chain_State_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Current_Chain_StateArgs = {
	_inc?: InputMaybe<Current_Chain_State_Inc_Input>
	_set?: InputMaybe<Current_Chain_State_Set_Input>
	where: Current_Chain_State_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Current_Chain_State_By_PkArgs = {
	_inc?: InputMaybe<Current_Chain_State_Inc_Input>
	_set?: InputMaybe<Current_Chain_State_Set_Input>
	pk_columns: Current_Chain_State_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Current_Chain_State_ManyArgs = {
	updates: ReadonlyArray<Current_Chain_State_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Historical_BalanceArgs = {
	_inc?: InputMaybe<Historical_Balance_Inc_Input>
	_set?: InputMaybe<Historical_Balance_Set_Input>
	where: Historical_Balance_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Historical_Balance_By_PkArgs = {
	_inc?: InputMaybe<Historical_Balance_Inc_Input>
	_set?: InputMaybe<Historical_Balance_Set_Input>
	pk_columns: Historical_Balance_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Historical_Balance_ManyArgs = {
	updates: ReadonlyArray<Historical_Balance_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_IdentityArgs = {
	_set?: InputMaybe<Identity_Set_Input>
	where: Identity_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Identity_By_PkArgs = {
	_set?: InputMaybe<Identity_Set_Input>
	pk_columns: Identity_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Identity_ManyArgs = {
	updates: ReadonlyArray<Identity_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_MigrationsArgs = {
	_inc?: InputMaybe<Migrations_Inc_Input>
	_set?: InputMaybe<Migrations_Set_Input>
	where: Migrations_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Migrations_By_PkArgs = {
	_inc?: InputMaybe<Migrations_Inc_Input>
	_set?: InputMaybe<Migrations_Set_Input>
	pk_columns: Migrations_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Migrations_ManyArgs = {
	updates: ReadonlyArray<Migrations_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_NftArgs = {
	_set?: InputMaybe<Nft_Set_Input>
	where: Nft_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Nft_By_PkArgs = {
	_set?: InputMaybe<Nft_Set_Input>
	pk_columns: Nft_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Nft_CollectionArgs = {
	_inc?: InputMaybe<Nft_Collection_Inc_Input>
	_set?: InputMaybe<Nft_Collection_Set_Input>
	where: Nft_Collection_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Nft_Collection_By_PkArgs = {
	_inc?: InputMaybe<Nft_Collection_Inc_Input>
	_set?: InputMaybe<Nft_Collection_Set_Input>
	pk_columns: Nft_Collection_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Nft_Collection_ManyArgs = {
	updates: ReadonlyArray<Nft_Collection_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Nft_ManyArgs = {
	updates: ReadonlyArray<Nft_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_OrganizationArgs = {
	_inc?: InputMaybe<Organization_Inc_Input>
	_set?: InputMaybe<Organization_Set_Input>
	where: Organization_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Organization_By_PkArgs = {
	_inc?: InputMaybe<Organization_Inc_Input>
	_set?: InputMaybe<Organization_Set_Input>
	pk_columns: Organization_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Organization_ManyArgs = {
	updates: ReadonlyArray<Organization_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Organization_MemberArgs = {
	_set?: InputMaybe<Organization_Member_Set_Input>
	where: Organization_Member_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Organization_Member_By_PkArgs = {
	_set?: InputMaybe<Organization_Member_Set_Input>
	pk_columns: Organization_Member_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Organization_Member_ManyArgs = {
	updates: ReadonlyArray<Organization_Member_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Organization_MetadataArgs = {
	_set?: InputMaybe<Organization_Metadata_Set_Input>
	where: Organization_Metadata_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Organization_Metadata_By_PkArgs = {
	_set?: InputMaybe<Organization_Metadata_Set_Input>
	pk_columns: Organization_Metadata_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Organization_Metadata_ManyArgs = {
	updates: ReadonlyArray<Organization_Metadata_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_ProposalArgs = {
	_inc?: InputMaybe<Proposal_Inc_Input>
	_set?: InputMaybe<Proposal_Set_Input>
	where: Proposal_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Proposal_By_PkArgs = {
	_inc?: InputMaybe<Proposal_Inc_Input>
	_set?: InputMaybe<Proposal_Set_Input>
	pk_columns: Proposal_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Proposal_ManyArgs = {
	updates: ReadonlyArray<Proposal_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Proposal_MetadataArgs = {
	_set?: InputMaybe<Proposal_Metadata_Set_Input>
	where: Proposal_Metadata_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Proposal_Metadata_By_PkArgs = {
	_set?: InputMaybe<Proposal_Metadata_Set_Input>
	pk_columns: Proposal_Metadata_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Proposal_Metadata_ManyArgs = {
	updates: ReadonlyArray<Proposal_Metadata_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Proposal_VoterArgs = {
	_inc?: InputMaybe<Proposal_Voter_Inc_Input>
	_set?: InputMaybe<Proposal_Voter_Set_Input>
	where: Proposal_Voter_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Proposal_Voter_By_PkArgs = {
	_inc?: InputMaybe<Proposal_Voter_Inc_Input>
	_set?: InputMaybe<Proposal_Voter_Set_Input>
	pk_columns: Proposal_Voter_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Proposal_Voter_ManyArgs = {
	updates: ReadonlyArray<Proposal_Voter_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Sense_EntityArgs = {
	_inc?: InputMaybe<Sense_Entity_Inc_Input>
	_set?: InputMaybe<Sense_Entity_Set_Input>
	where: Sense_Entity_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Sense_Entity_By_PkArgs = {
	_inc?: InputMaybe<Sense_Entity_Inc_Input>
	_set?: InputMaybe<Sense_Entity_Set_Input>
	pk_columns: Sense_Entity_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Sense_Entity_ManyArgs = {
	updates: ReadonlyArray<Sense_Entity_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_VotingArgs = {
	_inc?: InputMaybe<Voting_Inc_Input>
	_set?: InputMaybe<Voting_Set_Input>
	where: Voting_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Voting_By_PkArgs = {
	_inc?: InputMaybe<Voting_Inc_Input>
	_set?: InputMaybe<Voting_Set_Input>
	pk_columns: Voting_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Voting_ManyArgs = {
	updates: ReadonlyArray<Voting_Updates>
}

/** columns and relationships of "nft" */
export type Nft = {
	readonly __typename?: 'nft'
	/** An array relationship */
	readonly battlepass_nfts: ReadonlyArray<Battlepass_Nft>
	/** An aggregate relationship */
	readonly battlepass_nfts_aggregate: Battlepass_Nft_Aggregate
	readonly collection_id?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly image?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadata_is_frozen?: Maybe<Scalars['Boolean']>
	readonly name?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly nft_collection?: Maybe<Nft_Collection>
	readonly owner_id?: Maybe<Scalars['String']>
}

/** columns and relationships of "nft" */
export type NftBattlepass_NftsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Nft_Order_By>>
	where?: InputMaybe<Battlepass_Nft_Bool_Exp>
}

/** columns and relationships of "nft" */
export type NftBattlepass_Nfts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Nft_Order_By>>
	where?: InputMaybe<Battlepass_Nft_Bool_Exp>
}

/** aggregated selection of "nft" */
export type Nft_Aggregate = {
	readonly __typename?: 'nft_aggregate'
	readonly aggregate?: Maybe<Nft_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Nft>
}

export type Nft_Aggregate_Bool_Exp = {
	readonly bool_and?: InputMaybe<Nft_Aggregate_Bool_Exp_Bool_And>
	readonly bool_or?: InputMaybe<Nft_Aggregate_Bool_Exp_Bool_Or>
	readonly count?: InputMaybe<Nft_Aggregate_Bool_Exp_Count>
}

export type Nft_Aggregate_Bool_Exp_Bool_And = {
	readonly arguments: Nft_Select_Column_Nft_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Nft_Bool_Exp>
	readonly predicate: Boolean_Comparison_Exp
}

export type Nft_Aggregate_Bool_Exp_Bool_Or = {
	readonly arguments: Nft_Select_Column_Nft_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Nft_Bool_Exp>
	readonly predicate: Boolean_Comparison_Exp
}

export type Nft_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<Nft_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Nft_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "nft" */
export type Nft_Aggregate_Fields = {
	readonly __typename?: 'nft_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Nft_Max_Fields>
	readonly min?: Maybe<Nft_Min_Fields>
}

/** aggregate fields of "nft" */
export type Nft_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Nft_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "nft" */
export type Nft_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Nft_Max_Order_By>
	readonly min?: InputMaybe<Nft_Min_Order_By>
}

/** input type for inserting array relation for remote table "nft" */
export type Nft_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<Nft_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Nft_On_Conflict>
}

/** Boolean expression to filter rows from the table "nft". All fields are combined with a logical 'AND'. */
export type Nft_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Nft_Bool_Exp>>
	readonly _not?: InputMaybe<Nft_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Nft_Bool_Exp>>
	readonly battlepass_nfts?: InputMaybe<Battlepass_Nft_Bool_Exp>
	readonly battlepass_nfts_aggregate?: InputMaybe<Battlepass_Nft_Aggregate_Bool_Exp>
	readonly collection_id?: InputMaybe<String_Comparison_Exp>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly identity?: InputMaybe<Identity_Bool_Exp>
	readonly image?: InputMaybe<String_Comparison_Exp>
	readonly metadata?: InputMaybe<String_Comparison_Exp>
	readonly metadata_is_frozen?: InputMaybe<Boolean_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly nft_collection?: InputMaybe<Nft_Collection_Bool_Exp>
	readonly owner_id?: InputMaybe<String_Comparison_Exp>
}

/** columns and relationships of "nft_collection" */
export type Nft_Collection = {
	readonly __typename?: 'nft_collection'
	readonly description?: Maybe<Scalars['String']>
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly image?: Maybe<Scalars['String']>
	readonly max?: Maybe<Scalars['Int']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadata_is_frozen?: Maybe<Scalars['Boolean']>
	readonly name?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly nfts: ReadonlyArray<Nft>
	/** An aggregate relationship */
	readonly nfts_aggregate: Nft_Aggregate
	readonly owner_id?: Maybe<Scalars['String']>
}

/** columns and relationships of "nft_collection" */
export type Nft_CollectionNftsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nft_Order_By>>
	where?: InputMaybe<Nft_Bool_Exp>
}

/** columns and relationships of "nft_collection" */
export type Nft_CollectionNfts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nft_Order_By>>
	where?: InputMaybe<Nft_Bool_Exp>
}

/** aggregated selection of "nft_collection" */
export type Nft_Collection_Aggregate = {
	readonly __typename?: 'nft_collection_aggregate'
	readonly aggregate?: Maybe<Nft_Collection_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Nft_Collection>
}

export type Nft_Collection_Aggregate_Bool_Exp = {
	readonly bool_and?: InputMaybe<Nft_Collection_Aggregate_Bool_Exp_Bool_And>
	readonly bool_or?: InputMaybe<Nft_Collection_Aggregate_Bool_Exp_Bool_Or>
	readonly count?: InputMaybe<Nft_Collection_Aggregate_Bool_Exp_Count>
}

export type Nft_Collection_Aggregate_Bool_Exp_Bool_And = {
	readonly arguments: Nft_Collection_Select_Column_Nft_Collection_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Nft_Collection_Bool_Exp>
	readonly predicate: Boolean_Comparison_Exp
}

export type Nft_Collection_Aggregate_Bool_Exp_Bool_Or = {
	readonly arguments: Nft_Collection_Select_Column_Nft_Collection_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Nft_Collection_Bool_Exp>
	readonly predicate: Boolean_Comparison_Exp
}

export type Nft_Collection_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<Nft_Collection_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Nft_Collection_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "nft_collection" */
export type Nft_Collection_Aggregate_Fields = {
	readonly __typename?: 'nft_collection_aggregate_fields'
	readonly avg?: Maybe<Nft_Collection_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Nft_Collection_Max_Fields>
	readonly min?: Maybe<Nft_Collection_Min_Fields>
	readonly stddev?: Maybe<Nft_Collection_Stddev_Fields>
	readonly stddev_pop?: Maybe<Nft_Collection_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Nft_Collection_Stddev_Samp_Fields>
	readonly sum?: Maybe<Nft_Collection_Sum_Fields>
	readonly var_pop?: Maybe<Nft_Collection_Var_Pop_Fields>
	readonly var_samp?: Maybe<Nft_Collection_Var_Samp_Fields>
	readonly variance?: Maybe<Nft_Collection_Variance_Fields>
}

/** aggregate fields of "nft_collection" */
export type Nft_Collection_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Nft_Collection_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "nft_collection" */
export type Nft_Collection_Aggregate_Order_By = {
	readonly avg?: InputMaybe<Nft_Collection_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Nft_Collection_Max_Order_By>
	readonly min?: InputMaybe<Nft_Collection_Min_Order_By>
	readonly stddev?: InputMaybe<Nft_Collection_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<Nft_Collection_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<Nft_Collection_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<Nft_Collection_Sum_Order_By>
	readonly var_pop?: InputMaybe<Nft_Collection_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<Nft_Collection_Var_Samp_Order_By>
	readonly variance?: InputMaybe<Nft_Collection_Variance_Order_By>
}

/** input type for inserting array relation for remote table "nft_collection" */
export type Nft_Collection_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<Nft_Collection_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Nft_Collection_On_Conflict>
}

/** aggregate avg on columns */
export type Nft_Collection_Avg_Fields = {
	readonly __typename?: 'nft_collection_avg_fields'
	readonly max?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "nft_collection" */
export type Nft_Collection_Avg_Order_By = {
	readonly max?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "nft_collection". All fields are combined with a logical 'AND'. */
export type Nft_Collection_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Nft_Collection_Bool_Exp>>
	readonly _not?: InputMaybe<Nft_Collection_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Nft_Collection_Bool_Exp>>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly identity?: InputMaybe<Identity_Bool_Exp>
	readonly image?: InputMaybe<String_Comparison_Exp>
	readonly max?: InputMaybe<Int_Comparison_Exp>
	readonly metadata?: InputMaybe<String_Comparison_Exp>
	readonly metadata_is_frozen?: InputMaybe<Boolean_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly nfts?: InputMaybe<Nft_Bool_Exp>
	readonly nfts_aggregate?: InputMaybe<Nft_Aggregate_Bool_Exp>
	readonly owner_id?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "nft_collection" */
export enum Nft_Collection_Constraint {
	/** unique or primary key constraint on columns "id" */
	PkFfe58aa05707db77c2f20ecdbc3 = 'PK_ffe58aa05707db77c2f20ecdbc3',
}

/** input type for incrementing numeric columns in table "nft_collection" */
export type Nft_Collection_Inc_Input = {
	readonly max?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "nft_collection" */
export type Nft_Collection_Insert_Input = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly image?: InputMaybe<Scalars['String']>
	readonly max?: InputMaybe<Scalars['Int']>
	readonly metadata?: InputMaybe<Scalars['String']>
	readonly metadata_is_frozen?: InputMaybe<Scalars['Boolean']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly nfts?: InputMaybe<Nft_Arr_Rel_Insert_Input>
	readonly owner_id?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Nft_Collection_Max_Fields = {
	readonly __typename?: 'nft_collection_max_fields'
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly max?: Maybe<Scalars['Int']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly owner_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "nft_collection" */
export type Nft_Collection_Max_Order_By = {
	readonly description?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly image?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly owner_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Nft_Collection_Min_Fields = {
	readonly __typename?: 'nft_collection_min_fields'
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly max?: Maybe<Scalars['Int']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly owner_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "nft_collection" */
export type Nft_Collection_Min_Order_By = {
	readonly description?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly image?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly owner_id?: InputMaybe<Order_By>
}

/** response of any mutation on the table "nft_collection" */
export type Nft_Collection_Mutation_Response = {
	readonly __typename?: 'nft_collection_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Nft_Collection>
}

/** input type for inserting object relation for remote table "nft_collection" */
export type Nft_Collection_Obj_Rel_Insert_Input = {
	readonly data: Nft_Collection_Insert_Input
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Nft_Collection_On_Conflict>
}

/** on_conflict condition type for table "nft_collection" */
export type Nft_Collection_On_Conflict = {
	readonly constraint: Nft_Collection_Constraint
	readonly update_columns?: ReadonlyArray<Nft_Collection_Update_Column>
	readonly where?: InputMaybe<Nft_Collection_Bool_Exp>
}

/** Ordering options when selecting data from "nft_collection". */
export type Nft_Collection_Order_By = {
	readonly description?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly image?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly metadata_is_frozen?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly nfts_aggregate?: InputMaybe<Nft_Aggregate_Order_By>
	readonly owner_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: nft_collection */
export type Nft_Collection_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

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
	OwnerId = 'owner_id',
}

/** select "nft_collection_aggregate_bool_exp_bool_and_arguments_columns" columns of table "nft_collection" */
export enum Nft_Collection_Select_Column_Nft_Collection_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
	/** column name */
	MetadataIsFrozen = 'metadata_is_frozen',
}

/** select "nft_collection_aggregate_bool_exp_bool_or_arguments_columns" columns of table "nft_collection" */
export enum Nft_Collection_Select_Column_Nft_Collection_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
	/** column name */
	MetadataIsFrozen = 'metadata_is_frozen',
}

/** input type for updating data in table "nft_collection" */
export type Nft_Collection_Set_Input = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly max?: InputMaybe<Scalars['Int']>
	readonly metadata?: InputMaybe<Scalars['String']>
	readonly metadata_is_frozen?: InputMaybe<Scalars['Boolean']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly owner_id?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Nft_Collection_Stddev_Fields = {
	readonly __typename?: 'nft_collection_stddev_fields'
	readonly max?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "nft_collection" */
export type Nft_Collection_Stddev_Order_By = {
	readonly max?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Nft_Collection_Stddev_Pop_Fields = {
	readonly __typename?: 'nft_collection_stddev_pop_fields'
	readonly max?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "nft_collection" */
export type Nft_Collection_Stddev_Pop_Order_By = {
	readonly max?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Nft_Collection_Stddev_Samp_Fields = {
	readonly __typename?: 'nft_collection_stddev_samp_fields'
	readonly max?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "nft_collection" */
export type Nft_Collection_Stddev_Samp_Order_By = {
	readonly max?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "nft_collection" */
export type Nft_Collection_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Nft_Collection_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Nft_Collection_Stream_Cursor_Value_Input = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly max?: InputMaybe<Scalars['Int']>
	readonly metadata?: InputMaybe<Scalars['String']>
	readonly metadata_is_frozen?: InputMaybe<Scalars['Boolean']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly owner_id?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type Nft_Collection_Sum_Fields = {
	readonly __typename?: 'nft_collection_sum_fields'
	readonly max?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "nft_collection" */
export type Nft_Collection_Sum_Order_By = {
	readonly max?: InputMaybe<Order_By>
}

/** update columns of table "nft_collection" */
export enum Nft_Collection_Update_Column {
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
	OwnerId = 'owner_id',
}

export type Nft_Collection_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Nft_Collection_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Nft_Collection_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Nft_Collection_Bool_Exp
}

/** aggregate var_pop on columns */
export type Nft_Collection_Var_Pop_Fields = {
	readonly __typename?: 'nft_collection_var_pop_fields'
	readonly max?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "nft_collection" */
export type Nft_Collection_Var_Pop_Order_By = {
	readonly max?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Nft_Collection_Var_Samp_Fields = {
	readonly __typename?: 'nft_collection_var_samp_fields'
	readonly max?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "nft_collection" */
export type Nft_Collection_Var_Samp_Order_By = {
	readonly max?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Nft_Collection_Variance_Fields = {
	readonly __typename?: 'nft_collection_variance_fields'
	readonly max?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "nft_collection" */
export type Nft_Collection_Variance_Order_By = {
	readonly max?: InputMaybe<Order_By>
}

/** unique or primary key constraints on table "nft" */
export enum Nft_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_8f46897c58e23b0e7bf6c8e56b0 = 'PK_8f46897c58e23b0e7bf6c8e56b0',
}

/** input type for inserting data into table "nft" */
export type Nft_Insert_Input = {
	readonly battlepass_nfts?: InputMaybe<Battlepass_Nft_Arr_Rel_Insert_Input>
	readonly collection_id?: InputMaybe<Scalars['String']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly image?: InputMaybe<Scalars['String']>
	readonly metadata?: InputMaybe<Scalars['String']>
	readonly metadata_is_frozen?: InputMaybe<Scalars['Boolean']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly nft_collection?: InputMaybe<Nft_Collection_Obj_Rel_Insert_Input>
	readonly owner_id?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Nft_Max_Fields = {
	readonly __typename?: 'nft_max_fields'
	readonly collection_id?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly owner_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "nft" */
export type Nft_Max_Order_By = {
	readonly collection_id?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly image?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly owner_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Nft_Min_Fields = {
	readonly __typename?: 'nft_min_fields'
	readonly collection_id?: Maybe<Scalars['String']>
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly image?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly owner_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "nft" */
export type Nft_Min_Order_By = {
	readonly collection_id?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly image?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly owner_id?: InputMaybe<Order_By>
}

/** response of any mutation on the table "nft" */
export type Nft_Mutation_Response = {
	readonly __typename?: 'nft_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Nft>
}

/** input type for inserting object relation for remote table "nft" */
export type Nft_Obj_Rel_Insert_Input = {
	readonly data: Nft_Insert_Input
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Nft_On_Conflict>
}

/** on_conflict condition type for table "nft" */
export type Nft_On_Conflict = {
	readonly constraint: Nft_Constraint
	readonly update_columns?: ReadonlyArray<Nft_Update_Column>
	readonly where?: InputMaybe<Nft_Bool_Exp>
}

/** Ordering options when selecting data from "nft". */
export type Nft_Order_By = {
	readonly battlepass_nfts_aggregate?: InputMaybe<Battlepass_Nft_Aggregate_Order_By>
	readonly collection_id?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly image?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly metadata_is_frozen?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly nft_collection?: InputMaybe<Nft_Collection_Order_By>
	readonly owner_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: nft */
export type Nft_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

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
	OwnerId = 'owner_id',
}

/** select "nft_aggregate_bool_exp_bool_and_arguments_columns" columns of table "nft" */
export enum Nft_Select_Column_Nft_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
	/** column name */
	MetadataIsFrozen = 'metadata_is_frozen',
}

/** select "nft_aggregate_bool_exp_bool_or_arguments_columns" columns of table "nft" */
export enum Nft_Select_Column_Nft_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
	/** column name */
	MetadataIsFrozen = 'metadata_is_frozen',
}

/** input type for updating data in table "nft" */
export type Nft_Set_Input = {
	readonly collection_id?: InputMaybe<Scalars['String']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly metadata?: InputMaybe<Scalars['String']>
	readonly metadata_is_frozen?: InputMaybe<Scalars['Boolean']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly owner_id?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "nft" */
export type Nft_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Nft_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Nft_Stream_Cursor_Value_Input = {
	readonly collection_id?: InputMaybe<Scalars['String']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly image?: InputMaybe<Scalars['String']>
	readonly metadata?: InputMaybe<Scalars['String']>
	readonly metadata_is_frozen?: InputMaybe<Scalars['Boolean']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly owner_id?: InputMaybe<Scalars['String']>
}

/** update columns of table "nft" */
export enum Nft_Update_Column {
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
	OwnerId = 'owner_id',
}

export type Nft_Updates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Nft_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Nft_Bool_Exp
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
	readonly access_model: Scalars['String']
	/** An array relationship */
	readonly battlepasses: ReadonlyArray<Battlepass>
	/** An aggregate relationship */
	readonly battlepasses_aggregate: Battlepass_Aggregate
	/** An array relationship */
	readonly campaigns: ReadonlyArray<Campaign>
	/** An aggregate relationship */
	readonly campaigns_aggregate: Campaign_Aggregate
	readonly cid: Scalars['String']
	readonly created_at_block: Scalars['Int']
	readonly creator: Scalars['String']
	readonly creator_identity_id?: Maybe<Scalars['String']>
	readonly deposit: Scalars['numeric']
	readonly description: Scalars['String']
	readonly email: Scalars['String']
	readonly fee_model: Scalars['String']
	readonly gov_currency: Scalars['String']
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
	readonly member_limit: Scalars['Int']
	readonly membership_fee?: Maybe<Scalars['numeric']>
	readonly name: Scalars['String']
	/** An array relationship */
	readonly organization_members: ReadonlyArray<Organization_Member>
	/** An aggregate relationship */
	readonly organization_members_aggregate: Organization_Member_Aggregate
	readonly pay_currency: Scalars['String']
	readonly prime: Scalars['String']
	readonly prime_identity_id?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly proposals: ReadonlyArray<Proposal>
	/** An aggregate relationship */
	readonly proposals_aggregate: Proposal_Aggregate
	readonly repo: Scalars['String']
	readonly slug: Scalars['String']
	readonly state: Scalars['String']
	readonly tags: Scalars['_text']
	readonly treasury: Scalars['String']
	readonly treasury_identity_id?: Maybe<Scalars['String']>
	readonly type: Scalars['String']
	readonly updated_at_block: Scalars['Int']
	readonly url: Scalars['String']
	readonly website: Scalars['String']
}

/** columns and relationships of "organization" */
export type OrganizationBattlepassesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Order_By>>
	where?: InputMaybe<Battlepass_Bool_Exp>
}

/** columns and relationships of "organization" */
export type OrganizationBattlepasses_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Order_By>>
	where?: InputMaybe<Battlepass_Bool_Exp>
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
export type OrganizationCampaigns_AggregateArgs = {
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

/** columns and relationships of "organization" */
export type OrganizationOrganization_Members_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Member_Order_By>>
	where?: InputMaybe<Organization_Member_Bool_Exp>
}

/** columns and relationships of "organization" */
export type OrganizationProposalsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>
	where?: InputMaybe<Proposal_Bool_Exp>
}

/** columns and relationships of "organization" */
export type OrganizationProposals_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>
	where?: InputMaybe<Proposal_Bool_Exp>
}

/** aggregated selection of "organization" */
export type Organization_Aggregate = {
	readonly __typename?: 'organization_aggregate'
	readonly aggregate?: Maybe<Organization_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Organization>
}

export type Organization_Aggregate_Bool_Exp = {
	readonly count?: InputMaybe<Organization_Aggregate_Bool_Exp_Count>
}

export type Organization_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<Organization_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Organization_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
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

/** input type for inserting array relation for remote table "organization" */
export type Organization_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<Organization_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Organization_On_Conflict>
}

/** aggregate avg on columns */
export type Organization_Avg_Fields = {
	readonly __typename?: 'organization_avg_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly member_limit?: Maybe<Scalars['Float']>
	readonly membership_fee?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "organization" */
export type Organization_Avg_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly membership_fee?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Organization_Bool_Exp>>
	readonly _not?: InputMaybe<Organization_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Organization_Bool_Exp>>
	readonly access_model?: InputMaybe<String_Comparison_Exp>
	readonly battlepasses?: InputMaybe<Battlepass_Bool_Exp>
	readonly battlepasses_aggregate?: InputMaybe<Battlepass_Aggregate_Bool_Exp>
	readonly campaigns?: InputMaybe<Campaign_Bool_Exp>
	readonly campaigns_aggregate?: InputMaybe<Campaign_Aggregate_Bool_Exp>
	readonly cid?: InputMaybe<String_Comparison_Exp>
	readonly created_at_block?: InputMaybe<Int_Comparison_Exp>
	readonly creator?: InputMaybe<String_Comparison_Exp>
	readonly creator_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly deposit?: InputMaybe<Numeric_Comparison_Exp>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly email?: InputMaybe<String_Comparison_Exp>
	readonly fee_model?: InputMaybe<String_Comparison_Exp>
	readonly gov_currency?: InputMaybe<String_Comparison_Exp>
	readonly header?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly identity?: InputMaybe<Identity_Bool_Exp>
	readonly identityByCreatorIdentityId?: InputMaybe<Identity_Bool_Exp>
	readonly identityByTreasuryIdentityId?: InputMaybe<Identity_Bool_Exp>
	readonly location?: InputMaybe<String_Comparison_Exp>
	readonly logo?: InputMaybe<String_Comparison_Exp>
	readonly member_limit?: InputMaybe<Int_Comparison_Exp>
	readonly membership_fee?: InputMaybe<Numeric_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly organization_members?: InputMaybe<Organization_Member_Bool_Exp>
	readonly organization_members_aggregate?: InputMaybe<Organization_Member_Aggregate_Bool_Exp>
	readonly pay_currency?: InputMaybe<String_Comparison_Exp>
	readonly prime?: InputMaybe<String_Comparison_Exp>
	readonly prime_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly proposals?: InputMaybe<Proposal_Bool_Exp>
	readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>
	readonly repo?: InputMaybe<String_Comparison_Exp>
	readonly slug?: InputMaybe<String_Comparison_Exp>
	readonly state?: InputMaybe<String_Comparison_Exp>
	readonly tags?: InputMaybe<_Text_Comparison_Exp>
	readonly treasury?: InputMaybe<String_Comparison_Exp>
	readonly treasury_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly type?: InputMaybe<String_Comparison_Exp>
	readonly updated_at_block?: InputMaybe<Int_Comparison_Exp>
	readonly url?: InputMaybe<String_Comparison_Exp>
	readonly website?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "organization" */
export enum Organization_Constraint {
	/** unique or primary key constraint on columns "slug" */
	IdxA08804baa7c5d5427067c49a31 = 'IDX_a08804baa7c5d5427067c49a31',
	/** unique or primary key constraint on columns "id" */
	Pk_472c1f99a32def1b0abb219cd67 = 'PK_472c1f99a32def1b0abb219cd67',
}

/** input type for incrementing numeric columns in table "organization" */
export type Organization_Inc_Input = {
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly member_limit?: InputMaybe<Scalars['Int']>
	readonly membership_fee?: InputMaybe<Scalars['numeric']>
	readonly updated_at_block?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "organization" */
export type Organization_Insert_Input = {
	readonly access_model?: InputMaybe<Scalars['String']>
	readonly battlepasses?: InputMaybe<Battlepass_Arr_Rel_Insert_Input>
	readonly campaigns?: InputMaybe<Campaign_Arr_Rel_Insert_Input>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creator_identity_id?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly fee_model?: InputMaybe<Scalars['String']>
	readonly gov_currency?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly identityByCreatorIdentityId?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly identityByTreasuryIdentityId?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly location?: InputMaybe<Scalars['String']>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly member_limit?: InputMaybe<Scalars['Int']>
	readonly membership_fee?: InputMaybe<Scalars['numeric']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly organization_members?: InputMaybe<Organization_Member_Arr_Rel_Insert_Input>
	readonly pay_currency?: InputMaybe<Scalars['String']>
	readonly prime?: InputMaybe<Scalars['String']>
	readonly prime_identity_id?: InputMaybe<Scalars['String']>
	readonly proposals?: InputMaybe<Proposal_Arr_Rel_Insert_Input>
	readonly repo?: InputMaybe<Scalars['String']>
	readonly slug?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly tags?: InputMaybe<Scalars['_text']>
	readonly treasury?: InputMaybe<Scalars['String']>
	readonly treasury_identity_id?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<Scalars['String']>
	readonly updated_at_block?: InputMaybe<Scalars['Int']>
	readonly url?: InputMaybe<Scalars['String']>
	readonly website?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Organization_Max_Fields = {
	readonly __typename?: 'organization_max_fields'
	readonly access_model?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly creator?: Maybe<Scalars['String']>
	readonly creator_identity_id?: Maybe<Scalars['String']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly description?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly fee_model?: Maybe<Scalars['String']>
	readonly gov_currency?: Maybe<Scalars['String']>
	readonly header?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly location?: Maybe<Scalars['String']>
	readonly logo?: Maybe<Scalars['String']>
	readonly member_limit?: Maybe<Scalars['Int']>
	readonly membership_fee?: Maybe<Scalars['numeric']>
	readonly name?: Maybe<Scalars['String']>
	readonly pay_currency?: Maybe<Scalars['String']>
	readonly prime?: Maybe<Scalars['String']>
	readonly prime_identity_id?: Maybe<Scalars['String']>
	readonly repo?: Maybe<Scalars['String']>
	readonly slug?: Maybe<Scalars['String']>
	readonly state?: Maybe<Scalars['String']>
	readonly treasury?: Maybe<Scalars['String']>
	readonly treasury_identity_id?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['String']>
	readonly updated_at_block?: Maybe<Scalars['Int']>
	readonly url?: Maybe<Scalars['String']>
	readonly website?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "organization" */
export type Organization_Max_Order_By = {
	readonly access_model?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly email?: InputMaybe<Order_By>
	readonly fee_model?: InputMaybe<Order_By>
	readonly gov_currency?: InputMaybe<Order_By>
	readonly header?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly location?: InputMaybe<Order_By>
	readonly logo?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly membership_fee?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly pay_currency?: InputMaybe<Order_By>
	readonly prime?: InputMaybe<Order_By>
	readonly prime_identity_id?: InputMaybe<Order_By>
	readonly repo?: InputMaybe<Order_By>
	readonly slug?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly treasury?: InputMaybe<Order_By>
	readonly treasury_identity_id?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
	readonly url?: InputMaybe<Order_By>
	readonly website?: InputMaybe<Order_By>
}

/** columns and relationships of "organization_member" */
export type Organization_Member = {
	readonly __typename?: 'organization_member'
	readonly address: Scalars['String']
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly identity_id?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly organization?: Maybe<Organization>
	readonly organization_id?: Maybe<Scalars['String']>
	readonly state: Scalars['String']
}

/** aggregated selection of "organization_member" */
export type Organization_Member_Aggregate = {
	readonly __typename?: 'organization_member_aggregate'
	readonly aggregate?: Maybe<Organization_Member_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Organization_Member>
}

export type Organization_Member_Aggregate_Bool_Exp = {
	readonly count?: InputMaybe<Organization_Member_Aggregate_Bool_Exp_Count>
}

export type Organization_Member_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Organization_Member_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "organization_member" */
export type Organization_Member_Aggregate_Fields = {
	readonly __typename?: 'organization_member_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Organization_Member_Max_Fields>
	readonly min?: Maybe<Organization_Member_Min_Fields>
}

/** aggregate fields of "organization_member" */
export type Organization_Member_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "organization_member" */
export type Organization_Member_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Organization_Member_Max_Order_By>
	readonly min?: InputMaybe<Organization_Member_Min_Order_By>
}

/** input type for inserting array relation for remote table "organization_member" */
export type Organization_Member_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<Organization_Member_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Organization_Member_On_Conflict>
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
	readonly state?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "organization_member" */
export enum Organization_Member_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_81dbbb093cbe0539c170f3d1484 = 'PK_81dbbb093cbe0539c170f3d1484',
}

/** input type for inserting data into table "organization_member" */
export type Organization_Member_Insert_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly identity_id?: InputMaybe<Scalars['String']>
	readonly organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>
	readonly organization_id?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Organization_Member_Max_Fields = {
	readonly __typename?: 'organization_member_max_fields'
	readonly address?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly identity_id?: Maybe<Scalars['String']>
	readonly organization_id?: Maybe<Scalars['String']>
	readonly state?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "organization_member" */
export type Organization_Member_Max_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
	readonly organization_id?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Organization_Member_Min_Fields = {
	readonly __typename?: 'organization_member_min_fields'
	readonly address?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly identity_id?: Maybe<Scalars['String']>
	readonly organization_id?: Maybe<Scalars['String']>
	readonly state?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "organization_member" */
export type Organization_Member_Min_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
	readonly organization_id?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
}

/** response of any mutation on the table "organization_member" */
export type Organization_Member_Mutation_Response = {
	readonly __typename?: 'organization_member_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Organization_Member>
}

/** on_conflict condition type for table "organization_member" */
export type Organization_Member_On_Conflict = {
	readonly constraint: Organization_Member_Constraint
	readonly update_columns?: ReadonlyArray<Organization_Member_Update_Column>
	readonly where?: InputMaybe<Organization_Member_Bool_Exp>
}

/** Ordering options when selecting data from "organization_member". */
export type Organization_Member_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly identity_id?: InputMaybe<Order_By>
	readonly organization?: InputMaybe<Organization_Order_By>
	readonly organization_id?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
}

/** primary key columns input for table: organization_member */
export type Organization_Member_Pk_Columns_Input = {
	readonly id: Scalars['String']
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
	/** column name */
	State = 'state',
}

/** input type for updating data in table "organization_member" */
export type Organization_Member_Set_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity_id?: InputMaybe<Scalars['String']>
	readonly organization_id?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "organization_member" */
export type Organization_Member_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Organization_Member_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Organization_Member_Stream_Cursor_Value_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity_id?: InputMaybe<Scalars['String']>
	readonly organization_id?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
}

/** update columns of table "organization_member" */
export enum Organization_Member_Update_Column {
	/** column name */
	Address = 'address',
	/** column name */
	Id = 'id',
	/** column name */
	IdentityId = 'identity_id',
	/** column name */
	OrganizationId = 'organization_id',
	/** column name */
	State = 'state',
}

export type Organization_Member_Updates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Organization_Member_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Organization_Member_Bool_Exp
}

/** columns and relationships of "organization_metadata" */
export type Organization_Metadata = {
	readonly __typename?: 'organization_metadata'
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
export type Organization_Metadata_Aggregate = {
	readonly __typename?: 'organization_metadata_aggregate'
	readonly aggregate?: Maybe<Organization_Metadata_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Organization_Metadata>
}

/** aggregate fields of "organization_metadata" */
export type Organization_Metadata_Aggregate_Fields = {
	readonly __typename?: 'organization_metadata_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Organization_Metadata_Max_Fields>
	readonly min?: Maybe<Organization_Metadata_Min_Fields>
}

/** aggregate fields of "organization_metadata" */
export type Organization_Metadata_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Organization_Metadata_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "organization_metadata". All fields are combined with a logical 'AND'. */
export type Organization_Metadata_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Organization_Metadata_Bool_Exp>>
	readonly _not?: InputMaybe<Organization_Metadata_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Organization_Metadata_Bool_Exp>>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly email?: InputMaybe<String_Comparison_Exp>
	readonly header?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly logo?: InputMaybe<String_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly repo?: InputMaybe<String_Comparison_Exp>
	readonly website?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "organization_metadata" */
export enum Organization_Metadata_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_2fecc2ceb81f30a7f46be802cbd = 'PK_2fecc2ceb81f30a7f46be802cbd',
}

/** input type for inserting data into table "organization_metadata" */
export type Organization_Metadata_Insert_Input = {
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
export type Organization_Metadata_Max_Fields = {
	readonly __typename?: 'organization_metadata_max_fields'
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
export type Organization_Metadata_Min_Fields = {
	readonly __typename?: 'organization_metadata_min_fields'
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
export type Organization_Metadata_Mutation_Response = {
	readonly __typename?: 'organization_metadata_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Organization_Metadata>
}

/** on_conflict condition type for table "organization_metadata" */
export type Organization_Metadata_On_Conflict = {
	readonly constraint: Organization_Metadata_Constraint
	readonly update_columns?: ReadonlyArray<Organization_Metadata_Update_Column>
	readonly where?: InputMaybe<Organization_Metadata_Bool_Exp>
}

/** Ordering options when selecting data from "organization_metadata". */
export type Organization_Metadata_Order_By = {
	readonly description?: InputMaybe<Order_By>
	readonly email?: InputMaybe<Order_By>
	readonly header?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly logo?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly repo?: InputMaybe<Order_By>
	readonly website?: InputMaybe<Order_By>
}

/** primary key columns input for table: organization_metadata */
export type Organization_Metadata_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

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
	Website = 'website',
}

/** input type for updating data in table "organization_metadata" */
export type Organization_Metadata_Set_Input = {
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
export type Organization_Metadata_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Organization_Metadata_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Organization_Metadata_Stream_Cursor_Value_Input = {
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
export enum Organization_Metadata_Update_Column {
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

export type Organization_Metadata_Updates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Organization_Metadata_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Organization_Metadata_Bool_Exp
}

/** aggregate min on columns */
export type Organization_Min_Fields = {
	readonly __typename?: 'organization_min_fields'
	readonly access_model?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly creator?: Maybe<Scalars['String']>
	readonly creator_identity_id?: Maybe<Scalars['String']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly description?: Maybe<Scalars['String']>
	readonly email?: Maybe<Scalars['String']>
	readonly fee_model?: Maybe<Scalars['String']>
	readonly gov_currency?: Maybe<Scalars['String']>
	readonly header?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly location?: Maybe<Scalars['String']>
	readonly logo?: Maybe<Scalars['String']>
	readonly member_limit?: Maybe<Scalars['Int']>
	readonly membership_fee?: Maybe<Scalars['numeric']>
	readonly name?: Maybe<Scalars['String']>
	readonly pay_currency?: Maybe<Scalars['String']>
	readonly prime?: Maybe<Scalars['String']>
	readonly prime_identity_id?: Maybe<Scalars['String']>
	readonly repo?: Maybe<Scalars['String']>
	readonly slug?: Maybe<Scalars['String']>
	readonly state?: Maybe<Scalars['String']>
	readonly treasury?: Maybe<Scalars['String']>
	readonly treasury_identity_id?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['String']>
	readonly updated_at_block?: Maybe<Scalars['Int']>
	readonly url?: Maybe<Scalars['String']>
	readonly website?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "organization" */
export type Organization_Min_Order_By = {
	readonly access_model?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly email?: InputMaybe<Order_By>
	readonly fee_model?: InputMaybe<Order_By>
	readonly gov_currency?: InputMaybe<Order_By>
	readonly header?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly location?: InputMaybe<Order_By>
	readonly logo?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly membership_fee?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly pay_currency?: InputMaybe<Order_By>
	readonly prime?: InputMaybe<Order_By>
	readonly prime_identity_id?: InputMaybe<Order_By>
	readonly repo?: InputMaybe<Order_By>
	readonly slug?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly treasury?: InputMaybe<Order_By>
	readonly treasury_identity_id?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
	readonly url?: InputMaybe<Order_By>
	readonly website?: InputMaybe<Order_By>
}

/** response of any mutation on the table "organization" */
export type Organization_Mutation_Response = {
	readonly __typename?: 'organization_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Organization>
}

/** input type for inserting object relation for remote table "organization" */
export type Organization_Obj_Rel_Insert_Input = {
	readonly data: Organization_Insert_Input
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Organization_On_Conflict>
}

/** on_conflict condition type for table "organization" */
export type Organization_On_Conflict = {
	readonly constraint: Organization_Constraint
	readonly update_columns?: ReadonlyArray<Organization_Update_Column>
	readonly where?: InputMaybe<Organization_Bool_Exp>
}

/** Ordering options when selecting data from "organization". */
export type Organization_Order_By = {
	readonly access_model?: InputMaybe<Order_By>
	readonly battlepasses_aggregate?: InputMaybe<Battlepass_Aggregate_Order_By>
	readonly campaigns_aggregate?: InputMaybe<Campaign_Aggregate_Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly email?: InputMaybe<Order_By>
	readonly fee_model?: InputMaybe<Order_By>
	readonly gov_currency?: InputMaybe<Order_By>
	readonly header?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly identityByCreatorIdentityId?: InputMaybe<Identity_Order_By>
	readonly identityByTreasuryIdentityId?: InputMaybe<Identity_Order_By>
	readonly location?: InputMaybe<Order_By>
	readonly logo?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly membership_fee?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly organization_members_aggregate?: InputMaybe<Organization_Member_Aggregate_Order_By>
	readonly pay_currency?: InputMaybe<Order_By>
	readonly prime?: InputMaybe<Order_By>
	readonly prime_identity_id?: InputMaybe<Order_By>
	readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>
	readonly repo?: InputMaybe<Order_By>
	readonly slug?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly tags?: InputMaybe<Order_By>
	readonly treasury?: InputMaybe<Order_By>
	readonly treasury_identity_id?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
	readonly url?: InputMaybe<Order_By>
	readonly website?: InputMaybe<Order_By>
}

/** primary key columns input for table: organization */
export type Organization_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

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
	Website = 'website',
}

/** input type for updating data in table "organization" */
export type Organization_Set_Input = {
	readonly access_model?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creator_identity_id?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly fee_model?: InputMaybe<Scalars['String']>
	readonly gov_currency?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly location?: InputMaybe<Scalars['String']>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly member_limit?: InputMaybe<Scalars['Int']>
	readonly membership_fee?: InputMaybe<Scalars['numeric']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly pay_currency?: InputMaybe<Scalars['String']>
	readonly prime?: InputMaybe<Scalars['String']>
	readonly prime_identity_id?: InputMaybe<Scalars['String']>
	readonly repo?: InputMaybe<Scalars['String']>
	readonly slug?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly tags?: InputMaybe<Scalars['_text']>
	readonly treasury?: InputMaybe<Scalars['String']>
	readonly treasury_identity_id?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<Scalars['String']>
	readonly updated_at_block?: InputMaybe<Scalars['Int']>
	readonly url?: InputMaybe<Scalars['String']>
	readonly website?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Organization_Stddev_Fields = {
	readonly __typename?: 'organization_stddev_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly member_limit?: Maybe<Scalars['Float']>
	readonly membership_fee?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "organization" */
export type Organization_Stddev_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly membership_fee?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Organization_Stddev_Pop_Fields = {
	readonly __typename?: 'organization_stddev_pop_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly member_limit?: Maybe<Scalars['Float']>
	readonly membership_fee?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "organization" */
export type Organization_Stddev_Pop_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly membership_fee?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Organization_Stddev_Samp_Fields = {
	readonly __typename?: 'organization_stddev_samp_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly member_limit?: Maybe<Scalars['Float']>
	readonly membership_fee?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "organization" */
export type Organization_Stddev_Samp_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly membership_fee?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "organization" */
export type Organization_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Organization_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Organization_Stream_Cursor_Value_Input = {
	readonly access_model?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creator_identity_id?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly email?: InputMaybe<Scalars['String']>
	readonly fee_model?: InputMaybe<Scalars['String']>
	readonly gov_currency?: InputMaybe<Scalars['String']>
	readonly header?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly location?: InputMaybe<Scalars['String']>
	readonly logo?: InputMaybe<Scalars['String']>
	readonly member_limit?: InputMaybe<Scalars['Int']>
	readonly membership_fee?: InputMaybe<Scalars['numeric']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly pay_currency?: InputMaybe<Scalars['String']>
	readonly prime?: InputMaybe<Scalars['String']>
	readonly prime_identity_id?: InputMaybe<Scalars['String']>
	readonly repo?: InputMaybe<Scalars['String']>
	readonly slug?: InputMaybe<Scalars['String']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly tags?: InputMaybe<Scalars['_text']>
	readonly treasury?: InputMaybe<Scalars['String']>
	readonly treasury_identity_id?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<Scalars['String']>
	readonly updated_at_block?: InputMaybe<Scalars['Int']>
	readonly url?: InputMaybe<Scalars['String']>
	readonly website?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type Organization_Sum_Fields = {
	readonly __typename?: 'organization_sum_fields'
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly member_limit?: Maybe<Scalars['Int']>
	readonly membership_fee?: Maybe<Scalars['numeric']>
	readonly updated_at_block?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "organization" */
export type Organization_Sum_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly membership_fee?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** update columns of table "organization" */
export enum Organization_Update_Column {
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
	Website = 'website',
}

export type Organization_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Organization_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Organization_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Organization_Bool_Exp
}

/** aggregate var_pop on columns */
export type Organization_Var_Pop_Fields = {
	readonly __typename?: 'organization_var_pop_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly member_limit?: Maybe<Scalars['Float']>
	readonly membership_fee?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "organization" */
export type Organization_Var_Pop_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly membership_fee?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Organization_Var_Samp_Fields = {
	readonly __typename?: 'organization_var_samp_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly member_limit?: Maybe<Scalars['Float']>
	readonly membership_fee?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "organization" */
export type Organization_Var_Samp_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly membership_fee?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Organization_Variance_Fields = {
	readonly __typename?: 'organization_variance_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly member_limit?: Maybe<Scalars['Float']>
	readonly membership_fee?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "organization" */
export type Organization_Variance_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly member_limit?: InputMaybe<Order_By>
	readonly membership_fee?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** columns and relationships of "proposal" */
export type Proposal = {
	readonly __typename?: 'proposal'
	readonly amount?: Maybe<Scalars['numeric']>
	readonly beneficiary?: Maybe<Scalars['String']>
	readonly beneficiary_identity_id?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly campaign?: Maybe<Campaign>
	readonly campaign_id?: Maybe<Scalars['String']>
	readonly cid: Scalars['String']
	readonly created_at_block: Scalars['Int']
	readonly creator: Scalars['String']
	readonly creator_identity_id?: Maybe<Scalars['String']>
	readonly currency_id?: Maybe<Scalars['String']>
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
	readonly organization_id?: Maybe<Scalars['String']>
	readonly slashing_rule?: Maybe<Scalars['String']>
	readonly start: Scalars['Int']
	readonly state: Scalars['String']
	readonly type: Scalars['String']
	/** An object relationship */
	readonly voting?: Maybe<Voting>
	readonly voting_id?: Maybe<Scalars['String']>
}

/** aggregated selection of "proposal" */
export type Proposal_Aggregate = {
	readonly __typename?: 'proposal_aggregate'
	readonly aggregate?: Maybe<Proposal_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Proposal>
}

export type Proposal_Aggregate_Bool_Exp = {
	readonly count?: InputMaybe<Proposal_Aggregate_Bool_Exp_Count>
}

export type Proposal_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Proposal_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "proposal" */
export type Proposal_Aggregate_Fields = {
	readonly __typename?: 'proposal_aggregate_fields'
	readonly avg?: Maybe<Proposal_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Proposal_Max_Fields>
	readonly min?: Maybe<Proposal_Min_Fields>
	readonly stddev?: Maybe<Proposal_Stddev_Fields>
	readonly stddev_pop?: Maybe<Proposal_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Proposal_Stddev_Samp_Fields>
	readonly sum?: Maybe<Proposal_Sum_Fields>
	readonly var_pop?: Maybe<Proposal_Var_Pop_Fields>
	readonly var_samp?: Maybe<Proposal_Var_Samp_Fields>
	readonly variance?: Maybe<Proposal_Variance_Fields>
}

/** aggregate fields of "proposal" */
export type Proposal_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "proposal" */
export type Proposal_Aggregate_Order_By = {
	readonly avg?: InputMaybe<Proposal_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Proposal_Max_Order_By>
	readonly min?: InputMaybe<Proposal_Min_Order_By>
	readonly stddev?: InputMaybe<Proposal_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<Proposal_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<Proposal_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<Proposal_Sum_Order_By>
	readonly var_pop?: InputMaybe<Proposal_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<Proposal_Var_Samp_Order_By>
	readonly variance?: InputMaybe<Proposal_Variance_Order_By>
}

/** input type for inserting array relation for remote table "proposal" */
export type Proposal_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<Proposal_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Proposal_On_Conflict>
}

/** aggregate avg on columns */
export type Proposal_Avg_Fields = {
	readonly __typename?: 'proposal_avg_fields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "proposal" */
export type Proposal_Avg_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "proposal". All fields are combined with a logical 'AND'. */
export type Proposal_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Proposal_Bool_Exp>>
	readonly _not?: InputMaybe<Proposal_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Proposal_Bool_Exp>>
	readonly amount?: InputMaybe<Numeric_Comparison_Exp>
	readonly beneficiary?: InputMaybe<String_Comparison_Exp>
	readonly beneficiary_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly campaign?: InputMaybe<Campaign_Bool_Exp>
	readonly campaign_id?: InputMaybe<String_Comparison_Exp>
	readonly cid?: InputMaybe<String_Comparison_Exp>
	readonly created_at_block?: InputMaybe<Int_Comparison_Exp>
	readonly creator?: InputMaybe<String_Comparison_Exp>
	readonly creator_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly currency_id?: InputMaybe<String_Comparison_Exp>
	readonly deposit?: InputMaybe<Numeric_Comparison_Exp>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly expiry?: InputMaybe<Int_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly identity?: InputMaybe<Identity_Bool_Exp>
	readonly identityByBeneficiaryIdentityId?: InputMaybe<Identity_Bool_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly organization?: InputMaybe<Organization_Bool_Exp>
	readonly organization_id?: InputMaybe<String_Comparison_Exp>
	readonly slashing_rule?: InputMaybe<String_Comparison_Exp>
	readonly start?: InputMaybe<Int_Comparison_Exp>
	readonly state?: InputMaybe<String_Comparison_Exp>
	readonly type?: InputMaybe<String_Comparison_Exp>
	readonly voting?: InputMaybe<Voting_Bool_Exp>
	readonly voting_id?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "proposal" */
export enum Proposal_Constraint {
	/** unique or primary key constraint on columns "id" */
	PkCa872ecfe4fef5720d2d39e4275 = 'PK_ca872ecfe4fef5720d2d39e4275',
}

/** input type for incrementing numeric columns in table "proposal" */
export type Proposal_Inc_Input = {
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly expiry?: InputMaybe<Scalars['Int']>
	readonly start?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "proposal" */
export type Proposal_Insert_Input = {
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly beneficiary?: InputMaybe<Scalars['String']>
	readonly beneficiary_identity_id?: InputMaybe<Scalars['String']>
	readonly campaign?: InputMaybe<Campaign_Obj_Rel_Insert_Input>
	readonly campaign_id?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creator_identity_id?: InputMaybe<Scalars['String']>
	readonly currency_id?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly expiry?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly identityByBeneficiaryIdentityId?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly name?: InputMaybe<Scalars['String']>
	readonly organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>
	readonly organization_id?: InputMaybe<Scalars['String']>
	readonly slashing_rule?: InputMaybe<Scalars['String']>
	readonly start?: InputMaybe<Scalars['Int']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<Scalars['String']>
	readonly voting?: InputMaybe<Voting_Obj_Rel_Insert_Input>
	readonly voting_id?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Proposal_Max_Fields = {
	readonly __typename?: 'proposal_max_fields'
	readonly amount?: Maybe<Scalars['numeric']>
	readonly beneficiary?: Maybe<Scalars['String']>
	readonly beneficiary_identity_id?: Maybe<Scalars['String']>
	readonly campaign_id?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly creator?: Maybe<Scalars['String']>
	readonly creator_identity_id?: Maybe<Scalars['String']>
	readonly currency_id?: Maybe<Scalars['String']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly description?: Maybe<Scalars['String']>
	readonly expiry?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly organization_id?: Maybe<Scalars['String']>
	readonly slashing_rule?: Maybe<Scalars['String']>
	readonly start?: Maybe<Scalars['Int']>
	readonly state?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['String']>
	readonly voting_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "proposal" */
export type Proposal_Max_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly beneficiary?: InputMaybe<Order_By>
	readonly beneficiary_identity_id?: InputMaybe<Order_By>
	readonly campaign_id?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly currency_id?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly organization_id?: InputMaybe<Order_By>
	readonly slashing_rule?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
	readonly voting_id?: InputMaybe<Order_By>
}

/** columns and relationships of "proposal_metadata" */
export type Proposal_Metadata = {
	readonly __typename?: 'proposal_metadata'
	readonly description: Scalars['String']
	readonly id: Scalars['String']
	readonly name: Scalars['String']
}

/** aggregated selection of "proposal_metadata" */
export type Proposal_Metadata_Aggregate = {
	readonly __typename?: 'proposal_metadata_aggregate'
	readonly aggregate?: Maybe<Proposal_Metadata_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Proposal_Metadata>
}

/** aggregate fields of "proposal_metadata" */
export type Proposal_Metadata_Aggregate_Fields = {
	readonly __typename?: 'proposal_metadata_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Proposal_Metadata_Max_Fields>
	readonly min?: Maybe<Proposal_Metadata_Min_Fields>
}

/** aggregate fields of "proposal_metadata" */
export type Proposal_Metadata_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Proposal_Metadata_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "proposal_metadata". All fields are combined with a logical 'AND'. */
export type Proposal_Metadata_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Proposal_Metadata_Bool_Exp>>
	readonly _not?: InputMaybe<Proposal_Metadata_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Proposal_Metadata_Bool_Exp>>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "proposal_metadata" */
export enum Proposal_Metadata_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_7d1bbb4c8b93797430bc3bcd454 = 'PK_7d1bbb4c8b93797430bc3bcd454',
}

/** input type for inserting data into table "proposal_metadata" */
export type Proposal_Metadata_Insert_Input = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Proposal_Metadata_Max_Fields = {
	readonly __typename?: 'proposal_metadata_max_fields'
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Proposal_Metadata_Min_Fields = {
	readonly __typename?: 'proposal_metadata_min_fields'
	readonly description?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "proposal_metadata" */
export type Proposal_Metadata_Mutation_Response = {
	readonly __typename?: 'proposal_metadata_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Proposal_Metadata>
}

/** on_conflict condition type for table "proposal_metadata" */
export type Proposal_Metadata_On_Conflict = {
	readonly constraint: Proposal_Metadata_Constraint
	readonly update_columns?: ReadonlyArray<Proposal_Metadata_Update_Column>
	readonly where?: InputMaybe<Proposal_Metadata_Bool_Exp>
}

/** Ordering options when selecting data from "proposal_metadata". */
export type Proposal_Metadata_Order_By = {
	readonly description?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
}

/** primary key columns input for table: proposal_metadata */
export type Proposal_Metadata_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

/** select columns of table "proposal_metadata" */
export enum Proposal_Metadata_Select_Column {
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
}

/** input type for updating data in table "proposal_metadata" */
export type Proposal_Metadata_Set_Input = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "proposal_metadata" */
export type Proposal_Metadata_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Proposal_Metadata_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Proposal_Metadata_Stream_Cursor_Value_Input = {
	readonly description?: InputMaybe<Scalars['String']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
}

/** update columns of table "proposal_metadata" */
export enum Proposal_Metadata_Update_Column {
	/** column name */
	Description = 'description',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
}

export type Proposal_Metadata_Updates = {
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Proposal_Metadata_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Proposal_Metadata_Bool_Exp
}

/** aggregate min on columns */
export type Proposal_Min_Fields = {
	readonly __typename?: 'proposal_min_fields'
	readonly amount?: Maybe<Scalars['numeric']>
	readonly beneficiary?: Maybe<Scalars['String']>
	readonly beneficiary_identity_id?: Maybe<Scalars['String']>
	readonly campaign_id?: Maybe<Scalars['String']>
	readonly cid?: Maybe<Scalars['String']>
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly creator?: Maybe<Scalars['String']>
	readonly creator_identity_id?: Maybe<Scalars['String']>
	readonly currency_id?: Maybe<Scalars['String']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly description?: Maybe<Scalars['String']>
	readonly expiry?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly name?: Maybe<Scalars['String']>
	readonly organization_id?: Maybe<Scalars['String']>
	readonly slashing_rule?: Maybe<Scalars['String']>
	readonly start?: Maybe<Scalars['Int']>
	readonly state?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['String']>
	readonly voting_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "proposal" */
export type Proposal_Min_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly beneficiary?: InputMaybe<Order_By>
	readonly beneficiary_identity_id?: InputMaybe<Order_By>
	readonly campaign_id?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly currency_id?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly organization_id?: InputMaybe<Order_By>
	readonly slashing_rule?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
	readonly voting_id?: InputMaybe<Order_By>
}

/** response of any mutation on the table "proposal" */
export type Proposal_Mutation_Response = {
	readonly __typename?: 'proposal_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Proposal>
}

/** on_conflict condition type for table "proposal" */
export type Proposal_On_Conflict = {
	readonly constraint: Proposal_Constraint
	readonly update_columns?: ReadonlyArray<Proposal_Update_Column>
	readonly where?: InputMaybe<Proposal_Bool_Exp>
}

/** Ordering options when selecting data from "proposal". */
export type Proposal_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly beneficiary?: InputMaybe<Order_By>
	readonly beneficiary_identity_id?: InputMaybe<Order_By>
	readonly campaign?: InputMaybe<Campaign_Order_By>
	readonly campaign_id?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly currency_id?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly identityByBeneficiaryIdentityId?: InputMaybe<Identity_Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly organization?: InputMaybe<Organization_Order_By>
	readonly organization_id?: InputMaybe<Order_By>
	readonly slashing_rule?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
	readonly voting?: InputMaybe<Voting_Order_By>
	readonly voting_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: proposal */
export type Proposal_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

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
	VotingId = 'voting_id',
}

/** input type for updating data in table "proposal" */
export type Proposal_Set_Input = {
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly beneficiary?: InputMaybe<Scalars['String']>
	readonly beneficiary_identity_id?: InputMaybe<Scalars['String']>
	readonly campaign_id?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creator_identity_id?: InputMaybe<Scalars['String']>
	readonly currency_id?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly expiry?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly organization_id?: InputMaybe<Scalars['String']>
	readonly slashing_rule?: InputMaybe<Scalars['String']>
	readonly start?: InputMaybe<Scalars['Int']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<Scalars['String']>
	readonly voting_id?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Proposal_Stddev_Fields = {
	readonly __typename?: 'proposal_stddev_fields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "proposal" */
export type Proposal_Stddev_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Proposal_Stddev_Pop_Fields = {
	readonly __typename?: 'proposal_stddev_pop_fields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "proposal" */
export type Proposal_Stddev_Pop_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Proposal_Stddev_Samp_Fields = {
	readonly __typename?: 'proposal_stddev_samp_fields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "proposal" */
export type Proposal_Stddev_Samp_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "proposal" */
export type Proposal_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Proposal_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Proposal_Stream_Cursor_Value_Input = {
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly beneficiary?: InputMaybe<Scalars['String']>
	readonly beneficiary_identity_id?: InputMaybe<Scalars['String']>
	readonly campaign_id?: InputMaybe<Scalars['String']>
	readonly cid?: InputMaybe<Scalars['String']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly creator?: InputMaybe<Scalars['String']>
	readonly creator_identity_id?: InputMaybe<Scalars['String']>
	readonly currency_id?: InputMaybe<Scalars['String']>
	readonly deposit?: InputMaybe<Scalars['numeric']>
	readonly description?: InputMaybe<Scalars['String']>
	readonly expiry?: InputMaybe<Scalars['Int']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly name?: InputMaybe<Scalars['String']>
	readonly organization_id?: InputMaybe<Scalars['String']>
	readonly slashing_rule?: InputMaybe<Scalars['String']>
	readonly start?: InputMaybe<Scalars['Int']>
	readonly state?: InputMaybe<Scalars['String']>
	readonly type?: InputMaybe<Scalars['String']>
	readonly voting_id?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type Proposal_Sum_Fields = {
	readonly __typename?: 'proposal_sum_fields'
	readonly amount?: Maybe<Scalars['numeric']>
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly deposit?: Maybe<Scalars['numeric']>
	readonly expiry?: Maybe<Scalars['Int']>
	readonly start?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "proposal" */
export type Proposal_Sum_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
}

/** update columns of table "proposal" */
export enum Proposal_Update_Column {
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
	VotingId = 'voting_id',
}

export type Proposal_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Proposal_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Proposal_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Proposal_Bool_Exp
}

/** aggregate var_pop on columns */
export type Proposal_Var_Pop_Fields = {
	readonly __typename?: 'proposal_var_pop_fields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "proposal" */
export type Proposal_Var_Pop_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Proposal_Var_Samp_Fields = {
	readonly __typename?: 'proposal_var_samp_fields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "proposal" */
export type Proposal_Var_Samp_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Proposal_Variance_Fields = {
	readonly __typename?: 'proposal_variance_fields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly deposit?: Maybe<Scalars['Float']>
	readonly expiry?: Maybe<Scalars['Float']>
	readonly start?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "proposal" */
export type Proposal_Variance_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly start?: InputMaybe<Order_By>
}

/** columns and relationships of "proposal_voter" */
export type Proposal_Voter = {
	readonly __typename?: 'proposal_voter'
	readonly address: Scalars['String']
	readonly amount?: Maybe<Scalars['numeric']>
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly identity_id?: Maybe<Scalars['String']>
	readonly power: Scalars['numeric']
	readonly voted: Scalars['Boolean']
	/** An object relationship */
	readonly voting?: Maybe<Voting>
	readonly voting_id?: Maybe<Scalars['String']>
}

/** aggregated selection of "proposal_voter" */
export type Proposal_Voter_Aggregate = {
	readonly __typename?: 'proposal_voter_aggregate'
	readonly aggregate?: Maybe<Proposal_Voter_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Proposal_Voter>
}

export type Proposal_Voter_Aggregate_Bool_Exp = {
	readonly bool_and?: InputMaybe<Proposal_Voter_Aggregate_Bool_Exp_Bool_And>
	readonly bool_or?: InputMaybe<Proposal_Voter_Aggregate_Bool_Exp_Bool_Or>
	readonly count?: InputMaybe<Proposal_Voter_Aggregate_Bool_Exp_Count>
}

export type Proposal_Voter_Aggregate_Bool_Exp_Bool_And = {
	readonly arguments: Proposal_Voter_Select_Column_Proposal_Voter_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Proposal_Voter_Bool_Exp>
	readonly predicate: Boolean_Comparison_Exp
}

export type Proposal_Voter_Aggregate_Bool_Exp_Bool_Or = {
	readonly arguments: Proposal_Voter_Select_Column_Proposal_Voter_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Proposal_Voter_Bool_Exp>
	readonly predicate: Boolean_Comparison_Exp
}

export type Proposal_Voter_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<Proposal_Voter_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Proposal_Voter_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "proposal_voter" */
export type Proposal_Voter_Aggregate_Fields = {
	readonly __typename?: 'proposal_voter_aggregate_fields'
	readonly avg?: Maybe<Proposal_Voter_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Proposal_Voter_Max_Fields>
	readonly min?: Maybe<Proposal_Voter_Min_Fields>
	readonly stddev?: Maybe<Proposal_Voter_Stddev_Fields>
	readonly stddev_pop?: Maybe<Proposal_Voter_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Proposal_Voter_Stddev_Samp_Fields>
	readonly sum?: Maybe<Proposal_Voter_Sum_Fields>
	readonly var_pop?: Maybe<Proposal_Voter_Var_Pop_Fields>
	readonly var_samp?: Maybe<Proposal_Voter_Var_Samp_Fields>
	readonly variance?: Maybe<Proposal_Voter_Variance_Fields>
}

/** aggregate fields of "proposal_voter" */
export type Proposal_Voter_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Proposal_Voter_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "proposal_voter" */
export type Proposal_Voter_Aggregate_Order_By = {
	readonly avg?: InputMaybe<Proposal_Voter_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Proposal_Voter_Max_Order_By>
	readonly min?: InputMaybe<Proposal_Voter_Min_Order_By>
	readonly stddev?: InputMaybe<Proposal_Voter_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<Proposal_Voter_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<Proposal_Voter_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<Proposal_Voter_Sum_Order_By>
	readonly var_pop?: InputMaybe<Proposal_Voter_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<Proposal_Voter_Var_Samp_Order_By>
	readonly variance?: InputMaybe<Proposal_Voter_Variance_Order_By>
}

/** input type for inserting array relation for remote table "proposal_voter" */
export type Proposal_Voter_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<Proposal_Voter_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Proposal_Voter_On_Conflict>
}

/** aggregate avg on columns */
export type Proposal_Voter_Avg_Fields = {
	readonly __typename?: 'proposal_voter_avg_fields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly power?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "proposal_voter" */
export type Proposal_Voter_Avg_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly power?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "proposal_voter". All fields are combined with a logical 'AND'. */
export type Proposal_Voter_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Proposal_Voter_Bool_Exp>>
	readonly _not?: InputMaybe<Proposal_Voter_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Proposal_Voter_Bool_Exp>>
	readonly address?: InputMaybe<String_Comparison_Exp>
	readonly amount?: InputMaybe<Numeric_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly identity?: InputMaybe<Identity_Bool_Exp>
	readonly identity_id?: InputMaybe<String_Comparison_Exp>
	readonly power?: InputMaybe<Numeric_Comparison_Exp>
	readonly voted?: InputMaybe<Boolean_Comparison_Exp>
	readonly voting?: InputMaybe<Voting_Bool_Exp>
	readonly voting_id?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "proposal_voter" */
export enum Proposal_Voter_Constraint {
	/** unique or primary key constraint on columns "id" */
	PkC5f3dc257803abae426e96df398 = 'PK_c5f3dc257803abae426e96df398',
}

/** input type for incrementing numeric columns in table "proposal_voter" */
export type Proposal_Voter_Inc_Input = {
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly power?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "proposal_voter" */
export type Proposal_Voter_Insert_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly identity_id?: InputMaybe<Scalars['String']>
	readonly power?: InputMaybe<Scalars['numeric']>
	readonly voted?: InputMaybe<Scalars['Boolean']>
	readonly voting?: InputMaybe<Voting_Obj_Rel_Insert_Input>
	readonly voting_id?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Proposal_Voter_Max_Fields = {
	readonly __typename?: 'proposal_voter_max_fields'
	readonly address?: Maybe<Scalars['String']>
	readonly amount?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly identity_id?: Maybe<Scalars['String']>
	readonly power?: Maybe<Scalars['numeric']>
	readonly voting_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "proposal_voter" */
export type Proposal_Voter_Max_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly amount?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
	readonly power?: InputMaybe<Order_By>
	readonly voting_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Proposal_Voter_Min_Fields = {
	readonly __typename?: 'proposal_voter_min_fields'
	readonly address?: Maybe<Scalars['String']>
	readonly amount?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly identity_id?: Maybe<Scalars['String']>
	readonly power?: Maybe<Scalars['numeric']>
	readonly voting_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "proposal_voter" */
export type Proposal_Voter_Min_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly amount?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
	readonly power?: InputMaybe<Order_By>
	readonly voting_id?: InputMaybe<Order_By>
}

/** response of any mutation on the table "proposal_voter" */
export type Proposal_Voter_Mutation_Response = {
	readonly __typename?: 'proposal_voter_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Proposal_Voter>
}

/** on_conflict condition type for table "proposal_voter" */
export type Proposal_Voter_On_Conflict = {
	readonly constraint: Proposal_Voter_Constraint
	readonly update_columns?: ReadonlyArray<Proposal_Voter_Update_Column>
	readonly where?: InputMaybe<Proposal_Voter_Bool_Exp>
}

/** Ordering options when selecting data from "proposal_voter". */
export type Proposal_Voter_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly amount?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly identity_id?: InputMaybe<Order_By>
	readonly power?: InputMaybe<Order_By>
	readonly voted?: InputMaybe<Order_By>
	readonly voting?: InputMaybe<Voting_Order_By>
	readonly voting_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: proposal_voter */
export type Proposal_Voter_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

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
	VotingId = 'voting_id',
}

/** select "proposal_voter_aggregate_bool_exp_bool_and_arguments_columns" columns of table "proposal_voter" */
export enum Proposal_Voter_Select_Column_Proposal_Voter_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
	/** column name */
	Voted = 'voted',
}

/** select "proposal_voter_aggregate_bool_exp_bool_or_arguments_columns" columns of table "proposal_voter" */
export enum Proposal_Voter_Select_Column_Proposal_Voter_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
	/** column name */
	Voted = 'voted',
}

/** input type for updating data in table "proposal_voter" */
export type Proposal_Voter_Set_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity_id?: InputMaybe<Scalars['String']>
	readonly power?: InputMaybe<Scalars['numeric']>
	readonly voted?: InputMaybe<Scalars['Boolean']>
	readonly voting_id?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Proposal_Voter_Stddev_Fields = {
	readonly __typename?: 'proposal_voter_stddev_fields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly power?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "proposal_voter" */
export type Proposal_Voter_Stddev_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly power?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Proposal_Voter_Stddev_Pop_Fields = {
	readonly __typename?: 'proposal_voter_stddev_pop_fields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly power?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "proposal_voter" */
export type Proposal_Voter_Stddev_Pop_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly power?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Proposal_Voter_Stddev_Samp_Fields = {
	readonly __typename?: 'proposal_voter_stddev_samp_fields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly power?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "proposal_voter" */
export type Proposal_Voter_Stddev_Samp_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly power?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "proposal_voter" */
export type Proposal_Voter_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Proposal_Voter_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Proposal_Voter_Stream_Cursor_Value_Input = {
	readonly address?: InputMaybe<Scalars['String']>
	readonly amount?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity_id?: InputMaybe<Scalars['String']>
	readonly power?: InputMaybe<Scalars['numeric']>
	readonly voted?: InputMaybe<Scalars['Boolean']>
	readonly voting_id?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type Proposal_Voter_Sum_Fields = {
	readonly __typename?: 'proposal_voter_sum_fields'
	readonly amount?: Maybe<Scalars['numeric']>
	readonly power?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "proposal_voter" */
export type Proposal_Voter_Sum_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly power?: InputMaybe<Order_By>
}

/** update columns of table "proposal_voter" */
export enum Proposal_Voter_Update_Column {
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
	VotingId = 'voting_id',
}

export type Proposal_Voter_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Proposal_Voter_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Proposal_Voter_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Proposal_Voter_Bool_Exp
}

/** aggregate var_pop on columns */
export type Proposal_Voter_Var_Pop_Fields = {
	readonly __typename?: 'proposal_voter_var_pop_fields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly power?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "proposal_voter" */
export type Proposal_Voter_Var_Pop_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly power?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Proposal_Voter_Var_Samp_Fields = {
	readonly __typename?: 'proposal_voter_var_samp_fields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly power?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "proposal_voter" */
export type Proposal_Voter_Var_Samp_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly power?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Proposal_Voter_Variance_Fields = {
	readonly __typename?: 'proposal_voter_variance_fields'
	readonly amount?: Maybe<Scalars['Float']>
	readonly power?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "proposal_voter" */
export type Proposal_Voter_Variance_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly power?: InputMaybe<Order_By>
}

export type Query_Root = {
	readonly __typename?: 'query_root'
	/** fetch data from the table: "Balance" */
	readonly Balance: ReadonlyArray<Balance>
	/** fetch aggregated fields from the table: "Balance" */
	readonly Balance_aggregate: Balance_Aggregate
	/** fetch data from the table: "Balance" using primary key columns */
	readonly Balance_by_pk?: Maybe<Balance>
	/** An array relationship */
	readonly BattlepassLevels: ReadonlyArray<BattlepassLevels>
	/** An aggregate relationship */
	readonly BattlepassLevels_aggregate: BattlepassLevels_Aggregate
	/** fetch data from the table: "BattlepassLevels" using primary key columns */
	readonly BattlepassLevels_by_pk?: Maybe<BattlepassLevels>
	/** An array relationship */
	readonly BattlepassParticipants: ReadonlyArray<BattlepassParticipants>
	/** An aggregate relationship */
	readonly BattlepassParticipants_aggregate: BattlepassParticipants_Aggregate
	/** fetch data from the table: "BattlepassParticipants" using primary key columns */
	readonly BattlepassParticipants_by_pk?: Maybe<BattlepassParticipants>
	/** An array relationship */
	readonly BattlepassRewards: ReadonlyArray<BattlepassRewards>
	/** An aggregate relationship */
	readonly BattlepassRewards_aggregate: BattlepassRewards_Aggregate
	/** fetch data from the table: "BattlepassRewards" using primary key columns */
	readonly BattlepassRewards_by_pk?: Maybe<BattlepassRewards>
	/** fetch data from the table: "Battlepasses" */
	readonly Battlepasses: ReadonlyArray<Battlepasses>
	/** fetch aggregated fields from the table: "Battlepasses" */
	readonly Battlepasses_aggregate: Battlepasses_Aggregate
	/** fetch data from the table: "Battlepasses" using primary key columns */
	readonly Battlepasses_by_pk?: Maybe<Battlepasses>
	/** fetch data from the table: "ChainActivities" */
	readonly ChainActivities: ReadonlyArray<ChainActivities>
	/** fetch aggregated fields from the table: "ChainActivities" */
	readonly ChainActivities_aggregate: ChainActivities_Aggregate
	/** fetch data from the table: "ChainActivities" using primary key columns */
	readonly ChainActivities_by_pk?: Maybe<ChainActivities>
	/** fetch data from the table: "ChainInfo" */
	readonly ChainInfo: ReadonlyArray<ChainInfo>
	/** fetch aggregated fields from the table: "ChainInfo" */
	readonly ChainInfo_aggregate: ChainInfo_Aggregate
	/** fetch data from the table: "ChainInfo" using primary key columns */
	readonly ChainInfo_by_pk?: Maybe<ChainInfo>
	/** fetch data from the table: "ChainStatuses" */
	readonly ChainStatuses: ReadonlyArray<ChainStatuses>
	/** fetch aggregated fields from the table: "ChainStatuses" */
	readonly ChainStatuses_aggregate: ChainStatuses_Aggregate
	/** fetch data from the table: "ChainStatuses" using primary key columns */
	readonly ChainStatuses_by_pk?: Maybe<ChainStatuses>
	/** An array relationship */
	readonly CompletedQuests: ReadonlyArray<CompletedQuests>
	/** An aggregate relationship */
	readonly CompletedQuests_aggregate: CompletedQuests_Aggregate
	/** fetch data from the table: "CompletedQuests" using primary key columns */
	readonly CompletedQuests_by_pk?: Maybe<CompletedQuests>
	/** fetch data from the table: "DiscordActivities" */
	readonly DiscordActivities: ReadonlyArray<DiscordActivities>
	/** fetch aggregated fields from the table: "DiscordActivities" */
	readonly DiscordActivities_aggregate: DiscordActivities_Aggregate
	/** fetch data from the table: "DiscordActivities" using primary key columns */
	readonly DiscordActivities_by_pk?: Maybe<DiscordActivities>
	/** fetch data from the table: "GenericActivities" */
	readonly GenericActivities: ReadonlyArray<GenericActivities>
	/** fetch aggregated fields from the table: "GenericActivities" */
	readonly GenericActivities_aggregate: GenericActivities_Aggregate
	/** fetch data from the table: "GenericActivities" using primary key columns */
	readonly GenericActivities_by_pk?: Maybe<GenericActivities>
	/** fetch data from the table: "Identities" */
	readonly Identities: ReadonlyArray<Identities>
	/** fetch aggregated fields from the table: "Identities" */
	readonly Identities_aggregate: Identities_Aggregate
	/** fetch data from the table: "Identities" using primary key columns */
	readonly Identities_by_pk?: Maybe<Identities>
	/** An array relationship */
	readonly Payments: ReadonlyArray<Payments>
	/** An aggregate relationship */
	readonly Payments_aggregate: Payments_Aggregate
	/** fetch data from the table: "Payments" using primary key columns */
	readonly Payments_by_pk?: Maybe<Payments>
	/** An array relationship */
	readonly QuestProgresses: ReadonlyArray<QuestProgresses>
	/** An aggregate relationship */
	readonly QuestProgresses_aggregate: QuestProgresses_Aggregate
	/** fetch data from the table: "QuestProgresses" using primary key columns */
	readonly QuestProgresses_by_pk?: Maybe<QuestProgresses>
	/** An array relationship */
	readonly Quests: ReadonlyArray<Quests>
	/** An aggregate relationship */
	readonly Quests_aggregate: Quests_Aggregate
	/** fetch data from the table: "Quests" using primary key columns */
	readonly Quests_by_pk?: Maybe<Quests>
	/** An array relationship */
	readonly RewardClaims: ReadonlyArray<RewardClaims>
	/** An aggregate relationship */
	readonly RewardClaims_aggregate: RewardClaims_Aggregate
	/** fetch data from the table: "RewardClaims" using primary key columns */
	readonly RewardClaims_by_pk?: Maybe<RewardClaims>
	/** fetch data from the table: "Session" */
	readonly Session: ReadonlyArray<Session>
	/** fetch aggregated fields from the table: "Session" */
	readonly Session_aggregate: Session_Aggregate
	/** fetch data from the table: "Session" using primary key columns */
	readonly Session_by_pk?: Maybe<Session>
	/** fetch data from the table: "TwitterActivities" */
	readonly TwitterActivities: ReadonlyArray<TwitterActivities>
	/** fetch aggregated fields from the table: "TwitterActivities" */
	readonly TwitterActivities_aggregate: TwitterActivities_Aggregate
	/** fetch data from the table: "TwitterActivities" using primary key columns */
	readonly TwitterActivities_by_pk?: Maybe<TwitterActivities>
	/** fetch data from the table: "TwitterSearches" */
	readonly TwitterSearches: ReadonlyArray<TwitterSearches>
	/** fetch aggregated fields from the table: "TwitterSearches" */
	readonly TwitterSearches_aggregate: TwitterSearches_Aggregate
	/** fetch data from the table: "TwitterSearches" using primary key columns */
	readonly TwitterSearches_by_pk?: Maybe<TwitterSearches>
	/** fetch data from the table: "TwitterUsers" */
	readonly TwitterUsers: ReadonlyArray<TwitterUsers>
	/** fetch aggregated fields from the table: "TwitterUsers" */
	readonly TwitterUsers_aggregate: TwitterUsers_Aggregate
	/** fetch data from the table: "TwitterUsers" using primary key columns */
	readonly TwitterUsers_by_pk?: Maybe<TwitterUsers>
	/** An array relationship */
	readonly UserTokens: ReadonlyArray<UserTokens>
	/** An aggregate relationship */
	readonly UserTokens_aggregate: UserTokens_Aggregate
	/** fetch data from the table: "UserTokens" using primary key columns */
	readonly UserTokens_by_pk?: Maybe<UserTokens>
	/** fetch data from the table: "_prisma_migrations" */
	readonly _prisma_migrations: ReadonlyArray<_Prisma_Migrations>
	/** fetch aggregated fields from the table: "_prisma_migrations" */
	readonly _prisma_migrations_aggregate: _Prisma_Migrations_Aggregate
	/** fetch data from the table: "_prisma_migrations" using primary key columns */
	readonly _prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>
	/** fetch data from the table: "account_balance" */
	readonly account_balance: ReadonlyArray<Account_Balance>
	/** fetch aggregated fields from the table: "account_balance" */
	readonly account_balance_aggregate: Account_Balance_Aggregate
	/** fetch data from the table: "account_balance" using primary key columns */
	readonly account_balance_by_pk?: Maybe<Account_Balance>
	readonly apiProvider: ApiProvider
	/** fetch data from the table: "battlepass" */
	readonly battlepass: ReadonlyArray<Battlepass>
	readonly battlepassBot?: Maybe<BattlepassBotQuery>
	/** fetch aggregated fields from the table: "battlepass" */
	readonly battlepass_aggregate: Battlepass_Aggregate
	/** fetch data from the table: "battlepass" using primary key columns */
	readonly battlepass_by_pk?: Maybe<Battlepass>
	/** fetch data from the table: "battlepass_nft" */
	readonly battlepass_nft: ReadonlyArray<Battlepass_Nft>
	/** fetch aggregated fields from the table: "battlepass_nft" */
	readonly battlepass_nft_aggregate: Battlepass_Nft_Aggregate
	/** fetch data from the table: "battlepass_nft" using primary key columns */
	readonly battlepass_nft_by_pk?: Maybe<Battlepass_Nft>
	/** fetch data from the table: "campaign" */
	readonly campaign: ReadonlyArray<Campaign>
	/** fetch aggregated fields from the table: "campaign" */
	readonly campaign_aggregate: Campaign_Aggregate
	/** fetch data from the table: "campaign" using primary key columns */
	readonly campaign_by_pk?: Maybe<Campaign>
	/** fetch data from the table: "campaign_contributor" */
	readonly campaign_contributor: ReadonlyArray<Campaign_Contributor>
	/** fetch aggregated fields from the table: "campaign_contributor" */
	readonly campaign_contributor_aggregate: Campaign_Contributor_Aggregate
	/** fetch data from the table: "campaign_contributor" using primary key columns */
	readonly campaign_contributor_by_pk?: Maybe<Campaign_Contributor>
	/** fetch data from the table: "campaign_metadata" */
	readonly campaign_metadata: ReadonlyArray<Campaign_Metadata>
	/** fetch aggregated fields from the table: "campaign_metadata" */
	readonly campaign_metadata_aggregate: Campaign_Metadata_Aggregate
	/** fetch data from the table: "campaign_metadata" using primary key columns */
	readonly campaign_metadata_by_pk?: Maybe<Campaign_Metadata>
	/** fetch data from the table: "chain_state" */
	readonly chain_state: ReadonlyArray<Chain_State>
	/** fetch aggregated fields from the table: "chain_state" */
	readonly chain_state_aggregate: Chain_State_Aggregate
	/** fetch data from the table: "chain_state" using primary key columns */
	readonly chain_state_by_pk?: Maybe<Chain_State>
	readonly config: Config
	/** fetch data from the table: "current_chain_state" */
	readonly current_chain_state: ReadonlyArray<Current_Chain_State>
	/** fetch aggregated fields from the table: "current_chain_state" */
	readonly current_chain_state_aggregate: Current_Chain_State_Aggregate
	/** fetch data from the table: "current_chain_state" using primary key columns */
	readonly current_chain_state_by_pk?: Maybe<Current_Chain_State>
	readonly displayValues?: Maybe<DisplayValues>
	readonly features: Features
	/** fetch data from the table: "historical_balance" */
	readonly historical_balance: ReadonlyArray<Historical_Balance>
	/** fetch aggregated fields from the table: "historical_balance" */
	readonly historical_balance_aggregate: Historical_Balance_Aggregate
	/** fetch data from the table: "historical_balance" using primary key columns */
	readonly historical_balance_by_pk?: Maybe<Historical_Balance>
	/** fetch data from the table: "identity" */
	readonly identity: ReadonlyArray<Identity>
	/** fetch aggregated fields from the table: "identity" */
	readonly identity_aggregate: Identity_Aggregate
	/** fetch data from the table: "identity" using primary key columns */
	readonly identity_by_pk?: Maybe<Identity>
	readonly links: ReadonlyArray<Maybe<Link>>
	/** fetch data from the table: "migrations" */
	readonly migrations: ReadonlyArray<Migrations>
	/** fetch aggregated fields from the table: "migrations" */
	readonly migrations_aggregate: Migrations_Aggregate
	/** fetch data from the table: "migrations" using primary key columns */
	readonly migrations_by_pk?: Maybe<Migrations>
	/** fetch data from the table: "nft" */
	readonly nft: ReadonlyArray<Nft>
	/** fetch aggregated fields from the table: "nft" */
	readonly nft_aggregate: Nft_Aggregate
	/** fetch data from the table: "nft" using primary key columns */
	readonly nft_by_pk?: Maybe<Nft>
	/** fetch data from the table: "nft_collection" */
	readonly nft_collection: ReadonlyArray<Nft_Collection>
	/** fetch aggregated fields from the table: "nft_collection" */
	readonly nft_collection_aggregate: Nft_Collection_Aggregate
	/** fetch data from the table: "nft_collection" using primary key columns */
	readonly nft_collection_by_pk?: Maybe<Nft_Collection>
	/** fetch data from the table: "organization" */
	readonly organization: ReadonlyArray<Organization>
	/** fetch aggregated fields from the table: "organization" */
	readonly organization_aggregate: Organization_Aggregate
	/** fetch data from the table: "organization" using primary key columns */
	readonly organization_by_pk?: Maybe<Organization>
	/** fetch data from the table: "organization_member" */
	readonly organization_member: ReadonlyArray<Organization_Member>
	/** fetch aggregated fields from the table: "organization_member" */
	readonly organization_member_aggregate: Organization_Member_Aggregate
	/** fetch data from the table: "organization_member" using primary key columns */
	readonly organization_member_by_pk?: Maybe<Organization_Member>
	/** fetch data from the table: "organization_metadata" */
	readonly organization_metadata: ReadonlyArray<Organization_Metadata>
	/** fetch aggregated fields from the table: "organization_metadata" */
	readonly organization_metadata_aggregate: Organization_Metadata_Aggregate
	/** fetch data from the table: "organization_metadata" using primary key columns */
	readonly organization_metadata_by_pk?: Maybe<Organization_Metadata>
	/** fetch data from the table: "proposal" */
	readonly proposal: ReadonlyArray<Proposal>
	/** fetch aggregated fields from the table: "proposal" */
	readonly proposal_aggregate: Proposal_Aggregate
	/** fetch data from the table: "proposal" using primary key columns */
	readonly proposal_by_pk?: Maybe<Proposal>
	/** fetch data from the table: "proposal_metadata" */
	readonly proposal_metadata: ReadonlyArray<Proposal_Metadata>
	/** fetch aggregated fields from the table: "proposal_metadata" */
	readonly proposal_metadata_aggregate: Proposal_Metadata_Aggregate
	/** fetch data from the table: "proposal_metadata" using primary key columns */
	readonly proposal_metadata_by_pk?: Maybe<Proposal_Metadata>
	/** fetch data from the table: "proposal_voter" */
	readonly proposal_voter: ReadonlyArray<Proposal_Voter>
	/** fetch aggregated fields from the table: "proposal_voter" */
	readonly proposal_voter_aggregate: Proposal_Voter_Aggregate
	/** fetch data from the table: "proposal_voter" using primary key columns */
	readonly proposal_voter_by_pk?: Maybe<Proposal_Voter>
	readonly rmrkNfts?: Maybe<ReadonlyArray<Maybe<RmrkNft>>>
	/** fetch data from the table: "sense_entity" */
	readonly sense_entity: ReadonlyArray<Sense_Entity>
	/** fetch aggregated fields from the table: "sense_entity" */
	readonly sense_entity_aggregate: Sense_Entity_Aggregate
	/** fetch data from the table: "sense_entity" using primary key columns */
	readonly sense_entity_by_pk?: Maybe<Sense_Entity>
	readonly version: Scalars['String']
	/** fetch data from the table: "voting" */
	readonly voting: ReadonlyArray<Voting>
	/** fetch aggregated fields from the table: "voting" */
	readonly voting_aggregate: Voting_Aggregate
	/** fetch data from the table: "voting" using primary key columns */
	readonly voting_by_pk?: Maybe<Voting>
}

export type Query_RootBalanceArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Balance_Order_By>>
	where?: InputMaybe<Balance_Bool_Exp>
}

export type Query_RootBalance_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Balance_Order_By>>
	where?: InputMaybe<Balance_Bool_Exp>
}

export type Query_RootBalance_By_PkArgs = {
	id: Scalars['bigint']
}

export type Query_RootBattlepassLevelsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassLevels_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassLevels_Order_By>>
	where?: InputMaybe<BattlepassLevels_Bool_Exp>
}

export type Query_RootBattlepassLevels_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassLevels_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassLevels_Order_By>>
	where?: InputMaybe<BattlepassLevels_Bool_Exp>
}

export type Query_RootBattlepassLevels_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootBattlepassParticipantsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassParticipants_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassParticipants_Order_By>>
	where?: InputMaybe<BattlepassParticipants_Bool_Exp>
}

export type Query_RootBattlepassParticipants_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassParticipants_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassParticipants_Order_By>>
	where?: InputMaybe<BattlepassParticipants_Bool_Exp>
}

export type Query_RootBattlepassParticipants_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootBattlepassRewardsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassRewards_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassRewards_Order_By>>
	where?: InputMaybe<BattlepassRewards_Bool_Exp>
}

export type Query_RootBattlepassRewards_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassRewards_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassRewards_Order_By>>
	where?: InputMaybe<BattlepassRewards_Bool_Exp>
}

export type Query_RootBattlepassRewards_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootBattlepassesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepasses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepasses_Order_By>>
	where?: InputMaybe<Battlepasses_Bool_Exp>
}

export type Query_RootBattlepasses_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepasses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepasses_Order_By>>
	where?: InputMaybe<Battlepasses_Bool_Exp>
}

export type Query_RootBattlepasses_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootChainActivitiesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<ChainActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<ChainActivities_Order_By>>
	where?: InputMaybe<ChainActivities_Bool_Exp>
}

export type Query_RootChainActivities_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<ChainActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<ChainActivities_Order_By>>
	where?: InputMaybe<ChainActivities_Bool_Exp>
}

export type Query_RootChainActivities_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootChainInfoArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<ChainInfo_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<ChainInfo_Order_By>>
	where?: InputMaybe<ChainInfo_Bool_Exp>
}

export type Query_RootChainInfo_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<ChainInfo_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<ChainInfo_Order_By>>
	where?: InputMaybe<ChainInfo_Bool_Exp>
}

export type Query_RootChainInfo_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootChainStatusesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<ChainStatuses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<ChainStatuses_Order_By>>
	where?: InputMaybe<ChainStatuses_Bool_Exp>
}

export type Query_RootChainStatuses_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<ChainStatuses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<ChainStatuses_Order_By>>
	where?: InputMaybe<ChainStatuses_Bool_Exp>
}

export type Query_RootChainStatuses_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootCompletedQuestsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<CompletedQuests_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<CompletedQuests_Order_By>>
	where?: InputMaybe<CompletedQuests_Bool_Exp>
}

export type Query_RootCompletedQuests_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<CompletedQuests_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<CompletedQuests_Order_By>>
	where?: InputMaybe<CompletedQuests_Bool_Exp>
}

export type Query_RootCompletedQuests_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootDiscordActivitiesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<DiscordActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<DiscordActivities_Order_By>>
	where?: InputMaybe<DiscordActivities_Bool_Exp>
}

export type Query_RootDiscordActivities_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<DiscordActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<DiscordActivities_Order_By>>
	where?: InputMaybe<DiscordActivities_Bool_Exp>
}

export type Query_RootDiscordActivities_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootGenericActivitiesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<GenericActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<GenericActivities_Order_By>>
	where?: InputMaybe<GenericActivities_Bool_Exp>
}

export type Query_RootGenericActivities_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<GenericActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<GenericActivities_Order_By>>
	where?: InputMaybe<GenericActivities_Bool_Exp>
}

export type Query_RootGenericActivities_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootIdentitiesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Identities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Identities_Order_By>>
	where?: InputMaybe<Identities_Bool_Exp>
}

export type Query_RootIdentities_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Identities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Identities_Order_By>>
	where?: InputMaybe<Identities_Bool_Exp>
}

export type Query_RootIdentities_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootPaymentsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Payments_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Payments_Order_By>>
	where?: InputMaybe<Payments_Bool_Exp>
}

export type Query_RootPayments_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Payments_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Payments_Order_By>>
	where?: InputMaybe<Payments_Bool_Exp>
}

export type Query_RootPayments_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootQuestProgressesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<QuestProgresses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<QuestProgresses_Order_By>>
	where?: InputMaybe<QuestProgresses_Bool_Exp>
}

export type Query_RootQuestProgresses_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<QuestProgresses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<QuestProgresses_Order_By>>
	where?: InputMaybe<QuestProgresses_Bool_Exp>
}

export type Query_RootQuestProgresses_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootQuestsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Quests_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Quests_Order_By>>
	where?: InputMaybe<Quests_Bool_Exp>
}

export type Query_RootQuests_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Quests_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Quests_Order_By>>
	where?: InputMaybe<Quests_Bool_Exp>
}

export type Query_RootQuests_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootRewardClaimsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<RewardClaims_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<RewardClaims_Order_By>>
	where?: InputMaybe<RewardClaims_Bool_Exp>
}

export type Query_RootRewardClaims_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<RewardClaims_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<RewardClaims_Order_By>>
	where?: InputMaybe<RewardClaims_Bool_Exp>
}

export type Query_RootRewardClaims_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootSessionArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Session_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Session_Order_By>>
	where?: InputMaybe<Session_Bool_Exp>
}

export type Query_RootSession_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Session_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Session_Order_By>>
	where?: InputMaybe<Session_Bool_Exp>
}

export type Query_RootSession_By_PkArgs = {
	id: Scalars['bigint']
}

export type Query_RootTwitterActivitiesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<TwitterActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<TwitterActivities_Order_By>>
	where?: InputMaybe<TwitterActivities_Bool_Exp>
}

export type Query_RootTwitterActivities_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<TwitterActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<TwitterActivities_Order_By>>
	where?: InputMaybe<TwitterActivities_Bool_Exp>
}

export type Query_RootTwitterActivities_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootTwitterSearchesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<TwitterSearches_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<TwitterSearches_Order_By>>
	where?: InputMaybe<TwitterSearches_Bool_Exp>
}

export type Query_RootTwitterSearches_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<TwitterSearches_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<TwitterSearches_Order_By>>
	where?: InputMaybe<TwitterSearches_Bool_Exp>
}

export type Query_RootTwitterSearches_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootTwitterUsersArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<TwitterUsers_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<TwitterUsers_Order_By>>
	where?: InputMaybe<TwitterUsers_Bool_Exp>
}

export type Query_RootTwitterUsers_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<TwitterUsers_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<TwitterUsers_Order_By>>
	where?: InputMaybe<TwitterUsers_Bool_Exp>
}

export type Query_RootTwitterUsers_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootUserTokensArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<UserTokens_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<UserTokens_Order_By>>
	where?: InputMaybe<UserTokens_Bool_Exp>
}

export type Query_RootUserTokens_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<UserTokens_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<UserTokens_Order_By>>
	where?: InputMaybe<UserTokens_Bool_Exp>
}

export type Query_RootUserTokens_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_Root_Prisma_MigrationsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<_Prisma_Migrations_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<_Prisma_Migrations_Order_By>>
	where?: InputMaybe<_Prisma_Migrations_Bool_Exp>
}

export type Query_Root_Prisma_Migrations_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<_Prisma_Migrations_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<_Prisma_Migrations_Order_By>>
	where?: InputMaybe<_Prisma_Migrations_Bool_Exp>
}

export type Query_Root_Prisma_Migrations_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootAccount_BalanceArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Account_Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Account_Balance_Order_By>>
	where?: InputMaybe<Account_Balance_Bool_Exp>
}

export type Query_RootAccount_Balance_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Account_Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Account_Balance_Order_By>>
	where?: InputMaybe<Account_Balance_Bool_Exp>
}

export type Query_RootAccount_Balance_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootBattlepassArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Order_By>>
	where?: InputMaybe<Battlepass_Bool_Exp>
}

export type Query_RootBattlepass_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Order_By>>
	where?: InputMaybe<Battlepass_Bool_Exp>
}

export type Query_RootBattlepass_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootBattlepass_NftArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Nft_Order_By>>
	where?: InputMaybe<Battlepass_Nft_Bool_Exp>
}

export type Query_RootBattlepass_Nft_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Nft_Order_By>>
	where?: InputMaybe<Battlepass_Nft_Bool_Exp>
}

export type Query_RootBattlepass_Nft_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootCampaignArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>
	where?: InputMaybe<Campaign_Bool_Exp>
}

export type Query_RootCampaign_AggregateArgs = {
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

export type Query_RootCampaign_Contributor_AggregateArgs = {
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

export type Query_RootCampaign_Metadata_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Metadata_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Metadata_Order_By>>
	where?: InputMaybe<Campaign_Metadata_Bool_Exp>
}

export type Query_RootCampaign_Metadata_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootChain_StateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Chain_State_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Chain_State_Order_By>>
	where?: InputMaybe<Chain_State_Bool_Exp>
}

export type Query_RootChain_State_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Chain_State_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Chain_State_Order_By>>
	where?: InputMaybe<Chain_State_Bool_Exp>
}

export type Query_RootChain_State_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootConfigArgs = {
	env: Environment
}

export type Query_RootCurrent_Chain_StateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Current_Chain_State_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Current_Chain_State_Order_By>>
	where?: InputMaybe<Current_Chain_State_Bool_Exp>
}

export type Query_RootCurrent_Chain_State_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Current_Chain_State_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Current_Chain_State_Order_By>>
	where?: InputMaybe<Current_Chain_State_Bool_Exp>
}

export type Query_RootCurrent_Chain_State_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootFeaturesArgs = {
	env: Environment
}

export type Query_RootHistorical_BalanceArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Historical_Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Historical_Balance_Order_By>>
	where?: InputMaybe<Historical_Balance_Bool_Exp>
}

export type Query_RootHistorical_Balance_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Historical_Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Historical_Balance_Order_By>>
	where?: InputMaybe<Historical_Balance_Bool_Exp>
}

export type Query_RootHistorical_Balance_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootIdentityArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Identity_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Identity_Order_By>>
	where?: InputMaybe<Identity_Bool_Exp>
}

export type Query_RootIdentity_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Identity_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Identity_Order_By>>
	where?: InputMaybe<Identity_Bool_Exp>
}

export type Query_RootIdentity_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootMigrationsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Migrations_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Migrations_Order_By>>
	where?: InputMaybe<Migrations_Bool_Exp>
}

export type Query_RootMigrations_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Migrations_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Migrations_Order_By>>
	where?: InputMaybe<Migrations_Bool_Exp>
}

export type Query_RootMigrations_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootNftArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nft_Order_By>>
	where?: InputMaybe<Nft_Bool_Exp>
}

export type Query_RootNft_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nft_Order_By>>
	where?: InputMaybe<Nft_Bool_Exp>
}

export type Query_RootNft_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootNft_CollectionArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nft_Collection_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nft_Collection_Order_By>>
	where?: InputMaybe<Nft_Collection_Bool_Exp>
}

export type Query_RootNft_Collection_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nft_Collection_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nft_Collection_Order_By>>
	where?: InputMaybe<Nft_Collection_Bool_Exp>
}

export type Query_RootNft_Collection_By_PkArgs = {
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

export type Query_RootOrganization_Member_AggregateArgs = {
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

export type Query_RootOrganization_Metadata_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Metadata_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Metadata_Order_By>>
	where?: InputMaybe<Organization_Metadata_Bool_Exp>
}

export type Query_RootOrganization_Metadata_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootProposalArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>
	where?: InputMaybe<Proposal_Bool_Exp>
}

export type Query_RootProposal_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>
	where?: InputMaybe<Proposal_Bool_Exp>
}

export type Query_RootProposal_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootProposal_MetadataArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Metadata_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Metadata_Order_By>>
	where?: InputMaybe<Proposal_Metadata_Bool_Exp>
}

export type Query_RootProposal_Metadata_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Metadata_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Metadata_Order_By>>
	where?: InputMaybe<Proposal_Metadata_Bool_Exp>
}

export type Query_RootProposal_Metadata_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootProposal_VoterArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Voter_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Voter_Order_By>>
	where?: InputMaybe<Proposal_Voter_Bool_Exp>
}

export type Query_RootProposal_Voter_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Voter_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Voter_Order_By>>
	where?: InputMaybe<Proposal_Voter_Bool_Exp>
}

export type Query_RootProposal_Voter_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootRmrkNftsArgs = {
	address: Scalars['String']
}

export type Query_RootSense_EntityArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Sense_Entity_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Sense_Entity_Order_By>>
	where?: InputMaybe<Sense_Entity_Bool_Exp>
}

export type Query_RootSense_Entity_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Sense_Entity_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Sense_Entity_Order_By>>
	where?: InputMaybe<Sense_Entity_Bool_Exp>
}

export type Query_RootSense_Entity_By_PkArgs = {
	id: Scalars['String']
}

export type Query_RootVotingArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Voting_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Voting_Order_By>>
	where?: InputMaybe<Voting_Bool_Exp>
}

export type Query_RootVoting_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Voting_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Voting_Order_By>>
	where?: InputMaybe<Voting_Bool_Exp>
}

export type Query_RootVoting_By_PkArgs = {
	id: Scalars['String']
}

/** columns and relationships of "sense_entity" */
export type Sense_Entity = {
	readonly __typename?: 'sense_entity'
	readonly cid: Scalars['String']
	readonly created_at_block: Scalars['Int']
	readonly experience: Scalars['numeric']
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly identity_id?: Maybe<Scalars['String']>
	readonly reputation: Scalars['numeric']
	readonly trust: Scalars['numeric']
	readonly updated_at_block: Scalars['Int']
}

/** aggregated selection of "sense_entity" */
export type Sense_Entity_Aggregate = {
	readonly __typename?: 'sense_entity_aggregate'
	readonly aggregate?: Maybe<Sense_Entity_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Sense_Entity>
}

export type Sense_Entity_Aggregate_Bool_Exp = {
	readonly count?: InputMaybe<Sense_Entity_Aggregate_Bool_Exp_Count>
}

export type Sense_Entity_Aggregate_Bool_Exp_Count = {
	readonly arguments?: InputMaybe<ReadonlyArray<Sense_Entity_Select_Column>>
	readonly distinct?: InputMaybe<Scalars['Boolean']>
	readonly filter?: InputMaybe<Sense_Entity_Bool_Exp>
	readonly predicate: Int_Comparison_Exp
}

/** aggregate fields of "sense_entity" */
export type Sense_Entity_Aggregate_Fields = {
	readonly __typename?: 'sense_entity_aggregate_fields'
	readonly avg?: Maybe<Sense_Entity_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Sense_Entity_Max_Fields>
	readonly min?: Maybe<Sense_Entity_Min_Fields>
	readonly stddev?: Maybe<Sense_Entity_Stddev_Fields>
	readonly stddev_pop?: Maybe<Sense_Entity_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Sense_Entity_Stddev_Samp_Fields>
	readonly sum?: Maybe<Sense_Entity_Sum_Fields>
	readonly var_pop?: Maybe<Sense_Entity_Var_Pop_Fields>
	readonly var_samp?: Maybe<Sense_Entity_Var_Samp_Fields>
	readonly variance?: Maybe<Sense_Entity_Variance_Fields>
}

/** aggregate fields of "sense_entity" */
export type Sense_Entity_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Sense_Entity_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "sense_entity" */
export type Sense_Entity_Aggregate_Order_By = {
	readonly avg?: InputMaybe<Sense_Entity_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Sense_Entity_Max_Order_By>
	readonly min?: InputMaybe<Sense_Entity_Min_Order_By>
	readonly stddev?: InputMaybe<Sense_Entity_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<Sense_Entity_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<Sense_Entity_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<Sense_Entity_Sum_Order_By>
	readonly var_pop?: InputMaybe<Sense_Entity_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<Sense_Entity_Var_Samp_Order_By>
	readonly variance?: InputMaybe<Sense_Entity_Variance_Order_By>
}

/** input type for inserting array relation for remote table "sense_entity" */
export type Sense_Entity_Arr_Rel_Insert_Input = {
	readonly data: ReadonlyArray<Sense_Entity_Insert_Input>
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Sense_Entity_On_Conflict>
}

/** aggregate avg on columns */
export type Sense_Entity_Avg_Fields = {
	readonly __typename?: 'sense_entity_avg_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly experience?: Maybe<Scalars['Float']>
	readonly reputation?: Maybe<Scalars['Float']>
	readonly trust?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "sense_entity" */
export type Sense_Entity_Avg_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly experience?: InputMaybe<Order_By>
	readonly reputation?: InputMaybe<Order_By>
	readonly trust?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "sense_entity". All fields are combined with a logical 'AND'. */
export type Sense_Entity_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Sense_Entity_Bool_Exp>>
	readonly _not?: InputMaybe<Sense_Entity_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Sense_Entity_Bool_Exp>>
	readonly cid?: InputMaybe<String_Comparison_Exp>
	readonly created_at_block?: InputMaybe<Int_Comparison_Exp>
	readonly experience?: InputMaybe<Numeric_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly identity?: InputMaybe<Identity_Bool_Exp>
	readonly identity_id?: InputMaybe<String_Comparison_Exp>
	readonly reputation?: InputMaybe<Numeric_Comparison_Exp>
	readonly trust?: InputMaybe<Numeric_Comparison_Exp>
	readonly updated_at_block?: InputMaybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "sense_entity" */
export enum Sense_Entity_Constraint {
	/** unique or primary key constraint on columns "id" */
	PkB37964c035bf9449acdcd249e56 = 'PK_b37964c035bf9449acdcd249e56',
}

/** input type for incrementing numeric columns in table "sense_entity" */
export type Sense_Entity_Inc_Input = {
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly experience?: InputMaybe<Scalars['numeric']>
	readonly reputation?: InputMaybe<Scalars['numeric']>
	readonly trust?: InputMaybe<Scalars['numeric']>
	readonly updated_at_block?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "sense_entity" */
export type Sense_Entity_Insert_Input = {
	readonly cid?: InputMaybe<Scalars['String']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly experience?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity?: InputMaybe<Identity_Obj_Rel_Insert_Input>
	readonly identity_id?: InputMaybe<Scalars['String']>
	readonly reputation?: InputMaybe<Scalars['numeric']>
	readonly trust?: InputMaybe<Scalars['numeric']>
	readonly updated_at_block?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Sense_Entity_Max_Fields = {
	readonly __typename?: 'sense_entity_max_fields'
	readonly cid?: Maybe<Scalars['String']>
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly experience?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly identity_id?: Maybe<Scalars['String']>
	readonly reputation?: Maybe<Scalars['numeric']>
	readonly trust?: Maybe<Scalars['numeric']>
	readonly updated_at_block?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "sense_entity" */
export type Sense_Entity_Max_Order_By = {
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly experience?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
	readonly reputation?: InputMaybe<Order_By>
	readonly trust?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Sense_Entity_Min_Fields = {
	readonly __typename?: 'sense_entity_min_fields'
	readonly cid?: Maybe<Scalars['String']>
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly experience?: Maybe<Scalars['numeric']>
	readonly id?: Maybe<Scalars['String']>
	readonly identity_id?: Maybe<Scalars['String']>
	readonly reputation?: Maybe<Scalars['numeric']>
	readonly trust?: Maybe<Scalars['numeric']>
	readonly updated_at_block?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "sense_entity" */
export type Sense_Entity_Min_Order_By = {
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly experience?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
	readonly reputation?: InputMaybe<Order_By>
	readonly trust?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** response of any mutation on the table "sense_entity" */
export type Sense_Entity_Mutation_Response = {
	readonly __typename?: 'sense_entity_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Sense_Entity>
}

/** on_conflict condition type for table "sense_entity" */
export type Sense_Entity_On_Conflict = {
	readonly constraint: Sense_Entity_Constraint
	readonly update_columns?: ReadonlyArray<Sense_Entity_Update_Column>
	readonly where?: InputMaybe<Sense_Entity_Bool_Exp>
}

/** Ordering options when selecting data from "sense_entity". */
export type Sense_Entity_Order_By = {
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly experience?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly identity_id?: InputMaybe<Order_By>
	readonly reputation?: InputMaybe<Order_By>
	readonly trust?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** primary key columns input for table: sense_entity */
export type Sense_Entity_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

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
	UpdatedAtBlock = 'updated_at_block',
}

/** input type for updating data in table "sense_entity" */
export type Sense_Entity_Set_Input = {
	readonly cid?: InputMaybe<Scalars['String']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly experience?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity_id?: InputMaybe<Scalars['String']>
	readonly reputation?: InputMaybe<Scalars['numeric']>
	readonly trust?: InputMaybe<Scalars['numeric']>
	readonly updated_at_block?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Sense_Entity_Stddev_Fields = {
	readonly __typename?: 'sense_entity_stddev_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly experience?: Maybe<Scalars['Float']>
	readonly reputation?: Maybe<Scalars['Float']>
	readonly trust?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "sense_entity" */
export type Sense_Entity_Stddev_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly experience?: InputMaybe<Order_By>
	readonly reputation?: InputMaybe<Order_By>
	readonly trust?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Sense_Entity_Stddev_Pop_Fields = {
	readonly __typename?: 'sense_entity_stddev_pop_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly experience?: Maybe<Scalars['Float']>
	readonly reputation?: Maybe<Scalars['Float']>
	readonly trust?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "sense_entity" */
export type Sense_Entity_Stddev_Pop_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly experience?: InputMaybe<Order_By>
	readonly reputation?: InputMaybe<Order_By>
	readonly trust?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Sense_Entity_Stddev_Samp_Fields = {
	readonly __typename?: 'sense_entity_stddev_samp_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly experience?: Maybe<Scalars['Float']>
	readonly reputation?: Maybe<Scalars['Float']>
	readonly trust?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "sense_entity" */
export type Sense_Entity_Stddev_Samp_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly experience?: InputMaybe<Order_By>
	readonly reputation?: InputMaybe<Order_By>
	readonly trust?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "sense_entity" */
export type Sense_Entity_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Sense_Entity_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Sense_Entity_Stream_Cursor_Value_Input = {
	readonly cid?: InputMaybe<Scalars['String']>
	readonly created_at_block?: InputMaybe<Scalars['Int']>
	readonly experience?: InputMaybe<Scalars['numeric']>
	readonly id?: InputMaybe<Scalars['String']>
	readonly identity_id?: InputMaybe<Scalars['String']>
	readonly reputation?: InputMaybe<Scalars['numeric']>
	readonly trust?: InputMaybe<Scalars['numeric']>
	readonly updated_at_block?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type Sense_Entity_Sum_Fields = {
	readonly __typename?: 'sense_entity_sum_fields'
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly experience?: Maybe<Scalars['numeric']>
	readonly reputation?: Maybe<Scalars['numeric']>
	readonly trust?: Maybe<Scalars['numeric']>
	readonly updated_at_block?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "sense_entity" */
export type Sense_Entity_Sum_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly experience?: InputMaybe<Order_By>
	readonly reputation?: InputMaybe<Order_By>
	readonly trust?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** update columns of table "sense_entity" */
export enum Sense_Entity_Update_Column {
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
	UpdatedAtBlock = 'updated_at_block',
}

export type Sense_Entity_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Sense_Entity_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Sense_Entity_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Sense_Entity_Bool_Exp
}

/** aggregate var_pop on columns */
export type Sense_Entity_Var_Pop_Fields = {
	readonly __typename?: 'sense_entity_var_pop_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly experience?: Maybe<Scalars['Float']>
	readonly reputation?: Maybe<Scalars['Float']>
	readonly trust?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "sense_entity" */
export type Sense_Entity_Var_Pop_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly experience?: InputMaybe<Order_By>
	readonly reputation?: InputMaybe<Order_By>
	readonly trust?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Sense_Entity_Var_Samp_Fields = {
	readonly __typename?: 'sense_entity_var_samp_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly experience?: Maybe<Scalars['Float']>
	readonly reputation?: Maybe<Scalars['Float']>
	readonly trust?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "sense_entity" */
export type Sense_Entity_Var_Samp_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly experience?: InputMaybe<Order_By>
	readonly reputation?: InputMaybe<Order_By>
	readonly trust?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Sense_Entity_Variance_Fields = {
	readonly __typename?: 'sense_entity_variance_fields'
	readonly created_at_block?: Maybe<Scalars['Float']>
	readonly experience?: Maybe<Scalars['Float']>
	readonly reputation?: Maybe<Scalars['Float']>
	readonly trust?: Maybe<Scalars['Float']>
	readonly updated_at_block?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "sense_entity" */
export type Sense_Entity_Variance_Order_By = {
	readonly created_at_block?: InputMaybe<Order_By>
	readonly experience?: InputMaybe<Order_By>
	readonly reputation?: InputMaybe<Order_By>
	readonly trust?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

export type Subscription_Root = {
	readonly __typename?: 'subscription_root'
	/** fetch data from the table: "Balance" */
	readonly Balance: ReadonlyArray<Balance>
	/** fetch aggregated fields from the table: "Balance" */
	readonly Balance_aggregate: Balance_Aggregate
	/** fetch data from the table: "Balance" using primary key columns */
	readonly Balance_by_pk?: Maybe<Balance>
	/** fetch data from the table in a streaming manner: "Balance" */
	readonly Balance_stream: ReadonlyArray<Balance>
	/** An array relationship */
	readonly BattlepassLevels: ReadonlyArray<BattlepassLevels>
	/** An aggregate relationship */
	readonly BattlepassLevels_aggregate: BattlepassLevels_Aggregate
	/** fetch data from the table: "BattlepassLevels" using primary key columns */
	readonly BattlepassLevels_by_pk?: Maybe<BattlepassLevels>
	/** fetch data from the table in a streaming manner: "BattlepassLevels" */
	readonly BattlepassLevels_stream: ReadonlyArray<BattlepassLevels>
	/** An array relationship */
	readonly BattlepassParticipants: ReadonlyArray<BattlepassParticipants>
	/** An aggregate relationship */
	readonly BattlepassParticipants_aggregate: BattlepassParticipants_Aggregate
	/** fetch data from the table: "BattlepassParticipants" using primary key columns */
	readonly BattlepassParticipants_by_pk?: Maybe<BattlepassParticipants>
	/** fetch data from the table in a streaming manner: "BattlepassParticipants" */
	readonly BattlepassParticipants_stream: ReadonlyArray<BattlepassParticipants>
	/** An array relationship */
	readonly BattlepassRewards: ReadonlyArray<BattlepassRewards>
	/** An aggregate relationship */
	readonly BattlepassRewards_aggregate: BattlepassRewards_Aggregate
	/** fetch data from the table: "BattlepassRewards" using primary key columns */
	readonly BattlepassRewards_by_pk?: Maybe<BattlepassRewards>
	/** fetch data from the table in a streaming manner: "BattlepassRewards" */
	readonly BattlepassRewards_stream: ReadonlyArray<BattlepassRewards>
	/** fetch data from the table: "Battlepasses" */
	readonly Battlepasses: ReadonlyArray<Battlepasses>
	/** fetch aggregated fields from the table: "Battlepasses" */
	readonly Battlepasses_aggregate: Battlepasses_Aggregate
	/** fetch data from the table: "Battlepasses" using primary key columns */
	readonly Battlepasses_by_pk?: Maybe<Battlepasses>
	/** fetch data from the table in a streaming manner: "Battlepasses" */
	readonly Battlepasses_stream: ReadonlyArray<Battlepasses>
	/** fetch data from the table: "ChainActivities" */
	readonly ChainActivities: ReadonlyArray<ChainActivities>
	/** fetch aggregated fields from the table: "ChainActivities" */
	readonly ChainActivities_aggregate: ChainActivities_Aggregate
	/** fetch data from the table: "ChainActivities" using primary key columns */
	readonly ChainActivities_by_pk?: Maybe<ChainActivities>
	/** fetch data from the table in a streaming manner: "ChainActivities" */
	readonly ChainActivities_stream: ReadonlyArray<ChainActivities>
	/** fetch data from the table: "ChainInfo" */
	readonly ChainInfo: ReadonlyArray<ChainInfo>
	/** fetch aggregated fields from the table: "ChainInfo" */
	readonly ChainInfo_aggregate: ChainInfo_Aggregate
	/** fetch data from the table: "ChainInfo" using primary key columns */
	readonly ChainInfo_by_pk?: Maybe<ChainInfo>
	/** fetch data from the table in a streaming manner: "ChainInfo" */
	readonly ChainInfo_stream: ReadonlyArray<ChainInfo>
	/** fetch data from the table: "ChainStatuses" */
	readonly ChainStatuses: ReadonlyArray<ChainStatuses>
	/** fetch aggregated fields from the table: "ChainStatuses" */
	readonly ChainStatuses_aggregate: ChainStatuses_Aggregate
	/** fetch data from the table: "ChainStatuses" using primary key columns */
	readonly ChainStatuses_by_pk?: Maybe<ChainStatuses>
	/** fetch data from the table in a streaming manner: "ChainStatuses" */
	readonly ChainStatuses_stream: ReadonlyArray<ChainStatuses>
	/** An array relationship */
	readonly CompletedQuests: ReadonlyArray<CompletedQuests>
	/** An aggregate relationship */
	readonly CompletedQuests_aggregate: CompletedQuests_Aggregate
	/** fetch data from the table: "CompletedQuests" using primary key columns */
	readonly CompletedQuests_by_pk?: Maybe<CompletedQuests>
	/** fetch data from the table in a streaming manner: "CompletedQuests" */
	readonly CompletedQuests_stream: ReadonlyArray<CompletedQuests>
	/** fetch data from the table: "DiscordActivities" */
	readonly DiscordActivities: ReadonlyArray<DiscordActivities>
	/** fetch aggregated fields from the table: "DiscordActivities" */
	readonly DiscordActivities_aggregate: DiscordActivities_Aggregate
	/** fetch data from the table: "DiscordActivities" using primary key columns */
	readonly DiscordActivities_by_pk?: Maybe<DiscordActivities>
	/** fetch data from the table in a streaming manner: "DiscordActivities" */
	readonly DiscordActivities_stream: ReadonlyArray<DiscordActivities>
	/** fetch data from the table: "GenericActivities" */
	readonly GenericActivities: ReadonlyArray<GenericActivities>
	/** fetch aggregated fields from the table: "GenericActivities" */
	readonly GenericActivities_aggregate: GenericActivities_Aggregate
	/** fetch data from the table: "GenericActivities" using primary key columns */
	readonly GenericActivities_by_pk?: Maybe<GenericActivities>
	/** fetch data from the table in a streaming manner: "GenericActivities" */
	readonly GenericActivities_stream: ReadonlyArray<GenericActivities>
	/** fetch data from the table: "Identities" */
	readonly Identities: ReadonlyArray<Identities>
	/** fetch aggregated fields from the table: "Identities" */
	readonly Identities_aggregate: Identities_Aggregate
	/** fetch data from the table: "Identities" using primary key columns */
	readonly Identities_by_pk?: Maybe<Identities>
	/** fetch data from the table in a streaming manner: "Identities" */
	readonly Identities_stream: ReadonlyArray<Identities>
	/** An array relationship */
	readonly Payments: ReadonlyArray<Payments>
	/** An aggregate relationship */
	readonly Payments_aggregate: Payments_Aggregate
	/** fetch data from the table: "Payments" using primary key columns */
	readonly Payments_by_pk?: Maybe<Payments>
	/** fetch data from the table in a streaming manner: "Payments" */
	readonly Payments_stream: ReadonlyArray<Payments>
	/** An array relationship */
	readonly QuestProgresses: ReadonlyArray<QuestProgresses>
	/** An aggregate relationship */
	readonly QuestProgresses_aggregate: QuestProgresses_Aggregate
	/** fetch data from the table: "QuestProgresses" using primary key columns */
	readonly QuestProgresses_by_pk?: Maybe<QuestProgresses>
	/** fetch data from the table in a streaming manner: "QuestProgresses" */
	readonly QuestProgresses_stream: ReadonlyArray<QuestProgresses>
	/** An array relationship */
	readonly Quests: ReadonlyArray<Quests>
	/** An aggregate relationship */
	readonly Quests_aggregate: Quests_Aggregate
	/** fetch data from the table: "Quests" using primary key columns */
	readonly Quests_by_pk?: Maybe<Quests>
	/** fetch data from the table in a streaming manner: "Quests" */
	readonly Quests_stream: ReadonlyArray<Quests>
	/** An array relationship */
	readonly RewardClaims: ReadonlyArray<RewardClaims>
	/** An aggregate relationship */
	readonly RewardClaims_aggregate: RewardClaims_Aggregate
	/** fetch data from the table: "RewardClaims" using primary key columns */
	readonly RewardClaims_by_pk?: Maybe<RewardClaims>
	/** fetch data from the table in a streaming manner: "RewardClaims" */
	readonly RewardClaims_stream: ReadonlyArray<RewardClaims>
	/** fetch data from the table: "Session" */
	readonly Session: ReadonlyArray<Session>
	/** fetch aggregated fields from the table: "Session" */
	readonly Session_aggregate: Session_Aggregate
	/** fetch data from the table: "Session" using primary key columns */
	readonly Session_by_pk?: Maybe<Session>
	/** fetch data from the table in a streaming manner: "Session" */
	readonly Session_stream: ReadonlyArray<Session>
	/** fetch data from the table: "TwitterActivities" */
	readonly TwitterActivities: ReadonlyArray<TwitterActivities>
	/** fetch aggregated fields from the table: "TwitterActivities" */
	readonly TwitterActivities_aggregate: TwitterActivities_Aggregate
	/** fetch data from the table: "TwitterActivities" using primary key columns */
	readonly TwitterActivities_by_pk?: Maybe<TwitterActivities>
	/** fetch data from the table in a streaming manner: "TwitterActivities" */
	readonly TwitterActivities_stream: ReadonlyArray<TwitterActivities>
	/** fetch data from the table: "TwitterSearches" */
	readonly TwitterSearches: ReadonlyArray<TwitterSearches>
	/** fetch aggregated fields from the table: "TwitterSearches" */
	readonly TwitterSearches_aggregate: TwitterSearches_Aggregate
	/** fetch data from the table: "TwitterSearches" using primary key columns */
	readonly TwitterSearches_by_pk?: Maybe<TwitterSearches>
	/** fetch data from the table in a streaming manner: "TwitterSearches" */
	readonly TwitterSearches_stream: ReadonlyArray<TwitterSearches>
	/** fetch data from the table: "TwitterUsers" */
	readonly TwitterUsers: ReadonlyArray<TwitterUsers>
	/** fetch aggregated fields from the table: "TwitterUsers" */
	readonly TwitterUsers_aggregate: TwitterUsers_Aggregate
	/** fetch data from the table: "TwitterUsers" using primary key columns */
	readonly TwitterUsers_by_pk?: Maybe<TwitterUsers>
	/** fetch data from the table in a streaming manner: "TwitterUsers" */
	readonly TwitterUsers_stream: ReadonlyArray<TwitterUsers>
	/** An array relationship */
	readonly UserTokens: ReadonlyArray<UserTokens>
	/** An aggregate relationship */
	readonly UserTokens_aggregate: UserTokens_Aggregate
	/** fetch data from the table: "UserTokens" using primary key columns */
	readonly UserTokens_by_pk?: Maybe<UserTokens>
	/** fetch data from the table in a streaming manner: "UserTokens" */
	readonly UserTokens_stream: ReadonlyArray<UserTokens>
	/** fetch data from the table: "_prisma_migrations" */
	readonly _prisma_migrations: ReadonlyArray<_Prisma_Migrations>
	/** fetch aggregated fields from the table: "_prisma_migrations" */
	readonly _prisma_migrations_aggregate: _Prisma_Migrations_Aggregate
	/** fetch data from the table: "_prisma_migrations" using primary key columns */
	readonly _prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>
	/** fetch data from the table in a streaming manner: "_prisma_migrations" */
	readonly _prisma_migrations_stream: ReadonlyArray<_Prisma_Migrations>
	/** fetch data from the table: "account_balance" */
	readonly account_balance: ReadonlyArray<Account_Balance>
	/** fetch aggregated fields from the table: "account_balance" */
	readonly account_balance_aggregate: Account_Balance_Aggregate
	/** fetch data from the table: "account_balance" using primary key columns */
	readonly account_balance_by_pk?: Maybe<Account_Balance>
	/** fetch data from the table in a streaming manner: "account_balance" */
	readonly account_balance_stream: ReadonlyArray<Account_Balance>
	/** fetch data from the table: "battlepass" */
	readonly battlepass: ReadonlyArray<Battlepass>
	/** fetch aggregated fields from the table: "battlepass" */
	readonly battlepass_aggregate: Battlepass_Aggregate
	/** fetch data from the table: "battlepass" using primary key columns */
	readonly battlepass_by_pk?: Maybe<Battlepass>
	/** fetch data from the table: "battlepass_nft" */
	readonly battlepass_nft: ReadonlyArray<Battlepass_Nft>
	/** fetch aggregated fields from the table: "battlepass_nft" */
	readonly battlepass_nft_aggregate: Battlepass_Nft_Aggregate
	/** fetch data from the table: "battlepass_nft" using primary key columns */
	readonly battlepass_nft_by_pk?: Maybe<Battlepass_Nft>
	/** fetch data from the table in a streaming manner: "battlepass_nft" */
	readonly battlepass_nft_stream: ReadonlyArray<Battlepass_Nft>
	/** fetch data from the table in a streaming manner: "battlepass" */
	readonly battlepass_stream: ReadonlyArray<Battlepass>
	/** fetch data from the table: "campaign" */
	readonly campaign: ReadonlyArray<Campaign>
	/** fetch aggregated fields from the table: "campaign" */
	readonly campaign_aggregate: Campaign_Aggregate
	/** fetch data from the table: "campaign" using primary key columns */
	readonly campaign_by_pk?: Maybe<Campaign>
	/** fetch data from the table: "campaign_contributor" */
	readonly campaign_contributor: ReadonlyArray<Campaign_Contributor>
	/** fetch aggregated fields from the table: "campaign_contributor" */
	readonly campaign_contributor_aggregate: Campaign_Contributor_Aggregate
	/** fetch data from the table: "campaign_contributor" using primary key columns */
	readonly campaign_contributor_by_pk?: Maybe<Campaign_Contributor>
	/** fetch data from the table in a streaming manner: "campaign_contributor" */
	readonly campaign_contributor_stream: ReadonlyArray<Campaign_Contributor>
	/** fetch data from the table: "campaign_metadata" */
	readonly campaign_metadata: ReadonlyArray<Campaign_Metadata>
	/** fetch aggregated fields from the table: "campaign_metadata" */
	readonly campaign_metadata_aggregate: Campaign_Metadata_Aggregate
	/** fetch data from the table: "campaign_metadata" using primary key columns */
	readonly campaign_metadata_by_pk?: Maybe<Campaign_Metadata>
	/** fetch data from the table in a streaming manner: "campaign_metadata" */
	readonly campaign_metadata_stream: ReadonlyArray<Campaign_Metadata>
	/** fetch data from the table in a streaming manner: "campaign" */
	readonly campaign_stream: ReadonlyArray<Campaign>
	/** fetch data from the table: "chain_state" */
	readonly chain_state: ReadonlyArray<Chain_State>
	/** fetch aggregated fields from the table: "chain_state" */
	readonly chain_state_aggregate: Chain_State_Aggregate
	/** fetch data from the table: "chain_state" using primary key columns */
	readonly chain_state_by_pk?: Maybe<Chain_State>
	/** fetch data from the table in a streaming manner: "chain_state" */
	readonly chain_state_stream: ReadonlyArray<Chain_State>
	/** fetch data from the table: "current_chain_state" */
	readonly current_chain_state: ReadonlyArray<Current_Chain_State>
	/** fetch aggregated fields from the table: "current_chain_state" */
	readonly current_chain_state_aggregate: Current_Chain_State_Aggregate
	/** fetch data from the table: "current_chain_state" using primary key columns */
	readonly current_chain_state_by_pk?: Maybe<Current_Chain_State>
	/** fetch data from the table in a streaming manner: "current_chain_state" */
	readonly current_chain_state_stream: ReadonlyArray<Current_Chain_State>
	/** fetch data from the table: "historical_balance" */
	readonly historical_balance: ReadonlyArray<Historical_Balance>
	/** fetch aggregated fields from the table: "historical_balance" */
	readonly historical_balance_aggregate: Historical_Balance_Aggregate
	/** fetch data from the table: "historical_balance" using primary key columns */
	readonly historical_balance_by_pk?: Maybe<Historical_Balance>
	/** fetch data from the table in a streaming manner: "historical_balance" */
	readonly historical_balance_stream: ReadonlyArray<Historical_Balance>
	/** fetch data from the table: "identity" */
	readonly identity: ReadonlyArray<Identity>
	/** fetch aggregated fields from the table: "identity" */
	readonly identity_aggregate: Identity_Aggregate
	/** fetch data from the table: "identity" using primary key columns */
	readonly identity_by_pk?: Maybe<Identity>
	/** fetch data from the table in a streaming manner: "identity" */
	readonly identity_stream: ReadonlyArray<Identity>
	/** fetch data from the table: "migrations" */
	readonly migrations: ReadonlyArray<Migrations>
	/** fetch aggregated fields from the table: "migrations" */
	readonly migrations_aggregate: Migrations_Aggregate
	/** fetch data from the table: "migrations" using primary key columns */
	readonly migrations_by_pk?: Maybe<Migrations>
	/** fetch data from the table in a streaming manner: "migrations" */
	readonly migrations_stream: ReadonlyArray<Migrations>
	/** fetch data from the table: "nft" */
	readonly nft: ReadonlyArray<Nft>
	/** fetch aggregated fields from the table: "nft" */
	readonly nft_aggregate: Nft_Aggregate
	/** fetch data from the table: "nft" using primary key columns */
	readonly nft_by_pk?: Maybe<Nft>
	/** fetch data from the table: "nft_collection" */
	readonly nft_collection: ReadonlyArray<Nft_Collection>
	/** fetch aggregated fields from the table: "nft_collection" */
	readonly nft_collection_aggregate: Nft_Collection_Aggregate
	/** fetch data from the table: "nft_collection" using primary key columns */
	readonly nft_collection_by_pk?: Maybe<Nft_Collection>
	/** fetch data from the table in a streaming manner: "nft_collection" */
	readonly nft_collection_stream: ReadonlyArray<Nft_Collection>
	/** fetch data from the table in a streaming manner: "nft" */
	readonly nft_stream: ReadonlyArray<Nft>
	/** fetch data from the table: "organization" */
	readonly organization: ReadonlyArray<Organization>
	/** fetch aggregated fields from the table: "organization" */
	readonly organization_aggregate: Organization_Aggregate
	/** fetch data from the table: "organization" using primary key columns */
	readonly organization_by_pk?: Maybe<Organization>
	/** fetch data from the table: "organization_member" */
	readonly organization_member: ReadonlyArray<Organization_Member>
	/** fetch aggregated fields from the table: "organization_member" */
	readonly organization_member_aggregate: Organization_Member_Aggregate
	/** fetch data from the table: "organization_member" using primary key columns */
	readonly organization_member_by_pk?: Maybe<Organization_Member>
	/** fetch data from the table in a streaming manner: "organization_member" */
	readonly organization_member_stream: ReadonlyArray<Organization_Member>
	/** fetch data from the table: "organization_metadata" */
	readonly organization_metadata: ReadonlyArray<Organization_Metadata>
	/** fetch aggregated fields from the table: "organization_metadata" */
	readonly organization_metadata_aggregate: Organization_Metadata_Aggregate
	/** fetch data from the table: "organization_metadata" using primary key columns */
	readonly organization_metadata_by_pk?: Maybe<Organization_Metadata>
	/** fetch data from the table in a streaming manner: "organization_metadata" */
	readonly organization_metadata_stream: ReadonlyArray<Organization_Metadata>
	/** fetch data from the table in a streaming manner: "organization" */
	readonly organization_stream: ReadonlyArray<Organization>
	/** fetch data from the table: "proposal" */
	readonly proposal: ReadonlyArray<Proposal>
	/** fetch aggregated fields from the table: "proposal" */
	readonly proposal_aggregate: Proposal_Aggregate
	/** fetch data from the table: "proposal" using primary key columns */
	readonly proposal_by_pk?: Maybe<Proposal>
	/** fetch data from the table: "proposal_metadata" */
	readonly proposal_metadata: ReadonlyArray<Proposal_Metadata>
	/** fetch aggregated fields from the table: "proposal_metadata" */
	readonly proposal_metadata_aggregate: Proposal_Metadata_Aggregate
	/** fetch data from the table: "proposal_metadata" using primary key columns */
	readonly proposal_metadata_by_pk?: Maybe<Proposal_Metadata>
	/** fetch data from the table in a streaming manner: "proposal_metadata" */
	readonly proposal_metadata_stream: ReadonlyArray<Proposal_Metadata>
	/** fetch data from the table in a streaming manner: "proposal" */
	readonly proposal_stream: ReadonlyArray<Proposal>
	/** fetch data from the table: "proposal_voter" */
	readonly proposal_voter: ReadonlyArray<Proposal_Voter>
	/** fetch aggregated fields from the table: "proposal_voter" */
	readonly proposal_voter_aggregate: Proposal_Voter_Aggregate
	/** fetch data from the table: "proposal_voter" using primary key columns */
	readonly proposal_voter_by_pk?: Maybe<Proposal_Voter>
	/** fetch data from the table in a streaming manner: "proposal_voter" */
	readonly proposal_voter_stream: ReadonlyArray<Proposal_Voter>
	/** fetch data from the table: "sense_entity" */
	readonly sense_entity: ReadonlyArray<Sense_Entity>
	/** fetch aggregated fields from the table: "sense_entity" */
	readonly sense_entity_aggregate: Sense_Entity_Aggregate
	/** fetch data from the table: "sense_entity" using primary key columns */
	readonly sense_entity_by_pk?: Maybe<Sense_Entity>
	/** fetch data from the table in a streaming manner: "sense_entity" */
	readonly sense_entity_stream: ReadonlyArray<Sense_Entity>
	/** fetch data from the table: "voting" */
	readonly voting: ReadonlyArray<Voting>
	/** fetch aggregated fields from the table: "voting" */
	readonly voting_aggregate: Voting_Aggregate
	/** fetch data from the table: "voting" using primary key columns */
	readonly voting_by_pk?: Maybe<Voting>
	/** fetch data from the table in a streaming manner: "voting" */
	readonly voting_stream: ReadonlyArray<Voting>
}

export type Subscription_RootBalanceArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Balance_Order_By>>
	where?: InputMaybe<Balance_Bool_Exp>
}

export type Subscription_RootBalance_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Balance_Order_By>>
	where?: InputMaybe<Balance_Bool_Exp>
}

export type Subscription_RootBalance_By_PkArgs = {
	id: Scalars['bigint']
}

export type Subscription_RootBalance_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Balance_Stream_Cursor_Input>>
	where?: InputMaybe<Balance_Bool_Exp>
}

export type Subscription_RootBattlepassLevelsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassLevels_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassLevels_Order_By>>
	where?: InputMaybe<BattlepassLevels_Bool_Exp>
}

export type Subscription_RootBattlepassLevels_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassLevels_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassLevels_Order_By>>
	where?: InputMaybe<BattlepassLevels_Bool_Exp>
}

export type Subscription_RootBattlepassLevels_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootBattlepassLevels_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<BattlepassLevels_Stream_Cursor_Input>>
	where?: InputMaybe<BattlepassLevels_Bool_Exp>
}

export type Subscription_RootBattlepassParticipantsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassParticipants_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassParticipants_Order_By>>
	where?: InputMaybe<BattlepassParticipants_Bool_Exp>
}

export type Subscription_RootBattlepassParticipants_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassParticipants_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassParticipants_Order_By>>
	where?: InputMaybe<BattlepassParticipants_Bool_Exp>
}

export type Subscription_RootBattlepassParticipants_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootBattlepassParticipants_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<BattlepassParticipants_Stream_Cursor_Input>>
	where?: InputMaybe<BattlepassParticipants_Bool_Exp>
}

export type Subscription_RootBattlepassRewardsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassRewards_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassRewards_Order_By>>
	where?: InputMaybe<BattlepassRewards_Bool_Exp>
}

export type Subscription_RootBattlepassRewards_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<BattlepassRewards_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<BattlepassRewards_Order_By>>
	where?: InputMaybe<BattlepassRewards_Bool_Exp>
}

export type Subscription_RootBattlepassRewards_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootBattlepassRewards_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<BattlepassRewards_Stream_Cursor_Input>>
	where?: InputMaybe<BattlepassRewards_Bool_Exp>
}

export type Subscription_RootBattlepassesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepasses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepasses_Order_By>>
	where?: InputMaybe<Battlepasses_Bool_Exp>
}

export type Subscription_RootBattlepasses_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepasses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepasses_Order_By>>
	where?: InputMaybe<Battlepasses_Bool_Exp>
}

export type Subscription_RootBattlepasses_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootBattlepasses_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Battlepasses_Stream_Cursor_Input>>
	where?: InputMaybe<Battlepasses_Bool_Exp>
}

export type Subscription_RootChainActivitiesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<ChainActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<ChainActivities_Order_By>>
	where?: InputMaybe<ChainActivities_Bool_Exp>
}

export type Subscription_RootChainActivities_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<ChainActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<ChainActivities_Order_By>>
	where?: InputMaybe<ChainActivities_Bool_Exp>
}

export type Subscription_RootChainActivities_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootChainActivities_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<ChainActivities_Stream_Cursor_Input>>
	where?: InputMaybe<ChainActivities_Bool_Exp>
}

export type Subscription_RootChainInfoArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<ChainInfo_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<ChainInfo_Order_By>>
	where?: InputMaybe<ChainInfo_Bool_Exp>
}

export type Subscription_RootChainInfo_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<ChainInfo_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<ChainInfo_Order_By>>
	where?: InputMaybe<ChainInfo_Bool_Exp>
}

export type Subscription_RootChainInfo_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootChainInfo_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<ChainInfo_Stream_Cursor_Input>>
	where?: InputMaybe<ChainInfo_Bool_Exp>
}

export type Subscription_RootChainStatusesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<ChainStatuses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<ChainStatuses_Order_By>>
	where?: InputMaybe<ChainStatuses_Bool_Exp>
}

export type Subscription_RootChainStatuses_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<ChainStatuses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<ChainStatuses_Order_By>>
	where?: InputMaybe<ChainStatuses_Bool_Exp>
}

export type Subscription_RootChainStatuses_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootChainStatuses_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<ChainStatuses_Stream_Cursor_Input>>
	where?: InputMaybe<ChainStatuses_Bool_Exp>
}

export type Subscription_RootCompletedQuestsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<CompletedQuests_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<CompletedQuests_Order_By>>
	where?: InputMaybe<CompletedQuests_Bool_Exp>
}

export type Subscription_RootCompletedQuests_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<CompletedQuests_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<CompletedQuests_Order_By>>
	where?: InputMaybe<CompletedQuests_Bool_Exp>
}

export type Subscription_RootCompletedQuests_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootCompletedQuests_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<CompletedQuests_Stream_Cursor_Input>>
	where?: InputMaybe<CompletedQuests_Bool_Exp>
}

export type Subscription_RootDiscordActivitiesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<DiscordActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<DiscordActivities_Order_By>>
	where?: InputMaybe<DiscordActivities_Bool_Exp>
}

export type Subscription_RootDiscordActivities_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<DiscordActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<DiscordActivities_Order_By>>
	where?: InputMaybe<DiscordActivities_Bool_Exp>
}

export type Subscription_RootDiscordActivities_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootDiscordActivities_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<DiscordActivities_Stream_Cursor_Input>>
	where?: InputMaybe<DiscordActivities_Bool_Exp>
}

export type Subscription_RootGenericActivitiesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<GenericActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<GenericActivities_Order_By>>
	where?: InputMaybe<GenericActivities_Bool_Exp>
}

export type Subscription_RootGenericActivities_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<GenericActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<GenericActivities_Order_By>>
	where?: InputMaybe<GenericActivities_Bool_Exp>
}

export type Subscription_RootGenericActivities_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootGenericActivities_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<GenericActivities_Stream_Cursor_Input>>
	where?: InputMaybe<GenericActivities_Bool_Exp>
}

export type Subscription_RootIdentitiesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Identities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Identities_Order_By>>
	where?: InputMaybe<Identities_Bool_Exp>
}

export type Subscription_RootIdentities_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Identities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Identities_Order_By>>
	where?: InputMaybe<Identities_Bool_Exp>
}

export type Subscription_RootIdentities_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootIdentities_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Identities_Stream_Cursor_Input>>
	where?: InputMaybe<Identities_Bool_Exp>
}

export type Subscription_RootPaymentsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Payments_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Payments_Order_By>>
	where?: InputMaybe<Payments_Bool_Exp>
}

export type Subscription_RootPayments_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Payments_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Payments_Order_By>>
	where?: InputMaybe<Payments_Bool_Exp>
}

export type Subscription_RootPayments_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootPayments_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Payments_Stream_Cursor_Input>>
	where?: InputMaybe<Payments_Bool_Exp>
}

export type Subscription_RootQuestProgressesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<QuestProgresses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<QuestProgresses_Order_By>>
	where?: InputMaybe<QuestProgresses_Bool_Exp>
}

export type Subscription_RootQuestProgresses_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<QuestProgresses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<QuestProgresses_Order_By>>
	where?: InputMaybe<QuestProgresses_Bool_Exp>
}

export type Subscription_RootQuestProgresses_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootQuestProgresses_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<QuestProgresses_Stream_Cursor_Input>>
	where?: InputMaybe<QuestProgresses_Bool_Exp>
}

export type Subscription_RootQuestsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Quests_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Quests_Order_By>>
	where?: InputMaybe<Quests_Bool_Exp>
}

export type Subscription_RootQuests_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Quests_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Quests_Order_By>>
	where?: InputMaybe<Quests_Bool_Exp>
}

export type Subscription_RootQuests_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootQuests_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Quests_Stream_Cursor_Input>>
	where?: InputMaybe<Quests_Bool_Exp>
}

export type Subscription_RootRewardClaimsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<RewardClaims_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<RewardClaims_Order_By>>
	where?: InputMaybe<RewardClaims_Bool_Exp>
}

export type Subscription_RootRewardClaims_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<RewardClaims_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<RewardClaims_Order_By>>
	where?: InputMaybe<RewardClaims_Bool_Exp>
}

export type Subscription_RootRewardClaims_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootRewardClaims_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<RewardClaims_Stream_Cursor_Input>>
	where?: InputMaybe<RewardClaims_Bool_Exp>
}

export type Subscription_RootSessionArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Session_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Session_Order_By>>
	where?: InputMaybe<Session_Bool_Exp>
}

export type Subscription_RootSession_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Session_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Session_Order_By>>
	where?: InputMaybe<Session_Bool_Exp>
}

export type Subscription_RootSession_By_PkArgs = {
	id: Scalars['bigint']
}

export type Subscription_RootSession_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Session_Stream_Cursor_Input>>
	where?: InputMaybe<Session_Bool_Exp>
}

export type Subscription_RootTwitterActivitiesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<TwitterActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<TwitterActivities_Order_By>>
	where?: InputMaybe<TwitterActivities_Bool_Exp>
}

export type Subscription_RootTwitterActivities_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<TwitterActivities_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<TwitterActivities_Order_By>>
	where?: InputMaybe<TwitterActivities_Bool_Exp>
}

export type Subscription_RootTwitterActivities_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootTwitterActivities_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<TwitterActivities_Stream_Cursor_Input>>
	where?: InputMaybe<TwitterActivities_Bool_Exp>
}

export type Subscription_RootTwitterSearchesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<TwitterSearches_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<TwitterSearches_Order_By>>
	where?: InputMaybe<TwitterSearches_Bool_Exp>
}

export type Subscription_RootTwitterSearches_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<TwitterSearches_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<TwitterSearches_Order_By>>
	where?: InputMaybe<TwitterSearches_Bool_Exp>
}

export type Subscription_RootTwitterSearches_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootTwitterSearches_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<TwitterSearches_Stream_Cursor_Input>>
	where?: InputMaybe<TwitterSearches_Bool_Exp>
}

export type Subscription_RootTwitterUsersArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<TwitterUsers_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<TwitterUsers_Order_By>>
	where?: InputMaybe<TwitterUsers_Bool_Exp>
}

export type Subscription_RootTwitterUsers_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<TwitterUsers_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<TwitterUsers_Order_By>>
	where?: InputMaybe<TwitterUsers_Bool_Exp>
}

export type Subscription_RootTwitterUsers_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootTwitterUsers_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<TwitterUsers_Stream_Cursor_Input>>
	where?: InputMaybe<TwitterUsers_Bool_Exp>
}

export type Subscription_RootUserTokensArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<UserTokens_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<UserTokens_Order_By>>
	where?: InputMaybe<UserTokens_Bool_Exp>
}

export type Subscription_RootUserTokens_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<UserTokens_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<UserTokens_Order_By>>
	where?: InputMaybe<UserTokens_Bool_Exp>
}

export type Subscription_RootUserTokens_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootUserTokens_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<UserTokens_Stream_Cursor_Input>>
	where?: InputMaybe<UserTokens_Bool_Exp>
}

export type Subscription_Root_Prisma_MigrationsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<_Prisma_Migrations_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<_Prisma_Migrations_Order_By>>
	where?: InputMaybe<_Prisma_Migrations_Bool_Exp>
}

export type Subscription_Root_Prisma_Migrations_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<_Prisma_Migrations_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<_Prisma_Migrations_Order_By>>
	where?: InputMaybe<_Prisma_Migrations_Bool_Exp>
}

export type Subscription_Root_Prisma_Migrations_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_Root_Prisma_Migrations_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<_Prisma_Migrations_Stream_Cursor_Input>>
	where?: InputMaybe<_Prisma_Migrations_Bool_Exp>
}

export type Subscription_RootAccount_BalanceArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Account_Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Account_Balance_Order_By>>
	where?: InputMaybe<Account_Balance_Bool_Exp>
}

export type Subscription_RootAccount_Balance_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Account_Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Account_Balance_Order_By>>
	where?: InputMaybe<Account_Balance_Bool_Exp>
}

export type Subscription_RootAccount_Balance_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootAccount_Balance_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Account_Balance_Stream_Cursor_Input>>
	where?: InputMaybe<Account_Balance_Bool_Exp>
}

export type Subscription_RootBattlepassArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Order_By>>
	where?: InputMaybe<Battlepass_Bool_Exp>
}

export type Subscription_RootBattlepass_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Order_By>>
	where?: InputMaybe<Battlepass_Bool_Exp>
}

export type Subscription_RootBattlepass_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootBattlepass_NftArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Nft_Order_By>>
	where?: InputMaybe<Battlepass_Nft_Bool_Exp>
}

export type Subscription_RootBattlepass_Nft_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Battlepass_Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Battlepass_Nft_Order_By>>
	where?: InputMaybe<Battlepass_Nft_Bool_Exp>
}

export type Subscription_RootBattlepass_Nft_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootBattlepass_Nft_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Battlepass_Nft_Stream_Cursor_Input>>
	where?: InputMaybe<Battlepass_Nft_Bool_Exp>
}

export type Subscription_RootBattlepass_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Battlepass_Stream_Cursor_Input>>
	where?: InputMaybe<Battlepass_Bool_Exp>
}

export type Subscription_RootCampaignArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By>>
	where?: InputMaybe<Campaign_Bool_Exp>
}

export type Subscription_RootCampaign_AggregateArgs = {
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

export type Subscription_RootCampaign_Contributor_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Contributor_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Contributor_Order_By>>
	where?: InputMaybe<Campaign_Contributor_Bool_Exp>
}

export type Subscription_RootCampaign_Contributor_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootCampaign_Contributor_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Campaign_Contributor_Stream_Cursor_Input>>
	where?: InputMaybe<Campaign_Contributor_Bool_Exp>
}

export type Subscription_RootCampaign_MetadataArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Metadata_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Metadata_Order_By>>
	where?: InputMaybe<Campaign_Metadata_Bool_Exp>
}

export type Subscription_RootCampaign_Metadata_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Campaign_Metadata_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Metadata_Order_By>>
	where?: InputMaybe<Campaign_Metadata_Bool_Exp>
}

export type Subscription_RootCampaign_Metadata_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootCampaign_Metadata_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Campaign_Metadata_Stream_Cursor_Input>>
	where?: InputMaybe<Campaign_Metadata_Bool_Exp>
}

export type Subscription_RootCampaign_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Campaign_Stream_Cursor_Input>>
	where?: InputMaybe<Campaign_Bool_Exp>
}

export type Subscription_RootChain_StateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Chain_State_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Chain_State_Order_By>>
	where?: InputMaybe<Chain_State_Bool_Exp>
}

export type Subscription_RootChain_State_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Chain_State_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Chain_State_Order_By>>
	where?: InputMaybe<Chain_State_Bool_Exp>
}

export type Subscription_RootChain_State_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootChain_State_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Chain_State_Stream_Cursor_Input>>
	where?: InputMaybe<Chain_State_Bool_Exp>
}

export type Subscription_RootCurrent_Chain_StateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Current_Chain_State_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Current_Chain_State_Order_By>>
	where?: InputMaybe<Current_Chain_State_Bool_Exp>
}

export type Subscription_RootCurrent_Chain_State_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Current_Chain_State_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Current_Chain_State_Order_By>>
	where?: InputMaybe<Current_Chain_State_Bool_Exp>
}

export type Subscription_RootCurrent_Chain_State_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootCurrent_Chain_State_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Current_Chain_State_Stream_Cursor_Input>>
	where?: InputMaybe<Current_Chain_State_Bool_Exp>
}

export type Subscription_RootHistorical_BalanceArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Historical_Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Historical_Balance_Order_By>>
	where?: InputMaybe<Historical_Balance_Bool_Exp>
}

export type Subscription_RootHistorical_Balance_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Historical_Balance_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Historical_Balance_Order_By>>
	where?: InputMaybe<Historical_Balance_Bool_Exp>
}

export type Subscription_RootHistorical_Balance_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootHistorical_Balance_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Historical_Balance_Stream_Cursor_Input>>
	where?: InputMaybe<Historical_Balance_Bool_Exp>
}

export type Subscription_RootIdentityArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Identity_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Identity_Order_By>>
	where?: InputMaybe<Identity_Bool_Exp>
}

export type Subscription_RootIdentity_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Identity_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Identity_Order_By>>
	where?: InputMaybe<Identity_Bool_Exp>
}

export type Subscription_RootIdentity_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootIdentity_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Identity_Stream_Cursor_Input>>
	where?: InputMaybe<Identity_Bool_Exp>
}

export type Subscription_RootMigrationsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Migrations_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Migrations_Order_By>>
	where?: InputMaybe<Migrations_Bool_Exp>
}

export type Subscription_RootMigrations_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Migrations_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Migrations_Order_By>>
	where?: InputMaybe<Migrations_Bool_Exp>
}

export type Subscription_RootMigrations_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootMigrations_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Migrations_Stream_Cursor_Input>>
	where?: InputMaybe<Migrations_Bool_Exp>
}

export type Subscription_RootNftArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nft_Order_By>>
	where?: InputMaybe<Nft_Bool_Exp>
}

export type Subscription_RootNft_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nft_Order_By>>
	where?: InputMaybe<Nft_Bool_Exp>
}

export type Subscription_RootNft_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootNft_CollectionArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nft_Collection_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nft_Collection_Order_By>>
	where?: InputMaybe<Nft_Collection_Bool_Exp>
}

export type Subscription_RootNft_Collection_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nft_Collection_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nft_Collection_Order_By>>
	where?: InputMaybe<Nft_Collection_Bool_Exp>
}

export type Subscription_RootNft_Collection_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootNft_Collection_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Nft_Collection_Stream_Cursor_Input>>
	where?: InputMaybe<Nft_Collection_Bool_Exp>
}

export type Subscription_RootNft_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Nft_Stream_Cursor_Input>>
	where?: InputMaybe<Nft_Bool_Exp>
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

export type Subscription_RootOrganization_Member_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Member_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Member_Order_By>>
	where?: InputMaybe<Organization_Member_Bool_Exp>
}

export type Subscription_RootOrganization_Member_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootOrganization_Member_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Organization_Member_Stream_Cursor_Input>>
	where?: InputMaybe<Organization_Member_Bool_Exp>
}

export type Subscription_RootOrganization_MetadataArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Metadata_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Metadata_Order_By>>
	where?: InputMaybe<Organization_Metadata_Bool_Exp>
}

export type Subscription_RootOrganization_Metadata_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Organization_Metadata_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Organization_Metadata_Order_By>>
	where?: InputMaybe<Organization_Metadata_Bool_Exp>
}

export type Subscription_RootOrganization_Metadata_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootOrganization_Metadata_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Organization_Metadata_Stream_Cursor_Input>>
	where?: InputMaybe<Organization_Metadata_Bool_Exp>
}

export type Subscription_RootOrganization_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Organization_Stream_Cursor_Input>>
	where?: InputMaybe<Organization_Bool_Exp>
}

export type Subscription_RootProposalArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>
	where?: InputMaybe<Proposal_Bool_Exp>
}

export type Subscription_RootProposal_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>
	where?: InputMaybe<Proposal_Bool_Exp>
}

export type Subscription_RootProposal_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootProposal_MetadataArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Metadata_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Metadata_Order_By>>
	where?: InputMaybe<Proposal_Metadata_Bool_Exp>
}

export type Subscription_RootProposal_Metadata_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Metadata_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Metadata_Order_By>>
	where?: InputMaybe<Proposal_Metadata_Bool_Exp>
}

export type Subscription_RootProposal_Metadata_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootProposal_Metadata_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Proposal_Metadata_Stream_Cursor_Input>>
	where?: InputMaybe<Proposal_Metadata_Bool_Exp>
}

export type Subscription_RootProposal_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Proposal_Stream_Cursor_Input>>
	where?: InputMaybe<Proposal_Bool_Exp>
}

export type Subscription_RootProposal_VoterArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Voter_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Voter_Order_By>>
	where?: InputMaybe<Proposal_Voter_Bool_Exp>
}

export type Subscription_RootProposal_Voter_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Voter_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Voter_Order_By>>
	where?: InputMaybe<Proposal_Voter_Bool_Exp>
}

export type Subscription_RootProposal_Voter_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootProposal_Voter_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Proposal_Voter_Stream_Cursor_Input>>
	where?: InputMaybe<Proposal_Voter_Bool_Exp>
}

export type Subscription_RootSense_EntityArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Sense_Entity_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Sense_Entity_Order_By>>
	where?: InputMaybe<Sense_Entity_Bool_Exp>
}

export type Subscription_RootSense_Entity_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Sense_Entity_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Sense_Entity_Order_By>>
	where?: InputMaybe<Sense_Entity_Bool_Exp>
}

export type Subscription_RootSense_Entity_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootSense_Entity_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Sense_Entity_Stream_Cursor_Input>>
	where?: InputMaybe<Sense_Entity_Bool_Exp>
}

export type Subscription_RootVotingArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Voting_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Voting_Order_By>>
	where?: InputMaybe<Voting_Bool_Exp>
}

export type Subscription_RootVoting_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Voting_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Voting_Order_By>>
	where?: InputMaybe<Voting_Bool_Exp>
}

export type Subscription_RootVoting_By_PkArgs = {
	id: Scalars['String']
}

export type Subscription_RootVoting_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<Voting_Stream_Cursor_Input>>
	where?: InputMaybe<Voting_Bool_Exp>
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['timestamp']>
	readonly _gt?: InputMaybe<Scalars['timestamp']>
	readonly _gte?: InputMaybe<Scalars['timestamp']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['timestamp']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['timestamp']>
	readonly _lte?: InputMaybe<Scalars['timestamp']>
	readonly _neq?: InputMaybe<Scalars['timestamp']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['timestamp']>>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['timestamptz']>
	readonly _gt?: InputMaybe<Scalars['timestamptz']>
	readonly _gte?: InputMaybe<Scalars['timestamptz']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['timestamptz']>
	readonly _lte?: InputMaybe<Scalars['timestamptz']>
	readonly _neq?: InputMaybe<Scalars['timestamptz']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['uuid']>
	readonly _gt?: InputMaybe<Scalars['uuid']>
	readonly _gte?: InputMaybe<Scalars['uuid']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['uuid']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['uuid']>
	readonly _lte?: InputMaybe<Scalars['uuid']>
	readonly _neq?: InputMaybe<Scalars['uuid']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['uuid']>>
}

/** columns and relationships of "voting" */
export type Voting = {
	readonly __typename?: 'voting'
	readonly id: Scalars['String']
	readonly majority: Scalars['String']
	readonly no: Scalars['numeric']
	/** An array relationship */
	readonly proposal_voters: ReadonlyArray<Proposal_Voter>
	/** An aggregate relationship */
	readonly proposal_voters_aggregate: Proposal_Voter_Aggregate
	/** An array relationship */
	readonly proposals: ReadonlyArray<Proposal>
	/** An aggregate relationship */
	readonly proposals_aggregate: Proposal_Aggregate
	readonly quorum?: Maybe<Scalars['String']>
	readonly scale: Scalars['String']
	readonly unit: Scalars['String']
	readonly yes: Scalars['numeric']
}

/** columns and relationships of "voting" */
export type VotingProposal_VotersArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Voter_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Voter_Order_By>>
	where?: InputMaybe<Proposal_Voter_Bool_Exp>
}

/** columns and relationships of "voting" */
export type VotingProposal_Voters_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Voter_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Voter_Order_By>>
	where?: InputMaybe<Proposal_Voter_Bool_Exp>
}

/** columns and relationships of "voting" */
export type VotingProposalsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>
	where?: InputMaybe<Proposal_Bool_Exp>
}

/** columns and relationships of "voting" */
export type VotingProposals_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Proposal_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Proposal_Order_By>>
	where?: InputMaybe<Proposal_Bool_Exp>
}

/** aggregated selection of "voting" */
export type Voting_Aggregate = {
	readonly __typename?: 'voting_aggregate'
	readonly aggregate?: Maybe<Voting_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Voting>
}

/** aggregate fields of "voting" */
export type Voting_Aggregate_Fields = {
	readonly __typename?: 'voting_aggregate_fields'
	readonly avg?: Maybe<Voting_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Voting_Max_Fields>
	readonly min?: Maybe<Voting_Min_Fields>
	readonly stddev?: Maybe<Voting_Stddev_Fields>
	readonly stddev_pop?: Maybe<Voting_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Voting_Stddev_Samp_Fields>
	readonly sum?: Maybe<Voting_Sum_Fields>
	readonly var_pop?: Maybe<Voting_Var_Pop_Fields>
	readonly var_samp?: Maybe<Voting_Var_Samp_Fields>
	readonly variance?: Maybe<Voting_Variance_Fields>
}

/** aggregate fields of "voting" */
export type Voting_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Voting_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Voting_Avg_Fields = {
	readonly __typename?: 'voting_avg_fields'
	readonly no?: Maybe<Scalars['Float']>
	readonly yes?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "voting". All fields are combined with a logical 'AND'. */
export type Voting_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Voting_Bool_Exp>>
	readonly _not?: InputMaybe<Voting_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Voting_Bool_Exp>>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly majority?: InputMaybe<String_Comparison_Exp>
	readonly no?: InputMaybe<Numeric_Comparison_Exp>
	readonly proposal_voters?: InputMaybe<Proposal_Voter_Bool_Exp>
	readonly proposal_voters_aggregate?: InputMaybe<Proposal_Voter_Aggregate_Bool_Exp>
	readonly proposals?: InputMaybe<Proposal_Bool_Exp>
	readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>
	readonly quorum?: InputMaybe<String_Comparison_Exp>
	readonly scale?: InputMaybe<String_Comparison_Exp>
	readonly unit?: InputMaybe<String_Comparison_Exp>
	readonly yes?: InputMaybe<Numeric_Comparison_Exp>
}

/** unique or primary key constraints on table "voting" */
export enum Voting_Constraint {
	/** unique or primary key constraint on columns "id" */
	Pk_2dff1e5c53fa2cc610bea30476c = 'PK_2dff1e5c53fa2cc610bea30476c',
}

/** input type for incrementing numeric columns in table "voting" */
export type Voting_Inc_Input = {
	readonly no?: InputMaybe<Scalars['numeric']>
	readonly yes?: InputMaybe<Scalars['numeric']>
}

/** input type for inserting data into table "voting" */
export type Voting_Insert_Input = {
	readonly id?: InputMaybe<Scalars['String']>
	readonly majority?: InputMaybe<Scalars['String']>
	readonly no?: InputMaybe<Scalars['numeric']>
	readonly proposal_voters?: InputMaybe<Proposal_Voter_Arr_Rel_Insert_Input>
	readonly proposals?: InputMaybe<Proposal_Arr_Rel_Insert_Input>
	readonly quorum?: InputMaybe<Scalars['String']>
	readonly scale?: InputMaybe<Scalars['String']>
	readonly unit?: InputMaybe<Scalars['String']>
	readonly yes?: InputMaybe<Scalars['numeric']>
}

/** aggregate max on columns */
export type Voting_Max_Fields = {
	readonly __typename?: 'voting_max_fields'
	readonly id?: Maybe<Scalars['String']>
	readonly majority?: Maybe<Scalars['String']>
	readonly no?: Maybe<Scalars['numeric']>
	readonly quorum?: Maybe<Scalars['String']>
	readonly scale?: Maybe<Scalars['String']>
	readonly unit?: Maybe<Scalars['String']>
	readonly yes?: Maybe<Scalars['numeric']>
}

/** aggregate min on columns */
export type Voting_Min_Fields = {
	readonly __typename?: 'voting_min_fields'
	readonly id?: Maybe<Scalars['String']>
	readonly majority?: Maybe<Scalars['String']>
	readonly no?: Maybe<Scalars['numeric']>
	readonly quorum?: Maybe<Scalars['String']>
	readonly scale?: Maybe<Scalars['String']>
	readonly unit?: Maybe<Scalars['String']>
	readonly yes?: Maybe<Scalars['numeric']>
}

/** response of any mutation on the table "voting" */
export type Voting_Mutation_Response = {
	readonly __typename?: 'voting_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Voting>
}

/** input type for inserting object relation for remote table "voting" */
export type Voting_Obj_Rel_Insert_Input = {
	readonly data: Voting_Insert_Input
	/** upsert condition */
	readonly on_conflict?: InputMaybe<Voting_On_Conflict>
}

/** on_conflict condition type for table "voting" */
export type Voting_On_Conflict = {
	readonly constraint: Voting_Constraint
	readonly update_columns?: ReadonlyArray<Voting_Update_Column>
	readonly where?: InputMaybe<Voting_Bool_Exp>
}

/** Ordering options when selecting data from "voting". */
export type Voting_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly majority?: InputMaybe<Order_By>
	readonly no?: InputMaybe<Order_By>
	readonly proposal_voters_aggregate?: InputMaybe<Proposal_Voter_Aggregate_Order_By>
	readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>
	readonly quorum?: InputMaybe<Order_By>
	readonly scale?: InputMaybe<Order_By>
	readonly unit?: InputMaybe<Order_By>
	readonly yes?: InputMaybe<Order_By>
}

/** primary key columns input for table: voting */
export type Voting_Pk_Columns_Input = {
	readonly id: Scalars['String']
}

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
	Yes = 'yes',
}

/** input type for updating data in table "voting" */
export type Voting_Set_Input = {
	readonly id?: InputMaybe<Scalars['String']>
	readonly majority?: InputMaybe<Scalars['String']>
	readonly no?: InputMaybe<Scalars['numeric']>
	readonly quorum?: InputMaybe<Scalars['String']>
	readonly scale?: InputMaybe<Scalars['String']>
	readonly unit?: InputMaybe<Scalars['String']>
	readonly yes?: InputMaybe<Scalars['numeric']>
}

/** aggregate stddev on columns */
export type Voting_Stddev_Fields = {
	readonly __typename?: 'voting_stddev_fields'
	readonly no?: Maybe<Scalars['Float']>
	readonly yes?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Voting_Stddev_Pop_Fields = {
	readonly __typename?: 'voting_stddev_pop_fields'
	readonly no?: Maybe<Scalars['Float']>
	readonly yes?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Voting_Stddev_Samp_Fields = {
	readonly __typename?: 'voting_stddev_samp_fields'
	readonly no?: Maybe<Scalars['Float']>
	readonly yes?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "voting" */
export type Voting_Stream_Cursor_Input = {
	/** Stream column input with initial value */
	readonly initial_value: Voting_Stream_Cursor_Value_Input
	/** cursor ordering */
	readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Voting_Stream_Cursor_Value_Input = {
	readonly id?: InputMaybe<Scalars['String']>
	readonly majority?: InputMaybe<Scalars['String']>
	readonly no?: InputMaybe<Scalars['numeric']>
	readonly quorum?: InputMaybe<Scalars['String']>
	readonly scale?: InputMaybe<Scalars['String']>
	readonly unit?: InputMaybe<Scalars['String']>
	readonly yes?: InputMaybe<Scalars['numeric']>
}

/** aggregate sum on columns */
export type Voting_Sum_Fields = {
	readonly __typename?: 'voting_sum_fields'
	readonly no?: Maybe<Scalars['numeric']>
	readonly yes?: Maybe<Scalars['numeric']>
}

/** update columns of table "voting" */
export enum Voting_Update_Column {
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

export type Voting_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	readonly _inc?: InputMaybe<Voting_Inc_Input>
	/** sets the columns of the filtered rows to the given values */
	readonly _set?: InputMaybe<Voting_Set_Input>
	/** filter the rows which have to be updated */
	readonly where: Voting_Bool_Exp
}

/** aggregate var_pop on columns */
export type Voting_Var_Pop_Fields = {
	readonly __typename?: 'voting_var_pop_fields'
	readonly no?: Maybe<Scalars['Float']>
	readonly yes?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Voting_Var_Samp_Fields = {
	readonly __typename?: 'voting_var_samp_fields'
	readonly no?: Maybe<Scalars['Float']>
	readonly yes?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Voting_Variance_Fields = {
	readonly __typename?: 'voting_variance_fields'
	readonly no?: Maybe<Scalars['Float']>
	readonly yes?: Maybe<Scalars['Float']>
}

export type BalanceByAddressSubscriptionVariables = Exact<{
	address: Scalars['String']
}>

export type BalanceByAddressSubscription = {
	readonly __typename?: 'subscription_root'
	readonly Balance: ReadonlyArray<{
		readonly __typename?: 'Balance'
		readonly id: any
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
	readonly historical_balance: ReadonlyArray<{
		readonly __typename?: 'historical_balance'
		readonly id: string
		readonly block: number
		readonly free: any
		readonly reserved: any
		readonly total: any
		readonly currency_id: string
	}>
}

export type CollectablesForUserQueryVariables = Exact<{
	owner: Scalars['String']
}>

export type CollectablesForUserQuery = {
	readonly __typename?: 'query_root'
	readonly rmrkNfts?: ReadonlyArray<{
		readonly __typename?: 'RMRKNft'
		readonly id: string
		readonly metadata: string
		readonly sn: string
	} | null> | null
}

export type CreateQuestMutationVariables = Exact<{ [key: string]: never }>

export type CreateQuestMutation = {
	readonly __typename?: 'mutation_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotMutation'
		readonly quest?: { readonly __typename?: 'BattlepassQuest'; readonly id: number } | null
	} | null
}

export type PaymentMutationVariables = Exact<{
	token: Scalars['String']
	bpid: Scalars['String']
	uuid: Scalars['String']
	txid: Scalars['String']
}>

export type PaymentMutation = {
	readonly __typename?: 'mutation_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotMutation'
		readonly processPayment?: {
			readonly __typename?: 'Payment'
			readonly battlepass: string
			readonly identityUuid: string
			readonly paymentToken: string
		} | null
	} | null
}

export type ClaimRewardMutationVariables = Exact<{
	battlepass: Scalars['String']
	uuid: Scalars['String']
	reward: Scalars['String']
}>

export type ClaimRewardMutation = {
	readonly __typename?: 'mutation_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotMutation'
		readonly claimReward?: {
			readonly __typename?: 'BattlepassRewardClaim'
			readonly id: number
			readonly syncStatus: SyncStatus
		} | null
	} | null
}

export type ClaimBattlepassPremiumMutationVariables = Exact<{
	bid: Scalars['String']
	uid: Scalars['String']
	pid: Scalars['String']
	sid: Scalars['String']
}>

export type ClaimBattlepassPremiumMutation = {
	readonly __typename?: 'mutation_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotMutation'
		readonly processPayment?: { readonly __typename?: 'Payment'; readonly identityUuid: string } | null
	} | null
}

export type PayBattlepassMutationVariables = Exact<{
	battlepass: Scalars['String']
	uuid: Scalars['String']
}>

export type PayBattlepassMutation = {
	readonly __typename?: 'mutation_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotMutation'
		readonly joinPremium?: {
			readonly __typename?: 'BattlepassMember'
			readonly status: MemberStatus
			readonly premium: boolean
		} | null
	} | null
}

export type JoinBattlepassMutationVariables = Exact<{
	battlepass: Scalars['String']
	uuid: Scalars['String']
}>

export type JoinBattlepassMutation = {
	readonly __typename?: 'mutation_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotMutation'
		readonly join?: { readonly __typename?: 'BattlepassMember'; readonly id?: number | null } | null
	} | null
}

export type JoinPremiumBattlepassMutationVariables = Exact<{
	battlepass: Scalars['String']
	uuid: Scalars['String']
}>

export type JoinPremiumBattlepassMutation = {
	readonly __typename?: 'mutation_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotMutation'
		readonly joinPremium?: { readonly __typename?: 'BattlepassMember'; readonly id?: number | null } | null
	} | null
}

export type CreateBattlepassLevelsMutationVariables = Exact<{
	id: Scalars['String']
	levels: ReadonlyArray<Level> | Level
}>

export type CreateBattlepassLevelsMutation = {
	readonly __typename?: 'mutation_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotMutation'
		readonly levels?: ReadonlyArray<{
			readonly __typename?: 'BattlepassLevel'
			readonly id: number
			readonly battlepassId: number
		} | null> | null
	} | null
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
			readonly __typename?: 'BattlepassIdentity'
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

export type GetBattlepassesForOrganizationQueryVariables = Exact<{
	id?: InputMaybe<Scalars['String']>
}>

export type GetBattlepassesForOrganizationQuery = {
	readonly __typename?: 'query_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotQuery'
		readonly battlepasses?: ReadonlyArray<{
			readonly __typename?: 'Battlepass'
			readonly active: boolean
			readonly chainId: string
			readonly cid?: string | null
			readonly name?: string | null
			readonly orgId: string
		} | null> | null
	} | null
}

export type GetAllBattlepassesSubscriptionVariables = Exact<{
	id?: InputMaybe<Scalars['bpchar']>
}>

export type GetAllBattlepassesSubscription = {
	readonly __typename?: 'subscription_root'
	readonly Battlepasses: ReadonlyArray<{
		readonly __typename?: 'Battlepasses'
		readonly chainId: any
		readonly name?: string | null
		readonly active: boolean
		readonly orgId: any
	}>
}

export type RewardsSubscriptionVariables = Exact<{
	id?: InputMaybe<Scalars['bpchar']>
	uuid?: InputMaybe<Scalars['uuid']>
}>

export type RewardsSubscription = {
	readonly __typename?: 'subscription_root'
	readonly BattlepassRewards: ReadonlyArray<{
		readonly __typename?: 'BattlepassRewards'
		readonly available?: number | null
		readonly total?: number | null
		readonly syncStatus?: any | null
		readonly points?: number | null
		readonly name?: string | null
		readonly level?: number | null
		readonly description?: string | null
		readonly createdAt: any
		readonly cid?: string | null
		readonly chainId?: any | null
		readonly RewardClaims: ReadonlyArray<{
			readonly __typename?: 'RewardClaims'
			readonly syncStatus?: any | null
			readonly rewardId?: number | null
			readonly nftId?: number | null
		}>
	}>
}

export type GetBattlepassRewardsQueryVariables = Exact<{
	id?: InputMaybe<Scalars['String']>
}>

export type GetBattlepassRewardsQuery = {
	readonly __typename?: 'query_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotQuery'
		readonly rewards?: ReadonlyArray<{
			readonly __typename?: 'BattlepassReward'
			readonly available: number
			readonly cid?: string | null
			readonly chainId?: string | null
			readonly description?: string | null
			readonly id: number
			readonly level?: number | null
			readonly name?: string | null
			readonly points?: number | null
			readonly total: number
			readonly battlepassId: number
		} | null> | null
	} | null
}

export type GetBattlepassUsersQueryVariables = Exact<{
	id?: InputMaybe<Scalars['String']>
}>

export type GetBattlepassUsersQuery = {
	readonly __typename?: 'query_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotQuery'
		readonly battlepasses?: ReadonlyArray<{
			readonly __typename?: 'Battlepass'
			readonly members?: ReadonlyArray<{
				readonly __typename?: 'BattlepassMember'
				readonly identity: { readonly __typename?: 'BattlepassIdentity'; readonly uuid: string }
			} | null> | null
		} | null> | null
	} | null
}

export type GetBattlepassNameQueryVariables = Exact<{
	id?: InputMaybe<Scalars['String']>
}>

export type GetBattlepassNameQuery = {
	readonly __typename?: 'query_root'
	readonly battlepass: ReadonlyArray<{
		readonly __typename?: 'battlepass'
		readonly name: string
		readonly cid: string
	}>
}

export type GetBattlepassQuestsQueryVariables = Exact<{
	id?: InputMaybe<Scalars['String']>
}>

export type GetBattlepassQuestsQuery = {
	readonly __typename?: 'query_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotQuery'
		readonly quests?: ReadonlyArray<{
			readonly __typename?: 'BattlepassQuest'
			readonly name?: string | null
			readonly description?: string | null
			readonly battlepassId: number
			readonly channelId?: string | null
			readonly guildId?: string | null
			readonly twitterId?: string | null
			readonly id: number
			readonly maxDaily?: number | null
			readonly points: number
			readonly quantity: number
			readonly repeat: boolean
			readonly source: Source
			readonly type: ActivityType
			readonly link?: string | null
		} | null> | null
	} | null
}

export type GetAchievementsSubscriptionVariables = Exact<{
	uuid?: InputMaybe<Scalars['uuid']>
	id?: InputMaybe<Scalars['bpchar']>
}>

export type GetAchievementsSubscription = {
	readonly __typename?: 'subscription_root'
	readonly QuestProgresses: ReadonlyArray<{
		readonly __typename?: 'QuestProgresses'
		readonly progress: any
		readonly questId?: number | null
		readonly identityId?: number | null
		readonly Quest?: {
			readonly __typename?: 'Quests'
			readonly name?: string | null
			readonly points?: number | null
		} | null
	}>
}

export type GetBattlepassAchievementsQueryVariables = Exact<{
	id?: InputMaybe<Scalars['String']>
	uuid?: InputMaybe<Scalars['String']>
}>

export type GetBattlepassAchievementsQuery = {
	readonly __typename?: 'query_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotQuery'
		readonly progresses?: ReadonlyArray<{
			readonly __typename?: 'BattlepassQuestProgress'
			readonly progress: number
			readonly questId: number
		} | null> | null
	} | null
}

export type GetBattlepassForUserQueryVariables = Exact<{
	uuid: Scalars['String']
}>

export type GetBattlepassForUserQuery = {
	readonly __typename?: 'query_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotQuery'
		readonly identities?: ReadonlyArray<{
			readonly __typename?: 'BattlepassIdentity'
			readonly uuid: string
			readonly members?: ReadonlyArray<{
				readonly __typename?: 'BattlepassMember'
				readonly premium: boolean
				readonly battlepass: { readonly __typename?: 'Battlepass'; readonly chainId: string }
			} | null> | null
		} | null> | null
	} | null
}

export type GetLeaderboardQueryVariables = Exact<{
	id?: InputMaybe<Scalars['String']>
}>

export type GetLeaderboardQuery = {
	readonly __typename?: 'query_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotQuery'
		readonly points?: ReadonlyArray<{
			readonly __typename?: 'BattlepassPoint'
			readonly points: number
			readonly quests: number
			readonly identityUuid?: string | null
			readonly identity: {
				readonly __typename?: 'BattlepassIdentity'
				readonly twitter?: string | null
				readonly discord?: string | null
				readonly name?: string | null
			}
		} | null> | null
	} | null
}

export type GetLeaderboardAchievementsQueryVariables = Exact<{
	id?: InputMaybe<Scalars['String']>
	uuid?: InputMaybe<Scalars['String']>
}>

export type GetLeaderboardAchievementsQuery = {
	readonly __typename?: 'query_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotQuery'
		readonly reward_claims?: ReadonlyArray<{
			readonly __typename?: 'BattlepassRewardClaim'
			readonly reward: {
				readonly __typename?: 'BattlepassReward'
				readonly cid?: string | null
				readonly description?: string | null
				readonly name?: string | null
				readonly chainId?: string | null
			}
		} | null> | null
	} | null
}

export type ScoreSubscriptionVariables = Exact<{
	id?: InputMaybe<Scalars['bpchar']>
	uuid?: InputMaybe<Scalars['uuid']>
}>

export type ScoreSubscription = {
	readonly __typename?: 'subscription_root'
	readonly BattlepassParticipants: ReadonlyArray<{
		readonly __typename?: 'BattlepassParticipants'
		readonly premium?: boolean | null
		readonly points: number
		readonly passChainId?: any | null
		readonly status: any
	}>
}

export type GetScoreQueryVariables = Exact<{
	id?: InputMaybe<Scalars['String']>
	uuid?: InputMaybe<Scalars['String']>
}>

export type GetScoreQuery = {
	readonly __typename?: 'query_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotQuery'
		readonly points?: ReadonlyArray<{
			readonly __typename?: 'BattlepassPoint'
			readonly points: number
			readonly quests: number
		} | null> | null
	} | null
}

export type LevelsSubscriptionVariables = Exact<{
	id?: InputMaybe<Scalars['bpchar']>
}>

export type LevelsSubscription = {
	readonly __typename?: 'subscription_root'
	readonly BattlepassLevels: ReadonlyArray<{
		readonly __typename?: 'BattlepassLevels'
		readonly level: number
		readonly name?: string | null
		readonly points: number
		readonly totalPoints: number
	}>
}

export type GetLevelsQueryVariables = Exact<{
	id?: InputMaybe<Scalars['String']>
}>

export type GetLevelsQuery = {
	readonly __typename?: 'query_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotQuery'
		readonly levels?: ReadonlyArray<{
			readonly __typename?: 'BattlepassLevel'
			readonly level: number
			readonly name?: string | null
			readonly points: number
			readonly totalPoints: number
		} | null> | null
	} | null
}

export type ActiveBattlepassByIdQueryVariables = Exact<{
	id: Scalars['String']
}>

export type ActiveBattlepassByIdQuery = {
	readonly __typename?: 'query_root'
	readonly battlepassBot?: {
		readonly __typename?: 'battlepassBotQuery'
		readonly battlepasses?: ReadonlyArray<{
			readonly __typename?: 'Battlepass'
			readonly id: number
			readonly orgId: string
			readonly chainId: string
		} | null> | null
	} | null
	readonly battlepass: ReadonlyArray<{
		readonly __typename?: 'battlepass'
		readonly id: string
		readonly organization?: { readonly __typename?: 'organization'; readonly id: string } | null
	}>
}

export type BattlepassSubscriptionVariables = Exact<{
	id: Scalars['bpchar']
}>

export type BattlepassSubscription = {
	readonly __typename?: 'subscription_root'
	readonly Battlepasses: ReadonlyArray<{
		readonly __typename?: 'Battlepasses'
		readonly id: number
		readonly name?: string | null
		readonly joinable: boolean
		readonly active: boolean
		readonly chainId: any
		readonly cid?: string | null
		readonly createdAt: any
		readonly endDate?: any | null
		readonly finalized: boolean
		readonly freeClaimed: number
		readonly freePasses: number
		readonly orgId: any
		readonly premiumPasses?: number | null
		readonly premiumClaimed: number
		readonly price?: number | null
		readonly season?: number | null
		readonly startDate?: any | null
		readonly totalJoined: number
		readonly updatedAt: any
	}>
}

export type ActiveBattlepassSubscriptionVariables = Exact<{ [key: string]: never }>

export type ActiveBattlepassSubscription = {
	readonly __typename?: 'subscription_root'
	readonly battlepass: ReadonlyArray<{
		readonly __typename?: 'battlepass'
		readonly id: string
		readonly name: string
		readonly price: any
		readonly season: string
		readonly state: string
		readonly cid: string
		readonly organization?: {
			readonly __typename?: 'organization'
			readonly id: string
			readonly name: string
			readonly header: string
			readonly logo: string
			readonly state: string
		} | null
	}>
}

export type SuccessfulCampaignByOrganizationIdSubscriptionVariables = Exact<{
	orgId: Scalars['String']
}>

export type SuccessfulCampaignByOrganizationIdSubscription = {
	readonly __typename?: 'subscription_root'
	readonly campaign: ReadonlyArray<{ readonly __typename?: 'campaign'; readonly id: string; readonly name: string }>
}

export type CampaignContributorsSubscriptionVariables = Exact<{
	address: Scalars['String']
}>

export type CampaignContributorsSubscription = {
	readonly __typename?: 'subscription_root'
	readonly campaign_contributor: ReadonlyArray<{
		readonly __typename?: 'campaign_contributor'
		readonly id: string
		readonly contributed: any
		readonly campaign?: {
			readonly __typename?: 'campaign'
			readonly name: string
			readonly title: string
			readonly header: string
			readonly expiry: number
			readonly created_at_block: number
			readonly token_symbol?: string | null
			readonly state: string
			readonly target: any
			readonly campaign_contributors_aggregate: {
				readonly __typename?: 'campaign_contributor_aggregate'
				readonly aggregate?: {
					readonly __typename?: 'campaign_contributor_aggregate_fields'
					readonly count: number
					readonly sum?: {
						readonly __typename?: 'campaign_contributor_sum_fields'
						readonly contributed?: any | null
					} | null
				} | null
			}
			readonly organization?: { readonly __typename?: 'organization'; readonly name: string } | null
		} | null
	}>
}

export type CampaignSubscriptionVariables = Exact<{
	address?: InputMaybe<Scalars['String']>
}>

export type CampaignSubscription = {
	readonly __typename?: 'subscription_root'
	readonly campaign: ReadonlyArray<{
		readonly __typename?: 'campaign'
		readonly id: string
		readonly target: any
		readonly state: string
		readonly expiry: number
		readonly token_symbol?: string | null
		readonly title: string
		readonly name: string
		readonly header: string
		readonly logo: string
		readonly campaign_contributors_aggregate: {
			readonly __typename?: 'campaign_contributor_aggregate'
			readonly aggregate?: {
				readonly __typename?: 'campaign_contributor_aggregate_fields'
				readonly count: number
				readonly sum?: {
					readonly __typename?: 'campaign_contributor_sum_fields'
					readonly contributed?: any | null
				} | null
			} | null
		}
		readonly organization?: {
			readonly __typename?: 'organization'
			readonly id: string
			readonly name: string
			readonly logo: string
			readonly pay_currency: string
		} | null
	}>
}

export type CampaignByOrganizationIdSubscriptionVariables = Exact<{
	orgId: Scalars['String']
}>

export type CampaignByOrganizationIdSubscription = {
	readonly __typename?: 'subscription_root'
	readonly campaign: ReadonlyArray<{
		readonly __typename?: 'campaign'
		readonly id: string
		readonly target: any
		readonly state: string
		readonly expiry: number
		readonly token_symbol?: string | null
		readonly title: string
		readonly name: string
		readonly header: string
		readonly logo: string
		readonly campaign_contributors_aggregate: {
			readonly __typename?: 'campaign_contributor_aggregate'
			readonly aggregate?: {
				readonly __typename?: 'campaign_contributor_aggregate_fields'
				readonly count: number
				readonly sum?: {
					readonly __typename?: 'campaign_contributor_sum_fields'
					readonly contributed?: any | null
				} | null
			} | null
		}
		readonly organization?: {
			readonly __typename?: 'organization'
			readonly id: string
			readonly name: string
			readonly logo: string
			readonly pay_currency: string
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
		readonly __typename?: 'campaign'
		readonly id: string
		readonly expiry: number
		readonly target: any
		readonly deposit: any
		readonly state: string
		readonly protocol: string
		readonly token_symbol?: string | null
		readonly description: string
		readonly header: string
		readonly name: string
		readonly markdown: string
		readonly campaign_contributors_aggregate: {
			readonly __typename?: 'campaign_contributor_aggregate'
			readonly aggregate?: {
				readonly __typename?: 'campaign_contributor_aggregate_fields'
				readonly count: number
				readonly sum?: {
					readonly __typename?: 'campaign_contributor_sum_fields'
					readonly contributed?: any | null
				} | null
			} | null
		}
		readonly userContributedCount: {
			readonly __typename?: 'campaign_contributor_aggregate'
			readonly aggregate?: {
				readonly __typename?: 'campaign_contributor_aggregate_fields'
				readonly count: number
			} | null
		}
		readonly organization?: {
			readonly __typename?: 'organization'
			readonly id: string
			readonly creator: string
		} | null
	}>
}

export type CampaignsPaginationSubscriptionVariables = Exact<{
	limit?: InputMaybe<Scalars['Int']>
	filters?: InputMaybe<ReadonlyArray<Campaign_Bool_Exp> | Campaign_Bool_Exp>
	order_by?: InputMaybe<ReadonlyArray<Campaign_Order_By> | Campaign_Order_By>
}>

export type CampaignsPaginationSubscription = {
	readonly __typename?: 'subscription_root'
	readonly campaign: ReadonlyArray<{
		readonly __typename?: 'campaign'
		readonly id: string
		readonly target: any
		readonly state: string
		readonly expiry: number
		readonly token_symbol?: string | null
		readonly title: string
		readonly name: string
		readonly header: string
		readonly logo: string
		readonly campaign_contributors_aggregate: {
			readonly __typename?: 'campaign_contributor_aggregate'
			readonly aggregate?: {
				readonly __typename?: 'campaign_contributor_aggregate_fields'
				readonly count: number
				readonly sum?: {
					readonly __typename?: 'campaign_contributor_sum_fields'
					readonly contributed?: any | null
				} | null
			} | null
		}
		readonly organization?: {
			readonly __typename?: 'organization'
			readonly id: string
			readonly name: string
			readonly logo: string
			readonly pay_currency: string
		} | null
	}>
}

export type CampaignsPaginationCountSubscriptionVariables = Exact<{
	filters?: InputMaybe<ReadonlyArray<Campaign_Bool_Exp> | Campaign_Bool_Exp>
}>

export type CampaignsPaginationCountSubscription = {
	readonly __typename?: 'subscription_root'
	readonly campaign_aggregate: {
		readonly __typename?: 'campaign_aggregate'
		readonly aggregate?: { readonly __typename?: 'campaign_aggregate_fields'; readonly count: number } | null
	}
}

export type ProposalsByOrganizationIdSubscriptionVariables = Exact<{
	orgId: Scalars['String']
}>

export type ProposalsByOrganizationIdSubscription = {
	readonly __typename?: 'subscription_root'
	readonly proposal: ReadonlyArray<{
		readonly __typename?: 'proposal'
		readonly id: string
		readonly creator: string
		readonly state: string
		readonly start: number
		readonly created_at_block: number
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
		readonly __typename?: 'proposal'
		readonly id: string
		readonly type: string
		readonly state: string
		readonly created_at_block: number
		readonly start: number
		readonly expiry: number
		readonly name: string
		readonly description: string
		readonly identity?: {
			readonly __typename?: 'identity'
			readonly id: string
			readonly display_name?: string | null
		} | null
		readonly voting?: {
			readonly __typename?: 'voting'
			readonly proposal_voters: ReadonlyArray<{
				readonly __typename?: 'proposal_voter'
				readonly voted: boolean
				readonly identity?: {
					readonly __typename?: 'identity'
					readonly id: string
					readonly display_name?: string | null
				} | null
			}>
		} | null
	}>
}

export type GetOrganizationsForPrimeSubscriptionVariables = Exact<{
	id: Scalars['String']
}>

export type GetOrganizationsForPrimeSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'organization'
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
		readonly __typename?: 'organization'
		readonly id: string
		readonly organization_members: ReadonlyArray<{
			readonly __typename?: 'organization_member'
			readonly address: string
			readonly state: string
		}>
	}>
}

export type TotalActiveSubscriptionVariables = Exact<{ [key: string]: never }>

export type TotalActiveSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organization_aggregate: {
		readonly __typename?: 'organization_aggregate'
		readonly aggregate?: { readonly __typename?: 'organization_aggregate_fields'; readonly count: number } | null
	}
}

export type TotalSubscriptionVariables = Exact<{ [key: string]: never }>

export type TotalSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organization_aggregate: {
		readonly __typename?: 'organization_aggregate'
		readonly aggregate?: { readonly __typename?: 'organization_aggregate_fields'; readonly count: number } | null
	}
}

export type TotalOrganizationsQueryVariables = Exact<{ [key: string]: never }>

export type TotalOrganizationsQuery = {
	readonly __typename?: 'query_root'
	readonly organization_aggregate: {
		readonly __typename?: 'organization_aggregate'
		readonly aggregate?: { readonly __typename?: 'organization_aggregate_fields'; readonly count: number } | null
	}
}

export type OrganizationsPaginationCountSubscriptionVariables = Exact<{
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
		readonly name: string
		readonly description: string
		readonly logo: string
		readonly header: string
		readonly access_model: string
		readonly creator: string
		readonly state: string
		readonly organization_members: ReadonlyArray<{
			readonly __typename?: 'organization_member'
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
		readonly __typename?: 'organization'
		readonly id: string
		readonly name: string
		readonly slug: string
		readonly state: string
	}>
}

export type GetOrganizationByIdQueryVariables = Exact<{
	id: Scalars['String']
}>

export type GetOrganizationByIdQuery = {
	readonly __typename?: 'query_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'organization'
		readonly id: string
		readonly name: string
		readonly slug: string
		readonly state: string
	}>
}

export type OrganizationByIdSubscriptionVariables = Exact<{
	orgId: Scalars['String']
}>

export type OrganizationByIdSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'organization'
		readonly access_model: string
		readonly creator: string
		readonly created_at_block: number
		readonly fee_model: string
		readonly gov_currency: string
		readonly id: string
		readonly member_limit: number
		readonly pay_currency: string
		readonly prime: string
		readonly treasury: string
		readonly type: string
		readonly state: string
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
		readonly organization_members: ReadonlyArray<{
			readonly __typename?: 'organization_member'
			readonly address: string
			readonly state: string
			readonly identity?: {
				readonly __typename?: 'identity'
				readonly id: string
				readonly email?: string | null
				readonly display_name?: string | null
			} | null
		}>
		readonly organization_members_aggregate: {
			readonly __typename?: 'organization_member_aggregate'
			readonly aggregate?: {
				readonly __typename?: 'organization_member_aggregate_fields'
				readonly count: number
			} | null
		}
		readonly campaigns_aggregate: {
			readonly __typename?: 'campaign_aggregate'
			readonly aggregate?: { readonly __typename?: 'campaign_aggregate_fields'; readonly count: number } | null
			readonly nodes: ReadonlyArray<{
				readonly __typename?: 'campaign'
				readonly id: string
				readonly state: string
			}>
		}
		readonly proposals_aggregate: {
			readonly __typename?: 'proposal_aggregate'
			readonly nodes: ReadonlyArray<{
				readonly __typename?: 'proposal'
				readonly id: string
				readonly type: string
			}>
			readonly aggregate?: { readonly __typename?: 'proposal_aggregate_fields'; readonly count: number } | null
		}
	}>
}

export type OrganizationsByAccountSubscriptionVariables = Exact<{
	address: Scalars['String']
}>

export type OrganizationsByAccountSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'organization'
		readonly id: string
		readonly name: string
		readonly description: string
		readonly creator: string
		readonly prime: string
		readonly member_limit: number
		readonly membership_fee?: any | null
		readonly access_model: string
		readonly deposit: any
		readonly slug: string
		readonly logo: string
		readonly state: string
		readonly organization_members_aggregate: {
			readonly __typename?: 'organization_member_aggregate'
			readonly aggregate?: {
				readonly __typename?: 'organization_member_aggregate_fields'
				readonly count: number
			} | null
		}
		readonly organization_members: ReadonlyArray<{
			readonly __typename?: 'organization_member'
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
	readonly identity_by_pk?: {
		readonly __typename?: 'identity'
		readonly id: string
		readonly email?: string | null
		readonly display_name?: string | null
		readonly image?: string | null
		readonly legal_name?: string | null
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
	readonly ChainInfo: ReadonlyArray<{ readonly __typename?: 'ChainInfo'; readonly blockNumber: any }>
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
		readonly PROPOSAL_MIN_EXPIRY_IN_SECONDS?: string | null
		readonly CAMPAIGN_MIN_EXPIRY_IN_SECONDS?: string | null
	}
}

export type ApiProviderConfigQueryVariables = Exact<{ [key: string]: never }>

export type ApiProviderConfigQuery = {
	readonly __typename?: 'query_root'
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
		readonly ORGANIZATION_PAGE_SHOW_FILTERS: boolean
		readonly ORGANIZATION_PAGE_SHOW_SEARCH: boolean
		readonly ORGANIZATION_PAGE_SHOW_SORT: boolean
	}
}

export type UpdateSessionMutationVariables = Exact<{
	address: Scalars['String']
}>

export type UpdateSessionMutation = { readonly __typename?: 'mutation_root'; readonly updateSession: boolean }

export type SidebarSubscriptionVariables = Exact<{
	address: Scalars['String']
}>

export type SidebarSubscription = {
	readonly __typename?: 'subscription_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'organization'
		readonly id: string
		readonly logo: string
		readonly name: string
	}>
}

export const BalanceByAddressDocument = gql`
	subscription BalanceByAddress($address: String!) {
		Balance(where: { address: { _eq: $address } }) {
			id
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
		historical_balance(where: { address: { _eq: $address }, currency_id: { _eq: $symbol } }) {
			id
			block
			free
			reserved
			total
			currency_id
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
		rmrkNfts(address: $owner) {
			id
			metadata
			sn
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
export const CreateQuestDocument = gql`
	mutation CreateQuest {
		battlepassBot {
			quest(battlepass: "", daily: false, points: 10, quantity: 10, source: discord, type: comment) {
				id
			}
		}
	}
`
export type CreateQuestMutationFn = Apollo.MutationFunction<CreateQuestMutation, CreateQuestMutationVariables>

/**
 * __useCreateQuestMutation__
 *
 * To run a mutation, you first call `useCreateQuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestMutation, { data, loading, error }] = useCreateQuestMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateQuestMutation(
	baseOptions?: Apollo.MutationHookOptions<CreateQuestMutation, CreateQuestMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<CreateQuestMutation, CreateQuestMutationVariables>(CreateQuestDocument, options)
}
export type CreateQuestMutationHookResult = ReturnType<typeof useCreateQuestMutation>
export type CreateQuestMutationResult = Apollo.MutationResult<CreateQuestMutation>
export type CreateQuestMutationOptions = Apollo.BaseMutationOptions<CreateQuestMutation, CreateQuestMutationVariables>
export const PaymentDocument = gql`
	mutation Payment($token: String!, $bpid: String!, $uuid: String!, $txid: String!) {
		battlepassBot {
			processPayment(securityToken: $token, battlepass: $bpid, identityUuid: $uuid, paymentToken: $txid) {
				battlepass
				identityUuid
				paymentToken
			}
		}
	}
`
export type PaymentMutationFn = Apollo.MutationFunction<PaymentMutation, PaymentMutationVariables>

/**
 * __usePaymentMutation__
 *
 * To run a mutation, you first call `usePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paymentMutation, { data, loading, error }] = usePaymentMutation({
 *   variables: {
 *      token: // value for 'token'
 *      bpid: // value for 'bpid'
 *      uuid: // value for 'uuid'
 *      txid: // value for 'txid'
 *   },
 * });
 */
export function usePaymentMutation(
	baseOptions?: Apollo.MutationHookOptions<PaymentMutation, PaymentMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<PaymentMutation, PaymentMutationVariables>(PaymentDocument, options)
}
export type PaymentMutationHookResult = ReturnType<typeof usePaymentMutation>
export type PaymentMutationResult = Apollo.MutationResult<PaymentMutation>
export type PaymentMutationOptions = Apollo.BaseMutationOptions<PaymentMutation, PaymentMutationVariables>
export const ClaimRewardDocument = gql`
	mutation ClaimReward($battlepass: String!, $uuid: String!, $reward: String!) {
		battlepassBot {
			claimReward(battlepass: $battlepass, identityUuid: $uuid, reward: $reward) {
				id
				syncStatus
			}
		}
	}
`
export type ClaimRewardMutationFn = Apollo.MutationFunction<ClaimRewardMutation, ClaimRewardMutationVariables>

/**
 * __useClaimRewardMutation__
 *
 * To run a mutation, you first call `useClaimRewardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClaimRewardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [claimRewardMutation, { data, loading, error }] = useClaimRewardMutation({
 *   variables: {
 *      battlepass: // value for 'battlepass'
 *      uuid: // value for 'uuid'
 *      reward: // value for 'reward'
 *   },
 * });
 */
export function useClaimRewardMutation(
	baseOptions?: Apollo.MutationHookOptions<ClaimRewardMutation, ClaimRewardMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<ClaimRewardMutation, ClaimRewardMutationVariables>(ClaimRewardDocument, options)
}
export type ClaimRewardMutationHookResult = ReturnType<typeof useClaimRewardMutation>
export type ClaimRewardMutationResult = Apollo.MutationResult<ClaimRewardMutation>
export type ClaimRewardMutationOptions = Apollo.BaseMutationOptions<ClaimRewardMutation, ClaimRewardMutationVariables>
export const ClaimBattlepassPremiumDocument = gql`
	mutation ClaimBattlepassPremium($bid: String!, $uid: String!, $pid: String!, $sid: String!) {
		battlepassBot {
			processPayment(battlepass: $bid, identityUuid: $uid, paymentToken: $pid, securityToken: $sid) {
				identityUuid
			}
		}
	}
`
export type ClaimBattlepassPremiumMutationFn = Apollo.MutationFunction<
	ClaimBattlepassPremiumMutation,
	ClaimBattlepassPremiumMutationVariables
>

/**
 * __useClaimBattlepassPremiumMutation__
 *
 * To run a mutation, you first call `useClaimBattlepassPremiumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClaimBattlepassPremiumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [claimBattlepassPremiumMutation, { data, loading, error }] = useClaimBattlepassPremiumMutation({
 *   variables: {
 *      bid: // value for 'bid'
 *      uid: // value for 'uid'
 *      pid: // value for 'pid'
 *      sid: // value for 'sid'
 *   },
 * });
 */
export function useClaimBattlepassPremiumMutation(
	baseOptions?: Apollo.MutationHookOptions<ClaimBattlepassPremiumMutation, ClaimBattlepassPremiumMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<ClaimBattlepassPremiumMutation, ClaimBattlepassPremiumMutationVariables>(
		ClaimBattlepassPremiumDocument,
		options,
	)
}
export type ClaimBattlepassPremiumMutationHookResult = ReturnType<typeof useClaimBattlepassPremiumMutation>
export type ClaimBattlepassPremiumMutationResult = Apollo.MutationResult<ClaimBattlepassPremiumMutation>
export type ClaimBattlepassPremiumMutationOptions = Apollo.BaseMutationOptions<
	ClaimBattlepassPremiumMutation,
	ClaimBattlepassPremiumMutationVariables
>
export const PayBattlepassDocument = gql`
	mutation PayBattlepass($battlepass: String!, $uuid: String!) {
		battlepassBot {
			joinPremium(battlepass: $battlepass, identityUuid: $uuid) {
				status
				premium
			}
		}
	}
`
export type PayBattlepassMutationFn = Apollo.MutationFunction<PayBattlepassMutation, PayBattlepassMutationVariables>

/**
 * __usePayBattlepassMutation__
 *
 * To run a mutation, you first call `usePayBattlepassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePayBattlepassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [payBattlepassMutation, { data, loading, error }] = usePayBattlepassMutation({
 *   variables: {
 *      battlepass: // value for 'battlepass'
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function usePayBattlepassMutation(
	baseOptions?: Apollo.MutationHookOptions<PayBattlepassMutation, PayBattlepassMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<PayBattlepassMutation, PayBattlepassMutationVariables>(PayBattlepassDocument, options)
}
export type PayBattlepassMutationHookResult = ReturnType<typeof usePayBattlepassMutation>
export type PayBattlepassMutationResult = Apollo.MutationResult<PayBattlepassMutation>
export type PayBattlepassMutationOptions = Apollo.BaseMutationOptions<
	PayBattlepassMutation,
	PayBattlepassMutationVariables
>
export const JoinBattlepassDocument = gql`
	mutation JoinBattlepass($battlepass: String!, $uuid: String!) {
		battlepassBot {
			join(battlepass: $battlepass, identityUuid: $uuid) {
				id
			}
		}
	}
`
export type JoinBattlepassMutationFn = Apollo.MutationFunction<JoinBattlepassMutation, JoinBattlepassMutationVariables>

/**
 * __useJoinBattlepassMutation__
 *
 * To run a mutation, you first call `useJoinBattlepassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinBattlepassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinBattlepassMutation, { data, loading, error }] = useJoinBattlepassMutation({
 *   variables: {
 *      battlepass: // value for 'battlepass'
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useJoinBattlepassMutation(
	baseOptions?: Apollo.MutationHookOptions<JoinBattlepassMutation, JoinBattlepassMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<JoinBattlepassMutation, JoinBattlepassMutationVariables>(JoinBattlepassDocument, options)
}
export type JoinBattlepassMutationHookResult = ReturnType<typeof useJoinBattlepassMutation>
export type JoinBattlepassMutationResult = Apollo.MutationResult<JoinBattlepassMutation>
export type JoinBattlepassMutationOptions = Apollo.BaseMutationOptions<
	JoinBattlepassMutation,
	JoinBattlepassMutationVariables
>
export const JoinPremiumBattlepassDocument = gql`
	mutation JoinPremiumBattlepass($battlepass: String!, $uuid: String!) {
		battlepassBot {
			joinPremium(battlepass: $battlepass, identityUuid: $uuid) {
				id
			}
		}
	}
`
export type JoinPremiumBattlepassMutationFn = Apollo.MutationFunction<
	JoinPremiumBattlepassMutation,
	JoinPremiumBattlepassMutationVariables
>

/**
 * __useJoinPremiumBattlepassMutation__
 *
 * To run a mutation, you first call `useJoinPremiumBattlepassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinPremiumBattlepassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinPremiumBattlepassMutation, { data, loading, error }] = useJoinPremiumBattlepassMutation({
 *   variables: {
 *      battlepass: // value for 'battlepass'
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useJoinPremiumBattlepassMutation(
	baseOptions?: Apollo.MutationHookOptions<JoinPremiumBattlepassMutation, JoinPremiumBattlepassMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<JoinPremiumBattlepassMutation, JoinPremiumBattlepassMutationVariables>(
		JoinPremiumBattlepassDocument,
		options,
	)
}
export type JoinPremiumBattlepassMutationHookResult = ReturnType<typeof useJoinPremiumBattlepassMutation>
export type JoinPremiumBattlepassMutationResult = Apollo.MutationResult<JoinPremiumBattlepassMutation>
export type JoinPremiumBattlepassMutationOptions = Apollo.BaseMutationOptions<
	JoinPremiumBattlepassMutation,
	JoinPremiumBattlepassMutationVariables
>
export const CreateBattlepassLevelsDocument = gql`
	mutation CreateBattlepassLevels($id: String!, $levels: [Level!]!) {
		battlepassBot {
			levels(battlepass: $id, levels: $levels) {
				id
				battlepassId
			}
		}
	}
`
export type CreateBattlepassLevelsMutationFn = Apollo.MutationFunction<
	CreateBattlepassLevelsMutation,
	CreateBattlepassLevelsMutationVariables
>

/**
 * __useCreateBattlepassLevelsMutation__
 *
 * To run a mutation, you first call `useCreateBattlepassLevelsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBattlepassLevelsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBattlepassLevelsMutation, { data, loading, error }] = useCreateBattlepassLevelsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      levels: // value for 'levels'
 *   },
 * });
 */
export function useCreateBattlepassLevelsMutation(
	baseOptions?: Apollo.MutationHookOptions<CreateBattlepassLevelsMutation, CreateBattlepassLevelsMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<CreateBattlepassLevelsMutation, CreateBattlepassLevelsMutationVariables>(
		CreateBattlepassLevelsDocument,
		options,
	)
}
export type CreateBattlepassLevelsMutationHookResult = ReturnType<typeof useCreateBattlepassLevelsMutation>
export type CreateBattlepassLevelsMutationResult = Apollo.MutationResult<CreateBattlepassLevelsMutation>
export type CreateBattlepassLevelsMutationOptions = Apollo.BaseMutationOptions<
	CreateBattlepassLevelsMutation,
	CreateBattlepassLevelsMutationVariables
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
export const GetBattlepassesForOrganizationDocument = gql`
	query GetBattlepassesForOrganization($id: String) {
		battlepassBot {
			battlepasses(where: { orgChainId: $id }) {
				active
				chainId
				cid
				name
				orgId
			}
		}
	}
`

/**
 * __useGetBattlepassesForOrganizationQuery__
 *
 * To run a query within a React component, call `useGetBattlepassesForOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBattlepassesForOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBattlepassesForOrganizationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBattlepassesForOrganizationQuery(
	baseOptions?: Apollo.QueryHookOptions<
		GetBattlepassesForOrganizationQuery,
		GetBattlepassesForOrganizationQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetBattlepassesForOrganizationQuery, GetBattlepassesForOrganizationQueryVariables>(
		GetBattlepassesForOrganizationDocument,
		options,
	)
}
export function useGetBattlepassesForOrganizationLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetBattlepassesForOrganizationQuery,
		GetBattlepassesForOrganizationQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetBattlepassesForOrganizationQuery, GetBattlepassesForOrganizationQueryVariables>(
		GetBattlepassesForOrganizationDocument,
		options,
	)
}
export type GetBattlepassesForOrganizationQueryHookResult = ReturnType<typeof useGetBattlepassesForOrganizationQuery>
export type GetBattlepassesForOrganizationLazyQueryHookResult = ReturnType<
	typeof useGetBattlepassesForOrganizationLazyQuery
>
export type GetBattlepassesForOrganizationQueryResult = Apollo.QueryResult<
	GetBattlepassesForOrganizationQuery,
	GetBattlepassesForOrganizationQueryVariables
>
export const GetAllBattlepassesDocument = gql`
	subscription GetAllBattlepasses($id: bpchar) {
		Battlepasses {
			chainId
			name
			active
			orgId
		}
	}
`

/**
 * __useGetAllBattlepassesSubscription__
 *
 * To run a query within a React component, call `useGetAllBattlepassesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBattlepassesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBattlepassesSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAllBattlepassesSubscription(
	baseOptions?: Apollo.SubscriptionHookOptions<
		GetAllBattlepassesSubscription,
		GetAllBattlepassesSubscriptionVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<GetAllBattlepassesSubscription, GetAllBattlepassesSubscriptionVariables>(
		GetAllBattlepassesDocument,
		options,
	)
}
export type GetAllBattlepassesSubscriptionHookResult = ReturnType<typeof useGetAllBattlepassesSubscription>
export type GetAllBattlepassesSubscriptionResult = Apollo.SubscriptionResult<GetAllBattlepassesSubscription>
export const RewardsDocument = gql`
	subscription Rewards($id: bpchar, $uuid: uuid) {
		BattlepassRewards(where: { Battlepass: { chainId: { _eq: $id } } }, order_by: { points: asc }) {
			available
			total
			syncStatus
			points
			name
			level
			description
			createdAt
			cid
			chainId
			RewardClaims(where: { BattlepassParticipant: { Identity: { uuid: { _eq: $uuid } } } }) {
				syncStatus
				rewardId
				nftId
			}
		}
	}
`

/**
 * __useRewardsSubscription__
 *
 * To run a query within a React component, call `useRewardsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRewardsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRewardsSubscription({
 *   variables: {
 *      id: // value for 'id'
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useRewardsSubscription(
	baseOptions?: Apollo.SubscriptionHookOptions<RewardsSubscription, RewardsSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<RewardsSubscription, RewardsSubscriptionVariables>(RewardsDocument, options)
}
export type RewardsSubscriptionHookResult = ReturnType<typeof useRewardsSubscription>
export type RewardsSubscriptionResult = Apollo.SubscriptionResult<RewardsSubscription>
export const GetBattlepassRewardsDocument = gql`
	query GetBattlepassRewards($id: String) {
		battlepassBot {
			rewards(where: { battlepassChainId: $id }) {
				available
				cid
				chainId
				description
				id
				level
				name
				points
				total
				battlepassId
			}
		}
	}
`

/**
 * __useGetBattlepassRewardsQuery__
 *
 * To run a query within a React component, call `useGetBattlepassRewardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBattlepassRewardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBattlepassRewardsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBattlepassRewardsQuery(
	baseOptions?: Apollo.QueryHookOptions<GetBattlepassRewardsQuery, GetBattlepassRewardsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetBattlepassRewardsQuery, GetBattlepassRewardsQueryVariables>(
		GetBattlepassRewardsDocument,
		options,
	)
}
export function useGetBattlepassRewardsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetBattlepassRewardsQuery, GetBattlepassRewardsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetBattlepassRewardsQuery, GetBattlepassRewardsQueryVariables>(
		GetBattlepassRewardsDocument,
		options,
	)
}
export type GetBattlepassRewardsQueryHookResult = ReturnType<typeof useGetBattlepassRewardsQuery>
export type GetBattlepassRewardsLazyQueryHookResult = ReturnType<typeof useGetBattlepassRewardsLazyQuery>
export type GetBattlepassRewardsQueryResult = Apollo.QueryResult<
	GetBattlepassRewardsQuery,
	GetBattlepassRewardsQueryVariables
>
export const GetBattlepassUsersDocument = gql`
	query GetBattlepassUsers($id: String) {
		battlepassBot {
			battlepasses(where: { chainId: $id }) {
				members {
					identity {
						uuid
					}
				}
			}
		}
	}
`

/**
 * __useGetBattlepassUsersQuery__
 *
 * To run a query within a React component, call `useGetBattlepassUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBattlepassUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBattlepassUsersQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBattlepassUsersQuery(
	baseOptions?: Apollo.QueryHookOptions<GetBattlepassUsersQuery, GetBattlepassUsersQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetBattlepassUsersQuery, GetBattlepassUsersQueryVariables>(
		GetBattlepassUsersDocument,
		options,
	)
}
export function useGetBattlepassUsersLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetBattlepassUsersQuery, GetBattlepassUsersQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetBattlepassUsersQuery, GetBattlepassUsersQueryVariables>(
		GetBattlepassUsersDocument,
		options,
	)
}
export type GetBattlepassUsersQueryHookResult = ReturnType<typeof useGetBattlepassUsersQuery>
export type GetBattlepassUsersLazyQueryHookResult = ReturnType<typeof useGetBattlepassUsersLazyQuery>
export type GetBattlepassUsersQueryResult = Apollo.QueryResult<
	GetBattlepassUsersQuery,
	GetBattlepassUsersQueryVariables
>
export const GetBattlepassNameDocument = gql`
	query GetBattlepassName($id: String) {
		battlepass(where: { id: { _eq: $id } }) {
			name
			cid
		}
	}
`

/**
 * __useGetBattlepassNameQuery__
 *
 * To run a query within a React component, call `useGetBattlepassNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBattlepassNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBattlepassNameQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBattlepassNameQuery(
	baseOptions?: Apollo.QueryHookOptions<GetBattlepassNameQuery, GetBattlepassNameQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetBattlepassNameQuery, GetBattlepassNameQueryVariables>(GetBattlepassNameDocument, options)
}
export function useGetBattlepassNameLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetBattlepassNameQuery, GetBattlepassNameQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetBattlepassNameQuery, GetBattlepassNameQueryVariables>(
		GetBattlepassNameDocument,
		options,
	)
}
export type GetBattlepassNameQueryHookResult = ReturnType<typeof useGetBattlepassNameQuery>
export type GetBattlepassNameLazyQueryHookResult = ReturnType<typeof useGetBattlepassNameLazyQuery>
export type GetBattlepassNameQueryResult = Apollo.QueryResult<GetBattlepassNameQuery, GetBattlepassNameQueryVariables>
export const GetBattlepassQuestsDocument = gql`
	query GetBattlepassQuests($id: String) {
		battlepassBot {
			quests(where: { battlepassChainId: $id }) {
				name
				description
				battlepassId
				channelId
				guildId
				twitterId
				id
				maxDaily
				points
				quantity
				repeat
				source
				type
				link
			}
		}
	}
`

/**
 * __useGetBattlepassQuestsQuery__
 *
 * To run a query within a React component, call `useGetBattlepassQuestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBattlepassQuestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBattlepassQuestsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBattlepassQuestsQuery(
	baseOptions?: Apollo.QueryHookOptions<GetBattlepassQuestsQuery, GetBattlepassQuestsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetBattlepassQuestsQuery, GetBattlepassQuestsQueryVariables>(
		GetBattlepassQuestsDocument,
		options,
	)
}
export function useGetBattlepassQuestsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetBattlepassQuestsQuery, GetBattlepassQuestsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetBattlepassQuestsQuery, GetBattlepassQuestsQueryVariables>(
		GetBattlepassQuestsDocument,
		options,
	)
}
export type GetBattlepassQuestsQueryHookResult = ReturnType<typeof useGetBattlepassQuestsQuery>
export type GetBattlepassQuestsLazyQueryHookResult = ReturnType<typeof useGetBattlepassQuestsLazyQuery>
export type GetBattlepassQuestsQueryResult = Apollo.QueryResult<
	GetBattlepassQuestsQuery,
	GetBattlepassQuestsQueryVariables
>
export const GetAchievementsDocument = gql`
	subscription GetAchievements($uuid: uuid, $id: bpchar) {
		QuestProgresses(
			where: { Identity: { uuid: { _eq: $uuid } }, Quest: { Battlepass: { chainId: { _eq: $id } } } }
		) {
			progress
			questId
			identityId
			Quest {
				name
				points
			}
		}
	}
`

/**
 * __useGetAchievementsSubscription__
 *
 * To run a query within a React component, call `useGetAchievementsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetAchievementsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAchievementsSubscription({
 *   variables: {
 *      uuid: // value for 'uuid'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAchievementsSubscription(
	baseOptions?: Apollo.SubscriptionHookOptions<GetAchievementsSubscription, GetAchievementsSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<GetAchievementsSubscription, GetAchievementsSubscriptionVariables>(
		GetAchievementsDocument,
		options,
	)
}
export type GetAchievementsSubscriptionHookResult = ReturnType<typeof useGetAchievementsSubscription>
export type GetAchievementsSubscriptionResult = Apollo.SubscriptionResult<GetAchievementsSubscription>
export const GetBattlepassAchievementsDocument = gql`
	query GetBattlepassAchievements($id: String, $uuid: String) {
		battlepassBot {
			progresses(where: { battlepassChainId: $id, identityUuid: $uuid }) {
				progress
				questId
			}
		}
	}
`

/**
 * __useGetBattlepassAchievementsQuery__
 *
 * To run a query within a React component, call `useGetBattlepassAchievementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBattlepassAchievementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBattlepassAchievementsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetBattlepassAchievementsQuery(
	baseOptions?: Apollo.QueryHookOptions<GetBattlepassAchievementsQuery, GetBattlepassAchievementsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetBattlepassAchievementsQuery, GetBattlepassAchievementsQueryVariables>(
		GetBattlepassAchievementsDocument,
		options,
	)
}
export function useGetBattlepassAchievementsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetBattlepassAchievementsQuery, GetBattlepassAchievementsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetBattlepassAchievementsQuery, GetBattlepassAchievementsQueryVariables>(
		GetBattlepassAchievementsDocument,
		options,
	)
}
export type GetBattlepassAchievementsQueryHookResult = ReturnType<typeof useGetBattlepassAchievementsQuery>
export type GetBattlepassAchievementsLazyQueryHookResult = ReturnType<typeof useGetBattlepassAchievementsLazyQuery>
export type GetBattlepassAchievementsQueryResult = Apollo.QueryResult<
	GetBattlepassAchievementsQuery,
	GetBattlepassAchievementsQueryVariables
>
export const GetBattlepassForUserDocument = gql`
	query GetBattlepassForUser($uuid: String!) {
		battlepassBot {
			identities(where: { uuid: $uuid }) {
				members {
					battlepass {
						chainId
					}
					premium
				}
				uuid
			}
		}
	}
`

/**
 * __useGetBattlepassForUserQuery__
 *
 * To run a query within a React component, call `useGetBattlepassForUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBattlepassForUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBattlepassForUserQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetBattlepassForUserQuery(
	baseOptions: Apollo.QueryHookOptions<GetBattlepassForUserQuery, GetBattlepassForUserQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetBattlepassForUserQuery, GetBattlepassForUserQueryVariables>(
		GetBattlepassForUserDocument,
		options,
	)
}
export function useGetBattlepassForUserLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetBattlepassForUserQuery, GetBattlepassForUserQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetBattlepassForUserQuery, GetBattlepassForUserQueryVariables>(
		GetBattlepassForUserDocument,
		options,
	)
}
export type GetBattlepassForUserQueryHookResult = ReturnType<typeof useGetBattlepassForUserQuery>
export type GetBattlepassForUserLazyQueryHookResult = ReturnType<typeof useGetBattlepassForUserLazyQuery>
export type GetBattlepassForUserQueryResult = Apollo.QueryResult<
	GetBattlepassForUserQuery,
	GetBattlepassForUserQueryVariables
>
export const GetLeaderboardDocument = gql`
	query GetLeaderboard($id: String) {
		battlepassBot {
			points(where: { battlepassChainId: $id }) {
				points
				quests
				identityUuid
				identity {
					twitter
					discord
					name
				}
			}
		}
	}
`

/**
 * __useGetLeaderboardQuery__
 *
 * To run a query within a React component, call `useGetLeaderboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLeaderboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLeaderboardQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLeaderboardQuery(
	baseOptions?: Apollo.QueryHookOptions<GetLeaderboardQuery, GetLeaderboardQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetLeaderboardQuery, GetLeaderboardQueryVariables>(GetLeaderboardDocument, options)
}
export function useGetLeaderboardLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetLeaderboardQuery, GetLeaderboardQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetLeaderboardQuery, GetLeaderboardQueryVariables>(GetLeaderboardDocument, options)
}
export type GetLeaderboardQueryHookResult = ReturnType<typeof useGetLeaderboardQuery>
export type GetLeaderboardLazyQueryHookResult = ReturnType<typeof useGetLeaderboardLazyQuery>
export type GetLeaderboardQueryResult = Apollo.QueryResult<GetLeaderboardQuery, GetLeaderboardQueryVariables>
export const GetLeaderboardAchievementsDocument = gql`
	query GetLeaderboardAchievements($id: String, $uuid: String) {
		battlepassBot {
			reward_claims(where: { identityUuid: $uuid, battlepassChainId: $id }) {
				reward {
					cid
					description
					name
					chainId
				}
			}
		}
	}
`

/**
 * __useGetLeaderboardAchievementsQuery__
 *
 * To run a query within a React component, call `useGetLeaderboardAchievementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLeaderboardAchievementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLeaderboardAchievementsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetLeaderboardAchievementsQuery(
	baseOptions?: Apollo.QueryHookOptions<GetLeaderboardAchievementsQuery, GetLeaderboardAchievementsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetLeaderboardAchievementsQuery, GetLeaderboardAchievementsQueryVariables>(
		GetLeaderboardAchievementsDocument,
		options,
	)
}
export function useGetLeaderboardAchievementsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetLeaderboardAchievementsQuery,
		GetLeaderboardAchievementsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetLeaderboardAchievementsQuery, GetLeaderboardAchievementsQueryVariables>(
		GetLeaderboardAchievementsDocument,
		options,
	)
}
export type GetLeaderboardAchievementsQueryHookResult = ReturnType<typeof useGetLeaderboardAchievementsQuery>
export type GetLeaderboardAchievementsLazyQueryHookResult = ReturnType<typeof useGetLeaderboardAchievementsLazyQuery>
export type GetLeaderboardAchievementsQueryResult = Apollo.QueryResult<
	GetLeaderboardAchievementsQuery,
	GetLeaderboardAchievementsQueryVariables
>
export const ScoreDocument = gql`
	subscription Score($id: bpchar, $uuid: uuid) {
		BattlepassParticipants(where: { Battlepass: { chainId: { _eq: $id } }, Identity: { uuid: { _eq: $uuid } } }) {
			premium
			points
			passChainId
			status
		}
	}
`

/**
 * __useScoreSubscription__
 *
 * To run a query within a React component, call `useScoreSubscription` and pass it any options that fit your needs.
 * When your component renders, `useScoreSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScoreSubscription({
 *   variables: {
 *      id: // value for 'id'
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useScoreSubscription(
	baseOptions?: Apollo.SubscriptionHookOptions<ScoreSubscription, ScoreSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<ScoreSubscription, ScoreSubscriptionVariables>(ScoreDocument, options)
}
export type ScoreSubscriptionHookResult = ReturnType<typeof useScoreSubscription>
export type ScoreSubscriptionResult = Apollo.SubscriptionResult<ScoreSubscription>
export const GetScoreDocument = gql`
	query GetScore($id: String, $uuid: String) {
		battlepassBot {
			points(where: { battlepassChainId: $id, identityUuid: $uuid }) {
				points
				quests
			}
		}
	}
`

/**
 * __useGetScoreQuery__
 *
 * To run a query within a React component, call `useGetScoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScoreQuery({
 *   variables: {
 *      id: // value for 'id'
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetScoreQuery(baseOptions?: Apollo.QueryHookOptions<GetScoreQuery, GetScoreQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetScoreQuery, GetScoreQueryVariables>(GetScoreDocument, options)
}
export function useGetScoreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetScoreQuery, GetScoreQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetScoreQuery, GetScoreQueryVariables>(GetScoreDocument, options)
}
export type GetScoreQueryHookResult = ReturnType<typeof useGetScoreQuery>
export type GetScoreLazyQueryHookResult = ReturnType<typeof useGetScoreLazyQuery>
export type GetScoreQueryResult = Apollo.QueryResult<GetScoreQuery, GetScoreQueryVariables>
export const LevelsDocument = gql`
	subscription Levels($id: bpchar) {
		BattlepassLevels(where: { Battlepass: { chainId: { _eq: $id } } }) {
			level
			name
			points
			totalPoints
		}
	}
`

/**
 * __useLevelsSubscription__
 *
 * To run a query within a React component, call `useLevelsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLevelsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLevelsSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLevelsSubscription(
	baseOptions?: Apollo.SubscriptionHookOptions<LevelsSubscription, LevelsSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<LevelsSubscription, LevelsSubscriptionVariables>(LevelsDocument, options)
}
export type LevelsSubscriptionHookResult = ReturnType<typeof useLevelsSubscription>
export type LevelsSubscriptionResult = Apollo.SubscriptionResult<LevelsSubscription>
export const GetLevelsDocument = gql`
	query GetLevels($id: String) {
		battlepassBot {
			levels(where: { battlepassChainId: $id }) {
				level
				name
				points
				totalPoints
			}
		}
	}
`

/**
 * __useGetLevelsQuery__
 *
 * To run a query within a React component, call `useGetLevelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLevelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLevelsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLevelsQuery(baseOptions?: Apollo.QueryHookOptions<GetLevelsQuery, GetLevelsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<GetLevelsQuery, GetLevelsQueryVariables>(GetLevelsDocument, options)
}
export function useGetLevelsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetLevelsQuery, GetLevelsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<GetLevelsQuery, GetLevelsQueryVariables>(GetLevelsDocument, options)
}
export type GetLevelsQueryHookResult = ReturnType<typeof useGetLevelsQuery>
export type GetLevelsLazyQueryHookResult = ReturnType<typeof useGetLevelsLazyQuery>
export type GetLevelsQueryResult = Apollo.QueryResult<GetLevelsQuery, GetLevelsQueryVariables>
export const ActiveBattlepassByIdDocument = gql`
	query ActiveBattlepassById($id: String!) {
		battlepassBot {
			battlepasses(where: { chainId: $id }) {
				id
				orgId
				chainId
			}
		}
		battlepass(where: { organization: { id: { _eq: $id } } }) {
			id
			organization {
				id
			}
		}
	}
`

/**
 * __useActiveBattlepassByIdQuery__
 *
 * To run a query within a React component, call `useActiveBattlepassByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveBattlepassByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveBattlepassByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useActiveBattlepassByIdQuery(
	baseOptions: Apollo.QueryHookOptions<ActiveBattlepassByIdQuery, ActiveBattlepassByIdQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<ActiveBattlepassByIdQuery, ActiveBattlepassByIdQueryVariables>(
		ActiveBattlepassByIdDocument,
		options,
	)
}
export function useActiveBattlepassByIdLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<ActiveBattlepassByIdQuery, ActiveBattlepassByIdQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<ActiveBattlepassByIdQuery, ActiveBattlepassByIdQueryVariables>(
		ActiveBattlepassByIdDocument,
		options,
	)
}
export type ActiveBattlepassByIdQueryHookResult = ReturnType<typeof useActiveBattlepassByIdQuery>
export type ActiveBattlepassByIdLazyQueryHookResult = ReturnType<typeof useActiveBattlepassByIdLazyQuery>
export type ActiveBattlepassByIdQueryResult = Apollo.QueryResult<
	ActiveBattlepassByIdQuery,
	ActiveBattlepassByIdQueryVariables
>
export const BattlepassDocument = gql`
	subscription Battlepass($id: bpchar!) {
		Battlepasses(where: { chainId: { _eq: $id } }) {
			id
			name
			joinable
			active
			chainId
			cid
			createdAt
			endDate
			finalized
			freeClaimed
			freePasses
			orgId
			premiumPasses
			premiumClaimed
			price
			season
			startDate
			totalJoined
			updatedAt
		}
	}
`

/**
 * __useBattlepassSubscription__
 *
 * To run a query within a React component, call `useBattlepassSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBattlepassSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBattlepassSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBattlepassSubscription(
	baseOptions: Apollo.SubscriptionHookOptions<BattlepassSubscription, BattlepassSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<BattlepassSubscription, BattlepassSubscriptionVariables>(BattlepassDocument, options)
}
export type BattlepassSubscriptionHookResult = ReturnType<typeof useBattlepassSubscription>
export type BattlepassSubscriptionResult = Apollo.SubscriptionResult<BattlepassSubscription>
export const ActiveBattlepassDocument = gql`
	subscription ActiveBattlepass {
		battlepass(where: { state: { _eq: "ACTIVE" }, organization: { state: { _eq: "Active" } } }) {
			id
			name
			organization {
				id
				name
				header
				logo
				state
			}
			price
			season
			state
			cid
		}
	}
`

/**
 * __useActiveBattlepassSubscription__
 *
 * To run a query within a React component, call `useActiveBattlepassSubscription` and pass it any options that fit your needs.
 * When your component renders, `useActiveBattlepassSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveBattlepassSubscription({
 *   variables: {
 *   },
 * });
 */
export function useActiveBattlepassSubscription(
	baseOptions?: Apollo.SubscriptionHookOptions<ActiveBattlepassSubscription, ActiveBattlepassSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<ActiveBattlepassSubscription, ActiveBattlepassSubscriptionVariables>(
		ActiveBattlepassDocument,
		options,
	)
}
export type ActiveBattlepassSubscriptionHookResult = ReturnType<typeof useActiveBattlepassSubscription>
export type ActiveBattlepassSubscriptionResult = Apollo.SubscriptionResult<ActiveBattlepassSubscription>
export const SuccessfulCampaignByOrganizationIdDocument = gql`
	subscription SuccessfulCampaignByOrganizationId($orgId: String!) {
		campaign(where: { organization_id: { _eq: $orgId }, state: { _eq: "Success" } }) {
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
		campaign_contributor(where: { identity: { address: { _eq: $address } } }) {
			id
			contributed
			campaign {
				name
				title
				header
				campaign_contributors_aggregate {
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
				created_at_block
				token_symbol
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
		campaign(where: { admin_identity_id: { _eq: $address } }) {
			id
			target
			state
			expiry
			token_symbol
			title
			name
			header
			logo
			campaign_contributors_aggregate {
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
				pay_currency
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
		campaign(where: { organization_id: { _eq: $orgId } }, order_by: { expiry: asc }) {
			id
			target
			state
			expiry
			token_symbol
			title
			name
			header
			logo
			campaign_contributors_aggregate {
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
				pay_currency
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
			token_symbol
			description
			header
			name
			markdown
			campaign_contributors_aggregate {
				aggregate {
					count(distinct: true)
					sum {
						contributed
					}
				}
			}
			userContributedCount: campaign_contributors_aggregate(where: { address: { _eq: $address } }) {
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
	subscription CampaignsPagination($limit: Int, $filters: [campaign_bool_exp!], $order_by: [campaign_order_by!]) {
		campaign(limit: $limit, where: { _or: $filters }, order_by: $order_by) {
			id
			target
			state
			expiry
			token_symbol
			title
			name
			header
			logo
			campaign_contributors_aggregate {
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
				pay_currency
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
 *      order_by: // value for 'order_by'
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
	subscription CampaignsPaginationCount($filters: [campaign_bool_exp!]) {
		campaign_aggregate(where: { _or: $filters }) {
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
		proposal(where: { organization_id: { _eq: $orgId } }) {
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
			organization_members(where: { state: { _eq: $state } }) {
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
export const TotalActiveDocument = gql`
	subscription TotalActive {
		organization_aggregate(where: { state: { _eq: "Active" } }) {
			aggregate {
				count
			}
		}
	}
`

/**
 * __useTotalActiveSubscription__
 *
 * To run a query within a React component, call `useTotalActiveSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTotalActiveSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalActiveSubscription({
 *   variables: {
 *   },
 * });
 */
export function useTotalActiveSubscription(
	baseOptions?: Apollo.SubscriptionHookOptions<TotalActiveSubscription, TotalActiveSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<TotalActiveSubscription, TotalActiveSubscriptionVariables>(
		TotalActiveDocument,
		options,
	)
}
export type TotalActiveSubscriptionHookResult = ReturnType<typeof useTotalActiveSubscription>
export type TotalActiveSubscriptionResult = Apollo.SubscriptionResult<TotalActiveSubscription>
export const TotalDocument = gql`
	subscription Total {
		organization_aggregate {
			aggregate {
				count
			}
		}
	}
`

/**
 * __useTotalSubscription__
 *
 * To run a query within a React component, call `useTotalSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTotalSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalSubscription({
 *   variables: {
 *   },
 * });
 */
export function useTotalSubscription(
	baseOptions?: Apollo.SubscriptionHookOptions<TotalSubscription, TotalSubscriptionVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSubscription<TotalSubscription, TotalSubscriptionVariables>(TotalDocument, options)
}
export type TotalSubscriptionHookResult = ReturnType<typeof useTotalSubscription>
export type TotalSubscriptionResult = Apollo.SubscriptionResult<TotalSubscription>
export const TotalOrganizationsDocument = gql`
	query TotalOrganizations {
		organization_aggregate(where: { state: { _eq: "Active" } }) {
			aggregate {
				count
			}
		}
	}
`

/**
 * __useTotalOrganizationsQuery__
 *
 * To run a query within a React component, call `useTotalOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalOrganizationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTotalOrganizationsQuery(
	baseOptions?: Apollo.QueryHookOptions<TotalOrganizationsQuery, TotalOrganizationsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<TotalOrganizationsQuery, TotalOrganizationsQueryVariables>(
		TotalOrganizationsDocument,
		options,
	)
}
export function useTotalOrganizationsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<TotalOrganizationsQuery, TotalOrganizationsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<TotalOrganizationsQuery, TotalOrganizationsQueryVariables>(
		TotalOrganizationsDocument,
		options,
	)
}
export type TotalOrganizationsQueryHookResult = ReturnType<typeof useTotalOrganizationsQuery>
export type TotalOrganizationsLazyQueryHookResult = ReturnType<typeof useTotalOrganizationsLazyQuery>
export type TotalOrganizationsQueryResult = Apollo.QueryResult<
	TotalOrganizationsQuery,
	TotalOrganizationsQueryVariables
>
export const OrganizationsPaginationCountDocument = gql`
	subscription OrganizationsPaginationCount($searchQuery: String = "%") {
		organization_aggregate(
			where: {
				state: { _eq: "Active" }
				_or: [{ name: { _ilike: $searchQuery } }, { description: { _ilike: $searchQuery } }]
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
				_or: [{ name: { _ilike: $searchQuery } }, { description: { _ilike: $searchQuery } }]
				state: { _eq: "Active" }
			}
		) {
			id
			name
			description
			logo
			header
			access_model
			creator
			state
			organization_members {
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
			state
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
			state
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
			state
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
		organization(where: { organization_members: { address: { _eq: $address } } }) {
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
			state
			organization_members_aggregate {
				aggregate {
					count
				}
			}
			organization_members(where: { address: { _eq: $address } }) {
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
		ChainInfo {
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
			ORGANIZATION_PAGE_SHOW_FILTERS
			ORGANIZATION_PAGE_SHOW_SEARCH
			ORGANIZATION_PAGE_SHOW_SORT
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
		updateSession(address: $address)
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
		organization(where: { organization_members: { address: { _eq: $address } } }) {
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
