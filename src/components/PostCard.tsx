import Link from 'next/link'
import Image from 'next/image'
import { Blog } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { _roboto } from '@/utils/fonts'

const PostCard = (post: Blog) => {
  return (
    <div className="mb-8 w-[250px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-md p-3 pt-5 flex flex-col items-center">
      <Image width={200} height={200} src={post.thumbnailUrl} alt={post.title} className=" text-center mb-4" />
      <h2 className={`${_roboto.className} mb-5 text-xl font-bold w-full text-left px-2`}>
        <Link href={post.slug}>{post.title}</Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs w-full text-gray-600 text-right">
        {format(parseISO(post.date), 'MMMM dd, yyyy')}
      </time>
    </div>
  )
}

export default PostCard
