// server.ts

// hello from bun!
// built by default

export default {
  port: 3000,
  fetch(req: Request): Response {
    // This is just a test
    return new Response("Hello from Bun!");
  },
};
