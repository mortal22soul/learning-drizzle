CREATE TABLE IF NOT EXISTS "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"id2" integer DEFAULT 0 NOT NULL,
	"name" varchar(255) NOT NULL
);
