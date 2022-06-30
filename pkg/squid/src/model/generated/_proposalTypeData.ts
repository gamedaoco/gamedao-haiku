import { ProposalTypeGeneralData } from './_proposalTypeGeneralData';
import { ProposalTypeWithdrawalData } from './_proposalTypeWithdrawalData';

export type ProposalTypeData = ProposalTypeGeneralData | ProposalTypeWithdrawalData;

export function fromJsonProposalTypeData(json: any): ProposalTypeData {
	switch (json?.isTypeOf) {
		case 'ProposalTypeGeneralData':
			return new ProposalTypeGeneralData(undefined, json);
		case 'ProposalTypeWithdrawalData':
			return new ProposalTypeWithdrawalData(undefined, json);
		default:
			throw new TypeError('Unknown json object passed as ProposalTypeData');
	}
}
