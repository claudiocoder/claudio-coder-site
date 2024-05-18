import { coverageConfigDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      exclude: ['vitest.config.ts',  '**/*.config.*', 'src/utils', ...coverageConfigDefaults.exclude ],	
    },
    setupFiles: ['vitest.setup.ts'],
    watch: false,
  },
})