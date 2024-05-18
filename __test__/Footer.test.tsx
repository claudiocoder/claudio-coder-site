import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../src/components/Footer'

describe('Footer', () => {
  it('should render', () => {
    const component = render(<Footer />)
    expect(component).toBeDefined()
  })
  it('should render regresar label', () => {
    render(<Footer />)
    expect(screen.getByText('Regresar')).toBeDefined()
  })
})
