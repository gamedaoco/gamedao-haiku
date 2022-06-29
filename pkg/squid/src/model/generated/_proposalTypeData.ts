import { ProposalTypeWithdrawalData } from './_proposalTypeWithdrawalData';

export type ProposalTypeData = ProposalTypeWithdrawalData;

export function fromJsonProposalTypeData(json: any): ProposalTypeData {
	switch (json?.isTypeOf) {
		case 'ProposalTypeWithdrawalData':
			return new ProposalTypeWithdrawalData(undefined, json);
		default:
			throw new TypeError('Unknown json object passed as ProposalTypeData');
	}
}
