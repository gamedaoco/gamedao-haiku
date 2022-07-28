import * as v56 from '../../../types/v56';

export type CampaignCreationData = {
	org: string;
	admin: string;
	name: string;
	target: bigint;
	deposit: bigint;
	expiry: number;
	protocol: v56.FlowProtocol;
	governance: v56.FlowGovernance;
	cid: string | null;
	tokenSymbol: string;
	tokenName: string;
	blockNumber: number;
};
