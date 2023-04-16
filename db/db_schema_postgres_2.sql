CREATE TABLE "last_update" (
  "id" integer PRIMARY KEY,
  "rss_feed" timestamp
);

CREATE TABLE "posts" (
  "id" integer PRIMARY KEY,
  "content" text UNIQUE
);
