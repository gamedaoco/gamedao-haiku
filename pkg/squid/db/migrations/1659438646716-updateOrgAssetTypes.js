module.exports = class updateOrgAssetTypes1659438646716 {
	name = 'updateOrgAssetTypes1659438646716';

	async up(db) {
		await db.query(`ALTER TABLE "organization" DROP COLUMN "gov_asset"`);
		await db.query(`ALTER TABLE "organization" ADD "gov_asset" text NOT NULL`);
		await db.query(`ALTER TABLE "organization" DROP COLUMN "pay_asset"`);
		await db.query(`ALTER TABLE "organization" ADD "pay_asset" text NOT NULL`);
	}

	async down(db) {
		await db.query(`ALTER TABLE "organization" ADD "gov_asset" integer NOT NULL`);
		await db.query(`ALTER TABLE "organization" DROP COLUMN "gov_asset"`);
		await db.query(`ALTER TABLE "organization" ADD "pay_asset" integer NOT NULL`);
		await db.query(`ALTER TABLE "organization" DROP COLUMN "pay_asset"`);
	}
};
