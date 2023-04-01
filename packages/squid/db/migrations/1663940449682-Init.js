module.exports = class Init1663940449682 {
	name = 'Init1663940449682';

	async up(db) {
		await db.query(
			`CREATE TABLE "organization_metadata" ("id" character varying NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "website" text NOT NULL, "email" text NOT NULL, "repo" text NOT NULL, "logo" text NOT NULL, "header" text NOT NULL, CONSTRAINT "PK_2fecc2ceb81f30a7f46be802cbd" PRIMARY KEY ("id"))`,
		);
		await db.query(
			`CREATE TABLE "organization_member" ("id" character varying NOT NULL, "address" text NOT NULL, "organization_id" character varying NOT NULL, "identity_id" character varying NOT NULL, CONSTRAINT "PK_81dbbb093cbe0539c170f3d1484" PRIMARY KEY ("id"))`,
		);
		await db.query(`CREATE INDEX "IDX_ce08825728e5afefdc6e682b8d" ON "organization_member" ("organization_id") `);
		await db.query(`CREATE INDEX "IDX_1474bfd9a3cd49bb05356c7401" ON "organization_member" ("identity_id") `);
		await db.query(
			`CREATE TABLE "campaign_metadata" ("id" character varying NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "markdown" text NOT NULL, "logo" text NOT NULL, "header" text NOT NULL, CONSTRAINT "PK_78e8f198409b4db925b1a44d092" PRIMARY KEY ("id"))`,
		);
		await db.query(
			`CREATE TABLE "campaign_contributor" ("id" character varying NOT NULL, "address" text NOT NULL, "contributed" numeric NOT NULL, "campaign_id" character varying NOT NULL, "identity_id" character varying NOT NULL, CONSTRAINT "PK_0a35c586180eb88ed47f33d0914" PRIMARY KEY ("id"))`,
		);
		await db.query(`CREATE INDEX "IDX_d0c2e621402f267f3358d42614" ON "campaign_contributor" ("campaign_id") `);
		await db.query(`CREATE INDEX "IDX_8bad89c14288e0fc1a47842a62" ON "campaign_contributor" ("identity_id") `);
		await db.query(
			`CREATE TABLE "voting" ("id" character varying NOT NULL, "unit" text NOT NULL, "scale" text NOT NULL, "yes" numeric NOT NULL, "no" numeric NOT NULL, "quorum" text, "majority" text NOT NULL, CONSTRAINT "PK_2dff1e5c53fa2cc610bea30476c" PRIMARY KEY ("id"))`,
		);
		await db.query(
			`CREATE TABLE "proposal_metadata" ("id" character varying NOT NULL, "name" text NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_7d1bbb4c8b93797430bc3bcd454" PRIMARY KEY ("id"))`,
		);
		await db.query(
			`CREATE TABLE "proposal" ("id" character varying NOT NULL, "creator" text NOT NULL, "type" text NOT NULL, "deposit" numeric NOT NULL, "state" text NOT NULL, "start" integer NOT NULL, "expiry" integer NOT NULL, "created_at_block" integer NOT NULL, "amount" numeric, "currency_id" text, "beneficiary" text, "slashing_rule" text, "creator_identity_id" character varying NOT NULL, "organization_id" character varying NOT NULL, "campaign_id" character varying, "voting_id" character varying NOT NULL, "beneficiary_identity_id" character varying, "metadata_id" character varying, CONSTRAINT "PK_ca872ecfe4fef5720d2d39e4275" PRIMARY KEY ("id"))`,
		);
		await db.query(`CREATE INDEX "IDX_23444b29668223511c32978852" ON "proposal" ("creator_identity_id") `);
		await db.query(`CREATE INDEX "IDX_f4b7a7ff0a51eff46e4c566bf9" ON "proposal" ("organization_id") `);
		await db.query(`CREATE INDEX "IDX_41bb268e1b6467aa9f9b5d2f53" ON "proposal" ("campaign_id") `);
		await db.query(`CREATE INDEX "IDX_350bc1b63e213d060a7d3daed4" ON "proposal" ("voting_id") `);
		await db.query(`CREATE INDEX "IDX_7886b63d75975f82473c36b2e9" ON "proposal" ("beneficiary_identity_id") `);
		await db.query(`CREATE INDEX "IDX_7d1bbb4c8b93797430bc3bcd45" ON "proposal" ("metadata_id") `);
		await db.query(
			`CREATE TABLE "campaign" ("id" character varying NOT NULL, "creator" text NOT NULL, "admin" text NOT NULL, "target" numeric NOT NULL, "deposit" numeric NOT NULL, "start" integer NOT NULL, "expiry" integer NOT NULL, "protocol" text NOT NULL, "governance" text NOT NULL, "token_symbol" text, "token_name" text, "state" text NOT NULL, "created_at_block" integer NOT NULL, "organization_id" character varying NOT NULL, "creator_identity_id" character varying NOT NULL, "admin_identity_id" character varying NOT NULL, "metadata_id" character varying, CONSTRAINT "PK_0ce34d26e7f2eb316a3a592cdc4" PRIMARY KEY ("id"))`,
		);
		await db.query(`CREATE INDEX "IDX_8e2fbfe1fc6dc632c4631a1224" ON "campaign" ("organization_id") `);
		await db.query(`CREATE INDEX "IDX_eea7cf3a0035b94ec26796ec93" ON "campaign" ("creator_identity_id") `);
		await db.query(`CREATE INDEX "IDX_e55315144bff83e38b8b1c4308" ON "campaign" ("admin_identity_id") `);
		await db.query(`CREATE INDEX "IDX_78e8f198409b4db925b1a44d09" ON "campaign" ("metadata_id") `);
		await db.query(
			`CREATE TABLE "organization" ("id" character varying NOT NULL, "creator" text NOT NULL, "prime" text NOT NULL, "treasury" text NOT NULL, "access_model" text NOT NULL, "fee_model" text NOT NULL, "type" text NOT NULL, "state" text NOT NULL, "membership_fee" numeric, "gov_currency" text NOT NULL, "pay_currency" text NOT NULL, "member_limit" integer NOT NULL, "created_at_block" integer NOT NULL, "updated_at_block" integer NOT NULL, "deposit" numeric NOT NULL, "creator_identity_id" character varying NOT NULL, "prime_identity_id" character varying NOT NULL, "treasury_identity_id" character varying NOT NULL, "metadata_id" character varying, CONSTRAINT "PK_472c1f99a32def1b0abb219cd67" PRIMARY KEY ("id"))`,
		);
		await db.query(`CREATE INDEX "IDX_cbf839fae85cd42883a525ac24" ON "organization" ("creator_identity_id") `);
		await db.query(`CREATE INDEX "IDX_200f445a9997438ffc30cf2034" ON "organization" ("prime_identity_id") `);
		await db.query(`CREATE INDEX "IDX_5f2442a79f529d80abe10ad509" ON "organization" ("treasury_identity_id") `);
		await db.query(`CREATE INDEX "IDX_2fecc2ceb81f30a7f46be802cb" ON "organization" ("metadata_id") `);
		await db.query(
			`CREATE TABLE "proposal_voter" ("id" character varying NOT NULL, "address" text NOT NULL, "power" numeric NOT NULL, "amount" numeric, "voted" boolean NOT NULL, "voting_id" character varying NOT NULL, "identity_id" character varying NOT NULL, CONSTRAINT "PK_c5f3dc257803abae426e96df398" PRIMARY KEY ("id"))`,
		);
		await db.query(`CREATE INDEX "IDX_3e308d731ed7a77a761f99bb2b" ON "proposal_voter" ("voting_id") `);
		await db.query(`CREATE INDEX "IDX_996f3867ec20cf438eef4d2218" ON "proposal_voter" ("identity_id") `);
		await db.query(
			`CREATE TABLE "identity" ("id" character varying NOT NULL, "address" text NOT NULL, "display_name" text, "legal_name" text, "email" text, "riot" text, "image" text, "twitter" text, "web" text, CONSTRAINT "PK_ff16a44186b286d5e626178f726" PRIMARY KEY ("id"))`,
		);
		await db.query(
			`ALTER TABLE "organization_member" ADD CONSTRAINT "FK_ce08825728e5afefdc6e682b8d7" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "organization_member" ADD CONSTRAINT "FK_1474bfd9a3cd49bb05356c74014" FOREIGN KEY ("identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "campaign_contributor" ADD CONSTRAINT "FK_d0c2e621402f267f3358d426149" FOREIGN KEY ("campaign_id") REFERENCES "campaign"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "campaign_contributor" ADD CONSTRAINT "FK_8bad89c14288e0fc1a47842a626" FOREIGN KEY ("identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "proposal" ADD CONSTRAINT "FK_23444b29668223511c329788525" FOREIGN KEY ("creator_identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "proposal" ADD CONSTRAINT "FK_f4b7a7ff0a51eff46e4c566bf90" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "proposal" ADD CONSTRAINT "FK_41bb268e1b6467aa9f9b5d2f535" FOREIGN KEY ("campaign_id") REFERENCES "campaign"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "proposal" ADD CONSTRAINT "FK_350bc1b63e213d060a7d3daed4f" FOREIGN KEY ("voting_id") REFERENCES "voting"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "proposal" ADD CONSTRAINT "FK_7886b63d75975f82473c36b2e9f" FOREIGN KEY ("beneficiary_identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "proposal" ADD CONSTRAINT "FK_7d1bbb4c8b93797430bc3bcd454" FOREIGN KEY ("metadata_id") REFERENCES "proposal_metadata"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "campaign" ADD CONSTRAINT "FK_8e2fbfe1fc6dc632c4631a1224b" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "campaign" ADD CONSTRAINT "FK_eea7cf3a0035b94ec26796ec933" FOREIGN KEY ("creator_identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "campaign" ADD CONSTRAINT "FK_e55315144bff83e38b8b1c43086" FOREIGN KEY ("admin_identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "campaign" ADD CONSTRAINT "FK_78e8f198409b4db925b1a44d092" FOREIGN KEY ("metadata_id") REFERENCES "campaign_metadata"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "organization" ADD CONSTRAINT "FK_cbf839fae85cd42883a525ac24b" FOREIGN KEY ("creator_identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "organization" ADD CONSTRAINT "FK_200f445a9997438ffc30cf20344" FOREIGN KEY ("prime_identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "organization" ADD CONSTRAINT "FK_5f2442a79f529d80abe10ad509b" FOREIGN KEY ("treasury_identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "organization" ADD CONSTRAINT "FK_2fecc2ceb81f30a7f46be802cbd" FOREIGN KEY ("metadata_id") REFERENCES "organization_metadata"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "proposal_voter" ADD CONSTRAINT "FK_3e308d731ed7a77a761f99bb2b3" FOREIGN KEY ("voting_id") REFERENCES "voting"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "proposal_voter" ADD CONSTRAINT "FK_996f3867ec20cf438eef4d22180" FOREIGN KEY ("identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
	}

	async down(db) {
		await db.query(`DROP TABLE "organization_metadata"`);
		await db.query(`DROP TABLE "organization_member"`);
		await db.query(`DROP INDEX "public"."IDX_ce08825728e5afefdc6e682b8d"`);
		await db.query(`DROP INDEX "public"."IDX_1474bfd9a3cd49bb05356c7401"`);
		await db.query(`DROP TABLE "campaign_metadata"`);
		await db.query(`DROP TABLE "campaign_contributor"`);
		await db.query(`DROP INDEX "public"."IDX_d0c2e621402f267f3358d42614"`);
		await db.query(`DROP INDEX "public"."IDX_8bad89c14288e0fc1a47842a62"`);
		await db.query(`DROP TABLE "voting"`);
		await db.query(`DROP TABLE "proposal_metadata"`);
		await db.query(`DROP TABLE "proposal"`);
		await db.query(`DROP INDEX "public"."IDX_23444b29668223511c32978852"`);
		await db.query(`DROP INDEX "public"."IDX_f4b7a7ff0a51eff46e4c566bf9"`);
		await db.query(`DROP INDEX "public"."IDX_41bb268e1b6467aa9f9b5d2f53"`);
		await db.query(`DROP INDEX "public"."IDX_350bc1b63e213d060a7d3daed4"`);
		await db.query(`DROP INDEX "public"."IDX_7886b63d75975f82473c36b2e9"`);
		await db.query(`DROP INDEX "public"."IDX_7d1bbb4c8b93797430bc3bcd45"`);
		await db.query(`DROP TABLE "campaign"`);
		await db.query(`DROP INDEX "public"."IDX_8e2fbfe1fc6dc632c4631a1224"`);
		await db.query(`DROP INDEX "public"."IDX_eea7cf3a0035b94ec26796ec93"`);
		await db.query(`DROP INDEX "public"."IDX_e55315144bff83e38b8b1c4308"`);
		await db.query(`DROP INDEX "public"."IDX_78e8f198409b4db925b1a44d09"`);
		await db.query(`DROP TABLE "organization"`);
		await db.query(`DROP INDEX "public"."IDX_cbf839fae85cd42883a525ac24"`);
		await db.query(`DROP INDEX "public"."IDX_200f445a9997438ffc30cf2034"`);
		await db.query(`DROP INDEX "public"."IDX_5f2442a79f529d80abe10ad509"`);
		await db.query(`DROP INDEX "public"."IDX_2fecc2ceb81f30a7f46be802cb"`);
		await db.query(`DROP TABLE "proposal_voter"`);
		await db.query(`DROP INDEX "public"."IDX_3e308d731ed7a77a761f99bb2b"`);
		await db.query(`DROP INDEX "public"."IDX_996f3867ec20cf438eef4d2218"`);
		await db.query(`DROP TABLE "identity"`);
		await db.query(`ALTER TABLE "organization_member" DROP CONSTRAINT "FK_ce08825728e5afefdc6e682b8d7"`);
		await db.query(`ALTER TABLE "organization_member" DROP CONSTRAINT "FK_1474bfd9a3cd49bb05356c74014"`);
		await db.query(`ALTER TABLE "campaign_contributor" DROP CONSTRAINT "FK_d0c2e621402f267f3358d426149"`);
		await db.query(`ALTER TABLE "campaign_contributor" DROP CONSTRAINT "FK_8bad89c14288e0fc1a47842a626"`);
		await db.query(`ALTER TABLE "proposal" DROP CONSTRAINT "FK_23444b29668223511c329788525"`);
		await db.query(`ALTER TABLE "proposal" DROP CONSTRAINT "FK_f4b7a7ff0a51eff46e4c566bf90"`);
		await db.query(`ALTER TABLE "proposal" DROP CONSTRAINT "FK_41bb268e1b6467aa9f9b5d2f535"`);
		await db.query(`ALTER TABLE "proposal" DROP CONSTRAINT "FK_350bc1b63e213d060a7d3daed4f"`);
		await db.query(`ALTER TABLE "proposal" DROP CONSTRAINT "FK_7886b63d75975f82473c36b2e9f"`);
		await db.query(`ALTER TABLE "proposal" DROP CONSTRAINT "FK_7d1bbb4c8b93797430bc3bcd454"`);
		await db.query(`ALTER TABLE "campaign" DROP CONSTRAINT "FK_8e2fbfe1fc6dc632c4631a1224b"`);
		await db.query(`ALTER TABLE "campaign" DROP CONSTRAINT "FK_eea7cf3a0035b94ec26796ec933"`);
		await db.query(`ALTER TABLE "campaign" DROP CONSTRAINT "FK_e55315144bff83e38b8b1c43086"`);
		await db.query(`ALTER TABLE "campaign" DROP CONSTRAINT "FK_78e8f198409b4db925b1a44d092"`);
		await db.query(`ALTER TABLE "organization" DROP CONSTRAINT "FK_cbf839fae85cd42883a525ac24b"`);
		await db.query(`ALTER TABLE "organization" DROP CONSTRAINT "FK_200f445a9997438ffc30cf20344"`);
		await db.query(`ALTER TABLE "organization" DROP CONSTRAINT "FK_5f2442a79f529d80abe10ad509b"`);
		await db.query(`ALTER TABLE "organization" DROP CONSTRAINT "FK_2fecc2ceb81f30a7f46be802cbd"`);
		await db.query(`ALTER TABLE "proposal_voter" DROP CONSTRAINT "FK_3e308d731ed7a77a761f99bb2b3"`);
		await db.query(`ALTER TABLE "proposal_voter" DROP CONSTRAINT "FK_996f3867ec20cf438eef4d22180"`);
	}
};
