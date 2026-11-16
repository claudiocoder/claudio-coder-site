import Image from 'next/image'
import Link from 'next/link'

export const MDXComponents = {
  a: ({ ...props }) => (
    <Link
      href={props.href}
      target='_blank'
      rel='noopener'
      {...props}
      className={'article-link'}
    />
  ),
  p: ({ ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} />
  ),
  blockquote: ({ ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote {...props} className={'article-quote'} />
  ),
  img: ({ ...props }) => {
    return (
      <Image
        height={500}
        width={500}
        src={props.src}
        alt={props.alt}
        {...props}
        className={
          'mx-auto shadow-[0_5px_15px_rgba(0,0,0,0.35)] mb-2 rounded-lg'
        }
      />
    )
  },
  h1: ({ ...props }) => <h1 {...props} className={'text-3xl font-bold'} />,
}
