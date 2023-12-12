import { _roboto } from '@/utils/fonts'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/globals.css'
import ProfileContainer from '@/components/ProfileContainer'
config.autoAddCss = false

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={_roboto.className}>
        <div className="p-5 sm:pl-5 h-screen">
          <div className="flex flex-col sm:flex-row column w-full">
            <div className="w-full sm:w-1/5 flex justify-center mb-8">
              <ProfileContainer />
            </div>
            <div className="w-full sm:w-4/5 flex justify-center sm:justify-start">
              <div className="w-[100%]">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
