import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import Footer from '@/components/Footer'
import { Mdx } from '@/components/Mdx'
import metadata from '@/utils/metadata'

type Props = {
  params: {
    slug: string
  }
}

const getDocFromParams = ({ params }: Props) => {
  const doc = allBlogs.find((doc) => doc.slug === params.slug)

  return doc ?? null
}

export const generateMetadata = async ({ params }: Props) => {
  const doc = await getDocFromParams({ params })
  if (!doc) {
    return {}
  }
  return metadata({
    title: doc.title,
    description: doc.description,
    path: `/${doc.slug}`,
    image: `/${doc.thumbnailUrl}`,
  })
}

const BlogPage = async ({ params }: Props) => {
  const post = await getDocFromParams({ params })

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col my-8 sm:px-[5%]">
      <div className="sm:pl-[5%] sm:pr-[15%] mb-4 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl font-black">{post.title}</h1>
        <time dateTime={post.date} className="my-2 block text-sm w-full text-gray-600 text-left">
          {format(parseISO(post.date), 'MMMM dd, yyyy')}
        </time>
        <p className="text-gray-500 italic text-sm">{post.author}</p>
      </div>
      <div className="sm:pl-[5%] sm:pr-[15%] h-[70vh] mb-4 overflow-auto">
        <Mdx code={post.body.code} />
      </div>
      <div className="pt-6 pl-[5%]">
        <Footer />
      </div>
    </div>
  )
}

export default BlogPage
