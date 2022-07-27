import path from 'path'
import vue from '@vitejs/plugin-vue'

module.exports = {
  build: {
    chunkSizeWarningLimit: 700
  },
  resolve: {
    alias: {
      '/~': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    vue()
  ],
  optimizeDeps: {
    include: [
      '@scarlab-icons/vue',
    ],
  },
}
