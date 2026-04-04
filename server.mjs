import { startServer } from './dist/server/entry.mjs';

const port = process.env.PORT || 8080;
const host = '0.0.0.0';

console.log(`Starting Astro server on ${host}:${port}...`);

// For @astrojs/node standalone mode, startServer() handles the server creation.
// We pass the port to ensure it's picked up correctly from App Hosting.
try {
  startServer();
} catch (error) {
  console.error('Failed to start server:', error);
  process.exit(1);
}
