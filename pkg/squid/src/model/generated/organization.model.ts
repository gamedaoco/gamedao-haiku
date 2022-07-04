import {
	Entity as Entity_,
	Column as Column_,
	PrimaryColumn as PrimaryColumn_,
	ManyToOne as ManyToOne_,
	Index as Index_,
	OneToMany as OneToMany_,
} from 'typeorm';
import * as marshal from './marshal';
import { Identity } from './identity.model';
import { OrganizationMetadata } from './organizationMetadata.model';
import { OrganizationMember } from './organizationMember.model';
import { Campaign } from './campaign.model';
import { Proposal } from './proposal.model';

@Entity_()
export class Organization {
	constructor(props?: Partial<Organization>) {
		Object.assign(this, props);
	}

	@PrimaryColumn_()
	id!: string;

	@Column_('text', { nullable: false })
	creator!: string;

	@Index_()
	@ManyToOne_(() => Identity, { nullable: false })
	creatorIdentity!: Identity;

	@Column_('text', { nullable: false })
	controller!: string;

	@Index_()
	@ManyToOne_(() => Identity, { nullable: false })
	controllerIdentity!: Identity;

	@Column_('text', { nullable: false })
	treasury!: string;

	@Index_()
	@ManyToOne_(() => Identity, { nullable: false })
	treasuryIdentity!: Identity;

	@Column_('text', { nullable: false })
	access!: string;

	@Column_('text', { nullable: false })
	feeModel!: string;

	@Column_('text', { nullable: false })
	type!: string;

	@Column_('numeric', { transformer: marshal.bigintTransformer, nullable: false })
	fee!: bigint;

	@Column_('int4', { nullable: false })
	govAsset!: number;

	@Column_('int4', { nullable: false })
	payAsset!: number;

	@Column_('numeric', { transformer: marshal.bigintTransformer, nullable: false })
	memberLimit!: bigint;

	@Index_()
	@ManyToOne_(() => OrganizationMetadata, { nullable: true })
	metadata!: OrganizationMetadata | undefined | null;

	@Column_('int4', { nullable: false })
	createdAtBlock!: number;

	@Column_('numeric', { transformer: marshal.bigintTransformer, nullable: false })
	deposit!: bigint;

	@OneToMany_(() => OrganizationMember, (e) => e.organization)
	members!: OrganizationMember[];

	@OneToMany_(() => Campaign, (e) => e.organization)
	campaigns!: Campaign[];

	@OneToMany_(() => Proposal, (e) => e.organization)
	proposals!: Proposal[];
}
