import { describe, expect, it } from 'vitest'
import BlogPage, { generateMetadata } from '../../../src/app/[slug]/page'
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

describe('generateMetadata', () => {
  it('Should return metadata', async () => {
    const metadata = await generateMetadata({
      params: { slug: 'resources_developers' },
    })
    expect(metadata).toEqual({
      description:
        'Mis 5 Sitios Favoritos para Aprender Programación | @claudio_coder',
      openGraph: {
        description:
          'Mis 5 Sitios Favoritos para Aprender Programación | @claudio_coder',
        images: 'https://claudiocoder.me/profile.jpg',
        locale: 'es',
        siteName: 'claudiocoder.me',
        title: 'Mis 5 Sitios Favoritos para Aprender Programación',
        url: 'https://claudiocoder.me/resources_developers',
      },
      title: 'Mis 5 Sitios Favoritos para Aprender Programación',
      twitter: {
        card: 'summary_large_image',
        description:
          'Mis 5 Sitios Favoritos para Aprender Programación | @claudio_coder',
        images: 'https://claudiocoder.me/profile.jpg',
        title: 'Mis 5 Sitios Favoritos para Aprender Programación',
      },
    })
  })
})
