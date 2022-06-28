import {
	Entity as Entity_,
	Column as Column_,
	PrimaryColumn as PrimaryColumn_,
	ManyToOne as ManyToOne_,
	Index as Index_,
	OneToMany as OneToMany_,
} from 'typeorm';
import * as marshal from './marshal';
import { Organization } from './organization.model';
import { Campaign } from './campaign.model';
import { Identity } from './identity.model';
import { ProposalTypeData, fromJsonProposalTypeData } from './_proposalTypeData';
import { ProposalMetadata } from './proposalMetadata.model';
import { ProposalVoter } from './proposalVoter.model';

@Entity_()
export class Proposal {
	constructor(props?: Partial<Proposal>) {
		Object.assign(this, props);
	}

	@PrimaryColumn_()
	id!: string;

	@Index_()
	@ManyToOne_(() => Organization, { nullable: false })
	organization!: Organization;

	@Index_()
	@ManyToOne_(() => Campaign, { nullable: true })
	campaign!: Campaign | undefined | null;

	@Column_('text', { nullable: false })
	creator!: string;

	@Index_()
	@ManyToOne_(() => Identity, { nullable: false })
	creatorIdentity!: Identity;

	@Column_('int4', { nullable: false })
	type!: number;

	@Column_('jsonb', {
		transformer: {
			to: (obj) => (obj == null ? undefined : obj.toJSON()),
			from: (obj) => (obj == null ? undefined : fromJsonProposalTypeData(obj)),
		},
		nullable: true,
	})
	data!: ProposalTypeData | undefined | null;

	@Column_('int4', { nullable: false })
	votingType!: number;

	@Column_('text', { nullable: false })
	state!: string;

	@Index_()
	@ManyToOne_(() => ProposalMetadata, { nullable: true })
	metadata!: ProposalMetadata | undefined | null;

	@Column_('int4', { nullable: false })
	expiryBlock!: number;

	@Column_('int4', { nullable: false })
	createdAtBlock!: number;

	@OneToMany_(() => ProposalVoter, (e) => e.proposal)
	voters!: ProposalVoter[];
}
