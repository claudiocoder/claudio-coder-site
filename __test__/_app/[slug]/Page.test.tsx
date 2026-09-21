import { beforeEach, describe, expect, it, vi } from 'vitest'
import { notFound } from 'next/navigation'
import { render, screen } from '@testing-library/react'
import BlogPage from '../../../src/app/[slug]/page'
import { getPostBySlug } from '@/lib/mdx'

vi.mock('@/lib/mdx', async importOriginal => ({
  ...(await importOriginal<typeof import('@/lib/mdx')>()),
  getPostBySlug: vi.fn(),
}))

describe('PageSlug', () => {
  beforeEach(async () => {
    vi.clearAllMocks()
    const actual =
      await vi.importActual<typeof import('@/lib/mdx')>('@/lib/mdx')
    vi.mocked(getPostBySlug).mockImplementation(actual.getPostBySlug)
  })

  it('Should render', async () => {
    const jsx = await BlogPage({
      params: Promise.resolve({ slug: 'resources_developers' }),
    })
    const component = render(jsx)
    expect(component).toBeDefined()
    expect(getPostBySlug).toHaveBeenCalledWith('resources_developers')
    expect(notFound).not.toHaveBeenCalled()
  })

  it('Should render the post meta and content', async () => {
    vi.mocked(getPostBySlug).mockResolvedValueOnce({
      meta: {
        title: 'Test title',
        date: '2024-01-15T12:00:00',
        author: 'Test author',
        thumbnailUrl: '/blog/test.png',
        description: 'Test description',
        slug: 'test',
      },
      content: <p>Test content</p>,
    } as Awaited<ReturnType<typeof getPostBySlug>>)

    render(await BlogPage({ params: Promise.resolve({ slug: 'test' }) }))

    expect(screen.getByRole('heading', { name: 'Test title' })).toBeTruthy()
    expect(screen.getByText('Test author')).toBeTruthy()
    expect(screen.getByText('January 15, 2024')).toBeTruthy()
    expect(screen.getByText('Test content')).toBeTruthy()
    expect(screen.getByText('Compartir en X')).toBeTruthy()
  })

  it('Should call notFound when the post has no meta', async () => {
    vi.mocked(getPostBySlug).mockResolvedValueOnce({
      meta: undefined,
      content: undefined,
    } as unknown as Awaited<ReturnType<typeof getPostBySlug>>)

    await BlogPage({ params: Promise.resolve({ slug: 'missing' }) })

    expect(notFound).toHaveBeenCalledTimes(1)
  })
})
