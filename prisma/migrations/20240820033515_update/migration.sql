-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "like" INTEGER NOT NULL DEFAULT 0,
    "star" INTEGER NOT NULL DEFAULT 0,
    "postId" TEXT,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
