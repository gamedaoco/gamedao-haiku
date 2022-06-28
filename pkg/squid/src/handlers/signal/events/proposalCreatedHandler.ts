// Imports
import { ProposalMetadata } from '../../../@types/ipfs/proposalMetadata';
import { createProposal } from '../../../database/proposal';
import { fetchMetadataByCid } from '../../../ipfs/ipfs';
import { getProposalCreationData } from '../../../transformer/proposalCreateDataTransformer';
import { SignalProposalCreatedEvent } from '../../../types/events';
import { hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
async function handleProposalCreatedEvent(context: EventHandlerContext) {
	if (!context.extrinsic) return;

	// Get versioned call
	const callCreateData = getProposalCreationData(context);
	if (!callCreateData) return;

	// Get versioned instance
	const proposalCreatedEventData = new SignalProposalCreatedEvent(context);

	// Get id
	if (proposalCreatedEventData.isV51) {
		callCreateData.id = hashToHexString(proposalCreatedEventData.asV51.proposalId);
	} else if (proposalCreatedEventData.isV55) {
		callCreateData.id = hashToHexString(proposalCreatedEventData.asV55.proposalId);
	} else {
		console.error(`Unknown version of ProposalCreated event!`);
		return;
	}

	// Load proposal metadata
	const metadata: ProposalMetadata | null = callCreateData.cid
		? await fetchMetadataByCid<ProposalMetadata>(callCreateData.cid, `Proposal ${callCreateData.id}`)
		: null;
	if (!metadata) {
		callCreateData.cid = null;
	}

	// Create proposal
	await createProposal(context.store, callCreateData, metadata);
}

// Exports
export { handleProposalCreatedEvent };
