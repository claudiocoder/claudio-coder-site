import { useMDXComponent } from 'next-contentlayer/hooks'

interface Props {
  code: string
}

const components = {
  a: ({ ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a target="_blank" rel="noopener" {...props} className={'text-blue-500 text-xl'} />
  ),
}

export function Mdx({ code }: Props) {
  const Component = useMDXComponent(code)

  return (
    <div className="prose prose-slate flex-1">
      <Component components={components} />
    </div>
  )
}
