module.exports = class addStartBlockToProposals1656927908350 {
  name = 'addStartBlockToProposals1656927908350'

  async up(db) {
    await db.query(`ALTER TABLE "proposal" ADD "start_block" integer NOT NULL`)
  }

  async down(db) {
    await db.query(`ALTER TABLE "proposal" DROP COLUMN "start_block"`)
  }
}
