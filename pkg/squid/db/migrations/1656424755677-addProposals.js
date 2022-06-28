module.exports = class addProposalst1656424755677 {
	name = 'addProposalst1656424755677';

	async up(db) {
		await db.query(
			`CREATE TABLE "proposal_metadata" ("id" character varying NOT NULL, "name" text NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_7d1bbb4c8b93797430bc3bcd454" PRIMARY KEY ("id"))`,
		);
		await db.query(
			`CREATE TABLE "proposal_voter" ("id" character varying NOT NULL, "address" text NOT NULL, "voted" numeric NOT NULL, "proposal_id" character varying NOT NULL, "identity_id" character varying NOT NULL, CONSTRAINT "PK_c5f3dc257803abae426e96df398" PRIMARY KEY ("id"))`,
		);
		await db.query(`CREATE INDEX "IDX_60af3256f3c02399e31830c6e1" ON "proposal_voter" ("proposal_id") `);
		await db.query(`CREATE INDEX "IDX_996f3867ec20cf438eef4d2218" ON "proposal_voter" ("identity_id") `);
		await db.query(
			`CREATE TABLE "proposal" ("id" character varying NOT NULL, "creator" text NOT NULL, "type" numeric NOT NULL, "data" jsonb NOT NULL, "state" text NOT NULL, "voting_type" numeric NOT NULL, "expiry_block" integer NOT NULL, "created_at_block" integer NOT NULL, "organization_id" character varying NOT NULL, "campaign_id" character varying, "creator_identity_id" character varying NOT NULL, "metadata_id" character varying, CONSTRAINT "PK_ca872ecfe4fef5720d2d39e4275" PRIMARY KEY ("id"))`,
		);
		await db.query(`CREATE INDEX "IDX_f4b7a7ff0a51eff46e4c566bf9" ON "proposal" ("organization_id") `);
		await db.query(`CREATE INDEX "IDX_41bb268e1b6467aa9f9b5d2f53" ON "proposal" ("campaign_id") `);
		await db.query(`CREATE INDEX "IDX_23444b29668223511c32978852" ON "proposal" ("creator_identity_id") `);
		await db.query(`CREATE INDEX "IDX_7d1bbb4c8b93797430bc3bcd45" ON "proposal" ("metadata_id") `);
		await db.query(
			`ALTER TABLE "proposal_voter" ADD CONSTRAINT "FK_60af3256f3c02399e31830c6e16" FOREIGN KEY ("proposal_id") REFERENCES "proposal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "proposal_voter" ADD CONSTRAINT "FK_996f3867ec20cf438eef4d22180" FOREIGN KEY ("identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "proposal" ADD CONSTRAINT "FK_f4b7a7ff0a51eff46e4c566bf90" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "proposal" ADD CONSTRAINT "FK_41bb268e1b6467aa9f9b5d2f535" FOREIGN KEY ("campaign_id") REFERENCES "campaign"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "proposal" ADD CONSTRAINT "FK_23444b29668223511c329788525" FOREIGN KEY ("creator_identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await db.query(
			`ALTER TABLE "proposal" ADD CONSTRAINT "FK_7d1bbb4c8b93797430bc3bcd454" FOREIGN KEY ("metadata_id") REFERENCES "proposal_metadata"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
	}

	async down(db) {
		await db.query(`DROP TABLE "proposal_metadata"`);
		await db.query(`DROP TABLE "proposal_voter"`);
		await db.query(`DROP INDEX "public"."IDX_60af3256f3c02399e31830c6e1"`);
		await db.query(`DROP INDEX "public"."IDX_996f3867ec20cf438eef4d2218"`);
		await db.query(`DROP TABLE "proposal"`);
		await db.query(`DROP INDEX "public"."IDX_f4b7a7ff0a51eff46e4c566bf9"`);
		await db.query(`DROP INDEX "public"."IDX_41bb268e1b6467aa9f9b5d2f53"`);
		await db.query(`DROP INDEX "public"."IDX_23444b29668223511c32978852"`);
		await db.query(`DROP INDEX "public"."IDX_7d1bbb4c8b93797430bc3bcd45"`);
		await db.query(`ALTER TABLE "proposal_voter" DROP CONSTRAINT "FK_60af3256f3c02399e31830c6e16"`);
		await db.query(`ALTER TABLE "proposal_voter" DROP CONSTRAINT "FK_996f3867ec20cf438eef4d22180"`);
		await db.query(`ALTER TABLE "proposal" DROP CONSTRAINT "FK_f4b7a7ff0a51eff46e4c566bf90"`);
		await db.query(`ALTER TABLE "proposal" DROP CONSTRAINT "FK_41bb268e1b6467aa9f9b5d2f535"`);
		await db.query(`ALTER TABLE "proposal" DROP CONSTRAINT "FK_23444b29668223511c329788525"`);
		await db.query(`ALTER TABLE "proposal" DROP CONSTRAINT "FK_7d1bbb4c8b93797430bc3bcd454"`);
	}
};
