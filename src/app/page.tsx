import { Metadata } from 'next'
import { allBlogs } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import PostCard from '@/components/PostCard'

export const metadata: Metadata = {
  title: `Claudio's Page`,
  description: 'Claudio Coder Blog',
  icons: {
    icon: 'images/favicon.ico',
  },
}

export default function Home() {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <>
      <div className='sm:m-8'>
        <h1 className='mb-6 sm:mb-8 text-3xl font-black'>Blog</h1>
        <div className='flex flex-wrap gap-5'>
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </>
  )
}
