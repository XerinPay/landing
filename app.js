// Plesk / Phusion Passenger startup file for Next.js standalone
// Passenger loads this file as CommonJS, so we use dynamic import() for the ESM server
async function main() {
  await import("./apps/web/server.js");
}
main();
