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

export type ApiProvider = {
	readonly __typename?: 'ApiProvider'
	readonly chainProperties: ChainProperties
	readonly name: Scalars['String']
	readonly types: Scalars['String']
	readonly wsProviderUrl: Scalars['String']
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
	readonly updateSession: Scalars['Boolean']
}

export type MutationSingleUploadArgs = {
	fileStream: Scalars['Upload']
}

export type MutationUpdateSessionArgs = {
	address: Scalars['String']
}

export type OrganizationFeatures = {
	readonly ORGANIZATION_PAGE_SHOW_FILTERS: Scalars['Boolean']
	readonly ORGANIZATION_PAGE_SHOW_SEARCH: Scalars['Boolean']
	readonly ORGANIZATION_PAGE_SHOW_SORT: Scalars['Boolean']
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
	readonly apiProvider: ApiProvider
	readonly config: Config
	readonly displayValues?: Maybe<DisplayValues>
	readonly features: Features
	readonly links: ReadonlyArray<Maybe<Link>>
	readonly rmrkNfts?: Maybe<ReadonlyArray<Maybe<RmrkNft>>>
	readonly version: Scalars['String']
}

export type QueryConfigArgs = {
	env: Environment
}

export type QueryFeaturesArgs = {
	env: Environment
}

export type QueryRmrkNftsArgs = {
	address: Scalars['String']
}

export type RmrkNft = {
	readonly __typename?: 'RMRKNft'
	readonly id: Scalars['String']
	readonly metadata: Scalars['String']
	readonly sn: Scalars['String']
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
	ApiProvider: ResolverTypeWrapper<ApiProvider>
	Boolean: ResolverTypeWrapper<Scalars['Boolean']>
	ChainProperties: ResolverTypeWrapper<ChainProperties>
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
	OrganizationFeatures: ResolversTypes['Features']
	ProposalFeatures: ResolversTypes['Features']
	Query: ResolverTypeWrapper<{}>
	RMRKNft: ResolverTypeWrapper<RmrkNft>
	String: ResolverTypeWrapper<Scalars['String']>
	Upload: ResolverTypeWrapper<Scalars['Upload']>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
	ApiProvider: ApiProvider
	Boolean: Scalars['Boolean']
	ChainProperties: ChainProperties
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
	OrganizationFeatures: ResolversParentTypes['Features']
	ProposalFeatures: ResolversParentTypes['Features']
	Query: {}
	RMRKNft: RmrkNft
	String: Scalars['String']
	Upload: Scalars['Upload']
}>

export type ApiProviderResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['ApiProvider'] = ResolversParentTypes['ApiProvider'],
> = ResolversObject<{
	chainProperties?: Resolver<ResolversTypes['ChainProperties'], ParentType, ContextType>
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	types?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	wsProviderUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ChainPropertiesResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['ChainProperties'] = ResolversParentTypes['ChainProperties'],
> = ResolversObject<{
	blockTargetTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	governanceCurrency?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	networkCurrency?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	paymentCurrencies?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	ss58Format?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	tokenDecimals?: Resolver<ReadonlyArray<Maybe<ResolversTypes['String']>>, ParentType, ContextType>
	tokenSymbol?: Resolver<ReadonlyArray<Maybe<ResolversTypes['String']>>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ConfigResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Config'] = ResolversParentTypes['Config'],
> = ResolversObject<{
	CAMPAIGN_MIN_EXPIRY_IN_SECONDS?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	CONTACT?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	IPFS_GATEWAY?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	LOG_LEVEL?: Resolver<Maybe<ResolversTypes['LogLevel']>, ParentType, ContextType>
	PROPOSAL_MIN_EXPIRY_IN_SECONDS?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
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
	campaignFilters?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['DisplayValueEntryString']>>>,
		ParentType,
		ContextType
	>
	campaignFundingCategories?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['DisplayValueEntryNumber']>>>,
		ParentType,
		ContextType
	>
	campaignSortOptions?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['DisplayValueEntryString']>>>,
		ParentType,
		ContextType
	>
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
	organizationSortOptions?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['DisplayValueEntryString']>>>,
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
	ORGANIZATION_PAGE_SHOW_FILTERS?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	ORGANIZATION_PAGE_SHOW_SEARCH?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	ORGANIZATION_PAGE_SHOW_SORT?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
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
	updateSession?: Resolver<
		ResolversTypes['Boolean'],
		ParentType,
		ContextType,
		RequireFields<MutationUpdateSessionArgs, 'address'>
	>
}>

export type OrganizationFeaturesResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['OrganizationFeatures'] = ResolversParentTypes['OrganizationFeatures'],
> = ResolversObject<{
	__resolveType: TypeResolveFn<'Features', ParentType, ContextType>
	ORGANIZATION_PAGE_SHOW_FILTERS?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	ORGANIZATION_PAGE_SHOW_SEARCH?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	ORGANIZATION_PAGE_SHOW_SORT?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
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
	apiProvider?: Resolver<ResolversTypes['ApiProvider'], ParentType, ContextType>
	config?: Resolver<ResolversTypes['Config'], ParentType, ContextType, RequireFields<QueryConfigArgs, 'env'>>
	displayValues?: Resolver<Maybe<ResolversTypes['DisplayValues']>, ParentType, ContextType>
	features?: Resolver<ResolversTypes['Features'], ParentType, ContextType, RequireFields<QueryFeaturesArgs, 'env'>>
	links?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Link']>>, ParentType, ContextType>
	rmrkNfts?: Resolver<
		Maybe<ReadonlyArray<Maybe<ResolversTypes['RMRKNft']>>>,
		ParentType,
		ContextType,
		RequireFields<QueryRmrkNftsArgs, 'address'>
	>
	version?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type RmrkNftResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['RMRKNft'] = ResolversParentTypes['RMRKNft'],
> = ResolversObject<{
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	metadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	sn?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
	name: 'Upload'
}

export type Resolvers<ContextType = any> = ResolversObject<{
	ApiProvider?: ApiProviderResolvers<ContextType>
	ChainProperties?: ChainPropertiesResolvers<ContextType>
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
	OrganizationFeatures?: OrganizationFeaturesResolvers<ContextType>
	ProposalFeatures?: ProposalFeaturesResolvers<ContextType>
	Query?: QueryResolvers<ContextType>
	RMRKNft?: RmrkNftResolvers<ContextType>
	Upload?: GraphQLScalarType
}>
