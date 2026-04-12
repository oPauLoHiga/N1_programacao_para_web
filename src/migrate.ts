import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dbPath = fileURLToPath(new URL("../data/noticias.db", import.meta.url));
const migrationsFolder = fileURLToPath(new URL("../drizzle", import.meta.url));

mkdirSync(dirname(dbPath), { recursive: true });

const client = createClient({ url: `file:${dbPath}` });
const db = drizzle(client);

await migrate(db, { migrationsFolder });
client.close();
console.log("Migrations aplicadas.");
