import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import Footer from '@/components/Footer'
import SocialMediaScripts from '@/components/SocialMediaScripts'
import { getPostBySlug } from '@/lib/mdx'
import Link from 'next/link'
import 'highlight.js/styles/atom-one-dark.css'

interface BlogPageProps {
  slug: string
}
const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

const BlogPage = async ({ params }: { params: Promise<BlogPageProps> }) => {
  const { slug } = await params
  const { content, meta } = await getPageContent(slug as string)

  if (!meta) {
    return notFound()
  }

  return (
    <div className='article-shell'>
      <div className='article-top'>
        <Footer />
      </div>
      <article className='article-page'>
        <header className='article-header'>
          <h1>{meta.title}</h1>
          <time dateTime={meta.date} className='article-date'>
            {format(parseISO(meta.date), 'MMMM dd, yyyy')}
          </time>
          <p className='article-author'>{meta.author}</p>

          <div className='my-2'>
            <Link
              href='https://twitter.com/share?ref_src=twsrc%5Etfw'
              className='twitter-share-button'
              data-show-count='false'
            >
              <span>Compartir en X</span>
            </Link>
          </div>
        </header>
        <div className='article-content'>{content}</div>
      </article>
      <SocialMediaScripts />
    </div>
  )
}

export default BlogPage
