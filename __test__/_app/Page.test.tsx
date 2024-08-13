import { describe, expect, it } from 'vitest'
import Home from '../../src/app/page'
import { render, screen } from '@testing-library/react'

describe('Page', () => {
  it('should render', async () => {
    const jsx = await Home()
    expect(jsx).toBeDefined()
  })
  it('should render blog title', async () => {
    const jsx = await Home()
    render(jsx)
    expect(screen.getByText('Blog')).toBeDefined()
  })
})
