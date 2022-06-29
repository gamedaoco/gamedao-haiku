import {
	Entity as Entity_,
	Column as Column_,
	PrimaryColumn as PrimaryColumn_,
	ManyToOne as ManyToOne_,
	Index as Index_,
} from 'typeorm';
import * as marshal from './marshal';
import { Proposal } from './proposal.model';
import { Identity } from './identity.model';

@Entity_()
export class ProposalVoter {
	constructor(props?: Partial<ProposalVoter>) {
		Object.assign(this, props);
	}

	@PrimaryColumn_()
	id!: string;

	@Index_()
	@ManyToOne_(() => Proposal, { nullable: false })
	proposal!: Proposal;

	@Column_('text', { nullable: false })
	address!: string;

	@Index_()
	@ManyToOne_(() => Identity, { nullable: false })
	identity!: Identity;

	@Column_('numeric', { transformer: marshal.bigintTransformer, nullable: false })
	voted!: bigint;
}
