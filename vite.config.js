const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                pages: './wiki/pages/communication.html',
                // ...
                // List all files you want in your build
            }
        }
    }
})
