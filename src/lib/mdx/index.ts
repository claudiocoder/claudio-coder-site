import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { Blog } from '../models/Blog'
import { MDXComponents } from '@/components/Mdx'

const rootDirectory = path.join(process.cwd(), 'src', 'content', 'blog')
export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { frontmatter, content } = await compileMDX<Blog>({
    source: fileContent,
    components: MDXComponents,
    options: { parseFrontmatter: true },
  })

  return { meta: { ...frontmatter, slug: realSlug }, content }
}

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory)

  const posts = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file)
    posts.push(meta)
  }

  return posts
}
