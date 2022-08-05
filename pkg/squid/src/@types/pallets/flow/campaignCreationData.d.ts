import * as v58 from '../../../types/v58';

export type CampaignCreationData = {
	org: string;
	admin: string;
	name: string;
	target: bigint;
	deposit: bigint;
	expiry: number;
	protocol: v58.FlowProtocol;
	governance: v58.FlowGovernance;
	cid: string | null;
	tokenSymbol: string;
	tokenName: string;
	blockNumber: number;
};
