import * as v55 from '../../../types/v55';

export type OrganizationCreationData = {
	controller: string;
	name: string;
	cid: string | null;

	orgType: v55.OrgType;
	access: v55.AccessModel;
	feeModel: v55.FeeModel;

	fee: bigint;
	govAsset: number;
	payAsset: number;
	memberLimit: bigint;

	blockNumber: number;

	treasury?: string;

	deposit: bigint;
};
