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
	float8: any
	json: any
	numeric: any
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

/** Ordering options when selecting data from "Balance". */
export type Balance_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly balanceId?: InputMaybe<Order_By>
	readonly free?: InputMaybe<Order_By>
	readonly frozen?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly reserved?: InputMaybe<Order_By>
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

export type BattlepassBotMutation = {
	readonly __typename?: 'BattlepassBotMutation'
	readonly claimReward?: Maybe<BattlepassRewardClaim>
	readonly identity?: Maybe<BattlepassIdentity>
	readonly join?: Maybe<BattlepassMember>
	readonly joinPremium?: Maybe<BattlepassMember>
	readonly levels?: Maybe<ReadonlyArray<Maybe<BattlepassLevel>>>
	readonly processPayment?: Maybe<Payment>
	readonly provideUserToken?: Maybe<BattlepassIdentity>
	readonly quest?: Maybe<BattlepassQuest>
	readonly reward?: Maybe<BattlepassReward>
	readonly setFreePasses?: Maybe<BattlepassType>
	readonly updateBattlepass?: Maybe<BattlepassType>
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
	readonly __typename?: 'BattlepassBotQuery'
	readonly BattlepassIdentities?: Maybe<ReadonlyArray<Maybe<BattlepassIdentity>>>
	readonly BattlepassLevels?: Maybe<ReadonlyArray<Maybe<BattlepassLevel>>>
	readonly BattlepassMembers?: Maybe<ReadonlyArray<Maybe<BattlepassMember>>>
	readonly BattlepassPoints?: Maybe<ReadonlyArray<Maybe<BattlepassPoint>>>
	readonly BattlepassProgresses?: Maybe<ReadonlyArray<Maybe<BattlepassQuestProgress>>>
	readonly BattlepassQuests?: Maybe<ReadonlyArray<Maybe<BattlepassQuest>>>
	readonly BattlepassRewardClaims?: Maybe<ReadonlyArray<Maybe<BattlepassRewardClaim>>>
	readonly BattlepassRewards?: Maybe<ReadonlyArray<Maybe<BattlepassReward>>>
	readonly Battlepasses?: Maybe<ReadonlyArray<Maybe<BattlepassType>>>
}

export type BattlepassBotQueryBattlepassIdentitiesArgs = {
	where?: InputMaybe<IdentityFilter>
}

export type BattlepassBotQueryBattlepassLevelsArgs = {
	where?: InputMaybe<LevelsFilter>
}

export type BattlepassBotQueryBattlepassMembersArgs = {
	where?: InputMaybe<MemberFilter>
}

export type BattlepassBotQueryBattlepassPointsArgs = {
	where?: InputMaybe<PointsFilter>
}

export type BattlepassBotQueryBattlepassProgressesArgs = {
	where?: InputMaybe<ProgressFilter>
}

export type BattlepassBotQueryBattlepassQuestsArgs = {
	where?: InputMaybe<QuestFilter>
}

export type BattlepassBotQueryBattlepassRewardClaimsArgs = {
	where?: InputMaybe<RewardClaimFilter>
}

export type BattlepassBotQueryBattlepassRewardsArgs = {
	where?: InputMaybe<RewardsFilter>
}

export type BattlepassBotQueryBattlepassesArgs = {
	where?: InputMaybe<BattlepassesFilter>
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
	readonly battlepass: BattlepassType
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

/** order by stddev() on columns of table "BattlepassLevels" */
export type BattlepassLevels_Stddev_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "BattlepassLevels" */
export type BattlepassLevels_Stddev_Pop_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
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

/** order by sum() on columns of table "BattlepassLevels" */
export type BattlepassLevels_Sum_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "BattlepassLevels" */
export type BattlepassLevels_Var_Pop_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "BattlepassLevels" */
export type BattlepassLevels_Var_Samp_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly totalPoints?: InputMaybe<Order_By>
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
	readonly battlepass: BattlepassType
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
	/** An array relationship */
	readonly RewardClaims: ReadonlyArray<RewardClaims>
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
export type BattlepassParticipantsRewardClaimsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<RewardClaims_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<RewardClaims_Order_By>>
	where?: InputMaybe<RewardClaims_Bool_Exp>
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
	readonly RewardClaims?: InputMaybe<RewardClaims_Bool_Exp>
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

/** order by stddev() on columns of table "BattlepassParticipants" */
export type BattlepassParticipants_Stddev_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "BattlepassParticipants" */
export type BattlepassParticipants_Stddev_Pop_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
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

/** order by sum() on columns of table "BattlepassParticipants" */
export type BattlepassParticipants_Sum_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "BattlepassParticipants" */
export type BattlepassParticipants_Var_Pop_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "BattlepassParticipants" */
export type BattlepassParticipants_Var_Samp_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
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
	readonly battlepass: BattlepassType
	readonly battlepassId: Scalars['Int']
	readonly identity: BattlepassIdentity
	readonly identityId?: Maybe<Scalars['Int']>
	readonly identityUuid?: Maybe<Scalars['String']>
	readonly points: Scalars['Int']
	readonly quests: Scalars['Int']
}

export type BattlepassQuest = {
	readonly __typename?: 'BattlepassQuest'
	readonly battlepass: BattlepassType
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
	readonly battlepass: BattlepassType
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

/** order by stddev() on columns of table "BattlepassRewards" */
export type BattlepassRewards_Stddev_Order_By = {
	readonly available?: InputMaybe<Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly total?: InputMaybe<Order_By>
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

/** order by sum() on columns of table "BattlepassRewards" */
export type BattlepassRewards_Sum_Order_By = {
	readonly available?: InputMaybe<Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly total?: InputMaybe<Order_By>
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

/** order by var_samp() on columns of table "BattlepassRewards" */
export type BattlepassRewards_Var_Samp_Order_By = {
	readonly available?: InputMaybe<Order_By>
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly level?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly total?: InputMaybe<Order_By>
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

export type BattlepassType = {
	readonly __typename?: 'BattlepassType'
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

/** columns and relationships of "Battlepasses" */
export type Battlepasses = {
	readonly __typename?: 'Battlepasses'
	/** An array relationship */
	readonly BattlepassLevels: ReadonlyArray<BattlepassLevels>
	/** An array relationship */
	readonly BattlepassParticipants: ReadonlyArray<BattlepassParticipants>
	/** An array relationship */
	readonly BattlepassRewards: ReadonlyArray<BattlepassRewards>
	/** An array relationship */
	readonly Quests: ReadonlyArray<Quests>
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
export type BattlepassesBattlepassParticipantsArgs = {
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
export type BattlepassesQuestsArgs = {
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

/** Boolean expression to filter rows from the table "Battlepasses". All fields are combined with a logical 'AND'. */
export type Battlepasses_Bool_Exp = {
	readonly BattlepassLevels?: InputMaybe<BattlepassLevels_Bool_Exp>
	readonly BattlepassParticipants?: InputMaybe<BattlepassParticipants_Bool_Exp>
	readonly BattlepassRewards?: InputMaybe<BattlepassRewards_Bool_Exp>
	readonly Quests?: InputMaybe<Quests_Bool_Exp>
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

/** Ordering options when selecting data from "ChainActivities". */
export type ChainActivities_Order_By = {
	readonly activityType?: InputMaybe<Order_By>
	readonly address?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
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

/** Ordering options when selecting data from "ChainInfo". */
export type ChainInfo_Order_By = {
	readonly blockNumber?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** select columns of table "ChainInfo" */
export enum ChainInfo_Select_Column {
	/** column name */
	BlockNumber = 'blockNumber',
	/** column name */
	Id = 'id',
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

/** Ordering options when selecting data from "ChainStatuses". */
export type ChainStatuses_Order_By = {
	readonly blockNumber?: InputMaybe<Order_By>
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
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

/** order by max() on columns of table "CompletedQuests" */
export type CompletedQuests_Max_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly guildId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
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

/** order by stddev() on columns of table "CompletedQuests" */
export type CompletedQuests_Stddev_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "CompletedQuests" */
export type CompletedQuests_Stddev_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
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

/** order by sum() on columns of table "CompletedQuests" */
export type CompletedQuests_Sum_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "CompletedQuests" */
export type CompletedQuests_Var_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "CompletedQuests" */
export type CompletedQuests_Var_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
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

export type DisplayValueEntryCountry = {
	readonly __typename?: 'DisplayValueEntryCountry'
	readonly key: Scalars['String']
	readonly text: Scalars['String']
	readonly value: Scalars['String']
}

export type DisplayValueEntryNumber = {
	readonly __typename?: 'DisplayValueEntryNumber'
	readonly key: Scalars['String']
	readonly text: Scalars['String']
	readonly value: Scalars['Int']
}

export type DisplayValueEntryString = {
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

export type Features = {
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

/** columns and relationships of "Identities" */
export type Identities = {
	readonly __typename?: 'Identities'
	/** An array relationship */
	readonly BattlepassParticipants: ReadonlyArray<BattlepassParticipants>
	/** An array relationship */
	readonly CompletedQuests: ReadonlyArray<CompletedQuests>
	/** An array relationship */
	readonly QuestProgresses: ReadonlyArray<QuestProgresses>
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
export type IdentitiesCompletedQuestsArgs = {
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

/** Boolean expression to filter rows from the table "Identities". All fields are combined with a logical 'AND'. */
export type Identities_Bool_Exp = {
	readonly BattlepassParticipants?: InputMaybe<BattlepassParticipants_Bool_Exp>
	readonly CompletedQuests?: InputMaybe<CompletedQuests_Bool_Exp>
	readonly QuestProgresses?: InputMaybe<QuestProgresses_Bool_Exp>
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

/** Ordering options when selecting data from "Identities". */
export type Identities_Order_By = {
	readonly BattlepassParticipants_aggregate?: InputMaybe<BattlepassParticipants_Aggregate_Order_By>
	readonly CompletedQuests_aggregate?: InputMaybe<CompletedQuests_Aggregate_Order_By>
	readonly QuestProgresses_aggregate?: InputMaybe<QuestProgresses_Aggregate_Order_By>
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

/** order by max() on columns of table "Payments" */
export type Payments_Max_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly paymentToken?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
}

/** order by min() on columns of table "Payments" */
export type Payments_Min_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly paymentToken?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
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

/** order by stddev() on columns of table "Payments" */
export type Payments_Stddev_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "Payments" */
export type Payments_Stddev_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
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

/** order by sum() on columns of table "Payments" */
export type Payments_Sum_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "Payments" */
export type Payments_Var_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "Payments" */
export type Payments_Var_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
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

/** order by max() on columns of table "QuestProgresses" */
export type QuestProgresses_Max_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
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

/** order by stddev() on columns of table "QuestProgresses" */
export type QuestProgresses_Stddev_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "QuestProgresses" */
export type QuestProgresses_Stddev_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
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

/** order by sum() on columns of table "QuestProgresses" */
export type QuestProgresses_Sum_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "QuestProgresses" */
export type QuestProgresses_Var_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "QuestProgresses" */
export type QuestProgresses_Var_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly identityId?: InputMaybe<Order_By>
	readonly progress?: InputMaybe<Order_By>
	readonly questId?: InputMaybe<Order_By>
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
	/** An array relationship */
	readonly QuestProgresses: ReadonlyArray<QuestProgresses>
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
export type QuestsQuestProgressesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<QuestProgresses_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<QuestProgresses_Order_By>>
	where?: InputMaybe<QuestProgresses_Bool_Exp>
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
	readonly QuestProgresses?: InputMaybe<QuestProgresses_Bool_Exp>
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

/** order by stddev() on columns of table "Quests" */
export type Quests_Stddev_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly maxDaily?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly quantity?: InputMaybe<Order_By>
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

/** order by sum() on columns of table "Quests" */
export type Quests_Sum_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly maxDaily?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly quantity?: InputMaybe<Order_By>
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

/** order by var_samp() on columns of table "Quests" */
export type Quests_Var_Samp_Order_By = {
	readonly battlepassId?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly maxDaily?: InputMaybe<Order_By>
	readonly points?: InputMaybe<Order_By>
	readonly quantity?: InputMaybe<Order_By>
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

/** order by stddev() on columns of table "RewardClaims" */
export type RewardClaims_Stddev_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "RewardClaims" */
export type RewardClaims_Stddev_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
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

/** order by sum() on columns of table "RewardClaims" */
export type RewardClaims_Sum_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "RewardClaims" */
export type RewardClaims_Var_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "RewardClaims" */
export type RewardClaims_Var_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly nftId?: InputMaybe<Order_By>
	readonly participantId?: InputMaybe<Order_By>
	readonly rewardId?: InputMaybe<Order_By>
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

/** columns and relationships of "TwitterSearches" */
export type TwitterSearches = {
	readonly __typename?: 'TwitterSearches'
	readonly createdAt: Scalars['timestamptz']
	readonly executedAt: Scalars['timestamptz']
	readonly id: Scalars['Int']
	readonly query?: Maybe<Scalars['String']>
	readonly updatedAt: Scalars['timestamptz']
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

/** Ordering options when selecting data from "TwitterSearches". */
export type TwitterSearches_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly executedAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly query?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
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

/** columns and relationships of "TwitterUsers" */
export type TwitterUsers = {
	readonly __typename?: 'TwitterUsers'
	readonly createdAt: Scalars['timestamptz']
	readonly id: Scalars['Int']
	readonly twitterId: Scalars['String']
	readonly updatedAt: Scalars['timestamptz']
	readonly username: Scalars['String']
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

/** Ordering options when selecting data from "TwitterUsers". */
export type TwitterUsers_Order_By = {
	readonly createdAt?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly twitterId?: InputMaybe<Order_By>
	readonly updatedAt?: InputMaybe<Order_By>
	readonly username?: InputMaybe<Order_By>
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
	/** An object relationship */
	readonly balance?: Maybe<Historical_Balance>
	readonly balance_id?: Maybe<Scalars['String']>
	readonly id: Scalars['String']
	/** An object relationship */
	readonly identity?: Maybe<Identity>
	readonly identity_id?: Maybe<Scalars['String']>
}

/** order by aggregate values of table "account_balance" */
export type Account_Balance_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Account_Balance_Max_Order_By>
	readonly min?: InputMaybe<Account_Balance_Min_Order_By>
}

/** Boolean expression to filter rows from the table "account_balance". All fields are combined with a logical 'AND'. */
export type Account_Balance_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Account_Balance_Bool_Exp>>
	readonly _not?: InputMaybe<Account_Balance_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Account_Balance_Bool_Exp>>
	readonly balance?: InputMaybe<Historical_Balance_Bool_Exp>
	readonly balance_id?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly identity?: InputMaybe<Identity_Bool_Exp>
	readonly identity_id?: InputMaybe<String_Comparison_Exp>
}

/** order by max() on columns of table "account_balance" */
export type Account_Balance_Max_Order_By = {
	readonly balance_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
}

/** order by min() on columns of table "account_balance" */
export type Account_Balance_Min_Order_By = {
	readonly balance_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "account_balance". */
export type Account_Balance_Order_By = {
	readonly balance?: InputMaybe<Historical_Balance_Order_By>
	readonly balance_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly identity?: InputMaybe<Identity_Order_By>
	readonly identity_id?: InputMaybe<Order_By>
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
	/** An object relationship */
	readonly creator?: Maybe<Identity>
	readonly creator_id?: Maybe<Scalars['String']>
	readonly id: Scalars['String']
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

/** aggregated selection of "battlepass" */
export type Battlepass_Aggregate = {
	readonly __typename?: 'battlepass_aggregate'
	readonly aggregate?: Maybe<Battlepass_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Battlepass>
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
	readonly cid?: InputMaybe<String_Comparison_Exp>
	readonly created_at_block?: InputMaybe<Int_Comparison_Exp>
	readonly creator?: InputMaybe<Identity_Bool_Exp>
	readonly creator_id?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly org_id?: InputMaybe<String_Comparison_Exp>
	readonly organization?: InputMaybe<Organization_Bool_Exp>
	readonly price?: InputMaybe<Numeric_Comparison_Exp>
	readonly season?: InputMaybe<String_Comparison_Exp>
	readonly state?: InputMaybe<String_Comparison_Exp>
	readonly updated_at_block?: InputMaybe<Int_Comparison_Exp>
}

/** aggregate max on columns */
export type Battlepass_Max_Fields = {
	readonly __typename?: 'battlepass_max_fields'
	readonly active_from_block?: Maybe<Scalars['Int']>
	readonly active_to_block?: Maybe<Scalars['Int']>
	readonly cid?: Maybe<Scalars['String']>
	readonly created_at_block?: Maybe<Scalars['Int']>
	readonly creator_id?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
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
	readonly id?: InputMaybe<Order_By>
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
	readonly id?: Maybe<Scalars['String']>
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
	readonly id?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly org_id?: InputMaybe<Order_By>
	readonly price?: InputMaybe<Order_By>
	readonly season?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
}

/** columns and relationships of "battlepass_nft" */
export type Battlepass_Nft = {
	readonly __typename?: 'battlepass_nft'
	/** An object relationship */
	readonly battlepass?: Maybe<Battlepass>
	readonly battlepass_id?: Maybe<Scalars['String']>
	readonly id: Scalars['String']
	/** An object relationship */
	readonly nft?: Maybe<Nft>
	readonly nft_id?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly owner?: Maybe<Identity>
	readonly owner_id?: Maybe<Scalars['String']>
}

/** aggregated selection of "battlepass_nft" */
export type Battlepass_Nft_Aggregate = {
	readonly __typename?: 'battlepass_nft_aggregate'
	readonly aggregate?: Maybe<Battlepass_Nft_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Battlepass_Nft>
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

/** Boolean expression to filter rows from the table "battlepass_nft". All fields are combined with a logical 'AND'. */
export type Battlepass_Nft_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Battlepass_Nft_Bool_Exp>>
	readonly _not?: InputMaybe<Battlepass_Nft_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Battlepass_Nft_Bool_Exp>>
	readonly battlepass?: InputMaybe<Battlepass_Bool_Exp>
	readonly battlepass_id?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly nft?: InputMaybe<Nft_Bool_Exp>
	readonly nft_id?: InputMaybe<String_Comparison_Exp>
	readonly owner?: InputMaybe<Identity_Bool_Exp>
	readonly owner_id?: InputMaybe<String_Comparison_Exp>
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

/** Ordering options when selecting data from "battlepass_nft". */
export type Battlepass_Nft_Order_By = {
	readonly battlepass?: InputMaybe<Battlepass_Order_By>
	readonly battlepass_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly nft?: InputMaybe<Nft_Order_By>
	readonly nft_id?: InputMaybe<Order_By>
	readonly owner?: InputMaybe<Identity_Order_By>
	readonly owner_id?: InputMaybe<Order_By>
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

/** Ordering options when selecting data from "battlepass". */
export type Battlepass_Order_By = {
	readonly active_from_block?: InputMaybe<Order_By>
	readonly active_to_block?: InputMaybe<Order_By>
	readonly battlepass_nfts_aggregate?: InputMaybe<Battlepass_Nft_Aggregate_Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Identity_Order_By>
	readonly creator_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly org_id?: InputMaybe<Order_By>
	readonly organization?: InputMaybe<Organization_Order_By>
	readonly price?: InputMaybe<Order_By>
	readonly season?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
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
	Id = 'id',
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
	readonly id?: InputMaybe<Scalars['String']>
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
	readonly protocol?: InputMaybe<String_Comparison_Exp>
	readonly start?: InputMaybe<Int_Comparison_Exp>
	readonly state?: InputMaybe<String_Comparison_Exp>
	readonly target?: InputMaybe<Numeric_Comparison_Exp>
	readonly title?: InputMaybe<String_Comparison_Exp>
	readonly token_name?: InputMaybe<String_Comparison_Exp>
	readonly token_symbol?: InputMaybe<String_Comparison_Exp>
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

/** Ordering options when selecting data from "chain_state". */
export type Chain_State_Order_By = {
	readonly block_number?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly timestamp?: InputMaybe<Order_By>
	readonly token_balance?: InputMaybe<Order_By>
	readonly token_holders?: InputMaybe<Order_By>
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

/** Ordering options when selecting data from "current_chain_state". */
export type Current_Chain_State_Order_By = {
	readonly block_number?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly timestamp?: InputMaybe<Order_By>
	readonly token_balance?: InputMaybe<Order_By>
	readonly token_holders?: InputMaybe<Order_By>
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
	readonly address?: InputMaybe<String_Comparison_Exp>
	readonly block?: InputMaybe<Int_Comparison_Exp>
	readonly currency_id?: InputMaybe<String_Comparison_Exp>
	readonly free?: InputMaybe<Numeric_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly reserved?: InputMaybe<Numeric_Comparison_Exp>
	readonly total?: InputMaybe<Numeric_Comparison_Exp>
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
	readonly address: Scalars['String']
	/** An array relationship */
	readonly balances: ReadonlyArray<Account_Balance>
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
export type IdentityBalancesArgs = {
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
	readonly address?: InputMaybe<String_Comparison_Exp>
	readonly balances?: InputMaybe<Account_Balance_Bool_Exp>
	readonly battlepass_nfts?: InputMaybe<Battlepass_Nft_Bool_Exp>
	readonly battlepasses?: InputMaybe<Battlepass_Bool_Exp>
	readonly campaign_contributors?: InputMaybe<Campaign_Contributor_Bool_Exp>
	readonly campaigns?: InputMaybe<Campaign_Bool_Exp>
	readonly campaignsByCreatorIdentityId?: InputMaybe<Campaign_Bool_Exp>
	readonly discord?: InputMaybe<String_Comparison_Exp>
	readonly display_name?: InputMaybe<String_Comparison_Exp>
	readonly email?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly image?: InputMaybe<String_Comparison_Exp>
	readonly legal_name?: InputMaybe<String_Comparison_Exp>
	readonly nft_collections?: InputMaybe<Nft_Collection_Bool_Exp>
	readonly organization_members?: InputMaybe<Organization_Member_Bool_Exp>
	readonly organizations?: InputMaybe<Organization_Bool_Exp>
	readonly organizationsByCreatorIdentityId?: InputMaybe<Organization_Bool_Exp>
	readonly organizationsByTreasuryIdentityId?: InputMaybe<Organization_Bool_Exp>
	readonly proposal_voters?: InputMaybe<Proposal_Voter_Bool_Exp>
	readonly proposals?: InputMaybe<Proposal_Bool_Exp>
	readonly proposalsByBeneficiaryIdentityId?: InputMaybe<Proposal_Bool_Exp>
	readonly riot?: InputMaybe<String_Comparison_Exp>
	readonly sense_entities?: InputMaybe<Sense_Entity_Bool_Exp>
	readonly twitter?: InputMaybe<String_Comparison_Exp>
	readonly web?: InputMaybe<String_Comparison_Exp>
	readonly web3name?: InputMaybe<String_Comparison_Exp>
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

/** Ordering options when selecting data from "identity". */
export type Identity_Order_By = {
	readonly address?: InputMaybe<Order_By>
	readonly balances_aggregate?: InputMaybe<Account_Balance_Aggregate_Order_By>
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

/** Boolean expression to filter rows from the table "migrations". All fields are combined with a logical 'AND'. */
export type Migrations_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Migrations_Bool_Exp>>
	readonly _not?: InputMaybe<Migrations_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Migrations_Bool_Exp>>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly timestamp?: InputMaybe<Bigint_Comparison_Exp>
}

/** Ordering options when selecting data from "migrations". */
export type Migrations_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
	readonly timestamp?: InputMaybe<Order_By>
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

/** mutation root */
export type Mutation_Root = {
	readonly __typename?: 'mutation_root'
	readonly BattlepassBot?: Maybe<BattlepassBotMutation>
	readonly singleUpload: Scalars['String']
	readonly updateSession: Scalars['Boolean']
}

/** mutation root */
export type Mutation_RootSingleUploadArgs = {
	fileStream: Scalars['Upload']
}

/** mutation root */
export type Mutation_RootUpdateSessionArgs = {
	address: Scalars['String']
}

/** columns and relationships of "nft" */
export type Nft = {
	readonly __typename?: 'nft'
	/** An array relationship */
	readonly battlepass_nfts: ReadonlyArray<Battlepass_Nft>
	/** An aggregate relationship */
	readonly battlepass_nfts_aggregate: Battlepass_Nft_Aggregate
	readonly collection_id?: Maybe<Scalars['String']>
	readonly id: Scalars['String']
	/** An object relationship */
	readonly nft_collection?: Maybe<Nft_Collection>
	/** An object relationship */
	readonly owner?: Maybe<Identity>
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

/** order by aggregate values of table "nft" */
export type Nft_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Nft_Max_Order_By>
	readonly min?: InputMaybe<Nft_Min_Order_By>
}

/** Boolean expression to filter rows from the table "nft". All fields are combined with a logical 'AND'. */
export type Nft_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Nft_Bool_Exp>>
	readonly _not?: InputMaybe<Nft_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Nft_Bool_Exp>>
	readonly battlepass_nfts?: InputMaybe<Battlepass_Nft_Bool_Exp>
	readonly collection_id?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly nft_collection?: InputMaybe<Nft_Collection_Bool_Exp>
	readonly owner?: InputMaybe<Identity_Bool_Exp>
	readonly owner_id?: InputMaybe<String_Comparison_Exp>
}

/** columns and relationships of "nft_collection" */
export type Nft_Collection = {
	readonly __typename?: 'nft_collection'
	readonly id: Scalars['String']
	readonly max?: Maybe<Scalars['Int']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadata_is_frozen?: Maybe<Scalars['Boolean']>
	/** An array relationship */
	readonly nfts: ReadonlyArray<Nft>
	/** An object relationship */
	readonly owner?: Maybe<Identity>
}

/** columns and relationships of "nft_collection" */
export type Nft_CollectionNftsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nft_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nft_Order_By>>
	where?: InputMaybe<Nft_Bool_Exp>
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

/** order by avg() on columns of table "nft_collection" */
export type Nft_Collection_Avg_Order_By = {
	readonly max?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "nft_collection". All fields are combined with a logical 'AND'. */
export type Nft_Collection_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Nft_Collection_Bool_Exp>>
	readonly _not?: InputMaybe<Nft_Collection_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Nft_Collection_Bool_Exp>>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly max?: InputMaybe<Int_Comparison_Exp>
	readonly metadata?: InputMaybe<String_Comparison_Exp>
	readonly metadata_is_frozen?: InputMaybe<Boolean_Comparison_Exp>
	readonly nfts?: InputMaybe<Nft_Bool_Exp>
	readonly owner?: InputMaybe<Identity_Bool_Exp>
}

/** order by max() on columns of table "nft_collection" */
export type Nft_Collection_Max_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
}

/** order by min() on columns of table "nft_collection" */
export type Nft_Collection_Min_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "nft_collection". */
export type Nft_Collection_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly metadata_is_frozen?: InputMaybe<Order_By>
	readonly nfts_aggregate?: InputMaybe<Nft_Aggregate_Order_By>
	readonly owner?: InputMaybe<Identity_Order_By>
}

/** select columns of table "nft_collection" */
export enum Nft_Collection_Select_Column {
	/** column name */
	Id = 'id',
	/** column name */
	Max = 'max',
	/** column name */
	Metadata = 'metadata',
	/** column name */
	MetadataIsFrozen = 'metadata_is_frozen',
}

/** order by stddev() on columns of table "nft_collection" */
export type Nft_Collection_Stddev_Order_By = {
	readonly max?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "nft_collection" */
export type Nft_Collection_Stddev_Pop_Order_By = {
	readonly max?: InputMaybe<Order_By>
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
	readonly id?: InputMaybe<Scalars['String']>
	readonly max?: InputMaybe<Scalars['Int']>
	readonly metadata?: InputMaybe<Scalars['String']>
	readonly metadata_is_frozen?: InputMaybe<Scalars['Boolean']>
}

/** order by sum() on columns of table "nft_collection" */
export type Nft_Collection_Sum_Order_By = {
	readonly max?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "nft_collection" */
export type Nft_Collection_Var_Pop_Order_By = {
	readonly max?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "nft_collection" */
export type Nft_Collection_Var_Samp_Order_By = {
	readonly max?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "nft_collection" */
export type Nft_Collection_Variance_Order_By = {
	readonly max?: InputMaybe<Order_By>
}

/** order by max() on columns of table "nft" */
export type Nft_Max_Order_By = {
	readonly collection_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly owner_id?: InputMaybe<Order_By>
}

/** order by min() on columns of table "nft" */
export type Nft_Min_Order_By = {
	readonly collection_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly owner_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "nft". */
export type Nft_Order_By = {
	readonly battlepass_nfts_aggregate?: InputMaybe<Battlepass_Nft_Aggregate_Order_By>
	readonly collection_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly nft_collection?: InputMaybe<Nft_Collection_Order_By>
	readonly owner?: InputMaybe<Identity_Order_By>
	readonly owner_id?: InputMaybe<Order_By>
}

/** select columns of table "nft" */
export enum Nft_Select_Column {
	/** column name */
	CollectionId = 'collection_id',
	/** column name */
	Id = 'id',
	/** column name */
	OwnerId = 'owner_id',
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
	readonly id?: InputMaybe<Scalars['String']>
	readonly owner_id?: InputMaybe<Scalars['String']>
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
	/** An object relationship */
	readonly creator_identity?: Maybe<Identity>
	readonly creator_identity_id?: Maybe<Scalars['String']>
	readonly deposit: Scalars['numeric']
	readonly description: Scalars['String']
	readonly email: Scalars['String']
	readonly fee_model: Scalars['String']
	readonly gov_currency: Scalars['String']
	readonly header: Scalars['String']
	readonly id: Scalars['String']
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
	/** An object relationship */
	readonly prime_identity?: Maybe<Identity>
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
	/** An object relationship */
	readonly treasury_identity?: Maybe<Identity>
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
	readonly campaigns?: InputMaybe<Campaign_Bool_Exp>
	readonly cid?: InputMaybe<String_Comparison_Exp>
	readonly created_at_block?: InputMaybe<Int_Comparison_Exp>
	readonly creator?: InputMaybe<String_Comparison_Exp>
	readonly creator_identity?: InputMaybe<Identity_Bool_Exp>
	readonly creator_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly deposit?: InputMaybe<Numeric_Comparison_Exp>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly email?: InputMaybe<String_Comparison_Exp>
	readonly fee_model?: InputMaybe<String_Comparison_Exp>
	readonly gov_currency?: InputMaybe<String_Comparison_Exp>
	readonly header?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly location?: InputMaybe<String_Comparison_Exp>
	readonly logo?: InputMaybe<String_Comparison_Exp>
	readonly member_limit?: InputMaybe<Int_Comparison_Exp>
	readonly membership_fee?: InputMaybe<Numeric_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
	readonly organization_members?: InputMaybe<Organization_Member_Bool_Exp>
	readonly pay_currency?: InputMaybe<String_Comparison_Exp>
	readonly prime?: InputMaybe<String_Comparison_Exp>
	readonly prime_identity?: InputMaybe<Identity_Bool_Exp>
	readonly prime_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly proposals?: InputMaybe<Proposal_Bool_Exp>
	readonly repo?: InputMaybe<String_Comparison_Exp>
	readonly slug?: InputMaybe<String_Comparison_Exp>
	readonly state?: InputMaybe<String_Comparison_Exp>
	readonly tags?: InputMaybe<_Text_Comparison_Exp>
	readonly treasury?: InputMaybe<String_Comparison_Exp>
	readonly treasury_identity?: InputMaybe<Identity_Bool_Exp>
	readonly treasury_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly type?: InputMaybe<String_Comparison_Exp>
	readonly updated_at_block?: InputMaybe<Int_Comparison_Exp>
	readonly url?: InputMaybe<String_Comparison_Exp>
	readonly website?: InputMaybe<String_Comparison_Exp>
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

/** Ordering options when selecting data from "organization". */
export type Organization_Order_By = {
	readonly access_model?: InputMaybe<Order_By>
	readonly battlepasses_aggregate?: InputMaybe<Battlepass_Aggregate_Order_By>
	readonly campaigns_aggregate?: InputMaybe<Campaign_Aggregate_Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity?: InputMaybe<Identity_Order_By>
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
	readonly organization_members_aggregate?: InputMaybe<Organization_Member_Aggregate_Order_By>
	readonly pay_currency?: InputMaybe<Order_By>
	readonly prime?: InputMaybe<Order_By>
	readonly prime_identity?: InputMaybe<Identity_Order_By>
	readonly prime_identity_id?: InputMaybe<Order_By>
	readonly proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>
	readonly repo?: InputMaybe<Order_By>
	readonly slug?: InputMaybe<Order_By>
	readonly state?: InputMaybe<Order_By>
	readonly tags?: InputMaybe<Order_By>
	readonly treasury?: InputMaybe<Order_By>
	readonly treasury_identity?: InputMaybe<Identity_Order_By>
	readonly treasury_identity_id?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
	readonly updated_at_block?: InputMaybe<Order_By>
	readonly url?: InputMaybe<Order_By>
	readonly website?: InputMaybe<Order_By>
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
	/** An object relationship */
	readonly beneficiary_identity?: Maybe<Identity>
	readonly beneficiary_identity_id?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly campaign?: Maybe<Campaign>
	readonly campaign_id?: Maybe<Scalars['String']>
	readonly cid: Scalars['String']
	readonly created_at_block: Scalars['Int']
	readonly creator: Scalars['String']
	/** An object relationship */
	readonly creator_identity?: Maybe<Identity>
	readonly creator_identity_id?: Maybe<Scalars['String']>
	readonly currency_id?: Maybe<Scalars['String']>
	readonly deposit: Scalars['numeric']
	readonly description: Scalars['String']
	readonly expiry: Scalars['Int']
	readonly id: Scalars['String']
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
	readonly beneficiary_identity?: InputMaybe<Identity_Bool_Exp>
	readonly beneficiary_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly campaign?: InputMaybe<Campaign_Bool_Exp>
	readonly campaign_id?: InputMaybe<String_Comparison_Exp>
	readonly cid?: InputMaybe<String_Comparison_Exp>
	readonly created_at_block?: InputMaybe<Int_Comparison_Exp>
	readonly creator?: InputMaybe<String_Comparison_Exp>
	readonly creator_identity?: InputMaybe<Identity_Bool_Exp>
	readonly creator_identity_id?: InputMaybe<String_Comparison_Exp>
	readonly currency_id?: InputMaybe<String_Comparison_Exp>
	readonly deposit?: InputMaybe<Numeric_Comparison_Exp>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly expiry?: InputMaybe<Int_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
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

/** Boolean expression to filter rows from the table "proposal_metadata". All fields are combined with a logical 'AND'. */
export type Proposal_Metadata_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Proposal_Metadata_Bool_Exp>>
	readonly _not?: InputMaybe<Proposal_Metadata_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Proposal_Metadata_Bool_Exp>>
	readonly description?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly name?: InputMaybe<String_Comparison_Exp>
}

/** Ordering options when selecting data from "proposal_metadata". */
export type Proposal_Metadata_Order_By = {
	readonly description?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly name?: InputMaybe<Order_By>
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

/** Ordering options when selecting data from "proposal". */
export type Proposal_Order_By = {
	readonly amount?: InputMaybe<Order_By>
	readonly beneficiary?: InputMaybe<Order_By>
	readonly beneficiary_identity?: InputMaybe<Identity_Order_By>
	readonly beneficiary_identity_id?: InputMaybe<Order_By>
	readonly campaign?: InputMaybe<Campaign_Order_By>
	readonly campaign_id?: InputMaybe<Order_By>
	readonly cid?: InputMaybe<Order_By>
	readonly created_at_block?: InputMaybe<Order_By>
	readonly creator?: InputMaybe<Order_By>
	readonly creator_identity?: InputMaybe<Identity_Order_By>
	readonly creator_identity_id?: InputMaybe<Order_By>
	readonly currency_id?: InputMaybe<Order_By>
	readonly deposit?: InputMaybe<Order_By>
	readonly description?: InputMaybe<Order_By>
	readonly expiry?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
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
	readonly BattlepassBot?: Maybe<BattlepassBotQuery>
	/** An array relationship */
	readonly BattlepassLevels: ReadonlyArray<BattlepassLevels>
	/** fetch data from the table: "BattlepassLevels" using primary key columns */
	readonly BattlepassLevels_by_pk?: Maybe<BattlepassLevels>
	/** An array relationship */
	readonly BattlepassParticipants: ReadonlyArray<BattlepassParticipants>
	/** fetch data from the table: "BattlepassParticipants" using primary key columns */
	readonly BattlepassParticipants_by_pk?: Maybe<BattlepassParticipants>
	/** An array relationship */
	readonly BattlepassRewards: ReadonlyArray<BattlepassRewards>
	/** fetch data from the table: "BattlepassRewards" using primary key columns */
	readonly BattlepassRewards_by_pk?: Maybe<BattlepassRewards>
	/** fetch data from the table: "Battlepasses" */
	readonly Battlepasses: ReadonlyArray<Battlepasses>
	/** fetch data from the table: "Battlepasses" using primary key columns */
	readonly Battlepasses_by_pk?: Maybe<Battlepasses>
	/** fetch data from the table: "ChainActivities" */
	readonly ChainActivities: ReadonlyArray<ChainActivities>
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
	/** fetch data from the table: "ChainStatuses" using primary key columns */
	readonly ChainStatuses_by_pk?: Maybe<ChainStatuses>
	/** An array relationship */
	readonly CompletedQuests: ReadonlyArray<CompletedQuests>
	/** fetch data from the table: "CompletedQuests" using primary key columns */
	readonly CompletedQuests_by_pk?: Maybe<CompletedQuests>
	/** fetch data from the table: "DiscordActivities" */
	readonly DiscordActivities: ReadonlyArray<DiscordActivities>
	/** fetch data from the table: "DiscordActivities" using primary key columns */
	readonly DiscordActivities_by_pk?: Maybe<DiscordActivities>
	/** fetch data from the table: "GenericActivities" */
	readonly GenericActivities: ReadonlyArray<GenericActivities>
	/** fetch data from the table: "GenericActivities" using primary key columns */
	readonly GenericActivities_by_pk?: Maybe<GenericActivities>
	/** fetch data from the table: "Identities" */
	readonly Identities: ReadonlyArray<Identities>
	/** fetch data from the table: "Identities" using primary key columns */
	readonly Identities_by_pk?: Maybe<Identities>
	/** An array relationship */
	readonly Payments: ReadonlyArray<Payments>
	/** fetch data from the table: "Payments" using primary key columns */
	readonly Payments_by_pk?: Maybe<Payments>
	/** An array relationship */
	readonly QuestProgresses: ReadonlyArray<QuestProgresses>
	/** fetch data from the table: "QuestProgresses" using primary key columns */
	readonly QuestProgresses_by_pk?: Maybe<QuestProgresses>
	/** An array relationship */
	readonly Quests: ReadonlyArray<Quests>
	/** fetch data from the table: "Quests" using primary key columns */
	readonly Quests_by_pk?: Maybe<Quests>
	/** An array relationship */
	readonly RewardClaims: ReadonlyArray<RewardClaims>
	/** fetch data from the table: "RewardClaims" using primary key columns */
	readonly RewardClaims_by_pk?: Maybe<RewardClaims>
	/** fetch data from the table: "TwitterActivities" */
	readonly TwitterActivities: ReadonlyArray<TwitterActivities>
	/** fetch data from the table: "TwitterActivities" using primary key columns */
	readonly TwitterActivities_by_pk?: Maybe<TwitterActivities>
	/** fetch data from the table: "TwitterSearches" */
	readonly TwitterSearches: ReadonlyArray<TwitterSearches>
	/** fetch data from the table: "TwitterSearches" using primary key columns */
	readonly TwitterSearches_by_pk?: Maybe<TwitterSearches>
	/** fetch data from the table: "TwitterUsers" */
	readonly TwitterUsers: ReadonlyArray<TwitterUsers>
	/** fetch data from the table: "TwitterUsers" using primary key columns */
	readonly TwitterUsers_by_pk?: Maybe<TwitterUsers>
	/** fetch data from the table: "account_balance" */
	readonly account_balance: ReadonlyArray<Account_Balance>
	/** fetch data from the table: "account_balance" using primary key columns */
	readonly account_balance_by_pk?: Maybe<Account_Balance>
	readonly apiProvider: ApiProvider
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
	/** fetch data from the table: "migrations" using primary key columns */
	readonly migrations_by_pk?: Maybe<Migrations>
	/** fetch data from the table: "nft" */
	readonly nft: ReadonlyArray<Nft>
	/** fetch data from the table: "nft" using primary key columns */
	readonly nft_by_pk?: Maybe<Nft>
	/** fetch data from the table: "nft_collection" */
	readonly nft_collection: ReadonlyArray<Nft_Collection>
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

export type Query_RootRewardClaims_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootTwitterActivitiesArgs = {
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

export type Query_RootTwitterUsers_By_PkArgs = {
	id: Scalars['Int']
}

export type Query_RootAccount_BalanceArgs = {
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
	/** fetch data from the table in a streaming manner : "Balance" */
	readonly Balance_stream: ReadonlyArray<Balance>
	/** An array relationship */
	readonly BattlepassLevels: ReadonlyArray<BattlepassLevels>
	/** fetch data from the table: "BattlepassLevels" using primary key columns */
	readonly BattlepassLevels_by_pk?: Maybe<BattlepassLevels>
	/** fetch data from the table in a streaming manner : "BattlepassLevels" */
	readonly BattlepassLevels_stream: ReadonlyArray<BattlepassLevels>
	/** An array relationship */
	readonly BattlepassParticipants: ReadonlyArray<BattlepassParticipants>
	/** fetch data from the table: "BattlepassParticipants" using primary key columns */
	readonly BattlepassParticipants_by_pk?: Maybe<BattlepassParticipants>
	/** fetch data from the table in a streaming manner : "BattlepassParticipants" */
	readonly BattlepassParticipants_stream: ReadonlyArray<BattlepassParticipants>
	/** An array relationship */
	readonly BattlepassRewards: ReadonlyArray<BattlepassRewards>
	/** fetch data from the table: "BattlepassRewards" using primary key columns */
	readonly BattlepassRewards_by_pk?: Maybe<BattlepassRewards>
	/** fetch data from the table in a streaming manner : "BattlepassRewards" */
	readonly BattlepassRewards_stream: ReadonlyArray<BattlepassRewards>
	/** fetch data from the table: "Battlepasses" */
	readonly Battlepasses: ReadonlyArray<Battlepasses>
	/** fetch data from the table: "Battlepasses" using primary key columns */
	readonly Battlepasses_by_pk?: Maybe<Battlepasses>
	/** fetch data from the table in a streaming manner : "Battlepasses" */
	readonly Battlepasses_stream: ReadonlyArray<Battlepasses>
	/** fetch data from the table: "ChainActivities" */
	readonly ChainActivities: ReadonlyArray<ChainActivities>
	/** fetch data from the table: "ChainActivities" using primary key columns */
	readonly ChainActivities_by_pk?: Maybe<ChainActivities>
	/** fetch data from the table in a streaming manner : "ChainActivities" */
	readonly ChainActivities_stream: ReadonlyArray<ChainActivities>
	/** fetch data from the table: "ChainInfo" */
	readonly ChainInfo: ReadonlyArray<ChainInfo>
	/** fetch aggregated fields from the table: "ChainInfo" */
	readonly ChainInfo_aggregate: ChainInfo_Aggregate
	/** fetch data from the table: "ChainInfo" using primary key columns */
	readonly ChainInfo_by_pk?: Maybe<ChainInfo>
	/** fetch data from the table in a streaming manner : "ChainInfo" */
	readonly ChainInfo_stream: ReadonlyArray<ChainInfo>
	/** fetch data from the table: "ChainStatuses" */
	readonly ChainStatuses: ReadonlyArray<ChainStatuses>
	/** fetch data from the table: "ChainStatuses" using primary key columns */
	readonly ChainStatuses_by_pk?: Maybe<ChainStatuses>
	/** fetch data from the table in a streaming manner : "ChainStatuses" */
	readonly ChainStatuses_stream: ReadonlyArray<ChainStatuses>
	/** An array relationship */
	readonly CompletedQuests: ReadonlyArray<CompletedQuests>
	/** fetch data from the table: "CompletedQuests" using primary key columns */
	readonly CompletedQuests_by_pk?: Maybe<CompletedQuests>
	/** fetch data from the table in a streaming manner : "CompletedQuests" */
	readonly CompletedQuests_stream: ReadonlyArray<CompletedQuests>
	/** fetch data from the table: "DiscordActivities" */
	readonly DiscordActivities: ReadonlyArray<DiscordActivities>
	/** fetch data from the table: "DiscordActivities" using primary key columns */
	readonly DiscordActivities_by_pk?: Maybe<DiscordActivities>
	/** fetch data from the table in a streaming manner : "DiscordActivities" */
	readonly DiscordActivities_stream: ReadonlyArray<DiscordActivities>
	/** fetch data from the table: "GenericActivities" */
	readonly GenericActivities: ReadonlyArray<GenericActivities>
	/** fetch data from the table: "GenericActivities" using primary key columns */
	readonly GenericActivities_by_pk?: Maybe<GenericActivities>
	/** fetch data from the table in a streaming manner : "GenericActivities" */
	readonly GenericActivities_stream: ReadonlyArray<GenericActivities>
	/** fetch data from the table: "Identities" */
	readonly Identities: ReadonlyArray<Identities>
	/** fetch data from the table: "Identities" using primary key columns */
	readonly Identities_by_pk?: Maybe<Identities>
	/** fetch data from the table in a streaming manner : "Identities" */
	readonly Identities_stream: ReadonlyArray<Identities>
	/** An array relationship */
	readonly Payments: ReadonlyArray<Payments>
	/** fetch data from the table: "Payments" using primary key columns */
	readonly Payments_by_pk?: Maybe<Payments>
	/** fetch data from the table in a streaming manner : "Payments" */
	readonly Payments_stream: ReadonlyArray<Payments>
	/** An array relationship */
	readonly QuestProgresses: ReadonlyArray<QuestProgresses>
	/** fetch data from the table: "QuestProgresses" using primary key columns */
	readonly QuestProgresses_by_pk?: Maybe<QuestProgresses>
	/** fetch data from the table in a streaming manner : "QuestProgresses" */
	readonly QuestProgresses_stream: ReadonlyArray<QuestProgresses>
	/** An array relationship */
	readonly Quests: ReadonlyArray<Quests>
	/** fetch data from the table: "Quests" using primary key columns */
	readonly Quests_by_pk?: Maybe<Quests>
	/** fetch data from the table in a streaming manner : "Quests" */
	readonly Quests_stream: ReadonlyArray<Quests>
	/** An array relationship */
	readonly RewardClaims: ReadonlyArray<RewardClaims>
	/** fetch data from the table: "RewardClaims" using primary key columns */
	readonly RewardClaims_by_pk?: Maybe<RewardClaims>
	/** fetch data from the table in a streaming manner : "RewardClaims" */
	readonly RewardClaims_stream: ReadonlyArray<RewardClaims>
	/** fetch data from the table: "TwitterActivities" */
	readonly TwitterActivities: ReadonlyArray<TwitterActivities>
	/** fetch data from the table: "TwitterActivities" using primary key columns */
	readonly TwitterActivities_by_pk?: Maybe<TwitterActivities>
	/** fetch data from the table in a streaming manner : "TwitterActivities" */
	readonly TwitterActivities_stream: ReadonlyArray<TwitterActivities>
	/** fetch data from the table: "TwitterSearches" */
	readonly TwitterSearches: ReadonlyArray<TwitterSearches>
	/** fetch data from the table: "TwitterSearches" using primary key columns */
	readonly TwitterSearches_by_pk?: Maybe<TwitterSearches>
	/** fetch data from the table in a streaming manner : "TwitterSearches" */
	readonly TwitterSearches_stream: ReadonlyArray<TwitterSearches>
	/** fetch data from the table: "TwitterUsers" */
	readonly TwitterUsers: ReadonlyArray<TwitterUsers>
	/** fetch data from the table: "TwitterUsers" using primary key columns */
	readonly TwitterUsers_by_pk?: Maybe<TwitterUsers>
	/** fetch data from the table in a streaming manner : "TwitterUsers" */
	readonly TwitterUsers_stream: ReadonlyArray<TwitterUsers>
	/** fetch data from the table: "account_balance" */
	readonly account_balance: ReadonlyArray<Account_Balance>
	/** fetch data from the table: "account_balance" using primary key columns */
	readonly account_balance_by_pk?: Maybe<Account_Balance>
	/** fetch data from the table in a streaming manner : "account_balance" */
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
	/** fetch data from the table in a streaming manner : "battlepass_nft" */
	readonly battlepass_nft_stream: ReadonlyArray<Battlepass_Nft>
	/** fetch data from the table in a streaming manner : "battlepass" */
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
	/** fetch data from the table in a streaming manner : "campaign_contributor" */
	readonly campaign_contributor_stream: ReadonlyArray<Campaign_Contributor>
	/** fetch data from the table: "campaign_metadata" */
	readonly campaign_metadata: ReadonlyArray<Campaign_Metadata>
	/** fetch data from the table: "campaign_metadata" using primary key columns */
	readonly campaign_metadata_by_pk?: Maybe<Campaign_Metadata>
	/** fetch data from the table in a streaming manner : "campaign_metadata" */
	readonly campaign_metadata_stream: ReadonlyArray<Campaign_Metadata>
	/** fetch data from the table in a streaming manner : "campaign" */
	readonly campaign_stream: ReadonlyArray<Campaign>
	/** fetch data from the table: "chain_state" */
	readonly chain_state: ReadonlyArray<Chain_State>
	/** fetch aggregated fields from the table: "chain_state" */
	readonly chain_state_aggregate: Chain_State_Aggregate
	/** fetch data from the table: "chain_state" using primary key columns */
	readonly chain_state_by_pk?: Maybe<Chain_State>
	/** fetch data from the table in a streaming manner : "chain_state" */
	readonly chain_state_stream: ReadonlyArray<Chain_State>
	/** fetch data from the table: "current_chain_state" */
	readonly current_chain_state: ReadonlyArray<Current_Chain_State>
	/** fetch aggregated fields from the table: "current_chain_state" */
	readonly current_chain_state_aggregate: Current_Chain_State_Aggregate
	/** fetch data from the table: "current_chain_state" using primary key columns */
	readonly current_chain_state_by_pk?: Maybe<Current_Chain_State>
	/** fetch data from the table in a streaming manner : "current_chain_state" */
	readonly current_chain_state_stream: ReadonlyArray<Current_Chain_State>
	/** fetch data from the table: "historical_balance" */
	readonly historical_balance: ReadonlyArray<Historical_Balance>
	/** fetch aggregated fields from the table: "historical_balance" */
	readonly historical_balance_aggregate: Historical_Balance_Aggregate
	/** fetch data from the table: "historical_balance" using primary key columns */
	readonly historical_balance_by_pk?: Maybe<Historical_Balance>
	/** fetch data from the table in a streaming manner : "historical_balance" */
	readonly historical_balance_stream: ReadonlyArray<Historical_Balance>
	/** fetch data from the table: "identity" */
	readonly identity: ReadonlyArray<Identity>
	/** fetch aggregated fields from the table: "identity" */
	readonly identity_aggregate: Identity_Aggregate
	/** fetch data from the table: "identity" using primary key columns */
	readonly identity_by_pk?: Maybe<Identity>
	/** fetch data from the table in a streaming manner : "identity" */
	readonly identity_stream: ReadonlyArray<Identity>
	/** fetch data from the table: "migrations" */
	readonly migrations: ReadonlyArray<Migrations>
	/** fetch data from the table: "migrations" using primary key columns */
	readonly migrations_by_pk?: Maybe<Migrations>
	/** fetch data from the table in a streaming manner : "migrations" */
	readonly migrations_stream: ReadonlyArray<Migrations>
	/** fetch data from the table: "nft" */
	readonly nft: ReadonlyArray<Nft>
	/** fetch data from the table: "nft" using primary key columns */
	readonly nft_by_pk?: Maybe<Nft>
	/** fetch data from the table: "nft_collection" */
	readonly nft_collection: ReadonlyArray<Nft_Collection>
	/** fetch data from the table: "nft_collection" using primary key columns */
	readonly nft_collection_by_pk?: Maybe<Nft_Collection>
	/** fetch data from the table in a streaming manner : "nft_collection" */
	readonly nft_collection_stream: ReadonlyArray<Nft_Collection>
	/** fetch data from the table in a streaming manner : "nft" */
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
	/** fetch data from the table in a streaming manner : "organization_member" */
	readonly organization_member_stream: ReadonlyArray<Organization_Member>
	/** fetch data from the table: "organization_metadata" */
	readonly organization_metadata: ReadonlyArray<Organization_Metadata>
	/** fetch data from the table: "organization_metadata" using primary key columns */
	readonly organization_metadata_by_pk?: Maybe<Organization_Metadata>
	/** fetch data from the table in a streaming manner : "organization_metadata" */
	readonly organization_metadata_stream: ReadonlyArray<Organization_Metadata>
	/** fetch data from the table in a streaming manner : "organization" */
	readonly organization_stream: ReadonlyArray<Organization>
	/** fetch data from the table: "proposal" */
	readonly proposal: ReadonlyArray<Proposal>
	/** fetch aggregated fields from the table: "proposal" */
	readonly proposal_aggregate: Proposal_Aggregate
	/** fetch data from the table: "proposal" using primary key columns */
	readonly proposal_by_pk?: Maybe<Proposal>
	/** fetch data from the table: "proposal_metadata" */
	readonly proposal_metadata: ReadonlyArray<Proposal_Metadata>
	/** fetch data from the table: "proposal_metadata" using primary key columns */
	readonly proposal_metadata_by_pk?: Maybe<Proposal_Metadata>
	/** fetch data from the table in a streaming manner : "proposal_metadata" */
	readonly proposal_metadata_stream: ReadonlyArray<Proposal_Metadata>
	/** fetch data from the table in a streaming manner : "proposal" */
	readonly proposal_stream: ReadonlyArray<Proposal>
	/** fetch data from the table: "proposal_voter" */
	readonly proposal_voter: ReadonlyArray<Proposal_Voter>
	/** fetch aggregated fields from the table: "proposal_voter" */
	readonly proposal_voter_aggregate: Proposal_Voter_Aggregate
	/** fetch data from the table: "proposal_voter" using primary key columns */
	readonly proposal_voter_by_pk?: Maybe<Proposal_Voter>
	/** fetch data from the table in a streaming manner : "proposal_voter" */
	readonly proposal_voter_stream: ReadonlyArray<Proposal_Voter>
	/** fetch data from the table: "sense_entity" */
	readonly sense_entity: ReadonlyArray<Sense_Entity>
	/** fetch aggregated fields from the table: "sense_entity" */
	readonly sense_entity_aggregate: Sense_Entity_Aggregate
	/** fetch data from the table: "sense_entity" using primary key columns */
	readonly sense_entity_by_pk?: Maybe<Sense_Entity>
	/** fetch data from the table in a streaming manner : "sense_entity" */
	readonly sense_entity_stream: ReadonlyArray<Sense_Entity>
	/** fetch data from the table: "voting" */
	readonly voting: ReadonlyArray<Voting>
	/** fetch aggregated fields from the table: "voting" */
	readonly voting_aggregate: Voting_Aggregate
	/** fetch data from the table: "voting" using primary key columns */
	readonly voting_by_pk?: Maybe<Voting>
	/** fetch data from the table in a streaming manner : "voting" */
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

export type Subscription_RootRewardClaims_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootRewardClaims_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<RewardClaims_Stream_Cursor_Input>>
	where?: InputMaybe<RewardClaims_Bool_Exp>
}

export type Subscription_RootTwitterActivitiesArgs = {
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

export type Subscription_RootTwitterUsers_By_PkArgs = {
	id: Scalars['Int']
}

export type Subscription_RootTwitterUsers_StreamArgs = {
	batch_size: Scalars['Int']
	cursor: ReadonlyArray<InputMaybe<TwitterUsers_Stream_Cursor_Input>>
	where?: InputMaybe<TwitterUsers_Bool_Exp>
}

export type Subscription_RootAccount_BalanceArgs = {
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
	readonly proposals?: InputMaybe<Proposal_Bool_Exp>
	readonly quorum?: InputMaybe<String_Comparison_Exp>
	readonly scale?: InputMaybe<String_Comparison_Exp>
	readonly unit?: InputMaybe<String_Comparison_Exp>
	readonly yes?: InputMaybe<Numeric_Comparison_Exp>
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

export type PaymentMutationVariables = Exact<{
	token: Scalars['String']
	bpid: Scalars['String']
	uuid: Scalars['String']
	txid: Scalars['String']
}>

export type PaymentMutation = {
	readonly __typename?: 'mutation_root'
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotMutation'
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
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotMutation'
		readonly claimReward?: {
			readonly __typename?: 'BattlepassRewardClaim'
			readonly id: number
			readonly syncStatus: SyncStatus
		} | null
	} | null
}

export type BattlepassSubscriptionVariables = Exact<{
	id: Scalars['bpchar']
}>

export type BattlepassSubscription = {
	readonly __typename?: 'subscription_root'
	readonly Battlepasses: ReadonlyArray<{
		readonly __typename?: 'Battlepasses'
		readonly cid?: string | null
		readonly joinable: boolean
		readonly totalJoined: number
		readonly premiumPasses?: number | null
		readonly premiumClaimed: number
		readonly freePasses: number
		readonly freeClaimed: number
		readonly name?: string | null
		readonly active: boolean
		readonly season?: number | null
		readonly chainId: any
		readonly price?: number | null
	}>
}

export type ClaimBattlepassPremiumMutationVariables = Exact<{
	bid: Scalars['String']
	uid: Scalars['String']
	pid: Scalars['String']
	sid: Scalars['String']
}>

export type ClaimBattlepassPremiumMutation = {
	readonly __typename?: 'mutation_root'
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotMutation'
		readonly processPayment?: { readonly __typename?: 'Payment'; readonly identityUuid: string } | null
	} | null
}

export type PayBattlepassMutationVariables = Exact<{
	battlepass: Scalars['String']
	uuid: Scalars['String']
}>

export type PayBattlepassMutation = {
	readonly __typename?: 'mutation_root'
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotMutation'
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
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotMutation'
		readonly join?: { readonly __typename?: 'BattlepassMember'; readonly id?: number | null } | null
	} | null
}

export type CreateBattlepassLevelsMutationVariables = Exact<{
	id: Scalars['String']
	levels: ReadonlyArray<Level> | Level
}>

export type CreateBattlepassLevelsMutation = {
	readonly __typename?: 'mutation_root'
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotMutation'
		readonly levels?: ReadonlyArray<{
			readonly __typename?: 'BattlepassLevel'
			readonly battlepassId: number
		} | null> | null
	} | null
}

export type GetBattlepassesForOrganizationQueryVariables = Exact<{
	id?: InputMaybe<Scalars['String']>
}>

export type GetBattlepassesForOrganizationQuery = {
	readonly __typename?: 'query_root'
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotQuery'
		readonly Battlepasses?: ReadonlyArray<{
			readonly __typename?: 'BattlepassType'
			readonly active: boolean
			readonly chainId: string
			readonly cid?: string | null
			readonly name?: string | null
			readonly orgId: string
		} | null> | null
	} | null
}

export type GetAllBattlepassesSubscriptionVariables = Exact<{ [key: string]: never }>

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
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotQuery'
		readonly BattlepassRewards?: ReadonlyArray<{
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
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotQuery'
		readonly Battlepasses?: ReadonlyArray<{
			readonly __typename?: 'BattlepassType'
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
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotQuery'
		readonly BattlepassQuests?: ReadonlyArray<{
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
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotQuery'
		readonly BattlepassProgresses?: ReadonlyArray<{
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
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotQuery'
		readonly BattlepassIdentities?: ReadonlyArray<{
			readonly __typename?: 'BattlepassIdentity'
			readonly uuid: string
			readonly members?: ReadonlyArray<{
				readonly __typename?: 'BattlepassMember'
				readonly premium: boolean
				readonly battlepass: { readonly __typename?: 'BattlepassType'; readonly chainId: string }
			} | null> | null
		} | null> | null
	} | null
}

export type GetLeaderboardQueryVariables = Exact<{
	id?: InputMaybe<Scalars['String']>
}>

export type GetLeaderboardQuery = {
	readonly __typename?: 'query_root'
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotQuery'
		readonly BattlepassPoints?: ReadonlyArray<{
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
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotQuery'
		readonly BattlepassRewardClaims?: ReadonlyArray<{
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
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotQuery'
		readonly BattlepassPoints?: ReadonlyArray<{
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
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotQuery'
		readonly BattlepassLevels?: ReadonlyArray<{
			readonly __typename?: 'BattlepassLevel'
			readonly level: number
			readonly name?: string | null
			readonly points: number
			readonly totalPoints: number
		} | null> | null
	} | null
}

export type GetIdentityByDiscordQueryVariables = Exact<{
	discord?: InputMaybe<Scalars['String']>
}>

export type GetIdentityByDiscordQuery = {
	readonly __typename?: 'query_root'
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotQuery'
		readonly BattlepassIdentities?: ReadonlyArray<{
			readonly __typename?: 'BattlepassIdentity'
			readonly uuid: string
			readonly address?: string | null
			readonly discord?: string | null
			readonly twitter?: string | null
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
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotMutation'
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
		} | null
	}>
}

export type ActiveBattlepassByIdQueryVariables = Exact<{
	id: Scalars['String']
}>

export type ActiveBattlepassByIdQuery = {
	readonly __typename?: 'query_root'
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotQuery'
		readonly Battlepasses?: ReadonlyArray<{
			readonly __typename?: 'BattlepassType'
			readonly id: number
			readonly orgId: string
			readonly chainId: string
		} | null> | null
	} | null
}

export type AllBattlepassesQueryVariables = Exact<{ [key: string]: never }>

export type AllBattlepassesQuery = {
	readonly __typename?: 'query_root'
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotQuery'
		readonly Battlepasses?: ReadonlyArray<{
			readonly __typename?: 'BattlepassType'
			readonly id: number
			readonly orgId: string
			readonly chainId: string
		} | null> | null
	} | null
}

export type BattlepassByIdQueryVariables = Exact<{
	address?: InputMaybe<Scalars['String']>
	battlepass?: InputMaybe<Scalars['String']>
}>

export type BattlepassByIdQuery = {
	readonly __typename?: 'query_root'
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotQuery'
		readonly BattlepassIdentities?: ReadonlyArray<{
			readonly __typename?: 'BattlepassIdentity'
			readonly address?: string | null
			readonly discord?: string | null
			readonly id: number
			readonly twitter?: string | null
		} | null> | null
		readonly BattlepassQuests?: ReadonlyArray<{
			readonly __typename?: 'BattlepassQuest'
			readonly battlepassId: number
			readonly channelId?: string | null
			readonly id: number
			readonly maxDaily?: number | null
			readonly points: number
			readonly quantity: number
			readonly repeat: boolean
			readonly source: Source
			readonly type: ActivityType
		} | null> | null
	} | null
}

export type BattlepassIdByAddressQueryVariables = Exact<{
	address?: InputMaybe<Scalars['String']>
}>

export type BattlepassIdByAddressQuery = {
	readonly __typename?: 'query_root'
	readonly BattlepassBot?: {
		readonly __typename?: 'BattlepassBotQuery'
		readonly BattlepassIdentities?: ReadonlyArray<{
			readonly __typename?: 'BattlepassIdentity'
			readonly address?: string | null
			readonly discord?: string | null
			readonly id: number
			readonly twitter?: string | null
		} | null> | null
	} | null
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
		readonly creator_identity?: {
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

export type OrganizationVanityUrlQueryVariables = Exact<{
	searchQuery?: InputMaybe<Scalars['String']>
}>

export type OrganizationVanityUrlQuery = {
	readonly __typename?: 'query_root'
	readonly organization: ReadonlyArray<{
		readonly __typename?: 'organization'
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
export const PaymentDocument = gql`
	mutation Payment($token: String!, $bpid: String!, $uuid: String!, $txid: String!) {
		BattlepassBot {
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
		BattlepassBot {
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
export const BattlepassDocument = gql`
	subscription Battlepass($id: bpchar!) {
		Battlepasses(where: { chainId: { _eq: $id } }) {
			cid
			joinable
			totalJoined
			premiumPasses
			premiumClaimed
			freePasses
			freeClaimed
			name
			active
			season
			chainId
			price
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
export const ClaimBattlepassPremiumDocument = gql`
	mutation ClaimBattlepassPremium($bid: String!, $uid: String!, $pid: String!, $sid: String!) {
		BattlepassBot {
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
		BattlepassBot {
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
		BattlepassBot {
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
export const CreateBattlepassLevelsDocument = gql`
	mutation CreateBattlepassLevels($id: String!, $levels: [Level!]!) {
		BattlepassBot {
			levels(battlepass: $id, levels: $levels) {
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
export const GetBattlepassesForOrganizationDocument = gql`
	query GetBattlepassesForOrganization($id: String) {
		BattlepassBot {
			Battlepasses(where: { orgChainId: $id }) {
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
	subscription GetAllBattlepasses {
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
		BattlepassBot {
			BattlepassRewards(where: { battlepassChainId: $id }) {
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
		BattlepassBot {
			Battlepasses(where: { chainId: $id }) {
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
		BattlepassBot {
			BattlepassQuests(where: { battlepassChainId: $id }) {
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
		BattlepassBot {
			BattlepassProgresses(where: { battlepassChainId: $id, identityUuid: $uuid }) {
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
		BattlepassBot {
			BattlepassIdentities(where: { uuid: $uuid }) {
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
		BattlepassBot {
			BattlepassPoints(where: { battlepassChainId: $id }) {
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
		BattlepassBot {
			BattlepassRewardClaims(where: { identityUuid: $uuid, battlepassChainId: $id }) {
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
		BattlepassBot {
			BattlepassPoints(where: { battlepassChainId: $id, identityUuid: $uuid }) {
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
		BattlepassBot {
			BattlepassLevels(where: { battlepassChainId: $id }) {
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
export const GetIdentityByDiscordDocument = gql`
	query GetIdentityByDiscord($discord: String) {
		BattlepassBot {
			BattlepassIdentities(where: { discord: $discord }) {
				uuid
				address
				discord
				twitter
			}
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
		BattlepassBot {
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
export const ActiveBattlepassDocument = gql`
	subscription ActiveBattlepass {
		battlepass {
			id
			name
			organization {
				id
				name
				header
				logo
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
export const ActiveBattlepassByIdDocument = gql`
	query ActiveBattlepassById($id: String!) {
		BattlepassBot {
			Battlepasses(where: { chainId: $id }) {
				id
				orgId
				chainId
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
export const AllBattlepassesDocument = gql`
	query AllBattlepasses {
		BattlepassBot {
			Battlepasses {
				id
				orgId
				chainId
			}
		}
	}
`

/**
 * __useAllBattlepassesQuery__
 *
 * To run a query within a React component, call `useAllBattlepassesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBattlepassesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBattlepassesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBattlepassesQuery(
	baseOptions?: Apollo.QueryHookOptions<AllBattlepassesQuery, AllBattlepassesQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<AllBattlepassesQuery, AllBattlepassesQueryVariables>(AllBattlepassesDocument, options)
}
export function useAllBattlepassesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<AllBattlepassesQuery, AllBattlepassesQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<AllBattlepassesQuery, AllBattlepassesQueryVariables>(AllBattlepassesDocument, options)
}
export type AllBattlepassesQueryHookResult = ReturnType<typeof useAllBattlepassesQuery>
export type AllBattlepassesLazyQueryHookResult = ReturnType<typeof useAllBattlepassesLazyQuery>
export type AllBattlepassesQueryResult = Apollo.QueryResult<AllBattlepassesQuery, AllBattlepassesQueryVariables>
export const BattlepassByIdDocument = gql`
	query BattlepassById($address: String, $battlepass: String) {
		BattlepassBot {
			BattlepassIdentities(where: { address: $address }) {
				address
				discord
				id
				twitter
			}
			BattlepassQuests(where: { battlepassChainId: $battlepass }) {
				battlepassId
				channelId
				id
				maxDaily
				points
				quantity
				repeat
				source
				type
			}
		}
	}
`

/**
 * __useBattlepassByIdQuery__
 *
 * To run a query within a React component, call `useBattlepassByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useBattlepassByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBattlepassByIdQuery({
 *   variables: {
 *      address: // value for 'address'
 *      battlepass: // value for 'battlepass'
 *   },
 * });
 */
export function useBattlepassByIdQuery(
	baseOptions?: Apollo.QueryHookOptions<BattlepassByIdQuery, BattlepassByIdQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<BattlepassByIdQuery, BattlepassByIdQueryVariables>(BattlepassByIdDocument, options)
}
export function useBattlepassByIdLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<BattlepassByIdQuery, BattlepassByIdQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<BattlepassByIdQuery, BattlepassByIdQueryVariables>(BattlepassByIdDocument, options)
}
export type BattlepassByIdQueryHookResult = ReturnType<typeof useBattlepassByIdQuery>
export type BattlepassByIdLazyQueryHookResult = ReturnType<typeof useBattlepassByIdLazyQuery>
export type BattlepassByIdQueryResult = Apollo.QueryResult<BattlepassByIdQuery, BattlepassByIdQueryVariables>
export const BattlepassIdByAddressDocument = gql`
	query BattlepassIdByAddress($address: String) {
		BattlepassBot {
			BattlepassIdentities(where: { address: $address }) {
				address
				discord
				id
				twitter
			}
		}
	}
`

/**
 * __useBattlepassIdByAddressQuery__
 *
 * To run a query within a React component, call `useBattlepassIdByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useBattlepassIdByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBattlepassIdByAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useBattlepassIdByAddressQuery(
	baseOptions?: Apollo.QueryHookOptions<BattlepassIdByAddressQuery, BattlepassIdByAddressQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<BattlepassIdByAddressQuery, BattlepassIdByAddressQueryVariables>(
		BattlepassIdByAddressDocument,
		options,
	)
}
export function useBattlepassIdByAddressLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<BattlepassIdByAddressQuery, BattlepassIdByAddressQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<BattlepassIdByAddressQuery, BattlepassIdByAddressQueryVariables>(
		BattlepassIdByAddressDocument,
		options,
	)
}
export type BattlepassIdByAddressQueryHookResult = ReturnType<typeof useBattlepassIdByAddressQuery>
export type BattlepassIdByAddressLazyQueryHookResult = ReturnType<typeof useBattlepassIdByAddressLazyQuery>
export type BattlepassIdByAddressQueryResult = Apollo.QueryResult<
	BattlepassIdByAddressQuery,
	BattlepassIdByAddressQueryVariables
>
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
			creator_identity {
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
export const OrganizationsPaginationCountDocument = gql`
	subscription OrganizationsPaginationCount($searchQuery: String = "%") {
		organization_aggregate(
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
	subscription OrganizationsPagination($orderBy: [organization_order_by!], $first: Int, $searchQuery: String = "%") {
		organization(
			limit: $first
			order_by: $orderBy
			where: { _or: [{ name: { _ilike: $searchQuery } }, { description: { _ilike: $searchQuery } }] }
		) {
			id
			name
			description
			logo
			header
			access_model
			creator
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
			access_model
			creator
			created_at_block
			creator
			fee_model
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
