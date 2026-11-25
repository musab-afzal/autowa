import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: { root },
  /* loaded from node_modules at runtime: pdfkit reads its font files from disk */
  serverExternalPackages: ["pdfkit", "exceljs"],
};

export default nextConfig;
