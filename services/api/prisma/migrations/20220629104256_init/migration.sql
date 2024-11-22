-- CreateTable
CREATE TABLE "ChainInfo" (
    "id" SERIAL NOT NULL,
    "blockNumber" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "ChainInfo_pkey" PRIMARY KEY ("id")
);
