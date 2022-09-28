const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: './index.html',
        communication: './wiki/communication.html',
        implementation: './wiki/implementation.html',
        // ...
        // List all files you want in your build
      },
    },
  },
});
