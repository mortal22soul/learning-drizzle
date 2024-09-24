import { db } from "./drizzle/db";
import { UserPreferencesTable, UserTable } from "./drizzle/schema";
import { asc, sql, eq, gt } from "drizzle-orm";

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
  // await db.insert(UserPreferencesTable).values({
  //   emailUpdates: true,
  //   userId: "224987be-506b-451c-976d-59fbdb365b06",
  // });
  // read query style
  // const users = await db.query.UserTable.findMany({
  //   columns: { name: true, age: true }, // only return the name column
  //   limit: 10, // limits the number of rows returned
  //   offset: 0, // skips the first row
  //   // orderBy: asc(UserTable.name), // orders by name in ascending order
  //   // orderBy: (table, { asc }) => asc(table.name),
  //   where: (table, funcs) => funcs.gt(table.age, 30),
  //   // with: { preferences: true }, // joins
  //   // extras: {
  //   //   lowerCaseName: sql<string>`lower(${UserTable.name})`.as("lowerCaseName"),
  //   // },
  // });
  // read select style
  // const users = await db
  //   .select({
  //     id: UserTable.id,
  //     name: UserTable.name,
  //     age: UserTable.age,
  //     email: UserTable.email,
  //     // emailUpdates: UserPreferencesTable.emailUpdates,
  //     count: count(sql`*`),
  //   })
  //   .from(UserTable)
  //   // .where(eq(UserTable.name, "John Doe"))
  //   .orderBy(asc(UserTable.id))
  //   .limit(10)
  //   .groupBy(UserTable.id);
  // // .leftJoin(
  // //   UserPreferencesTable,
  // //   eq(UserTable.id, UserPreferencesTable.userId)
  // // );
  // console.log(users);
}
main();
