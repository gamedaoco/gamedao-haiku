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
import { Identity } from './identity.model';
import { CampaignMetadata } from './campaignMetadata.model';
import { CampaignContributor } from './campaignContributor.model';
import { Proposal } from './proposal.model';

@Entity_()
export class Campaign {
	constructor(props?: Partial<Campaign>) {
		Object.assign(this, props);
	}

	@PrimaryColumn_()
	id!: string;

	@Index_()
	@ManyToOne_(() => Organization, { nullable: false })
	organization!: Organization;

	@Column_('text', { nullable: false })
	creator!: string;

	@Index_()
	@ManyToOne_(() => Identity, { nullable: false })
	creatorIdentity!: Identity;

	@Column_('text', { nullable: false })
	admin!: string;

	@Index_()
	@ManyToOne_(() => Identity, { nullable: false })
	adminIdentity!: Identity;

	@Column_('numeric', { transformer: marshal.bigintTransformer, nullable: false })
	target!: bigint;

	@Column_('numeric', { transformer: marshal.bigintTransformer, nullable: false })
	deposit!: bigint;

	@Column_('int4', { nullable: false })
	start!: number;

	@Column_('int4', { nullable: false })
	expiry!: number;

	@Column_('text', { nullable: false })
	protocol!: string;

	@Column_('text', { nullable: false })
	governance!: string;

	@Column_('text', { nullable: true })
	tokenSymbol!: string | undefined | null;

	@Column_('text', { nullable: true })
	tokenName!: string | undefined | null;

	@Column_('text', { nullable: false })
	state!: string;

	@Index_()
	@ManyToOne_(() => CampaignMetadata, { nullable: true })
	metadata!: CampaignMetadata | undefined | null;

	@OneToMany_(() => CampaignContributor, (e) => e.campaign)
	contributors!: CampaignContributor[];

	@OneToMany_(() => Proposal, (e) => e.campaign)
	proposals!: Proposal[];

	@Column_('int4', { nullable: false })
	createdAtBlock!: number;
}
