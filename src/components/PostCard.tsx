import Link from 'next/link'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import { _roboto } from '@/lib/utils/fonts'
import { Blog } from '@/lib/models/Blog'
import { widthCard } from '@/constants'

const PostCard = (post: Blog) => {
  return (
    <Link href={post.slug as string}>
      <div className='flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-80 lg:w-96'>
        <div className='m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center'>
          <Image
            width={widthCard}
            height={widthCard}
            src={post.thumbnailUrl as string}
            className='w-full h-full object-cover'
            alt={post.title as string}
          />
        </div>
        <div className='p-6 text-left'>
          <h4
            className={`${_roboto.className} mb-1 text-xl font-semibold text-slate-800`}
          >
            {post.title as string}
          </h4>
          <p className='text-base text-slate-600 mt-4 font-light text-end'>
            {format(parseISO(post.date as string), 'MMMM dd, yyyy')}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
