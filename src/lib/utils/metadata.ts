import { Metadata } from 'next'

interface MetadataProps {
  title: string
  description: string
  path: string
  image?: string
}

const webUrl = 'https://claudiocoder.me'

const defaultImage = `/profile.jpg`

export default function metadata(props: MetadataProps): Metadata {
  const { title, description: desc, path } = props

  const description = desc + ' | @claudio_coder'

  const images = webUrl + defaultImage

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: webUrl + path,
      siteName: 'claudiocoder.me',
      images,
      locale: 'es',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  }
}
