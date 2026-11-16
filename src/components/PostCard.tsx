import Link from 'next/link'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import { _roboto } from '@/lib/utils/fonts'
import { Blog } from '@/lib/models/Blog'
import { heightCard, widthCard } from '@/constants'

const PostCard = (post: Blog) => {
  return (
    <article className='post-card group'>
      <Link
        href={post.slug as string}
        className='flex h-full flex-col rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-800'
      >
        <div className='aspect-[4/3] overflow-hidden bg-slate-100'>
          <Image
            width={widthCard}
            height={heightCard}
            src={post.thumbnailUrl as string}
            className='h-full w-full object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.03] motion-reduce:group-hover:scale-100'
            alt=''
            sizes='(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw'
          />
        </div>
        <div className='flex flex-1 flex-col gap-5 p-5 sm:p-6'>
          <h2
            className={`${_roboto.className} text-xl font-bold leading-snug text-slate-800`}
          >
            {post.title as string}
          </h2>
          <time
            className='mt-auto text-sm text-slate-600'
            dateTime={post.date as string}
          >
            {format(parseISO(post.date as string), 'MMMM dd, yyyy')}
          </time>
        </div>
      </Link>
    </article>
  )
}

export default PostCard
