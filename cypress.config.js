import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config({ path: process.env.ENV_FILE || ".env" });
export default defineConfig({
  e2e: {
       baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:5173",
    setupNodeEvents(on, config) {},
     },
});
