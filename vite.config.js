const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './views/index.html',
                // ...
                // List all files you want in your build
            }
        }
    }
})
