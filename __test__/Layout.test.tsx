import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Layout from '../src/app/layout'

describe('Layout', () => {
  it('should render the layout', () => {
    render(
      <Layout>
        <h1>Layout Testing</h1>
      </Layout>
    )
    expect(screen.getByText('Layout Testing')).toBeTruthy()
  })
})
