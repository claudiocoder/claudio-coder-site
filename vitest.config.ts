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
        replacement: fileURLToPath(
          new URL('.contentlayer/generated', import.meta.url)
        ),
      },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'json'],
      exclude: [
        'vitest.config.ts',
        '**/*.config.*',
        'src/utils',
        '__mocks__',
        ...coverageConfigDefaults.exclude,
      ],
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80,
      },
    },
    setupFiles: ['vitest.setup.ts'],
    watch: false,
  },
})
