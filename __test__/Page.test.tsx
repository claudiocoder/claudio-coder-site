import { describe, expect, it } from 'vitest'
import Page from '../src/app/page'
import { render, screen } from '@testing-library/react'

describe('Page', () => {
  it('should render', () => {
    const component = render(<Page />)
    expect(component).toBeDefined()
  })
  it('should render blog title', () => {
    render(<Page />)
    expect(screen.getByText('Blog')).toBeDefined()
  })
})