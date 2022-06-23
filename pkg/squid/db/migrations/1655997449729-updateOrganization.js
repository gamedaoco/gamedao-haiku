module.exports = class updateOrganization1655997449729 {
	name = 'updateOrganization1655997449729';

	async up(db) {
		await db.query(`ALTER TABLE "organization_metadata" ADD "header" text NOT NULL`);
		await db.query(`ALTER TABLE "organization" ADD "deposit" numeric NOT NULL`);
	}

	async down(db) {
		await db.query(`ALTER TABLE "organization_metadata" DROP COLUMN "header"`);
		await db.query(`ALTER TABLE "organization" DROP COLUMN "deposit"`);
	}
};
