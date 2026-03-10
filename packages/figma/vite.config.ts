import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { viteFigmaPlugin } from './vite/figma'
import { viteSingleFile } from 'vite-plugin-singlefile'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        viteSingleFile(),
        viteFigmaPlugin({
            name: "Scarlab Icons",
            id: "1053846082213772972",
            editorType: ["figma"],
            api:  "1.0.0",
            main: "src/figma.ts"
        })
    ]
})
