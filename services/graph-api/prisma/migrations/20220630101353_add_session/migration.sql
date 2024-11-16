-- AlterTable
ALTER TABLE "ChainInfo" ALTER COLUMN "blockNumber" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "Session" (
    "id" BIGSERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "key" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_address_key" ON "Session"("address");

-- CreateIndex
CREATE UNIQUE INDEX "Session_key_key" ON "Session"("key");
