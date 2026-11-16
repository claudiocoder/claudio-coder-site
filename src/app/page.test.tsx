import { describe, expect, it } from 'vitest'
import Home from './page'
import { render, screen } from '@testing-library/react'

describe('Page', () => {
  it('should render', async () => {
    const jsx = await Home()
    expect(jsx).toBeDefined()
  })
  it('should render the article section', async () => {
    const jsx = await Home()
    render(jsx)
    expect(screen.getByRole('heading', { name: 'Artículos' })).toBeDefined()
  })
})
