import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
     devServer:{
        framework:"react",
        bundler:"vite"
      },
    setupNodeEvents(on, config) {
    
      
    },
     baseUrl:"http://localhost:4173"
  },
});
