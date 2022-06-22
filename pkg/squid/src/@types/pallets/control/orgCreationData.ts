import * as v51 from '../../../types/v51';

export type OrganizationCreationData = {
	controller: string;
	name: string;
	cid: string | null;

	orgType: v51.OrgType;
	access: v51.AccessModel;
	feeModel: v51.FeeModel;

	fee: bigint;
	govAsset: number;
	payAsset: number;
	memberLimit: bigint;

	blockNumber: number;

	treasury?: string;
};
