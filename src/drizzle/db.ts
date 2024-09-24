import { drizzle } from "drizzle-orm/postgres-js";

import * as schema from "./schema";

import postgres from "postgres";

const client = postgres("postgres://postgres:12345@localhost:5432/drizzle");

export const db = drizzle(client, { schema, logger: true });
