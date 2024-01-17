/**
 * bun.serve()
 * 
 * Use Bun.serve() to spin up an HTTP server, WebSocket
 * server, or both. It's based on familiar Web-standard APIs
 * like Request and Response.
 */

const message: string = "Hello from Bun!";

Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response(message);
  },
});

console.info("You have been served.");

/**
 * bun:sqlite
 * 
 * Bun has built-in support for SQLite. It has an API that's
 * inspired by better-sqlite3, but is written in native code
 * to be faster.
 */

import { Database } from "bun:sqlite";

const db = new Database("db.sqlite3")
const query = db.query("select 'Bun' as runtime;");
query.get();
