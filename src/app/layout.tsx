import { _roboto } from '@/lib/utils/fonts'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/globals.css'
import Link from 'next/link'
import { Analytics } from '@vercel/analytics/next'
config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={_roboto.className}>
        <header className='site-header'>
          <div className='site-header-inner'>
            <Link className='site-brand' href='/'>
              <span className='brand-mark' aria-hidden='true'>
                C
              </span>
              Claudio Coder
            </Link>
            <Link className='header-link' href='/'>
              Blog
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
