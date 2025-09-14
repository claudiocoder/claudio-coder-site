import Link from 'next/link'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import { _roboto } from '@/lib/utils/fonts'
import { Blog } from '@/lib/models/Blog'

const PostCard = (post: Blog) => {
  return (
    <Link href={post.slug as string}>
      <div className='w-[100%] lg:w-[350px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-md flex flex-col items-center bg-slate-50 rounded-l-lg'>
        <div className='rounded-lg'>
          <Image
            width={350}
            height={350}
            src={post.thumbnailUrl as string}
            alt={post.title as string}
            className='rounded-md object-cover max-h-[300px] '
          />
        </div>
        <div className='flex flex-col items-start justify-between px-3 w-full h-full'>
          <h2
            className={`${_roboto.className} my-5 text-base sm:text-2xl font-bold w-full text-left`}
          >
            {post.title as string}
          </h2>
          <time
            dateTime={post.date as string}
            className='mb-2 block text-xs w-full text-gray-600 text-right'
          >
            {format(parseISO(post.date as string), 'MMMM dd, yyyy')}
          </time>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
