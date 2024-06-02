import { describe, expect, it } from 'vitest'
import BlogPage from '../../src/app/[slug]/page'
import { render } from '@testing-library/react'

describe('PageSlug', () => {
  it('Should render', async () => {
    const jsx = await BlogPage({
      params: { slug: 'resources_developers' },
    })
    const component = render(jsx)
    expect(component).toBeDefined()
  })
})
