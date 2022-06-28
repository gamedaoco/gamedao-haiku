export type ProposalCreationData = {
	id?: string;

	orgId?: string;
	campaignId?: string;
	title: string;
	cid: string | null;
	start: number;
	expiry: number;

	type: number;
	votingType: number;

	withdrawAmount?: bigint;

	signer: string;
	blockNumber: number;
};
