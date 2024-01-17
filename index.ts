const message: string = "Hello from Bun!";

Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response(message);
  },
});

console.info("You have been served.");
