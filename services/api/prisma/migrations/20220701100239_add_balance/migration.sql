-- AlterTable
ALTER TABLE "ChainInfo" ALTER COLUMN "blockNumber" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "Balance" (
    "id" BIGSERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "balanceId" INTEGER NOT NULL,
    "free" TEXT NOT NULL DEFAULT '0',
    "reserved" TEXT NOT NULL DEFAULT '0',
    "frozen" TEXT NOT NULL DEFAULT '0',

    CONSTRAINT "Balance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Balance_address_balanceId_key" ON "Balance"("address", "balanceId");
