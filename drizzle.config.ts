import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    host: "localhost:5432",
    user: "postgres",
    password: "12345",
    database: "drizzle",
  },
  verbose: true,
  strict: true,
});
