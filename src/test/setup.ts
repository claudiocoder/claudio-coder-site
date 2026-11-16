import { vi } from 'vitest'

vi.mock(
  '@fortawesome/fontawesome-svg-core',
  () => import('./mocks/fontawesome-svg-core')
)
vi.mock('next/font/google', () => import('./mocks/next-font-google'))
vi.mock('next/navigation', () => import('./mocks/next-navigation'))
