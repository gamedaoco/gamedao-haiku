import * as v58 from '../../../types/v58';

export type OrganizationCreationData = {
	controller: string;
	name: string;
	cid: string | null;

	orgType: v58.OrgType;
	access: v58.AccessModel;
	feeModel: v58.FeeModel;

	fee: bigint;
	govAsset: string;
	payAsset: string;
	memberLimit: bigint;

	blockNumber: number;

	treasury?: string;

	deposit: bigint;
};
