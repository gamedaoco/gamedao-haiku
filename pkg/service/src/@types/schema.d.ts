import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	Upload: any
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

export type File = {
	readonly __typename?: 'File'
	readonly encoding: Scalars['String']
	readonly filename: Scalars['String']
	readonly mimetype: Scalars['String']
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

export type Mutation = {
	readonly __typename?: 'Mutation'
	readonly singleUpload: Scalars['String']
}

export type MutationSingleUploadArgs = {
	fileStream: Scalars['Upload']
}

export type ProposalFeatures = {
	readonly CREATE_GENERAL_PROPOSAL: Scalars['Boolean']
	readonly CREATE_PROPOSAL: Scalars['Boolean']
	readonly CREATE_PROPOSAL_RELATIVE_MAJORITY: Scalars['Boolean']
	readonly CREATE_PROPOSAL_SIMPLE_MAJORITY: Scalars['Boolean']
	readonly CREATE_SPENDING_PROPOSAL: Scalars['Boolean']
	readonly CREATE_WITHDRAW_PROPOSAL: Scalars['Boolean']
}

export type Query = {
	readonly __typename?: 'Query'
	readonly config: Config
	readonly displayValues?: Maybe<DisplayValues>
	readonly features: Features
	readonly links: ReadonlyArray<Maybe<Link>>
	readonly version: Scalars['String']
}

export type QueryConfigArgs = {
	env: Environment
}

export type QueryFeaturesArgs = {
	env: Environment
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
	resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
	| ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
	Boolean: ResolverTypeWrapper<Scalars['Boolean']>
	Config: ResolverTypeWrapper<Config>
	DisplayValueEntry:
		| ResolversTypes['DisplayValueEntryCountry']
		| ResolversTypes['DisplayValueEntryNumber']
		| ResolversTypes['DisplayValueEntryString']
	DisplayValueEntryCountry: ResolverTypeWrapper<DisplayValueEntryCountry>
	DisplayValueEntryNumber: ResolverTypeWrapper<DisplayValueEntryNumber>
	DisplayValueEntryString: ResolverTypeWrapper<DisplayValueEntryString>
	DisplayValues: ResolverTypeWrapper<DisplayValues>
	Environment: Environment
	Features: ResolverTypeWrapper<Features>
	File: ResolverTypeWrapper<File>
	Int: ResolverTypeWrapper<Scalars['Int']>
	Link: ResolverTypeWrapper<Link>
	LogLevel: LogLevel
	Mutation: ResolverTypeWrapper<{}>
	ProposalFeatures: ResolversTypes['Features']
	Query: ResolverTypeWrapper<{}>
	String: ResolverTypeWrapper<Scalars['String']>
	Upload: ResolverTypeWrapper<Scalars['Upload']>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
	Boolean: Scalars['Boolean']
	Config: Config
	DisplayValueEntry:
		| ResolversParentTypes['DisplayValueEntryCountry']
		| ResolversParentTypes['DisplayValueEntryNumber']
		| ResolversParentTypes['DisplayValueEntryString']
	DisplayValueEntryCountry: DisplayValueEntryCountry
	DisplayValueEntryNumber: DisplayValueEntryNumber
	DisplayValueEntryString: DisplayValueEntryString
	DisplayValues: DisplayValues
	Features: Features
	File: File
	Int: Scalars['Int']
	Link: Link
	Mutation: {}
	ProposalFeatures: ResolversParentTypes['Features']
	Query: {}
	String: Scalars['String']
	Upload: Scalars['Upload']
}>

export type ConfigResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Config'] = ResolversParentTypes['Config'],
> = ResolversObject<{
	CONTACT?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	IPFS_GATEWAY?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	LOG_LEVEL?: Resolver<Maybe<ResolversTypes['LogLevel']>, ParentType, ContextType>
	SITE_DESCRIPTION?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	SITE_IMAGE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	SITE_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	SITE_TITLE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	TW_SITE_CREATOR?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	TW_SITE_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DisplayValueEntryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['DisplayValueEntry'] = ResolversParentTypes['DisplayValueEntry'],
> = ResolversObject<{
	__resolveType: TypeResolveFn<
		'DisplayValueEntryCountry' | 'DisplayValueEntryNumber' | 'DisplayValueEntryString',
		ParentType,
		ContextType
	>
	key?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	text?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type DisplayValueEntryCountryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['DisplayValueEntryCountry'] = ResolversParentTypes['DisplayValueEntryCountry'],
> = ResolversObject<{
	flag?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	key?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	text?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	value?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DisplayValueEntryNumberResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['DisplayValueEntryNumber'] = ResolversParentTypes['DisplayValueEntryNumber'],
> = ResolversObject<{
	key?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	text?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DisplayValueEntryStringResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['DisplayValueEntryString'] = ResolversParentTypes['DisplayValueEntryString'],
> = ResolversObject<{
	key?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	text?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	value?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DisplayValuesResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['DisplayValues'] = ResolversParentTypes['DisplayValues'],
> = ResolversObject<{
	collateralTypes?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['DisplayValueEntryNumber']>>>,
		ParentType,
		ContextType
	>
	countries?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['DisplayValueEntryCountry']>>>,
		ParentType,
		ContextType
	>
	daoBodies?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['DisplayValueEntryNumber']>>>,
		ParentType,
		ContextType
	>
	daoFeeModel?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['DisplayValueEntryNumber']>>>,
		ParentType,
		ContextType
	>
	daoMemberGovernance?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['DisplayValueEntryNumber']>>>,
		ParentType,
		ContextType
	>
	memberships?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['DisplayValueEntryNumber']>>>,
		ParentType,
		ContextType
	>
	projectDurations?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['DisplayValueEntryNumber']>>>,
		ParentType,
		ContextType
	>
	projectTypes?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['DisplayValueEntryNumber']>>>,
		ParentType,
		ContextType
	>
	proposalTypes?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['DisplayValueEntryNumber']>>>,
		ParentType,
		ContextType
	>
	protocolTypes?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['DisplayValueEntryNumber']>>>,
		ParentType,
		ContextType
	>
	votingTypes?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['DisplayValueEntryNumber']>>>,
		ParentType,
		ContextType
	>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type FeaturesResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Features'] = ResolversParentTypes['Features'],
> = ResolversObject<{
	CREATE_GENERAL_PROPOSAL?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	CREATE_PROPOSAL?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	CREATE_PROPOSAL_RELATIVE_MAJORITY?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	CREATE_PROPOSAL_SIMPLE_MAJORITY?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	CREATE_SPENDING_PROPOSAL?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	CREATE_WITHDRAW_PROPOSAL?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type FileResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File'],
> = ResolversObject<{
	encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type LinkResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link'],
> = ResolversObject<{
	category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	users?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type MutationResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = ResolversObject<{
	singleUpload?: Resolver<
		ResolversTypes['String'],
		ParentType,
		ContextType,
		RequireFields<MutationSingleUploadArgs, 'fileStream'>
	>
}>

export type ProposalFeaturesResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['ProposalFeatures'] = ResolversParentTypes['ProposalFeatures'],
> = ResolversObject<{
	__resolveType: TypeResolveFn<'Features', ParentType, ContextType>
	CREATE_GENERAL_PROPOSAL?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	CREATE_PROPOSAL?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	CREATE_PROPOSAL_RELATIVE_MAJORITY?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	CREATE_PROPOSAL_SIMPLE_MAJORITY?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	CREATE_SPENDING_PROPOSAL?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	CREATE_WITHDRAW_PROPOSAL?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
}>

export type QueryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
	config?: Resolver<ResolversTypes['Config'], ParentType, ContextType, RequireFields<QueryConfigArgs, 'env'>>
	displayValues?: Resolver<Maybe<ResolversTypes['DisplayValues']>, ParentType, ContextType>
	features?: Resolver<ResolversTypes['Features'], ParentType, ContextType, RequireFields<QueryFeaturesArgs, 'env'>>
	links?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Link']>>, ParentType, ContextType>
	version?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
	name: 'Upload'
}

export type Resolvers<ContextType = any> = ResolversObject<{
	Config?: ConfigResolvers<ContextType>
	DisplayValueEntry?: DisplayValueEntryResolvers<ContextType>
	DisplayValueEntryCountry?: DisplayValueEntryCountryResolvers<ContextType>
	DisplayValueEntryNumber?: DisplayValueEntryNumberResolvers<ContextType>
	DisplayValueEntryString?: DisplayValueEntryStringResolvers<ContextType>
	DisplayValues?: DisplayValuesResolvers<ContextType>
	Features?: FeaturesResolvers<ContextType>
	File?: FileResolvers<ContextType>
	Link?: LinkResolvers<ContextType>
	Mutation?: MutationResolvers<ContextType>
	ProposalFeatures?: ProposalFeaturesResolvers<ContextType>
	Query?: QueryResolvers<ContextType>
	Upload?: GraphQLScalarType
}>
