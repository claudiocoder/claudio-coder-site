import { coverageConfigDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: 'contentlayer/generated',
        replacement: fileURLToPath(new URL('.contentlayer/generated', import.meta.url)),
      }
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      exclude: [
        'vitest.config.ts',
        '**/*.config.*',
        'src/utils',
        ...coverageConfigDefaults.exclude,
      ],
    },
    setupFiles: ['vitest.setup.ts'],
    watch: false,
  },
})
