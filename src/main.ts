import { db } from "./drizzle/db";
import { UserTable } from "./drizzle/schema";
import { sql } from "drizzle-orm";

async function main() {
  // create
  // const user = await db
  //   .insert(UserTable)
  //   .values([
  //     {
  //       name: "John Doe",
  //       age: 30,
  //       email: "test1@example.org",
  //       role: "BASIC",
  //     },
  //     {
  //       name: "Jane Doe",
  //       age: 32,
  //       email: "test2@example.org",
  //       role: "BASIC",
  //     },
  //   ])
  //   .returning({ id: UserTable.id, userName: UserTable.name })
  //   .onConflictDoUpdate({
  //     target: UserTable.email,
  //     set: { name: "Updated Name" },
  //   }); // returns the id and username of the inserted row so we can use it later

  // read

  const users = await db.query.UserTable.findMany({
    columns: { name: true },
    extras: {
      lowerCaseName: sql<string>`lower(${UserTable.name})`.as("lowerCaseName"),
    },
  });
}
main();
