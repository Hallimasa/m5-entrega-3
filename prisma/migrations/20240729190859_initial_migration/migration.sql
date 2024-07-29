-- CreateTable
CREATE TABLE "cars" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "brand" VARCHAR(255) NOT NULL,
    "year" SMALLINT NOT NULL,
    "km" DECIMAL NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);
