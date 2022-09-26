const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                communication: './wiki/communication.html',
                implementation: './wiki/implementation.html',
                // ...
                // List all files you want in your build
            }
        }
    }
})
