// Imports
import { Body, Campaign } from '../../../model';

// Exports
export type ProposalCreationData = {
	proposalType: number;
	contextId: Uint8Array;
	title: Uint8Array;
	cid: Uint8Array;
	amount?: bigint;
	start?: number;
	expiry: number;

	body?: Body;
	campaign?: Campaign;
};
