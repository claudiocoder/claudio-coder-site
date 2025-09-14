import Link from 'next/link'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import { _roboto } from '@/lib/utils/fonts'
import { Blog } from '@/lib/models/Blog'
import { heightCard, widthCard } from '@/constants'

const PostCard = (post: Blog) => {
  return (
    <div className='flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-80 lg:w-96'>
      <Link
        href={post.slug as string}
        aria-label={`Read more about ${post.title}`}
      >
        <div className='m-2.5 overflow-hidden rounded-md flex justify-center items-center'>
          <Image
            width={widthCard}
            height={heightCard}
            src={post.thumbnailUrl as string}
            className='w-full h-full object-cover'
            alt={post.title as string}
          />
        </div>
        <div className='p-6 flex flex-col justify-between'>
          <h4
            className={`${_roboto.className} mb-1 text-xl font-semibold text-slate-800 text-left`}
          >
            {post.title as string}
          </h4>
          <time
            className='w-full text-base text-slate-600 mt-4 font-light text-right'
            dateTime={post.date as string}
          >
            {format(parseISO(post.date as string), 'MMMM dd, yyyy')}
          </time>
        </div>
      </Link>
    </div>
  )
}

export default PostCard
