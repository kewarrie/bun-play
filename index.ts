const message: string = "Hello from Bun!";

Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response(message);
  },
});

console.info("You have been served.");

import { Database } from "bun:sqlite";

const db = new Database("db.sql")
const query = db.query("select 'Bun' as runtime;");
query.get();
