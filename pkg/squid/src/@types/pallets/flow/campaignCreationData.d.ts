import * as v51 from '../../../types/v51';

export type CampaignCreationData = {
	org: string;
	admin: string;
	name: string;
	target: bigint;
	deposit: bigint;
	expiry: number;
	protocol: v51.FlowProtocol;
	governance: v51.FlowGovernance;
	cid: string | null;
	tokenSymbol: string;
	tokenName: string;
	blockNumber: number;
};
