module.exports = class addWebToIdentity1656927980028 {
  name = 'addWebToIdentity1656927980028'

  async up(db) {
    await db.query(`ALTER TABLE "identity" ADD "web" text`)
  }

  async down(db) {
    await db.query(`ALTER TABLE "identity" DROP COLUMN "web"`)
  }
}
