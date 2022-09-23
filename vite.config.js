const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                wiki: './wiki/communication.html',
                // ...
                // List all files you want in your build
            }
        }
    }
})
