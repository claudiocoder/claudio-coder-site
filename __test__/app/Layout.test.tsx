import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Layout from '../../src/app/layout'

describe('Layout', () => {
  it('should render layout', () => {
    const component = render(<Layout>
      <h1>Layout Testing</h1>
    </Layout>)
    expect(component).toBeDefined()
  })

  it('should render child element', () => {
    render(
      <Layout>
        <h1>Layout Testing</h1>
      </Layout>
    )
    expect(screen.getByText('Layout Testing')).toBeDefined()
  })
})
