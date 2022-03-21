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
	/** Big number integer */
	BigInt: any
	/** Binary data encoded as a hex string always prefixed with 0x */
	Bytes: any
	/** A date-time string in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) */
	DateTime: any
	bigint: any
	jsonb: any
	numeric: any
	smallint: any
	timestamptz: any
}

export type BodiesConnection = {
	readonly __typename?: 'BodiesConnection'
	readonly edges: ReadonlyArray<BodyEdge>
	readonly pageInfo: PageInfo
	readonly totalCount: Scalars['Int']
}

export type Body = {
	readonly __typename?: 'Body'
	readonly access: Scalars['Int']
	readonly body: Scalars['Int']
	readonly cid: Scalars['String']
	readonly controller: Scalars['String']
	readonly creator: Scalars['String']
	readonly fee: Scalars['BigInt']
	readonly feeModel: Scalars['Int']
	readonly govAsset: Scalars['Int']
	readonly id: Scalars['ID']
	readonly memberLimit: Scalars['BigInt']
	readonly members: ReadonlyArray<BodyMember>
	readonly name: Scalars['String']
	readonly payAsset: Scalars['Int']
	readonly treasury: Scalars['String']
}

export type BodyMembersArgs = {
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<InputMaybe<BodyMemberOrderByInput>>>
	where?: InputMaybe<BodyMemberWhereInput>
}

export type BodyEdge = {
	readonly __typename?: 'BodyEdge'
	readonly cursor: Scalars['String']
	readonly node: Body
}

export type BodyMember = {
	readonly __typename?: 'BodyMember'
	readonly address: Scalars['String']
	readonly body: Body
	readonly id: Scalars['ID']
}

export type BodyMemberEdge = {
	readonly __typename?: 'BodyMemberEdge'
	readonly cursor: Scalars['String']
	readonly node: BodyMember
}

export enum BodyMemberOrderByInput {
	AddressAsc = 'address_ASC',
	AddressDesc = 'address_DESC',
	BodyAccessAsc = 'body_access_ASC',
	BodyAccessDesc = 'body_access_DESC',
	BodyBodyAsc = 'body_body_ASC',
	BodyBodyDesc = 'body_body_DESC',
	BodyCidAsc = 'body_cid_ASC',
	BodyCidDesc = 'body_cid_DESC',
	BodyControllerAsc = 'body_controller_ASC',
	BodyControllerDesc = 'body_controller_DESC',
	BodyCreatorAsc = 'body_creator_ASC',
	BodyCreatorDesc = 'body_creator_DESC',
	BodyFeeModelAsc = 'body_feeModel_ASC',
	BodyFeeModelDesc = 'body_feeModel_DESC',
	BodyFeeAsc = 'body_fee_ASC',
	BodyFeeDesc = 'body_fee_DESC',
	BodyGovAssetAsc = 'body_govAsset_ASC',
	BodyGovAssetDesc = 'body_govAsset_DESC',
	BodyIdAsc = 'body_id_ASC',
	BodyIdDesc = 'body_id_DESC',
	BodyMemberLimitAsc = 'body_memberLimit_ASC',
	BodyMemberLimitDesc = 'body_memberLimit_DESC',
	BodyNameAsc = 'body_name_ASC',
	BodyNameDesc = 'body_name_DESC',
	BodyPayAssetAsc = 'body_payAsset_ASC',
	BodyPayAssetDesc = 'body_payAsset_DESC',
	BodyTreasuryAsc = 'body_treasury_ASC',
	BodyTreasuryDesc = 'body_treasury_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
}

export type BodyMemberWhereInput = {
	readonly AND?: InputMaybe<ReadonlyArray<BodyMemberWhereInput>>
	readonly OR?: InputMaybe<ReadonlyArray<BodyMemberWhereInput>>
	readonly address_contains?: InputMaybe<Scalars['String']>
	readonly address_endsWith?: InputMaybe<Scalars['String']>
	readonly address_eq?: InputMaybe<Scalars['String']>
	readonly address_gt?: InputMaybe<Scalars['String']>
	readonly address_gte?: InputMaybe<Scalars['String']>
	readonly address_in?: InputMaybe<ReadonlyArray<Scalars['String']>>
	readonly address_lt?: InputMaybe<Scalars['String']>
	readonly address_lte?: InputMaybe<Scalars['String']>
	readonly address_not_contains?: InputMaybe<Scalars['String']>
	readonly address_not_endsWith?: InputMaybe<Scalars['String']>
	readonly address_not_eq?: InputMaybe<Scalars['String']>
	readonly address_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>
	readonly address_not_startsWith?: InputMaybe<Scalars['String']>
	readonly address_startsWith?: InputMaybe<Scalars['String']>
	readonly body?: InputMaybe<BodyWhereInput>
	readonly id_contains?: InputMaybe<Scalars['ID']>
	readonly id_endsWith?: InputMaybe<Scalars['ID']>
	readonly id_eq?: InputMaybe<Scalars['ID']>
	readonly id_gt?: InputMaybe<Scalars['ID']>
	readonly id_gte?: InputMaybe<Scalars['ID']>
	readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>
	readonly id_lt?: InputMaybe<Scalars['ID']>
	readonly id_lte?: InputMaybe<Scalars['ID']>
	readonly id_not_contains?: InputMaybe<Scalars['ID']>
	readonly id_not_endsWith?: InputMaybe<Scalars['ID']>
	readonly id_not_eq?: InputMaybe<Scalars['ID']>
	readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>
	readonly id_not_startsWith?: InputMaybe<Scalars['ID']>
	readonly id_startsWith?: InputMaybe<Scalars['ID']>
}

export type BodyMemberWhereUniqueInput = {
	readonly id: Scalars['ID']
}

export type BodyMembersConnection = {
	readonly __typename?: 'BodyMembersConnection'
	readonly edges: ReadonlyArray<BodyMemberEdge>
	readonly pageInfo: PageInfo
	readonly totalCount: Scalars['Int']
}

export enum BodyOrderByInput {
	AccessAsc = 'access_ASC',
	AccessDesc = 'access_DESC',
	BodyAsc = 'body_ASC',
	BodyDesc = 'body_DESC',
	CidAsc = 'cid_ASC',
	CidDesc = 'cid_DESC',
	ControllerAsc = 'controller_ASC',
	ControllerDesc = 'controller_DESC',
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
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	PayAssetAsc = 'payAsset_ASC',
	PayAssetDesc = 'payAsset_DESC',
	TreasuryAsc = 'treasury_ASC',
	TreasuryDesc = 'treasury_DESC',
}

export type BodyWhereInput = {
	readonly AND?: InputMaybe<ReadonlyArray<BodyWhereInput>>
	readonly OR?: InputMaybe<ReadonlyArray<BodyWhereInput>>
	readonly access_eq?: InputMaybe<Scalars['Int']>
	readonly access_gt?: InputMaybe<Scalars['Int']>
	readonly access_gte?: InputMaybe<Scalars['Int']>
	readonly access_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>
	readonly access_lt?: InputMaybe<Scalars['Int']>
	readonly access_lte?: InputMaybe<Scalars['Int']>
	readonly access_not_eq?: InputMaybe<Scalars['Int']>
	readonly access_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>
	readonly body_eq?: InputMaybe<Scalars['Int']>
	readonly body_gt?: InputMaybe<Scalars['Int']>
	readonly body_gte?: InputMaybe<Scalars['Int']>
	readonly body_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>
	readonly body_lt?: InputMaybe<Scalars['Int']>
	readonly body_lte?: InputMaybe<Scalars['Int']>
	readonly body_not_eq?: InputMaybe<Scalars['Int']>
	readonly body_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>
	readonly cid_contains?: InputMaybe<Scalars['String']>
	readonly cid_endsWith?: InputMaybe<Scalars['String']>
	readonly cid_eq?: InputMaybe<Scalars['String']>
	readonly cid_gt?: InputMaybe<Scalars['String']>
	readonly cid_gte?: InputMaybe<Scalars['String']>
	readonly cid_in?: InputMaybe<ReadonlyArray<Scalars['String']>>
	readonly cid_lt?: InputMaybe<Scalars['String']>
	readonly cid_lte?: InputMaybe<Scalars['String']>
	readonly cid_not_contains?: InputMaybe<Scalars['String']>
	readonly cid_not_endsWith?: InputMaybe<Scalars['String']>
	readonly cid_not_eq?: InputMaybe<Scalars['String']>
	readonly cid_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>
	readonly cid_not_startsWith?: InputMaybe<Scalars['String']>
	readonly cid_startsWith?: InputMaybe<Scalars['String']>
	readonly controller_contains?: InputMaybe<Scalars['String']>
	readonly controller_endsWith?: InputMaybe<Scalars['String']>
	readonly controller_eq?: InputMaybe<Scalars['String']>
	readonly controller_gt?: InputMaybe<Scalars['String']>
	readonly controller_gte?: InputMaybe<Scalars['String']>
	readonly controller_in?: InputMaybe<ReadonlyArray<Scalars['String']>>
	readonly controller_lt?: InputMaybe<Scalars['String']>
	readonly controller_lte?: InputMaybe<Scalars['String']>
	readonly controller_not_contains?: InputMaybe<Scalars['String']>
	readonly controller_not_endsWith?: InputMaybe<Scalars['String']>
	readonly controller_not_eq?: InputMaybe<Scalars['String']>
	readonly controller_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>
	readonly controller_not_startsWith?: InputMaybe<Scalars['String']>
	readonly controller_startsWith?: InputMaybe<Scalars['String']>
	readonly creator_contains?: InputMaybe<Scalars['String']>
	readonly creator_endsWith?: InputMaybe<Scalars['String']>
	readonly creator_eq?: InputMaybe<Scalars['String']>
	readonly creator_gt?: InputMaybe<Scalars['String']>
	readonly creator_gte?: InputMaybe<Scalars['String']>
	readonly creator_in?: InputMaybe<ReadonlyArray<Scalars['String']>>
	readonly creator_lt?: InputMaybe<Scalars['String']>
	readonly creator_lte?: InputMaybe<Scalars['String']>
	readonly creator_not_contains?: InputMaybe<Scalars['String']>
	readonly creator_not_endsWith?: InputMaybe<Scalars['String']>
	readonly creator_not_eq?: InputMaybe<Scalars['String']>
	readonly creator_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>
	readonly creator_not_startsWith?: InputMaybe<Scalars['String']>
	readonly creator_startsWith?: InputMaybe<Scalars['String']>
	readonly feeModel_eq?: InputMaybe<Scalars['Int']>
	readonly feeModel_gt?: InputMaybe<Scalars['Int']>
	readonly feeModel_gte?: InputMaybe<Scalars['Int']>
	readonly feeModel_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>
	readonly feeModel_lt?: InputMaybe<Scalars['Int']>
	readonly feeModel_lte?: InputMaybe<Scalars['Int']>
	readonly feeModel_not_eq?: InputMaybe<Scalars['Int']>
	readonly feeModel_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>
	readonly fee_eq?: InputMaybe<Scalars['BigInt']>
	readonly fee_gt?: InputMaybe<Scalars['BigInt']>
	readonly fee_gte?: InputMaybe<Scalars['BigInt']>
	readonly fee_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>
	readonly fee_lt?: InputMaybe<Scalars['BigInt']>
	readonly fee_lte?: InputMaybe<Scalars['BigInt']>
	readonly fee_not_eq?: InputMaybe<Scalars['BigInt']>
	readonly fee_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>
	readonly govAsset_eq?: InputMaybe<Scalars['Int']>
	readonly govAsset_gt?: InputMaybe<Scalars['Int']>
	readonly govAsset_gte?: InputMaybe<Scalars['Int']>
	readonly govAsset_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>
	readonly govAsset_lt?: InputMaybe<Scalars['Int']>
	readonly govAsset_lte?: InputMaybe<Scalars['Int']>
	readonly govAsset_not_eq?: InputMaybe<Scalars['Int']>
	readonly govAsset_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>
	readonly id_contains?: InputMaybe<Scalars['ID']>
	readonly id_endsWith?: InputMaybe<Scalars['ID']>
	readonly id_eq?: InputMaybe<Scalars['ID']>
	readonly id_gt?: InputMaybe<Scalars['ID']>
	readonly id_gte?: InputMaybe<Scalars['ID']>
	readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>
	readonly id_lt?: InputMaybe<Scalars['ID']>
	readonly id_lte?: InputMaybe<Scalars['ID']>
	readonly id_not_contains?: InputMaybe<Scalars['ID']>
	readonly id_not_endsWith?: InputMaybe<Scalars['ID']>
	readonly id_not_eq?: InputMaybe<Scalars['ID']>
	readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>
	readonly id_not_startsWith?: InputMaybe<Scalars['ID']>
	readonly id_startsWith?: InputMaybe<Scalars['ID']>
	readonly memberLimit_eq?: InputMaybe<Scalars['BigInt']>
	readonly memberLimit_gt?: InputMaybe<Scalars['BigInt']>
	readonly memberLimit_gte?: InputMaybe<Scalars['BigInt']>
	readonly memberLimit_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>
	readonly memberLimit_lt?: InputMaybe<Scalars['BigInt']>
	readonly memberLimit_lte?: InputMaybe<Scalars['BigInt']>
	readonly memberLimit_not_eq?: InputMaybe<Scalars['BigInt']>
	readonly memberLimit_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>
	readonly members_every?: InputMaybe<BodyMemberWhereInput>
	readonly members_none?: InputMaybe<BodyMemberWhereInput>
	readonly members_some?: InputMaybe<BodyMemberWhereInput>
	readonly name_contains?: InputMaybe<Scalars['String']>
	readonly name_endsWith?: InputMaybe<Scalars['String']>
	readonly name_eq?: InputMaybe<Scalars['String']>
	readonly name_gt?: InputMaybe<Scalars['String']>
	readonly name_gte?: InputMaybe<Scalars['String']>
	readonly name_in?: InputMaybe<ReadonlyArray<Scalars['String']>>
	readonly name_lt?: InputMaybe<Scalars['String']>
	readonly name_lte?: InputMaybe<Scalars['String']>
	readonly name_not_contains?: InputMaybe<Scalars['String']>
	readonly name_not_endsWith?: InputMaybe<Scalars['String']>
	readonly name_not_eq?: InputMaybe<Scalars['String']>
	readonly name_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>
	readonly name_not_startsWith?: InputMaybe<Scalars['String']>
	readonly name_startsWith?: InputMaybe<Scalars['String']>
	readonly payAsset_eq?: InputMaybe<Scalars['Int']>
	readonly payAsset_gt?: InputMaybe<Scalars['Int']>
	readonly payAsset_gte?: InputMaybe<Scalars['Int']>
	readonly payAsset_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>
	readonly payAsset_lt?: InputMaybe<Scalars['Int']>
	readonly payAsset_lte?: InputMaybe<Scalars['Int']>
	readonly payAsset_not_eq?: InputMaybe<Scalars['Int']>
	readonly payAsset_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>
	readonly treasury_contains?: InputMaybe<Scalars['String']>
	readonly treasury_endsWith?: InputMaybe<Scalars['String']>
	readonly treasury_eq?: InputMaybe<Scalars['String']>
	readonly treasury_gt?: InputMaybe<Scalars['String']>
	readonly treasury_gte?: InputMaybe<Scalars['String']>
	readonly treasury_in?: InputMaybe<ReadonlyArray<Scalars['String']>>
	readonly treasury_lt?: InputMaybe<Scalars['String']>
	readonly treasury_lte?: InputMaybe<Scalars['String']>
	readonly treasury_not_contains?: InputMaybe<Scalars['String']>
	readonly treasury_not_endsWith?: InputMaybe<Scalars['String']>
	readonly treasury_not_eq?: InputMaybe<Scalars['String']>
	readonly treasury_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>
	readonly treasury_not_startsWith?: InputMaybe<Scalars['String']>
	readonly treasury_startsWith?: InputMaybe<Scalars['String']>
}

export type BodyWhereUniqueInput = {
	readonly id: Scalars['ID']
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

export type Config = {
	readonly __typename?: 'Config'
	readonly AWS_REGION?: Maybe<Scalars['String']>
	readonly AWS_USERPOOL_ID?: Maybe<Scalars['String']>
	readonly AWS_USERPOOL_WEBCLIENT_ID?: Maybe<Scalars['String']>
	readonly CONTACT?: Maybe<Scalars['String']>
	readonly CRYPTOCOMPARE?: Maybe<Scalars['String']>
	readonly ETH_URI?: Maybe<Scalars['String']>
	readonly GQL_KEY?: Maybe<Scalars['String']>
	readonly GQL_URI?: Maybe<Scalars['String']>
	readonly INFURA_KEY?: Maybe<Scalars['String']>
	readonly INFURA_MAINNET?: Maybe<Scalars['String']>
	readonly INFURA_MODE?: Maybe<Scalars['String']>
	readonly INFURA_SECRET?: Maybe<Scalars['String']>
	readonly INFURA_TESTNET?: Maybe<Scalars['String']>
	readonly IPFS_URI?: Maybe<Scalars['String']>
	readonly SITE_DESCRIPTION?: Maybe<Scalars['String']>
	readonly SITE_IMAGE?: Maybe<Scalars['String']>
	readonly SITE_NAME?: Maybe<Scalars['String']>
	readonly SITE_TITLE?: Maybe<Scalars['String']>
	readonly SUBZERO_PORT?: Maybe<Scalars['String']>
	readonly SUBZERO_URI?: Maybe<Scalars['String']>
	readonly SUB_URI?: Maybe<Scalars['String']>
	readonly TW_SITE_CREATOR?: Maybe<Scalars['String']>
	readonly TW_SITE_NAME?: Maybe<Scalars['String']>
	readonly UNSPLASH_KEY?: Maybe<Scalars['String']>
	readonly UNSPLASH_SECRET?: Maybe<Scalars['String']>
}

export enum Environment {
	Development = 'DEVELOPMENT',
	Production = 'PRODUCTION',
	Staging = 'STAGING',
}

export type Features = {
	readonly __typename?: 'Features'
	readonly DEBUG?: Maybe<Scalars['Boolean']>
	readonly SHOW_APPLY?: Maybe<Scalars['Boolean']>
	readonly SHOW_CAMPAIGNS?: Maybe<Scalars['Boolean']>
	readonly SHOW_FOOTER?: Maybe<Scalars['Boolean']>
	readonly SHOW_FOOTER_NAV?: Maybe<Scalars['Boolean']>
	readonly SHOW_FX?: Maybe<Scalars['Boolean']>
	readonly SHOW_HEADER?: Maybe<Scalars['Boolean']>
	readonly SHOW_HEADER_NAV?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['Float']>
	readonly _gt?: InputMaybe<Scalars['Float']>
	readonly _gte?: InputMaybe<Scalars['Float']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['Float']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['Float']>
	readonly _lte?: InputMaybe<Scalars['Float']>
	readonly _neq?: InputMaybe<Scalars['Float']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Float']>>
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

/** mutation root */
export type Mutation = {
	readonly __typename?: 'Mutation'
	/** insert data into the table: "hatched_birds" */
	readonly insert_hatched_birds?: Maybe<Hatched_Birds_Mutation_Response>
	/** insert a single row into the table: "hatched_birds" */
	readonly insert_hatched_birds_one?: Maybe<Hatched_Birds>
}

/** mutation root */
export type MutationInsert_Hatched_BirdsArgs = {
	objects: ReadonlyArray<Hatched_Birds_Insert_Input>
}

/** mutation root */
export type MutationInsert_Hatched_Birds_OneArgs = {
	object: Hatched_Birds_Insert_Input
}

export type PageInfo = {
	readonly __typename?: 'PageInfo'
	readonly endCursor: Scalars['String']
	readonly hasNextPage: Scalars['Boolean']
	readonly hasPreviousPage: Scalars['Boolean']
	readonly startCursor: Scalars['String']
}

export type Query = {
	readonly __typename?: 'Query'
	/** fetch data from the table: "base_themes" */
	readonly base_themes: ReadonlyArray<Base_Themes>
	/** fetch data from the table: "base_themes" using primary key columns */
	readonly base_themes_by_pk?: Maybe<Base_Themes>
	/** fetch data from the table: "bases" */
	readonly bases: ReadonlyArray<Bases>
	/** fetch aggregated fields from the table: "bases" */
	readonly bases_aggregate: Bases_Aggregate
	/** fetch data from the table: "bases" using primary key columns */
	readonly bases_by_pk?: Maybe<Bases>
	readonly bodies: ReadonlyArray<Body>
	readonly bodiesConnection: BodiesConnection
	readonly bodyById?: Maybe<Body>
	/** @deprecated Use `bodyById` */
	readonly bodyByUniqueInput?: Maybe<Body>
	readonly bodyMemberById?: Maybe<BodyMember>
	/** @deprecated Use `bodyMemberById` */
	readonly bodyMemberByUniqueInput?: Maybe<BodyMember>
	readonly bodyMembers: ReadonlyArray<BodyMember>
	readonly bodyMembersConnection: BodyMembersConnection
	/** An array relationship */
	readonly changes: ReadonlyArray<Changes>
	/** An aggregate relationship */
	readonly changes_aggregate: Changes_Aggregate
	/** fetch data from the table: "changes" using primary key columns */
	readonly changes_by_pk?: Maybe<Changes>
	/** An array relationship */
	readonly changes_collection: ReadonlyArray<Changes_Collection>
	/** fetch data from the table: "changes_collection" using primary key columns */
	readonly changes_collection_by_pk?: Maybe<Changes_Collection>
	/** fetch data from the table: "collection_banners" */
	readonly collection_banners: ReadonlyArray<Collection_Banners>
	/** fetch data from the table: "collection_banners" using primary key columns */
	readonly collection_banners_by_pk?: Maybe<Collection_Banners>
	/** fetch data from the table: "collections" */
	readonly collections: ReadonlyArray<Collections>
	/** fetch aggregated fields from the table: "collections" */
	readonly collections_aggregate: Collections_Aggregate
	/** fetch data from the table: "collections" using primary key columns */
	readonly collections_by_pk?: Maybe<Collections>
	readonly config: Config
	/** fetch data from the table: "distinct_kanaria_nfts" */
	readonly distinct_kanaria_nfts: ReadonlyArray<Distinct_Kanaria_Nfts>
	/** fetch aggregated fields from the table: "distinct_kanaria_nfts" */
	readonly distinct_kanaria_nfts_aggregate: Distinct_Kanaria_Nfts_Aggregate
	/** fetch data from the table: "distinct_nfts" */
	readonly distinct_nfts: ReadonlyArray<Distinct_Nfts>
	/** fetch aggregated fields from the table: "distinct_nfts" */
	readonly distinct_nfts_aggregate: Distinct_Nfts_Aggregate
	/** fetch data from the table: "dutchie" */
	readonly dutchie: ReadonlyArray<Dutchie>
	/** fetch data from the table: "dutchie" using primary key columns */
	readonly dutchie_by_pk?: Maybe<Dutchie>
	readonly features: Features
	/** fetch data from the table: "gems_enabled" */
	readonly gems_enabled: ReadonlyArray<Gems_Enabled>
	/** fetch data from the table: "gems_enabled" using primary key columns */
	readonly gems_enabled_by_pk?: Maybe<Gems_Enabled>
	/** execute function "get_by_unicode" which returns "reactions" */
	readonly get_by_unicode: ReadonlyArray<Reactions>
	/** execute function "get_by_unicode" and query aggregates on result of table type "reactions" */
	readonly get_by_unicode_aggregate: Reactions_Aggregate
	/** execute function "get_newly_listed" which returns "nfts" */
	readonly get_newly_listed: ReadonlyArray<Nfts>
	/** execute function "get_newly_listed" and query aggregates on result of table type "nfts" */
	readonly get_newly_listed_aggregate: Nfts_Aggregate
	/** execute function "get_newly_minted" which returns "nfts" */
	readonly get_newly_minted: ReadonlyArray<Nfts>
	/** execute function "get_newly_minted" and query aggregates on result of table type "nfts" */
	readonly get_newly_minted_aggregate: Nfts_Aggregate
	/** execute function "get_ordered_changes_stats" which returns "changes" */
	readonly get_ordered_changes_stats: ReadonlyArray<Changes>
	/** execute function "get_ordered_changes_stats" and query aggregates on result of table type "changes" */
	readonly get_ordered_changes_stats_aggregate: Changes_Aggregate
	/** fetch data from the table: "hatched_birds" */
	readonly hatched_birds: ReadonlyArray<Hatched_Birds>
	/** fetch data from the table: "hatched_birds" using primary key columns */
	readonly hatched_birds_by_pk?: Maybe<Hatched_Birds>
	readonly links: ReadonlyArray<Maybe<Link>>
	/** An array relationship */
	readonly nfts: ReadonlyArray<Nfts>
	/** An aggregate relationship */
	readonly nfts_aggregate: Nfts_Aggregate
	/** fetch data from the table: "nfts" using primary key columns */
	readonly nfts_by_pk?: Maybe<Nfts>
	/** fetch data from the table: "nfts_reactions_stats" */
	readonly nfts_reactions_stats: ReadonlyArray<Nfts_Reactions_Stats>
	/** fetch aggregated fields from the table: "nfts_reactions_stats" */
	readonly nfts_reactions_stats_aggregate: Nfts_Reactions_Stats_Aggregate
	/** fetch data from the table: "nfts_stats" */
	readonly nfts_stats: ReadonlyArray<Nfts_Stats>
	/** fetch aggregated fields from the table: "nfts_stats" */
	readonly nfts_stats_aggregate: Nfts_Stats_Aggregate
	/** An array relationship */
	readonly parts: ReadonlyArray<Parts>
	/** An aggregate relationship */
	readonly parts_aggregate: Parts_Aggregate
	/** fetch data from the table: "parts" using primary key columns */
	readonly parts_by_pk?: Maybe<Parts>
	/** fetch data from the table: "reactions" */
	readonly reactions: ReadonlyArray<Reactions>
	/** fetch aggregated fields from the table: "reactions" */
	readonly reactions_aggregate: Reactions_Aggregate
	/** fetch data from the table: "reactions" using primary key columns */
	readonly reactions_by_pk?: Maybe<Reactions>
	/** An array relationship */
	readonly reactions_unicode: ReadonlyArray<Reactions_Unicode>
	/** An aggregate relationship */
	readonly reactions_unicode_aggregate: Reactions_Unicode_Aggregate
	/** fetch data from the table: "reactions_users" */
	readonly reactions_users: ReadonlyArray<Reactions_Users>
	/** fetch aggregated fields from the table: "reactions_users" */
	readonly reactions_users_aggregate: Reactions_Users_Aggregate
	/** fetch data from the table: "recently_listed" */
	readonly recently_listed: ReadonlyArray<Recently_Listed>
	/** fetch aggregated fields from the table: "recently_listed" */
	readonly recently_listed_aggregate: Recently_Listed_Aggregate
	/** An array relationship */
	readonly resources: ReadonlyArray<Resources>
	/** An aggregate relationship */
	readonly resources_aggregate: Resources_Aggregate
	/** An array relationship */
	readonly resources_base_themes: ReadonlyArray<Resources_Base_Themes>
	/** fetch data from the table: "resources_base_themes" using primary key columns */
	readonly resources_base_themes_by_pk?: Maybe<Resources_Base_Themes>
	/** fetch data from the table: "resources" using primary key columns */
	readonly resources_by_pk?: Maybe<Resources>
	/** An array relationship */
	readonly resources_parts: ReadonlyArray<Resources_Parts>
	/** An aggregate relationship */
	readonly resources_parts_aggregate: Resources_Parts_Aggregate
	/** fetch data from the table: "resources_parts" using primary key columns */
	readonly resources_parts_by_pk?: Maybe<Resources_Parts>
	/** fetch data from the table: "sales" */
	readonly sales: ReadonlyArray<Sales>
	/** An array relationship */
	readonly singular_blacklisted_accounts: ReadonlyArray<Singular_Blacklisted_Accounts>
	/** fetch data from the table: "singular_blacklisted_accounts" using primary key columns */
	readonly singular_blacklisted_accounts_by_pk?: Maybe<Singular_Blacklisted_Accounts>
	/** An array relationship */
	readonly singular_blacklisted_collections: ReadonlyArray<Singular_Blacklisted_Collections>
	/** fetch data from the table: "singular_blacklisted_collections" using primary key columns */
	readonly singular_blacklisted_collections_by_pk?: Maybe<Singular_Blacklisted_Collections>
	/** An array relationship */
	readonly singular_curated: ReadonlyArray<Singular_Curated>
	/** An aggregate relationship */
	readonly singular_curated_aggregate: Singular_Curated_Aggregate
	/** fetch data from the table: "singular_curated" using primary key columns */
	readonly singular_curated_by_pk?: Maybe<Singular_Curated>
	/** fetch data from the table: "singular_curated_collections" */
	readonly singular_curated_collections: ReadonlyArray<Singular_Curated_Collections>
	/** fetch aggregated fields from the table: "singular_curated_collections" */
	readonly singular_curated_collections_aggregate: Singular_Curated_Collections_Aggregate
	/** fetch data from the table: "singular_curated_collections" using primary key columns */
	readonly singular_curated_collections_by_pk?: Maybe<Singular_Curated_Collections>
	/** An array relationship */
	readonly singular_nsfw_collections: ReadonlyArray<Singular_Nsfw_Collections>
	/** An aggregate relationship */
	readonly singular_nsfw_collections_aggregate: Singular_Nsfw_Collections_Aggregate
	/** fetch data from the table: "singular_nsfw_collections" using primary key columns */
	readonly singular_nsfw_collections_by_pk?: Maybe<Singular_Nsfw_Collections>
	/** fetch data from the table: "singular_nsfw_nfts" */
	readonly singular_nsfw_nfts: ReadonlyArray<Singular_Nsfw_Nfts>
	/** fetch aggregated fields from the table: "singular_nsfw_nfts" */
	readonly singular_nsfw_nfts_aggregate: Singular_Nsfw_Nfts_Aggregate
	/** fetch data from the table: "singular_nsfw_nfts" using primary key columns */
	readonly singular_nsfw_nfts_by_pk?: Maybe<Singular_Nsfw_Nfts>
	/** An array relationship */
	readonly singular_verified_collections: ReadonlyArray<Singular_Verified_Collections>
	/** An aggregate relationship */
	readonly singular_verified_collections_aggregate: Singular_Verified_Collections_Aggregate
	/** fetch data from the table: "singular_verified_collections" using primary key columns */
	readonly singular_verified_collections_by_pk?: Maybe<Singular_Verified_Collections>
	/** fetch data from the table: "system" */
	readonly system: ReadonlyArray<System>
	/** fetch data from the table: "system" using primary key columns */
	readonly system_by_pk?: Maybe<System>
	readonly version: Scalars['String']
	/** fetch data from the table: "yuletide_item_track" */
	readonly yuletide_item_track: ReadonlyArray<Yuletide_Item_Track>
	/** fetch aggregated fields from the table: "yuletide_item_track" */
	readonly yuletide_item_track_aggregate: Yuletide_Item_Track_Aggregate
	/** fetch data from the table: "yuletide_item_track" using primary key columns */
	readonly yuletide_item_track_by_pk?: Maybe<Yuletide_Item_Track>
}

export type QueryBase_ThemesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Base_Themes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Base_Themes_Order_By>>
	where?: InputMaybe<Base_Themes_Bool_Exp>
}

export type QueryBase_Themes_By_PkArgs = {
	id: Scalars['String']
}

export type QueryBasesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Bases_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Bases_Order_By>>
	where?: InputMaybe<Bases_Bool_Exp>
}

export type QueryBases_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Bases_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Bases_Order_By>>
	where?: InputMaybe<Bases_Bool_Exp>
}

export type QueryBases_By_PkArgs = {
	id: Scalars['String']
}

export type QueryBodiesArgs = {
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<InputMaybe<BodyOrderByInput>>>
	where?: InputMaybe<BodyWhereInput>
}

export type QueryBodiesConnectionArgs = {
	after?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	orderBy: ReadonlyArray<BodyOrderByInput>
	where?: InputMaybe<BodyWhereInput>
}

export type QueryBodyByIdArgs = {
	id: Scalars['ID']
}

export type QueryBodyByUniqueInputArgs = {
	where: BodyWhereUniqueInput
}

export type QueryBodyMemberByIdArgs = {
	id: Scalars['ID']
}

export type QueryBodyMemberByUniqueInputArgs = {
	where: BodyMemberWhereUniqueInput
}

export type QueryBodyMembersArgs = {
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	orderBy?: InputMaybe<ReadonlyArray<InputMaybe<BodyMemberOrderByInput>>>
	where?: InputMaybe<BodyMemberWhereInput>
}

export type QueryBodyMembersConnectionArgs = {
	after?: InputMaybe<Scalars['String']>
	first?: InputMaybe<Scalars['Int']>
	orderBy: ReadonlyArray<BodyMemberOrderByInput>
	where?: InputMaybe<BodyMemberWhereInput>
}

export type QueryChangesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>
	where?: InputMaybe<Changes_Bool_Exp>
}

export type QueryChanges_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>
	where?: InputMaybe<Changes_Bool_Exp>
}

export type QueryChanges_By_PkArgs = {
	id: Scalars['Int']
}

export type QueryChanges_CollectionArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Changes_Collection_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Changes_Collection_Order_By>>
	where?: InputMaybe<Changes_Collection_Bool_Exp>
}

export type QueryChanges_Collection_By_PkArgs = {
	id: Scalars['Int']
}

export type QueryCollection_BannersArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Collection_Banners_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Collection_Banners_Order_By>>
	where?: InputMaybe<Collection_Banners_Bool_Exp>
}

export type QueryCollection_Banners_By_PkArgs = {
	collection_id: Scalars['String']
}

export type QueryCollectionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Collections_Order_By>>
	where?: InputMaybe<Collections_Bool_Exp>
}

export type QueryCollections_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Collections_Order_By>>
	where?: InputMaybe<Collections_Bool_Exp>
}

export type QueryCollections_By_PkArgs = {
	id: Scalars['String']
}

export type QueryConfigArgs = {
	env: Environment
}

export type QueryDistinct_Kanaria_NftsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Order_By>>
	where?: InputMaybe<Distinct_Kanaria_Nfts_Bool_Exp>
}

export type QueryDistinct_Kanaria_Nfts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Order_By>>
	where?: InputMaybe<Distinct_Kanaria_Nfts_Bool_Exp>
}

export type QueryDistinct_NftsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Distinct_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Distinct_Nfts_Order_By>>
	where?: InputMaybe<Distinct_Nfts_Bool_Exp>
}

export type QueryDistinct_Nfts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Distinct_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Distinct_Nfts_Order_By>>
	where?: InputMaybe<Distinct_Nfts_Bool_Exp>
}

export type QueryDutchieArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Dutchie_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Dutchie_Order_By>>
	where?: InputMaybe<Dutchie_Bool_Exp>
}

export type QueryDutchie_By_PkArgs = {
	id: Scalars['Int']
}

export type QueryFeaturesArgs = {
	env: Environment
}

export type QueryGems_EnabledArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Gems_Enabled_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Gems_Enabled_Order_By>>
	where?: InputMaybe<Gems_Enabled_Bool_Exp>
}

export type QueryGems_Enabled_By_PkArgs = {
	id: Scalars['String']
}

export type QueryGet_By_UnicodeArgs = {
	args: Get_By_Unicode_Args
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>
	where?: InputMaybe<Reactions_Bool_Exp>
}

export type QueryGet_By_Unicode_AggregateArgs = {
	args: Get_By_Unicode_Args
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>
	where?: InputMaybe<Reactions_Bool_Exp>
}

export type QueryGet_Newly_ListedArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

export type QueryGet_Newly_Listed_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

export type QueryGet_Newly_MintedArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

export type QueryGet_Newly_Minted_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

export type QueryGet_Ordered_Changes_StatsArgs = {
	args: Get_Ordered_Changes_Stats_Args
	distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>
	where?: InputMaybe<Changes_Bool_Exp>
}

export type QueryGet_Ordered_Changes_Stats_AggregateArgs = {
	args: Get_Ordered_Changes_Stats_Args
	distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>
	where?: InputMaybe<Changes_Bool_Exp>
}

export type QueryHatched_BirdsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Hatched_Birds_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Hatched_Birds_Order_By>>
	where?: InputMaybe<Hatched_Birds_Bool_Exp>
}

export type QueryHatched_Birds_By_PkArgs = {
	id: Scalars['String']
}

export type QueryNftsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

export type QueryNfts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

export type QueryNfts_By_PkArgs = {
	id: Scalars['String']
}

export type QueryNfts_Reactions_StatsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Order_By>>
	where?: InputMaybe<Nfts_Reactions_Stats_Bool_Exp>
}

export type QueryNfts_Reactions_Stats_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Order_By>>
	where?: InputMaybe<Nfts_Reactions_Stats_Bool_Exp>
}

export type QueryNfts_StatsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Stats_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Stats_Order_By>>
	where?: InputMaybe<Nfts_Stats_Bool_Exp>
}

export type QueryNfts_Stats_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Stats_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Stats_Order_By>>
	where?: InputMaybe<Nfts_Stats_Bool_Exp>
}

export type QueryPartsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Parts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Parts_Order_By>>
	where?: InputMaybe<Parts_Bool_Exp>
}

export type QueryParts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Parts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Parts_Order_By>>
	where?: InputMaybe<Parts_Bool_Exp>
}

export type QueryParts_By_PkArgs = {
	id: Scalars['String']
}

export type QueryReactionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>
	where?: InputMaybe<Reactions_Bool_Exp>
}

export type QueryReactions_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>
	where?: InputMaybe<Reactions_Bool_Exp>
}

export type QueryReactions_By_PkArgs = {
	nft_id: Scalars['String']
	owner: Scalars['String']
	unicode: Scalars['String']
}

export type QueryReactions_UnicodeArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Unicode_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Unicode_Order_By>>
	where?: InputMaybe<Reactions_Unicode_Bool_Exp>
}

export type QueryReactions_Unicode_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Unicode_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Unicode_Order_By>>
	where?: InputMaybe<Reactions_Unicode_Bool_Exp>
}

export type QueryReactions_UsersArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Users_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Users_Order_By>>
	where?: InputMaybe<Reactions_Users_Bool_Exp>
}

export type QueryReactions_Users_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Users_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Users_Order_By>>
	where?: InputMaybe<Reactions_Users_Bool_Exp>
}

export type QueryRecently_ListedArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Recently_Listed_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Recently_Listed_Order_By>>
	where?: InputMaybe<Recently_Listed_Bool_Exp>
}

export type QueryRecently_Listed_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Recently_Listed_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Recently_Listed_Order_By>>
	where?: InputMaybe<Recently_Listed_Bool_Exp>
}

export type QueryResourcesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>
	where?: InputMaybe<Resources_Bool_Exp>
}

export type QueryResources_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>
	where?: InputMaybe<Resources_Bool_Exp>
}

export type QueryResources_Base_ThemesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Order_By>>
	where?: InputMaybe<Resources_Base_Themes_Bool_Exp>
}

export type QueryResources_Base_Themes_By_PkArgs = {
	resource_id: Scalars['String']
	theme_id: Scalars['String']
}

export type QueryResources_By_PkArgs = {
	id: Scalars['String']
}

export type QueryResources_PartsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Parts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Parts_Order_By>>
	where?: InputMaybe<Resources_Parts_Bool_Exp>
}

export type QueryResources_Parts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Parts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Parts_Order_By>>
	where?: InputMaybe<Resources_Parts_Bool_Exp>
}

export type QueryResources_Parts_By_PkArgs = {
	part_id: Scalars['String']
	resource_id: Scalars['String']
}

export type QuerySalesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Sales_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Sales_Order_By>>
	where?: InputMaybe<Sales_Bool_Exp>
}

export type QuerySingular_Blacklisted_AccountsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Order_By>>
	where?: InputMaybe<Singular_Blacklisted_Accounts_Bool_Exp>
}

export type QuerySingular_Blacklisted_Accounts_By_PkArgs = {
	account: Scalars['String']
}

export type QuerySingular_Blacklisted_CollectionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Order_By>>
	where?: InputMaybe<Singular_Blacklisted_Collections_Bool_Exp>
}

export type QuerySingular_Blacklisted_Collections_By_PkArgs = {
	collection_id: Scalars['String']
}

export type QuerySingular_CuratedArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>
	where?: InputMaybe<Singular_Curated_Bool_Exp>
}

export type QuerySingular_Curated_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>
	where?: InputMaybe<Singular_Curated_Bool_Exp>
}

export type QuerySingular_Curated_By_PkArgs = {
	nft_id: Scalars['String']
}

export type QuerySingular_Curated_CollectionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Order_By>>
	where?: InputMaybe<Singular_Curated_Collections_Bool_Exp>
}

export type QuerySingular_Curated_Collections_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Order_By>>
	where?: InputMaybe<Singular_Curated_Collections_Bool_Exp>
}

export type QuerySingular_Curated_Collections_By_PkArgs = {
	collection_id: Scalars['String']
}

export type QuerySingular_Nsfw_CollectionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>
}

export type QuerySingular_Nsfw_Collections_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>
}

export type QuerySingular_Nsfw_Collections_By_PkArgs = {
	collection_id: Scalars['String']
}

export type QuerySingular_Nsfw_NftsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>
}

export type QuerySingular_Nsfw_Nfts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>
}

export type QuerySingular_Nsfw_Nfts_By_PkArgs = {
	nft_id: Scalars['String']
}

export type QuerySingular_Verified_CollectionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Order_By>>
	where?: InputMaybe<Singular_Verified_Collections_Bool_Exp>
}

export type QuerySingular_Verified_Collections_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Order_By>>
	where?: InputMaybe<Singular_Verified_Collections_Bool_Exp>
}

export type QuerySingular_Verified_Collections_By_PkArgs = {
	collection_id: Scalars['String']
}

export type QuerySystemArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<System_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<System_Order_By>>
	where?: InputMaybe<System_Bool_Exp>
}

export type QuerySystem_By_PkArgs = {
	purchaseEnabled: Scalars['Boolean']
}

export type QueryYuletide_Item_TrackArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Order_By>>
	where?: InputMaybe<Yuletide_Item_Track_Bool_Exp>
}

export type QueryYuletide_Item_Track_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Order_By>>
	where?: InputMaybe<Yuletide_Item_Track_Bool_Exp>
}

export type QueryYuletide_Item_Track_By_PkArgs = {
	id: Scalars['String']
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

export type Subscription = {
	readonly __typename?: 'Subscription'
	/** fetch data from the table: "base_themes" */
	readonly base_themes: ReadonlyArray<Base_Themes>
	/** fetch data from the table: "base_themes" using primary key columns */
	readonly base_themes_by_pk?: Maybe<Base_Themes>
	/** fetch data from the table: "bases" */
	readonly bases: ReadonlyArray<Bases>
	/** fetch aggregated fields from the table: "bases" */
	readonly bases_aggregate: Bases_Aggregate
	/** fetch data from the table: "bases" using primary key columns */
	readonly bases_by_pk?: Maybe<Bases>
	/** An array relationship */
	readonly changes: ReadonlyArray<Changes>
	/** An aggregate relationship */
	readonly changes_aggregate: Changes_Aggregate
	/** fetch data from the table: "changes" using primary key columns */
	readonly changes_by_pk?: Maybe<Changes>
	/** An array relationship */
	readonly changes_collection: ReadonlyArray<Changes_Collection>
	/** fetch data from the table: "changes_collection" using primary key columns */
	readonly changes_collection_by_pk?: Maybe<Changes_Collection>
	/** fetch data from the table: "collection_banners" */
	readonly collection_banners: ReadonlyArray<Collection_Banners>
	/** fetch data from the table: "collection_banners" using primary key columns */
	readonly collection_banners_by_pk?: Maybe<Collection_Banners>
	/** fetch data from the table: "collections" */
	readonly collections: ReadonlyArray<Collections>
	/** fetch aggregated fields from the table: "collections" */
	readonly collections_aggregate: Collections_Aggregate
	/** fetch data from the table: "collections" using primary key columns */
	readonly collections_by_pk?: Maybe<Collections>
	/** fetch data from the table: "distinct_kanaria_nfts" */
	readonly distinct_kanaria_nfts: ReadonlyArray<Distinct_Kanaria_Nfts>
	/** fetch aggregated fields from the table: "distinct_kanaria_nfts" */
	readonly distinct_kanaria_nfts_aggregate: Distinct_Kanaria_Nfts_Aggregate
	/** fetch data from the table: "distinct_nfts" */
	readonly distinct_nfts: ReadonlyArray<Distinct_Nfts>
	/** fetch aggregated fields from the table: "distinct_nfts" */
	readonly distinct_nfts_aggregate: Distinct_Nfts_Aggregate
	/** fetch data from the table: "dutchie" */
	readonly dutchie: ReadonlyArray<Dutchie>
	/** fetch data from the table: "dutchie" using primary key columns */
	readonly dutchie_by_pk?: Maybe<Dutchie>
	/** fetch data from the table: "gems_enabled" */
	readonly gems_enabled: ReadonlyArray<Gems_Enabled>
	/** fetch data from the table: "gems_enabled" using primary key columns */
	readonly gems_enabled_by_pk?: Maybe<Gems_Enabled>
	/** execute function "get_by_unicode" which returns "reactions" */
	readonly get_by_unicode: ReadonlyArray<Reactions>
	/** execute function "get_by_unicode" and query aggregates on result of table type "reactions" */
	readonly get_by_unicode_aggregate: Reactions_Aggregate
	/** execute function "get_newly_listed" which returns "nfts" */
	readonly get_newly_listed: ReadonlyArray<Nfts>
	/** execute function "get_newly_listed" and query aggregates on result of table type "nfts" */
	readonly get_newly_listed_aggregate: Nfts_Aggregate
	/** execute function "get_newly_minted" which returns "nfts" */
	readonly get_newly_minted: ReadonlyArray<Nfts>
	/** execute function "get_newly_minted" and query aggregates on result of table type "nfts" */
	readonly get_newly_minted_aggregate: Nfts_Aggregate
	/** execute function "get_ordered_changes_stats" which returns "changes" */
	readonly get_ordered_changes_stats: ReadonlyArray<Changes>
	/** execute function "get_ordered_changes_stats" and query aggregates on result of table type "changes" */
	readonly get_ordered_changes_stats_aggregate: Changes_Aggregate
	/** fetch data from the table: "hatched_birds" */
	readonly hatched_birds: ReadonlyArray<Hatched_Birds>
	/** fetch data from the table: "hatched_birds" using primary key columns */
	readonly hatched_birds_by_pk?: Maybe<Hatched_Birds>
	/** An array relationship */
	readonly nfts: ReadonlyArray<Nfts>
	/** An aggregate relationship */
	readonly nfts_aggregate: Nfts_Aggregate
	/** fetch data from the table: "nfts" using primary key columns */
	readonly nfts_by_pk?: Maybe<Nfts>
	/** fetch data from the table: "nfts_reactions_stats" */
	readonly nfts_reactions_stats: ReadonlyArray<Nfts_Reactions_Stats>
	/** fetch aggregated fields from the table: "nfts_reactions_stats" */
	readonly nfts_reactions_stats_aggregate: Nfts_Reactions_Stats_Aggregate
	/** fetch data from the table: "nfts_stats" */
	readonly nfts_stats: ReadonlyArray<Nfts_Stats>
	/** fetch aggregated fields from the table: "nfts_stats" */
	readonly nfts_stats_aggregate: Nfts_Stats_Aggregate
	/** An array relationship */
	readonly parts: ReadonlyArray<Parts>
	/** An aggregate relationship */
	readonly parts_aggregate: Parts_Aggregate
	/** fetch data from the table: "parts" using primary key columns */
	readonly parts_by_pk?: Maybe<Parts>
	/** fetch data from the table: "reactions" */
	readonly reactions: ReadonlyArray<Reactions>
	/** fetch aggregated fields from the table: "reactions" */
	readonly reactions_aggregate: Reactions_Aggregate
	/** fetch data from the table: "reactions" using primary key columns */
	readonly reactions_by_pk?: Maybe<Reactions>
	/** An array relationship */
	readonly reactions_unicode: ReadonlyArray<Reactions_Unicode>
	/** An aggregate relationship */
	readonly reactions_unicode_aggregate: Reactions_Unicode_Aggregate
	/** fetch data from the table: "reactions_users" */
	readonly reactions_users: ReadonlyArray<Reactions_Users>
	/** fetch aggregated fields from the table: "reactions_users" */
	readonly reactions_users_aggregate: Reactions_Users_Aggregate
	/** fetch data from the table: "recently_listed" */
	readonly recently_listed: ReadonlyArray<Recently_Listed>
	/** fetch aggregated fields from the table: "recently_listed" */
	readonly recently_listed_aggregate: Recently_Listed_Aggregate
	/** An array relationship */
	readonly resources: ReadonlyArray<Resources>
	/** An aggregate relationship */
	readonly resources_aggregate: Resources_Aggregate
	/** An array relationship */
	readonly resources_base_themes: ReadonlyArray<Resources_Base_Themes>
	/** fetch data from the table: "resources_base_themes" using primary key columns */
	readonly resources_base_themes_by_pk?: Maybe<Resources_Base_Themes>
	/** fetch data from the table: "resources" using primary key columns */
	readonly resources_by_pk?: Maybe<Resources>
	/** An array relationship */
	readonly resources_parts: ReadonlyArray<Resources_Parts>
	/** An aggregate relationship */
	readonly resources_parts_aggregate: Resources_Parts_Aggregate
	/** fetch data from the table: "resources_parts" using primary key columns */
	readonly resources_parts_by_pk?: Maybe<Resources_Parts>
	/** fetch data from the table: "sales" */
	readonly sales: ReadonlyArray<Sales>
	/** An array relationship */
	readonly singular_blacklisted_accounts: ReadonlyArray<Singular_Blacklisted_Accounts>
	/** fetch data from the table: "singular_blacklisted_accounts" using primary key columns */
	readonly singular_blacklisted_accounts_by_pk?: Maybe<Singular_Blacklisted_Accounts>
	/** An array relationship */
	readonly singular_blacklisted_collections: ReadonlyArray<Singular_Blacklisted_Collections>
	/** fetch data from the table: "singular_blacklisted_collections" using primary key columns */
	readonly singular_blacklisted_collections_by_pk?: Maybe<Singular_Blacklisted_Collections>
	/** An array relationship */
	readonly singular_curated: ReadonlyArray<Singular_Curated>
	/** An aggregate relationship */
	readonly singular_curated_aggregate: Singular_Curated_Aggregate
	/** fetch data from the table: "singular_curated" using primary key columns */
	readonly singular_curated_by_pk?: Maybe<Singular_Curated>
	/** fetch data from the table: "singular_curated_collections" */
	readonly singular_curated_collections: ReadonlyArray<Singular_Curated_Collections>
	/** fetch aggregated fields from the table: "singular_curated_collections" */
	readonly singular_curated_collections_aggregate: Singular_Curated_Collections_Aggregate
	/** fetch data from the table: "singular_curated_collections" using primary key columns */
	readonly singular_curated_collections_by_pk?: Maybe<Singular_Curated_Collections>
	/** An array relationship */
	readonly singular_nsfw_collections: ReadonlyArray<Singular_Nsfw_Collections>
	/** An aggregate relationship */
	readonly singular_nsfw_collections_aggregate: Singular_Nsfw_Collections_Aggregate
	/** fetch data from the table: "singular_nsfw_collections" using primary key columns */
	readonly singular_nsfw_collections_by_pk?: Maybe<Singular_Nsfw_Collections>
	/** fetch data from the table: "singular_nsfw_nfts" */
	readonly singular_nsfw_nfts: ReadonlyArray<Singular_Nsfw_Nfts>
	/** fetch aggregated fields from the table: "singular_nsfw_nfts" */
	readonly singular_nsfw_nfts_aggregate: Singular_Nsfw_Nfts_Aggregate
	/** fetch data from the table: "singular_nsfw_nfts" using primary key columns */
	readonly singular_nsfw_nfts_by_pk?: Maybe<Singular_Nsfw_Nfts>
	/** An array relationship */
	readonly singular_verified_collections: ReadonlyArray<Singular_Verified_Collections>
	/** An aggregate relationship */
	readonly singular_verified_collections_aggregate: Singular_Verified_Collections_Aggregate
	/** fetch data from the table: "singular_verified_collections" using primary key columns */
	readonly singular_verified_collections_by_pk?: Maybe<Singular_Verified_Collections>
	/** fetch data from the table: "system" */
	readonly system: ReadonlyArray<System>
	/** fetch data from the table: "system" using primary key columns */
	readonly system_by_pk?: Maybe<System>
	/** fetch data from the table: "yuletide_item_track" */
	readonly yuletide_item_track: ReadonlyArray<Yuletide_Item_Track>
	/** fetch aggregated fields from the table: "yuletide_item_track" */
	readonly yuletide_item_track_aggregate: Yuletide_Item_Track_Aggregate
	/** fetch data from the table: "yuletide_item_track" using primary key columns */
	readonly yuletide_item_track_by_pk?: Maybe<Yuletide_Item_Track>
}

export type SubscriptionBase_ThemesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Base_Themes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Base_Themes_Order_By>>
	where?: InputMaybe<Base_Themes_Bool_Exp>
}

export type SubscriptionBase_Themes_By_PkArgs = {
	id: Scalars['String']
}

export type SubscriptionBasesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Bases_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Bases_Order_By>>
	where?: InputMaybe<Bases_Bool_Exp>
}

export type SubscriptionBases_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Bases_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Bases_Order_By>>
	where?: InputMaybe<Bases_Bool_Exp>
}

export type SubscriptionBases_By_PkArgs = {
	id: Scalars['String']
}

export type SubscriptionChangesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>
	where?: InputMaybe<Changes_Bool_Exp>
}

export type SubscriptionChanges_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>
	where?: InputMaybe<Changes_Bool_Exp>
}

export type SubscriptionChanges_By_PkArgs = {
	id: Scalars['Int']
}

export type SubscriptionChanges_CollectionArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Changes_Collection_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Changes_Collection_Order_By>>
	where?: InputMaybe<Changes_Collection_Bool_Exp>
}

export type SubscriptionChanges_Collection_By_PkArgs = {
	id: Scalars['Int']
}

export type SubscriptionCollection_BannersArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Collection_Banners_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Collection_Banners_Order_By>>
	where?: InputMaybe<Collection_Banners_Bool_Exp>
}

export type SubscriptionCollection_Banners_By_PkArgs = {
	collection_id: Scalars['String']
}

export type SubscriptionCollectionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Collections_Order_By>>
	where?: InputMaybe<Collections_Bool_Exp>
}

export type SubscriptionCollections_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Collections_Order_By>>
	where?: InputMaybe<Collections_Bool_Exp>
}

export type SubscriptionCollections_By_PkArgs = {
	id: Scalars['String']
}

export type SubscriptionDistinct_Kanaria_NftsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Order_By>>
	where?: InputMaybe<Distinct_Kanaria_Nfts_Bool_Exp>
}

export type SubscriptionDistinct_Kanaria_Nfts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Order_By>>
	where?: InputMaybe<Distinct_Kanaria_Nfts_Bool_Exp>
}

export type SubscriptionDistinct_NftsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Distinct_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Distinct_Nfts_Order_By>>
	where?: InputMaybe<Distinct_Nfts_Bool_Exp>
}

export type SubscriptionDistinct_Nfts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Distinct_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Distinct_Nfts_Order_By>>
	where?: InputMaybe<Distinct_Nfts_Bool_Exp>
}

export type SubscriptionDutchieArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Dutchie_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Dutchie_Order_By>>
	where?: InputMaybe<Dutchie_Bool_Exp>
}

export type SubscriptionDutchie_By_PkArgs = {
	id: Scalars['Int']
}

export type SubscriptionGems_EnabledArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Gems_Enabled_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Gems_Enabled_Order_By>>
	where?: InputMaybe<Gems_Enabled_Bool_Exp>
}

export type SubscriptionGems_Enabled_By_PkArgs = {
	id: Scalars['String']
}

export type SubscriptionGet_By_UnicodeArgs = {
	args: Get_By_Unicode_Args
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>
	where?: InputMaybe<Reactions_Bool_Exp>
}

export type SubscriptionGet_By_Unicode_AggregateArgs = {
	args: Get_By_Unicode_Args
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>
	where?: InputMaybe<Reactions_Bool_Exp>
}

export type SubscriptionGet_Newly_ListedArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

export type SubscriptionGet_Newly_Listed_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

export type SubscriptionGet_Newly_MintedArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

export type SubscriptionGet_Newly_Minted_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

export type SubscriptionGet_Ordered_Changes_StatsArgs = {
	args: Get_Ordered_Changes_Stats_Args
	distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>
	where?: InputMaybe<Changes_Bool_Exp>
}

export type SubscriptionGet_Ordered_Changes_Stats_AggregateArgs = {
	args: Get_Ordered_Changes_Stats_Args
	distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>
	where?: InputMaybe<Changes_Bool_Exp>
}

export type SubscriptionHatched_BirdsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Hatched_Birds_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Hatched_Birds_Order_By>>
	where?: InputMaybe<Hatched_Birds_Bool_Exp>
}

export type SubscriptionHatched_Birds_By_PkArgs = {
	id: Scalars['String']
}

export type SubscriptionNftsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

export type SubscriptionNfts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

export type SubscriptionNfts_By_PkArgs = {
	id: Scalars['String']
}

export type SubscriptionNfts_Reactions_StatsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Order_By>>
	where?: InputMaybe<Nfts_Reactions_Stats_Bool_Exp>
}

export type SubscriptionNfts_Reactions_Stats_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Order_By>>
	where?: InputMaybe<Nfts_Reactions_Stats_Bool_Exp>
}

export type SubscriptionNfts_StatsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Stats_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Stats_Order_By>>
	where?: InputMaybe<Nfts_Stats_Bool_Exp>
}

export type SubscriptionNfts_Stats_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Stats_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Stats_Order_By>>
	where?: InputMaybe<Nfts_Stats_Bool_Exp>
}

export type SubscriptionPartsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Parts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Parts_Order_By>>
	where?: InputMaybe<Parts_Bool_Exp>
}

export type SubscriptionParts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Parts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Parts_Order_By>>
	where?: InputMaybe<Parts_Bool_Exp>
}

export type SubscriptionParts_By_PkArgs = {
	id: Scalars['String']
}

export type SubscriptionReactionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>
	where?: InputMaybe<Reactions_Bool_Exp>
}

export type SubscriptionReactions_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>
	where?: InputMaybe<Reactions_Bool_Exp>
}

export type SubscriptionReactions_By_PkArgs = {
	nft_id: Scalars['String']
	owner: Scalars['String']
	unicode: Scalars['String']
}

export type SubscriptionReactions_UnicodeArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Unicode_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Unicode_Order_By>>
	where?: InputMaybe<Reactions_Unicode_Bool_Exp>
}

export type SubscriptionReactions_Unicode_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Unicode_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Unicode_Order_By>>
	where?: InputMaybe<Reactions_Unicode_Bool_Exp>
}

export type SubscriptionReactions_UsersArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Users_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Users_Order_By>>
	where?: InputMaybe<Reactions_Users_Bool_Exp>
}

export type SubscriptionReactions_Users_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Users_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Users_Order_By>>
	where?: InputMaybe<Reactions_Users_Bool_Exp>
}

export type SubscriptionRecently_ListedArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Recently_Listed_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Recently_Listed_Order_By>>
	where?: InputMaybe<Recently_Listed_Bool_Exp>
}

export type SubscriptionRecently_Listed_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Recently_Listed_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Recently_Listed_Order_By>>
	where?: InputMaybe<Recently_Listed_Bool_Exp>
}

export type SubscriptionResourcesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>
	where?: InputMaybe<Resources_Bool_Exp>
}

export type SubscriptionResources_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>
	where?: InputMaybe<Resources_Bool_Exp>
}

export type SubscriptionResources_Base_ThemesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Order_By>>
	where?: InputMaybe<Resources_Base_Themes_Bool_Exp>
}

export type SubscriptionResources_Base_Themes_By_PkArgs = {
	resource_id: Scalars['String']
	theme_id: Scalars['String']
}

export type SubscriptionResources_By_PkArgs = {
	id: Scalars['String']
}

export type SubscriptionResources_PartsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Parts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Parts_Order_By>>
	where?: InputMaybe<Resources_Parts_Bool_Exp>
}

export type SubscriptionResources_Parts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Parts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Parts_Order_By>>
	where?: InputMaybe<Resources_Parts_Bool_Exp>
}

export type SubscriptionResources_Parts_By_PkArgs = {
	part_id: Scalars['String']
	resource_id: Scalars['String']
}

export type SubscriptionSalesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Sales_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Sales_Order_By>>
	where?: InputMaybe<Sales_Bool_Exp>
}

export type SubscriptionSingular_Blacklisted_AccountsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Order_By>>
	where?: InputMaybe<Singular_Blacklisted_Accounts_Bool_Exp>
}

export type SubscriptionSingular_Blacklisted_Accounts_By_PkArgs = {
	account: Scalars['String']
}

export type SubscriptionSingular_Blacklisted_CollectionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Order_By>>
	where?: InputMaybe<Singular_Blacklisted_Collections_Bool_Exp>
}

export type SubscriptionSingular_Blacklisted_Collections_By_PkArgs = {
	collection_id: Scalars['String']
}

export type SubscriptionSingular_CuratedArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>
	where?: InputMaybe<Singular_Curated_Bool_Exp>
}

export type SubscriptionSingular_Curated_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>
	where?: InputMaybe<Singular_Curated_Bool_Exp>
}

export type SubscriptionSingular_Curated_By_PkArgs = {
	nft_id: Scalars['String']
}

export type SubscriptionSingular_Curated_CollectionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Order_By>>
	where?: InputMaybe<Singular_Curated_Collections_Bool_Exp>
}

export type SubscriptionSingular_Curated_Collections_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Order_By>>
	where?: InputMaybe<Singular_Curated_Collections_Bool_Exp>
}

export type SubscriptionSingular_Curated_Collections_By_PkArgs = {
	collection_id: Scalars['String']
}

export type SubscriptionSingular_Nsfw_CollectionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>
}

export type SubscriptionSingular_Nsfw_Collections_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>
}

export type SubscriptionSingular_Nsfw_Collections_By_PkArgs = {
	collection_id: Scalars['String']
}

export type SubscriptionSingular_Nsfw_NftsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>
}

export type SubscriptionSingular_Nsfw_Nfts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>
}

export type SubscriptionSingular_Nsfw_Nfts_By_PkArgs = {
	nft_id: Scalars['String']
}

export type SubscriptionSingular_Verified_CollectionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Order_By>>
	where?: InputMaybe<Singular_Verified_Collections_Bool_Exp>
}

export type SubscriptionSingular_Verified_Collections_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Order_By>>
	where?: InputMaybe<Singular_Verified_Collections_Bool_Exp>
}

export type SubscriptionSingular_Verified_Collections_By_PkArgs = {
	collection_id: Scalars['String']
}

export type SubscriptionSystemArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<System_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<System_Order_By>>
	where?: InputMaybe<System_Bool_Exp>
}

export type SubscriptionSystem_By_PkArgs = {
	purchaseEnabled: Scalars['Boolean']
}

export type SubscriptionYuletide_Item_TrackArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Order_By>>
	where?: InputMaybe<Yuletide_Item_Track_Bool_Exp>
}

export type SubscriptionYuletide_Item_Track_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Order_By>>
	where?: InputMaybe<Yuletide_Item_Track_Bool_Exp>
}

export type SubscriptionYuletide_Item_Track_By_PkArgs = {
	id: Scalars['String']
}

/** columns and relationships of "base_themes" */
export type Base_Themes = {
	readonly __typename?: 'base_themes'
	readonly id: Scalars['String']
	/** An array relationship */
	readonly resources_base_themes: ReadonlyArray<Resources_Base_Themes>
	readonly theme_color_1?: Maybe<Scalars['String']>
	readonly theme_color_2?: Maybe<Scalars['String']>
	readonly theme_color_3?: Maybe<Scalars['String']>
	readonly theme_color_4?: Maybe<Scalars['String']>
}

/** columns and relationships of "base_themes" */
export type Base_ThemesResources_Base_ThemesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Order_By>>
	where?: InputMaybe<Resources_Base_Themes_Bool_Exp>
}

/** Boolean expression to filter rows from the table "base_themes". All fields are combined with a logical 'AND'. */
export type Base_Themes_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Base_Themes_Bool_Exp>>
	readonly _not?: InputMaybe<Base_Themes_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Base_Themes_Bool_Exp>>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly resources_base_themes?: InputMaybe<Resources_Base_Themes_Bool_Exp>
	readonly theme_color_1?: InputMaybe<String_Comparison_Exp>
	readonly theme_color_2?: InputMaybe<String_Comparison_Exp>
	readonly theme_color_3?: InputMaybe<String_Comparison_Exp>
	readonly theme_color_4?: InputMaybe<String_Comparison_Exp>
}

/** Ordering options when selecting data from "base_themes". */
export type Base_Themes_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly resources_base_themes_aggregate?: InputMaybe<Resources_Base_Themes_Aggregate_Order_By>
	readonly theme_color_1?: InputMaybe<Order_By>
	readonly theme_color_2?: InputMaybe<Order_By>
	readonly theme_color_3?: InputMaybe<Order_By>
	readonly theme_color_4?: InputMaybe<Order_By>
}

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
	ThemeColor_4 = 'theme_color_4',
}

/** columns and relationships of "bases" */
export type Bases = {
	readonly __typename?: 'bases'
	readonly block: Scalars['Int']
	/** An array relationship */
	readonly changes: ReadonlyArray<Changes>
	/** An aggregate relationship */
	readonly changes_aggregate: Changes_Aggregate
	readonly id: Scalars['String']
	readonly issuer: Scalars['String']
	/** An array relationship */
	readonly parts: ReadonlyArray<Parts>
	/** An aggregate relationship */
	readonly parts_aggregate: Parts_Aggregate
	readonly symbol: Scalars['String']
	readonly type: Scalars['String']
}

/** columns and relationships of "bases" */
export type BasesChangesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>
	where?: InputMaybe<Changes_Bool_Exp>
}

/** columns and relationships of "bases" */
export type BasesChanges_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>
	where?: InputMaybe<Changes_Bool_Exp>
}

/** columns and relationships of "bases" */
export type BasesPartsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Parts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Parts_Order_By>>
	where?: InputMaybe<Parts_Bool_Exp>
}

/** columns and relationships of "bases" */
export type BasesParts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Parts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Parts_Order_By>>
	where?: InputMaybe<Parts_Bool_Exp>
}

/** aggregated selection of "bases" */
export type Bases_Aggregate = {
	readonly __typename?: 'bases_aggregate'
	readonly aggregate?: Maybe<Bases_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Bases>
}

/** aggregate fields of "bases" */
export type Bases_Aggregate_Fields = {
	readonly __typename?: 'bases_aggregate_fields'
	readonly avg?: Maybe<Bases_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Bases_Max_Fields>
	readonly min?: Maybe<Bases_Min_Fields>
	readonly stddev?: Maybe<Bases_Stddev_Fields>
	readonly stddev_pop?: Maybe<Bases_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Bases_Stddev_Samp_Fields>
	readonly sum?: Maybe<Bases_Sum_Fields>
	readonly var_pop?: Maybe<Bases_Var_Pop_Fields>
	readonly var_samp?: Maybe<Bases_Var_Samp_Fields>
	readonly variance?: Maybe<Bases_Variance_Fields>
}

/** aggregate fields of "bases" */
export type Bases_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Bases_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Bases_Avg_Fields = {
	readonly __typename?: 'bases_avg_fields'
	readonly block?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "bases". All fields are combined with a logical 'AND'. */
export type Bases_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Bases_Bool_Exp>>
	readonly _not?: InputMaybe<Bases_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Bases_Bool_Exp>>
	readonly block?: InputMaybe<Int_Comparison_Exp>
	readonly changes?: InputMaybe<Changes_Bool_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly issuer?: InputMaybe<String_Comparison_Exp>
	readonly parts?: InputMaybe<Parts_Bool_Exp>
	readonly symbol?: InputMaybe<String_Comparison_Exp>
	readonly type?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Bases_Max_Fields = {
	readonly __typename?: 'bases_max_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly issuer?: Maybe<Scalars['String']>
	readonly symbol?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Bases_Min_Fields = {
	readonly __typename?: 'bases_min_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly issuer?: Maybe<Scalars['String']>
	readonly symbol?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['String']>
}

/** Ordering options when selecting data from "bases". */
export type Bases_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly changes_aggregate?: InputMaybe<Changes_Aggregate_Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly issuer?: InputMaybe<Order_By>
	readonly parts_aggregate?: InputMaybe<Parts_Aggregate_Order_By>
	readonly symbol?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
}

/** select columns of table "bases" */
export enum Bases_Select_Column {
	/** column name */
	Block = 'block',
	/** column name */
	Id = 'id',
	/** column name */
	Issuer = 'issuer',
	/** column name */
	Symbol = 'symbol',
	/** column name */
	Type = 'type',
}

/** aggregate stddev on columns */
export type Bases_Stddev_Fields = {
	readonly __typename?: 'bases_stddev_fields'
	readonly block?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Bases_Stddev_Pop_Fields = {
	readonly __typename?: 'bases_stddev_pop_fields'
	readonly block?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Bases_Stddev_Samp_Fields = {
	readonly __typename?: 'bases_stddev_samp_fields'
	readonly block?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Bases_Sum_Fields = {
	readonly __typename?: 'bases_sum_fields'
	readonly block?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export type Bases_Var_Pop_Fields = {
	readonly __typename?: 'bases_var_pop_fields'
	readonly block?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Bases_Var_Samp_Fields = {
	readonly __typename?: 'bases_var_samp_fields'
	readonly block?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Bases_Variance_Fields = {
	readonly __typename?: 'bases_variance_fields'
	readonly block?: Maybe<Scalars['Float']>
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

/** columns and relationships of "changes" */
export type Changes = {
	readonly __typename?: 'changes'
	readonly block: Scalars['Int']
	readonly caller: Scalars['String']
	readonly created_at: Scalars['timestamptz']
	readonly extraTransfers?: Maybe<Scalars['jsonb']>
	readonly field: Scalars['String']
	readonly id: Scalars['Int']
	readonly new: Scalars['String']
	/** An object relationship */
	readonly nft?: Maybe<Nfts>
	/** An object relationship */
	readonly nftclass?: Maybe<Collections>
	readonly old: Scalars['String']
	readonly opType: Scalars['String']
	readonly ref_id: Scalars['String']
}

/** columns and relationships of "changes" */
export type ChangesExtraTransfersArgs = {
	path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "changes" */
export type Changes_Aggregate = {
	readonly __typename?: 'changes_aggregate'
	readonly aggregate?: Maybe<Changes_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Changes>
}

/** aggregate fields of "changes" */
export type Changes_Aggregate_Fields = {
	readonly __typename?: 'changes_aggregate_fields'
	readonly avg?: Maybe<Changes_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Changes_Max_Fields>
	readonly min?: Maybe<Changes_Min_Fields>
	readonly stddev?: Maybe<Changes_Stddev_Fields>
	readonly stddev_pop?: Maybe<Changes_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Changes_Stddev_Samp_Fields>
	readonly sum?: Maybe<Changes_Sum_Fields>
	readonly var_pop?: Maybe<Changes_Var_Pop_Fields>
	readonly var_samp?: Maybe<Changes_Var_Samp_Fields>
	readonly variance?: Maybe<Changes_Variance_Fields>
}

/** aggregate fields of "changes" */
export type Changes_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Changes_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "changes" */
export type Changes_Aggregate_Order_By = {
	readonly avg?: InputMaybe<Changes_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Changes_Max_Order_By>
	readonly min?: InputMaybe<Changes_Min_Order_By>
	readonly stddev?: InputMaybe<Changes_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<Changes_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<Changes_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<Changes_Sum_Order_By>
	readonly var_pop?: InputMaybe<Changes_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<Changes_Var_Samp_Order_By>
	readonly variance?: InputMaybe<Changes_Variance_Order_By>
}

/** aggregate avg on columns */
export type Changes_Avg_Fields = {
	readonly __typename?: 'changes_avg_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "changes" */
export type Changes_Avg_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "changes". All fields are combined with a logical 'AND'. */
export type Changes_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Changes_Bool_Exp>>
	readonly _not?: InputMaybe<Changes_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Changes_Bool_Exp>>
	readonly block?: InputMaybe<Int_Comparison_Exp>
	readonly caller?: InputMaybe<String_Comparison_Exp>
	readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly extraTransfers?: InputMaybe<Jsonb_Comparison_Exp>
	readonly field?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly new?: InputMaybe<String_Comparison_Exp>
	readonly nft?: InputMaybe<Nfts_Bool_Exp>
	readonly nftclass?: InputMaybe<Collections_Bool_Exp>
	readonly old?: InputMaybe<String_Comparison_Exp>
	readonly opType?: InputMaybe<String_Comparison_Exp>
	readonly ref_id?: InputMaybe<String_Comparison_Exp>
}

/** columns and relationships of "changes_collection" */
export type Changes_Collection = {
	readonly __typename?: 'changes_collection'
	readonly block: Scalars['Int']
	readonly caller: Scalars['String']
	/** An object relationship */
	readonly collection?: Maybe<Collections>
	readonly created_at: Scalars['timestamptz']
	readonly field: Scalars['String']
	readonly id: Scalars['Int']
	readonly new: Scalars['String']
	readonly old: Scalars['String']
	readonly opType: Scalars['String']
	readonly ref_id: Scalars['String']
}

/** order by aggregate values of table "changes_collection" */
export type Changes_Collection_Aggregate_Order_By = {
	readonly avg?: InputMaybe<Changes_Collection_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Changes_Collection_Max_Order_By>
	readonly min?: InputMaybe<Changes_Collection_Min_Order_By>
	readonly stddev?: InputMaybe<Changes_Collection_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<Changes_Collection_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<Changes_Collection_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<Changes_Collection_Sum_Order_By>
	readonly var_pop?: InputMaybe<Changes_Collection_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<Changes_Collection_Var_Samp_Order_By>
	readonly variance?: InputMaybe<Changes_Collection_Variance_Order_By>
}

/** order by avg() on columns of table "changes_collection" */
export type Changes_Collection_Avg_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "changes_collection". All fields are combined with a logical 'AND'. */
export type Changes_Collection_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Changes_Collection_Bool_Exp>>
	readonly _not?: InputMaybe<Changes_Collection_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Changes_Collection_Bool_Exp>>
	readonly block?: InputMaybe<Int_Comparison_Exp>
	readonly caller?: InputMaybe<String_Comparison_Exp>
	readonly collection?: InputMaybe<Collections_Bool_Exp>
	readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly field?: InputMaybe<String_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly new?: InputMaybe<String_Comparison_Exp>
	readonly old?: InputMaybe<String_Comparison_Exp>
	readonly opType?: InputMaybe<String_Comparison_Exp>
	readonly ref_id?: InputMaybe<String_Comparison_Exp>
}

/** order by max() on columns of table "changes_collection" */
export type Changes_Collection_Max_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly caller?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
	readonly field?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly new?: InputMaybe<Order_By>
	readonly old?: InputMaybe<Order_By>
	readonly opType?: InputMaybe<Order_By>
	readonly ref_id?: InputMaybe<Order_By>
}

/** order by min() on columns of table "changes_collection" */
export type Changes_Collection_Min_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly caller?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
	readonly field?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly new?: InputMaybe<Order_By>
	readonly old?: InputMaybe<Order_By>
	readonly opType?: InputMaybe<Order_By>
	readonly ref_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "changes_collection". */
export type Changes_Collection_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly caller?: InputMaybe<Order_By>
	readonly collection?: InputMaybe<Collections_Order_By>
	readonly created_at?: InputMaybe<Order_By>
	readonly field?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly new?: InputMaybe<Order_By>
	readonly old?: InputMaybe<Order_By>
	readonly opType?: InputMaybe<Order_By>
	readonly ref_id?: InputMaybe<Order_By>
}

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
	RefId = 'ref_id',
}

/** order by stddev() on columns of table "changes_collection" */
export type Changes_Collection_Stddev_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "changes_collection" */
export type Changes_Collection_Stddev_Pop_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "changes_collection" */
export type Changes_Collection_Stddev_Samp_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** order by sum() on columns of table "changes_collection" */
export type Changes_Collection_Sum_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "changes_collection" */
export type Changes_Collection_Var_Pop_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "changes_collection" */
export type Changes_Collection_Var_Samp_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "changes_collection" */
export type Changes_Collection_Variance_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** aggregate max on columns */
export type Changes_Max_Fields = {
	readonly __typename?: 'changes_max_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly caller?: Maybe<Scalars['String']>
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly field?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['Int']>
	readonly new?: Maybe<Scalars['String']>
	readonly old?: Maybe<Scalars['String']>
	readonly opType?: Maybe<Scalars['String']>
	readonly ref_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "changes" */
export type Changes_Max_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly caller?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
	readonly field?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly new?: InputMaybe<Order_By>
	readonly old?: InputMaybe<Order_By>
	readonly opType?: InputMaybe<Order_By>
	readonly ref_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Changes_Min_Fields = {
	readonly __typename?: 'changes_min_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly caller?: Maybe<Scalars['String']>
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly field?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['Int']>
	readonly new?: Maybe<Scalars['String']>
	readonly old?: Maybe<Scalars['String']>
	readonly opType?: Maybe<Scalars['String']>
	readonly ref_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "changes" */
export type Changes_Min_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly caller?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
	readonly field?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly new?: InputMaybe<Order_By>
	readonly old?: InputMaybe<Order_By>
	readonly opType?: InputMaybe<Order_By>
	readonly ref_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "changes". */
export type Changes_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly caller?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
	readonly extraTransfers?: InputMaybe<Order_By>
	readonly field?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly new?: InputMaybe<Order_By>
	readonly nft?: InputMaybe<Nfts_Order_By>
	readonly nftclass?: InputMaybe<Collections_Order_By>
	readonly old?: InputMaybe<Order_By>
	readonly opType?: InputMaybe<Order_By>
	readonly ref_id?: InputMaybe<Order_By>
}

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
	RefId = 'ref_id',
}

/** aggregate stddev on columns */
export type Changes_Stddev_Fields = {
	readonly __typename?: 'changes_stddev_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "changes" */
export type Changes_Stddev_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Changes_Stddev_Pop_Fields = {
	readonly __typename?: 'changes_stddev_pop_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "changes" */
export type Changes_Stddev_Pop_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Changes_Stddev_Samp_Fields = {
	readonly __typename?: 'changes_stddev_samp_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "changes" */
export type Changes_Stddev_Samp_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Changes_Sum_Fields = {
	readonly __typename?: 'changes_sum_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "changes" */
export type Changes_Sum_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Changes_Var_Pop_Fields = {
	readonly __typename?: 'changes_var_pop_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "changes" */
export type Changes_Var_Pop_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Changes_Var_Samp_Fields = {
	readonly __typename?: 'changes_var_samp_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "changes" */
export type Changes_Var_Samp_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Changes_Variance_Fields = {
	readonly __typename?: 'changes_variance_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "changes" */
export type Changes_Variance_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
}

/** columns and relationships of "collection_banners" */
export type Collection_Banners = {
	readonly __typename?: 'collection_banners'
	/** An object relationship */
	readonly collection?: Maybe<Collections>
	readonly collection_id: Scalars['String']
	readonly created_at: Scalars['timestamptz']
	readonly image: Scalars['String']
}

/** Boolean expression to filter rows from the table "collection_banners". All fields are combined with a logical 'AND'. */
export type Collection_Banners_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Collection_Banners_Bool_Exp>>
	readonly _not?: InputMaybe<Collection_Banners_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Collection_Banners_Bool_Exp>>
	readonly collection?: InputMaybe<Collections_Bool_Exp>
	readonly collection_id?: InputMaybe<String_Comparison_Exp>
	readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly image?: InputMaybe<String_Comparison_Exp>
}

/** Ordering options when selecting data from "collection_banners". */
export type Collection_Banners_Order_By = {
	readonly collection?: InputMaybe<Collections_Order_By>
	readonly collection_id?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
	readonly image?: InputMaybe<Order_By>
}

/** select columns of table "collection_banners" */
export enum Collection_Banners_Select_Column {
	/** column name */
	CollectionId = 'collection_id',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Image = 'image',
}

/** columns and relationships of "collections" */
export type Collections = {
	readonly __typename?: 'collections'
	/** An object relationship */
	readonly banners?: Maybe<Collection_Banners>
	readonly block: Scalars['Int']
	/** An array relationship */
	readonly changes_collection: ReadonlyArray<Changes_Collection>
	readonly id: Scalars['String']
	readonly issuer: Scalars['String']
	readonly max: Scalars['Int']
	readonly metadata: Scalars['String']
	readonly metadata_content_type?: Maybe<Scalars['String']>
	readonly metadata_description?: Maybe<Scalars['String']>
	readonly metadata_image?: Maybe<Scalars['String']>
	readonly metadata_name?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly nfts: ReadonlyArray<Nfts>
	/** An aggregate relationship */
	readonly nfts_aggregate: Nfts_Aggregate
	/** An object relationship */
	readonly nfts_stats?: Maybe<Nfts_Stats>
	/** An array relationship */
	readonly singular_blacklisted_accounts: ReadonlyArray<Singular_Blacklisted_Accounts>
	/** An array relationship */
	readonly singular_blacklisted_collections: ReadonlyArray<Singular_Blacklisted_Collections>
	/** An array relationship */
	readonly singular_curated: ReadonlyArray<Singular_Curated_Collections>
	/** An aggregate relationship */
	readonly singular_curated_aggregate: Singular_Curated_Collections_Aggregate
	/** An array relationship */
	readonly singular_hidden_collections: ReadonlyArray<Singular_Nsfw_Collections>
	/** An aggregate relationship */
	readonly singular_hidden_collections_aggregate: Singular_Nsfw_Collections_Aggregate
	/** An array relationship */
	readonly singular_nsfw_collections: ReadonlyArray<Singular_Nsfw_Collections>
	/** An aggregate relationship */
	readonly singular_nsfw_collections_aggregate: Singular_Nsfw_Collections_Aggregate
	/** An array relationship */
	readonly singular_verified_collections: ReadonlyArray<Singular_Verified_Collections>
	/** An aggregate relationship */
	readonly singular_verified_collections_aggregate: Singular_Verified_Collections_Aggregate
	readonly symbol: Scalars['String']
}

/** columns and relationships of "collections" */
export type CollectionsChanges_CollectionArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Changes_Collection_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Changes_Collection_Order_By>>
	where?: InputMaybe<Changes_Collection_Bool_Exp>
}

/** columns and relationships of "collections" */
export type CollectionsNftsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

/** columns and relationships of "collections" */
export type CollectionsNfts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

/** columns and relationships of "collections" */
export type CollectionsSingular_Blacklisted_AccountsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Order_By>>
	where?: InputMaybe<Singular_Blacklisted_Accounts_Bool_Exp>
}

/** columns and relationships of "collections" */
export type CollectionsSingular_Blacklisted_CollectionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Order_By>>
	where?: InputMaybe<Singular_Blacklisted_Collections_Bool_Exp>
}

/** columns and relationships of "collections" */
export type CollectionsSingular_CuratedArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Order_By>>
	where?: InputMaybe<Singular_Curated_Collections_Bool_Exp>
}

/** columns and relationships of "collections" */
export type CollectionsSingular_Curated_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Order_By>>
	where?: InputMaybe<Singular_Curated_Collections_Bool_Exp>
}

/** columns and relationships of "collections" */
export type CollectionsSingular_Hidden_CollectionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>
}

/** columns and relationships of "collections" */
export type CollectionsSingular_Hidden_Collections_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>
}

/** columns and relationships of "collections" */
export type CollectionsSingular_Nsfw_CollectionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>
}

/** columns and relationships of "collections" */
export type CollectionsSingular_Nsfw_Collections_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>
}

/** columns and relationships of "collections" */
export type CollectionsSingular_Verified_CollectionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Order_By>>
	where?: InputMaybe<Singular_Verified_Collections_Bool_Exp>
}

/** columns and relationships of "collections" */
export type CollectionsSingular_Verified_Collections_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Order_By>>
	where?: InputMaybe<Singular_Verified_Collections_Bool_Exp>
}

/** aggregated selection of "collections" */
export type Collections_Aggregate = {
	readonly __typename?: 'collections_aggregate'
	readonly aggregate?: Maybe<Collections_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Collections>
}

/** aggregate fields of "collections" */
export type Collections_Aggregate_Fields = {
	readonly __typename?: 'collections_aggregate_fields'
	readonly avg?: Maybe<Collections_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Collections_Max_Fields>
	readonly min?: Maybe<Collections_Min_Fields>
	readonly stddev?: Maybe<Collections_Stddev_Fields>
	readonly stddev_pop?: Maybe<Collections_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Collections_Stddev_Samp_Fields>
	readonly sum?: Maybe<Collections_Sum_Fields>
	readonly var_pop?: Maybe<Collections_Var_Pop_Fields>
	readonly var_samp?: Maybe<Collections_Var_Samp_Fields>
	readonly variance?: Maybe<Collections_Variance_Fields>
}

/** aggregate fields of "collections" */
export type Collections_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Collections_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Collections_Avg_Fields = {
	readonly __typename?: 'collections_avg_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "collections". All fields are combined with a logical 'AND'. */
export type Collections_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Collections_Bool_Exp>>
	readonly _not?: InputMaybe<Collections_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Collections_Bool_Exp>>
	readonly banners?: InputMaybe<Collection_Banners_Bool_Exp>
	readonly block?: InputMaybe<Int_Comparison_Exp>
	readonly changes_collection?: InputMaybe<Changes_Collection_Bool_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly issuer?: InputMaybe<String_Comparison_Exp>
	readonly max?: InputMaybe<Int_Comparison_Exp>
	readonly metadata?: InputMaybe<String_Comparison_Exp>
	readonly metadata_content_type?: InputMaybe<String_Comparison_Exp>
	readonly metadata_description?: InputMaybe<String_Comparison_Exp>
	readonly metadata_image?: InputMaybe<String_Comparison_Exp>
	readonly metadata_name?: InputMaybe<String_Comparison_Exp>
	readonly nfts?: InputMaybe<Nfts_Bool_Exp>
	readonly nfts_stats?: InputMaybe<Nfts_Stats_Bool_Exp>
	readonly singular_blacklisted_accounts?: InputMaybe<Singular_Blacklisted_Accounts_Bool_Exp>
	readonly singular_blacklisted_collections?: InputMaybe<Singular_Blacklisted_Collections_Bool_Exp>
	readonly singular_curated?: InputMaybe<Singular_Curated_Collections_Bool_Exp>
	readonly singular_hidden_collections?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>
	readonly singular_nsfw_collections?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>
	readonly singular_verified_collections?: InputMaybe<Singular_Verified_Collections_Bool_Exp>
	readonly symbol?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Collections_Max_Fields = {
	readonly __typename?: 'collections_max_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly issuer?: Maybe<Scalars['String']>
	readonly max?: Maybe<Scalars['Int']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadata_content_type?: Maybe<Scalars['String']>
	readonly metadata_description?: Maybe<Scalars['String']>
	readonly metadata_image?: Maybe<Scalars['String']>
	readonly metadata_name?: Maybe<Scalars['String']>
	readonly symbol?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Collections_Min_Fields = {
	readonly __typename?: 'collections_min_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly id?: Maybe<Scalars['String']>
	readonly issuer?: Maybe<Scalars['String']>
	readonly max?: Maybe<Scalars['Int']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadata_content_type?: Maybe<Scalars['String']>
	readonly metadata_description?: Maybe<Scalars['String']>
	readonly metadata_image?: Maybe<Scalars['String']>
	readonly metadata_name?: Maybe<Scalars['String']>
	readonly symbol?: Maybe<Scalars['String']>
}

/** Ordering options when selecting data from "collections". */
export type Collections_Order_By = {
	readonly banners?: InputMaybe<Collection_Banners_Order_By>
	readonly block?: InputMaybe<Order_By>
	readonly changes_collection_aggregate?: InputMaybe<Changes_Collection_Aggregate_Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly issuer?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly metadata_content_type?: InputMaybe<Order_By>
	readonly metadata_description?: InputMaybe<Order_By>
	readonly metadata_image?: InputMaybe<Order_By>
	readonly metadata_name?: InputMaybe<Order_By>
	readonly nfts_aggregate?: InputMaybe<Nfts_Aggregate_Order_By>
	readonly nfts_stats?: InputMaybe<Nfts_Stats_Order_By>
	readonly singular_blacklisted_accounts_aggregate?: InputMaybe<Singular_Blacklisted_Accounts_Aggregate_Order_By>
	readonly singular_blacklisted_collections_aggregate?: InputMaybe<Singular_Blacklisted_Collections_Aggregate_Order_By>
	readonly singular_curated_aggregate?: InputMaybe<Singular_Curated_Collections_Aggregate_Order_By>
	readonly singular_hidden_collections_aggregate?: InputMaybe<Singular_Nsfw_Collections_Aggregate_Order_By>
	readonly singular_nsfw_collections_aggregate?: InputMaybe<Singular_Nsfw_Collections_Aggregate_Order_By>
	readonly singular_verified_collections_aggregate?: InputMaybe<Singular_Verified_Collections_Aggregate_Order_By>
	readonly symbol?: InputMaybe<Order_By>
}

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
	Symbol = 'symbol',
}

/** aggregate stddev on columns */
export type Collections_Stddev_Fields = {
	readonly __typename?: 'collections_stddev_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Collections_Stddev_Pop_Fields = {
	readonly __typename?: 'collections_stddev_pop_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Collections_Stddev_Samp_Fields = {
	readonly __typename?: 'collections_stddev_samp_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Collections_Sum_Fields = {
	readonly __typename?: 'collections_sum_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly max?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export type Collections_Var_Pop_Fields = {
	readonly __typename?: 'collections_var_pop_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Collections_Var_Samp_Fields = {
	readonly __typename?: 'collections_var_samp_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Collections_Variance_Fields = {
	readonly __typename?: 'collections_variance_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly max?: Maybe<Scalars['Float']>
}

/** columns and relationships of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_Nfts = {
	readonly __typename?: 'distinct_kanaria_nfts'
	readonly block?: Maybe<Scalars['Int']>
	readonly burned?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly children: ReadonlyArray<Nfts>
	/** An aggregate relationship */
	readonly children_aggregate: Nfts_Aggregate
	/** An object relationship */
	readonly collection?: Maybe<Collections>
	readonly collectionId?: Maybe<Scalars['String']>
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly equipped_id?: Maybe<Scalars['String']>
	readonly forsale?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadata_description?: Maybe<Scalars['String']>
	readonly metadata_image?: Maybe<Scalars['String']>
	readonly metadata_name?: Maybe<Scalars['String']>
	readonly metadata_rarity?: Maybe<Scalars['String']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly owner?: Maybe<Scalars['String']>
	readonly pending?: Maybe<Scalars['Boolean']>
	readonly priority?: Maybe<Scalars['jsonb']>
	readonly properties?: Maybe<Scalars['jsonb']>
	/** An array relationship */
	readonly resources: ReadonlyArray<Resources>
	/** An aggregate relationship */
	readonly resources_aggregate: Resources_Aggregate
	readonly rootowner?: Maybe<Scalars['String']>
	readonly sn?: Maybe<Scalars['String']>
	readonly symbol?: Maybe<Scalars['String']>
	readonly transferable?: Maybe<Scalars['Int']>
	readonly tx_block?: Maybe<Scalars['Int']>
	readonly tx_caller?: Maybe<Scalars['String']>
	readonly tx_pending?: Maybe<Scalars['Boolean']>
	readonly updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_NftsChildrenArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

/** columns and relationships of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_NftsChildren_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

/** columns and relationships of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_NftsPriorityArgs = {
	path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_NftsPropertiesArgs = {
	path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_NftsResourcesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>
	where?: InputMaybe<Resources_Bool_Exp>
}

/** columns and relationships of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_NftsResources_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>
	where?: InputMaybe<Resources_Bool_Exp>
}

/** aggregated selection of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_Nfts_Aggregate = {
	readonly __typename?: 'distinct_kanaria_nfts_aggregate'
	readonly aggregate?: Maybe<Distinct_Kanaria_Nfts_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Distinct_Kanaria_Nfts>
}

/** aggregate fields of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_Nfts_Aggregate_Fields = {
	readonly __typename?: 'distinct_kanaria_nfts_aggregate_fields'
	readonly avg?: Maybe<Distinct_Kanaria_Nfts_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Distinct_Kanaria_Nfts_Max_Fields>
	readonly min?: Maybe<Distinct_Kanaria_Nfts_Min_Fields>
	readonly stddev?: Maybe<Distinct_Kanaria_Nfts_Stddev_Fields>
	readonly stddev_pop?: Maybe<Distinct_Kanaria_Nfts_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Distinct_Kanaria_Nfts_Stddev_Samp_Fields>
	readonly sum?: Maybe<Distinct_Kanaria_Nfts_Sum_Fields>
	readonly var_pop?: Maybe<Distinct_Kanaria_Nfts_Var_Pop_Fields>
	readonly var_samp?: Maybe<Distinct_Kanaria_Nfts_Var_Samp_Fields>
	readonly variance?: Maybe<Distinct_Kanaria_Nfts_Variance_Fields>
}

/** aggregate fields of "distinct_kanaria_nfts" */
export type Distinct_Kanaria_Nfts_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Distinct_Kanaria_Nfts_Avg_Fields = {
	readonly __typename?: 'distinct_kanaria_nfts_avg_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly tx_block?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "distinct_kanaria_nfts". All fields are combined with a logical 'AND'. */
export type Distinct_Kanaria_Nfts_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Bool_Exp>>
	readonly _not?: InputMaybe<Distinct_Kanaria_Nfts_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Distinct_Kanaria_Nfts_Bool_Exp>>
	readonly block?: InputMaybe<Int_Comparison_Exp>
	readonly burned?: InputMaybe<String_Comparison_Exp>
	readonly children?: InputMaybe<Nfts_Bool_Exp>
	readonly collection?: InputMaybe<Collections_Bool_Exp>
	readonly collectionId?: InputMaybe<String_Comparison_Exp>
	readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly equipped_id?: InputMaybe<String_Comparison_Exp>
	readonly forsale?: InputMaybe<Bigint_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly metadata?: InputMaybe<String_Comparison_Exp>
	readonly metadata_description?: InputMaybe<String_Comparison_Exp>
	readonly metadata_image?: InputMaybe<String_Comparison_Exp>
	readonly metadata_name?: InputMaybe<String_Comparison_Exp>
	readonly metadata_rarity?: InputMaybe<String_Comparison_Exp>
	readonly metadata_rarity_percentage?: InputMaybe<Float_Comparison_Exp>
	readonly owner?: InputMaybe<String_Comparison_Exp>
	readonly pending?: InputMaybe<Boolean_Comparison_Exp>
	readonly priority?: InputMaybe<Jsonb_Comparison_Exp>
	readonly properties?: InputMaybe<Jsonb_Comparison_Exp>
	readonly resources?: InputMaybe<Resources_Bool_Exp>
	readonly rootowner?: InputMaybe<String_Comparison_Exp>
	readonly sn?: InputMaybe<String_Comparison_Exp>
	readonly symbol?: InputMaybe<String_Comparison_Exp>
	readonly transferable?: InputMaybe<Int_Comparison_Exp>
	readonly tx_block?: InputMaybe<Int_Comparison_Exp>
	readonly tx_caller?: InputMaybe<String_Comparison_Exp>
	readonly tx_pending?: InputMaybe<Boolean_Comparison_Exp>
	readonly updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** aggregate max on columns */
export type Distinct_Kanaria_Nfts_Max_Fields = {
	readonly __typename?: 'distinct_kanaria_nfts_max_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly burned?: Maybe<Scalars['String']>
	readonly collectionId?: Maybe<Scalars['String']>
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly equipped_id?: Maybe<Scalars['String']>
	readonly forsale?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadata_description?: Maybe<Scalars['String']>
	readonly metadata_image?: Maybe<Scalars['String']>
	readonly metadata_name?: Maybe<Scalars['String']>
	readonly metadata_rarity?: Maybe<Scalars['String']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly owner?: Maybe<Scalars['String']>
	readonly rootowner?: Maybe<Scalars['String']>
	readonly sn?: Maybe<Scalars['String']>
	readonly symbol?: Maybe<Scalars['String']>
	readonly transferable?: Maybe<Scalars['Int']>
	readonly tx_block?: Maybe<Scalars['Int']>
	readonly tx_caller?: Maybe<Scalars['String']>
	readonly updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type Distinct_Kanaria_Nfts_Min_Fields = {
	readonly __typename?: 'distinct_kanaria_nfts_min_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly burned?: Maybe<Scalars['String']>
	readonly collectionId?: Maybe<Scalars['String']>
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly equipped_id?: Maybe<Scalars['String']>
	readonly forsale?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadata_description?: Maybe<Scalars['String']>
	readonly metadata_image?: Maybe<Scalars['String']>
	readonly metadata_name?: Maybe<Scalars['String']>
	readonly metadata_rarity?: Maybe<Scalars['String']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly owner?: Maybe<Scalars['String']>
	readonly rootowner?: Maybe<Scalars['String']>
	readonly sn?: Maybe<Scalars['String']>
	readonly symbol?: Maybe<Scalars['String']>
	readonly transferable?: Maybe<Scalars['Int']>
	readonly tx_block?: Maybe<Scalars['Int']>
	readonly tx_caller?: Maybe<Scalars['String']>
	readonly updated_at?: Maybe<Scalars['timestamptz']>
}

/** Ordering options when selecting data from "distinct_kanaria_nfts". */
export type Distinct_Kanaria_Nfts_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly burned?: InputMaybe<Order_By>
	readonly children_aggregate?: InputMaybe<Nfts_Aggregate_Order_By>
	readonly collection?: InputMaybe<Collections_Order_By>
	readonly collectionId?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
	readonly equipped_id?: InputMaybe<Order_By>
	readonly forsale?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly metadata_description?: InputMaybe<Order_By>
	readonly metadata_image?: InputMaybe<Order_By>
	readonly metadata_name?: InputMaybe<Order_By>
	readonly metadata_rarity?: InputMaybe<Order_By>
	readonly metadata_rarity_percentage?: InputMaybe<Order_By>
	readonly owner?: InputMaybe<Order_By>
	readonly pending?: InputMaybe<Order_By>
	readonly priority?: InputMaybe<Order_By>
	readonly properties?: InputMaybe<Order_By>
	readonly resources_aggregate?: InputMaybe<Resources_Aggregate_Order_By>
	readonly rootowner?: InputMaybe<Order_By>
	readonly sn?: InputMaybe<Order_By>
	readonly symbol?: InputMaybe<Order_By>
	readonly transferable?: InputMaybe<Order_By>
	readonly tx_block?: InputMaybe<Order_By>
	readonly tx_caller?: InputMaybe<Order_By>
	readonly tx_pending?: InputMaybe<Order_By>
	readonly updated_at?: InputMaybe<Order_By>
}

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
	UpdatedAt = 'updated_at',
}

/** aggregate stddev on columns */
export type Distinct_Kanaria_Nfts_Stddev_Fields = {
	readonly __typename?: 'distinct_kanaria_nfts_stddev_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly tx_block?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Distinct_Kanaria_Nfts_Stddev_Pop_Fields = {
	readonly __typename?: 'distinct_kanaria_nfts_stddev_pop_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly tx_block?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Distinct_Kanaria_Nfts_Stddev_Samp_Fields = {
	readonly __typename?: 'distinct_kanaria_nfts_stddev_samp_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly tx_block?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Distinct_Kanaria_Nfts_Sum_Fields = {
	readonly __typename?: 'distinct_kanaria_nfts_sum_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly forsale?: Maybe<Scalars['bigint']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Int']>
	readonly tx_block?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export type Distinct_Kanaria_Nfts_Var_Pop_Fields = {
	readonly __typename?: 'distinct_kanaria_nfts_var_pop_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly tx_block?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Distinct_Kanaria_Nfts_Var_Samp_Fields = {
	readonly __typename?: 'distinct_kanaria_nfts_var_samp_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly tx_block?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Distinct_Kanaria_Nfts_Variance_Fields = {
	readonly __typename?: 'distinct_kanaria_nfts_variance_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly tx_block?: Maybe<Scalars['Float']>
}

/** columns and relationships of "distinct_nfts" */
export type Distinct_Nfts = {
	readonly __typename?: 'distinct_nfts'
	readonly block?: Maybe<Scalars['Int']>
	readonly burned?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly children: ReadonlyArray<Nfts>
	/** An aggregate relationship */
	readonly children_aggregate: Nfts_Aggregate
	/** An object relationship */
	readonly collection?: Maybe<Collections>
	readonly collectionId?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly dutchie?: Maybe<Dutchie>
	readonly equipped_id?: Maybe<Scalars['String']>
	readonly forsale?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadata_content_type?: Maybe<Scalars['String']>
	readonly metadata_image?: Maybe<Scalars['String']>
	readonly metadata_name?: Maybe<Scalars['String']>
	readonly metadata_rarity?: Maybe<Scalars['String']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly owner?: Maybe<Scalars['String']>
	readonly pending?: Maybe<Scalars['Boolean']>
	readonly priority?: Maybe<Scalars['jsonb']>
	readonly properties?: Maybe<Scalars['jsonb']>
	/** An array relationship */
	readonly resources: ReadonlyArray<Resources>
	/** An aggregate relationship */
	readonly resources_aggregate: Resources_Aggregate
	readonly rootowner?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly singular_curated: ReadonlyArray<Singular_Curated>
	/** An aggregate relationship */
	readonly singular_curated_aggregate: Singular_Curated_Aggregate
	/** An array relationship */
	readonly singular_nsfw: ReadonlyArray<Singular_Nsfw_Nfts>
	/** An aggregate relationship */
	readonly singular_nsfw_aggregate: Singular_Nsfw_Nfts_Aggregate
	readonly sn?: Maybe<Scalars['String']>
	readonly symbol?: Maybe<Scalars['String']>
	readonly transferable?: Maybe<Scalars['Int']>
	readonly tx_block?: Maybe<Scalars['Int']>
	readonly tx_caller?: Maybe<Scalars['String']>
	readonly tx_pending?: Maybe<Scalars['Boolean']>
	readonly updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsChildrenArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsChildren_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsPriorityArgs = {
	path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsPropertiesArgs = {
	path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsResourcesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>
	where?: InputMaybe<Resources_Bool_Exp>
}

/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsResources_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>
	where?: InputMaybe<Resources_Bool_Exp>
}

/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsSingular_CuratedArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>
	where?: InputMaybe<Singular_Curated_Bool_Exp>
}

/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsSingular_Curated_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>
	where?: InputMaybe<Singular_Curated_Bool_Exp>
}

/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsSingular_NsfwArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>
}

/** columns and relationships of "distinct_nfts" */
export type Distinct_NftsSingular_Nsfw_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>
}

/** aggregated selection of "distinct_nfts" */
export type Distinct_Nfts_Aggregate = {
	readonly __typename?: 'distinct_nfts_aggregate'
	readonly aggregate?: Maybe<Distinct_Nfts_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Distinct_Nfts>
}

/** aggregate fields of "distinct_nfts" */
export type Distinct_Nfts_Aggregate_Fields = {
	readonly __typename?: 'distinct_nfts_aggregate_fields'
	readonly avg?: Maybe<Distinct_Nfts_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Distinct_Nfts_Max_Fields>
	readonly min?: Maybe<Distinct_Nfts_Min_Fields>
	readonly stddev?: Maybe<Distinct_Nfts_Stddev_Fields>
	readonly stddev_pop?: Maybe<Distinct_Nfts_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Distinct_Nfts_Stddev_Samp_Fields>
	readonly sum?: Maybe<Distinct_Nfts_Sum_Fields>
	readonly var_pop?: Maybe<Distinct_Nfts_Var_Pop_Fields>
	readonly var_samp?: Maybe<Distinct_Nfts_Var_Samp_Fields>
	readonly variance?: Maybe<Distinct_Nfts_Variance_Fields>
}

/** aggregate fields of "distinct_nfts" */
export type Distinct_Nfts_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Distinct_Nfts_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Distinct_Nfts_Avg_Fields = {
	readonly __typename?: 'distinct_nfts_avg_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly tx_block?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "distinct_nfts". All fields are combined with a logical 'AND'. */
export type Distinct_Nfts_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Distinct_Nfts_Bool_Exp>>
	readonly _not?: InputMaybe<Distinct_Nfts_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Distinct_Nfts_Bool_Exp>>
	readonly block?: InputMaybe<Int_Comparison_Exp>
	readonly burned?: InputMaybe<String_Comparison_Exp>
	readonly children?: InputMaybe<Nfts_Bool_Exp>
	readonly collection?: InputMaybe<Collections_Bool_Exp>
	readonly collectionId?: InputMaybe<String_Comparison_Exp>
	readonly dutchie?: InputMaybe<Dutchie_Bool_Exp>
	readonly equipped_id?: InputMaybe<String_Comparison_Exp>
	readonly forsale?: InputMaybe<Bigint_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly metadata?: InputMaybe<String_Comparison_Exp>
	readonly metadata_content_type?: InputMaybe<String_Comparison_Exp>
	readonly metadata_image?: InputMaybe<String_Comparison_Exp>
	readonly metadata_name?: InputMaybe<String_Comparison_Exp>
	readonly metadata_rarity?: InputMaybe<String_Comparison_Exp>
	readonly metadata_rarity_percentage?: InputMaybe<Float_Comparison_Exp>
	readonly owner?: InputMaybe<String_Comparison_Exp>
	readonly pending?: InputMaybe<Boolean_Comparison_Exp>
	readonly priority?: InputMaybe<Jsonb_Comparison_Exp>
	readonly properties?: InputMaybe<Jsonb_Comparison_Exp>
	readonly resources?: InputMaybe<Resources_Bool_Exp>
	readonly rootowner?: InputMaybe<String_Comparison_Exp>
	readonly singular_curated?: InputMaybe<Singular_Curated_Bool_Exp>
	readonly singular_nsfw?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>
	readonly sn?: InputMaybe<String_Comparison_Exp>
	readonly symbol?: InputMaybe<String_Comparison_Exp>
	readonly transferable?: InputMaybe<Int_Comparison_Exp>
	readonly tx_block?: InputMaybe<Int_Comparison_Exp>
	readonly tx_caller?: InputMaybe<String_Comparison_Exp>
	readonly tx_pending?: InputMaybe<Boolean_Comparison_Exp>
	readonly updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** aggregate max on columns */
export type Distinct_Nfts_Max_Fields = {
	readonly __typename?: 'distinct_nfts_max_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly burned?: Maybe<Scalars['String']>
	readonly collectionId?: Maybe<Scalars['String']>
	readonly equipped_id?: Maybe<Scalars['String']>
	readonly forsale?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadata_content_type?: Maybe<Scalars['String']>
	readonly metadata_image?: Maybe<Scalars['String']>
	readonly metadata_name?: Maybe<Scalars['String']>
	readonly metadata_rarity?: Maybe<Scalars['String']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly owner?: Maybe<Scalars['String']>
	readonly rootowner?: Maybe<Scalars['String']>
	readonly sn?: Maybe<Scalars['String']>
	readonly symbol?: Maybe<Scalars['String']>
	readonly transferable?: Maybe<Scalars['Int']>
	readonly tx_block?: Maybe<Scalars['Int']>
	readonly tx_caller?: Maybe<Scalars['String']>
	readonly updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type Distinct_Nfts_Min_Fields = {
	readonly __typename?: 'distinct_nfts_min_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly burned?: Maybe<Scalars['String']>
	readonly collectionId?: Maybe<Scalars['String']>
	readonly equipped_id?: Maybe<Scalars['String']>
	readonly forsale?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadata_content_type?: Maybe<Scalars['String']>
	readonly metadata_image?: Maybe<Scalars['String']>
	readonly metadata_name?: Maybe<Scalars['String']>
	readonly metadata_rarity?: Maybe<Scalars['String']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly owner?: Maybe<Scalars['String']>
	readonly rootowner?: Maybe<Scalars['String']>
	readonly sn?: Maybe<Scalars['String']>
	readonly symbol?: Maybe<Scalars['String']>
	readonly transferable?: Maybe<Scalars['Int']>
	readonly tx_block?: Maybe<Scalars['Int']>
	readonly tx_caller?: Maybe<Scalars['String']>
	readonly updated_at?: Maybe<Scalars['timestamptz']>
}

/** Ordering options when selecting data from "distinct_nfts". */
export type Distinct_Nfts_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly burned?: InputMaybe<Order_By>
	readonly children_aggregate?: InputMaybe<Nfts_Aggregate_Order_By>
	readonly collection?: InputMaybe<Collections_Order_By>
	readonly collectionId?: InputMaybe<Order_By>
	readonly dutchie?: InputMaybe<Dutchie_Order_By>
	readonly equipped_id?: InputMaybe<Order_By>
	readonly forsale?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly metadata_content_type?: InputMaybe<Order_By>
	readonly metadata_image?: InputMaybe<Order_By>
	readonly metadata_name?: InputMaybe<Order_By>
	readonly metadata_rarity?: InputMaybe<Order_By>
	readonly metadata_rarity_percentage?: InputMaybe<Order_By>
	readonly owner?: InputMaybe<Order_By>
	readonly pending?: InputMaybe<Order_By>
	readonly priority?: InputMaybe<Order_By>
	readonly properties?: InputMaybe<Order_By>
	readonly resources_aggregate?: InputMaybe<Resources_Aggregate_Order_By>
	readonly rootowner?: InputMaybe<Order_By>
	readonly singular_curated_aggregate?: InputMaybe<Singular_Curated_Aggregate_Order_By>
	readonly singular_nsfw_aggregate?: InputMaybe<Singular_Nsfw_Nfts_Aggregate_Order_By>
	readonly sn?: InputMaybe<Order_By>
	readonly symbol?: InputMaybe<Order_By>
	readonly transferable?: InputMaybe<Order_By>
	readonly tx_block?: InputMaybe<Order_By>
	readonly tx_caller?: InputMaybe<Order_By>
	readonly tx_pending?: InputMaybe<Order_By>
	readonly updated_at?: InputMaybe<Order_By>
}

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
	UpdatedAt = 'updated_at',
}

/** aggregate stddev on columns */
export type Distinct_Nfts_Stddev_Fields = {
	readonly __typename?: 'distinct_nfts_stddev_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly tx_block?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Distinct_Nfts_Stddev_Pop_Fields = {
	readonly __typename?: 'distinct_nfts_stddev_pop_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly tx_block?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Distinct_Nfts_Stddev_Samp_Fields = {
	readonly __typename?: 'distinct_nfts_stddev_samp_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly tx_block?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Distinct_Nfts_Sum_Fields = {
	readonly __typename?: 'distinct_nfts_sum_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly forsale?: Maybe<Scalars['bigint']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Int']>
	readonly tx_block?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export type Distinct_Nfts_Var_Pop_Fields = {
	readonly __typename?: 'distinct_nfts_var_pop_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly tx_block?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Distinct_Nfts_Var_Samp_Fields = {
	readonly __typename?: 'distinct_nfts_var_samp_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly tx_block?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Distinct_Nfts_Variance_Fields = {
	readonly __typename?: 'distinct_nfts_variance_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly tx_block?: Maybe<Scalars['Float']>
}

/**
 * nfts dutchi auction table
 *
 *
 * columns and relationships of "dutchie"
 *
 */
export type Dutchie = {
	readonly __typename?: 'dutchie'
	readonly active: Scalars['Boolean']
	readonly current_price: Scalars['bigint']
	readonly id: Scalars['Int']
	readonly initial_price: Scalars['bigint']
	readonly interval?: Maybe<Scalars['smallint']>
	readonly min_price: Scalars['bigint']
	/** An object relationship */
	readonly nft?: Maybe<Nfts>
	readonly nft_id: Scalars['String']
	readonly reduction: Scalars['numeric']
	readonly sold: Scalars['Boolean']
	readonly start_time: Scalars['timestamptz']
	readonly tick: Scalars['Int']
}

/** Boolean expression to filter rows from the table "dutchie". All fields are combined with a logical 'AND'. */
export type Dutchie_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Dutchie_Bool_Exp>>
	readonly _not?: InputMaybe<Dutchie_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Dutchie_Bool_Exp>>
	readonly active?: InputMaybe<Boolean_Comparison_Exp>
	readonly current_price?: InputMaybe<Bigint_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly initial_price?: InputMaybe<Bigint_Comparison_Exp>
	readonly interval?: InputMaybe<Smallint_Comparison_Exp>
	readonly min_price?: InputMaybe<Bigint_Comparison_Exp>
	readonly nft?: InputMaybe<Nfts_Bool_Exp>
	readonly nft_id?: InputMaybe<String_Comparison_Exp>
	readonly reduction?: InputMaybe<Numeric_Comparison_Exp>
	readonly sold?: InputMaybe<Boolean_Comparison_Exp>
	readonly start_time?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly tick?: InputMaybe<Int_Comparison_Exp>
}

/** Ordering options when selecting data from "dutchie". */
export type Dutchie_Order_By = {
	readonly active?: InputMaybe<Order_By>
	readonly current_price?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly initial_price?: InputMaybe<Order_By>
	readonly interval?: InputMaybe<Order_By>
	readonly min_price?: InputMaybe<Order_By>
	readonly nft?: InputMaybe<Nfts_Order_By>
	readonly nft_id?: InputMaybe<Order_By>
	readonly reduction?: InputMaybe<Order_By>
	readonly sold?: InputMaybe<Order_By>
	readonly start_time?: InputMaybe<Order_By>
	readonly tick?: InputMaybe<Order_By>
}

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
	Tick = 'tick',
}

/** columns and relationships of "gems_enabled" */
export type Gems_Enabled = {
	readonly __typename?: 'gems_enabled'
	readonly enabled: Scalars['Boolean']
	readonly id: Scalars['String']
	/** An object relationship */
	readonly nft?: Maybe<Nfts>
}

/** Boolean expression to filter rows from the table "gems_enabled". All fields are combined with a logical 'AND'. */
export type Gems_Enabled_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Gems_Enabled_Bool_Exp>>
	readonly _not?: InputMaybe<Gems_Enabled_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Gems_Enabled_Bool_Exp>>
	readonly enabled?: InputMaybe<Boolean_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly nft?: InputMaybe<Nfts_Bool_Exp>
}

/** Ordering options when selecting data from "gems_enabled". */
export type Gems_Enabled_Order_By = {
	readonly enabled?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly nft?: InputMaybe<Nfts_Order_By>
}

/** select columns of table "gems_enabled" */
export enum Gems_Enabled_Select_Column {
	/** column name */
	Enabled = 'enabled',
	/** column name */
	Id = 'id',
}

export type Get_By_Unicode_Args = {
	readonly nft?: InputMaybe<Scalars['String']>
}

export type Get_Ordered_Changes_Stats_Args = {
	readonly optype?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "hatched_birds" */
export type Hatched_Birds = {
	readonly __typename?: 'hatched_birds'
	readonly id: Scalars['String']
}

/** Boolean expression to filter rows from the table "hatched_birds". All fields are combined with a logical 'AND'. */
export type Hatched_Birds_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Hatched_Birds_Bool_Exp>>
	readonly _not?: InputMaybe<Hatched_Birds_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Hatched_Birds_Bool_Exp>>
	readonly id?: InputMaybe<String_Comparison_Exp>
}

/** input type for inserting data into table "hatched_birds" */
export type Hatched_Birds_Insert_Input = {
	readonly id?: InputMaybe<Scalars['String']>
}

/** response of any mutation on the table "hatched_birds" */
export type Hatched_Birds_Mutation_Response = {
	readonly __typename?: 'hatched_birds_mutation_response'
	/** number of rows affected by the mutation */
	readonly affected_rows: Scalars['Int']
	/** data from the rows affected by the mutation */
	readonly returning: ReadonlyArray<Hatched_Birds>
}

/** Ordering options when selecting data from "hatched_birds". */
export type Hatched_Birds_Order_By = {
	readonly id?: InputMaybe<Order_By>
}

/** select columns of table "hatched_birds" */
export enum Hatched_Birds_Select_Column {
	/** column name */
	Id = 'id',
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
	/** is the column contained in the given json value */
	readonly _contained_in?: InputMaybe<Scalars['jsonb']>
	/** does the column contain the given json value at the top level */
	readonly _contains?: InputMaybe<Scalars['jsonb']>
	readonly _eq?: InputMaybe<Scalars['jsonb']>
	readonly _gt?: InputMaybe<Scalars['jsonb']>
	readonly _gte?: InputMaybe<Scalars['jsonb']>
	/** does the string exist as a top-level key in the column */
	readonly _has_key?: InputMaybe<Scalars['String']>
	/** do all of these strings exist as top-level keys in the column */
	readonly _has_keys_all?: InputMaybe<ReadonlyArray<Scalars['String']>>
	/** do any of these strings exist as top-level keys in the column */
	readonly _has_keys_any?: InputMaybe<ReadonlyArray<Scalars['String']>>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['jsonb']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['jsonb']>
	readonly _lte?: InputMaybe<Scalars['jsonb']>
	readonly _neq?: InputMaybe<Scalars['jsonb']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['jsonb']>>
}

/** columns and relationships of "nfts" */
export type Nfts = {
	readonly __typename?: 'nfts'
	readonly block: Scalars['Int']
	readonly burned: Scalars['String']
	/** An array relationship */
	readonly changes: ReadonlyArray<Changes>
	/** An aggregate relationship */
	readonly changes_aggregate: Changes_Aggregate
	/** An array relationship */
	readonly children: ReadonlyArray<Nfts>
	/** An aggregate relationship */
	readonly children_aggregate: Nfts_Aggregate
	/** An object relationship */
	readonly collection?: Maybe<Collections>
	readonly collectionId: Scalars['String']
	readonly created_at: Scalars['timestamptz']
	/** An object relationship */
	readonly dutchie?: Maybe<Dutchie>
	/** An object relationship */
	readonly equipped?: Maybe<Parts>
	readonly equipped_id?: Maybe<Scalars['String']>
	readonly forsale: Scalars['bigint']
	/** An object relationship */
	readonly gem_enabled?: Maybe<Gems_Enabled>
	readonly id: Scalars['String']
	readonly id_md5?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadata_content_type?: Maybe<Scalars['String']>
	readonly metadata_description?: Maybe<Scalars['String']>
	readonly metadata_image?: Maybe<Scalars['String']>
	readonly metadata_name?: Maybe<Scalars['String']>
	readonly metadata_properties?: Maybe<Scalars['jsonb']>
	readonly metadata_rarity?: Maybe<Scalars['String']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly owner: Scalars['String']
	/** An object relationship */
	readonly parent?: Maybe<Nfts>
	readonly pending?: Maybe<Scalars['Boolean']>
	readonly priority: Scalars['jsonb']
	readonly properties?: Maybe<Scalars['jsonb']>
	/** An array relationship */
	readonly resources: ReadonlyArray<Resources>
	/** An aggregate relationship */
	readonly resources_aggregate: Resources_Aggregate
	readonly rootowner: Scalars['String']
	/** An array relationship */
	readonly singular_curated: ReadonlyArray<Singular_Curated>
	/** An aggregate relationship */
	readonly singular_curated_aggregate: Singular_Curated_Aggregate
	/** An array relationship */
	readonly singular_nsfw: ReadonlyArray<Singular_Nsfw_Nfts>
	/** An aggregate relationship */
	readonly singular_nsfw_aggregate: Singular_Nsfw_Nfts_Aggregate
	readonly sn: Scalars['String']
	readonly symbol: Scalars['String']
	readonly transferable: Scalars['Int']
	readonly txBlock?: Maybe<Scalars['Int']>
	readonly txCaller?: Maybe<Scalars['String']>
	readonly txPending: Scalars['Boolean']
	readonly updated_at?: Maybe<Scalars['timestamptz']>
}

/** columns and relationships of "nfts" */
export type NftsChangesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>
	where?: InputMaybe<Changes_Bool_Exp>
}

/** columns and relationships of "nfts" */
export type NftsChanges_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Changes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Changes_Order_By>>
	where?: InputMaybe<Changes_Bool_Exp>
}

/** columns and relationships of "nfts" */
export type NftsChildrenArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

/** columns and relationships of "nfts" */
export type NftsChildren_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

/** columns and relationships of "nfts" */
export type NftsMetadata_PropertiesArgs = {
	path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "nfts" */
export type NftsPriorityArgs = {
	path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "nfts" */
export type NftsPropertiesArgs = {
	path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "nfts" */
export type NftsResourcesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>
	where?: InputMaybe<Resources_Bool_Exp>
}

/** columns and relationships of "nfts" */
export type NftsResources_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>
	where?: InputMaybe<Resources_Bool_Exp>
}

/** columns and relationships of "nfts" */
export type NftsSingular_CuratedArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>
	where?: InputMaybe<Singular_Curated_Bool_Exp>
}

/** columns and relationships of "nfts" */
export type NftsSingular_Curated_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Curated_Order_By>>
	where?: InputMaybe<Singular_Curated_Bool_Exp>
}

/** columns and relationships of "nfts" */
export type NftsSingular_NsfwArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>
}

/** columns and relationships of "nfts" */
export type NftsSingular_Nsfw_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Order_By>>
	where?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>
}

/** aggregated selection of "nfts" */
export type Nfts_Aggregate = {
	readonly __typename?: 'nfts_aggregate'
	readonly aggregate?: Maybe<Nfts_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Nfts>
}

/** aggregate fields of "nfts" */
export type Nfts_Aggregate_Fields = {
	readonly __typename?: 'nfts_aggregate_fields'
	readonly avg?: Maybe<Nfts_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Nfts_Max_Fields>
	readonly min?: Maybe<Nfts_Min_Fields>
	readonly stddev?: Maybe<Nfts_Stddev_Fields>
	readonly stddev_pop?: Maybe<Nfts_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Nfts_Stddev_Samp_Fields>
	readonly sum?: Maybe<Nfts_Sum_Fields>
	readonly var_pop?: Maybe<Nfts_Var_Pop_Fields>
	readonly var_samp?: Maybe<Nfts_Var_Samp_Fields>
	readonly variance?: Maybe<Nfts_Variance_Fields>
}

/** aggregate fields of "nfts" */
export type Nfts_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "nfts" */
export type Nfts_Aggregate_Order_By = {
	readonly avg?: InputMaybe<Nfts_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Nfts_Max_Order_By>
	readonly min?: InputMaybe<Nfts_Min_Order_By>
	readonly stddev?: InputMaybe<Nfts_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<Nfts_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<Nfts_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<Nfts_Sum_Order_By>
	readonly var_pop?: InputMaybe<Nfts_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<Nfts_Var_Samp_Order_By>
	readonly variance?: InputMaybe<Nfts_Variance_Order_By>
}

/** aggregate avg on columns */
export type Nfts_Avg_Fields = {
	readonly __typename?: 'nfts_avg_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly txBlock?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "nfts" */
export type Nfts_Avg_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly forsale?: InputMaybe<Order_By>
	readonly metadata_rarity_percentage?: InputMaybe<Order_By>
	readonly transferable?: InputMaybe<Order_By>
	readonly txBlock?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "nfts". All fields are combined with a logical 'AND'. */
export type Nfts_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Nfts_Bool_Exp>>
	readonly _not?: InputMaybe<Nfts_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Nfts_Bool_Exp>>
	readonly block?: InputMaybe<Int_Comparison_Exp>
	readonly burned?: InputMaybe<String_Comparison_Exp>
	readonly changes?: InputMaybe<Changes_Bool_Exp>
	readonly children?: InputMaybe<Nfts_Bool_Exp>
	readonly collection?: InputMaybe<Collections_Bool_Exp>
	readonly collectionId?: InputMaybe<String_Comparison_Exp>
	readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly dutchie?: InputMaybe<Dutchie_Bool_Exp>
	readonly equipped?: InputMaybe<Parts_Bool_Exp>
	readonly equipped_id?: InputMaybe<String_Comparison_Exp>
	readonly forsale?: InputMaybe<Bigint_Comparison_Exp>
	readonly gem_enabled?: InputMaybe<Gems_Enabled_Bool_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly id_md5?: InputMaybe<String_Comparison_Exp>
	readonly metadata?: InputMaybe<String_Comparison_Exp>
	readonly metadata_content_type?: InputMaybe<String_Comparison_Exp>
	readonly metadata_description?: InputMaybe<String_Comparison_Exp>
	readonly metadata_image?: InputMaybe<String_Comparison_Exp>
	readonly metadata_name?: InputMaybe<String_Comparison_Exp>
	readonly metadata_properties?: InputMaybe<Jsonb_Comparison_Exp>
	readonly metadata_rarity?: InputMaybe<String_Comparison_Exp>
	readonly metadata_rarity_percentage?: InputMaybe<Float_Comparison_Exp>
	readonly owner?: InputMaybe<String_Comparison_Exp>
	readonly parent?: InputMaybe<Nfts_Bool_Exp>
	readonly pending?: InputMaybe<Boolean_Comparison_Exp>
	readonly priority?: InputMaybe<Jsonb_Comparison_Exp>
	readonly properties?: InputMaybe<Jsonb_Comparison_Exp>
	readonly resources?: InputMaybe<Resources_Bool_Exp>
	readonly rootowner?: InputMaybe<String_Comparison_Exp>
	readonly singular_curated?: InputMaybe<Singular_Curated_Bool_Exp>
	readonly singular_nsfw?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>
	readonly sn?: InputMaybe<String_Comparison_Exp>
	readonly symbol?: InputMaybe<String_Comparison_Exp>
	readonly transferable?: InputMaybe<Int_Comparison_Exp>
	readonly txBlock?: InputMaybe<Int_Comparison_Exp>
	readonly txCaller?: InputMaybe<String_Comparison_Exp>
	readonly txPending?: InputMaybe<Boolean_Comparison_Exp>
	readonly updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** aggregate max on columns */
export type Nfts_Max_Fields = {
	readonly __typename?: 'nfts_max_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly burned?: Maybe<Scalars['String']>
	readonly collectionId?: Maybe<Scalars['String']>
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly equipped_id?: Maybe<Scalars['String']>
	readonly forsale?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['String']>
	readonly id_md5?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadata_content_type?: Maybe<Scalars['String']>
	readonly metadata_description?: Maybe<Scalars['String']>
	readonly metadata_image?: Maybe<Scalars['String']>
	readonly metadata_name?: Maybe<Scalars['String']>
	readonly metadata_rarity?: Maybe<Scalars['String']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly owner?: Maybe<Scalars['String']>
	readonly rootowner?: Maybe<Scalars['String']>
	readonly sn?: Maybe<Scalars['String']>
	readonly symbol?: Maybe<Scalars['String']>
	readonly transferable?: Maybe<Scalars['Int']>
	readonly txBlock?: Maybe<Scalars['Int']>
	readonly txCaller?: Maybe<Scalars['String']>
	readonly updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "nfts" */
export type Nfts_Max_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly burned?: InputMaybe<Order_By>
	readonly collectionId?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
	readonly equipped_id?: InputMaybe<Order_By>
	readonly forsale?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly id_md5?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly metadata_content_type?: InputMaybe<Order_By>
	readonly metadata_description?: InputMaybe<Order_By>
	readonly metadata_image?: InputMaybe<Order_By>
	readonly metadata_name?: InputMaybe<Order_By>
	readonly metadata_rarity?: InputMaybe<Order_By>
	readonly metadata_rarity_percentage?: InputMaybe<Order_By>
	readonly owner?: InputMaybe<Order_By>
	readonly rootowner?: InputMaybe<Order_By>
	readonly sn?: InputMaybe<Order_By>
	readonly symbol?: InputMaybe<Order_By>
	readonly transferable?: InputMaybe<Order_By>
	readonly txBlock?: InputMaybe<Order_By>
	readonly txCaller?: InputMaybe<Order_By>
	readonly updated_at?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Nfts_Min_Fields = {
	readonly __typename?: 'nfts_min_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly burned?: Maybe<Scalars['String']>
	readonly collectionId?: Maybe<Scalars['String']>
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly equipped_id?: Maybe<Scalars['String']>
	readonly forsale?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['String']>
	readonly id_md5?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly metadata_content_type?: Maybe<Scalars['String']>
	readonly metadata_description?: Maybe<Scalars['String']>
	readonly metadata_image?: Maybe<Scalars['String']>
	readonly metadata_name?: Maybe<Scalars['String']>
	readonly metadata_rarity?: Maybe<Scalars['String']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly owner?: Maybe<Scalars['String']>
	readonly rootowner?: Maybe<Scalars['String']>
	readonly sn?: Maybe<Scalars['String']>
	readonly symbol?: Maybe<Scalars['String']>
	readonly transferable?: Maybe<Scalars['Int']>
	readonly txBlock?: Maybe<Scalars['Int']>
	readonly txCaller?: Maybe<Scalars['String']>
	readonly updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "nfts" */
export type Nfts_Min_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly burned?: InputMaybe<Order_By>
	readonly collectionId?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
	readonly equipped_id?: InputMaybe<Order_By>
	readonly forsale?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly id_md5?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly metadata_content_type?: InputMaybe<Order_By>
	readonly metadata_description?: InputMaybe<Order_By>
	readonly metadata_image?: InputMaybe<Order_By>
	readonly metadata_name?: InputMaybe<Order_By>
	readonly metadata_rarity?: InputMaybe<Order_By>
	readonly metadata_rarity_percentage?: InputMaybe<Order_By>
	readonly owner?: InputMaybe<Order_By>
	readonly rootowner?: InputMaybe<Order_By>
	readonly sn?: InputMaybe<Order_By>
	readonly symbol?: InputMaybe<Order_By>
	readonly transferable?: InputMaybe<Order_By>
	readonly txBlock?: InputMaybe<Order_By>
	readonly txCaller?: InputMaybe<Order_By>
	readonly updated_at?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "nfts". */
export type Nfts_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly burned?: InputMaybe<Order_By>
	readonly changes_aggregate?: InputMaybe<Changes_Aggregate_Order_By>
	readonly children_aggregate?: InputMaybe<Nfts_Aggregate_Order_By>
	readonly collection?: InputMaybe<Collections_Order_By>
	readonly collectionId?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
	readonly dutchie?: InputMaybe<Dutchie_Order_By>
	readonly equipped?: InputMaybe<Parts_Order_By>
	readonly equipped_id?: InputMaybe<Order_By>
	readonly forsale?: InputMaybe<Order_By>
	readonly gem_enabled?: InputMaybe<Gems_Enabled_Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly id_md5?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly metadata_content_type?: InputMaybe<Order_By>
	readonly metadata_description?: InputMaybe<Order_By>
	readonly metadata_image?: InputMaybe<Order_By>
	readonly metadata_name?: InputMaybe<Order_By>
	readonly metadata_properties?: InputMaybe<Order_By>
	readonly metadata_rarity?: InputMaybe<Order_By>
	readonly metadata_rarity_percentage?: InputMaybe<Order_By>
	readonly owner?: InputMaybe<Order_By>
	readonly parent?: InputMaybe<Nfts_Order_By>
	readonly pending?: InputMaybe<Order_By>
	readonly priority?: InputMaybe<Order_By>
	readonly properties?: InputMaybe<Order_By>
	readonly resources_aggregate?: InputMaybe<Resources_Aggregate_Order_By>
	readonly rootowner?: InputMaybe<Order_By>
	readonly singular_curated_aggregate?: InputMaybe<Singular_Curated_Aggregate_Order_By>
	readonly singular_nsfw_aggregate?: InputMaybe<Singular_Nsfw_Nfts_Aggregate_Order_By>
	readonly sn?: InputMaybe<Order_By>
	readonly symbol?: InputMaybe<Order_By>
	readonly transferable?: InputMaybe<Order_By>
	readonly txBlock?: InputMaybe<Order_By>
	readonly txCaller?: InputMaybe<Order_By>
	readonly txPending?: InputMaybe<Order_By>
	readonly updated_at?: InputMaybe<Order_By>
}

/** columns and relationships of "nfts_reactions_stats" */
export type Nfts_Reactions_Stats = {
	readonly __typename?: 'nfts_reactions_stats'
	readonly count?: Maybe<Scalars['bigint']>
	readonly nft_id?: Maybe<Scalars['String']>
	/** An array relationship */
	readonly nft_reaction_stats: ReadonlyArray<Reactions>
	/** An aggregate relationship */
	readonly nft_reaction_stats_aggregate: Reactions_Aggregate
}

/** columns and relationships of "nfts_reactions_stats" */
export type Nfts_Reactions_StatsNft_Reaction_StatsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>
	where?: InputMaybe<Reactions_Bool_Exp>
}

/** columns and relationships of "nfts_reactions_stats" */
export type Nfts_Reactions_StatsNft_Reaction_Stats_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Order_By>>
	where?: InputMaybe<Reactions_Bool_Exp>
}

/** aggregated selection of "nfts_reactions_stats" */
export type Nfts_Reactions_Stats_Aggregate = {
	readonly __typename?: 'nfts_reactions_stats_aggregate'
	readonly aggregate?: Maybe<Nfts_Reactions_Stats_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Nfts_Reactions_Stats>
}

/** aggregate fields of "nfts_reactions_stats" */
export type Nfts_Reactions_Stats_Aggregate_Fields = {
	readonly __typename?: 'nfts_reactions_stats_aggregate_fields'
	readonly avg?: Maybe<Nfts_Reactions_Stats_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Nfts_Reactions_Stats_Max_Fields>
	readonly min?: Maybe<Nfts_Reactions_Stats_Min_Fields>
	readonly stddev?: Maybe<Nfts_Reactions_Stats_Stddev_Fields>
	readonly stddev_pop?: Maybe<Nfts_Reactions_Stats_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Nfts_Reactions_Stats_Stddev_Samp_Fields>
	readonly sum?: Maybe<Nfts_Reactions_Stats_Sum_Fields>
	readonly var_pop?: Maybe<Nfts_Reactions_Stats_Var_Pop_Fields>
	readonly var_samp?: Maybe<Nfts_Reactions_Stats_Var_Samp_Fields>
	readonly variance?: Maybe<Nfts_Reactions_Stats_Variance_Fields>
}

/** aggregate fields of "nfts_reactions_stats" */
export type Nfts_Reactions_Stats_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Nfts_Reactions_Stats_Avg_Fields = {
	readonly __typename?: 'nfts_reactions_stats_avg_fields'
	readonly count?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "nfts_reactions_stats". All fields are combined with a logical 'AND'. */
export type Nfts_Reactions_Stats_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Bool_Exp>>
	readonly _not?: InputMaybe<Nfts_Reactions_Stats_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Nfts_Reactions_Stats_Bool_Exp>>
	readonly count?: InputMaybe<Bigint_Comparison_Exp>
	readonly nft_id?: InputMaybe<String_Comparison_Exp>
	readonly nft_reaction_stats?: InputMaybe<Reactions_Bool_Exp>
}

/** aggregate max on columns */
export type Nfts_Reactions_Stats_Max_Fields = {
	readonly __typename?: 'nfts_reactions_stats_max_fields'
	readonly count?: Maybe<Scalars['bigint']>
	readonly nft_id?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Nfts_Reactions_Stats_Min_Fields = {
	readonly __typename?: 'nfts_reactions_stats_min_fields'
	readonly count?: Maybe<Scalars['bigint']>
	readonly nft_id?: Maybe<Scalars['String']>
}

/** Ordering options when selecting data from "nfts_reactions_stats". */
export type Nfts_Reactions_Stats_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly nft_id?: InputMaybe<Order_By>
	readonly nft_reaction_stats_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>
}

/** select columns of table "nfts_reactions_stats" */
export enum Nfts_Reactions_Stats_Select_Column {
	/** column name */
	Count = 'count',
	/** column name */
	NftId = 'nft_id',
}

/** aggregate stddev on columns */
export type Nfts_Reactions_Stats_Stddev_Fields = {
	readonly __typename?: 'nfts_reactions_stats_stddev_fields'
	readonly count?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Nfts_Reactions_Stats_Stddev_Pop_Fields = {
	readonly __typename?: 'nfts_reactions_stats_stddev_pop_fields'
	readonly count?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Nfts_Reactions_Stats_Stddev_Samp_Fields = {
	readonly __typename?: 'nfts_reactions_stats_stddev_samp_fields'
	readonly count?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Nfts_Reactions_Stats_Sum_Fields = {
	readonly __typename?: 'nfts_reactions_stats_sum_fields'
	readonly count?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Nfts_Reactions_Stats_Var_Pop_Fields = {
	readonly __typename?: 'nfts_reactions_stats_var_pop_fields'
	readonly count?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Nfts_Reactions_Stats_Var_Samp_Fields = {
	readonly __typename?: 'nfts_reactions_stats_var_samp_fields'
	readonly count?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Nfts_Reactions_Stats_Variance_Fields = {
	readonly __typename?: 'nfts_reactions_stats_variance_fields'
	readonly count?: Maybe<Scalars['Float']>
}

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
	UpdatedAt = 'updated_at',
}

/** columns and relationships of "nfts_stats" */
export type Nfts_Stats = {
	readonly __typename?: 'nfts_stats'
	readonly collection_id?: Maybe<Scalars['String']>
	readonly count?: Maybe<Scalars['bigint']>
}

/** aggregated selection of "nfts_stats" */
export type Nfts_Stats_Aggregate = {
	readonly __typename?: 'nfts_stats_aggregate'
	readonly aggregate?: Maybe<Nfts_Stats_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Nfts_Stats>
}

/** aggregate fields of "nfts_stats" */
export type Nfts_Stats_Aggregate_Fields = {
	readonly __typename?: 'nfts_stats_aggregate_fields'
	readonly avg?: Maybe<Nfts_Stats_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Nfts_Stats_Max_Fields>
	readonly min?: Maybe<Nfts_Stats_Min_Fields>
	readonly stddev?: Maybe<Nfts_Stats_Stddev_Fields>
	readonly stddev_pop?: Maybe<Nfts_Stats_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Nfts_Stats_Stddev_Samp_Fields>
	readonly sum?: Maybe<Nfts_Stats_Sum_Fields>
	readonly var_pop?: Maybe<Nfts_Stats_Var_Pop_Fields>
	readonly var_samp?: Maybe<Nfts_Stats_Var_Samp_Fields>
	readonly variance?: Maybe<Nfts_Stats_Variance_Fields>
}

/** aggregate fields of "nfts_stats" */
export type Nfts_Stats_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Nfts_Stats_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Nfts_Stats_Avg_Fields = {
	readonly __typename?: 'nfts_stats_avg_fields'
	readonly count?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "nfts_stats". All fields are combined with a logical 'AND'. */
export type Nfts_Stats_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Nfts_Stats_Bool_Exp>>
	readonly _not?: InputMaybe<Nfts_Stats_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Nfts_Stats_Bool_Exp>>
	readonly collection_id?: InputMaybe<String_Comparison_Exp>
	readonly count?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Nfts_Stats_Max_Fields = {
	readonly __typename?: 'nfts_stats_max_fields'
	readonly collection_id?: Maybe<Scalars['String']>
	readonly count?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type Nfts_Stats_Min_Fields = {
	readonly __typename?: 'nfts_stats_min_fields'
	readonly collection_id?: Maybe<Scalars['String']>
	readonly count?: Maybe<Scalars['bigint']>
}

/** Ordering options when selecting data from "nfts_stats". */
export type Nfts_Stats_Order_By = {
	readonly collection_id?: InputMaybe<Order_By>
	readonly count?: InputMaybe<Order_By>
}

/** select columns of table "nfts_stats" */
export enum Nfts_Stats_Select_Column {
	/** column name */
	CollectionId = 'collection_id',
	/** column name */
	Count = 'count',
}

/** aggregate stddev on columns */
export type Nfts_Stats_Stddev_Fields = {
	readonly __typename?: 'nfts_stats_stddev_fields'
	readonly count?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Nfts_Stats_Stddev_Pop_Fields = {
	readonly __typename?: 'nfts_stats_stddev_pop_fields'
	readonly count?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Nfts_Stats_Stddev_Samp_Fields = {
	readonly __typename?: 'nfts_stats_stddev_samp_fields'
	readonly count?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Nfts_Stats_Sum_Fields = {
	readonly __typename?: 'nfts_stats_sum_fields'
	readonly count?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Nfts_Stats_Var_Pop_Fields = {
	readonly __typename?: 'nfts_stats_var_pop_fields'
	readonly count?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Nfts_Stats_Var_Samp_Fields = {
	readonly __typename?: 'nfts_stats_var_samp_fields'
	readonly count?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Nfts_Stats_Variance_Fields = {
	readonly __typename?: 'nfts_stats_variance_fields'
	readonly count?: Maybe<Scalars['Float']>
}

/** aggregate stddev on columns */
export type Nfts_Stddev_Fields = {
	readonly __typename?: 'nfts_stddev_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly txBlock?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "nfts" */
export type Nfts_Stddev_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly forsale?: InputMaybe<Order_By>
	readonly metadata_rarity_percentage?: InputMaybe<Order_By>
	readonly transferable?: InputMaybe<Order_By>
	readonly txBlock?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Nfts_Stddev_Pop_Fields = {
	readonly __typename?: 'nfts_stddev_pop_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly txBlock?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "nfts" */
export type Nfts_Stddev_Pop_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly forsale?: InputMaybe<Order_By>
	readonly metadata_rarity_percentage?: InputMaybe<Order_By>
	readonly transferable?: InputMaybe<Order_By>
	readonly txBlock?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Nfts_Stddev_Samp_Fields = {
	readonly __typename?: 'nfts_stddev_samp_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly txBlock?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "nfts" */
export type Nfts_Stddev_Samp_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly forsale?: InputMaybe<Order_By>
	readonly metadata_rarity_percentage?: InputMaybe<Order_By>
	readonly transferable?: InputMaybe<Order_By>
	readonly txBlock?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Nfts_Sum_Fields = {
	readonly __typename?: 'nfts_sum_fields'
	readonly block?: Maybe<Scalars['Int']>
	readonly forsale?: Maybe<Scalars['bigint']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Int']>
	readonly txBlock?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "nfts" */
export type Nfts_Sum_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly forsale?: InputMaybe<Order_By>
	readonly metadata_rarity_percentage?: InputMaybe<Order_By>
	readonly transferable?: InputMaybe<Order_By>
	readonly txBlock?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Nfts_Var_Pop_Fields = {
	readonly __typename?: 'nfts_var_pop_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly txBlock?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "nfts" */
export type Nfts_Var_Pop_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly forsale?: InputMaybe<Order_By>
	readonly metadata_rarity_percentage?: InputMaybe<Order_By>
	readonly transferable?: InputMaybe<Order_By>
	readonly txBlock?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Nfts_Var_Samp_Fields = {
	readonly __typename?: 'nfts_var_samp_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly txBlock?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "nfts" */
export type Nfts_Var_Samp_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly forsale?: InputMaybe<Order_By>
	readonly metadata_rarity_percentage?: InputMaybe<Order_By>
	readonly transferable?: InputMaybe<Order_By>
	readonly txBlock?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Nfts_Variance_Fields = {
	readonly __typename?: 'nfts_variance_fields'
	readonly block?: Maybe<Scalars['Float']>
	readonly forsale?: Maybe<Scalars['Float']>
	readonly metadata_rarity_percentage?: Maybe<Scalars['Float']>
	readonly transferable?: Maybe<Scalars['Float']>
	readonly txBlock?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "nfts" */
export type Nfts_Variance_Order_By = {
	readonly block?: InputMaybe<Order_By>
	readonly forsale?: InputMaybe<Order_By>
	readonly metadata_rarity_percentage?: InputMaybe<Order_By>
	readonly transferable?: InputMaybe<Order_By>
	readonly txBlock?: InputMaybe<Order_By>
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

/** columns and relationships of "parts" */
export type Parts = {
	readonly __typename?: 'parts'
	/** An object relationship */
	readonly base: Bases
	readonly base_id: Scalars['String']
	readonly equippable?: Maybe<Scalars['jsonb']>
	readonly id: Scalars['String']
	/** An array relationship */
	readonly nfts_equipped: ReadonlyArray<Nfts>
	/** An aggregate relationship */
	readonly nfts_equipped_aggregate: Nfts_Aggregate
	readonly part_id: Scalars['String']
	/** An array relationship */
	readonly resources: ReadonlyArray<Resources>
	/** An aggregate relationship */
	readonly resources_aggregate: Resources_Aggregate
	/** An object relationship */
	readonly resources_part?: Maybe<Resources_Parts>
	readonly src?: Maybe<Scalars['String']>
	readonly type: Scalars['String']
	readonly z: Scalars['Int']
}

/** columns and relationships of "parts" */
export type PartsEquippableArgs = {
	path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "parts" */
export type PartsNfts_EquippedArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

/** columns and relationships of "parts" */
export type PartsNfts_Equipped_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Nfts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Nfts_Order_By>>
	where?: InputMaybe<Nfts_Bool_Exp>
}

/** columns and relationships of "parts" */
export type PartsResourcesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>
	where?: InputMaybe<Resources_Bool_Exp>
}

/** columns and relationships of "parts" */
export type PartsResources_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Order_By>>
	where?: InputMaybe<Resources_Bool_Exp>
}

/** aggregated selection of "parts" */
export type Parts_Aggregate = {
	readonly __typename?: 'parts_aggregate'
	readonly aggregate?: Maybe<Parts_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Parts>
}

/** aggregate fields of "parts" */
export type Parts_Aggregate_Fields = {
	readonly __typename?: 'parts_aggregate_fields'
	readonly avg?: Maybe<Parts_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Parts_Max_Fields>
	readonly min?: Maybe<Parts_Min_Fields>
	readonly stddev?: Maybe<Parts_Stddev_Fields>
	readonly stddev_pop?: Maybe<Parts_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Parts_Stddev_Samp_Fields>
	readonly sum?: Maybe<Parts_Sum_Fields>
	readonly var_pop?: Maybe<Parts_Var_Pop_Fields>
	readonly var_samp?: Maybe<Parts_Var_Samp_Fields>
	readonly variance?: Maybe<Parts_Variance_Fields>
}

/** aggregate fields of "parts" */
export type Parts_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Parts_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "parts" */
export type Parts_Aggregate_Order_By = {
	readonly avg?: InputMaybe<Parts_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Parts_Max_Order_By>
	readonly min?: InputMaybe<Parts_Min_Order_By>
	readonly stddev?: InputMaybe<Parts_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<Parts_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<Parts_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<Parts_Sum_Order_By>
	readonly var_pop?: InputMaybe<Parts_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<Parts_Var_Samp_Order_By>
	readonly variance?: InputMaybe<Parts_Variance_Order_By>
}

/** aggregate avg on columns */
export type Parts_Avg_Fields = {
	readonly __typename?: 'parts_avg_fields'
	readonly z?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "parts" */
export type Parts_Avg_Order_By = {
	readonly z?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "parts". All fields are combined with a logical 'AND'. */
export type Parts_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Parts_Bool_Exp>>
	readonly _not?: InputMaybe<Parts_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Parts_Bool_Exp>>
	readonly base?: InputMaybe<Bases_Bool_Exp>
	readonly base_id?: InputMaybe<String_Comparison_Exp>
	readonly equippable?: InputMaybe<Jsonb_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly nfts_equipped?: InputMaybe<Nfts_Bool_Exp>
	readonly part_id?: InputMaybe<String_Comparison_Exp>
	readonly resources?: InputMaybe<Resources_Bool_Exp>
	readonly resources_part?: InputMaybe<Resources_Parts_Bool_Exp>
	readonly src?: InputMaybe<String_Comparison_Exp>
	readonly type?: InputMaybe<String_Comparison_Exp>
	readonly z?: InputMaybe<Int_Comparison_Exp>
}

/** aggregate max on columns */
export type Parts_Max_Fields = {
	readonly __typename?: 'parts_max_fields'
	readonly base_id?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly part_id?: Maybe<Scalars['String']>
	readonly src?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['String']>
	readonly z?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "parts" */
export type Parts_Max_Order_By = {
	readonly base_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly part_id?: InputMaybe<Order_By>
	readonly src?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
	readonly z?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Parts_Min_Fields = {
	readonly __typename?: 'parts_min_fields'
	readonly base_id?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly part_id?: Maybe<Scalars['String']>
	readonly src?: Maybe<Scalars['String']>
	readonly type?: Maybe<Scalars['String']>
	readonly z?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "parts" */
export type Parts_Min_Order_By = {
	readonly base_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly part_id?: InputMaybe<Order_By>
	readonly src?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
	readonly z?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "parts". */
export type Parts_Order_By = {
	readonly base?: InputMaybe<Bases_Order_By>
	readonly base_id?: InputMaybe<Order_By>
	readonly equippable?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly nfts_equipped_aggregate?: InputMaybe<Nfts_Aggregate_Order_By>
	readonly part_id?: InputMaybe<Order_By>
	readonly resources_aggregate?: InputMaybe<Resources_Aggregate_Order_By>
	readonly resources_part?: InputMaybe<Resources_Parts_Order_By>
	readonly src?: InputMaybe<Order_By>
	readonly type?: InputMaybe<Order_By>
	readonly z?: InputMaybe<Order_By>
}

/** select columns of table "parts" */
export enum Parts_Select_Column {
	/** column name */
	BaseId = 'base_id',
	/** column name */
	Equippable = 'equippable',
	/** column name */
	Id = 'id',
	/** column name */
	PartId = 'part_id',
	/** column name */
	Src = 'src',
	/** column name */
	Type = 'type',
	/** column name */
	Z = 'z',
}

/** aggregate stddev on columns */
export type Parts_Stddev_Fields = {
	readonly __typename?: 'parts_stddev_fields'
	readonly z?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "parts" */
export type Parts_Stddev_Order_By = {
	readonly z?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Parts_Stddev_Pop_Fields = {
	readonly __typename?: 'parts_stddev_pop_fields'
	readonly z?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "parts" */
export type Parts_Stddev_Pop_Order_By = {
	readonly z?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Parts_Stddev_Samp_Fields = {
	readonly __typename?: 'parts_stddev_samp_fields'
	readonly z?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "parts" */
export type Parts_Stddev_Samp_Order_By = {
	readonly z?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Parts_Sum_Fields = {
	readonly __typename?: 'parts_sum_fields'
	readonly z?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "parts" */
export type Parts_Sum_Order_By = {
	readonly z?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Parts_Var_Pop_Fields = {
	readonly __typename?: 'parts_var_pop_fields'
	readonly z?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "parts" */
export type Parts_Var_Pop_Order_By = {
	readonly z?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Parts_Var_Samp_Fields = {
	readonly __typename?: 'parts_var_samp_fields'
	readonly z?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "parts" */
export type Parts_Var_Samp_Order_By = {
	readonly z?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Parts_Variance_Fields = {
	readonly __typename?: 'parts_variance_fields'
	readonly z?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "parts" */
export type Parts_Variance_Order_By = {
	readonly z?: InputMaybe<Order_By>
}

/** columns and relationships of "reactions" */
export type Reactions = {
	readonly __typename?: 'reactions'
	readonly created_at: Scalars['timestamptz']
	readonly id: Scalars['Int']
	readonly nft_id: Scalars['String']
	readonly owner: Scalars['String']
	/** An array relationship */
	readonly reactions_unicode: ReadonlyArray<Reactions_Unicode>
	/** An aggregate relationship */
	readonly reactions_unicode_aggregate: Reactions_Unicode_Aggregate
	/** An object relationship */
	readonly stats?: Maybe<Nfts_Reactions_Stats>
	readonly unicode: Scalars['String']
	/** An array relationship */
	readonly user_reactions: ReadonlyArray<Reactions_Users>
	/** An aggregate relationship */
	readonly user_reactions_aggregate: Reactions_Users_Aggregate
}

/** columns and relationships of "reactions" */
export type ReactionsReactions_UnicodeArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Unicode_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Unicode_Order_By>>
	where?: InputMaybe<Reactions_Unicode_Bool_Exp>
}

/** columns and relationships of "reactions" */
export type ReactionsReactions_Unicode_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Unicode_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Unicode_Order_By>>
	where?: InputMaybe<Reactions_Unicode_Bool_Exp>
}

/** columns and relationships of "reactions" */
export type ReactionsUser_ReactionsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Users_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Users_Order_By>>
	where?: InputMaybe<Reactions_Users_Bool_Exp>
}

/** columns and relationships of "reactions" */
export type ReactionsUser_Reactions_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Reactions_Users_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Reactions_Users_Order_By>>
	where?: InputMaybe<Reactions_Users_Bool_Exp>
}

/** aggregated selection of "reactions" */
export type Reactions_Aggregate = {
	readonly __typename?: 'reactions_aggregate'
	readonly aggregate?: Maybe<Reactions_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Reactions>
}

/** aggregate fields of "reactions" */
export type Reactions_Aggregate_Fields = {
	readonly __typename?: 'reactions_aggregate_fields'
	readonly avg?: Maybe<Reactions_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Reactions_Max_Fields>
	readonly min?: Maybe<Reactions_Min_Fields>
	readonly stddev?: Maybe<Reactions_Stddev_Fields>
	readonly stddev_pop?: Maybe<Reactions_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Reactions_Stddev_Samp_Fields>
	readonly sum?: Maybe<Reactions_Sum_Fields>
	readonly var_pop?: Maybe<Reactions_Var_Pop_Fields>
	readonly var_samp?: Maybe<Reactions_Var_Samp_Fields>
	readonly variance?: Maybe<Reactions_Variance_Fields>
}

/** aggregate fields of "reactions" */
export type Reactions_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Reactions_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "reactions" */
export type Reactions_Aggregate_Order_By = {
	readonly avg?: InputMaybe<Reactions_Avg_Order_By>
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Reactions_Max_Order_By>
	readonly min?: InputMaybe<Reactions_Min_Order_By>
	readonly stddev?: InputMaybe<Reactions_Stddev_Order_By>
	readonly stddev_pop?: InputMaybe<Reactions_Stddev_Pop_Order_By>
	readonly stddev_samp?: InputMaybe<Reactions_Stddev_Samp_Order_By>
	readonly sum?: InputMaybe<Reactions_Sum_Order_By>
	readonly var_pop?: InputMaybe<Reactions_Var_Pop_Order_By>
	readonly var_samp?: InputMaybe<Reactions_Var_Samp_Order_By>
	readonly variance?: InputMaybe<Reactions_Variance_Order_By>
}

/** aggregate avg on columns */
export type Reactions_Avg_Fields = {
	readonly __typename?: 'reactions_avg_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "reactions" */
export type Reactions_Avg_Order_By = {
	readonly id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "reactions". All fields are combined with a logical 'AND'. */
export type Reactions_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Reactions_Bool_Exp>>
	readonly _not?: InputMaybe<Reactions_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Reactions_Bool_Exp>>
	readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly id?: InputMaybe<Int_Comparison_Exp>
	readonly nft_id?: InputMaybe<String_Comparison_Exp>
	readonly owner?: InputMaybe<String_Comparison_Exp>
	readonly reactions_unicode?: InputMaybe<Reactions_Unicode_Bool_Exp>
	readonly stats?: InputMaybe<Nfts_Reactions_Stats_Bool_Exp>
	readonly unicode?: InputMaybe<String_Comparison_Exp>
	readonly user_reactions?: InputMaybe<Reactions_Users_Bool_Exp>
}

/** aggregate max on columns */
export type Reactions_Max_Fields = {
	readonly __typename?: 'reactions_max_fields'
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly nft_id?: Maybe<Scalars['String']>
	readonly owner?: Maybe<Scalars['String']>
	readonly unicode?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "reactions" */
export type Reactions_Max_Order_By = {
	readonly created_at?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly nft_id?: InputMaybe<Order_By>
	readonly owner?: InputMaybe<Order_By>
	readonly unicode?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Reactions_Min_Fields = {
	readonly __typename?: 'reactions_min_fields'
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly id?: Maybe<Scalars['Int']>
	readonly nft_id?: Maybe<Scalars['String']>
	readonly owner?: Maybe<Scalars['String']>
	readonly unicode?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "reactions" */
export type Reactions_Min_Order_By = {
	readonly created_at?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly nft_id?: InputMaybe<Order_By>
	readonly owner?: InputMaybe<Order_By>
	readonly unicode?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "reactions". */
export type Reactions_Order_By = {
	readonly created_at?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly nft_id?: InputMaybe<Order_By>
	readonly owner?: InputMaybe<Order_By>
	readonly reactions_unicode_aggregate?: InputMaybe<Reactions_Unicode_Aggregate_Order_By>
	readonly stats?: InputMaybe<Nfts_Reactions_Stats_Order_By>
	readonly unicode?: InputMaybe<Order_By>
	readonly user_reactions_aggregate?: InputMaybe<Reactions_Users_Aggregate_Order_By>
}

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
	Unicode = 'unicode',
}

/** aggregate stddev on columns */
export type Reactions_Stddev_Fields = {
	readonly __typename?: 'reactions_stddev_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "reactions" */
export type Reactions_Stddev_Order_By = {
	readonly id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Reactions_Stddev_Pop_Fields = {
	readonly __typename?: 'reactions_stddev_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "reactions" */
export type Reactions_Stddev_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Reactions_Stddev_Samp_Fields = {
	readonly __typename?: 'reactions_stddev_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "reactions" */
export type Reactions_Stddev_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
}

/** aggregate sum on columns */
export type Reactions_Sum_Fields = {
	readonly __typename?: 'reactions_sum_fields'
	readonly id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "reactions" */
export type Reactions_Sum_Order_By = {
	readonly id?: InputMaybe<Order_By>
}

/** columns and relationships of "reactions_unicode" */
export type Reactions_Unicode = {
	readonly __typename?: 'reactions_unicode'
	readonly nft_id?: Maybe<Scalars['String']>
	readonly owner?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly reactions_unicode?: Maybe<Reactions_Unicode>
	readonly unicode?: Maybe<Scalars['String']>
}

/** aggregated selection of "reactions_unicode" */
export type Reactions_Unicode_Aggregate = {
	readonly __typename?: 'reactions_unicode_aggregate'
	readonly aggregate?: Maybe<Reactions_Unicode_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Reactions_Unicode>
}

/** aggregate fields of "reactions_unicode" */
export type Reactions_Unicode_Aggregate_Fields = {
	readonly __typename?: 'reactions_unicode_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Reactions_Unicode_Max_Fields>
	readonly min?: Maybe<Reactions_Unicode_Min_Fields>
}

/** aggregate fields of "reactions_unicode" */
export type Reactions_Unicode_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Reactions_Unicode_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "reactions_unicode" */
export type Reactions_Unicode_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Reactions_Unicode_Max_Order_By>
	readonly min?: InputMaybe<Reactions_Unicode_Min_Order_By>
}

/** Boolean expression to filter rows from the table "reactions_unicode". All fields are combined with a logical 'AND'. */
export type Reactions_Unicode_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Reactions_Unicode_Bool_Exp>>
	readonly _not?: InputMaybe<Reactions_Unicode_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Reactions_Unicode_Bool_Exp>>
	readonly nft_id?: InputMaybe<String_Comparison_Exp>
	readonly owner?: InputMaybe<String_Comparison_Exp>
	readonly reactions_unicode?: InputMaybe<Reactions_Unicode_Bool_Exp>
	readonly unicode?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Reactions_Unicode_Max_Fields = {
	readonly __typename?: 'reactions_unicode_max_fields'
	readonly nft_id?: Maybe<Scalars['String']>
	readonly owner?: Maybe<Scalars['String']>
	readonly unicode?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "reactions_unicode" */
export type Reactions_Unicode_Max_Order_By = {
	readonly nft_id?: InputMaybe<Order_By>
	readonly owner?: InputMaybe<Order_By>
	readonly unicode?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Reactions_Unicode_Min_Fields = {
	readonly __typename?: 'reactions_unicode_min_fields'
	readonly nft_id?: Maybe<Scalars['String']>
	readonly owner?: Maybe<Scalars['String']>
	readonly unicode?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "reactions_unicode" */
export type Reactions_Unicode_Min_Order_By = {
	readonly nft_id?: InputMaybe<Order_By>
	readonly owner?: InputMaybe<Order_By>
	readonly unicode?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "reactions_unicode". */
export type Reactions_Unicode_Order_By = {
	readonly nft_id?: InputMaybe<Order_By>
	readonly owner?: InputMaybe<Order_By>
	readonly reactions_unicode?: InputMaybe<Reactions_Unicode_Order_By>
	readonly unicode?: InputMaybe<Order_By>
}

/** select columns of table "reactions_unicode" */
export enum Reactions_Unicode_Select_Column {
	/** column name */
	NftId = 'nft_id',
	/** column name */
	Owner = 'owner',
	/** column name */
	Unicode = 'unicode',
}

/** columns and relationships of "reactions_users" */
export type Reactions_Users = {
	readonly __typename?: 'reactions_users'
	readonly nft_id?: Maybe<Scalars['String']>
	readonly owner?: Maybe<Scalars['String']>
	readonly unicode?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly user_reactions?: Maybe<Reactions_Users>
}

/** aggregated selection of "reactions_users" */
export type Reactions_Users_Aggregate = {
	readonly __typename?: 'reactions_users_aggregate'
	readonly aggregate?: Maybe<Reactions_Users_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Reactions_Users>
}

/** aggregate fields of "reactions_users" */
export type Reactions_Users_Aggregate_Fields = {
	readonly __typename?: 'reactions_users_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Reactions_Users_Max_Fields>
	readonly min?: Maybe<Reactions_Users_Min_Fields>
}

/** aggregate fields of "reactions_users" */
export type Reactions_Users_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Reactions_Users_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "reactions_users" */
export type Reactions_Users_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Reactions_Users_Max_Order_By>
	readonly min?: InputMaybe<Reactions_Users_Min_Order_By>
}

/** Boolean expression to filter rows from the table "reactions_users". All fields are combined with a logical 'AND'. */
export type Reactions_Users_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Reactions_Users_Bool_Exp>>
	readonly _not?: InputMaybe<Reactions_Users_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Reactions_Users_Bool_Exp>>
	readonly nft_id?: InputMaybe<String_Comparison_Exp>
	readonly owner?: InputMaybe<String_Comparison_Exp>
	readonly unicode?: InputMaybe<String_Comparison_Exp>
	readonly user_reactions?: InputMaybe<Reactions_Users_Bool_Exp>
}

/** aggregate max on columns */
export type Reactions_Users_Max_Fields = {
	readonly __typename?: 'reactions_users_max_fields'
	readonly nft_id?: Maybe<Scalars['String']>
	readonly owner?: Maybe<Scalars['String']>
	readonly unicode?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "reactions_users" */
export type Reactions_Users_Max_Order_By = {
	readonly nft_id?: InputMaybe<Order_By>
	readonly owner?: InputMaybe<Order_By>
	readonly unicode?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Reactions_Users_Min_Fields = {
	readonly __typename?: 'reactions_users_min_fields'
	readonly nft_id?: Maybe<Scalars['String']>
	readonly owner?: Maybe<Scalars['String']>
	readonly unicode?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "reactions_users" */
export type Reactions_Users_Min_Order_By = {
	readonly nft_id?: InputMaybe<Order_By>
	readonly owner?: InputMaybe<Order_By>
	readonly unicode?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "reactions_users". */
export type Reactions_Users_Order_By = {
	readonly nft_id?: InputMaybe<Order_By>
	readonly owner?: InputMaybe<Order_By>
	readonly unicode?: InputMaybe<Order_By>
	readonly user_reactions?: InputMaybe<Reactions_Users_Order_By>
}

/** select columns of table "reactions_users" */
export enum Reactions_Users_Select_Column {
	/** column name */
	NftId = 'nft_id',
	/** column name */
	Owner = 'owner',
	/** column name */
	Unicode = 'unicode',
}

/** aggregate var_pop on columns */
export type Reactions_Var_Pop_Fields = {
	readonly __typename?: 'reactions_var_pop_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "reactions" */
export type Reactions_Var_Pop_Order_By = {
	readonly id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Reactions_Var_Samp_Fields = {
	readonly __typename?: 'reactions_var_samp_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "reactions" */
export type Reactions_Var_Samp_Order_By = {
	readonly id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Reactions_Variance_Fields = {
	readonly __typename?: 'reactions_variance_fields'
	readonly id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "reactions" */
export type Reactions_Variance_Order_By = {
	readonly id?: InputMaybe<Order_By>
}

/** columns and relationships of "recently_listed" */
export type Recently_Listed = {
	readonly __typename?: 'recently_listed'
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly forsale?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly nft?: Maybe<Nfts>
}

/** aggregated selection of "recently_listed" */
export type Recently_Listed_Aggregate = {
	readonly __typename?: 'recently_listed_aggregate'
	readonly aggregate?: Maybe<Recently_Listed_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Recently_Listed>
}

/** aggregate fields of "recently_listed" */
export type Recently_Listed_Aggregate_Fields = {
	readonly __typename?: 'recently_listed_aggregate_fields'
	readonly avg?: Maybe<Recently_Listed_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Recently_Listed_Max_Fields>
	readonly min?: Maybe<Recently_Listed_Min_Fields>
	readonly stddev?: Maybe<Recently_Listed_Stddev_Fields>
	readonly stddev_pop?: Maybe<Recently_Listed_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Recently_Listed_Stddev_Samp_Fields>
	readonly sum?: Maybe<Recently_Listed_Sum_Fields>
	readonly var_pop?: Maybe<Recently_Listed_Var_Pop_Fields>
	readonly var_samp?: Maybe<Recently_Listed_Var_Samp_Fields>
	readonly variance?: Maybe<Recently_Listed_Variance_Fields>
}

/** aggregate fields of "recently_listed" */
export type Recently_Listed_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Recently_Listed_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Recently_Listed_Avg_Fields = {
	readonly __typename?: 'recently_listed_avg_fields'
	readonly forsale?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "recently_listed". All fields are combined with a logical 'AND'. */
export type Recently_Listed_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Recently_Listed_Bool_Exp>>
	readonly _not?: InputMaybe<Recently_Listed_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Recently_Listed_Bool_Exp>>
	readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly forsale?: InputMaybe<Bigint_Comparison_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly nft?: InputMaybe<Nfts_Bool_Exp>
}

/** aggregate max on columns */
export type Recently_Listed_Max_Fields = {
	readonly __typename?: 'recently_listed_max_fields'
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly forsale?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Recently_Listed_Min_Fields = {
	readonly __typename?: 'recently_listed_min_fields'
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly forsale?: Maybe<Scalars['bigint']>
	readonly id?: Maybe<Scalars['String']>
}

/** Ordering options when selecting data from "recently_listed". */
export type Recently_Listed_Order_By = {
	readonly created_at?: InputMaybe<Order_By>
	readonly forsale?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly nft?: InputMaybe<Nfts_Order_By>
}

/** select columns of table "recently_listed" */
export enum Recently_Listed_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Forsale = 'forsale',
	/** column name */
	Id = 'id',
}

/** aggregate stddev on columns */
export type Recently_Listed_Stddev_Fields = {
	readonly __typename?: 'recently_listed_stddev_fields'
	readonly forsale?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Recently_Listed_Stddev_Pop_Fields = {
	readonly __typename?: 'recently_listed_stddev_pop_fields'
	readonly forsale?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Recently_Listed_Stddev_Samp_Fields = {
	readonly __typename?: 'recently_listed_stddev_samp_fields'
	readonly forsale?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Recently_Listed_Sum_Fields = {
	readonly __typename?: 'recently_listed_sum_fields'
	readonly forsale?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Recently_Listed_Var_Pop_Fields = {
	readonly __typename?: 'recently_listed_var_pop_fields'
	readonly forsale?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Recently_Listed_Var_Samp_Fields = {
	readonly __typename?: 'recently_listed_var_samp_fields'
	readonly forsale?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Recently_Listed_Variance_Fields = {
	readonly __typename?: 'recently_listed_variance_fields'
	readonly forsale?: Maybe<Scalars['Float']>
}

/** columns and relationships of "resources" */
export type Resources = {
	readonly __typename?: 'resources'
	/** An object relationship */
	readonly base?: Maybe<Bases>
	readonly base_id?: Maybe<Scalars['String']>
	/** An object relationship */
	readonly base_theme?: Maybe<Resources_Base_Themes>
	readonly id: Scalars['String']
	readonly metadata?: Maybe<Scalars['String']>
	readonly nft_id: Scalars['String']
	/** An object relationship */
	readonly nfts: Nfts
	readonly parts?: Maybe<Scalars['jsonb']>
	readonly pending: Scalars['Boolean']
	/** An array relationship */
	readonly resources_base_themes: ReadonlyArray<Resources_Base_Themes>
	/** An object relationship */
	readonly resources_part?: Maybe<Resources_Parts>
	/** An array relationship */
	readonly resources_parts: ReadonlyArray<Resources_Parts>
	/** An aggregate relationship */
	readonly resources_parts_aggregate: Resources_Parts_Aggregate
	/** An object relationship */
	readonly slot?: Maybe<Parts>
	readonly slot_id?: Maybe<Scalars['String']>
	readonly src?: Maybe<Scalars['String']>
	readonly theme?: Maybe<Scalars['jsonb']>
	readonly thumb?: Maybe<Scalars['String']>
}

/** columns and relationships of "resources" */
export type ResourcesPartsArgs = {
	path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "resources" */
export type ResourcesResources_Base_ThemesArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Order_By>>
	where?: InputMaybe<Resources_Base_Themes_Bool_Exp>
}

/** columns and relationships of "resources" */
export type ResourcesResources_PartsArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Parts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Parts_Order_By>>
	where?: InputMaybe<Resources_Parts_Bool_Exp>
}

/** columns and relationships of "resources" */
export type ResourcesResources_Parts_AggregateArgs = {
	distinct_on?: InputMaybe<ReadonlyArray<Resources_Parts_Select_Column>>
	limit?: InputMaybe<Scalars['Int']>
	offset?: InputMaybe<Scalars['Int']>
	order_by?: InputMaybe<ReadonlyArray<Resources_Parts_Order_By>>
	where?: InputMaybe<Resources_Parts_Bool_Exp>
}

/** columns and relationships of "resources" */
export type ResourcesThemeArgs = {
	path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "resources" */
export type Resources_Aggregate = {
	readonly __typename?: 'resources_aggregate'
	readonly aggregate?: Maybe<Resources_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Resources>
}

/** aggregate fields of "resources" */
export type Resources_Aggregate_Fields = {
	readonly __typename?: 'resources_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Resources_Max_Fields>
	readonly min?: Maybe<Resources_Min_Fields>
}

/** aggregate fields of "resources" */
export type Resources_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Resources_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "resources" */
export type Resources_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Resources_Max_Order_By>
	readonly min?: InputMaybe<Resources_Min_Order_By>
}

/** columns and relationships of "resources_base_themes" */
export type Resources_Base_Themes = {
	readonly __typename?: 'resources_base_themes'
	/** An object relationship */
	readonly resource: Resources
	readonly resource_id: Scalars['String']
	/** An object relationship */
	readonly theme: Base_Themes
	readonly theme_id: Scalars['String']
}

/** order by aggregate values of table "resources_base_themes" */
export type Resources_Base_Themes_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Resources_Base_Themes_Max_Order_By>
	readonly min?: InputMaybe<Resources_Base_Themes_Min_Order_By>
}

/** Boolean expression to filter rows from the table "resources_base_themes". All fields are combined with a logical 'AND'. */
export type Resources_Base_Themes_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Bool_Exp>>
	readonly _not?: InputMaybe<Resources_Base_Themes_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Resources_Base_Themes_Bool_Exp>>
	readonly resource?: InputMaybe<Resources_Bool_Exp>
	readonly resource_id?: InputMaybe<String_Comparison_Exp>
	readonly theme?: InputMaybe<Base_Themes_Bool_Exp>
	readonly theme_id?: InputMaybe<String_Comparison_Exp>
}

/** order by max() on columns of table "resources_base_themes" */
export type Resources_Base_Themes_Max_Order_By = {
	readonly resource_id?: InputMaybe<Order_By>
	readonly theme_id?: InputMaybe<Order_By>
}

/** order by min() on columns of table "resources_base_themes" */
export type Resources_Base_Themes_Min_Order_By = {
	readonly resource_id?: InputMaybe<Order_By>
	readonly theme_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "resources_base_themes". */
export type Resources_Base_Themes_Order_By = {
	readonly resource?: InputMaybe<Resources_Order_By>
	readonly resource_id?: InputMaybe<Order_By>
	readonly theme?: InputMaybe<Base_Themes_Order_By>
	readonly theme_id?: InputMaybe<Order_By>
}

/** select columns of table "resources_base_themes" */
export enum Resources_Base_Themes_Select_Column {
	/** column name */
	ResourceId = 'resource_id',
	/** column name */
	ThemeId = 'theme_id',
}

/** Boolean expression to filter rows from the table "resources". All fields are combined with a logical 'AND'. */
export type Resources_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Resources_Bool_Exp>>
	readonly _not?: InputMaybe<Resources_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Resources_Bool_Exp>>
	readonly base?: InputMaybe<Bases_Bool_Exp>
	readonly base_id?: InputMaybe<String_Comparison_Exp>
	readonly base_theme?: InputMaybe<Resources_Base_Themes_Bool_Exp>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly metadata?: InputMaybe<String_Comparison_Exp>
	readonly nft_id?: InputMaybe<String_Comparison_Exp>
	readonly nfts?: InputMaybe<Nfts_Bool_Exp>
	readonly parts?: InputMaybe<Jsonb_Comparison_Exp>
	readonly pending?: InputMaybe<Boolean_Comparison_Exp>
	readonly resources_base_themes?: InputMaybe<Resources_Base_Themes_Bool_Exp>
	readonly resources_part?: InputMaybe<Resources_Parts_Bool_Exp>
	readonly resources_parts?: InputMaybe<Resources_Parts_Bool_Exp>
	readonly slot?: InputMaybe<Parts_Bool_Exp>
	readonly slot_id?: InputMaybe<String_Comparison_Exp>
	readonly src?: InputMaybe<String_Comparison_Exp>
	readonly theme?: InputMaybe<Jsonb_Comparison_Exp>
	readonly thumb?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Resources_Max_Fields = {
	readonly __typename?: 'resources_max_fields'
	readonly base_id?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly nft_id?: Maybe<Scalars['String']>
	readonly slot_id?: Maybe<Scalars['String']>
	readonly src?: Maybe<Scalars['String']>
	readonly thumb?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "resources" */
export type Resources_Max_Order_By = {
	readonly base_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly nft_id?: InputMaybe<Order_By>
	readonly slot_id?: InputMaybe<Order_By>
	readonly src?: InputMaybe<Order_By>
	readonly thumb?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Resources_Min_Fields = {
	readonly __typename?: 'resources_min_fields'
	readonly base_id?: Maybe<Scalars['String']>
	readonly id?: Maybe<Scalars['String']>
	readonly metadata?: Maybe<Scalars['String']>
	readonly nft_id?: Maybe<Scalars['String']>
	readonly slot_id?: Maybe<Scalars['String']>
	readonly src?: Maybe<Scalars['String']>
	readonly thumb?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "resources" */
export type Resources_Min_Order_By = {
	readonly base_id?: InputMaybe<Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly nft_id?: InputMaybe<Order_By>
	readonly slot_id?: InputMaybe<Order_By>
	readonly src?: InputMaybe<Order_By>
	readonly thumb?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "resources". */
export type Resources_Order_By = {
	readonly base?: InputMaybe<Bases_Order_By>
	readonly base_id?: InputMaybe<Order_By>
	readonly base_theme?: InputMaybe<Resources_Base_Themes_Order_By>
	readonly id?: InputMaybe<Order_By>
	readonly metadata?: InputMaybe<Order_By>
	readonly nft_id?: InputMaybe<Order_By>
	readonly nfts?: InputMaybe<Nfts_Order_By>
	readonly parts?: InputMaybe<Order_By>
	readonly pending?: InputMaybe<Order_By>
	readonly resources_base_themes_aggregate?: InputMaybe<Resources_Base_Themes_Aggregate_Order_By>
	readonly resources_part?: InputMaybe<Resources_Parts_Order_By>
	readonly resources_parts_aggregate?: InputMaybe<Resources_Parts_Aggregate_Order_By>
	readonly slot?: InputMaybe<Parts_Order_By>
	readonly slot_id?: InputMaybe<Order_By>
	readonly src?: InputMaybe<Order_By>
	readonly theme?: InputMaybe<Order_By>
	readonly thumb?: InputMaybe<Order_By>
}

/** columns and relationships of "resources_parts" */
export type Resources_Parts = {
	readonly __typename?: 'resources_parts'
	/** An object relationship */
	readonly part: Parts
	readonly part_id: Scalars['String']
	/** An object relationship */
	readonly resource: Resources
	readonly resource_id: Scalars['String']
}

/** aggregated selection of "resources_parts" */
export type Resources_Parts_Aggregate = {
	readonly __typename?: 'resources_parts_aggregate'
	readonly aggregate?: Maybe<Resources_Parts_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Resources_Parts>
}

/** aggregate fields of "resources_parts" */
export type Resources_Parts_Aggregate_Fields = {
	readonly __typename?: 'resources_parts_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Resources_Parts_Max_Fields>
	readonly min?: Maybe<Resources_Parts_Min_Fields>
}

/** aggregate fields of "resources_parts" */
export type Resources_Parts_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Resources_Parts_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "resources_parts" */
export type Resources_Parts_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Resources_Parts_Max_Order_By>
	readonly min?: InputMaybe<Resources_Parts_Min_Order_By>
}

/** Boolean expression to filter rows from the table "resources_parts". All fields are combined with a logical 'AND'. */
export type Resources_Parts_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Resources_Parts_Bool_Exp>>
	readonly _not?: InputMaybe<Resources_Parts_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Resources_Parts_Bool_Exp>>
	readonly part?: InputMaybe<Parts_Bool_Exp>
	readonly part_id?: InputMaybe<String_Comparison_Exp>
	readonly resource?: InputMaybe<Resources_Bool_Exp>
	readonly resource_id?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Resources_Parts_Max_Fields = {
	readonly __typename?: 'resources_parts_max_fields'
	readonly part_id?: Maybe<Scalars['String']>
	readonly resource_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "resources_parts" */
export type Resources_Parts_Max_Order_By = {
	readonly part_id?: InputMaybe<Order_By>
	readonly resource_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Resources_Parts_Min_Fields = {
	readonly __typename?: 'resources_parts_min_fields'
	readonly part_id?: Maybe<Scalars['String']>
	readonly resource_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "resources_parts" */
export type Resources_Parts_Min_Order_By = {
	readonly part_id?: InputMaybe<Order_By>
	readonly resource_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "resources_parts". */
export type Resources_Parts_Order_By = {
	readonly part?: InputMaybe<Parts_Order_By>
	readonly part_id?: InputMaybe<Order_By>
	readonly resource?: InputMaybe<Resources_Order_By>
	readonly resource_id?: InputMaybe<Order_By>
}

/** select columns of table "resources_parts" */
export enum Resources_Parts_Select_Column {
	/** column name */
	PartId = 'part_id',
	/** column name */
	ResourceId = 'resource_id',
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
	SlotId = 'slot_id',
	/** column name */
	Src = 'src',
	/** column name */
	Theme = 'theme',
	/** column name */
	Thumb = 'thumb',
}

/** columns and relationships of "sales" */
export type Sales = {
	readonly __typename?: 'sales'
	readonly day?: Maybe<Scalars['numeric']>
	readonly month?: Maybe<Scalars['numeric']>
	readonly month3?: Maybe<Scalars['numeric']>
	readonly week?: Maybe<Scalars['numeric']>
}

/** Boolean expression to filter rows from the table "sales". All fields are combined with a logical 'AND'. */
export type Sales_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Sales_Bool_Exp>>
	readonly _not?: InputMaybe<Sales_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Sales_Bool_Exp>>
	readonly day?: InputMaybe<Numeric_Comparison_Exp>
	readonly month?: InputMaybe<Numeric_Comparison_Exp>
	readonly month3?: InputMaybe<Numeric_Comparison_Exp>
	readonly week?: InputMaybe<Numeric_Comparison_Exp>
}

/** Ordering options when selecting data from "sales". */
export type Sales_Order_By = {
	readonly day?: InputMaybe<Order_By>
	readonly month?: InputMaybe<Order_By>
	readonly month3?: InputMaybe<Order_By>
	readonly week?: InputMaybe<Order_By>
}

/** select columns of table "sales" */
export enum Sales_Select_Column {
	/** column name */
	Day = 'day',
	/** column name */
	Month = 'month',
	/** column name */
	Month3 = 'month3',
	/** column name */
	Week = 'week',
}

/** columns and relationships of "singular_blacklisted_accounts" */
export type Singular_Blacklisted_Accounts = {
	readonly __typename?: 'singular_blacklisted_accounts'
	readonly account: Scalars['String']
	readonly created_at: Scalars['timestamptz']
}

/** order by aggregate values of table "singular_blacklisted_accounts" */
export type Singular_Blacklisted_Accounts_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Singular_Blacklisted_Accounts_Max_Order_By>
	readonly min?: InputMaybe<Singular_Blacklisted_Accounts_Min_Order_By>
}

/** Boolean expression to filter rows from the table "singular_blacklisted_accounts". All fields are combined with a logical 'AND'. */
export type Singular_Blacklisted_Accounts_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Bool_Exp>>
	readonly _not?: InputMaybe<Singular_Blacklisted_Accounts_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Accounts_Bool_Exp>>
	readonly account?: InputMaybe<String_Comparison_Exp>
	readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** order by max() on columns of table "singular_blacklisted_accounts" */
export type Singular_Blacklisted_Accounts_Max_Order_By = {
	readonly account?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
}

/** order by min() on columns of table "singular_blacklisted_accounts" */
export type Singular_Blacklisted_Accounts_Min_Order_By = {
	readonly account?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "singular_blacklisted_accounts". */
export type Singular_Blacklisted_Accounts_Order_By = {
	readonly account?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
}

/** select columns of table "singular_blacklisted_accounts" */
export enum Singular_Blacklisted_Accounts_Select_Column {
	/** column name */
	Account = 'account',
	/** column name */
	CreatedAt = 'created_at',
}

/** columns and relationships of "singular_blacklisted_collections" */
export type Singular_Blacklisted_Collections = {
	readonly __typename?: 'singular_blacklisted_collections'
	/** An object relationship */
	readonly collection?: Maybe<Collections>
	readonly collection_id: Scalars['String']
	readonly created_at: Scalars['timestamptz']
}

/** order by aggregate values of table "singular_blacklisted_collections" */
export type Singular_Blacklisted_Collections_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Singular_Blacklisted_Collections_Max_Order_By>
	readonly min?: InputMaybe<Singular_Blacklisted_Collections_Min_Order_By>
}

/** Boolean expression to filter rows from the table "singular_blacklisted_collections". All fields are combined with a logical 'AND'. */
export type Singular_Blacklisted_Collections_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Bool_Exp>>
	readonly _not?: InputMaybe<Singular_Blacklisted_Collections_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Singular_Blacklisted_Collections_Bool_Exp>>
	readonly collection?: InputMaybe<Collections_Bool_Exp>
	readonly collection_id?: InputMaybe<String_Comparison_Exp>
	readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** order by max() on columns of table "singular_blacklisted_collections" */
export type Singular_Blacklisted_Collections_Max_Order_By = {
	readonly collection_id?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
}

/** order by min() on columns of table "singular_blacklisted_collections" */
export type Singular_Blacklisted_Collections_Min_Order_By = {
	readonly collection_id?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "singular_blacklisted_collections". */
export type Singular_Blacklisted_Collections_Order_By = {
	readonly collection?: InputMaybe<Collections_Order_By>
	readonly collection_id?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
}

/** select columns of table "singular_blacklisted_collections" */
export enum Singular_Blacklisted_Collections_Select_Column {
	/** column name */
	CollectionId = 'collection_id',
	/** column name */
	CreatedAt = 'created_at',
}

/** columns and relationships of "singular_curated" */
export type Singular_Curated = {
	readonly __typename?: 'singular_curated'
	readonly created_at: Scalars['timestamptz']
	readonly nft_id: Scalars['String']
}

/** aggregated selection of "singular_curated" */
export type Singular_Curated_Aggregate = {
	readonly __typename?: 'singular_curated_aggregate'
	readonly aggregate?: Maybe<Singular_Curated_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Singular_Curated>
}

/** aggregate fields of "singular_curated" */
export type Singular_Curated_Aggregate_Fields = {
	readonly __typename?: 'singular_curated_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Singular_Curated_Max_Fields>
	readonly min?: Maybe<Singular_Curated_Min_Fields>
}

/** aggregate fields of "singular_curated" */
export type Singular_Curated_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Singular_Curated_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "singular_curated" */
export type Singular_Curated_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Singular_Curated_Max_Order_By>
	readonly min?: InputMaybe<Singular_Curated_Min_Order_By>
}

/** Boolean expression to filter rows from the table "singular_curated". All fields are combined with a logical 'AND'. */
export type Singular_Curated_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Singular_Curated_Bool_Exp>>
	readonly _not?: InputMaybe<Singular_Curated_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Singular_Curated_Bool_Exp>>
	readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly nft_id?: InputMaybe<String_Comparison_Exp>
}

/** columns and relationships of "singular_curated_collections" */
export type Singular_Curated_Collections = {
	readonly __typename?: 'singular_curated_collections'
	readonly collection_id: Scalars['String']
	readonly created_at: Scalars['timestamptz']
}

/** aggregated selection of "singular_curated_collections" */
export type Singular_Curated_Collections_Aggregate = {
	readonly __typename?: 'singular_curated_collections_aggregate'
	readonly aggregate?: Maybe<Singular_Curated_Collections_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Singular_Curated_Collections>
}

/** aggregate fields of "singular_curated_collections" */
export type Singular_Curated_Collections_Aggregate_Fields = {
	readonly __typename?: 'singular_curated_collections_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Singular_Curated_Collections_Max_Fields>
	readonly min?: Maybe<Singular_Curated_Collections_Min_Fields>
}

/** aggregate fields of "singular_curated_collections" */
export type Singular_Curated_Collections_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "singular_curated_collections" */
export type Singular_Curated_Collections_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Singular_Curated_Collections_Max_Order_By>
	readonly min?: InputMaybe<Singular_Curated_Collections_Min_Order_By>
}

/** Boolean expression to filter rows from the table "singular_curated_collections". All fields are combined with a logical 'AND'. */
export type Singular_Curated_Collections_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Bool_Exp>>
	readonly _not?: InputMaybe<Singular_Curated_Collections_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Singular_Curated_Collections_Bool_Exp>>
	readonly collection_id?: InputMaybe<String_Comparison_Exp>
	readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** aggregate max on columns */
export type Singular_Curated_Collections_Max_Fields = {
	readonly __typename?: 'singular_curated_collections_max_fields'
	readonly collection_id?: Maybe<Scalars['String']>
	readonly created_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "singular_curated_collections" */
export type Singular_Curated_Collections_Max_Order_By = {
	readonly collection_id?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Singular_Curated_Collections_Min_Fields = {
	readonly __typename?: 'singular_curated_collections_min_fields'
	readonly collection_id?: Maybe<Scalars['String']>
	readonly created_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "singular_curated_collections" */
export type Singular_Curated_Collections_Min_Order_By = {
	readonly collection_id?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "singular_curated_collections". */
export type Singular_Curated_Collections_Order_By = {
	readonly collection_id?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
}

/** select columns of table "singular_curated_collections" */
export enum Singular_Curated_Collections_Select_Column {
	/** column name */
	CollectionId = 'collection_id',
	/** column name */
	CreatedAt = 'created_at',
}

/** aggregate max on columns */
export type Singular_Curated_Max_Fields = {
	readonly __typename?: 'singular_curated_max_fields'
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly nft_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "singular_curated" */
export type Singular_Curated_Max_Order_By = {
	readonly created_at?: InputMaybe<Order_By>
	readonly nft_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Singular_Curated_Min_Fields = {
	readonly __typename?: 'singular_curated_min_fields'
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly nft_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "singular_curated" */
export type Singular_Curated_Min_Order_By = {
	readonly created_at?: InputMaybe<Order_By>
	readonly nft_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "singular_curated". */
export type Singular_Curated_Order_By = {
	readonly created_at?: InputMaybe<Order_By>
	readonly nft_id?: InputMaybe<Order_By>
}

/** select columns of table "singular_curated" */
export enum Singular_Curated_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	NftId = 'nft_id',
}

/** columns and relationships of "singular_nsfw_collections" */
export type Singular_Nsfw_Collections = {
	readonly __typename?: 'singular_nsfw_collections'
	/** An object relationship */
	readonly collection?: Maybe<Collections>
	readonly collection_id: Scalars['String']
	readonly created_at: Scalars['timestamptz']
	readonly reason?: Maybe<Scalars['jsonb']>
}

/** columns and relationships of "singular_nsfw_collections" */
export type Singular_Nsfw_CollectionsReasonArgs = {
	path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "singular_nsfw_collections" */
export type Singular_Nsfw_Collections_Aggregate = {
	readonly __typename?: 'singular_nsfw_collections_aggregate'
	readonly aggregate?: Maybe<Singular_Nsfw_Collections_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Singular_Nsfw_Collections>
}

/** aggregate fields of "singular_nsfw_collections" */
export type Singular_Nsfw_Collections_Aggregate_Fields = {
	readonly __typename?: 'singular_nsfw_collections_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Singular_Nsfw_Collections_Max_Fields>
	readonly min?: Maybe<Singular_Nsfw_Collections_Min_Fields>
}

/** aggregate fields of "singular_nsfw_collections" */
export type Singular_Nsfw_Collections_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "singular_nsfw_collections" */
export type Singular_Nsfw_Collections_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Singular_Nsfw_Collections_Max_Order_By>
	readonly min?: InputMaybe<Singular_Nsfw_Collections_Min_Order_By>
}

/** Boolean expression to filter rows from the table "singular_nsfw_collections". All fields are combined with a logical 'AND'. */
export type Singular_Nsfw_Collections_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Bool_Exp>>
	readonly _not?: InputMaybe<Singular_Nsfw_Collections_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Singular_Nsfw_Collections_Bool_Exp>>
	readonly collection?: InputMaybe<Collections_Bool_Exp>
	readonly collection_id?: InputMaybe<String_Comparison_Exp>
	readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly reason?: InputMaybe<Jsonb_Comparison_Exp>
}

/** aggregate max on columns */
export type Singular_Nsfw_Collections_Max_Fields = {
	readonly __typename?: 'singular_nsfw_collections_max_fields'
	readonly collection_id?: Maybe<Scalars['String']>
	readonly created_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "singular_nsfw_collections" */
export type Singular_Nsfw_Collections_Max_Order_By = {
	readonly collection_id?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Singular_Nsfw_Collections_Min_Fields = {
	readonly __typename?: 'singular_nsfw_collections_min_fields'
	readonly collection_id?: Maybe<Scalars['String']>
	readonly created_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "singular_nsfw_collections" */
export type Singular_Nsfw_Collections_Min_Order_By = {
	readonly collection_id?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "singular_nsfw_collections". */
export type Singular_Nsfw_Collections_Order_By = {
	readonly collection?: InputMaybe<Collections_Order_By>
	readonly collection_id?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
	readonly reason?: InputMaybe<Order_By>
}

/** select columns of table "singular_nsfw_collections" */
export enum Singular_Nsfw_Collections_Select_Column {
	/** column name */
	CollectionId = 'collection_id',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Reason = 'reason',
}

/** columns and relationships of "singular_nsfw_nfts" */
export type Singular_Nsfw_Nfts = {
	readonly __typename?: 'singular_nsfw_nfts'
	readonly created_at: Scalars['timestamptz']
	/** An object relationship */
	readonly nft: Nfts
	readonly nft_id: Scalars['String']
	readonly reason?: Maybe<Scalars['jsonb']>
}

/** columns and relationships of "singular_nsfw_nfts" */
export type Singular_Nsfw_NftsReasonArgs = {
	path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "singular_nsfw_nfts" */
export type Singular_Nsfw_Nfts_Aggregate = {
	readonly __typename?: 'singular_nsfw_nfts_aggregate'
	readonly aggregate?: Maybe<Singular_Nsfw_Nfts_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Singular_Nsfw_Nfts>
}

/** aggregate fields of "singular_nsfw_nfts" */
export type Singular_Nsfw_Nfts_Aggregate_Fields = {
	readonly __typename?: 'singular_nsfw_nfts_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Singular_Nsfw_Nfts_Max_Fields>
	readonly min?: Maybe<Singular_Nsfw_Nfts_Min_Fields>
}

/** aggregate fields of "singular_nsfw_nfts" */
export type Singular_Nsfw_Nfts_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "singular_nsfw_nfts" */
export type Singular_Nsfw_Nfts_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Singular_Nsfw_Nfts_Max_Order_By>
	readonly min?: InputMaybe<Singular_Nsfw_Nfts_Min_Order_By>
}

/** Boolean expression to filter rows from the table "singular_nsfw_nfts". All fields are combined with a logical 'AND'. */
export type Singular_Nsfw_Nfts_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Bool_Exp>>
	readonly _not?: InputMaybe<Singular_Nsfw_Nfts_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Singular_Nsfw_Nfts_Bool_Exp>>
	readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>
	readonly nft?: InputMaybe<Nfts_Bool_Exp>
	readonly nft_id?: InputMaybe<String_Comparison_Exp>
	readonly reason?: InputMaybe<Jsonb_Comparison_Exp>
}

/** aggregate max on columns */
export type Singular_Nsfw_Nfts_Max_Fields = {
	readonly __typename?: 'singular_nsfw_nfts_max_fields'
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly nft_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "singular_nsfw_nfts" */
export type Singular_Nsfw_Nfts_Max_Order_By = {
	readonly created_at?: InputMaybe<Order_By>
	readonly nft_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Singular_Nsfw_Nfts_Min_Fields = {
	readonly __typename?: 'singular_nsfw_nfts_min_fields'
	readonly created_at?: Maybe<Scalars['timestamptz']>
	readonly nft_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "singular_nsfw_nfts" */
export type Singular_Nsfw_Nfts_Min_Order_By = {
	readonly created_at?: InputMaybe<Order_By>
	readonly nft_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "singular_nsfw_nfts". */
export type Singular_Nsfw_Nfts_Order_By = {
	readonly created_at?: InputMaybe<Order_By>
	readonly nft?: InputMaybe<Nfts_Order_By>
	readonly nft_id?: InputMaybe<Order_By>
	readonly reason?: InputMaybe<Order_By>
}

/** select columns of table "singular_nsfw_nfts" */
export enum Singular_Nsfw_Nfts_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	NftId = 'nft_id',
	/** column name */
	Reason = 'reason',
}

/** columns and relationships of "singular_verified_collections" */
export type Singular_Verified_Collections = {
	readonly __typename?: 'singular_verified_collections'
	readonly collection_id: Scalars['String']
	readonly created_at: Scalars['timestamptz']
}

/** aggregated selection of "singular_verified_collections" */
export type Singular_Verified_Collections_Aggregate = {
	readonly __typename?: 'singular_verified_collections_aggregate'
	readonly aggregate?: Maybe<Singular_Verified_Collections_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Singular_Verified_Collections>
}

/** aggregate fields of "singular_verified_collections" */
export type Singular_Verified_Collections_Aggregate_Fields = {
	readonly __typename?: 'singular_verified_collections_aggregate_fields'
	readonly count: Scalars['Int']
	readonly max?: Maybe<Singular_Verified_Collections_Max_Fields>
	readonly min?: Maybe<Singular_Verified_Collections_Min_Fields>
}

/** aggregate fields of "singular_verified_collections" */
export type Singular_Verified_Collections_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "singular_verified_collections" */
export type Singular_Verified_Collections_Aggregate_Order_By = {
	readonly count?: InputMaybe<Order_By>
	readonly max?: InputMaybe<Singular_Verified_Collections_Max_Order_By>
	readonly min?: InputMaybe<Singular_Verified_Collections_Min_Order_By>
}

/** Boolean expression to filter rows from the table "singular_verified_collections". All fields are combined with a logical 'AND'. */
export type Singular_Verified_Collections_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Bool_Exp>>
	readonly _not?: InputMaybe<Singular_Verified_Collections_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Singular_Verified_Collections_Bool_Exp>>
	readonly collection_id?: InputMaybe<String_Comparison_Exp>
	readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** aggregate max on columns */
export type Singular_Verified_Collections_Max_Fields = {
	readonly __typename?: 'singular_verified_collections_max_fields'
	readonly collection_id?: Maybe<Scalars['String']>
	readonly created_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "singular_verified_collections" */
export type Singular_Verified_Collections_Max_Order_By = {
	readonly collection_id?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Singular_Verified_Collections_Min_Fields = {
	readonly __typename?: 'singular_verified_collections_min_fields'
	readonly collection_id?: Maybe<Scalars['String']>
	readonly created_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "singular_verified_collections" */
export type Singular_Verified_Collections_Min_Order_By = {
	readonly collection_id?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "singular_verified_collections". */
export type Singular_Verified_Collections_Order_By = {
	readonly collection_id?: InputMaybe<Order_By>
	readonly created_at?: InputMaybe<Order_By>
}

/** select columns of table "singular_verified_collections" */
export enum Singular_Verified_Collections_Select_Column {
	/** column name */
	CollectionId = 'collection_id',
	/** column name */
	CreatedAt = 'created_at',
}

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
	readonly _eq?: InputMaybe<Scalars['smallint']>
	readonly _gt?: InputMaybe<Scalars['smallint']>
	readonly _gte?: InputMaybe<Scalars['smallint']>
	readonly _in?: InputMaybe<ReadonlyArray<Scalars['smallint']>>
	readonly _is_null?: InputMaybe<Scalars['Boolean']>
	readonly _lt?: InputMaybe<Scalars['smallint']>
	readonly _lte?: InputMaybe<Scalars['smallint']>
	readonly _neq?: InputMaybe<Scalars['smallint']>
	readonly _nin?: InputMaybe<ReadonlyArray<Scalars['smallint']>>
}

/** columns and relationships of "system" */
export type System = {
	readonly __typename?: 'system'
	readonly purchaseEnabled: Scalars['Boolean']
}

/** Boolean expression to filter rows from the table "system". All fields are combined with a logical 'AND'. */
export type System_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<System_Bool_Exp>>
	readonly _not?: InputMaybe<System_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<System_Bool_Exp>>
	readonly purchaseEnabled?: InputMaybe<Boolean_Comparison_Exp>
}

/** Ordering options when selecting data from "system". */
export type System_Order_By = {
	readonly purchaseEnabled?: InputMaybe<Order_By>
}

/** select columns of table "system" */
export enum System_Select_Column {
	/** column name */
	PurchaseEnabled = 'purchaseEnabled',
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

/**
 * track how many yuletide items an account owns
 *
 *
 * columns and relationships of "yuletide_item_track"
 *
 */
export type Yuletide_Item_Track = {
	readonly __typename?: 'yuletide_item_track'
	readonly id: Scalars['String']
	readonly item_count: Scalars['Int']
}

/** aggregated selection of "yuletide_item_track" */
export type Yuletide_Item_Track_Aggregate = {
	readonly __typename?: 'yuletide_item_track_aggregate'
	readonly aggregate?: Maybe<Yuletide_Item_Track_Aggregate_Fields>
	readonly nodes: ReadonlyArray<Yuletide_Item_Track>
}

/** aggregate fields of "yuletide_item_track" */
export type Yuletide_Item_Track_Aggregate_Fields = {
	readonly __typename?: 'yuletide_item_track_aggregate_fields'
	readonly avg?: Maybe<Yuletide_Item_Track_Avg_Fields>
	readonly count: Scalars['Int']
	readonly max?: Maybe<Yuletide_Item_Track_Max_Fields>
	readonly min?: Maybe<Yuletide_Item_Track_Min_Fields>
	readonly stddev?: Maybe<Yuletide_Item_Track_Stddev_Fields>
	readonly stddev_pop?: Maybe<Yuletide_Item_Track_Stddev_Pop_Fields>
	readonly stddev_samp?: Maybe<Yuletide_Item_Track_Stddev_Samp_Fields>
	readonly sum?: Maybe<Yuletide_Item_Track_Sum_Fields>
	readonly var_pop?: Maybe<Yuletide_Item_Track_Var_Pop_Fields>
	readonly var_samp?: Maybe<Yuletide_Item_Track_Var_Samp_Fields>
	readonly variance?: Maybe<Yuletide_Item_Track_Variance_Fields>
}

/** aggregate fields of "yuletide_item_track" */
export type Yuletide_Item_Track_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Select_Column>>
	distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Yuletide_Item_Track_Avg_Fields = {
	readonly __typename?: 'yuletide_item_track_avg_fields'
	readonly item_count?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "yuletide_item_track". All fields are combined with a logical 'AND'. */
export type Yuletide_Item_Track_Bool_Exp = {
	readonly _and?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Bool_Exp>>
	readonly _not?: InputMaybe<Yuletide_Item_Track_Bool_Exp>
	readonly _or?: InputMaybe<ReadonlyArray<Yuletide_Item_Track_Bool_Exp>>
	readonly id?: InputMaybe<String_Comparison_Exp>
	readonly item_count?: InputMaybe<Int_Comparison_Exp>
}

/** aggregate max on columns */
export type Yuletide_Item_Track_Max_Fields = {
	readonly __typename?: 'yuletide_item_track_max_fields'
	readonly id?: Maybe<Scalars['String']>
	readonly item_count?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type Yuletide_Item_Track_Min_Fields = {
	readonly __typename?: 'yuletide_item_track_min_fields'
	readonly id?: Maybe<Scalars['String']>
	readonly item_count?: Maybe<Scalars['Int']>
}

/** Ordering options when selecting data from "yuletide_item_track". */
export type Yuletide_Item_Track_Order_By = {
	readonly id?: InputMaybe<Order_By>
	readonly item_count?: InputMaybe<Order_By>
}

/** select columns of table "yuletide_item_track" */
export enum Yuletide_Item_Track_Select_Column {
	/** column name */
	Id = 'id',
	/** column name */
	ItemCount = 'item_count',
}

/** aggregate stddev on columns */
export type Yuletide_Item_Track_Stddev_Fields = {
	readonly __typename?: 'yuletide_item_track_stddev_fields'
	readonly item_count?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Yuletide_Item_Track_Stddev_Pop_Fields = {
	readonly __typename?: 'yuletide_item_track_stddev_pop_fields'
	readonly item_count?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Yuletide_Item_Track_Stddev_Samp_Fields = {
	readonly __typename?: 'yuletide_item_track_stddev_samp_fields'
	readonly item_count?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Yuletide_Item_Track_Sum_Fields = {
	readonly __typename?: 'yuletide_item_track_sum_fields'
	readonly item_count?: Maybe<Scalars['Int']>
}

/** aggregate var_pop on columns */
export type Yuletide_Item_Track_Var_Pop_Fields = {
	readonly __typename?: 'yuletide_item_track_var_pop_fields'
	readonly item_count?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Yuletide_Item_Track_Var_Samp_Fields = {
	readonly __typename?: 'yuletide_item_track_var_samp_fields'
	readonly item_count?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Yuletide_Item_Track_Variance_Fields = {
	readonly __typename?: 'yuletide_item_track_variance_fields'
	readonly item_count?: Maybe<Scalars['Float']>
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
	BigInt: ResolverTypeWrapper<Scalars['BigInt']>
	BodiesConnection: ResolverTypeWrapper<BodiesConnection>
	Body: ResolverTypeWrapper<Body>
	BodyEdge: ResolverTypeWrapper<BodyEdge>
	BodyMember: ResolverTypeWrapper<BodyMember>
	BodyMemberEdge: ResolverTypeWrapper<BodyMemberEdge>
	BodyMemberOrderByInput: BodyMemberOrderByInput
	BodyMemberWhereInput: BodyMemberWhereInput
	BodyMemberWhereUniqueInput: BodyMemberWhereUniqueInput
	BodyMembersConnection: ResolverTypeWrapper<BodyMembersConnection>
	BodyOrderByInput: BodyOrderByInput
	BodyWhereInput: BodyWhereInput
	BodyWhereUniqueInput: BodyWhereUniqueInput
	Boolean: ResolverTypeWrapper<Scalars['Boolean']>
	Boolean_comparison_exp: Boolean_Comparison_Exp
	Bytes: ResolverTypeWrapper<Scalars['Bytes']>
	Config: ResolverTypeWrapper<Config>
	DateTime: ResolverTypeWrapper<Scalars['DateTime']>
	Environment: Environment
	Features: ResolverTypeWrapper<Features>
	Float: ResolverTypeWrapper<Scalars['Float']>
	Float_comparison_exp: Float_Comparison_Exp
	ID: ResolverTypeWrapper<Scalars['ID']>
	Int: ResolverTypeWrapper<Scalars['Int']>
	Int_comparison_exp: Int_Comparison_Exp
	Link: ResolverTypeWrapper<Link>
	Mutation: ResolverTypeWrapper<{}>
	PageInfo: ResolverTypeWrapper<PageInfo>
	Query: ResolverTypeWrapper<{}>
	String: ResolverTypeWrapper<Scalars['String']>
	String_comparison_exp: String_Comparison_Exp
	Subscription: ResolverTypeWrapper<{}>
	base_themes: ResolverTypeWrapper<Base_Themes>
	base_themes_bool_exp: Base_Themes_Bool_Exp
	base_themes_order_by: Base_Themes_Order_By
	base_themes_select_column: Base_Themes_Select_Column
	bases: ResolverTypeWrapper<Bases>
	bases_aggregate: ResolverTypeWrapper<Bases_Aggregate>
	bases_aggregate_fields: ResolverTypeWrapper<Bases_Aggregate_Fields>
	bases_avg_fields: ResolverTypeWrapper<Bases_Avg_Fields>
	bases_bool_exp: Bases_Bool_Exp
	bases_max_fields: ResolverTypeWrapper<Bases_Max_Fields>
	bases_min_fields: ResolverTypeWrapper<Bases_Min_Fields>
	bases_order_by: Bases_Order_By
	bases_select_column: Bases_Select_Column
	bases_stddev_fields: ResolverTypeWrapper<Bases_Stddev_Fields>
	bases_stddev_pop_fields: ResolverTypeWrapper<Bases_Stddev_Pop_Fields>
	bases_stddev_samp_fields: ResolverTypeWrapper<Bases_Stddev_Samp_Fields>
	bases_sum_fields: ResolverTypeWrapper<Bases_Sum_Fields>
	bases_var_pop_fields: ResolverTypeWrapper<Bases_Var_Pop_Fields>
	bases_var_samp_fields: ResolverTypeWrapper<Bases_Var_Samp_Fields>
	bases_variance_fields: ResolverTypeWrapper<Bases_Variance_Fields>
	bigint: ResolverTypeWrapper<Scalars['bigint']>
	bigint_comparison_exp: Bigint_Comparison_Exp
	changes: ResolverTypeWrapper<Changes>
	changes_aggregate: ResolverTypeWrapper<Changes_Aggregate>
	changes_aggregate_fields: ResolverTypeWrapper<Changes_Aggregate_Fields>
	changes_aggregate_order_by: Changes_Aggregate_Order_By
	changes_avg_fields: ResolverTypeWrapper<Changes_Avg_Fields>
	changes_avg_order_by: Changes_Avg_Order_By
	changes_bool_exp: Changes_Bool_Exp
	changes_collection: ResolverTypeWrapper<Changes_Collection>
	changes_collection_aggregate_order_by: Changes_Collection_Aggregate_Order_By
	changes_collection_avg_order_by: Changes_Collection_Avg_Order_By
	changes_collection_bool_exp: Changes_Collection_Bool_Exp
	changes_collection_max_order_by: Changes_Collection_Max_Order_By
	changes_collection_min_order_by: Changes_Collection_Min_Order_By
	changes_collection_order_by: Changes_Collection_Order_By
	changes_collection_select_column: Changes_Collection_Select_Column
	changes_collection_stddev_order_by: Changes_Collection_Stddev_Order_By
	changes_collection_stddev_pop_order_by: Changes_Collection_Stddev_Pop_Order_By
	changes_collection_stddev_samp_order_by: Changes_Collection_Stddev_Samp_Order_By
	changes_collection_sum_order_by: Changes_Collection_Sum_Order_By
	changes_collection_var_pop_order_by: Changes_Collection_Var_Pop_Order_By
	changes_collection_var_samp_order_by: Changes_Collection_Var_Samp_Order_By
	changes_collection_variance_order_by: Changes_Collection_Variance_Order_By
	changes_max_fields: ResolverTypeWrapper<Changes_Max_Fields>
	changes_max_order_by: Changes_Max_Order_By
	changes_min_fields: ResolverTypeWrapper<Changes_Min_Fields>
	changes_min_order_by: Changes_Min_Order_By
	changes_order_by: Changes_Order_By
	changes_select_column: Changes_Select_Column
	changes_stddev_fields: ResolverTypeWrapper<Changes_Stddev_Fields>
	changes_stddev_order_by: Changes_Stddev_Order_By
	changes_stddev_pop_fields: ResolverTypeWrapper<Changes_Stddev_Pop_Fields>
	changes_stddev_pop_order_by: Changes_Stddev_Pop_Order_By
	changes_stddev_samp_fields: ResolverTypeWrapper<Changes_Stddev_Samp_Fields>
	changes_stddev_samp_order_by: Changes_Stddev_Samp_Order_By
	changes_sum_fields: ResolverTypeWrapper<Changes_Sum_Fields>
	changes_sum_order_by: Changes_Sum_Order_By
	changes_var_pop_fields: ResolverTypeWrapper<Changes_Var_Pop_Fields>
	changes_var_pop_order_by: Changes_Var_Pop_Order_By
	changes_var_samp_fields: ResolverTypeWrapper<Changes_Var_Samp_Fields>
	changes_var_samp_order_by: Changes_Var_Samp_Order_By
	changes_variance_fields: ResolverTypeWrapper<Changes_Variance_Fields>
	changes_variance_order_by: Changes_Variance_Order_By
	collection_banners: ResolverTypeWrapper<Collection_Banners>
	collection_banners_bool_exp: Collection_Banners_Bool_Exp
	collection_banners_order_by: Collection_Banners_Order_By
	collection_banners_select_column: Collection_Banners_Select_Column
	collections: ResolverTypeWrapper<Collections>
	collections_aggregate: ResolverTypeWrapper<Collections_Aggregate>
	collections_aggregate_fields: ResolverTypeWrapper<Collections_Aggregate_Fields>
	collections_avg_fields: ResolverTypeWrapper<Collections_Avg_Fields>
	collections_bool_exp: Collections_Bool_Exp
	collections_max_fields: ResolverTypeWrapper<Collections_Max_Fields>
	collections_min_fields: ResolverTypeWrapper<Collections_Min_Fields>
	collections_order_by: Collections_Order_By
	collections_select_column: Collections_Select_Column
	collections_stddev_fields: ResolverTypeWrapper<Collections_Stddev_Fields>
	collections_stddev_pop_fields: ResolverTypeWrapper<Collections_Stddev_Pop_Fields>
	collections_stddev_samp_fields: ResolverTypeWrapper<Collections_Stddev_Samp_Fields>
	collections_sum_fields: ResolverTypeWrapper<Collections_Sum_Fields>
	collections_var_pop_fields: ResolverTypeWrapper<Collections_Var_Pop_Fields>
	collections_var_samp_fields: ResolverTypeWrapper<Collections_Var_Samp_Fields>
	collections_variance_fields: ResolverTypeWrapper<Collections_Variance_Fields>
	distinct_kanaria_nfts: ResolverTypeWrapper<Distinct_Kanaria_Nfts>
	distinct_kanaria_nfts_aggregate: ResolverTypeWrapper<Distinct_Kanaria_Nfts_Aggregate>
	distinct_kanaria_nfts_aggregate_fields: ResolverTypeWrapper<Distinct_Kanaria_Nfts_Aggregate_Fields>
	distinct_kanaria_nfts_avg_fields: ResolverTypeWrapper<Distinct_Kanaria_Nfts_Avg_Fields>
	distinct_kanaria_nfts_bool_exp: Distinct_Kanaria_Nfts_Bool_Exp
	distinct_kanaria_nfts_max_fields: ResolverTypeWrapper<Distinct_Kanaria_Nfts_Max_Fields>
	distinct_kanaria_nfts_min_fields: ResolverTypeWrapper<Distinct_Kanaria_Nfts_Min_Fields>
	distinct_kanaria_nfts_order_by: Distinct_Kanaria_Nfts_Order_By
	distinct_kanaria_nfts_select_column: Distinct_Kanaria_Nfts_Select_Column
	distinct_kanaria_nfts_stddev_fields: ResolverTypeWrapper<Distinct_Kanaria_Nfts_Stddev_Fields>
	distinct_kanaria_nfts_stddev_pop_fields: ResolverTypeWrapper<Distinct_Kanaria_Nfts_Stddev_Pop_Fields>
	distinct_kanaria_nfts_stddev_samp_fields: ResolverTypeWrapper<Distinct_Kanaria_Nfts_Stddev_Samp_Fields>
	distinct_kanaria_nfts_sum_fields: ResolverTypeWrapper<Distinct_Kanaria_Nfts_Sum_Fields>
	distinct_kanaria_nfts_var_pop_fields: ResolverTypeWrapper<Distinct_Kanaria_Nfts_Var_Pop_Fields>
	distinct_kanaria_nfts_var_samp_fields: ResolverTypeWrapper<Distinct_Kanaria_Nfts_Var_Samp_Fields>
	distinct_kanaria_nfts_variance_fields: ResolverTypeWrapper<Distinct_Kanaria_Nfts_Variance_Fields>
	distinct_nfts: ResolverTypeWrapper<Distinct_Nfts>
	distinct_nfts_aggregate: ResolverTypeWrapper<Distinct_Nfts_Aggregate>
	distinct_nfts_aggregate_fields: ResolverTypeWrapper<Distinct_Nfts_Aggregate_Fields>
	distinct_nfts_avg_fields: ResolverTypeWrapper<Distinct_Nfts_Avg_Fields>
	distinct_nfts_bool_exp: Distinct_Nfts_Bool_Exp
	distinct_nfts_max_fields: ResolverTypeWrapper<Distinct_Nfts_Max_Fields>
	distinct_nfts_min_fields: ResolverTypeWrapper<Distinct_Nfts_Min_Fields>
	distinct_nfts_order_by: Distinct_Nfts_Order_By
	distinct_nfts_select_column: Distinct_Nfts_Select_Column
	distinct_nfts_stddev_fields: ResolverTypeWrapper<Distinct_Nfts_Stddev_Fields>
	distinct_nfts_stddev_pop_fields: ResolverTypeWrapper<Distinct_Nfts_Stddev_Pop_Fields>
	distinct_nfts_stddev_samp_fields: ResolverTypeWrapper<Distinct_Nfts_Stddev_Samp_Fields>
	distinct_nfts_sum_fields: ResolverTypeWrapper<Distinct_Nfts_Sum_Fields>
	distinct_nfts_var_pop_fields: ResolverTypeWrapper<Distinct_Nfts_Var_Pop_Fields>
	distinct_nfts_var_samp_fields: ResolverTypeWrapper<Distinct_Nfts_Var_Samp_Fields>
	distinct_nfts_variance_fields: ResolverTypeWrapper<Distinct_Nfts_Variance_Fields>
	dutchie: ResolverTypeWrapper<Dutchie>
	dutchie_bool_exp: Dutchie_Bool_Exp
	dutchie_order_by: Dutchie_Order_By
	dutchie_select_column: Dutchie_Select_Column
	gems_enabled: ResolverTypeWrapper<Gems_Enabled>
	gems_enabled_bool_exp: Gems_Enabled_Bool_Exp
	gems_enabled_order_by: Gems_Enabled_Order_By
	gems_enabled_select_column: Gems_Enabled_Select_Column
	get_by_unicode_args: Get_By_Unicode_Args
	get_ordered_changes_stats_args: Get_Ordered_Changes_Stats_Args
	hatched_birds: ResolverTypeWrapper<Hatched_Birds>
	hatched_birds_bool_exp: Hatched_Birds_Bool_Exp
	hatched_birds_insert_input: Hatched_Birds_Insert_Input
	hatched_birds_mutation_response: ResolverTypeWrapper<Hatched_Birds_Mutation_Response>
	hatched_birds_order_by: Hatched_Birds_Order_By
	hatched_birds_select_column: Hatched_Birds_Select_Column
	jsonb: ResolverTypeWrapper<Scalars['jsonb']>
	jsonb_comparison_exp: Jsonb_Comparison_Exp
	nfts: ResolverTypeWrapper<Nfts>
	nfts_aggregate: ResolverTypeWrapper<Nfts_Aggregate>
	nfts_aggregate_fields: ResolverTypeWrapper<Nfts_Aggregate_Fields>
	nfts_aggregate_order_by: Nfts_Aggregate_Order_By
	nfts_avg_fields: ResolverTypeWrapper<Nfts_Avg_Fields>
	nfts_avg_order_by: Nfts_Avg_Order_By
	nfts_bool_exp: Nfts_Bool_Exp
	nfts_max_fields: ResolverTypeWrapper<Nfts_Max_Fields>
	nfts_max_order_by: Nfts_Max_Order_By
	nfts_min_fields: ResolverTypeWrapper<Nfts_Min_Fields>
	nfts_min_order_by: Nfts_Min_Order_By
	nfts_order_by: Nfts_Order_By
	nfts_reactions_stats: ResolverTypeWrapper<Nfts_Reactions_Stats>
	nfts_reactions_stats_aggregate: ResolverTypeWrapper<Nfts_Reactions_Stats_Aggregate>
	nfts_reactions_stats_aggregate_fields: ResolverTypeWrapper<Nfts_Reactions_Stats_Aggregate_Fields>
	nfts_reactions_stats_avg_fields: ResolverTypeWrapper<Nfts_Reactions_Stats_Avg_Fields>
	nfts_reactions_stats_bool_exp: Nfts_Reactions_Stats_Bool_Exp
	nfts_reactions_stats_max_fields: ResolverTypeWrapper<Nfts_Reactions_Stats_Max_Fields>
	nfts_reactions_stats_min_fields: ResolverTypeWrapper<Nfts_Reactions_Stats_Min_Fields>
	nfts_reactions_stats_order_by: Nfts_Reactions_Stats_Order_By
	nfts_reactions_stats_select_column: Nfts_Reactions_Stats_Select_Column
	nfts_reactions_stats_stddev_fields: ResolverTypeWrapper<Nfts_Reactions_Stats_Stddev_Fields>
	nfts_reactions_stats_stddev_pop_fields: ResolverTypeWrapper<Nfts_Reactions_Stats_Stddev_Pop_Fields>
	nfts_reactions_stats_stddev_samp_fields: ResolverTypeWrapper<Nfts_Reactions_Stats_Stddev_Samp_Fields>
	nfts_reactions_stats_sum_fields: ResolverTypeWrapper<Nfts_Reactions_Stats_Sum_Fields>
	nfts_reactions_stats_var_pop_fields: ResolverTypeWrapper<Nfts_Reactions_Stats_Var_Pop_Fields>
	nfts_reactions_stats_var_samp_fields: ResolverTypeWrapper<Nfts_Reactions_Stats_Var_Samp_Fields>
	nfts_reactions_stats_variance_fields: ResolverTypeWrapper<Nfts_Reactions_Stats_Variance_Fields>
	nfts_select_column: Nfts_Select_Column
	nfts_stats: ResolverTypeWrapper<Nfts_Stats>
	nfts_stats_aggregate: ResolverTypeWrapper<Nfts_Stats_Aggregate>
	nfts_stats_aggregate_fields: ResolverTypeWrapper<Nfts_Stats_Aggregate_Fields>
	nfts_stats_avg_fields: ResolverTypeWrapper<Nfts_Stats_Avg_Fields>
	nfts_stats_bool_exp: Nfts_Stats_Bool_Exp
	nfts_stats_max_fields: ResolverTypeWrapper<Nfts_Stats_Max_Fields>
	nfts_stats_min_fields: ResolverTypeWrapper<Nfts_Stats_Min_Fields>
	nfts_stats_order_by: Nfts_Stats_Order_By
	nfts_stats_select_column: Nfts_Stats_Select_Column
	nfts_stats_stddev_fields: ResolverTypeWrapper<Nfts_Stats_Stddev_Fields>
	nfts_stats_stddev_pop_fields: ResolverTypeWrapper<Nfts_Stats_Stddev_Pop_Fields>
	nfts_stats_stddev_samp_fields: ResolverTypeWrapper<Nfts_Stats_Stddev_Samp_Fields>
	nfts_stats_sum_fields: ResolverTypeWrapper<Nfts_Stats_Sum_Fields>
	nfts_stats_var_pop_fields: ResolverTypeWrapper<Nfts_Stats_Var_Pop_Fields>
	nfts_stats_var_samp_fields: ResolverTypeWrapper<Nfts_Stats_Var_Samp_Fields>
	nfts_stats_variance_fields: ResolverTypeWrapper<Nfts_Stats_Variance_Fields>
	nfts_stddev_fields: ResolverTypeWrapper<Nfts_Stddev_Fields>
	nfts_stddev_order_by: Nfts_Stddev_Order_By
	nfts_stddev_pop_fields: ResolverTypeWrapper<Nfts_Stddev_Pop_Fields>
	nfts_stddev_pop_order_by: Nfts_Stddev_Pop_Order_By
	nfts_stddev_samp_fields: ResolverTypeWrapper<Nfts_Stddev_Samp_Fields>
	nfts_stddev_samp_order_by: Nfts_Stddev_Samp_Order_By
	nfts_sum_fields: ResolverTypeWrapper<Nfts_Sum_Fields>
	nfts_sum_order_by: Nfts_Sum_Order_By
	nfts_var_pop_fields: ResolverTypeWrapper<Nfts_Var_Pop_Fields>
	nfts_var_pop_order_by: Nfts_Var_Pop_Order_By
	nfts_var_samp_fields: ResolverTypeWrapper<Nfts_Var_Samp_Fields>
	nfts_var_samp_order_by: Nfts_Var_Samp_Order_By
	nfts_variance_fields: ResolverTypeWrapper<Nfts_Variance_Fields>
	nfts_variance_order_by: Nfts_Variance_Order_By
	numeric: ResolverTypeWrapper<Scalars['numeric']>
	numeric_comparison_exp: Numeric_Comparison_Exp
	order_by: Order_By
	parts: ResolverTypeWrapper<Parts>
	parts_aggregate: ResolverTypeWrapper<Parts_Aggregate>
	parts_aggregate_fields: ResolverTypeWrapper<Parts_Aggregate_Fields>
	parts_aggregate_order_by: Parts_Aggregate_Order_By
	parts_avg_fields: ResolverTypeWrapper<Parts_Avg_Fields>
	parts_avg_order_by: Parts_Avg_Order_By
	parts_bool_exp: Parts_Bool_Exp
	parts_max_fields: ResolverTypeWrapper<Parts_Max_Fields>
	parts_max_order_by: Parts_Max_Order_By
	parts_min_fields: ResolverTypeWrapper<Parts_Min_Fields>
	parts_min_order_by: Parts_Min_Order_By
	parts_order_by: Parts_Order_By
	parts_select_column: Parts_Select_Column
	parts_stddev_fields: ResolverTypeWrapper<Parts_Stddev_Fields>
	parts_stddev_order_by: Parts_Stddev_Order_By
	parts_stddev_pop_fields: ResolverTypeWrapper<Parts_Stddev_Pop_Fields>
	parts_stddev_pop_order_by: Parts_Stddev_Pop_Order_By
	parts_stddev_samp_fields: ResolverTypeWrapper<Parts_Stddev_Samp_Fields>
	parts_stddev_samp_order_by: Parts_Stddev_Samp_Order_By
	parts_sum_fields: ResolverTypeWrapper<Parts_Sum_Fields>
	parts_sum_order_by: Parts_Sum_Order_By
	parts_var_pop_fields: ResolverTypeWrapper<Parts_Var_Pop_Fields>
	parts_var_pop_order_by: Parts_Var_Pop_Order_By
	parts_var_samp_fields: ResolverTypeWrapper<Parts_Var_Samp_Fields>
	parts_var_samp_order_by: Parts_Var_Samp_Order_By
	parts_variance_fields: ResolverTypeWrapper<Parts_Variance_Fields>
	parts_variance_order_by: Parts_Variance_Order_By
	reactions: ResolverTypeWrapper<Reactions>
	reactions_aggregate: ResolverTypeWrapper<Reactions_Aggregate>
	reactions_aggregate_fields: ResolverTypeWrapper<Reactions_Aggregate_Fields>
	reactions_aggregate_order_by: Reactions_Aggregate_Order_By
	reactions_avg_fields: ResolverTypeWrapper<Reactions_Avg_Fields>
	reactions_avg_order_by: Reactions_Avg_Order_By
	reactions_bool_exp: Reactions_Bool_Exp
	reactions_max_fields: ResolverTypeWrapper<Reactions_Max_Fields>
	reactions_max_order_by: Reactions_Max_Order_By
	reactions_min_fields: ResolverTypeWrapper<Reactions_Min_Fields>
	reactions_min_order_by: Reactions_Min_Order_By
	reactions_order_by: Reactions_Order_By
	reactions_select_column: Reactions_Select_Column
	reactions_stddev_fields: ResolverTypeWrapper<Reactions_Stddev_Fields>
	reactions_stddev_order_by: Reactions_Stddev_Order_By
	reactions_stddev_pop_fields: ResolverTypeWrapper<Reactions_Stddev_Pop_Fields>
	reactions_stddev_pop_order_by: Reactions_Stddev_Pop_Order_By
	reactions_stddev_samp_fields: ResolverTypeWrapper<Reactions_Stddev_Samp_Fields>
	reactions_stddev_samp_order_by: Reactions_Stddev_Samp_Order_By
	reactions_sum_fields: ResolverTypeWrapper<Reactions_Sum_Fields>
	reactions_sum_order_by: Reactions_Sum_Order_By
	reactions_unicode: ResolverTypeWrapper<Reactions_Unicode>
	reactions_unicode_aggregate: ResolverTypeWrapper<Reactions_Unicode_Aggregate>
	reactions_unicode_aggregate_fields: ResolverTypeWrapper<Reactions_Unicode_Aggregate_Fields>
	reactions_unicode_aggregate_order_by: Reactions_Unicode_Aggregate_Order_By
	reactions_unicode_bool_exp: Reactions_Unicode_Bool_Exp
	reactions_unicode_max_fields: ResolverTypeWrapper<Reactions_Unicode_Max_Fields>
	reactions_unicode_max_order_by: Reactions_Unicode_Max_Order_By
	reactions_unicode_min_fields: ResolverTypeWrapper<Reactions_Unicode_Min_Fields>
	reactions_unicode_min_order_by: Reactions_Unicode_Min_Order_By
	reactions_unicode_order_by: Reactions_Unicode_Order_By
	reactions_unicode_select_column: Reactions_Unicode_Select_Column
	reactions_users: ResolverTypeWrapper<Reactions_Users>
	reactions_users_aggregate: ResolverTypeWrapper<Reactions_Users_Aggregate>
	reactions_users_aggregate_fields: ResolverTypeWrapper<Reactions_Users_Aggregate_Fields>
	reactions_users_aggregate_order_by: Reactions_Users_Aggregate_Order_By
	reactions_users_bool_exp: Reactions_Users_Bool_Exp
	reactions_users_max_fields: ResolverTypeWrapper<Reactions_Users_Max_Fields>
	reactions_users_max_order_by: Reactions_Users_Max_Order_By
	reactions_users_min_fields: ResolverTypeWrapper<Reactions_Users_Min_Fields>
	reactions_users_min_order_by: Reactions_Users_Min_Order_By
	reactions_users_order_by: Reactions_Users_Order_By
	reactions_users_select_column: Reactions_Users_Select_Column
	reactions_var_pop_fields: ResolverTypeWrapper<Reactions_Var_Pop_Fields>
	reactions_var_pop_order_by: Reactions_Var_Pop_Order_By
	reactions_var_samp_fields: ResolverTypeWrapper<Reactions_Var_Samp_Fields>
	reactions_var_samp_order_by: Reactions_Var_Samp_Order_By
	reactions_variance_fields: ResolverTypeWrapper<Reactions_Variance_Fields>
	reactions_variance_order_by: Reactions_Variance_Order_By
	recently_listed: ResolverTypeWrapper<Recently_Listed>
	recently_listed_aggregate: ResolverTypeWrapper<Recently_Listed_Aggregate>
	recently_listed_aggregate_fields: ResolverTypeWrapper<Recently_Listed_Aggregate_Fields>
	recently_listed_avg_fields: ResolverTypeWrapper<Recently_Listed_Avg_Fields>
	recently_listed_bool_exp: Recently_Listed_Bool_Exp
	recently_listed_max_fields: ResolverTypeWrapper<Recently_Listed_Max_Fields>
	recently_listed_min_fields: ResolverTypeWrapper<Recently_Listed_Min_Fields>
	recently_listed_order_by: Recently_Listed_Order_By
	recently_listed_select_column: Recently_Listed_Select_Column
	recently_listed_stddev_fields: ResolverTypeWrapper<Recently_Listed_Stddev_Fields>
	recently_listed_stddev_pop_fields: ResolverTypeWrapper<Recently_Listed_Stddev_Pop_Fields>
	recently_listed_stddev_samp_fields: ResolverTypeWrapper<Recently_Listed_Stddev_Samp_Fields>
	recently_listed_sum_fields: ResolverTypeWrapper<Recently_Listed_Sum_Fields>
	recently_listed_var_pop_fields: ResolverTypeWrapper<Recently_Listed_Var_Pop_Fields>
	recently_listed_var_samp_fields: ResolverTypeWrapper<Recently_Listed_Var_Samp_Fields>
	recently_listed_variance_fields: ResolverTypeWrapper<Recently_Listed_Variance_Fields>
	resources: ResolverTypeWrapper<Resources>
	resources_aggregate: ResolverTypeWrapper<Resources_Aggregate>
	resources_aggregate_fields: ResolverTypeWrapper<Resources_Aggregate_Fields>
	resources_aggregate_order_by: Resources_Aggregate_Order_By
	resources_base_themes: ResolverTypeWrapper<Resources_Base_Themes>
	resources_base_themes_aggregate_order_by: Resources_Base_Themes_Aggregate_Order_By
	resources_base_themes_bool_exp: Resources_Base_Themes_Bool_Exp
	resources_base_themes_max_order_by: Resources_Base_Themes_Max_Order_By
	resources_base_themes_min_order_by: Resources_Base_Themes_Min_Order_By
	resources_base_themes_order_by: Resources_Base_Themes_Order_By
	resources_base_themes_select_column: Resources_Base_Themes_Select_Column
	resources_bool_exp: Resources_Bool_Exp
	resources_max_fields: ResolverTypeWrapper<Resources_Max_Fields>
	resources_max_order_by: Resources_Max_Order_By
	resources_min_fields: ResolverTypeWrapper<Resources_Min_Fields>
	resources_min_order_by: Resources_Min_Order_By
	resources_order_by: Resources_Order_By
	resources_parts: ResolverTypeWrapper<Resources_Parts>
	resources_parts_aggregate: ResolverTypeWrapper<Resources_Parts_Aggregate>
	resources_parts_aggregate_fields: ResolverTypeWrapper<Resources_Parts_Aggregate_Fields>
	resources_parts_aggregate_order_by: Resources_Parts_Aggregate_Order_By
	resources_parts_bool_exp: Resources_Parts_Bool_Exp
	resources_parts_max_fields: ResolverTypeWrapper<Resources_Parts_Max_Fields>
	resources_parts_max_order_by: Resources_Parts_Max_Order_By
	resources_parts_min_fields: ResolverTypeWrapper<Resources_Parts_Min_Fields>
	resources_parts_min_order_by: Resources_Parts_Min_Order_By
	resources_parts_order_by: Resources_Parts_Order_By
	resources_parts_select_column: Resources_Parts_Select_Column
	resources_select_column: Resources_Select_Column
	sales: ResolverTypeWrapper<Sales>
	sales_bool_exp: Sales_Bool_Exp
	sales_order_by: Sales_Order_By
	sales_select_column: Sales_Select_Column
	singular_blacklisted_accounts: ResolverTypeWrapper<Singular_Blacklisted_Accounts>
	singular_blacklisted_accounts_aggregate_order_by: Singular_Blacklisted_Accounts_Aggregate_Order_By
	singular_blacklisted_accounts_bool_exp: Singular_Blacklisted_Accounts_Bool_Exp
	singular_blacklisted_accounts_max_order_by: Singular_Blacklisted_Accounts_Max_Order_By
	singular_blacklisted_accounts_min_order_by: Singular_Blacklisted_Accounts_Min_Order_By
	singular_blacklisted_accounts_order_by: Singular_Blacklisted_Accounts_Order_By
	singular_blacklisted_accounts_select_column: Singular_Blacklisted_Accounts_Select_Column
	singular_blacklisted_collections: ResolverTypeWrapper<Singular_Blacklisted_Collections>
	singular_blacklisted_collections_aggregate_order_by: Singular_Blacklisted_Collections_Aggregate_Order_By
	singular_blacklisted_collections_bool_exp: Singular_Blacklisted_Collections_Bool_Exp
	singular_blacklisted_collections_max_order_by: Singular_Blacklisted_Collections_Max_Order_By
	singular_blacklisted_collections_min_order_by: Singular_Blacklisted_Collections_Min_Order_By
	singular_blacklisted_collections_order_by: Singular_Blacklisted_Collections_Order_By
	singular_blacklisted_collections_select_column: Singular_Blacklisted_Collections_Select_Column
	singular_curated: ResolverTypeWrapper<Singular_Curated>
	singular_curated_aggregate: ResolverTypeWrapper<Singular_Curated_Aggregate>
	singular_curated_aggregate_fields: ResolverTypeWrapper<Singular_Curated_Aggregate_Fields>
	singular_curated_aggregate_order_by: Singular_Curated_Aggregate_Order_By
	singular_curated_bool_exp: Singular_Curated_Bool_Exp
	singular_curated_collections: ResolverTypeWrapper<Singular_Curated_Collections>
	singular_curated_collections_aggregate: ResolverTypeWrapper<Singular_Curated_Collections_Aggregate>
	singular_curated_collections_aggregate_fields: ResolverTypeWrapper<Singular_Curated_Collections_Aggregate_Fields>
	singular_curated_collections_aggregate_order_by: Singular_Curated_Collections_Aggregate_Order_By
	singular_curated_collections_bool_exp: Singular_Curated_Collections_Bool_Exp
	singular_curated_collections_max_fields: ResolverTypeWrapper<Singular_Curated_Collections_Max_Fields>
	singular_curated_collections_max_order_by: Singular_Curated_Collections_Max_Order_By
	singular_curated_collections_min_fields: ResolverTypeWrapper<Singular_Curated_Collections_Min_Fields>
	singular_curated_collections_min_order_by: Singular_Curated_Collections_Min_Order_By
	singular_curated_collections_order_by: Singular_Curated_Collections_Order_By
	singular_curated_collections_select_column: Singular_Curated_Collections_Select_Column
	singular_curated_max_fields: ResolverTypeWrapper<Singular_Curated_Max_Fields>
	singular_curated_max_order_by: Singular_Curated_Max_Order_By
	singular_curated_min_fields: ResolverTypeWrapper<Singular_Curated_Min_Fields>
	singular_curated_min_order_by: Singular_Curated_Min_Order_By
	singular_curated_order_by: Singular_Curated_Order_By
	singular_curated_select_column: Singular_Curated_Select_Column
	singular_nsfw_collections: ResolverTypeWrapper<Singular_Nsfw_Collections>
	singular_nsfw_collections_aggregate: ResolverTypeWrapper<Singular_Nsfw_Collections_Aggregate>
	singular_nsfw_collections_aggregate_fields: ResolverTypeWrapper<Singular_Nsfw_Collections_Aggregate_Fields>
	singular_nsfw_collections_aggregate_order_by: Singular_Nsfw_Collections_Aggregate_Order_By
	singular_nsfw_collections_bool_exp: Singular_Nsfw_Collections_Bool_Exp
	singular_nsfw_collections_max_fields: ResolverTypeWrapper<Singular_Nsfw_Collections_Max_Fields>
	singular_nsfw_collections_max_order_by: Singular_Nsfw_Collections_Max_Order_By
	singular_nsfw_collections_min_fields: ResolverTypeWrapper<Singular_Nsfw_Collections_Min_Fields>
	singular_nsfw_collections_min_order_by: Singular_Nsfw_Collections_Min_Order_By
	singular_nsfw_collections_order_by: Singular_Nsfw_Collections_Order_By
	singular_nsfw_collections_select_column: Singular_Nsfw_Collections_Select_Column
	singular_nsfw_nfts: ResolverTypeWrapper<Singular_Nsfw_Nfts>
	singular_nsfw_nfts_aggregate: ResolverTypeWrapper<Singular_Nsfw_Nfts_Aggregate>
	singular_nsfw_nfts_aggregate_fields: ResolverTypeWrapper<Singular_Nsfw_Nfts_Aggregate_Fields>
	singular_nsfw_nfts_aggregate_order_by: Singular_Nsfw_Nfts_Aggregate_Order_By
	singular_nsfw_nfts_bool_exp: Singular_Nsfw_Nfts_Bool_Exp
	singular_nsfw_nfts_max_fields: ResolverTypeWrapper<Singular_Nsfw_Nfts_Max_Fields>
	singular_nsfw_nfts_max_order_by: Singular_Nsfw_Nfts_Max_Order_By
	singular_nsfw_nfts_min_fields: ResolverTypeWrapper<Singular_Nsfw_Nfts_Min_Fields>
	singular_nsfw_nfts_min_order_by: Singular_Nsfw_Nfts_Min_Order_By
	singular_nsfw_nfts_order_by: Singular_Nsfw_Nfts_Order_By
	singular_nsfw_nfts_select_column: Singular_Nsfw_Nfts_Select_Column
	singular_verified_collections: ResolverTypeWrapper<Singular_Verified_Collections>
	singular_verified_collections_aggregate: ResolverTypeWrapper<Singular_Verified_Collections_Aggregate>
	singular_verified_collections_aggregate_fields: ResolverTypeWrapper<Singular_Verified_Collections_Aggregate_Fields>
	singular_verified_collections_aggregate_order_by: Singular_Verified_Collections_Aggregate_Order_By
	singular_verified_collections_bool_exp: Singular_Verified_Collections_Bool_Exp
	singular_verified_collections_max_fields: ResolverTypeWrapper<Singular_Verified_Collections_Max_Fields>
	singular_verified_collections_max_order_by: Singular_Verified_Collections_Max_Order_By
	singular_verified_collections_min_fields: ResolverTypeWrapper<Singular_Verified_Collections_Min_Fields>
	singular_verified_collections_min_order_by: Singular_Verified_Collections_Min_Order_By
	singular_verified_collections_order_by: Singular_Verified_Collections_Order_By
	singular_verified_collections_select_column: Singular_Verified_Collections_Select_Column
	smallint: ResolverTypeWrapper<Scalars['smallint']>
	smallint_comparison_exp: Smallint_Comparison_Exp
	system: ResolverTypeWrapper<System>
	system_bool_exp: System_Bool_Exp
	system_order_by: System_Order_By
	system_select_column: System_Select_Column
	timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>
	timestamptz_comparison_exp: Timestamptz_Comparison_Exp
	yuletide_item_track: ResolverTypeWrapper<Yuletide_Item_Track>
	yuletide_item_track_aggregate: ResolverTypeWrapper<Yuletide_Item_Track_Aggregate>
	yuletide_item_track_aggregate_fields: ResolverTypeWrapper<Yuletide_Item_Track_Aggregate_Fields>
	yuletide_item_track_avg_fields: ResolverTypeWrapper<Yuletide_Item_Track_Avg_Fields>
	yuletide_item_track_bool_exp: Yuletide_Item_Track_Bool_Exp
	yuletide_item_track_max_fields: ResolverTypeWrapper<Yuletide_Item_Track_Max_Fields>
	yuletide_item_track_min_fields: ResolverTypeWrapper<Yuletide_Item_Track_Min_Fields>
	yuletide_item_track_order_by: Yuletide_Item_Track_Order_By
	yuletide_item_track_select_column: Yuletide_Item_Track_Select_Column
	yuletide_item_track_stddev_fields: ResolverTypeWrapper<Yuletide_Item_Track_Stddev_Fields>
	yuletide_item_track_stddev_pop_fields: ResolverTypeWrapper<Yuletide_Item_Track_Stddev_Pop_Fields>
	yuletide_item_track_stddev_samp_fields: ResolverTypeWrapper<Yuletide_Item_Track_Stddev_Samp_Fields>
	yuletide_item_track_sum_fields: ResolverTypeWrapper<Yuletide_Item_Track_Sum_Fields>
	yuletide_item_track_var_pop_fields: ResolverTypeWrapper<Yuletide_Item_Track_Var_Pop_Fields>
	yuletide_item_track_var_samp_fields: ResolverTypeWrapper<Yuletide_Item_Track_Var_Samp_Fields>
	yuletide_item_track_variance_fields: ResolverTypeWrapper<Yuletide_Item_Track_Variance_Fields>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
	BigInt: Scalars['BigInt']
	BodiesConnection: BodiesConnection
	Body: Body
	BodyEdge: BodyEdge
	BodyMember: BodyMember
	BodyMemberEdge: BodyMemberEdge
	BodyMemberWhereInput: BodyMemberWhereInput
	BodyMemberWhereUniqueInput: BodyMemberWhereUniqueInput
	BodyMembersConnection: BodyMembersConnection
	BodyWhereInput: BodyWhereInput
	BodyWhereUniqueInput: BodyWhereUniqueInput
	Boolean: Scalars['Boolean']
	Boolean_comparison_exp: Boolean_Comparison_Exp
	Bytes: Scalars['Bytes']
	Config: Config
	DateTime: Scalars['DateTime']
	Features: Features
	Float: Scalars['Float']
	Float_comparison_exp: Float_Comparison_Exp
	ID: Scalars['ID']
	Int: Scalars['Int']
	Int_comparison_exp: Int_Comparison_Exp
	Link: Link
	Mutation: {}
	PageInfo: PageInfo
	Query: {}
	String: Scalars['String']
	String_comparison_exp: String_Comparison_Exp
	Subscription: {}
	base_themes: Base_Themes
	base_themes_bool_exp: Base_Themes_Bool_Exp
	base_themes_order_by: Base_Themes_Order_By
	bases: Bases
	bases_aggregate: Bases_Aggregate
	bases_aggregate_fields: Bases_Aggregate_Fields
	bases_avg_fields: Bases_Avg_Fields
	bases_bool_exp: Bases_Bool_Exp
	bases_max_fields: Bases_Max_Fields
	bases_min_fields: Bases_Min_Fields
	bases_order_by: Bases_Order_By
	bases_stddev_fields: Bases_Stddev_Fields
	bases_stddev_pop_fields: Bases_Stddev_Pop_Fields
	bases_stddev_samp_fields: Bases_Stddev_Samp_Fields
	bases_sum_fields: Bases_Sum_Fields
	bases_var_pop_fields: Bases_Var_Pop_Fields
	bases_var_samp_fields: Bases_Var_Samp_Fields
	bases_variance_fields: Bases_Variance_Fields
	bigint: Scalars['bigint']
	bigint_comparison_exp: Bigint_Comparison_Exp
	changes: Changes
	changes_aggregate: Changes_Aggregate
	changes_aggregate_fields: Changes_Aggregate_Fields
	changes_aggregate_order_by: Changes_Aggregate_Order_By
	changes_avg_fields: Changes_Avg_Fields
	changes_avg_order_by: Changes_Avg_Order_By
	changes_bool_exp: Changes_Bool_Exp
	changes_collection: Changes_Collection
	changes_collection_aggregate_order_by: Changes_Collection_Aggregate_Order_By
	changes_collection_avg_order_by: Changes_Collection_Avg_Order_By
	changes_collection_bool_exp: Changes_Collection_Bool_Exp
	changes_collection_max_order_by: Changes_Collection_Max_Order_By
	changes_collection_min_order_by: Changes_Collection_Min_Order_By
	changes_collection_order_by: Changes_Collection_Order_By
	changes_collection_stddev_order_by: Changes_Collection_Stddev_Order_By
	changes_collection_stddev_pop_order_by: Changes_Collection_Stddev_Pop_Order_By
	changes_collection_stddev_samp_order_by: Changes_Collection_Stddev_Samp_Order_By
	changes_collection_sum_order_by: Changes_Collection_Sum_Order_By
	changes_collection_var_pop_order_by: Changes_Collection_Var_Pop_Order_By
	changes_collection_var_samp_order_by: Changes_Collection_Var_Samp_Order_By
	changes_collection_variance_order_by: Changes_Collection_Variance_Order_By
	changes_max_fields: Changes_Max_Fields
	changes_max_order_by: Changes_Max_Order_By
	changes_min_fields: Changes_Min_Fields
	changes_min_order_by: Changes_Min_Order_By
	changes_order_by: Changes_Order_By
	changes_stddev_fields: Changes_Stddev_Fields
	changes_stddev_order_by: Changes_Stddev_Order_By
	changes_stddev_pop_fields: Changes_Stddev_Pop_Fields
	changes_stddev_pop_order_by: Changes_Stddev_Pop_Order_By
	changes_stddev_samp_fields: Changes_Stddev_Samp_Fields
	changes_stddev_samp_order_by: Changes_Stddev_Samp_Order_By
	changes_sum_fields: Changes_Sum_Fields
	changes_sum_order_by: Changes_Sum_Order_By
	changes_var_pop_fields: Changes_Var_Pop_Fields
	changes_var_pop_order_by: Changes_Var_Pop_Order_By
	changes_var_samp_fields: Changes_Var_Samp_Fields
	changes_var_samp_order_by: Changes_Var_Samp_Order_By
	changes_variance_fields: Changes_Variance_Fields
	changes_variance_order_by: Changes_Variance_Order_By
	collection_banners: Collection_Banners
	collection_banners_bool_exp: Collection_Banners_Bool_Exp
	collection_banners_order_by: Collection_Banners_Order_By
	collections: Collections
	collections_aggregate: Collections_Aggregate
	collections_aggregate_fields: Collections_Aggregate_Fields
	collections_avg_fields: Collections_Avg_Fields
	collections_bool_exp: Collections_Bool_Exp
	collections_max_fields: Collections_Max_Fields
	collections_min_fields: Collections_Min_Fields
	collections_order_by: Collections_Order_By
	collections_stddev_fields: Collections_Stddev_Fields
	collections_stddev_pop_fields: Collections_Stddev_Pop_Fields
	collections_stddev_samp_fields: Collections_Stddev_Samp_Fields
	collections_sum_fields: Collections_Sum_Fields
	collections_var_pop_fields: Collections_Var_Pop_Fields
	collections_var_samp_fields: Collections_Var_Samp_Fields
	collections_variance_fields: Collections_Variance_Fields
	distinct_kanaria_nfts: Distinct_Kanaria_Nfts
	distinct_kanaria_nfts_aggregate: Distinct_Kanaria_Nfts_Aggregate
	distinct_kanaria_nfts_aggregate_fields: Distinct_Kanaria_Nfts_Aggregate_Fields
	distinct_kanaria_nfts_avg_fields: Distinct_Kanaria_Nfts_Avg_Fields
	distinct_kanaria_nfts_bool_exp: Distinct_Kanaria_Nfts_Bool_Exp
	distinct_kanaria_nfts_max_fields: Distinct_Kanaria_Nfts_Max_Fields
	distinct_kanaria_nfts_min_fields: Distinct_Kanaria_Nfts_Min_Fields
	distinct_kanaria_nfts_order_by: Distinct_Kanaria_Nfts_Order_By
	distinct_kanaria_nfts_stddev_fields: Distinct_Kanaria_Nfts_Stddev_Fields
	distinct_kanaria_nfts_stddev_pop_fields: Distinct_Kanaria_Nfts_Stddev_Pop_Fields
	distinct_kanaria_nfts_stddev_samp_fields: Distinct_Kanaria_Nfts_Stddev_Samp_Fields
	distinct_kanaria_nfts_sum_fields: Distinct_Kanaria_Nfts_Sum_Fields
	distinct_kanaria_nfts_var_pop_fields: Distinct_Kanaria_Nfts_Var_Pop_Fields
	distinct_kanaria_nfts_var_samp_fields: Distinct_Kanaria_Nfts_Var_Samp_Fields
	distinct_kanaria_nfts_variance_fields: Distinct_Kanaria_Nfts_Variance_Fields
	distinct_nfts: Distinct_Nfts
	distinct_nfts_aggregate: Distinct_Nfts_Aggregate
	distinct_nfts_aggregate_fields: Distinct_Nfts_Aggregate_Fields
	distinct_nfts_avg_fields: Distinct_Nfts_Avg_Fields
	distinct_nfts_bool_exp: Distinct_Nfts_Bool_Exp
	distinct_nfts_max_fields: Distinct_Nfts_Max_Fields
	distinct_nfts_min_fields: Distinct_Nfts_Min_Fields
	distinct_nfts_order_by: Distinct_Nfts_Order_By
	distinct_nfts_stddev_fields: Distinct_Nfts_Stddev_Fields
	distinct_nfts_stddev_pop_fields: Distinct_Nfts_Stddev_Pop_Fields
	distinct_nfts_stddev_samp_fields: Distinct_Nfts_Stddev_Samp_Fields
	distinct_nfts_sum_fields: Distinct_Nfts_Sum_Fields
	distinct_nfts_var_pop_fields: Distinct_Nfts_Var_Pop_Fields
	distinct_nfts_var_samp_fields: Distinct_Nfts_Var_Samp_Fields
	distinct_nfts_variance_fields: Distinct_Nfts_Variance_Fields
	dutchie: Dutchie
	dutchie_bool_exp: Dutchie_Bool_Exp
	dutchie_order_by: Dutchie_Order_By
	gems_enabled: Gems_Enabled
	gems_enabled_bool_exp: Gems_Enabled_Bool_Exp
	gems_enabled_order_by: Gems_Enabled_Order_By
	get_by_unicode_args: Get_By_Unicode_Args
	get_ordered_changes_stats_args: Get_Ordered_Changes_Stats_Args
	hatched_birds: Hatched_Birds
	hatched_birds_bool_exp: Hatched_Birds_Bool_Exp
	hatched_birds_insert_input: Hatched_Birds_Insert_Input
	hatched_birds_mutation_response: Hatched_Birds_Mutation_Response
	hatched_birds_order_by: Hatched_Birds_Order_By
	jsonb: Scalars['jsonb']
	jsonb_comparison_exp: Jsonb_Comparison_Exp
	nfts: Nfts
	nfts_aggregate: Nfts_Aggregate
	nfts_aggregate_fields: Nfts_Aggregate_Fields
	nfts_aggregate_order_by: Nfts_Aggregate_Order_By
	nfts_avg_fields: Nfts_Avg_Fields
	nfts_avg_order_by: Nfts_Avg_Order_By
	nfts_bool_exp: Nfts_Bool_Exp
	nfts_max_fields: Nfts_Max_Fields
	nfts_max_order_by: Nfts_Max_Order_By
	nfts_min_fields: Nfts_Min_Fields
	nfts_min_order_by: Nfts_Min_Order_By
	nfts_order_by: Nfts_Order_By
	nfts_reactions_stats: Nfts_Reactions_Stats
	nfts_reactions_stats_aggregate: Nfts_Reactions_Stats_Aggregate
	nfts_reactions_stats_aggregate_fields: Nfts_Reactions_Stats_Aggregate_Fields
	nfts_reactions_stats_avg_fields: Nfts_Reactions_Stats_Avg_Fields
	nfts_reactions_stats_bool_exp: Nfts_Reactions_Stats_Bool_Exp
	nfts_reactions_stats_max_fields: Nfts_Reactions_Stats_Max_Fields
	nfts_reactions_stats_min_fields: Nfts_Reactions_Stats_Min_Fields
	nfts_reactions_stats_order_by: Nfts_Reactions_Stats_Order_By
	nfts_reactions_stats_stddev_fields: Nfts_Reactions_Stats_Stddev_Fields
	nfts_reactions_stats_stddev_pop_fields: Nfts_Reactions_Stats_Stddev_Pop_Fields
	nfts_reactions_stats_stddev_samp_fields: Nfts_Reactions_Stats_Stddev_Samp_Fields
	nfts_reactions_stats_sum_fields: Nfts_Reactions_Stats_Sum_Fields
	nfts_reactions_stats_var_pop_fields: Nfts_Reactions_Stats_Var_Pop_Fields
	nfts_reactions_stats_var_samp_fields: Nfts_Reactions_Stats_Var_Samp_Fields
	nfts_reactions_stats_variance_fields: Nfts_Reactions_Stats_Variance_Fields
	nfts_stats: Nfts_Stats
	nfts_stats_aggregate: Nfts_Stats_Aggregate
	nfts_stats_aggregate_fields: Nfts_Stats_Aggregate_Fields
	nfts_stats_avg_fields: Nfts_Stats_Avg_Fields
	nfts_stats_bool_exp: Nfts_Stats_Bool_Exp
	nfts_stats_max_fields: Nfts_Stats_Max_Fields
	nfts_stats_min_fields: Nfts_Stats_Min_Fields
	nfts_stats_order_by: Nfts_Stats_Order_By
	nfts_stats_stddev_fields: Nfts_Stats_Stddev_Fields
	nfts_stats_stddev_pop_fields: Nfts_Stats_Stddev_Pop_Fields
	nfts_stats_stddev_samp_fields: Nfts_Stats_Stddev_Samp_Fields
	nfts_stats_sum_fields: Nfts_Stats_Sum_Fields
	nfts_stats_var_pop_fields: Nfts_Stats_Var_Pop_Fields
	nfts_stats_var_samp_fields: Nfts_Stats_Var_Samp_Fields
	nfts_stats_variance_fields: Nfts_Stats_Variance_Fields
	nfts_stddev_fields: Nfts_Stddev_Fields
	nfts_stddev_order_by: Nfts_Stddev_Order_By
	nfts_stddev_pop_fields: Nfts_Stddev_Pop_Fields
	nfts_stddev_pop_order_by: Nfts_Stddev_Pop_Order_By
	nfts_stddev_samp_fields: Nfts_Stddev_Samp_Fields
	nfts_stddev_samp_order_by: Nfts_Stddev_Samp_Order_By
	nfts_sum_fields: Nfts_Sum_Fields
	nfts_sum_order_by: Nfts_Sum_Order_By
	nfts_var_pop_fields: Nfts_Var_Pop_Fields
	nfts_var_pop_order_by: Nfts_Var_Pop_Order_By
	nfts_var_samp_fields: Nfts_Var_Samp_Fields
	nfts_var_samp_order_by: Nfts_Var_Samp_Order_By
	nfts_variance_fields: Nfts_Variance_Fields
	nfts_variance_order_by: Nfts_Variance_Order_By
	numeric: Scalars['numeric']
	numeric_comparison_exp: Numeric_Comparison_Exp
	parts: Parts
	parts_aggregate: Parts_Aggregate
	parts_aggregate_fields: Parts_Aggregate_Fields
	parts_aggregate_order_by: Parts_Aggregate_Order_By
	parts_avg_fields: Parts_Avg_Fields
	parts_avg_order_by: Parts_Avg_Order_By
	parts_bool_exp: Parts_Bool_Exp
	parts_max_fields: Parts_Max_Fields
	parts_max_order_by: Parts_Max_Order_By
	parts_min_fields: Parts_Min_Fields
	parts_min_order_by: Parts_Min_Order_By
	parts_order_by: Parts_Order_By
	parts_stddev_fields: Parts_Stddev_Fields
	parts_stddev_order_by: Parts_Stddev_Order_By
	parts_stddev_pop_fields: Parts_Stddev_Pop_Fields
	parts_stddev_pop_order_by: Parts_Stddev_Pop_Order_By
	parts_stddev_samp_fields: Parts_Stddev_Samp_Fields
	parts_stddev_samp_order_by: Parts_Stddev_Samp_Order_By
	parts_sum_fields: Parts_Sum_Fields
	parts_sum_order_by: Parts_Sum_Order_By
	parts_var_pop_fields: Parts_Var_Pop_Fields
	parts_var_pop_order_by: Parts_Var_Pop_Order_By
	parts_var_samp_fields: Parts_Var_Samp_Fields
	parts_var_samp_order_by: Parts_Var_Samp_Order_By
	parts_variance_fields: Parts_Variance_Fields
	parts_variance_order_by: Parts_Variance_Order_By
	reactions: Reactions
	reactions_aggregate: Reactions_Aggregate
	reactions_aggregate_fields: Reactions_Aggregate_Fields
	reactions_aggregate_order_by: Reactions_Aggregate_Order_By
	reactions_avg_fields: Reactions_Avg_Fields
	reactions_avg_order_by: Reactions_Avg_Order_By
	reactions_bool_exp: Reactions_Bool_Exp
	reactions_max_fields: Reactions_Max_Fields
	reactions_max_order_by: Reactions_Max_Order_By
	reactions_min_fields: Reactions_Min_Fields
	reactions_min_order_by: Reactions_Min_Order_By
	reactions_order_by: Reactions_Order_By
	reactions_stddev_fields: Reactions_Stddev_Fields
	reactions_stddev_order_by: Reactions_Stddev_Order_By
	reactions_stddev_pop_fields: Reactions_Stddev_Pop_Fields
	reactions_stddev_pop_order_by: Reactions_Stddev_Pop_Order_By
	reactions_stddev_samp_fields: Reactions_Stddev_Samp_Fields
	reactions_stddev_samp_order_by: Reactions_Stddev_Samp_Order_By
	reactions_sum_fields: Reactions_Sum_Fields
	reactions_sum_order_by: Reactions_Sum_Order_By
	reactions_unicode: Reactions_Unicode
	reactions_unicode_aggregate: Reactions_Unicode_Aggregate
	reactions_unicode_aggregate_fields: Reactions_Unicode_Aggregate_Fields
	reactions_unicode_aggregate_order_by: Reactions_Unicode_Aggregate_Order_By
	reactions_unicode_bool_exp: Reactions_Unicode_Bool_Exp
	reactions_unicode_max_fields: Reactions_Unicode_Max_Fields
	reactions_unicode_max_order_by: Reactions_Unicode_Max_Order_By
	reactions_unicode_min_fields: Reactions_Unicode_Min_Fields
	reactions_unicode_min_order_by: Reactions_Unicode_Min_Order_By
	reactions_unicode_order_by: Reactions_Unicode_Order_By
	reactions_users: Reactions_Users
	reactions_users_aggregate: Reactions_Users_Aggregate
	reactions_users_aggregate_fields: Reactions_Users_Aggregate_Fields
	reactions_users_aggregate_order_by: Reactions_Users_Aggregate_Order_By
	reactions_users_bool_exp: Reactions_Users_Bool_Exp
	reactions_users_max_fields: Reactions_Users_Max_Fields
	reactions_users_max_order_by: Reactions_Users_Max_Order_By
	reactions_users_min_fields: Reactions_Users_Min_Fields
	reactions_users_min_order_by: Reactions_Users_Min_Order_By
	reactions_users_order_by: Reactions_Users_Order_By
	reactions_var_pop_fields: Reactions_Var_Pop_Fields
	reactions_var_pop_order_by: Reactions_Var_Pop_Order_By
	reactions_var_samp_fields: Reactions_Var_Samp_Fields
	reactions_var_samp_order_by: Reactions_Var_Samp_Order_By
	reactions_variance_fields: Reactions_Variance_Fields
	reactions_variance_order_by: Reactions_Variance_Order_By
	recently_listed: Recently_Listed
	recently_listed_aggregate: Recently_Listed_Aggregate
	recently_listed_aggregate_fields: Recently_Listed_Aggregate_Fields
	recently_listed_avg_fields: Recently_Listed_Avg_Fields
	recently_listed_bool_exp: Recently_Listed_Bool_Exp
	recently_listed_max_fields: Recently_Listed_Max_Fields
	recently_listed_min_fields: Recently_Listed_Min_Fields
	recently_listed_order_by: Recently_Listed_Order_By
	recently_listed_stddev_fields: Recently_Listed_Stddev_Fields
	recently_listed_stddev_pop_fields: Recently_Listed_Stddev_Pop_Fields
	recently_listed_stddev_samp_fields: Recently_Listed_Stddev_Samp_Fields
	recently_listed_sum_fields: Recently_Listed_Sum_Fields
	recently_listed_var_pop_fields: Recently_Listed_Var_Pop_Fields
	recently_listed_var_samp_fields: Recently_Listed_Var_Samp_Fields
	recently_listed_variance_fields: Recently_Listed_Variance_Fields
	resources: Resources
	resources_aggregate: Resources_Aggregate
	resources_aggregate_fields: Resources_Aggregate_Fields
	resources_aggregate_order_by: Resources_Aggregate_Order_By
	resources_base_themes: Resources_Base_Themes
	resources_base_themes_aggregate_order_by: Resources_Base_Themes_Aggregate_Order_By
	resources_base_themes_bool_exp: Resources_Base_Themes_Bool_Exp
	resources_base_themes_max_order_by: Resources_Base_Themes_Max_Order_By
	resources_base_themes_min_order_by: Resources_Base_Themes_Min_Order_By
	resources_base_themes_order_by: Resources_Base_Themes_Order_By
	resources_bool_exp: Resources_Bool_Exp
	resources_max_fields: Resources_Max_Fields
	resources_max_order_by: Resources_Max_Order_By
	resources_min_fields: Resources_Min_Fields
	resources_min_order_by: Resources_Min_Order_By
	resources_order_by: Resources_Order_By
	resources_parts: Resources_Parts
	resources_parts_aggregate: Resources_Parts_Aggregate
	resources_parts_aggregate_fields: Resources_Parts_Aggregate_Fields
	resources_parts_aggregate_order_by: Resources_Parts_Aggregate_Order_By
	resources_parts_bool_exp: Resources_Parts_Bool_Exp
	resources_parts_max_fields: Resources_Parts_Max_Fields
	resources_parts_max_order_by: Resources_Parts_Max_Order_By
	resources_parts_min_fields: Resources_Parts_Min_Fields
	resources_parts_min_order_by: Resources_Parts_Min_Order_By
	resources_parts_order_by: Resources_Parts_Order_By
	sales: Sales
	sales_bool_exp: Sales_Bool_Exp
	sales_order_by: Sales_Order_By
	singular_blacklisted_accounts: Singular_Blacklisted_Accounts
	singular_blacklisted_accounts_aggregate_order_by: Singular_Blacklisted_Accounts_Aggregate_Order_By
	singular_blacklisted_accounts_bool_exp: Singular_Blacklisted_Accounts_Bool_Exp
	singular_blacklisted_accounts_max_order_by: Singular_Blacklisted_Accounts_Max_Order_By
	singular_blacklisted_accounts_min_order_by: Singular_Blacklisted_Accounts_Min_Order_By
	singular_blacklisted_accounts_order_by: Singular_Blacklisted_Accounts_Order_By
	singular_blacklisted_collections: Singular_Blacklisted_Collections
	singular_blacklisted_collections_aggregate_order_by: Singular_Blacklisted_Collections_Aggregate_Order_By
	singular_blacklisted_collections_bool_exp: Singular_Blacklisted_Collections_Bool_Exp
	singular_blacklisted_collections_max_order_by: Singular_Blacklisted_Collections_Max_Order_By
	singular_blacklisted_collections_min_order_by: Singular_Blacklisted_Collections_Min_Order_By
	singular_blacklisted_collections_order_by: Singular_Blacklisted_Collections_Order_By
	singular_curated: Singular_Curated
	singular_curated_aggregate: Singular_Curated_Aggregate
	singular_curated_aggregate_fields: Singular_Curated_Aggregate_Fields
	singular_curated_aggregate_order_by: Singular_Curated_Aggregate_Order_By
	singular_curated_bool_exp: Singular_Curated_Bool_Exp
	singular_curated_collections: Singular_Curated_Collections
	singular_curated_collections_aggregate: Singular_Curated_Collections_Aggregate
	singular_curated_collections_aggregate_fields: Singular_Curated_Collections_Aggregate_Fields
	singular_curated_collections_aggregate_order_by: Singular_Curated_Collections_Aggregate_Order_By
	singular_curated_collections_bool_exp: Singular_Curated_Collections_Bool_Exp
	singular_curated_collections_max_fields: Singular_Curated_Collections_Max_Fields
	singular_curated_collections_max_order_by: Singular_Curated_Collections_Max_Order_By
	singular_curated_collections_min_fields: Singular_Curated_Collections_Min_Fields
	singular_curated_collections_min_order_by: Singular_Curated_Collections_Min_Order_By
	singular_curated_collections_order_by: Singular_Curated_Collections_Order_By
	singular_curated_max_fields: Singular_Curated_Max_Fields
	singular_curated_max_order_by: Singular_Curated_Max_Order_By
	singular_curated_min_fields: Singular_Curated_Min_Fields
	singular_curated_min_order_by: Singular_Curated_Min_Order_By
	singular_curated_order_by: Singular_Curated_Order_By
	singular_nsfw_collections: Singular_Nsfw_Collections
	singular_nsfw_collections_aggregate: Singular_Nsfw_Collections_Aggregate
	singular_nsfw_collections_aggregate_fields: Singular_Nsfw_Collections_Aggregate_Fields
	singular_nsfw_collections_aggregate_order_by: Singular_Nsfw_Collections_Aggregate_Order_By
	singular_nsfw_collections_bool_exp: Singular_Nsfw_Collections_Bool_Exp
	singular_nsfw_collections_max_fields: Singular_Nsfw_Collections_Max_Fields
	singular_nsfw_collections_max_order_by: Singular_Nsfw_Collections_Max_Order_By
	singular_nsfw_collections_min_fields: Singular_Nsfw_Collections_Min_Fields
	singular_nsfw_collections_min_order_by: Singular_Nsfw_Collections_Min_Order_By
	singular_nsfw_collections_order_by: Singular_Nsfw_Collections_Order_By
	singular_nsfw_nfts: Singular_Nsfw_Nfts
	singular_nsfw_nfts_aggregate: Singular_Nsfw_Nfts_Aggregate
	singular_nsfw_nfts_aggregate_fields: Singular_Nsfw_Nfts_Aggregate_Fields
	singular_nsfw_nfts_aggregate_order_by: Singular_Nsfw_Nfts_Aggregate_Order_By
	singular_nsfw_nfts_bool_exp: Singular_Nsfw_Nfts_Bool_Exp
	singular_nsfw_nfts_max_fields: Singular_Nsfw_Nfts_Max_Fields
	singular_nsfw_nfts_max_order_by: Singular_Nsfw_Nfts_Max_Order_By
	singular_nsfw_nfts_min_fields: Singular_Nsfw_Nfts_Min_Fields
	singular_nsfw_nfts_min_order_by: Singular_Nsfw_Nfts_Min_Order_By
	singular_nsfw_nfts_order_by: Singular_Nsfw_Nfts_Order_By
	singular_verified_collections: Singular_Verified_Collections
	singular_verified_collections_aggregate: Singular_Verified_Collections_Aggregate
	singular_verified_collections_aggregate_fields: Singular_Verified_Collections_Aggregate_Fields
	singular_verified_collections_aggregate_order_by: Singular_Verified_Collections_Aggregate_Order_By
	singular_verified_collections_bool_exp: Singular_Verified_Collections_Bool_Exp
	singular_verified_collections_max_fields: Singular_Verified_Collections_Max_Fields
	singular_verified_collections_max_order_by: Singular_Verified_Collections_Max_Order_By
	singular_verified_collections_min_fields: Singular_Verified_Collections_Min_Fields
	singular_verified_collections_min_order_by: Singular_Verified_Collections_Min_Order_By
	singular_verified_collections_order_by: Singular_Verified_Collections_Order_By
	smallint: Scalars['smallint']
	smallint_comparison_exp: Smallint_Comparison_Exp
	system: System
	system_bool_exp: System_Bool_Exp
	system_order_by: System_Order_By
	timestamptz: Scalars['timestamptz']
	timestamptz_comparison_exp: Timestamptz_Comparison_Exp
	yuletide_item_track: Yuletide_Item_Track
	yuletide_item_track_aggregate: Yuletide_Item_Track_Aggregate
	yuletide_item_track_aggregate_fields: Yuletide_Item_Track_Aggregate_Fields
	yuletide_item_track_avg_fields: Yuletide_Item_Track_Avg_Fields
	yuletide_item_track_bool_exp: Yuletide_Item_Track_Bool_Exp
	yuletide_item_track_max_fields: Yuletide_Item_Track_Max_Fields
	yuletide_item_track_min_fields: Yuletide_Item_Track_Min_Fields
	yuletide_item_track_order_by: Yuletide_Item_Track_Order_By
	yuletide_item_track_stddev_fields: Yuletide_Item_Track_Stddev_Fields
	yuletide_item_track_stddev_pop_fields: Yuletide_Item_Track_Stddev_Pop_Fields
	yuletide_item_track_stddev_samp_fields: Yuletide_Item_Track_Stddev_Samp_Fields
	yuletide_item_track_sum_fields: Yuletide_Item_Track_Sum_Fields
	yuletide_item_track_var_pop_fields: Yuletide_Item_Track_Var_Pop_Fields
	yuletide_item_track_var_samp_fields: Yuletide_Item_Track_Var_Samp_Fields
	yuletide_item_track_variance_fields: Yuletide_Item_Track_Variance_Fields
}>

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
	name: 'BigInt'
}

export type BodiesConnectionResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['BodiesConnection'] = ResolversParentTypes['BodiesConnection'],
> = ResolversObject<{
	edges?: Resolver<ReadonlyArray<ResolversTypes['BodyEdge']>, ParentType, ContextType>
	pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
	totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type BodyResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Body'] = ResolversParentTypes['Body'],
> = ResolversObject<{
	access?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	body?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	cid?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	controller?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	creator?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	fee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
	feeModel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	govAsset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	memberLimit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
	members?: Resolver<ReadonlyArray<ResolversTypes['BodyMember']>, ParentType, ContextType, Partial<BodyMembersArgs>>
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	payAsset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	treasury?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type BodyEdgeResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['BodyEdge'] = ResolversParentTypes['BodyEdge'],
> = ResolversObject<{
	cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	node?: Resolver<ResolversTypes['Body'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type BodyMemberResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['BodyMember'] = ResolversParentTypes['BodyMember'],
> = ResolversObject<{
	address?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	body?: Resolver<ResolversTypes['Body'], ParentType, ContextType>
	id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type BodyMemberEdgeResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['BodyMemberEdge'] = ResolversParentTypes['BodyMemberEdge'],
> = ResolversObject<{
	cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	node?: Resolver<ResolversTypes['BodyMember'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type BodyMembersConnectionResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['BodyMembersConnection'] = ResolversParentTypes['BodyMembersConnection'],
> = ResolversObject<{
	edges?: Resolver<ReadonlyArray<ResolversTypes['BodyMemberEdge']>, ParentType, ContextType>
	pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
	totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
	name: 'Bytes'
}

export type ConfigResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Config'] = ResolversParentTypes['Config'],
> = ResolversObject<{
	AWS_REGION?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	AWS_USERPOOL_ID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	AWS_USERPOOL_WEBCLIENT_ID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	CONTACT?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	CRYPTOCOMPARE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	ETH_URI?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	GQL_KEY?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	GQL_URI?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	INFURA_KEY?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	INFURA_MAINNET?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	INFURA_MODE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	INFURA_SECRET?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	INFURA_TESTNET?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	IPFS_URI?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	SITE_DESCRIPTION?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	SITE_IMAGE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	SITE_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	SITE_TITLE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	SUBZERO_PORT?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	SUBZERO_URI?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	SUB_URI?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	TW_SITE_CREATOR?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	TW_SITE_NAME?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	UNSPLASH_KEY?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	UNSPLASH_SECRET?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
	name: 'DateTime'
}

export type FeaturesResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Features'] = ResolversParentTypes['Features'],
> = ResolversObject<{
	DEBUG?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	SHOW_APPLY?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	SHOW_CAMPAIGNS?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	SHOW_FOOTER?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	SHOW_FOOTER_NAV?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	SHOW_FX?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	SHOW_HEADER?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	SHOW_HEADER_NAV?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
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
	insert_hatched_birds?: Resolver<
		Maybe<ResolversTypes['hatched_birds_mutation_response']>,
		ParentType,
		ContextType,
		RequireFields<MutationInsert_Hatched_BirdsArgs, 'objects'>
	>
	insert_hatched_birds_one?: Resolver<
		Maybe<ResolversTypes['hatched_birds']>,
		ParentType,
		ContextType,
		RequireFields<MutationInsert_Hatched_Birds_OneArgs, 'object'>
	>
}>

export type PageInfoResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo'],
> = ResolversObject<{
	endCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	startCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type QueryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
	base_themes?: Resolver<
		ReadonlyArray<ResolversTypes['base_themes']>,
		ParentType,
		ContextType,
		Partial<QueryBase_ThemesArgs>
	>
	base_themes_by_pk?: Resolver<
		Maybe<ResolversTypes['base_themes']>,
		ParentType,
		ContextType,
		RequireFields<QueryBase_Themes_By_PkArgs, 'id'>
	>
	bases?: Resolver<ReadonlyArray<ResolversTypes['bases']>, ParentType, ContextType, Partial<QueryBasesArgs>>
	bases_aggregate?: Resolver<
		ResolversTypes['bases_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryBases_AggregateArgs>
	>
	bases_by_pk?: Resolver<
		Maybe<ResolversTypes['bases']>,
		ParentType,
		ContextType,
		RequireFields<QueryBases_By_PkArgs, 'id'>
	>
	bodies?: Resolver<ReadonlyArray<ResolversTypes['Body']>, ParentType, ContextType, Partial<QueryBodiesArgs>>
	bodiesConnection?: Resolver<
		ResolversTypes['BodiesConnection'],
		ParentType,
		ContextType,
		RequireFields<QueryBodiesConnectionArgs, 'orderBy'>
	>
	bodyById?: Resolver<Maybe<ResolversTypes['Body']>, ParentType, ContextType, RequireFields<QueryBodyByIdArgs, 'id'>>
	bodyByUniqueInput?: Resolver<
		Maybe<ResolversTypes['Body']>,
		ParentType,
		ContextType,
		RequireFields<QueryBodyByUniqueInputArgs, 'where'>
	>
	bodyMemberById?: Resolver<
		Maybe<ResolversTypes['BodyMember']>,
		ParentType,
		ContextType,
		RequireFields<QueryBodyMemberByIdArgs, 'id'>
	>
	bodyMemberByUniqueInput?: Resolver<
		Maybe<ResolversTypes['BodyMember']>,
		ParentType,
		ContextType,
		RequireFields<QueryBodyMemberByUniqueInputArgs, 'where'>
	>
	bodyMembers?: Resolver<
		ReadonlyArray<ResolversTypes['BodyMember']>,
		ParentType,
		ContextType,
		Partial<QueryBodyMembersArgs>
	>
	bodyMembersConnection?: Resolver<
		ResolversTypes['BodyMembersConnection'],
		ParentType,
		ContextType,
		RequireFields<QueryBodyMembersConnectionArgs, 'orderBy'>
	>
	changes?: Resolver<ReadonlyArray<ResolversTypes['changes']>, ParentType, ContextType, Partial<QueryChangesArgs>>
	changes_aggregate?: Resolver<
		ResolversTypes['changes_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryChanges_AggregateArgs>
	>
	changes_by_pk?: Resolver<
		Maybe<ResolversTypes['changes']>,
		ParentType,
		ContextType,
		RequireFields<QueryChanges_By_PkArgs, 'id'>
	>
	changes_collection?: Resolver<
		ReadonlyArray<ResolversTypes['changes_collection']>,
		ParentType,
		ContextType,
		Partial<QueryChanges_CollectionArgs>
	>
	changes_collection_by_pk?: Resolver<
		Maybe<ResolversTypes['changes_collection']>,
		ParentType,
		ContextType,
		RequireFields<QueryChanges_Collection_By_PkArgs, 'id'>
	>
	collection_banners?: Resolver<
		ReadonlyArray<ResolversTypes['collection_banners']>,
		ParentType,
		ContextType,
		Partial<QueryCollection_BannersArgs>
	>
	collection_banners_by_pk?: Resolver<
		Maybe<ResolversTypes['collection_banners']>,
		ParentType,
		ContextType,
		RequireFields<QueryCollection_Banners_By_PkArgs, 'collection_id'>
	>
	collections?: Resolver<
		ReadonlyArray<ResolversTypes['collections']>,
		ParentType,
		ContextType,
		Partial<QueryCollectionsArgs>
	>
	collections_aggregate?: Resolver<
		ResolversTypes['collections_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryCollections_AggregateArgs>
	>
	collections_by_pk?: Resolver<
		Maybe<ResolversTypes['collections']>,
		ParentType,
		ContextType,
		RequireFields<QueryCollections_By_PkArgs, 'id'>
	>
	config?: Resolver<ResolversTypes['Config'], ParentType, ContextType, RequireFields<QueryConfigArgs, 'env'>>
	distinct_kanaria_nfts?: Resolver<
		ReadonlyArray<ResolversTypes['distinct_kanaria_nfts']>,
		ParentType,
		ContextType,
		Partial<QueryDistinct_Kanaria_NftsArgs>
	>
	distinct_kanaria_nfts_aggregate?: Resolver<
		ResolversTypes['distinct_kanaria_nfts_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryDistinct_Kanaria_Nfts_AggregateArgs>
	>
	distinct_nfts?: Resolver<
		ReadonlyArray<ResolversTypes['distinct_nfts']>,
		ParentType,
		ContextType,
		Partial<QueryDistinct_NftsArgs>
	>
	distinct_nfts_aggregate?: Resolver<
		ResolversTypes['distinct_nfts_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryDistinct_Nfts_AggregateArgs>
	>
	dutchie?: Resolver<ReadonlyArray<ResolversTypes['dutchie']>, ParentType, ContextType, Partial<QueryDutchieArgs>>
	dutchie_by_pk?: Resolver<
		Maybe<ResolversTypes['dutchie']>,
		ParentType,
		ContextType,
		RequireFields<QueryDutchie_By_PkArgs, 'id'>
	>
	features?: Resolver<ResolversTypes['Features'], ParentType, ContextType, RequireFields<QueryFeaturesArgs, 'env'>>
	gems_enabled?: Resolver<
		ReadonlyArray<ResolversTypes['gems_enabled']>,
		ParentType,
		ContextType,
		Partial<QueryGems_EnabledArgs>
	>
	gems_enabled_by_pk?: Resolver<
		Maybe<ResolversTypes['gems_enabled']>,
		ParentType,
		ContextType,
		RequireFields<QueryGems_Enabled_By_PkArgs, 'id'>
	>
	get_by_unicode?: Resolver<
		ReadonlyArray<ResolversTypes['reactions']>,
		ParentType,
		ContextType,
		RequireFields<QueryGet_By_UnicodeArgs, 'args'>
	>
	get_by_unicode_aggregate?: Resolver<
		ResolversTypes['reactions_aggregate'],
		ParentType,
		ContextType,
		RequireFields<QueryGet_By_Unicode_AggregateArgs, 'args'>
	>
	get_newly_listed?: Resolver<
		ReadonlyArray<ResolversTypes['nfts']>,
		ParentType,
		ContextType,
		Partial<QueryGet_Newly_ListedArgs>
	>
	get_newly_listed_aggregate?: Resolver<
		ResolversTypes['nfts_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryGet_Newly_Listed_AggregateArgs>
	>
	get_newly_minted?: Resolver<
		ReadonlyArray<ResolversTypes['nfts']>,
		ParentType,
		ContextType,
		Partial<QueryGet_Newly_MintedArgs>
	>
	get_newly_minted_aggregate?: Resolver<
		ResolversTypes['nfts_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryGet_Newly_Minted_AggregateArgs>
	>
	get_ordered_changes_stats?: Resolver<
		ReadonlyArray<ResolversTypes['changes']>,
		ParentType,
		ContextType,
		RequireFields<QueryGet_Ordered_Changes_StatsArgs, 'args'>
	>
	get_ordered_changes_stats_aggregate?: Resolver<
		ResolversTypes['changes_aggregate'],
		ParentType,
		ContextType,
		RequireFields<QueryGet_Ordered_Changes_Stats_AggregateArgs, 'args'>
	>
	hatched_birds?: Resolver<
		ReadonlyArray<ResolversTypes['hatched_birds']>,
		ParentType,
		ContextType,
		Partial<QueryHatched_BirdsArgs>
	>
	hatched_birds_by_pk?: Resolver<
		Maybe<ResolversTypes['hatched_birds']>,
		ParentType,
		ContextType,
		RequireFields<QueryHatched_Birds_By_PkArgs, 'id'>
	>
	links?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Link']>>, ParentType, ContextType>
	nfts?: Resolver<ReadonlyArray<ResolversTypes['nfts']>, ParentType, ContextType, Partial<QueryNftsArgs>>
	nfts_aggregate?: Resolver<
		ResolversTypes['nfts_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryNfts_AggregateArgs>
	>
	nfts_by_pk?: Resolver<
		Maybe<ResolversTypes['nfts']>,
		ParentType,
		ContextType,
		RequireFields<QueryNfts_By_PkArgs, 'id'>
	>
	nfts_reactions_stats?: Resolver<
		ReadonlyArray<ResolversTypes['nfts_reactions_stats']>,
		ParentType,
		ContextType,
		Partial<QueryNfts_Reactions_StatsArgs>
	>
	nfts_reactions_stats_aggregate?: Resolver<
		ResolversTypes['nfts_reactions_stats_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryNfts_Reactions_Stats_AggregateArgs>
	>
	nfts_stats?: Resolver<
		ReadonlyArray<ResolversTypes['nfts_stats']>,
		ParentType,
		ContextType,
		Partial<QueryNfts_StatsArgs>
	>
	nfts_stats_aggregate?: Resolver<
		ResolversTypes['nfts_stats_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryNfts_Stats_AggregateArgs>
	>
	parts?: Resolver<ReadonlyArray<ResolversTypes['parts']>, ParentType, ContextType, Partial<QueryPartsArgs>>
	parts_aggregate?: Resolver<
		ResolversTypes['parts_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryParts_AggregateArgs>
	>
	parts_by_pk?: Resolver<
		Maybe<ResolversTypes['parts']>,
		ParentType,
		ContextType,
		RequireFields<QueryParts_By_PkArgs, 'id'>
	>
	reactions?: Resolver<
		ReadonlyArray<ResolversTypes['reactions']>,
		ParentType,
		ContextType,
		Partial<QueryReactionsArgs>
	>
	reactions_aggregate?: Resolver<
		ResolversTypes['reactions_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryReactions_AggregateArgs>
	>
	reactions_by_pk?: Resolver<
		Maybe<ResolversTypes['reactions']>,
		ParentType,
		ContextType,
		RequireFields<QueryReactions_By_PkArgs, 'nft_id' | 'owner' | 'unicode'>
	>
	reactions_unicode?: Resolver<
		ReadonlyArray<ResolversTypes['reactions_unicode']>,
		ParentType,
		ContextType,
		Partial<QueryReactions_UnicodeArgs>
	>
	reactions_unicode_aggregate?: Resolver<
		ResolversTypes['reactions_unicode_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryReactions_Unicode_AggregateArgs>
	>
	reactions_users?: Resolver<
		ReadonlyArray<ResolversTypes['reactions_users']>,
		ParentType,
		ContextType,
		Partial<QueryReactions_UsersArgs>
	>
	reactions_users_aggregate?: Resolver<
		ResolversTypes['reactions_users_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryReactions_Users_AggregateArgs>
	>
	recently_listed?: Resolver<
		ReadonlyArray<ResolversTypes['recently_listed']>,
		ParentType,
		ContextType,
		Partial<QueryRecently_ListedArgs>
	>
	recently_listed_aggregate?: Resolver<
		ResolversTypes['recently_listed_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryRecently_Listed_AggregateArgs>
	>
	resources?: Resolver<
		ReadonlyArray<ResolversTypes['resources']>,
		ParentType,
		ContextType,
		Partial<QueryResourcesArgs>
	>
	resources_aggregate?: Resolver<
		ResolversTypes['resources_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryResources_AggregateArgs>
	>
	resources_base_themes?: Resolver<
		ReadonlyArray<ResolversTypes['resources_base_themes']>,
		ParentType,
		ContextType,
		Partial<QueryResources_Base_ThemesArgs>
	>
	resources_base_themes_by_pk?: Resolver<
		Maybe<ResolversTypes['resources_base_themes']>,
		ParentType,
		ContextType,
		RequireFields<QueryResources_Base_Themes_By_PkArgs, 'resource_id' | 'theme_id'>
	>
	resources_by_pk?: Resolver<
		Maybe<ResolversTypes['resources']>,
		ParentType,
		ContextType,
		RequireFields<QueryResources_By_PkArgs, 'id'>
	>
	resources_parts?: Resolver<
		ReadonlyArray<ResolversTypes['resources_parts']>,
		ParentType,
		ContextType,
		Partial<QueryResources_PartsArgs>
	>
	resources_parts_aggregate?: Resolver<
		ResolversTypes['resources_parts_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryResources_Parts_AggregateArgs>
	>
	resources_parts_by_pk?: Resolver<
		Maybe<ResolversTypes['resources_parts']>,
		ParentType,
		ContextType,
		RequireFields<QueryResources_Parts_By_PkArgs, 'part_id' | 'resource_id'>
	>
	sales?: Resolver<ReadonlyArray<ResolversTypes['sales']>, ParentType, ContextType, Partial<QuerySalesArgs>>
	singular_blacklisted_accounts?: Resolver<
		ReadonlyArray<ResolversTypes['singular_blacklisted_accounts']>,
		ParentType,
		ContextType,
		Partial<QuerySingular_Blacklisted_AccountsArgs>
	>
	singular_blacklisted_accounts_by_pk?: Resolver<
		Maybe<ResolversTypes['singular_blacklisted_accounts']>,
		ParentType,
		ContextType,
		RequireFields<QuerySingular_Blacklisted_Accounts_By_PkArgs, 'account'>
	>
	singular_blacklisted_collections?: Resolver<
		ReadonlyArray<ResolversTypes['singular_blacklisted_collections']>,
		ParentType,
		ContextType,
		Partial<QuerySingular_Blacklisted_CollectionsArgs>
	>
	singular_blacklisted_collections_by_pk?: Resolver<
		Maybe<ResolversTypes['singular_blacklisted_collections']>,
		ParentType,
		ContextType,
		RequireFields<QuerySingular_Blacklisted_Collections_By_PkArgs, 'collection_id'>
	>
	singular_curated?: Resolver<
		ReadonlyArray<ResolversTypes['singular_curated']>,
		ParentType,
		ContextType,
		Partial<QuerySingular_CuratedArgs>
	>
	singular_curated_aggregate?: Resolver<
		ResolversTypes['singular_curated_aggregate'],
		ParentType,
		ContextType,
		Partial<QuerySingular_Curated_AggregateArgs>
	>
	singular_curated_by_pk?: Resolver<
		Maybe<ResolversTypes['singular_curated']>,
		ParentType,
		ContextType,
		RequireFields<QuerySingular_Curated_By_PkArgs, 'nft_id'>
	>
	singular_curated_collections?: Resolver<
		ReadonlyArray<ResolversTypes['singular_curated_collections']>,
		ParentType,
		ContextType,
		Partial<QuerySingular_Curated_CollectionsArgs>
	>
	singular_curated_collections_aggregate?: Resolver<
		ResolversTypes['singular_curated_collections_aggregate'],
		ParentType,
		ContextType,
		Partial<QuerySingular_Curated_Collections_AggregateArgs>
	>
	singular_curated_collections_by_pk?: Resolver<
		Maybe<ResolversTypes['singular_curated_collections']>,
		ParentType,
		ContextType,
		RequireFields<QuerySingular_Curated_Collections_By_PkArgs, 'collection_id'>
	>
	singular_nsfw_collections?: Resolver<
		ReadonlyArray<ResolversTypes['singular_nsfw_collections']>,
		ParentType,
		ContextType,
		Partial<QuerySingular_Nsfw_CollectionsArgs>
	>
	singular_nsfw_collections_aggregate?: Resolver<
		ResolversTypes['singular_nsfw_collections_aggregate'],
		ParentType,
		ContextType,
		Partial<QuerySingular_Nsfw_Collections_AggregateArgs>
	>
	singular_nsfw_collections_by_pk?: Resolver<
		Maybe<ResolversTypes['singular_nsfw_collections']>,
		ParentType,
		ContextType,
		RequireFields<QuerySingular_Nsfw_Collections_By_PkArgs, 'collection_id'>
	>
	singular_nsfw_nfts?: Resolver<
		ReadonlyArray<ResolversTypes['singular_nsfw_nfts']>,
		ParentType,
		ContextType,
		Partial<QuerySingular_Nsfw_NftsArgs>
	>
	singular_nsfw_nfts_aggregate?: Resolver<
		ResolversTypes['singular_nsfw_nfts_aggregate'],
		ParentType,
		ContextType,
		Partial<QuerySingular_Nsfw_Nfts_AggregateArgs>
	>
	singular_nsfw_nfts_by_pk?: Resolver<
		Maybe<ResolversTypes['singular_nsfw_nfts']>,
		ParentType,
		ContextType,
		RequireFields<QuerySingular_Nsfw_Nfts_By_PkArgs, 'nft_id'>
	>
	singular_verified_collections?: Resolver<
		ReadonlyArray<ResolversTypes['singular_verified_collections']>,
		ParentType,
		ContextType,
		Partial<QuerySingular_Verified_CollectionsArgs>
	>
	singular_verified_collections_aggregate?: Resolver<
		ResolversTypes['singular_verified_collections_aggregate'],
		ParentType,
		ContextType,
		Partial<QuerySingular_Verified_Collections_AggregateArgs>
	>
	singular_verified_collections_by_pk?: Resolver<
		Maybe<ResolversTypes['singular_verified_collections']>,
		ParentType,
		ContextType,
		RequireFields<QuerySingular_Verified_Collections_By_PkArgs, 'collection_id'>
	>
	system?: Resolver<ReadonlyArray<ResolversTypes['system']>, ParentType, ContextType, Partial<QuerySystemArgs>>
	system_by_pk?: Resolver<
		Maybe<ResolversTypes['system']>,
		ParentType,
		ContextType,
		RequireFields<QuerySystem_By_PkArgs, 'purchaseEnabled'>
	>
	version?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	yuletide_item_track?: Resolver<
		ReadonlyArray<ResolversTypes['yuletide_item_track']>,
		ParentType,
		ContextType,
		Partial<QueryYuletide_Item_TrackArgs>
	>
	yuletide_item_track_aggregate?: Resolver<
		ResolversTypes['yuletide_item_track_aggregate'],
		ParentType,
		ContextType,
		Partial<QueryYuletide_Item_Track_AggregateArgs>
	>
	yuletide_item_track_by_pk?: Resolver<
		Maybe<ResolversTypes['yuletide_item_track']>,
		ParentType,
		ContextType,
		RequireFields<QueryYuletide_Item_Track_By_PkArgs, 'id'>
	>
}>

export type SubscriptionResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = ResolversObject<{
	base_themes?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['base_themes']>,
		'base_themes',
		ParentType,
		ContextType,
		Partial<SubscriptionBase_ThemesArgs>
	>
	base_themes_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['base_themes']>,
		'base_themes_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionBase_Themes_By_PkArgs, 'id'>
	>
	bases?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['bases']>,
		'bases',
		ParentType,
		ContextType,
		Partial<SubscriptionBasesArgs>
	>
	bases_aggregate?: SubscriptionResolver<
		ResolversTypes['bases_aggregate'],
		'bases_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionBases_AggregateArgs>
	>
	bases_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['bases']>,
		'bases_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionBases_By_PkArgs, 'id'>
	>
	changes?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['changes']>,
		'changes',
		ParentType,
		ContextType,
		Partial<SubscriptionChangesArgs>
	>
	changes_aggregate?: SubscriptionResolver<
		ResolversTypes['changes_aggregate'],
		'changes_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionChanges_AggregateArgs>
	>
	changes_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['changes']>,
		'changes_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionChanges_By_PkArgs, 'id'>
	>
	changes_collection?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['changes_collection']>,
		'changes_collection',
		ParentType,
		ContextType,
		Partial<SubscriptionChanges_CollectionArgs>
	>
	changes_collection_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['changes_collection']>,
		'changes_collection_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionChanges_Collection_By_PkArgs, 'id'>
	>
	collection_banners?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['collection_banners']>,
		'collection_banners',
		ParentType,
		ContextType,
		Partial<SubscriptionCollection_BannersArgs>
	>
	collection_banners_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['collection_banners']>,
		'collection_banners_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionCollection_Banners_By_PkArgs, 'collection_id'>
	>
	collections?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['collections']>,
		'collections',
		ParentType,
		ContextType,
		Partial<SubscriptionCollectionsArgs>
	>
	collections_aggregate?: SubscriptionResolver<
		ResolversTypes['collections_aggregate'],
		'collections_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionCollections_AggregateArgs>
	>
	collections_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['collections']>,
		'collections_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionCollections_By_PkArgs, 'id'>
	>
	distinct_kanaria_nfts?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['distinct_kanaria_nfts']>,
		'distinct_kanaria_nfts',
		ParentType,
		ContextType,
		Partial<SubscriptionDistinct_Kanaria_NftsArgs>
	>
	distinct_kanaria_nfts_aggregate?: SubscriptionResolver<
		ResolversTypes['distinct_kanaria_nfts_aggregate'],
		'distinct_kanaria_nfts_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionDistinct_Kanaria_Nfts_AggregateArgs>
	>
	distinct_nfts?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['distinct_nfts']>,
		'distinct_nfts',
		ParentType,
		ContextType,
		Partial<SubscriptionDistinct_NftsArgs>
	>
	distinct_nfts_aggregate?: SubscriptionResolver<
		ResolversTypes['distinct_nfts_aggregate'],
		'distinct_nfts_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionDistinct_Nfts_AggregateArgs>
	>
	dutchie?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['dutchie']>,
		'dutchie',
		ParentType,
		ContextType,
		Partial<SubscriptionDutchieArgs>
	>
	dutchie_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['dutchie']>,
		'dutchie_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionDutchie_By_PkArgs, 'id'>
	>
	gems_enabled?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['gems_enabled']>,
		'gems_enabled',
		ParentType,
		ContextType,
		Partial<SubscriptionGems_EnabledArgs>
	>
	gems_enabled_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['gems_enabled']>,
		'gems_enabled_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionGems_Enabled_By_PkArgs, 'id'>
	>
	get_by_unicode?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['reactions']>,
		'get_by_unicode',
		ParentType,
		ContextType,
		RequireFields<SubscriptionGet_By_UnicodeArgs, 'args'>
	>
	get_by_unicode_aggregate?: SubscriptionResolver<
		ResolversTypes['reactions_aggregate'],
		'get_by_unicode_aggregate',
		ParentType,
		ContextType,
		RequireFields<SubscriptionGet_By_Unicode_AggregateArgs, 'args'>
	>
	get_newly_listed?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['nfts']>,
		'get_newly_listed',
		ParentType,
		ContextType,
		Partial<SubscriptionGet_Newly_ListedArgs>
	>
	get_newly_listed_aggregate?: SubscriptionResolver<
		ResolversTypes['nfts_aggregate'],
		'get_newly_listed_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionGet_Newly_Listed_AggregateArgs>
	>
	get_newly_minted?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['nfts']>,
		'get_newly_minted',
		ParentType,
		ContextType,
		Partial<SubscriptionGet_Newly_MintedArgs>
	>
	get_newly_minted_aggregate?: SubscriptionResolver<
		ResolversTypes['nfts_aggregate'],
		'get_newly_minted_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionGet_Newly_Minted_AggregateArgs>
	>
	get_ordered_changes_stats?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['changes']>,
		'get_ordered_changes_stats',
		ParentType,
		ContextType,
		RequireFields<SubscriptionGet_Ordered_Changes_StatsArgs, 'args'>
	>
	get_ordered_changes_stats_aggregate?: SubscriptionResolver<
		ResolversTypes['changes_aggregate'],
		'get_ordered_changes_stats_aggregate',
		ParentType,
		ContextType,
		RequireFields<SubscriptionGet_Ordered_Changes_Stats_AggregateArgs, 'args'>
	>
	hatched_birds?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['hatched_birds']>,
		'hatched_birds',
		ParentType,
		ContextType,
		Partial<SubscriptionHatched_BirdsArgs>
	>
	hatched_birds_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['hatched_birds']>,
		'hatched_birds_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionHatched_Birds_By_PkArgs, 'id'>
	>
	nfts?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['nfts']>,
		'nfts',
		ParentType,
		ContextType,
		Partial<SubscriptionNftsArgs>
	>
	nfts_aggregate?: SubscriptionResolver<
		ResolversTypes['nfts_aggregate'],
		'nfts_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionNfts_AggregateArgs>
	>
	nfts_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['nfts']>,
		'nfts_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionNfts_By_PkArgs, 'id'>
	>
	nfts_reactions_stats?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['nfts_reactions_stats']>,
		'nfts_reactions_stats',
		ParentType,
		ContextType,
		Partial<SubscriptionNfts_Reactions_StatsArgs>
	>
	nfts_reactions_stats_aggregate?: SubscriptionResolver<
		ResolversTypes['nfts_reactions_stats_aggregate'],
		'nfts_reactions_stats_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionNfts_Reactions_Stats_AggregateArgs>
	>
	nfts_stats?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['nfts_stats']>,
		'nfts_stats',
		ParentType,
		ContextType,
		Partial<SubscriptionNfts_StatsArgs>
	>
	nfts_stats_aggregate?: SubscriptionResolver<
		ResolversTypes['nfts_stats_aggregate'],
		'nfts_stats_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionNfts_Stats_AggregateArgs>
	>
	parts?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['parts']>,
		'parts',
		ParentType,
		ContextType,
		Partial<SubscriptionPartsArgs>
	>
	parts_aggregate?: SubscriptionResolver<
		ResolversTypes['parts_aggregate'],
		'parts_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionParts_AggregateArgs>
	>
	parts_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['parts']>,
		'parts_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionParts_By_PkArgs, 'id'>
	>
	reactions?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['reactions']>,
		'reactions',
		ParentType,
		ContextType,
		Partial<SubscriptionReactionsArgs>
	>
	reactions_aggregate?: SubscriptionResolver<
		ResolversTypes['reactions_aggregate'],
		'reactions_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionReactions_AggregateArgs>
	>
	reactions_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['reactions']>,
		'reactions_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionReactions_By_PkArgs, 'nft_id' | 'owner' | 'unicode'>
	>
	reactions_unicode?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['reactions_unicode']>,
		'reactions_unicode',
		ParentType,
		ContextType,
		Partial<SubscriptionReactions_UnicodeArgs>
	>
	reactions_unicode_aggregate?: SubscriptionResolver<
		ResolversTypes['reactions_unicode_aggregate'],
		'reactions_unicode_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionReactions_Unicode_AggregateArgs>
	>
	reactions_users?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['reactions_users']>,
		'reactions_users',
		ParentType,
		ContextType,
		Partial<SubscriptionReactions_UsersArgs>
	>
	reactions_users_aggregate?: SubscriptionResolver<
		ResolversTypes['reactions_users_aggregate'],
		'reactions_users_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionReactions_Users_AggregateArgs>
	>
	recently_listed?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['recently_listed']>,
		'recently_listed',
		ParentType,
		ContextType,
		Partial<SubscriptionRecently_ListedArgs>
	>
	recently_listed_aggregate?: SubscriptionResolver<
		ResolversTypes['recently_listed_aggregate'],
		'recently_listed_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionRecently_Listed_AggregateArgs>
	>
	resources?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['resources']>,
		'resources',
		ParentType,
		ContextType,
		Partial<SubscriptionResourcesArgs>
	>
	resources_aggregate?: SubscriptionResolver<
		ResolversTypes['resources_aggregate'],
		'resources_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionResources_AggregateArgs>
	>
	resources_base_themes?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['resources_base_themes']>,
		'resources_base_themes',
		ParentType,
		ContextType,
		Partial<SubscriptionResources_Base_ThemesArgs>
	>
	resources_base_themes_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['resources_base_themes']>,
		'resources_base_themes_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionResources_Base_Themes_By_PkArgs, 'resource_id' | 'theme_id'>
	>
	resources_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['resources']>,
		'resources_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionResources_By_PkArgs, 'id'>
	>
	resources_parts?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['resources_parts']>,
		'resources_parts',
		ParentType,
		ContextType,
		Partial<SubscriptionResources_PartsArgs>
	>
	resources_parts_aggregate?: SubscriptionResolver<
		ResolversTypes['resources_parts_aggregate'],
		'resources_parts_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionResources_Parts_AggregateArgs>
	>
	resources_parts_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['resources_parts']>,
		'resources_parts_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionResources_Parts_By_PkArgs, 'part_id' | 'resource_id'>
	>
	sales?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['sales']>,
		'sales',
		ParentType,
		ContextType,
		Partial<SubscriptionSalesArgs>
	>
	singular_blacklisted_accounts?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['singular_blacklisted_accounts']>,
		'singular_blacklisted_accounts',
		ParentType,
		ContextType,
		Partial<SubscriptionSingular_Blacklisted_AccountsArgs>
	>
	singular_blacklisted_accounts_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['singular_blacklisted_accounts']>,
		'singular_blacklisted_accounts_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionSingular_Blacklisted_Accounts_By_PkArgs, 'account'>
	>
	singular_blacklisted_collections?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['singular_blacklisted_collections']>,
		'singular_blacklisted_collections',
		ParentType,
		ContextType,
		Partial<SubscriptionSingular_Blacklisted_CollectionsArgs>
	>
	singular_blacklisted_collections_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['singular_blacklisted_collections']>,
		'singular_blacklisted_collections_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionSingular_Blacklisted_Collections_By_PkArgs, 'collection_id'>
	>
	singular_curated?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['singular_curated']>,
		'singular_curated',
		ParentType,
		ContextType,
		Partial<SubscriptionSingular_CuratedArgs>
	>
	singular_curated_aggregate?: SubscriptionResolver<
		ResolversTypes['singular_curated_aggregate'],
		'singular_curated_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionSingular_Curated_AggregateArgs>
	>
	singular_curated_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['singular_curated']>,
		'singular_curated_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionSingular_Curated_By_PkArgs, 'nft_id'>
	>
	singular_curated_collections?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['singular_curated_collections']>,
		'singular_curated_collections',
		ParentType,
		ContextType,
		Partial<SubscriptionSingular_Curated_CollectionsArgs>
	>
	singular_curated_collections_aggregate?: SubscriptionResolver<
		ResolversTypes['singular_curated_collections_aggregate'],
		'singular_curated_collections_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionSingular_Curated_Collections_AggregateArgs>
	>
	singular_curated_collections_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['singular_curated_collections']>,
		'singular_curated_collections_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionSingular_Curated_Collections_By_PkArgs, 'collection_id'>
	>
	singular_nsfw_collections?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['singular_nsfw_collections']>,
		'singular_nsfw_collections',
		ParentType,
		ContextType,
		Partial<SubscriptionSingular_Nsfw_CollectionsArgs>
	>
	singular_nsfw_collections_aggregate?: SubscriptionResolver<
		ResolversTypes['singular_nsfw_collections_aggregate'],
		'singular_nsfw_collections_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionSingular_Nsfw_Collections_AggregateArgs>
	>
	singular_nsfw_collections_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['singular_nsfw_collections']>,
		'singular_nsfw_collections_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionSingular_Nsfw_Collections_By_PkArgs, 'collection_id'>
	>
	singular_nsfw_nfts?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['singular_nsfw_nfts']>,
		'singular_nsfw_nfts',
		ParentType,
		ContextType,
		Partial<SubscriptionSingular_Nsfw_NftsArgs>
	>
	singular_nsfw_nfts_aggregate?: SubscriptionResolver<
		ResolversTypes['singular_nsfw_nfts_aggregate'],
		'singular_nsfw_nfts_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionSingular_Nsfw_Nfts_AggregateArgs>
	>
	singular_nsfw_nfts_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['singular_nsfw_nfts']>,
		'singular_nsfw_nfts_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionSingular_Nsfw_Nfts_By_PkArgs, 'nft_id'>
	>
	singular_verified_collections?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['singular_verified_collections']>,
		'singular_verified_collections',
		ParentType,
		ContextType,
		Partial<SubscriptionSingular_Verified_CollectionsArgs>
	>
	singular_verified_collections_aggregate?: SubscriptionResolver<
		ResolversTypes['singular_verified_collections_aggregate'],
		'singular_verified_collections_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionSingular_Verified_Collections_AggregateArgs>
	>
	singular_verified_collections_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['singular_verified_collections']>,
		'singular_verified_collections_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionSingular_Verified_Collections_By_PkArgs, 'collection_id'>
	>
	system?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['system']>,
		'system',
		ParentType,
		ContextType,
		Partial<SubscriptionSystemArgs>
	>
	system_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['system']>,
		'system_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionSystem_By_PkArgs, 'purchaseEnabled'>
	>
	yuletide_item_track?: SubscriptionResolver<
		ReadonlyArray<ResolversTypes['yuletide_item_track']>,
		'yuletide_item_track',
		ParentType,
		ContextType,
		Partial<SubscriptionYuletide_Item_TrackArgs>
	>
	yuletide_item_track_aggregate?: SubscriptionResolver<
		ResolversTypes['yuletide_item_track_aggregate'],
		'yuletide_item_track_aggregate',
		ParentType,
		ContextType,
		Partial<SubscriptionYuletide_Item_Track_AggregateArgs>
	>
	yuletide_item_track_by_pk?: SubscriptionResolver<
		Maybe<ResolversTypes['yuletide_item_track']>,
		'yuletide_item_track_by_pk',
		ParentType,
		ContextType,
		RequireFields<SubscriptionYuletide_Item_Track_By_PkArgs, 'id'>
	>
}>

export type Base_ThemesResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['base_themes'] = ResolversParentTypes['base_themes'],
> = ResolversObject<{
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	resources_base_themes?: Resolver<
		ReadonlyArray<ResolversTypes['resources_base_themes']>,
		ParentType,
		ContextType,
		Partial<Base_ThemesResources_Base_ThemesArgs>
	>
	theme_color_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	theme_color_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	theme_color_3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	theme_color_4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type BasesResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['bases'] = ResolversParentTypes['bases'],
> = ResolversObject<{
	block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	changes?: Resolver<ReadonlyArray<ResolversTypes['changes']>, ParentType, ContextType, Partial<BasesChangesArgs>>
	changes_aggregate?: Resolver<
		ResolversTypes['changes_aggregate'],
		ParentType,
		ContextType,
		Partial<BasesChanges_AggregateArgs>
	>
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	issuer?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	parts?: Resolver<ReadonlyArray<ResolversTypes['parts']>, ParentType, ContextType, Partial<BasesPartsArgs>>
	parts_aggregate?: Resolver<
		ResolversTypes['parts_aggregate'],
		ParentType,
		ContextType,
		Partial<BasesParts_AggregateArgs>
	>
	symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	type?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Bases_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['bases_aggregate'] = ResolversParentTypes['bases_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['bases_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['bases']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Bases_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['bases_aggregate_fields'] = ResolversParentTypes['bases_aggregate_fields'],
> = ResolversObject<{
	avg?: Resolver<Maybe<ResolversTypes['bases_avg_fields']>, ParentType, ContextType>
	count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Bases_Aggregate_FieldsCountArgs>>
	max?: Resolver<Maybe<ResolversTypes['bases_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['bases_min_fields']>, ParentType, ContextType>
	stddev?: Resolver<Maybe<ResolversTypes['bases_stddev_fields']>, ParentType, ContextType>
	stddev_pop?: Resolver<Maybe<ResolversTypes['bases_stddev_pop_fields']>, ParentType, ContextType>
	stddev_samp?: Resolver<Maybe<ResolversTypes['bases_stddev_samp_fields']>, ParentType, ContextType>
	sum?: Resolver<Maybe<ResolversTypes['bases_sum_fields']>, ParentType, ContextType>
	var_pop?: Resolver<Maybe<ResolversTypes['bases_var_pop_fields']>, ParentType, ContextType>
	var_samp?: Resolver<Maybe<ResolversTypes['bases_var_samp_fields']>, ParentType, ContextType>
	variance?: Resolver<Maybe<ResolversTypes['bases_variance_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Bases_Avg_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['bases_avg_fields'] = ResolversParentTypes['bases_avg_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Bases_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['bases_max_fields'] = ResolversParentTypes['bases_max_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	issuer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Bases_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['bases_min_fields'] = ResolversParentTypes['bases_min_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	issuer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Bases_Stddev_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['bases_stddev_fields'] = ResolversParentTypes['bases_stddev_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Bases_Stddev_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['bases_stddev_pop_fields'] = ResolversParentTypes['bases_stddev_pop_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Bases_Stddev_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['bases_stddev_samp_fields'] = ResolversParentTypes['bases_stddev_samp_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Bases_Sum_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['bases_sum_fields'] = ResolversParentTypes['bases_sum_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Bases_Var_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['bases_var_pop_fields'] = ResolversParentTypes['bases_var_pop_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Bases_Var_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['bases_var_samp_fields'] = ResolversParentTypes['bases_var_samp_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Bases_Variance_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['bases_variance_fields'] = ResolversParentTypes['bases_variance_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface BigintScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['bigint'], any> {
	name: 'bigint'
}

export type ChangesResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['changes'] = ResolversParentTypes['changes'],
> = ResolversObject<{
	block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>
	extraTransfers?: Resolver<
		Maybe<ResolversTypes['jsonb']>,
		ParentType,
		ContextType,
		Partial<ChangesExtraTransfersArgs>
	>
	field?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	new?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	nft?: Resolver<Maybe<ResolversTypes['nfts']>, ParentType, ContextType>
	nftclass?: Resolver<Maybe<ResolversTypes['collections']>, ParentType, ContextType>
	old?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	opType?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	ref_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Changes_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['changes_aggregate'] = ResolversParentTypes['changes_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['changes_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['changes']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Changes_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['changes_aggregate_fields'] = ResolversParentTypes['changes_aggregate_fields'],
> = ResolversObject<{
	avg?: Resolver<Maybe<ResolversTypes['changes_avg_fields']>, ParentType, ContextType>
	count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Changes_Aggregate_FieldsCountArgs>>
	max?: Resolver<Maybe<ResolversTypes['changes_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['changes_min_fields']>, ParentType, ContextType>
	stddev?: Resolver<Maybe<ResolversTypes['changes_stddev_fields']>, ParentType, ContextType>
	stddev_pop?: Resolver<Maybe<ResolversTypes['changes_stddev_pop_fields']>, ParentType, ContextType>
	stddev_samp?: Resolver<Maybe<ResolversTypes['changes_stddev_samp_fields']>, ParentType, ContextType>
	sum?: Resolver<Maybe<ResolversTypes['changes_sum_fields']>, ParentType, ContextType>
	var_pop?: Resolver<Maybe<ResolversTypes['changes_var_pop_fields']>, ParentType, ContextType>
	var_samp?: Resolver<Maybe<ResolversTypes['changes_var_samp_fields']>, ParentType, ContextType>
	variance?: Resolver<Maybe<ResolversTypes['changes_variance_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Changes_Avg_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['changes_avg_fields'] = ResolversParentTypes['changes_avg_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Changes_CollectionResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['changes_collection'] = ResolversParentTypes['changes_collection'],
> = ResolversObject<{
	block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	collection?: Resolver<Maybe<ResolversTypes['collections']>, ParentType, ContextType>
	created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>
	field?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	new?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	old?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	opType?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	ref_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Changes_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['changes_max_fields'] = ResolversParentTypes['changes_max_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	caller?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	new?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	old?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	opType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	ref_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Changes_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['changes_min_fields'] = ResolversParentTypes['changes_min_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	caller?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	new?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	old?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	opType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	ref_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Changes_Stddev_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['changes_stddev_fields'] = ResolversParentTypes['changes_stddev_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Changes_Stddev_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['changes_stddev_pop_fields'] = ResolversParentTypes['changes_stddev_pop_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Changes_Stddev_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['changes_stddev_samp_fields'] = ResolversParentTypes['changes_stddev_samp_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Changes_Sum_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['changes_sum_fields'] = ResolversParentTypes['changes_sum_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Changes_Var_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['changes_var_pop_fields'] = ResolversParentTypes['changes_var_pop_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Changes_Var_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['changes_var_samp_fields'] = ResolversParentTypes['changes_var_samp_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Changes_Variance_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['changes_variance_fields'] = ResolversParentTypes['changes_variance_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Collection_BannersResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['collection_banners'] = ResolversParentTypes['collection_banners'],
> = ResolversObject<{
	collection?: Resolver<Maybe<ResolversTypes['collections']>, ParentType, ContextType>
	collection_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>
	image?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CollectionsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['collections'] = ResolversParentTypes['collections'],
> = ResolversObject<{
	banners?: Resolver<Maybe<ResolversTypes['collection_banners']>, ParentType, ContextType>
	block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	changes_collection?: Resolver<
		ReadonlyArray<ResolversTypes['changes_collection']>,
		ParentType,
		ContextType,
		Partial<CollectionsChanges_CollectionArgs>
	>
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	issuer?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	max?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	metadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	metadata_content_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	nfts?: Resolver<ReadonlyArray<ResolversTypes['nfts']>, ParentType, ContextType, Partial<CollectionsNftsArgs>>
	nfts_aggregate?: Resolver<
		ResolversTypes['nfts_aggregate'],
		ParentType,
		ContextType,
		Partial<CollectionsNfts_AggregateArgs>
	>
	nfts_stats?: Resolver<Maybe<ResolversTypes['nfts_stats']>, ParentType, ContextType>
	singular_blacklisted_accounts?: Resolver<
		ReadonlyArray<ResolversTypes['singular_blacklisted_accounts']>,
		ParentType,
		ContextType,
		Partial<CollectionsSingular_Blacklisted_AccountsArgs>
	>
	singular_blacklisted_collections?: Resolver<
		ReadonlyArray<ResolversTypes['singular_blacklisted_collections']>,
		ParentType,
		ContextType,
		Partial<CollectionsSingular_Blacklisted_CollectionsArgs>
	>
	singular_curated?: Resolver<
		ReadonlyArray<ResolversTypes['singular_curated_collections']>,
		ParentType,
		ContextType,
		Partial<CollectionsSingular_CuratedArgs>
	>
	singular_curated_aggregate?: Resolver<
		ResolversTypes['singular_curated_collections_aggregate'],
		ParentType,
		ContextType,
		Partial<CollectionsSingular_Curated_AggregateArgs>
	>
	singular_hidden_collections?: Resolver<
		ReadonlyArray<ResolversTypes['singular_nsfw_collections']>,
		ParentType,
		ContextType,
		Partial<CollectionsSingular_Hidden_CollectionsArgs>
	>
	singular_hidden_collections_aggregate?: Resolver<
		ResolversTypes['singular_nsfw_collections_aggregate'],
		ParentType,
		ContextType,
		Partial<CollectionsSingular_Hidden_Collections_AggregateArgs>
	>
	singular_nsfw_collections?: Resolver<
		ReadonlyArray<ResolversTypes['singular_nsfw_collections']>,
		ParentType,
		ContextType,
		Partial<CollectionsSingular_Nsfw_CollectionsArgs>
	>
	singular_nsfw_collections_aggregate?: Resolver<
		ResolversTypes['singular_nsfw_collections_aggregate'],
		ParentType,
		ContextType,
		Partial<CollectionsSingular_Nsfw_Collections_AggregateArgs>
	>
	singular_verified_collections?: Resolver<
		ReadonlyArray<ResolversTypes['singular_verified_collections']>,
		ParentType,
		ContextType,
		Partial<CollectionsSingular_Verified_CollectionsArgs>
	>
	singular_verified_collections_aggregate?: Resolver<
		ResolversTypes['singular_verified_collections_aggregate'],
		ParentType,
		ContextType,
		Partial<CollectionsSingular_Verified_Collections_AggregateArgs>
	>
	symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Collections_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['collections_aggregate'] = ResolversParentTypes['collections_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['collections_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['collections']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Collections_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['collections_aggregate_fields'] = ResolversParentTypes['collections_aggregate_fields'],
> = ResolversObject<{
	avg?: Resolver<Maybe<ResolversTypes['collections_avg_fields']>, ParentType, ContextType>
	count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Collections_Aggregate_FieldsCountArgs>>
	max?: Resolver<Maybe<ResolversTypes['collections_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['collections_min_fields']>, ParentType, ContextType>
	stddev?: Resolver<Maybe<ResolversTypes['collections_stddev_fields']>, ParentType, ContextType>
	stddev_pop?: Resolver<Maybe<ResolversTypes['collections_stddev_pop_fields']>, ParentType, ContextType>
	stddev_samp?: Resolver<Maybe<ResolversTypes['collections_stddev_samp_fields']>, ParentType, ContextType>
	sum?: Resolver<Maybe<ResolversTypes['collections_sum_fields']>, ParentType, ContextType>
	var_pop?: Resolver<Maybe<ResolversTypes['collections_var_pop_fields']>, ParentType, ContextType>
	var_samp?: Resolver<Maybe<ResolversTypes['collections_var_samp_fields']>, ParentType, ContextType>
	variance?: Resolver<Maybe<ResolversTypes['collections_variance_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Collections_Avg_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['collections_avg_fields'] = ResolversParentTypes['collections_avg_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Collections_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['collections_max_fields'] = ResolversParentTypes['collections_max_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	issuer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_content_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Collections_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['collections_min_fields'] = ResolversParentTypes['collections_min_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	issuer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_content_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Collections_Stddev_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['collections_stddev_fields'] = ResolversParentTypes['collections_stddev_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Collections_Stddev_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['collections_stddev_pop_fields'] = ResolversParentTypes['collections_stddev_pop_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Collections_Stddev_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['collections_stddev_samp_fields'] = ResolversParentTypes['collections_stddev_samp_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Collections_Sum_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['collections_sum_fields'] = ResolversParentTypes['collections_sum_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Collections_Var_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['collections_var_pop_fields'] = ResolversParentTypes['collections_var_pop_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Collections_Var_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['collections_var_samp_fields'] = ResolversParentTypes['collections_var_samp_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Collections_Variance_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['collections_variance_fields'] = ResolversParentTypes['collections_variance_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Kanaria_NftsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_kanaria_nfts'] = ResolversParentTypes['distinct_kanaria_nfts'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	burned?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	children?: Resolver<
		ReadonlyArray<ResolversTypes['nfts']>,
		ParentType,
		ContextType,
		Partial<Distinct_Kanaria_NftsChildrenArgs>
	>
	children_aggregate?: Resolver<
		ResolversTypes['nfts_aggregate'],
		ParentType,
		ContextType,
		Partial<Distinct_Kanaria_NftsChildren_AggregateArgs>
	>
	collection?: Resolver<Maybe<ResolversTypes['collections']>, ParentType, ContextType>
	collectionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	equipped_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	pending?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	priority?: Resolver<
		Maybe<ResolversTypes['jsonb']>,
		ParentType,
		ContextType,
		Partial<Distinct_Kanaria_NftsPriorityArgs>
	>
	properties?: Resolver<
		Maybe<ResolversTypes['jsonb']>,
		ParentType,
		ContextType,
		Partial<Distinct_Kanaria_NftsPropertiesArgs>
	>
	resources?: Resolver<
		ReadonlyArray<ResolversTypes['resources']>,
		ParentType,
		ContextType,
		Partial<Distinct_Kanaria_NftsResourcesArgs>
	>
	resources_aggregate?: Resolver<
		ResolversTypes['resources_aggregate'],
		ParentType,
		ContextType,
		Partial<Distinct_Kanaria_NftsResources_AggregateArgs>
	>
	rootowner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	sn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	tx_caller?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	tx_pending?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Kanaria_Nfts_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_kanaria_nfts_aggregate'] = ResolversParentTypes['distinct_kanaria_nfts_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['distinct_kanaria_nfts_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['distinct_kanaria_nfts']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Kanaria_Nfts_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_kanaria_nfts_aggregate_fields'] = ResolversParentTypes['distinct_kanaria_nfts_aggregate_fields'],
> = ResolversObject<{
	avg?: Resolver<Maybe<ResolversTypes['distinct_kanaria_nfts_avg_fields']>, ParentType, ContextType>
	count?: Resolver<
		ResolversTypes['Int'],
		ParentType,
		ContextType,
		Partial<Distinct_Kanaria_Nfts_Aggregate_FieldsCountArgs>
	>
	max?: Resolver<Maybe<ResolversTypes['distinct_kanaria_nfts_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['distinct_kanaria_nfts_min_fields']>, ParentType, ContextType>
	stddev?: Resolver<Maybe<ResolversTypes['distinct_kanaria_nfts_stddev_fields']>, ParentType, ContextType>
	stddev_pop?: Resolver<Maybe<ResolversTypes['distinct_kanaria_nfts_stddev_pop_fields']>, ParentType, ContextType>
	stddev_samp?: Resolver<Maybe<ResolversTypes['distinct_kanaria_nfts_stddev_samp_fields']>, ParentType, ContextType>
	sum?: Resolver<Maybe<ResolversTypes['distinct_kanaria_nfts_sum_fields']>, ParentType, ContextType>
	var_pop?: Resolver<Maybe<ResolversTypes['distinct_kanaria_nfts_var_pop_fields']>, ParentType, ContextType>
	var_samp?: Resolver<Maybe<ResolversTypes['distinct_kanaria_nfts_var_samp_fields']>, ParentType, ContextType>
	variance?: Resolver<Maybe<ResolversTypes['distinct_kanaria_nfts_variance_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Kanaria_Nfts_Avg_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_kanaria_nfts_avg_fields'] = ResolversParentTypes['distinct_kanaria_nfts_avg_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Kanaria_Nfts_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_kanaria_nfts_max_fields'] = ResolversParentTypes['distinct_kanaria_nfts_max_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	burned?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	collectionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	equipped_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	rootowner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	sn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	tx_caller?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Kanaria_Nfts_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_kanaria_nfts_min_fields'] = ResolversParentTypes['distinct_kanaria_nfts_min_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	burned?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	collectionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	equipped_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	rootowner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	sn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	tx_caller?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Kanaria_Nfts_Stddev_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_kanaria_nfts_stddev_fields'] = ResolversParentTypes['distinct_kanaria_nfts_stddev_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Kanaria_Nfts_Stddev_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_kanaria_nfts_stddev_pop_fields'] = ResolversParentTypes['distinct_kanaria_nfts_stddev_pop_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Kanaria_Nfts_Stddev_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_kanaria_nfts_stddev_samp_fields'] = ResolversParentTypes['distinct_kanaria_nfts_stddev_samp_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Kanaria_Nfts_Sum_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_kanaria_nfts_sum_fields'] = ResolversParentTypes['distinct_kanaria_nfts_sum_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Kanaria_Nfts_Var_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_kanaria_nfts_var_pop_fields'] = ResolversParentTypes['distinct_kanaria_nfts_var_pop_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Kanaria_Nfts_Var_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_kanaria_nfts_var_samp_fields'] = ResolversParentTypes['distinct_kanaria_nfts_var_samp_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Kanaria_Nfts_Variance_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_kanaria_nfts_variance_fields'] = ResolversParentTypes['distinct_kanaria_nfts_variance_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_NftsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_nfts'] = ResolversParentTypes['distinct_nfts'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	burned?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	children?: Resolver<
		ReadonlyArray<ResolversTypes['nfts']>,
		ParentType,
		ContextType,
		Partial<Distinct_NftsChildrenArgs>
	>
	children_aggregate?: Resolver<
		ResolversTypes['nfts_aggregate'],
		ParentType,
		ContextType,
		Partial<Distinct_NftsChildren_AggregateArgs>
	>
	collection?: Resolver<Maybe<ResolversTypes['collections']>, ParentType, ContextType>
	collectionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	dutchie?: Resolver<Maybe<ResolversTypes['dutchie']>, ParentType, ContextType>
	equipped_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_content_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	pending?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	priority?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<Distinct_NftsPriorityArgs>>
	properties?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<Distinct_NftsPropertiesArgs>>
	resources?: Resolver<
		ReadonlyArray<ResolversTypes['resources']>,
		ParentType,
		ContextType,
		Partial<Distinct_NftsResourcesArgs>
	>
	resources_aggregate?: Resolver<
		ResolversTypes['resources_aggregate'],
		ParentType,
		ContextType,
		Partial<Distinct_NftsResources_AggregateArgs>
	>
	rootowner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	singular_curated?: Resolver<
		ReadonlyArray<ResolversTypes['singular_curated']>,
		ParentType,
		ContextType,
		Partial<Distinct_NftsSingular_CuratedArgs>
	>
	singular_curated_aggregate?: Resolver<
		ResolversTypes['singular_curated_aggregate'],
		ParentType,
		ContextType,
		Partial<Distinct_NftsSingular_Curated_AggregateArgs>
	>
	singular_nsfw?: Resolver<
		ReadonlyArray<ResolversTypes['singular_nsfw_nfts']>,
		ParentType,
		ContextType,
		Partial<Distinct_NftsSingular_NsfwArgs>
	>
	singular_nsfw_aggregate?: Resolver<
		ResolversTypes['singular_nsfw_nfts_aggregate'],
		ParentType,
		ContextType,
		Partial<Distinct_NftsSingular_Nsfw_AggregateArgs>
	>
	sn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	tx_caller?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	tx_pending?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Nfts_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_nfts_aggregate'] = ResolversParentTypes['distinct_nfts_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['distinct_nfts_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['distinct_nfts']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Nfts_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_nfts_aggregate_fields'] = ResolversParentTypes['distinct_nfts_aggregate_fields'],
> = ResolversObject<{
	avg?: Resolver<Maybe<ResolversTypes['distinct_nfts_avg_fields']>, ParentType, ContextType>
	count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Distinct_Nfts_Aggregate_FieldsCountArgs>>
	max?: Resolver<Maybe<ResolversTypes['distinct_nfts_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['distinct_nfts_min_fields']>, ParentType, ContextType>
	stddev?: Resolver<Maybe<ResolversTypes['distinct_nfts_stddev_fields']>, ParentType, ContextType>
	stddev_pop?: Resolver<Maybe<ResolversTypes['distinct_nfts_stddev_pop_fields']>, ParentType, ContextType>
	stddev_samp?: Resolver<Maybe<ResolversTypes['distinct_nfts_stddev_samp_fields']>, ParentType, ContextType>
	sum?: Resolver<Maybe<ResolversTypes['distinct_nfts_sum_fields']>, ParentType, ContextType>
	var_pop?: Resolver<Maybe<ResolversTypes['distinct_nfts_var_pop_fields']>, ParentType, ContextType>
	var_samp?: Resolver<Maybe<ResolversTypes['distinct_nfts_var_samp_fields']>, ParentType, ContextType>
	variance?: Resolver<Maybe<ResolversTypes['distinct_nfts_variance_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Nfts_Avg_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_nfts_avg_fields'] = ResolversParentTypes['distinct_nfts_avg_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Nfts_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_nfts_max_fields'] = ResolversParentTypes['distinct_nfts_max_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	burned?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	collectionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	equipped_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_content_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	rootowner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	sn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	tx_caller?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Nfts_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_nfts_min_fields'] = ResolversParentTypes['distinct_nfts_min_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	burned?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	collectionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	equipped_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_content_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	rootowner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	sn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	tx_caller?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Nfts_Stddev_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_nfts_stddev_fields'] = ResolversParentTypes['distinct_nfts_stddev_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Nfts_Stddev_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_nfts_stddev_pop_fields'] = ResolversParentTypes['distinct_nfts_stddev_pop_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Nfts_Stddev_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_nfts_stddev_samp_fields'] = ResolversParentTypes['distinct_nfts_stddev_samp_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Nfts_Sum_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_nfts_sum_fields'] = ResolversParentTypes['distinct_nfts_sum_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Nfts_Var_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_nfts_var_pop_fields'] = ResolversParentTypes['distinct_nfts_var_pop_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Nfts_Var_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_nfts_var_samp_fields'] = ResolversParentTypes['distinct_nfts_var_samp_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Distinct_Nfts_Variance_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['distinct_nfts_variance_fields'] = ResolversParentTypes['distinct_nfts_variance_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	tx_block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DutchieResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['dutchie'] = ResolversParentTypes['dutchie'],
> = ResolversObject<{
	active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	current_price?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>
	id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	initial_price?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>
	interval?: Resolver<Maybe<ResolversTypes['smallint']>, ParentType, ContextType>
	min_price?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>
	nft?: Resolver<Maybe<ResolversTypes['nfts']>, ParentType, ContextType>
	nft_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	reduction?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>
	sold?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	start_time?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>
	tick?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Gems_EnabledResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['gems_enabled'] = ResolversParentTypes['gems_enabled'],
> = ResolversObject<{
	enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	nft?: Resolver<Maybe<ResolversTypes['nfts']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Hatched_BirdsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['hatched_birds'] = ResolversParentTypes['hatched_birds'],
> = ResolversObject<{
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Hatched_Birds_Mutation_ResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['hatched_birds_mutation_response'] = ResolversParentTypes['hatched_birds_mutation_response'],
> = ResolversObject<{
	affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	returning?: Resolver<ReadonlyArray<ResolversTypes['hatched_birds']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface JsonbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['jsonb'], any> {
	name: 'jsonb'
}

export type NftsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts'] = ResolversParentTypes['nfts'],
> = ResolversObject<{
	block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	burned?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	changes?: Resolver<ReadonlyArray<ResolversTypes['changes']>, ParentType, ContextType, Partial<NftsChangesArgs>>
	changes_aggregate?: Resolver<
		ResolversTypes['changes_aggregate'],
		ParentType,
		ContextType,
		Partial<NftsChanges_AggregateArgs>
	>
	children?: Resolver<ReadonlyArray<ResolversTypes['nfts']>, ParentType, ContextType, Partial<NftsChildrenArgs>>
	children_aggregate?: Resolver<
		ResolversTypes['nfts_aggregate'],
		ParentType,
		ContextType,
		Partial<NftsChildren_AggregateArgs>
	>
	collection?: Resolver<Maybe<ResolversTypes['collections']>, ParentType, ContextType>
	collectionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>
	dutchie?: Resolver<Maybe<ResolversTypes['dutchie']>, ParentType, ContextType>
	equipped?: Resolver<Maybe<ResolversTypes['parts']>, ParentType, ContextType>
	equipped_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	forsale?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>
	gem_enabled?: Resolver<Maybe<ResolversTypes['gems_enabled']>, ParentType, ContextType>
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	id_md5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_content_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_properties?: Resolver<
		Maybe<ResolversTypes['jsonb']>,
		ParentType,
		ContextType,
		Partial<NftsMetadata_PropertiesArgs>
	>
	metadata_rarity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	parent?: Resolver<Maybe<ResolversTypes['nfts']>, ParentType, ContextType>
	pending?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	priority?: Resolver<ResolversTypes['jsonb'], ParentType, ContextType, Partial<NftsPriorityArgs>>
	properties?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<NftsPropertiesArgs>>
	resources?: Resolver<
		ReadonlyArray<ResolversTypes['resources']>,
		ParentType,
		ContextType,
		Partial<NftsResourcesArgs>
	>
	resources_aggregate?: Resolver<
		ResolversTypes['resources_aggregate'],
		ParentType,
		ContextType,
		Partial<NftsResources_AggregateArgs>
	>
	rootowner?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	singular_curated?: Resolver<
		ReadonlyArray<ResolversTypes['singular_curated']>,
		ParentType,
		ContextType,
		Partial<NftsSingular_CuratedArgs>
	>
	singular_curated_aggregate?: Resolver<
		ResolversTypes['singular_curated_aggregate'],
		ParentType,
		ContextType,
		Partial<NftsSingular_Curated_AggregateArgs>
	>
	singular_nsfw?: Resolver<
		ReadonlyArray<ResolversTypes['singular_nsfw_nfts']>,
		ParentType,
		ContextType,
		Partial<NftsSingular_NsfwArgs>
	>
	singular_nsfw_aggregate?: Resolver<
		ResolversTypes['singular_nsfw_nfts_aggregate'],
		ParentType,
		ContextType,
		Partial<NftsSingular_Nsfw_AggregateArgs>
	>
	sn?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	transferable?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	txBlock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	txCaller?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	txPending?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_aggregate'] = ResolversParentTypes['nfts_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['nfts_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['nfts']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_aggregate_fields'] = ResolversParentTypes['nfts_aggregate_fields'],
> = ResolversObject<{
	avg?: Resolver<Maybe<ResolversTypes['nfts_avg_fields']>, ParentType, ContextType>
	count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Nfts_Aggregate_FieldsCountArgs>>
	max?: Resolver<Maybe<ResolversTypes['nfts_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['nfts_min_fields']>, ParentType, ContextType>
	stddev?: Resolver<Maybe<ResolversTypes['nfts_stddev_fields']>, ParentType, ContextType>
	stddev_pop?: Resolver<Maybe<ResolversTypes['nfts_stddev_pop_fields']>, ParentType, ContextType>
	stddev_samp?: Resolver<Maybe<ResolversTypes['nfts_stddev_samp_fields']>, ParentType, ContextType>
	sum?: Resolver<Maybe<ResolversTypes['nfts_sum_fields']>, ParentType, ContextType>
	var_pop?: Resolver<Maybe<ResolversTypes['nfts_var_pop_fields']>, ParentType, ContextType>
	var_samp?: Resolver<Maybe<ResolversTypes['nfts_var_samp_fields']>, ParentType, ContextType>
	variance?: Resolver<Maybe<ResolversTypes['nfts_variance_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Avg_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_avg_fields'] = ResolversParentTypes['nfts_avg_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	txBlock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_max_fields'] = ResolversParentTypes['nfts_max_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	burned?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	collectionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	equipped_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	id_md5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_content_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	rootowner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	sn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	txBlock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	txCaller?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_min_fields'] = ResolversParentTypes['nfts_min_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	burned?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	collectionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	equipped_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	id_md5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_content_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	rootowner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	sn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	txBlock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	txCaller?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Reactions_StatsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_reactions_stats'] = ResolversParentTypes['nfts_reactions_stats'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	nft_reaction_stats?: Resolver<
		ReadonlyArray<ResolversTypes['reactions']>,
		ParentType,
		ContextType,
		Partial<Nfts_Reactions_StatsNft_Reaction_StatsArgs>
	>
	nft_reaction_stats_aggregate?: Resolver<
		ResolversTypes['reactions_aggregate'],
		ParentType,
		ContextType,
		Partial<Nfts_Reactions_StatsNft_Reaction_Stats_AggregateArgs>
	>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Reactions_Stats_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_reactions_stats_aggregate'] = ResolversParentTypes['nfts_reactions_stats_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['nfts_reactions_stats_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['nfts_reactions_stats']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Reactions_Stats_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_reactions_stats_aggregate_fields'] = ResolversParentTypes['nfts_reactions_stats_aggregate_fields'],
> = ResolversObject<{
	avg?: Resolver<Maybe<ResolversTypes['nfts_reactions_stats_avg_fields']>, ParentType, ContextType>
	count?: Resolver<
		ResolversTypes['Int'],
		ParentType,
		ContextType,
		Partial<Nfts_Reactions_Stats_Aggregate_FieldsCountArgs>
	>
	max?: Resolver<Maybe<ResolversTypes['nfts_reactions_stats_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['nfts_reactions_stats_min_fields']>, ParentType, ContextType>
	stddev?: Resolver<Maybe<ResolversTypes['nfts_reactions_stats_stddev_fields']>, ParentType, ContextType>
	stddev_pop?: Resolver<Maybe<ResolversTypes['nfts_reactions_stats_stddev_pop_fields']>, ParentType, ContextType>
	stddev_samp?: Resolver<Maybe<ResolversTypes['nfts_reactions_stats_stddev_samp_fields']>, ParentType, ContextType>
	sum?: Resolver<Maybe<ResolversTypes['nfts_reactions_stats_sum_fields']>, ParentType, ContextType>
	var_pop?: Resolver<Maybe<ResolversTypes['nfts_reactions_stats_var_pop_fields']>, ParentType, ContextType>
	var_samp?: Resolver<Maybe<ResolversTypes['nfts_reactions_stats_var_samp_fields']>, ParentType, ContextType>
	variance?: Resolver<Maybe<ResolversTypes['nfts_reactions_stats_variance_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Reactions_Stats_Avg_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_reactions_stats_avg_fields'] = ResolversParentTypes['nfts_reactions_stats_avg_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Reactions_Stats_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_reactions_stats_max_fields'] = ResolversParentTypes['nfts_reactions_stats_max_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Reactions_Stats_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_reactions_stats_min_fields'] = ResolversParentTypes['nfts_reactions_stats_min_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Reactions_Stats_Stddev_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_reactions_stats_stddev_fields'] = ResolversParentTypes['nfts_reactions_stats_stddev_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Reactions_Stats_Stddev_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_reactions_stats_stddev_pop_fields'] = ResolversParentTypes['nfts_reactions_stats_stddev_pop_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Reactions_Stats_Stddev_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_reactions_stats_stddev_samp_fields'] = ResolversParentTypes['nfts_reactions_stats_stddev_samp_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Reactions_Stats_Sum_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_reactions_stats_sum_fields'] = ResolversParentTypes['nfts_reactions_stats_sum_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Reactions_Stats_Var_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_reactions_stats_var_pop_fields'] = ResolversParentTypes['nfts_reactions_stats_var_pop_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Reactions_Stats_Var_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_reactions_stats_var_samp_fields'] = ResolversParentTypes['nfts_reactions_stats_var_samp_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Reactions_Stats_Variance_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_reactions_stats_variance_fields'] = ResolversParentTypes['nfts_reactions_stats_variance_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_StatsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stats'] = ResolversParentTypes['nfts_stats'],
> = ResolversObject<{
	collection_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	count?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Stats_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stats_aggregate'] = ResolversParentTypes['nfts_stats_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['nfts_stats_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['nfts_stats']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Stats_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stats_aggregate_fields'] = ResolversParentTypes['nfts_stats_aggregate_fields'],
> = ResolversObject<{
	avg?: Resolver<Maybe<ResolversTypes['nfts_stats_avg_fields']>, ParentType, ContextType>
	count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Nfts_Stats_Aggregate_FieldsCountArgs>>
	max?: Resolver<Maybe<ResolversTypes['nfts_stats_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['nfts_stats_min_fields']>, ParentType, ContextType>
	stddev?: Resolver<Maybe<ResolversTypes['nfts_stats_stddev_fields']>, ParentType, ContextType>
	stddev_pop?: Resolver<Maybe<ResolversTypes['nfts_stats_stddev_pop_fields']>, ParentType, ContextType>
	stddev_samp?: Resolver<Maybe<ResolversTypes['nfts_stats_stddev_samp_fields']>, ParentType, ContextType>
	sum?: Resolver<Maybe<ResolversTypes['nfts_stats_sum_fields']>, ParentType, ContextType>
	var_pop?: Resolver<Maybe<ResolversTypes['nfts_stats_var_pop_fields']>, ParentType, ContextType>
	var_samp?: Resolver<Maybe<ResolversTypes['nfts_stats_var_samp_fields']>, ParentType, ContextType>
	variance?: Resolver<Maybe<ResolversTypes['nfts_stats_variance_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Stats_Avg_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stats_avg_fields'] = ResolversParentTypes['nfts_stats_avg_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Stats_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stats_max_fields'] = ResolversParentTypes['nfts_stats_max_fields'],
> = ResolversObject<{
	collection_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	count?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Stats_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stats_min_fields'] = ResolversParentTypes['nfts_stats_min_fields'],
> = ResolversObject<{
	collection_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	count?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Stats_Stddev_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stats_stddev_fields'] = ResolversParentTypes['nfts_stats_stddev_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Stats_Stddev_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stats_stddev_pop_fields'] = ResolversParentTypes['nfts_stats_stddev_pop_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Stats_Stddev_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stats_stddev_samp_fields'] = ResolversParentTypes['nfts_stats_stddev_samp_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Stats_Sum_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stats_sum_fields'] = ResolversParentTypes['nfts_stats_sum_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Stats_Var_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stats_var_pop_fields'] = ResolversParentTypes['nfts_stats_var_pop_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Stats_Var_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stats_var_samp_fields'] = ResolversParentTypes['nfts_stats_var_samp_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Stats_Variance_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stats_variance_fields'] = ResolversParentTypes['nfts_stats_variance_fields'],
> = ResolversObject<{
	count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Stddev_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stddev_fields'] = ResolversParentTypes['nfts_stddev_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	txBlock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Stddev_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stddev_pop_fields'] = ResolversParentTypes['nfts_stddev_pop_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	txBlock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Stddev_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_stddev_samp_fields'] = ResolversParentTypes['nfts_stddev_samp_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	txBlock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Sum_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_sum_fields'] = ResolversParentTypes['nfts_sum_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	txBlock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Var_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_var_pop_fields'] = ResolversParentTypes['nfts_var_pop_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	txBlock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Var_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_var_samp_fields'] = ResolversParentTypes['nfts_var_samp_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	txBlock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Nfts_Variance_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['nfts_variance_fields'] = ResolversParentTypes['nfts_variance_fields'],
> = ResolversObject<{
	block?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	metadata_rarity_percentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	transferable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	txBlock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface NumericScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['numeric'], any> {
	name: 'numeric'
}

export type PartsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['parts'] = ResolversParentTypes['parts'],
> = ResolversObject<{
	base?: Resolver<ResolversTypes['bases'], ParentType, ContextType>
	base_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	equippable?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<PartsEquippableArgs>>
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	nfts_equipped?: Resolver<
		ReadonlyArray<ResolversTypes['nfts']>,
		ParentType,
		ContextType,
		Partial<PartsNfts_EquippedArgs>
	>
	nfts_equipped_aggregate?: Resolver<
		ResolversTypes['nfts_aggregate'],
		ParentType,
		ContextType,
		Partial<PartsNfts_Equipped_AggregateArgs>
	>
	part_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	resources?: Resolver<
		ReadonlyArray<ResolversTypes['resources']>,
		ParentType,
		ContextType,
		Partial<PartsResourcesArgs>
	>
	resources_aggregate?: Resolver<
		ResolversTypes['resources_aggregate'],
		ParentType,
		ContextType,
		Partial<PartsResources_AggregateArgs>
	>
	resources_part?: Resolver<Maybe<ResolversTypes['resources_parts']>, ParentType, ContextType>
	src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	type?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	z?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Parts_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['parts_aggregate'] = ResolversParentTypes['parts_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['parts_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['parts']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Parts_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['parts_aggregate_fields'] = ResolversParentTypes['parts_aggregate_fields'],
> = ResolversObject<{
	avg?: Resolver<Maybe<ResolversTypes['parts_avg_fields']>, ParentType, ContextType>
	count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Parts_Aggregate_FieldsCountArgs>>
	max?: Resolver<Maybe<ResolversTypes['parts_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['parts_min_fields']>, ParentType, ContextType>
	stddev?: Resolver<Maybe<ResolversTypes['parts_stddev_fields']>, ParentType, ContextType>
	stddev_pop?: Resolver<Maybe<ResolversTypes['parts_stddev_pop_fields']>, ParentType, ContextType>
	stddev_samp?: Resolver<Maybe<ResolversTypes['parts_stddev_samp_fields']>, ParentType, ContextType>
	sum?: Resolver<Maybe<ResolversTypes['parts_sum_fields']>, ParentType, ContextType>
	var_pop?: Resolver<Maybe<ResolversTypes['parts_var_pop_fields']>, ParentType, ContextType>
	var_samp?: Resolver<Maybe<ResolversTypes['parts_var_samp_fields']>, ParentType, ContextType>
	variance?: Resolver<Maybe<ResolversTypes['parts_variance_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Parts_Avg_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['parts_avg_fields'] = ResolversParentTypes['parts_avg_fields'],
> = ResolversObject<{
	z?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Parts_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['parts_max_fields'] = ResolversParentTypes['parts_max_fields'],
> = ResolversObject<{
	base_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	part_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	z?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Parts_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['parts_min_fields'] = ResolversParentTypes['parts_min_fields'],
> = ResolversObject<{
	base_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	part_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	z?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Parts_Stddev_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['parts_stddev_fields'] = ResolversParentTypes['parts_stddev_fields'],
> = ResolversObject<{
	z?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Parts_Stddev_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['parts_stddev_pop_fields'] = ResolversParentTypes['parts_stddev_pop_fields'],
> = ResolversObject<{
	z?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Parts_Stddev_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['parts_stddev_samp_fields'] = ResolversParentTypes['parts_stddev_samp_fields'],
> = ResolversObject<{
	z?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Parts_Sum_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['parts_sum_fields'] = ResolversParentTypes['parts_sum_fields'],
> = ResolversObject<{
	z?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Parts_Var_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['parts_var_pop_fields'] = ResolversParentTypes['parts_var_pop_fields'],
> = ResolversObject<{
	z?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Parts_Var_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['parts_var_samp_fields'] = ResolversParentTypes['parts_var_samp_fields'],
> = ResolversObject<{
	z?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Parts_Variance_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['parts_variance_fields'] = ResolversParentTypes['parts_variance_fields'],
> = ResolversObject<{
	z?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ReactionsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions'] = ResolversParentTypes['reactions'],
> = ResolversObject<{
	created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>
	id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	nft_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	reactions_unicode?: Resolver<
		ReadonlyArray<ResolversTypes['reactions_unicode']>,
		ParentType,
		ContextType,
		Partial<ReactionsReactions_UnicodeArgs>
	>
	reactions_unicode_aggregate?: Resolver<
		ResolversTypes['reactions_unicode_aggregate'],
		ParentType,
		ContextType,
		Partial<ReactionsReactions_Unicode_AggregateArgs>
	>
	stats?: Resolver<Maybe<ResolversTypes['nfts_reactions_stats']>, ParentType, ContextType>
	unicode?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	user_reactions?: Resolver<
		ReadonlyArray<ResolversTypes['reactions_users']>,
		ParentType,
		ContextType,
		Partial<ReactionsUser_ReactionsArgs>
	>
	user_reactions_aggregate?: Resolver<
		ResolversTypes['reactions_users_aggregate'],
		ParentType,
		ContextType,
		Partial<ReactionsUser_Reactions_AggregateArgs>
	>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_aggregate'] = ResolversParentTypes['reactions_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['reactions_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['reactions']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_aggregate_fields'] = ResolversParentTypes['reactions_aggregate_fields'],
> = ResolversObject<{
	avg?: Resolver<Maybe<ResolversTypes['reactions_avg_fields']>, ParentType, ContextType>
	count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Reactions_Aggregate_FieldsCountArgs>>
	max?: Resolver<Maybe<ResolversTypes['reactions_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['reactions_min_fields']>, ParentType, ContextType>
	stddev?: Resolver<Maybe<ResolversTypes['reactions_stddev_fields']>, ParentType, ContextType>
	stddev_pop?: Resolver<Maybe<ResolversTypes['reactions_stddev_pop_fields']>, ParentType, ContextType>
	stddev_samp?: Resolver<Maybe<ResolversTypes['reactions_stddev_samp_fields']>, ParentType, ContextType>
	sum?: Resolver<Maybe<ResolversTypes['reactions_sum_fields']>, ParentType, ContextType>
	var_pop?: Resolver<Maybe<ResolversTypes['reactions_var_pop_fields']>, ParentType, ContextType>
	var_samp?: Resolver<Maybe<ResolversTypes['reactions_var_samp_fields']>, ParentType, ContextType>
	variance?: Resolver<Maybe<ResolversTypes['reactions_variance_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Avg_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_avg_fields'] = ResolversParentTypes['reactions_avg_fields'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_max_fields'] = ResolversParentTypes['reactions_max_fields'],
> = ResolversObject<{
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	unicode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_min_fields'] = ResolversParentTypes['reactions_min_fields'],
> = ResolversObject<{
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	unicode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Stddev_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_stddev_fields'] = ResolversParentTypes['reactions_stddev_fields'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Stddev_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_stddev_pop_fields'] = ResolversParentTypes['reactions_stddev_pop_fields'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Stddev_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_stddev_samp_fields'] = ResolversParentTypes['reactions_stddev_samp_fields'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Sum_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_sum_fields'] = ResolversParentTypes['reactions_sum_fields'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_UnicodeResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_unicode'] = ResolversParentTypes['reactions_unicode'],
> = ResolversObject<{
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	reactions_unicode?: Resolver<Maybe<ResolversTypes['reactions_unicode']>, ParentType, ContextType>
	unicode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Unicode_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_unicode_aggregate'] = ResolversParentTypes['reactions_unicode_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['reactions_unicode_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['reactions_unicode']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Unicode_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_unicode_aggregate_fields'] = ResolversParentTypes['reactions_unicode_aggregate_fields'],
> = ResolversObject<{
	count?: Resolver<
		ResolversTypes['Int'],
		ParentType,
		ContextType,
		Partial<Reactions_Unicode_Aggregate_FieldsCountArgs>
	>
	max?: Resolver<Maybe<ResolversTypes['reactions_unicode_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['reactions_unicode_min_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Unicode_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_unicode_max_fields'] = ResolversParentTypes['reactions_unicode_max_fields'],
> = ResolversObject<{
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	unicode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Unicode_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_unicode_min_fields'] = ResolversParentTypes['reactions_unicode_min_fields'],
> = ResolversObject<{
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	unicode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_UsersResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_users'] = ResolversParentTypes['reactions_users'],
> = ResolversObject<{
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	unicode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	user_reactions?: Resolver<Maybe<ResolversTypes['reactions_users']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Users_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_users_aggregate'] = ResolversParentTypes['reactions_users_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['reactions_users_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['reactions_users']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Users_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_users_aggregate_fields'] = ResolversParentTypes['reactions_users_aggregate_fields'],
> = ResolversObject<{
	count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Reactions_Users_Aggregate_FieldsCountArgs>>
	max?: Resolver<Maybe<ResolversTypes['reactions_users_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['reactions_users_min_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Users_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_users_max_fields'] = ResolversParentTypes['reactions_users_max_fields'],
> = ResolversObject<{
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	unicode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Users_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_users_min_fields'] = ResolversParentTypes['reactions_users_min_fields'],
> = ResolversObject<{
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	unicode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Var_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_var_pop_fields'] = ResolversParentTypes['reactions_var_pop_fields'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Var_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_var_samp_fields'] = ResolversParentTypes['reactions_var_samp_fields'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Reactions_Variance_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['reactions_variance_fields'] = ResolversParentTypes['reactions_variance_fields'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Recently_ListedResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['recently_listed'] = ResolversParentTypes['recently_listed'],
> = ResolversObject<{
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	nft?: Resolver<Maybe<ResolversTypes['nfts']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Recently_Listed_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['recently_listed_aggregate'] = ResolversParentTypes['recently_listed_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['recently_listed_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['recently_listed']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Recently_Listed_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['recently_listed_aggregate_fields'] = ResolversParentTypes['recently_listed_aggregate_fields'],
> = ResolversObject<{
	avg?: Resolver<Maybe<ResolversTypes['recently_listed_avg_fields']>, ParentType, ContextType>
	count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Recently_Listed_Aggregate_FieldsCountArgs>>
	max?: Resolver<Maybe<ResolversTypes['recently_listed_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['recently_listed_min_fields']>, ParentType, ContextType>
	stddev?: Resolver<Maybe<ResolversTypes['recently_listed_stddev_fields']>, ParentType, ContextType>
	stddev_pop?: Resolver<Maybe<ResolversTypes['recently_listed_stddev_pop_fields']>, ParentType, ContextType>
	stddev_samp?: Resolver<Maybe<ResolversTypes['recently_listed_stddev_samp_fields']>, ParentType, ContextType>
	sum?: Resolver<Maybe<ResolversTypes['recently_listed_sum_fields']>, ParentType, ContextType>
	var_pop?: Resolver<Maybe<ResolversTypes['recently_listed_var_pop_fields']>, ParentType, ContextType>
	var_samp?: Resolver<Maybe<ResolversTypes['recently_listed_var_samp_fields']>, ParentType, ContextType>
	variance?: Resolver<Maybe<ResolversTypes['recently_listed_variance_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Recently_Listed_Avg_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['recently_listed_avg_fields'] = ResolversParentTypes['recently_listed_avg_fields'],
> = ResolversObject<{
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Recently_Listed_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['recently_listed_max_fields'] = ResolversParentTypes['recently_listed_max_fields'],
> = ResolversObject<{
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Recently_Listed_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['recently_listed_min_fields'] = ResolversParentTypes['recently_listed_min_fields'],
> = ResolversObject<{
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	forsale?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Recently_Listed_Stddev_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['recently_listed_stddev_fields'] = ResolversParentTypes['recently_listed_stddev_fields'],
> = ResolversObject<{
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Recently_Listed_Stddev_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['recently_listed_stddev_pop_fields'] = ResolversParentTypes['recently_listed_stddev_pop_fields'],
> = ResolversObject<{
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Recently_Listed_Stddev_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['recently_listed_stddev_samp_fields'] = ResolversParentTypes['recently_listed_stddev_samp_fields'],
> = ResolversObject<{
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Recently_Listed_Sum_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['recently_listed_sum_fields'] = ResolversParentTypes['recently_listed_sum_fields'],
> = ResolversObject<{
	forsale?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Recently_Listed_Var_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['recently_listed_var_pop_fields'] = ResolversParentTypes['recently_listed_var_pop_fields'],
> = ResolversObject<{
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Recently_Listed_Var_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['recently_listed_var_samp_fields'] = ResolversParentTypes['recently_listed_var_samp_fields'],
> = ResolversObject<{
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Recently_Listed_Variance_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['recently_listed_variance_fields'] = ResolversParentTypes['recently_listed_variance_fields'],
> = ResolversObject<{
	forsale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ResourcesResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['resources'] = ResolversParentTypes['resources'],
> = ResolversObject<{
	base?: Resolver<Maybe<ResolversTypes['bases']>, ParentType, ContextType>
	base_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	base_theme?: Resolver<Maybe<ResolversTypes['resources_base_themes']>, ParentType, ContextType>
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	nft_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	nfts?: Resolver<ResolversTypes['nfts'], ParentType, ContextType>
	parts?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<ResourcesPartsArgs>>
	pending?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	resources_base_themes?: Resolver<
		ReadonlyArray<ResolversTypes['resources_base_themes']>,
		ParentType,
		ContextType,
		Partial<ResourcesResources_Base_ThemesArgs>
	>
	resources_part?: Resolver<Maybe<ResolversTypes['resources_parts']>, ParentType, ContextType>
	resources_parts?: Resolver<
		ReadonlyArray<ResolversTypes['resources_parts']>,
		ParentType,
		ContextType,
		Partial<ResourcesResources_PartsArgs>
	>
	resources_parts_aggregate?: Resolver<
		ResolversTypes['resources_parts_aggregate'],
		ParentType,
		ContextType,
		Partial<ResourcesResources_Parts_AggregateArgs>
	>
	slot?: Resolver<Maybe<ResolversTypes['parts']>, ParentType, ContextType>
	slot_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	theme?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<ResourcesThemeArgs>>
	thumb?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resources_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['resources_aggregate'] = ResolversParentTypes['resources_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['resources_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['resources']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resources_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['resources_aggregate_fields'] = ResolversParentTypes['resources_aggregate_fields'],
> = ResolversObject<{
	count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Resources_Aggregate_FieldsCountArgs>>
	max?: Resolver<Maybe<ResolversTypes['resources_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['resources_min_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resources_Base_ThemesResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['resources_base_themes'] = ResolversParentTypes['resources_base_themes'],
> = ResolversObject<{
	resource?: Resolver<ResolversTypes['resources'], ParentType, ContextType>
	resource_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	theme?: Resolver<ResolversTypes['base_themes'], ParentType, ContextType>
	theme_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resources_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['resources_max_fields'] = ResolversParentTypes['resources_max_fields'],
> = ResolversObject<{
	base_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	slot_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	thumb?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resources_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['resources_min_fields'] = ResolversParentTypes['resources_min_fields'],
> = ResolversObject<{
	base_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	slot_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	thumb?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resources_PartsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['resources_parts'] = ResolversParentTypes['resources_parts'],
> = ResolversObject<{
	part?: Resolver<ResolversTypes['parts'], ParentType, ContextType>
	part_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	resource?: Resolver<ResolversTypes['resources'], ParentType, ContextType>
	resource_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resources_Parts_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['resources_parts_aggregate'] = ResolversParentTypes['resources_parts_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['resources_parts_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['resources_parts']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resources_Parts_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['resources_parts_aggregate_fields'] = ResolversParentTypes['resources_parts_aggregate_fields'],
> = ResolversObject<{
	count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Resources_Parts_Aggregate_FieldsCountArgs>>
	max?: Resolver<Maybe<ResolversTypes['resources_parts_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['resources_parts_min_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resources_Parts_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['resources_parts_max_fields'] = ResolversParentTypes['resources_parts_max_fields'],
> = ResolversObject<{
	part_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	resource_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resources_Parts_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['resources_parts_min_fields'] = ResolversParentTypes['resources_parts_min_fields'],
> = ResolversObject<{
	part_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	resource_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type SalesResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['sales'] = ResolversParentTypes['sales'],
> = ResolversObject<{
	day?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>
	month?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>
	month3?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>
	week?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Blacklisted_AccountsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_blacklisted_accounts'] = ResolversParentTypes['singular_blacklisted_accounts'],
> = ResolversObject<{
	account?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Blacklisted_CollectionsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_blacklisted_collections'] = ResolversParentTypes['singular_blacklisted_collections'],
> = ResolversObject<{
	collection?: Resolver<Maybe<ResolversTypes['collections']>, ParentType, ContextType>
	collection_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_CuratedResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_curated'] = ResolversParentTypes['singular_curated'],
> = ResolversObject<{
	created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>
	nft_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Curated_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_curated_aggregate'] = ResolversParentTypes['singular_curated_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['singular_curated_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['singular_curated']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Curated_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_curated_aggregate_fields'] = ResolversParentTypes['singular_curated_aggregate_fields'],
> = ResolversObject<{
	count?: Resolver<
		ResolversTypes['Int'],
		ParentType,
		ContextType,
		Partial<Singular_Curated_Aggregate_FieldsCountArgs>
	>
	max?: Resolver<Maybe<ResolversTypes['singular_curated_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['singular_curated_min_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Curated_CollectionsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_curated_collections'] = ResolversParentTypes['singular_curated_collections'],
> = ResolversObject<{
	collection_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Curated_Collections_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_curated_collections_aggregate'] = ResolversParentTypes['singular_curated_collections_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<
		Maybe<ResolversTypes['singular_curated_collections_aggregate_fields']>,
		ParentType,
		ContextType
	>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['singular_curated_collections']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Curated_Collections_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_curated_collections_aggregate_fields'] = ResolversParentTypes['singular_curated_collections_aggregate_fields'],
> = ResolversObject<{
	count?: Resolver<
		ResolversTypes['Int'],
		ParentType,
		ContextType,
		Partial<Singular_Curated_Collections_Aggregate_FieldsCountArgs>
	>
	max?: Resolver<Maybe<ResolversTypes['singular_curated_collections_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['singular_curated_collections_min_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Curated_Collections_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_curated_collections_max_fields'] = ResolversParentTypes['singular_curated_collections_max_fields'],
> = ResolversObject<{
	collection_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Curated_Collections_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_curated_collections_min_fields'] = ResolversParentTypes['singular_curated_collections_min_fields'],
> = ResolversObject<{
	collection_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Curated_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_curated_max_fields'] = ResolversParentTypes['singular_curated_max_fields'],
> = ResolversObject<{
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Curated_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_curated_min_fields'] = ResolversParentTypes['singular_curated_min_fields'],
> = ResolversObject<{
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Nsfw_CollectionsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_nsfw_collections'] = ResolversParentTypes['singular_nsfw_collections'],
> = ResolversObject<{
	collection?: Resolver<Maybe<ResolversTypes['collections']>, ParentType, ContextType>
	collection_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>
	reason?: Resolver<
		Maybe<ResolversTypes['jsonb']>,
		ParentType,
		ContextType,
		Partial<Singular_Nsfw_CollectionsReasonArgs>
	>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Nsfw_Collections_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_nsfw_collections_aggregate'] = ResolversParentTypes['singular_nsfw_collections_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['singular_nsfw_collections_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['singular_nsfw_collections']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Nsfw_Collections_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_nsfw_collections_aggregate_fields'] = ResolversParentTypes['singular_nsfw_collections_aggregate_fields'],
> = ResolversObject<{
	count?: Resolver<
		ResolversTypes['Int'],
		ParentType,
		ContextType,
		Partial<Singular_Nsfw_Collections_Aggregate_FieldsCountArgs>
	>
	max?: Resolver<Maybe<ResolversTypes['singular_nsfw_collections_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['singular_nsfw_collections_min_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Nsfw_Collections_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_nsfw_collections_max_fields'] = ResolversParentTypes['singular_nsfw_collections_max_fields'],
> = ResolversObject<{
	collection_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Nsfw_Collections_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_nsfw_collections_min_fields'] = ResolversParentTypes['singular_nsfw_collections_min_fields'],
> = ResolversObject<{
	collection_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Nsfw_NftsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_nsfw_nfts'] = ResolversParentTypes['singular_nsfw_nfts'],
> = ResolversObject<{
	created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>
	nft?: Resolver<ResolversTypes['nfts'], ParentType, ContextType>
	nft_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	reason?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<Singular_Nsfw_NftsReasonArgs>>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Nsfw_Nfts_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_nsfw_nfts_aggregate'] = ResolversParentTypes['singular_nsfw_nfts_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['singular_nsfw_nfts_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['singular_nsfw_nfts']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Nsfw_Nfts_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_nsfw_nfts_aggregate_fields'] = ResolversParentTypes['singular_nsfw_nfts_aggregate_fields'],
> = ResolversObject<{
	count?: Resolver<
		ResolversTypes['Int'],
		ParentType,
		ContextType,
		Partial<Singular_Nsfw_Nfts_Aggregate_FieldsCountArgs>
	>
	max?: Resolver<Maybe<ResolversTypes['singular_nsfw_nfts_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['singular_nsfw_nfts_min_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Nsfw_Nfts_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_nsfw_nfts_max_fields'] = ResolversParentTypes['singular_nsfw_nfts_max_fields'],
> = ResolversObject<{
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Nsfw_Nfts_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_nsfw_nfts_min_fields'] = ResolversParentTypes['singular_nsfw_nfts_min_fields'],
> = ResolversObject<{
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	nft_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Verified_CollectionsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_verified_collections'] = ResolversParentTypes['singular_verified_collections'],
> = ResolversObject<{
	collection_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Verified_Collections_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_verified_collections_aggregate'] = ResolversParentTypes['singular_verified_collections_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<
		Maybe<ResolversTypes['singular_verified_collections_aggregate_fields']>,
		ParentType,
		ContextType
	>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['singular_verified_collections']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Verified_Collections_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_verified_collections_aggregate_fields'] = ResolversParentTypes['singular_verified_collections_aggregate_fields'],
> = ResolversObject<{
	count?: Resolver<
		ResolversTypes['Int'],
		ParentType,
		ContextType,
		Partial<Singular_Verified_Collections_Aggregate_FieldsCountArgs>
	>
	max?: Resolver<Maybe<ResolversTypes['singular_verified_collections_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['singular_verified_collections_min_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Verified_Collections_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_verified_collections_max_fields'] = ResolversParentTypes['singular_verified_collections_max_fields'],
> = ResolversObject<{
	collection_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Singular_Verified_Collections_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['singular_verified_collections_min_fields'] = ResolversParentTypes['singular_verified_collections_min_fields'],
> = ResolversObject<{
	collection_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface SmallintScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['smallint'], any> {
	name: 'smallint'
}

export type SystemResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['system'] = ResolversParentTypes['system'],
> = ResolversObject<{
	purchaseEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
	name: 'timestamptz'
}

export type Yuletide_Item_TrackResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['yuletide_item_track'] = ResolversParentTypes['yuletide_item_track'],
> = ResolversObject<{
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	item_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Yuletide_Item_Track_AggregateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['yuletide_item_track_aggregate'] = ResolversParentTypes['yuletide_item_track_aggregate'],
> = ResolversObject<{
	aggregate?: Resolver<Maybe<ResolversTypes['yuletide_item_track_aggregate_fields']>, ParentType, ContextType>
	nodes?: Resolver<ReadonlyArray<ResolversTypes['yuletide_item_track']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Yuletide_Item_Track_Aggregate_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['yuletide_item_track_aggregate_fields'] = ResolversParentTypes['yuletide_item_track_aggregate_fields'],
> = ResolversObject<{
	avg?: Resolver<Maybe<ResolversTypes['yuletide_item_track_avg_fields']>, ParentType, ContextType>
	count?: Resolver<
		ResolversTypes['Int'],
		ParentType,
		ContextType,
		Partial<Yuletide_Item_Track_Aggregate_FieldsCountArgs>
	>
	max?: Resolver<Maybe<ResolversTypes['yuletide_item_track_max_fields']>, ParentType, ContextType>
	min?: Resolver<Maybe<ResolversTypes['yuletide_item_track_min_fields']>, ParentType, ContextType>
	stddev?: Resolver<Maybe<ResolversTypes['yuletide_item_track_stddev_fields']>, ParentType, ContextType>
	stddev_pop?: Resolver<Maybe<ResolversTypes['yuletide_item_track_stddev_pop_fields']>, ParentType, ContextType>
	stddev_samp?: Resolver<Maybe<ResolversTypes['yuletide_item_track_stddev_samp_fields']>, ParentType, ContextType>
	sum?: Resolver<Maybe<ResolversTypes['yuletide_item_track_sum_fields']>, ParentType, ContextType>
	var_pop?: Resolver<Maybe<ResolversTypes['yuletide_item_track_var_pop_fields']>, ParentType, ContextType>
	var_samp?: Resolver<Maybe<ResolversTypes['yuletide_item_track_var_samp_fields']>, ParentType, ContextType>
	variance?: Resolver<Maybe<ResolversTypes['yuletide_item_track_variance_fields']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Yuletide_Item_Track_Avg_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['yuletide_item_track_avg_fields'] = ResolversParentTypes['yuletide_item_track_avg_fields'],
> = ResolversObject<{
	item_count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Yuletide_Item_Track_Max_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['yuletide_item_track_max_fields'] = ResolversParentTypes['yuletide_item_track_max_fields'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	item_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Yuletide_Item_Track_Min_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['yuletide_item_track_min_fields'] = ResolversParentTypes['yuletide_item_track_min_fields'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	item_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Yuletide_Item_Track_Stddev_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['yuletide_item_track_stddev_fields'] = ResolversParentTypes['yuletide_item_track_stddev_fields'],
> = ResolversObject<{
	item_count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Yuletide_Item_Track_Stddev_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['yuletide_item_track_stddev_pop_fields'] = ResolversParentTypes['yuletide_item_track_stddev_pop_fields'],
> = ResolversObject<{
	item_count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Yuletide_Item_Track_Stddev_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['yuletide_item_track_stddev_samp_fields'] = ResolversParentTypes['yuletide_item_track_stddev_samp_fields'],
> = ResolversObject<{
	item_count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Yuletide_Item_Track_Sum_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['yuletide_item_track_sum_fields'] = ResolversParentTypes['yuletide_item_track_sum_fields'],
> = ResolversObject<{
	item_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Yuletide_Item_Track_Var_Pop_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['yuletide_item_track_var_pop_fields'] = ResolversParentTypes['yuletide_item_track_var_pop_fields'],
> = ResolversObject<{
	item_count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Yuletide_Item_Track_Var_Samp_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['yuletide_item_track_var_samp_fields'] = ResolversParentTypes['yuletide_item_track_var_samp_fields'],
> = ResolversObject<{
	item_count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Yuletide_Item_Track_Variance_FieldsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['yuletide_item_track_variance_fields'] = ResolversParentTypes['yuletide_item_track_variance_fields'],
> = ResolversObject<{
	item_count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = any> = ResolversObject<{
	BigInt?: GraphQLScalarType
	BodiesConnection?: BodiesConnectionResolvers<ContextType>
	Body?: BodyResolvers<ContextType>
	BodyEdge?: BodyEdgeResolvers<ContextType>
	BodyMember?: BodyMemberResolvers<ContextType>
	BodyMemberEdge?: BodyMemberEdgeResolvers<ContextType>
	BodyMembersConnection?: BodyMembersConnectionResolvers<ContextType>
	Bytes?: GraphQLScalarType
	Config?: ConfigResolvers<ContextType>
	DateTime?: GraphQLScalarType
	Features?: FeaturesResolvers<ContextType>
	Link?: LinkResolvers<ContextType>
	Mutation?: MutationResolvers<ContextType>
	PageInfo?: PageInfoResolvers<ContextType>
	Query?: QueryResolvers<ContextType>
	Subscription?: SubscriptionResolvers<ContextType>
	base_themes?: Base_ThemesResolvers<ContextType>
	bases?: BasesResolvers<ContextType>
	bases_aggregate?: Bases_AggregateResolvers<ContextType>
	bases_aggregate_fields?: Bases_Aggregate_FieldsResolvers<ContextType>
	bases_avg_fields?: Bases_Avg_FieldsResolvers<ContextType>
	bases_max_fields?: Bases_Max_FieldsResolvers<ContextType>
	bases_min_fields?: Bases_Min_FieldsResolvers<ContextType>
	bases_stddev_fields?: Bases_Stddev_FieldsResolvers<ContextType>
	bases_stddev_pop_fields?: Bases_Stddev_Pop_FieldsResolvers<ContextType>
	bases_stddev_samp_fields?: Bases_Stddev_Samp_FieldsResolvers<ContextType>
	bases_sum_fields?: Bases_Sum_FieldsResolvers<ContextType>
	bases_var_pop_fields?: Bases_Var_Pop_FieldsResolvers<ContextType>
	bases_var_samp_fields?: Bases_Var_Samp_FieldsResolvers<ContextType>
	bases_variance_fields?: Bases_Variance_FieldsResolvers<ContextType>
	bigint?: GraphQLScalarType
	changes?: ChangesResolvers<ContextType>
	changes_aggregate?: Changes_AggregateResolvers<ContextType>
	changes_aggregate_fields?: Changes_Aggregate_FieldsResolvers<ContextType>
	changes_avg_fields?: Changes_Avg_FieldsResolvers<ContextType>
	changes_collection?: Changes_CollectionResolvers<ContextType>
	changes_max_fields?: Changes_Max_FieldsResolvers<ContextType>
	changes_min_fields?: Changes_Min_FieldsResolvers<ContextType>
	changes_stddev_fields?: Changes_Stddev_FieldsResolvers<ContextType>
	changes_stddev_pop_fields?: Changes_Stddev_Pop_FieldsResolvers<ContextType>
	changes_stddev_samp_fields?: Changes_Stddev_Samp_FieldsResolvers<ContextType>
	changes_sum_fields?: Changes_Sum_FieldsResolvers<ContextType>
	changes_var_pop_fields?: Changes_Var_Pop_FieldsResolvers<ContextType>
	changes_var_samp_fields?: Changes_Var_Samp_FieldsResolvers<ContextType>
	changes_variance_fields?: Changes_Variance_FieldsResolvers<ContextType>
	collection_banners?: Collection_BannersResolvers<ContextType>
	collections?: CollectionsResolvers<ContextType>
	collections_aggregate?: Collections_AggregateResolvers<ContextType>
	collections_aggregate_fields?: Collections_Aggregate_FieldsResolvers<ContextType>
	collections_avg_fields?: Collections_Avg_FieldsResolvers<ContextType>
	collections_max_fields?: Collections_Max_FieldsResolvers<ContextType>
	collections_min_fields?: Collections_Min_FieldsResolvers<ContextType>
	collections_stddev_fields?: Collections_Stddev_FieldsResolvers<ContextType>
	collections_stddev_pop_fields?: Collections_Stddev_Pop_FieldsResolvers<ContextType>
	collections_stddev_samp_fields?: Collections_Stddev_Samp_FieldsResolvers<ContextType>
	collections_sum_fields?: Collections_Sum_FieldsResolvers<ContextType>
	collections_var_pop_fields?: Collections_Var_Pop_FieldsResolvers<ContextType>
	collections_var_samp_fields?: Collections_Var_Samp_FieldsResolvers<ContextType>
	collections_variance_fields?: Collections_Variance_FieldsResolvers<ContextType>
	distinct_kanaria_nfts?: Distinct_Kanaria_NftsResolvers<ContextType>
	distinct_kanaria_nfts_aggregate?: Distinct_Kanaria_Nfts_AggregateResolvers<ContextType>
	distinct_kanaria_nfts_aggregate_fields?: Distinct_Kanaria_Nfts_Aggregate_FieldsResolvers<ContextType>
	distinct_kanaria_nfts_avg_fields?: Distinct_Kanaria_Nfts_Avg_FieldsResolvers<ContextType>
	distinct_kanaria_nfts_max_fields?: Distinct_Kanaria_Nfts_Max_FieldsResolvers<ContextType>
	distinct_kanaria_nfts_min_fields?: Distinct_Kanaria_Nfts_Min_FieldsResolvers<ContextType>
	distinct_kanaria_nfts_stddev_fields?: Distinct_Kanaria_Nfts_Stddev_FieldsResolvers<ContextType>
	distinct_kanaria_nfts_stddev_pop_fields?: Distinct_Kanaria_Nfts_Stddev_Pop_FieldsResolvers<ContextType>
	distinct_kanaria_nfts_stddev_samp_fields?: Distinct_Kanaria_Nfts_Stddev_Samp_FieldsResolvers<ContextType>
	distinct_kanaria_nfts_sum_fields?: Distinct_Kanaria_Nfts_Sum_FieldsResolvers<ContextType>
	distinct_kanaria_nfts_var_pop_fields?: Distinct_Kanaria_Nfts_Var_Pop_FieldsResolvers<ContextType>
	distinct_kanaria_nfts_var_samp_fields?: Distinct_Kanaria_Nfts_Var_Samp_FieldsResolvers<ContextType>
	distinct_kanaria_nfts_variance_fields?: Distinct_Kanaria_Nfts_Variance_FieldsResolvers<ContextType>
	distinct_nfts?: Distinct_NftsResolvers<ContextType>
	distinct_nfts_aggregate?: Distinct_Nfts_AggregateResolvers<ContextType>
	distinct_nfts_aggregate_fields?: Distinct_Nfts_Aggregate_FieldsResolvers<ContextType>
	distinct_nfts_avg_fields?: Distinct_Nfts_Avg_FieldsResolvers<ContextType>
	distinct_nfts_max_fields?: Distinct_Nfts_Max_FieldsResolvers<ContextType>
	distinct_nfts_min_fields?: Distinct_Nfts_Min_FieldsResolvers<ContextType>
	distinct_nfts_stddev_fields?: Distinct_Nfts_Stddev_FieldsResolvers<ContextType>
	distinct_nfts_stddev_pop_fields?: Distinct_Nfts_Stddev_Pop_FieldsResolvers<ContextType>
	distinct_nfts_stddev_samp_fields?: Distinct_Nfts_Stddev_Samp_FieldsResolvers<ContextType>
	distinct_nfts_sum_fields?: Distinct_Nfts_Sum_FieldsResolvers<ContextType>
	distinct_nfts_var_pop_fields?: Distinct_Nfts_Var_Pop_FieldsResolvers<ContextType>
	distinct_nfts_var_samp_fields?: Distinct_Nfts_Var_Samp_FieldsResolvers<ContextType>
	distinct_nfts_variance_fields?: Distinct_Nfts_Variance_FieldsResolvers<ContextType>
	dutchie?: DutchieResolvers<ContextType>
	gems_enabled?: Gems_EnabledResolvers<ContextType>
	hatched_birds?: Hatched_BirdsResolvers<ContextType>
	hatched_birds_mutation_response?: Hatched_Birds_Mutation_ResponseResolvers<ContextType>
	jsonb?: GraphQLScalarType
	nfts?: NftsResolvers<ContextType>
	nfts_aggregate?: Nfts_AggregateResolvers<ContextType>
	nfts_aggregate_fields?: Nfts_Aggregate_FieldsResolvers<ContextType>
	nfts_avg_fields?: Nfts_Avg_FieldsResolvers<ContextType>
	nfts_max_fields?: Nfts_Max_FieldsResolvers<ContextType>
	nfts_min_fields?: Nfts_Min_FieldsResolvers<ContextType>
	nfts_reactions_stats?: Nfts_Reactions_StatsResolvers<ContextType>
	nfts_reactions_stats_aggregate?: Nfts_Reactions_Stats_AggregateResolvers<ContextType>
	nfts_reactions_stats_aggregate_fields?: Nfts_Reactions_Stats_Aggregate_FieldsResolvers<ContextType>
	nfts_reactions_stats_avg_fields?: Nfts_Reactions_Stats_Avg_FieldsResolvers<ContextType>
	nfts_reactions_stats_max_fields?: Nfts_Reactions_Stats_Max_FieldsResolvers<ContextType>
	nfts_reactions_stats_min_fields?: Nfts_Reactions_Stats_Min_FieldsResolvers<ContextType>
	nfts_reactions_stats_stddev_fields?: Nfts_Reactions_Stats_Stddev_FieldsResolvers<ContextType>
	nfts_reactions_stats_stddev_pop_fields?: Nfts_Reactions_Stats_Stddev_Pop_FieldsResolvers<ContextType>
	nfts_reactions_stats_stddev_samp_fields?: Nfts_Reactions_Stats_Stddev_Samp_FieldsResolvers<ContextType>
	nfts_reactions_stats_sum_fields?: Nfts_Reactions_Stats_Sum_FieldsResolvers<ContextType>
	nfts_reactions_stats_var_pop_fields?: Nfts_Reactions_Stats_Var_Pop_FieldsResolvers<ContextType>
	nfts_reactions_stats_var_samp_fields?: Nfts_Reactions_Stats_Var_Samp_FieldsResolvers<ContextType>
	nfts_reactions_stats_variance_fields?: Nfts_Reactions_Stats_Variance_FieldsResolvers<ContextType>
	nfts_stats?: Nfts_StatsResolvers<ContextType>
	nfts_stats_aggregate?: Nfts_Stats_AggregateResolvers<ContextType>
	nfts_stats_aggregate_fields?: Nfts_Stats_Aggregate_FieldsResolvers<ContextType>
	nfts_stats_avg_fields?: Nfts_Stats_Avg_FieldsResolvers<ContextType>
	nfts_stats_max_fields?: Nfts_Stats_Max_FieldsResolvers<ContextType>
	nfts_stats_min_fields?: Nfts_Stats_Min_FieldsResolvers<ContextType>
	nfts_stats_stddev_fields?: Nfts_Stats_Stddev_FieldsResolvers<ContextType>
	nfts_stats_stddev_pop_fields?: Nfts_Stats_Stddev_Pop_FieldsResolvers<ContextType>
	nfts_stats_stddev_samp_fields?: Nfts_Stats_Stddev_Samp_FieldsResolvers<ContextType>
	nfts_stats_sum_fields?: Nfts_Stats_Sum_FieldsResolvers<ContextType>
	nfts_stats_var_pop_fields?: Nfts_Stats_Var_Pop_FieldsResolvers<ContextType>
	nfts_stats_var_samp_fields?: Nfts_Stats_Var_Samp_FieldsResolvers<ContextType>
	nfts_stats_variance_fields?: Nfts_Stats_Variance_FieldsResolvers<ContextType>
	nfts_stddev_fields?: Nfts_Stddev_FieldsResolvers<ContextType>
	nfts_stddev_pop_fields?: Nfts_Stddev_Pop_FieldsResolvers<ContextType>
	nfts_stddev_samp_fields?: Nfts_Stddev_Samp_FieldsResolvers<ContextType>
	nfts_sum_fields?: Nfts_Sum_FieldsResolvers<ContextType>
	nfts_var_pop_fields?: Nfts_Var_Pop_FieldsResolvers<ContextType>
	nfts_var_samp_fields?: Nfts_Var_Samp_FieldsResolvers<ContextType>
	nfts_variance_fields?: Nfts_Variance_FieldsResolvers<ContextType>
	numeric?: GraphQLScalarType
	parts?: PartsResolvers<ContextType>
	parts_aggregate?: Parts_AggregateResolvers<ContextType>
	parts_aggregate_fields?: Parts_Aggregate_FieldsResolvers<ContextType>
	parts_avg_fields?: Parts_Avg_FieldsResolvers<ContextType>
	parts_max_fields?: Parts_Max_FieldsResolvers<ContextType>
	parts_min_fields?: Parts_Min_FieldsResolvers<ContextType>
	parts_stddev_fields?: Parts_Stddev_FieldsResolvers<ContextType>
	parts_stddev_pop_fields?: Parts_Stddev_Pop_FieldsResolvers<ContextType>
	parts_stddev_samp_fields?: Parts_Stddev_Samp_FieldsResolvers<ContextType>
	parts_sum_fields?: Parts_Sum_FieldsResolvers<ContextType>
	parts_var_pop_fields?: Parts_Var_Pop_FieldsResolvers<ContextType>
	parts_var_samp_fields?: Parts_Var_Samp_FieldsResolvers<ContextType>
	parts_variance_fields?: Parts_Variance_FieldsResolvers<ContextType>
	reactions?: ReactionsResolvers<ContextType>
	reactions_aggregate?: Reactions_AggregateResolvers<ContextType>
	reactions_aggregate_fields?: Reactions_Aggregate_FieldsResolvers<ContextType>
	reactions_avg_fields?: Reactions_Avg_FieldsResolvers<ContextType>
	reactions_max_fields?: Reactions_Max_FieldsResolvers<ContextType>
	reactions_min_fields?: Reactions_Min_FieldsResolvers<ContextType>
	reactions_stddev_fields?: Reactions_Stddev_FieldsResolvers<ContextType>
	reactions_stddev_pop_fields?: Reactions_Stddev_Pop_FieldsResolvers<ContextType>
	reactions_stddev_samp_fields?: Reactions_Stddev_Samp_FieldsResolvers<ContextType>
	reactions_sum_fields?: Reactions_Sum_FieldsResolvers<ContextType>
	reactions_unicode?: Reactions_UnicodeResolvers<ContextType>
	reactions_unicode_aggregate?: Reactions_Unicode_AggregateResolvers<ContextType>
	reactions_unicode_aggregate_fields?: Reactions_Unicode_Aggregate_FieldsResolvers<ContextType>
	reactions_unicode_max_fields?: Reactions_Unicode_Max_FieldsResolvers<ContextType>
	reactions_unicode_min_fields?: Reactions_Unicode_Min_FieldsResolvers<ContextType>
	reactions_users?: Reactions_UsersResolvers<ContextType>
	reactions_users_aggregate?: Reactions_Users_AggregateResolvers<ContextType>
	reactions_users_aggregate_fields?: Reactions_Users_Aggregate_FieldsResolvers<ContextType>
	reactions_users_max_fields?: Reactions_Users_Max_FieldsResolvers<ContextType>
	reactions_users_min_fields?: Reactions_Users_Min_FieldsResolvers<ContextType>
	reactions_var_pop_fields?: Reactions_Var_Pop_FieldsResolvers<ContextType>
	reactions_var_samp_fields?: Reactions_Var_Samp_FieldsResolvers<ContextType>
	reactions_variance_fields?: Reactions_Variance_FieldsResolvers<ContextType>
	recently_listed?: Recently_ListedResolvers<ContextType>
	recently_listed_aggregate?: Recently_Listed_AggregateResolvers<ContextType>
	recently_listed_aggregate_fields?: Recently_Listed_Aggregate_FieldsResolvers<ContextType>
	recently_listed_avg_fields?: Recently_Listed_Avg_FieldsResolvers<ContextType>
	recently_listed_max_fields?: Recently_Listed_Max_FieldsResolvers<ContextType>
	recently_listed_min_fields?: Recently_Listed_Min_FieldsResolvers<ContextType>
	recently_listed_stddev_fields?: Recently_Listed_Stddev_FieldsResolvers<ContextType>
	recently_listed_stddev_pop_fields?: Recently_Listed_Stddev_Pop_FieldsResolvers<ContextType>
	recently_listed_stddev_samp_fields?: Recently_Listed_Stddev_Samp_FieldsResolvers<ContextType>
	recently_listed_sum_fields?: Recently_Listed_Sum_FieldsResolvers<ContextType>
	recently_listed_var_pop_fields?: Recently_Listed_Var_Pop_FieldsResolvers<ContextType>
	recently_listed_var_samp_fields?: Recently_Listed_Var_Samp_FieldsResolvers<ContextType>
	recently_listed_variance_fields?: Recently_Listed_Variance_FieldsResolvers<ContextType>
	resources?: ResourcesResolvers<ContextType>
	resources_aggregate?: Resources_AggregateResolvers<ContextType>
	resources_aggregate_fields?: Resources_Aggregate_FieldsResolvers<ContextType>
	resources_base_themes?: Resources_Base_ThemesResolvers<ContextType>
	resources_max_fields?: Resources_Max_FieldsResolvers<ContextType>
	resources_min_fields?: Resources_Min_FieldsResolvers<ContextType>
	resources_parts?: Resources_PartsResolvers<ContextType>
	resources_parts_aggregate?: Resources_Parts_AggregateResolvers<ContextType>
	resources_parts_aggregate_fields?: Resources_Parts_Aggregate_FieldsResolvers<ContextType>
	resources_parts_max_fields?: Resources_Parts_Max_FieldsResolvers<ContextType>
	resources_parts_min_fields?: Resources_Parts_Min_FieldsResolvers<ContextType>
	sales?: SalesResolvers<ContextType>
	singular_blacklisted_accounts?: Singular_Blacklisted_AccountsResolvers<ContextType>
	singular_blacklisted_collections?: Singular_Blacklisted_CollectionsResolvers<ContextType>
	singular_curated?: Singular_CuratedResolvers<ContextType>
	singular_curated_aggregate?: Singular_Curated_AggregateResolvers<ContextType>
	singular_curated_aggregate_fields?: Singular_Curated_Aggregate_FieldsResolvers<ContextType>
	singular_curated_collections?: Singular_Curated_CollectionsResolvers<ContextType>
	singular_curated_collections_aggregate?: Singular_Curated_Collections_AggregateResolvers<ContextType>
	singular_curated_collections_aggregate_fields?: Singular_Curated_Collections_Aggregate_FieldsResolvers<ContextType>
	singular_curated_collections_max_fields?: Singular_Curated_Collections_Max_FieldsResolvers<ContextType>
	singular_curated_collections_min_fields?: Singular_Curated_Collections_Min_FieldsResolvers<ContextType>
	singular_curated_max_fields?: Singular_Curated_Max_FieldsResolvers<ContextType>
	singular_curated_min_fields?: Singular_Curated_Min_FieldsResolvers<ContextType>
	singular_nsfw_collections?: Singular_Nsfw_CollectionsResolvers<ContextType>
	singular_nsfw_collections_aggregate?: Singular_Nsfw_Collections_AggregateResolvers<ContextType>
	singular_nsfw_collections_aggregate_fields?: Singular_Nsfw_Collections_Aggregate_FieldsResolvers<ContextType>
	singular_nsfw_collections_max_fields?: Singular_Nsfw_Collections_Max_FieldsResolvers<ContextType>
	singular_nsfw_collections_min_fields?: Singular_Nsfw_Collections_Min_FieldsResolvers<ContextType>
	singular_nsfw_nfts?: Singular_Nsfw_NftsResolvers<ContextType>
	singular_nsfw_nfts_aggregate?: Singular_Nsfw_Nfts_AggregateResolvers<ContextType>
	singular_nsfw_nfts_aggregate_fields?: Singular_Nsfw_Nfts_Aggregate_FieldsResolvers<ContextType>
	singular_nsfw_nfts_max_fields?: Singular_Nsfw_Nfts_Max_FieldsResolvers<ContextType>
	singular_nsfw_nfts_min_fields?: Singular_Nsfw_Nfts_Min_FieldsResolvers<ContextType>
	singular_verified_collections?: Singular_Verified_CollectionsResolvers<ContextType>
	singular_verified_collections_aggregate?: Singular_Verified_Collections_AggregateResolvers<ContextType>
	singular_verified_collections_aggregate_fields?: Singular_Verified_Collections_Aggregate_FieldsResolvers<ContextType>
	singular_verified_collections_max_fields?: Singular_Verified_Collections_Max_FieldsResolvers<ContextType>
	singular_verified_collections_min_fields?: Singular_Verified_Collections_Min_FieldsResolvers<ContextType>
	smallint?: GraphQLScalarType
	system?: SystemResolvers<ContextType>
	timestamptz?: GraphQLScalarType
	yuletide_item_track?: Yuletide_Item_TrackResolvers<ContextType>
	yuletide_item_track_aggregate?: Yuletide_Item_Track_AggregateResolvers<ContextType>
	yuletide_item_track_aggregate_fields?: Yuletide_Item_Track_Aggregate_FieldsResolvers<ContextType>
	yuletide_item_track_avg_fields?: Yuletide_Item_Track_Avg_FieldsResolvers<ContextType>
	yuletide_item_track_max_fields?: Yuletide_Item_Track_Max_FieldsResolvers<ContextType>
	yuletide_item_track_min_fields?: Yuletide_Item_Track_Min_FieldsResolvers<ContextType>
	yuletide_item_track_stddev_fields?: Yuletide_Item_Track_Stddev_FieldsResolvers<ContextType>
	yuletide_item_track_stddev_pop_fields?: Yuletide_Item_Track_Stddev_Pop_FieldsResolvers<ContextType>
	yuletide_item_track_stddev_samp_fields?: Yuletide_Item_Track_Stddev_Samp_FieldsResolvers<ContextType>
	yuletide_item_track_sum_fields?: Yuletide_Item_Track_Sum_FieldsResolvers<ContextType>
	yuletide_item_track_var_pop_fields?: Yuletide_Item_Track_Var_Pop_FieldsResolvers<ContextType>
	yuletide_item_track_var_samp_fields?: Yuletide_Item_Track_Var_Samp_FieldsResolvers<ContextType>
	yuletide_item_track_variance_fields?: Yuletide_Item_Track_Variance_FieldsResolvers<ContextType>
}>
