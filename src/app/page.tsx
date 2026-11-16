import { Metadata } from 'next'
import PostCard from '@/components/PostCard'
import { getAllPostsMeta } from '@/lib/mdx'
import Image from 'next/image'
import SocialNetwork from '@/components/SocialNetworkContainer'

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
      <div className='journal-shell'>
        <section className='journal-hero'>
          <div className='hero-copy'>
            <h1>
              ¡Hola, soy Claudio!&nbsp;<span className='wave'>👋</span>
            </h1>
            <p className='hero-role'>Desarrollador de software</p>
            <p>
              Comparto lo que aprendo trabajando en desarrollo web y móvil:
              experiencias reales, decisiones y lecciones del día a día.
            </p>
            <div className='hero-social'>
              <SocialNetwork />
            </div>
          </div>
          <div className='hero-art'>
            <Image
              src='/blog/profile.JPEG'
              alt='Retrato de Claudio'
              width={2098}
              height={1498}
              loading='eager'
              sizes='(min-width: 768px) 35vw, 80vw'
            />
          </div>
        </section>
        <div className='journal-content'>
          <section id='articulos' className='articles-section'>
            <div className='section-heading'>
              <h2>Artículos</h2>
            </div>
            <div className='post-grid'>
              {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home
