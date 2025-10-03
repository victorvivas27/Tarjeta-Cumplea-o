import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();
export default defineConfig({
     e2e: {
          baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:5173",
          setupNodeEvents(on, config) { },
     },
     video: true,
     videoCompression: 32,
     projectId: "q7w16c",
});
