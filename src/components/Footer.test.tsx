import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('should render', () => {
    const component = render(<Footer />)
    expect(component).toBeDefined()
  })
  it('should provide a link back to the blog', () => {
    render(<Footer />)
    expect(
      screen.getByRole('link', { name: /volver al blog/i }).getAttribute('href')
    ).toBe('/')
  })
})
