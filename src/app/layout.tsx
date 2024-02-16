import { _roboto } from '@/utils/fonts'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/globals.css'
import ProfileContainer from '@/components/ProfileContainer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
config.autoAddCss = false

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={_roboto.className}>
        <div className='my-4 lg:p-5 lg:pl-5 h-screen'>
          <div className='flex flex-col lg:flex-row column w-full'>
            <div className='w-full lg:w-1/5 flex justify-center mb-4'>
              <ProfileContainer />
            </div>
            <div className='w-full lg:w-4/5 flex justify-center lg:justify-start'>
              <div className='w-[100%]'>{children}</div>
            </div>
          </div>
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
