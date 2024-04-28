import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  e2e: {
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
