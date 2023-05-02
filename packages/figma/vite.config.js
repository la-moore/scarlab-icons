const vue = require('@vitejs/plugin-vue')
const { defineConfig } = require('vite')
const { FigmaPlugin } = require('@scarlab-icons/vite-plugin-figma')
const { viteSingleFile } = require('vite-plugin-singlefile')

export default defineConfig({
    plugins: [
        vue(),
        viteSingleFile(),
        FigmaPlugin({
            name: "Scarlab Icons",
            id: "1053846082213772972",
            editorType: [
                "figma"
            ],
            api:  "1.0.0",
            main: "src/figma.ts"
        })
    ],
    build: {
        target: "esnext",
        assetsInlineLimit: 100000000,
        chunkSizeWarningLimit: 100000000,
        cssCodeSplit: false,
        brotliSize: false,
        rollupOptions: {
            inlineDynamicImports: true,
            output: {
                manualChunks: () => "everything.js",
            },
        },
    }
})
