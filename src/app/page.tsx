import { Metadata } from 'next'
import PostCard from '@/components/PostCard'
import { getAllPostsMeta } from '@/lib/mdx'

export const metadata: Metadata = {
  title: `Claudio's Page`,
  description: 'Claudio Coder Blog',
  icons: {
    icon: 'images/favicon.ico',
  },
}

const Home = async () => {
  const posts = await getAllPostsMeta()
  return (
    <>
      <div className='sm:m-8 mx-4 my-2'>
        <h1 className='mb-6 sm:mb-8 text-3xl font-black'>Blog</h1>
        <div className='flex flex-wrap gap-5 justify-center mx-auto lg:justify-start'>
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
