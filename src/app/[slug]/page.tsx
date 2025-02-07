import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import Footer from '@/components/Footer'
import SocialMediaScripts from '@/components/SocialMediaScripts'
import { getPostBySlug } from '@/lib/mdx'

interface BlogPageProps {
  slug: string
}
const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

const BlogPage = async (props: { params: Promise<BlogPageProps> }) => {
  const params = await props.params;
  const { content, meta } = await getPageContent(params.slug as string)

  if (!meta) {
    return notFound()
  }

  return (
    <div className='flex flex-col my-8 sm:px-[5%]'>
      <div className='mx-4'>
        <div className='sm:pl-[5%] sm:pr-[15%] mb-4 sm:mb-8'>
          <h1 className='text-2xl sm:text-4xl font-black'>{meta.title}</h1>
          <time
            dateTime={meta.date}
            className='my-2 block text-sm w-full text-gray-600 text-left'
          >
            {format(parseISO(meta.date), 'MMMM dd, yyyy')}
          </time>
          <p className='text-gray-500 italic text-sm'>{meta.author}</p>

          <div className='my-2'>
            <a
              href='https://twitter.com/share?ref_src=twsrc%5Etfw'
              className='twitter-share-button'
              data-show-count='false'
            >
              <span>Compartir en X</span>
            </a>
          </div>
        </div>
        <div className='sm:pl-[5%] sm:pr-[15%] mb-[10%]'>
          <div>{content}</div>
        </div>
      </div>
      <div className='border-t-2 border-solid py-5 px-4 fixed bg-white w-full bottom-0'>
        <Footer />
      </div>
      <SocialMediaScripts />
    </div>
  )
}

export default BlogPage
